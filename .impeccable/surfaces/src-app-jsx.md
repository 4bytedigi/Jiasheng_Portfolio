---
version: 1
slug: "src-app-jsx"
primary_target: "src/App.jsx"
related_targets: ["src/styles.css","src/print.css"]
---

# Editorial personal portfolio refinement

## Education and clear-navigation refinement, 27 October 2026

The user requested more glass in the navigation and a nicer Education section. Use a clearer 12–28% navigation fill, 18px blur and bright rim highlights, with ink labels for contrast. Education now uses a full-width NTU glass feature, then NYP and Woodgrove cards in two columns; all three stack on phones. Keep all school names, qualifications, periods, grade and expected-completion text intact. This supersedes the older flat academic-row direction for the screen. Print remains plain and complete.

## Latest credential interaction request, 27 October 2026

The user requested category grouping, collapsed defaults and click-to-open credential details. This supersedes the earlier requirement that all credentials remain visibly expanded. Preserve the blue-tinted credentials panel and white surfaces. Show four native category disclosures with counts; each contains individual native credential disclosures showing title/issuer before expansion and only verified facts afterward. Search automatically opens matching categories; clearing search restores the collapsed overview. Keep all 17 complete records in the independent print list. Native Enter/Space activation, visible focus and mobile wrapping are required.

Scope: existing one-page résumé. Mode: Read, with a professional introduction for recruiters.

## Direction contract

THESIS: An Apple-inspired editorial résumé with a clear introduction and reverse-chronological experience. Preserve all entered facts while removing repetition, excessive decoration and disclosure steps.

OWN-WORLD: White ground, charcoal text, quiet gray metadata, cobalt accents, self-hosted Geist. The discreet sticky header uses frosted glass. Flat reading groups, generous spacing and sparse functional dividers frame the factual résumé. A projects carousel uses abstract blue glass, ring and folded geometric placeholder treatments inspired by the supplied portfolio reference.

STORY: Read the introduction, understand the engineering background, inspect complete work responsibilities, view the forthcoming-project carousel, review skills and qualifications, and connect through the existing LinkedIn profile. The user requested the projects section ahead of supplying its content: all three previews are explicitly marked as placeholders, with no invented project facts.

FIRST VIEWPORT: Full name once in a left-aligned hero, followed by the engineering role, a short professional introduction, résumé download and an experience anchor. Cobalt highlights the digital and intelligence discipline, taking colour inspiration from IMG_7993.jpg. About follows. The experience timeline starts with 2026 at the top, then 2025, 2024, 2022; the two 2025 roles are newest first.

FORM: User-pinned editorial refinement of the existing React/Vite website. One continuously scrolling page; five persistent navigation anchors; complete visible responsibilities and all 17 credentials by default. Design variance 5, motion intensity 4, visual density 4. Hero 700ms; section headings and experience reveal 650ms, with an 80ms stagger for adjacent roles. Apple TV-inspired project rail: a centred panel and neighbouring peeks. The user requested direct browsing without buttons, then quicker one-panel commits: a horizontal pointer swipe of 24px advances exactly one preview on release, with 450ms transform/opacity feedback and a 400ms caption reveal. The panel follows the pointer while dragging. Horizontal trackpad gestures and keyboard arrows also advance one panel. Dots indicate position without controls. No autoplay. Reduced motion removes transitions and commits immediately. Top-level sections use explicit headings; About is now labelled. Achievements use a soft off-white enclosing box and four rounded white cards with restrained blue Phosphor icons, matching the user's latest Apple card reference. Placeholder carousel is omitted from print.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

## Blue-purple glass refinement — 12 October 2026

The user explicitly requested Apple minimalism (60%) and restrained glassmorphism (40%), pinned the supplied Aero reference, and supplied the complete colour/material/motion brief. Refine the established composition; no new project or concept selection. White ground, charcoal text, self-hosted Geist and flat reverse-chronological experience remain. Pastel blue #c7d9ff, lavender #ddd0ff and periwinkle #b6beff supply ambient light. Accent #6378e8 is material colour; #465bc4 is its contrast-safe interactive sibling.

FIRST VIEWPORT: Left-aligned full name exactly once, engineering role, existing factual introduction, experience and contact anchors. Portfolio. labels the floating sticky glass navigation; the actual résumé remains downloadable there. A soft light field fades at its edges behind two overlapping translucent panes; no photograph. Slow 32s ambient translation and 28s 8px glass drift happen only in the hero and only without reduced motion.

