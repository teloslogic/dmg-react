/// <reference types="vitest" />
import {configDefaults, defineConfig} from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    exclude: [...configDefaults.exclude, '**/.next/**', '**/node_modules/**', '**/coverage/**'],
    reporters: 'verbose'
  }
})
