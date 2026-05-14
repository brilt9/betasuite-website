/* translations.js — improved, drop-in replacement */

const translations = {
  en: {
    navHome: "Home",
    navSupport: "Support",
    navPrivacy: "Privacy",
    navTerms: "Terms",
    heroTitle: "Beta testing, all in one app.",
    heroText: "BetaSuite is a mobile toolkit for testers.",
    supportButton: "Get Support",
    privacyButton: "Privacy Policy",
    metaText: "one-time purchase · No subscription · No ads · No tracking",
    insideTitle: "What's inside",
    feature1Title: "Screen & camera capture",
    feature1Text: "Record screen and camera.",
    feature2Title: "Annotated feedback",
    feature2Text: "Pin notes and media to sessions.",
    feature3Title: "Charge-port diagnostics",
    feature3Text: "Test charging behaviour.",
    feature4Title: "AI-assisted reports",
    feature4Text: "Turn feedback into reports.",
    supportTitle: "Support",
    supportLede: "We reply within 2 business days.",
    contactTitle: "Get in touch",
    nameLabel: "Your name",
    emailLabel: "Your email address",
    categoryLabel: "Category",
    messageLabel: "Message",
    sendMessage: "Send message",
    faqTitle: "Frequently asked questions"
  },
  zh: {
    navHome: "主页",
    navSupport: "支持",
    navPrivacy: "隐私",
    navTerms: "条款",
    heroTitle: "一体化 Beta 测试应用",
    heroText: "BetaSuite 是测试工具包。",
    supportButton: "获取支持",
    privacyButton: "隐私政策",
    metaText: "一次性购买 · 无订阅 · 无广告 · 无追踪",
    insideTitle: "功能内容",
    feature1Title: "屏幕与相机录制",
    feature1Text: "录制屏幕和相机。",
    feature2Title: "标注反馈",
    feature2Text: "记录测试内容。",
    feature3Title: "充电端口诊断",
    feature3Text: "检测充电状态。",
    feature4Title: "AI 报告生成",
    feature4Text: "生成测试报告。",
    supportTitle: "支持",
    supportLede: "我们会在 2 个工作日内回复。",
    contactTitle: "联系我们",
    nameLabel: "姓名",
    emailLabel: "邮箱地址",
    categoryLabel: "类别",
    messageLabel: "信息",
    sendMessage: "发送",
    faqTitle: "常见问题"
  }
};

/* ---------- Utilities ---------- */
const _debounce = (fn, wait = 150) => {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), wait);
  };
};

const _safeSetLocal = _debounce((k, v) => {
  try { localStorage.setItem(k, v); } catch (e) { /* ignore */ }
}, 120);

/* ---------- Core i18n functions ---------- */
function _applyTranslationToElement(el, dict) {
  const key = el.getAttribute("data-i18n");
  if (!key) return;

  const value = dict && dict[key] !== undefined ? dict[key] : null;

  if (value !== null) {
    // default: replace text content
    el.textContent = value;
  } else {
    // fallback: leave existing content (do not inject anything)
  }
}

function _applyAttributeTranslations(root, dict) {
  // placeholders
  root.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict && dict[key] !== undefined) el.placeholder = dict[key];
  });

  // title attributes
  root.querySelectorAll("[data-i18n-title]").forEach(el => {
    const key = el.getAttribute("data-i18n-title");
    if (dict && dict[key] !== undefined) el.title = dict[key];
  });

  // value attributes (inputs/buttons)
  root.querySelectorAll("[data-i18n-value]").forEach(el => {
    const key = el.getAttribute("data-i18n-value");
    if (dict && dict[key] !== undefined) el.value = dict[key];
  });
}

function translateDocument(lang) {
  const dict = translations[lang] || translations.en;

  // translate elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach(el => _applyTranslationToElement(el, dict));

  // translate attributes (placeholder, title, value)
  _applyAttributeTranslations(document, dict);

  // set html lang and direction
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === "zh" ? "ltr" : "ltr");

  // update language picker if present
  const picker = document.getElementById("language-picker");
  if (picker) {
    try { picker.value = lang; } catch (e) { /* ignore */ }
  }
}

/* ---------- Public API ---------- */
function setLanguage(lang) {
  if (!lang) return;
  const normalized = (lang === "zh" || lang.startsWith("zh")) ? "zh" : "en";
  translateDocument(normalized);
  _safeSetLocal("language", normalized);
  return normalized;
}

function getCurrentLanguage() {
  return document.documentElement.lang || localStorage.getItem("language") || "en";
}

/* ---------- Dynamic content support ---------- */
const _observer = new MutationObserver(mutations => {
  const lang = getCurrentLanguage();
  for (const m of mutations) {
    if (m.type === "childList" && m.addedNodes.length) {
      m.addedNodes.forEach(node => {
        if (!(node instanceof HTMLElement)) return;
        // translate newly added subtree
        node.querySelectorAll("[data-i18n]").forEach(el => _applyTranslationToElement(el, translations[lang]));
        _applyAttributeTranslations(node, translations[lang]);
      });
    }
  }
});

/* ---------- Initialization ---------- */
function initI18n(options = {}) {
  // options: { observeMutations: true|false }
  const saved = (() => {
    try { return localStorage.getItem("language"); } catch (e) { return null; }
  })();

  const browserLang = (navigator.languages && navigator.languages[0]) || navigator.language || "en";
  const detected = browserLang.toLowerCase().startsWith("zh") ? "zh" : "en";
  const lang = saved || detected;

  // wire picker if present
  const picker = document.getElementById("language-picker");
  if (picker) {
    picker.value = lang;
    picker.addEventListener("change", (e) => {
      setLanguage(e.target.value);
    });
  }

  // wire any nav toggles that should announce language changes (optional)
  // apply initial translation
  translateDocument(lang);

  // observe dynamic DOM changes if requested
  if (options.observeMutations !== false) {
    _observer.observe(document.documentElement, { childList: true, subtree: true });
  }

  return lang;
}

/* Auto-init on DOM ready */
document.addEventListener("DOMContentLoaded", () => initI18n({ observeMutations: true }));

/* Expose API for other scripts */
window.BetaSuiteI18n = {
  init: initI18n,
  setLanguage,
  getCurrentLanguage,
  translations
};