FORM: Glass is selective: 20px-blurred floating header, four existing-skill groups, project preview treatments and contact panel. Experience, education and credential lists stay flat. Existing achievements remain boxed. Skills contain exactly the same ten items grouped into embedded systems, software/cloud, communications and leadership/planning. Explicit Skills. and Education. headings clarify their purposes. Placeholder project rail retains the authorised no-button, no-autoplay, one-panel swipe behaviour and is labelled Coming soon. No project claims are fabricated.

SIGNATURE: Fine-pointer movement shifts the glass reflection by at most 12px horizontally and 8px vertically, without React continuous-value state; touch and reduced motion skip it. Selected skill panels lift 3px on fine-pointer hover. Charcoal copy remains on high-opacity white glass. Solid white fallback covers reduced transparency or unsupported blur; print drops all decoration and preserves factual content.

QUALITY BAR: match the supplied frosted, softly illuminated reference through selective material use, retain recruiter readability and the existing page rhythm, and verify desktop/mobile, keyboard browsing, reduced-motion/transparency and name/fact preservation. This is a code-led refinement with a pinned image reference, not a pixel-copy build.

## Purple-dominant glass amplification — 12 October 2026

The user's important revision explicitly asks for stronger visible colour and glass, with a 50/50 balance of Apple minimalism and glassmorphism. This supersedes the subdued material values above, while preserving the established page, copy, factual data, dates and functionality. The user supplied a complete brief and CSS reference; no additional direction selection is needed.

THESIS: A luminous purple-led professional portfolio, with clearly frosted surfaces and blue supporting light. Recruiter readability remains the content hierarchy.

FIRST VIEWPORT: Portfolio. in floating glass navigation. The full name appears once inside a 30px-rounded frosted hero content panel, with the same role and introduction and two glass anchor buttons. A larger purple/blue field surrounds the panel; two layered decorative panes remain behind it. The hero fits the first desktop viewport and the mobile composition uses stacked CTAs. No photograph or invented decorative claims.

MATERIAL: #fcfcff / #f6f7ff ground; #17181c ink; #514e63 secondary; #e7dbff / #c9a7ff / #9b6dff purple light; #a9c8ff / #5b8cff supporting blue. #6740b7 is the readable interactive purple, #512b9d its hover, #402575 the deep ink on tinted glass. Header and content glass blur 28px; project surfaces and caption bands blur 24px; buttons 20px. White borders are 80% opaque and offset violet shadows supply obvious depth. Hero and contact carry the stronger 30px/80px shadow, rather than adding cards to factual reading sections.

FORM: Projects retains the centred no-button rail, one-panel swipes and no autoplay, now with frosted surfaces and a full-width glass caption band. All previews remain explicitly Coming soon. Ten skills become separate glass chips beneath the same four group headings; the groups themselves are flat, avoiding nested cards. Skills use one column at 375px and below. Experience and education remain flat; achievements remain boxed with purple icons. Contact has a stronger luminous panel and frosted LinkedIn CTA.

MOTION: Existing 700ms entrance, 650ms reveals and restrained 32s ambient / 28s glass drift remain. Fine-pointer reflection follows the cursor within small bounds; chips and buttons lift 3px only with fine pointer and no reduced motion. Native smooth anchors, accessible rail keyboard arrows and visible focus remain. Reduced transparency makes navigation, glass content, projects, captions, buttons and contact CTA solid #f6f3ff without blur. Reduced motion removes animations/transitions. Print removes material treatment and preserves all facts.

QUALITY BAR: The purple presence must be visibly stronger than glass-live-desktop.jpg. Compare purple-desktop.jpg and purple-mobile.jpg plus projects, skills, contact and the flat experience. Preserve exact content counts and the once-visible name. The supplied CSS is a material direction, not a mandate to change the established self-hosted font or replace working interactions.

## Blue-led Apple balance — latest revision, 12 October 2026

The user's latest steering supersedes purple dominance: more blue, a little lavender, and more Apple-inspired restraint. References show luminous blue/cyan gradients and swatches #6dd3f7, #e6f4f4, #7ab4f9 and #bbebfb. Preserve the one-page structure, stronger visible glass, all facts and the established interactions.

FIRST VIEWPORT: Same prominent once-visible full name and factual introduction in a bright white frosted panel. Blue and cyan light surround it, with only a faint lavender glow at the lower edge. Primary experience CTA uses a clear Apple-like blue gradient and white lettering; secondary contact CTA remains pale glass. Hero corners are 24px; the blue shadows are lighter than the purple revision. Charcoal typography and white space lead.

