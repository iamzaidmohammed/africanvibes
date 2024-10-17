import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["react-icons"],
  },
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://34.19.111.243/africanvibes/backend/index.php",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
