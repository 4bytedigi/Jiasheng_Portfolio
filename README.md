# Chua Jia Sheng | Professional résumé

React + Vite résumé website with a light Apple-inspired visual direction. Uses Geist, Phosphor icons, native CSS and a generated technology illustration.

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

The website includes category filters, expand/collapse controls, a keyboard-accessible mobile menu, reduced-motion support, local fonts, and a direct PDF download. Contact links open the supplied LinkedIn profile.

## Design

Applied Design Taste Frontend, Impeccable, Emil Design Engineering and UI UX Pro Max. The latter is installed at `C:/Users/pyies/.codex/skills/ui-ux-pro-max` and is available to subsequent Codex turns.

The redesigned frontend also draws on the [Apple analysis in VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/apple). That repository is a design reference collection, rather than an executable plugin. The source reference and its MIT license are saved in `docs/design-references/`. White and soft-gray surfaces, Action Blue, pill controls and the 400/600 type hierarchy are adapted for this résumé. This is an independent website, not an Apple product.

`PRODUCT.md` records the brief, `.impeccable/surface.md` records the new direction, and `DESIGN.md` describes the implemented system. The glass processor is an AI-generated decorative illustration, not a real project. Its original generation brief is in `public/images/silicon-glass.provenance.json`.

The frontend has a centered introduction, an engineering overview, a career timeline, separate education, and a searchable credential list with category filters and an empty-state reset. Browser checks use the in-app browser's Playwright API; results and desktop/mobile screenshots are in `.impeccable/review/`.

The human-readable brand guide is in `BRAND_GUIDELINES.md`, with a shareable PDF at `output/pdf/Chua-Jia-Sheng-Brand-Guidelines.pdf`. Regenerate it with `python scripts/build_brand_guide.py` (requires ReportLab, pypdf, fonttools and brotli).
