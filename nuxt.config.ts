import { defineNuxtConfig } from 'nuxt'
import eslintPlugin from 'vite-plugin-eslint'
import variables from './assets/css/config/variables'

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
  buildModules: ['@pinia/nuxt'],
  components: [
    { path: '~/components', pathPrefix: false }
  ],
  css: [
    '@/assets/css/main.css'
  ],
  postcss: {
    plugins: {
      'postcss-nested': {},
      'postcss-simple-vars': { variables }
    }
  },
  ssr: false,
  typescript: {
    shim: false,
    typeCheck: true
  },
  vite: {
    plugins: [
      eslintPlugin()
    ]
  }
})
