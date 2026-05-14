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

    // Support page
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

    // Support page
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

function setLanguage(lang) {

  localStorage.setItem("language", lang);

  document.querySelectorAll("[data-i18n]").forEach(el => {

    const key = el.getAttribute("data-i18n");

    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  document.documentElement.lang = lang;

  const picker = document.getElementById("language-picker");
  if (picker) picker.value = lang;
}

document.addEventListener("DOMContentLoaded", () => {

  const saved = localStorage.getItem("language");

  const browser =
    navigator.language || "en";

  const detected =
    browser.toLowerCase().startsWith("zh") ? "zh" : "en";

  const lang = saved || detected;

  const picker = document.getElementById("language-picker");

  if (picker) {
    picker.value = lang;

    picker.addEventListener("change", (e) => {
      setLanguage(e.target.value);
    });
  }

  setLanguage(lang);
});
