import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'

export const metadata: Metadata = {
  title: {
    default: 'Putte Arvfors — Web Analyst & Digital Troublemaker',
    template: '%s · Putte Arvfors',
  },
  description:
    'Matomo‑first analytics, SEO/AEO/GEO, experimentation, and privacy‑first data practices (GDPR).',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="sticky top-0 z-50 border-b bg-white/70 dark:bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/30">
          <div className="container mx-auto flex items-center justify-between gap-4 p-4">
            <Link href="/" className="font-bold">puttski.com</Link>
            <nav className="hidden md:flex gap-4 text-sm">
              <Link href="/services">Services</Link>
              <Link href="/skills">Skills</Link>
              <Link href="/certifications">Certifications</Link>
              <Link href="/cases">Case Studies</Link>
              <Link href="/stack">Stack</Link>
              <Link href="/privacy">Privacy</Link>
              <Link href="/blog">Blog</Link>
            </nav>
            <Link href="/contact" className="inline-flex items-center rounded bg-blue-600 px-3 py-1.5 text-white hover:bg-blue-700">Contact</Link>
          </div>
        </header>
        <main className="container mx-auto p-4">{children}</main>
        <footer className="text-center text-sm text-gray-500 p-6">© {new Date().getFullYear()} puttski</footer>
      </body>
    </html>
  )
}
