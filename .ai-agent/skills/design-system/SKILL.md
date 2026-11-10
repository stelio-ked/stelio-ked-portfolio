---
name: design-system
description: Padrão visual deste projeto (tema "Aurora", escuro com gradientes) — cores, tipografia, cards, botões, tags, navegação, seções e animações. Use sempre que criar ou alterar uma tela ou seção do portfólio.
---

# Design system do portfólio — tema "Aurora"

Fonte da verdade do estilo: [app/globals.css](app/globals.css) (tokens e classes utilitárias) e os componentes em `components/`. Extraído do código em 2026-11-10; não inventar um visual novo sem pedido.

## Tokens

### Cores

| Papel | Valor | Uso |
| --- | --- | --- |
| Fundo principal | `#06060e` | `body`, bordas internas de avatar e ponto da timeline |
| Fundo secundário | `#0c0c18` | menu móvel |
| Fundo de card | `#111122` (vidro a 60%) / hover `#161630` | cards |
| Texto principal | `#eeeef5` | títulos |
| Texto secundário | `#7a7a9e` | parágrafos, links inativos |
| Texto discreto | `#4a4a6a` | datas, rodapé, legendas |
| Borda | `rgba(255,255,255,0.06)` (`white/[0.06]`) | cards, divisores |
| Acento ciano | `#06d6a0` | rótulos de seção, ativo, destaque |
| Acento azul | `#3b82f6` | gradientes, ícones |
| Acento índigo | `#6366f1` (texto `#a5b4fc`) | tags, hover de borda |
| Acento violeta | `#8b5cf6` (texto `#c4b5fd`) | formação, gradientes |
| Acento esmeralda | `#10b981` | categoria Liderança |
| Acento âmbar | `#f59e0b` | categoria Metodologias (só nos componentes) |
| WhatsApp | `#25D366` | botão de WhatsApp |

Gradiente de marca: `#06d6a0 → #3b82f6 → #8b5cf6` (texto: `.gradient-text` e `.gradient-text-hero`; botão: `from-[#06d6a0] to-[#3b82f6]`).

### Tipografia

- Texto: **Geist Sans** (`--font-geist-sans`); rótulos, datas e badges: **Geist Mono** (`--font-geist-mono`, via `style` inline ou `.section-label`).
- Título da página (h1): `text-5xl sm:text-6xl lg:text-7xl font-extrabold`.
- Título de seção (h2): `text-3xl sm:text-4xl font-bold`, cor `#eeeef5`; subtítulo `text-lg` em `#7a7a9e`.
- Título de card (h3/h4): `text-base` a `text-lg font-bold` (projeto: `text-2xl sm:text-3xl`).
- Texto de apoio: `text-sm` a `text-lg`, `leading-relaxed`.
- Rótulo de seção (`.section-label`): mono, `0.75rem`, peso 600, `letter-spacing 0.15em`, maiúsculas, ciano, precedido por uma linha de `w-8 h-px`.

### Espaçamento, bordas e sombras

- Seção: `py-24 sm:py-32`; contêiner `max-w-6xl mx-auto px-6` (Contato: `max-w-4xl`).
- Cartão: raio `1rem` (`.glass-card`); botões grandes `rounded-xl`/`rounded-2xl`; tags e badges `rounded-full`; chips de skill `rounded-lg`.
- Sombras: hover de card `0 0 40px rgba(99,102,241,0.08), 0 20px 60px rgba(0,0,0,0.3)`; botão primário `shadow-lg shadow-[#06d6a0]/20`.
- Rolagem: `scroll-behavior: smooth`, `scroll-padding-top: 5rem`; barra de rolagem de 6 px em índigo translúcido; seleção em índigo.

## Componentes

| Componente | Como é feito |
| --- | --- |
| Card de vidro | `.glass-card` (fundo translúcido, `backdrop-filter: blur(20px)`, borda sutil). Com hover: `.glass-card-hover` (sobe 2 px, brilho índigo, transição 0,4 s) |
| Botão primário | Gradiente ciano→azul, texto branco, `rounded-xl`/`rounded-full`, `hover:scale-[1.02..1.05]`, `active:scale-[0.98]` |
| Botão secundário | `bg-white/[0.04]`, `border-white/[0.08]`, texto `#eeeef5`, hover com borda índigo |
| Botão de WhatsApp | Fundo e borda `#25D366` a 10% e 30%, texto `#25D366` |
| Tag de tecnologia | `.tech-badge`: pílula índigo (`rgba(99,102,241,0.1)`, texto `#a5b4fc`) |
| Chip de skill | `px-3 py-1.5 text-xs rounded-lg`, fundo `white/[0.04]`, texto `#7a7a9e` |
| Etiqueta de tema | Pílula ciano `bg-[#06d6a0]/10 border-[#06d6a0]/20 text-[#06d6a0]` |
| Selo de situação | Pílula colorida com ponto pulsando (`animate-ping`), fonte mono (ex.: "Em produção", "Posição atual") |
| Ícone em quadrado | `w-10 h-10 rounded-xl` com gradiente da cor da categoria; ícones Lucide de 20 px |
| Número em destaque | `text-3xl sm:text-4xl font-extrabold gradient-text` |
| Link de rede social | Ícone de 16 px em `#4a4a6a`, hover na cor de acento com `bg-white/5` |

