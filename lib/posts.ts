import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { compileMDX } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'

export type PostFrontmatter = {
  title: string
  date: string
  summary?: string
  tags?: string[]
}

export type PostListItem = PostFrontmatter & {
  slug: string
}

const POSTS_DIR = path.join(process.cwd(), 'content', 'posts')

export const POSTS_PER_PAGE = Number(process.env.BLOG_POSTS_PER_PAGE || 10)

export function getPostSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return []
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''))
}

export function listPosts(): PostListItem[] {
  const slugs = getPostSlugs()
  const items: PostListItem[] = slugs
    .map((slug) => {
      const file = path.join(POSTS_DIR, `${slug}.mdx`)
      const raw = fs.readFileSync(file, 'utf8')
      const { data } = matter(raw)
      const fm = data as Partial<PostFrontmatter>
      if (!fm.title || !fm.date) return null
      return { slug, title: fm.title, date: fm.date, summary: fm.summary, tags: fm.tags }
    })
    .filter(Boolean) as PostListItem[]

  // Newest first
  return items.sort((a, b) => (a.date > b.date ? -1 : 1))
}

export async function getPost(slug: string) {
  const file = path.join(POSTS_DIR, `${slug}.mdx`)
  if (!fs.existsSync(file)) return null
  const source = fs.readFileSync(file, 'utf8')
  const { content, frontmatter } = await compileMDX<PostFrontmatter>({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: 'wrap' }],
          [
            rehypePrettyCode,
            {
              // Use GitHub themes; no background to blend with prose
              theme: { light: 'github-light', dark: 'github-dark' },
              keepBackground: false,
            },
          ],
        ],
      },
    },
  })
  return { slug, content, frontmatter }
}

export function paginatePosts(page: number, perPage: number = POSTS_PER_PAGE) {
  const all = listPosts()
  const total = all.length
  const totalPages = Math.max(1, Math.ceil(total / perPage))
  const p = Math.min(Math.max(1, page), totalPages)
  const start = (p - 1) * perPage
  const items = all.slice(start, start + perPage)
  return { items, page: p, perPage, total, totalPages }
}
