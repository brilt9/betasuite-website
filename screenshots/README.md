# Site screenshots

Drop product screenshots into this directory and they'll be picked up by
the markup in [index.html](../index.html) (and, later, the feature grid
when you wire more in).

## Currently expected files

| File | Used by | Spec |
|---|---|---|
| `hero.png` | [index.html](../index.html) hero section (right column) | 9 : 16 portrait, ≥ 540 × 960 px. PNG preferred (sharper text). Transparent background OK — the page wraps it in a rounded card with shadow. |

Until `hero.png` exists, the hero shows a dashed placeholder block with
the text "Hero screenshot — drop screenshots/hero.png". Once you drop
the file in, edit [index.html](../index.html) to swap the placeholder
`<div class="hero-image-placeholder">…</div>` for the `<img>` markup
shown in the comment immediately above it. No CSS changes needed — the
`.hero-image` class is already styled.

## What makes a good hero screenshot

- **Show the product doing its job, not the chrome.** A live recording
  with markers, a generated report preview, or a dual-record split-view
  beats a plain home screen.
- **Real content over Lorem Ipsum.** Use believable session names,
  marker text, screenshots that look like a real test.
- **Portrait orientation.** Hero column is narrow on desktop and
  full-width on mobile; portrait fills both well.
- **Match the brand palette.** App is navy + electric blue + amber for
  warnings. Avoid screenshots heavily dominated by orange / red / green
  — they'll clash with the dark navy hero background.
- **Crisp text.** Marketing screenshots are read closely; capture at
  native resolution (the actual device, not a simulator scaled down).

## Optional follow-ups

When you want to elevate further, consider adding any of:

- `feature-dual-record.png` — split-view of screen + camera capture
- `feature-markers.png` — session timeline with markers and voice notes
- `feature-report.png` — a generated PDF report preview
- `feature-confidential.png` — Confidential Mode banner + on-device AI

Each new screenshot would replace a `.feature` card's text-only layout
in the feature grid. The current grid has 9 cards — visual evidence on
even 2-3 of them would do significant heavy lifting for conversion.
