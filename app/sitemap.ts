import type { MetadataRoute } from 'next'
import { listPosts, POSTS_PER_PAGE } from '../lib/posts'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: string[] = [
    '/',
    '/about',
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
  const allPosts = listPosts()
  const posts = allPosts.map((p) => ({
    url: `${siteUrl}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))
  // Include paginated blog index pages (2..N)
  const totalPages = Math.max(1, Math.ceil(allPosts.length / POSTS_PER_PAGE))
  const paginated = Array.from({ length: Math.max(0, totalPages - 1) }, (_, i) => i + 2).map((n) => ({
    url: `${siteUrl}/blog/page/${n}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))
  return [...base, ...posts, ...paginated]
}
