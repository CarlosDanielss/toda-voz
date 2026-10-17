---
titulo: "0005: Monorepo com memória em context/"
descricao: Um único repositório com o código, o conteúdo, o site e a memória do projeto em context/.
atualizado: 2026-10-17
status: aceita
data: 2026-10-17
---

# 0005: Monorepo com memória em `context/`

## Contexto
O projeto terá várias partes: núcleo em Rust, app Android, web, site, estúdio de voz, conteúdo e hardware. Elas compartilham decisões, formatos e documentação. Carlos quer um lugar único onde pessoas **e IAs** encontrem o objetivo, as decisões, as descobertas e as referências.

## Decisão
- **Um monorepo** chamado `toda-voz`, com `apps/`, `core/`, `content/`, `tools/` e `hardware/`.
- **`context/`** é a memória viva do projeto, com o índice em `context/README.md`. O `AGENTS.md` da raiz manda as IAs começarem por lá.
- **Ferramentas:** pnpm workspaces para a parte em JavaScript/TypeScript. Um workspace Cargo entra em `core/` quando surgir o código Rust.
- **Git** inicializado localmente. A hospedagem pública ainda não foi decidida ([perguntas-abertas](../perguntas-abertas.md)).

## Alternativas consideradas
- **Vários repositórios:** a documentação e as decisões ficariam espalhadas, e fica mais difícil manter tudo coerente.

## Consequências
- Toda mudança relevante atualiza o `context/` no mesmo pull request.
- O site lê o `context/` direto ([0006](0006-landing-page-astro.md)).
- O repositório pode crescer com mídia (vídeos de Libras). Avaliar Git LFS ou um armazenamento separado de conteúdo quando isso acontecer.

## Referências
Ver [arquitetura](../arquitetura.md#estrutura-do-monorepo).
