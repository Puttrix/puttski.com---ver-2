import Link from 'next/link'

export function Footer() {
  return (
    <footer className="mt-12 border-t py-8 text-sm text-gray-600 dark:text-gray-400">
      <div className="container mx-auto flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} puttski</p>
        <nav className="flex flex-wrap gap-4" aria-label="Footer">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/legal/privacy">Privacy</Link>
          <Link href="/legal/cookies">Cookies</Link>
          <Link href="/legal/imprint">Imprint</Link>
        </nav>
      </div>
    </footer>
  )
}
