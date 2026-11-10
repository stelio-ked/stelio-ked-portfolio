"""Gera .claude/ a partir de .ai-agent/ (fonte da verdade agnóstica).

Uso:
  python .ai-agent/scripts/sync_adapters.py          # sincroniza
  python .ai-agent/scripts/sync_adapters.py --check  # só verifica (pipeline); sai com 1 se divergir
"""
import shutil
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
SRC = ROOT / ".ai-agent"
DST = ROOT / ".claude"
DIRS = ["skills", "agents", "hooks"]
FILES = {"policy/settings.base.json": "settings.json"}
NOTICE = ("# .claude/ é GERADO\n\nNão edite estes arquivos. Edite `.ai-agent/` e rode\n"
          "`python .ai-agent/scripts/sync_adapters.py`.\n"
          "Exceção: `settings.local.json` (pessoal, fora do Git).\n")


def expected():
    out = {}
    for d in DIRS:
        base = SRC / d
        if base.exists():
            for f in base.rglob("*"):
                if f.is_file() and "__pycache__" not in f.parts:
                    out[Path(d) / f.relative_to(base)] = f.read_bytes()
    for s, t in FILES.items():
        out[Path(t)] = (SRC / s).read_bytes()
    out[Path("GENERATED.md")] = NOTICE.encode("utf-8")
    return out


def actual():
    out = {}
    if DST.exists():
        for f in DST.rglob("*"):
            if f.is_file() and f.name != "settings.local.json" and "__pycache__" not in f.parts:
                out[f.relative_to(DST)] = f.read_bytes()
    return out


def main():
    exp = expected()
    if "--check" in sys.argv:
        act = actual()
        diff = sorted(str(p) for p in set(exp) | set(act) if exp.get(p) != act.get(p))
        if diff:
            print(".claude/ está fora de sincronia com .ai-agent/:")
            for p in diff:
                print("  -", p)
            print("Rode: python .ai-agent/scripts/sync_adapters.py")
            sys.exit(1)
        print(".claude/ sincronizado com .ai-agent/ OK")
        return
    for d in DIRS:
        shutil.rmtree(DST / d, ignore_errors=True)
    for rel, data in exp.items():
        target = DST / rel
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_bytes(data)
    print(f"{len(exp)} arquivos gerados em .claude/ OK")


if __name__ == "__main__":
    main()
