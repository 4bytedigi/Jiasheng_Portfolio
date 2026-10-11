# Résumé homepage

Mode: Read. Route: `/`. React + Vite; code-led redesign requested 10 October 2026.

The reader is a recruiter or professional contact evaluating Chua Jia Sheng. They need to understand his current work, engineering background and education, browse qualifications, and download his résumé or visit LinkedIn. Personal claims remain in verified `src/profile.json`. The existing PDF stays unchanged.

## Direction contract

THESIS: A personal engineering profile with the clarity of an Apple product overview. Replace the split name/illustration hero and credential cards with a centered identity, visual overview, career reading column and searchable credential list.

OWN-WORLD: White and #f5f5f7 surfaces, #1d1d1f type, #0066cc actions. Self-hosted Geist at 400 and 600. Broad display type, compact metadata, 18px overview corners and pill actions. The silver-and-glass processor gives material depth; navigation translucency serves scrolling.

STORY: Understand the person, connect his hardware experience, current DIS work and NTU study, then read experience, education, qualifications and recognition. Finish with a real LinkedIn action.

FIRST VIEWPORT: A 72px navigation bar; centered 96px name and 28px role; two actions below an engineering introduction. A 1.45:1 overview grid begins in the first viewport: hardware illustration left, NTU and DIS factual tiles right. Mobile stacks the overview.

FORM: Assigned candidate 3, premium technology product overview, seed 622f9f85. Grounded candidates: academic prospectus, engineering annual report, premium technology overview, editorial CV, museum object label, qualification catalog, monochrome identity sheet. The user's Apple/light reference pins the visual family and explicitly authorizes this redesign using the added references. No approved comp or quality-bar card adopted.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Reference decisions

VoltAgent's Apple DESIGN.md and MIT license are in `docs/design-references`. Adopt white/soft-gray surfaces, ink, Action Blue, 17px introduction, 400/600 type hierarchy, pill controls and shadow-free chrome. Keep the requested light navigation and light sections.

UI UX Pro Max's portfolio query returned Brutalism, rejected as incompatible. A focused query returned Minimalism & Swiss Style: adopt reading hierarchy, grid, semantic controls, visible focus and reduced motion. Its React search supports semantic controls; modal trapping is inapplicable to the inline menu.

Roll challengers declined on audience identification and clarity: high-density Japanese web, botanical folio, iridescent cloud, sneaker archive, depot blind and film cutting bench. Transferable disciplines: findability, chronology, limited saturation, complete indexing, reliable current state and access to older entries. Implemented through anchors, career sequence, one accent, searchable courses, active navigation and full experience.

## Signature interaction

Instant category and text filtering of 17 qualifications with live count, course labels, empty state and reset. Mobile menu supports Escape and focus on selected section. One initial identity entrance; content remains available without animation. Reduced-motion and transparency fallbacks.

## Design dials

DESIGN_VARIANCE 5, MOTION_INTENSITY 3, VISUAL_DENSITY 3. Centered composition follows the pinned Apple reference. Native CSS inspiration, not an official Apple package.
