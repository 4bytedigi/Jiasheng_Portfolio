# Chua Jia Sheng | Professional résumé

React + Vite portfolio and résumé with Apple-inspired editorial clarity, selective frosted glass and soft blue-purple light. Uses self-hosted Geist, Phosphor icons and native CSS.

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

The latest glass refinement is live at [jiasheng.4bytedigi.com](https://jiasheng.4bytedigi.com). Production browser verification on 12 October 2026 confirmed the assets from source commit `b93689ac8a9b8b76b225ef2bd18fa7e3dd59f37c` at desktop and mobile sizes. The `jiasheng` project is linked to the `4bytedigi` GitHub account in [the server manager](https://server.4bytedigi.com), with Redeploy enabled and automatic deployment watching `main` every minute. See [docs/redesign-verification.md](docs/redesign-verification.md) for current evidence and its limits. [docs/deployment.md](docs/deployment.md) records the original 10 October Caddy/tunnel installation; it is historical deployment documentation, not a newly verified runtime description.

## Edit the résumé

Professional details live in `src/profile.json`, based on [the supplied LinkedIn profile](https://www.linkedin.com/in/chua-jia-sheng/) retrieved on 10 October 2026. It is distinct from the similarly named CPF Board professional.

The signed-in source exposed work history, education and all 17 credentials. Descriptions are concise factual paraphrases. The NTU degree is in progress and its 2030 end date is expected completion. The Udemy Network+ entry is explicitly course completion, not a claim to hold the CompTIA certification. No invented performance figures, private contact details or proficiency scores are included.

The PDF uses the same profile data. With Python and `reportlab`/`pypdf` installed, run `python scripts/build_resume.py` after editing the data. It writes `output/pdf/Chua-Jia-Sheng-Resume.pdf` and the website download at `public/Chua-Jia-Sheng-Resume.pdf`. Rebuild after regenerating the PDF. The glass refinement preserves the existing profile and downloadable PDF.

## Design and behaviour

The name appears once in the hero. Portfolio. labels the floating glass header, which retains all five navigation anchors and the résumé download. The hero offers Explore experience and Get in touch, with diffused pastel light behind overlapping translucent panes. About, flat reverse-chronological Experience, explicitly labelled project previews, Skills & education, searchable credentials, boxed achievements and a glass LinkedIn contact panel follow on one scrolling page.

The white ground, charcoal text and self-hosted Geist hierarchy remain established. Pastel blue, lavender and periwinkle supply atmosphere; the deeper blue-purple action accent keeps text and controls readable. Glass is selective: 22px-blurred header, 20px-blurred skill groups/contact and abstract project material. Experience, education and credentials stay flat. The same ten skills form four readable groups; at 375px and below they stack into one column, while 390px retains two. All five roles, three education records, 17 credentials and four award records remain available.

Projects retains the centred panel and neighbouring peeks. All three light pastel abstract previews say Coming soon and identify themselves as placeholders until real project facts/assets are supplied. Swipe, pointer drag, horizontal trackpad input and keyboard arrows commit one panel, with 450ms sliding feedback. Dots indicate position; there are no carousel buttons or autoplay. Projects is omitted from browser printing.

Credential category filters, trimmed search, a polite live count and empty-state reset work immediately. Default matching records are all visible. Anchor navigation tracks the current section and focuses destinations; direct section URLs work. Slow 32s ambient movement and 28s pane drift remain local to the hero. Fine pointers can move skill/contact reflections; touch and reduced motion skip that effect. Selected skill panels lift gently on eligible hover. Reduced motion removes animations/transitions and keeps reveals visible. Reduced transparency makes selected glass opaque without blur. Browser printing includes all 17 credentials independently of filters and simplifies glass to plain reading content.

Applied Design Taste Frontend, Impeccable and UI UX Pro Max for the current refinement; earlier work also used Emil Design Engineering. The [Apple analysis in VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/apple) remains a design reference, with its source and MIT license in `docs/design-references/`. This is an independent website.

`PRODUCT.md` records product context; `.impeccable/surfaces/src-app-jsx.md` records the current surface direction. `DESIGN.md` and `.impeccable/design.json` document the current source-derived tokens and components. Verification results and current screenshots are in `docs/redesign-verification.md` and `.impeccable/review/glass-*.jpg`. Earlier cover/editorial captures describe superseded states. The processor image is no longer rendered; its provenance remains in `public/images/silicon-glass.provenance.json`. No new shipping raster asset was added for the glass refinement.

The earlier human-readable guide (`BRAND_GUIDELINES.md`) and generated `output/pdf/Chua-Jia-Sheng-Brand-Guidelines.pdf` predate the current palette/material refinement. The current visual specification is `DESIGN.md`; `python scripts/build_brand_guide.py` regenerates the separate guide artifact from its source and requires ReportLab, pypdf, fonttools and brotli.
