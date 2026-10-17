---
titulo: Conceitos e vocabulário
descricao: O grafo que liga cada ideia ao seu pictograma, às palavras em cada idioma, ao vídeo em Libras e ao SignWriting. É a base de todos os outros módulos.
atualizado: 2026-10-17
status: rascunho
ordem: 1
fase: "0"
---

# Módulo 01: Conceitos e vocabulário

## Para que serve
É a base de tudo. Cada **conceito** (por exemplo "água", "dor", "quero", "mãe") tem um ID estável e se liga a:
- pictograma(s);
- palavra(s) em cada idioma falado;
- vídeo(s) em cada língua de sinais;
- SignWriting;
- categoria gramatical;
- uso (essencial ou periférico).

Com isso, a mesma prancha "fala" português, Libras e, no futuro, qualquer outra língua.

## Para quem
Todos os outros módulos, e também quem contribui com conteúdo: fonoaudiólogos, tradutores, pessoas surdas e ilustradores.

## Funcionalidades
### MVP
- [ ] Modelo de dados do conceito: ID, rótulos por idioma (BCP-47), pictogramas, vídeos de sinal, FSW, classe gramatical, tags e licença de cada mídia.
- [ ] **Vocabulário essencial PT-BR v0** (~200–400 conceitos), construído com fonoaudiólogos a partir da literatura e de listas abertas, com tradução **adaptada à cultura**, não literal.
- [ ] Vocabulário periférico inicial: saúde, emergência, família, comida, sentimentos.
- [ ] Ligação com pictogramas de licença livre (CC BY-SA) e com pictogramas próprios. Conjuntos não comerciais entram só como pacote opcional.
- [ ] Importação e exportação no formato **OBF**.
- [ ] Ferramenta de linha de comando para validar o conteúdo: licenças, IDs duplicados, traduções faltando.

### Depois
- [ ] Ligação com o Wikidata quando o conceito existir.
- [ ] Variantes regionais (pt-BR × pt-PT; sinais regionais de Libras).
- [ ] Segunda língua falada (espanhol ou inglês).

### Futuro
- [ ] Vocabulário essencial validado em dezenas de línguas, com cada comunidade cuidando da sua [A19].

## Depende de
Nada. É a primeira peça.

## Riscos e perguntas abertas
- Não existe vocabulário essencial aberto e validado em português: precisamos criar e validar.
- Formato de armazenamento (JSON/YAML em `content/` × SQLite gerado no build) [a decidir].

## Referências
[A13], [A19]. Ver [descobertas](../descobertas.md#o-que-já-existe-aberto).
