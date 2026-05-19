#!/usr/bin/env node
// Render a 1200x630 PNG social share card from inline HTML + the brand icon.
//
// Run from repo root:
//   node scripts/render-og-image.js
//
// Requires the playwright npm package available on the system. On the build
// environment, it's installed globally under /opt/node22/lib/node_modules.

"use strict";

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");

let chromium;
try {
  ({ chromium } = require("playwright"));
} catch (_) {
  ({ chromium } = require("/opt/node22/lib/node_modules/playwright"));
}

const ICON_PATH = path.join(ROOT, "icon.png");
const iconDataUrl = "data:image/png;base64," + fs.readFileSync(ICON_PATH).toString("base64");

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<style>
  *,*::before,*::after { box-sizing: border-box; }
  html,body { margin:0; padding:0; }
  body {
    width: 1200px;
    height: 630px;
    background: radial-gradient(120% 100% at 10% 0%, #16334a 0%, #0b1724 55%, #07101a 100%);
    color: #f5f9ff;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    display: grid;
    grid-template-columns: 320px 1fr;
    gap: 56px;
    padding: 90px 96px;
    position: relative;
    overflow: hidden;
  }
  body::before {
    content: "";
    position: absolute;
    inset: -200px -200px auto auto;
    width: 720px;
    height: 720px;
    background: radial-gradient(closest-side, rgba(30,144,255,0.28), rgba(30,144,255,0) 70%);
    pointer-events: none;
  }
  .icon-wrap {
    position: relative;
    z-index: 1;
    align-self: center;
  }
  .icon {
    width: 320px;
    height: 320px;
    border-radius: 64px;
    box-shadow: 0 30px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.05);
    display: block;
  }
  .content {
    align-self: center;
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
  .brand {
    font-size: 64px;
    font-weight: 800;
    letter-spacing: -0.01em;
    line-height: 1;
  }
  .tagline {
    font-size: 40px;
    font-weight: 700;
    line-height: 1.15;
    color: #ffffff;
    letter-spacing: -0.005em;
  }
  .sub {
    font-size: 22px;
    color: #9fb0c6;
    line-height: 1.4;
    margin-top: 6px;
    max-width: 620px;
  }
  .url {
    position: absolute;
    bottom: 48px;
    right: 64px;
    color: #4da9ff;
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 0.5px;
    z-index: 1;
  }
  .accent-bar {
    position: absolute;
    left: 0; right: 0; bottom: 0;
    height: 6px;
    background: linear-gradient(90deg, #1e90ff 0%, #4da9ff 50%, #16334a 100%);
  }
</style>
</head>
<body>
  <div class="icon-wrap">
    <img class="icon" src="${iconDataUrl}" alt="">
  </div>
  <div class="content">
    <div class="brand">BetaSuite</div>
    <div class="tagline">Built for the tester, not the vendor.</div>
    <div class="sub">Mobile bug-report kit — dual screen + camera recording, 30-second instant replay, on-device AI, Confidential Mode.</div>
  </div>
  <div class="url">betasuite.pages.dev</div>
  <div class="accent-bar"></div>
</body>
</html>`;

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
  const page = await context.newPage();
  await page.setContent(html, { waitUntil: "load" });
  await page.evaluate(() => document.fonts && document.fonts.ready);
  const outPath = path.join(ROOT, "og-image.png");
  await page.screenshot({ path: outPath, omitBackground: false, type: "png" });
  await browser.close();
  console.log(`Wrote ${outPath} (${fs.statSync(outPath).size} bytes)`);
})();
