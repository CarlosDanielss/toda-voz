---
titulo: Identidade visual
descricao: Paleta de cores, tipografia, componentes, regras de acessibilidade do site e o prompt para criar o logo.
atualizado: 2026-10-17
status: vivo
ordem: 5
---

# Identidade visual

O Toda Voz quer parecer **moderno, minimalista e criativo**, sem abrir mão de ser **o mais fácil de ler possível**. A base é o shadcn/ui [D6]: muito espaço em branco, cinzas neutros e uma cor forte só onde importa. Em cima disso entram os ajustes de acessibilidade para quem tem baixa visão, dislexia, afasia ou deficiência intelectual [D1–D4]. A decisão está em [0013](decisoes/0013-identidade-visual-e-acessibilidade.md).

## A ideia da paleta

- **Base neutra.** Fundo quase branco no tema claro e quase preto no escuro. Os cinzas têm um leve tom frio, que dá o ar limpo e tecnológico.
- **Violeta elétrico, a cor principal.** Criatividade e inovação. Aparece em links, botões, foco e na fase atual do roteiro.
- **Gradiente violeta → ciano, a assinatura.** É o toque de inovação, e aparece em pouca coisa: a frase "Toda voz importa", os números grandes, a marca, a barra de progresso e um brilho suave no topo da página. As duas pontas do gradiente têm contraste de pelo menos 4,5:1 com o fundo, então o texto continua legível em qualquer ponto.
- **Cores de situação:** verde para "decidido", âmbar para "em avaliação", vermelho para "descartado". **Sempre com ícone e texto**, nunca só a cor [D1].

As cores são escritas em OKLCH, com os nomes do shadcn/ui (`--background`, `--primary`…), e ficam em `apps/site/src/styles/tokens.css`. Para ver todas com hex e contraste, rode `pnpm --filter @toda-voz/site paleta`.

### Cores principais

| Papel | Claro | Escuro |
|---|---|---|
| Fundo (`--background`) | `#FCFDFE` | `#0A090F` |
| Texto (`--foreground`) | `#15151D` | `#F6F6F9` |
| Cards (`--card`) | `#FFFFFF` | `#121219` |
| Texto secundário (`--muted-foreground`) | `#51515B` | `#B3B3BE` |
| Bordas (`--border`) | `#E2E2E7` | `#2A2A33` |
| **Violeta principal** (`--primary`) | `#5844D4` | `#9F99FE` |
| Texto sobre o violeta (`--primary-foreground`) | `#FAFAFD` | `#0C0B1A` |
| **Gradiente: início** (`--brand-from`) | `#5844D4` | `#B0A2FE` |
| **Gradiente: fim** (`--brand-to`) | `#0A6E88` | `#5ED9E6` |
| Destaque suave (`--accent` / `--accent-foreground`) | `#EEEEFF` / `#4530AF` | `#24233E` / `#D3D3FE` |
| Foco (`--ring`) | `#5844D4` | `#9F99FE` |
| Decidido (`--success` sobre `--success-surface`) | `#036D3D` sobre `#DFFCE8` | `#6AD895` sobre `#0C2B19` |
| Em avaliação (`--warning` sobre `--warning-surface`) | `#845011` sobre `#FEF4DF` | `#F2C86C` sobre `#372508` |
| Descartado (`--destructive` sobre `--destructive-surface`) | `#BA1D27` sobre `#FFEFEF` | `#FF8482` sobre `#421B1B` |

### Contraste medido

Calculado com a fórmula oficial da WCAG 2.2 [D1] pelo script `apps/site/scripts/check-contrast.mjs`. Ele roda em todo build e falha se algum par ficar abaixo do mínimo ou se alguma cor não couber em sRGB (o espaço de cores das telas comuns).

- **Texto:** a meta é **7:1**.
- **Bordas e foco:** o mínimo é **3:1**.

