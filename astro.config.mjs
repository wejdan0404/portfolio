import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// Deployment base-path.
// Custom domain wejdan.info is bound at GitHub Pages (DNS check
// passed 2026-10-03) and Let's Encrypt has issued the cert, so
// the site serves at the custom-domain root. Default BASE_PATH
// off and SITE_URL to the custom domain.
const BASE_PATH = process.env.BASE_PATH ?? "/";
const SITE_URL = process.env.SITE_URL ?? "https://wejdan.info";

export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  output: "static",
  trailingSlash: "ignore",
  i18n: {
    locales: ["ar", "en"],
    defaultLocale: "ar",
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    react(),
    sitemap({ i18n: { defaultLocale: "ar", locales: { ar: "ar-SA", en: "en-US" } } }),
  ],
  vite: {
    build: { assetsInlineLimit: 2048 },
  },
});
