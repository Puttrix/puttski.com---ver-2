import Image from 'next/image'

export default function AboutPage() {
  return (
    <article className="prose max-w-none">
      <header className="grid gap-8 md:grid-cols-[240px,1fr] items-center not-prose">
        <div className="mx-auto md:mx-0">
          <Image
            src="/img/H3I0509_2-600x569.webp"
            alt="Portrait of Putte Arvfors"
            width={240}
            height={240}
            className="rounded-full object-cover shadow"
            priority
          />
        </div>
        <div className="prose max-w-none">
          <h1 className="mt-0">About Putte Arvfors</h1>
          <p className="m-0 text-sm opacity-80">Web Analyst &amp; Digital Troublemaker</p>
        </div>
      </header>

      <section>
        <p>
          I'm Putte Arvfors, a hands-on web analyst and digital problem solver with over a decade of experience turning data chaos into actionable insights. I specialize in privacy-first analytics, experimentation, and building measurement systems that actually drive business decisions.
        </p>
        <p>
          My philosophy is simple: data without action is just expensive noise. I help teams cut through the analytics overwhelm to focus on metrics that matter, implement tracking that respects user privacy, and build experimentation programs that lead to real growth.
        </p>
      </section>

      <section>
        <h2>My Expertise</h2>
        <h3>🎯 Matomo-First Analytics</h3>
        <p>
          While everyone's chasing the latest analytics platform, I've found that Matomo offers the perfect balance of power, privacy, and practicality. I help organizations migrate from Universal Analytics and GA4 to Matomo, implementing clean event architectures that provide better insights while respecting user privacy.
        </p>
        <p>
          My approach focuses on building sustainable measurement frameworks that don't break when platforms change their terms of service or shut down features. I've guided companies through complete analytics overhauls, often reducing their tool sprawl while improving data quality.
        </p>

        <h3>🔒 Privacy-First Approach</h3>
        <p>
          GDPR isn't a checkbox exercise — it's a fundamental shift toward respecting user privacy while still gathering meaningful insights. I help organizations implement consent strategies that actually work, design cookieless tracking solutions, and build analytics systems that perform well even with privacy restrictions.
        </p>
        <p>
          This includes server-side tagging implementations, first-party data strategies, and creative solutions for attribution modeling that don't rely on invasive tracking. Privacy and performance don't have to be mutually exclusive.
        </p>

        <h3>🔬 Experimentation &amp; Optimization</h3>
        <p>
          I'm certified in both Optimizely and VWO, but more importantly, I understand the statistical foundations that make experiments trustworthy. Too many teams run A/B tests that lead to false conclusions — I help build experimentation programs with proper power analysis, guardrail metrics, and statistical rigor.
        </p>
        <p>
          My approach emphasizes hypothesis-driven testing, understanding practical significance beyond statistical significance, and building organizational capabilities for continuous experimentation rather than one-off tests.
        </p>

        <h3>🔍 Technical SEO &amp; Structured Data</h3>
        <p>
          Modern SEO goes beyond keywords — it's about making content discoverable in an AI-powered search landscape. I specialize in Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO), preparing content for how people actually search today.
        </p>
        <p>
          This includes implementing comprehensive Schema.org markup, optimizing for featured snippets and AI overviews, and building technical foundations that help search engines understand and surface your content effectively.
        </p>

        <h3>⚙️ Data Engineering &amp; Automation</h3>
        <p>
          I bridge the gap between analysis and engineering, building data pipelines that scale and automation that reduces manual work. Whether it's connecting BigQuery to visualization tools, automating report generation, or building custom tracking solutions, I focus on solutions that work reliably without constant maintenance.
        </p>
        <p>
          My technical background includes Python for data processing, JavaScript for custom tracking implementations, and Docker for reproducible deployment environments. I believe in building once and running everywhere.
        </p>

        <h3>🤖 AI-Augmented Workflows</h3>
        <p>
          I leverage AI tools like Claude Code, ChatGPT, and GitHub Copilot to accelerate development and analysis. These aren't just trendy additions — they're practical tools that help me solve complex problems faster and more accurately.
        </p>
        <p>
          From automated code review to rapid prototyping of tracking solutions, AI augmentation allows me to focus on strategic thinking while handling implementation details more efficiently. The key is knowing when to use AI and when human judgment is irreplaceable.
        </p>
      </section>

      <section>
        <h2>My Approach</h2>
        <h3>🎯 Start with the Business Question</h3>
        <p>
          Before implementing any tracking or running any experiment, I start with understanding what decisions you're trying to make. Too many analytics implementations collect everything "just in case" — I help you focus on metrics that directly inform business decisions.
        </p>
        <h3>📊 Measure What Matters</h3>
        <p>
          Vanity metrics are seductive but dangerous. I help teams identify leading indicators, understand the difference between correlation and causation, and build dashboards that highlight actionable insights rather than impressive-looking numbers.
        </p>
        <h3>🔄 Iterate and Improve</h3>
        <p>
          Perfect is the enemy of good. I prefer launching a simple, working solution and iterating based on real usage over spending months building the theoretically perfect system. This approach delivers value faster and adapts better to changing requirements.
        </p>
        <h3>🧠 Knowledge Transfer</h3>
        <p>
          I don't just implement solutions — I teach your team how to maintain and extend them. Sustainable analytics requires internal capabilities, not vendor lock-in. I document everything and ensure your team can carry forward the work.
        </p>
      </section>

      <section>
        <h2>Background &amp; Experience</h2>
        <p>
          My journey into analytics started with a simple frustration: why was it so hard to get straight answers from data? I've worked with organizations ranging from startups to enterprises, always focusing on practical solutions over theoretical perfection.
        </p>
        <p>
          I've guided companies through major platform migrations (especially the Universal Analytics sunset), implemented privacy-compliant tracking systems across multiple jurisdictions, and built experimentation programs that have driven millions in revenue impact.
        </p>
        <p>
          What sets me apart is my ability to translate between technical implementation details and business strategy. I can dive deep into JavaScript tracking code in the morning and present strategic recommendations to executives in the afternoon.
        </p>
      </section>

      <section>
        <h2>Current Certifications</h2>
        <ul>
          <li>Google Analytics Certified (renewed August 2025)</li>
          <li>Optimizely Experimentation Certified Strategist (2025-2027)</li>
          <li>Optimizely Web Platform Expert (2024-2026)</li>
          <li>Server-side Tagging with Stape (2025)</li>
        </ul>
      </section>

      <section>
        <h2>Working Together</h2>
        <p>
          I work best with teams that value data-driven decision making but aren't paralyzed by analysis. Whether you need help with a specific technical implementation, want to overhaul your entire measurement strategy, or are looking for ongoing strategic guidance, I adapt my approach to your needs and timeline.
        </p>
        <p>My ideal collaborations involve organizations that:</p>
        <ul>
          <li>Recognize that good analytics requires upfront investment but pays dividends long-term</li>
          <li>Value user privacy and want to do measurement ethically</li>
          <li>Are willing to make decisions based on data, even when it challenges assumptions</li>
          <li>Want to build internal capabilities, not just outsource everything</li>
        </ul>
        <p>
          If this sounds like your organization, let's talk. I'm always interested in challenging projects that push the boundaries of what's possible with privacy-first analytics and experimentation.
        </p>
      </section>
    </article>
  )
}
