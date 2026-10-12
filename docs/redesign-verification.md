# Blue-led Apple portfolio refinement

Verified on 12 October 2026 (Asia/Singapore), locally and in the production browser. Prior purple and subdued-glass releases are retained below as dated history.

The latest user steering requests more blue and more Apple-inspired restraint, using cyan/mint/blue/pale-cyan references (`#6dd3f7`, `#e6f4f4`, `#7ab4f9`, `#bbebfb`) and only a little lavender. This supersedes the preceding purple-dominant iteration. Bright white glass, lighter blue shadows, 24px hero corners and a clear blue primary CTA with white lettering make the approved change concrete. Factual copy, structure and interactions remain. `src/profile.json` and the existing downloadable résumé PDF are unchanged; no claims, project facts or shipping raster assets were added.

## Current local checks

- Production build passes. Current build assets are `index-CV8JJfhD.js` and `index-DNpNSAC1.css`.
- Widths 320, 375, 390, 768, 1024 and 1440px show no document overflow. Skills use one column at 320/375px and two at 390px. The latest contact screenshot checks the 320px layout. All five navigation anchors and résumé download remain visible.
- The full name appears once in visible text. All ten original skills remain chips under four flat groups. The flat timeline remains 2026, 2025, 2024, 2022, retaining both dated 2025 roles newest first. All five roles/responsibilities, three education records, 17 credentials and four award records remain. The grouped academic record preserves both original annual awards. Titles, employers, dates, qualifications, providers, IDs, locations and contact details remain sourced from the original profile.
- Material source confirms 28px panel/header/chip blur, 24px project/caption blur and 20px button/contact-action blur. Shared glass white fill is 62%, bright edges 80%; primary CTA has a 45%-white border. Offset shadows now use lighter blue. Hero inset is 50px/58px on desktop and 28px/24px on phones; radius is 24px throughout. Experience, Education and credentials remain flat; boxed achievements remain.
- Checked contrast pairs measure 4.79:1 for white text on the lighter primary-blue stop `#1473cf`, 5.32:1 for interactive blue `#1765ad` on mint `#e6f4f4`, and 5.57:1 for secondary text `#566171` on mint. These are measured colour pairs, not a claim about every translucent, animated or composited pixel.
- Keyboard rail browsing moved placeholder 1 to 2. The unchanged rail retains one-panel commits, no buttons/autoplay, 24px pointer-release and 28px horizontal-wheel thresholds, 450ms feedback and loop rebasing. Retained credential controls previously returned six Communications entries, three `network` entries and reset to 17; those results were verified in the preceding unchanged interaction implementation. Physical touch/trackpad gestures were not separately automated for this palette refinement.
- Browser checks reported no error or warning logs. Visible focus, destination focus, direct section URLs and current-section navigation remain in the source.
- Latest reduced-motion/transparency runtime branches were activated through a temporary compiled QA static server selecting CSS media branches and the JavaScript motion-preference branch. This was not real OS preference emulation. Observed hero fill was `rgb(244, 249, 252)` (`#f4f9fc`), blur `none` and animation `none`; the primary action remained `rgb(7, 100, 187)` (`#0764bb`) with white lettering. Source removes animations/transitions, keeps reveals visible, uses automatic anchors and immediate keyboard rail commits.
- `src/print.css` is unchanged from the preceding purple refinement. Its earlier activated branch showed all 17 print credentials and ten skills, retained role descriptions, omitted Projects and set hero panel inset to zero. Glass prints as plain white reading content without blur/shadow. Physical print pagination was not separately checked.
- The unchanged local résumé PDF SHA-256 is `7136ca5070b67e1180187a8924aed2ae14efa8d442af105a0a50ba42f43fb0b0`. The preceding production download matched it; the PDF has not been downloaded again for this blue revision.
- The existing `.impeccable/review/purple-detector.json` is a prior-iteration static scan, not a fresh blue runtime result. It reported the established Geist familiarity warning and advisories about approved colour/radius vocabulary. Current source-derived blue tokens and components are documented in `DESIGN.md` and `.impeccable/design.json`.

## Current finish review

The independent fresh source/reference/screenshot review returned **Ship** for the final blue refinement. The corrected desktop screenshot is a valid 1440×900 capture. The reviewer found no material UI defects: blue/cyan/mint lead, lavender is faint, white glass is brighter, shadows are lighter and the blue CTA matches the latest Apple-inspired direction. This verdict is scoped to source, references and the requested screenshots, with the checks above; it does not certify every real gesture, OS preference, composited pixel or deployment property.

