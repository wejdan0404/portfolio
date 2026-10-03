# Wejdan Portfolio — Build Brief (read this fully before writing any code)

> **Why this file exists.** Hamdan asked for one self-contained prompt file with everything needed so a Claude Code session opened on this repo can start building immediately, without re-deriving context. His own instruction for the planning stage was "don't start with code, start by planning it" — this document **is** that plan. Its existence clears you to start building. Don't ask Hamdan or Wejdan to re-explain anything that's answered below. Where something genuinely isn't decided yet, it's listed in **§12 Open Decisions** — stop and ask about those specifically, don't silently guess.
>
> This repo (`wejdan0404/portfolio`) currently contains nothing but a placeholder `index.html` ("قريباً..."). You are building the real site from scratch.

---

## 1. Mission & who this is for

Wejdan Almalki (وجدان المالكي) holds a Bachelor’s degree in Human-Computer Interaction (HCI) from Umm Al-Qura University, College of Computing, Software Engineering Department (2026). Her GPA is 3.59/4.00, with an Excellent rating and Second Honors. Her professional areas are HCI, UI/UX Design, UX Research, Product Design, Human–AI Interaction, and Customer Experience (CX). Do not state her residence, birthplace, or geographic location unless she confirms it. This portfolio is the single most important asset in her professional search. It will be read by hiring managers and recruiters who see hundreds of portfolios; it has to read as **professional, honest, and systems-minded**, not as a student project showcase.

**The portfolio is explicitly not finished and not final.** Nothing here — including this brief — is to be treated as a fixed spec to execute mechanically. Audit, critique, and improve as you go, the same way the Figma identity file is being audited frame-by-frame. If something in this brief is weak, say so and propose better, but flag the change rather than silently drifting from it.

**Non-negotiable throughout:** never invent facts, statistics, participant counts, test results, companies, sources, or research findings. Every claim in a case study must trace back to that project's real source material (summarized in §7). Where evidence is missing, say it's missing — don't fill the gap with something plausible-sounding.

---

## 2. Non-negotiable brand rules

- **Logo = the W monogram, not the wordmark.** The primary mark is a standalone "W" symbol. The full word "WEJDAN" appears only where identification truly requires it (e.g. a formal title block) — not sprinkled through every section, header, or footer. Default to the monogram alone.
- **Logo colour: Ink 900 (`#0E121C`) or White. Nothing else, ever.** Not a gradient, not an accent colour, not a tint.
- Four core brand colours, everything else derives from them: **White** `#FFFFFF`, **Black/Ink 900** `#0E121C`, **Sky** `#BEDAF7`, **Violet** `#6172B5`.
- The identity should feel **premium, elegant, modern, distinctive** — not sterile. Controlled use of depth, glow, grain and a restrained graphic language (stars, geometric marks) is expected, but keep it subtle; this is a product-design portfolio, not a party flyer. When in doubt, cut decoration before cutting clarity.
- Arabic and English are two different typographic systems, not one system translated. See §4.

---

## 3. Design tokens — ready to use

These are the **current, applied** tokens from the Figma design system (`wejdan-brand-system`, file `pei6kBFtNKDcYAwPBG1gTN`, collections "Wejdan — Primitives" / "Wejdan — Color", modes Light/Dark/Brand Light/Brand Dark — Brand Light ≡ Light and Brand Dark ≡ Dark value-for-value). Treat this as source of truth; don't re-derive or invent new hex values for these roles.

