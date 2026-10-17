---
titulo: Acesso (formas de entrada)
descricao: Transforma qualquer sinal do corpo (toque, botão, cabeça, olhar, piscada, expressões, sensores) em intenções que o sistema entende.
atualizado: 2026-10-17
status: rascunho
ordem: 3
fase: "1–3"
---

# Módulo 03: Acesso (formas de entrada)

## Para que serve
Permite usar o Toda Voz **sem as mãos**. Cada forma de acesso é um **plugin** que transforma sinais do corpo em **intenções**: SELECIONAR, PRÓXIMO, ANTERIOR, APONTAR(x,y), VOLTAR, PAUSA, SOS. Ver [arquitetura](../arquitetura.md#como-as-intenções-funcionam).

## Para quem
- **Perfil A:** mexe a cabeça.
- **Perfil B:** só os olhos.
- **Perfil C:** um único sinal confiável.

Inclui ELA, paralisia cerebral, síndrome do encarceramento, Rett e lesão medular.

## Funcionalidades
### MVP (fase 1)
- [ ] **Toque** com filtro de toque impreciso (ignorar toques muito curtos ou repetidos).
- [ ] **Acionador**: um ou dois botões Bluetooth/USB ou uma tecla.
- [ ] **Varredura** linha-coluna, com velocidade ajustável e adaptativa [E19].
- [ ] **Gestos do rosto pela câmera** (MediaPipe): piscada longa, piscada dupla, sobrancelha, boca aberta, sorriso [E15], com limiar calibrado para cada pessoa.
- [ ] **Pausa automática** quando o rosto some da câmera, mais um gesto de "acordar".

### Fase 2
- [ ] **Cursor pela cabeça** com filtros contra movimentos involuntários [E20].
- [ ] **Olhar por zonas**: 4–6 regiões grandes, com calibração de 5 pontos em 30 s e recalibração automática [E2, E14].
- [ ] **Gestos de olhar**: esquerda, direita, cima [E16].
- [ ] **Tempo de seleção (dwell)** que se adapta ao cansaço [E18].

### Fase 3 e futuro
- [ ] **EOG** (ESP32 + AD8232) como plugin [E28].
- [ ] **EEG** com P300/SSVEP como "botão mental" [B7, B8].
- [ ] Câmera infravermelha USB para quem precisa de mais precisão.
- [ ] Ponto de conexão para BCI implantada.

## Depende de
[11](11-configuracao-e-perfis.md) (perfis), [13](13-privacidade-e-consentimento.md) (câmera nunca sai do aparelho).

## Riscos e perguntas abertas
- O olhar pela câmera erra 0,5–2 cm: no máximo 6–12 alvos [E1, E2].
- Luz, óculos, pálpebra caída na ELA [E25] e movimentos involuntários.
- FPS e bateria em aparelho barato [verificar].
- Datasets de olhar não comerciais: usar só os pontos do rosto do MediaPipe ([0008](../decisoes/0008-sem-dependencias-que-travem.md)).

## Referências
[E1], [E2], [E14]–[E20], [E25], [E28], [B7], [B8].
