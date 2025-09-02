import Link from 'next/link'

export default function HomePage() {
  return (
    <section className="max-w-none">
      <div className="py-16">
        <div className="prose max-w-none">
          <h1>Putte Arvfors — Web Analyst & Digital Troublemaker</h1>
          <p>
            Matomo‑first analytics, SEO/AEO/GEO, experimentation, and privacy‑first data practices (GDPR).
          </p>
          <p className="not-prose mt-6 flex gap-3">
            <Link href="/services" className="inline-flex items-center rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">View Services</Link>
            <Link href="/contact" className="inline-flex items-center rounded border px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-900">Contact</Link>
          </p>
        </div>
      </div>

      <div className="prose max-w-none">
        <h2>Highlights</h2>
        <ul>
          <li>Privacy‑first analytics and consent design (GDPR)</li>
          <li>Experimentation programs that deliver measurable lift</li>
          <li>Matomo‑first approach; GA4/GTM and PostHog when right</li>
        </ul>
      </div>
    </section>
  )
}
