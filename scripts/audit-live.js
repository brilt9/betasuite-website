#!/usr/bin/env node
// Lightweight live-site audit using bundled Playwright Chromium.
// Captures the same signals Lighthouse focuses on (load time, FCP,
// failed resources, asset sizes, console errors) without the heavy
// install footprint of lighthouse-cli. Output: a single readable
// summary to stdout.
//
// Usage:  node scripts/audit-live.js [url]

"use strict";

const { chromium } = require("playwright");

const URL = process.argv[2] || "https://betasuite.pages.dev/";

(async () => {
  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({
    viewport: { width: 414, height: 896 }, // iPhone-ish, matches target audience
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
  });
  const page = await ctx.newPage();

  const responses = [];
  const consoleMessages = [];
  const pageErrors = [];

  page.on("response", async (r) => {
    let bodySize = null;
    try {
      const buf = await r.body();
      bodySize = buf.length;
    } catch (_) {}
    responses.push({
      url: r.url(),
      status: r.status(),
      type: (r.headers()["content-type"] || "").split(";")[0],
      bytes: bodySize,
    });
  });
  page.on("console", (m) => consoleMessages.push({ type: m.type(), text: m.text() }));
  page.on("pageerror", (e) => pageErrors.push(e.message));

  const t0 = Date.now();
  await page.goto(URL, { waitUntil: "networkidle", timeout: 30_000 });
  const wallClockMs = Date.now() - t0;

  const perf = await page.evaluate(() => {
    const nav = performance.getEntriesByType("navigation")[0] || {};
    const paint = performance.getEntriesByType("paint");
    const lcp = performance.getEntriesByType("largest-contentful-paint").slice(-1)[0];
    return {
      domContentLoadedMs: Math.round(nav.domContentLoadedEventEnd - nav.fetchStart),
      loadEventMs: Math.round(nav.loadEventEnd - nav.fetchStart),
      firstPaintMs: Math.round((paint.find((p) => p.name === "first-paint") || {}).startTime),
      firstContentfulPaintMs: Math.round((paint.find((p) => p.name === "first-contentful-paint") || {}).startTime),
      largestContentfulPaintMs: lcp ? Math.round(lcp.startTime) : null,
      transferSizeBytes: nav.transferSize || null,
      encodedBodySizeBytes: nav.encodedBodySize || null,
    };
  });

  // Layout shifts (manually collected from performance observer at runtime).
  const cls = await page.evaluate(
    () =>
      new Promise((resolve) => {
        let total = 0;
        new PerformanceObserver((entries) => {
          for (const e of entries.getEntries()) {
            if (!e.hadRecentInput) total += e.value;
          }
        }).observe({ type: "layout-shift", buffered: true });
        setTimeout(() => resolve(Number(total.toFixed(4))), 500);
      })
  );

  await browser.close();

  // ── Summary ───────────────────────────────────────────────────────────────
  const failed = responses.filter((r) => r.status >= 400);
  const byType = {};
  let totalBytes = 0;
  for (const r of responses) {
    if (r.bytes == null) continue;
    totalBytes += r.bytes;
    const k = r.type || "other";
    byType[k] = (byType[k] || { count: 0, bytes: 0 });
    byType[k].count++;
    byType[k].bytes += r.bytes;
  }

  console.log(`\n=== Audit: ${URL} ===`);
  console.log(`Wall-clock until network idle:   ${wallClockMs} ms`);
  console.log(`DOMContentLoaded:                ${perf.domContentLoadedMs} ms`);
  console.log(`Load event:                      ${perf.loadEventMs} ms`);
  console.log(`First Paint:                     ${perf.firstPaintMs} ms`);
  console.log(`First Contentful Paint:          ${perf.firstContentfulPaintMs} ms   (good < 1800ms)`);
  console.log(`Largest Contentful Paint:        ${perf.largestContentfulPaintMs} ms   (good < 2500ms)`);
  console.log(`Cumulative Layout Shift:         ${cls}              (good < 0.1)`);
  console.log(`Total transfer:                  ${(totalBytes / 1024).toFixed(1)} KB across ${responses.length} requests`);

  console.log(`\n--- Resource breakdown ---`);
  Object.entries(byType)
    .sort((a, b) => b[1].bytes - a[1].bytes)
    .forEach(([t, v]) => {
      console.log(`  ${t.padEnd(28)} ${String(v.count).padStart(3)}  ${(v.bytes / 1024).toFixed(1)} KB`);
    });

  console.log(`\n--- Failed requests (${failed.length}) ---`);
  if (failed.length === 0) console.log("  none");
  else failed.forEach((r) => console.log(`  ${r.status}  ${r.url}`));

  console.log(`\n--- Console errors / warnings (${consoleMessages.filter((m) => m.type === "error" || m.type === "warning").length}) ---`);
  const interesting = consoleMessages.filter((m) => m.type === "error" || m.type === "warning");
  if (interesting.length === 0) console.log("  none");
  else interesting.slice(0, 15).forEach((m) => console.log(`  [${m.type}] ${m.text.slice(0, 140)}`));

  console.log(`\n--- Page errors (${pageErrors.length}) ---`);
  if (pageErrors.length === 0) console.log("  none");
  else pageErrors.slice(0, 10).forEach((e) => console.log(`  ${e.slice(0, 200)}`));

  // ── Mini Lighthouse-style grading ─────────────────────────────────────────
  const grade = (v, good, poor) => (v == null ? "?" : v <= good ? "GOOD" : v >= poor ? "POOR" : "OK");
  console.log(`\n=== Score summary ===`);
  console.log(`FCP:  ${grade(perf.firstContentfulPaintMs, 1800, 3000)}`);
  console.log(`LCP:  ${grade(perf.largestContentfulPaintMs, 2500, 4000)}`);
  console.log(`CLS:  ${grade(cls, 0.1, 0.25)}`);
  console.log(`Failed requests:  ${failed.length === 0 ? "GOOD" : "FAIL"}`);
  console.log(`Console errors:   ${consoleMessages.filter((m) => m.type === "error").length === 0 ? "GOOD" : "FAIL"}`);
})();
