import { listPosts, POSTS_PER_PAGE } from '../../lib/posts'

export default function Head() {
  const total = listPosts().length
  const totalPages = Math.max(1, Math.ceil(total / POSTS_PER_PAGE))
  return (
    <>
      <link rel="canonical" href="/blog" />
      {totalPages > 1 ? <link rel="next" href="/blog/page/2" /> : null}
    </>
  )
}

