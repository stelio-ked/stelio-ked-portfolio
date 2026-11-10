# Tech Assessment — Portfólio de Stelio Ked

> Data: 2026-11-10 · Responsável: Stelio Ked · Status: situação atual documentada (sem proposta de mudança estrutural)

## Situação atual

| Área | Estado |
| --- | --- |
| Framework | Next.js 16.2.4, App Router; AGENTS.md avisa que a versão tem mudanças em relação ao conhecimento comum dos modelos (consultar `node_modules/next/dist/docs/`) |
| Interface | React 19.2.4, TypeScript 5, Tailwind CSS 4, Framer Motion, Lucide, fonte Geist |
| Saída | Exportação estática (`output: "export"`, imagens sem otimização) → pasta `out/` |
| Dados | Arquivo único `lib/data.ts`; sem banco, sem API e sem variáveis de ambiente |
| Estrutura | Página única (`app/page.tsx`) compõe 9 componentes; seções de conteúdo em `components/` |
| Qualidade | ESLint (`eslint-config-next`); sem testes automatizados |
| Hospedagem | ⚠ Não registrada no repositório (sem workflow de deploy nem `basePath`) |
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
| iTech Care e Dasa com o mesmo período | A Dasa incorporou a iTech Care em 2021 e as equipes foram consolidadas; a data exata da incorporação não é conhecida | Mantido `Jun 2021 — Dez 2021` nas duas; ajustar quando a data for confirmada |
| ✅ Resolvido: grafia | `#recrutamentoeseleção` e "Lato Sensu" corrigidos | — |
| Contatos públicos | E-mail e telefone pessoal estão no código-fonte e no site | Decisão do dono; aumenta exposição a spam |
| Metadados | Descrição e palavras-chave focam em BI/Analytics; sem imagem de compartilhamento | Posicionamento de IA depende de atualizar `layout.tsx` |
| Acessibilidade | Botão de menu tem `aria-label`; não foram verificados contraste das cores, foco por teclado e movimento reduzido | ⚠ Avaliar com Lighthouse |
| ✅ Resolvido: verificação no CI | O workflow `site-check.yml` roda `npm run lint` e `npm run build`; o `ai-check` cobre o padrão de IA | Continua sem testes automatizados |
| Hospedagem | Sem definição de domínio, deploy ou `basePath` | Se for GitHub Pages em subcaminho, será preciso ajustar `next.config.ts` |

## Recomendação

Manter a arquitetura atual (Next.js estático com conteúdo em `lib/data.ts`), que atende o objetivo do produto. Fazer apenas correções pontuais, sem mudança estrutural:

1. ✅ Ligar o Hero e o Educação aos dados de `lib/data.ts`.
2. ✅ Adicionar `npm run lint` e `npm run build` ao CI (`site-check.yml`).
3. Revisar metadados e conteúdo para o novo posicionamento (IA aplicada), de forma genérica e sem dados de clientes.

## Decisões que precisam de aprovação

- [x] Correções 1 e 2 acima (aplicadas em 2026-11-10)
- [ ] Revisão de conteúdo e metadados (item 3)
- [ ] Definir onde o site será hospedado
- [ ] Manter e-mail e WhatsApp públicos
- [ ] Manter e-mail e WhatsApp públicos
