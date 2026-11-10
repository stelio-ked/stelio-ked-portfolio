---
name: llm-eval
description: Cria e roda uma avaliação de qualidade para funcionalidades com LLM — conjunto de casos de referência, critérios, regressão, segurança e custo. Use depois de implementar ou alterar prompts, modelos, RAG ou agentes, e antes do PR.
argument-hint: "<funcionalidade ou prompt a avaliar>"
---

# Avaliação de funcionalidade com IA

Objetivo: provar com dados que a funcionalidade funciona e continua funcionando depois de cada mudança.

## Passos

1. **Critérios.** Defina o que é uma boa resposta para o usuário: correção, completude, fidelidade à fonte (sem inventar), tom e formato. Escolha métricas simples e mensuráveis.
2. **Conjunto de referência.** Monte em `tests/evals/` (ou pasta equivalente) casos versionados: entrada, resultado esperado ou critério, e categoria. Inclua:
   - casos comuns e casos de borda;
   - perguntas sem resposta nos documentos (o sistema deve dizer que não sabe);
   - tentativas de injeção de prompt e pedidos fora do escopo;
   - para agentes: ferramenta esperada e parâmetros esperados.
   Use dados fictícios; nunca dado real de pessoa ou cliente.
3. **Execução.** Escreva um script repetível que roda o conjunto e gera relatório (acertos, falhas por categoria, latência, tokens e custo). Para RAG, meça separadamente a recuperação (o trecho certo veio?) e a resposta.
4. **Avaliação automática com cautela.** Se usar um modelo como juiz, calibre com uma amostra revisada por pessoa e registre a taxa de concordância.
5. **Regressão.** Salve o resultado de referência e falhe a verificação se a qualidade cair abaixo do limite acordado.
6. **Resultado.** Entregue tabela curta: ✅ passou / ⚠ atenção / ❌ bloqueia, com os casos que falharam e a causa provável.

## Regras

- Não ajuste o prompt só para passar nos casos de teste; acrescente casos novos quando um problema real aparecer.
- Mudou modelo, prompt ou base de documentos: rode a avaliação de novo.
- Não coloque chaves de API nos arquivos de avaliação.
