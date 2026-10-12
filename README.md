# Chua Jia Sheng | Professional résumé

React + Vite portfolio and résumé with Apple-inspired editorial typography and purposeful motion, within bright white frosted glass, blue-cyan light and a faint lavender accent. Uses self-hosted Geist, Phosphor icons and native CSS.

## Run

```sh
npm install
npm run dev
```

## Production

```sh
npm run build
npm run preview
```

Deploy the generated `dist/` directory to a static host. No API keys or backend are required by the website.

The 13 October 2026 Apple cinematic refinement is live at [jiasheng.4bytedigi.com](https://jiasheng.4bytedigi.com), published from UI source `6feb62efbe1d4180bb96e6633940ee1766d2b9e9`. Production browser checks confirmed matching local build references (`index-CLVNPsVl.js`, `index-BKswYrMv.css`) and desktop/mobile layouts. The linked `jiasheng` project in [the server manager](https://server.4bytedigi.com) watches GitHub `main` automatically every minute and showed this revision Ready/Live. See [docs/redesign-verification.md](docs/redesign-verification.md) for checks, dated history and limits; [docs/deployment.md](docs/deployment.md) records deployment operations.

## Edit the résumé

Professional details live in `src/profile.json`, based on [the supplied LinkedIn profile](https://www.linkedin.com/in/chua-jia-sheng/) retrieved on 10 October 2026. It is distinct from the similarly named CPF Board professional.

The signed-in source exposed work history, education and all 17 credentials. Descriptions are concise factual paraphrases. The NTU degree is in progress and its 2030 end date is expected completion. The Udemy Network+ entry is explicitly course completion, not a claim to hold the CompTIA certification. No invented performance figures, private contact details or proficiency scores are included.

The PDF uses the same profile data. With Python and `reportlab`/`pypdf` installed, run `python scripts/build_resume.py` after editing the data. It writes `output/pdf/Chua-Jia-Sheng-Resume.pdf` and the website download at `public/Chua-Jia-Sheng-Resume.pdf`. Rebuild after regenerating the PDF. The current refinement preserves the existing profile and downloadable PDF.

## Design and behaviour

The latest approved refinement preserves the established blue-led palette, glass fill, blur, bright borders, gradients and shadows. The supplied cyan, mint, blue and pale-cyan swatches (`#6dd3f7`, `#e6f4f4`, `#7ab4f9`, `#bbebfb`) remain the ambient references, with a faint lavender hero glow. The Apple influence now comes through larger editorial type, varied page rhythm and selective motion.

The full name appears once in the frosted hero panel, reaching 96px on wide desktop. Section headings reach 64px, the two-line About statement 76px and Contact 80px. About pairs its statement with two factual columns. Experience remains flat and 2026-first, with desktop years pinned within their own group and ordinary mobile flow. Skills spans four flat groups across desktop; Education follows as its own full-width section. All five roles, three education records, ten glass skill chips, 17 credentials and four award records remain available.

Portfolio. labels the floating navigation, which retains five anchors and the real résumé download. A reserved sticky anchor prevents page movement when downward scrolling contracts desktop navigation from 74px to 62px, or mobile from 110px to 98px; upward scrolling restores it. Mobile keeps five 44px targets. Native anchor navigation tracks the current section, focuses destinations and supports direct section URLs.

Header, hero, contact panel and skill chips keep 28px blur; project surfaces/caption bands 24px; buttons/contact CTA 20px. Shared glass fill is 62%-white with 80%-white edges. Hero inset stays 50px/58px desktop and 28px/24px on phones, with 24px corners. The 1090ms hero sequence stages the name, role, copy, CTAs and decorative panes. CTA entrance uses backwards fill, preserving the 3px hover lift and .98 press scale. Ambient and pane loops run 20s and pause offscreen or when the document is hidden. About/Projects scroll entrances are bounded to 3%/4%; fine-pointer reflection and hero/contact depth stay within small bounds. Factual paragraphs stay still. No animation dependency was added.

Projects retains a centred preview, neighbouring peeks and full-width frosted captions. Three abstract CSS treatments remain explicitly Coming soon placeholders. Pointer swipe, drag, horizontal trackpad input and keyboard arrows commit one panel with 450ms feedback; captions retain 400ms continuity. Active previews gain subtle reflection and eligible 4px hover lift. Dots indicate position, with no carousel buttons or autoplay. Projects is omitted from printing.

Credential category filters, trimmed search, polite live counts and empty-result reset remain. Reduced motion removes animations/transitions/spatial effects and keeps reveals visible. Reduced transparency makes selected glass solid blue-white (`#f4f9fc`) without blur; the primary CTA stays solid blue with white lettering. Browser print includes all 17 credentials independently of filters and simplifies glass and masked text to plain reading content. Local preference/print checks used compiled branch activation, without real OS preference emulation.

Applied Design Taste Frontend, Impeccable and UI UX Pro Max; earlier work also used Emil Design Engineering. The [Apple analysis in VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/apple) remains a reference, with source and MIT license in `docs/design-references/`. This is an independent website. User references and the established font/material remain the visual authority.

`PRODUCT.md` records product context; `.impeccable/surfaces/src-app-jsx.md` records current direction. `DESIGN.md` and `.impeccable/design.json` contain actual typography, layout, navigation, material and motion tokens plus source-derived previews. Verification and the Ship finish disposition are in `docs/redesign-verification.md`. Current evidence is `.impeccable/review/apple-motion-*`; blue/purple/glass/cover/editorial captures document earlier iterations. The processor image is no longer rendered; its provenance remains in `public/images/silicon-glass.provenance.json`. No new shipping raster was added.

The earlier human-readable guide (`BRAND_GUIDELINES.md`) and generated `output/pdf/Chua-Jia-Sheng-Brand-Guidelines.pdf` predate the current material/palette. The current visual specification is `DESIGN.md`; `python scripts/build_brand_guide.py` regenerates the separate guide artifact from its source and requires ReportLab, pypdf, fonttools and brotli.