| Par | Claro | Escuro | Mínimo |
|---|---|---|---|
| Texto sobre fundo | 17,8:1 | 18,4:1 | 7:1 |
| Texto secundário sobre fundo | 7,7:1 | 9,6:1 | 7:1 |
| Texto secundário sobre card | 7,8:1 | 9,0:1 | 7:1 |
| Botão principal (texto sobre violeta) | 6,3:1 | 7,9:1 | 4,5:1 |
| Links (violeta sobre fundo) | 6,5:1 | 8,0:1 | 4,5:1 |
| Gradiente, início, sobre fundo | 6,5:1 | 8,9:1 | 4,5:1 |
| Gradiente, fim, sobre fundo | 5,7:1 | 11,9:1 | 4,5:1 |
| Selo "decidido" | 5,9:1 | 8,6:1 | 4,5:1 |
| Selo "em avaliação" | 6,1:1 | 9,3:1 | 4,5:1 |
| Selo "descartado" | 5,7:1 | 6,3:1 | 4,5:1 |
| Contorno de foco | 6,5:1 | 8,0:1 | 3:1 |
| Bordas de controles | 3,9:1 | 3,6:1 | 3:1 |

## Componentes

O site usa os componentes do **shadcn/ui** (Button, Card, Badge, Table, Progress, Separator), em `apps/site/src/components/ui/`. Eles são gerados como HTML no build, então **nenhum JavaScript do React vai para o navegador**.

Mudamos o seguinte em relação ao padrão do shadcn:
- **Botões:** pelo menos 44px de altura e texto de 18px (o padrão é 36px e 14px).
- **Foco:** contorno sólido de 3px. O padrão usa 50% de transparência, o que dá cerca de 2,6:1 de contraste e não passa no mínimo.
- **Selos:** texto de cerca de 15px (o padrão é 12px), borda sempre visível e variantes de situação com ícone.
- **Títulos dos cards:** são títulos de verdade (`<h3>`), para quem navega por leitor de tela.
- **Tabelas:** o texto quebra linha, em vez de forçar rolagem para o lado.
- **Barra de progresso:** tem borda, para ser vista também em telas ruins.

## Tipografia

- **Fonte:** Atkinson Hyperlegible Next [D7]. Foi desenhada para pessoas com baixa visão: letras parecidas (I, l e 1; O e 0) têm formas bem diferentes. Tem cara moderna, licença livre (SIL OFL 1.1), cobre mais de 150 línguas e fica dentro do próprio site.
- **Texto base:** 18px, com entrelinha de 1,6 e linhas de até cerca de 68 caracteres, alinhadas à esquerda [D1, D3].
- **Ênfase:** sempre em **negrito**. Nunca itálico. Sublinhado só em links [D3].

## Regras de acessibilidade

- Contraste de 7:1 no texto e 3:1 em bordas, ícones e foco [D1].
- Foco sempre visível, e nunca escondido pelo cabeçalho fixo.
- **Cabeçalho compacto** (64px), com o logo, os links e o botão de tema:
  - no celular, os links ficam num botão **Menu**, que abre e fecha sem JavaScript e funciona pelo teclado;
  - o item da página atual fica sublinhado, sem caixa de fundo.
- Alvos de toque com pelo menos 44px.
- **Tudo que é clicável mostra a "mãozinha"** (cursor de ponteiro) e muda de aparência ao passar o mouse.
- Funciona com zoom de 200% e em telas de 320px, sem rolagem para os lados.
- Frases curtas, palavras do dia a dia e títulos que dizem o que vem depois [D2, D4].
- Ícones sempre acompanhados de texto. **Única exceção:** o botão de tema, que mostra só o ícone (lua ou sol) para não pesar o cabeçalho, mas tem a ação escrita para leitores de tela e na dica que aparece ao passar o mouse.
- **Tema:** começa seguindo o sistema.
  - O botão do cabeçalho **alterna entre claro e escuro** e sempre diz o que vai fazer ("Usar tema escuro" ou "Usar tema claro"). A troca é anunciada para leitores de tela.
  - Depois de escolher, o rodapé mostra **"Voltar a seguir o tema do sistema"**.
  - Sem JavaScript, o site segue o sistema [D5].
  - Antes, o botão percorria Sistema → Claro → Escuro. Isso confundia, porque às vezes o clique não mudava nada visível.
- **Preferências do sistema:**
  - menos movimento: sem animações;
  - mais contraste: bordas e textos mais fortes;
  - alto contraste do Windows: bordas no lugar de gradientes e sombras [D5].

