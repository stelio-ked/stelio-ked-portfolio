---
name: ked-bootstrap
description: Prepara um repositório no Padrão Ked de IA — estrutura de pastas, AGENTS.md preenchido, ignores e organização de documentos. Use ao iniciar um projeto ou ao adotar o padrão num projeto existente.
argument-hint: "[descrição curta do projeto]"
---

# Bootstrap do Padrão Ked

Objetivo: deixar o repositório pronto para que qualquer pessoa ou agente que abra o projeto e saiba onde está cada coisa.

## Passos

1. **Diagnóstico** (não altere nada ainda). Liste:
   - stack detectada (linguagens, frameworks, gerenciadores de pacote);
   - pastas de front-end e back-end existentes;
   - arquivos `.md` fora dos lugares permitidos (`.ai-agent/policy/md-allowed-paths.txt`);
   - menções a ferramentas de IA espalhadas no código (`.cursor/`, `.cursorrules`, `copilot-instructions`, `.claudeignore`).
   Mostre o diagnóstico ao dev e peça confirmação antes de seguir.
2. **Estrutura.** Garanta uma pasta `docs/` em cada parte do código: `frontend/docs/` e `backend/docs/`, ou, em monorepo, `apps/<app>/docs/` e `packages/<pacote>/docs/`. Mantenha a `docs/` da raiz se já existir. Não mova código-fonte sem autorização explícita.
3. **AGENTS.md.** Preencha os campos `<...>` com o que foi detectado. Na descrição do produto, use a visão do usuário final, não a técnica. Deixe `<preencher>` onde não tiver certeza.
4. **Instruções antigas de IA.** Se houver `.cursorrules`, `.claudeignore` ou similares, proponha migrar o conteúdo útil para `AGENTS.md` ou para `.ai-agent/policy/sensitive-paths.txt` e liste o que pode ser removido. Lembre: `.claudeignore` não tem efeito no Claude Code.
5. **Documentos soltos.** Proponha para onde vai cada `.md` fora do lugar (use o subagente `docs-organizer`). Só mova após o ok do dev.
6. **README único.** Se houver README dentro de `frontend/` ou `backend/`, proponha consolidar no `README.md` da raiz.
7. **Sincronize** com `python .ai-agent/scripts/sync_adapters.py`.
8. **Encerramento** para o dev, em linguagem simples: o que foi feito, o que ficou pendente e o próximo passo (`/product-features`).

## Projeto já em desenvolvimento

- Faça só o diagnóstico (passo 1) e espere o dev aprovar cada item; execute uma pasta por vez, com `git mv`, e mostre o `git status`.
- Nunca sobrescreva `README.md`, `.env.example` ou `.gitignore` existentes: compare, proponha o que acrescentar e peça ok.
- Se não entender o que uma pasta faz (ex.: `replica/`, `scripts/`), descreva e pergunte; não mova.
- Em monorepo, README dentro de `apps/*` e `packages/*` é comum: pergunte se o dev quer mantê-los (e então inclua-os em `.ai-agent/policy/md-allowed-paths.txt`) ou consolidar no README da raiz.

## Regras

- Nunca toque em `.env`, chaves ou certificados.
- Nada de arquivos de IA fora de `.ai-agent/`.
