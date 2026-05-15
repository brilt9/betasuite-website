/* translations.js — site i18n */

const translations = {
  en: {
    /* Nav */
    navHome: "Home",
    navSupport: "Support",
    navPrivacy: "Privacy",
    navTerms: "Terms",

    /* Hero */
    heroTitle: "Catch every bug. Tell the whole story.",
    heroText: "BetaSuite is the mobile testing kit for people who actually report bugs — record screen and camera at once, replay the last 30 seconds, annotate, transcribe, and ship a polished report.",
    downloadAppStore: "Download on the App Store",
    downloadGooglePlay: "Get it on Google Play",
    metaText: "One-time purchase · No subscription · No ads · No tracking",

    /* Value props strip */
    valuePropsTitle: "Capture · Annotate · Report",
    valueCaptureTitle: "Capture",
    valueCaptureText: "Screen + camera, instant replay, voice memos, photos.",
    valueAnnotateTitle: "Annotate",
    valueAnnotateText: "Draw, pin, and timestamp every clip and screenshot.",
    valueReportTitle: "Report",
    valueReportText: "Auto session summaries developers can actually read.",

    /* Feature grid */
    insideTitle: "What's inside",
    feature1Title: "Dual recording — screen + PiP camera",
    feature1Text: "Capture the screen and the device itself at the same time. Show developers exactly what the user did and how the app behaved in real time.",
    feature2Title: "Instant capture (15 / 30 s replay)",
    feature2Text: "Background-record the last 15 or 30 seconds. A bug already happened? Tap once to save the buffer.",
    feature3Title: "Annotate photos and video",
    feature3Text: "Draw, pin notes, and mark up media right in the app. Every frame and photo carries a to-the-second timestamp; imported media keeps its original timestamp too.",
    feature4Title: "Voice memos, transcribed on-device",
    feature4Text: "Speak observations as you test. On supported iPhones, Apple's Speech framework transcribes locally — the audio never leaves your device.",
    feature5Title: "AI session summaries and reports",
    feature5Text: "When a session ends, BetaSuite turns markers, notes, and media into a clean bullet summary. On iPhone 15 Pro / 16 / 17 with Apple Intelligence, the inference runs on-device.",
    feature6Title: "Confidential Mode for NDA work",
    feature6Text: "One toggle blocks cloud sync and every cloud AI provider — only Apple's on-device paths run. Test sensitive products without changing how you work.",

    /* Legacy feature key kept for back-compat */
    feature1TitleLegacy: "Screen & camera capture",

    /* How it works */
    howTitle: "How it works",
    step1Title: "1. Record the session",
    step1Text: "Start a project, hit record, and use the app or device the way a tester would.",
    step2Title: "2. Mark and annotate",
    step2Text: "Drop markers, add voice notes, and draw on screenshots — all timestamped automatically.",
    step3Title: "3. Generate a report",
    step3Text: "BetaSuite assembles a session summary plus the media, ready to share with developers.",

    /* On-device AI callout */
    calloutTitle: "Privacy-first by design",
    calloutLead: "BetaSuite leans on on-device AI wherever your iPhone supports it.",
    callout1Title: "AI that stays on your device",
    callout1Text: "Apple Intelligence (iOS 26+, iPhone 15 Pro / 16 / 17) handles text generation locally.",
    callout2Title: "Speech that never leaves",
    callout2Text: "Voice memos transcribe on-device via Apple's Speech framework on supported iPhones.",
    callout3Title: "One toggle for sensitive work",
    callout3Text: "Confidential Mode blocks every cloud route — sync, AI, and analytics — so NDA testing stays local.",
    calloutLink: "Read the full privacy policy →",

    /* FAQ teaser */
    faqTeaserTitle: "Common questions",
    faqQ1: "Which devices are supported?",
    faqA1: "iPhone (iOS 16 or later) is the primary platform. Android is also supported.",
    faqQ2: "Do I need an account?",
    faqA2: "No. BetaSuite never requires registration.",
    faqQ3: "What is Confidential Mode?",
    faqA3: "Confidential Mode blocks cloud sync and cloud AI, keeping processing local-only where possible.",
    faqMore: "More on the support page →",

    /* Closing CTA */
    ctaTitle: "Ready to ship better bug reports?",
    ctaText: "Download BetaSuite — or get in touch if you have questions first.",
    ctaContact: "Questions? Get in touch →",

    /* Support page */
    supportTitle: "Support",
    supportLede: "We read every message and aim to reply within 2 business days.",
    contactTitle: "Get in touch",
    nameLabel: "Your name",
    emailLabel: "Your email address",
    categoryLabel: "Category",
    messageLabel: "Message",
    sendMessage: "Send message",
    faqTitle: "Frequently asked questions",

    /* Legacy buttons (still used elsewhere) */
    supportButton: "Get Support",
    privacyButton: "Privacy Policy"
  },

  zh: {
    /* Nav */
    navHome: "主页",
    navSupport: "支持",
    navPrivacy: "隐私",
    navTerms: "条款",

    /* Hero */
    heroTitle: "捕捉每一个 Bug，讲清完整故事。",
    heroText: "BetaSuite 是为真正提交 Bug 报告的人打造的移动测试工具：同时录制屏幕和相机、回放最近 30 秒、标注、转录，再生成一份精炼的报告。",
    downloadAppStore: "在 App Store 下载",
    downloadGooglePlay: "在 Google Play 获取",
    metaText: "一次性购买 · 无订阅 · 无广告 · 无追踪",

    /* Value props strip */
    valuePropsTitle: "记录 · 标注 · 报告",
    valueCaptureTitle: "记录",
    valueCaptureText: "屏幕 + 相机、即时回放、语音备忘、照片。",
    valueAnnotateTitle: "标注",
    valueAnnotateText: "对每段视频和截图进行绘制、批注与时间戳标记。",
    valueReportTitle: "报告",
    valueReportText: "自动生成开发者真正读得懂的会话摘要。",

    /* Feature grid */
    insideTitle: "功能内容",
    feature1Title: "双路录制——屏幕 + 画中画相机",
    feature1Text: "同时捕捉屏幕和设备本身,让开发者实时看到用户的操作和应用的表现。",
    feature2Title: "即时回放(15 / 30 秒缓冲)",
    feature2Text: "后台持续录制最近 15 或 30 秒。Bug 已经发生?一键保存缓冲。",
    feature3Title: "对照片与视频进行标注",
    feature3Text: "在应用内直接绘制、添加批注、标记媒体。每一帧与照片都精确到秒附带时间戳;导入的媒体也会保留原始时间戳。",
    feature4Title: "本地转录的语音备忘",
    feature4Text: "测试时随口说出观察。在支持的 iPhone 上,Apple Speech 框架在本地完成转录——音频不会离开设备。",
    feature5Title: "AI 会话摘要与报告",
    feature5Text: "会话结束时,BetaSuite 会把标记、笔记和媒体整合成清晰的要点摘要。在搭载 Apple Intelligence 的 iPhone 15 Pro / 16 / 17 上,推理在设备本地完成。",
    feature6Title: "保密模式,适合 NDA 项目",
    feature6Text: "一键关闭云同步与所有云端 AI——只运行 Apple 的本地路径。无需改变工作方式即可测试敏感产品。",

    /* Legacy */
    feature1TitleLegacy: "屏幕与相机录制",

    /* How it works */
    howTitle: "工作流程",
    step1Title: "1. 录制会话",
    step1Text: "新建项目、点击录制,然后像测试人员一样使用应用或设备。",
    step2Title: "2. 标记与批注",
    step2Text: "添加标记、加入语音笔记、在截图上绘制——全部自动加上时间戳。",
    step3Title: "3. 生成报告",
    step3Text: "BetaSuite 将会话摘要和媒体整合在一起,可直接分享给开发者。",

    /* Callout */
    calloutTitle: "从设计起就以隐私为先",
    calloutLead: "只要您的 iPhone 支持,BetaSuite 都会优先使用本地 AI。",
    callout1Title: "AI 留在您的设备上",
    callout1Text: "Apple Intelligence(iOS 26+,iPhone 15 Pro / 16 / 17)在本地完成文本生成。",
    callout2Title: "语音不外传",
    callout2Text: "在支持的 iPhone 上,语音备忘通过 Apple Speech 框架在本地转录。",
    callout3Title: "一键应对敏感工作",
    callout3Text: "保密模式封锁所有云端路径——同步、AI 与分析——让 NDA 测试始终保持本地化。",
    calloutLink: "查看完整隐私政策 →",

    /* FAQ teaser */
    faqTeaserTitle: "常见问题",
    faqQ1: "支持哪些设备?",
    faqA1: "主要支持 iPhone(iOS 16 及以上),也支持 Android。",
    faqQ2: "需要账号吗?",
    faqA2: "不需要。BetaSuite 从不需要注册。",
    faqQ3: "什么是保密模式?",
    faqA3: "保密模式封锁云同步和云端 AI,尽可能将处理保留在本地。",
    faqMore: "在支持页面查看更多 →",

    /* Closing CTA */
    ctaTitle: "准备好提交更好的 Bug 报告了吗?",
    ctaText: "下载 BetaSuite——若您有疑问,也可以先联系我们。",
    ctaContact: "有疑问?联系我们 →",

    /* Support page */
    supportTitle: "支持",
    supportLede: "我们会在 2 个工作日内回复。",
    contactTitle: "联系我们",
    nameLabel: "姓名",
    emailLabel: "邮箱地址",
    categoryLabel: "类别",
    messageLabel: "信息",
    sendMessage: "发送",
    faqTitle: "常见问题",

    /* Legacy */
    supportButton: "获取支持",
    privacyButton: "隐私政策"
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

/* ---------- Core i18n ---------- */
function _applyTranslationToElement(el, dict) {
  const key = el.getAttribute("data-i18n");
  if (!key) return;
  const value = dict && dict[key] !== undefined ? dict[key] : null;
  if (value !== null) el.textContent = value;
}

function _applyAttributeTranslations(root, dict) {
  root.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict && dict[key] !== undefined) el.placeholder = dict[key];
  });
  root.querySelectorAll("[data-i18n-title]").forEach(el => {
    const key = el.getAttribute("data-i18n-title");
    if (dict && dict[key] !== undefined) el.title = dict[key];
  });
  root.querySelectorAll("[data-i18n-value]").forEach(el => {
    const key = el.getAttribute("data-i18n-value");
    if (dict && dict[key] !== undefined) el.value = dict[key];
  });
  root.querySelectorAll("[data-i18n-aria-label]").forEach(el => {
    const key = el.getAttribute("data-i18n-aria-label");
    if (dict && dict[key] !== undefined) el.setAttribute("aria-label", dict[key]);
  });
}

