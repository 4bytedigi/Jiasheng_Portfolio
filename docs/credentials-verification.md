# Credentials theme refinement

27 October 2026. Target: the credentials and courses section on the existing portfolio.

The section now uses the achievements panel's blue-tinted enclosure, white cards and corner radii. Filters follow the selected navigation pill treatment; the search field reuses the shared glass surface. Dates and categories align above titles, while credential IDs remain available in a quieter footer. The professional data, existing anchors and downloadable PDF are unchanged.

Browser verification at 1440px, 768px and 390px found no document or filter overflow. Cards retain two columns on desktop/tablet and stack on mobile. All category counts match the source: All 17, Cloud & software 3, Security 4, Communications 6, Leadership 4. Searching `network` returns three entries; an unmatched search shows the empty state; reset restores all 17 and focuses the search input. The independent print list still contains all 17 entries, with print styles removing panel/card decoration.

Desktop and mobile screenshots are saved under `.impeccable/review/credentials-desktop.jpg` and `.impeccable/review/credentials-mobile.jpg`. Browser print rendering was not re-exported; the print markup and style overrides were checked directly. No new runtime dependencies or image assets were added.

The design detector's new radius advisory was resolved by reusing the existing 24px radius. Its Geist warning and colour advisories refer to the established typeface and pre-existing hero/project artwork, which remain outside this refinement's scope.
