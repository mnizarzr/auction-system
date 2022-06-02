import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { port: 5000 },
  resolve: process.env.USE_SOURCE
    ? {
      alias: {
        "react-router": path.resolve(
          __dirname,
          "../../packages/react-router/index.tsx"
        ),
        "react-router-dom": path.resolve(
          __dirname,
          "../../packages/react-router-dom/index.tsx"
        ),
      },
    }
    : {},
})
