import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from "./config/unocss";

export default defineConfig({
  plugins: [vue(), vueJsx(), Unocss()],
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
    cssCodeSplit: true,
    lib: {
      entry: "./src/entry.ts",
      name: "YangGuangUI",
      fileName: `yangguang-ui`,
      formats: ["es", "umd", "iife"],
    },
  },
});
