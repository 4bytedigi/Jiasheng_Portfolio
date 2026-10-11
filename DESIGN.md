---
name: "Chua Jia Sheng résumé"
description: "A light engineering profile with product-overview clarity and a readable professional record."
colors:
  page: "#fff"
  surface: "#f5f5f7"
  ink: "#1d1d1f"
  secondary: "#68686e"
  accent: "#0066cc"
  accent-hover: "#0058b0"
  line: "#e3e3e8"
  study-surface: "#ecf2f8"
  study-text: "#4d6276"
  current-surface: "#edf2f7"
  current-text: "#43556c"
  skill-line: "#d8d8de"
  skill-text: "#53535b"
  category-text: "#54545c"
  secondary-hover: "#e8e8ed"
  utility-hover: "#3b3b40"
typography:
  display:
    fontFamily: "'Geist Variable', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "clamp(58px, 7vw, 96px)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-.04em"
  headline:
    fontFamily: "'Geist Variable', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "clamp(34px, 3.7vw, 48px)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-.035em"
  lead:
    fontFamily: "'Geist Variable', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "clamp(20px, 2.25vw, 28px)"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "-.025em"
  title:
    fontFamily: "'Geist Variable', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "20px"
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: "-.02em"
  credential-title:
    fontFamily: "'Geist Variable', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "17px"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "-.02em"
  body:
    fontFamily: "'Geist Variable', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  button:
    fontFamily: "'Geist Variable', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "14px"
    fontWeight: 400
  label:
    fontFamily: "'Geist Variable', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "12px"
    fontWeight: 400
rounded:
  label: "5px"
  skill: "8px"
  input: "10px"
  school: "12px"
  education: "14px"
  surface: "18px"
  pill: "999px"
  circle: "50%"
spacing:
  inline: "8px"
  control-gap: "10px"
  row-gap: "12px"
  overview-mobile-gap: "16px"
  gutter-small: "20px"
  gutter-mobile: "24px"
  inset: "28px"
  gutter-desktop: "32px"
  heading-gap: "48px"
  section-mobile: "76px"
  section: "112px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.page}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "13px 23px"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "13px 23px"
  button-secondary-hover:
    backgroundColor: "{colors.secondary-hover}"
  button-utility:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.page}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "9px 16px"
  button-utility-hover:
    backgroundColor: "{colors.utility-hover}"
  tile-link:
    backgroundColor: "rgb(255 255 255 / 85%)"
    textColor: "{colors.ink}"
    rounded: "{rounded.circle}"
    width: "44px"
    height: "44px"
  search-input:
    backgroundColor: "{colors.page}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.input}"
    padding: "12px 14px 12px 39px"
  filter:
    textColor: "{colors.secondary}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "11px 15px"
  filter-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.page}"
    rounded: "{rounded.pill}"
  filter-hover:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
  skill-tag:
    textColor: "{colors.skill-text}"
    typography: "{typography.label}"
    rounded: "{rounded.skill}"
    padding: "9px 13px"
  category-tag:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.category-text}"
    rounded: "{rounded.label}"
    padding: "5px 8px"
  current-label:
    backgroundColor: "{colors.current-surface}"
    textColor: "{colors.current-text}"
    rounded: "{rounded.label}"
    padding: "4px 7px"
  study-card:
    backgroundColor: "{colors.study-surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.surface}"
    padding: "28px 30px"
  service-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.surface}"
    padding: "28px 30px"
  education-row:
    backgroundColor: "{colors.page}"
    textColor: "{colors.ink}"
    rounded: "{rounded.education}"
    padding: "28px"
  credential-row:
    textColor: "{colors.ink}"
    padding: "25px 4px"
  navigation:
    textColor: "{colors.secondary}"
  text-link:
    textColor: "{colors.accent}"
    typography: "{typography.button}"
---

# Design System: Chua Jia Sheng résumé

## Overview

**Creative North Star: "Engineering with product clarity."**

The user-approved redesign brings the clarity of an Apple-inspired product overview to a professional engineering profile. White space, soft-gray bands, dark neutral typography, and Action Blue establish a light and direct identity. The centered name introduces a visual overview before the detailed reading sections. This north-star phrase describes the implemented direction; it is not a separate brand name.

Geist supplies one typographic voice at weights 400 and 600. The silver-and-glass processor carries the material depth; navigation translucency supports scrolling. Chronology, structured education rows, and a searchable credential list make qualifications easy to inspect. Surface changes, alignment, and hairline dividers supply hierarchy without shadows on interface chrome.

**Key Characteristics:**
- White ground and soft-gray section bands.
- Centered identity followed by an asymmetric visual overview.
- Geist at 400 and 600, with generous display scale and compact metadata.
- Pill actions, rounded overview tiles, and flat reading lists.
- Immediate search and category filtering, visible focus, and preference-aware motion.

