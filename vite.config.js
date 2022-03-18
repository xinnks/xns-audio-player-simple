const { defineConfig } = require('vite');
const vue = require('@vitejs/plugin-vue');

export default defineConfig({
  plugins: [vue()],
  build: {
    cssCodeSplit: false,
    lib: {
      entry: "./src/index.js",
      formats: ["es", "cjs"],
      name: "XnsAudioPlayerSimple",
      fileName: format => (format === "es" ? "index.js" : "index.cjs")
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue "
        }
      }
    }
  }
})