import { fileURLToPath, URL } from "node:url";
import { copyFile, mkdir } from "fs/promises";
import { join } from "path";

import { defineConfig } from "vite";

import vue from "@vitejs/plugin-vue";
import VueDevTools from "vite-plugin-vue-devtools";

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: { exclude: ["pyodide"] },
  plugins: [
    {
      name: "vite-plugin-pyodide",
      generateBundle: async () => {
        const assetsDir = "dist/assets";
        await mkdir(assetsDir, { recursive: true });
        const files = [
          "pyodide-lock.json",
          "pyodide.asm.js",
          "pyodide.asm.wasm",
          "python_stdlib.zip",
        ];
        for (const file of files) {
          await copyFile(
            join("node_modules/pyodide", file),
            join(assetsDir, file)
          );
        }
      },
    },
    vue(),
    VueDevTools(),
  ],
  base: "/vue/",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // 给大家表演一手精神分裂.jpg
  experimental: {
    renderBuiltUrl(_, { type }) {
      if (type === "asset") {
        return { relative: true };
      }
    },
  },
});
