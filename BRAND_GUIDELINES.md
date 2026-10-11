# Chua Jia Sheng - Brand guidelines

Personal résumé identity. Version 1.0, 10 October 2026.

## Brand idea

**Engineering with product clarity.** Present Jia Sheng's professional record with clear hierarchy, open space and precise language. The audience is IT recruiters and professional contacts.

The character is capable, calm and direct. Make the person, current role and qualifications easy to understand. Material depth belongs in the computing illustration; the interface stays quiet.

## Name and mark

- Use **Chua Jia Sheng** for the full professional name; **Jia Sheng** is the compact navigation name.
- The existing mark is lowercase **js.**, in white Geist on a near-black rounded square. Preserve the period and proportions.
- Website specification: 32px square, 9px corner radius, 22px type, weight 600, optical vertical adjustment. Name and mark have an 11px gap.
- Give the mark at least one quarter of its width as clear space. The normal website size is 32px; recommended print minimum is 8mm.
- Place the mark on white or soft gray. Use the near-black square to preserve contrast. Do not stretch, rotate, outline or add shadows to the mark.
- Set the full name naturally. On small screens keep **Jia Sheng** together when the name wraps.

## Color palette

| Color | Hex | Role |
| --- | --- | --- |
| White | `#FFFFFF` | Main canvas, reading surfaces and text on primary actions |
| Soft Gray | `#F5F5F7` | Section bands, overview tiles and secondary actions |
| Near-Black Ink | `#1D1D1F` | Main text, headings, selected filters and compact résumé action |
| Secondary Gray | `#68686E` | Supporting descriptions, dates and metadata |
| Action Blue | `#0066CC` | Primary actions, links, focus outlines and input caret |
| Study Tint | `#ECF2F8` | Supporting education overview surface |

Supporting values: Action Blue hover `#0058B0`, dividers `#E3E3E8`, study text `#4D6276`. The complete component palette is recorded in `DESIGN.md`.

Use blue to identify an action. Keep reading surfaces white or neutral. Do not introduce decorative gradients, multiple saturated accents or glows. Use the established tinted text on tinted surfaces. Preserve readable contrast and visible keyboard focus.

## Typography

**Geist Variable**, self-hosted. Use weight **400** for body copy and controls, **600** for headings and strong labels. Use the platform sans-serif stack as a fallback.

| Role | Website size | Weight | Line height |
| --- | --- | --- | --- |
| Identity display | Fluid 58-96px; 47-68px on phones | 600 | 1.08 |
| Section heading | Fluid 34-48px | 600 | 1.10 |
| Professional role | Fluid 20-28px; 19-21px on phones | 400 | 1.30 |
| Entry title | 20px; credential titles 17px | 600 | 1.35-1.40 |
| Main introduction | 17px; 15px on phones | 400 | 1.60 |
| Detailed résumé copy | 14px | 400 | 1.60 |
| Buttons and links | 14px | 400 | Natural |
| Metadata | 12px base, 10-13px by component | 400 | Natural |

Use sentence case. Keep display tracking between -0.025em and -0.04em; use normal tracking for paragraphs. Use tabular numerals for dates and counts. Keep factual reading paragraphs near 65 characters per line.

## Layout and shape

- Content shell: 1184px including gutters; 32px desktop, 24px mobile and 20px small-phone side padding.
- Section spacing: 112px on desktop and 76px on mobile. Give headings more space above than below.
- Desktop overview: asymmetric 1.45:1 grid, with a 20px gap. The reading sections use a heading column beside a wider content column.
- Below 768px, stack the overview and reading columns. Below 480px, stack the study and service tiles.
- Shape roles: 18px overview corners; 14px education rows; 10px inputs; 8px skill tags; fully rounded primary controls.
- Prefer flat reading lists and quiet dividers. Interface controls and cards do not need drop shadows.

Use the existing rhythm of 8, 12, 20, 24, 32 and 48px for local spacing. Do not shrink text to preserve a desktop arrangement on a phone.

## Imagery and icons

The silver-and-glass processor is a decorative illustration of computing. It is not a photograph of Jia Sheng's work or a completed project. Keep the cool studio light, silver material and white/soft-gray setting. Avoid neon, cyberpunk lighting, particles and decorative backgrounds.

Use Phosphor icons consistently. Hide decorative icons from assistive technology; label standalone icon controls. Do not replace structural icons with emoji. Do not fabricate a portrait, employer logo, qualification badge or military emblem.

## Interaction

- Primary actions are blue pills. Small utility actions and selected filters may use near-black.
- Provide hover and pressed feedback without changing layout. Button press scale is 0.96; the transition is 140ms.
- Focus: 3px Action Blue outline with a 5px offset. Never remove focus indication.
- Minimum mobile control target: 44px. Keep controls clearly separated.
- Credential filtering and search respond immediately. Keep the result count, empty state and reset action available.
- Keep the single introductory entrance subtle. Respect reduced motion and reduced transparency. Keyboard actions remain immediate.

## Writing style

Use short, direct, factual sentences. Lead with the person's role, qualification or work performed. Avoid inflated proficiency claims and unsupported performance figures.

Good examples:

- “Computer Engineering undergraduate at NTU. Expected completion 2030.”
- “Collaborated with university researchers on humidity sensor fabrication and microcontroller integration.”
- “CompTIA Network+ N10-009 - 2026. Udemy course completion.”

Controls name their action: **Download résumé**, **View LinkedIn**, **View all 17 credentials**, **Reset search**.

Preserve the distinction between a professional certification and completing a training course. Preserve “expected” for the degree completion date. Use the exact verified job titles; do not infer additional responsibilities, availability or expertise.

## Sources and maintenance

The implemented identity is defined by `src/App.jsx`, `src/styles.css` and `DESIGN.md`. Professional facts live in `src/profile.json`. The existing raster's exact generation brief is in `public/images/silicon-glass.provenance.json`.

Visual inspiration: the [Apple reference in VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/apple), saved with its MIT license under `docs/design-references/`. This personal identity uses its own name and mark.

Update these guidelines when durable brand decisions change. Regenerate the PDF with `python scripts/build_brand_guide.py`.
