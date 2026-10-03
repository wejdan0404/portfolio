import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://wejdan.info",
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