Current local evidence in `.impeccable/review/`: `blue-desktop.jpg`, `blue-mobile.jpg`, `blue-skills.jpg`, `blue-skills-mobile.jpg`, `blue-contact.jpg`, `blue-contact-mobile.jpg`, `blue-experience.jpg` and `blue-projects.jpg`. Desktop/mobile hero captures use 1440/390px; mobile Contact checks 320px. Older purple/glass/cover/editorial captures describe previous iterations.

## Current production verification and deployment

The final blue UI was published to GitHub `main` as `5bbf0b7a2fa6287f25822aab371e51c5405d9cb6`; a fetched-source comparison confirmed all three UI files match. The linked `jiasheng` project in [the server manager](https://server.4bytedigi.com) watches `main` automatically every minute under the `4bytedigi` GitHub account. The manager showed `5bbf0b7` Ready after a 23-second deployment and the project Live. Evidence: `.impeccable/review/blue-server-ready.jpg`.

The public browser at [jiasheng.4bytedigi.com](https://jiasheng.4bytedigi.com) confirmed `/assets/index-CV8JJfhD.js` and `/assets/index-DNpNSAC1.css`, exactly matching the current local production build references. This establishes matching asset references, not a full HTTP byte-hash comparison of every served file. The public DOM confirmed interactive blue `#1765ad`, one visible full name and ten skill chips.

Production desktop at 1440×900px and mobile at 390px show no document overflow. The settled desktop capture places the hero at the intended 160px left inset. Keyboard rail browsing moved placeholder 1 to 2; `network` search returned three and clearing restored 17. Current production screenshots are `.impeccable/review/blue-live-desktop.jpg` and `.impeccable/review/blue-live-mobile.jpg`. These valid captures were saved and viewed after replacing an initial unsettled desktop capture.

The PDF is unchanged locally and a download in the earlier subdued-glass release matched the preserved hash; it was not downloaded again for this blue revision. No current host runtime, systemd or origin-port changes were verified. `docs/deployment.md` remains the original 10 October Caddy/tunnel installation record.

## Prior purple production history — 12 October 2026


The three changed UI files were published to GitHub `main` as `a35b75d6e0f217fe45720659a1a15d8034e6eae1`; a fetched-source comparison confirmed no difference for those files. The linked `jiasheng` project in [the server manager](https://server.4bytedigi.com) watches `main` automatically every minute under the `4bytedigi` GitHub account. The manager showed `a35b75d` Ready after a 24-second deployment and the project Live. Evidence: `.impeccable/review/purple-server-ready.jpg`.

The public browser at [jiasheng.4bytedigi.com](https://jiasheng.4bytedigi.com) confirmed `/assets/index-CECGFsgi.js` and `/assets/index-NXiXcz9f.css`, matching that revision’s local production build references. This establishes matching asset references, not a full HTTP byte-hash comparison of every served file.

Production desktop at 1440px and mobile at 390px show no document overflow. Public DOM checks confirmed one visible full name, ten skill chips and 28px hero blur. Keyboard rail browsing moved placeholder 1 to 2; `network` search returned three and clearing restored 17. No browser error or warning logs were observed. Prior production screenshots are `.impeccable/review/purple-live-desktop.jpg` and `.impeccable/review/purple-live-mobile.jpg`.

The PDF is unchanged locally and a browser download in the preceding release matched the SHA-256 above. It was not downloaded again for this amplification. No host runtime, systemd or origin-port changes were verified; `docs/deployment.md` remains the original 10 October Caddy/tunnel installation record.

## Earlier subdued-glass production history — 12 October 2026

Before this amplification, GitHub `main` was recorded at `4728cbf`, and the earlier subdued-glass UI was published from `b93689ac8a9b8b76b225ef2bd18fa7e3dd59f37c`. The manager showed that UI source Ready/Live. Production referenced `/assets/index-Dsn8vxCG.js` and `/assets/index-Bsu4J28_.css`, matching that earlier local build. Desktop/mobile browser checks confirmed the earlier glass UI, with one visible full name, five roles, ten skills, 17 credentials and 20px contact blur. Rail keyboard browsing, six Communications results, three `network` results and reset to 17 were checked. A production résumé download matched the preserved PDF hash. Evidence remains in `glass-server-ready.jpg`, `glass-live-desktop.jpg` and `glass-live-mobile.jpg`.

That prior finish review resolved narrow-phone skill clipping by using one column at 375px and below and returned Ship for its own revision. The prior raw Python HTTP request returned 403, so full public HTTP file byte-hash verification was not performed. These are historical observations; the current purple release evidence is recorded above.
