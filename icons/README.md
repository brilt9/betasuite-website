# Site icons

## `app-store-badge.svg` — "Download on the App Store" badge

Apple's official "Download on the App Store" badge, hand-recreated as
an SVG (black rounded rect + Apple logo + two-line wordmark). Apple's
[Marketing Resources guidelines](https://developer.apple.com/app-store/marketing/guidelines/)
require this badge when linking to the App Store from a webpage, and
explicitly permit use of the Apple logo for that purpose.

Used by the hero CTA in [index.html](../index.html), the bottom CTA
in [index.html](../index.html), and the CTA on [why.html](../why.html).
Sized to 180 × 60 px on desktop, 156 × 52 px under 720 px (per the
breakpoint in styles.css).

### When to swap for Apple's official asset

Apple's App Store Marketing Tools can generate a per-locale badge
(English, German, Japanese, etc.) at
<https://tools.applemediaservices.com/app/6766279266>. If you want
locale-specific badges (Spanish visitors see "Disponible en App Store"
etc.), download the locale-tagged variant and either:
- Replace `app-store-badge.svg` for an English-only swap, or
- Add per-locale variants (`app-store-badge-de.svg`, etc.) and wire
  conditional rendering in `scripts/build-locales.js`.

For now, the English badge is used across all 10 locales — universally
recognisable.

## `apple-weather-mark.svg` — Apple logo glyph for WeatherKit attribution

This file is the Apple-logo silhouette used inside the WeatherKit
attribution badge on [privacy.html](../privacy.html). The badge renders
as " Weather" (Apple logo + wordmark) per Apple's WeatherKit Terms of
Service — the SVG provides the logo, and the browser renders "Weather"
in its system font next to it.

The SVG is a hand-recreated vector of the Apple logo silhouette
(geometry from public sources), sized to `1em` and inheriting the
surrounding text colour via `currentColor`. This is the standard
approach used by other third-party WeatherKit consumers because the
U+F8FF Apple-logo Unicode character only renders on Apple devices.

### When to replace with Apple's official asset

If you obtain a copy of Apple's official Apple Weather attribution
badge (extracted at runtime from
`WeatherKitPlugin.swift → appleWeatherAttributionListenable` inside the
BetaSuite Flutter app, or from Apple's developer resources at
<https://developer.apple.com/weatherkit/>), overwrite this file with
the official SVG. No markup changes needed — every reference already
points at this exact path.

### Where this file is used

- [privacy.html](../privacy.html) — Weather overlay section, attribution
  badge linking to <https://weatherkit.apple.com/legal-attribution.html>.

If you add the attribution to additional surfaces (e.g. a marketing
footer), reuse the same path — do not duplicate the asset.
