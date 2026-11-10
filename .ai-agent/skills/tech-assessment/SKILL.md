---
name: tech-assessment
description: Avalia a stack atual e as opções de tecnologia antes de codar (ex.: manter ou trocar de framework, integrar com sistema existente, autenticação única entre aplicações) e gera o TECH_ASSESSMENT.md. Use depois do PRODUCT_FEATURES.md aprovado.
---

# Análise de tecnologia

## Passos

1. Leia `PRODUCT_FEATURES.md` e `AGENTS.md`.
2. Levante a situação atual: linguagens, frameworks, banco de dados, onde roda (hospedagem, container, serverless), integrações e autenticação.
3. Liste 2 ou 3 opções viáveis. Para cada uma: o que muda, esforço, riscos, impacto para o usuário e compatibilidade com o que já existe.
4. Avalie explicitamente:
   - reaproveitar o que já funciona vs. reescrever;
   - uma aplicação única vs. duas aplicações com autenticação compartilhada (o usuário não deve perceber a troca);
   - como a nova parte conversa com o legado (API, banco compartilhado, iframe, proxy).
5. Use o advisor (Opus) para revisar a recomendação antes de concluir.
6. Escreva `TECH_ASSESSMENT.md` na raiz com `.ai-agent/templates/TECH_ASSESSMENT.template.md`.
7. Termine com uma recomendação clara e as decisões que precisam de aprovação humana.

## Regras

- Não comece nenhuma migração; este passo só recomenda.
- Cite versões e requisitos concretos (ex.: Python 3.12, Node 22 LTS).
