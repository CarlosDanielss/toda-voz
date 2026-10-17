# tools/estudio-de-voz

Pipeline que reconstrói a voz da pessoa a partir de áudios antigos (WhatsApp, vídeos) e gera uma voz pequena em ONNX para uso offline no celular.

- **Status:** a criar (fase 2).
- **Módulo:** [05: Estúdio de voz](../../context/modulos/05-estudio-de-voz.md).
- **Tecnologias:**
  - Python;
  - pyannote, Silero VAD, DeepFilterNet, Demucs, Whisper;
  - Qwen3-TTS ou Chatterbox como "professor";
  - ajuste fino de uma voz VITS/Piper e exportação para ONNX.
- **Hardware:** placa de vídeo NVIDIA com ≥8 GB de VRAM, só para criar a voz.
- **Regras:** consentimento obrigatório; apagar os áudios originais depois do processamento; só modelos Apache ou MIT ([0008](../../context/decisoes/0008-sem-dependencias-que-travem.md)).
