import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'
import { JsonLd } from '../components/JsonLd'
import { Footer } from '../components/Footer'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Putte Arvfors — Web Analyst & Digital Troublemaker',
    template: '%s · Putte Arvfors',
  },
  manifest: '/manifest.webmanifest',
  description:
    'Matomo‑first analytics, SEO/AEO/GEO, experimentation, and privacy‑first data practices (GDPR).',
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Putte Arvfors — Web Analyst & Digital Troublemaker',
    description:
      'Matomo‑first analytics, SEO/AEO/GEO, experimentation, and privacy‑first data practices (GDPR).',
    images: [
      {
        url: '/img/og-default.svg',
        width: 1200,
        height: 630,
        alt: 'Putte Arvfors',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Putte Arvfors — Web Analyst & Digital Troublemaker',
    description:
      'Matomo‑first analytics, SEO/AEO/GEO, experimentation, and privacy‑first data practices (GDPR).',
    images: ['/img/og-default.svg'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* JSON-LD: Website */}
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            url: siteUrl,
            name: 'Puttski — Putte Arvfors',
            inLanguage: 'en',
          }}
        />
        {/* JSON-LD: Person */}
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'Person',
            '@id': `${siteUrl}#person`,
            name: 'Putte Arvfors',
            url: siteUrl,
            jobTitle: 'Web Analyst & Digital Troublemaker',
            image: `${siteUrl}/img/H3I0509_2-600x569.webp`,
            email: 'mailto:putte@arvfors.se',
            sameAs: [
              'https://www.linkedin.com/in/putte/',
              'https://github.com/Puttrix',
            ],
            knowsAbout: [
              'Matomo',
              'Matomo Tag Manager',
              'SEO',
              'AEO',
              'GEO',
              'Technical SEO',
              'Structured Data',
              'Consent',
              'Privacy',
              'GDPR',
              'Experimentation',
              'Optimizely',
              'Optimizely ODP',
              'Optimizely CMS',
              'VWO',
              'GA4',
              'GTM',
              'BigQuery',
              'Looker Studio',
              'JavaScript',
              'Python',
              'Docker',
              'GitHub Actions',
              'GitHub',
              'ChatGPT',
            ],
          }}
        />
        <header className="sticky top-0 z-50 border-b bg-white/70 dark:bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/30">
          <div className="container mx-auto flex items-center justify-between gap-4 p-4">
            <Link href="/" className="font-bold">puttski.com</Link>
            <nav className="hidden md:flex gap-4 text-sm">
              <Link href="/services">Services</Link>
              <Link href="/skills">Skills</Link>
              <Link href="/certifications">Certifications</Link>
              <Link href="/cases">Case Studies</Link>
              <Link href="/stack">Stack</Link>
              <Link href="/privacy">Privacy</Link>
              <Link href="/blog">Blog</Link>
            </nav>
            <Link href="/contact" className="inline-flex items-center rounded bg-blue-600 px-3 py-1.5 text-white hover:bg-blue-700">Contact</Link>
          </div>
        </header>
        <main className="container mx-auto p-4">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
