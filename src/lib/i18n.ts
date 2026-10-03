export type Locale = "ar" | "en";

export const LOCALES: Locale[] = ["ar", "en"];
export const DEFAULT_LOCALE: Locale = "ar";

export function isLocale(x: unknown): x is Locale {
  return x === "ar" || x === "en";
}

export function dirOf(locale: Locale): "rtl" | "ltr" {
  return locale === "ar" ? "rtl" : "ltr";
}

export function otherLocale(locale: Locale): Locale {
  return locale === "ar" ? "en" : "ar";
}

/** Build a path for a route under a locale. */
export function localePath(locale: Locale, path = ""): string {
  const trimmed = path.replace(/^\/+/, "");
  return trimmed ? `/${locale}/${trimmed}` : `/${locale}`;
}

/** Convert the current path to the other locale, preserving the subpath. */
export function switchLocaleFromPath(current: string, to: Locale): string {
  const m = current.match(/^\/(ar|en)(\/.*)?$/);
  const sub = m?.[2] ?? "/";
  return `/${to}${sub === "/" ? "" : sub}`;
}
