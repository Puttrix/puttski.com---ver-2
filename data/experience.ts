export type Experience = {
  title: string
  company?: string
  start: string
  end?: string
  summary?: string
  tags?: string[]
}

// TODO: Replace with your actual roles (can be pulled from LinkedIn manually)
// NOTE: These are drafted placeholders based on your site focus
// (analytics, experimentation, GDPR, data architecture). Please edit
// titles/companies/dates to match your history before publishing.
export const EXPERIENCE: Experience[] = [
  {
    title: 'Digital Troublemaker / Analyst & SEO‑specialist',
    company: 'Authority AB',
    start: '2020-03',
    end: 'Present',
    summary:
      'Full‑time. Web analytics (Matomo‑first) and SEO. Stockholm, Sweden.',
    tags: ['Matomo', 'Web Analytics', 'SEO'],
  },
  {
    title: 'Digital Troublemaker / Analyst & SEO‑specialist',
    company: 'Creuna',
    start: '2019-08',
    end: '2020-03',
    summary: 'Web analytics across client projects.',
    tags: ['Web Analytics'],
  },
  {
    title: 'Digital Troublemaker / Analyst & SEO‑specialist',
    company: 'Authority AB',
    start: '2019-01',
    end: '2019-08',
    summary:
      'Web analytics (Matomo) and SEO. Stockholm, Sweden.',
    tags: ['Matomo', 'Web Analytics', 'SEO'],
  },
  {
    title: 'Digital Troublemaker / Analyst / Strategist & SEO‑specialist',
    company: 'Little Shop of Digital',
    start: '2016-11',
    end: '2018-12',
    summary:
      'Planera, implementera och optimera digitala kampanjer. AdWords, Display, YouTube, konverteringsoptimering, webbanalys och digital support.',
    tags: ['Web Analytics', 'SEM', 'CRO'],
  },
  {
    title: 'Digital Troublemaker (Freelance)',
    company: 'Fracture inc.',
    start: '2009-08',
    end: '2016-07',
    summary:
      'Hobby/side projects. “Vad som än kastas till mig …” Stockholm, Sweden.',
    tags: ['Web', 'Analytics'],
  },
  {
    title: 'Digital Delinquent (Intern)',
    company: 'Letsgrowit AB',
    start: '2015-07',
    end: '2015-11',
    summary:
      'Planering, ledning och optimering av digitala kampanjer; projektledning av webblösningar och appar; ansvarig för MA/Inbound.',
    tags: ['Web Analytics', 'Project Management', 'Marketing Automation'],
  },
]
