(function () {

  const path = window.location.pathname;

  const isRoot =
    path === "/" ||
    path.endsWith("/index.html");

  if (!isRoot) return;

  const saved = localStorage.getItem("language");

  const browser =
    navigator.language || "en";

  const detected =
    browser.startsWith("zh") ? "zh" : "en";

  const lang = saved || detected;

  if (lang === "zh") {
    window.location.href = "./zh/index.html";
  } else {
    window.location.href = "./en/index.html";
  }

})();
