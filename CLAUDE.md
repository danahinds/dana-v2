# CLAUDE.md — Dana Sandy Project Brief

> This file is the single source of truth for this project.
> Read this file before making any changes to the codebase.

---

## Who I Am
My name is **Dana Sandy**. I am a Product Manager and AI Innovator based in Florida, USA.
My website is **DanaSandy.com** / **danasandy.netlify.app**, built with **Astro** and deployed on **Netlify** via **GitHub**.

---

## Tech Stack
- **Framework:** Astro (do not suggest migrating away from Astro)
- **Hosting:** Netlify (auto-deploys on every push to GitHub)
- **Domain:** DanaSandy.com
- **Styling:** CSS (scoped or global — keep it simple, no Tailwind unless I ask)
- **Content:** Markdown / MDX for blog posts and series episodes
- **No unnecessary dependencies** — keep the stack lean

---

## Site Structure

```
/
├── src/
│   ├── pages/
│   │   ├── index.astro         ← Home page
│   │   ├── about.astro         ← About page (rename/repurpose as needed)
│   │   ├── contact.astro       ← Contact page (create if missing)
│   │   └── posts/              ← Series episodes live here as .md or .mdx files
│   ├── layouts/                ← Shared page layouts
│   ├── components/             ← Reusable UI components (nav, footer, cards, etc.)
│   └── styles/                 ← Global CSS
├── public/                     ← Static assets (images, fonts, favicon)
├── CLAUDE.md                   ← This file — always read first
└── astro.config.mjs            ← Astro configuration
```

---

## Design System

Always follow this design system. Do not deviate unless I explicitly ask.

### Colors
```css
--olive:        #2c3a22;   /* Primary background (Forest) */
--olive-dark:   #1a2214;   /* Footer, nav (Ink) */
--olive-light:  #3a4a2e;   /* Sections, cards (Forest 2) */
--cream:        #f5f0e8;   /* Primary text */
--gold:         #c8a45a;   /* Accents, rules */
--gold-light:   #e2c07a;   /* Italic, highlights */
--text-muted:   rgba(245, 240, 232, 0.65);  /* Secondary text */
--border:       rgba(245, 240, 232, 0.15);  /* Borders and dividers */
```

### Typography
- **Display / Headings:** `Cormorant Garamond` (Google Fonts) — weights 300, 400, 600; use italics for emphasis
- **Body / UI:** `Jost` (Google Fonts) — weights 300, 400, 500, 600
- **Never use:** Arial, Inter, Roboto, system fonts, or any other font not listed above

#### Type scale (defined in `src/styles/index.css`)

Always use these tokens for `font-size`, `line-height`, `font-weight`, and `letter-spacing` instead of hard-coded values. They keep every page on the same scale.

**Static sizes** (modular ratio ~1.25)
```css
--text-2xs:  0.6875rem;  /* 11px — micro labels */
--text-xs:   0.75rem;    /* 12px — captions, meta */
--text-sm:   0.875rem;   /* 14px — small UI, buttons, .label */
--text-base: 1rem;       /* 16px — body default */
--text-lg:   1.125rem;   /* 18px — lead paragraph */
--text-xl:   1.25rem;    /* 20px — large intro */
--text-2xl:  1.5rem;     /* 24px — h4 */
--text-3xl:  2rem;       /* 32px — h3 */
--text-4xl:  2.5rem;     /* 40px — h2 floor */
--text-5xl:  3rem;       /* 48px — h2 ceiling / h1 floor */
--text-6xl:  4rem;       /* 64px — h1 ceiling */
--text-7xl:  5rem;       /* 80px — hero display */
```

**Fluid sizes** (use for hero/heading levels — they auto-scale with viewport)
```css
--text-h3-fluid:      clamp(1.5rem, 3vw, 2rem);
--text-h2-fluid:      clamp(2rem,   4vw, 3rem);
--text-h1-fluid:      clamp(2.5rem, 5vw, 4rem);
--text-display-fluid: clamp(3rem,   7vw, 5rem);
```

**Line heights**
```css
--leading-tight:   1.1;    /* large display */
--leading-snug:    1.2;    /* heading default */
--leading-normal:  1.5;    /* general */
--leading-relaxed: 1.7;
--leading-loose:   1.85;   /* body paragraph */
```

**Weights** (only those actually loaded)
```css
--weight-light:    300;    /* heading default */
--weight-regular:  400;    /* body default */
--weight-medium:   500;    /* labels, buttons */
--weight-semibold: 600;
```

