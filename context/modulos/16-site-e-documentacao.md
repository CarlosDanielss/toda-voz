---
titulo: Site e documentação
descricao: O site do projeto, gerado a partir do context/, para contar a história, mostrar onde estamos e convidar quem quiser ajudar.
atualizado: 2026-10-17
status: em andamento
ordem: 16
fase: "0"
---

# Módulo 16: Site e documentação

## Para que serve
Contar por que o Toda Voz existe, como chegamos até aqui, o que descobrimos, o que pode atrapalhar e onde estamos. Também serve para convidar pessoas a participar. O site lê o `context/`, então a história fica num lugar só ([0006](../decisoes/0006-landing-page-astro.md)).

## Funcionalidades
### Feito (versão 0.1.0)
- [x] Site em Astro (`apps/site`), com páginas estáticas.
- [x] Uma página para cada documento do `context/`, dos módulos e das decisões.
- [x] Cabeçalho dos arquivos validado na geração do site.
- [x] Componentes do shadcn/ui com ajustes de acessibilidade, paleta própria e contraste conferido automaticamente ([0013](../decisoes/0013-identidade-visual-e-acessibilidade.md)).
- [x] Logo oficial no cabeçalho, no topo da página inicial, no rodapé e no ícone do site ([0014](../decisoes/0014-logo-oficial.md)).
- [x] Cabeçalho compacto, com menu no celular que funciona sem JavaScript.
- [x] Tema claro e escuro: segue o sistema, um botão alterna claro e escuro, e dá para voltar a seguir o sistema.
- [x] Fonte de alta legibilidade dentro do próprio site.
- [x] Roteiro com destaque para a fase atual, versão e data de início.
- [x] Notas de referência discretas ao lado do texto.

### Próximos
- [ ] Publicar o site [pendente].
- [ ] Download de pranchas para imprimir ([módulo 10](10-papel-e-impressao.md)).
- [ ] Página para quem quer participar.
- [ ] Versões em inglês e espanhol ([0007](../decisoes/0007-documentacao-em-portugues.md)).
- [ ] Teste com leitores de tela e com pessoas que usam CAA.

## Depende de
Todo o `context/`.

## Referências
[D1], [D2], [D3], [D4], [D6], [D7]
