# AGENTS.md

Guide for AI coding agents (and people) working on wizeyes.com: the marketing
and policy site for WizEyes Tech Inc.'s iPhone and iPad apps.

Next.js 14 App Router, TypeScript, CSS Modules. No runtime dependencies beyond
React and Next. Every page is statically generated.

## Where things live

```
content/                        All words and facts. Edit copy here, never in components.
  site.ts                       Studio facts: name, canonical URL, support email.
  types.ts                      AppContent schema. Its comments are the writing rules.
  apps/index.ts                 Registry of redesigned apps. Feeds llms.txt, sitemap, /<slug>.md.
  apps/<slug>/app.ts            One app's copy and facts, plus app-only section copy (`extras`).
  apps/<slug>/privacy.md        The app's privacy policy. Frontmatter: title, lastUpdated.

components/app-page/            Generic, data-driven page sections:
                                AppNav, Hero, SectionHeader, FeatureGrid, Steps,
                                PrivacyPanel, Faq, CtaBand, AppFooter, LegalDocument,
                                plus PhoneFrame (an iPhone outline for screen mock-ups).

app/<slug>/layout.tsx           Fonts, palette, nav and footer for one app's pages.
app/<slug>/theme.module.css     That app's colour tokens (sampled from its icon).
app/<slug>/page.tsx             The marketing page: composes sections, metadata, JSON-LD.
app/<slug>/privacy/page.tsx     The policy page, rendered from privacy.md.
app/<slug>/_components/         Illustrations only this app has (phone mock, demos).
app/<slug>/opengraph-image.tsx  Social card, rendered at build time.

lib/markdown.tsx                Small Markdown subset: parse + render to React.
lib/content.ts                  Loads content/apps/<slug>/*.md with frontmatter.
lib/llms.ts                     Builds /llms.txt, /llms-full.txt and /<slug>.md.
lib/jsonld.tsx                  schema.org MobileApplication + FAQPage graph.
lib/og.ts                       googleFont(): fetches a font's glyphs for a social card at build time.

app/llms.txt, app/llms-full.txt Machine-readable site index (https://llmstxt.org).
app/md/[slug]/route.ts          Markdown twin of each app page, served at /<slug>.md
                                via the rewrite in next.config.js.
app/robots.ts, app/sitemap.ts
```

Legacy pages: `app/{benefittracker,familyassets,koda,lablog,medicalrecord,solobooks}/`
are the old privacy-only pages. They are linked from App Store listings, so
their URLs must keep working until each app is moved to the new model.

Redesigned so far:

- **Savings Room** at `/savings-room` (source app: `cabulous/TaxSavingsTracker`).
  Its old URL `/taxsavingtracker` redirects to `/savings-room/privacy`.
- **Spendwise** at `/spendwise` (source app: `cabulous/SpendWise`). The slug
  didn't change, so the old policy URL now opens the marketing page, which
  links to the policy at `/spendwise/privacy` from its privacy section and
  footer.

## Rules

- **Facts come from the app.** Every claim in `app.ts` must be backed by the
  app's source code, App Store listing or privacy policy. Each `app.ts` names
  its source repo. Do not invent features, limits or ratings.
- **No prices or version numbers.** Both change with every release (prices
  also vary by region); the App Store listing is the source of truth.
  Describe how people pay (`pricing`) and link to the store instead, in
  visible copy, Markdown and structured data alike.
- **The app and the site share one design.** Savings Room's `Theme.swift`
  uses the same tokens as `app/savings-room/theme.module.css`, and the phone
  mock-up and demos mirror the app's views. Spendwise keeps the stock iOS
  look, so its mock-ups use system colours while the page around them takes
  its palette from the icon. When an app's look changes, update `_components/`
  to match, citing the Swift file each one mirrors.
- **Legal text is verbatim.** Change `privacy.md` or `terms.md` only when the
  policy itself changes, and bump `lastUpdated` when you do.
- **Never break a URL.** Moving a page means adding a redirect in
  `next.config.js`.
