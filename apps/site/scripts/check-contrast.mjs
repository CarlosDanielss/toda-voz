// Confere o contraste (WCAG 2.x) dos pares de cores dos dois temas.
// Uso: node scripts/check-contrast.mjs [--markdown]
// Falha (exit 1) se algum par ficar abaixo do mínimo exigido.
import { readFileSync } from 'node:fs';

const css = readFileSync(new URL('../src/styles/tokens.css', import.meta.url), 'utf8');

/** @param {string} nome */
function blocos(nome) {
  const re = new RegExp(`/\\* tema:${nome} \\*/([\\s\\S]*?)/\\* fim:${nome} \\*/`, 'g');
  return [...css.matchAll(re)].map((m) => m[1].trim().replace(/\s+/g, ' '));
}

/** @param {string} bloco */
function tokens(bloco) {
  const mapa = new Map();
  for (const [, nome, l, c, h] of bloco.matchAll(/--([\w-]+):\s*oklch\(([\d.]+) ([\d.]+) ([\d.]+)\)/g)) {
    mapa.set(nome, [Number(l), Number(c), Number(h)]);
  }
  return mapa;
}

// Cores que não cabem em sRGB: o navegador ajusta, e a medida deixaria de ser confiável.
const foraDoGamut = new Set();

// OKLCH -> sRGB (0–255), segundo a definição do OKLab.
function oklchParaRgb([L, C, h]) {
  const a = C * Math.cos((h * Math.PI) / 180);
  const b = C * Math.sin((h * Math.PI) / 180);
  const l = (L + 0.3963377774 * a + 0.2158037573 * b) ** 3;
  const m = (L - 0.1055613458 * a - 0.0638541728 * b) ** 3;
  const s = (L - 0.0894841775 * a - 1.291485548 * b) ** 3;
  const linear = [
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
  ];
  if (linear.some((c) => c < -0.002 || c > 1.002)) foraDoGamut.add(`oklch(${L} ${C} ${h})`);
  return linear.map((c) => {
    const v = Math.min(1, Math.max(0, c));
    const srgb = v <= 0.0031308 ? 12.92 * v : 1.055 * v ** (1 / 2.4) - 0.055;
    return Math.round(srgb * 255);
  });
}

const hex = (rgb) => '#' + rgb.map((v) => v.toString(16).padStart(2, '0')).join('');

// Luminância relativa e razão de contraste, como definidas na WCAG 2.2.
function luminancia(rgb) {
  const [r, g, b] = rgb.map((v) => {
    const c = v / 255;
    return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
const contraste = (a, b) => {
  const [l1, l2] = [luminancia(a), luminancia(b)].sort((x, y) => y - x);
  return (l1 + 0.05) / (l2 + 0.05);
};

// [texto/elemento, fundo, mínimo, para que serve]
const pares = [
  ['foreground', 'background', 7, 'texto principal'],
  ['card-foreground', 'card', 7, 'texto em cards'],
  ['muted-foreground', 'background', 7, 'texto secundário'],
  ['muted-foreground', 'card', 7, 'texto secundário em cards'],
  ['foreground', 'muted', 7, 'texto sobre fundo suave'],
  ['muted-foreground', 'muted', 4.5, 'texto secundário sobre fundo suave'],
  ['secondary-foreground', 'secondary', 7, 'botão e selo secundários'],
  ['primary-foreground', 'primary', 4.5, 'botão principal'],
  ['primary', 'background', 4.5, 'links'],
  ['primary', 'card', 4.5, 'links em cards'],
  ['accent-foreground', 'accent', 4.5, 'destaque suave'],
  ['brand-from', 'background', 4.5, 'gradiente de texto (início)'],
  ['brand-to', 'background', 4.5, 'gradiente de texto (fim)'],
  ['brand-from', 'card', 4.5, 'gradiente de texto em cards (início)'],
  ['brand-to', 'card', 4.5, 'gradiente de texto em cards (fim)'],
  ['success', 'success-surface', 4.5, 'selo "decidido"'],
  ['warning', 'warning-surface', 4.5, 'selo "em avaliação"'],
  ['destructive', 'destructive-surface', 4.5, 'selo "descartado"'],
  ['ring', 'background', 3, 'contorno de foco'],
  ['ring', 'card', 3, 'contorno de foco em cards'],
  ['input', 'background', 3, 'bordas de controles'],
  ['primary', 'muted', 3, 'trilha do roteiro'],
];

const claros = blocos('claro');
const escuros = blocos('escuro');
if (claros.length !== 1) throw new Error('Esperado 1 bloco tema:claro em tokens.css');
if (escuros.length < 1 || escuros.some((b) => b !== escuros[0])) {
  throw new Error('Os blocos tema:escuro de tokens.css precisam existir e ser idênticos.');
}

const temas = { claro: tokens(claros[0]), escuro: tokens(escuros[0]) };
// Todas as cores (inclusive as decorativas) precisam caber em sRGB.
for (const mapa of Object.values(temas)) for (const v of mapa.values()) oklchParaRgb(v);
const markdown = process.argv.includes('--markdown');
let falhas = 0;
const linhas = [];

for (const [nomeTema, mapa] of Object.entries(temas)) {
  for (const [fg, bg, minimo, uso] of pares) {
    if (!mapa.has(fg) || !mapa.has(bg)) throw new Error(`Token ausente no tema ${nomeTema}: ${fg} ou ${bg}`);
    const razao = contraste(oklchParaRgb(mapa.get(fg)), oklchParaRgb(mapa.get(bg)));
    const ok = razao >= minimo;
    if (!ok) falhas++;
    linhas.push({ nomeTema, fg, bg, uso, razao, minimo, ok });
  }
}

if (markdown) {
  for (const [nomeTema, mapa] of Object.entries(temas)) {
    console.log(`\n### Tema ${nomeTema}\n\n| Token | OKLCH | Hex |\n|---|---|---|`);
    for (const [nome, v] of mapa) console.log(`| \`--${nome}\` | \`oklch(${v.join(' ')})\` | \`${hex(oklchParaRgb(v))}\` |`);
  }
  console.log('\n### Contraste medido\n\n| Par | Uso | Claro | Escuro | Mínimo |\n|---|---|---|---|---|');
  for (const [fg, bg, minimo, uso] of pares) {
    const [c, e] = ['claro', 'escuro'].map((t) => linhas.find((l) => l.nomeTema === t && l.fg === fg && l.bg === bg));
    console.log(`| \`${fg}\` sobre \`${bg}\` | ${uso} | ${c.razao.toFixed(2)}:1 | ${e.razao.toFixed(2)}:1 | ${minimo}:1 |`);
  }
} else {
  for (const l of linhas) {
    const marca = l.ok ? 'ok   ' : 'FALHA';
    console.log(`${marca} [${l.nomeTema}] ${l.fg} sobre ${l.bg}: ${l.razao.toFixed(2)}:1 (mín. ${l.minimo}:1, ${l.uso})`);
  }
  console.log(falhas ? `\n${falhas} par(es) abaixo do mínimo.` : `\nContraste ok: ${linhas.length} pares conferidos.`);
}

if (foraDoGamut.size) {
  console.log(`\nCores fora do sRGB (reduza a saturação): ${[...foraDoGamut].join(', ')}`);
  falhas++;
}

if (falhas) process.exit(1);
