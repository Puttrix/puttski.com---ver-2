# puttski.com

Personal website and blog for Putte. This repo includes a Next.js 14 + TypeScript + Tailwind starter, planning docs, and CI.

## Quickstart

- Requirements: Node 20.x, pnpm 9
- Install: `pnpm install`
- Scripts:
  - `pnpm dev` — Next dev server
  - `pnpm build` — Next production build
  - `pnpm start` — Run built app
  - `pnpm lint` — ESLint (Next core-web-vitals)
  - `pnpm test` — prints "ok" (replace with Vitest/Jest later)
  - `pnpm typecheck` — TypeScript no-emit
  - `pnpm format` — Prettier write

## Planning & Onboarding

- Start here: `codex/ONBOARDING.md`
- Product planning: `product/README.md` (templates + example Blog feature)
- Contribution guide: `CONTRIBUTING.md`

## CI

- Workflow: `.github/workflows/ci.yml`
- Runs pnpm install, then lint/test/typecheck/build if scripts exist

## Next Steps

- Start the app: `pnpm dev` and open http://localhost:3000
- Add pages/components under `app/` and `components/`
- Optionally add tests (Vitest/Testing Library) and update CI
- Create `.env.example` with required vars (see onboarding)
