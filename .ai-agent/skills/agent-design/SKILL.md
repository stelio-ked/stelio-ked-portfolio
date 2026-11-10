---
name: agent-design
description: Desenha uma funcionalidade com LLM ou agente antes de implementar — objetivo, ferramentas (function calling), contexto e RAG, guardrails, observabilidade e custo. Use quando a tarefa envolver modelo de linguagem, agente, RAG ou automação com IA.
argument-hint: "<o que a funcionalidade deve fazer para o usuário>"
---

# Desenho de funcionalidade com IA

Objetivo: decidir como a IA entra na aplicação antes de escrever código, de forma segura, testável e barata de manter.

## Entradas

- O que o usuário quer conseguir (`$ARGUMENTS`). Se faltar, pergunte.
- Dados e sistemas que a funcionalidade pode acessar.

## Passos

1. **Vale usar IA?** Compare com uma solução determinística (regra, consulta, formulário). Se a regra resolve, recomende a regra.
2. **Padrão de solução.** Escolha o mais simples que atende: chamada única com prompt estruturado, fluxo fixo em etapas, RAG ou agente com ferramentas. Justifique em duas linhas.
3. **Contexto.** Defina o que entra no prompt: instruções, exemplos, dados do usuário, trechos recuperados. Para RAG: fonte dos documentos, estratégia de divisão em trechos, modelo de embeddings, banco vetorial, critério de recuperação (top-k, filtros) e como citar a fonte.
4. **Ferramentas.** Para cada ferramenta (function calling): nome, parâmetros com tipos, efeito colateral (leitura ou escrita), validação de entrada e quem aprova ações irreversíveis.
5. **Guardrails.** Limites de ação, validação de saída (esquema JSON), proteção contra injeção de prompt (conteúdo recuperado é dado, nunca instrução), tratamento de dados pessoais, tempo máximo e número máximo de passos do agente.
6. **Observabilidade.** O que registrar (entrada resumida, ferramentas chamadas, tokens, latência, custo, erro) sem gravar dado pessoal; como investigar uma resposta ruim.
7. **Falhas.** O que o usuário vê quando o modelo erra, demora ou fica indisponível (mensagem em linguagem de negócio, alternativa manual).
8. **Plano de avaliação.** Aponte os casos que a skill `/llm-eval` deve cobrir.
9. Registre o desenho em `docs/` (ou `.ai-agent/work/` se for rascunho) e peça aprovação antes de implementar.

## Regras

- Chaves de API só em variáveis de ambiente; nunca no código, no prompt ou em log.
- Saída do modelo é entrada não confiável: valide antes de gravar, executar ou exibir.
- Registre o modelo e a versão usados e mantenha a troca de provedor isolada em uma camada de integração.

## Encerramento

Resuma ao dev: padrão escolhido, riscos principais e o que precisa de decisão humana.
