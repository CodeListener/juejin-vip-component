import { defineConfig } from "vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
import unocss from "../config/unocss";
export default defineConfig({
  plugins: [unocss(), vueJsx()],
});
