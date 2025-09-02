# Story: Tag filters to explore skills

As a visitor, I want to filter skills by tags (e.g., tools, methods), so that I can find relevant expertise fast.

- Priority: P2
- Estimate: 0.5–1 day
- Status: Planned
- Related feature: `product/features/skills.md`

## Acceptance Criteria

- Given tags exist When I select a tag Then the skills list filters accordingly
- Given no results When I select a tag Then I see an empty state
- Given deep linking When I open /skills?tag=gdpr Then the filter is active

## Tasks

- [ ] Define tag taxonomy (tools: GA4, GTM, PostHog; methods: experimentation, consent, data modeling) (1h)
- [ ] Implement client-side filter with URL state (2h)
- [ ] Add empty-state and clear-filter control (1h)

## Definition of Done

- Filter works with URL state; accessible; empty-state covered
