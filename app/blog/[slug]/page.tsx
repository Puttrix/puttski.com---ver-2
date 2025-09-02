import { notFound } from 'next/navigation'
import { getPost, getPostSlugs } from '../../../lib/posts'

type Params = { params: { slug: string } }

export const revalidate = 60

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Params) {
  const post = await getPost(params.slug)
  if (!post) return {}
  const title = post.frontmatter.title
  const description = post.frontmatter.summary
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      url: `/blog/${params.slug}`,
      images: [{ url: '/img/og-default.svg' }],
    },
  }
}

export default async function BlogPostPage({ params }: Params) {
  const post = await getPost(params.slug)
  if (!post) return notFound()
  const { content, frontmatter } = post
  return (
    <article className="prose max-w-none">
      <h1 className="mt-0">{frontmatter.title}</h1>
      <p className="m-0 text-sm opacity-70">
        {new Date(frontmatter.date).toLocaleDateString()}
        {frontmatter.tags?.length ? ` • ${frontmatter.tags.join(' • ')}` : ''}
      </p>
      <div className="mt-6">{content}</div>
    </article>
  )
}

