import Link from 'next/link'
import { listPosts } from '../../lib/posts'

export const revalidate = 60

export default function BlogIndexPage() {
  const posts = listPosts()
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
    </section>
  )
}
