# Site icons

## `apple-weather-mark.svg` — **placeholder, needs replacement**

This file is currently a generic cloud icon, NOT the real Apple Weather
attribution mark. It exists so that `privacy.html` (and any future
attribution surface) renders cleanly until the official badge is dropped
in.

Per Apple's WeatherKit Terms of Service, the attribution graphic must be
the Apple-provided badge: the Apple logo + "Weather" wordmark.

### How to replace

1. Download the official Apple Weather attribution graphic from Apple's
   WeatherKit developer resources: <https://developer.apple.com/weatherkit/>
   (or extract the cached badge served at runtime by
   `WeatherKitPlugin.swift` → `appleWeatherAttributionListenable` inside
   the BetaSuite Flutter app — that's the canonical Apple-provided file).
2. Save it as `icons/apple-weather-mark.svg` (overwrite this file).
3. No markup changes needed — every reference already points at this
   exact path.

### Where this file is used

- [privacy.html](../privacy.html) — Weather overlay section, attribution
  badge linking to <https://weatherkit.apple.com/legal-attribution.html>.

If you add the attribution to additional surfaces (e.g. a marketing
footer), reuse the same path — do not duplicate the asset.
