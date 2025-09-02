import { defineConfig } from 'vitest/config'

export default defineConfig({
  // Ensure TSX compiles with the automatic JSX runtime for tests
  esbuild: {
    jsx: 'automatic',
    jsxImportSource: 'react',
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    globals: true,
    css: false,
  },
})
