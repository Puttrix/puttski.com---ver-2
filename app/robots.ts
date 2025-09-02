import type { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
const disallowRobots = process.env.DISALLOW_ROBOTS === '1' || /(^|\.)prep\./.test(new URL(siteUrl).hostname)

export default function robots(): MetadataRoute.Robots {
  return disallowRobots
    ? {
        rules: {
          userAgent: '*',
          disallow: '/',
        },
        sitemap: `${siteUrl}/sitemap.xml`,
        host: siteUrl,
      }
    : {
        rules: {
          userAgent: '*',
          allow: '/',
        },
        sitemap: `${siteUrl}/sitemap.xml`,
        host: siteUrl,
      }
}
