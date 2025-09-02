# Story: RSS subscription

As a power user, I want to subscribe to the blog via RSS, so that I can read new posts in my feed reader.

- Priority: P2
- Estimate: 0.5–1 day
- Status: Planned
- Related feature: `product/features/blog.md`

## Acceptance Criteria

- When I visit `/rss.xml` Then I receive a valid RSS 2.0 feed of recent posts
- Given a feed reader When I add `/rss.xml` Then it parses without errors

## Non‑functional

- Feed generation performant at build/request time

## Dependencies

- Access to posts frontmatter (title, date, summary, slug, url)

## Tasks

- [ ] Generate RSS from frontmatter (1–2h)
- [ ] Validate feed using a validator and add `<link rel="alternate" ...>` in `<head>` (1h)

## Definition of Done

- Feed validates; readers can subscribe; link exposed in layout
