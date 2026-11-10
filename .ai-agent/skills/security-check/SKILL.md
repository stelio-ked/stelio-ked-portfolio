---
name: security-check
description: Verifica o repositório antes de um PR — segredos no código, ignores corretos, .env fora do Git, arquivos sensíveis e organização. Use antes de todo pull request.
---

# Checagem de segurança

## Passos

1. Delegue ao subagente **security-auditor** a varredura do repositório.
2. Rode as verificações automáticas e inclua o resultado:
   - `python .ai-agent/scripts/sync_adapters.py --check`
   - `python .ai-agent/scripts/check_md_locations.py`
   - `python .ai-agent/scripts/check_client_terms.py` (confidencialidade de clientes; exige a lista local)
   - `git status --porcelain` e `git diff --cached --name-only` para ver o que vai entrar no commit.
3. Confirme:
   - `.env`, chaves e certificados não aparecem em `git ls-files`;
   - `.gitignore` tem as regras do padrão;
   - `.env.example` existe e não contém valores reais;
   - nenhum dado real de pessoa ou cliente em documentos ou testes;
   - nenhum nome, código ou detalhe de cliente ou empregador no repositório;
   - strings de conexão, tokens ou senhas não estão no código (inclusive `appsettings*.json`, `web.config` e `launchSettings.json`).
4. Entregue um relatório curto: ✅ ok / ⚠ atenção / ❌ bloqueia o PR, com o arquivo e a correção sugerida.

## Regras

- Nunca exiba o valor de um segredo encontrado; mostre só o arquivo, a linha e o tipo.
- Um ❌ significa que o PR não deve ser aberto até a correção.
