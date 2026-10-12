---
version: 1
slug: "src-app-jsx"
primary_target: "src/App.jsx"
related_targets: ["src/styles.css","src/print.css"]
---

# Editorial personal portfolio refinement

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
