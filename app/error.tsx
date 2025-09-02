"use client"

import Link from 'next/link'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Optionally log error to an error reporting service
    // console.error(error)
  }, [error])

  return (
    <section className="prose max-w-none py-16 text-center">
      <h1 className="mt-0">Something went wrong</h1>
      <p className="opacity-80">An unexpected error occurred. Please try again.</p>
      {error?.digest ? (
        <p className="mx-auto max-w-prose text-xs opacity-60">Error id: {error.digest}</p>
      ) : null}
      <div className="not-prose mt-6 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => reset()}
          className="inline-flex items-center rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Try again
        </button>
        <Link
          href="/"
          className="inline-flex items-center rounded border px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-900"
        >
          Go home
        </Link>
      </div>
    </section>
  )
}

