---
titulo: "0013: Identidade visual e acessibilidade do site"
descricao: shadcn/ui com Tailwind, paleta moderna violeta e ciano conferida automaticamente, fonte de alta legibilidade e tema claro/escuro.
atualizado: 2026-10-17
status: aceita
data: 2026-10-17
---

# 0013: Identidade visual e acessibilidade do site

## Contexto
O Carlos pediu um site inspirado no shadcn/ui, com foco em acessibilidade de texto e tema claro e escuro: segue o sistema, mas a pessoa pode trocar.

A primeira paleta, verde-azulado com âmbar e fundo creme, foi recusada. Ficou com cara antiga. O pedido passou a ser algo **moderno, minimalista, inovador e criativo**, usando o shadcn/ui de verdade e mantendo a acessibilidade como prioridade.

A pesquisa mostrou que o shadcn padrão não atende bem o nosso público [D6]:
- o contorno de foco tem contraste de cerca de 2,6:1;
- os textos pequenos usam 12 a 14px;
- os botões têm 36px de altura.

Quem tem baixa visão, dislexia, afasia ou deficiência intelectual precisa de mais [D1–D4].

## Decisão
- **Usar o shadcn/ui de verdade**, com React e Tailwind CSS v4. Os componentes ficam em `apps/site/src/components/ui/` e são **ajustados para acessibilidade**:
  - botões com 44px ou mais;
  - foco sólido de 3px;
  - selos maiores;
  - títulos de card como `<h3>`;
  - tabelas que quebram linha.
- **Os componentes viram HTML no build.** O site não manda JavaScript do React para o navegador.
- **Paleta:**
  - base neutra quase branca ou quase preta;
  - **violeta elétrico** como cor principal;
  - **gradiente violeta → ciano** como assinatura, usado com moderação;
  - cores de situação sempre com ícone e texto.

  Tudo em `apps/site/src/styles/tokens.css`, documentado em [identidade-visual](../identidade-visual.md).
- **Contraste conferido no build** (`scripts/check-contrast.mjs`):
  - 7:1 no texto;
  - 3:1 em bordas e foco;
  - as duas pontas do gradiente com pelo menos 4,5:1 sobre o fundo;
  - todas as cores dentro do sRGB.

  Se algo falhar, o site não é gerado.
- **Fonte Atkinson Hyperlegible Next** (SIL OFL 1.1), hospedada no próprio site [D7].
- **Texto:**
  - base de 18px;
  - entrelinha de 1,6;
  - linhas de até cerca de 68 caracteres;
  - alinhado à esquerda;
  - ênfase em negrito, nunca em itálico.
- **Tema:** uma classe `.dark` ou `.light` no `<html>`, como no shadcn. Ela é aplicada por um script mínimo no começo da página, com a escolha salva ou o tema do sistema.
  - **Botão:** alterna entre claro e escuro e sempre diz a ação ("Usar tema escuro" / "Usar tema claro"). A troca é anunciada para leitores de tela.
  - **Rodapé:** "Voltar a seguir o tema do sistema", visível depois que a pessoa escolhe.
  - Sem JavaScript, o site segue o sistema [D5].
  - **Revisado em 17/10/2026:** o ciclo Sistema → Claro → Escuro foi descartado porque confundia.
- **Cabeçalho compacto** (64px) e fixo, no estilo do shadcn:
  - logo, links discretos com a página atual sublinhada, versão e botão de tema;
  - no celular, os links ficam num **Menu** feito com `<details>`, que funciona sem JavaScript e pelo teclado.

## Alternativas consideradas
- **Paleta verde-azulada com âmbar e fundo creme:** acessível, mas recusada por não passar a sensação de inovação.
- **Visual do shadcn imitado em CSS puro, sem React:** mais leve, mas mais trabalho para manter igual ao original. Como os componentes são gerados no build, usar o shadcn de verdade não pesa para quem visita.

## Consequências
- O site passa a depender de React, Tailwind, radix-ui, class-variance-authority, clsx, tailwind-merge e lucide-react. Todas têm licença MIT, compatível com a AGPL.
- Ao atualizar componentes pelo `shadcn` CLI, é preciso **reaplicar os ajustes de acessibilidade** (estão comentados em cada arquivo) e conferir os imports. Na instalação, a CLI tentou importar `cn` de um pacote npm desconhecido; isso foi corrigido para `@/lib/utils`.
- Mudar uma cor exige rodar `pnpm build` e atualizar [identidade-visual](../identidade-visual.md).
- **O logo ainda não existe.** O prompt atualizado está em [identidade-visual](../identidade-visual.md#logo).

## Referências
[D1], [D2], [D3], [D4], [D5], [D6], [D7], [D8]
