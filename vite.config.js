import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: "web-component-amazing-loading",
      fileName: (format) => `amazing-loading.${format}.js`
    },
  },
});