## Logo

O logo oficial é o **ponto + haste + arco** ([decisão 0014](decisoes/0014-logo-oficial.md)):
- **ponto:** o olhar e a intenção;
- **haste:** o gesto e o sinal;
- **arco:** a voz que chega até o outro.

Os arquivos e as regras de uso estão em `assets/logo/` e em `assets/README.md`, na raiz do repositório. No site, o símbolo é desenhado no próprio código, com as cores do tema.

Os prompts do logo, mais abaixo, foram usados para gerar as propostas e ficam como registro. Eles servem de novo se for preciso criar variações.

### Prompt do logo (português)

```text
Crie propostas de logo para o "Toda Voz", um projeto aberto e sem fins lucrativos de tecnologia que ajuda pessoas que não conseguem falar (por AVC, ELA, paralisia cerebral, autismo e outras condições) e pessoas surdas a se comunicarem. A frase do projeto é "Toda voz importa". A ideia central: cada pessoa tem voz, mesmo quem não fala, e a voz pode sair de muitas formas (olhar, gesto, símbolo, sinal de Libras, som).

Estilo:
- Moderno, minimalista, inovador e criativo, com cara de tecnologia atual, mas humano e acolhedor.
- Geométrico, limpo, poucas formas, cantos suavemente arredondados. Bastante respiro.
- Pode usar um gradiente suave de violeta para ciano na versão colorida, mas o símbolo precisa funcionar igualmente bem em uma cor só, sem gradiente.
- Nada de 3D, brilho, sombras realistas, texturas ou excesso de detalhes.
- Reconhecível em 16 px (favicon) e bonito em 512 px (ícone de app).

O que quero:
- 4 conceitos diferentes de símbolo, cada um com uma frase explicando a ideia.
- Ideias de partida (não são regras): um balão de conversa formado por duas formas que se encontram (diálogo); ondas de voz feitas de marcas diferentes (um ponto, uma onda, uma curva), mostrando as várias formas de se expressar; várias linhas que convergem numa só (muitas vozes); uma forma que lembra ao mesmo tempo um olho e uma onda de som.
- Logotipo com o símbolo + o nome "Toda Voz" em fonte sem serifa moderna e muito legível (de preferência Atkinson Hyperlegible Next, peso semibold ou bold), com só a primeira letra de cada palavra em maiúscula.

Cores:
- Violeta principal: #5844D4 (em fundo escuro: #9F99FE)
- Ciano, fim do gradiente: #0A6E88 (em fundo escuro: #5ED9E6)
- Gradiente da marca: de #5844D4 para #0A6E88 (em fundo escuro: de #B0A2FE para #5ED9E6)
- Fundo claro: #FCFDFE. Fundo escuro: #0A090F. Texto: #15151D (claro) e #F6F6F9 (escuro).

Evite:
- Qualquer semelhança com logos de aplicativos de mensagem, redes sociais, assistentes de voz ou marcas de tecnologia e saúde existentes (por exemplo, balão de fala com telefone, microfone genérico, ondas de áudio de apps de música).
- Mãos formando sinais de Libras ou de outra língua de sinais: um sinal mal desenhado pode ter outro significado. Se usar mão, que seja abstrata.
- Clichês de deficiência (cadeira de rodas, cruz médica, laços) e imagens de pena ou caridade.
- Clichês de "IA" (cérebro com circuitos, robôs, faíscas).
- Texto dentro do símbolo.
- Depender só da cor: o símbolo precisa funcionar em preto e em branco.

Entregue cada conceito em:
1. Símbolo sozinho.
2. Símbolo + nome na horizontal.
3. Símbolo + nome na vertical.
4. Versões: colorida (com gradiente) em fundo claro, colorida em fundo escuro, cor única violeta, monocromática preta e monocromática branca.
5. Ícone de app quadrado com cantos arredondados, com margem de segurança para ícones adaptativos do Android (símbolo dentro dos 66% centrais).
Formato vetorial (SVG), fundo transparente.
```

### Prompt do logo (English)

Algumas ferramentas de imagem funcionam melhor em inglês.

