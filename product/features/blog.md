# Feature: Blog

- Outcome: Readers can browse, read, and subscribe to posts.
- Success metrics: Pages load < 2s; valid RSS; basic SEO passes.
- Owner: Web
- Status: In progress

## Context

Add a minimal blog to publish articles with images and code snippets. Prioritize performance and basic SEO.

## User Stories

- [x] List posts (index) — `product/stories/blog-list-posts.md`
- [x] Read a post (MDX, images, code) — `product/stories/blog-read-post.md`
- [ ] RSS subscription — `product/stories/blog-rss.md`

## Dependencies

- MDX/Markdown content in `content/posts`
- Next.js routing and rendering

## Notes

- Use `next/image` for images; ensure accessible alt text
- Add default SEO (title/description/OG) on index and post pages
