import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// Deployment base-path.
// DNS unlocked and nameservers moved to Cloudflare on 2026-10-03;
// wejdan.info now serves at root. The GitHub Pages fallback at
// wejdan0404.github.io/portfolio/ is intentionally left broken from
// this point — anyone hitting it will be bounced to the custom
// domain once GitHub's edge picks up the CNAME.
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
