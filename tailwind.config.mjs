/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#0E121C",
          800: "#181C26",
          700: "#222630",
          600: "#2B3358",
        },
        sky: { brand: "#BEDAF7" },
        violet: { brand: "#6172B5" },
        surface: {
          DEFAULT: "var(--surface-default)",
          subtle: "var(--surface-subtle)",
          elevated: "var(--surface-elevated)",
          inverse: "var(--surface-inverse)",
          dark: "var(--surface-dark)",
        },
        text: {
          DEFAULT: "var(--text-primary)",
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
          accent: "var(--text-accent)",
          inverse: "var(--text-inverse)",
        },
        brand: {
          primary: "var(--brand-primary)",
          secondary: "var(--brand-secondary)",
          logo: "var(--logo-primary)",
        },
        border: {
          DEFAULT: "var(--border-default)",
          subtle: "var(--border-subtle)",
          strong: "var(--border-strong)",
        },
        action: {
          DEFAULT: "var(--action-default)",
          hover: "var(--action-hover)",
          pressed: "var(--action-pressed)",
          focus: "var(--action-focus)",
        },
        focus: { ring: "var(--focus-ring)" },
        glow: { accent: "var(--glow-accent)" },
        status: {
          success: "var(--status-success)",
          warning: "var(--status-warning)",
          error: "var(--status-error)",
          info: "var(--status-info)",
        },
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', '"IBM Plex Sans Arabic"', "system-ui", "sans-serif"],
        arabic: ['"IBM Plex Sans Arabic"', "system-ui", "sans-serif"],
      },
      maxWidth: {
        "measure": "68ch",
        "layout": "1200px",
        "layout-wide": "1360px",
      },
      spacing: {
        "section": "clamp(4rem, 8vw, 7rem)",
      },
    },
  },
  plugins: [],
};
