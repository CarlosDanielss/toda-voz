// Símbolo oficial do Toda Voz (decisão 0014): ponto, haste e arco.
// O gradiente usa os tokens da marca, então acompanha o tema claro/escuro.
// É decorativo (aria-hidden): o nome "Toda Voz" vem sempre em texto ao lado ou no link.
interface Props {
  /** id único do gradiente na página (quando o símbolo aparece mais de uma vez). */
  id: string;
  className?: string;
}

export function LogoSimbolo({ id, className }: Props) {
  const grad = `logo-grad-${id}`;
  return (
    <svg className={className} viewBox="0 0 160 150" fill="none" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={grad} x1="0%" y1="20%" x2="100%" y2="80%">
          <stop offset="0%" stopColor="var(--brand-from)" />
          <stop offset="100%" stopColor="var(--brand-to)" />
        </linearGradient>
      </defs>
      <circle cx="25" cy="75" r="18" fill={`url(#${grad})`} />
      <rect x="65" y="30" width="28" height="90" rx="14" fill={`url(#${grad})`} />
      <path d="M 115 20 C 145 35 155 115 115 130" stroke={`url(#${grad})`} strokeWidth="26" strokeLinecap="round" />
    </svg>
  );
}
