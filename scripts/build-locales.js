#!/usr/bin/env node
// Generate per-locale HTML files for SEO indexing.
//
// Reads index.html / why.html / support.html plus translations.js, then writes
// fully-translated copies into /{locale}/ for each non-English locale. The
// runtime i18n in translations.js still applies on top — these files are for
// crawlers and for users who land on a localized URL via a share or Google.
//
// Run from repo root:  node scripts/build-locales.js

"use strict";

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const SITE_URL = "https://betasuite.pages.dev";
const LOCALES = ["de", "nl", "fr", "es", "it", "nb", "sv", "pl", "zh"];
const PAGES = ["index.html", "why.html", "support.html"];

function loadTranslations() {
  globalThis.MutationObserver = class { observe() {} };
  globalThis.document = { addEventListener: () => {}, documentElement: {}, querySelectorAll: () => [] };
  globalThis.window = { location: { pathname: "/" } };
  Object.defineProperty(globalThis, "navigator", {
    value: { language: "en", languages: ["en"] },
    configurable: true,
    writable: true,
  });
  globalThis.localStorage = { getItem: () => null, setItem: () => {} };
  let translations;
  const code = fs.readFileSync(path.join(ROOT, "translations.js"), "utf8");
  eval(code.replace(/^const translations =/m, "translations ="));
  return translations;
}

function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function substituteI18n(html, dict) {
  let out = html;
  for (const [key, value] of Object.entries(dict)) {
    // Match: <TAG ...attrs... data-i18n="KEY" ...attrs...>OLDTEXT</TAG>
    // Assumption: data-i18n elements contain plain text only (no nested tags),
    // because the runtime i18n uses `el.textContent = value`, which would clobber
    // any nested HTML anyway. Audit of source HTML confirms this.
    const re = new RegExp(
      `(<([a-zA-Z0-9]+)(?:\\s[^>]*?)?\\sdata-i18n=["']${escapeRegex(key)}["'](?:\\s[^>]*)?>)([^<]*)(</\\2>)`,
      "g"
    );
    out = out.replace(re, (_, openTag, _tag, _old, closeTag) => openTag + escapeHtml(value) + closeTag);
  }
  return out;
}

function localizeHead(html, locale, page) {
  let out = html;

  // <html lang="en"> → <html lang="LOCALE">
  out = out.replace(/<html\s+lang="[a-zA-Z-]+"/, `<html lang="${locale}"`);

  // Compute the localized URL for this page.
  const localizedPageUrl = `${SITE_URL}/${locale}/${page === "index.html" ? "" : page}`;

  // canonical
  out = out.replace(
    /<link rel="canonical" href="[^"]+">/,
    `<link rel="canonical" href="${localizedPageUrl}">`
  );

  // og:url
  out = out.replace(
    /<meta property="og:url" content="[^"]+">/,
    `<meta property="og:url" content="${localizedPageUrl}">`
  );

  return out;
}

function build() {
  const translations = loadTranslations();
  let totalFiles = 0;

  for (const locale of LOCALES) {
    const dict = translations[locale];
    if (!dict) {
      console.error(`  skip ${locale}: no translations entry`);
      continue;
    }
    const outDir = path.join(ROOT, locale);
    fs.mkdirSync(outDir, { recursive: true });

    for (const page of PAGES) {
      const src = fs.readFileSync(path.join(ROOT, page), "utf8");
      const translated = substituteI18n(src, dict);
      const final = localizeHead(translated, locale, page);
      fs.writeFileSync(path.join(outDir, page), final);
      totalFiles++;
      console.log(`  ${locale}/${page}`);
    }
  }
  console.log(`Generated ${totalFiles} files across ${LOCALES.length} locales.`);
}

build();
