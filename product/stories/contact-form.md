# Story: Contact form with spam protection

As a prospective client, I want to send a message easily, so that I can request help or a quote.

- Priority: P1
- Estimate: 0.5–1 day
- Status: Planned
- Related feature: `product/features/contact.md`

## Acceptance Criteria

- Contact form fields: name, email, message; success and error states
- Basic anti-spam (honeypot or simple challenge); no CAPTCHA unless necessary
- Messages reach destination (email/service) or are stored safely

## Tasks

- [ ] Decide delivery (email service or serverless endpoint) (1h)
- [ ] Implement form with validation and honeypot (2h)
- [ ] Add success page/toast and error handling (1h)

## Definition of Done

- Form works end-to-end; validated; basic spam prevention in place