```css
/* src/styles/tokens.css */
:root,
:root[data-theme="light"] {
  --surface-default: #ffffff;
  --surface-subtle: #f2f7fe;
  --surface-elevated: #ffffff;
  --surface-inverse: #0e121c;
  --surface-dark: #0e121c;

  --text-primary: #0e121c;
  --text-secondary: #2b3358;
  --text-muted: #50545c;
  --text-accent: #4e5c96;
  --text-inverse: #ffffff;
  --text-on-light-accent: #0e121c;

  --brand-primary: #6172b5;
  --brand-secondary: #9bc4ee;
  --logo-primary: #0e121c;

  --border-default: #9bc4ee;
  --border-subtle: #bedaf7;
  --border-strong: #0e121c;

  --action-default: #6172b5;
  --action-hover: #3d4877;
  --action-pressed: #2b3358;
  --action-focus: #6172b5;
  --action-disabled: #e5e6e7;
  --focus-ring: #6172b5;
  --glow-accent: #9bc4ee;

  --overlay-scrim: rgb(14 18 28 / 0.56);

  --status-success: #207f4d;
  --status-warning: #966400;
  --status-error: #a71a1e;
  --status-info: #2169c7;
  --status-surface-success: #edf9f2;
  --status-surface-warning: #fff7e8;
  --status-surface-error: #fff0f0;
  --status-surface-info: #edf5ff;
}

@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) { /* same values as [data-theme="dark"] below */ }
}

:root[data-theme="dark"],
:root:not([data-theme="light"]) {
  --surface-default: #0e121c;
  --surface-subtle: #181c26;
  --surface-elevated: #222630;
  --surface-inverse: #ffffff;
  --surface-dark: #0e121c;

  --text-primary: #ffffff;
  --text-secondary: #d1d2d5;
  --text-muted: #a2a4a9;
  --text-accent: #bedaf7;
  --text-inverse: #0e121c;
  --text-on-light-accent: #0e121c;

  --brand-primary: #7587cf;
  --brand-secondary: #bedaf7;
  --logo-primary: #ffffff;

  --border-default: #6e7179;
  --border-subtle: #40444d;
  --border-strong: #86898f;

  --action-default: #9bc4ee;
  --action-hover: #bedaf7;
  --action-pressed: #7faae3;
  --action-focus: #bedaf7;
  --action-disabled: #40444d;
  --focus-ring: #bedaf7;
  --glow-accent: #bedaf7;

  --overlay-scrim: rgb(14 18 28 / 0.56);

  --status-success: #78e8af;
  --status-warning: #ffcd53;
  --status-error: #f78383;
  --status-info: #78b7ff;
  --status-surface-success: #10291d;
  --status-surface-warning: #2b230d;
  --status-surface-error: #2b1515;
  --status-surface-info: #0f1e33;
}
```

Rules for using these:
- **Bind semantic tokens only** (`var(--text-primary)`), never the raw hex, never a primitive scale step directly, in component code.
- `logo-primary` is the only colour the W is ever rendered in.
- Component boundaries (inputs, secondary buttons, dividers that matter) use `border-strong`; `border-default`/`border-subtle` are decorative only.
- Status colours always ship with an icon + label, never colour alone, and never as chart series colours.
- Elevation in dark mode comes from stepping `surface-default → surface-subtle → surface-elevated` plus a 1px `border-subtle` — don't fake elevation with shadows on dark surfaces (shadows don't read on near-black).

---

## 4. Typography

Two separate systems — do not assume the Latin hierarchy works unchanged for Arabic.

| Role | Arabic | Latin |
|---|---|---|
| Body + Display | **IBM Plex Sans Arabic** | **IBM Plex Sans** (body) |
| Display/Headings (Latin) | — | IBM Plex Sans (not Serif — see flag below) |

- **Do not use IBM Plex Serif**, and do not serve خط ثمانية. §12.4 is now resolved: the Thmanyah licence forbids web embedding that leaves the font extractable as a file, which is what any `@font-face url()` does. Headings use IBM Plex Sans in both languages' Latin runs.
- **خط ثمانية is wired `local()`-only** (`src/styles/tokens.css`, family `"Thmanyah Local"`). No font file is served or committed; visitors who installed it see it, everyone else sees IBM Plex Sans Arabic. Metric overrides (`size-adjust: 92%`, `ascent 118%`, `descent 45.1%`) were measured in the browser on a shaped Arabic string so both render in identical space.
  - Name the face anything other than the installed family — CSS family matching is case-insensitive, so a face called `"Thmanyah Sans"` is bypassed by the system font and the overrides are silently dropped.
  - Keep headline widths in `em`, not `ch`: the `ch` unit is the advance of "0" and differs 6.7% between the two faces, which changed the Arabic hero from three lines to two.
