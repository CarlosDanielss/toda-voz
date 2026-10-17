<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/logo/toda-voz-horizontal-escuro.svg">
    <img src="assets/logo/toda-voz-horizontal-claro.svg" alt="Toda Voz: toda voz importa" width="460">
  </picture>
</p>

# Toda Voz

> **Toda voz importa.**

**Versão 0.1.0 · Fase 0: Fundação · Iniciado em 17 de outubro de 2026**

O Toda Voz é um projeto sem fins lucrativos e aberto a quem quiser ajudar. O objetivo é que pessoas que não conseguem falar, ou que têm dificuldade para entender, possam se comunicar. A ideia é que funcione sem internet, num celular simples, em várias línguas, e que seja feito junto com quem usa. Começamos pelo português e pela Libras.

Ainda não há um app para usar. Por enquanto estamos pesquisando, registrando decisões e preparando o terreno. Veja onde estamos no [roteiro](context/roteiro.md).

## Por onde começar
| Quero… | Leia |
|---|---|
| Entender por que o projeto existe | [context/objetivo-e-motivacao.md](context/objetivo-e-motivacao.md) |
| Ver onde estamos | [context/roteiro.md](context/roteiro.md) |
| Ver tudo o que já sabemos e decidimos | [context/README.md](context/README.md) |
| Ver como o sistema vai ser construído | [context/arquitetura.md](context/arquitetura.md) |
| Ver o que vamos construir | [context/modulos/README.md](context/modulos/README.md) |
| Ver o que mudou em cada versão | [CHANGELOG.md](CHANGELOG.md) |

## O que tem neste repositório
| Pasta | Conteúdo | Situação |
|---|---|---|
| [`context/`](context/) | Memória do projeto: objetivo, história, descobertas, decisões, arquitetura, módulos, referências | ativo |
| [`apps/site/`](apps/site/) | Site do projeto, gerado a partir do `context/` | ativo |
| [`apps/android/`](apps/android/) | App Android | a criar |
| [`apps/web/`](apps/web/) | Versão web | a criar |
| [`core/`](core/) | Núcleo em Rust | a criar |
| [`content/`](content/) | Vocabulário, pictogramas, vídeos de Libras e pranchas | a criar |
| [`tools/estudio-de-voz/`](tools/estudio-de-voz/) | Ferramenta para recriar a voz da pessoa | a criar |
| [`hardware/`](hardware/) | Kits abertos e baratos | a criar |
| [`assets/`](assets/) | Logo e arquivos visuais | ativo |

## Ver o site no seu computador
```bash
pnpm install
pnpm dev      # abre em http://localhost:4321
pnpm build    # gera o site e confere cabeçalhos e contraste das cores
```
Precisa de Node 22 ou mais novo e pnpm 10 ou mais novo.

## Licença
- **Código:** [AGPL-3.0-or-later](LICENSE). Qualquer pessoa pode usar, estudar e modificar. Quem modificar, ou oferecer como serviço, precisa publicar o código.
- **Conteúdo:** [CC BY-NC-SA 4.0](LICENSE-CONTENT.md). Uso livre, sem fins comerciais.

O motivo dessa escolha está na [decisão 0004](context/decisoes/0004-licenca.md).

## Como participar
Toda ajuda conta: pessoas que usam comunicação alternativa e suas famílias, pessoas surdas, fonoaudiólogos, tradutores, ilustradores, makers, desenvolvedores e pesquisadores. Veja como em [context/modulos/14-contribuicao-comunitaria.md](context/modulos/14-contribuicao-comunitaria.md).

> Nada sobre nós sem nós. Decisões que afetam quem usa comunicação alternativa e a comunidade surda são tomadas com essas pessoas.
