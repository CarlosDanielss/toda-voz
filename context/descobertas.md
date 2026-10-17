---
titulo: Descobertas
descricao: O que aprendemos pesquisando, organizado por tema e com as fontes.
atualizado: 2026-10-17
status: vivo
ordem: 3
destaques:
  - titulo: O que falta é juntar
    texto: "Já existem apps abertos, voz que funciona sem internet, reconhecimento de fala em mais de mil línguas e leitura do rosto pela câmera do celular. Ninguém juntou isso num produto barato, offline e em várias línguas."
  - titulo: O preço não vem do aparelho
    texto: "Um comunicador controlado pelo olhar custa de US$ 10 mil a 20 mil porque o seguro reembolsa. Usado, o mesmo aparelho sai por algumas centenas de dólares."
  - titulo: Dá para falar com a própria voz
    texto: "Com áudios antigos da pessoa, um computador mais forte cria a voz uma única vez. Depois ela funciona sem internet num celular simples."
  - titulo: A câmera comum tem limite
    texto: "Pelo olhar, a câmera do celular acerta alvos grandes, de 6 a 12 por tela. Para usar o celular inteiro, movimentos da cabeça e do rosto funcionam melhor."
  - titulo: Libras com gente, não com avatar
    texto: "Um dicionário em vídeo gravado por pessoas surdas é possível hoje. A tradução automática ainda não funciona, e a comunidade surda não aceita avatar no lugar de intérprete."
  - titulo: Ler o pensamento ainda exige cirurgia
    texto: "Implantes cerebrais já fazem pessoas com ELA voltarem a falar, mas custam mais de US$ 40 mil. Sem cirurgia, o sinal do cérebro serve só para escolher opções."
---

# Descobertas

Aqui ficam as coisas que aprendemos e que mudam como o projeto é feito. Cada item tem data e as fontes entre colchetes, que levam para as [referências](referencias.md). O detalhe completo está na [pesquisa inicial](pesquisa/pesquisa-inicial.md).

Ao registrar algo novo: escreva a data, uma frase curta e a fonte. Se não tiver certeza, marque **[verificar]**.

## O problema

- **17/10/2026.** São cerca de 97 milhões de pessoas no mundo com necessidades complexas de comunicação [G3]. É uma estimativa sem método publicado. No Reino Unido, um estudo mais cuidadoso chegou a 0,5% da população [G2].
- **17/10/2026.** Em alguns países pobres, só 3% das pessoas que precisam de tecnologia assistiva têm acesso. Em alguns países ricos, 90%. Dois terços pagam do próprio bolso [G1].
- **17/10/2026.** Com esses sistemas, a pessoa fala 8 a 10 palavras por minuto. Na fala comum são cerca de 150. Por volta de 1 em cada 3 abandona o sistema **[verificar]**. Os motivos mais comuns são falta de treinamento, voz ruim e sistema que não se ajusta à pessoa.
- **17/10/2026.** Mais de 90% das crianças surdas nascem em famílias ouvintes. Quase tudo o que existe ajuda a pessoa a falar, e quase nada ajuda a entender.

## Mercado e preços

- **17/10/2026.** Comunicadores dedicados custam de US$ 5 mil a 15 mil, segundo uma tabela pública de reembolso canadense [G4]. Os mesmos modelos, usados, saem por US$ 200 a 1.650.
- **17/10/2026.** Apps de comunicação para tablet custam de US$ 150 a 300, e o mercado está indo para assinatura mensal.
- **17/10/2026.** Um rastreador de olhar vendido como equipamento médico custa cerca de US$ 1.250. Um parecido, vendido para jogos, custa US$ 229. Um botão adaptado comercial custa US$ 75 a 107; feito em casa, cerca de US$ 8.
- **17/10/2026.** No SUS, a comunicação alternativa aparece como terapia, mas não encontramos código para os aparelhos **[verificar]**.
- **17/10/2026.** As soluções brasileiras que encontramos (mouse de cabeça, tablet que lê o rosto, apps de pranchas, tradutores para Libras) são fechadas e cobradas por assinatura. Nenhuma tem estudo independente publicado.

## O que já existe aberto

- **17/10/2026.** Existem apps de pranchas abertos e maduros, com licenças GPL e AGPL. O teclado aberto por olhar mais conhecido só roda no Windows. A biblioteca aberta de controle pelo rosto foi arquivada.
- **17/10/2026.** O maior conjunto aberto de pictogramas é **não comercial**. Os de licença mais livre são menores. Não existe vocabulário essencial aberto e validado em português.
- **17/10/2026.** Voz e fala sem internet já são possíveis com bibliotecas abertas: sherpa-onnx, whisper.cpp e Vosk [A8]. Há um modelo aberto de reconhecimento de fala para mais de 1.600 línguas.

## Voz própria

- **17/10/2026.** Há três caminhos:
  - gravar frases enquanto a pessoa ainda fala bem;
  - gravar mensagens inteiras [V3];
  - reconstruir a voz a partir de áudios antigos [V1, V2].