```text
Design logo proposals for "Toda Voz" (Portuguese for "Every Voice"), an open-source, non-profit technology project that helps people who cannot speak (due to stroke, ALS, cerebral palsy, autism and other conditions) and Deaf people communicate. Tagline: "Toda voz importa" ("Every voice matters"). Core idea: everyone has a voice, even those who do not speak, and a voice can come out in many ways (gaze, gesture, symbol, sign language, sound).

Style:
- Modern, minimalist, innovative and creative, with a contemporary tech feel, yet human and warm.
- Geometric, clean, few shapes, softly rounded corners, generous whitespace.
- The color version may use a soft violet-to-cyan gradient, but the symbol must work equally well in a single flat color.
- No 3D, gloss, realistic shadows, textures or fine detail.
- Recognizable at 16 px (favicon) and beautiful at 512 px (app icon).

Deliver:
- 4 distinct symbol concepts, each with a one-sentence rationale.
- Starting ideas (not rules): a speech bubble formed by two shapes meeting (dialogue); voice waves made of different marks (a dot, a wave, a curve) showing different ways of expressing oneself; several lines converging into one (many voices); a shape that reads both as an eye and as a sound wave.
- Wordmark "Toda Voz" in a modern, highly legible sans-serif (preferably Atkinson Hyperlegible Next, semibold or bold), title case.

Colors:
- Primary violet: #5844D4 (on dark: #9F99FE)
- Cyan, gradient end: #0A6E88 (on dark: #5ED9E6)
- Brand gradient: #5844D4 → #0A6E88 (on dark: #B0A2FE → #5ED9E6)
- Light background: #FCFDFE. Dark background: #0A090F. Text: #15151D (light) and #F6F6F9 (dark).

Avoid:
- Any resemblance to messaging apps, social networks, voice assistants or existing tech/health brands (e.g. speech bubble with a phone, generic microphone, music-app audio waves).
- Hands forming actual sign-language signs (Libras or others): a poorly drawn sign may mean something else. If a hand is used, keep it abstract.
- Disability clichés (wheelchair, medical cross, ribbons) and pity/charity imagery.
- "AI" clichés (circuit brains, robots, sparkles).
- Text inside the symbol.
- Relying on color alone: the symbol must work in pure black and pure white.

For each concept provide: symbol only; horizontal lockup; vertical lockup; full color (gradient) on light, full color on dark, single violet, black mono, white mono; a square rounded app icon with Android adaptive-icon safe zone (symbol within the central 66%). Vector SVG, transparent background.
```

## Ilustração do topo da página inicial

O topo da página inicial mostra uma ilustração de **pessoas se comunicando de jeitos diferentes**. Ela não substitui o logo: é uma imagem de apoio.

**Em uso desde 17/10/2026: versão 2.** São três pessoas, cada uma num círculo:
- uma mulher idosa tocando símbolos num tablet;
- um homem escolhendo um símbolo com o olhar;
- uma jovem surda sinalizando com as mãos abertas.

Sobre a imagem:
- **Fundo escuro próprio:** aparece como um cartão de cantos arredondados nos dois temas.
- **Arquivos:** o original fica em `assets/ilustracoes/originais/topo-original.jpg`. O site usa WebP de 1200 px (59 KB) e 800 px (37 KB).
- **Texto alternativo:** descreve as três pessoas (em `apps/site/src/components/Landing.tsx`).
- **Validar com pessoas surdas [verificar]:** as mãos estão abertas e com os dedos separados. Parece um aceno, mas pode lembrar o número 5.

### Histórico
- **Versão 1 (17/10/2026), reprovada.** Guardada em `assets/ilustracoes/alternativas/reprovada-v1/`. Problemas:
  - era uma imagem com fundo branco, então foi preciso recortar; o recorte deixou bordas serrilhadas e manchas de compressão no tema escuro;
  - as pessoas terminavam cortadas em linha reta (pernas, tronco, mesa), e esses cortes ficaram soltos no ar sem o fundo;
  - as mãos de quem sinalizava formavam "OK" e letras, que podem ser lidas como sinais de verdade;
  - as linhas pontilhadas do olhar eram claras e finas demais e quase sumiam.
