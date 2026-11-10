"""Hook PreToolUse: impede o agente de GRAVAR no projeto nomes ou termos de clientes e empregadores.

A lista fica em .ai-agent/policy/client-terms.local.txt (um termo por linha; fora do Git).
Sem a lista, o hook não faz nada. O arquivo é bloqueado para leitura pelo agente (sensitive-paths.txt).
"""
import json
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))
from _policy import deny, load_patterns, project_root  # noqa: E402


def texts(ti):
    for key in ("content", "new_string"):
        if ti.get(key):
            yield ti[key]
    for edit in ti.get("edits") or []:
        if edit.get("new_string"):
            yield edit["new_string"]


def main():
    data = json.load(sys.stdin)
    root = project_root(data)
    terms = load_patterns(root, "client-terms.local.txt")
    if not terms:
        sys.exit(0)
    ti = data.get("tool_input") or {}
    body = "\n".join(texts(ti))
    for i, term in enumerate(terms, 1):
        if re.search(r"(?<!\w)" + re.escape(term) + r"(?!\w)", body, re.IGNORECASE):
            deny(f"Bloqueado pelo Padrão Ked: o conteúdo cita o termo #{i} da lista de confidencialidade "
                 "(.ai-agent/policy/client-terms.local.txt). Use uma descrição genérica, sem nome de cliente.")
    sys.exit(0)


if __name__ == "__main__":
    main()
