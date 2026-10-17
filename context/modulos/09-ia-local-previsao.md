---
titulo: IA local e previsão
descricao: Acelera a comunicação com previsão de palavras e expansão de frases no próprio aparelho, sem tirar a autoria da pessoa.
atualizado: 2026-10-17
status: rascunho
ordem: 9
fase: "1–3"
---

# Módulo 09: IA local e previsão

## Para que serve
Reduz o esforço e aumenta a velocidade (CAA: 8–10 palavras/min; fala: ~150), **sempre** respeitando a autoria ([0010](../decisoes/0010-ia-so-sugere.md)).

## Para quem
Principalmente quem digita ou monta frases longas: ELA, laringectomia, AVC sem afasia grave.

## Funcionalidades
### MVP (fase 1)
- [ ] Previsão de palavras com **n-gramas** locais, aprendendo com o vocabulário da própria pessoa (sem nuvem).
- [ ] Faixa de sugestões **separada da prancha**.

### Fase 3
- [ ] **Expansão de abreviações**: a pessoa digita as iniciais, e o modelo sugere frases [E22].
- [ ] Modelo de linguagem pequeno (≤1B, GGUF via llama.cpp), opcional, offline.
- [ ] Usar o que o parceiro de conversa disse (reconhecido localmente) como contexto, com opção de desligar.
- [ ] Registro local de "digitado × aceito".

### Futuro
- [ ] Sugestões no estilo da própria pessoa, treinadas no aparelho, com consentimento.

## Depende de
[02](02-comunicador-pranchas.md), [13](13-privacidade-e-consentimento.md).

## Riscos e perguntas abertas
- Desempenho em aparelhos de 2 GB: usar n-gramas ou modelo de 270M.
- Risco de "colocar palavras na boca" [P1].

## Referências
[E22], [P1].
