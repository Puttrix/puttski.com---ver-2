# Story: Read a post (MDX, images, code)

As a reader, I want to read a blog post with images and code formatting, so that the content is clear and readable.

- Priority: P1
- Estimate: 1–2 days
- Status: Planned
- Related feature: `product/features/blog.md`

## Acceptance Criteria

- Given a post slug When I visit `/blog/<slug>` Then the MDX content renders, including headings, lists, links
- Given images in the post When I view the page Then images lazy‑load and have alt text
- Given code fences in MDX When I view the page Then syntax highlighting is applied

## Non‑functional

- Layout responsive on mobile/desktop; content width readable
- Lighthouse score 90+ for accessibility

## Dependencies

- MDX rendering pipeline configured
- `next/image` for images; syntax highlighting library (e.g., Shiki/Rehype)

## Tasks

- [ ] Post page route with dynamic slug (2h)
- [ ] MDX rendering with rehype/remark plugins for code (3h)
- [ ] Image component styles + captions (2h)
- [ ] Prev/Next links and canonical URLs (1h)
- [ ] Accessibility pass (headings, landmarks, contrast) (1h)

## Definition of Done

- Post renders correctly with images and code; a11y and SEO basics in place
