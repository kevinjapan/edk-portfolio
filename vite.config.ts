import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// npm install --save-dev @types/node required to find this module
import { fileURLToPath, URL } from 'url'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // to do : document/capture this : we configure build to meet older IOS version 12.
  //         IOS v12 was simply displaying a blank screen.
  //         by default, vite builds for ES Modules (so es2022)
  //         https://vitejs.dev/guide/build.html#browser-compatibility
  //         https://vitejs.dev/config/build-options.html#build-target
  build: {
    target: "es2015"
  },
})
