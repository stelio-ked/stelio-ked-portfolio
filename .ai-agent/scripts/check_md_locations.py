"""Verifica se todo .md do repositório está numa pasta permitida (.ai-agent/policy/md-allowed-paths.txt).

Uso: python .ai-agent/scripts/check_md_locations.py [--warn]
--warn: só avisa, não falha (útil em projetos legados na migração).
"""
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(ROOT / ".ai-agent" / "hooks"))
from _policy import load_patterns, matches  # noqa: E402

SKIP = {".git", "node_modules", ".venv", "venv", "dist", "build", "__pycache__"}


def main():
    patterns = load_patterns(ROOT, "md-allowed-paths.txt")
    bad = []
    for f in ROOT.rglob("*.md"):
        rel = f.relative_to(ROOT)
        if SKIP & set(rel.parts):
            continue
        if not matches(rel.as_posix(), patterns):
            bad.append(rel.as_posix())
    if bad:
        print("Markdown fora das pastas permitidas (rode /docs-tidy):")
        for b in sorted(bad):
            print("  -", b)
        sys.exit(0 if "--warn" in sys.argv else 1)
    print("Todos os .md estão nas pastas permitidas OK")


if __name__ == "__main__":
    main()
