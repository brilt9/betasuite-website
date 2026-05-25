# Site icons

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
