# puttski.com

Personal website and blog for Putte. Built with Next.js 14, TypeScript, and Tailwind. Includes SEO basics, icons/manifest, product planning, and CI.

## Quickstart

- Requirements: Node 20.x, pnpm 10.x (tested with 10.15.1)
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
  - `pnpm test` — Vitest (unit tests)

## Features

- App Router pages for About, Skills, Certifications, Cases, Stack, Privacy, Blog, Contact, and Legal
- SEO basics: `robots.txt` and `sitemap.xml` powered by `NEXT_PUBLIC_SITE_URL`
- Icons & PWA manifest: `app/icon.svg` and `app/manifest.ts`
- Error UX: `app/not-found.tsx`, `app/error.tsx`, and `app/loading.tsx`
- Blog scaffold: MDX content in `content/posts`, dynamic route `/blog/[slug]`, and index at `/blog`
- MDX code highlighting: Shiki via `rehype-pretty-code` with GitHub themes
- RSS feed at `/rss.xml` (linked in metadata)
- Responsive header with compact mobile menu
  - Animated hamburger → X transition

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

- Rendering: `lib/posts.ts` loads frontmatter and compiles MDX with GFM, `rehype-slug`, autolinked headings, and Shiki highlighting via `rehype-pretty-code`
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
- Recommended: protect `main` and require status check "CI / Install, Lint, Test, Build" before merging
 - Also validates `/rss.xml` by starting the app and fetching the feed

## Development Notes

- Images: Site uses WebP for the portrait (`/img/H3I0509_2-600x569.webp`) and SVG for OG default
- Styling: Tailwind with Typography plugin; global styles in `app/globals.css`
- JSON‑LD: Website + Person in `app/layout.tsx` via `components/JsonLd`
- Tests: Vitest + Testing Library; see `tests/components/Header.test.tsx` and `tests/lib/posts.test.tsx`
- ESLint: `react/no-unescaped-entities` disabled to allow natural prose in JSX

## Prep Environment (Image from GHCR + Existing Cloudflare Tunnel)

- Domain: `https://prep.puttski.com`
- Robots: blocked by default via `DISALLOW_ROBOTS=1`

1) CI builds and publishes the image to GHCR
   - Workflow: `.github/workflows/publish-prep.yml` (triggers on push to `main`)
   - Image: `ghcr.io/<owner>/puttski-web:prep-latest` and `:prep-<sha>`
   - Optional auto-redeploy: create a Portainer Stack webhook and add its URL as
     a GitHub secret named `PORTAINER_WEBHOOK_PREP`. The workflow will call it
     after pushing the image so the stack pulls the latest and redeploys.

2) Portainer — Add GHCR registry credentials (once)
   - Settings → Registries → Add registry → GitHub Container Registry
   - Username: your GitHub username
   - Password/Token: a PAT with `read:packages`

3) Portainer — Deploy the stack (app only)
   - For Repository mode (public repo):
     - Repository URL: this repo
     - Reference: your branch (e.g., `main`)
     - Compose path: `docker-compose.prep.yml`
     - Portainer uses an env file named `stack.env` from the repo root.
       Ensure `stack.env` exists with the required variables (this repo includes one):
       - `NODE_ENV=production`
       - `NEXT_PUBLIC_SITE_URL=https://prep.puttski.com`
       - `SITE_URL=https://prep.puttski.com`
       - `DISALLOW_ROBOTS=1`
   - For Web editor mode: paste `docker-compose.prep.yml`, then set the same variables in the UI (Portainer will generate `stack.env`).
   - Deploy the stack (publishes host port 3000)

4) Configure your existing Cloudflare Tunnel
   - Route `prep.puttski.com` → `http://localhost:3000` (or the server’s LAN IP:3000)
   - Alternatively, if your tunnel runs in Docker on a shared network, you can
     remove the port publish and attach both services to the same external network.

5) Verify
   - Open `https://prep.puttski.com` → site loads
   - `https://prep.puttski.com/robots.txt` shows `Disallow: /`
   - RSS: `https://prep.puttski.com/rss.xml`

## Next Up

- Toggle Header button aria-label between “Open menu”/“Close menu” when toggled
- Expand tests (blog index rendering, edge cases)
- About page polish (copy, layout, images)
