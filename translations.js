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
      "one-time purchase · No subscription · No ads · No tracking"
  },

  zh: {
    navHome: "主页",
    navSupport: "支持",
    navPrivacy: "隐私",
    navTerms: "条款",

    heroTitle: "一体化 Beta 测试应用。",
    heroText:
      "BetaSuite 是一个面向硬件与软件测试人员的移动工具包，提供录屏、标注、反馈收集、会话时间线、充电端口诊断以及 AI 辅助报告生成功能。本地优先，iOS 优先，为专业测试而打造。",

    supportButton: "获取支持",
    privacyButton: "隐私政策",

    metaText:
      "一次性购买 · 无订阅 · 无广告 · 无追踪"
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
  const savedLang = localStorage.getItem("language") || "en";

  const picker = document.getElementById("language-picker");

  if (picker) {
    picker.value = savedLang;

    picker.addEventListener("change", (e) => {
      setLanguage(e.target.value);
    });
  }

  setLanguage(savedLang);
});