- **17/10/2026.** Preservar a voz ajuda a manter a identidade [V4]. Vale oferecer cedo [V5]. Voz de baixa qualidade é rejeitada [V6].
- **17/10/2026.** Os únicos modelos que juntam licença livre, clonagem e português são Qwen3-TTS, Chatterbox e Pocket TTS [V10, V11].
- **17/10/2026.** A voz é criada uma vez, num computador com placa de vídeo, e vira um arquivo de 60 a 75 MB que roda sem internet [V24, V30].
- **17/10/2026.** Clones de voz enganam ouvintes em cerca de 80% das vezes [V36]. Por isso entram consentimento, marca d'água [V35] e processamento no aparelho.

## Olhar, rosto e controle do celular

- **17/10/2026.** A câmera do celular erra de 1,3 a 1,7 cm ao estimar o olhar [E1], ou 0,46 cm no melhor caso [E2]. Isso dá de 2×3 a 3×4 alvos por tela [E12, E4].
- **17/10/2026.** Funcionam melhor que o olhar fino:
  - piscada longa [E15];
  - expressões do rosto;
  - cursor pela cabeça [E20];
  - gestos de olhar [E14, E16];
  - varredura [E19].
- **17/10/2026.** No Android, um serviço de acessibilidade consegue controlar o celular inteiro [E34]. No iOS, nenhum app consegue.
- **17/10/2026.** Quase todos os dados para treinar modelos de olhar são não comerciais [E3]. O caminho livre é usar os pontos do rosto do MediaPipe com calibração para cada pessoa [E33].
- **17/10/2026.** Desde 30/09/2026, o Android exige verificação de quem desenvolve o app no Brasil, mesmo fora da loja [E36].
- **17/10/2026.** Não encontramos estudo clínico com câmera comum e pessoas com ELA ou paralisia cerebral [E23–E27].

## Libras

- **17/10/2026.** O conjunto de dados de Libras mais livre tem 20 sinais e licença CC BY [L1]. Os outros têm licença restrita ou indefinida [L2–L5].
- **17/10/2026.** Reconhecer sinais isolados chega a 91–94% de acerto com vocabulário pequeno [L6]. A tradução contínua ainda não é utilizável [L7, L8].
- **17/10/2026.** A ferramenta pública de tradução por avatar é criticada por transpor o português, sinal a sinal [L18]. As federações de surdos e de intérpretes rejeitam avatar como substituto de intérprete [L21].
- **17/10/2026.** O rosto faz parte da gramática da Libras, então vídeo de sinalização não pode ser anonimizado. O consentimento precisa ser feito em Libras.

## Interfaces cérebro-computador

- **17/10/2026.** Implantes chegam a até 97% de acerto e a 56–78 palavras por minuto [B1–B5]. Custam mais de US$ 40 mil e não têm aprovação comercial.
- **17/10/2026.** Sem cirurgia, o EEG erra cerca de 67% dos caracteres em texto livre [B6]. Para escolher opções, faz de 3 a 8 escolhas por minuto [B7, B8].

## IA e o que funciona na prática

- **17/10/2026.** Completar frases a partir das iniciais aumentou a velocidade em 29–60% em 2 pessoas com ELA [E22]. Quem usa CAA alerta para o risco de a IA falar no lugar da pessoa [P1].
- **17/10/2026.** Comunicação alternativa não atrapalha a fala. O parceiro que aponta os símbolos enquanto conversa ajuda a pessoa a aprender. Manter cada símbolo no mesmo lugar faz diferença.

## Hardware barato

- **17/10/2026.** Um Android de 3–4 GB roda prancha, voz local, um modelo de linguagem de cerca de 1B de parâmetros e leitura do rosto.
- **17/10/2026.** Um sensor de olhos por eletrodos custa de US$ 10 a 25 [E28]. Uma câmera infravermelha com LEDs, de US$ 15 a 30 **[verificar]**.

## Design e acessibilidade do site

- **17/10/2026.** A meta é contraste de 7:1 no texto e 3:1 em bordas e foco, com linhas de até 80 caracteres, entrelinha de 1,5 ou mais e texto alinhado à esquerda [D1].
- **17/10/2026.** Para cognição, afasia e dislexia ajudam:
  - frases curtas, palavras do dia a dia e um resumo no começo [D2];
  - negrito para destacar, nunca itálico;
  - fundo levemente colorido em vez de branco puro [D3, D4].
- **17/10/2026.** A primeira paleta (fundo creme, verde-azulado e âmbar) foi recusada por parecer antiga. A atual usa uma base neutra com um leve tom frio (`#FCFDFE`), quase branca, mais próxima do visual moderno pedido. Para não cansar a leitura, o texto não é preto puro e o contraste continua acima de 7:1. Vale testar com pessoas com dislexia e voltar a um fundo mais colorido se for preciso **[verificar]**.
- **17/10/2026.** O tema visual padrão que serviu de inspiração tem foco com contraste baixo (cerca de 2,6:1) e textos pequenos (12–14px). Ajustamos as duas coisas [D6].
- **17/10/2026.** A fonte Atkinson Hyperlegible Next foi feita para pessoas com baixa visão e tem licença livre. Não achamos estudo revisado por pares sobre ela [D7].
