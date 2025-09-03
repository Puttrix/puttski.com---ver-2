import type { MetadataRoute } from 'next'

// Ensure this route evaluates at request time so it sees runtime env vars
export const dynamic = 'force-dynamic'
export const revalidate = 0

function resolveSiteUrl() {
  const explicit =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null)
  return explicit || 'http://localhost:3000'
}

const siteUrl = resolveSiteUrl()
const url = new URL(siteUrl)
const host = url.hostname
const disallowRobots = process.env.DISALLOW_ROBOTS === '1' || /(^|\.)prep\./.test(host)

export default function robots(): MetadataRoute.Robots {
  return disallowRobots
    ? {
        rules: { userAgent: '*', disallow: '/' },
        sitemap: `${siteUrl}/sitemap.xml`,
        host,
      }
    : {
        rules: { userAgent: '*', allow: '/' },
        sitemap: `${siteUrl}/sitemap.xml`,
        host,
      }
}
