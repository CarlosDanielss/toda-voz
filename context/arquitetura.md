---
titulo: Arquitetura
descricao: Como o Toda Voz é organizado, com linguagens, tecnologias, formatos e a estrutura do monorepo.
atualizado: 2026-10-17
status: proposta
ordem: 5
---

# Arquitetura

> **Status:** proposta. As partes já decididas citam o ADR correspondente. O resto está em [0009](decisoes/0009-nucleo-rust-interfaces-finas.md) (proposta) e em [perguntas-abertas](perguntas-abertas.md).

## Princípios
1. **Offline primeiro** ([0003](decisoes/0003-offline-first.md)). O online só acrescenta: sincronização, estúdio de voz, pacotes e modelos maiores.
2. **Formatos abertos acima de tecnologias** ([0008](decisoes/0008-sem-dependencias-que-travem.md)). Usamos ONNX para modelos de visão e voz, GGUF para modelos de linguagem, OBF para pranchas, BCP-47 para idiomas e SignWriting para sinais.
3. **Núcleo portátil, interfaces finas.** A lógica fica num núcleo compartilhado, e cada plataforma tem só uma camada de interface que pode ser trocada.
4. **Acesso por intenções.** Qualquer sinal do corpo vira uma de poucas intenções. Assim, uma forma de acesso nova entra como plugin, sem mexer no resto.
5. **Os dados ficam no aparelho.** Imagem da câmera nunca sai dele. A voz pessoal é cifrada e pertence à pessoa.
6. **Medir em aparelho barato.** O alvo de referência é um Android de 3–4 GB de RAM.

## Camadas

```
┌──────────────────────────── INTERFACE (fina, substituível) ──────────────────────────┐
│ Android (prioridade) · Web/PWA · Raspberry Pi/desktop · (iOS limitado)               │
│ Prancha · Teclado · Dicionário Libras · Modo "entender" · Controle do sistema        │
└──────────────────────────────────────────────────────────────────────────────────────┘
              ▲ intenções: SELECIONAR · PRÓXIMO · VOLTAR · APONTAR(x,y) · PAUSA · SOS
┌──────────── CAMADA DE ACESSO (plugins) ─────────────┐   ┌──── SAÍDAS ───────────────────┐
│ toque · botão · varredura · cabeça                  │   │ voz pessoal (sherpa-onnx)     │
│ olhar por zonas · piscada · expressões do rosto     │   │ banco de mensagens            │
│ EOG · EEG (P300/SSVEP) · futuro: BCI implantada     │   │ texto · vídeo em Libras       │
│ MediaPipe → alternativa em ONNX                     │   │ ações no Android (ligar…)     │
└─────────────────────────────────────────────────────┘   └───────────────────────────────┘
┌──────────────────────────── NÚCLEO (Rust, offline) ──────────────────────────────────┐
│ Grafo de conceitos (símbolo ↔ palavra ↔ sinal ↔ SignWriting)                          │
│ Pranchas com posições estáveis · importação e exportação OBF                         │
│ Previsão: n-gramas → modelo pequeno opcional (llama.cpp/GGUF), sempre confirmado     │
│ Voz e fala: sherpa-onnx · whisper.cpp                                                │
│ Dados: SQLite + Automerge (CRDT) · criptografia libsodium                            │
└──────────────────────────────────────────────────────────────────────────────────────┘
┌──────────────────── ONLINE OPCIONAL (auto-hospedável, AGPL) ─────────────────────────┐
│ Sincronização cifrada com família e terapeuta · backup cifrado                        │
│ Estúdio de voz (GPU comunitária) · pacotes de idioma e de Libras · modelos maiores    │
│ Portal de contribuição (vídeos de Libras, traduções, doação de voz)                   │
└──────────────────────────────────────────────────────────────────────────────────────┘
```

## Linguagens
| Onde | Linguagem | Por quê |
|---|---|---|
| Núcleo (`core/`) | **Rust** | Roda em Android, web (WASM), Raspberry Pi e desktop. É rápido e seguro em memória, e chama bibliotecas em C (ONNX Runtime, sherpa-onnx, llama.cpp) |
| Android: serviço de acessibilidade e câmera | **Kotlin** | Obrigatório: AccessibilityService, CameraX e MediaPipe são APIs nativas |
| Interface Android, web e desktop | **Flutter (Dart)** ou **Kotlin/Compose + PWA (TypeScript)** | **[pendente]**. Flutter usa um único código-base; o nativo é mais leve em aparelhos fracos. Decidir depois de um protótipo medido |
| Site (`apps/site/`) | **TypeScript + Astro** | [0006](decisoes/0006-landing-page-astro.md) |
| Estúdio de voz (`tools/estudio-de-voz/`) | **Python** | É onde está o ecossistema de treino e ajuste de modelos de voz |
| Firmware de hardware (`hardware/`) | **C/C++ (Arduino/ESP-IDF)** | Botões, sensores EOG, ESP32 |