- **Versão 2 (17/10/2026), aprovada e em uso.** Foi feita com o prompt abaixo, que evita cada um desses problemas:
  - **fundo escuro próprio:** a imagem vira um "cartão" que funciona nos dois temas, sem recorte;
  - **cada pessoa num círculo:** o corte passa a ser parte do desenho;
  - **só três pessoas, maiores:** menos chance de rosto ou mão deformados;
  - **mãos abertas com linhas de movimento**, em vez de sinais.

### Como trocar a imagem
1. Salve o arquivo novo como `assets/ilustracoes/originais/topo-original.jpg`.
2. Rode `python3 -I tools/imagens/preparar-ilustracoes.py`. O script gera as versões leves do site, sem recortar.
3. Antes de publicar:
   - mostre a imagem para pessoas que usam comunicação alternativa e para pessoas surdas;
   - confira se nenhuma mão forma um sinal real.

### Prompt da ilustração, versão 2 (português)

```text
Crie uma ilustração para o topo do site do "Toda Voz", um projeto aberto e sem fins lucrativos que ajuda pessoas que não conseguem falar (por AVC, ELA, paralisia cerebral, autismo e outras condições) e pessoas surdas a se comunicarem. A frase do projeto é "Toda voz importa": cada pessoa tem voz, mesmo quem não fala, e a voz pode sair de muitas formas.

Composição:
- Três círculos grandes, como janelas, arrumados em triângulo (um em cima à esquerda, um em cima à direita, um embaixo no centro). Cada círculo mostra UMA pessoa, do peito para cima, olhando para dentro da cena. Nada do corpo fica cortado de forma estranha: o corte é a borda do círculo.
- Círculo 1: uma mulher idosa, negra, de cabelo grisalho, sorrindo e tocando com um dedo um símbolo num tablet que ela segura. O tablet mostra uma grade simples de 6 quadrados coloridos, sem texto e sem ícones reconhecíveis.
- Círculo 2: um homem jovem, de pele clara, que se comunica pelo olhar. Na frente dele, um tablet num suporte. Uma linha contínua, grossa e bem visível sai dos olhos dele até um dos quadrados do tablet, terminando num ponto brilhante. As mãos dele não aparecem.
- Círculo 3: uma jovem surda, de ascendência indígena ou asiática, sinalizando com alegria. As duas mãos estão ABERTAS, com os dedos juntos e as palmas viradas para frente, em movimento, com duas ou três linhas curvas de movimento ao lado. Os dedos NÃO formam nenhuma letra, número, "OK", "joinha" nem sinal específico.
- Entre os três círculos, no centro, formas que ligam as pessoas, na linguagem do logo: um ponto, uma haste vertical de cantos redondos e um arco, além de algumas ondas suaves e pequenos pontos, mostrando que as três formas de comunicação se encontram.
- Clima de conexão, autonomia e alegria tranquila. Ninguém é retratado como frágil, doente ou digno de pena.

Estilo:
- Ilustração vetorial plana (flat), moderna e minimalista, com formas geométricas arredondadas e traço limpo. Sem textura, sem 3D, sem sombras realistas.
- Rostos simples e expressivos, com proporções corretas: cada pessoa tem dois olhos, dois braços e cinco dedos em cada mão visível.
- Bordas nítidas e cores chapadas, como um arquivo vetorial exportado.

Cores:
- Fundo: ocupa a imagem inteira, com um gradiente escuro e suave de #17123A (violeta muito escuro) para #0B2F3A (azul-petróleo muito escuro), com uma grade discreta de pontinhos.
- Dentro dos círculos: um tom um pouco mais claro, #24233E, com uma borda fina em gradiente de #9F99FE para #5ED9E6.
- Destaques (ondas, linha do olhar, formas do logo): violeta #9F99FE, violeta claro #B0A2FE e ciano #5ED9E6, com gradiente de violeta para ciano.
- Roupas em violeta #5844D4, azul-petróleo #0A6E88 e ciano #5ED9E6. Tons de pele naturais e diferentes entre si.
- Tudo precisa ter bom contraste sobre o fundo escuro: nada de contorno escuro sobre fundo escuro.

Evite:
- Qualquer texto, letra ou número na imagem.
- Logos, marcas ou aparelhos reconhecíveis (tablets genéricos, sem câmera ou botões característicos).
- Mãos formando sinais, letras, números, "OK" ou "joinha".
- Pessoas cortadas na borda da imagem, braços ou pernas faltando, dedos a mais ou a menos.
- Ambiente de hospital, jaleco, cruz médica, laços, cadeira de rodas como único símbolo de deficiência, expressões de tristeza.
- Clichês de "IA" e tecnologia (cérebros com circuitos, robôs, hologramas, faíscas).
- Excesso de detalhes que deixe a imagem confusa em telas pequenas.

Entrega:
- PNG de 1600 × 1200 px (formato 4:3), sem transparência, com o fundo escuro ocupando a imagem toda e cantos retos (o site arredonda).
- Os três círculos e as formas do centro precisam caber dentro de um quadrado central de 1200 × 1200 px, para que a imagem possa ser cortada em quadrado no celular sem perder ninguém.
```

