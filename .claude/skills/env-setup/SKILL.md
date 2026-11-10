---
name: env-setup
description: Prepara o ambiente local do projeto — ambiente virtual Python, dependências, .env.example e ignores — sem nunca ler ou escrever credenciais. Use antes de começar a codar ou quando alguém novo entra no projeto.
---

# Ambiente local

## Passos

1. Detecte o que o projeto precisa (Python, Node, outros) a partir dos arquivos de dependência.
2. **Python**: crie o ambiente virtual em `.venv/`:
   - Windows (PowerShell): `python -m venv .venv` e depois `.\.venv\Scripts\Activate.ps1`
   - Linux/macOS: `python3 -m venv .venv` e depois `source .venv/bin/activate`
   Instale as dependências (`pip install -r requirements.txt` ou equivalente).
3. **Node**: `npm install` (ou o gerenciador do projeto) dentro de cada pasta que tiver `package.json`.
4. **Variáveis de ambiente**:
   - Garanta que `.env.example` lista todas as variáveis que o código lê, **sem valores**.
   - Peça ao dev para criar o `.env` ele mesmo: `Copy-Item .env.example .env` (PowerShell) ou `cp .env.example .env`, e preencher as credenciais.
   - Você não pode ler nem editar o `.env` — o padrão bloqueia isso de propósito.
5. Confira que `.gitignore` contém `.env`, `.venv/` e `node_modules/`.
6. Rode um teste simples (ex.: subir o servidor ou rodar os testes) e informe o resultado em linguagem simples.
7. Atualize a seção "Como rodar localmente" do `README.md` da raiz.

## Regras

- Credenciais de produção não ficam no `.env` local nem no repositório: ficam nos Secrets do GitHub Actions ou do provedor de hospedagem.
- Se o código precisar de uma variável nova, adicione-a ao `.env.example` com um comentário explicando o que é.
