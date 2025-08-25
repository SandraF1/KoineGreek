import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/KoineGreek/", // <- set to your project folder for GitHub Pages
});
