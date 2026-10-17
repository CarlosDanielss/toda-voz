# apps/site

Site do Toda Voz, feito com **Astro + shadcn/ui (React + Tailwind CSS v4)**. O conteúdo vem direto da pasta [`context/`](../../context/README.md) ([decisão 0006](../../context/decisoes/0006-landing-page-astro.md)). O visual segue a [identidade visual](../../context/identidade-visual.md) ([decisão 0013](../../context/decisoes/0013-identidade-visual-e-acessibilidade.md)).

```bash
pnpm install                              # na raiz do repositório
pnpm dev                                  # abre em http://localhost:4321
pnpm build                                # confere o contraste e gera dist/
pnpm --filter @toda-voz/site contraste    # só a checagem de contraste
pnpm --filter @toda-voz/site paleta       # imprime a paleta em markdown
```

## Como está organizado
| Arquivo | Para que serve |
|---|---|
| `src/content.config.ts` | Coleções e formato do cabeçalho dos arquivos do `context/` |
| `src/styles/tokens.css` | **Paleta** (tokens do shadcn/ui em OKLCH), temas claro e escuro |
| `src/styles/global.css` | Tailwind, tema do shadcn ligado aos tokens, estilos de texto (`.prose`), notas de referência |
| `scripts/check-contrast.mjs` | Mede o contraste WCAG de todos os pares e confere se as cores cabem em sRGB. Falha se algo estiver errado |
| `src/components/ui/` | Componentes do shadcn/ui **com ajustes de acessibilidade** (comentados em cada arquivo) |
| `src/components/Landing.tsx` | Página inicial |
| `src/components/Roadmap.tsx`, `Obstaculos.tsx`, `StatusBadge.tsx` | Roteiro, obstáculos e selos de situação |
| `src/lib/rehype-context-links.mjs` | Converte links `.md` em rotas e códigos como [V3] em notas de referência |
| `src/lib/projeto.ts` | Versão (do `package.json` da raiz), data de início, fase atual, rotas das decisões |
| `src/layouts/Base.astro` | Cabeçalho, rodapé e botão de tema (Sistema/Claro/Escuro) |
| `components.json` | Configuração do shadcn/ui |

## Regras
- **Para mudar texto, edite o `context/`**, não o site.
- Componentes React são **apenas renderizados no build**. Não use `client:*` sem uma decisão registrada: o site não deve mandar JavaScript do React para o navegador.
- **Ao adicionar ou atualizar um componente com `pnpm dlx shadcn@latest add`:**
  - confira o import de `cn`, que deve vir de `@/lib/utils`;
  - reaplique os ajustes de acessibilidade: altura mínima de 44px, foco sólido sem opacidade, textos de pelo menos `text-sm`.
- **Acessibilidade WCAG 2.2:**
  - contraste de 7:1 no texto e 3:1 em bordas e foco;
  - alvos de 44px;
  - texto base de 18px;
  - ênfase em negrito;
  - situação sempre com ícone e texto.
