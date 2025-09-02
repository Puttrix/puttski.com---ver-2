import type { Metadata } from 'next'
import './globals.css'
import { JsonLd } from '../components/JsonLd'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Putte Arvfors — Web Analyst & Digital Troublemaker',
    template: '%s · Putte Arvfors',
  },
  manifest: '/manifest.webmanifest',
  alternates: {
    types: {
      'application/rss+xml': '/rss.xml',
    },
  },
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
        <Header />
        <main className="container mx-auto p-4">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
