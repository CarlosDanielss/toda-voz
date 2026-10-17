---
titulo: "0009: Núcleo em Rust com interfaces finas; Android como prioridade"
descricao: A lógica fica num núcleo Rust portátil; cada plataforma tem uma interface fina e trocável; o Android é a primeira plataforma.
atualizado: 2026-10-17
status: proposta
data: 2026-10-17
---

# 0009: Núcleo em Rust com interfaces finas; Android como prioridade

## Contexto
Precisamos rodar em Android barato, web, Raspberry Pi e desktop, sem ficar presos a um único framework de interface, já que os mais usados são mantidos por grandes empresas de tecnologia. Só o Android permite controlar o sistema inteiro por acessibilidade. No iOS, apps de terceiros não podem fazer isso.

## Decisão proposta
- **Núcleo em Rust** (`core/`) com:
  - grafo de conceitos e pranchas;
  - OBF;
  - CRDT (Automerge);
  - previsão;
  - chamadas ao ONNX Runtime, sherpa-onnx e llama.cpp.
- **Interfaces finas**: o núcleo é exposto via flutter_rust_bridge ou UniFFI.
- **Android como primeira plataforma.** O serviço de acessibilidade e a câmera ficam em Kotlin nativo.
- **Interface: Flutter ou Compose + PWA [pendente]**, decidida depois de um protótipo medido num aparelho de 3–4 GB.

## Alternativas consideradas
- **Tudo em Flutter/Dart:** uma única base de código, mas a lógica fica presa ao framework.
- **Tudo nativo por plataforma:** duplica a lógica.
- **Só PWA:** não controla o sistema e tem ML de câmera mais lento em aparelhos baratos.

## Consequências
- Aprender e manter Rust aumenta a barreira para contribuidores. É preciso documentação muito boa.
- Trocar a interface no futuro custa meses, não anos.

## Referências
[A8]. Ver [arquitetura](../arquitetura.md).
