import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  base: '/',
  plugins: [
    viteStaticCopy({
      targets: [
        { src: 'signup.html', dest: '.'},
        { src : 'booking.html', dest: '.'},
        {src : 'success.html', dest:'.'}
      ]
    })
  ]
})
