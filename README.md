# Chua Jia Sheng | Professional résumé

React + Vite portfolio and résumé with Apple-inspired editorial clarity, bright white frosted glass, blue-cyan light and a faint lavender accent. Uses self-hosted Geist, Phosphor icons and native CSS.

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

The blue-led Apple refinement is live at [jiasheng.4bytedigi.com](https://jiasheng.4bytedigi.com), from UI source `5bbf0b7a2fa6287f25822aab371e51c5405d9cb6`. Production browser verification on 12 October 2026 confirmed matching build asset references and desktop/mobile layouts. The linked `jiasheng` project in [the server manager](https://server.4bytedigi.com) watches GitHub `main` automatically every minute. See [docs/redesign-verification.md](docs/redesign-verification.md) for current evidence, dated release history and verification limits. [docs/deployment.md](docs/deployment.md) records the original 10 October Caddy/tunnel installation.

## Edit the résumé

Professional details live in `src/profile.json`, based on [the supplied LinkedIn profile](https://www.linkedin.com/in/chua-jia-sheng/) retrieved on 10 October 2026. It is distinct from the similarly named CPF Board professional.

The signed-in source exposed work history, education and all 17 credentials. Descriptions are concise factual paraphrases. The NTU degree is in progress and its 2030 end date is expected completion. The Udemy Network+ entry is explicitly course completion, not a claim to hold the CompTIA certification. No invented performance figures, private contact details or proficiency scores are included.

The PDF uses the same profile data. With Python and `reportlab`/`pypdf` installed, run `python scripts/build_resume.py` after editing the data. It writes `output/pdf/Chua-Jia-Sheng-Resume.pdf` and the website download at `public/Chua-Jia-Sheng-Resume.pdf`. Rebuild after regenerating the PDF. The blue-led refinement preserves the existing profile and downloadable PDF.

## Design and behaviour

The latest approved direction is more blue and more Apple-inspired restraint. It supersedes the previous purple-led iteration. White space, charcoal typography and a clear blue primary action lead. The supplied cyan, mint, blue and pale-cyan swatches (`#6dd3f7`, `#e6f4f4`, `#7ab4f9`, `#bbebfb`) guide ambient light and selected glass. A faint lavender glow remains at the hero edge. Brighter white glass and lighter offset blue shadows give the material a calmer presence.

The full name appears once in the frosted hero panel. Portfolio. labels the floating glass header, which retains five anchors and the résumé download. Explore experience uses a blue gradient with white lettering; Get in touch uses pale glass. About, flat reverse-chronological Experience, explicitly labelled project previews, Skills & education, searchable credentials, boxed achievements and a luminous LinkedIn contact panel follow on one scrolling page.

Header, hero, contact panel and individual skill chips use 28px blur; project surfaces/caption bands use 24px; buttons/contact CTA use 20px. Shared white glass fill is 62%, with bright 80%-white borders. The hero panel uses 50px/58px inset on desktop, 28px/24px on phones and a 24px radius throughout. All ten original skills remain individual glass chips under four flat headings, using one column at 375px and below and two at 390px. Experience, education and credentials remain flat. All five roles, three education records, 17 credentials and four award records remain available.

Projects retains a centred preview and neighbouring peeks, with frosted surfaces and full-width caption bands. All three abstract previews say Coming soon and identify themselves as placeholders until real project facts/assets are supplied. Swipe, pointer drag, horizontal trackpad input and keyboard arrows commit one panel, with 450ms sliding feedback. Dots indicate position; there are no carousel buttons or autoplay. Projects is omitted from browser printing.

Credential category filters, trimmed search, a polite live count and empty-result reset remain. Default matching records stay visible. Anchor navigation tracks current section and focuses destinations; direct section URLs work. Slow 32s ambient movement and 28s pane drift remain local to the hero. Fine pointers move hero/chip/contact reflections within small bounds; touch and reduced motion skip the effect. Eligible chips, buttons and contact action lift 3px on hover. Reduced motion removes animations/transitions and keeps reveals visible. Reduced transparency makes selected glass solid blue-white (`#f4f9fc`) without blur, while the primary CTA stays solid blue with white text. Browser printing includes all 17 credentials independently of filters and simplifies glass to plain reading content.

Applied Design Taste Frontend, Impeccable and UI UX Pro Max; earlier work also used Emil Design Engineering. The [Apple analysis in VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/apple) remains a reference, with source and MIT license in `docs/design-references/`. This is an independent website. User palette references guide the latest refinement while the established font and interactions remain.

`PRODUCT.md` records product context; `.impeccable/surfaces/src-app-jsx.md` records the current surface direction. `DESIGN.md` and `.impeccable/design.json` document actual tokens, composite material and component previews. Verification and the Ship finish verdict are in `docs/redesign-verification.md`. Current local evidence is `.impeccable/review/blue-*.jpg`; purple/glass/cover/editorial captures describe prior iterations. The processor image is no longer rendered; its provenance remains in `public/images/silicon-glass.provenance.json`. No new shipping raster asset was added.

The earlier human-readable guide (`BRAND_GUIDELINES.md`) and generated `output/pdf/Chua-Jia-Sheng-Brand-Guidelines.pdf` predate the current material/palette. The current visual specification is `DESIGN.md`; `python scripts/build_brand_guide.py` regenerates the separate guide artifact from its source and requires ReportLab, pypdf, fonttools and brotli.
