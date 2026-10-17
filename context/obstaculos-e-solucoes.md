---
titulo: Obstáculos e soluções
descricao: O que pode atrapalhar o projeto, o que pensamos fazer e se já decidimos seguir com isso.
atualizado: 2026-10-17
status: vivo
ordem: 4
# Cada item tem três partes: o obstáculo, uma possível solução e a decisão.
# decisao: decidido (vamos seguir) | em-avaliacao (ainda não decidimos) | descartado (não vamos seguir)
# adr: número da decisão em decisoes/, quando houver. destaque: true aparece na página inicial.
itens:
  - tema: Acesso e custo
    obstaculo: Aparelhos de comunicação custam de US$ 10 mil a 20 mil e não encontramos cobertura no SUS.
    solucao: App livre que funciona sem internet num Android barato ou usado, mais pranchas de papel e kits de hardware simples.
    decisao: decidido
    adr: "0003"
    destaque: true
  - tema: Acesso e custo
    obstaculo: Cerca de 1 em cada 3 pessoas abandona o sistema de comunicação.
    solucao: Material aberto de treinamento para famílias e escolas, símbolos sempre no mesmo lugar, voz própria e desenho feito junto com quem usa.
    decisao: em-avaliacao
  - tema: Acesso e custo
    obstaculo: Comunicar com esses sistemas é lento, de 8 a 10 palavras por minuto.
    solucao: Previsão de palavras no próprio aparelho, frases prontas e IA que só sugere.
    decisao: em-avaliacao
    adr: "0010"
  - tema: Tecnologia
    obstaculo: Pelo olhar, a câmera comum do celular erra de 0,5 a 2 cm, então não acerta botões pequenos.
    solucao: Perfis de acesso por cabeça, zonas grandes de olhar, gestos do rosto ou varredura, sempre com alvos grandes.
    decisao: em-avaliacao
    destaque: true
  - tema: Tecnologia
    obstaculo: Pouca luz, óculos, movimentos involuntários e pálpebra caída atrapalham a câmera.
    solucao: Avisar quando a luz estiver ruim, filtrar movimentos, ajustar o tempo de seleção e oferecer câmera infravermelha ou sensor nos olhos como opção.
    decisao: em-avaliacao
  - tema: Tecnologia
    obstaculo: No iOS, nenhum app consegue controlar o celular inteiro.
    solucao: Android como prioridade. No iOS, só a prancha de comunicação.
    decisao: em-avaliacao
    adr: "0009"
  - tema: Tecnologia
    obstaculo: Vozes sintéticas genéricas e robóticas fazem a pessoa perder a identidade.
    solucao: Recriar a voz da própria pessoa a partir de áudios antigos, uma vez, e usar sem internet no celular.
    decisao: em-avaliacao
    destaque: true
  - tema: Tecnologia
    obstaculo: Quando a fala recente já mudou com a doença, copiar a voz copia também a fala alterada.
    solucao: Dar preferência a áudios antigos e a técnicas que copiam só o timbre.
    decisao: em-avaliacao
  - tema: Tecnologia
    obstaculo: Ler o pensamento hoje só é possível com implante cerebral, caro e experimental.
    solucao: Usar sinais do cérebro como um botão para escolher opções e deixar o sistema pronto para o futuro.
    decisao: em-avaliacao
  - tema: Tecnologia
    obstaculo: Não sabemos como o app vai rodar em celulares baratos.
    solucao: Medir desde o começo em aparelhos de 3 a 4 GB e usar a câmera a 10–15 quadros por segundo.
    decisao: em-avaliacao
  - tema: Libras
    obstaculo: A tradução automática entre Libras e português ainda não funciona bem.
    solucao: Dicionário em vídeo e frases essenciais gravadas por pessoas surdas, mais reconhecimento de poucos sinais.
    decisao: em-avaliacao
    adr: "0011"
  - tema: Libras
    obstaculo: Pessoas surdas ficam sem conteúdo em Libras.
    solucao: Um avatar 3D traduzindo o português automaticamente.
    decisao: descartado
    adr: "0011"
    destaque: true
  - tema: Licenças e dependências
    obstaculo: Empresas podem fechar o código, mudar a licença ou começar a cobrar por ferramentas que usamos.
    solucao: Código AGPL, formatos abertos e um plano B para cada peça.
    decisao: decidido
    adr: "0008"
    destaque: true
  - tema: Licenças e dependências
    obstaculo: Quase todos os dados para treinar modelos de olhar e vários modelos de voz proíbem uso comercial.
    solucao: Usar só modelos e dados com licença livre. O que for não comercial entra apenas como pacote opcional.
    decisao: decidido
    adr: "0008"
  - tema: Licenças e dependências
    obstaculo: Uma biblioteca de voz que usamos depende de um componente GPL.
    solucao: Como o código do projeto é AGPL, a licença é compatível. Falta confirmar com quem entende do assunto.
    decisao: em-avaliacao
    adr: "0004"
  - tema: Distribuição
    obstaculo: Desde 30/09/2026, o Android exige verificação de quem desenvolve o app no Brasil, mesmo fora da loja.
    solucao: Fazer a verificação quando o projeto estiver pronto para distribuir e ter uma versão web como alternativa.
    decisao: em-avaliacao
    destaque: true
  - tema: Distribuição
    obstaculo: Apps de acessibilidade instalados fora da loja exigem passos extras para funcionar.
    solucao: Publicar na loja como ferramenta de acessibilidade e escrever um guia passo a passo.
    decisao: em-avaliacao
  - tema: Pessoas e comunidade
    obstaculo: A IA pode acabar falando no lugar da pessoa.
    solucao: A IA só sugere, a pessoa confirma e sempre existe a opção de usar sem IA.
    decisao: em-avaliacao
    adr: "0010"
  - tema: Pessoas e comunidade
    obstaculo: Projetos abertos costumam depender de poucas pessoas e assustam quem quer começar a ajudar.
    solucao: Documentação clara nesta pasta context/ e tarefas pensadas para quem está chegando.
    decisao: decidido
    adr: "0005"
  - tema: Pessoas e comunidade
    obstaculo: Voz, rosto e saúde são dados sensíveis pela LGPD.
    solucao: Processar tudo no aparelho e pedir consentimento em linguagem simples, com símbolos e em Libras.
    decisao: em-avaliacao
---

# Obstáculos e soluções

Aqui registramos o que pode atrapalhar o projeto. Cada obstáculo tem uma possível solução e uma decisão:

- **Decidido:** vamos seguir com essa solução. Quando há uma decisão registrada, o número aparece ao lado.
- **Em avaliação:** é a melhor ideia que temos, mas ainda não decidimos.
- **Descartado:** pensamos nessa solução e decidimos não seguir, pelo menos por enquanto.

A lista fica no cabeçalho deste arquivo (frontmatter), para que o site mostre sempre a mesma informação. Para incluir um obstáculo, copie um item e preencha `tema`, `obstaculo`, `solucao` e `decisao`.

Quando uma solução em avaliação virar decisão, registre a decisão em [decisoes](decisoes/README.md) e mude o item para `decidido`.
