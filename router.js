(function () {

  const path = window.location.pathname;

  const isRoot =
    path === "/" ||
    path.endsWith("index.html");

  if (!isRoot) return;

  const saved = localStorage.getItem("language");

  const browser =
    navigator.language || "en";

  const detected =
    browser.toLowerCase().startsWith("zh") ? "zh" : "en";

  const lang = saved || detected;

  window.location.href = `./${lang}/index.html`;

})();
