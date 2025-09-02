export default function RootLoading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <span className="inline-flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
        <span
          className="h-5 w-5 animate-spin rounded-full border-2 border-blue-600 border-t-transparent"
          aria-hidden
        />
        <span className="sr-only">Loading…</span>
        <span aria-live="polite" aria-atomic>
          Loading…
        </span>
      </span>
    </div>
  )
}

