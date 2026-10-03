export type Locale = "ar" | "en";

export const LOCALES: Locale[] = ["ar", "en"];
export const DEFAULT_LOCALE: Locale = "ar";

/**
 * Deployment base path, read from Vite's `import.meta.env.BASE_URL`.
 * Always exported with NO trailing slash so callers can concatenate cleanly.
 * Set via the `base` option in astro.config.mjs (which itself reads BASE_PATH
 * env var, defaulting to "/portfolio" for the GitHub Pages fallback URL).
 */
export const BASE: string = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");

export function isLocale(x: unknown): x is Locale {
  return x === "ar" || x === "en";
}

export function dirOf(locale: Locale): "rtl" | "ltr" {
  return locale === "ar" ? "rtl" : "ltr";
}

export function otherLocale(locale: Locale): Locale {
  return locale === "ar" ? "en" : "ar";
}

/** Prefix an absolute path (eg. "/img/foo.webp" or "/favicon.svg") with BASE. */
export function withBase(path: string): string {
  if (!path) return BASE || "/";
  const slash = path.startsWith("/") ? "" : "/";
  return `${BASE}${slash}${path}`;
}

/** Build a path for a route under a locale, with BASE prefixed. */
export function localePath(locale: Locale, path = ""): string {
  const trimmed = path.replace(/^\/+/, "");
  return trimmed ? `${BASE}/${locale}/${trimmed}` : `${BASE}/${locale}`;
}

/**
 * Convert the current path to the other locale, preserving the subpath.
 * Handles paths that include BASE as well as logical (no-BASE) paths.
 */
export function switchLocaleFromPath(current: string, to: Locale): string {
  // Strip BASE if present, then match against logical shape.
  const basePattern = BASE ? new RegExp(`^${BASE.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`) : null;
  const stripped = basePattern ? current.replace(basePattern, "") : current;
  const m = stripped.match(/^\/(ar|en)(\/.*)?$/);
  const sub = m?.[2] ?? "/";
  return `${BASE}/${to}${sub === "/" ? "" : sub}`;
}
