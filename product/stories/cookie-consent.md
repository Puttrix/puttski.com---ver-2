# Story: Cookie consent (CMP) and privacy policy

As a privacy-conscious visitor, I want transparent consent and a clear policy, so that I can control tracking and understand data use.

- Priority: P1
- Estimate: 1–2 days
- Status: Planned
- Related feature: `product/features/privacy-gdpr.md`

## Acceptance Criteria

- Given first visit Then I see a consent UI compliant with GDPR (reject all as easy as accept all)
- Given preferences Then my choices persist and toggle tracking accordingly
- Given the privacy page Then policy is readable and up to date

## Tasks

- [ ] Select CMP (vendor or custom lightweight) (2h)
- [ ] Integrate consent state -> tracking enable/disable (4h)
- [ ] Add Privacy/Cookie policy pages and link in footer (2h)

## Definition of Done

- Consent works, is documented, and audited for basic compliance
