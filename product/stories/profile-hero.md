# Story: Hero with value proposition & primary CTA

As a first-time visitor, I want to quickly understand Putte’s expertise and how to engage, so that I can decide to contact or learn more.

- Priority: P1
- Estimate: 0.5–1 day
- Status: Implemented
- Related feature: `product/features/profile.md`

## Acceptance Criteria

- Given I open the home page Then I see a clear headline stating expertise (Web Analytics, GDPR, A/B Testing, Data Architecture)
- Given I scan the hero Then I see a primary CTA (Contact/Book a call) and a secondary CTA (Services)
- Given mobile viewport Then layout is readable and CTA is visible without excessive scroll

## Non‑functional

- LCP < 2.5s; accessible contrast; keyboard focusable CTAs

## Tasks

- [x] Write hero copy (headline, subhead, CTAs) (1h)
- [x] Implement responsive hero section with CTAs (2h)
- [x] Add tracking for CTA clicks (data attributes for future analytics) (1h)
- [x] Basic a11y check and Lighthouse pass (manual quick pass) (1h)

## Definition of Done

- Hero conveys value in <5 seconds; CTAs work and are accessible
