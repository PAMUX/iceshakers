# Ice Shaker: Hyagen Medical custom bottle landing page

A static React + Vite + TypeScript rebuild of the Ice Shaker / Hyagen Medical landing page,
recreated section by section from the reference screenshots.

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
npm run preview  # preview the production build
```

No backend, no database, no auth. The quote form is front-end only.

## Deploying

`npm run build` outputs a fully static `dist/` folder that can be dropped onto Netlify,
Vercel, GitHub Pages, Cloudflare Pages or any static host.

## How it is put together

```
src/
  assets/
    icons/    line icons, social icons, check marks (transparent PNG)
    images/   hero photo, product shots, colour swatches, use-case panels
    logos/    Ice Shaker wordmark (light + dark), Hyagen Medical lockup
  components/ one .tsx + matching .css per section
  styles/index.css  design tokens, resets, responsive root sizing
```

Sections in page order: `Header`, `Hero`, `ProductSection` (Choose Your Bottle),
`ColorSection` (Pick Your Color), `BenefitsSection`, `UseCasesSection`,
`QuoteSection`, `Footer`.

### Sizing model

The desktop layout is authored against a **1440px reference frame** measured from the
screenshots. `1rem = 16px` at 1440px and the root font-size scales with the viewport
below that (`calc(100vw / 90)`), so every proportion holds at any desktop width.
At 1024px and below the root resets to 15px and the layout switches to the stacked
tablet/mobile rules (hamburger menu, stacked panels, 2-up and 1-up product grids).

### Fonts

- Display serif: **DM Serif Display** (section headings)
- UI / body: **Figtree**

Both are loaded from Google Fonts in `index.html`.

### Assets

Every logo, product photo, icon and background was extracted from the supplied
screenshots (cropped, background-matched and alpha-cut) rather than replaced with
stock imagery, so the page renders with the original artwork.
