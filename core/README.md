# core

Núcleo portátil do Toda Voz, em **Rust**. Roda offline em Android, web (WASM), Raspberry Pi e desktop.

- **Status:** a criar (proposta [0009](../context/decisoes/0009-nucleo-rust-interfaces-finas.md)).
- **Responsabilidades:**
  - grafo de conceitos e pranchas (OBF);
  - dados locais (SQLite + Automerge);
  - previsão (n-gramas, llama.cpp);
  - voz e fala (sherpa-onnx, whisper.cpp);
  - criptografia.
- **Arquitetura:** [context/arquitetura.md](../context/arquitetura.md).
- **Licença:** AGPL-3.0-or-later. As dependências precisam ser compatíveis ([0008](../context/decisoes/0008-sem-dependencias-que-travem.md)).
