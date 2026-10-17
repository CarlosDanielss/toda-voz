---
titulo: Sincronização e backup
descricao: Opcional e cifrado. Mantém pranchas e ajustes iguais entre o aparelho da pessoa, da família e do terapeuta, e guarda cópias de segurança.
atualizado: 2026-10-17
status: rascunho
ordem: 12
fase: "2"
---

# Módulo 12: Sincronização e backup

## Para que serve
Permite que família e terapeuta editem as pranchas de outro aparelho e que nada se perca se o celular quebrar. É **opcional**: tudo funciona sem isso ([0003](../decisoes/0003-offline-first.md)).

## Para quem
Família, terapeutas, escolas.

## Funcionalidades
### Fase 2
- [ ] Dados das pranchas em **Automerge (CRDT)**: edições em aparelhos diferentes se juntam sem conflito [A1].
- [ ] **Relay cego** auto-hospedável (AGPL): o servidor só repassa dados cifrados e nunca consegue lê-los.
- [ ] Criptografia ponta a ponta (libsodium; MLS para grupos) [A7].
- [ ] Backup cifrado em qualquer armazenamento (S3, WebDAV/Nextcloud, arquivo local).
- [ ] Compartilhar com a família por QR code.

### Depois
- [ ] Permissões: quem pode editar o quê.

## Depende de
[13](13-privacidade-e-consentimento.md).

## Riscos e perguntas abertas
- Maturidade do controle de acesso cifrado no Automerge (Keyhive, experimental) [verificar].

## Referências
[A1], [A7].
