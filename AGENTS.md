<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# AGENTS.md — stelio-ked-portfolio

> Regras para qualquer agente de IA neste repositório (Claude, Cursor, Copilot ou outro).
> Padrão Ked de Setup de IA — versão em `.ai-agent/VERSION`.

## Sobre o projeto

- **Produto:** site de portfólio profissional de Stelio Ked. Recrutadores e gestores conhecem a trajetória, as competências e os projetos e entram em contato por e-mail, WhatsApp ou LinkedIn.
- **Stack:** Next.js 16 (App Router, exportação estática), React 19, TypeScript, Tailwind CSS 4, Framer Motion, Lucide.
- **Conteúdo:** todo o texto do site vive em `lib/data.ts` (fonte única). Componentes em `components/` só apresentam esses dados.
- **Features do produto:** `PRODUCT_FEATURES.md` (fonte da verdade do produto)
- **Decisões técnicas:** `TECH_ASSESSMENT.md`
- **Design:** skill `/design-system`

## Regras obrigatórias

1. Tudo que é de IA fica em `.ai-agent/`. Nunca crie arquivos de IA soltos no código.
2. Skills ficam só em `.ai-agent/skills/<nome>/SKILL.md`; subagentes só em `.ai-agent/agents/<nome>.md`.
3. Nunca edite `.claude/` à mão. Depois de mudar `.ai-agent/`, rode `python .ai-agent/scripts/sync_adapters.py`.
4. Markdown tem lugar certo:
   - documentação de código → `docs/`;
   - rascunhos, planos e notas de trabalho do agente → `.ai-agent/work/`;
   - na raiz, só `README.md`, `AGENTS.md`, `CLAUDE.md`, `PRODUCT_FEATURES.md`, `TECH_ASSESSMENT.md`, `CHANGELOG.md`.
5. Existe um único `README.md`, na raiz.
6. Segredos: nunca leia, escreva, copie ou exiba `.env`, chaves ou certificados. Hoje o site não usa variáveis de ambiente; se passar a usar, documente-as em `.env.example` (sem valores).
7. Antes de mudanças grandes: `PRODUCT_FEATURES.md` revisado e `TECH_ASSESSMENT.md` atualizado.
8. Toda tela ou seção nova segue a skill `/design-system`.
9. Antes de abrir PR: `/security-check` e `/docs-tidy`.
10. Textos para o visitante usam linguagem de negócio, sem jargão técnico desnecessário.
11. Funcionalidade com LLM ou agente: desenhe com `/agent-design` e valide com `/llm-eval` antes do PR. Chaves de modelo só em variáveis de ambiente; nenhum dado pessoal real em prompts, logs ou fixtures.
12. Confidencialidade: nunca cite nomes, dados, código ou arquitetura de clientes ou empregadores em arquivos do projeto. A lista de termos fica em `.ai-agent/policy/client-terms.local.txt` (fora do Git; modelo em `client-terms.example.txt`). Conteúdo do site descreve competências de forma genérica; resultados e projetos de clientes não são publicados.
13. Conteúdo do site só em `lib/data.ts`. Não escreva texto de conteúdo diretamente nos componentes.

## Fluxo padrão

`/ked-bootstrap` → `/product-features` → revisão → `/tech-assessment` → `/env-setup` → `/design-system-extract` → codar com `/design-system` → `/security-check` → PR

Prompts-modelo de cada etapa: `.ai-agent/prompts/`.
Funcionalidade com IA: `/agent-design` (arquitetura, ferramentas, contexto, guardrails) e `/llm-eval` (qualidade e regressão).

## Comandos do projeto

- Instalar dependências: `npm install`
- Rodar em desenvolvimento: `npm run dev` (http://localhost:3000)
- Testes: não há testes automatizados
- Lint: `npm run lint`
- Build: `npm run build` (gera a exportação estática em `out/`)
