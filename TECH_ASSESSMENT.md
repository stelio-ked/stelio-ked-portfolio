# Tech Assessment — Portfólio de Stelio Ked

> Data: 2026-11-10 · Responsável: Stelio Ked · Status: situação atual documentada (sem proposta de mudança estrutural)

## Situação atual

| Área | Estado |
| --- | --- |
| Framework | Next.js 16.2.4, App Router; AGENTS.md avisa que a versão tem mudanças em relação ao conhecimento comum dos modelos (consultar `node_modules/next/dist/docs/`) |
| Interface | React 19.2.4, TypeScript 5, Tailwind CSS 4, Framer Motion, Lucide, fonte Geist |
| Saída | Exportação estática (`output: "export"`, imagens sem otimização) → pasta `out/` |
| Dados | Arquivo único `lib/data.ts`, com o conteúdo em português (`pt`) e inglês (`en`); sem banco, sem API e sem variáveis de ambiente |
| Idiomas | Português (padrão) e inglês, alternados por botão PT/EN. Idioma em `data-lang` no `<html>`, escolha salva em `localStorage`, hook `useContent` (`lib/useContent.ts`). URL única, sem rotas por idioma. Título, descrição e imagem de prévia do link ficam em português (são estáticos) |
| Estrutura | Página única (`app/page.tsx`) compõe 9 componentes; seções de conteúdo em `components/` |
| Tema | Escuro (padrão) e claro por variáveis CSS em `globals.css` (`data-theme` no `<html>`); escolha salva em `localStorage`; script em `layout.tsx` evita piscar. Sem dependência nova |
| Qualidade | ESLint (`eslint-config-next`); sem testes automatizados |
| Hospedagem | Vercel (deploy a partir do GitHub); sem `basePath`; `vercel.json` fixa o `Content-Type: image/png` da imagem de prévia |
| Integrações | Nenhuma; contato por `mailto:`, `wa.me` e LinkedIn |

## Decisões que o código revela

- **Conteúdo desacoplado em `lib/data.ts`:** atualizar o site é editar um arquivo. Bom para manutenção.
- **Exportação estática:** hospedagem simples e barata, sem servidor. Impede recursos que dependem de servidor (rotas de API, formulário próprio, renderização sob demanda).
- **Sem backend:** nenhum dado do visitante é coletado, o que reduz risco de privacidade e segurança.

## Riscos e pontos em aberto

| Ponto | Detalhe | Impacto |
| --- | --- | --- |
| ✅ Resolvido: dado fixo no componente | O Hero tinha a empresa atual fixa no código; agora lê a experiência ativa de `lib/data.ts` | Ao mudar de empresa, o Hero acompanha os dados |
| ✅ Resolvido: duplicação de dados | A URL do LinkedIn em `EducationSection.tsx` e o total de certificações em `aboutText.stats` agora vêm de `personalInfo.linkedin` e `certifications.total` | Valores não divergem mais |
| Duas experiências com o mesmo período | Duas posições de 2021 têm o mesmo intervalo (`Jun 2021 — Dez 2021`) porque as empresas foram consolidadas no período; a data exata da transição não é conhecida | Mantido como está; ajustar quando a data for confirmada |
| ✅ Resolvido: grafia | `#recrutamentoeseleção` e "Lato Sensu" corrigidos | — |
| Contatos públicos | E-mail e telefone pessoal estão no código-fonte e no site | Decisão do dono; aumenta exposição a spam |
| Metadados | ✅ Título, descrição e palavras-chave citam IA aplicada; imagem de prévia gerada em `app/opengraph-image.tsx` a partir de `lib/data.ts` | `metadataBase` aponta para o endereço da Vercel; trocar se houver domínio próprio |
| Acessibilidade | Botão de menu tem `aria-label`; ✅ movimento reduzido tratado (`prefers-reduced-motion`); não foram verificados contraste das cores e foco por teclado | ⚠ Avaliar com Lighthouse |
| ✅ Resolvido: verificação no CI | O workflow `site-check.yml` roda `npm run lint` e `npm run build`; o `ai-check` cobre o padrão de IA | Continua sem testes automatizados |
| Hospedagem | ✅ Definida: Vercel, na raiz do domínio | Nenhum ajuste em `next.config.ts` necessário |

## Recomendação

Manter a arquitetura atual (Next.js estático com conteúdo em `lib/data.ts`), que atende o objetivo do produto. Fazer apenas correções pontuais, sem mudança estrutural:

1. ✅ Ligar o Hero e o Educação aos dados de `lib/data.ts`.
2. ✅ Adicionar `npm run lint` e `npm run build` ao CI (`site-check.yml`).
3. ✅ Revisar metadados e conteúdo para o novo posicionamento (IA aplicada), de forma genérica e sem dados de clientes (aplicado em 2026-11-10: título, descrição, palavras-chave, Sobre e Skills).

## Decisões que precisam de aprovação

- [x] Correções 1 e 2 acima (aplicadas em 2026-11-10)
- [x] Revisão de conteúdo e metadados (item 3, aplicada em 2026-11-10)
- [x] Competências de IA e .NET listadas de forma genérica, sem clientes (confirmado pelo dono em 2026-11-10)
- [x] Hospedagem: Vercel (https://portfolio-stelio-ked.vercel.app/), código em https://github.com/stelio-ked/stelio-ked-portfolio. Sem `basePath` (domínio na raiz)
- [x] E-mail e WhatsApp permanecem públicos (decisão do dono, 2026-11-10)
