# Wejdan Portfolio

Bilingual (Arabic / English) portfolio for Wejdan Almalki (وجدان المالكي) at **https://wejdan.info**.
Built with Astro 5, Tailwind CSS, and React islands.

Full build brief lives in `CLAUDE.md` — read that before changing anything substantive. Content for the six case studies lives under `src/content/case-studies/*.json`.

## Local development

```bash
npm install
npm run dev        # http://localhost:4321
```

## Build

```bash
npm run build      # emits ./dist
npm run preview    # serve ./dist locally
```

Static output. No server runtime required.

## Deploy

Push to `main` auto-deploys via the GitHub Actions workflow in `.github/workflows/deploy.yml` to GitHub Pages. Custom domain is wired through `public/CNAME` (`wejdan.info`).

For the first deploy from a fresh clone of `wejdan0404/portfolio`:
1. In the repo, open **Settings → Pages** and set **Source = GitHub Actions**.
2. Push to `main` (or run the workflow manually from the Actions tab).
3. The workflow builds Astro, uploads `./dist` as a Pages artifact, and deploys it. First deploy takes ~2 minutes.

### GoDaddy DNS — exact records to change

The domain `wejdan.info` currently points to a GoDaddy WebsiteBuilder stub. To hand control to GitHub Pages:

1. **Delete** the current `A @ WebsiteBuilder Site` record.
2. **Add four A records** on host `@`, each pointing to GitHub Pages:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
3. **Change** the existing `CNAME www` record from `wejdan.info.` to `wejdan0404.github.io.`.
4. **Leave untouched:** the NS, SOA, and DMARC/TXT records.

GitHub Pages typically verifies the custom domain within a few minutes once DNS propagates. Enable **Enforce HTTPS** in the repo's Pages settings after that.

## Project structure

```
src/
  content/case-studies/   JSON content, loaded by src/content.config.ts
  layouts/Base.astro      shell layout (head, header, footer, locale/dir)
  lib/                    i18n helpers, string table
  components/
    brand/                Logo, LangToggle, ThemeToggle
    sections/             Header, Footer, section partials
    work/                 WorkGrid, WorkCard, EvidenceDot
  pages/
    index.astro           root redirects to /ar
    404.astro             bilingual 404
    [locale]/             /ar/* and /en/* routes
  styles/
    tokens.css            design tokens (CLAUDE.md §3, verbatim)
    globals.css           reset + typography + components
public/
  CNAME                   custom domain
  favicon.svg             W-mark favicon
  brand/W.svg             placeholder W monogram
  case-studies/<slug>/    per-case-study imagery
```

## Deviations from `CLAUDE.md` — flagged, not silently applied

1. **Digits are Western (0–9) throughout**, overriding CLAUDE.md §5.8's default of Eastern Arabic-Indic in Arabic prose. This matches the current Figma brand system (file `pei6kBFtNKDcYAwPBG1gTN`, which uses Western digits). Revisit if the brand system itself changes.
2. **Display face is IBM Plex Sans in both Latin and Arabic headings** — not IBM Plex Serif. CLAUDE.md §4 and §12.4 explicitly flag the Serif licence as unconfirmed, so headings use Plex Sans (SemiBold 600) until the licence is resolved.
3. **Deploy target is GitHub Pages, not Firebase Hosting.** CLAUDE.md §8/§9 recommend Firebase (one account covers hosting + the contact-form Firestore write). Pages gets v1 live without a new account; the contact form backend is deferred and can migrate to Firebase (or any serverless endpoint) later without changing the rest of the stack.

## Open items passed through to other agents

- Case-study prose and media for all six slugs (`src/content/case-studies/*.json`).
- Home / Services / Work / About / Contact / CV page content.
- Real W monogram SVG export from Figma (`pei6kBFtNKDcYAwPBG1gTN`, node `404:5855`) replacing the placeholder in `public/brand/W.svg` and `public/favicon.svg`.
- Reflections for each case study (none exist yet; see CLAUDE.md §7).
