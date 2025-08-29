import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// Detect if we're building for production
const isProduction = process.env.NODE_ENV === "production";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["vue", "vue-router", "vue-i18n"],
          utils: ["@vueuse/core", "pinia"],
        },
      },
    },
  },
  base: isProduction ? "/portfolio/" : "/", // 👈 base only for build
});
