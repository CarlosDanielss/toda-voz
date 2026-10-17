---
titulo: Controle do celular
descricao: "Permite usar o Android inteiro sem as mãos, com olhar, rosto ou botão: voltar, início, rolar, ligar, responder mensagens e pedir ajuda."
atualizado: 2026-10-17
status: rascunho
ordem: 6
fase: "2"
---

# Módulo 06: Controle do celular

## Para que serve
Leva a autonomia além da prancha: usar o **celular inteiro** sem as mãos, como abrir apps, voltar, rolar, ligar, atender e responder mensagens. Funciona com as formas de acesso do [módulo 03](03-acesso-entrada.md).

## Para quem
Pessoas sem uso das mãos: ELA, lesão medular alta, paralisia cerebral, síndrome do encarceramento.

## Funcionalidades
### MVP (fase 2)
- [ ] **AccessibilityService** (Kotlin) com `isAccessibilityTool="true"`.
- [ ] **Menu fixo**, sempre disponível: Voltar · Início · Recentes · Notificações · Rolar ↑↓ · Teclado · **Pausa** · **SOS**.
- [ ] **Rótulos grandes** sobre os elementos clicáveis da tela, lidos da árvore de acessibilidade. Até 8 por página, escolhidos por varredura ou olhar.
- [ ] **Zoom em grade** (4 → 16) para tocar em pontos sem rótulo.
- [ ] **Ligar** para favoritos (`ACTION_CALL`). **Atender**: tocar no botão via acessibilidade.
- [ ] **Responder WhatsApp e SMS** pela notificação, com frases do comunicador.
- [ ] **Confirmação em 2 passos** para ligar, enviar ou apagar.
- [ ] **SOS**: ligar ou mandar mensagem para o cuidador com um gesto dedicado.

### Depois
- [ ] Cursor pela cabeça para apps sem rótulos de acessibilidade.
- [ ] Atalhos personalizados ("abrir música", "chamar a mãe").

### Futuro
- [ ] Casa inteligente (luz, TV) via padrões abertos (Matter, Home Assistant).

## Depende de
[03](03-acesso-entrada.md), [11](11-configuracao-e-perfis.md), [13](13-privacidade-e-consentimento.md).

## Riscos e perguntas abertas
- **Só Android**: no iOS, apps não controlam o sistema.
- Câmera dentro do serviço de acessibilidade no Android 15/16/17 [verificar].
- **Verificação de desenvolvedor** no Brasil desde 30/09/2026 e "configurações restritas" fora da loja [E36].
- Políticas da Play Store para acessibilidade [E35].
- Há código aberto arquivado (licença Apache-2.0) de controle do Android pelo rosto que pode servir de ponto de partida.

## Referências
[E33]–[E36].
