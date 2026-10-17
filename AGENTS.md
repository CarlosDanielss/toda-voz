# Instruções para agentes de IA (e para quem chega agora)

Este repositório é o monorepo do **Toda Voz**, um projeto sem fins lucrativos de comunicação (CAA) aberta, offline e barata. O piloto é em português e Libras.

## Antes de qualquer coisa
1. Leia **[context/README.md](context/README.md)**. É o índice de tudo: onde está cada assunto, o que já foi decidido e o que está em aberto.
2. Antes de propor algo, confira **[context/decisoes/](context/decisoes/)** e **[context/perguntas-abertas.md](context/perguntas-abertas.md)**. Não reabra uma decisão "aceita" sem um motivo novo.
3. Escreva os textos do `context/` em **português do Brasil**. Nomes de pastas de código e identificadores ficam em inglês.
4. **Nunca cite marcas, empresas, produtos nem sites de soluções que já existem**, nem no `context/` nem no site. Descreva pelo que fazem ("um comunicador dedicado com rastreamento do olhar", "recursos gratuitos de grandes empresas de tecnologia"). Em `context/referencias.md` entram só fontes científicas e oficiais. Bibliotecas técnicas que o projeto usa podem ser citadas pelo nome na arquitetura.
5. **Escreva como gente**, não como relatório de IA: frases curtas, palavras do dia a dia, pouco negrito, sem itálico para ênfase, sem frases de efeito e sem listas onde um parágrafo resolve.

## Ao trabalhar
- **Decisão nova ou alterada:** crie um ADR em `context/decisoes/NNNN-titulo.md` usando o modelo de [context/decisoes/README.md](context/decisoes/README.md) e atualize o índice.
- **Descoberta nova:** registre em [context/descobertas.md](context/descobertas.md) com o código da referência, e inclua a fonte em [context/referencias.md](context/referencias.md).
- **Obstáculo novo, ou solução para um obstáculo:** registre em [context/obstaculos-e-solucoes.md](context/obstaculos-e-solucoes.md).
- **Funcionalidade:** detalhe no arquivo do módulo em `context/modulos/`.
- **Avanço no roteiro:** marque o marco como feito em `context/roteiro.md`. Só uma fase pode estar como `atual`.
- **Versão nova:** atualize `version` no `package.json` da raiz e o `CHANGELOG.md` (ADR 0012).
- **Cores ou visual:** edite os tokens em `apps/site/src/styles/tokens.css` e atualize `context/identidade-visual.md`. O build roda a checagem de contraste e falha se algum par ficar abaixo do mínimo.
- **Motivação, descobertas, obstáculos ou módulos mudaram:** a landing page (`apps/site`) lê esses arquivos. Rode `pnpm build` para conferir.
- **Informação não confirmada:** marque com `[verificar]`. Não invente números nem referências.
- **Frontmatter:** todo `.md` do `context/` precisa dele. O schema está em `apps/site/src/content.config.ts`, e o build falha se o frontmatter estiver errado.

## Regras do projeto
- **Offline primeiro.** Toda funcionalidade essencial funciona sem internet.
- **Sem dependências que possam bloquear ou passar a cobrar.** Prefira formatos abertos (ONNX, GGUF, OBF, BCP-47, SignWriting).
- **Verifique a licença antes de adicionar uma dependência.** O código é AGPL-3.0, então dependências precisam ser compatíveis (MIT, BSD, Apache-2.0, LGPL, GPL-3.0, AGPL-3.0). Pesos de modelos e datasets com licença "não comercial" só podem entrar como **pacotes de conteúdo opcionais**, nunca no núcleo do código. Veja o ADR 0004 e o ADR 0008.
- **Privacidade:** imagens da câmera e dados de voz **nunca saem do aparelho** sem consentimento explícito.
- **A IA só sugere.** A pessoa que usa CAA confirma tudo que é dito em nome dela.
- **Acessibilidade** (WCAG 2.2 AA) em qualquer interface.

## Comandos
```bash
pnpm install
pnpm dev     # site em modo desenvolvimento
pnpm build   # build do site (valida o frontmatter do context/ e o contraste das cores)
```

## Git
Não faça commit nem push sem pedido explícito.
