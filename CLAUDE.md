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
--olive:        #4a5240;   /* Primary background */
--olive-dark:   #363c2e;   /* Dark sections, nav, footer */
--olive-light:  #5c6450;   /* Hover states */
--cream:        #f5f0e8;   /* Primary text */
--gold:         #c9a84c;   /* Accent — labels, highlights, links */
--text-muted:   rgba(245, 240, 232, 0.65);  /* Secondary text */
--border:       rgba(245, 240, 232, 0.15);  /* Borders and dividers */
```

### Typography
- **Display / Headings:** `Cormorant Garamond` (Google Fonts) — weights 300, 400, 600; use italics for emphasis
- **Body / UI:** `Jost` (Google Fonts) — weights 300, 400, 500, 600
- **Never use:** Arial, Inter, Roboto, system fonts, or any other font not listed above

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
