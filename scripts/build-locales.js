#!/usr/bin/env node
// Generate per-locale HTML files for SEO indexing.
//
// Reads index.html / why.html / support.html plus translations.js, then writes
// fully-translated copies into /{locale}/ for each non-English locale. Translates:
//   - data-i18n elements (text content)
//   - <title>
//   - <meta name="description">
//   - <meta property="og:title"> / og:description
//   - <meta name="twitter:title"> / twitter:description
//   - JSON-LD content (FAQPage, HowTo, Article, BreadcrumbList)
//   - Updates <html lang>, canonical, og:url
//
// The runtime i18n in translations.js still applies on top — these files exist
// so crawlers can index localized content and so users sharing a localized URL
// land on something already in their language.
//
// Run from repo root:  node scripts/build-locales.js

"use strict";

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const SITE_URL = "https://betasuite.pages.dev";
const LOCALES = ["de", "nl", "fr", "es", "it", "nb", "sv", "pl", "zh"];
const PAGES = ["index.html", "why.html", "support.html"];

// Page-specific keys for <title> and meta description.
const PAGE_KEYS = {
  "index.html":   { title: "pageTitleIndex",   desc: "metaDescIndex"   },
  "why.html":     { title: "pageTitleWhy",     desc: "metaDescWhy"     },
  "support.html": { title: "pageTitleSupport", desc: "metaDescSupport" },
};

// Per-page mapping for FAQPage JSON-LD entries (order matters, must match the page).
const FAQ_KEYS_BY_PAGE = {
  "index.html":   [["faqQ1","faqA1"], ["faqQ2","faqA2"], ["faqQ4","faqA4"], ["faqQ3","faqA3"]],
  "support.html": [["faqQ1","faqA1"], ["faqQ4","faqA4"], ["faqQ2","faqA2"], ["faqDeleteQ","faqDeleteA"], ["faqQ3","faqA3"]],
};

const HOWTO_STEP_KEYS = [
  ["step1Title", "step1Text"],
  ["step2Title", "step2Text"],
  ["step3Title", "step3Text"],
];

// Breadcrumb item.name translations: English original → locale dict key.
const BREADCRUMB_NAME_MAP = {
  "Home": "navHome",
  "Support": "navSupport",
  "Why BetaSuite": "navWhy",
};

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

