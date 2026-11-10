---
name: design-system-extract
description: Navega na aplicação existente, extrai o padrão visual (cores, tipografia, botões, filtros, navegação, cabeçalho, rodapé) e gera a skill design-system do projeto. Use uma vez por projeto, quando já existe uma aplicação ou referência visual.
argument-hint: "<URL da aplicação>"
---

# Extrair o design system

## Passos

1. Delegue ao subagente **design-extractor** a coleta na URL `$ARGUMENTS`. Ele grava as anotações em `.ai-agent/work/design-raw.md`.
2. Organize o resultado em:
   - **Tokens**: cores (com hex), tipografia, espaçamentos, bordas, sombras;
   - **Componentes**: botão (primário, secundário, perigo), filtros, campos, tabelas, cards, modais, mensagens;
   - **Layout**: cabeçalho, menu/navegação, rodapé, grade, responsividade;
   - **Comportamento**: estados (hover, desabilitado, carregando, vazio, erro), mensagens ao usuário.
3. Reescreva `.ai-agent/skills/design-system/SKILL.md` com esse conteúdo, mantendo o frontmatter (`name: design-system`). Se o projeto tiver CSS/variáveis já existentes, referencie os arquivos.
4. Rode `python .ai-agent/scripts/sync_adapters.py`.
5. Mostre ao dev um resumo do design system e peça validação.

## Regras

- Descreva o que existe; não invente um design novo sem pedido.
- Textos de exemplo em linguagem de negócio.
