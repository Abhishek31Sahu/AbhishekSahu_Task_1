import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // 👈 This sets the dev server to run on port 3000
    strictPort: true, // Optional: throws error if port 3000 is already in use
    proxy: {
      "/api": "http://localhost:5000",
    },
  },
});
