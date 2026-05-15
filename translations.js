/* translations.js — site i18n */

const translations = {
  en: {
    /* Nav */
    navHome: "Home",
    navSupport: "Support",
    navPrivacy: "Privacy",
    navTerms: "Terms",
    navWhy: "Why BetaSuite",

    /* Hero */
    heroTitle: "Catch every bug. Tell the whole story.",
    heroText: "BetaSuite is the mobile testing kit for people who actually report bugs — record screen and camera at once, replay the last 30 seconds, annotate, transcribe, and ship a polished report.",
    downloadAppStore: "Download on the App Store",
    downloadGooglePlay: "Get it on Google Play",
    metaText: "No subscription · No ads · No tracking · Yours for life",

    /* Value props strip */
    valueCaptureTitle: "Capture",
    valueCaptureText: "Screen + camera, instant replay, voice memos, photos.",
    valueAnnotateTitle: "Annotate",
    valueAnnotateText: "Draw, pin, and timestamp every clip and screenshot.",
    valueReportTitle: "Report",
    valueReportText: "Auto session summaries developers can actually read.",

    /* Feature grid (9 cards) */
    insideTitle: "What's inside",

    feat1Title: "Capture every moment",
    feat1Lead: "Dual recording, instant capture, live overlays.",
    feat1Text: "Records screen and front camera into one composited video while you switch apps. Tap once to save the last 30 seconds from a rolling buffer — perfect for intermittent glitches you couldn't predict. Every capture is auto-stamped with date, time, GPS, weather, and device info.",

    feat2Title: "Timeline-based sessions",
    feat2Lead: "Markers, voice notes, photos — all on one timeline.",
    feat2Text: "Drop a one-tap marker the second something happens. Attach a screenshot, dictate a voice note, or expand into a full bug report later. Every session captures device state, OS, battery health, and weather automatically — context is never missing.",

    feat3Title: "AI-assisted reports",
    feat3Lead: "A polished PDF or DOCX in seconds.",
    feat3Text: "Pick a period — this week, last week, custom range — and BetaSuite drafts a structured report (theme, positives, issues, recommendations) as scannable bullets. Images auto-sorted into Condition, Mapping, and Additional sections. Email it from the app.",

    feat4Title: "Confidential Mode",
    feat4Lead: "On-device AI for NDA work.",
    feat4Text: "Flip one switch and BetaSuite locks down cloud uploads, system share, and every cloud AI provider. Apple Intelligence keeps running fully on-device — no network call, ever — so AI polish and summaries still work on confidential hardware.",

    feat5Title: "AI routing, your way",
    feat5Lead: "Apple Intelligence first. BetaSuite Assist as fallback. Or bring your own key.",
    feat5Text: "Three tiers of routing: Apple Intelligence runs on-device where supported; BetaSuite Assist — our proprietary layer backed by Google Gemini — fills the gap; or paste your own API key for Claude, GPT, Gemini, DeepSeek, or Pollinations. Switch providers any time, with explicit one-tap consent before data leaves the device.",

    feat6Title: "Dial your AI use",
    feat6Lead: "Off, polish only, profanity masking, or full summarisation.",
    feat6Text: "Choose how much the AI does for you — minor wording polish on a feedback entry, profanity masking before a report goes out, or full session summarisation and report generation. The feedback form itself starts simple and expands only when you need category, severity, repro steps, annotated screenshots, and voice notes.",

    feat7Title: "Built for hardware testers",
    feat7Lead: "Front, Side, Back, Under — angle-tagged from the start.",
    feat7Text: "Multi-image condition shots with angle chips that pre-tag the next photo. Mapping screenshots and free-form additional photos live in their own report sections. Reverse-geocoded location and Apple WeatherKit conditions baked in.",

    feat8Title: "Project structure that scales",
    feat8Lead: "One project per product, instant capture for everything else.",
    feat8Text: "Group sessions, feedback, and reports under named projects. Attach NDAs and contacts per project — or skip setup entirely and use the always-pinned Instant Capture project for one-off finds.",

    feat9Title: "Cloud sync on your terms",
    feat9Lead: "iCloud Drive, Google Drive, OneDrive, Camera Roll, or nothing.",
    feat9Text: "BetaSuite never has its own server holding your data. Export to your existing cloud, your Camera Roll, or a portable encrypted .betasuite.json archive you can re-import on any device.",

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
    callout3Text: "Confidential Mode blocks every cloud route so NDA testing stays local.",
    calloutLink: "Read the full privacy policy →",

    /* Why teaser on home page */
    whyTeaserTitle: "Built for the tester, not the vendor.",
    whyTeaserLead: "The mainstream beta-testing tools instrument the product. BetaSuite instruments the tester.",
    whyTeaser1Problem: "Camera and screen at the same time?",
    whyTeaser1Answer: "BetaSuite composites both streams into one MP4 on the device being tested — no tripod, no second phone.",
    whyTeaser2Problem: "Bug already gone by the time you hit record?",
    whyTeaser2Answer: "A rolling 10–30 second buffer keeps the moment alive — one tap saves what just happened.",
    whyTeaser3Problem: "Cloud AI is a leak risk on NDA hardware?",
    whyTeaser3Answer: "Confidential Mode runs Apple Intelligence fully on-device. AI polish without the network risk.",
    whyTeaserLink: "See the full comparison →",

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
    taglineMain: "Competitors instrument the product. BetaSuite instruments the tester.",
    ctaTitle: "Ready to ship better bug reports?",
    ctaText: "Download BetaSuite — or get in touch if you have questions first.",
    ctaContact: "Questions? Get in touch →",

    /* Why page */
    whyTitle: "Built for the tester, not the vendor.",
    whyLead: "Instabug, Marker.io, Centercode, TestFairy, UXCam, UserTesting — they share one architectural assumption: the company being tested controls the tooling. That leaves the tester with a recurring set of frustrations. BetaSuite was built specifically to close those gaps.",
    problemLabel: "The problem",
    answerLabel: "BetaSuite's answer",

    pain1Problem: "You can't capture screen and camera at the same time.",
    pain1Problem2: "A video that shows \"I'm tapping here, and this is what the device does\" usually needs two phones and a tripod.",
    pain1Answer: "Dual recording composites both streams into a single MP4 on the device that's actually being tested. No tripod. No second phone.",

    pain2Problem: "Intermittent bugs vanish before you hit record.",
    pain2Problem2: "By the time you've started capture, the glitch is gone — and reproducing it is a guessing game.",
    pain2Answer: "Instant Capture keeps a rolling 10–30 second buffer in the background. One tap saves the moment that just passed. No setup, no missed evidence.",

    pain3Problem: "NDA work makes cloud AI a non-starter.",
    pain3Problem2: "Every cloud provider is a leak risk, so reports end up handwritten and slow.",
    pain3Answer: "Confidential Mode locks down cloud uploads, system share, and every cloud AI provider — while Apple Intelligence keeps running fully on-device, zero network calls. AI polish and summaries still work on confidential hardware.",

    pain4Problem: "Vendor SDKs ship your data to the vendor's cloud.",
    pain4Problem2: "Mainstream beta-testing tools send tester data to a vendor backend — fine for the company, not for sensitive prototypes.",
    pain4Answer: "BetaSuite has no server of its own. Everything is encrypted on your device, and data only moves when you pick a destination — your own iCloud Drive, Google Drive, OneDrive, Camera Roll, or a portable encrypted archive.",

    pain5Problem: "The weekly report is the slowest part of the job.",
    pain5Problem2: "Blank-page paralysis, especially when you're juggling multiple programs.",
    pain5Answer: "The period summary drafts a structured report — theme, positives, issues, recommendations — straight from the markers and feedback you've already logged. PDF or DOCX, scannable bullets, ready to email.",

    pain6Problem: "Tools are English-only — or ship with stale placeholder translations.",
    pain6Problem2: "Localisation in this space is usually an afterthought that ages badly.",
    pain6Answer: "BetaSuite launches with 21 fully translated locales and follows the device language at runtime — date, number, and time formats included.",

    whyClosingTagline: "Competitors instrument the product. BetaSuite instruments the tester.",

    /* Support page */
    supportTitle: "Support",
    supportLede: "We read every message and aim to reply within 2 business days.",
    contactTitle: "Get in touch",
    nameLabel: "Your name",
    emailLabel: "Your email address",
    categoryLabel: "Category",
    messageLabel: "Message",
    sendMessage: "Send message",
    faqTitle: "Frequently asked questions"
  },

  zh: {
    /* Nav */
    navHome: "主页",
    navSupport: "支持",
    navPrivacy: "隐私",
    navTerms: "条款",
    navWhy: "为什么选 BetaSuite",

    /* Hero */
    heroTitle: "捕捉每一个 Bug,讲清完整故事。",
    heroText: "BetaSuite 是为真正提交 Bug 报告的人打造的移动测试工具:同时录制屏幕和相机、回放最近 30 秒、标注、转录,再生成一份精炼的报告。",
    downloadAppStore: "在 App Store 下载",
    downloadGooglePlay: "在 Google Play 获取",
    metaText: "无订阅 · 无广告 · 无追踪 · 终身使用",

    /* Value props strip */
    valueCaptureTitle: "记录",
    valueCaptureText: "屏幕 + 相机、即时回放、语音备忘、照片。",
    valueAnnotateTitle: "标注",
    valueAnnotateText: "对每段视频和截图进行绘制、批注与时间戳标记。",
    valueReportTitle: "报告",
    valueReportText: "自动生成开发者真正读得懂的会话摘要。",

    /* Feature grid (9 cards) */
    insideTitle: "功能内容",

    feat1Title: "捕捉每一个瞬间",
    feat1Lead: "双路录制、即时捕捉、实时叠加。",
    feat1Text: "在你切换应用时,同时录制屏幕和前置相机并合成为一段视频。一键保存滚动缓冲中的最近 30 秒——非常适合那些难以预判的偶发故障。每次录制都会自动附上日期、时间、GPS、天气和设备信息。",

    feat2Title: "基于时间线的会话",
    feat2Lead: "标记、语音笔记、照片——全部在同一条时间线上。",
    feat2Text: "事件发生的那一刻,一键添加标记。附上截图、口述语音笔记,或稍后展开为完整 Bug 报告。每个会话都会自动捕获设备状态、操作系统、电池健康度和天气——上下文从不缺失。",

    feat3Title: "AI 辅助报告",
    feat3Lead: "几秒生成精致的 PDF 或 DOCX。",
    feat3Text: "选择时间段——本周、上周、自定义范围——BetaSuite 会以可快速浏览的要点起草结构化报告(主题、亮点、问题、建议)。图片自动归入 Condition、Mapping 和 Additional 各节。直接从应用内邮件发送。",

    feat4Title: "保密模式",
    feat4Lead: "面向 NDA 工作的本地 AI。",
    feat4Text: "一键开启,BetaSuite 即封锁云端上传、系统分享与所有云端 AI 提供商。Apple Intelligence 仍在设备本地运行——永远无网络调用——AI 润色与摘要在保密硬件上依然可用。",

    feat5Title: "按你的方式路由 AI",
    feat5Lead: "优先 Apple Intelligence,其次 BetaSuite Assist,或自带密钥。",
    feat5Text: "三层路由:在支持的设备上,Apple Intelligence 在本地运行;BetaSuite Assist——由 Google Gemini 支持的我们的专有层——填补空白;或粘贴你自己的 API 密钥用于 Claude、GPT、Gemini、DeepSeek 或 Pollinations。随时切换提供商,数据离开设备前都需明确的一键同意。",

    feat6Title: "自由调节 AI 使用程度",
    feat6Lead: "关闭、仅润色、屏蔽脏话,或完整摘要。",
    feat6Text: "自由选择 AI 的参与程度——反馈条目的轻度措辞润色、报告发出前的脏话屏蔽,或完整的会话摘要与报告生成。反馈表单本身保持简洁,仅在需要时展开类别、严重程度、重现步骤、带标注的截图和语音笔记。",

    feat7Title: "为硬件测试而生",
    feat7Lead: "正面、侧面、背面、底部——从一开始就带角度标签。",
    feat7Text: "支持多图状态拍摄,角度标签会为下一张照片预先标记。Mapping 截图与自由形式的附加照片各自有专属报告分区。内置反向地理编码定位与 Apple WeatherKit 天气信息。",

    feat8Title: "可扩展的项目结构",
    feat8Lead: "每个产品一个项目,其余用即时捕捉。",
    feat8Text: "将会话、反馈和报告归入命名项目。可按项目附上 NDA 和联系人——或跳过设置,使用始终置顶的 Instant Capture 项目记录一次性发现。",

    feat9Title: "按你的意愿同步",
    feat9Lead: "iCloud Drive、Google Drive、OneDrive、相册或不同步。",
    feat9Text: "BetaSuite 没有自己的服务器保存你的数据。可导出到你已有的云盘、相册,或一份可在任何设备上重新导入的便携加密 .betasuite.json 归档。",

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
    calloutLead: "只要你的 iPhone 支持,BetaSuite 都会优先使用本地 AI。",
    callout1Title: "AI 留在你的设备上",
    callout1Text: "Apple Intelligence(iOS 26+,iPhone 15 Pro / 16 / 17)在本地完成文本生成。",
    callout2Title: "语音不外传",
    callout2Text: "在支持的 iPhone 上,语音备忘通过 Apple Speech 框架在本地转录。",
    callout3Title: "一键应对敏感工作",
    callout3Text: "保密模式封锁所有云端路径,让 NDA 测试始终保持本地化。",
    calloutLink: "查看完整隐私政策 →",

    /* Why teaser on home page */
    whyTeaserTitle: "为测试者而造,而非厂商。",
    whyTeaserLead: "主流的 Beta 测试工具都在仪表化产品。BetaSuite 仪表化测试者本身。",
    whyTeaser1Problem: "能同时录屏幕和相机吗?",
    whyTeaser1Answer: "BetaSuite 在被测设备上把两路画面合成为一段 MP4——无需三脚架,无需第二台手机。",
    whyTeaser2Problem: "按下录制按钮时 Bug 已经消失?",
    whyTeaser2Answer: "10–30 秒的滚动缓冲让那一刻不再溜走——一键保存刚刚发生的内容。",
    whyTeaser3Problem: "云端 AI 是 NDA 硬件上的泄漏风险?",
    whyTeaser3Answer: "保密模式让 Apple Intelligence 完全在设备本地运行。AI 润色,零网络风险。",
    whyTeaserLink: "查看完整对比 →",

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
    taglineMain: "竞品仪表化产品。BetaSuite 仪表化测试者。",
    ctaTitle: "准备好提交更好的 Bug 报告了吗?",
    ctaText: "下载 BetaSuite——若你有疑问,也可以先联系我们。",
    ctaContact: "有疑问?联系我们 →",

    /* Why page */
    whyTitle: "为测试者而造,而非厂商。",
    whyLead: "Instabug、Marker.io、Centercode、TestFairy、UXCam、UserTesting——它们都有一个共同的架构假设:被测试的公司掌控工具。这让测试者本身陷入反复出现的痛点。BetaSuite 正是为弥合这些缺口而生。",
    problemLabel: "痛点",
    answerLabel: "BetaSuite 的解法",

    pain1Problem: "无法同时捕捉屏幕和相机。",
    pain1Problem2: "若视频既要显示\"我正点这里\",又要显示\"设备如何反应\",通常得用两台手机和一个三脚架。",
    pain1Answer: "双路录制在被测设备本身上把两路画面合成为一段 MP4。无需三脚架,无需第二台手机。",

    pain2Problem: "偶发 Bug 在按下录制前就消失。",
    pain2Problem2: "等你开启捕捉,故障已经过去——复现成了猜谜游戏。",
    pain2Answer: "即时捕捉在后台维持 10–30 秒的滚动缓冲。一键保存刚刚发生的瞬间。无需设置,不漏证据。",

    pain3Problem: "NDA 工作让云端 AI 难以使用。",
    pain3Problem2: "每家云服务商都是泄漏风险,报告最终只能手写,效率低下。",
    pain3Answer: "保密模式封锁云端上传、系统分享和所有云端 AI——Apple Intelligence 仍完全在本地运行,零网络调用。AI 润色与摘要在保密硬件上依然可用。",

    pain4Problem: "厂商 SDK 把你的数据送进厂商的云。",
    pain4Problem2: "主流 Beta 测试工具会把测试者数据发往厂商后端——对公司可以,对敏感原型不行。",
    pain4Answer: "BetaSuite 没有自己的服务器。一切都在你的设备上加密;只有你选定目的地时数据才会移动——你自己的 iCloud Drive、Google Drive、OneDrive、相册,或便携加密归档。",

    pain5Problem: "周报是工作中最慢的一环。",
    pain5Problem2: "尤其在同时管理多个项目时,白纸一张令人卡住。",
    pain5Answer: "时段摘要直接从你已记录的标记和反馈中起草结构化报告——主题、亮点、问题、建议。PDF 或 DOCX,要点清晰,随时发送。",

    pain6Problem: "工具仅支持英文——或附带陈旧的占位翻译。",
    pain6Problem2: "该领域的本地化通常是事后补丁,质量随时间下降。",
    pain6Answer: "BetaSuite 发布时提供 21 种完整翻译的语言,并在运行时跟随设备语言——日期、数字与时间格式同步切换。",

    whyClosingTagline: "竞品仪表化产品。BetaSuite 仪表化测试者。",

    /* Support page */
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
