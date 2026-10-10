# hammadh.dev

Personal site of Hammadh Arquil — software engineer, designer, founder.
Astro + React + Tailwind v4 + content collections, deployed to Vercel.

## Stack

- **Astro 5** — static site, content collections, build-time OG/favicon generation (satori + resvg)
- **Tailwind CSS v4** + plain scoped CSS — design tokens for a light and a dark theme
- **React** — used only for `GitHubHeatmap` (client-only island)
- **Vercel** — hosting, Analytics, Speed Insights (installs with Yarn 4)

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
  components/
    BaseHead.astro       Shared <head>: SEO, Open Graph, icons, JSON-LD
    GitHubHeatmap.tsx    Contribution heatmap (React island)
    workspace/           The site shell and home sections:
                           Sidebar (file tree), Tabs, ThemeToggle, BootLog,
                           Identity, Work, Experience, Writing, Activity, Stack, Contact,
                           ScreenTour + TourHud (animated screenshot tours), OncoPipeline
  content/
    blog/                Markdown posts
    projects/            MDX case studies (frontmatter drives the home Work rows)
    config.ts            Collection schemas (zod)
  data/                  experience, education, techStack, now, projectTours, projectFiles, elitepsd
  lib/brand.ts           Logo mark + icon/PNG helpers used by the generated images
  layouts/Layout.astro   Every page: workspace shell (sidebar, tabs, top bar on phones)
  pages/
    index.astro          Home (`home` mode: boot log + one tab per section)
    resume.astro, now.astro, uses.astro, 404.astro
    blog/, work/[slug].astro
    favicon-[size].png.ts, apple-touch-icon.png.ts, og/default.png.ts   Generated at build
    rss.xml.ts
  scripts/               Small client helpers (whenVisible, tourHud)
  styles/
    global.css           Page tokens (light + dark), base, prose, print
    workspace.css        Workspace tokens (light + dark) and section chrome
  assets/elitepsd/       Drop ElitePSD images here; the home section appears automatically
public/
  images/projects/       Screenshots used by the Work tours and case studies
  favicon.svg, robots.txt, site.webmanifest
```

## Theming

Every page is a "file" open in an editor workspace. `<html data-theme="dark|light">` is set
by an inline `<head>` script before paint: the saved choice from the toggle if there is one,
otherwise `prefers-color-scheme`. Components only use semantic tokens (`--ws-*` in
`workspace.css`, `--bg`/`--fg`/`--accent` in `global.css`), each defined for both themes.

## Content you'll want to update

- **Work rows** come from `src/content/projects/*.mdx` (`featured`, `order`, `release`).
- **Screenshot tours**: steps per project in `src/data/projectTours.ts` (coordinates are
  fractions of the image). Higher-resolution screenshots (~2048px wide) zoom more crisply.
- **Experience** comes from `src/data/experience.ts` (also used by the résumé).
- **Now** blurb: `src/data/now.ts`.

## Deployment

Deploys to Vercel as a static site on push to `main`. `vercel.json` redirects old
routes (`/about`, `/contact`, `/work`) to home anchors. Set the custom domain to
`hammadh.dev` in Vercel project settings.

---

© Hammadh Arquil
