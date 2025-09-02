"use client"

import React from 'react'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

export function Header() {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement | null>(null)
  const toggleRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    function onPointerDown(e: MouseEvent | TouchEvent) {
      const menu = menuRef.current
      const toggle = toggleRef.current
      if (!menu) return
      const target = e.target as Node
      const clickedInsideMenu = menu.contains(target)
      const clickedToggle = toggle?.contains(target)
      if (!clickedInsideMenu && !clickedToggle) setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('mousedown', onPointerDown)
    window.addEventListener('touchstart', onPointerDown)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('mousedown', onPointerDown)
      window.removeEventListener('touchstart', onPointerDown)
    }
  }, [])

  function close() {
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b bg-white/70 dark:bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/30">
      <div className="container mx-auto flex items-center justify-between gap-4 p-4">
        <Link href="/" className="font-bold" onClick={close}>
          puttski.com
        </Link>

        <nav className="hidden md:flex gap-4 text-sm" aria-label="Primary">
          <Link href="/about">About</Link>
          <Link href="/skills">Skills</Link>
          <Link href="/certifications">Certifications</Link>
          <Link href="/cases">Case Studies</Link>
          <Link href="/stack">Stack</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/blog">Blog</Link>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="md:hidden inline-flex items-center rounded border px-3 py-1.5 hover:bg-gray-50 dark:hover:bg-gray-900"
            aria-label="Open menu"
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            ref={toggleRef}
          >
            <span className="sr-only">Toggle menu</span>
            <span className="grid gap-1.5">
              <span
                aria-hidden
                className={
                  'block h-0.5 w-5 bg-current transition-transform duration-200 ' +
                  (open ? 'translate-y-1.5 rotate-45' : '')
                }
              />
              <span
                aria-hidden
                className={
                  'block h-0.5 w-5 bg-current transition-opacity duration-200 ' +
                  (open ? 'opacity-0' : 'opacity-100')
                }
              />
              <span
                aria-hidden
                className={
                  'block h-0.5 w-5 bg-current transition-transform duration-200 ' +
                  (open ? '-translate-y-1.5 -rotate-45' : '')
                }
              />
            </span>
          </button>
          <Link
            href="/contact"
            className="inline-flex items-center rounded bg-blue-600 px-3 py-1.5 text-white hover:bg-blue-700"
            data-analytics="cta"
            data-cta="contact"
            data-location="header"
          >
            Contact
          </Link>
        </div>
      </div>

      <div
        ref={menuRef}
        className={
          `md:hidden border-t bg-white/95 dark:bg-black/60 backdrop-blur transition-all duration-200 ease-out ` +
          (open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none')
        }
        id="mobile-menu"
        aria-hidden={!open}
      >
          <nav className="container mx-auto grid gap-2 p-4 text-sm" aria-label="Mobile">
            <Link href="/about" onClick={close} data-analytics="nav" data-location="mobile-menu">
              About
            </Link>
            <Link href="/skills" onClick={close} data-analytics="nav" data-location="mobile-menu">
              Skills
            </Link>
            <Link href="/certifications" onClick={close} data-analytics="nav" data-location="mobile-menu">
              Certifications
            </Link>
            <Link href="/cases" onClick={close} data-analytics="nav" data-location="mobile-menu">
              Case Studies
            </Link>
            <Link href="/stack" onClick={close} data-analytics="nav" data-location="mobile-menu">
              Stack
            </Link>
            <Link href="/privacy" onClick={close} data-analytics="nav" data-location="mobile-menu">
              Privacy
            </Link>
            <Link href="/blog" onClick={close} data-analytics="nav" data-location="mobile-menu">
              Blog
            </Link>
            <Link
              href="/contact"
              onClick={close}
              className="mt-2 inline-flex items-center rounded bg-blue-600 px-3 py-1.5 text-white hover:bg-blue-700"
              data-analytics="cta"
              data-cta="contact"
              data-location="mobile-menu"
            >
              Contact
            </Link>
          </nav>
      </div>
    </header>
  )
}
