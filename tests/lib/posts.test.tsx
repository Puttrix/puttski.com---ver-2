import { describe, expect, test } from 'vitest'
import { render } from '@testing-library/react'
import React from 'react'

import { getPost, getPostSlugs, listPosts, paginatePosts } from '../../lib/posts'

describe('lib/posts', () => {
  test('getPostSlugs finds mdx posts', () => {
    const slugs = getPostSlugs()
    expect(slugs).toEqual(expect.arrayContaining(['hello-world', 'analytics-foundations']))
  })

  test('listPosts sorts posts by date desc', () => {
    const items = listPosts()
    expect(items[0].slug).toBe('analytics-foundations') // newer date
    expect(items[1].slug).toBe('hello-world')
  })

  test('paginatePosts returns correct slice and metadata', () => {
    const { items, page, perPage, total, totalPages } = paginatePosts(1, 1)
    expect(page).toBe(1)
    expect(perPage).toBe(1)
    expect(total).toBeGreaterThanOrEqual(2)
    expect(totalPages).toBeGreaterThanOrEqual(2)
    expect(items).toHaveLength(1)
  })

  test('getPost compiles MDX with code highlighting', async () => {
    const post = await getPost('hello-world')
    expect(post).not.toBeNull()
    if (!post) return
    const { content } = post
    const { container } = render(<div className="prose">{content}</div>)
    const pre = container.querySelector('pre') as HTMLElement | null
    expect(pre).toBeTruthy()
    // rehype-pretty-code adds shiki theme markers via data-theme or --shiki- CSS vars
    const hasTheme = pre && (pre.getAttribute('data-theme') || pre.getAttribute('style')?.includes('--shiki-'))
    expect(Boolean(hasTheme)).toBe(true)
  })
})
