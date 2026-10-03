import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// Deployment base-path.
// Until wejdan.info DNS resolves (GoDaddy clientUpdateProhibited lock blocking
// nameserver change as of 2026-10-03), the live URL is the GitHub Pages
// fallback at https://wejdan0404.github.io/portfolio/ — which requires a
// `/portfolio` base so assets resolve. When DNS is unlocked and wejdan.info
// serves at root, flip BASE_PATH back to "/" (or unset the env var) and
// redeploy. See CLAUDE.md.
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