This replaces the prior system following the explicitly authorized frontend redesign. Source truth is src/App.jsx, src/styles.css, and src/print.css, checked against the redesign desktop and mobile captures. Frontmatter owns primitives; the sidecar carries behavior, responsive values, and previews. Professional facts remain in src/profile.json.

The [local Apple reference](docs/design-references/apple.DESIGN.md), from VoltAgent/awesome-design-md under its included MIT license, informed the light surfaces, action color, weight relationship, pill controls, and restraint. Its unimplemented components and values are not part of this system. Light navigation, Geist, résumé structure, and accessibility states are project-specific decisions. [Reference provenance](docs/design-references/README.md) records attribution.

## Colors

White, cool soft gray, and near-black form the reading palette. One saturated blue signals actions, and pale-blue tints support factual overview content.

### Primary

- **Action Blue** (accent): primary résumé and LinkedIn actions, text links, focus outlines, and search caret.
- **Action Blue Hover** (accent-hover): fine-pointer feedback on primary buttons.

### Neutral

- **White Ground** (page): canvas, education rows, and search field.
- **Soft Gray** (surface): education/contact bands, engineering/service tiles, secondary buttons, and category labels.
- **Near-Black Ink** (ink): main text, headings, selected filters, and the compact résumé action.
- **Secondary Gray** (secondary): descriptions, dates, labels, and inactive navigation.
- **Fine Divider** (line): list separators, search border, and section boundaries.
- **Study Tint** (study-surface / study-text): the pale-blue education overview and supporting text.
- **Current Role Tint** (current-surface / current-text): the factual current-role label.
- **Skill Neutrals** (skill-line / skill-text): outlined skill tags.
- **Category Gray** (category-text): credential category text on Soft Gray.
- **Hover Neutrals** (secondary-hover / utility-hover): secondary and compact action states.

**The Action Blue Rule.** Use the blue accent for links, primary actions, the input caret, and focus signals. Keep reading surfaces neutral or in the established pale study tint.

## Typography

**Display Font:** Geist Variable with the platform sans-serif fallback stack in the tokens.

**Body Font:** the same self-hosted family. No separate serif, display, or monospace family is implemented.

**Character:** broad, tightly tracked headings above open paragraphs and quiet metadata. The hierarchy is role-based rather than a mathematical ratio.

### Hierarchy

- **Display** (display): centered name, with a kept-together name segment and responsive wrapping.
- **Headline** (headline): balanced section titles.
- **Lead** (lead): the engineering role beneath the name.
- **Title** (title): experience entries and general third-level headings.
- **Credential title** (credential-title): qualification and recognition names with pretty wrapping.
- **Body** (body): introduction and section descriptions. Career paragraphs use 14px with a maximum measure of 65ch; the hero description has a maximum width of 630px.
- **Button** (button): primary/secondary labels and text links.
- **Label** (label): compact supporting text and controls. Local 10–11px metadata is not a body-copy default.

Desktop overview headings use 32px for engineering, 30px for study, and 28px for service. Contact uses a fluid 48–76px headline. Credential issuers use 13px; career organizations and descriptions use 14px. The compact résumé action uses 12px.

**The Two Weights Rule.** Use 400 for reading text and controls, and 600 for headings and identity. The implemented hierarchy does not need intermediate weights.

## Layout

The centered shell is min(100%, 1184px) wide, including 32px horizontal gutters. Gutters become 24px at widths up to 767px and 20px up to 479px. Major sections use 112px vertical padding, reducing to 76px on mobile. Section introductions separate from content by 48px on desktop and 34px on mobile.

The centered identity sits beneath a 72px sticky header, with 83px top and 58px bottom padding. The overview uses a 1.45fr / 1fr grid and a 20px gap. Its right column stacks study/service tiles in a 1.12fr / 1fr relationship. Engineering has a 480px minimum height and an illustration positioned inside it; a factual profile note follows the grid.

Experience and recognition use .8fr / 1.35fr columns with an 86px gap and a sticky introductory aside at 124px. Career entries form a reading column with hairlines. Education uses white rows containing an abbreviation, details, and dates. Credentials form a single list with a flexible text column, 155px metadata column, and 34px gap.

At widths up to 1023px, the overview becomes 1.15fr / 1fr; experience/recognition use .7fr / 1.3fr and a 45px gap. Education dates move below school details. Up to 767px, the overview becomes one column while study/service remain side by side; reading asides become static above content. Search moves before the category filters and fills the width; credential metadata moves below each title. Up to 479px, the study/service pair, school row contents, and awards each become one column.

Mobile navigation is 68px high. The name uses clamp(52px, 9vw, 68px) at the mobile breakpoint and clamp(47px, 12vw, 58px) on narrow phones. Role text becomes 21px, then 19px; introduction copy becomes 15px. Search text increases to 16px on mobile. The illustration becomes an in-flow image, with clipping and edge masks integrating its original raster into the tile.

