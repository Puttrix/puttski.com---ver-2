import type { MetadataRoute } from 'next'

function resolveSiteUrl() {
  const explicit =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null)
  return explicit || 'http://localhost:3000'
}

const siteUrl = resolveSiteUrl()
const host = new URL(siteUrl).hostname
const disallowRobots = process.env.DISALLOW_ROBOTS === '1' || /(^|\.)prep\./.test(host)

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
