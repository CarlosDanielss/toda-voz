---
titulo: Perguntas abertas
descricao: O que ainda falta decidir e o que precisa ser confirmado.
atualizado: 2026-10-17
status: vivo
ordem: 8
---

# Perguntas abertas

Quando uma pergunta for respondida, registre a resposta onde ela faz sentido (decisão, descoberta ou módulo) e mova o item para "Resolvidas", com o link.

## Falta decidir
| # | Pergunta | Onde impacta | Quem decide |
|---|---|---|---|
| 1 | A interface será em **Flutter** ou em **Kotlin/Compose + versão web**? | [arquitetura](arquitetura.md), [0009](decisoes/0009-nucleo-rust-interfaces-finas.md) | Carlos, depois de um protótipo medido |
| 2 | Aceitar ou mudar as propostas [0009](decisoes/0009-nucleo-rust-interfaces-finas.md), [0010](decisoes/0010-ia-so-sugere.md) e [0011](decisoes/0011-libras-com-comunidade-surda.md) | Vários | Carlos |
| 3 | Qual grupo o primeiro piloto atende primeiro: ELA, AVC, paralisia cerebral, autismo ou pessoas surdas? | [roteiro](roteiro.md) | Carlos e parceiros |
| 4 | Revisar o texto sobre uso não comercial | [0004](decisoes/0004-licenca.md), `LICENSE-CONTENT.md` | Alguém da área jurídica |
| 5 | Criar o logo a partir do prompt | [identidade visual](identidade-visual.md) | Carlos e comunidade |
| 6 | Onde publicar o repositório e o site | [0005](decisoes/0005-monorepo.md) | Carlos |

## Falta confirmar
- [ ] Se a biblioteca de voz sherpa-onnx depende de um componente GPL e se isso é compatível com a AGPL. A expectativa é que sim.
- [ ] Se o modelo de voz Pocket TTS roda bem em Android barato.
- [ ] Se a câmera funciona dentro do serviço de acessibilidade nas versões 15, 16 e 17 do Android.
- [ ] Quantos quadros por segundo e quanta bateria a leitura do rosto consome em aparelhos de 2 a 4 GB.
- [ ] As licenças dos conjuntos de dados de Libras [L2–L5].
- [ ] Se existe código na tabela do SUS para vocalizador ou rastreador de olhar.
- [ ] A posição da federação nacional de pessoas surdas sobre IA e avatares.
- [ ] A fonte original da taxa de abandono (cerca de 1 em cada 3).
- [ ] O preço real do kit de hardware: câmera infravermelha, sensor nos olhos, Android usado.
- [ ] Os DOIs marcados com [verificar] em [referências](referencias.md).
- [ ] Se as mãos abertas da jovem que sinaliza na ilustração do topo podem ser lidas como o número 5 ou como outro sinal. Validar com pessoas surdas antes de publicar o site ([identidade visual](identidade-visual.md#ilustração-do-topo-da-página-inicial)).
- [ ] O logo e a ilustração não se parecem com nenhuma marca existente, e foram bem recebidos por quem usa comunicação alternativa.

## Resolvidas
- **Nome do projeto** → [0001](decisoes/0001-nome-toda-voz.md)
- **Língua do piloto** → [0002](decisoes/0002-piloto-portugues-libras.md)
- **Licença** → [0004](decisoes/0004-licenca.md)
- **Versão do projeto** → [0012](decisoes/0012-versionamento-semantico.md)
- **Visual do site e paleta** → [0013](decisoes/0013-identidade-visual-e-acessibilidade.md)
- **Existe aparelho que transforma pensamento em voz?** → só com implante cerebral, ainda experimental. Ver [descobertas](descobertas.md#interfaces-cérebro-computador).
