import { defineConfig } from "vite";
/// <reference types="vitest" />
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./.vitest/setup.ts"],
    testMatch: ["./.vitest/**/*.test.tsx"],
    globals: true,
    coverage: {
      provider: "istanbul"
    },
  },
});
