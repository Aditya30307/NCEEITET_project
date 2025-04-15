import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  base: '/',
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'signup.html', // or adjust the path if it's in a subfolder like 'src/second.html'
          dest: '.' // puts it at the root of dist
        }
      ]
    })
  ]
})
