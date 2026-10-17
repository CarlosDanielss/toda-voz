// Plugin rehype do site Toda Voz.
// 1. Converte links entre arquivos .md do context/ em rotas do site.
//    Ex.: "decisoes/0004-licenca.md#x" -> "/decisoes/0004-licenca/#x"
// 2. Transforma códigos de referência como [V3] ou [E23–E26] em notas pequenas
//    que levam até a fonte em /contexto/referencias/.
// 3. Na lista de referências, dá a cada item que começa com [X12] o id "ref-x12".
import path from 'node:path';

const REFERENCIAS = '/contexto/referencias/';
const ROTAS_ESPECIAIS = { roteiro: '/roteiro/', readme: '/contexto/' };

/** @param {string} rel caminho relativo a context/, sem âncora */
function routeFor(rel) {
  const parts = rel.split('/');
  const slug = (parts.at(-1) ?? '').replace(/\.md$/i, '').toLowerCase();

  if (parts.length === 1) return ROTAS_ESPECIAIS[slug] ?? `/contexto/${slug}/`;
  const [dir] = parts;
  if (dir === 'decisoes' || dir === 'modulos') return slug === 'readme' ? `/${dir}/` : `/${dir}/${slug}/`;
  if (dir === 'pesquisa') return '/pesquisa/';
  return null;
}

const CODIGO = String.raw`[A-Z]\d+(?:[–-][A-Z]?\d+)?`;
const CITACAO = new RegExp(String.raw`\[(${CODIGO}(?:,\s*${CODIGO})*)\]`, 'g');
const INICIO_REF = /^\[([A-Z]\d+)\]\s*/;

const texto = (value) => ({ type: 'text', value });
const el = (tagName, properties, children) => ({ type: 'element', tagName, properties, children });

/** Monta <sup class="cite"> com um link por código. */
function nota(grupo) {
  const codigos = grupo.split(/,\s*/);
  const filhos = [];
  codigos.forEach((codigo, i) => {
    const primeiro = codigo.split(/[–-]/)[0];
    const faixa = codigo.includes('–') || codigo.includes('-');
    const rotulo = faixa ? `Referências ${codigo.replace(/[–-]/, ' a ')}` : `Referência ${codigo}`;
    if (i > 0) filhos.push(texto(' '));
    filhos.push(el('a', { href: `${REFERENCIAS}#ref-${primeiro.toLowerCase()}`, ariaLabel: rotulo }, [texto(codigo)]));
  });
  return el('sup', { className: ['cite'] }, filhos);
}

/** Divide um nó de texto em texto + notas. Retorna null se não houver código. */
function dividir(value) {
  CITACAO.lastIndex = 0;
  if (!CITACAO.test(value)) return null;
  CITACAO.lastIndex = 0;
  const out = [];
  let fim = 0;
  for (const m of value.matchAll(CITACAO)) {
    if (m.index > fim) out.push(texto(value.slice(fim, m.index)));
    out.push(nota(m[1]));
    fim = m.index + m[0].length;
  }
  if (fim < value.length) out.push(texto(value.slice(fim)));
  return out;
}

/** Primeiro nó de texto dentro de um elemento (atravessa <p> de listas "soltas"). */
function primeiroTexto(node) {
  for (const child of node.children ?? []) {
    if (child.type === 'text') return child.value.trim() ? { node: child, parent: node } : null;
    if (child.type === 'element') return primeiroTexto(child);
  }
  return null;
}

/** @param {{ contextDir: string }} options */
export default function rehypeContextLinks({ contextDir }) {
  const root = path.resolve(contextDir);

  return (/** @type {any} */ tree, /** @type {any} */ file) => {
    const source = file?.path ?? file?.history?.[0];
    const baseDir = source ? path.dirname(path.resolve(source)) : root;

    /** @param {any} node */
    const visitar = (node) => {
      if (node.type !== 'element' && node.type !== 'root') return;
      if (node.type === 'element' && ['code', 'pre', 'a', 'script', 'style'].includes(node.tagName)) {
        if (node.tagName === 'a') ajustarLink(node);
        return;
      }

      // Item de lista que começa com [X12]: vira âncora da referência.
      if (node.type === 'element' && node.tagName === 'li') {
        const alvo = primeiroTexto(node);
        const m = alvo?.node.value.trimStart().match(INICIO_REF);
        if (alvo && m) {
          node.properties = { ...node.properties, id: `ref-${m[1].toLowerCase()}` };
          const resto = alvo.node.value.trimStart().slice(m[0].length);
          const idx = alvo.parent.children.indexOf(alvo.node);
          alvo.parent.children.splice(idx, 1, el('span', { className: ['ref-code'] }, [texto(m[1])]), texto(' ' + resto));
        }
      }

      const novos = [];
      for (const child of node.children ?? []) {
        if (child.type === 'text') {
          const partes = dividir(child.value);
          if (partes) {
            novos.push(...partes);
            continue;
          }
        } else {
          visitar(child);
        }
        novos.push(child);
      }
      if (node.children) node.children = novos;
    };

    /** @param {any} node */
    const ajustarLink = (node) => {
      const href = node.properties?.href;
      if (typeof href !== 'string' || /^[a-z]+:|^\/|^#/i.test(href)) return;
      const [target, hash] = href.split('#');
      if (!target.toLowerCase().endsWith('.md')) return;
      const rel = path.relative(root, path.resolve(baseDir, target)).split(path.sep).join('/');
      if (rel.startsWith('..')) return;
      const route = routeFor(rel);
      if (route) node.properties.href = hash ? `${route}#${hash}` : route;
    };

    visitar(tree);
  };
}
