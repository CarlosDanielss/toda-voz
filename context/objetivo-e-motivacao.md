---
titulo: Objetivo e motivação
descricao: Por que o Toda Voz existe, para quem é e o que queremos construir.
atualizado: 2026-10-17
status: vivo
ordem: 1
inicio: 2026-10-17
resumo:
  - "Muita gente perde a fala depois de um AVC, de um acidente ou de uma doença como a ELA. Outras pessoas nascem sem ela. Existe tecnologia para que todas se comuniquem, mas custa milhares de dólares, fala poucas línguas e quase nunca chega a quem precisa."
  - "Queremos mudar isso com um aplicativo aberto e gratuito, que funcione sem internet num celular simples, em português e em Libras, e que deixe a pessoa falar com a própria voz."
  - "Ninguém faz isso sozinho. O Toda Voz é feito com quem usa, com as famílias, com a comunidade surda e com qualquer pessoa que queira ajudar."
destaques:
  - valor: "~97 milhões"
    rotulo: de pessoas no mundo têm dificuldade grave para se comunicar
    nota: estimativa da literatura científica
  - valor: "3% × 90%"
    rotulo: das pessoas têm acesso a tecnologia assistiva em países pobres × ricos
    nota: Organização Mundial da Saúde, 2022
  - valor: "US$ 10–20 mil"
    rotulo: custa um aparelho que fala controlado pelo olhar
    nota: usado, o mesmo aparelho sai por algumas centenas de dólares
  - valor: "8–10 × 150"
    rotulo: palavras por minuto com esses aparelhos × na fala comum
    nota: com um único botão, cerca de 2 por minuto
  - valor: "~100 de 7.000"
    rotulo: línguas têm voz sintética de boa qualidade
    nota: vocabulário validado existe quase só em inglês
  - valor: "300+"
    rotulo: línguas de sinais no mundo
    nota: usadas por cerca de 70 milhões de pessoas surdas
principios:
  - titulo: Funciona sem internet
    texto: Tudo o que é essencial funciona offline. A internet só acrescenta.
  - titulo: Quem fala é a pessoa
    texto: A IA pode sugerir, mas nada é dito sem a confirmação de quem está falando.
  - titulo: Os dados ficam com a pessoa
    texto: Imagens da câmera e gravações de voz não saem do aparelho sem permissão.
  - titulo: Ninguém pode trancar
    texto: Código livre, conteúdo sem uso comercial e formatos abertos.
  - titulo: Barato de verdade
    texto: Do papel impresso ao celular usado da família.
  - titulo: Feito junto
    texto: Quem usa, as famílias e a comunidade surda decidem com a gente.
---

# Objetivo e motivação

## Em poucas palavras

O Toda Voz quer que **qualquer pessoa que não consegue falar, ou que tem dificuldade para entender, consiga se comunicar**. O projeto é sem fins lucrativos e aberto a quem quiser ajudar. Começamos em português e em Libras.

## O problema

Muita gente perde a fala depois de um AVC, de um acidente ou de doenças como a ELA. Outras pessoas nascem sem ela: crianças com paralisia cerebral, autistas que não falam, pessoas com síndrome de Down ou de Rett. Há também quem tenha dificuldade para entender o que ouve, como acontece em alguns tipos de afasia e na demência. E há milhões de pessoas surdas que se comunicam em língua de sinais num mundo que fala português.

Existe tecnologia para ajudar, mas ela:
- **custa caro.** Um aparelho que fala pelo olhar sai por US$ 10 mil a 20 mil, e não encontramos cobertura no SUS;
- **fala poucas línguas.** Quase tudo foi feito em inglês;
- **é lenta.** Com esses aparelhos, a pessoa fala de 8 a 10 palavras por minuto, contra cerca de 150 na fala comum;
- **ajuda pouco a entender.** Quase tudo serve para a pessoa falar, quase nada para ela compreender.

Os números e as fontes estão em [descobertas](descobertas.md).

## Para quem

- Quem não fala: pessoas com ELA, AVC, paralisia cerebral, autismo, síndrome do encarceramento, Rett, câncer de laringe ou traumatismo craniano.
- Quem tem dificuldade para entender: pessoas com afasia, deficiência intelectual ou demência.
- Pessoas surdas, começando pela Libras.
- Quem está em volta: famílias, cuidadores, professores, fonoaudiólogos e equipes de saúde.

## O que queremos construir

Um aplicativo aberto que funciona sem internet num celular simples, num computador pequeno ou até em papel impresso. Com ele, a pessoa vai poder:

1. Montar frases com símbolos, palavras ou teclado e ouvir o aparelho falar, se possível **com a própria voz**, recriada a partir de áudios antigos.
2. Usar o que ela consegue mexer: o dedo, um botão, a cabeça, os olhos, uma piscada ou uma expressão do rosto.
3. Usar o celular inteiro sem as mãos: voltar, abrir apps, ligar, responder mensagens, pedir ajuda.
4. Ver os sinais em Libras ligados aos símbolos, gravados por pessoas surdas.
5. Entender melhor o que dizem para ela, com fala transformada em símbolos e texto simples.

Os detalhes estão na [arquitetura](arquitetura.md) e nos [módulos](modulos/README.md).

## Por que fazer isso

Durante a pesquisa vimos que quase tudo o que é preciso já existe, em pedaços abertos e espalhados. O que falta é alguém juntar, em português e em Libras, de um jeito simples e barato, sem depender de uma empresa que pode fechar ou começar a cobrar.

Também queremos dignidade. Falar com a própria voz, e não com uma voz robótica qualquer. Ter certeza de que nenhuma IA fala no seu lugar. Ser ouvido por quem constrói a ferramenta.

## O que o Toda Voz não é

- **Não substitui** fonoaudiólogos, terapeutas ou intérpretes de Libras. Queremos ser uma ferramenta para eles e com eles.
- **Não lê pensamentos.** Hoje isso só existe com implante no cérebro. Deixamos o projeto pronto para quando ficar acessível.
- **Não é um produto à venda.** O código é livre e o conteúdo não pode ser usado para fins comerciais. Veja a [decisão 0004](decisoes/0004-licenca.md).

## Como vamos saber se está dando certo

Ainda vamos definir isso com quem usa, mas pensamos em acompanhar:
- quantas pessoas se comunicam com o Toda Voz, e em quais línguas;
- quantas palavras por minuto elas conseguem dizer;
- quantas continuam usando depois de alguns meses;
- quanto custa atender cada pessoa;
- quantas línguas, faladas e de sinais, têm vocabulário validado por quem as usa.
