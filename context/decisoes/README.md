# Decisões

Cada decisão importante fica registrada num arquivo próprio. Assim dá para saber **o que** foi decidido, **por quê**, **quais alternativas** existiam e **o que muda** com ela. Esse formato é conhecido como ADR (registro de decisão de arquitetura).

## Índice
| # | Decisão | Status | Data |
|---|---|---|---|
| [0001](0001-nome-toda-voz.md) | O nome do projeto é Toda Voz | aceita | 2026-10-17 |
| [0002](0002-piloto-portugues-libras.md) | Piloto em português do Brasil e Libras | aceita | 2026-10-17 |
| [0003](0003-offline-first.md) | Offline primeiro, com online opcional | aceita | 2026-10-17 |
| [0004](0004-licenca.md) | Código livre (AGPL-3.0) e conteúdo sem uso comercial (CC BY-NC-SA 4.0) | aceita | 2026-10-17 |
| [0005](0005-monorepo.md) | Monorepo com memória em `context/` | aceita | 2026-10-17 |
| [0006](0006-landing-page-astro.md) | Site em Astro, gerado a partir do `context/` | aceita | 2026-10-17 |
| [0007](0007-documentacao-em-portugues.md) | Documentação em português | aceita | 2026-10-17 |
| [0008](0008-sem-dependencias-que-travem.md) | Nenhuma dependência que possa travar o projeto ou passar a cobrar | aceita | 2026-10-17 |
| [0009](0009-nucleo-rust-interfaces-finas.md) | Núcleo em Rust com interfaces finas; Android como prioridade | proposta | 2026-10-17 |
| [0010](0010-ia-so-sugere.md) | IA só sugere; a pessoa confirma; sempre existe modo sem IA | proposta | 2026-10-17 |
| [0011](0011-libras-com-comunidade-surda.md) | Libras feita com a comunidade surda, com poder de veto | proposta | 2026-10-17 |
| [0012](0012-versionamento-semantico.md) | Versionamento semântico, começando em 0.1.0 | aceita | 2026-10-17 |
| [0013](0013-identidade-visual-e-acessibilidade.md) | Identidade visual e acessibilidade do site | aceita | 2026-10-17 |
| [0014](0014-logo-oficial.md) | Logo oficial: ponto, haste e arco | aceita | 2026-10-17 |

## Status possíveis
- **proposta:** sugerida, esperando validação.
- **aceita:** em vigor.
- **substituída por NNNN:** trocada por outra decisão. O arquivo antigo fica.
- **rejeitada:** pensada e descartada, com o motivo registrado.

## Modelo
Copie para `NNNN-titulo-curto.md`, usando o próximo número livre:

```markdown
---
titulo: "NNNN: Título curto"
descricao: Uma frase com a decisão.
atualizado: AAAA-MM-DD
status: proposta
data: AAAA-MM-DD
---

# NNNN: Título curto

## Contexto
Qual é o problema e o que já sabemos. Cite as descobertas e as referências.

## Decisão
O que decidimos, de forma direta.

## Alternativas consideradas
- Opção X: por que não.

## Consequências
O que fica mais fácil, o que fica mais difícil e o que precisa ser feito.

## Referências
Códigos de [referencias.md](../referencias.md).
```
