"""Hook PreToolUse: impede o agente de CRIAR arquivos .md fora das pastas permitidas."""
import json
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))
from _policy import deny, load_patterns, matches, project_root, rel_path  # noqa: E402


def main():
    data = json.load(sys.stdin)
    ti = data.get("tool_input") or {}
    path = ti.get("file_path") or ""
    if not path.lower().endswith(".md"):
        sys.exit(0)
    root = project_root(data)
    rel = rel_path(root, path)
    if rel is None:                      # fora do projeto: não é nossa regra
        sys.exit(0)
    if (root / rel).exists():            # editar .md que já existe é permitido
        sys.exit(0)
    if not matches(rel, load_patterns(root, "md-allowed-paths.txt")):
        deny(f"Padrão Ked: '{rel}' não é um lugar permitido para .md. "
             "Use frontend/docs/, backend/docs/ ou .ai-agent/work/ (rascunhos e planos).")
    sys.exit(0)


if __name__ == "__main__":
    main()
