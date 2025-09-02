# Story: List posts with pagination

As a reader, I want to see a list of blog posts, so that I can browse recent content.

- Priority: P1
- Estimate: 1–2 days
- Status: In progress (index + pagination shipped)
- Related feature: `product/features/blog.md`

## Acceptance Criteria

- Given posts exist When I visit `/blog` Then I see posts sorted newest first
- Given >10 posts When I visit `/blog` Then I see pagination controls
- Given 0 posts When I visit `/blog` Then I see an empty state message

## Non‑functional

- Page renders in < 2s on a typical connection
- Accessible landmarks, headings; keyboard navigable pagination

## Dependencies

- Content present in `content/posts` with frontmatter (title, date, summary, tags)

## Tasks

- [x] Create `content/posts` with 2 MDX example posts (2h)
- [x] Add blog index route (`/blog`) with pagination (3h)
- [x] Post card component: title, date, summary, tags (2h)
- [ ] Basic SEO for index page (title, description, OG tags) (1h)
- [ ] Tests: render index with 0/5/15 posts (2h)

## Definition of Done

- Acceptance criteria met; page accessible; tests pass; basic SEO present
