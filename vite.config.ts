import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "node:path";

const root = import.meta.dirname;

export default defineConfig({
  base: "./",
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": resolve(root, "./src"),
    },
  },
  server: {
    port: 5173,
    strictPort: true,
    host: true,
  },
  optimizeDeps: {
    include: ["agentation"],
  },
});
