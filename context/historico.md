---
titulo: Como chegamos aqui
descricao: A história do projeto até agora, contada sem pressa.
atualizado: 2026-10-17
status: vivo
ordem: 2
resumo:
  - "O Toda Voz começou em 17 de outubro de 2026, a partir de uma pergunta: o que dá para fazer, de forma aberta e barata, por quem perdeu a fala ou nunca a teve? Pode ser alguém que sofreu um AVC, uma criança autista que não fala, uma pessoa com ELA que hoje só mexe os olhos."
  - "Antes de pensar em código, fomos pesquisar. Queríamos saber quem são essas pessoas, o que já existe, quanto custa e por que tanta gente fica sem nada. A resposta mais dura foi a do preço: um aparelho que fala pelo olhar custa o mesmo que um carro popular, e o SUS não cobre."
  - "A pesquisa também trouxe esperança. Quase tudo o que é preciso já existe em pedaços abertos. Faltava alguém juntar, em português e em Libras, num celular simples e sem depender de internet. É isso que estamos tentando fazer."
# Espaço para o Carlos escrever, com as palavras dele, por que começou o projeto.
# Escreva entre as aspas abaixo. Enquanto estiver vazio, o site não mostra esta parte.
porque_comecei: ""
---

# Como chegamos aqui

## A pergunta

O Toda Voz começou em **17 de outubro de 2026**, com uma pergunta simples: muita gente não consegue se comunicar, então o que dá para fazer?

Às vezes foi um acidente ou uma doença que tirou a fala. Às vezes a pessoa nasceu assim. Em todos os casos, o problema é o mesmo: ela não consegue dizer o que quer, e muitas vezes também tem dificuldade para entender o que dizem para ela.

A ideia era fazer algo aberto, sem fins lucrativos e barato de verdade, que servisse para o mundo e não só para o Brasil.

## O que a pesquisa mostrou

Antes de escrever código, fomos ler. Procuramos quem são essas pessoas, o que já existe, quanto custa e o que a ciência já sabe.

A primeira surpresa foi o tamanho do problema. São dezenas de milhões de pessoas, e na maioria dos países quase nenhuma tem acesso a um aparelho de comunicação.

A segunda foi o preço. Um comunicador controlado pelo olhar custa de US$ 10 mil a 20 mil. O hardware dentro dele custa uma fração disso. O preço alto existe porque, nos países ricos, o seguro paga. No Brasil, não encontramos cobertura no SUS.

A terceira foi a mais animadora. Quase tudo o que precisamos já existe em projetos abertos: voz que funciona sem internet, leitura do rosto pela câmera, reconhecimento de fala em muitas línguas, pranchas de símbolos. Só que está tudo espalhado, quase sempre em inglês, e ninguém juntou de um jeito simples e barato.

## O que fomos aprofundando

Depois disso, olhamos com mais cuidado para o que o projeto queria fazer.

- **A voz da própria pessoa.** Descobrimos que dá para reconstruir o timbre a partir de áudios antigos, como mensagens de voz e vídeos. O trabalho pesado é feito uma vez num computador mais forte. Depois a voz funciona sem internet num celular simples.
- **Usar o celular sem as mãos.** A câmera comum não é precisa o bastante para apertar botões pequenos com o olhar. Movimentos da cabeça, piscadas longas e expressões do rosto funcionam melhor, junto com alvos grandes na tela.
- **Libras.** A tradução automática ainda não funciona bem, e a comunidade surda não aceita avatar no lugar de intérprete. O caminho é um dicionário em vídeo gravado por pessoas surdas, feito junto com elas.
- **"Pensar e falar".** Isso existe, mas só com implante cerebral, caro e ainda experimental. Por enquanto, sinais do cérebro servem para escolher opções. Deixamos o projeto pronto para quando isso ficar acessível.
- **Não depender de ninguém.** Vimos ferramentas que fecharam, mudaram de licença ou passaram a cobrar. Por isso escolhemos formatos abertos e licenças que impedem que alguém tranque o projeto.

## As primeiras decisões

Com isso, tomamos as primeiras decisões:
- o nome **Toda Voz** ([0001](decisoes/0001-nome-toda-voz.md));
- começar por **português e Libras** ([0002](decisoes/0002-piloto-portugues-libras.md));
- funcionar **sem internet** ([0003](decisoes/0003-offline-first.md));
- **código livre e conteúdo sem uso comercial** ([0004](decisoes/0004-licenca.md));
- guardar tudo **num só lugar**, esta pasta `context/` ([0005](decisoes/0005-monorepo.md)).

Também mudamos de ideia no caminho. Pensamos em citar as soluções que já existem e decidimos não fazer isso, para que o Toda Voz seja julgado pelo que ele é.

## Onde estamos

Estamos na **fase 0, de fundação**: pesquisa feita, decisões registradas, este site funcionando e a identidade visual em construção. O próximo passo é montar o vocabulário essencial em português e as primeiras pranchas para imprimir. Veja o [roteiro](roteiro.md).
