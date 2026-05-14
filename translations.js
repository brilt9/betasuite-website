const translations = {

  en: {
    navHome: "Home",
    navSupport: "Support",
    navPrivacy: "Privacy",
    navTerms: "Terms",

    heroTitle: "Beta testing, all in one app.",

    heroText:
      "BetaSuite is a mobile toolkit for hardware and software beta testers — recording, annotation, feedback collection, session timelines, charge-port diagnostics, and AI-assisted report generation. Local-first. iOS-first. Built for serious testing.",

    supportButton: "Get Support",
    privacyButton: "Privacy Policy",

    metaText:
      "one-time purchase · No subscription · No ads · No tracking",

    insideTitle: "What's inside",

    feature1Title: "Screen & camera capture",
    feature1Text:
      "Record screen with the iOS broadcast extension, or roll camera and screen at the same time.",

    feature2Title: "Annotated feedback",
    feature2Text:
      "Pin notes, voice memos, photos, and screenshots to a session timeline.",

    feature3Title: "Charge-port diagnostics",
    feature3Text:
      "Quick built-in tester for charging behaviour and anomalies.",

    feature4Title: "AI-assisted reports",
    feature4Text:
      "Turn raw feedback into a polished bug report or testing summary."
  },

  zh: {
    navHome: "主页",
    navSupport: "支持",
    navPrivacy: "隐私",
    navTerms: "条款",

    heroTitle: "一体化 Beta 测试应用",

    heroText:
      "BetaSuite 是面向硬件与软件测试人员的移动工具包，提供录屏、标注、反馈收集、时间线管理、充电端口诊断以及 AI 辅助报告功能。",

    supportButton: "获取支持",
    privacyButton: "隐私政策",

    metaText:
      "一次性购买 · 无订阅 · 无广告 · 无追踪",

    insideTitle: "功能内容",

    feature1Title: "屏幕与相机录制",
    feature1Text:
      "使用 iOS 广播扩展录制屏幕，也可以同时录制相机与屏幕。",

    feature2Title: "标注反馈",
    feature2Text:
      "将备注、语音、照片与截图固定到测试时间线中。",

    feature3Title: "充电端口诊断",
    feature3Text:
      "内建充电测试工具，可记录功率与异常情况。",

    feature4Title: "AI 辅助报告",
    feature4Text:
      "将原始测试反馈快速整理为专业错误报告或测试摘要。"
  }
};

function setLanguage(lang) {

  localStorage.setItem("language", lang);

  document.querySelectorAll("[data-i18n]").forEach((element) => {

    const key = element.getAttribute("data-i18n");

    if (translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    }
  });

  document.documentElement.lang = lang;
}

document.addEventListener("DOMContentLoaded", () => {

  const savedLang =
    localStorage.getItem("language") || "en";

  const picker =
    document.getElementById("language-picker");

  if (picker) {

    picker.value = savedLang;

    picker.addEventListener("change", (e) => {
      setLanguage(e.target.value);
    });
  }

  setLanguage(savedLang);
});
