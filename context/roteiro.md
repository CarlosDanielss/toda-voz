---
titulo: Roteiro
descricao: As fases do projeto, o que já foi feito e onde estamos agora.
atualizado: 2026-10-17
status: vivo
ordem: 6
# status de cada fase: concluida | atual | proxima | futura
# Só uma fase pode estar como "atual". Marque feito: true nos marcos concluídos.
fases:
  - id: "0"
    titulo: Fundação
    texto: Entender o problema, decidir o básico e preparar o terreno para a comunidade.
    status: atual
    marcos:
      - texto: Pesquisa inicial
        feito: true
      - texto: Memória do projeto e primeiras decisões
        feito: true
      - texto: Site do projeto
        feito: true
      - texto: Paleta de cores e identidade visual
        feito: true
      - texto: Vocabulário essencial em português
        feito: false
      - texto: Primeiras pranchas para imprimir
        feito: false
      - texto: Primeiros vídeos de Libras, gravados por pessoas surdas
        feito: false
  - id: "1"
    titulo: Comunicador sem internet
    texto: App Android com prancha, voz em português, toque, botão, varredura, gestos do rosto e dicionário de Libras.
    status: proxima
    marcos:
      - texto: Protótipo medido num celular de 3 a 4 GB
        feito: false
      - texto: Prancha e voz funcionando offline
        feito: false
      - texto: Acesso por botão, varredura e gestos do rosto
        feito: false
      - texto: Dicionário de Libras dentro do app
        feito: false
  - id: "2"
    titulo: Autonomia
    texto: Usar o celular inteiro sem as mãos, olhar por zonas, voz própria e frases gravadas pela pessoa.
    status: futura
    marcos:
      - texto: Controle do Android por acessibilidade
        feito: false
      - texto: Estúdio de voz
        feito: false
      - texto: Sincronização opcional com a família
        feito: false
  - id: "3"
    titulo: Entender e acelerar
    texto: Reconhecer alguns sinais de Libras, ajudar a entender mensagens e sugerir palavras com IA local.
    status: futura
    marcos:
      - texto: Reconhecimento de sinais-chave
        feito: false
      - texto: Modo "entender"
        feito: false
      - texto: Previsão com IA no aparelho
        feito: false
---

# Roteiro

As fases não têm data marcada. O ritmo depende de quantas pessoas entrarem no projeto.

Estamos na **fase 0, Fundação**. O que já foi feito e o que falta em cada fase está no cabeçalho deste arquivo, e o site mostra isso como uma linha do tempo.

| Fase | O que entrega | Módulos |
|---|---|---|
| **0. Fundação** (atual) | Pesquisa, decisões, site, identidade visual, vocabulário essencial, pranchas para imprimir, primeiros vídeos de Libras | [01](modulos/01-conceitos-e-vocabulario.md), [10](modulos/10-papel-e-impressao.md), [16](modulos/16-site-e-documentacao.md) |
| **1. Comunicador sem internet** | App Android com prancha, voz, toque, botão, varredura, gestos do rosto e Libras | [02](modulos/02-comunicador-pranchas.md), [03](modulos/03-acesso-entrada.md), [04](modulos/04-voz-saida.md), [07](modulos/07-libras.md), [11](modulos/11-configuracao-e-perfis.md), [13](modulos/13-privacidade-e-consentimento.md) |
| **2. Autonomia** | Controle do celular, olhar por zonas, estúdio de voz, frases gravadas, sincronização opcional | [05](modulos/05-estudio-de-voz.md), [06](modulos/06-controle-do-celular.md), [12](modulos/12-sincronizacao-e-backup.md) |
| **3. Entender e acelerar** | Sinais-chave de Libras, modo "entender", previsão com IA local, sinais do cérebro como botão | [08](modulos/08-compreensao.md), [09](modulos/09-ia-local-previsao.md), [03](modulos/03-acesso-entrada.md) |
| **Sempre** | Estudos com universidades, comunidade, novas línguas, kits de hardware | [14](modulos/14-contribuicao-comunitaria.md), [15](modulos/15-hardware-kits.md) |

## Versões

O projeto usa versionamento semântico ([decisão 0012](decisoes/0012-versionamento-semantico.md)). Enquanto estivermos em fundação, as versões começam com 0. A versão 1.0.0 será o primeiro app que alguém consiga usar no dia a dia. O histórico de versões fica no arquivo `CHANGELOG.md`, na raiz do repositório.
