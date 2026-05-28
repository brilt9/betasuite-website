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
    heroText: "Dual-record screen and camera, drop voice-noted markers as you test, and ship a polished PDF report — all on iPhone, with on-device AI when you want it.",
    downloadAppStore: "Download on the App Store",
    androidNote: "iPhone only — Android in development, release date to be confirmed.",
    androidNotifyLink: "Notify me →",
    metaText: "One-off App Store purchase · No subscription · No ads · No tracking · Yours for life",

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
    feat1Text: "Records screen and front camera into one composited video while you switch apps. Tap once to save the last 30 seconds from a rolling buffer — perfect for intermittent glitches you couldn't predict. Every capture is auto-stamped with date, time, GPS, weather, and device info. Trim the dead time off a clip in-app afterwards — frame-accurate with one-tap undo.",

    feat2Title: "Timeline-based sessions",
    feat2Lead: "Markers, voice notes, photos — all on one timeline.",
    feat2Text: "Drop a one-tap marker the second something happens. Attach a screenshot, dictate a voice note, or expand into a full bug report later. Every session captures device state, OS, battery health, and weather automatically — context is never missing.",

    feat3Title: "AI-assisted reports",
    feat3Lead: "A polished PDF or DOCX in seconds.",
    feat3Text: "Pick a period — this week, last week, custom range — and BetaSuite drafts a structured report (theme, positives, issues, recommendations) as scannable bullets. Images auto-sorted into Condition, Mapping, and Additional sections, with each section on its own page so the PDF reads like a deck of chapters. Per-project brand colour. Email it from the app.",

    feat4Title: "Confidential Mode",
    feat4Lead: "On-device AI for NDA work.",
    feat4Text: "Flip one switch and BetaSuite locks down cloud uploads, system share, and every cloud AI provider. Apple Intelligence keeps running fully on-device — no network call, ever — so AI polish and summaries still work on confidential hardware.",

    feat5Title: "AI routing, your way",
    feat5Lead: "Apple Intelligence on-device, BetaSuite Assist as fallback. Or bring your own key.",
    feat5Text: "By default, Apple Intelligence runs on-device with BetaSuite Assist as the cloud fallback. Prefer your own provider? Bring your API key for Claude, GPT, Gemini, or DeepSeek. Pollinations is available as an emergency fallback. Switch providers any time in Settings — every change asks for explicit consent before data leaves the device.",

    feat6Title: "Dial your AI use",
    feat6Lead: "Off, polish only, profanity masking, or full summarisation.",
    feat6Text: "Choose how much the AI does for you — minor wording polish on a feedback entry, profanity masking before a report goes out, or full session summarisation and report generation. The feedback form itself starts simple and expands only when you need category, severity, repro steps, annotated screenshots, and voice notes.",

    feat7Title: "Built for hardware testers",
    feat7Lead: "Front, Side, Back, Under — angle-tagged from the start.",
    feat7Text: "Multi-image condition shots with angle chips that pre-tag the next photo. Mapping screenshots and free-form additional photos live in their own report sections. Reverse-geocoded location and Apple Weather conditions baked in. Drop in photos taken months ago and BetaSuite restores the original date, GPS, and the actual weather from that moment — not from when you uploaded. Live charge-port readout (volts, amps, watts) for power-delivery debugging.",

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
    whyTeaser2Answer: "A rolling 15- or 30-second buffer keeps the moment alive — one tap saves what just happened.",
    whyTeaser3Problem: "Cloud AI is a leak risk on NDA hardware?",
    whyTeaser3Answer: "Confidential Mode runs Apple Intelligence fully on-device. AI polish without the network risk.",
    whyTeaserLink: "See the full comparison →",

    /* FAQ teaser */
    faqTeaserTitle: "Common questions",
    faqQ1: "Which devices are supported?",
    faqA1: "iPhone with iOS 16 or later. Android is in development — release date to be confirmed.",
    faqQ2: "Do I need an account?",
    faqA2: "BetaSuite itself doesn't require an account, but you'll need a valid Apple ID / App Store account to purchase and download the app.",
    faqQ3: "What is Confidential Mode?",
    faqA3: "Confidential Mode blocks cloud sync and cloud AI, keeping processing local-only where possible.",
    faqQ4: "Is there a subscription?",
    faqA4: "No — BetaSuite is a one-off App Store purchase. Pay once, yours for life.",
    faqDeleteQ: "How do I delete my data?",
    faqDeleteA: "Open BetaSuite and go to Settings → Data → Wipe all app data.",
    notFoundTitle: "Page not found",
    notFoundText: "That page isn't here. It may have moved, or never existed in the first place.",
    notFoundHome: "Back to home",
    notFoundContact: "Contact support",
    pageTitleIndex: "BetaSuite — Built for the tester, not the vendor",
    pageTitleWhy: "Why BetaSuite — Built for the tester, not the vendor",
    pageTitleSupport: "Support — BetaSuite",
    metaDescIndex: "BetaSuite is the mobile testing kit for people who actually report bugs: dual screen + camera recording, 30-second instant replay, on-device AI, Confidential Mode for NDA work, and reports developers can read.",
    metaDescWhy: "How BetaSuite addresses the recurring pain points of mobile beta testers: dual screen + camera recording, instant replay buffer, Confidential Mode for NDA work, no vendor cloud, and AI-drafted reports.",
    metaDescSupport: "Get help with BetaSuite: contact form, FAQs, troubleshooting, account & data deletion, and how to report a bug.",
    pageTitlePrivacy: "Privacy Policy — BetaSuite",
    metaDescPrivacy: "BetaSuite privacy policy. BetaSuite is built local-first: data lives on your device by default and never leaves it unless you use a feature that calls outside.",
    pageTitleTerms: "Terms of Use — BetaSuite",
    metaDescTerms: "BetaSuite terms of use. The licence, restrictions, intellectual property, third-party services, warranty disclaimer, and governing law for the BetaSuite app.",
    privacyTitle: "Privacy Policy",
    termsTitle: "Terms of Use",
    legalEnglishOnlyNotice: "The body of this document is provided in English only. Any translation elsewhere on the site is for convenience — the English version is the authoritative legal text.",
    featureRequestTitle: "Have a feature idea?",
    featureRequestBody: "Feature requests live on a public GitHub repo so other testers can see and upvote them. You can submit new ideas directly from inside the app via Settings → Feature Requests, with on-device PII redaction before anything is posted.",
    featureRequestLink: "Browse the public feature-request board on GitHub →",
    faqMore: "More on the support page →",

    /* Closing CTA */
    taglineMain: "Competitors instrument the product. BetaSuite instruments the tester.",
    ctaTitle: "Ready to ship better bug reports?",
    ctaText: "Download BetaSuite — or get in touch if you have questions first.",
    ctaContact: "Questions? Get in touch →",

    /* Why page */
    whyTitle: "Built for the tester, not the vendor.",
    whyLead: "The mainstream beta-testing tools share one architectural assumption: the company being tested controls the tooling. That leaves the tester with a recurring set of frustrations. BetaSuite was built specifically to close those gaps.",
    problemLabel: "The problem",
    answerLabel: "BetaSuite's answer",

    pain1Problem: "You can't capture screen and camera at the same time.",
    pain1Problem2: "A video that shows \"I'm tapping here, and this is what the device does\" usually needs two phones and a tripod.",
    pain1Answer: "Dual recording composites both streams into a single MP4 on the device that's actually being tested. No tripod. No second phone.",

    pain2Problem: "Intermittent bugs vanish before you hit record.",
    pain2Problem2: "By the time you've started capture, the glitch is gone — and reproducing it is a guessing game.",
    pain2Answer: "Instant Capture keeps a rolling 15- or 30-second buffer in the background. One tap saves the moment that just passed. No setup, no missed evidence.",

    pain3Problem: "NDA work makes cloud AI a non-starter.",
    pain3Problem2: "Every cloud provider is a leak risk, so reports end up handwritten and slow.",
    pain3Answer: "Confidential Mode locks down cloud uploads, system share, and every cloud AI provider — while Apple Intelligence keeps running fully on-device, zero network calls. AI polish and summaries still work on confidential hardware.",

    pain4Problem: "Vendor SDKs ship your data to the vendor's cloud.",
    pain4Problem2: "Mainstream beta-testing tools send tester data to a vendor backend — fine for the company, not for sensitive prototypes.",
    pain4Answer: "BetaSuite has no server of its own. Everything is encrypted on your device, and data only moves when you pick a destination — your own iCloud Drive, Google Drive, OneDrive, Camera Roll, or a portable encrypted archive.",

    pain5Problem: "The weekly report is the slowest part of the job.",
    pain5Problem2: "Blank-page paralysis, especially when you're juggling multiple programs.",
    pain5Answer: "The period summary drafts a structured report — theme, positives, issues, recommendations — straight from the markers and feedback you've already logged. PDF or DOCX, scannable bullets, ready to email.",

    pain6Problem: "Beta-testing tools are often English-only.",
    pain6Problem2: "Multi-language support, when it exists, often ships stale and ages badly.",
    pain6Answer: "Now shipping in 21 languages — BetaSuite follows your device language live, so testers in Tokyo, Berlin, or São Paulo all see the app in their own.",

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
    androidNote: "仅支持 iPhone——Android 正在开发中,发布日期待定。",
    androidNotifyLink: "通知我 →",
    metaText: "App Store 一次性购买 · 无订阅 · 无广告 · 无追踪 · 终身使用",

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
    feat1Text: "在你切换应用时,同时录制屏幕和前置相机并合成为一段视频。一键保存滚动缓冲中的最近 30 秒——非常适合那些难以预判的偶发故障。每次录制都会自动附上日期、时间、GPS、天气和设备信息。事后可在应用内修剪片段开头或结尾的空闲时间——精确到帧,一键撤销。",

    feat2Title: "基于时间线的会话",
    feat2Lead: "标记、语音笔记、照片——全部在同一条时间线上。",
    feat2Text: "事件发生的那一刻,一键添加标记。附上截图、口述语音笔记,或稍后展开为完整 Bug 报告。每个会话都会自动捕获设备状态、操作系统、电池健康度和天气——上下文从不缺失。",

    feat3Title: "AI 辅助报告",
    feat3Lead: "几秒生成精致的 PDF 或 DOCX。",
    feat3Text: "选择时间段——本周、上周、自定义范围——BetaSuite 会以可快速浏览的要点起草结构化报告(主题、亮点、问题、建议)。图片自动归入 Condition、Mapping 和 Additional 各节,每节独占一页,让 PDF 读起来像一本分章的文档。支持按项目品牌色。直接从应用内邮件发送。",

    feat4Title: "保密模式",
    feat4Lead: "面向 NDA 工作的本地 AI。",
    feat4Text: "一键开启,BetaSuite 即封锁云端上传、系统分享与所有云端 AI 提供商。Apple Intelligence 仍在设备本地运行——永远无网络调用——AI 润色与摘要在保密硬件上依然可用。",

    feat5Title: "按你的方式路由 AI",
    feat5Lead: "Apple Intelligence 在设备本地运行,云端回退到 BetaSuite Assist。或自带密钥。",
    feat5Text: "默认情况下,BetaSuite 在设备本地使用 Apple Intelligence,云端回退到 BetaSuite Assist。更愿意使用自己的提供商?可带入 Claude、GPT、Gemini 或 DeepSeek 的 API 密钥。Pollinations 可作为紧急回退选项。任何时候可在「设置」中切换提供商——数据离开设备前都需明确同意。",

    feat6Title: "自由调节 AI 使用程度",
    feat6Lead: "关闭、仅润色、屏蔽脏话,或完整摘要。",
    feat6Text: "自由选择 AI 的参与程度——反馈条目的轻度措辞润色、报告发出前的脏话屏蔽,或完整的会话摘要与报告生成。反馈表单本身保持简洁,仅在需要时展开类别、严重程度、重现步骤、带标注的截图和语音笔记。",

    feat7Title: "为硬件测试而生",
    feat7Lead: "正面、侧面、背面、底部——从一开始就带角度标签。",
    feat7Text: "支持多图状态拍摄,角度标签会为下一张照片预先标记。Mapping 截图与自由形式的附加照片各自有专属报告分区。内置反向地理编码定位与 Apple Weather 天气信息。导入数月前拍摄的照片,BetaSuite 会还原原始日期、GPS,以及拍摄当时的真实天气——而不是上传那一刻的天气。内置充电口实时读数(电压、电流、功率),便于排查供电问题。",

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
    whyTeaser2Answer: "15 或 30 秒的滚动缓冲让那一刻不再溜走——一键保存刚刚发生的内容。",
    whyTeaser3Problem: "云端 AI 是 NDA 硬件上的泄漏风险?",
    whyTeaser3Answer: "保密模式让 Apple Intelligence 完全在设备本地运行。AI 润色,零网络风险。",
    whyTeaserLink: "查看完整对比 →",

    /* FAQ teaser */
    faqTeaserTitle: "常见问题",
    faqQ1: "支持哪些设备?",
    faqA1: "iPhone(iOS 16 及以上)。Android 正在开发中,发布日期待定。",
    faqQ2: "需要账号吗?",
    faqA2: "BetaSuite 本身不需要账号,但你需要有效的 Apple ID / App Store 账号来购买和下载应用。",
    faqQ3: "什么是保密模式?",
    faqA3: "保密模式封锁云同步和云端 AI,尽可能将处理保留在本地。",
    faqQ4: "需要订阅吗?",
    faqA4: "不需要——BetaSuite 是 App Store 一次性购买。一次付款,终身使用。",
    faqDeleteQ: "如何删除我的数据?",
    faqDeleteA: "打开 BetaSuite,前往「设置 → 数据 → 清除所有应用数据」。",
    notFoundTitle: "页面未找到",
    notFoundText: "此页面不存在。可能已被移动,或从未存在过。",
    notFoundHome: "返回主页",
    notFoundContact: "联系支持",
    pageTitleIndex: "BetaSuite —— 为测试者而造,而非厂商",
    pageTitleWhy: "为什么选 BetaSuite —— 为测试者而造,而非厂商",
    pageTitleSupport: "支持 —— BetaSuite",
    metaDescIndex: "BetaSuite 是为真正提交 Bug 报告的人打造的移动测试工具:同时录制屏幕和相机、回放最近 30 秒、设备本地 AI、面向 NDA 工作的保密模式,以及开发者真正读得懂的报告。",
    metaDescWhy: "BetaSuite 如何解决移动 Beta 测试者反复遇到的痛点:屏幕 + 相机双路录制、即时回放缓冲、面向 NDA 工作的保密模式、零厂商云端、AI 起草的报告。",
    metaDescSupport: "获取 BetaSuite 帮助:联系表单、常见问题、故障排查、账号与数据删除,以及如何报告 Bug。",
    pageTitlePrivacy: "隐私政策 —— BetaSuite",
    metaDescPrivacy: "BetaSuite 隐私政策。BetaSuite 以设备本地优先构建:数据默认存放在你的设备上,除非你使用调用外部服务的功能,否则永远不会离开设备。",
    pageTitleTerms: "使用条款 —— BetaSuite",
    metaDescTerms: "BetaSuite 使用条款:BetaSuite 应用的许可、限制、知识产权、第三方服务、免责声明与适用法律。",
    privacyTitle: "隐私政策",
    termsTitle: "使用条款",
    legalEnglishOnlyNotice: "本文件的正文仅以英文提供。本站其他位置的翻译仅供参考——具有法律效力的版本以英文为准。",
    featureRequestTitle: "有功能建议吗?",
    featureRequestBody: "功能请求托管在公共的 GitHub 仓库,让其他测试者也能看到并点赞。你可以直接在应用内通过「设置 → 功能请求」提交新想法——在发布前,应用会在本地完成 PII 脱敏。",
    featureRequestLink: "在 GitHub 上浏览公共的功能请求列表 →",
    faqMore: "在支持页面查看更多 →",

    /* Closing CTA */
    taglineMain: "竞品仪表化产品。BetaSuite 仪表化测试者。",
    ctaTitle: "准备好提交更好的 Bug 报告了吗?",
    ctaText: "下载 BetaSuite——若你有疑问,也可以先联系我们。",
    ctaContact: "有疑问?联系我们 →",

    /* Why page */
    whyTitle: "为测试者而造,而非厂商。",
    whyLead: "主流的 Beta 测试工具都有一个共同的架构假设:被测试的公司掌控工具。这让测试者本身陷入反复出现的痛点。BetaSuite 正是为弥合这些缺口而生。",
    problemLabel: "痛点",
    answerLabel: "BetaSuite 的解法",

    pain1Problem: "无法同时捕捉屏幕和相机。",
    pain1Problem2: "若视频既要显示\"我正点这里\",又要显示\"设备如何反应\",通常得用两台手机和一个三脚架。",
    pain1Answer: "双路录制在被测设备本身上把两路画面合成为一段 MP4。无需三脚架,无需第二台手机。",

    pain2Problem: "偶发 Bug 在按下录制前就消失。",
    pain2Problem2: "等你开启捕捉,故障已经过去——复现成了猜谜游戏。",
    pain2Answer: "即时捕捉在后台维持 15 或 30 秒的滚动缓冲。一键保存刚刚发生的瞬间。无需设置,不漏证据。",

    pain3Problem: "NDA 工作让云端 AI 难以使用。",
    pain3Problem2: "每家云服务商都是泄漏风险,报告最终只能手写,效率低下。",
    pain3Answer: "保密模式封锁云端上传、系统分享和所有云端 AI——Apple Intelligence 仍完全在本地运行,零网络调用。AI 润色与摘要在保密硬件上依然可用。",

    pain4Problem: "厂商 SDK 把你的数据送进厂商的云。",
    pain4Problem2: "主流 Beta 测试工具会把测试者数据发往厂商后端——对公司可以,对敏感原型不行。",
    pain4Answer: "BetaSuite 没有自己的服务器。一切都在你的设备上加密;只有你选定目的地时数据才会移动——你自己的 iCloud Drive、Google Drive、OneDrive、相册,或便携加密归档。",

    pain5Problem: "周报是工作中最慢的一环。",
    pain5Problem2: "尤其在同时管理多个项目时,白纸一张令人卡住。",
    pain5Answer: "时段摘要直接从你已记录的标记和反馈中起草结构化报告——主题、亮点、问题、建议。PDF 或 DOCX,要点清晰,随时发送。",

    pain6Problem: "Beta 测试工具通常仅支持英文。",
    pain6Problem2: "即便有多语言支持,通常也是陈旧的翻译,质量随时间下降。",
    pain6Answer: "现已支持 21 种语言——BetaSuite 实时跟随设备语言,无论测试者身在东京、柏林还是圣保罗,都能看到母语界面。",

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
  },

  de: {
    /* Nav */
    navHome: "Start",
    navSupport: "Support",
    navPrivacy: "Datenschutz",
    navTerms: "Nutzungsbedingungen",
    navWhy: "Warum BetaSuite",

    /* Hero */
    heroTitle: "Jeden Bug einfangen. Die ganze Geschichte erzählen.",
    heroText: "BetaSuite ist das mobile Test-Kit für Leute, die wirklich Bugs melden – Bildschirm und Kamera gleichzeitig aufnehmen, die letzten 30 Sekunden wiedergeben, annotieren, transkribieren und einen ausgefeilten Bericht abliefern.",
    downloadAppStore: "Im App Store laden",
    androidNote: "Nur für iPhone – Android in Entwicklung, Veröffentlichungsdatum noch offen.",
    androidNotifyLink: "Benachrichtige mich →",
    metaText: "Einmalkauf im App Store · Kein Abo · Keine Werbung · Kein Tracking · Lebenslang nutzbar",

    /* Value props strip */
    valueCaptureTitle: "Aufzeichnen",
    valueCaptureText: "Bildschirm + Kamera, Sofortwiedergabe, Sprachnotizen, Fotos.",
    valueAnnotateTitle: "Annotieren",
    valueAnnotateText: "Zeichnen, markieren und mit Zeitstempel auf jedem Clip und Screenshot.",
    valueReportTitle: "Berichten",
    valueReportText: "Automatische Session-Zusammenfassungen, die Entwickler tatsächlich lesen.",

    /* Feature grid (9 cards) */
    insideTitle: "Was drinsteckt",

    feat1Title: "Jeden Moment einfangen",
    feat1Lead: "Doppelaufnahme, Sofortaufnahme, Live-Overlays.",
    feat1Text: "Nimmt Bildschirm und Frontkamera in einem zusammengesetzten Video auf, während du Apps wechselst. Ein Tipp speichert die letzten 30 Sekunden aus einem rollenden Puffer – perfekt für unvorhersehbare, sporadische Fehler. Jede Aufnahme erhält automatisch Datum, Uhrzeit, GPS, Wetter und Geräteinformationen. Schneide nachträglich Leerzeit aus einem Clip direkt in der App – framegenau, mit Undo per Tipp.",

    feat2Title: "Sessions auf einer Zeitleiste",
    feat2Lead: "Marker, Sprachnotizen, Fotos – alles auf einer Zeitleiste.",
    feat2Text: "Setze in dem Moment, in dem etwas passiert, mit einem Tipp einen Marker. Hänge einen Screenshot an, diktiere eine Sprachnotiz oder erweitere später zu einem vollständigen Bug-Report. Jede Session erfasst Gerätestatus, OS, Akkugesundheit und Wetter automatisch – Kontext fehlt nie.",

    feat3Title: "KI-gestützte Berichte",
    feat3Lead: "Ein ausgefeiltes PDF oder DOCX in Sekunden.",
    feat3Text: "Wähle einen Zeitraum – diese Woche, letzte Woche, individueller Bereich – und BetaSuite entwirft einen strukturierten Bericht (Thema, Pluspunkte, Probleme, Empfehlungen) als überfliegbare Stichpunkte. Bilder werden automatisch in die Abschnitte Zustand, Mapping und Zusätzlich sortiert, jeder Abschnitt auf einer eigenen Seite, sodass das PDF wie ein Kapitelbuch liest. Projektbezogene Markenfarbe. Direkt aus der App per Mail versenden.",

    feat4Title: "Vertraulicher Modus",
    feat4Lead: "Geräteinterne KI für NDA-Arbeit.",
    feat4Text: "Ein Schalter genügt und BetaSuite sperrt Cloud-Uploads, System-Sharing und jeden Cloud-KI-Anbieter. Apple Intelligence läuft weiter vollständig auf dem Gerät – kein einziger Netzwerkaufruf – sodass KI-Politur und Zusammenfassungen auch auf vertraulicher Hardware funktionieren.",

    feat5Title: "KI-Routing nach deinem Geschmack",
    feat5Lead: "Apple Intelligence auf dem Gerät, BetaSuite Assist als Fallback. Oder nutze deinen eigenen Schlüssel.",
    feat5Text: "Standardmäßig läuft Apple Intelligence auf dem Gerät, mit BetaSuite Assist als Cloud-Fallback. Lieber dein eigener Anbieter? Bring deinen API-Schlüssel für Claude, GPT, Gemini oder DeepSeek mit. Pollinations steht als Notfall-Fallback bereit. Anbieter jederzeit in den Einstellungen wechseln – jede Änderung verlangt eine ausdrückliche Zustimmung, bevor Daten das Gerät verlassen.",

    feat6Title: "Stelle deine KI-Nutzung ein",
    feat6Lead: "Aus, nur Politur, Schimpfwortmaskierung oder vollständige Zusammenfassung.",
    feat6Text: "Wähle, wie viel die KI für dich übernimmt – kleine Wortpolitur an einem Feedback-Eintrag, Maskierung von Schimpfwörtern bevor ein Bericht rausgeht, oder vollständige Session-Zusammenfassung und Berichtserstellung. Das Feedback-Formular selbst beginnt schlicht und erweitert sich nur, wenn du Kategorie, Schweregrad, Reproduktionsschritte, annotierte Screenshots und Sprachnotizen brauchst.",

    feat7Title: "Für Hardware-Tester gebaut",
    feat7Lead: "Vorne, Seite, Hinten, Unten – von Anfang an mit Winkel-Tags.",
    feat7Text: "Mehrbild-Zustandsaufnahmen mit Winkel-Chips, die das nächste Foto vortaggen. Mapping-Screenshots und freie Zusatzfotos haben eigene Berichtsabschnitte. Reverse-Geocoding-Standort und Apple Weather-Bedingungen sind eingebaut. Lade Fotos hoch, die du vor Monaten aufgenommen hast – BetaSuite stellt das ursprüngliche Datum, den GPS-Punkt und das tatsächliche Wetter aus diesem Moment wieder her, nicht das vom Upload-Zeitpunkt. Live-Ladeanschluss-Anzeige (Volt, Ampere, Watt) zum Debuggen der Stromversorgung.",

    feat8Title: "Projektstruktur, die mitwächst",
    feat8Lead: "Ein Projekt pro Produkt, Sofortaufnahme für alles andere.",
    feat8Text: "Bündele Sessions, Feedback und Berichte unter benannten Projekten. Hänge NDAs und Kontakte pro Projekt an – oder überspringe das Setup ganz und nutze das immer angeheftete Sofortaufnahme-Projekt für einmalige Funde.",

    feat9Title: "Cloud-Sync nach deinen Regeln",
    feat9Lead: "iCloud Drive, Google Drive, OneDrive, Fotomediathek oder gar nichts.",
    feat9Text: "BetaSuite hat nie einen eigenen Server, der deine Daten hält. Exportiere in deine bestehende Cloud, in deine Fotomediathek oder als portables, verschlüsseltes .betasuite.json-Archiv, das du auf jedem Gerät neu importieren kannst.",

    /* How it works */
    howTitle: "So funktioniert es",
    step1Title: "1. Session aufzeichnen",
    step1Text: "Starte ein Projekt, drücke Aufnahme und nutze die App oder das Gerät so, wie ein Tester es täte.",
    step2Title: "2. Markieren und annotieren",
    step2Text: "Setze Marker, füge Sprachnotizen hinzu und zeichne auf Screenshots – alles automatisch mit Zeitstempel.",
    step3Title: "3. Bericht erstellen",
    step3Text: "BetaSuite stellt eine Session-Zusammenfassung samt Medien zusammen, fertig zum Teilen mit Entwicklern.",

    /* Callout */
    calloutTitle: "Privacy-first by design",
    calloutLead: "BetaSuite setzt überall, wo dein iPhone es unterstützt, auf KI auf dem Gerät.",
    callout1Title: "KI, die auf deinem Gerät bleibt",
    callout1Text: "Apple Intelligence (iOS 26+, iPhone 15 Pro / 16 / 17) erledigt die Textgenerierung lokal.",
    callout2Title: "Sprache, die nicht weggeht",
    callout2Text: "Sprachnotizen werden auf unterstützten iPhones via Apples Speech-Framework auf dem Gerät transkribiert.",
    callout3Title: "Ein Schalter für sensible Arbeit",
    callout3Text: "Der Vertrauliche Modus blockiert jeden Cloud-Weg, sodass NDA-Tests lokal bleiben.",
    calloutLink: "Vollständige Datenschutzerklärung lesen →",

    /* Why teaser on home page */
    whyTeaserTitle: "Für den Tester gebaut, nicht für den Anbieter.",
    whyTeaserLead: "Die gängigen Beta-Test-Tools vermessen das Produkt. BetaSuite vermisst den Tester.",
    whyTeaser1Problem: "Kamera und Bildschirm gleichzeitig?",
    whyTeaser1Answer: "BetaSuite kombiniert beide Streams zu einer MP4 auf dem getesteten Gerät – kein Stativ, kein zweites Telefon.",
    whyTeaser2Problem: "Bug schon weg, bevor du auf Aufnahme drückst?",
    whyTeaser2Answer: "Ein rollender 15- oder 30-Sekunden-Puffer hält den Moment fest – ein Tipp speichert, was gerade passiert ist.",
    whyTeaser3Problem: "Cloud-KI ist auf NDA-Hardware ein Leck-Risiko?",
    whyTeaser3Answer: "Der Vertrauliche Modus lässt Apple Intelligence vollständig auf dem Gerät laufen. KI-Politur ohne Netzwerkrisiko.",
    whyTeaserLink: "Vollständigen Vergleich ansehen →",

    /* FAQ teaser */
    faqTeaserTitle: "Häufige Fragen",
    faqQ1: "Welche Geräte werden unterstützt?",
    faqA1: "iPhone mit iOS 16 oder neuer. Android ist in Entwicklung – Veröffentlichungsdatum noch offen.",
    faqQ2: "Brauche ich ein Konto?",
    faqA2: "BetaSuite selbst benötigt kein Konto, aber du brauchst eine gültige Apple-ID bzw. ein App-Store-Konto, um die App zu kaufen und zu laden.",
    faqQ3: "Was ist der Vertrauliche Modus?",
    faqA3: "Der Vertrauliche Modus blockiert Cloud-Sync und Cloud-KI und hält die Verarbeitung wo möglich rein lokal.",
    faqQ4: "Gibt es ein Abo?",
    faqA4: "Nein – BetaSuite ist ein Einmalkauf im App Store. Einmal zahlen, lebenslang nutzen.",
    faqDeleteQ: "Wie lösche ich meine Daten?",
    faqDeleteA: "Öffne BetaSuite und gehe zu Einstellungen → Daten → Alle App-Daten löschen.",
    notFoundTitle: "Seite nicht gefunden",
    notFoundText: "Diese Seite ist nicht hier. Sie wurde vielleicht verschoben oder hat nie existiert.",
    notFoundHome: "Zur Startseite",
    notFoundContact: "Support kontaktieren",
    pageTitleIndex: "BetaSuite — Für die Testenden, nicht den Anbieter",
    pageTitleWhy: "Warum BetaSuite — Für die Testenden, nicht den Anbieter",
    pageTitleSupport: "Support — BetaSuite",
    metaDescIndex: "BetaSuite ist das mobile Test-Kit für Leute, die wirklich Bugs melden: Bildschirm- und Kamera-Aufnahme gleichzeitig, 30-Sekunden Instant-Replay, On-Device-KI, Vertraulicher Modus für NDA-Arbeit und Reports, die Entwickler tatsächlich lesen.",
    metaDescWhy: "Wie BetaSuite die wiederkehrenden Probleme mobiler Beta-Tester löst: gleichzeitige Bildschirm- + Kamera-Aufnahme, Instant-Replay-Puffer, Vertraulicher Modus für NDA-Arbeit, keine Anbieter-Cloud und KI-entworfene Reports.",
    metaDescSupport: "Hilfe zu BetaSuite: Kontaktformular, FAQs, Fehlerbehebung, Konto- und Datenlöschung sowie wie man einen Bug meldet.",
    pageTitlePrivacy: "Datenschutzerklärung — BetaSuite",
    metaDescPrivacy: "Datenschutzerklärung von BetaSuite. BetaSuite ist „local-first“ gebaut: Daten bleiben standardmäßig auf deinem Gerät und verlassen es nur, wenn du eine Funktion nutzt, die nach außen ruft.",
    pageTitleTerms: "Nutzungsbedingungen — BetaSuite",
    metaDescTerms: "Nutzungsbedingungen von BetaSuite: Lizenz, Einschränkungen, geistiges Eigentum, Drittdienste, Gewährleistungsausschluss und anwendbares Recht für die BetaSuite-App.",
    privacyTitle: "Datenschutzerklärung",
    termsTitle: "Nutzungsbedingungen",
    legalEnglishOnlyNotice: "Der Text dieses Dokuments wird ausschließlich in englischer Sprache bereitgestellt. Übersetzungen an anderen Stellen der Website dienen lediglich der Bequemlichkeit – maßgeblich ist die englische Fassung.",
    featureRequestTitle: "Hast du eine Feature-Idee?",
    featureRequestBody: "Feature-Anfragen leben in einem öffentlichen GitHub-Repo, damit andere Tester sie sehen und liken können. Du kannst neue Ideen direkt in der App über Einstellungen → Feature-Anfragen einreichen — auf dem Gerät werden personenbezogene Daten geschwärzt, bevor etwas gepostet wird.",
    featureRequestLink: "Öffentliche Feature-Liste auf GitHub durchstöbern →",
    faqMore: "Mehr auf der Support-Seite →",

    /* Closing CTA */
    taglineMain: "Wettbewerber vermessen das Produkt. BetaSuite vermisst den Tester.",
    ctaTitle: "Bereit, bessere Bug-Reports abzuliefern?",
    ctaText: "Lade BetaSuite – oder melde dich, wenn du vorher Fragen hast.",
    ctaContact: "Fragen? Melde dich →",

    /* Why page */
    whyTitle: "Für den Tester gebaut, nicht für den Anbieter.",
    whyLead: "Die gängigen Beta-Test-Tools teilen eine architektonische Annahme: Das getestete Unternehmen kontrolliert das Werkzeug. Das hinterlässt beim Tester eine wiederkehrende Reihe von Frustrationen. BetaSuite wurde gezielt gebaut, um diese Lücken zu schließen.",
    problemLabel: "Das Problem",
    answerLabel: "BetaSuites Antwort",

    pain1Problem: "Du kannst Bildschirm und Kamera nicht gleichzeitig aufnehmen.",
    pain1Problem2: "Ein Video, das zeigt „Ich tippe hier, und das macht das Gerät“, braucht meist zwei Telefone und ein Stativ.",
    pain1Answer: "Die Doppelaufnahme kombiniert beide Streams zu einer einzigen MP4 auf dem tatsächlich getesteten Gerät. Kein Stativ. Kein zweites Telefon.",

    pain2Problem: "Sporadische Bugs verschwinden, bevor du auf Aufnahme drückst.",
    pain2Problem2: "Bis du die Aufnahme gestartet hast, ist der Glitch weg – und Reproduktion wird zum Ratespiel.",
    pain2Answer: "Sofortaufnahme hält im Hintergrund einen rollenden 15- oder 30-Sekunden-Puffer. Ein Tipp speichert den gerade vergangenen Moment. Kein Setup, keine verpassten Beweise.",

    pain3Problem: "NDA-Arbeit macht Cloud-KI zum No-Go.",
    pain3Problem2: "Jeder Cloud-Anbieter ist ein Leck-Risiko, also enden Berichte handgeschrieben und langsam.",
    pain3Answer: "Der Vertrauliche Modus sperrt Cloud-Uploads, System-Sharing und jeden Cloud-KI-Anbieter – während Apple Intelligence vollständig auf dem Gerät läuft, null Netzwerkaufrufe. KI-Politur und Zusammenfassungen funktionieren auch auf vertraulicher Hardware.",

    pain4Problem: "Anbieter-SDKs schicken deine Daten in die Cloud des Anbieters.",
    pain4Problem2: "Gängige Beta-Test-Tools senden Testerdaten an ein Anbieter-Backend – okay für die Firma, nicht für sensible Prototypen.",
    pain4Answer: "BetaSuite hat keinen eigenen Server. Alles wird auf deinem Gerät verschlüsselt, und Daten bewegen sich nur, wenn du ein Ziel auswählst – dein eigenes iCloud Drive, Google Drive, OneDrive, deine Fotomediathek oder ein portables verschlüsseltes Archiv.",

    pain5Problem: "Der Wochenbericht ist der langsamste Teil der Arbeit.",
    pain5Problem2: "Leere-Seiten-Lähmung, vor allem wenn du mehrere Programme jonglierst.",
    pain5Answer: "Die Zeitraum-Zusammenfassung entwirft einen strukturierten Bericht – Thema, Pluspunkte, Probleme, Empfehlungen – direkt aus den Markern und dem Feedback, das du bereits erfasst hast. PDF oder DOCX, überfliegbare Stichpunkte, fertig zum Mailen.",

    pain6Problem: "Beta-Test-Tools sind oft nur auf Englisch.",
    pain6Problem2: "Mehrsprachenunterstützung, wenn überhaupt vorhanden, kommt oft veraltet und altert schlecht.",
    pain6Answer: "Jetzt in 21 Sprachen verfügbar – BetaSuite folgt der Gerätesprache live, sodass Tester in Tokio, Berlin oder São Paulo die App jeweils in ihrer eigenen Sprache sehen.",

    whyClosingTagline: "Wettbewerber vermessen das Produkt. BetaSuite vermisst den Tester.",

    /* Support page */
    supportTitle: "Support",
    supportLede: "Wir lesen jede Nachricht und antworten in der Regel innerhalb von 2 Werktagen.",
    contactTitle: "Kontakt aufnehmen",
    nameLabel: "Dein Name",
    emailLabel: "Deine E-Mail-Adresse",
    categoryLabel: "Kategorie",
    messageLabel: "Nachricht",
    sendMessage: "Nachricht senden",
    faqTitle: "Häufig gestellte Fragen"
  },

  nl: {
    /* Nav */
    navHome: "Home",
    navSupport: "Support",
    navPrivacy: "Privacy",
    navTerms: "Voorwaarden",
    navWhy: "Waarom BetaSuite",

    /* Hero */
    heroTitle: "Vang elke bug. Vertel het hele verhaal.",
    heroText: "BetaSuite is de mobiele testkit voor mensen die echt bugs rapporteren — neem scherm en camera tegelijk op, speel de laatste 30 seconden opnieuw af, annoteer, transcribeer en lever een gepolijst rapport af.",
    downloadAppStore: "Download in de App Store",
    androidNote: "Alleen iPhone — Android in ontwikkeling, releasedatum nog te bevestigen.",
    androidNotifyLink: "Houd me op de hoogte →",
    metaText: "Eenmalige aankoop in de App Store · Geen abonnement · Geen advertenties · Geen tracking · Levenslang van jou",

    /* Value props strip */
    valueCaptureTitle: "Vastleggen",
    valueCaptureText: "Scherm + camera, instant replay, spraakmemo's, foto's.",
    valueAnnotateTitle: "Annoteren",
    valueAnnotateText: "Teken, prik en plaats een tijdstempel op elke clip en screenshot.",
    valueReportTitle: "Rapporteren",
    valueReportText: "Automatische sessiesamenvattingen die ontwikkelaars echt lezen.",

    /* Feature grid (9 cards) */
    insideTitle: "Wat zit erin",

    feat1Title: "Leg elk moment vast",
    feat1Lead: "Dubbele opname, instant capture, live overlays.",
    feat1Text: "Neemt scherm en frontcamera op in één samengestelde video terwijl je tussen apps wisselt. Eén tik bewaart de laatste 30 seconden uit een rollende buffer — perfect voor onvoorspelbare, sporadische glitches. Elke opname krijgt automatisch datum, tijd, GPS, weer en apparaatinformatie mee. Trim achteraf de stille tijd uit een clip in de app — frame-precies, met één-tik ongedaan maken.",

    feat2Title: "Sessies op een tijdlijn",
    feat2Lead: "Markers, spraakmemo's, foto's — alles op één tijdlijn.",
    feat2Text: "Plaats met één tik een marker zodra er iets gebeurt. Voeg een screenshot toe, dicteer een spraakmemo of werk later uit tot een volledig bugrapport. Elke sessie legt apparaatstatus, OS, accugezondheid en weer automatisch vast — context ontbreekt nooit.",

    feat3Title: "AI-ondersteunde rapporten",
    feat3Lead: "Een gepolijste PDF of DOCX in seconden.",
    feat3Text: "Kies een periode — deze week, vorige week, eigen bereik — en BetaSuite stelt een gestructureerd rapport op (thema, pluspunten, problemen, aanbevelingen) als scanbare bullets. Beelden worden automatisch in Conditie-, Mapping- en Aanvullende secties gesorteerd, elke sectie op een eigen pagina zodat de PDF leest als een hoofdstukkenboek. Eigen merkkleur per project. Verstuur het direct vanuit de app per e-mail.",

    feat4Title: "Vertrouwelijke modus",
    feat4Lead: "AI op het apparaat voor NDA-werk.",
    feat4Text: "Eén schakelaar omzetten en BetaSuite vergrendelt cloud-uploads, systeemdelen en elke cloud-AI-aanbieder. Apple Intelligence blijft volledig op het apparaat draaien — geen enkele netwerkaanroep — zodat AI-polijsten en samenvattingen ook op vertrouwelijke hardware blijven werken.",

    feat5Title: "AI-routing op jouw manier",
    feat5Lead: "Apple Intelligence op het apparaat, BetaSuite Assist als fallback. Of breng je eigen sleutel.",
    feat5Text: "Standaard draait Apple Intelligence op het apparaat met BetaSuite Assist als cloud-fallback. Liever je eigen aanbieder? Breng je API-sleutel mee voor Claude, GPT, Gemini of DeepSeek. Pollinations is beschikbaar als noodfallback. Wissel op elk moment van aanbieder in Instellingen — elke wijziging vraagt expliciete toestemming voordat data het apparaat verlaat.",

    feat6Title: "Stem je AI-gebruik af",
    feat6Lead: "Uit, alleen polijsten, schuttingtaal maskeren of volledige samenvatting.",
    feat6Text: "Kies hoeveel de AI voor je doet — een lichte taalpolijst op een feedbackitem, schuttingtaal maskeren voordat een rapport uitgaat, of volledige sessiesamenvatting en rapportgeneratie. Het feedbackformulier zelf begint eenvoudig en breidt alleen uit als je categorie, ernst, reproductiestappen, geannoteerde screenshots en spraakmemo's nodig hebt.",

    feat7Title: "Gemaakt voor hardware-testers",
    feat7Lead: "Voor, zij, achter, onder — vanaf het begin met hoek-tags.",
    feat7Text: "Conditiefoto's met meerdere afbeeldingen en hoek-chips die de volgende foto vooraf taggen. Mapping-screenshots en vrije aanvullende foto's hebben hun eigen rapportsecties. Reverse-geocoded locatie en Apple Weather-condities standaard ingebouwd. Sleep foto's van maanden geleden naar binnen en BetaSuite herstelt de oorspronkelijke datum, GPS en het werkelijke weer van dat moment — niet van het moment dat je ze uploadde. Live-uitlezing van de laadpoort (volt, ampère, watt) voor debugging van de stroomvoorziening.",

    feat8Title: "Projectstructuur die meeschaalt",
    feat8Lead: "Eén project per product, instant capture voor de rest.",
    feat8Text: "Bundel sessies, feedback en rapporten onder benoemde projecten. Hang NDA's en contacten per project aan — of sla setup over en gebruik het altijd vastgemaakte Instant Capture-project voor eenmalige vondsten.",

    feat9Title: "Cloudsync op jouw voorwaarden",
    feat9Lead: "iCloud Drive, Google Drive, OneDrive, Foto's of niets.",
    feat9Text: "BetaSuite heeft nooit een eigen server die jouw data bewaart. Exporteer naar je bestaande cloud, je Foto's-bibliotheek of een draagbaar versleuteld .betasuite.json-archief dat je op elk apparaat opnieuw kunt importeren.",

    /* How it works */
    howTitle: "Hoe het werkt",
    step1Title: "1. Neem de sessie op",
    step1Text: "Start een project, druk op opnemen en gebruik de app of het apparaat zoals een tester dat zou doen.",
    step2Title: "2. Markeren en annoteren",
    step2Text: "Plaats markers, voeg spraakmemo's toe en teken op screenshots — allemaal automatisch met tijdstempel.",
    step3Title: "3. Genereer een rapport",
    step3Text: "BetaSuite stelt een sessiesamenvatting met de media samen, klaar om met ontwikkelaars te delen.",

    /* Callout */
    calloutTitle: "Privacy-first by design",
    calloutLead: "BetaSuite leunt op AI op het apparaat overal waar je iPhone dat ondersteunt.",
    callout1Title: "AI die op je apparaat blijft",
    callout1Text: "Apple Intelligence (iOS 26+, iPhone 15 Pro / 16 / 17) verwerkt tekstgeneratie lokaal.",
    callout2Title: "Spraak die nooit vertrekt",
    callout2Text: "Spraakmemo's worden op het apparaat getranscribeerd via Apple's Speech-framework op ondersteunde iPhones.",
    callout3Title: "Eén schakelaar voor gevoelig werk",
    callout3Text: "De vertrouwelijke modus blokkeert elke cloudroute, zodat NDA-tests lokaal blijven.",
    calloutLink: "Lees het volledige privacybeleid →",

    /* Why teaser on home page */
    whyTeaserTitle: "Gemaakt voor de tester, niet voor de leverancier.",
    whyTeaserLead: "De gangbare beta-testtools meten het product. BetaSuite meet de tester.",
    whyTeaser1Problem: "Camera en scherm tegelijk?",
    whyTeaser1Answer: "BetaSuite combineert beide streams tot één MP4 op het geteste apparaat — geen statief, geen tweede telefoon.",
    whyTeaser2Problem: "Bug al weg tegen de tijd dat je op opnemen drukt?",
    whyTeaser2Answer: "Een rollende buffer van 15 of 30 seconden houdt het moment vast — één tik bewaart wat zojuist gebeurde.",
    whyTeaser3Problem: "Cloud-AI is een lekrisico op NDA-hardware?",
    whyTeaser3Answer: "De vertrouwelijke modus laat Apple Intelligence volledig op het apparaat draaien. AI-polijst zonder netwerkrisico.",
    whyTeaserLink: "Bekijk de volledige vergelijking →",

    /* FAQ teaser */
    faqTeaserTitle: "Veelgestelde vragen",
    faqQ1: "Welke apparaten worden ondersteund?",
    faqA1: "iPhone met iOS 16 of nieuwer. Android is in ontwikkeling — releasedatum nog te bevestigen.",
    faqQ2: "Heb ik een account nodig?",
    faqA2: "BetaSuite zelf vereist geen account, maar je hebt een geldige Apple ID / App Store-account nodig om de app te kopen en te downloaden.",
    faqQ3: "Wat is de vertrouwelijke modus?",
    faqA3: "De vertrouwelijke modus blokkeert cloudsync en cloud-AI en houdt verwerking waar mogelijk lokaal.",
    faqQ4: "Is er een abonnement?",
    faqA4: "Nee — BetaSuite is een eenmalige aankoop in de App Store. Eén keer betalen, levenslang van jou.",
    faqDeleteQ: "Hoe verwijder ik mijn gegevens?",
    faqDeleteA: "Open BetaSuite en ga naar Instellingen → Data → Alle app-gegevens wissen.",
    notFoundTitle: "Pagina niet gevonden",
    notFoundText: "Deze pagina is hier niet. Misschien is hij verplaatst, of heeft hij nooit bestaan.",
    notFoundHome: "Terug naar home",
    notFoundContact: "Contact opnemen",
    pageTitleIndex: "BetaSuite — Gemaakt voor de tester, niet de leverancier",
    pageTitleWhy: "Waarom BetaSuite — Gemaakt voor de tester, niet de leverancier",
    pageTitleSupport: "Support — BetaSuite",
    metaDescIndex: "BetaSuite is de mobiele testkit voor wie écht bugs rapporteert: scherm + camera tegelijk opnemen, 30 seconden instant replay, on-device AI, Vertrouwelijke modus voor NDA-werk en rapporten die ontwikkelaars echt lezen.",
    metaDescWhy: "Hoe BetaSuite de terugkerende pijnpunten van mobiele betatesters aanpakt: scherm + camera tegelijk opnemen, instant-replay-buffer, Vertrouwelijke modus voor NDA-werk, geen leverancierscloud en AI-opgestelde rapporten.",
    metaDescSupport: "Hulp bij BetaSuite: contactformulier, FAQs, probleemoplossing, account- en gegevensverwijdering, en hoe je een bug rapporteert.",
    pageTitlePrivacy: "Privacybeleid — BetaSuite",
    metaDescPrivacy: "Privacybeleid van BetaSuite. BetaSuite is local-first gebouwd: data leeft standaard op je apparaat en verlaat het pas als je een functie gebruikt die naar buiten belt.",
    pageTitleTerms: "Gebruiksvoorwaarden — BetaSuite",
    metaDescTerms: "Gebruiksvoorwaarden van BetaSuite: de licentie, beperkingen, intellectueel eigendom, diensten van derden, garantieafstand en het toepasselijke recht voor de BetaSuite-app.",
    privacyTitle: "Privacybeleid",
    termsTitle: "Gebruiksvoorwaarden",
    legalEnglishOnlyNotice: "De tekst van dit document wordt uitsluitend in het Engels aangeboden. Elke vertaling elders op de site is louter voor het gemak — de Engelse versie is de juridisch bindende tekst.",
    featureRequestTitle: "Heb je een feature-idee?",
    featureRequestBody: "Feature requests leven in een publieke GitHub-repo, zodat andere testers ze kunnen zien en upvoten. Je kunt nieuwe ideeën direct vanuit de app indienen via Instellingen → Feature Requests, met on-device PII-redactie voordat er iets wordt geplaatst.",
    featureRequestLink: "Bekijk het publieke feature-requestbord op GitHub →",
    faqMore: "Meer op de supportpagina →",

    /* Closing CTA */
    taglineMain: "Concurrenten meten het product. BetaSuite meet de tester.",
    ctaTitle: "Klaar om betere bugrapporten af te leveren?",
    ctaText: "Download BetaSuite — of neem contact op als je eerst vragen hebt.",
    ctaContact: "Vragen? Neem contact op →",

    /* Why page */
    whyTitle: "Gemaakt voor de tester, niet voor de leverancier.",
    whyLead: "De gangbare beta-testtools delen één architecturale aanname: het bedrijf dat getest wordt, beheert het gereedschap. Dat laat de tester met een terugkerende reeks frustraties achter. BetaSuite is specifiek gebouwd om die gaten te dichten.",
    problemLabel: "Het probleem",
    answerLabel: "BetaSuite's antwoord",

    pain1Problem: "Je kunt scherm en camera niet tegelijk vastleggen.",
    pain1Problem2: "Een video die toont \"ik tik hier, en dit doet het apparaat\" vergt meestal twee telefoons en een statief.",
    pain1Answer: "Dubbele opname combineert beide streams tot één MP4 op het apparaat dat daadwerkelijk getest wordt. Geen statief. Geen tweede telefoon.",

    pain2Problem: "Sporadische bugs verdwijnen voordat je op opnemen drukt.",
    pain2Problem2: "Tegen de tijd dat je opname is gestart, is de glitch weg — en reproduceren wordt een gokspel.",
    pain2Answer: "Instant Capture houdt op de achtergrond een rollende buffer van 15 of 30 seconden bij. Eén tik bewaart het moment dat net voorbij is. Geen setup, geen gemiste bewijzen.",

    pain3Problem: "NDA-werk maakt cloud-AI onbruikbaar.",
    pain3Problem2: "Elke cloudaanbieder is een lekrisico, dus rapporten worden uiteindelijk handgeschreven en traag.",
    pain3Answer: "De vertrouwelijke modus vergrendelt cloud-uploads, systeemdelen en elke cloud-AI-aanbieder — terwijl Apple Intelligence volledig op het apparaat blijft draaien, nul netwerkaanroepen. AI-polijsten en samenvattingen blijven ook op vertrouwelijke hardware werken.",

    pain4Problem: "Vendor-SDK's sturen jouw data naar de cloud van de vendor.",
    pain4Problem2: "Gangbare beta-testtools sturen testerdata naar een vendor-backend — prima voor het bedrijf, niet voor gevoelige prototypes.",
    pain4Answer: "BetaSuite heeft geen eigen server. Alles wordt op je apparaat versleuteld, en data verplaatst alleen wanneer jij een bestemming kiest — je eigen iCloud Drive, Google Drive, OneDrive, Foto's of een draagbaar versleuteld archief.",

    pain5Problem: "Het wekelijkse rapport is het traagste deel van het werk.",
    pain5Problem2: "Lege-pagina-verlamming, vooral wanneer je meerdere programma's tegelijk doet.",
    pain5Answer: "De periodesamenvatting stelt een gestructureerd rapport op — thema, pluspunten, problemen, aanbevelingen — rechtstreeks uit de markers en feedback die je al hebt vastgelegd. PDF of DOCX, scanbare bullets, klaar om te mailen.",

    pain6Problem: "Beta-testtools zijn vaak alleen Engelstalig.",
    pain6Problem2: "Meertalige ondersteuning, als die bestaat, komt vaak verouderd uit en veroudert slecht.",
    pain6Answer: "Nu beschikbaar in 21 talen — BetaSuite volgt je apparaattaal live, dus testers in Tokio, Berlijn of São Paulo zien de app elk in hun eigen taal.",

    whyClosingTagline: "Concurrenten meten het product. BetaSuite meet de tester.",

    /* Support page */
    supportTitle: "Support",
    supportLede: "We lezen elk bericht en streven ernaar binnen 2 werkdagen te antwoorden.",
    contactTitle: "Neem contact op",
    nameLabel: "Je naam",
    emailLabel: "Je e-mailadres",
    categoryLabel: "Categorie",
    messageLabel: "Bericht",
    sendMessage: "Bericht versturen",
    faqTitle: "Veelgestelde vragen"
  },

  fr: {
    /* Nav */
    navHome: "Accueil",
    navSupport: "Support",
    navPrivacy: "Confidentialité",
    navTerms: "Conditions",
    navWhy: "Pourquoi BetaSuite",

    /* Hero */
    heroTitle: "Capturez chaque bug. Racontez toute l'histoire.",
    heroText: "BetaSuite est le kit de test mobile pour les gens qui rapportent vraiment des bugs — enregistrez écran et caméra en même temps, rejouez les 30 dernières secondes, annotez, transcrivez et livrez un rapport soigné.",
    downloadAppStore: "Télécharger sur l'App Store",
    androidNote: "iPhone uniquement — Android en développement, date de sortie à confirmer.",
    androidNotifyLink: "Me notifier →",
    metaText: "Achat unique sur l'App Store · Sans abonnement · Sans publicité · Sans pistage · À vous pour la vie",

    /* Value props strip */
    valueCaptureTitle: "Capturer",
    valueCaptureText: "Écran + caméra, replay instantané, mémos vocaux, photos.",
    valueAnnotateTitle: "Annoter",
    valueAnnotateText: "Dessinez, épinglez et horodatez chaque clip et capture.",
    valueReportTitle: "Rapporter",
    valueReportText: "Des résumés de session automatiques que les développeurs lisent vraiment.",

    /* Feature grid (9 cards) */
    insideTitle: "Ce qu'il y a dedans",

    feat1Title: "Capturez chaque instant",
    feat1Lead: "Double enregistrement, capture instantanée, superpositions en direct.",
    feat1Text: "Enregistre l'écran et la caméra avant dans une seule vidéo composée pendant que vous changez d'app. Une touche enregistre les 30 dernières secondes depuis un tampon glissant — parfait pour les glitches sporadiques imprévisibles. Chaque capture est automatiquement marquée avec date, heure, GPS, météo et infos de l'appareil. Coupez ensuite les temps morts d'un clip dans l'app — précis à l'image près, avec annulation en un tap.",

    feat2Title: "Sessions sur une chronologie",
    feat2Lead: "Marqueurs, mémos vocaux, photos — tout sur une chronologie.",
    feat2Text: "Posez un marqueur d'une touche dès que quelque chose se passe. Joignez une capture, dictez un mémo vocal, ou développez plus tard en rapport de bug complet. Chaque session capture automatiquement l'état de l'appareil, l'OS, la santé de la batterie et la météo — le contexte ne manque jamais.",

    feat3Title: "Rapports assistés par IA",
    feat3Lead: "Un PDF ou DOCX soigné en quelques secondes.",
    feat3Text: "Choisissez une période — cette semaine, la semaine dernière, plage personnalisée — et BetaSuite rédige un rapport structuré (thème, points positifs, problèmes, recommandations) en puces parcourables. Images triées automatiquement en sections État, Mapping et Compléments, chaque section sur sa propre page pour que le PDF se lise comme un livre par chapitres. Couleur de marque par projet. Envoyez par e-mail depuis l'app.",

    feat4Title: "Mode confidentiel",
    feat4Lead: "IA sur l'appareil pour le travail sous NDA.",
    feat4Text: "Un seul interrupteur et BetaSuite verrouille les uploads cloud, le partage système et tous les fournisseurs d'IA cloud. Apple Intelligence continue de tourner entièrement sur l'appareil — aucun appel réseau — pour que la finition IA et les résumés fonctionnent même sur du matériel confidentiel.",

    feat5Title: "Routage IA à votre façon",
    feat5Lead: "Apple Intelligence sur l'appareil, BetaSuite Assist en repli. Ou apportez votre propre clé.",
    feat5Text: "Par défaut, Apple Intelligence tourne sur l'appareil avec BetaSuite Assist comme repli cloud. Vous préférez votre propre fournisseur ? Apportez votre clé API pour Claude, GPT, Gemini ou DeepSeek. Pollinations est disponible comme repli d'urgence. Changez de fournisseur à tout moment dans les Réglages — chaque changement demande un consentement explicite avant que les données ne quittent l'appareil.",

    feat6Title: "Réglez votre usage de l'IA",
    feat6Lead: "Désactivé, simple finition, masquage de jurons ou résumé complet.",
    feat6Text: "Choisissez à quel point l'IA fait le travail — léger lissage des mots sur une entrée de feedback, masquage de jurons avant qu'un rapport ne parte, ou résumé complet de session et génération de rapport. Le formulaire de feedback lui-même reste simple et ne s'étend que lorsque vous avez besoin de catégorie, gravité, étapes de reproduction, captures annotées et mémos vocaux.",

    feat7Title: "Conçu pour les testeurs hardware",
    feat7Lead: "Avant, côté, arrière, dessous — tagués par angle dès le départ.",
    feat7Text: "Photos d'état multi-images avec puces d'angle qui pré-taguent la photo suivante. Captures de mapping et photos additionnelles libres ont leurs propres sections de rapport. Localisation par géocodage inverse et conditions Apple Weather intégrées. Importez des photos prises il y a des mois et BetaSuite restaure la date d'origine, le GPS et la météo réelle de ce moment-là — pas celle du moment où vous les avez téléchargées. Lecture en direct du port de charge (volts, ampères, watts) pour déboguer l'alimentation.",

    feat8Title: "Une structure de projet qui passe à l'échelle",
    feat8Lead: "Un projet par produit, capture instantanée pour tout le reste.",
    feat8Text: "Regroupez sessions, feedbacks et rapports sous des projets nommés. Attachez NDA et contacts par projet — ou sautez la configuration et utilisez le projet Instant Capture toujours épinglé pour les trouvailles ponctuelles.",

    feat9Title: "Sync cloud à vos conditions",
    feat9Lead: "iCloud Drive, Google Drive, OneDrive, Pellicule ou rien du tout.",
    feat9Text: "BetaSuite n'a jamais son propre serveur qui détient vos données. Exportez vers votre cloud existant, votre Pellicule ou une archive .betasuite.json chiffrée portable réimportable sur n'importe quel appareil.",

    /* How it works */
    howTitle: "Comment ça marche",
    step1Title: "1. Enregistrez la session",
    step1Text: "Démarrez un projet, lancez l'enregistrement, et utilisez l'app ou l'appareil comme un testeur le ferait.",
    step2Title: "2. Marquez et annotez",
    step2Text: "Posez des marqueurs, ajoutez des mémos vocaux et dessinez sur les captures — tout horodaté automatiquement.",
    step3Title: "3. Générez un rapport",
    step3Text: "BetaSuite assemble un résumé de session avec les médias, prêt à partager avec les développeurs.",

    /* Callout */
    calloutTitle: "Confidentialité dès la conception",
    calloutLead: "BetaSuite s'appuie sur l'IA sur l'appareil partout où votre iPhone le permet.",
    callout1Title: "Une IA qui reste sur votre appareil",
    callout1Text: "Apple Intelligence (iOS 26+, iPhone 15 Pro / 16 / 17) gère la génération de texte localement.",
    callout2Title: "Une voix qui ne sort jamais",
    callout2Text: "Les mémos vocaux sont transcrits sur l'appareil via le framework Speech d'Apple sur iPhone compatibles.",
    callout3Title: "Un interrupteur pour le travail sensible",
    callout3Text: "Le mode confidentiel bloque toute route cloud, pour que les tests sous NDA restent locaux.",
    calloutLink: "Lire la politique de confidentialité complète →",

    /* Why teaser on home page */
    whyTeaserTitle: "Conçu pour le testeur, pas pour le fournisseur.",
    whyTeaserLead: "Les outils mainstream de beta-test instrumentent le produit. BetaSuite instrumente le testeur.",
    whyTeaser1Problem: "Caméra et écran en même temps ?",
    whyTeaser1Answer: "BetaSuite compose les deux flux en un seul MP4 sur l'appareil testé — pas de trépied, pas de second téléphone.",
    whyTeaser2Problem: "Bug déjà parti quand vous appuyez sur enregistrer ?",
    whyTeaser2Answer: "Un tampon glissant de 15 ou 30 secondes garde le moment vivant — une touche enregistre ce qui vient de se passer.",
    whyTeaser3Problem: "L'IA cloud est un risque de fuite sur du matériel sous NDA ?",
    whyTeaser3Answer: "Le mode confidentiel fait tourner Apple Intelligence entièrement sur l'appareil. Finition IA sans risque réseau.",
    whyTeaserLink: "Voir la comparaison complète →",

    /* FAQ teaser */
    faqTeaserTitle: "Questions courantes",
    faqQ1: "Quels appareils sont pris en charge ?",
    faqA1: "iPhone avec iOS 16 ou plus récent. Android est en développement — date de sortie à confirmer.",
    faqQ2: "Faut-il un compte ?",
    faqA2: "BetaSuite lui-même ne nécessite pas de compte, mais il vous faut un identifiant Apple / compte App Store valide pour acheter et télécharger l'app.",
    faqQ3: "Qu'est-ce que le mode confidentiel ?",
    faqA3: "Le mode confidentiel bloque la sync cloud et l'IA cloud, gardant le traitement local autant que possible.",
    faqQ4: "Y a-t-il un abonnement ?",
    faqA4: "Non — BetaSuite est un achat unique sur l'App Store. Payez une fois, à vous pour la vie.",
    faqDeleteQ: "Comment supprimer mes données ?",
    faqDeleteA: "Ouvrez BetaSuite et allez dans Réglages → Données → Effacer toutes les données de l'app.",
    notFoundTitle: "Page introuvable",
    notFoundText: "Cette page n'est pas ici. Elle a peut-être été déplacée, ou n'a jamais existé.",
    notFoundHome: "Retour à l'accueil",
    notFoundContact: "Contacter le support",
    pageTitleIndex: "BetaSuite — Conçu pour le testeur, pas pour le fournisseur",
    pageTitleWhy: "Pourquoi BetaSuite — Conçu pour le testeur, pas pour le fournisseur",
    pageTitleSupport: "Support — BetaSuite",
    metaDescIndex: "BetaSuite est le kit de test mobile pour ceux qui rapportent vraiment des bugs : enregistrement écran + caméra en simultané, replay instantané de 30 secondes, IA sur l'appareil, Mode confidentiel pour le travail sous NDA et rapports lisibles par les développeurs.",
    metaDescWhy: "Comment BetaSuite résout les problèmes récurrents des testeurs bêta mobiles : enregistrement écran + caméra simultané, tampon de replay instantané, Mode confidentiel pour le travail sous NDA, sans cloud fournisseur et rapports rédigés par IA.",
    metaDescSupport: "Obtenir de l'aide sur BetaSuite : formulaire de contact, FAQ, dépannage, suppression de compte et de données, et comment signaler un bug.",
    pageTitlePrivacy: "Politique de confidentialité — BetaSuite",
    metaDescPrivacy: "Politique de confidentialité de BetaSuite. BetaSuite est conçu en mode local par défaut : vos données restent sur votre appareil et ne le quittent que si vous utilisez une fonction qui appelle un service externe.",
    pageTitleTerms: "Conditions d'utilisation — BetaSuite",
    metaDescTerms: "Conditions d'utilisation de BetaSuite : licence, restrictions, propriété intellectuelle, services tiers, exclusion de garantie et droit applicable de l'app BetaSuite.",
    privacyTitle: "Politique de confidentialité",
    termsTitle: "Conditions d'utilisation",
    legalEnglishOnlyNotice: "Le corps de ce document est fourni uniquement en anglais. Toute traduction ailleurs sur le site est fournie à titre indicatif — la version anglaise fait foi sur le plan juridique.",
    featureRequestTitle: "Une idée de fonctionnalité ?",
    featureRequestBody: "Les demandes de fonctionnalités vivent dans un dépôt GitHub public pour que les autres testeurs puissent les voir et voter. Vous pouvez soumettre de nouvelles idées directement depuis l'app via Réglages → Demandes de fonctionnalités, avec une expurgation des données personnelles sur l'appareil avant toute publication.",
    featureRequestLink: "Parcourir le tableau public des demandes de fonctionnalités sur GitHub →",
    faqMore: "Plus sur la page support →",

    /* Closing CTA */
    taglineMain: "Les concurrents instrumentent le produit. BetaSuite instrumente le testeur.",
    ctaTitle: "Prêt à livrer de meilleurs rapports de bug ?",
    ctaText: "Téléchargez BetaSuite — ou contactez-nous d'abord si vous avez des questions.",
    ctaContact: "Des questions ? Contactez-nous →",

    /* Why page */
    whyTitle: "Conçu pour le testeur, pas pour le fournisseur.",
    whyLead: "Les outils mainstream de beta-test partagent une hypothèse architecturale : l'entreprise testée contrôle l'outillage. Cela laisse le testeur avec un ensemble récurrent de frustrations. BetaSuite a été conçu spécifiquement pour combler ces lacunes.",
    problemLabel: "Le problème",
    answerLabel: "La réponse de BetaSuite",

    pain1Problem: "Vous ne pouvez pas capturer écran et caméra en même temps.",
    pain1Problem2: "Une vidéo qui montre « je tape ici, et voilà ce que fait l'appareil » exige généralement deux téléphones et un trépied.",
    pain1Answer: "Le double enregistrement compose les deux flux en un seul MP4 sur l'appareil réellement testé. Pas de trépied. Pas de second téléphone.",

    pain2Problem: "Les bugs sporadiques disparaissent avant que vous appuyiez sur enregistrer.",
    pain2Problem2: "Le temps d'avoir lancé la capture, le glitch est parti — et la reproduction devient un jeu de devinettes.",
    pain2Answer: "Instant Capture maintient en arrière-plan un tampon glissant de 15 ou 30 secondes. Une touche enregistre l'instant qui vient de passer. Sans setup, sans preuve manquée.",

    pain3Problem: "Le travail sous NDA rend l'IA cloud impraticable.",
    pain3Problem2: "Chaque fournisseur cloud est un risque de fuite, donc les rapports finissent écrits à la main et lents.",
    pain3Answer: "Le mode confidentiel verrouille uploads cloud, partage système et tous les fournisseurs d'IA cloud — pendant qu'Apple Intelligence continue de tourner entièrement sur l'appareil, zéro appel réseau. Finition IA et résumés fonctionnent même sur du matériel confidentiel.",

    pain4Problem: "Les SDK de fournisseurs envoient vos données vers leur cloud.",
    pain4Problem2: "Les outils mainstream de beta-test envoient les données du testeur vers un backend fournisseur — bien pour l'entreprise, pas pour des prototypes sensibles.",
    pain4Answer: "BetaSuite n'a pas son propre serveur. Tout est chiffré sur votre appareil, et les données ne bougent que lorsque vous choisissez une destination — votre propre iCloud Drive, Google Drive, OneDrive, Pellicule ou une archive chiffrée portable.",

    pain5Problem: "Le rapport hebdomadaire est la partie la plus lente du travail.",
    pain5Problem2: "Paralysie de la page blanche, surtout quand vous jonglez avec plusieurs programmes.",
    pain5Answer: "Le résumé de période rédige un rapport structuré — thème, points positifs, problèmes, recommandations — directement à partir des marqueurs et feedbacks déjà saisis. PDF ou DOCX, puces parcourables, prêt à envoyer par mail.",

    pain6Problem: "Les outils de beta-test sont souvent en anglais uniquement.",
    pain6Problem2: "Le support multilingue, quand il existe, arrive souvent obsolète et vieillit mal.",
    pain6Answer: "Désormais disponible en 21 langues — BetaSuite suit la langue de votre appareil en direct, pour que les testeurs à Tokyo, Berlin ou São Paulo voient l'app chacun dans la leur.",

    whyClosingTagline: "Les concurrents instrumentent le produit. BetaSuite instrumente le testeur.",

    /* Support page */
    supportTitle: "Support",
    supportLede: "Nous lisons chaque message et visons à répondre sous 2 jours ouvrés.",
    contactTitle: "Nous contacter",
    nameLabel: "Votre nom",
    emailLabel: "Votre adresse e-mail",
    categoryLabel: "Catégorie",
    messageLabel: "Message",
    sendMessage: "Envoyer le message",
    faqTitle: "Questions fréquentes"
  },

  nb: {
    /* Nav */
    navHome: "Hjem",
    navSupport: "Støtte",
    navPrivacy: "Personvern",
    navTerms: "Vilkår",
    navWhy: "Hvorfor BetaSuite",

    /* Hero */
    heroTitle: "Fang hver bug. Fortell hele historien.",
    heroText: "BetaSuite er det mobile testsettet for folk som faktisk rapporterer bugs — ta opp skjerm og kamera samtidig, spill av de siste 30 sekundene på nytt, annoter, transkriber og lever en polert rapport.",
    downloadAppStore: "Last ned i App Store",
    androidNote: "Kun iPhone — Android under utvikling, lanseringsdato bekreftes senere.",
    androidNotifyLink: "Varsle meg →",
    metaText: "Engangskjøp i App Store · Ingen abonnement · Ingen reklame · Ingen sporing · Ditt for livet",

    /* Value props strip */
    valueCaptureTitle: "Fang opp",
    valueCaptureText: "Skjerm + kamera, øyeblikkelig avspilling, taleopptak, bilder.",
    valueAnnotateTitle: "Annoter",
    valueAnnotateText: "Tegn, fest og tidsstempel hvert klipp og skjermbilde.",
    valueReportTitle: "Rapporter",
    valueReportText: "Automatiske øktssammendrag som utviklere faktisk leser.",

    /* Feature grid (9 cards) */
    insideTitle: "Hva som er inni",

    feat1Title: "Fang hvert øyeblikk",
    feat1Lead: "Dobbeltopptak, øyeblikkelig opptak, sanntidsoverlegg.",
    feat1Text: "Tar opp skjerm og frontkamera i én sammensatt video mens du bytter app. Ett trykk lagrer de siste 30 sekundene fra en rullerende buffer — perfekt for sporadiske, uforutsigbare feil. Hvert opptak får automatisk dato, klokkeslett, GPS, vær og enhetsinformasjon. Trim dødtid fra et klipp i appen etterpå — bilde-nøyaktig, med ett-trykks angre.",

    feat2Title: "Tidslinje-baserte økter",
    feat2Lead: "Markører, taleopptak, bilder — alt på én tidslinje.",
    feat2Text: "Sett en markør med ett trykk i det noe skjer. Legg ved et skjermbilde, dikter et taleopptak, eller utvid senere til en full bug-rapport. Hver økt fanger automatisk enhetsstatus, OS, batterihelse og vær — kontekst mangler aldri.",

    feat3Title: "AI-assisterte rapporter",
    feat3Lead: "En polert PDF eller DOCX på sekunder.",
    feat3Text: "Velg en periode — denne uken, forrige uke, egendefinert område — og BetaSuite skriver et strukturert rapportutkast (tema, positive punkter, problemer, anbefalinger) som lett skannbare punkter. Bilder sorteres automatisk i seksjonene Tilstand, Mapping og Tilleggsbilder, hver seksjon på sin egen side så PDF-en leses som en bok i kapitler. Egen merkefarge per prosjekt. Send det fra appen på e-post.",

    feat4Title: "Konfidensiell modus",
    feat4Lead: "AI på enheten for NDA-arbeid.",
    feat4Text: "Slå én bryter og BetaSuite stenger ned skylast, systemdeling og alle sky-AI-leverandører. Apple Intelligence fortsetter å kjøre helt på enheten — aldri et nettverkskall — så AI-polering og sammendrag fungerer fortsatt på konfidensiell maskinvare.",

    feat5Title: "AI-routing på din måte",
    feat5Lead: "Apple Intelligence på enheten, BetaSuite Assist som reserve. Eller bruk din egen nøkkel.",
    feat5Text: "Som standard kjører Apple Intelligence på enheten med BetaSuite Assist som sky-reserve. Foretrekker du din egen leverandør? Ta med din API-nøkkel for Claude, GPT, Gemini eller DeepSeek. Pollinations er tilgjengelig som nødreserve. Bytt leverandør når som helst i Innstillinger — hver endring ber om eksplisitt samtykke før data forlater enheten.",

    feat6Title: "Juster din AI-bruk",
    feat6Lead: "Av, kun polering, banneord-maskering eller fullt sammendrag.",
    feat6Text: "Velg hvor mye AI-en gjør for deg — liten språklig polering på en tilbakemelding, banneord-maskering før en rapport går ut, eller fullt øktssammendrag og rapportgenerering. Tilbakemeldingsskjemaet starter enkelt og utvides bare når du trenger kategori, alvorlighet, reproduksjonstrinn, annoterte skjermbilder og taleopptak.",

    feat7Title: "Bygget for hardware-testere",
    feat7Lead: "Front, side, bak, under — vinkel-tagget fra start.",
    feat7Text: "Tilstandsbilder med flere bilder og vinkel-chips som pre-tagger neste bilde. Mapping-skjermbilder og fritt formaterte tilleggsbilder har egne rapport-seksjoner. Reverse-geokodet plassering og Apple Weather-forhold er innebygd. Last opp bilder tatt for måneder siden, og BetaSuite gjenoppretter opprinnelig dato, GPS og det faktiske været fra det øyeblikket — ikke fra opplastingstidspunktet. Sanntidsavlesning av ladeporten (volt, ampere, watt) for feilsøking av strømforsyning.",

    feat8Title: "Prosjektstruktur som skalerer",
    feat8Lead: "Ett prosjekt per produkt, øyeblikkelig opptak for alt annet.",
    feat8Text: "Grupper økter, tilbakemeldinger og rapporter under navngitte prosjekter. Legg ved NDA-er og kontakter per prosjekt — eller hopp over oppsettet helt og bruk det alltid festede Instant Capture-prosjektet for engangsfunn.",

    feat9Title: "Skysynkronisering på dine vilkår",
    feat9Lead: "iCloud Drive, Google Drive, OneDrive, Bilder eller ingenting.",
    feat9Text: "BetaSuite har aldri sin egen server som holder dataene dine. Eksporter til din eksisterende sky, til Bilder, eller til et bærbart kryptert .betasuite.json-arkiv du kan importere på nytt på en hvilken som helst enhet.",

    /* How it works */
    howTitle: "Slik fungerer det",
    step1Title: "1. Ta opp økten",
    step1Text: "Start et prosjekt, trykk på opptak, og bruk appen eller enheten slik en tester ville gjort.",
    step2Title: "2. Marker og annoter",
    step2Text: "Slipp markører, legg til taleopptak og tegn på skjermbilder — alt automatisk tidsstemplet.",
    step3Title: "3. Generer en rapport",
    step3Text: "BetaSuite setter sammen et øktssammendrag med medier, klart til å dele med utviklere.",

    /* Callout */
    calloutTitle: "Personvern først, etter design",
    calloutLead: "BetaSuite lener seg på AI på enheten overalt der iPhone-en din støtter det.",
    callout1Title: "AI som blir på enheten",
    callout1Text: "Apple Intelligence (iOS 26+, iPhone 15 Pro / 16 / 17) håndterer tekstgenerering lokalt.",
    callout2Title: "Tale som aldri forlater",
    callout2Text: "Taleopptak transkriberes på enheten via Apples Speech-rammeverk på støttede iPhones.",
    callout3Title: "Én bryter for sensitivt arbeid",
    callout3Text: "Konfidensiell modus blokkerer hver sky-rute slik at NDA-testing forblir lokal.",
    calloutLink: "Les hele personvernreglene →",

    /* Why teaser on home page */
    whyTeaserTitle: "Bygget for testeren, ikke for leverandøren.",
    whyTeaserLead: "De vanlige beta-testverktøyene måler produktet. BetaSuite måler testeren.",
    whyTeaser1Problem: "Kamera og skjerm samtidig?",
    whyTeaser1Answer: "BetaSuite setter sammen begge strømmene til én MP4 på enheten som testes — ingen stativ, ingen ekstra telefon.",
    whyTeaser2Problem: "Bug allerede borte når du trykker på opptak?",
    whyTeaser2Answer: "En rullerende buffer på 15 eller 30 sekunder holder øyeblikket levende — ett trykk lagrer det som nettopp skjedde.",
    whyTeaser3Problem: "Sky-AI er en lekkasjerisiko på NDA-maskinvare?",
    whyTeaser3Answer: "Konfidensiell modus kjører Apple Intelligence helt på enheten. AI-polering uten nettverksrisiko.",
    whyTeaserLink: "Se den fullstendige sammenligningen →",

    /* FAQ teaser */
    faqTeaserTitle: "Vanlige spørsmål",
    faqQ1: "Hvilke enheter støttes?",
    faqA1: "iPhone med iOS 16 eller nyere. Android er under utvikling — lanseringsdato bekreftes senere.",
    faqQ2: "Trenger jeg en konto?",
    faqA2: "BetaSuite selv krever ingen konto, men du trenger en gyldig Apple-ID / App Store-konto for å kjøpe og laste ned appen.",
    faqQ3: "Hva er konfidensiell modus?",
    faqA3: "Konfidensiell modus blokkerer skysynkronisering og sky-AI, og holder behandlingen lokal der det er mulig.",
    faqQ4: "Er det et abonnement?",
    faqA4: "Nei — BetaSuite er et engangskjøp i App Store. Betal én gang, ditt for livet.",
    faqDeleteQ: "Hvordan sletter jeg dataene mine?",
    faqDeleteA: "Åpne BetaSuite og gå til Innstillinger → Data → Slett alle app-data.",
    notFoundTitle: "Siden ble ikke funnet",
    notFoundText: "Denne siden er ikke her. Den kan ha blitt flyttet, eller aldri eksistert.",
    notFoundHome: "Tilbake til forsiden",
    notFoundContact: "Kontakt støtte",
    pageTitleIndex: "BetaSuite — Bygd for testeren, ikke leverandøren",
    pageTitleWhy: "Hvorfor BetaSuite — Bygd for testeren, ikke leverandøren",
    pageTitleSupport: "Støtte — BetaSuite",
    metaDescIndex: "BetaSuite er det mobile testsettet for folk som faktisk rapporterer feil: skjerm- og kameraopptak samtidig, 30 sekunders instant replay, AI på enheten, Konfidensiell modus for NDA-arbeid og rapporter utviklere faktisk leser.",
    metaDescWhy: "Hvordan BetaSuite løser de tilbakevendende problemene for mobile betatestere: samtidig skjerm- + kameraopptak, instant-replay-buffer, Konfidensiell modus for NDA-arbeid, ingen leverandørsky og AI-utformede rapporter.",
    metaDescSupport: "Få hjelp med BetaSuite: kontaktskjema, vanlige spørsmål, feilsøking, konto- og dataslettelse, og hvordan rapportere en feil.",
    pageTitlePrivacy: "Personvernerklæring — BetaSuite",
    metaDescPrivacy: "BetaSuites personvernerklæring. BetaSuite er bygd «local-first»: data lever på enheten din som standard og forlater den aldri uten at du bruker en funksjon som ringer ut.",
    pageTitleTerms: "Bruksvilkår — BetaSuite",
    metaDescTerms: "BetaSuites bruksvilkår: lisens, begrensninger, immaterielle rettigheter, tredjepartstjenester, garantifraskrivelse og gjeldende rett for BetaSuite-appen.",
    privacyTitle: "Personvernerklæring",
    termsTitle: "Bruksvilkår",
    legalEnglishOnlyNotice: "Innholdet i dette dokumentet leveres kun på engelsk. Eventuelle oversettelser andre steder på nettstedet er kun en bekvemmelighet — den engelske versjonen er den juridisk bindende.",
    featureRequestTitle: "Har du en funksjonsidé?",
    featureRequestBody: "Funksjonsønsker ligger i et offentlig GitHub-repo slik at andre testere kan se og stemme på dem. Du kan sende inn nye ideer direkte fra appen via Innstillinger → Funksjonsønsker — personopplysninger redigeres ut på enheten før noe publiseres.",
    featureRequestLink: "Bla i den offentlige funksjonsønske-tavlen på GitHub →",
    faqMore: "Mer på støttesiden →",

    /* Closing CTA */
    taglineMain: "Konkurrentene måler produktet. BetaSuite måler testeren.",
    ctaTitle: "Klar til å levere bedre bug-rapporter?",
    ctaText: "Last ned BetaSuite — eller ta kontakt hvis du har spørsmål først.",
    ctaContact: "Spørsmål? Ta kontakt →",

    /* Why page */
    whyTitle: "Bygget for testeren, ikke for leverandøren.",
    whyLead: "De vanlige beta-testverktøyene deler én arkitektonisk antagelse: selskapet som testes kontrollerer verktøyet. Det etterlater testeren med et tilbakevendende sett med frustrasjoner. BetaSuite ble bygget spesifikt for å lukke disse hullene.",
    problemLabel: "Problemet",
    answerLabel: "BetaSuites svar",

    pain1Problem: "Du kan ikke fange skjerm og kamera samtidig.",
    pain1Problem2: "En video som viser «jeg trykker her, og dette gjør enheten» trenger vanligvis to telefoner og et stativ.",
    pain1Answer: "Dobbeltopptak setter sammen begge strømmene til én MP4 på enheten som faktisk testes. Ingen stativ. Ingen ekstra telefon.",

    pain2Problem: "Sporadiske bugs forsvinner før du trykker på opptak.",
    pain2Problem2: "Når du har startet opptaket, er feilen borte — og reproduksjon blir gjettelek.",
    pain2Answer: "Instant Capture holder en rullerende 15- eller 30-sekunders buffer i bakgrunnen. Ett trykk lagrer øyeblikket som nettopp passerte. Ingen oppsett, ingen tapt bevis.",

    pain3Problem: "NDA-arbeid gjør sky-AI uaktuelt.",
    pain3Problem2: "Hver skyleverandør er en lekkasjerisiko, så rapporter ender opp håndskrevne og trege.",
    pain3Answer: "Konfidensiell modus stenger ned skylast, systemdeling og alle sky-AI-leverandører — mens Apple Intelligence fortsetter å kjøre helt på enheten, null nettverkskall. AI-polering og sammendrag fungerer fortsatt på konfidensiell maskinvare.",

    pain4Problem: "Leverandør-SDK-er sender dataene dine til leverandørens sky.",
    pain4Problem2: "Vanlige beta-testverktøy sender testerdata til en leverandør-backend — greit for selskapet, ikke for sensitive prototyper.",
    pain4Answer: "BetaSuite har ingen egen server. Alt krypteres på enheten din, og data flytter seg bare når du velger et mål — din egen iCloud Drive, Google Drive, OneDrive, Bilder eller et bærbart kryptert arkiv.",

    pain5Problem: "Ukerapporten er den tregeste delen av jobben.",
    pain5Problem2: "Blank side-lammelse, særlig når du sjonglerer med flere programmer.",
    pain5Answer: "Periodesammendraget skriver et utkast til strukturert rapport — tema, positive punkter, problemer, anbefalinger — rett fra markørene og tilbakemeldingene du allerede har logget. PDF eller DOCX, lett skannbare punkter, klart for e-post.",

    pain6Problem: "Beta-testverktøy er ofte bare på engelsk.",
    pain6Problem2: "Flerspråklig støtte, når den finnes, er ofte utdatert og eldes dårlig.",
    pain6Answer: "Nå tilgjengelig på 21 språk — BetaSuite følger enhetsspråket live, så testere i Tokyo, Berlin eller São Paulo ser appen på sitt eget språk.",

    whyClosingTagline: "Konkurrentene måler produktet. BetaSuite måler testeren.",

    /* Support page */
    supportTitle: "Støtte",
    supportLede: "Vi leser hver melding og sikter på å svare innen 2 virkedager.",
    contactTitle: "Ta kontakt",
    nameLabel: "Navnet ditt",
    emailLabel: "E-postadressen din",
    categoryLabel: "Kategori",
    messageLabel: "Melding",
    sendMessage: "Send melding",
    faqTitle: "Ofte stilte spørsmål"
  },

  sv: {
    /* Nav */
    navHome: "Hem",
    navSupport: "Support",
    navPrivacy: "Integritet",
    navTerms: "Villkor",
    navWhy: "Varför BetaSuite",

    /* Hero */
    heroTitle: "Fånga varje bugg. Berätta hela historien.",
    heroText: "BetaSuite är den mobila testkit för folk som faktiskt rapporterar buggar — spela in skärm och kamera samtidigt, spela upp de senaste 30 sekunderna, annotera, transkribera och leverera en polerad rapport.",
    downloadAppStore: "Hämta i App Store",
    androidNote: "Endast iPhone — Android under utveckling, släppdatum ska bekräftas.",
    androidNotifyLink: "Meddela mig →",
    metaText: "Engångsköp i App Store · Inget abonnemang · Inga annonser · Ingen spårning · Ditt för livet",

    /* Value props strip */
    valueCaptureTitle: "Fånga",
    valueCaptureText: "Skärm + kamera, omedelbar uppspelning, röstmemon, foton.",
    valueAnnotateTitle: "Annotera",
    valueAnnotateText: "Rita, fäst och tidsstämpla varje klipp och skärmdump.",
    valueReportTitle: "Rapportera",
    valueReportText: "Automatiska sessionssammanfattningar som utvecklare faktiskt läser.",

    /* Feature grid (9 cards) */
    insideTitle: "Vad som finns inuti",

    feat1Title: "Fånga varje ögonblick",
    feat1Lead: "Dubbel inspelning, snabbinspelning, live-överlägg.",
    feat1Text: "Spelar in skärm och frontkamera i en sammansatt video medan du växlar appar. Ett tryck sparar de senaste 30 sekunderna från en rullande buffert — perfekt för oförutsägbara, sporadiska glitchar. Varje inspelning får automatiskt datum, tid, GPS, väder och enhetsinformation. Trimma död tid från ett klipp i appen efteråt — bildexakt, med ett-trycks ångra.",

    feat2Title: "Tidslinjebaserade sessioner",
    feat2Lead: "Markörer, röstmemon, foton — allt på en tidslinje.",
    feat2Text: "Släpp en markör med ett tryck i samma sekund som något händer. Bifoga en skärmdump, diktera ett röstmemo, eller utöka senare till en fullständig buggrapport. Varje session fångar enhetstillstånd, OS, batterihälsa och väder automatiskt — sammanhang saknas aldrig.",

    feat3Title: "AI-assisterade rapporter",
    feat3Lead: "En polerad PDF eller DOCX på sekunder.",
    feat3Text: "Välj en period — den här veckan, förra veckan, eget intervall — och BetaSuite utkastar en strukturerad rapport (tema, positiva punkter, problem, rekommendationer) som skannbara punkter. Bilder sorteras automatiskt in i sektionerna Tillstånd, Mapping och Övrigt, varje sektion på en egen sida så att PDF:en läses som en bok i kapitel. Egen varumärkesfärg per projekt. Maila direkt från appen.",

    feat4Title: "Konfidentiellt läge",
    feat4Lead: "AI på enheten för NDA-arbete.",
    feat4Text: "Slå om en knapp och BetaSuite stänger av molnladdningar, systemdelning och varje moln-AI-leverantör. Apple Intelligence fortsätter köras helt på enheten — aldrig ett nätverksanrop — så AI-polering och sammanfattningar fungerar även på konfidentiell hårdvara.",

    feat5Title: "AI-routning på ditt sätt",
    feat5Lead: "Apple Intelligence på enheten, BetaSuite Assist som reserv. Eller ta med din egen nyckel.",
    feat5Text: "Som standard körs Apple Intelligence på enheten med BetaSuite Assist som molnreserv. Föredrar du din egen leverantör? Ta med din API-nyckel för Claude, GPT, Gemini eller DeepSeek. Pollinations finns som nödreserv. Byt leverantör när som helst i Inställningar — varje ändring kräver uttryckligt samtycke innan data lämnar enheten.",

    feat6Title: "Justera din AI-användning",
    feat6Lead: "Av, endast polering, svordomsmaskering eller full sammanfattning.",
    feat6Text: "Välj hur mycket AI:n gör åt dig — liten språklig polering på en återkoppling, svordomsmaskering innan en rapport går ut, eller full sessionssammanfattning och rapportgenerering. Återkopplingsformuläret börjar enkelt och utökas bara när du behöver kategori, allvarlighetsgrad, reproduktionssteg, annoterade skärmdumpar och röstmemon.",

    feat7Title: "Byggt för hårdvarutestare",
    feat7Lead: "Fram, sida, bak, under — vinkel-taggade från start.",
    feat7Text: "Tillståndsbilder med flera bilder och vinkel-chips som förtaggar nästa foto. Mapping-skärmdumpar och fritt formade tilläggsfoton har egna rapportsektioner. Omvänd geokodning av plats och Apple Weather-förhållanden inbyggda. Lägg in foton tagna för månader sedan och BetaSuite återställer ursprungsdatum, GPS och faktiskt väder från det ögonblicket — inte från när du laddade upp dem. Live-avläsning av laddporten (volt, ampere, watt) för felsökning av strömförsörjningen.",

    feat8Title: "Projektstruktur som skalar",
    feat8Lead: "Ett projekt per produkt, snabbinspelning för allt annat.",
    feat8Text: "Gruppera sessioner, återkoppling och rapporter under namngivna projekt. Bifoga NDA:er och kontakter per projekt — eller hoppa över setup helt och använd det alltid fastnålade Instant Capture-projektet för engångsfynd.",

    feat9Title: "Molnsynk på dina villkor",
    feat9Lead: "iCloud Drive, Google Drive, OneDrive, Bildbibliotek eller ingenting.",
    feat9Text: "BetaSuite har aldrig en egen server som håller dina data. Exportera till ditt befintliga moln, ditt Bildbibliotek, eller ett bärbart krypterat .betasuite.json-arkiv du kan återimportera på vilken enhet som helst.",

    /* How it works */
    howTitle: "Så fungerar det",
    step1Title: "1. Spela in sessionen",
    step1Text: "Starta ett projekt, tryck på spela in, och använd appen eller enheten som en testare skulle göra.",
    step2Title: "2. Markera och annotera",
    step2Text: "Släpp markörer, lägg till röstmemon, och rita på skärmdumpar — allt automatiskt tidsstämplat.",
    step3Title: "3. Generera en rapport",
    step3Text: "BetaSuite sätter samman en sessionssammanfattning plus media, redo att dela med utvecklare.",

    /* Callout */
    calloutTitle: "Integritet först, från start",
    calloutLead: "BetaSuite lutar sig mot AI på enheten överallt där din iPhone stöder det.",
    callout1Title: "AI som stannar på din enhet",
    callout1Text: "Apple Intelligence (iOS 26+, iPhone 15 Pro / 16 / 17) hanterar textgenerering lokalt.",
    callout2Title: "Tal som aldrig lämnar",
    callout2Text: "Röstmemon transkriberas på enheten via Apples Speech-ramverk på stödda iPhones.",
    callout3Title: "En knapp för känsligt arbete",
    callout3Text: "Konfidentiellt läge blockerar varje molnväg så att NDA-testning förblir lokal.",
    calloutLink: "Läs hela integritetspolicyn →",

    /* Why teaser on home page */
    whyTeaserTitle: "Byggt för testaren, inte för leverantören.",
    whyTeaserLead: "De vanliga beta-testverktygen mäter produkten. BetaSuite mäter testaren.",
    whyTeaser1Problem: "Kamera och skärm samtidigt?",
    whyTeaser1Answer: "BetaSuite sätter samman båda strömmarna till en MP4 på den enhet som testas — inget stativ, ingen extra telefon.",
    whyTeaser2Problem: "Bugg redan borta när du trycker på spela in?",
    whyTeaser2Answer: "En rullande buffert på 15 eller 30 sekunder håller ögonblicket levande — ett tryck sparar det som just hände.",
    whyTeaser3Problem: "Moln-AI är en läckrisk på NDA-hårdvara?",
    whyTeaser3Answer: "Konfidentiellt läge kör Apple Intelligence helt på enheten. AI-polering utan nätverksrisken.",
    whyTeaserLink: "Se den fullständiga jämförelsen →",

    /* FAQ teaser */
    faqTeaserTitle: "Vanliga frågor",
    faqQ1: "Vilka enheter stöds?",
    faqA1: "iPhone med iOS 16 eller senare. Android är under utveckling — släppdatum ska bekräftas.",
    faqQ2: "Behöver jag ett konto?",
    faqA2: "BetaSuite självt kräver inget konto, men du behöver ett giltigt Apple-ID / App Store-konto för att köpa och ladda ned appen.",
    faqQ3: "Vad är konfidentiellt läge?",
    faqA3: "Konfidentiellt läge blockerar molnsynk och moln-AI och håller bearbetningen lokal där det är möjligt.",
    faqQ4: "Finns det ett abonnemang?",
    faqA4: "Nej — BetaSuite är ett engångsköp i App Store. Betala en gång, ditt för livet.",
    faqDeleteQ: "Hur tar jag bort mina data?",
    faqDeleteA: "Öppna BetaSuite och gå till Inställningar → Data → Radera all app-data.",
    notFoundTitle: "Sidan kunde inte hittas",
    notFoundText: "Sidan finns inte här. Den kan ha flyttats, eller aldrig funnits.",
    notFoundHome: "Tillbaka till startsidan",
    notFoundContact: "Kontakta support",
    pageTitleIndex: "BetaSuite — Byggt för testaren, inte leverantören",
    pageTitleWhy: "Varför BetaSuite — Byggt för testaren, inte leverantören",
    pageTitleSupport: "Support — BetaSuite",
    metaDescIndex: "BetaSuite är det mobila testkit för dem som faktiskt rapporterar buggar: skärm- och kamerainspelning samtidigt, 30 sekunders instant replay, AI på enheten, Konfidentiellt läge för NDA-arbete och rapporter som utvecklare faktiskt läser.",
    metaDescWhy: "Hur BetaSuite löser de återkommande problemen för mobila betatestare: samtidig skärm- + kamerainspelning, instant-replay-buffert, Konfidentiellt läge för NDA-arbete, ingen leverantörsmoln och AI-utkastade rapporter.",
    metaDescSupport: "Få hjälp med BetaSuite: kontaktformulär, vanliga frågor, felsökning, konto- och databorttagning, och hur du rapporterar en bugg.",
    pageTitlePrivacy: "Integritetspolicy — BetaSuite",
    metaDescPrivacy: "BetaSuites integritetspolicy. BetaSuite är byggt «local-first»: data lever som standard på din enhet och lämnar den aldrig om du inte använder en funktion som ringer ut.",
    pageTitleTerms: "Användarvillkor — BetaSuite",
    metaDescTerms: "BetaSuites användarvillkor: licens, begränsningar, immateriella rättigheter, tredjepartstjänster, garantifriskrivning och tillämplig lag för BetaSuite-appen.",
    privacyTitle: "Integritetspolicy",
    termsTitle: "Användarvillkor",
    legalEnglishOnlyNotice: "Innehållet i detta dokument tillhandahålls endast på engelska. Eventuella översättningar på andra delar av webbplatsen är endast en bekvämlighet — den engelska versionen är den juridiskt bindande.",
    featureRequestTitle: "Har du en funktionsidé?",
    featureRequestBody: "Funktionsönskemål finns i ett publikt GitHub-repo så att andra testare kan se och rösta på dem. Du kan skicka in nya idéer direkt från appen via Inställningar → Funktionsönskemål — personuppgifter redigeras bort på enheten innan något publiceras.",
    featureRequestLink: "Bläddra i den publika funktionsönskemålstavlan på GitHub →",
    faqMore: "Mer på supportsidan →",

    /* Closing CTA */
    taglineMain: "Konkurrenterna mäter produkten. BetaSuite mäter testaren.",
    ctaTitle: "Redo att leverera bättre buggrapporter?",
    ctaText: "Hämta BetaSuite — eller hör av dig om du har frågor först.",
    ctaContact: "Frågor? Hör av dig →",

    /* Why page */
    whyTitle: "Byggt för testaren, inte för leverantören.",
    whyLead: "De vanliga beta-testverktygen delar en arkitektonisk premiss: företaget som testas kontrollerar verktyget. Det lämnar testaren med en återkommande uppsättning frustrationer. BetaSuite byggdes specifikt för att täppa till de hålen.",
    problemLabel: "Problemet",
    answerLabel: "BetaSuites svar",

    pain1Problem: "Du kan inte fånga skärm och kamera samtidigt.",
    pain1Problem2: "En video som visar \"jag trycker här, och så här gör enheten\" kräver vanligen två telefoner och ett stativ.",
    pain1Answer: "Dubbel inspelning sätter samman båda strömmarna till en enda MP4 på den enhet som faktiskt testas. Inget stativ. Ingen extra telefon.",

    pain2Problem: "Sporadiska buggar försvinner innan du hinner trycka på spela in.",
    pain2Problem2: "När du startat inspelningen är glitchen borta — och reproducering blir en gissningslek.",
    pain2Answer: "Instant Capture håller en rullande 15- eller 30-sekunders buffert i bakgrunden. Ett tryck sparar ögonblicket som just passerade. Inget setup, inga missade bevis.",

    pain3Problem: "NDA-arbete gör moln-AI omöjligt.",
    pain3Problem2: "Varje molnleverantör är en läckrisk, så rapporter blir handskrivna och långsamma.",
    pain3Answer: "Konfidentiellt läge stänger av molnladdningar, systemdelning och varje moln-AI-leverantör — medan Apple Intelligence fortsätter köras helt på enheten, noll nätverksanrop. AI-polering och sammanfattningar fungerar fortfarande på konfidentiell hårdvara.",

    pain4Problem: "Leverantörs-SDK:er skickar din data till leverantörens moln.",
    pain4Problem2: "Vanliga beta-testverktyg skickar testardata till en leverantörs-backend — okej för företaget, inte för känsliga prototyper.",
    pain4Answer: "BetaSuite har ingen egen server. Allt krypteras på din enhet, och data rör sig bara när du väljer en destination — ditt eget iCloud Drive, Google Drive, OneDrive, Bildbibliotek eller ett bärbart krypterat arkiv.",

    pain5Problem: "Veckorapporten är den långsammaste delen av jobbet.",
    pain5Problem2: "Tomma sidan-förlamning, särskilt när du jonglerar flera program.",
    pain5Answer: "Periodsammanfattningen utkastar en strukturerad rapport — tema, positiva punkter, problem, rekommendationer — direkt från markörerna och återkopplingen du redan loggat. PDF eller DOCX, skannbara punkter, klar att maila.",

    pain6Problem: "Beta-testverktyg är ofta bara på engelska.",
    pain6Problem2: "Flerspråksstöd, när det finns, kommer ofta gammalt och åldras dåligt.",
    pain6Answer: "Finns nu på 21 språk — BetaSuite följer enhetens språk live, så testare i Tokyo, Berlin eller São Paulo ser appen var och en på sitt eget språk.",

    whyClosingTagline: "Konkurrenterna mäter produkten. BetaSuite mäter testaren.",

    /* Support page */
    supportTitle: "Support",
    supportLede: "Vi läser varje meddelande och siktar på att svara inom 2 arbetsdagar.",
    contactTitle: "Hör av dig",
    nameLabel: "Ditt namn",
    emailLabel: "Din e-postadress",
    categoryLabel: "Kategori",
    messageLabel: "Meddelande",
    sendMessage: "Skicka meddelande",
    faqTitle: "Vanliga frågor"
  },

  es: {
    /* Nav */
    navHome: "Inicio",
    navSupport: "Soporte",
    navPrivacy: "Privacidad",
    navTerms: "Términos",
    navWhy: "Por qué BetaSuite",

    /* Hero */
    heroTitle: "Captura cada bug. Cuenta toda la historia.",
    heroText: "BetaSuite es el kit de pruebas móviles para personas que de verdad reportan bugs: graba pantalla y cámara a la vez, reproduce los últimos 30 segundos, anota, transcribe y entrega un informe pulido.",
    downloadAppStore: "Descargar en el App Store",
    androidNote: "Solo iPhone — Android en desarrollo, fecha de lanzamiento por confirmar.",
    androidNotifyLink: "Avísame →",
    metaText: "Compra única en la App Store · Sin suscripción · Sin anuncios · Sin seguimiento · Tuyo de por vida",

    /* Value props strip */
    valueCaptureTitle: "Capturar",
    valueCaptureText: "Pantalla + cámara, repetición instantánea, notas de voz, fotos.",
    valueAnnotateTitle: "Anotar",
    valueAnnotateText: "Dibuja, fija y marca con tiempo cada clip y captura.",
    valueReportTitle: "Reportar",
    valueReportText: "Resúmenes automáticos de sesión que los desarrolladores sí leen.",

    /* Feature grid (9 cards) */
    insideTitle: "Qué hay dentro",

    feat1Title: "Captura cada momento",
    feat1Lead: "Grabación dual, captura instantánea, superposiciones en vivo.",
    feat1Text: "Graba pantalla y cámara frontal en un único vídeo compuesto mientras cambias de app. Un toque guarda los últimos 30 segundos de un búfer rodante — perfecto para fallos intermitentes que no podías predecir. Cada captura lleva fecha, hora, GPS, clima e info del dispositivo automáticamente. Recorta después el tiempo muerto de un clip en la app — precisión por fotograma, con deshacer en un toque.",

    feat2Title: "Sesiones en línea de tiempo",
    feat2Lead: "Marcadores, notas de voz, fotos — todo en una línea de tiempo.",
    feat2Text: "Coloca un marcador con un toque en el segundo en que ocurre algo. Adjunta una captura, dicta una nota de voz, o expande luego a un informe completo. Cada sesión registra estado del dispositivo, OS, salud de batería y clima de forma automática — el contexto nunca falta.",

    feat3Title: "Informes asistidos por IA",
    feat3Lead: "Un PDF o DOCX pulido en segundos.",
    feat3Text: "Elige un periodo — esta semana, la pasada, rango personalizado — y BetaSuite redacta un informe estructurado (tema, positivos, problemas, recomendaciones) en viñetas escaneables. Las imágenes se ordenan automáticamente en secciones Estado, Mapping y Adicional, cada sección en su propia página para que el PDF se lea como un libro por capítulos. Color de marca por proyecto. Envíalo por correo desde la app.",

    feat4Title: "Modo confidencial",
    feat4Lead: "IA en el dispositivo para trabajo bajo NDA.",
    feat4Text: "Un solo interruptor y BetaSuite bloquea subidas a la nube, compartir del sistema y todo proveedor de IA en la nube. Apple Intelligence sigue corriendo totalmente en el dispositivo — sin ninguna llamada de red — para que el pulido por IA y los resúmenes sigan funcionando en hardware confidencial.",

    feat5Title: "Enrutado de IA a tu manera",
    feat5Lead: "Apple Intelligence en el dispositivo, BetaSuite Assist como respaldo. O usa tu propia clave.",
    feat5Text: "Por defecto, Apple Intelligence corre en el dispositivo con BetaSuite Assist como respaldo en la nube. ¿Prefieres tu proveedor? Trae tu clave API para Claude, GPT, Gemini o DeepSeek. Pollinations está disponible como respaldo de emergencia. Cambia de proveedor cuando quieras en Ajustes — cada cambio pide consentimiento explícito antes de que los datos salgan del dispositivo.",

    feat6Title: "Ajusta tu uso de IA",
    feat6Lead: "Apagada, solo pulido, enmascarado de palabrotas o resumen completo.",
    feat6Text: "Elige cuánto hace la IA por ti — pulido leve de palabras en una entrada de feedback, enmascarado de palabrotas antes de enviar un informe, o resumen completo de sesión y generación de informe. El propio formulario de feedback empieza simple y solo se expande cuando necesitas categoría, severidad, pasos de reproducción, capturas anotadas y notas de voz.",

    feat7Title: "Pensado para testers de hardware",
    feat7Lead: "Frente, lateral, atrás, debajo — etiquetado por ángulo desde el inicio.",
    feat7Text: "Fotos de estado multi-imagen con chips de ángulo que pre-etiquetan la siguiente foto. Capturas de mapping y fotos adicionales libres tienen sus propias secciones de informe. Geocodificación inversa de ubicación y condiciones de Apple Weather incluidas. Importa fotos tomadas hace meses y BetaSuite restaura la fecha original, el GPS y el clima real de ese momento — no del momento en que las subiste. Lectura en vivo del puerto de carga (voltios, amperios, vatios) para depurar la alimentación.",

    feat8Title: "Estructura de proyecto que escala",
    feat8Lead: "Un proyecto por producto, captura instantánea para todo lo demás.",
    feat8Text: "Agrupa sesiones, feedback e informes bajo proyectos con nombre. Adjunta NDA y contactos por proyecto — o sáltate la configuración y usa el proyecto Instant Capture siempre fijado para hallazgos puntuales.",

    feat9Title: "Sincronización en la nube a tu medida",
    feat9Lead: "iCloud Drive, Google Drive, OneDrive, Carrete o nada.",
    feat9Text: "BetaSuite nunca tiene su propio servidor con tus datos. Exporta a tu nube, a tu Carrete, o a un archivo .betasuite.json portátil cifrado que puedes reimportar en cualquier dispositivo.",

    /* How it works */
    howTitle: "Cómo funciona",
    step1Title: "1. Graba la sesión",
    step1Text: "Inicia un proyecto, pulsa grabar, y usa la app o el dispositivo como lo haría un tester.",
    step2Title: "2. Marca y anota",
    step2Text: "Coloca marcadores, añade notas de voz y dibuja sobre las capturas — todo con tiempo automático.",
    step3Title: "3. Genera un informe",
    step3Text: "BetaSuite ensambla un resumen de sesión más los medios, listo para compartir con desarrolladores.",

    /* Callout */
    calloutTitle: "Privacidad por diseño",
    calloutLead: "BetaSuite se apoya en IA en el dispositivo siempre que tu iPhone lo permita.",
    callout1Title: "IA que se queda en tu dispositivo",
    callout1Text: "Apple Intelligence (iOS 26+, iPhone 15 Pro / 16 / 17) gestiona la generación de texto localmente.",
    callout2Title: "Voz que nunca sale",
    callout2Text: "Las notas de voz se transcriben en el dispositivo a través del framework Speech de Apple en iPhones compatibles.",
    callout3Title: "Un interruptor para trabajo sensible",
    callout3Text: "El modo confidencial bloquea toda ruta a la nube para que las pruebas bajo NDA queden locales.",
    calloutLink: "Lee la política de privacidad completa →",

    /* Why teaser on home page */
    whyTeaserTitle: "Hecho para el tester, no para el proveedor.",
    whyTeaserLead: "Las herramientas de beta-testing convencionales instrumentan el producto. BetaSuite instrumenta al tester.",
    whyTeaser1Problem: "¿Cámara y pantalla a la vez?",
    whyTeaser1Answer: "BetaSuite compone ambos flujos en un único MP4 en el dispositivo que se prueba — sin trípode, sin segundo móvil.",
    whyTeaser2Problem: "¿El bug ya se fue cuando le diste a grabar?",
    whyTeaser2Answer: "Un búfer rodante de 15 o 30 segundos mantiene vivo el momento — un toque guarda lo que acaba de pasar.",
    whyTeaser3Problem: "¿La IA en la nube es un riesgo de fuga en hardware bajo NDA?",
    whyTeaser3Answer: "El modo confidencial ejecuta Apple Intelligence totalmente en el dispositivo. Pulido por IA sin riesgo de red.",
    whyTeaserLink: "Ver la comparación completa →",

    /* FAQ teaser */
    faqTeaserTitle: "Preguntas frecuentes",
    faqQ1: "¿Qué dispositivos se admiten?",
    faqA1: "iPhone con iOS 16 o posterior. Android está en desarrollo — fecha de lanzamiento por confirmar.",
    faqQ2: "¿Necesito una cuenta?",
    faqA2: "BetaSuite en sí no requiere cuenta, pero necesitas un Apple ID / cuenta de App Store válidos para comprar y descargar la app.",
    faqQ3: "¿Qué es el modo confidencial?",
    faqA3: "El modo confidencial bloquea la sincronización en la nube y la IA en la nube, manteniendo el procesamiento en local cuando es posible.",
    faqQ4: "¿Hay una suscripción?",
    faqA4: "No — BetaSuite es una compra única en la App Store. Paga una vez, tuyo de por vida.",
    faqDeleteQ: "¿Cómo elimino mis datos?",
    faqDeleteA: "Abre BetaSuite y ve a Ajustes → Datos → Borrar todos los datos de la app.",
    notFoundTitle: "Página no encontrada",
    notFoundText: "Esta página no está aquí. Es posible que se haya movido o nunca haya existido.",
    notFoundHome: "Volver al inicio",
    notFoundContact: "Contactar con soporte",
    pageTitleIndex: "BetaSuite — Hecho para el tester, no para el proveedor",
    pageTitleWhy: "Por qué BetaSuite — Hecho para el tester, no para el proveedor",
    pageTitleSupport: "Soporte — BetaSuite",
    metaDescIndex: "BetaSuite es el kit de pruebas móvil para quienes realmente reportan bugs: grabación simultánea de pantalla y cámara, repetición instantánea de 30 segundos, IA en el dispositivo, Modo Confidencial para trabajo bajo NDA e informes que los desarrolladores leen.",
    metaDescWhy: "Cómo BetaSuite resuelve los problemas recurrentes de los beta testers móviles: grabación simultánea de pantalla + cámara, búfer de repetición instantánea, Modo Confidencial para trabajo bajo NDA, sin nube del proveedor e informes redactados por IA.",
    metaDescSupport: "Obtén ayuda con BetaSuite: formulario de contacto, FAQs, resolución de problemas, eliminación de cuenta y datos, y cómo reportar un bug.",
    pageTitlePrivacy: "Política de privacidad — BetaSuite",
    metaDescPrivacy: "Política de privacidad de BetaSuite. BetaSuite es local-first: tus datos viven en tu dispositivo de forma predeterminada y solo lo abandonan si usas una función que llama a un servicio externo.",
    pageTitleTerms: "Términos de uso — BetaSuite",
    metaDescTerms: "Términos de uso de BetaSuite: licencia, restricciones, propiedad intelectual, servicios de terceros, exención de garantías y legislación aplicable de la app BetaSuite.",
    privacyTitle: "Política de privacidad",
    termsTitle: "Términos de uso",
    legalEnglishOnlyNotice: "El cuerpo de este documento se proporciona únicamente en inglés. Cualquier traducción en otras partes del sitio es por comodidad — la versión en inglés es la jurídicamente vinculante.",
    featureRequestTitle: "¿Tienes una idea de función?",
    featureRequestBody: "Las solicitudes de funciones viven en un repo público de GitHub para que otros testers puedan verlas y votarlas. Puedes enviar nuevas ideas directamente desde la app en Ajustes → Solicitudes de funciones, con redacción de datos personales en el dispositivo antes de publicar nada.",
    featureRequestLink: "Explorar el tablero público de solicitudes de funciones en GitHub →",
    faqMore: "Más en la página de soporte →",

    /* Closing CTA */
    taglineMain: "Los competidores instrumentan el producto. BetaSuite instrumenta al tester.",
    ctaTitle: "¿Listo para entregar mejores informes de bugs?",
    ctaText: "Descarga BetaSuite — o ponte en contacto si tienes dudas primero.",
    ctaContact: "¿Dudas? Ponte en contacto →",

    /* Why page */
    whyTitle: "Hecho para el tester, no para el proveedor.",
    whyLead: "Las herramientas de beta-testing convencionales comparten un supuesto arquitectónico: la empresa probada controla la herramienta. Eso deja al tester con un conjunto recurrente de frustraciones. BetaSuite se construyó específicamente para cerrar esos huecos.",
    problemLabel: "El problema",
    answerLabel: "La respuesta de BetaSuite",

    pain1Problem: "No puedes capturar pantalla y cámara al mismo tiempo.",
    pain1Problem2: "Un vídeo que muestre «toco aquí, y esto hace el dispositivo» suele necesitar dos móviles y un trípode.",
    pain1Answer: "La grabación dual compone ambos flujos en un único MP4 en el dispositivo que se está probando. Sin trípode. Sin segundo móvil.",

    pain2Problem: "Los bugs intermitentes desaparecen antes de que pulses grabar.",
    pain2Problem2: "Cuando arrancas la captura, el fallo ya se fue — y reproducirlo es un juego de adivinanzas.",
    pain2Answer: "Instant Capture mantiene un búfer rodante de 15 o 30 segundos en segundo plano. Un toque guarda el momento que acaba de pasar. Sin configuración, sin pruebas perdidas.",

    pain3Problem: "El trabajo bajo NDA hace inviable la IA en la nube.",
    pain3Problem2: "Cada proveedor de nube es un riesgo de fuga, así que los informes acaban escritos a mano y lentos.",
    pain3Answer: "El modo confidencial bloquea subidas a la nube, compartir del sistema y todo proveedor de IA en la nube — mientras Apple Intelligence sigue corriendo totalmente en el dispositivo, cero llamadas de red. El pulido por IA y los resúmenes siguen funcionando en hardware confidencial.",

    pain4Problem: "Los SDK de proveedores envían tus datos a la nube del proveedor.",
    pain4Problem2: "Las herramientas de beta-testing convencionales envían los datos del tester a un backend del proveedor — bien para la empresa, mal para prototipos sensibles.",
    pain4Answer: "BetaSuite no tiene servidor propio. Todo se cifra en tu dispositivo, y los datos solo se mueven cuando eliges destino — tu propio iCloud Drive, Google Drive, OneDrive, Carrete o un archivo cifrado portátil.",

    pain5Problem: "El informe semanal es la parte más lenta del trabajo.",
    pain5Problem2: "Parálisis de la página en blanco, sobre todo cuando llevas varios programas a la vez.",
    pain5Answer: "El resumen de periodo redacta un informe estructurado — tema, positivos, problemas, recomendaciones — directamente desde los marcadores y feedback ya registrados. PDF o DOCX, viñetas escaneables, listo para enviar por correo.",

    pain6Problem: "Las herramientas de beta-testing suelen ser solo en inglés.",
    pain6Problem2: "El soporte multiidioma, cuando existe, suele venir desactualizado y envejecer mal.",
    pain6Answer: "Ahora disponible en 21 idiomas — BetaSuite sigue el idioma de tu dispositivo en directo, así los testers en Tokio, Berlín o São Paulo ven la app cada uno en el suyo.",

    whyClosingTagline: "Los competidores instrumentan el producto. BetaSuite instrumenta al tester.",

    /* Support page */
    supportTitle: "Soporte",
    supportLede: "Leemos cada mensaje y procuramos responder en 2 días laborables.",
    contactTitle: "Ponte en contacto",
    nameLabel: "Tu nombre",
    emailLabel: "Tu correo electrónico",
    categoryLabel: "Categoría",
    messageLabel: "Mensaje",
    sendMessage: "Enviar mensaje",
    faqTitle: "Preguntas frecuentes"
  },

  it: {
    /* Nav */
    navHome: "Home",
    navSupport: "Supporto",
    navPrivacy: "Privacy",
    navTerms: "Termini",
    navWhy: "Perché BetaSuite",

    /* Hero */
    heroTitle: "Cattura ogni bug. Racconta tutta la storia.",
    heroText: "BetaSuite è il kit di test mobile per chi i bug li segnala davvero: registra schermo e fotocamera insieme, riproduci gli ultimi 30 secondi, annota, trascrivi e consegna un report rifinito.",
    downloadAppStore: "Scarica su App Store",
    androidNote: "Solo iPhone — Android in sviluppo, data di rilascio da confermare.",
    androidNotifyLink: "Avvisami →",
    metaText: "Acquisto una tantum su App Store · Nessun abbonamento · Niente pubblicità · Niente tracciamento · Tuo per sempre",

    /* Value props strip */
    valueCaptureTitle: "Catturare",
    valueCaptureText: "Schermo + fotocamera, replay istantaneo, memo vocali, foto.",
    valueAnnotateTitle: "Annotare",
    valueAnnotateText: "Disegna, appunta e timestampa ogni clip e screenshot.",
    valueReportTitle: "Riportare",
    valueReportText: "Riepiloghi di sessione automatici che gli sviluppatori leggono davvero.",

    /* Feature grid (9 cards) */
    insideTitle: "Cosa c'è dentro",

    feat1Title: "Cattura ogni momento",
    feat1Lead: "Doppia registrazione, cattura istantanea, overlay in tempo reale.",
    feat1Text: "Registra schermo e fotocamera frontale in un unico video composito mentre cambi app. Un tocco salva gli ultimi 30 secondi da un buffer rotante — perfetto per glitch sporadici imprevedibili. Ogni cattura riceve automaticamente data, ora, GPS, meteo e info sul dispositivo. Taglia in seguito i tempi morti da un clip nell'app — preciso al fotogramma, con annulla a un tocco.",

    feat2Title: "Sessioni su una timeline",
    feat2Lead: "Marker, memo vocali, foto — tutto su un'unica timeline.",
    feat2Text: "Posa un marker con un tocco nel momento in cui qualcosa accade. Allega uno screenshot, detta un memo vocale, o espandi più tardi in un report di bug completo. Ogni sessione cattura stato del dispositivo, OS, salute della batteria e meteo in automatico — il contesto non manca mai.",

    feat3Title: "Report assistiti dall'IA",
    feat3Lead: "Un PDF o DOCX rifinito in pochi secondi.",
    feat3Text: "Scegli un periodo — questa settimana, la scorsa, intervallo personalizzato — e BetaSuite stende un report strutturato (tema, punti positivi, problemi, raccomandazioni) come bullet scorrevoli. Le immagini vengono ordinate automaticamente nelle sezioni Condizione, Mapping e Aggiuntive, ciascuna sezione su una propria pagina così il PDF si legge come un libro a capitoli. Colore del brand per progetto. Invialo via email dall'app.",

    feat4Title: "Modalità riservata",
    feat4Lead: "IA on-device per il lavoro sotto NDA.",
    feat4Text: "Un solo interruttore e BetaSuite blocca upload cloud, condivisione di sistema e ogni provider di IA cloud. Apple Intelligence continua a girare interamente sul dispositivo — nessuna chiamata di rete, mai — così rifinitura IA e riepiloghi funzionano anche su hardware riservato.",

    feat5Title: "Routing IA a modo tuo",
    feat5Lead: "Apple Intelligence on-device, BetaSuite Assist come fallback. Oppure porta la tua chiave.",
    feat5Text: "Per impostazione predefinita, Apple Intelligence gira sul dispositivo con BetaSuite Assist come fallback cloud. Preferisci il tuo provider? Porta la tua chiave API per Claude, GPT, Gemini o DeepSeek. Pollinations è disponibile come fallback di emergenza. Cambia provider quando vuoi nelle Impostazioni — ogni cambio chiede consenso esplicito prima che i dati lascino il dispositivo.",

    feat6Title: "Regola il tuo uso dell'IA",
    feat6Lead: "Off, solo rifinitura, mascheramento delle parolacce o riepilogo completo.",
    feat6Text: "Scegli quanto fa l'IA per te — leggera rifinitura del testo su una voce di feedback, mascheramento delle parolacce prima che parta un report, o riepilogo completo della sessione e generazione del report. Il modulo di feedback parte semplice e si espande solo quando ti servono categoria, gravità, passi di riproduzione, screenshot annotati e memo vocali.",

    feat7Title: "Pensato per i tester hardware",
    feat7Lead: "Fronte, lato, retro, sotto — taggati per angolo fin dall'inizio.",
    feat7Text: "Foto di condizione multi-immagine con chip di angolo che pre-taggano la foto successiva. Screenshot di mapping e foto aggiuntive libere hanno sezioni di report dedicate. Localizzazione con reverse geocoding e condizioni Apple Weather integrate. Importa foto scattate mesi fa e BetaSuite ripristina la data originale, il GPS e il meteo reale di quel momento — non quello del momento in cui le hai caricate. Lettura in tempo reale della porta di ricarica (volt, ampere, watt) per il debug dell'alimentazione.",

    feat8Title: "Struttura di progetto che scala",
    feat8Lead: "Un progetto per prodotto, cattura istantanea per tutto il resto.",
    feat8Text: "Raggruppa sessioni, feedback e report sotto progetti con nome. Allega NDA e contatti per progetto — o salta del tutto la configurazione e usa il progetto Instant Capture sempre in evidenza per le scoperte una tantum.",

    feat9Title: "Sync nel cloud alle tue condizioni",
    feat9Lead: "iCloud Drive, Google Drive, OneDrive, Rullino o nulla.",
    feat9Text: "BetaSuite non ha mai un suo server che tiene i tuoi dati. Esporta sul tuo cloud, sul Rullino, o in un archivio .betasuite.json crittografato e portabile, reimportabile su qualsiasi dispositivo.",

    /* How it works */
    howTitle: "Come funziona",
    step1Title: "1. Registra la sessione",
    step1Text: "Avvia un progetto, premi registra, e usa l'app o il dispositivo come farebbe un tester.",
    step2Title: "2. Marca e annota",
    step2Text: "Posa marker, aggiungi memo vocali e disegna sugli screenshot — tutto con timestamp automatico.",
    step3Title: "3. Genera un report",
    step3Text: "BetaSuite assembla un riepilogo di sessione e i media, pronto per condividere con gli sviluppatori.",

    /* Callout */
    calloutTitle: "Privacy-first per design",
    calloutLead: "BetaSuite si appoggia all'IA on-device ovunque il tuo iPhone la supporti.",
    callout1Title: "IA che resta sul tuo dispositivo",
    callout1Text: "Apple Intelligence (iOS 26+, iPhone 15 Pro / 16 / 17) gestisce la generazione del testo in locale.",
    callout2Title: "Voce che non se ne va",
    callout2Text: "I memo vocali vengono trascritti sul dispositivo tramite il framework Speech di Apple su iPhone compatibili.",
    callout3Title: "Un interruttore per il lavoro sensibile",
    callout3Text: "La modalità riservata blocca ogni rotta verso il cloud, così i test sotto NDA restano locali.",
    calloutLink: "Leggi l'informativa completa →",

    /* Why teaser on home page */
    whyTeaserTitle: "Costruito per il tester, non per il fornitore.",
    whyTeaserLead: "Gli strumenti di beta-testing mainstream strumentano il prodotto. BetaSuite strumenta il tester.",
    whyTeaser1Problem: "Fotocamera e schermo insieme?",
    whyTeaser1Answer: "BetaSuite compone entrambi i flussi in un unico MP4 sul dispositivo testato — niente treppiede, nessun secondo telefono.",
    whyTeaser2Problem: "Bug già sparito quando premi registra?",
    whyTeaser2Answer: "Un buffer rotante da 15 o 30 secondi tiene vivo il momento — un tocco salva quello che è appena successo.",
    whyTeaser3Problem: "L'IA cloud è un rischio di fuga su hardware sotto NDA?",
    whyTeaser3Answer: "La modalità riservata fa girare Apple Intelligence interamente sul dispositivo. Rifinitura IA senza il rischio di rete.",
    whyTeaserLink: "Vedi il confronto completo →",

    /* FAQ teaser */
    faqTeaserTitle: "Domande frequenti",
    faqQ1: "Quali dispositivi sono supportati?",
    faqA1: "iPhone con iOS 16 o successivo. Android è in sviluppo — data di rilascio da confermare.",
    faqQ2: "Serve un account?",
    faqA2: "BetaSuite in sé non richiede un account, ma serve un Apple ID / account App Store valido per acquistare e scaricare l'app.",
    faqQ3: "Cos'è la modalità riservata?",
    faqA3: "La modalità riservata blocca la sync cloud e l'IA cloud, mantenendo l'elaborazione in locale dove possibile.",
    faqQ4: "C'è un abbonamento?",
    faqA4: "No — BetaSuite è un acquisto una tantum su App Store. Paga una volta, tuo per sempre.",
    faqDeleteQ: "Come elimino i miei dati?",
    faqDeleteA: "Apri BetaSuite e vai su Impostazioni → Dati → Cancella tutti i dati dell'app.",
    notFoundTitle: "Pagina non trovata",
    notFoundText: "Questa pagina non è qui. Potrebbe essere stata spostata, o non essere mai esistita.",
    notFoundHome: "Torna alla home",
    notFoundContact: "Contatta l'assistenza",
    pageTitleIndex: "BetaSuite — Costruito per il tester, non per il vendor",
    pageTitleWhy: "Perché BetaSuite — Costruito per il tester, non per il vendor",
    pageTitleSupport: "Supporto — BetaSuite",
    metaDescIndex: "BetaSuite è il kit di test mobile per chi segnala davvero i bug: registrazione contemporanea di schermo e fotocamera, replay istantaneo di 30 secondi, IA sul dispositivo, Modalità Riservata per il lavoro sotto NDA e report che gli sviluppatori leggono davvero.",
    metaDescWhy: "Come BetaSuite affronta i problemi ricorrenti dei beta tester mobili: registrazione contemporanea di schermo + fotocamera, buffer di replay istantaneo, Modalità Riservata per lavoro sotto NDA, niente cloud del vendor e report redatti dall'IA.",
    metaDescSupport: "Ottieni aiuto su BetaSuite: modulo di contatto, FAQ, risoluzione problemi, eliminazione account e dati, e come segnalare un bug.",
    pageTitlePrivacy: "Informativa sulla privacy — BetaSuite",
    metaDescPrivacy: "Informativa sulla privacy di BetaSuite. BetaSuite è local-first: i dati restano sul tuo dispositivo per impostazione predefinita e non lo lasciano se non usi una funzione che chiama un servizio esterno.",
    pageTitleTerms: "Termini di utilizzo — BetaSuite",
    metaDescTerms: "Termini di utilizzo di BetaSuite: licenza, restrizioni, proprietà intellettuale, servizi di terzi, esclusione di garanzia e legge applicabile dell'app BetaSuite.",
    privacyTitle: "Informativa sulla privacy",
    termsTitle: "Termini di utilizzo",
    legalEnglishOnlyNotice: "Il testo di questo documento è fornito solo in inglese. Eventuali traduzioni in altre parti del sito sono fornite per comodità — la versione in inglese è quella giuridicamente vincolante.",
    featureRequestTitle: "Hai un'idea di funzionalità?",
    featureRequestBody: "Le richieste di funzionalità vivono in un repo GitHub pubblico, così altri tester possono vederle e votarle. Puoi inviare nuove idee direttamente dall'app tramite Impostazioni → Richieste di funzionalità — i dati personali vengono oscurati sul dispositivo prima della pubblicazione.",
    featureRequestLink: "Sfoglia la bacheca pubblica delle richieste di funzionalità su GitHub →",
    faqMore: "Altro nella pagina supporto →",

    /* Closing CTA */
    taglineMain: "I concorrenti strumentano il prodotto. BetaSuite strumenta il tester.",
    ctaTitle: "Pronto a consegnare report di bug migliori?",
    ctaText: "Scarica BetaSuite — oppure contattaci se prima hai delle domande.",
    ctaContact: "Domande? Contattaci →",

    /* Why page */
    whyTitle: "Costruito per il tester, non per il fornitore.",
    whyLead: "Gli strumenti di beta-testing mainstream condividono un'assunzione architetturale: l'azienda testata controlla lo strumento. Questo lascia il tester con un insieme ricorrente di frustrazioni. BetaSuite è stato costruito proprio per chiudere quei vuoti.",
    problemLabel: "Il problema",
    answerLabel: "La risposta di BetaSuite",

    pain1Problem: "Non puoi catturare schermo e fotocamera insieme.",
    pain1Problem2: "Un video che mostra «sto toccando qui, ed ecco cosa fa il dispositivo» di solito richiede due telefoni e un treppiede.",
    pain1Answer: "La doppia registrazione compone entrambi i flussi in un unico MP4 sul dispositivo davvero in test. Niente treppiede. Nessun secondo telefono.",

    pain2Problem: "I bug sporadici svaniscono prima che premi registra.",
    pain2Problem2: "Quando hai avviato la cattura, il glitch è andato — e riprodurlo diventa un gioco di indovinelli.",
    pain2Answer: "Instant Capture mantiene in background un buffer rotante da 15 o 30 secondi. Un tocco salva il momento appena passato. Niente setup, niente prove perse.",

    pain3Problem: "Il lavoro sotto NDA rende impraticabile l'IA cloud.",
    pain3Problem2: "Ogni provider cloud è un rischio di fuga, quindi i report finiscono scritti a mano e lenti.",
    pain3Answer: "La modalità riservata blocca upload cloud, condivisione di sistema e ogni provider di IA cloud — mentre Apple Intelligence continua a girare interamente sul dispositivo, zero chiamate di rete. Rifinitura IA e riepiloghi funzionano anche su hardware riservato.",

    pain4Problem: "Gli SDK dei vendor inviano i tuoi dati nel cloud del vendor.",
    pain4Problem2: "Gli strumenti di beta-testing mainstream mandano i dati del tester a un backend del vendor — bene per l'azienda, male per i prototipi sensibili.",
    pain4Answer: "BetaSuite non ha un proprio server. Tutto è cifrato sul tuo dispositivo, e i dati si muovono solo quando scegli una destinazione — il tuo iCloud Drive, Google Drive, OneDrive, Rullino o un archivio cifrato portabile.",

    pain5Problem: "Il report settimanale è la parte più lenta del lavoro.",
    pain5Problem2: "Paralisi da pagina bianca, soprattutto quando giochi con più programmi.",
    pain5Answer: "Il riepilogo di periodo stende un report strutturato — tema, punti positivi, problemi, raccomandazioni — direttamente dai marker e dal feedback già registrati. PDF o DOCX, bullet scorrevoli, pronto da inviare via mail.",

    pain6Problem: "Gli strumenti di beta-testing sono spesso solo in inglese.",
    pain6Problem2: "Il supporto multilingua, quando c'è, esce spesso datato e invecchia male.",
    pain6Answer: "Ora disponibile in 21 lingue — BetaSuite segue la lingua del dispositivo in tempo reale, così tester a Tokyo, Berlino o São Paulo vedono l'app ciascuno nella propria.",

    whyClosingTagline: "I concorrenti strumentano il prodotto. BetaSuite strumenta il tester.",

    /* Support page */
    supportTitle: "Supporto",
    supportLede: "Leggiamo ogni messaggio e puntiamo a rispondere entro 2 giorni lavorativi.",
    contactTitle: "Contattaci",
    nameLabel: "Il tuo nome",
    emailLabel: "Il tuo indirizzo email",
    categoryLabel: "Categoria",
    messageLabel: "Messaggio",
    sendMessage: "Invia messaggio",
    faqTitle: "Domande frequenti"
  },

  pl: {
    /* Nav */
    navHome: "Strona główna",
    navSupport: "Wsparcie",
    navPrivacy: "Prywatność",
    navTerms: "Warunki",
    navWhy: "Dlaczego BetaSuite",

    /* Hero */
    heroTitle: "Złap każdego buga. Opowiedz całą historię.",
    heroText: "BetaSuite to mobilny zestaw testowy dla osób, które naprawdę zgłaszają bugi — nagrywaj ekran i kamerę jednocześnie, odtwarzaj ostatnie 30 sekund, opisuj, transkrybuj i wysyłaj dopracowany raport.",
    downloadAppStore: "Pobierz w App Store",
    androidNote: "Tylko iPhone — Android w fazie rozwoju, data wydania do potwierdzenia.",
    androidNotifyLink: "Powiadom mnie →",
    metaText: "Jednorazowy zakup w App Store · Bez subskrypcji · Bez reklam · Bez śledzenia · Twoje na zawsze",

    /* Value props strip */
    valueCaptureTitle: "Przechwyć",
    valueCaptureText: "Ekran + kamera, natychmiastowa powtórka, notatki głosowe, zdjęcia.",
    valueAnnotateTitle: "Opisz",
    valueAnnotateText: "Rysuj, przypinaj i znaczyj czasem każdy klip i zrzut ekranu.",
    valueReportTitle: "Raportuj",
    valueReportText: "Automatyczne podsumowania sesji, które programiści naprawdę czytają.",

    /* Feature grid (9 cards) */
    insideTitle: "Co jest w środku",

    feat1Title: "Złap każdy moment",
    feat1Lead: "Podwójne nagrywanie, natychmiastowe przechwytywanie, nakładki na żywo.",
    feat1Text: "Nagrywa ekran i przednią kamerę w jedno złożone wideo, gdy przełączasz aplikacje. Jedno dotknięcie zapisuje ostatnie 30 sekund z bufora kroczącego — idealne na nieprzewidywalne, sporadyczne usterki. Każde nagranie automatycznie otrzymuje datę, godzinę, GPS, pogodę i informacje o urządzeniu. Potem przytnij martwy czas z klipu w aplikacji — z dokładnością do klatki, cofnij jednym dotknięciem.",

    feat2Title: "Sesje na osi czasu",
    feat2Lead: "Znaczniki, notatki głosowe, zdjęcia — wszystko na jednej osi czasu.",
    feat2Text: "Postaw znacznik jednym dotknięciem w sekundzie, w której coś się dzieje. Dołącz zrzut ekranu, podyktuj notatkę głosową, lub rozwiń później do pełnego zgłoszenia buga. Każda sesja automatycznie zapisuje stan urządzenia, OS, kondycję baterii i pogodę — kontekst nigdy nie znika.",

    feat3Title: "Raporty wspomagane SI",
    feat3Lead: "Dopracowany PDF lub DOCX w kilka sekund.",
    feat3Text: "Wybierz okres — ten tydzień, poprzedni tydzień, własny zakres — a BetaSuite napisze ustrukturyzowany raport (temat, plusy, problemy, rekomendacje) jako łatwo skanowalne punkty. Obrazy są automatycznie sortowane do sekcji Stan, Mapping i Dodatkowe, każda sekcja na osobnej stronie, więc PDF czyta się jak książkę w rozdziałach. Kolor marki per projekt. Wyślij e-mailem prosto z aplikacji.",

    feat4Title: "Tryb poufny",
    feat4Lead: "SI na urządzeniu do pracy pod NDA.",
    feat4Text: "Jedno przełączenie i BetaSuite blokuje wysyłki do chmury, udostępnianie systemowe i każdego dostawcę SI w chmurze. Apple Intelligence dalej działa w pełni na urządzeniu — bez ani jednego wywołania sieciowego — więc dopracowanie SI i streszczenia działają nawet na poufnym sprzęcie.",

    feat5Title: "Routing SI po Twojemu",
    feat5Lead: "Apple Intelligence na urządzeniu, BetaSuite Assist jako zapas. Lub przynieś własny klucz.",
    feat5Text: "Domyślnie Apple Intelligence działa na urządzeniu, a BetaSuite Assist stanowi zapas chmurowy. Wolisz własnego dostawcę? Przynieś klucz API dla Claude, GPT, Gemini lub DeepSeek. Pollinations jest dostępny jako awaryjny zapas. Zmieniaj dostawcę kiedy chcesz w Ustawieniach — każda zmiana prosi o jednoznaczną zgodę zanim dane opuszczą urządzenie.",

    feat6Title: "Wyreguluj użycie SI",
    feat6Lead: "Wyłączone, tylko polerowanie, maskowanie wulgaryzmów lub pełne streszczenie.",
    feat6Text: "Wybierz, ile SI robi za Ciebie — drobne polerowanie tekstu we wpisie zwrotnym, maskowanie wulgaryzmów przed wysłaniem raportu, lub pełne streszczenie sesji i generowanie raportu. Sam formularz zwrotny zaczyna się prosto i rozszerza tylko wtedy, gdy potrzebujesz kategorii, wagi, kroków reprodukcji, opisanych zrzutów i notatek głosowych.",

    feat7Title: "Stworzone dla testerów sprzętu",
    feat7Lead: "Przód, bok, tył, spód — z tagami kątów od początku.",
    feat7Text: "Wieloobrazowe zdjęcia stanu z chipsami kątów, które wstępnie tagują kolejne zdjęcie. Zrzuty mappingu i swobodne dodatkowe zdjęcia mają własne sekcje raportu. Lokalizacja z geokodowaniem odwrotnym i warunki Apple Weather wbudowane. Dodaj zdjęcia zrobione miesiące temu, a BetaSuite przywróci oryginalną datę, GPS i rzeczywistą pogodę z tamtego momentu — a nie z chwili przesyłania. Odczyt portu ładowania na żywo (wolty, ampery, waty) do debugowania zasilania.",

    feat8Title: "Struktura projektów, która skaluje się",
    feat8Lead: "Jeden projekt na produkt, natychmiastowe przechwytywanie dla całej reszty.",
    feat8Text: "Grupuj sesje, opinie i raporty w nazwane projekty. Dołącz NDA i kontakty per projekt — albo pomiń konfigurację i użyj zawsze przypiętego projektu Instant Capture do jednorazowych odkryć.",

    feat9Title: "Synchronizacja w chmurze na Twoich warunkach",
    feat9Lead: "iCloud Drive, Google Drive, OneDrive, Rolka aparatu lub nic.",
    feat9Text: "BetaSuite nigdy nie ma własnego serwera trzymającego Twoje dane. Eksportuj do swojej istniejącej chmury, do Rolki aparatu, lub do przenośnego, zaszyfrowanego archiwum .betasuite.json, które możesz reimportować na dowolnym urządzeniu.",

    /* How it works */
    howTitle: "Jak to działa",
    step1Title: "1. Nagraj sesję",
    step1Text: "Załóż projekt, naciśnij nagrywanie i używaj aplikacji lub urządzenia tak, jak robiłby to tester.",
    step2Title: "2. Oznacz i opisz",
    step2Text: "Stawiaj znaczniki, dodawaj notatki głosowe i rysuj na zrzutach — wszystko automatycznie ze znacznikiem czasu.",
    step3Title: "3. Wygeneruj raport",
    step3Text: "BetaSuite składa podsumowanie sesji wraz z mediami, gotowe do udostępnienia programistom.",

    /* Callout */
    calloutTitle: "Prywatność z założenia",
    calloutLead: "BetaSuite opiera się na SI na urządzeniu wszędzie tam, gdzie Twój iPhone to wspiera.",
    callout1Title: "SI, która zostaje na Twoim urządzeniu",
    callout1Text: "Apple Intelligence (iOS 26+, iPhone 15 Pro / 16 / 17) generuje tekst lokalnie.",
    callout2Title: "Mowa, która nigdzie nie ucieka",
    callout2Text: "Notatki głosowe są transkrybowane na urządzeniu przez framework Speech Apple na obsługiwanych iPhone'ach.",
    callout3Title: "Jeden przełącznik na wrażliwą pracę",
    callout3Text: "Tryb poufny blokuje każdą trasę do chmury, więc testy pod NDA pozostają lokalne.",
    calloutLink: "Przeczytaj pełną politykę prywatności →",

    /* Why teaser on home page */
    whyTeaserTitle: "Zbudowane dla testera, nie dla dostawcy.",
    whyTeaserLead: "Główne narzędzia beta-testów mierzą produkt. BetaSuite mierzy testera.",
    whyTeaser1Problem: "Kamera i ekran jednocześnie?",
    whyTeaser1Answer: "BetaSuite składa oba strumienie w jeden plik MP4 na testowanym urządzeniu — bez statywu, bez drugiego telefonu.",
    whyTeaser2Problem: "Bug już zniknął, gdy nacisnąłeś nagrywanie?",
    whyTeaser2Answer: "Kroczący bufor 15 lub 30 sekund podtrzymuje moment — jedno dotknięcie zapisuje to, co przed chwilą się stało.",
    whyTeaser3Problem: "SI w chmurze to ryzyko wycieku na sprzęcie pod NDA?",
    whyTeaser3Answer: "Tryb poufny uruchamia Apple Intelligence w pełni na urządzeniu. Dopracowanie SI bez ryzyka sieciowego.",
    whyTeaserLink: "Zobacz pełne porównanie →",

    /* FAQ teaser */
    faqTeaserTitle: "Częste pytania",
    faqQ1: "Jakie urządzenia są obsługiwane?",
    faqA1: "iPhone z iOS 16 lub nowszym. Android jest w fazie rozwoju — data wydania do potwierdzenia.",
    faqQ2: "Czy potrzebuję konta?",
    faqA2: "Sam BetaSuite nie wymaga konta, ale potrzebujesz ważnego Apple ID / konta App Store, by kupić i pobrać aplikację.",
    faqQ3: "Czym jest tryb poufny?",
    faqA3: "Tryb poufny blokuje synchronizację z chmurą i SI w chmurze, utrzymując przetwarzanie lokalnie tam, gdzie to możliwe.",
    faqQ4: "Czy jest subskrypcja?",
    faqA4: "Nie — BetaSuite to jednorazowy zakup w App Store. Zapłać raz, Twoje na zawsze.",
    faqDeleteQ: "Jak usunąć moje dane?",
    faqDeleteA: "Otwórz BetaSuite i przejdź do Ustawienia → Dane → Usuń wszystkie dane aplikacji.",
    notFoundTitle: "Nie znaleziono strony",
    notFoundText: "Tej strony tu nie ma. Mogła zostać przeniesiona lub nigdy nie istniała.",
    notFoundHome: "Powrót do strony głównej",
    notFoundContact: "Skontaktuj się z pomocą",
    pageTitleIndex: "BetaSuite — Stworzone dla testera, nie dla dostawcy",
    pageTitleWhy: "Dlaczego BetaSuite — Stworzone dla testera, nie dla dostawcy",
    pageTitleSupport: "Wsparcie — BetaSuite",
    metaDescIndex: "BetaSuite to mobilny zestaw testowy dla tych, którzy naprawdę zgłaszają błędy: jednoczesne nagrywanie ekranu i kamery, 30-sekundowa natychmiastowa powtórka, AI na urządzeniu, Tryb poufny do pracy pod NDA i raporty, które programiści naprawdę czytają.",
    metaDescWhy: "Jak BetaSuite rozwiązuje powtarzające się problemy mobilnych beta-testerów: jednoczesne nagrywanie ekranu + kamery, bufor natychmiastowej powtórki, Tryb poufny do pracy pod NDA, brak chmury dostawcy i raporty redagowane przez AI.",
    metaDescSupport: "Uzyskaj pomoc dotyczącą BetaSuite: formularz kontaktowy, FAQ, rozwiązywanie problemów, usuwanie konta i danych oraz jak zgłosić błąd.",
    pageTitlePrivacy: "Polityka prywatności — BetaSuite",
    metaDescPrivacy: "Polityka prywatności BetaSuite. BetaSuite działa lokalnie: dane domyślnie pozostają na Twoim urządzeniu i opuszczają je tylko wtedy, gdy korzystasz z funkcji łączącej się z usługą zewnętrzną.",
    pageTitleTerms: "Warunki korzystania — BetaSuite",
    metaDescTerms: "Warunki korzystania z BetaSuite: licencja, ograniczenia, własność intelektualna, usługi stron trzecich, wyłączenie odpowiedzialności i prawo właściwe dla aplikacji BetaSuite.",
    privacyTitle: "Polityka prywatności",
    termsTitle: "Warunki korzystania",
    legalEnglishOnlyNotice: "Treść tego dokumentu jest dostępna wyłącznie w języku angielskim. Wszelkie tłumaczenia w innych miejscach witryny mają charakter informacyjny — wersja angielska jest wiążąca prawnie.",
    featureRequestTitle: "Masz pomysł na funkcję?",
    featureRequestBody: "Prośby o funkcje znajdują się w publicznym repo na GitHubie, dzięki czemu inni testerzy mogą je zobaczyć i głosować na nie. Nowe pomysły możesz zgłaszać bezpośrednio z aplikacji w Ustawienia → Prośby o funkcje — dane osobowe są usuwane lokalnie na urządzeniu przed publikacją.",
    featureRequestLink: "Przeglądaj publiczną tablicę próśb o funkcje na GitHubie →",
    faqMore: "Więcej na stronie wsparcia →",

    /* Closing CTA */
    taglineMain: "Konkurenci mierzą produkt. BetaSuite mierzy testera.",
    ctaTitle: "Gotowy dostarczać lepsze raporty bugów?",
    ctaText: "Pobierz BetaSuite — albo skontaktuj się z nami, jeśli masz najpierw pytania.",
    ctaContact: "Pytania? Skontaktuj się →",

    /* Why page */
    whyTitle: "Zbudowane dla testera, nie dla dostawcy.",
    whyLead: "Główne narzędzia beta-testów dzielą jedno założenie architektoniczne: testowana firma kontroluje narzędzia. To zostawia testera z powtarzającym się zestawem frustracji. BetaSuite został zbudowany właśnie po to, by zamknąć te luki.",
    problemLabel: "Problem",
    answerLabel: "Odpowiedź BetaSuite",

    pain1Problem: "Nie możesz przechwycić ekranu i kamery jednocześnie.",
    pain1Problem2: "Wideo pokazujące „dotykam tutaj, a urządzenie robi to” zwykle wymaga dwóch telefonów i statywu.",
    pain1Answer: "Podwójne nagrywanie składa oba strumienie w jeden plik MP4 na urządzeniu, które naprawdę jest testowane. Bez statywu. Bez drugiego telefonu.",

    pain2Problem: "Sporadyczne bugi znikają, zanim naciśniesz nagrywanie.",
    pain2Problem2: "Zanim uruchomisz przechwytywanie, usterki już nie ma — a reprodukcja staje się zgadywanką.",
    pain2Answer: "Instant Capture utrzymuje w tle kroczący bufor 15 lub 30 sekund. Jedno dotknięcie zapisuje moment, który przed chwilą minął. Bez konfiguracji, bez utraconych dowodów.",

    pain3Problem: "Praca pod NDA czyni SI w chmurze niemożliwą.",
    pain3Problem2: "Każdy dostawca chmury to ryzyko wycieku, więc raporty kończą jako pisane ręcznie i powolne.",
    pain3Answer: "Tryb poufny blokuje wysyłki do chmury, udostępnianie systemowe i każdego dostawcę SI w chmurze — podczas gdy Apple Intelligence dalej działa w pełni na urządzeniu, zero wywołań sieciowych. Dopracowanie SI i streszczenia działają nawet na poufnym sprzęcie.",

    pain4Problem: "SDK dostawców wysyłają Twoje dane do chmury dostawcy.",
    pain4Problem2: "Główne narzędzia beta-testów wysyłają dane testera do backendu dostawcy — w porządku dla firmy, nie dla wrażliwych prototypów.",
    pain4Answer: "BetaSuite nie ma własnego serwera. Wszystko jest szyfrowane na Twoim urządzeniu, a dane przemieszczają się tylko, gdy wybierzesz cel — Twój własny iCloud Drive, Google Drive, OneDrive, Rolkę aparatu lub przenośne, zaszyfrowane archiwum.",

    pain5Problem: "Tygodniowy raport to najwolniejsza część pracy.",
    pain5Problem2: "Paraliż białej kartki, zwłaszcza gdy żonglujesz wieloma programami.",
    pain5Answer: "Podsumowanie okresu generuje ustrukturyzowany raport — temat, plusy, problemy, rekomendacje — wprost ze znaczników i opinii, które już zarejestrowałeś. PDF lub DOCX, łatwo skanowalne punkty, gotowe do wysłania mailem.",

    pain6Problem: "Narzędzia beta-testów są często tylko po angielsku.",
    pain6Problem2: "Wsparcie wielojęzyczne, jeśli istnieje, często wychodzi nieaktualne i źle się starzeje.",
    pain6Answer: "Dostępne teraz w 21 językach — BetaSuite na żywo podąża za językiem urządzenia, więc testerzy w Tokio, Berlinie czy São Paulo widzą aplikację każdy w swoim języku.",

    whyClosingTagline: "Konkurenci mierzą produkt. BetaSuite mierzy testera.",

    /* Support page */
    supportTitle: "Wsparcie",
    supportLede: "Czytamy każdą wiadomość i celujemy w odpowiedź w ciągu 2 dni roboczych.",
    contactTitle: "Skontaktuj się",
    nameLabel: "Twoje imię",
    emailLabel: "Twój adres e-mail",
    categoryLabel: "Kategoria",
    messageLabel: "Wiadomość",
    sendMessage: "Wyślij wiadomość",
    faqTitle: "Najczęściej zadawane pytania"
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

/* ---------- Locale normalisation ---------- */
function _normaliseLang(lang) {
  if (!lang) return "en";
  const lc = String(lang).toLowerCase();
  // Norwegian umbrella → Bokmål
  if (lc === "no" || lc.startsWith("no-") || lc === "nn" || lc.startsWith("nn-")) return "nb";
  // Direct match against supported keys
  if (Object.prototype.hasOwnProperty.call(translations, lc)) return lc;
  // Region-prefix match (e.g. "en-GB" → "en", "zh-CN" → "zh")
  for (const code of Object.keys(translations)) {
    if (lc.startsWith(code + "-")) return code;
  }
  return "en";
}

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
  const normalised = _normaliseLang(lang);
  translateDocument(normalised);
  _safeSetLocal("language", normalised);
  return normalised;
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

/* ---------- URL locale helpers ---------- */
// Pages that have pre-rendered locale variants under /{locale}/.
const _LOCALIZED_PAGES = new Set(["", "index.html", "why.html", "support.html"]);

function _getUrlLocale() {
  const m = (typeof window !== "undefined" ? window.location.pathname : "").match(/^\/([a-zA-Z]{2})(\/|$)/);
  if (m && Object.prototype.hasOwnProperty.call(translations, m[1].toLowerCase())) {
    return m[1].toLowerCase();
  }
  return null;
}

function _stripLocalePrefix(pathname) {
  return pathname.replace(/^\/([a-zA-Z]{2})(\/|$)/, (full, code, sep) => {
    return Object.prototype.hasOwnProperty.call(translations, code.toLowerCase()) ? sep : full;
  });
}

function _getPageSlug(pathname) {
  const stripped = _stripLocalePrefix(pathname);
  const trimmed = stripped.replace(/^\//, "");
  return trimmed === "" ? "" : trimmed;
}

function _localizedHref(lang) {
  if (typeof window === "undefined") return null;
  const slug = _getPageSlug(window.location.pathname);
  if (!_LOCALIZED_PAGES.has(slug)) return null;
  const tail = slug + window.location.search + window.location.hash;
  return lang === "en" ? "/" + tail : "/" + lang + "/" + tail;
}

/* ---------- Initialization ---------- */
function initI18n(options = {}) {
  const urlLocale = _getUrlLocale();
  const saved = (() => {
    try { return localStorage.getItem("language"); } catch (e) { return null; }
  })();
  const browserLang = (navigator.languages && navigator.languages[0]) || navigator.language || "en";
  const detected = _normaliseLang(browserLang);

  // Priority: URL-derived locale > saved preference > browser detect.
  const lang = urlLocale || (saved ? _normaliseLang(saved) : detected);

  const picker = document.getElementById("language-picker");
  if (picker) {
    picker.value = lang;
    picker.addEventListener("change", (e) => {
      const next = _normaliseLang(e.target.value);
      _safeSetLocal("language", next);
      const target = _localizedHref(next);
      if (target && target !== window.location.pathname + window.location.search + window.location.hash) {
        window.location.assign(target);
      } else {
        setLanguage(next);
      }
    });
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
