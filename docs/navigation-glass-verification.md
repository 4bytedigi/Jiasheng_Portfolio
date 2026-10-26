# Navigation glass refinement

## Clearer glass and Education update

27 October 2026. A follow-up requested more visible glass and a redesigned Education section. The bar now uses a 12–28% translucent fill, 18px blur, 210% saturation, 1.1 brightness, brighter rim highlights and darker medium-weight navigation labels. Education uses the shared glass material: a full-width NTU feature followed by NYP and Woodgrove cards. All three stack on phones, and the profile facts are unchanged. Print removes the card decoration and restores plain date/text columns.

Desktop (1440px), tablet (768px) and phone (390px) layouts were checked for overflow and the presence of all three school records. Mobile retains five 44px navigation targets. The production build and whitespace checks passed. Screenshot evidence is `.impeccable/review/education-glass-desktop.jpg` and `education-glass-mobile.jpg`. Print styles were inspected directly; the downloadable resume PDF was not changed.

## Initial glass pass

27 October 2026. The user requested an Apple-inspired glass treatment for the floating navigation.

The bar now combines a lighter translucent fill, a 32px backdrop blur, 180% saturation, mild brightness, a static sheen and two fine highlight edges. Its shadow is softer, and selected navigation links and the resume action share the glass treatment. The effect is a CSS web approximation. Decorative layers ignore pointer events. Reduced-transparency and unsupported-blur fallbacks retain an opaque reading surface and remove the highlight layers.

The production build and whitespace checks passed. Browser checks at 1440px and 390px found no horizontal overflow. Upward scrolling restores the expanded bar. Mobile retains all five 44px navigation targets and the 20px outer radius. Activating Qualifications still focuses the existing education destination. Browser warning/error logs were empty. The changes introduce no JavaScript, dependencies or continuous animations. Preference fallbacks were inspected in CSS, not emulated as operating-system settings.

Screenshots: `.impeccable/review/navigation-glass-desktop.jpg` and `navigation-glass-mobile.jpg`.
