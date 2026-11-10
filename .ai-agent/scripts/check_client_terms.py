"""Procura nos arquivos do projeto os termos da lista de confidencialidade.

Lista: .ai-agent/policy/client-terms.local.txt (um termo por linha, fora do Git).
Uso: python .ai-agent/scripts/check_client_terms.py
Mostra só arquivo, linha e número do termo (nunca o termo). Sai com 1 se encontrar algo.
Sem a lista, avisa e sai com 0.
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
sys.path.insert(0, str(ROOT / ".ai-agent" / "hooks"))
from _policy import load_patterns  # noqa: E402

SKIP = {".git", "node_modules", ".venv", "venv", "dist", "build", ".next", "out", "__pycache__"}
LIST_FILE = "client-terms.local.txt"
MAX_BYTES = 2_000_000


def main():
    terms = load_patterns(ROOT, LIST_FILE)
    if not terms:
        print(f"Sem lista de termos (.ai-agent/policy/{LIST_FILE}); verificação ignorada.")
        return
    regs = [re.compile(r"(?<!\w)" + re.escape(t) + r"(?!\w)", re.IGNORECASE) for t in terms]
    hits = []
    for f in ROOT.rglob("*"):
        rel = f.relative_to(ROOT)
        if not f.is_file() or SKIP & set(rel.parts) or f.name == LIST_FILE or f.stat().st_size > MAX_BYTES:
            continue
        try:
            lines = f.read_text(encoding="utf-8").splitlines()
        except (UnicodeDecodeError, OSError):
            continue
        for n, line in enumerate(lines, 1):
            for i, rg in enumerate(regs, 1):
                if rg.search(line):
                    hits.append(f"  - {rel.as_posix()}:{n} (termo #{i})")
    if hits:
        print("Termos de confidencialidade encontrados:")
        print("\n".join(hits))
        sys.exit(1)
    print("Nenhum termo da lista de confidencialidade encontrado OK")


if __name__ == "__main__":
    main()
