# Codex Onboarding

Purpose: Give Codex and contributors a fast, reliable starting point for this repo.

Use this file as the canonical “read me first” for future sessions. Update it anytime the project’s setup or conventions change.

## Start Here (For Codex)

1) Read: `README.md` (if present) and this file.
2) Repo scan: list files and key configs.
   - Run: `rg --files -S --hidden -g '!.git' | head -n 200`
   - If `rg` unavailable, use: `find . -maxdepth 3 -type f | head -n 200`
3) Identify stack:
   - Look for `package.json`, `pnpm-lock.yaml`, `yarn.lock`, `requirements.txt`, `pyproject.toml`, `Gemfile`, `go.mod`, `Cargo.toml`, `Dockerfile`, `docker-compose.yml`, `Makefile`, `vite.config.*`, `next.config.*`, `astro.config.*`, `remix.config.*`, `nuxt.config.*`, `netlify.toml`, `vercel.json`.
4) Load environment:
   - Check `.env*` and document required variables (never print secrets).
5) Decide entry points:
   - Web app: look for `src/` or `app/` and framework configs.
   - Static site: look for site generators (`astro`, `eleventy`, `hugo`, etc.).
6) Run the project (see Quickstart). If missing, add a `dev` script.

## Project Overview

Baseline details for fast onboarding. Update as the project evolves.

- Name: puttski.com
- One‑liner: Personal website and blog for Putte (puttski.com)
- Primary stack: Next.js 14 + TypeScript + Tailwind CSS
- Package manager: pnpm (v9 preferred)
- Hosting/Infra: Vercel (production + previews)
- Data sources: Markdown/MDX content and static assets
- Monorepo?: no

## Repo Map

Document the important paths. Expand as needed.

- `/` — root, configs
- `codex/` — this onboarding and automation artifacts
- `src/` — application code (if applicable)
- `public/` — static assets
- `scripts/` — maintenance scripts
- `infra/` — IaC, deploy configs

## Quickstart

1) Prereqs
   - Node: 20.x LTS (use `nvm use` if `.nvmrc` exists)
   - Package manager: pnpm v9
   - Others: none

2) Install
   - `pnpm install`

3) Develop
   - `pnpm dev` — start Next.js dev server
   - Default port: 3000

4) Build
   - `pnpm build` — production build (Next.js)

5) Preview (production build)
   - `pnpm start` — run the built app

## Environment & Secrets

- Template: create `.env.example` with required vars.
- Never commit real secrets. Use `.gitignore` for `.env`.
- Required (client‑exposed):
  - `NEXT_PUBLIC_SITE_URL` — canonical site URL (e.g., http://localhost:3000)
- Optional (client‑exposed):
  - `NEXT_PUBLIC_ANALYTICS_ID` — e.g., Google Analytics or Plausible site ID
- Server‑side secrets: none expected for a static personal site

## Scripts & Tooling

Canonical scripts (in `package.json`).

- `dev`: Next dev server (`next dev`)
- `build`: Production build (`next build`)
- `start`: Run built app (`next start`)
- `lint`: ESLint (`eslint .`)
- `format`: Prettier (`prettier -w .`)
- `test`: Unit tests (`vitest`)

## Code Style

- Language: TypeScript
- Style: Prettier
- Lint: ESLint (Next.js + TypeScript rules)
- Import/order: `eslint-plugin-import` (grouped: builtin, external, internal)
- Naming: kebab-case files, PascalCase React components, camelCase functions

## Testing

- Framework: Vitest (unit) + optional Playwright (e2e)
- Locations: co‑located `*.test.ts[x]` or `tests/`
- Commands: `pnpm test`, `pnpm test:watch`

## Git Workflow

- Branching: `main` protected; feature branches from `main`
- Commits: small, descriptive; optionally Conventional Commits
- PRs: include scope, screenshots for UI, test notes

## CI/CD

- CI provider: GitHub Actions
- Checks: install, lint, typecheck, test, build
- Deploy: Vercel (preview on PRs, production on `main`)

## Content & Assets

- Content: `content/` (Markdown/MDX) — pages/posts, images in `public/`
- Media: compress images; keep <2MB where possible
- SEO: sitemap, robots, default meta in layout or config

## Operations

- Logging/Monitoring: none (static site); consider Vercel analytics
- Error reporting: none
- Backups/Migrations: Git history; Vercel keeps deploy history

## Common Tasks for Codex

- “Add a new page/component”: place under `src/...`, export default, update routes.
- “Wire an API call”: create `lib/api.ts` (or similar), handle errors, type responses.
- “Create content type”: define schema, add example, update renderers.
- “Debug build error”: run build, read stack, open referenced files, propose patch.

## Maintenance

- Keep this doc updated when:
  - Stack changes (framework, tooling, scripts)
  - Env vars change
  - Repo structure changes
  - New workflows are introduced
