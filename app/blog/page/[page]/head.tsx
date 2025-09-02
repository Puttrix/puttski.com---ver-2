import { listPosts, POSTS_PER_PAGE } from '../../../../lib/posts'

type Params = { params: { page: string } }

export default function Head({ params }: Params) {
  const n = Number(params.page)
  if (!Number.isFinite(n) || n < 1) return null
  const total = listPosts().length
  const totalPages = Math.max(1, Math.ceil(total / POSTS_PER_PAGE))
  if (n > totalPages) return null
  const canonical = n === 1 ? '/blog' : `/blog/page/${n}`
  const prev = n > 1 ? (n - 1 === 1 ? '/blog' : `/blog/page/${n - 1}`) : undefined
  const next = n < totalPages ? `/blog/page/${n + 1}` : undefined
  return (
    <>
      <link rel="canonical" href={canonical} />
      {prev ? <link rel="prev" href={prev} /> : null}
      {next ? <link rel="next" href={next} /> : null}
    </>
  )
}

