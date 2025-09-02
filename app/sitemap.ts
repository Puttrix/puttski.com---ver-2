import type { MetadataRoute } from 'next'
import { listPosts } from '../lib/posts'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: string[] = [
    '/',
    '/services',
    '/skills',
    '/certifications',
    '/cases',
    '/stack',
    '/privacy',
    '/blog',
    '/contact',
    '/legal/privacy',
    '/legal/cookies',
    '/legal/imprint',
  ]

  const now = new Date()
  const base = routes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: path === '/' ? 1 : 0.7,
  }))
  const posts = listPosts().map((p) => ({
    url: `${siteUrl}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))
  return [...base, ...posts]
}
