import { defineNuxtConfig } from 'nuxt'
import eslintPlugin from 'vite-plugin-eslint'

export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;700;900&display=swap' }
      ]
    }
  },
  css: [
    '@/assets/css/main.css'
  ],
  ssr: false,
  typescript: {
    shim: false
  },
  vite: {
    plugins: [
      eslintPlugin()
    ]
  }
})