**Letter spacing**
```css
--tracking-tight:  -0.02em;
--tracking-normal: 0;
--tracking-wide:   0.1em;
--tracking-wider:  0.15em; /* uppercase labels */
```

**Defaults applied site-wide**: `h1`/`h2`/`h3` use the fluid clamps; `h4`–`h6` step down through `--text-2xl` → `--text-lg`; `p` is `--text-base` with `--leading-loose`; `.label` and `.btn` are `--text-sm`. Override per-component using the tokens, never raw rem/px values.

### Aesthetic
- Editorial, refined, elegant — inspired by high-end lifestyle and wellness sites
- Generous whitespace and breathing room
- Uppercase + letter-spacing for labels and small UI text
- Gold accents on labels, numbers, and hover states
- Subtle borders, no heavy shadows
- Clean section dividers using `border-bottom` or thin horizontal rules

---

## Pages

### Home (`index.astro`)
- Hero section: large editorial headline focused on Dana as a **Product Manager & AI Innovator**
- Three feature cards: Product Strategy / AI Experimentation / Team Leadership
- Featured series block promoting **SKAI is the Limit?**
- Footer

### Series (`/series` or `/posts`)
- Page hero with series name and tagline
- Series overview section with stats (8 episodes, 6 team members, 1 big question)
- SKAI Team grid (6 members — see team section below)
- Episode list — each episode is a card or row with number, title, description, and status badge
- Teaser/coming soon CTA section for episodes not yet published
- Episodes are Markdown/MDX files in `src/pages/posts/`

### Contact (`contact.astro`)
- Simple contact form (name, email, subject dropdown, message)
- Subject options: SKAI Series updates, Collaboration, Product Management inquiry, General hello
- Location: Florida, USA
- Email: hello@danasandy.com

---

## The SKAI Series — "SKAI is the Limit?"

**Tagline:**
> "We gave AI a development team and one mission — to build a real app from scratch. Does SKAI have a limit?"

**The app being built:** RentBridge — a tenant and landlord relationship management tool for small business landlords.

**Target audience:** General — no technical background required. Write and design accordingly.

### The SKAI Team
| Name | Role |
|------|------|
| Proddy SKAI | Product Manager |
| Dev SKAI | Developer |
| Dezi SKAI | Designer |
| Testa SKAI | QA Tester |
| Biz SKAI | Business Analyst |
| Opsy SKAI | DevOps / Deployment |

### Episode List
| # | Title | Status |
|---|-------|--------|
| 1 | The Problem & The Vision | Coming Soon |
| 2 | Meet the SKAI Team | Coming Soon |
| 3 | Blueprint | Coming Soon |
| 4 | Build Begins | Coming Soon |
| 5 | Design Comes Alive | Coming Soon |
| 6 | Breaking Things | Coming Soon |
| 7 | Ready for Launch? | Coming Soon |
| 8 | SKAI is the Limit? | Coming Soon |

When an episode is published, its Markdown file in `src/pages/posts/` becomes the live link. Update the status badge from "Coming Soon" to "Read Now" and link to the post.

---

## Rules for Claude Code

1. **Always read this file first** before suggesting or making any changes
2. **Never change the color palette or fonts** unless I explicitly ask
3. **Keep the code simple** — I am a writer and strategist, not a developer. Explain changes clearly in plain language
4. **Astro patterns only** — use `.astro` components, layouts, and Markdown/MDX for content. Do not introduce React, Vue, or other frameworks unless I ask
5. **One task at a time** — make changes incrementally so I can review and approve before moving on
6. **Mobile first** — every page and component must be fully responsive
7. **Shared styles** — global styles go in `src/styles/`. Component styles use Astro scoped `<style>` tags
8. **Git friendly** — keep changes clean and logical so each commit is meaningful
9. **Content is king** — the series and episodes are the heart of this site. Always make it easy to add new content
10. **Ask before deleting** — never remove existing files or content without confirming with me first

---

## Deployment
- Push to **GitHub main branch** → Netlify auto-deploys to **danasandy.netlify.app** and **DanaSandy.com**
- Always test locally with `npm run dev` before pushing
- Netlify build command: `npm run build`
- Netlify publish directory: `dist`

---

## Reference Documents
- `SKAI_is_the_Limit_Series_Outline.docx` — Full series breakdown, episode details, team profiles, and delivery strategy

---

*Last updated: March 9, 2026 — Created in collaboration with Claude (Anthropic)*