Print uses A4 with 16mm margins, a left-aligned 34pt name, 20pt section headings, 11pt entry headings, and 10pt body text. It removes navigation, overview imagery, controls, and contact/footer furniture, and avoids breaking entries. Browser printing reflects the currently rendered credential subset; the download action serves the separate generated PDF.

## Elevation & Depth

There are no CSS box shadows. White rows on soft-gray bands, hairlines, and the study tint establish grouping. The header uses translucent white with saturate(180%) blur(20px) and a faint lower border. Reduced transparency and unsupported backdrop-filter both produce an opaque white header.

The silver-and-glass processor supplies material depth. It is an AI-generated decorative asset, not a completed personal project. Its provenance file is stored with the image.

**The Material Carries Depth Rule.** Keep interface chrome shadow-free. Use the existing illustration, tonal surface changes, separators, and navigation translucency to establish depth.

## Shapes

Overview tiles use the shared surface radius; education rows use a slightly tighter radius. Primary, secondary, compact résumé, and filter controls are pills. Tile links and the mobile menu use explicit circular hit areas. Search is a rounded rectangle; skill tags are lightly rounded outlines; category/current-role labels use the smallest label radius.

Functional Phosphor icons support actions and factual signposts. The textual monogram is an identity mark, not a substitute for a functional icon.

## Components

### Buttons

Primary actions use Action Blue and White Ground; secondary actions use Soft Gray and Ink; the header résumé action reverses Ink and White. Main controls have a 48px minimum height. The compact header action is 40px on desktop and 44px on mobile. Tile links are 44px circles.

Background feedback takes 180ms; main buttons and tile links scale to .96 on press over 140ms. Fine-pointer hover changes the background. Focus uses a 3px Action Blue outline offset by 5px. Text links have a 44px minimum height, underline on hover, and move their arrow 2px over 180ms.

### Inputs / Fields

Search has a persistent accessible name, leading icon, white background, fine border, and input radius. Its minimum height is 46px. Desktop text is compact; mobile text uses 16px. The caret and focus use Action Blue; placeholder text uses full-opacity Secondary Gray.

Title, issuer, and category match case-insensitively after trimming the query. Category and text filters combine immediately. A polite live count remains on mobile. Empty results show a reset that clears both filters, collapses the list, and returns focus to search. No error or disabled field variants are implemented.

### Filters and tags

Category filters are wrapping pill buttons. The selected state uses Ink with white text and aria-pressed; unselected filters are transparent with Secondary Gray text. Hover adds Soft Gray. Their minimum height is 44px. Changing a category or search resets the visible list to its first six matches.

Skills are static outlined tags. Categories and the current-role marker are factual labels with subtle fills. These labels have no button press behavior.

### Cards / Containers

Engineering combines a heading, brief description, research link, and decorative image on Soft Gray. Study uses the pale-blue surface; service uses Soft Gray. Their circular links have accessible destination names. Education rows contain abbreviation, school detail, and dates; the abbreviation is hidden from assistive technology because the full institution name follows it.

### Reading rows

Career entries use chronology, title, organization, description, and location. Credential rows place the title/issuer at left and category/date/identifier at right, then stack on mobile. Course-completion notes remain explicit. Expansion reveals all current matches or restores the first six; aria-expanded and aria-controls describe the control. Recognition uses flat text entries.

### Navigation

The sticky header preserves identity and a résumé action. Desktop links use 13px type, 44px minimum height, and 31px gaps; current location changes from Secondary Gray to Ink. Mobile uses an explicit 44px menu control and an inline white list with 52px rows.

Expanded state is exposed. Escape closes the menu and restores toggle focus; selecting a destination closes it and focuses that section while the anchor scrolls. A skip link reaches the main region. External LinkedIn links include an accessible new-tab announcement.

### Motion

The identity has one 650ms entrance from 12px below at opacity .6 to its resting state. Engineering art scales to 1.025 over 600ms on fine-pointer hover. Navigation color uses 160ms. Reduced motion removes animations, transitions, smooth scrolling, arrow movement, press scaling, and image scaling without delaying content or interactions.

## Do's and Don'ts

### Do:

- **Do** preserve the light canvas, soft-gray bands, dark reading text, and Action Blue hierarchy.
- **Do** use the actual Geist hierarchy and the 400/600 weight relationship.
- **Do** keep career chronology and credential rows readable before adding decoration.
- **Do** preserve search labels, live results, visible focus, keyboard navigation, and reduced motion.
- **Do** retain truthful distinctions between qualifications, course completions, current roles, and expected graduation.

### Don't:

- **Don't** reintroduce the previous split hero, tinted page ground, or credential-card grid as incumbent patterns.
- **Don't** import unimplemented dark navigation, proprietary fonts, or alternate palettes from the Apple reference.
- **Don't** add CSS shadows to buttons, cards, text, or list rows.
- **Don't** style informational labels or reading rows as controls without a real action.
- **Don't** use compact metadata sizes for new body copy or remove semantic labels for visual simplicity.
