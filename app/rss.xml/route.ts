import { listPosts } from '../../lib/posts'

export const revalidate = 60

function escapeXml(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export async function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const title = 'puttski.com — Blog'
  const description = 'Recent posts from puttski.com'
  const link = `${siteUrl}/blog`

  const all = listPosts()
  const items = all.slice(0, 20) // limit feed size
  const lastBuildDate = (items[0]?.date ? new Date(items[0].date) : new Date()).toUTCString()

  const rssItems = items
    .map((p) => {
      const url = `${siteUrl}/blog/${p.slug}`
      const pubDate = new Date(p.date).toUTCString()
      const categories = (p.tags || [])
        .map((t) => `<category>${escapeXml(t)}</category>`) 
        .join('')
      const desc = p.summary ? `<description><![CDATA[${p.summary}]]></description>` : ''
      return `
        <item>
          <title>${escapeXml(p.title)}</title>
          <link>${url}</link>
          <guid isPermaLink="true">${url}</guid>
          <pubDate>${pubDate}</pubDate>
          ${desc}
          ${categories}
        </item>`
    })
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <rss version="2.0">
    <channel>
      <title>${escapeXml(title)}</title>
      <link>${link}</link>
      <description>${escapeXml(description)}</description>
      <language>en</language>
      <lastBuildDate>${lastBuildDate}</lastBuildDate>
      <generator>puttski.com</generator>
      ${rssItems}
    </channel>
  </rss>`

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 's-maxage=60, stale-while-revalidate',
    },
  })
}

