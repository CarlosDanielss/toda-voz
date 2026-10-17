---
titulo: "0012: Versionamento semântico, começando em 0.1.0"
descricao: O projeto usa versões no formato MAIOR.MENOR.CORREÇÃO, começa em 0.1.0 e chega a 1.0.0 com o primeiro app usável no dia a dia.
atualizado: 2026-10-17
status: aceita
data: 2026-10-17
---

# 0012: Versionamento semântico, começando em 0.1.0

## Contexto
Quem acompanha o projeto precisa saber em que ponto ele está. Uma versão clara mostra se houve mudança grande ou pequena, e um histórico de mudanças ajuda quem chega depois.

## Decisão
- Usamos **versionamento semântico** (MAIOR.MENOR.CORREÇÃO):
  - **MAIOR** muda quando algo deixa de funcionar como antes;
  - **MENOR** quando entra algo novo;
  - **CORREÇÃO** quando só corrigimos.
- **A primeira versão é 0.1.0** (17/10/2026). Ela tem a pesquisa, a memória do projeto e o site.
- Enquanto estivermos em fundação, as versões ficam em **0.x**.
- A **1.0.0** será o primeiro app que alguém consiga usar no dia a dia.
- A versão do projeto fica no `package.json` da raiz, e o site mostra o mesmo número.
- Toda versão nova ganha uma entrada no `CHANGELOG.md`, no formato "Keep a Changelog", escrita em português.

## Alternativas consideradas
- **Versão por data (ex.: 2026.10):** mostra quando, mas não mostra o tamanho da mudança.
- **Começar em 0.0.1:** daria a impressão de que nada foi feito ainda.

## Consequências
- Ao fechar um conjunto de mudanças, atualizar a versão no `package.json` e escrever o `CHANGELOG.md`.
- Cada parte do monorepo (app, núcleo, site) pode ter versão própria no futuro. Por enquanto, a versão é uma só.
