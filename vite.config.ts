import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { resolve } from "path";
export default defineConfig({
  plugins: [vue(), vueJsx()],
  build: {
    outDir: "./demo/dist",
    minify: false,
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
    lib: {
      entry: "./src/entry.ts",
      name: "YangGuangUI",
      fileName: `yangguang-ui`,
      formats: ["es", "umd", "iife"],
    },
  },
});