- **Font stacks bind to the tokens** (`var(--font-body)` / `var(--font-arabic)` / `var(--font-display)`), never hardcoded families. They were hardcoded in `globals.css` and `Hero.astro` while the tokens sat unused.
- Arabic needs more line-height than Latin — target **1.6–1.8** for Arabic body text, or ascenders/descenders and diacritics clip.
- **No `letter-spacing` on Arabic runs** — it breaks letter joining. Scope any tracking to `:lang(en)`.
- Define a Display/H1/H2/H3/Body/Small/Caption/Label scale **separately** for Arabic and Latin (per the master brand spec) rather than reusing one `rem` scale for both — Arabic glyphs read differently at the same point size.
- Form controls don't inherit page font by default — add `button, input, select, textarea { font: inherit; }`.

---

## 5. RTL & i18n — implementation rules (non-negotiable)

This is a bilingual Arabic/English site and Arabic is not a secondary mode bolted onto an English layout. Apply every rule below **at the mobile breakpoint with the same rigor as desktop** — this is a mobile-first build, not a desktop build with phone adjustments bolted on later.

1. **Direction lives in HTML, set before first paint.** `<html lang="ar" dir="rtl">` (or `en`/`ltr`) must be correct in the server-rendered/static HTML for that route — never a client-side flip after load. If using Astro's i18n routing (recommended, §8), this falls out naturally per-locale route; if a single route serves both, set `lang`/`dir` in an inline `<head>` script before the stylesheet, reading `?lang=` → `localStorage` → `navigator.languages`, exactly like the pattern below (adapted from the existing validated prototype):

```html
<script>
(function () {
  var q = new URLSearchParams(location.search);
  var lang = q.get('lang') || localStorage.getItem('wj-lang') || (navigator.languages[0]||'').startsWith('ar') ? 'ar' : 'en';
  var theme = q.get('theme') || localStorage.getItem('wj-theme') || 'auto';
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  if (theme !== 'auto') document.documentElement.dataset.theme = theme;
})();
</script>
```

2. **Only logical CSS properties for layout.** Never `left`/`right`/`margin-left`/etc. Use `margin-inline-start/end`, `padding-inline-start/end`, `inset-inline-start/end`, `text-align: start/end`, `border-start-start-radius` etc. In Tailwind: `ms-*`/`me-*`, `ps-*`/`pe-*`, `start-*`/`end-*`, `text-start`/`text-end`, `rounded-s-*`/`rounded-e-*`, `border-s-*`/`border-e-*`. Never hand-write `left:`/`right:`.
3. **Never `flex-row-reverse` "for RTL."** Flex rows and grid columns already follow `dir`. Adding a reverse flips them back to LTR order — this is the single most common RTL bug.
4. **Isolate mixed-direction content.** Numbers, prices, dates, emails, URLs, and Latin project names inside Arabic sentences get reordered by the bidi algorithm. Wrap them in `<bdi>` or `dir="ltr"` spans. `type="tel"/"email"/"url"` inputs get `dir="ltr"` explicitly.
5. **Mirror only directional icons** (back/forward chevrons, nav arrows) via `rtl:-scale-x-100`. Never mirror the logo, checkmarks, or the evidence-dot legend.
6. **Transforms don't flip automatically.** Any `translateX`/slide animation (e.g. the project-view page transition) needs an explicit `[dir="rtl"]` mirror.
7. **Text containers use `min-height`, never fixed `height`** — Arabic strings run longer/taller than their English equivalent and must not clip.
8. Digits: default to Eastern Arabic-Indic (٠١٢٣٤٥٦٧٨٩) in Arabic prose/dates, **except** IBANs, licence codes, emails, URLs — those stay Latin digits even mid-Arabic-sentence (see arabic-rtl-docs skill for the full exception list if this ever touches a downloadable CV/PDF, not just the web page).
9. **Run the checklist before calling any page done:** switch language live (not just on reload), check 360px and 768px widths with the longer language, look for a stray horizontal scrollbar, type a phone number/email into every form field and confirm it doesn't reorder. The `rtl-ui` skill ships a `rtl_check.py` script — run it against changed files; fix every error it reports, and tag any intentional exception `rtl-check: ignore`.

