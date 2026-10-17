# apps/android

App Android do Toda Voz: comunicador, formas de acesso pela câmera e controle do celular inteiro via AccessibilityService.

- **Status:** a criar (fase 1).
- **Módulos:** [02](../../context/modulos/02-comunicador-pranchas.md), [03](../../context/modulos/03-acesso-entrada.md), [04](../../context/modulos/04-voz-saida.md), [06](../../context/modulos/06-controle-do-celular.md), [11](../../context/modulos/11-configuracao-e-perfis.md).
- **Tecnologias:**
  - Kotlin, obrigatório para o serviço de acessibilidade e a câmera;
  - interface em Flutter **ou** Compose (decisão pendente, [0009](../../context/decisoes/0009-nucleo-rust-interfaces-finas.md));
  - núcleo em [`core/`](../../core/).
- **Alvo de desempenho:** Android de 3–4 GB de RAM.