function translateDocument(lang) {
  const dict = translations[lang] || translations.en;
  document.querySelectorAll("[data-i18n]").forEach(el => _applyTranslationToElement(el, dict));
  _applyAttributeTranslations(document, dict);
  document.documentElement.lang = lang;
  document.documentElement.dir = "ltr";
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
        node.querySelectorAll("[data-i18n]").forEach(el => _applyTranslationToElement(el, translations[lang]));
        _applyAttributeTranslations(node, translations[lang]);
      });
    }
  }
});

/* ---------- Initialization ---------- */
function initI18n(options = {}) {
  const saved = (() => {
    try { return localStorage.getItem("language"); } catch (e) { return null; }
  })();

  const browserLang = (navigator.languages && navigator.languages[0]) || navigator.language || "en";
  const detected = browserLang.toLowerCase().startsWith("zh") ? "zh" : "en";
  const lang = saved || detected;

  const picker = document.getElementById("language-picker");
  if (picker) {
    picker.value = lang;
    picker.addEventListener("change", (e) => setLanguage(e.target.value));
  }

  translateDocument(lang);

  if (options.observeMutations !== false) {
    _observer.observe(document.documentElement, { childList: true, subtree: true });
  }

  return lang;
}

document.addEventListener("DOMContentLoaded", () => initI18n({ observeMutations: true }));

window.BetaSuiteI18n = {
  init: initI18n,
  setLanguage,
  getCurrentLanguage,
  translations
};
