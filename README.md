# puttski.com

Personal website and blog for Putte. Built with Next.js 14, TypeScript, and Tailwind. Includes SEO basics, icons/manifest, product planning, and CI.

## Quickstart

- Requirements: Node 20.x, pnpm 9+ (pnpm 10 also works)
- Setup:
  - `cp .env.example .env` and set `NEXT_PUBLIC_SITE_URL`
  - `pnpm install`
  - `pnpm dev` → http://localhost:3000
- Scripts:
  - `pnpm dev` — Next dev server
  - `pnpm build` — Next production build
  - `pnpm start` — Run built app
  - `pnpm lint` — ESLint (Next core-web-vitals)
  - `pnpm typecheck` — TypeScript no-emit
  - `pnpm format` — Prettier write
  - `pnpm test` — currently a stub (replace with Vitest later)

## Features

- App Router pages for Services, Skills, Certifications, Cases, Stack, Privacy, Blog, Contact, and Legal
- SEO basics: `robots.txt` and `sitemap.xml` powered by `NEXT_PUBLIC_SITE_URL`
- Icons & PWA manifest: `app/icon.svg` and `app/manifest.ts`
- Error UX: `app/not-found.tsx`, `app/error.tsx`, and `app/loading.tsx`
- Blog scaffold: MDX content in `content/posts`, dynamic route `/blog/[slug]`, and index at `/blog`

## Blog — MDX Content

- Location: `content/posts/*.mdx`
- Frontmatter fields: `title` (string), `date` (ISO), `summary?`, `tags?`
- Example:

  ---
  title: Hello, World
  date: 2025-01-10
  summary: Kicking off the blog
  tags:
    - meta
  ---

  # Heading
  Post body in MDX…

- Rendering: `lib/posts.ts` loads frontmatter and compiles MDX with GFM, `rehype-slug`, and autolinked headings
- Sitemap: posts are included in `/sitemap.xml`

## Environment

- `.env.example` documents the required variable(s)
- `NEXT_PUBLIC_SITE_URL` — canonical site URL (e.g., http://localhost:3000)
- Optional: `NEXT_PUBLIC_ANALYTICS_ID` — if you add analytics later

## Planning & Onboarding

- Start here: `codex/ONBOARDING.md`
- Product planning: `product/README.md` (templates + Blog feature)
- Contribution guide: `CONTRIBUTING.md`

## CI

- Workflow: `.github/workflows/ci.yml`
- Runs install → lint → typecheck → test → build (auto-detected)

## Development Notes

- Images: Site uses WebP for the portrait (`/img/H3I0509_2-600x569.webp`) and SVG for OG default
- Styling: Tailwind with Typography plugin; global styles in `app/globals.css`
- JSON‑LD: Website + Person in `app/layout.tsx` via `components/JsonLd`

## Next Up

- Code highlighting for MDX (e.g., Shiki)
- RSS feed at `/rss.xml`
- Basic tests with Vitest
