import { defineConfig } from 'astro/config'
import node from '@astrojs/node'
import vue from '@astrojs/vue'

const PORT = parseInt(process.env.PORT || 3001)

// https://astro.build/config
export default defineConfig({
  server: {
    port: PORT,
    host: process.env.HOST || 'localhost',
  },
  base: 'astro-base-bug',
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  trailingSlash: 'ignore',
  integrations: [vue()],
  site: process.env.SITE || `http://localhost:${PORT}/astro-base-bug`,
})
