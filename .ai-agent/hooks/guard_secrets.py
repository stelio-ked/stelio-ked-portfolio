"""Hook PreToolUse: impede o agente de ler, editar ou citar arquivos sensíveis (.env, chaves, segredos)."""
import json
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))
from _policy import deny, load_patterns, matches, project_root, rel_path  # noqa: E402

ALLOWED = {".env.example", ".env.sample", ".env.template"}


def sensitive(root, patterns, path):
    if not path:
        return False
    path = path.replace("\\", "/")
    name = Path(path).name
    if name in ALLOWED:
        return False
    rel = rel_path(root, path) or path.lstrip("/")
    return matches(rel, patterns)


def main():
    data = json.load(sys.stdin)
    tool = data.get("tool_name", "")
    ti = data.get("tool_input") or {}
    root = project_root(data)
    patterns = load_patterns(root, "sensitive-paths.txt")

    candidates = [ti.get(k) for k in ("file_path", "path", "notebook_path") if ti.get(k)]
    if tool == "Glob" and ti.get("pattern"):
        candidates.append(ti["pattern"])
    if tool == "Bash":
        tokens = re.split(r"[\s;|&<>()'\"=`]+", ti.get("command", ""))
        candidates += [t for t in tokens if t]

    for c in candidates:
        if sensitive(root, patterns, c):
            deny(f"Bloqueado pelo Padrão Ked: '{c}' é um arquivo sensível "
                 "(.ai-agent/policy/sensitive-paths.txt). Peça ao dev para fazer esta etapa manualmente.")
    sys.exit(0)


if __name__ == "__main__":
    main()
