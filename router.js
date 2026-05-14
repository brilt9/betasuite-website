// router.js — safe locale redirect for static site
(function () {
  'use strict';

  // Only run on root-like pages
  const pathname = window.location.pathname || '/';
  const search = window.location.search || '';
  const hash = window.location.hash || '';

  // If already inside a language folder like /en/ or /zh/, do nothing
  const langFolderMatch = pathname.match(/^\/(en|zh)(\/|$)/i);
  if (langFolderMatch) return;

  // Allow disabling redirect for testing by adding ?nolocale
  if (search.includes('nolocale')) return;

  // Determine preferred language: saved -> browser -> default
  let saved = null;
  try { saved = localStorage.getItem('language'); } catch (e) { saved = null; }

  const browserLang = (navigator.languages && navigator.languages[0]) || navigator.language || 'en';
  const detected = browserLang.toLowerCase().startsWith('zh') ? 'zh' : 'en';

  const lang = saved === 'zh' || saved === 'en' ? saved : detected;

  // Only redirect if current path is root or index-like
  const isRoot = pathname === '/' || pathname.endsWith('/index.html') || pathname === '/index.html';
  if (!isRoot) return;

  // Build destination preserving search and hash
  const dest = `./${lang}/index.html${search}${hash}`;

  // If already at destination, do nothing
  const current = window.location.pathname + window.location.search + window.location.hash;
  const resolved = new URL(dest, window.location.href).pathname + search + hash;
  if (current === resolved) return;

  // Use replace to avoid adding an extra history entry
  try {
    window.location.replace(dest);
  } catch (e) {
    // Fallback to assign if replace fails
    window.location.href = dest;
  }
})();
