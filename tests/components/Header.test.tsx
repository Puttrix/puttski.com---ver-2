import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

// Mock next/link to a simple anchor for tests
vi.mock('next/link', () => ({
  default: ({ href, children, ...props }: any) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}))

import { Header } from '../../components/Header'

describe('Header mobile menu', () => {
  test('menu is hidden initially and toggles open/close', async () => {
    render(<Header />)
    const button = screen.getByRole('button', { name: /open menu/i })
    const menu = screen.getByRole('navigation', { name: /mobile/i, hidden: true }).parentElement as HTMLElement

    // initial state
    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(menu).toHaveAttribute('aria-hidden', 'true')

    // open
    await userEvent.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')
    expect(menu).toHaveAttribute('aria-hidden', 'false')

    // close via Escape
    await userEvent.keyboard('{Escape}')
    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(menu).toHaveAttribute('aria-hidden', 'true')
  })

  test('closes when clicking outside', async () => {
    render(<Header />)
    const button = screen.getByRole('button', { name: /open menu/i })
    const menu = screen.getByRole('navigation', { name: /mobile/i, hidden: true }).parentElement as HTMLElement
    await userEvent.click(button)
    expect(menu).toHaveAttribute('aria-hidden', 'false')

    await userEvent.click(document.body)
    expect(menu).toHaveAttribute('aria-hidden', 'true')
  })

  test('closes when clicking a link', async () => {
    render(<Header />)
    const button = screen.getByRole('button', { name: /open menu/i })
    await userEvent.click(button)
    const mobileNav = screen.getByRole('navigation', { name: /mobile/i })
    const aboutLink = within(mobileNav).getByRole('link', { name: /about/i })
    await userEvent.click(aboutLink)
    const menu = screen.getByRole('navigation', { name: /mobile/i, hidden: true }).parentElement as HTMLElement
    expect(menu).toHaveAttribute('aria-hidden', 'true')
  })
})
