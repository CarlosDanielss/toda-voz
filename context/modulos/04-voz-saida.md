---
titulo: Voz (saída)
descricao: Fala as mensagens offline, com uma voz pronta em português ou com a voz pessoal da própria pessoa, e toca frases do banco de mensagens.
atualizado: 2026-10-17
status: rascunho
ordem: 4
fase: "1–2"
---

# Módulo 04: Voz (saída)

## Para que serve
Transforma a mensagem em voz, **sem internet**. A voz pode ser uma voz pronta em português ou a **voz pessoal** criada no [estúdio de voz](05-estudio-de-voz.md). Também toca as **gravações originais** do banco de mensagens.

## Para quem
Todas as pessoas que usam o comunicador e quem conversa com elas.

## Funcionalidades
### MVP (fase 1)
- [ ] Motor de voz offline com **sherpa-onnx** (Apache-2.0).
- [ ] Vozes PT-BR prontas com licença compatível (por exemplo, Kokoro e vozes VITS), feminina e masculina.
- [ ] Controle de velocidade, volume e tom.
- [ ] Falar enquanto monta (palavra a palavra) ou só no final.
- [ ] Publicar o motor como **TTS do sistema Android**, para outros apps usarem a voz.

### Fase 2
- [ ] Carregar a **voz pessoal** (`.onnx` cifrado) gerada no estúdio.
- [ ] **Banco de mensagens**: tocar frases gravadas pela própria pessoa, com a entonação original [V3].
- [ ] Marca d'água inaudível na voz pessoal (AudioSeal) [V35].

### Futuro
- [ ] Emoção e entonação (pergunta, exclamação, ênfase).
- [ ] Vozes em mais línguas (MMS como pacote opcional, por ser não comercial).

## Depende de
[02](02-comunicador-pranchas.md), [05](05-estudio-de-voz.md), [13](13-privacidade-e-consentimento.md).

## Riscos e perguntas abertas
- Qualidade das vozes PT-BR abertas.
- Possível dependência GPL do espeak-ng: compatível com AGPL [verificar].

## Referências
[V3], [V24], [V35], [A8].
