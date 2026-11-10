---
name: docs-tidy
description: Organiza a documentação — move arquivos .md soltos para frontend/docs, backend/docs ou .ai-agent/work e mantém o README da raiz atualizado. Use ao final de cada tarefa e antes do PR.
---

# Organizar documentação

## Passos

1. Rode `python .ai-agent/scripts/check_md_locations.py --warn` para listar `.md` fora do lugar.
2. Delegue ao subagente **docs-organizer** a proposta de destino de cada arquivo:
   - sobre código de interface → `frontend/docs/`;
   - sobre APIs, regras de negócio, banco → `backend/docs/`;
   - rascunhos, planos, notas de sessão do agente → `.ai-agent/work/`;
   - README de subpasta → consolidar no `README.md` da raiz.
3. Mostre a proposta ao dev; mova só após o ok (use `git mv` para manter o histórico).
4. Atualize links quebrados pelos movimentos.
5. Confira se o `README.md` da raiz reflete o estado atual (como rodar, estrutura, documentos).
