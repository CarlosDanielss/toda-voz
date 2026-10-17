---
titulo: Comunicador (pranchas)
descricao: A tela principal onde a pessoa monta e fala mensagens com símbolos, palavras, frases prontas e teclado.
atualizado: 2026-10-17
status: rascunho
ordem: 2
fase: "1"
---

# Módulo 02: Comunicador (pranchas)

## Para que serve
É a tela que a pessoa usa para se comunicar. Ela escolhe símbolos e palavras, monta uma frase e o aparelho fala.

## Para quem
Quem não fala: ELA, AVC, paralisia cerebral, autismo, laringectomia e outras condições. Também quem se comunica junto: família, terapeutas, professores.

## Funcionalidades
### MVP
- [ ] Prancha em grade com **posições estáveis** (cada símbolo sempre no mesmo lugar).
- [ ] Barra de mensagem: montar, apagar, falar e repetir.
- [ ] Vocabulário essencial fixo + pastas por tema (vocabulário periférico).
- [ ] **Frases rápidas:** "sim", "não", "espera", "dor", "chama alguém", "obrigado".
- [ ] **Teclado** com letras grandes, para quem lê.
- [ ] Ajustes de tamanho de grade (de 2×2 a 8×10), contraste, tamanho de fonte e mostrar ou esconder rótulos.
- [ ] Editar a prancha (adicionar foto da família, palavra nova), com proteção para o cuidador.
- [ ] Funciona com qualquer forma de acesso do [módulo 03](03-acesso-entrada.md), por intenções.
- [ ] Mostrar o vídeo em Libras de um símbolo, se existir ([módulo 07](07-libras.md)).
- [ ] Histórico local das últimas mensagens.

### Depois
- [ ] Modo **parceiro**: tela virada para quem conversa, com texto grande.
- [ ] Pranchas por contexto (escola, hospital, casa).
- [ ] Modo de **modelagem**: o parceiro aponta os símbolos enquanto fala.

### Futuro
- [ ] Pranchas visuais de cena, com uma foto real e áreas clicáveis.

## Depende de
[01](01-conceitos-e-vocabulario.md), [03](03-acesso-entrada.md), [04](04-voz-saida.md).

## Riscos e perguntas abertas
- Equilíbrio entre simplicidade (autismo, deficiência intelectual) e velocidade (ELA, quem lê).
- Interface: Flutter ou nativo ([0009](../decisoes/0009-nucleo-rust-interfaces-finas.md)).

## Referências
Evidência clínica sobre modelagem e posições estáveis: seção 6 da [pesquisa](../pesquisa/pesquisa-inicial.md).