### Prompt da ilustração, versão 2 (English)

```text
Create a hero illustration for the website of "Toda Voz" (Portuguese for "Every Voice"), an open-source, non-profit project that helps people who cannot speak (due to stroke, ALS, cerebral palsy, autism and other conditions) and Deaf people communicate. Tagline: "Toda voz importa" ("Every voice matters"): everyone has a voice, even those who do not speak, and a voice can come out in many ways.

Composition:
- Three large circles, like windows, arranged in a triangle (top left, top right, bottom center). Each circle shows ONE person, from the chest up, facing into the scene. Nothing is awkwardly cut off: the crop is the edge of the circle.
- Circle 1: an older Black woman with gray hair, smiling and touching a symbol with one finger on a tablet she holds. The tablet shows a simple grid of 6 colored squares, no text and no recognizable icons.
- Circle 2: a young man with light skin who communicates with his eyes. In front of him, a tablet on a stand. A continuous, thick, clearly visible line goes from his eyes to one square on the tablet, ending in a glowing dot. His hands are not shown.
- Circle 3: a young Deaf woman of Indigenous or Asian descent, joyfully signing. Both hands are OPEN, fingers together, palms facing forward, in motion, with two or three curved motion lines beside them. The fingers do NOT form any letter, number, "OK", thumbs-up or specific sign.
- Between the three circles, in the center, shapes connecting the people in the logo's visual language: a dot, a rounded vertical bar and an arc, plus a few soft waves and small dots, showing that the three ways of communicating meet.
- Mood: connection, autonomy and calm joy. No one is portrayed as fragile, sick or pitiable.

Style:
- Flat, modern, minimalist vector illustration with rounded geometric shapes and clean lines. No texture, no 3D, no realistic shadows.
- Simple, expressive faces with correct proportions: each person has two eyes, two arms and five fingers on each visible hand.
- Crisp edges and flat colors, like an exported vector file.

Colors:
- Background: fills the whole image, a soft dark gradient from #17123A (very dark violet) to #0B2F3A (very dark teal), with a subtle dot grid.
- Inside the circles: a slightly lighter tone, #24233E, with a thin gradient border from #9F99FE to #5ED9E6.
- Highlights (waves, gaze line, logo shapes): violet #9F99FE, light violet #B0A2FE and cyan #5ED9E6, with a violet-to-cyan gradient.
- Clothing in violet #5844D4, teal #0A6E88 and cyan #5ED9E6. Natural, varied skin tones.
- Everything must have good contrast on the dark background: no dark outlines on dark areas.

Avoid:
- Any text, letters or numbers.
- Logos, brands or recognizable devices (generic tablets only).
- Hands forming signs, letters, numbers, "OK" or thumbs-up.
- People cut off at the image edge, missing arms or legs, extra or missing fingers.
- Hospital settings, lab coats, medical crosses, ribbons, a wheelchair as the only signifier of disability, sad expressions.
- "AI"/tech clichés (circuit brains, robots, holograms, sparkles).
- Excessive detail that makes the image confusing on small screens.

Deliver:
- PNG, 1600 × 1200 px (4:3), no transparency, dark background filling the whole image, square corners (the site rounds them).
- The three circles and the central shapes must fit inside a central 1200 × 1200 px square, so the image can be cropped to a square on mobile without losing anyone.
```
