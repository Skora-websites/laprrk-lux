import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "node:path";

const root = import.meta.dirname;

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "spa-html-rewriter",
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          // If a request ends with .html (e.g. /about.html or /custom-software-development.html),
          // rewrite internal URL to /index.html so React Router handles it client-side.
          if (
            req.url &&
            req.url !== "/index.html" &&
            req.url.endsWith(".html") &&
            !req.url.startsWith("/@") &&
            !req.url.startsWith("/src/") &&
            !req.url.startsWith("/assets/")
          ) {
            req.url = "/index.html";
          }
          next();
        });
      },
    },
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
});
