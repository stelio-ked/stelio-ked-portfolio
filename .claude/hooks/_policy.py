"""Funções comuns dos hooks do Padrão Ked (sem dependências externas)."""
import fnmatch
import json
import os
import sys
from pathlib import Path


def project_root(data):
    return Path(os.environ.get("CLAUDE_PROJECT_DIR") or data.get("cwd") or os.getcwd()).resolve()


def load_patterns(root, name):
    f = root / ".ai-agent" / "policy" / name
    if not f.exists():
        return []
    lines = f.read_text(encoding="utf-8").splitlines()
    return [l.strip() for l in lines if l.strip() and not l.strip().startswith("#")]


def rel_path(root, path):
    """Caminho relativo à raiz em formato posix; None se estiver fora do projeto."""
    p = Path(path)
    if not p.is_absolute():
        p = root / p
    try:
        return p.resolve().relative_to(root).as_posix()
    except ValueError:
        return None


def matches(rel, patterns):
    name = rel.rsplit("/", 1)[-1]
    for pat in patterns:
        flat = pat.replace("**/", "")
        if fnmatch.fnmatch(rel, pat) or fnmatch.fnmatch(rel, flat):
            return True
        if "/" not in flat and fnmatch.fnmatch(name, flat):
            return True
    return False


def deny(reason):
    print(json.dumps({
        "hookSpecificOutput": {
            "hookEventName": "PreToolUse",
            "permissionDecision": "deny",
            "permissionDecisionReason": reason,
        }
    }, ensure_ascii=False))
    sys.exit(0)