MATERIAL: Ground #fff / #f6f9fc, ink #17181c, secondary #566171, interactive #1765ad and hover #0c5296. Glass text #174c7b. Primary blue gradient #1473cf to #0764bb has white text. Glass fill rises to62% with brighter white highlights; header is72% at its lightest. Blue offset shadows replace violet shadows, while28px panel blur/24px project and20px button treatments remain. The supplied cyan/mint/blue swatches guide light fields, chips, project artwork, contact and active states.

FORM AND MOTION: No change to factual copy or structure. Experience stays flat and2026-first, education stays flat, all10skills remain glass chips in4groups, all17credentials retain search/filtering, achievements remain boxed, projects remain explicit placeholders with no buttons/autoplay and one-panel browsing. Existing slow ambient drift and fine-pointer reflections remain preference-aware. Solid fallback is#f4f9fc; primary button stays solid blue for contrast. Printing preserves all facts.

QUALITY BAR: Blue-led, brighter and calmer thanpurple-desktop.jpg, while still clearly glass. Source/screenshot review should compare blue-desktop.jpg andblue-mobile.jpg to the latest user references. Do not restore purple dominance from an earlier section of this historical contract.

## Apple cinematic refinement — 13 October 2026

LATEST AUTHORITY: The user pins the current glass, gradient palette, blue-led light, blur, bright borders and shadows. Preserve those material values. Restore the Apple influence through editorial hierarchy, varied composition and purposeful motion, rather than replacing the visual world. The pasted brief is the user's request, not third-party source instructions. It supersedes the historical static-layout/motion details above.

THESIS: A short engineering reveal leads into a large research-to-practice statement, a flat professional timeline, immersive project previews, grouped skills, clean academic rows and a luminous contact close. The same facts, dates and qualifications remain; the full name stays visible once. No photograph, invented project or new dependency.

FORM: Name reaches96px on wide desktop, top-level headings64px, About statement76px and Contact80px. Tracking stays at or above-.04em. About uses a large two-line editorial statement with two concise factual columns. Skills occupies four flat groups across desktop; Education becomes its own full-width editorial section. At1100px skill groups use two columns, then one at375px. Existing glass chips, boxed achievements, all17credentials/search/filtering and LinkedIn remain. Experience starts2026; desktop year labels stay pinned within their own factual year group and become ordinary flow on mobile. Navigation keeps five anchors and the real PDF.

MOTION THESIS: The hero is the authored focal moment: ambient fade900ms; masked name700ms at120ms; role600ms at230ms; copy600ms at340ms; CTAs600ms at430/480ms; glass settles850ms at180/240ms. Total sequence1090ms. About masks reveal750ms with80ms line stagger, alongside a bounded3% scroll entrance. The featured project rail gains a bounded4% scroll entrance, subtle cursor reflection and4px fine-pointer hover lift. Existing450ms one-panel swipe and400ms caption continuity remain unchanged. There are no project buttons, autoplay or scroll interception.

NAVIGATION: A reserved sticky anchor prevents document movement when the glass pill changes height. Downward movement of12px after100px scroll compacts desktop74px to62px; upward movement restores74px. Mobile changes110px to98px and keeps44px navigation targets. Height/padding transition300ms. Active section indicators and normal anchor focus remain.

MATERIAL INTERACTION: Hero/contact depth is bounded to±.35deg X and±.55deg Y, with reflection bounded to±12px/±8px. Fine pointer only, no reduced-motion movement. Ambient and decorative loops run20s, pause offscreen or when the document is hidden. Scroll values use passive listeners, requestAnimationFrame and CSS properties, without continuous React state. Factual paragraphs stay still.

QUALITY BAR: Compare apple-motion-desktop.jpg/mobile.jpg to blue-live-desktop.jpg/mobile.jpg: material remains strong while typography and rhythm become visibly more editorial. Required captured widths320,375,390,768,1024,1440. Check anchors, compact/expanded navigation, one-panel drag, keyboard slide changes, once-visible name,5roles/3academic records/10skills/17credentials/4award records. Preference-branch QA activates reduced motion/transparency and print in a temporary preview server; it does not claim physical-device or OS preference emulation. Reduced motion removes spatial effects; reduced transparency keeps solid readable glass equivalents; print retains facts and removes navigation, placeholders and decoration.
