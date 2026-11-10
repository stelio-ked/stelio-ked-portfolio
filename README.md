# Stelio Ked — Portfólio

Site de portfólio profissional de Stelio Ked: trajetória, competências, projetos, formação e contato, em uma página única, responsiva e com animações.

## Como rodar localmente

Requisitos: Node LTS e npm.

```bash
npm install
npm run dev      # http://localhost:3000
```

| Comando | O que faz |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Gera o site estático em `out/` |
| `npm run lint` | Verifica o código com ESLint |

## Como atualizar o conteúdo

Todo o texto do site fica em [lib/data.ts](lib/data.ts): dados pessoais, sobre, experiências, skills, formação, projetos e menu. Edite esse arquivo; os componentes apenas exibem os dados.

## Estrutura

| Pasta | Conteúdo |
| --- | --- |
| `app/` | Página, layout e estilos globais (Next.js App Router) |
| `components/` | Uma seção por arquivo (Hero, Sobre, Experiência, Skills, Projetos, Formação, Contato) |
| `lib/` | `data.ts`, fonte única do conteúdo |
| `public/` | Imagens estáticas |
| `docs/` | Documentação técnica (criada quando necessária) |
| `.ai-agent/` | Skills, agentes, hooks e políticas de IA (Padrão Ked) |
| `.claude/` | Gerado a partir de `.ai-agent/`; não editar |
| `.github/workflows/` | Verificações automáticas do padrão |

## Stack

Next.js 16 (exportação estática), React 19, TypeScript, Tailwind CSS 4, Framer Motion e Lucide.

## Documentos

- [PRODUCT_FEATURES.md](PRODUCT_FEATURES.md): o que o visitante pode fazer no site
- [TECH_ASSESSMENT.md](TECH_ASSESSMENT.md): decisões técnicas, riscos e pontos em aberto
- [AGENTS.md](AGENTS.md): regras para agentes de IA neste repositório