---

## 6. Information architecture / user flow

The existing claude.ai prototype artifact already validated a sound IA through iteration — **reuse the pattern, don't port the raw file** (it's a single monolithic HTML page; this build should be properly componentized). The validated structure:

- **Header/nav** — logo (W monogram) + primary nav + language toggle + theme toggle.
- **Hero** — positioning statement, not a generic "Hi, I'm Wejdan."
- **Work grid** — one lead/featured case study, then row cards, with explicit placeholder/dashed cards for "early-exploration" entries so the grid is honest about maturity rather than presenting everything as equally finished.
- **About / principles** — how she thinks, not just a bio.
- **Capabilities** and **Services** sections.
- **Contact.**
- **Project view** — the most important interaction pattern: a **dialog** (modal) on desktop and a **full page** on mobile, both rendering the same underlying content, with:
  - A sticky table-of-contents with scroll-spy (`aria-current` on the active section button).
  - An **evidence-dot legend**: tested / planned / early — every claim in a case study is visually tagged with its actual evidence level. This is the core honesty mechanism of the whole portfolio and must be rebuilt faithfully.
  - Structured evaluation blocks: tasks, findings, metrics, quotes, comparison tables.
  - A **review-mode / flag system**: content still marked `[CONTENT REQUIRED]` is hidden from normal visitors and only shown when review mode is toggled on — so Hamdan/Wejdan can see gaps in situ without visitors seeing "TODO" text on a live portfolio.

Rebuild this pattern cleanly as components (`WorkGrid`, `WorkCard`, `ProjectView` with `ProjectViewDialog`/`ProjectViewPage` variants sharing one content renderer, `EvidenceDot`, `ReviewFlag`), not as one big page.

---

## 7. Content inventory — six case studies (condensed, truthful)

Full verbatim source material (complete fact registers with page citations, every internal inconsistency logged, full bilingual EN/AR copy) lives in the **"وجدان" claude.ai Project**, under `portfolio/case-studies/{petcare,vui,wraf,rafiq,arcadea,mishkat}.md`. **A GitHub-only Claude Code session cannot reach that Project** — this section is a faithful condensed summary sufficient for scaffolding, routing, and component planning. Before writing final on-page copy for a given case study, the exact source text must be pulled in (ask Hamdan to paste/commit the relevant file, or do it in a claude.ai session with Project access) — do not write case-study prose from memory of this summary alone.

**Cross-cutting, most important gap:** every single one of the six case studies has a **completely empty Reflection section, in both English and Arabic.** No reflections exist anywhere yet. This cannot be fixed by code — it needs Wejdan to actually write six short reflections. Flag this to her before polishing anything else content-related.

