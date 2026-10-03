import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// Deployment base-path.
// DNS unlocked and nameservers moved to Cloudflare on 2026-10-03;
// wejdan.info now resolves to GitHub's A records. But GitHub Pages
// hasn't bound the custom domain yet — the CNAME file alone isn't
// enough on first setup; the "Custom domain" field in repo Settings
// → Pages has to be set once, which only an authorized human can do.
// Until that's set + Let's Encrypt provisions a cert, visitors still
// land on the Pages fallback (wejdan0404.github.io/portfolio/), so
// we keep BASE_PATH="/portfolio" so CSS, nav and images resolve.
// When wejdan.info is live and bound, flip BASE_PATH=""+
// SITE_URL="https://wejdan.info" (or just set those env vars in the
// workflow).
const BASE_PATH = process.env.BASE_PATH ?? "/portfolio";
const SITE_URL = process.env.SITE_URL ?? "https://wejdan0404.github.io";

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
