# Portfolio — debajyoti.in

Personal portfolio for Debajyoti Saha. Single page: hero, about, work experience,
projects, technologies and contact, with a light/dark theme toggle (dark is the default).

## Stack

- **Next.js 16** (App Router) + **React 19**
- **TypeScript** (strict)
- **Tailwind CSS v4** — design tokens declared as CSS custom properties in
  [`src/app/globals.css`](src/app/globals.css)

## Getting started

```bash
npm install
npm run dev
```

| Script | Does |
| --- | --- |
| `npm run dev` | Development server on :3000 |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run typecheck` | Type-check without emitting |
| `npm run lint` | Lint |

## Theming

Light values live on `:root`; dark re-points the same custom properties under
`[data-theme="dark"]`, so every Tailwind utility follows the theme without a
`dark:` variant. The choice persists to `localStorage['portfolio-theme-v2']` and is
applied by a small blocking script in [`src/lib/theme.ts`](src/lib/theme.ts) before
first paint, which is what prevents a flash of the wrong theme on load.

## Layout

```
src/
  app/         routes (App Router), global stylesheet
  components/  shared components; sections/ holds one file per page section
  constants/   site content — copy, links, experience, projects
  lib/         small helpers (clsx, theme script)
  types/       shared domain types
```

Content lives in [`src/constants/site.ts`](src/constants/site.ts) — editing copy,
projects or work history means touching that file, not the components.

## Deploying

All three routes prerender as static content, so any host that builds a Next.js
app works — deploying from a git push on Vercel or Netlify needs no extra config.

## Notes

- The **Writing** section is built but commented out in
  [`src/app/page.tsx`](src/app/page.tsx) until it is wired to a real blog source.
- Expanded skill lists in the experience section were inferred from role
  descriptions — replace them with the real ones.
