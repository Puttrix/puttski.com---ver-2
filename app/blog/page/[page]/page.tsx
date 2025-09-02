import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'
import { paginatePosts, listPosts, POSTS_PER_PAGE } from '../../../../lib/posts'

type Params = { params: { page: string } }

export const revalidate = 60

export function generateStaticParams() {
  const total = listPosts().length
  const totalPages = Math.max(1, Math.ceil(total / POSTS_PER_PAGE))
  // Generate only pages >= 2 to avoid duplicate of /blog
  return Array.from({ length: Math.max(0, totalPages - 1) }, (_, i) => ({ page: String(i + 2) }))
}

export default function BlogPageNumber({ params }: Params) {
  const n = Number(params.page)
  if (!Number.isFinite(n) || n < 1) return notFound()
  if (n === 1) return redirect('/blog')
  const { items: posts, page, totalPages } = paginatePosts(n)
  if (page !== n) return notFound()

  return (
    <section className="prose max-w-none">
      <h1>Blog</h1>
      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        <ul className="not-prose m-0 grid list-none gap-6 p-0">
          {posts.map((p) => (
            <li key={p.slug} className="rounded border p-4">
              <h2 className="m-0 text-xl">
                <Link href={`/blog/${p.slug}`}>{p.title}</Link>
              </h2>
              <p className="m-0 text-sm opacity-70">{new Date(p.date).toLocaleDateString()}</p>
              {p.summary ? <p className="mt-2 opacity-90">{p.summary}</p> : null}
              {p.tags && p.tags.length ? (
                <p className="m-0 text-sm opacity-70">{p.tags.join(' • ')}</p>
              ) : null}
            </li>
          ))}
        </ul>
      )}
      {totalPages > 1 ? (
        <nav className="not-prose mt-8 flex items-center justify-center gap-2" aria-label="Pagination">
          <Link
            href={page > 1 ? (page - 1 === 1 ? `/blog` : `/blog/page/${page - 1}`) : '#'}
            aria-disabled={page === 1}
            className={`rounded border px-3 py-1 ${page === 1 ? 'pointer-events-none opacity-50' : 'hover:bg-gray-50 dark:hover:bg-gray-900'}`}
          >
            Previous
          </Link>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <Link
              key={n}
              href={n === 1 ? `/blog` : `/blog/page/${n}`}
              aria-current={n === page ? 'page' : undefined}
              className={`rounded px-3 py-1 ${n === page ? 'bg-blue-600 text-white' : 'border hover:bg-gray-50 dark:hover:bg-gray-900'}`}
            >
              {n}
            </Link>
          ))}
          <Link
            href={page < totalPages ? `/blog/page/${page + 1}` : '#'}
            aria-disabled={page === totalPages}
            className={`rounded border px-3 py-1 ${page === totalPages ? 'pointer-events-none opacity-50' : 'hover:bg-gray-50 dark:hover:bg-gray-900'}`}
          >
            Next
          </Link>
        </nav>
      ) : null}
    </section>
  )
}
