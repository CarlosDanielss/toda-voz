# Histórico de versões

Todas as mudanças importantes do Toda Voz ficam registradas aqui.

O formato segue a convenção "Keep a Changelog". As versões seguem o [versionamento semântico](context/decisoes/0012-versionamento-semantico.md).

## [Não lançado]

### Adicionado
- Logo oficial (ponto, haste e arco), com versões clara, escura, símbolo, símbolo em uma cor e ícone de app, na pasta `assets/logo/`. O logo aparece no README, no site e no ícone do site.
- Script `tools/imagens/preparar-ilustracoes.py`, que gera versões leves das ilustrações para o site e, se preciso, tira fundo branco.
- Ilustração no topo da página inicial (versão 2): três pessoas, cada uma num círculo, se comunicando com símbolos, com o olhar e em Libras.
  - Tem fundo escuro próprio e aparece como um cartão nos dois temas.
  - O site usa WebP de 59 KB (computador) e 37 KB (celular).
  - Tem texto alternativo descrevendo a cena.
  - A versão 1 foi testada e retirada por problemas de recorte, corpos cortados e mãos formando sinais. Ela ficou guardada em `assets/ilustracoes/alternativas/reprovada-v1/`.

### Mudado
- Cabeçalho do site redesenhado:
  - mais compacto, no estilo do shadcn/ui;
  - links discretos, com a página atual sublinhada;
  - no celular, os links ficam num menu que funciona sem JavaScript.
- Botão de tema mais previsível: alterna entre claro e escuro, sempre diz o que vai fazer e anuncia a troca. O rodapé tem a opção de voltar a seguir o sistema.
- Os obstáculos agora têm colunas de largura fixa, e as decisões ficam alinhadas em todos os cards.
- A frase do logo passou a ser escrita em letras normais ("Toda voz importa"), em vez de caixa alta.

### Corrigido
- O ícone da aba agora mostra só o símbolo, maior e sem o fundo branco. As cores se adaptam a abas claras e escuras.
- Botões (como o de tema) e o menu do celular voltaram a mostrar a "mãozinha" ao passar o mouse. O Tailwind v4 deixava o cursor padrão nesses elementos.
- Nova paleta moderna e minimalista: base neutra, violeta elétrico como cor principal e gradiente violeta → ciano como assinatura. Todas as cores foram conferidas: contraste de 7:1 no texto e cores dentro do sRGB.
- O site passou a usar o shadcn/ui de verdade (React + Tailwind CSS v4), com ajustes de acessibilidade nos componentes. O React só roda no build; nenhum JavaScript dele vai para o navegador.
- O cabeçalho fica fixo só em telas médias e grandes.
- Prompt do logo atualizado com a nova paleta.

## [0.1.0] - 2026-10-17

Primeira versão. O projeto começa.

### Adicionado
- Pesquisa inicial sobre quem precisa de comunicação alternativa, quanto custa o que existe e o que dá para fazer de forma aberta e barata.
- Memória do projeto na pasta `context/`: objetivo, história, descobertas, obstáculos, arquitetura, roteiro, 16 módulos, 13 decisões e referências científicas.
- Site do projeto gerado a partir do `context/`:
  - visual inspirado no shadcn/ui;
  - tema claro e escuro;
  - fonte de alta legibilidade;
  - contraste conferido automaticamente.
- Paleta de cores e prompt para criar o logo.
- Licenças: AGPL-3.0 para o código e CC BY-NC-SA 4.0 para o conteúdo.