- **Content renders without JavaScript.** Crawlers and AI assistants read the
  HTML. Use server components; reach for `"use client"` only for real
  interaction (see `RoomDemo.tsx`), and render meaningful initial state.
- **Copy formatting** is limited to `*emphasis*`, `**strong**` and
  `[links](/path)`. In headings, `*emphasis*` renders in the app's accent
  style: Savings Room's coral italic, Spendwise's pink highlighter.
- **Styling** uses CSS Modules and the tokens in `app/<slug>/theme.module.css`.
  Base element styles are wrapped in `:where()` so any component class wins.
- **Every visual** supports dark mode (`prefers-color-scheme`) and
  `prefers-reduced-motion`, and works at 390px wide without horizontal scroll.
- Match the existing formatting (Prettier defaults: `npx prettier --write <files>`).

## Theme tokens

Shared sections in `components/app-page/` read these custom properties, so
each app restyles them from its `app/<slug>/theme.module.css`:

| Token                                                                                          | Role                                                                                             |
| ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| `--bg`, `--bg-alt`                                                                             | Page and alternate band backgrounds                                                              |
| `--surface`                                                                                    | Cards, chips, nav                                                                                |
| `--ink`, `--ink-soft`, `--ink-faint`                                                           | Text, strongest to faintest                                                                      |
| `--line`, `--icon-ring`                                                                        | Hairlines; the ring around app icons                                                             |
| `--accent`, `--accent-light`, `--accent-deep`, `--accent-shade`                                | Brand colour and its tints, light to dark                                                        |
| `--accent-ink`, `--accent-wash`, `--on-accent`                                                 | Accent text on the page; accent tint fill; text on accent fills                                  |
| `--panel`, `--on-panel`, `--panel-accent`, `--panel-glow`, `--panel-em`                        | The dark privacy panel, the accents inside it, and its heading emphasis colour                   |
| `--shadow-card`, `--shadow-float`                                                              | Card at rest and lifted (include any outline here)                                               |
| `--shadow-button`, `--shadow-button-hover`, `--shadow-panel`, `--shadow-coin`, `--shadow-icon` | Download button, privacy panel, step coins, app icon drop shadow (`filter: drop-shadow()` value) |
| `--coin-fill`, `--coin-font-style`, `--coin-axes`                                              | Step coins: background, and the number's `font-style` and `font-variation-settings`              |
| `--font-display`, `--font-sans`                                                                | Set by the app's layout via `next/font`                                                          |
| `--page`, `--gutter`, `--radius-xl`, `--radius-lg`                                             | Layout                                                                                           |
| `--phone-frame`, `--phone-shadow`                                                              | Optional: `PhoneFrame`'s body colour and shadow (it has defaults)                                |

Headings, emphasis and other element defaults are styled in each theme file,
so apps can differ in type as well as colour.

## Adding the next app page

1. Write `content/apps/<slug>/app.ts` (typed as `AppContent`) and
   `content/apps/<slug>/privacy.md`, copying the policy text verbatim from the
   app's current page. Register the app in `content/apps/index.ts`.
2. Add icons to `public/apps/<slug>/`: `icon-512.png`, `icon-180.png`, `icon-64.png`.
3. Copy `app/savings-room/` to `app/<slug>/`. Re-sample the palette from the
   icon in `theme.module.css`, then replace `_components/` with visuals drawn
   from the app's real screens.
4. Retire the old page: delete `app/<old-slug>/`, add a redirect to
   `/<slug>/privacy` in `next.config.js` (unless the slug is unchanged, as
   with Spendwise), and remove it from `legacyPages` in `app/sitemap.ts`.
5. Check: `npm run lint && npm run typecheck && npm run build`, then open
   `/<slug>`, `/<slug>/privacy`, `/<slug>.md` and `/llms.txt`.

## Commands

```bash
npm run dev        # http://localhost:3000
npm run build      # static build; also fetches Google Fonts
npm run lint
npm run typecheck
```
