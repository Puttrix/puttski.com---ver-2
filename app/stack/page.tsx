export default function StackPage() {
  return (
    <section className="prose max-w-none">
      <h1>Analytics Stack</h1>
      <p>Matomo‑first stack with privacy‑by‑design. Complemented by GA4/GTM and PostHog where appropriate.</p>
      <ul>
        <li>Collection: Matomo (preferred), GA4, GTM, PostHog, server‑side endpoints</li>
        <li>Storage/Modeling: BigQuery or alternatives</li>
        <li>Experimentation: Optimizely, VWO</li>
        <li>Consent: CMP (Cookiebot/Consent Manager) or custom lightweight</li>
      </ul>
    </section>
  )
}
