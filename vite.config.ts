import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/beeriodictable/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['beer.svg'],
      manifest: {
        name: 'The Beeriodic Table',
        short_name: 'Beeriodic',
        description: 'An interactive guide to brewing elements',
        theme_color: '#3B82F6',
        icons: [
          {
            src: 'beer.svg',
            sizes: '192x192',
            type: 'image/svg+xml',
          },
          {
            src: 'beer.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          }
        ]
      }
    })
  ],
}) 