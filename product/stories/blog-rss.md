# Story: RSS subscription

As a power user, I want to subscribe to the blog via RSS, so that I can read new posts in my feed reader.

- Priority: P2
- Estimate: 0.5–1 day
- Status: Done
- Related feature: `product/features/blog.md`

## Acceptance Criteria

- When I visit `/rss.xml` Then I receive a valid RSS 2.0 feed of recent posts
- Given a feed reader When I add `/rss.xml` Then it parses without errors

## Non‑functional

- Feed generation performant at build/request time

## Dependencies

- Access to posts frontmatter (title, date, summary, slug, url)

## Tasks

- [x] Generate RSS from frontmatter (1–2h)
- [x] Expose `<link rel="alternate" type="application/rss+xml">` globally
- [x] Validate feed via CI by fetching `/rss.xml` and checking XML shape

## Definition of Done

- Feed validates; readers can subscribe; link exposed in layout

## Implementation Notes

- Route added at `app/rss.xml/route.ts` with 20 latest posts from `lib/posts.ts`.
- Global metadata exposes RSS via `app/layout.tsx` `metadata.alternates.types`.