| Project | What it is | Wejdan's actual role | Evaluation | Key flags |
|---|---|---|---|---|
| **PetCare** | Early academic exploration | Not clearly individually attributed | None completed | 8 content gaps (contribution, problem evidence, research basis, tools, duration, evaluation, reflection...). Source doc itself recommends **not** featuring this prominently — see §12. |
| **VUI** | McDonald's drive-thru voice assistant (academic concept) | 100% on Introduction, Products/Specs, Deployment Location, ASR engine selection, file formatting; 50% shared on Operational Challenges & Interaction Scenarios | **Planned only — never executed.** Do not present as tested. | Source report has 9 logged internal inconsistencies (e.g. voice-only vs. touch contradiction, price/total math errors) — don't silently "fix" these when writing copy; omit the inconsistent claim or state it honestly as unresolved. |
| **WRAF** | Tea-community app, 4-course academic project | 25% each on 3 fidelity levels; 50% presenting/analyzing usability results; 100% test-report intro; 50% stakeholder analysis | **Real test, completed:** 7 participants, moderated. Navigation was the weak point (footer nav not fixed affected 4/7; "+" add-post icon unclear to 2/7). | The report's own "83.3% success" figure doesn't reconcile with any valid fraction of 7 participants — flag as a known source inconsistency, don't invent a "corrected" number. **Zero screens exist at any fidelity** in the source docs — there is nothing to screenshot for this one; say so, don't fabricate a mockup. |
| **Rafiq** | Hajj pilgrim safety bracelet + app, team of 3 | No individual roles documented anywhere in the source | **Planned only — never executed** (5–7 proxy participants were never recruited). Do not present as tested. | 4-state model (Normal/Warning/Danger/Emergency) + Recovery path; detailed, genuinely strong design rationale. 11 logged internal inconsistencies in source — same rule as VUI. Religious/cultural terminology (hifz al-nafs framing, ihram constraints) must be handled with care and accuracy, not generic safety-app language. |
| **Arcadea** | Personal game-backlog tracker, Flutter | **Clearest individual attribution of all six.** Led the Figma design-system foundation (colours/text styles/core components); personally designed + built 6 of 11 Flutter screens (Welcome, Login, SignUp, Search, Statistics, Profile) + 5 shared widgets + AuthProvider + all 3 theme files. | **Real test, completed:** 5 participants, 100% task completion, mean SUS **79.5** (CI 73.5–85.5), 6 issues (severity 1–2, none blocking), 3 of 6 issues on her own screens. | Figma link exists but unverified live: `figma.com/design/VKjezUKAiLfsbT0jBgmesK/`. **The available screenshots are Figma frames, not captures of the running build** — label them explicitly as design frames, never as "the live app." |
| **Mishkat** | HCI graduation project (GP1 research + GP2 implementation), team of 6, public PWA at `pwa.mishkat.us` | Individually documented only for the Week-7 proposal (storyboards + IA navigation flow, shared with Weam Al-Lahibi). GP2 implementation phase has **no individual-contribution record at all.** | GP1: two rounds of moderated Figma-prototype testing, task completion rose 68%→92%. GP2: 6 female students tested, 6/6 completed all 3 scenarios — but **no SUS score was ever published**, despite being administered. Do not invent one. | **Zero screenshots of the implemented app exist in any available source** (GP2 PDF is missing; the one navigation-flow diagram has illegible/garbled labels and is excluded). The "Ask Mishkat" AI companion uses the external Claude API with explicit safety rules (no diagnosis; hands off to a trusted adult/counselor/emergency services for anything serious) — if the case study page covers this feature, carry that safety framing through rather than describing it as a generic chatbot. |

**Privacy, applies to all six:** never reproduce student ID numbers, PDF author metadata, or participant demographic details (ages/genders) that the source docs withheld on purpose — these exclusions are deliberate, not omissions to "fix."

---

## 8. Tech stack & repo layout (recommendation — flag if you'd do differently, don't silently diverge)

**Stack:** Astro (static output, first-class i18n routing, Markdown/MDX content collections — maps directly onto the case-study-as-markdown pattern above) + React islands only where real interactivity is needed (theme/lang toggle, ProjectView dialog, contact form) + Tailwind CSS (its logical-property utilities map directly onto §5). This beats a plain monolithic HTML file (what the old prototype was) on maintainability, and beats a full SPA framework on performance/SEO for a mostly-static, content-heavy portfolio.

Route-based locales (`/ar/...`, `/en/...`) are a deliberate **upgrade** over the old prototype's client-side query-param/localStorage detection — route-based avoids any flash-of-wrong-direction and is far better for SEO (proper `hreflang`). Keep the old approach's *behavior* (respect OS language on first visit, remember an explicit choice after) but implement it as a redirect/middleware at the routing layer, not a runtime script.

Suggested layout:
```
src/
  content/case-studies/        # one entry per project, EN+AR fields
  layouts/
  components/
    brand/   (Logo, ThemeToggle, LangToggle)
    work/    (WorkGrid, WorkCard, ProjectView, ProjectViewDialog, ProjectViewPage)
    ui/      (Button, Badge, EvidenceDot, ReviewFlag, Card, Pill)
  pages/
    [locale]/index.astro
    [locale]/work/[slug].astro
  styles/tokens.css             # §3, verbatim
  lib/firebase.ts
public/brand/                   # logo SVGs — see §12, not available yet
functions/ (or src/pages/api/)  contact.ts   # Firestore write, §9
```

