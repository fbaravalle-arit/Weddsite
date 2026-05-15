# Elena & Federico — Weddsite

Sito bilingue (it/es) per tre celebrazioni: Bologna 2026, Argentina 2027, Italia 2028.

## Stack

- **Next.js 15** con App Router e static export (`output: 'export'`)
- **TypeScript** strict
- **Tailwind CSS** (config file, non CDN)
- **React 19** con Server Components

## Sviluppo

```bash
npm install
npm run dev      # http://localhost:3000
```

Altri comandi:

```bash
npm run build       # genera ./out/ (statico, deployabile ovunque)
npm run lint
npm run typecheck
npm run format
```

## Struttura

```
public/
  images/      # 27 foto del matrimonio
  icons/
  fonts/
src/
  app/         # App Router: una cartella per route (bologna, programma, …)
  components/  # SiteNav, MobileDrawer, Footer, HeroCollage, …
  sections/    # Composizioni page-specific (Timeline, FaqAccordion, RsvpForm, …)
  content/     # Dati statici (nav, faq, programma)
  lib/         # Utility (cn helper)
  styles/      # CSS aggiuntivo se necessario
tests/         # Test (placeholder)
.github/workflows/ # CI (lint + typecheck + build)
```

## Deploy

`npm run build` produce `./out/`, una cartella di file statici che puoi servire da
qualsiasi host (Vercel, Netlify, GitHub Pages, S3+CloudFront, nginx, ecc.).

Per servirla localmente:

```bash
npx serve out
```

Oppure usa il `Dockerfile` (nginx + static export):

```bash
docker build -t weddsite . && docker run --rm -p 8080:80 weddsite
```

## Convenzioni

- **Lingue**: testi affiancati it/es (it primario, es in italico). Usare `lang="es"` su tutti i frammenti spagnoli.
- **Accessibilità**: skip link, `aria-label` sui pulsanti icona, `prefers-reduced-motion`, focus-visible custom.
- **Immagini**: sempre con `next/image`, `alt` descrittivo, `width`/`height` o `fill` + container con aspect-ratio.
- **Styling**: Tailwind utility-first; nessun `style=""` inline tranne CSS variables.
- **Component split**: server components per il markup, `"use client"` solo per interattività (drawer, accordion, copy, IntersectionObserver).