function escapeHtmlAttr(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function substituteI18nElements(html, dict) {
  let out = html;
  for (const [key, value] of Object.entries(dict)) {
    // <TAG ...attrs... data-i18n="KEY" ...attrs...>OLDTEXT</TAG>
    // data-i18n elements contain plain text only (runtime sets el.textContent).
    const re = new RegExp(
      `(<([a-zA-Z0-9]+)(?:\\s[^>]*?)?\\sdata-i18n=["']${escapeRegex(key)}["'](?:\\s[^>]*)?>)([^<]*)(</\\2>)`,
      "g"
    );
    out = out.replace(re, (_, openTag, _tag, _old, closeTag) => openTag + escapeHtml(value) + closeTag);
  }
  return out;
}

function replaceTitle(html, value) {
  return html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(value)}</title>`);
}

function replaceMetaContent(html, attrName, attrValue, newContent) {
  // Match: <meta {attrName}="{attrValue}" content="...">
  const re = new RegExp(
    `(<meta\\s+${attrName}=["']${escapeRegex(attrValue)}["']\\s+content=)["']([^"']*)["']`,
    "g"
  );
  return html.replace(re, (_, prefix) => `${prefix}"${escapeHtmlAttr(newContent)}"`);
}

function translateJsonLd(html, dict, page, locale) {
  return html.replace(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
    (match, body) => {
      let obj;
      try { obj = JSON.parse(body.trim()); }
      catch (_) { return match; }
      translateJsonLdObject(obj, dict, page, locale);
      const serialized = JSON.stringify(obj, null, 2)
        .split("\n")
        .map((line, i) => (i === 0 ? line : "  " + line))
        .join("\n");
      return `<script type="application/ld+json">\n  ${serialized}\n  </script>`;
    }
  );
}

function localizeBreadcrumbItem(item, locale) {
  if (typeof item !== "string") return item;
  // Items like "https://betasuite.pages.dev/" or "https://betasuite.pages.dev/why.html".
  return item.replace(
    new RegExp(`^${escapeRegex(SITE_URL)}(/[^?#]*)?`),
    (_, p) => {
      const pathPart = p || "/";
      if (pathPart === "/") return `${SITE_URL}/${locale}/`;
      if (pathPart === "/why.html" || pathPart === "/support.html") {
        return `${SITE_URL}/${locale}${pathPart}`;
      }
      // privacy / terms remain English — leave the URL untouched.
      return `${SITE_URL}${pathPart}`;
    }
  );
}

function translateJsonLdObject(obj, dict, page, locale) {
  if (!obj || typeof obj !== "object") return;

  const type = obj["@type"];

  if (type === "FAQPage" && Array.isArray(obj.mainEntity)) {
    const mapping = FAQ_KEYS_BY_PAGE[page] || [];
    obj.mainEntity.forEach((q, i) => {
      const m = mapping[i];
      if (!m) return;
      const [qKey, aKey] = m;
      if (dict[qKey]) q.name = dict[qKey];
      if (q.acceptedAnswer && dict[aKey]) q.acceptedAnswer.text = dict[aKey];
    });
  }

  if (type === "HowTo") {
    if (dict.howTitle) obj.name = dict.howTitle;
    // obj.description stays English — there's no equivalent translation key,
    // and the rendered page doesn't show this string. Acceptable.
    if (Array.isArray(obj.step)) {
      obj.step.forEach((s, i) => {
        const m = HOWTO_STEP_KEYS[i];
        if (!m) return;
        const [tKey, txtKey] = m;
        if (dict[tKey]) s.name = dict[tKey];
        if (dict[txtKey]) s.text = dict[txtKey];
      });
    }
  }

  if (type === "BreadcrumbList" && Array.isArray(obj.itemListElement)) {
    obj.itemListElement.forEach((item) => {
      if (typeof item.name === "string" && BREADCRUMB_NAME_MAP[item.name] && dict[BREADCRUMB_NAME_MAP[item.name]]) {
        item.name = dict[BREADCRUMB_NAME_MAP[item.name]];
      }
      item.item = localizeBreadcrumbItem(item.item, locale);
    });
  }

  if (type === "Article") {
    if (dict.pageTitleWhy) obj.headline = dict.pageTitleWhy;
    if (dict.metaDescWhy) obj.description = dict.metaDescWhy;
    if (typeof obj.mainEntityOfPage === "string") {
      obj.mainEntityOfPage = `${SITE_URL}/${locale}/why.html`;
    }
  }

  if (type === "SoftwareApplication" && dict.metaDescIndex) {
    obj.description = dict.metaDescIndex;
  }
}

function localizeHeadLinks(html, locale, page) {
  let out = html;

  // <html lang="en"> → <html lang="LOCALE">
  out = out.replace(/<html\s+lang="[a-zA-Z-]+"/, `<html lang="${locale}"`);

  // canonical / og:url
  const localizedPageUrl = `${SITE_URL}/${locale}/${page === "index.html" ? "" : page}`;
  out = out.replace(
    /<link rel="canonical" href="[^"]+">/,
    `<link rel="canonical" href="${localizedPageUrl}">`
  );
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
      let out = substituteI18nElements(src, dict);

      const pageKeys = PAGE_KEYS[page];
      if (pageKeys) {
        if (dict[pageKeys.title]) {
          out = replaceTitle(out, dict[pageKeys.title]);
          out = replaceMetaContent(out, "property", "og:title", dict[pageKeys.title]);
          out = replaceMetaContent(out, "name", "twitter:title", dict[pageKeys.title]);
        }
        if (dict[pageKeys.desc]) {
          out = replaceMetaContent(out, "name", "description", dict[pageKeys.desc]);
          out = replaceMetaContent(out, "property", "og:description", dict[pageKeys.desc]);
          out = replaceMetaContent(out, "name", "twitter:description", dict[pageKeys.desc]);
        }
      }

      out = translateJsonLd(out, dict, page, locale);
      out = localizeHeadLinks(out, locale, page);

      fs.writeFileSync(path.join(outDir, page), out);
      totalFiles++;
      console.log(`  ${locale}/${page}`);
    }
  }
  console.log(`Generated ${totalFiles} files across ${LOCALES.length} locales.`);
}

build();
