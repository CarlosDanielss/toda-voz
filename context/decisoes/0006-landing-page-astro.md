---
titulo: "0006: Site em Astro, gerado a partir do context/"
descricao: O site é gerado com Astro a partir dos arquivos do context/, para que a história do projeto fique num lugar só.
atualizado: 2026-10-17
status: aceita
data: 2026-10-17
---

# 0006: Site em Astro, gerado a partir do `context/`

## Contexto
A motivação, o histórico, as descobertas, os obstáculos e o roteiro precisam aparecer no site. Se escrevêssemos tudo duas vezes, no `context/` e no site, as duas versões logo ficariam diferentes.

## Decisão
- O site fica em `apps/site` e é feito com **Astro**, gerando páginas estáticas.
- Ele lê os arquivos de `context/`, `context/modulos/` e `context/decisoes/`.
- A página inicial usa os campos do cabeçalho de cada arquivo (`resumo`, `destaques`, `principios`, `itens`, `fases`). As outras páginas mostram cada documento completo.
- O cabeçalho dos arquivos é validado. Se alguém registrar algo fora do formato, o site não é gerado e o erro aparece.
- **Componentes do shadcn/ui em React**, transformados em HTML no build ([0013](0013-identidade-visual-e-acessibilidade.md)). Nenhum JavaScript do React vai para o navegador.
- **JavaScript mínimo:** só um script pequeno para o botão de tema claro/escuro. Sem ele, o site continua funcionando e segue o tema do sistema.
- Nenhum rastreador e nenhum arquivo carregado de fora. A fonte fica dentro do próprio site.

## Alternativas consideradas
- **HTML escrito à mão:** simples, mas duplica o conteúdo.
- **Frameworks maiores:** mais pesados do que um site de conteúdo precisa.

## Consequências
- Os textos do `context/` precisam de cabeçalho válido. O modelo está em [context/README.md](../README.md).
- Links entre arquivos `.md` e códigos de referência como [V3] são convertidos automaticamente pelo plugin `apps/site/src/lib/rehype-context-links.mjs`.
- **Descoberto em 17/10/2026:**
  - na versão 7 do Astro, para usar esse tipo de plugin, foi preciso instalar o pacote `@astrojs/markdown-remark`;
  - no cabeçalho dos arquivos, textos com `: ` precisam ficar entre aspas, senão o site não é gerado.
- Pode ser hospedado de graça e não precisa de servidor.
