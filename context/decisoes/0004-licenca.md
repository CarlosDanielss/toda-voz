---
titulo: "0004: Código livre (AGPL-3.0) e conteúdo sem uso comercial (CC BY-NC-SA 4.0)"
descricao: Ninguém pode fechar o código e ninguém pode vender o conteúdo. Escolas, ONGs, hospitais e o poder público podem usar livremente.
atualizado: 2026-10-17
status: aceita
data: 2026-10-17
---

# 0004: Código livre (AGPL-3.0) e conteúdo sem uso comercial (CC BY-NC-SA 4.0)

## Contexto
O Carlos quer que o projeto seja livre para usar e para colaborar, mas que ninguém possa lucrar com ele.

Se usássemos uma licença "não comercial" para tudo, inclusive para o código, três coisas aconteceriam:
- o projeto deixaria de ser considerado código aberto;
- não poderíamos aproveitar código de outros projetos abertos com licença GPL;
- perderíamos o reconhecimento como bem público digital e o acesso a editais de apoio, que exigem código aberto [A17, A18].

Além disso, "comercial" é uma palavra que gera dúvida. Uma prefeitura que contrata uma empresa para instalar o app em tablets do SUS está fazendo uso comercial?

## Decisão
1. **Código:** **AGPL-3.0-or-later** (arquivo `LICENSE`). Qualquer pessoa pode usar, estudar e modificar. Quem modificar, ou oferecer o software como serviço, é obrigado a publicar o código. Assim ninguém consegue fechar o projeto.
2. **Conteúdo:** **CC BY-NC-SA 4.0** (arquivo `LICENSE-CONTENT.md`) [A26]. Vale para:
   - os textos do `context/`;
   - o vocabulário;
   - os pictogramas próprios;
   - os vídeos de Libras;
   - as frases gravadas;
   - as vozes doadas.

   Ninguém pode vender esse conteúdo. O arquivo explica, em linguagem simples, o que conta e o que não conta como uso comercial.
3. **Contribuições:** aceitas com uma declaração simples de autoria (DCO), sem cessão de direitos. Assim ninguém concentra o poder de mudar a licença.

## Alternativas consideradas
- **Tudo não comercial, inclusive o código:** cumpre o pedido à risca, mas tem as três consequências descritas no Contexto.
- **Licenças permissivas (MIT ou Apache) para tudo:** permitiriam que alguém criasse uma versão fechada e vendesse. Vai contra o objetivo.

## Consequências
- Podemos aproveitar código aberto com licença GPL-3.0, AGPL-3.0, MIT, BSD, Apache ou LGPL.
- Conjuntos de pictogramas com licença CC BY-NC-SA são compatíveis com o nosso conteúdo.
- Material de terceiros com outra licença (por exemplo, CC BY-SA) mantém a licença original e fica separado, com aviso.
- Modelos de IA com licença não comercial continuam fora do código ([0008](0008-sem-dependencias-que-travem.md)).
- A AGPL tem atrito com a loja de apps do iOS. Isso será reavaliado se o iOS virar prioridade.
- **Pendente:** pedir para alguém da área jurídica revisar o texto sobre uso não comercial **[verificar]**.

## Referências
[A16], [A17], [A18], [A26]
