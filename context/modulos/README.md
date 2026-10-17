# Módulos

O Toda Voz é dividido em módulos. Cada um tem um arquivo com: para que serve, para quem, funcionalidades (MVP / Depois / Futuro), dependências, riscos e referências.

> **Todos estão em rascunho.** Vamos detalhar **caso a caso**, começando pela fase 0.

## Índice
| # | Módulo | Fase | Status |
|---|---|---|---|
| [01](01-conceitos-e-vocabulario.md) | Conceitos e vocabulário | 0 | rascunho |
| [02](02-comunicador-pranchas.md) | Comunicador (pranchas) | 1 | rascunho |
| [03](03-acesso-entrada.md) | Acesso (formas de entrada) | 1–3 | rascunho |
| [04](04-voz-saida.md) | Voz (saída) | 1–2 | rascunho |
| [05](05-estudio-de-voz.md) | Estúdio de voz | 2 | rascunho |
| [06](06-controle-do-celular.md) | Controle do celular | 2 | rascunho |
| [07](07-libras.md) | Libras | 1–3 | rascunho |
| [08](08-compreensao.md) | Compreensão (modo "entender") | 3 | rascunho |
| [09](09-ia-local-previsao.md) | IA local e previsão | 1–3 | rascunho |
| [10](10-papel-e-impressao.md) | Papel e impressão | 0 | rascunho |
| [11](11-configuracao-e-perfis.md) | Configuração e perfis | 1 | rascunho |
| [12](12-sincronizacao-e-backup.md) | Sincronização e backup | 2 | rascunho |
| [13](13-privacidade-e-consentimento.md) | Privacidade e consentimento | 1 (transversal) | rascunho |
| [14](14-contribuicao-comunitaria.md) | Contribuição comunitária | contínuo | rascunho |
| [15](15-hardware-kits.md) | Hardware e kits | 1–3 | rascunho |
| [16](16-site-e-documentacao.md) | Site e documentação | 0 | em andamento |

## Como os módulos se ligam

```
            01 Conceitos e vocabulário
             │            │             │
   10 Papel ◄┘   02 Comunicador ◄── 09 IA local
                   │       │
     11 Perfis ──► 03 Acesso ──► 06 Controle do celular
                   │
                   ▼
              04 Voz ◄── 05 Estúdio de voz
   07 Libras ◄── 01      08 Compreensão ◄── 07, 09
   12 Sincronização · 14 Contribuição · 15 Hardware · 16 Site
   13 Privacidade ── transversal a todos
```

## Como detalhar um módulo (caso a caso)
1. Ler o arquivo do módulo e as referências citadas.
2. Conversar com quem vai usar (pessoas que usam CAA, famílias, pessoas surdas, terapeutas).
3. Transformar cada funcionalidade do MVP em uma **história de uso**: quem, o quê, por quê, e como saber que está pronto.
4. Registrar as decisões novas em [decisoes/](../decisoes/README.md) e as descobertas em [descobertas.md](../descobertas.md).
5. Mudar o `status` do frontmatter de `rascunho` para `detalhado` e atualizar a data.
