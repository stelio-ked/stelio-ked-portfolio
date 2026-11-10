---
name: product-features
description: Navega na aplicação (ou lê o material disponível) e gera o PRODUCT_FEATURES.md na raiz, descrevendo tudo o que o usuário final pode fazer — personas, jornadas, navegação e UX. Primeiro passo de todo projeto Ked.
argument-hint: "<URL da aplicação>"
---

# Product Features

O `PRODUCT_FEATURES.md` é a fonte da verdade do produto. Ele descreve o produto **para o usuário final**, não para o desenvolvedor.

## Entrada

- URL da aplicação: `$ARGUMENTS` (se vazio, pergunte). Se a aplicação exigir login, peça ao dev para fazer o login no navegador; nunca peça a senha no chat.
- Material extra opcional: telas, manuais, user stories.

## Passos

1. Delegue a navegação ao subagente **feature-explorer** com a URL. Ele grava as anotações brutas em `.ai-agent/work/features-raw.md`.
2. A partir das anotações, escreva `PRODUCT_FEATURES.md` na raiz usando `.ai-agent/templates/PRODUCT_FEATURES.template.md`.
3. Para cada feature, responda: quem usa (persona), o que a pessoa quer conseguir, como chega até ali (navegação), o que vê e faz na tela, e o resultado para ela.
4. Marque com `⚠ Confirmar com o público-alvo` tudo que for suposição.
5. Termine pedindo ao dev para revisar o documento com alguém do público-alvo do produto e ajustar até fazer sentido.

## Regras

- Escreva como se explicasse a aplicação para uma pessoa nova que vai usá-la, não para um programador.
- Nada de nomes de tabelas, endpoints ou detalhes de código.
- Este documento vai para o Git: não inclua dados reais de clientes, senhas ou valores sensíveis vistos nas telas.
