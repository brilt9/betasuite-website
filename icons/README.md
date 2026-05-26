# Site icons

## `app-store-badge*.svg` — official Apple "Download on the App Store" badges

Apple's official per-locale "Download on the App Store" badges,
extracted from Apple's downloadable marketing bundle
("Download-on-the-App-Store.zip", Black lockup, SVG variants).
Apple's [Marketing Resources guidelines](https://developer.apple.com/app-store/marketing/guidelines/)
require this badge when linking to the App Store from a webpage.

### Layout

| File | Region | Used on |
|---|---|---|
| `app-store-badge.svg` | US/UK English (Apple's `US-UK` variant) | Root `index.html` + `why.html` (English) |
| `app-store-badge-de.svg` | Germany — "Laden im App Store" | `/de/` pages |
| `app-store-badge-es.svg` | Spain — "Descargar en App Store" | `/es/` pages |
| `app-store-badge-fr.svg` | France — "Télécharger dans l'App Store" | `/fr/` pages |
| `app-store-badge-it.svg` | Italy — "Scarica su App Store" | `/it/` pages |
| `app-store-badge-nb.svg` | Norway (`NO`) — "Last ned i App Store" | `/nb/` pages |
| `app-store-badge-nl.svg` | Netherlands — "Download in de App Store" | `/nl/` pages |
| `app-store-badge-pl.svg` | Poland — "Pobierz z App Store" | `/pl/` pages |
| `app-store-badge-sv.svg` | Sweden (`SE`) — "Hämta i App Store" | `/sv/` pages |
| `app-store-badge-zh.svg` | Mainland China Simplified (`CN-SC`) — "在 App Store 下载" | `/zh/` pages |

The per-locale swap is done in `scripts/build-locales.js`'s
`rewriteBadgeForLocale()` — for each locale the build script
rewrites `icons/app-store-badge.svg` references to
`icons/app-store-badge-<locale>.svg`. Locales without a matching
file silently fall through to the English default.

Sized to 180 × 60 px on desktop, 156 × 52 px under 720 px (per the
breakpoint in styles.css).

### Refreshing from Apple

If Apple ever updates the badge artwork (rare), download the bundle
fresh from Apple's marketing resources and re-extract — the SVG
filenames follow `Download_on_the_App_Store_Badge_<REGION>_RGB_blk_<date>.svg`
inside each region folder's `Download_on_App_Store/Black_lockup/SVG/`
subdirectory. Map them to our 10 locale codes using the table above
(en→US/US-UK, nb→NO, sv→SE, zh→CN(SC)) and overwrite. No markup
changes needed.

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
