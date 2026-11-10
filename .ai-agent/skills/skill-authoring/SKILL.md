---
name: skill-authoring
description: Cria ou ajusta uma skill no Padrão Ked — viés do usuário final, frontmatter completo, passos claros e exemplos. Use sempre que for criar uma skill nova ou revisar uma existente.
argument-hint: "<nome-da-skill> <o que ela deve fazer>"
---

# Criar skills no Padrão Ked

## Onde

- Skill do projeto: `.ai-agent/skills/<nome>/SKILL.md` (nome em minúsculas, com hífens).
- Material de apoio da skill (exemplos, modelos): na mesma pasta, ex.: `.ai-agent/skills/<nome>/references/`.
- Depois de criar ou editar: `python .ai-agent/scripts/sync_adapters.py`.
- Skill útil para outros projetos: abra PR no repositório `ked-ai-setup`.

## Estrutura

Use `.ai-agent/templates/SKILL.template.md`. Toda skill tem:

1. `name` e `description` no frontmatter. A descrição diz **o que faz e quando usar** — é ela que faz o agente escolher a skill.
2. Objetivo em uma frase.
3. Entradas (o que pedir ao dev se faltar).
4. Passos numerados e verificáveis.
5. Regras (o que nunca fazer).
6. Como encerrar: o que dizer ao usuário no fim.

## Viés do usuário final

A skill é escrita para atender a necessidade de quem usa a aplicação — quem usa o produto —, não a de um desenvolvedor.

| Evite | Prefira |
| --- | --- |
| "data cached" | "Sua lista de produtos está pronta" |
| "erro 500 no endpoint /orders" | "Não conseguimos salvar o pedido. Tente de novo em instantes." |
| "implementar paginação" | "Mostrar os primeiros itens rápido e carregar o resto conforme a pessoa rola a tela" |

## Checklist antes de publicar

- [ ] A descrição diz quando usar?
- [ ] Os passos funcionam sem conhecimento prévio do projeto?
- [ ] Não há segredos, dados de cliente ou caminhos pessoais?
- [ ] Mensagens ao usuário em linguagem de negócio?
- [ ] Testada pelo menos uma vez com `/nome-da-skill`?
