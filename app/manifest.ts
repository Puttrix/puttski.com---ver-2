import type { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'puttski.com',
    short_name: 'puttski',
    description:
      'Putte Arvfors — Matomo‑first analytics, SEO/AEO/GEO, experimentation, and privacy‑first data practices (GDPR).',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    id: siteUrl,
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
    ],
  }
}

