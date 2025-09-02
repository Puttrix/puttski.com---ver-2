import Image from 'next/image'

export function AboutHero() {
  return (
    <section className="grid gap-8 md:grid-cols-[240px,1fr] items-center">
      <div className="mx-auto md:mx-0">
        <Image
          src="/img/H3I0509_2-600x569.webp"
          alt="Putte Arvfors portrait"
          width={240}
          height={240}
          className="rounded-full object-cover shadow"
          priority
        />
      </div>
      <div className="prose max-w-none">
        <h1 className="mt-0">About</h1>
        <p>
          Web Analytics, GDPR, A/B Testing, and Data Architecture. I help teams
          measure what matters, stay privacy‑compliant, and run reliable
          experiments — with data architectures that scale.
        </p>
        <p className="text-sm opacity-80">
          Matomo‑first; GA4/GTM and PostHog where appropriate. Optimizely/VWO
          for experimentation. Privacy by design.
        </p>
      </div>
    </section>
  )
}