Campos de formulário, tabelas e modais **não existem** neste site. Se forem criados, derivar do card de vidro e dos botões acima.

## Layout

- **Página única** com fundo fixo `.aurora-bg` (gradientes radiais ciano, azul e violeta, em movimento lento) e `.grid-pattern` no Hero.
- **Barra superior fixa** (`Navbar`): transparente no topo; ao rolar mais de 50 px, `bg-[#06060e]/80`, desfoque e borda inferior. Logo "SK" em gradiente, links com destaque da seção ativa (fundo `#06d6a0/10`, indicador animado), botão "Contato" em pílula. Abaixo de `md`, menu em botão com painel que expande.
- **Hero:** tela cheia, centralizado, avatar redondo de 7 rem com anel em gradiente e ponto de "ativo", nome em gradiente, cargo `@ empresa`, frase, selos de localização/e-mail/LinkedIn e indicador de rolagem.
- **Seções** na ordem: Hero, Sobre, Experiência, Skills, Projetos, Formação, Contato. Cada uma abre com rótulo de seção, `h2` e subtítulo opcional, e uma linha-gradiente de 1 px no topo em algumas.
- **Grades:** Sobre `lg:grid-cols-5` (texto 3 + números 2) e destaques `sm:2 / lg:4`; Skills `1 / sm:2 / lg:3`; Formação `lg:2`; Projetos 1 coluna.
- **Experiência:** linha do tempo vertical, alternando lados em `md+`; em telas pequenas fica à esquerda. Ponto ciano com brilho para a posição ativa, azul para as demais.
- **Rodapé:** borda superior sutil, ano e nome à esquerda, ícones à direita; empilha no celular.
- **Responsividade:** mobile first com os pontos de corte `sm` (640), `md` (768) e `lg` (1024).

## Comportamento

- **Entrada:** seções animam com Framer Motion (`opacity 0→1`, `y 30–40→0`, 0,5 a 0,6 s, `staggerChildren` de 0,08 a 0,15 s), uma vez, ao entrar na tela (`useInView`/`whileInView`, `once: true`).
- **Hover:** cards sobem 1 a 2 px e ganham borda e brilho; títulos de card mudam para ciano; chips e tags clareiam; botões aumentam levemente.
- **Ativo/pressionado:** botões reduzem para `scale-[0.98]`.
- **Movimento contínuo:** aurora em fundo, gradiente de texto deslizando e indicador de rolagem. ⚠ Não há tratamento de `prefers-reduced-motion`.
- **Links externos:** `target="_blank"` com `rel="noopener noreferrer"`.
- **Estados vazios, erro e carregando:** não existem (site estático sem formulários nem dados remotos).
- **Textos:** português do Brasil, tom profissional e direto; sem jargão desnecessário. Todo texto de conteúdo vem de `lib/data.ts`.

## Regras ao criar ou alterar telas

1. Reusar `.glass-card`, `.section-label`, `.tech-badge`, `.gradient-text` e as cores acima antes de criar estilo novo.
2. Nova seção: seguir o esqueleto `section.relative.py-24.sm:py-32 > div.max-w-6xl.mx-auto.px-6`, com rótulo de seção, `h2` e animação de entrada.
3. Conteúdo em `lib/data.ts`; o componente só apresenta. Títulos e subtítulos de seção ficam em `sectionTexts`; o rótulo do card de projeto em `Project.category`.
4. Nova categoria ou projeto com cor: usar uma das chaves existentes (`cyan`, `indigo`, `violet`, `emerald`, `blue`, `amber`) ou acrescentar a nova ao `colorMap` do componente.
5. Respeitar contraste: texto de apoio mínimo `#7a7a9e` sobre `#06060e`; `#4a4a6a` só para informação secundária.

## Inconsistências conhecidas (não corrigir sem pedido)

- As cores estão repetidas como hexadecimais nas classes dos componentes; os tokens `--color-accent-*` de `globals.css` quase não são usados.
- `#f59e0b` (âmbar) e `#ec4899` (rosa, no brilho do projeto violeta) existem só nos componentes.
- Sem `prefers-reduced-motion`; contraste de `#4a4a6a` sobre o fundo escuro não foi medido.
