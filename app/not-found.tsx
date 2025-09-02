import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="prose max-w-none py-16 text-center">
      <h1 className="mt-0">Page not found</h1>
      <p className="opacity-80">We couldn’t find what you’re looking for.</p>
      <div className="not-prose mt-6 flex items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Go home
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center rounded border px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-900"
        >
          Contact
        </Link>
      </div>
    </section>
  )
}

