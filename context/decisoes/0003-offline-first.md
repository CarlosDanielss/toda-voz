---
titulo: "0003: Offline primeiro, com online opcional"
descricao: Toda funcionalidade essencial funciona sem internet; o online só acrescenta.
atualizado: 2026-10-17
status: aceita
data: 2026-10-17
---

# 0003: Offline primeiro, com online opcional

## Contexto
A voz de uma pessoa não pode depender de sinal de internet nem de um servidor que pode sair do ar. Muitas pessoas que precisam de CAA vivem em lugares com conexão ruim ou cara. A pesquisa mostrou que voz, previsão, rastreamento do rosto e reconhecimento de fala já rodam no próprio aparelho, num Android de 3–4 GB [A8].

## Decisão
- **Essencial e offline:** prancha, voz (inclusive a voz pessoal já criada), acesso por toque, botão, rosto e olhar, dicionário de Libras, previsão básica e controle do celular.
- **Opcional e online:**
  - sincronização cifrada com a família e o terapeuta;
  - backup;
  - estúdio de voz numa GPU comunitária;
  - pacotes de idioma e de Libras para baixar;
  - modelos maiores;
  - portal de contribuição.
- Todo serviço online precisa ser **auto-hospedável** e **substituível**.

## Alternativas consideradas
- **Nuvem primeiro**, como fazem vários serviços comerciais: dependência de servidor e de pagamento, e dados sensíveis fora do aparelho.

## Consequências
- Modelos precisam ser pequenos: ONNX/GGUF quantizados e voz de ~60–75 MB.
- Sincronização com CRDT (Automerge), com o servidor apenas repassando dados cifrados ("relay cego") [A1].
- O desempenho precisa ser medido desde cedo em aparelhos baratos.

## Referências
[A1], [A8]. Ver [arquitetura](../arquitetura.md).
