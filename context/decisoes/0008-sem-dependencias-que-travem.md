---
titulo: "0008: Nenhuma dependência que possa travar o projeto ou passar a cobrar"
descricao: Formatos abertos, licenças compatíveis, um plano B para cada peça e nada com licença não comercial dentro do código.
atualizado: 2026-10-17
status: aceita
data: 2026-10-17
---

# 0008: Nenhuma dependência que possa travar o projeto ou passar a cobrar

## Contexto
Queremos fazer algo novo, aproveitando o que já existe, sem ficar nas mãos de quem pode bloquear o projeto ou começar a cobrar por ele.

Na pesquisa vimos isso acontecer várias vezes:
- uma empresa de voz fechou e seus modelos ficaram presos a uma licença não comercial;
- uma biblioteca de voz trocou uma licença permissiva por outra mais restritiva;
- duas bibliotecas de rastreamento do olhar e do rosto foram abandonadas;
- um serviço de sincronização usa uma licença que não é aberta.

## Decisão
1. **Formatos abertos acima de ferramentas:** ONNX, GGUF, OBF, BCP-47, SignWriting e SQLite. Trocar uma peça não pode fazer a gente perder dados ou modelos.
2. **Toda dependência tem um plano B**, registrado na [arquitetura](../arquitetura.md).
3. **Licenças aceitas no código:** MIT, BSD, ISC, Apache-2.0, MPL-2.0, LGPL, GPL-3.0 e AGPL-3.0. Todas são compatíveis com a AGPL ([0004](0004-licenca.md)).
4. **Nunca dentro do código:** modelos, dados ou bibliotecas com licença não comercial ou fechada. Se forem úteis, entram como **pacote opcional**, que a pessoa escolhe baixar e que mostra a licença.
5. **Antes de adicionar uma dependência, verificar:**
   - a licença do código;
   - a licença dos modelos e dos dados;
   - quem mantém o projeto;
   - se ele continua ativo.
6. **Serviços online** sempre podem ser instalados num servidor nosso.

## Alternativas consideradas
- **Usar a melhor ferramenta disponível, qualquer que seja a licença:** acelera hoje e cria risco de bloqueio amanhã.

## Consequências
- Modelos de olhar treinados com dados não comerciais ficam de fora. Usamos os pontos do rosto calculados pelo MediaPipe, com calibração para cada pessoa.
- A clonagem de voz fica restrita a modelos com licença livre.
- Bibliotecas mantidas por grandes empresas, como o MediaPipe, só entram com um plano B: exportar os modelos para ONNX.

## Referências
[A8], [A16], [V10], [V11], [E3], [E33]. Ver também [obstáculos](../obstaculos-e-solucoes.md).
