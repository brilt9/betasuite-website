const translations = {
  en: {
    navHome: "Home",
    navSupport: "Support",
    navPrivacy: "Privacy",
    navTerms: "Terms",

    heroTitle: "Beta testing, all in one app.",
    heroText: "BetaSuite is a mobile toolkit...",

    supportButton: "Get Support",
    privacyButton: "Privacy Policy",

    metaText: "one-time purchase · No subscription · No ads · No tracking",

    insideTitle: "What's inside",

    feature1Title: "Screen & camera capture",
    feature1Text: "Record screen...",

    feature2Title: "Annotated feedback",
    feature2Text: "Pin notes...",

    feature3Title: "Charge-port diagnostics",
    feature3Text: "Quick built-in tester...",

    feature4Title: "AI-assisted reports",
    feature4Text: "Turn raw feedback..."
  },

  zh: {
    navHome: "主页",
    navSupport: "支持",
    navPrivacy: "隐私",
    navTerms: "条款",

    heroTitle: "一体化 Beta 测试应用",
    heroText: "BetaSuite 是测试工具包...",

    supportButton: "获取支持",
    privacyButton: "隐私政策",

    metaText: "一次性购买 · 无订阅 · 无广告 · 无追踪",

    insideTitle: "功能内容",

    feature1Title: "屏幕与相机录制",
    feature1Text: "录制屏幕与相机",

    feature2Title: "标注反馈",
    feature2Text: "记录备注",

    feature3Title: "充电端口诊断",
    feature3Text: "检测充电异常",

    feature4Title: "AI 报告生成",
    feature4Text: "生成测试报告"
  }
};

function setLanguage(lang) {
  localStorage.setItem("language", lang);

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  document.documentElement.lang = lang;
}

document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("language");

  const browser =
    navigator.language || "en";

  const detected =
    browser.startsWith("zh") ? "zh" : "en";

  const lang = saved || detected;

  const picker = document.getElementById("language-picker");

  if (picker) {
    picker.value = lang;

    picker.addEventListener("change", e => {
      setLanguage(e.target.value);
    });
  }

  setLanguage(lang);
});
