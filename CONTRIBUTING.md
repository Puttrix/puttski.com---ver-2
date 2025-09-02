# Contributing

Thanks for helping improve puttski.com! This guide covers local setup, coding standards, branching, commits, PRs, and CI expectations.

## Local Setup

- Requirements:
  - Node 20.x LTS
  - pnpm v10 (tested with 10.15.1)
- Install:
  - `pnpm install`
- Common scripts:
  - `pnpm dev` — start dev server (http://localhost:3000)
  - `pnpm build` — production build
  - `pnpm start` — run built app
  - `pnpm lint` — ESLint
  - `pnpm format` — Prettier write
  - `pnpm test` — unit tests (Vitest)

## Branching & Commits

- Branches: create feature/fix branches off `main`
  - e.g., `feat/blog-index`, `fix/rss-date-format`
- Commits: prefer Conventional Commits
  - `feat: add blog index with pagination`
  - `fix: correct rss item dates`
  - `chore: update eslint config`

## Code Style

- Language: TypeScript
- Lint: ESLint (Next.js + TS rules)
- Format: Prettier
- Naming: kebab-case files; PascalCase components; camelCase functions

Note: `react/no-unescaped-entities` is disabled to allow natural prose (quotes/apostrophes) in page copy.

Before pushing:
- `pnpm lint` and `pnpm format`
- fix ESLint errors; avoid disabling rules casually

## Testing

- Unit tests: Vitest (`*.test.ts[x]`)
- Add tests for new logic or bugs fixed
- Run locally: `pnpm test`

## Pull Requests

- Keep PRs focused and under ~300 lines where possible
- Link issues/stories and include screenshots for UI changes
- Checklist before requesting review:
  - `pnpm lint` passes
  - `pnpm test` passes
  - `pnpm build` succeeds (if relevant)
  - Acceptance criteria met; docs updated if needed

## Reviews & Merging

- Use PR template; fill summary, testing steps, and risk
- At least one approval required (if enabled)
- Squash and merge by default; keep commit message meaningful

## Required CI Checks

Enable branch protection on `main` with required status checks:

- "CI / Install, Lint, Test, Build" must pass before merging
  - Workflow: `.github/workflows/ci.yml` (name: CI)
  - Job name: `Install, Lint, Test, Build`
  - Optionally require branches to be up to date before merging

## Project Tracking

- Use GitHub Projects board (see `product/GITHUB_PROJECTS.md`)
- Label issues with Type (`feature`, `story`, `task`, `bug`, `chore`) and Priority (`p1`–`p3`)

## Environment

- Use `.env.example` as a reference; do not commit secrets
- Typical vars:
  - `NEXT_PUBLIC_SITE_URL` (e.g., http://localhost:3000)
  - `NEXT_PUBLIC_ANALYTICS_ID` (optional)

## Reporting Bugs / Requesting Features

- Use issue templates in `.github/ISSUE_TEMPLATE/`
- Provide clear repro steps and acceptance criteria

## Code of Conduct

- Be respectful, constructive, and kind; assume positive intent
