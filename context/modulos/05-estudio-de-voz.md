---
titulo: Estúdio de voz
descricao: Ferramenta que reconstrói o timbre da pessoa a partir de áudios antigos (WhatsApp, vídeos) e gera uma voz pequena que roda offline no celular.
atualizado: 2026-10-17
status: rascunho
ordem: 5
fase: "2"
---

# Módulo 05: Estúdio de voz

## Para que serve
Permite que quem perdeu ou vai perder a fala **continue falando com a própria voz**, em vez de uma voz genérica. O trabalho pesado é feito **uma vez**, num computador com placa de vídeo. O resultado é um arquivo de voz pequeno que roda offline no celular.

## Para quem
- Pessoas com ELA, câncer de laringe, AVC ou Parkinson.
- Também pessoas com doenças degenerativas que ainda falam (banco de voz preventivo).

## Funcionalidades
### MVP (fase 2)
- [ ] **Coleta guiada:**
  - importar áudios antigos (WhatsApp, vídeos);
  - **ou** gravar frases (banco de voz);
  - **ou** gravar mensagens inteiras (banco de mensagens).
- [ ] **Limpeza:** separar só a voz da pessoa (pyannote), cortar os trechos com fala (Silero VAD), tirar ruído (DeepFilterNet) e música (Demucs), transcrever (Whisper) [V27, V29].
- [ ] **Modelo professor**, com licença livre: Qwen3-TTS ou Chatterbox [V10].
- [ ] **Destilação**: gerar 1–3 h de frases em PT com o timbre e fazer o ajuste fino de uma voz VITS pequena [V24, V30].
- [ ] **Exportar** a voz para ONNX (~60–75 MB), cifrada e entregue à pessoa.
- [ ] **Comparar**: medir a semelhança com a voz original e ouvir com a família antes de aprovar.
- [ ] **Consentimento** gravado na voz da própria pessoa ([módulo 13](13-privacidade-e-consentimento.md)).

### Depois
- [ ] Testar o **Pocket TTS** no celular, sem destilação [V11].
- [ ] Rodar em GPU comunitária, auto-hospedável, com fila e apagamento automático dos áudios originais.

### Futuro
- [ ] Copiar só o timbre quando a fala recente já estiver alterada [V25, V33, V34].

## Depende de
[04](04-voz-saida.md), [13](13-privacidade-e-consentimento.md). Código em `tools/estudio-de-voz/` (Python).

## Riscos e perguntas abertas
- A qualidade depende dos áudios antigos (compressão Opus do WhatsApp) [verificar].
- Precisa de um PC com placa de vídeo de ≥8 GB: parceiros, laboratórios ou GPU comunitária.
- Risco de fraude com clones de voz [V36]. Exige consentimento, marca d'água e processamento local.
- A licença do professor pode alcançar os dados gerados: usar só modelos Apache ou MIT.

## Referências
[V1]–[V11], [V24]–[V36].
