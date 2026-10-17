---
titulo: Glossário
descricao: Termos técnicos, clínicos e jurídicos usados no projeto.
atualizado: 2026-10-17
status: vivo
ordem: 9
---

# Glossário

## Comunicação e clínica
- **CAA (Comunicação Aumentativa e Alternativa):** qualquer forma de comunicação que complementa ou substitui a fala, como pranchas, símbolos, gestos ou aparelhos que falam. Em inglês, **AAC**.
- **Prancha:** grade de símbolos ou palavras que a pessoa aponta ou seleciona.
- **Vocabulário essencial (core):** as cerca de 50–400 palavras que respondem pela maior parte do que dizemos ("eu", "quero", "mais", "não"...).
- **Vocabulário periférico (fringe):** palavras específicas de cada pessoa ou contexto (nomes, lugares, comidas).
- **Modelagem:** o parceiro de conversa aponta os símbolos enquanto fala, para ensinar a usar a prancha.
- **Afasia:** perda da capacidade de produzir ou compreender linguagem após uma lesão cerebral, como um AVC. A **afasia receptiva** afeta a compreensão.
- **Disartria:** fala arrastada ou pouco clara por fraqueza ou descoordenação dos músculos.
- **ELA (Esclerose Lateral Amiotrófica):** doença que paralisa progressivamente os músculos. Em inglês, **ALS** ou **MND**.
- **Síndrome do encarceramento (locked-in):** consciência preservada com paralisia quase total. Muitas vezes só os olhos se mexem.
- **Ptose:** pálpebra caída.
- **Libras:** Língua Brasileira de Sinais, língua oficial no Brasil (Lei 10.436/2002).
- **SignWriting:** sistema de escrita das línguas de sinais. Tem um bloco próprio no Unicode.
- **Leitura fácil / linguagem simples:** texto com frases curtas, palavras comuns e apoio visual.

## Acesso
- **Acionador (switch):** botão adaptado que pode ser apertado com qualquer parte do corpo.
- **Varredura (scanning):** o sistema destaca as opções uma a uma, e a pessoa seleciona com um único sinal.
- **Dwell:** selecionar mantendo o olhar ou o cursor parado sobre o alvo por um tempo.
- **Toque de Midas:** o problema de tudo que se olha virar clique.
- **Rastreamento ocular (eye tracking):** estimar para onde a pessoa olha. O **infravermelho (IR)** é preciso; a **câmera comum (RGB)** é mais barata e menos precisa.
- **Expressões faciais (blendshapes):** coeficientes de expressão do rosto (sorriso, sobrancelha, boca) calculados pelo MediaPipe.
- **EOG (eletro-oculografia):** mede o movimento dos olhos por eletrodos na pele.
- **EEG (eletroencefalografia):** mede a atividade elétrica do cérebro pelo couro cabeludo.
- **P300 / SSVEP:** sinais do EEG usados para escolher opções numa tela.
- **BCI (interface cérebro-computador):** sistema que transforma sinais do cérebro em comandos ou fala. Pode ser implantado ou não invasivo.
- **AccessibilityService:** API do Android que permite a um app controlar outros apps (tocar, voltar, ler a tela).

## Voz e IA
- **TTS (text-to-speech):** síntese de voz a partir de texto.
- **ASR (reconhecimento automático de fala):** transforma fala em texto.
- **Banco de voz:** gravações usadas para criar uma voz sintética da pessoa.
- **Banco de mensagens:** frases gravadas pela própria pessoa e tocadas exatamente como foram gravadas.
- **Clonagem zero-shot:** imitar uma voz a partir de poucos segundos de áudio.
- **Conversão de voz:** transformar uma voz em outra, mantendo o conteúdo.
- **Destilação:** usar um modelo grande ("professor") para treinar um modelo pequeno.
- **ONNX / GGUF:** formatos abertos de arquivo de modelos de IA. O GGUF é usado por modelos de linguagem.
- **LLM:** modelo de linguagem grande. No projeto usamos modelos pequenos (≤1B parâmetros) no próprio aparelho.
- **WER / BLEU:** métricas de erro do reconhecimento de fala e de qualidade de tradução.

## Software e dados
- **Offline primeiro (local-first):** software que funciona sem internet, com os dados no aparelho.
- **CRDT:** estrutura de dados que sincroniza sem conflito entre aparelhos.
- **OBF (Open Board Format):** formato aberto de pranchas de CAA.
- **Monorepo:** um único repositório com todos os subprojetos.
- **ADR (Architecture Decision Record):** registro curto de uma decisão, com contexto e consequências.

## Licenças e leis
- **AGPL-3.0:** licença livre de código. Quem modifica o software, ou o oferece como serviço, precisa publicar o código.
- **CC BY-NC-SA 4.0:** licença de conteúdo. Exige dar crédito, proíbe uso comercial e obriga a manter a mesma licença.
- **NC (não comercial):** cláusula que proíbe uso comercial.
- **Código aberto:** software cuja licença segue a definição da Open Source Initiative.
- **DCO / CLA:** formas de aceitar contribuições. O DCO é só uma declaração de autoria; o CLA cede direitos.
- **Bem público digital:** reconhecimento dado a projetos abertos que ajudam nos Objetivos de Desenvolvimento Sustentável.
- **Versionamento semântico:** versões no formato MAIOR.MENOR.CORREÇÃO (ex.: 0.1.0).
- **LGPD:** Lei Geral de Proteção de Dados (Lei 13.709/2018). Voz, rosto e saúde são **dados sensíveis**.
- **LBI:** Lei Brasileira de Inclusão (Lei 13.146/2015).

## Design e acessibilidade
- **WCAG:** diretrizes internacionais de acessibilidade para a web. Usamos a versão 2.2.
- **Contraste:** diferença de luminosidade entre o texto e o fundo, medida como razão (ex.: 7:1).
- **Token de design:** nome para um valor visual (cor, raio, espaçamento) usado em todo o site, como `--primary`.
- **OKLCH:** forma de escrever cores pela luminosidade, saturação e tom. Facilita criar temas claro e escuro coerentes.
- **Tema claro/escuro:** o site segue a preferência do sistema, e a pessoa pode trocar.