## Tecnologias e risco de dependência
A coluna "quem mantém" usa categorias, e não nomes, para mostrar o risco de dependência.

| Camada | Escolha | Licença | Quem mantém | Risco | Plano B |
|---|---|---|---|---|---|
| Dados locais | SQLite | Domínio público | Consórcio independente | Muito baixo | — |
| Sincronização | Automerge | MIT | Laboratório de pesquisa e comunidade | Baixo | Yjs; CouchDB/PouchDB |
| Criptografia | libsodium; MLS | ISC / MIT | Comunidade; padrão IETF | Baixo | age |
| Núcleo | Rust | MIT/Apache | Fundação sem fins lucrativos | Baixo | C++ |
| Ponte núcleo ↔ interface | flutter_rust_bridge ou UniFFI | MIT | Comunidade | Baixo | FFI manual em C |
| Inferência | ONNX Runtime | MIT | Grande empresa de tecnologia; formato ONNX em fundação aberta | Baixo | LiteRT, ExecuTorch |
| Voz e fala | sherpa-onnx | Apache-2.0 | Comunidade acadêmica | Baixo | whisper.cpp |
| Modelo de linguagem | llama.cpp + GGUF | MIT | Comunidade | Baixo | n-gramas |
| Rosto, olhar e mãos | MediaPipe, exportado para ONNX | Apache-2.0 | Grande empresa de tecnologia | Médio | Modelos próprios em ONNX |
| Vozes base PT-BR | Kokoro e vozes VITS com licença compatível | Apache / varia | Comunidade | Médio | Vozes próprias doadas |
| Clonagem (estúdio) | Qwen3-TTS, Chatterbox, Pocket TTS | Apache / MIT / CC BY | Empresas e laboratórios de pesquisa | Médio | O que surgir com licença livre |
| Símbolos | Conjuntos abertos CC BY-SA e pictogramas próprios; não comerciais só como pacote | CC BY-SA / CC BY-NC-SA | Comunidades | Baixo | Pictogramas próprios |
| Tradução da interface | Weblate (no nosso próprio servidor) | GPL-3.0 | Comunidade e pequena empresa | Baixo | Pontoon |
| Site | Astro | MIT | Comunidade | Baixo | HTML estático |

**Evitar como peça central:**
- serviços de sincronização com licença que não é aberta ou que exigem cessão de direitos;
- bibliotecas paradas;
- plataformas de tradução fechadas;
- qualquer modelo com licença não comercial dentro do código. Isso só entra como pacote de conteúdo opcional ([0008](decisoes/0008-sem-dependencias-que-travem.md)).

## Formatos e padrões abertos
- **Pranchas:** Open Board Format (`.obf`/`.obz`).
- **Idiomas:** BCP-47 (`pt-BR`; Libras = `bzs` / `sgn-BR`).
- **Sinais:** Formal SignWriting (FSW); vídeos AV1/H.265 e pose em `pose-format`.
- **Modelos:** ONNX (visão e voz) e GGUF (linguagem).
- **Acessibilidade:** WCAG 2.2 AA; APIs de acessibilidade do Android.
- **Conceitos:** IDs estáveis próprios, ligados ao Wikidata quando existir.

## Estrutura do monorepo
```
toda-voz/
├─ context/               # memória do projeto (este arquivo)
├─ apps/
│  ├─ site/               # landing page (Astro), lê context/
│  ├─ android/            # app Android (a criar)
│  └─ web/                # PWA (a criar)
├─ core/                  # núcleo Rust (a criar)
├─ content/               # vocabulário, pictogramas, Libras, pranchas (CC BY-NC-SA)
├─ tools/estudio-de-voz/  # pipeline da voz pessoal (a criar)
└─ hardware/              # kits abertos (a criar)
```
- **Ferramentas:** **pnpm workspaces** para JavaScript/TypeScript. Quando o código Rust surgir, entra um workspace Cargo em `core/`. Ver [0005](decisoes/0005-monorepo.md).

## Como as intenções funcionam
| Intenção | Exemplos de origem |
|---|---|
| `SELECIONAR` | toque, botão, piscada longa, sorriso, tempo parado, P300 |
| `PRÓXIMO` / `ANTERIOR` | varredura automática, olhar para a direita ou a esquerda, segundo botão |
| `APONTAR(x,y)` | cursor pela cabeça, olhar por zonas |
| `VOLTAR` | gesto dedicado, menu fixo |
| `PAUSA` / `RETOMAR` | rosto fora da câmera, gesto de "acordar" |
| `SOS` | gesto longo dedicado, botão físico |

Cada plugin de acesso declara quais intenções produz e com que confiança. A [configuração e os perfis](modulos/11-configuracao-e-perfis.md) definem a combinação usada por cada pessoa.

## Em aberto
- Interface: Flutter ou nativo + PWA.
- Câmera dentro do AccessibilityService no Android 15/16/17.
- Desempenho em aparelhos de 2–4 GB.
- Detalhes em [perguntas-abertas](perguntas-abertas.md).
