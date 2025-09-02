# Story: Case studies list with filters

As a visitor, I want to scan case studies and filter by domain (Analytics, GDPR, A/B Testing, Data Architecture), so that I can find relevant examples.

- Priority: P1
- Estimate: 1 day
- Status: Planned
- Related feature: `product/features/case-studies.md`

## Acceptance Criteria

- Given the Case Studies page Then I see cards with title, client/industry (optional), summary, tags
- Given I click a tag Then the list filters to that tag
- Given deep linking Then /cases?tag=ab-testing preselects the filter

## Tasks

- [ ] Define case study content model and frontmatter (2h)
- [ ] Implement list/grid with tag filter and URL state (3h)
- [ ] Empty state and reset filter (1h)

## Definition of Done

- Filterable list implemented; accessible; responsive; ready for content
