# Chua Jia Sheng | Professional résumé

React + Vite résumé website with a white Apple-inspired editorial design. Uses self-hosted Geist, Phosphor icons and native CSS.

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

Deploy the generated `dist/` directory to any static host. No API keys, backend, or account configuration are required.

The site is live at [jiasheng.4bytedigi.com](https://jiasheng.4bytedigi.com) on the existing 4bytedigi Ubuntu server. Server configuration and verification results are recorded in [docs/deployment.md](docs/deployment.md).

## Edit the résumé

Professional details live in `src/profile.json`. These are based on the exact profile at https://www.linkedin.com/in/chua-jia-sheng/ (retrieved 10 October 2026), not the similarly named CPF Board professional.

Professional facts were read from the supplied profile through the signed-in browser, including the work history, education and all 17 credentials. Descriptions are concise paraphrases of his profile. The NTU degree is in progress, with the listed 2030 end date treated as expected completion. The Udemy Network+ entry is explicitly a course completion, not a claim to hold the CompTIA certification. No private contact details, invented performance figures, or proficiency scores are included.

The PDF uses the same profile data. With Python and `reportlab`/`pypdf` installed, run `python scripts/build_resume.py` after editing the data. The script writes `output/pdf/Chua-Jia-Sheng-Resume.pdf` and the website download at `public/Chua-Jia-Sheng-Resume.pdf`. Rebuild the site after regenerating the PDF.

The website includes category filters, credential search, keyboard-accessible anchor navigation, reduced-motion support, local fonts, and a direct PDF download. Contact links open the supplied LinkedIn profile.

## Design

The current frontend is a white Apple-inspired editorial résumé. The name appears once in the hero, followed by concise About copy, fully visible experience responsibilities, an Apple TV-style Projects preview, Skills & education, grouped credentials/achievements and a direct LinkedIn invitation. Self-hosted Geist supplies the 400/500/600 hierarchy; cobalt actions and hero accents, flat reading rows, minimal dividers, a soft-gray achievement panel with white icon cards and a restrained translucent sticky header define the reading interface. Three abstract blue project-preview treatments are explicitly labelled placeholders until real project details are supplied.

Applied Design Taste Frontend, Impeccable, Emil Design Engineering and UI UX Pro Max. The frontend also draws on the [Apple analysis in VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/apple), a design reference collection. The source reference and MIT license are saved in `docs/design-references/`. This is an independent website, not an Apple product.

`PRODUCT.md` records the brief, `.impeccable/surfaces/src-app-jsx.md` records the current direction, and `DESIGN.md` plus `.impeccable/design.json` document the source-derived system. The earlier typographic Portfolio cover, acrylic decorations and horizontal timeline have been superseded by this quieter reading layout. The decorative processor asset is no longer rendered; its original brief remains in `public/images/silicon-glass.provenance.json`.

Experience uses reverse-chronological vertical year groups. All matching credentials render immediately, with category filters, search, a live result count and an empty-state reset. Explicit section headings keep the page easy to scan. Compact navigation keeps all five anchor links visible, with scroll-tracked active states and direct section URL support. Projects uses a centered panel with neighboring peeks and direct swipe, pointer-drag, horizontal trackpad and keyboard-arrow browsing. A short horizontal swipe commits one panel with 450ms sliding feedback; dots indicate position without acting as controls. There are no carousel buttons or autoplay. Projects is omitted from browser printing. Hero and scroll reveals support reduced motion, while the header has an opaque transparency fallback. Browser printing includes visible responsibilities and all 17 credentials independently of screen filters. Browser verification results and desktop/mobile screenshots are in `.impeccable/review/`.

The human-readable brand guide is in `BRAND_GUIDELINES.md`, with a shareable PDF at `output/pdf/Chua-Jia-Sheng-Brand-Guidelines.pdf`. Regenerate it with `python scripts/build_brand_guide.py` (requires ReportLab, pypdf, fonttools and brotli).
