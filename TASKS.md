# Tasks & Working Notes

Purpose: Keep a living backlog and decisions so future Codex sessions can start fast without rehashing context.

Update freely. Prefer short, actionable items over long prose.

## Now

- [x] Confirm `codex/ONBOARDING.md` reflects the chosen stack.
- [x] Add a top‑level `README.md` (project overview, quickstart, scripts).
- [x] Decide content structure (`content/` for MDX posts/pages) and routing.
 - [x] Add RSS feed at `/rss.xml` and link in metadata.
 - [x] Add compact mobile menu in header (outside-click + Escape + animation).
 - [x] Add MDX syntax highlighting (rehype-pretty-code + Shiki).
 - [x] Add unit tests for Header and posts library.

## Next

- [x] Add `.env.example` with `NEXT_PUBLIC_SITE_URL` and optional analytics ID.
- [x] Add `dev`, `build`, `start`, `lint`, `format`, and `test` scripts in `package.json`.
- [x] Configure Prettier + ESLint (Next.js + TS) and `eslint-plugin-import`.
 - [x] Validate RSS in CI (fetch + shape checks).
 - [ ] Header: toggle aria-label between “Open menu”/“Close menu”.
 - [ ] Expand tests (blog index render; edge cases; accessibility assertions).
 - [ ] About page polish (copy, layout, images).

## Later

- [x] Set up CI (install, lint, test, build) — see `.github/workflows/ci.yml`.
- [ ] Enable required checks on PRs in GitHub settings.
- [ ] Add end‑to‑end or visual tests if applicable.
- [x] Create a `CONTRIBUTING.md` for external collaborators.
 - [ ] Consider code copy button for code blocks.
 - [ ] Optional: line numbers and highlighted lines in MDX fences.

Notes:
- Required checks to enable in branch protection: "CI / Install, Lint, Test, Build" (GitHub displays as `<workflow name> / <job name>`). See CONTRIBUTING for details.

## Decisions (Architecture & Conventions)

Record key choices here to avoid repeating discussions.

- Stack: Next.js 14 + TypeScript + Tailwind CSS + Next build
- Package manager: pnpm (v10)
- Routing: Next.js filesystem routing (`app/` or `pages/`)
- State management: none (local/component state only)
- Data layer: filesystem (Markdown/MDX)
- Styling: Tailwind CSS
- Commits: Conventional Commits (recommended)

## Known Issues / TODOs

- [ ] <issue/bug/cleanup>
- [ ] <tech debt>
- [ ] <performance/SEO task>

## Kickoff Instructions (For Codex)

When starting a new session, do this first:

1) Read: `README.md` (if present) and `codex/ONBOARDING.md`.
2) Repo scan: `rg --files -S --hidden -g '!.git' | head -n 200`.
3) Identify stack and scripts from configs.
4) If unclear, ask for the preferred package manager and run commands.
5) Follow the tasks in this file starting from “Now”.