Deploy: **Firebase Hosting**, same project as the Firestore use in §9 — one account/console covers both hosting and the one real backend need, which matters given the budget-conscious setup. (Vercel is a fine alternative if Firebase ends up unnecessary, but there's no reason to run two platforms for one small site.)

---

## 9. Database / backend — lean recommendation

Hamdan asked how to build a database, preferring it be built rather than him doing it, and noted the subscription budget is tight. Honest answer: **a full database is not needed for v1.** Case-study content is author-controlled, not user-generated — keep it as versioned Markdown/MDX in the repo (§8), which is free, reviewable in git history, and needs no backend at all.

The one place a backend genuinely helps is the **contact form**. Recommendation: Firebase (Firestore + Hosting), since it's already in Wejdan's toolset and unifies hosting + this one backend need under one free-tier account.

```
Firestore collection: contact_messages
{ name: string, email: string, message: string, locale: 'ar'|'en',
  createdAt: serverTimestamp(), handled: boolean (default false) }
```

Security rules: allow `create` only, with field-shape + length validation, no `update`/`delete`/`read` from the client. Wejdan reads submissions directly in the Firebase console — no custom admin UI needed at v1. For analytics (page views, which case studies get read), use GA4 or Plausible rather than rolling a custom views collection — it's a solved problem, don't rebuild it.

**Division of labour:** creating the actual Firebase project (the console account/project itself) must be done by Hamdan or Wejdan — that's an account-creation step outside what a coding agent should do unattended. Everything else — schema, security rules, the form component, the integration code — is the coding agent's job, end to end.

If later there's a real need to edit case-study content without a redeploy (a lightweight CMS feel), migrating case studies into Firestore is a reasonable v2 — not now.

---

## 10. Skills to use, and when

Load and actually apply these (all already available in this environment) rather than treating them as background flavor text:

- **web-design-guidelines** — run before considering any component "done": accessibility, focus states, forms, animation, touch/interaction, dark mode, i18n rules. Non-negotiable baseline for every PR.
- **rtl-ui** + **arabic-uiux-master** + **arabicskill** — apply to every piece of UI copy and every layout decision, not just a final pass. `arabicskill`/`arabic-uiux-master` specifically govern how Arabic UI text (empty states, errors, confirmations, button labels) is actually worded — natural Arabic, not translated English sentence structure.
- **ux-heuristics-review** — self-review each major flow (work grid → project view, contact form, language/theme switch) against the 10 heuristics before calling it done.
- **writing-texts** — for the actual prose: hero positioning statement, about section, case-study framing copy, the eventual Reflection sections once Wejdan drafts them.
- **work-with-design-systems** — only once Figma work resumes (exporting the W monogram asset, checking token binding health in Figma itself); not needed for the Astro/React build itself.
- **arabic-rtl-docs** — only relevant if this project ever produces a downloadable Word/PDF asset (e.g. a CV); not needed for the web build.
- **logo-design** — only if the W monogram itself needs further refinement; the direction is already set (§2), this is for execution/export quality, not reinvention.

Apply the RTL/accessibility/mobile skills **identically** at the mobile breakpoint — this was an explicit ask: the same rigor on "جوال المشروع" (the project's mobile experience) as desktop, not a mobile afterthought pass.

---

## 11. Research & integrity rule (repeat, because it matters most)

Never invent statistics, companies, sources, competitors, UX research findings, or product claims — for this portfolio's own case studies (§7) or for any external comparison ("how other portfolios do X"). If a fact is needed and not available, say so and ask, rather than writing something plausible. This applies to code comments and commit messages too, not just visible copy.

---

## 12. Open decisions — flagged, not resolved. Stop and ask Hamdan/Wejdan before deciding these silently.

1. **The "chat-style HTML design" Hamdan liked.** He referenced a previously-seen chat-style HTML design he wants recreated in the brand colours above, built directly in code (explicitly skipping Figma for this one piece, overriding the usual design-first preference). It has not been identified among existing artifacts. **Ask him directly what this is/where it is** before attempting to build it from a guess.
2. **PetCare's fate.** Its own source documentation recommends not featuring it prominently (weakest evidence base of the six, 8 open content gaps). Decide: cut from the main work grid, demote to a minor/early-exploration slot, or keep as-is. Don't decide this silently either way.
3. **`Gradient/Depth` token.** Flagged CLASH against the new dark-mode ramp in the colour spec itself — its own documentation says: *"keep it off Dark boards, or re-stop it later to `#090C14 → #181C26 → #222630`."* This is explicitly left to the owner's call. Pick one before using that gradient anywhere in dark mode.
4. **~~IBM Plex Serif / "thmanyah serif" licence.~~ RESOLVED 2026-10-03 — the Thmanyah font cannot be used on this site.**
   Thmanyah released خط ثمانية publicly (font.thmanyah.com): three families
   (Serif Display, Serif Text, Sans), five weights each, free for personal and
   commercial use. But its licence is custom and proprietary, not OFL, and it
   forbids exactly the way a website has to load a font. Verbatim from
   font.thmanyah.com/licenses:

   > إعادة توزيع برنامج الخط أو مشاركته أو رفعه أو استضافته أو إتاحته للتنزيل
   > على أي موقع إلكتروني أو خادم أو منصة رقمية

   — redistributing, sharing, uploading, hosting, or making the font available
   for download on any website, server or digital platform. And: ولا يجوز تنزيل
   برنامج الخط إلا من الموقع الرسمي لثمانية (it may only be downloaded from
   Thmanyah's own site). Thmanyah's own help centre states the font may be used
   *on* websites only once a visitor has installed it locally — not served as
   webfont files.

   Two consequences, both hard blocks:
   - Self-hosting `.woff2` on wejdan.info is prohibited. A `@font-face` file is
     by definition downloadable.
   - Committing the font files to this **public** repo is redistribution, also
     prohibited.

   No web licence or CDN is offered; exceptions go through Ask@thmanyah.com.
   So headings and body stay IBM Plex Sans / IBM Plex Sans Arabic (OFL, free to
   self-host) unless Wejdan obtains written web permission from Thmanyah.
   Do not re-open this by guessing: the blocker is the licence, not taste.
5. **W monogram SVG asset.** Lives in Figma (`pei6kBFtNKDcYAwPBG1gTN`, node `404:5855`, page 11, "Brand/Logo/W") — a GitHub-only session has no Figma access to export it. Someone with Figma access needs to export Ink-900 and White SVG variants into `public/brand/` before the real logo can render; use a plain text "W" placeholder in the correct weight/colour until then, not a fabricated substitute mark.

---

## 13. First build tasks, in order

1. Scaffold Astro + Tailwind + the locale routing structure from §8.
2. Drop in `src/styles/tokens.css` from §3 verbatim; wire light/dark via `data-theme` + `prefers-color-scheme`.
3. Build the layout shell: header/nav, logo placeholder (§12.5), language + theme toggles, footer. Verify RTL correctness per §5 at this stage before building anything on top of it.
4. Build `WorkGrid`/`WorkCard` against the content collection, using the 6 case studies from §7 as **placeholder-accurate** entries (real condensed facts, clearly marked `[CONTENT REQUIRED]` where full copy is pending) rather than lorem ipsum.
5. Build the `ProjectView` dialog/page pair with the evidence-dot legend and review-flag system from §6.
6. Build the contact form + Firestore wiring from §9 (schema + rules only — the actual Firebase project creation is Hamdan/Wejdan's step).
7. Full mobile pass at 360px/768px in both languages — not a final-polish afterthought, a gate before calling v1 done.
8. Run `web-design-guidelines` and `rtl_check.py` against everything built so far; fix every finding before moving on.

---

## 14. What not to do

- Don't port the old prototype's raw HTML wholesale — rebuild the same validated patterns as real components.
- Don't resolve §12 by guessing.
- Don't claim a case study was tested when §7 says it was only planned.
- Don't invent a SUS score, a success percentage, or a participant count not stated in §7.
- Don't build a full custom database/CMS before the lean v1 in §9 is justified by an actual need.
- Don't skip the Arabic pass and "add RTL later" — it's load-bearing from the first component, not a theme switch.
