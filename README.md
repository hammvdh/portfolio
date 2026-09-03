# hammadh.dev

Personal site of Hammadh Arquil — software engineer, designer, founder.
Astro + React + Tailwind v4 + content collections, deployed to Vercel.

## Stack

- **Astro 5** — static site, view transitions, content collections
- **Tailwind CSS v4** — design tokens via `@theme`, `data-theme` driven dark/light mode
- **React** — used only for `GitHubHeatmap` (lazy-hydrated via `client:visible`)
- **Vercel** — hosting, Analytics, Speed Insights

## Local development

```bash
yarn install
yarn dev          # http://localhost:4321
yarn build        # build to ./dist
yarn preview      # preview the build locally
yarn astro check  # type-check pages and components
```

## Repository layout

```
src/
  components/      Astro components (Hero, FeaturedWork, Experience, etc.) + GitHubHeatmap.tsx
  content/
    blog/          Markdown blog posts (with tags + frontmatter)
    projects/      MDX case studies (Vital, Prayr, Requester, Onco)
    config.ts      Collection schemas (zod)
  data/            Typed data files (experience, education, techStack, now)
  layouts/         Layout.astro — shared shell (head, nav, footer, meta, JSON-LD)
  pages/
    index.astro          One-page home (hero, work, experience, writing, activity, tech, connect)
    resume.astro         Live résumé with print stylesheet
    now.astro            What I'm focused on right now
    uses.astro           Hardware, software, and tools
    rss.xml.ts           RSS feed
    blog/                Index, [...slug], tags/[tag]
    work/[slug].astro    Project case studies
  styles/global.css      Design tokens, theme, base, animations, prose
public/
  fonts/                 PP Neue Montreal + JetBrains Mono woff2 (must be supplied)
  images/                Avatar, project images, project case-study screenshots
  og/                    OG images (default.png, per-page generated PNGs)
  favicon.svg, robots.txt, site.webmanifest
```

## Theming

`<html data-theme="dark|light">` is set by an inline `<head>` script *before paint*,
defaulting to `prefers-color-scheme` and overridden by `localStorage('theme')`.
Tailwind v4's `@custom-variant dark` makes `dark:` utilities target the attribute,
and CSS custom properties (`--bg`, `--fg`, `--accent`, etc.) handle the rest.

There are **no per-component theme branches** — components reference semantic tokens
and the variables flip on theme change.

## Assets you still need to supply

These are file-only blockers — drop them in and the site renders fully.

1. **Fonts** in `public/fonts/`:
   - `PPNeueMontreal-Book.woff2`
   - `PPNeueMontreal-Medium.woff2`
   - `PPNeueMontreal-Bold.woff2`
   - `PPNeueMontreal-SemiBolditalic.woff2`
   - `JetBrainsMono-Regular.woff2`
   - `JetBrainsMono-Medium.woff2`

   PP Neue Montreal: download from [Pangram Pangram](https://pangrampangram.com/products/neue-montreal) (free for commercial use).
   JetBrains Mono: download from [jetbrains.com/mono](https://www.jetbrains.com/lp/mono/) or Google Fonts.

2. **OG image** `public/og/default.png` — 1200×630, used by every page until per-page OG generation is wired up.

3. **Project images** in `public/images/projects/`:
   - `requester.png` — home card and case-study hero (16×10)
   - `onco.png` — home card (16×10)
   - Optional: more screenshots referenced inside the project MDX bodies.

4. **Favicons** in `public/`:
   - `favicon-16.png`, `favicon-32.png`, `apple-touch-icon.png` — generate from the existing `favicon.svg`.

## Deployment

Deploys to Vercel as a static site. `vercel.json` redirects deleted routes
(`/about`, `/contact`, `/work`) to home anchors. Set the custom domain to
`hammadh.dev` in Vercel project settings.

---

© Hammadh Arquil
