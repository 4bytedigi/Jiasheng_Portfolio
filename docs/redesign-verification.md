# Blue-purple glass portfolio refinement

Verified on 12 October 2026 (Asia/Singapore), locally and in the production browser.

The approved brief refines the existing portfolio with Apple-inspired minimalism, soft blue-purple light and selective glass. The supplied Aero reference guides material and atmosphere. The prior centred Projects rail, gesture browsing without buttons and explicitly labelled placeholders remain authorised. No project facts, professional claims or new shipping raster assets were added. `src/profile.json` and the résumé PDF remain unchanged.

## Local checks

- Production build passes with the installed Vite CLI and bundled Node runtime.
- Widths 320, 375, 390, 768, 1024 and 1440px show no document overflow. Skills are one column at 320/375px and two at 390px; final 320/375px checks found no clipped skill list items. The floating header keeps all five anchors and the résumé download visible.
- The full name appears once in visible text, in the hero; navigation uses Portfolio. Hero actions reach Experience and Contact.
- The flat timeline is ordered 2026, 2025, 2024, 2022. Both 2025 roles retain dates and newest-first order. All five roles/responsibilities, three education records, ten skills, 17 credentials and four award records remain available. The grouped academic record preserves both original annual awards. Titles, employers, dates, qualifications, providers, IDs, locations and contact details remain sourced from the existing profile.
- Material checks confirm a 22px-blurred header and 20px-blurred skill/contact panels. Four skill groups preserve the original ten items. Experience, education and credentials remain flat; boxed awards remain.
- Measured contrast is 5.91:1 for the primary white/action pairing and 5.76:1 for secondary text on white. The worst checked lavender pairing was 4.66:1. These measurements cover the checked colour pairs, not every possible animated/background pixel.
- Credential Communications filtering returns six entries. Searching for `network` returns three. Empty-result reset restores all 17 and focuses search. Matching records remain visible without expansion.
- Keyboard carousel browsing commits one panel. The authorised rail retains no buttons and no autoplay, 24px horizontal pointer-release and 28px horizontal-wheel thresholds, 450ms feedback and loop rebasing. Gesture tests from the prior rail verification remain applicable to that retained implementation; physical touch/trackpad gestures were not separately automated in this refinement.
- Anchor links focus their destinations, direct section URLs work, current-section navigation remains discreet and visible keyboard focus is retained.
- Reduced-motion and reduced-transparency branches were activated through a temporary local QA server that selects compiled CSS media branches and the JavaScript motion-preference branch. This was not real OS preference emulation. Observed results: no hero animation, zero carousel transition duration, automatic rather than smooth anchor scrolling, reveal opacity 1, hidden hero atmosphere and solid white glass without backdrop blur. Keyboard carousel browsing remained immediate.
- The activated print stylesheet shows all 17 print credentials and ten skills, retains role descriptions and omits Projects. Glass becomes plain white content without blur/shadow. Physical print pagination was not separately checked.
- The résumé PDF SHA-256 is `7136ca5070b67e1180187a8924aed2ae14efa8d442af105a0a50ba42f43fb0b0`.
- One static design-detector pass reported the existing Geist familiarity warning and advisories about documented colour/radius vocabulary. Geist is an established self-hosted face; the refined material values are documented in `DESIGN.md` and `.impeccable/design.json`.

## Finish review

The independent source/screenshot review initially identified possible narrow-phone skill clipping as a material P2 finding. The final implementation switches skills to a single column at 375px and below. Fresh 320px screenshot and layout evidence resolved that finding; the finish verdict is Ship for the reviewed refinement. This verdict is scoped to the source/screenshot review and the checks above, not an assertion that every device, physical gesture or print layout has been tested.

Current local evidence in `.impeccable/review/`: `glass-desktop.jpg`, `glass-mobile.jpg`, `glass-skills.jpg`, `glass-skills-mobile.jpg`, `glass-skills-320.jpg`, `glass-contact.jpg`, `glass-contact-mobile.jpg`, `glass-experience.jpg`, `glass-projects.jpg` and `glass-achievements.jpg`. Earlier cover/editorial screenshots are not evidence for this material refinement.

## Production verification and deployment

The latest UI source was published to GitHub `main` as `b93689ac8a9b8b76b225ef2bd18fa7e3dd59f37c`. The linked `jiasheng` project in [the server manager](https://server.4bytedigi.com) has Redeploy enabled and watches `main` automatically every minute under the `4bytedigi` GitHub account. The final manager check showed source `b93689a` as Ready and the project as Live. Settings confirmed Vite/React, `npm run build`, `dist`, `main` and automatic deployment. The manager evidence is `.impeccable/review/glass-server-ready.jpg`.

The production browser at [jiasheng.4bytedigi.com](https://jiasheng.4bytedigi.com) confirms the current Portfolio./glass UI. Its `/assets/index-Dsn8vxCG.js` and `/assets/index-Bsu4J28_.css` references exactly match the current local production build references. This establishes matching asset references, not a full HTTP byte-hash comparison of every served file.

Production desktop at 1440px and mobile at 390px show no document overflow. The browser confirmed one visible full name, five roles, ten skills, 17 credentials and a 20px contact blur. Projects keyboard browsing moved placeholder 1 to 2. Communications filtering returned six, `network` search returned three and All/reset restored 17. No browser error or warning logs were observed. A browser-downloaded production résumé matches the SHA-256 above. Current production screenshots are `.impeccable/review/glass-live-desktop.jpg` and `.impeccable/review/glass-live-mobile.jpg`.

A raw Python HTTP request returned 403, so full public HTTP file byte-hash verification was not performed for this release. The production browser and download provide the current evidence. The earlier unavailable SSH alias is not a blocker for this server-manager publication. `docs/deployment.md` describes the original 10 October Caddy/tunnel installation; no current host runtime, systemd or origin-port changes were verified in this refinement.
