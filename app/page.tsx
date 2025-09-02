import Link from 'next/link'

export default function HomePage() {
  return (
    <section className="max-w-none">
      <div className="py-16">
        <div className="prose max-w-none">
          <h1>Web Analyst & Digital Troublemaker</h1>
          <p>I help teams find signal in the noise—turning data into decisions with Matomo‑first analytics, experimentation, and pragmatic engineering.</p>
          <p className="not-prose mt-6 flex gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
              data-analytics="cta"
              data-cta="contact"
              data-location="hero"
            >
              Contact
            </Link>
          </p>
        </div>
      </div>

      <div className="prose max-w-none">
        <h2>About</h2>
        <p>
          I'm Putte Arvfors, a hands-on web analyst and digital problem solver. I blend analytics, tagging, and experimentation with enough code to get things done without drama. My main weapon of choice is Matomo (Analytics + Tag Manager) — I also support GA4/GTM when the situation calls for it. I'm also an SEO/AEO/GEO pro with a privacy‑first mindset, keeping GDPR and consent at the center of how data is collected and used.
        </p>
        <p className="not-prose mt-4">
          <Link
            href="/about"
            className="inline-flex items-center rounded border px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-900"
            data-analytics="cta"
            data-cta="about"
            data-location="home-about"
          >
            Read more about me →
          </Link>
        </p>

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
