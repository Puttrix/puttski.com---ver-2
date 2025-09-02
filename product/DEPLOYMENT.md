# Deployment — Vercel

Checklist to deploy and keep environments healthy.

## Prerequisites

- Vercel account connected to GitHub
- Repo pushed (main branch)
- Node 20 and pnpm 9 (auto on Vercel, but set in Project → Settings if needed)

## One-time Setup

1) Import repo in Vercel
   - Framework preset: Next.js
   - Root directory: `/`
   - Build command: `pnpm build`
   - Install command: `pnpm install`
   - Output: (auto for Next.js)
2) Env vars
   - `NEXT_PUBLIC_SITE_URL` = `https://<your-domain>` (matches vercel.json default)
3) Domains
   - Add custom domain(s) and assign to Production
4) Branch/Preview behavior
   - Previews for all PRs; Production deploys on `main`
5) Analytics / Logs (optional)
   - Enable Vercel Analytics if desired

## Release Flow

- Create PR → CI runs (lint/typecheck/test/build)
- Merge to `main` → Vercel deploys Production
- Verify:
  - Homepage renders, nav links work
  - SEO tags present (title/OG/Twitter)
  - JSON‑LD validates (Rich Results Test)
  - Legal pages linked in footer

## Rollback

- In Vercel → Deployments → Promote a previous successful deployment

## Post‑deploy

- Run `./scripts/setup-labels.sh` (once) and create a Project board
- Open issues from `product/stories/` (see `scripts/create-issues-from-stories.sh`)
- Start filling content for Services, About, Legal pages
