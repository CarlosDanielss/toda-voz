---
titulo: Índice do context
descricao: Mapa da memória do projeto. Onde está cada assunto e como registrar decisões, descobertas e referências.
atualizado: 2026-10-17
status: vivo
ordem: 0
---

# `context/`: a memória do Toda Voz

Esta pasta guarda tudo o que sabemos e decidimos: por que o projeto existe, como chegamos até aqui, o que pesquisamos, o que foi decidido e o que vamos construir. É o primeiro lugar onde pessoas e IAs devem procurar informação. O site (`apps/site`) é gerado a partir daqui.

## Arquivos
| Arquivo | O que tem | Quando abrir |
|---|---|---|
| [objetivo-e-motivacao.md](objetivo-e-motivacao.md) | Objetivo, problema, para quem, motivação, princípios, data de início | Para entender o porquê de tudo |
| [historico.md](historico.md) | A história do projeto e o espaço "Por que comecei" | Para entender o caminho até aqui |
| [roteiro.md](roteiro.md) | Fases, marcos e a fase atual | Para saber onde estamos e o que vem depois |
| [descobertas.md](descobertas.md) | O que aprendemos, por tema, com fontes | Antes de propor algo: isso já foi pesquisado? |
| [obstaculos-e-solucoes.md](obstaculos-e-solucoes.md) | Obstáculo, possível solução e decisão | Para avaliar riscos e o que falta decidir |
| [arquitetura.md](arquitetura.md) | Camadas, linguagens, tecnologias, formatos, estrutura do repositório | Antes de escrever código ou escolher uma biblioteca |
| [identidade-visual.md](identidade-visual.md) | Paleta, tipografia, acessibilidade e o prompt do logo | Antes de mexer no visual |
| [modulos/README.md](modulos/README.md) | Os 16 módulos e como eles se ligam | Para saber o que construir |
| [decisoes/README.md](decisoes/README.md) | Todas as decisões e o modelo para registrar novas | **Antes de propor algo:** já foi decidido? |
| [referencias.md](referencias.md) | Fontes científicas e oficiais, com códigos | Para citar ou conferir uma fonte |
| [perguntas-abertas.md](perguntas-abertas.md) | O que falta decidir e confirmar | Para saber o que está em aberto |
| [glossario.md](glossario.md) | Termos técnicos, clínicos e de licença | Ao encontrar uma sigla |
| [pesquisa/pesquisa-inicial.md](pesquisa/pesquisa-inicial.md) | A pesquisa que deu origem ao projeto | Para ver os números e o detalhe |

## Onde procurar cada assunto
| Assunto | Onde |
|---|---|
| Por que o projeto existe | [objetivo-e-motivacao](objetivo-e-motivacao.md) |
| Onde estamos e versão atual | [roteiro](roteiro.md), [decisão 0012](decisoes/0012-versionamento-semantico.md), `CHANGELOG.md` na raiz |
| Quem são as pessoas e o tamanho do problema | [descobertas: O problema](descobertas.md#o-problema), [pesquisa](pesquisa/pesquisa-inicial.md) |
| Preços do mercado | [descobertas: Mercado e preços](descobertas.md#mercado-e-preços) |
| Licença e uso não comercial | [decisão 0004](decisoes/0004-licenca.md), `LICENSE-CONTENT.md` na raiz |
| Que dependências podemos usar | [decisão 0008](decisoes/0008-sem-dependencias-que-travem.md), [arquitetura](arquitetura.md) |
| Linguagens e tecnologias | [arquitetura](arquitetura.md), [decisão 0009](decisoes/0009-nucleo-rust-interfaces-finas.md) |
| Voz própria | [módulo 05](modulos/05-estudio-de-voz.md), [descobertas: Voz própria](descobertas.md#voz-própria) |
| Olhar, rosto e câmera | [módulo 03](modulos/03-acesso-entrada.md), [descobertas](descobertas.md#olhar-rosto-e-controle-do-celular) |
| Usar o celular sem as mãos | [módulo 06](modulos/06-controle-do-celular.md) |
| Libras | [módulo 07](modulos/07-libras.md), [decisão 0011](decisoes/0011-libras-com-comunidade-surda.md) |
| "Pensar e falar" | [descobertas: Interfaces cérebro-computador](descobertas.md#interfaces-cérebro-computador) |
| IA e autoria | [decisão 0010](decisoes/0010-ia-so-sugere.md), [módulo 09](modulos/09-ia-local-previsao.md) |
| Privacidade e LGPD | [módulo 13](modulos/13-privacidade-e-consentimento.md) |
| Hardware barato | [módulo 15](modulos/15-hardware-kits.md) |
| Visual, cores e acessibilidade do site | [identidade-visual](identidade-visual.md), [decisão 0013](decisoes/0013-identidade-visual-e-acessibilidade.md) |
| Comunidade | [módulo 14](modulos/14-contribuicao-comunitaria.md) |

## Códigos de referência
**G** panorama e acesso · **B** interfaces cérebro-computador · **V** voz · **E** olhar, rosto e celular · **L** Libras · **A** arquitetura, licenças e comunidade · **D** design e acessibilidade · **N** nome · **P** IA e autoria. A lista completa está em [referencias.md](referencias.md). No site, um código como [V3] vira uma nota pequena que leva até a fonte.

## Regras para escrever aqui
1. **Não citar marcas, empresas, produtos nem sites de soluções que já existem.** Descreva pelo que fazem, por exemplo "um mouse de cabeça comercial" ou "recursos gratuitos de grandes empresas de tecnologia". Em [referencias.md](referencias.md) entram só fontes científicas e oficiais. Bibliotecas técnicas que o projeto usa podem ser citadas pelo nome na [arquitetura](arquitetura.md).
2. **Escrever como gente.** Frases curtas, palavras do dia a dia, sem jargão. Negrito só no que é realmente importante. Nada de itálico para dar ênfase.
3. **Decisão nova:** crie um arquivo em `decisoes/` seguindo o modelo e atualize o índice.
4. **Descoberta nova:** registre em [descobertas.md](descobertas.md) com a data e a fonte, e inclua a fonte em [referencias.md](referencias.md).
5. **Obstáculo novo:** adicione um item no cabeçalho de [obstaculos-e-solucoes.md](obstaculos-e-solucoes.md), com obstáculo, solução e decisão.
6. **Avanço no roteiro:** marque o marco como feito em [roteiro.md](roteiro.md). Quando a fase terminar, mude o status dela e da próxima.
7. **Versão nova:** atualize o `package.json` da raiz e o `CHANGELOG.md`.
8. **Não tem certeza?** Marque com `[verificar]`.
9. **Confira o site:** rode `pnpm build`. Ele valida os cabeçalhos e o contraste das cores.

## Cabeçalho obrigatório
Todo arquivo `.md` lido pelo site (os desta pasta, os de `modulos/NN-*.md` e os de `decisoes/NNNN-*.md`) começa assim:

```yaml
---
titulo: Título do documento
descricao: Uma ou duas frases.
atualizado: 2026-10-17
status: vivo | proposta | rascunho | em andamento | aceita | historico
ordem: 1          # opcional: ordem de exibição
---
```

Alguns arquivos têm campos extras usados pelo site:
- `resumo`, `destaques` e `principios` em `objetivo-e-motivacao.md`;
- `resumo` e `porque_comecei` em `historico.md`;
- `fases` em `roteiro.md`;
- `itens` em `obstaculos-e-solucoes.md`.

O formato completo está em `apps/site/src/content.config.ts`.
