---
titulo: Libras
descricao: Dicionário em vídeo de Libras ligado aos símbolos, frases essenciais gravadas por pessoas surdas e, depois, reconhecimento de sinais-chave.
atualizado: 2026-10-17
status: rascunho
ordem: 7
fase: "1–3"
---

# Módulo 07: Libras

## Para que serve
Inclui a Libras como língua de primeira classe:
- cada conceito pode ter **vídeo em Libras**;
- pessoas surdas e ouvintes encontram **frases essenciais** gravadas por pessoas surdas;
- depois, o app **reconhece sinais-chave**.

Tudo é feito **com** a comunidade surda ([0011](../decisoes/0011-libras-com-comunidade-surda.md)).

## Para quem
Pessoas surdas (inclusive com pouco letramento), famílias ouvintes de crianças surdas, profissionais de saúde e de atendimento.

## Funcionalidades
### MVP (fase 1)
- [ ] **Dicionário offline em vídeo** ligado ao grafo de conceitos ([módulo 01](01-conceitos-e-vocabulario.md)).
- [ ] **Frases essenciais gravadas por pessoas surdas**: saúde, emergência, serviços públicos.
- [ ] Busca por palavra, por símbolo e por categoria.
- [ ] Pacote offline compactado (vídeos AV1/H.265 em baixa resolução).
- [ ] Créditos e licença de cada vídeo (CC BY-NC-SA), com o consentimento registrado.

### Fase 3
- [ ] **Reconhecimento de 50–200 sinais isolados** no celular (MediaPipe + classificador pequeno), para comando e busca, **não** como tradução [L6, L13].
- [ ] SignWriting (FSW) como camada escrita opcional [A15].
- [ ] ~~Tradução automática por avatar~~: descartada ([0011](../decisoes/0011-libras-com-comunidade-surda.md)) [L18–L21].

### Futuro
- [ ] Tradução contínua Libras ↔ português, quando a pesquisa amadurecer [L7–L10].
- [ ] Outras línguas de sinais pelo mesmo grafo de conceitos.

## Depende de
[01](01-conceitos-e-vocabulario.md), [13](13-privacidade-e-consentimento.md), [14](14-contribuicao-comunitaria.md).

## Riscos e perguntas abertas
- Licenças dos datasets de Libras (só o MINDS-Libras é CC BY) [L1–L5].
- Vídeo de sinalização não pode ser anonimizado: consentimento em Libras e finalidades separadas.
- Parcerias necessárias: a federação nacional de pessoas surdas e universidades que pesquisam Libras.
- **A WFD rejeita avatares como substitutos de intérpretes** [L21].

## Referências
[L1]–[L27], [A15].
