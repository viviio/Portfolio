// ══════════════════════════════════════════════════════════════
// site.ts — 全站文案与结构数据的单一真相源 (Single Source of Truth)
// 改文案只动这里，组件只负责呈现。
// ══════════════════════════════════════════════════════════════

// ── 顶部章节导航：四幕结构 ──
export const navItems = [
  { id: "intro", label: "背景", index: "01" },
  { id: "insight", label: "洞察", index: "02" },
  { id: "solution", label: "方案", index: "03" },
  { id: "outro", label: "收束", index: "04" },
] as const;

// ── Hero ──
export const hero = {
  eyebrow: "妙创 · 设计论述 / 2026",
  titleLines: ["故事，", "不该从剧本开始"],
  en: "Story Before Script",
  sub: "Reimagining Story Creation in the Age of AI",
  lead: "AI 已经会写剧本了，可我们仍被迫先写剧本。这是一次对创作流程的重新定义。",
  scrollHint: "向下滚动",
};

// ── 背景 ──
export const background = {
  eyebrow: "Background · 背景",
  title: "AI 已经能生成一切，流程却原地踏步",
  body: "随着大模型能力快速提升，AI 已经能够自动生成剧本、角色、分镜和视频。然而，大部分 AI 创作工具仍然沿用传统影视创作流程。",
  legacyFlow: ["灵感", "写剧本", "画分镜", "制作视频"],
  flowNote: "用户必须先把脑海中的想法转译成文字，再用文字驱动 AI 生成内容。",
  punch: "人们并不是用文字思考故事的。",
};

// ── 被忽视的矛盾 ──
export const tension = {
  eyebrow: "The Overlooked Conflict · 被忽视的矛盾",
  title: "灵感出现时，先到来的从来不是文字",
  perceptions: ["画面", "镜头", "氛围", "情绪", "节奏"],
  negate: "而不是一份完整的剧本。",
  examples: [
    { ratio: "21 / 9", caption: "一个女孩站在雨夜的路灯下" },
    { ratio: "21 / 9", caption: "一个老人打开尘封二十年的信件" },
    { ratio: "21 / 9", caption: "一个少年第一次看到未来的自己" },
  ],
  closer: ["这些都是画面。", "不是文字。"],
};

// ── 问题定义：认知翻译成本 ──
export const problem = {
  eyebrow: "Problem · 问题定义",
  title: "AI 已经会写剧本，用户却仍被迫先写剧本",
  lossFlow: ["脑内画面", "转换成文字", "AI 理解文字", "重新生成画面"],
  lossNote: "整个过程充满信息损失。",
  termZh: "认知翻译成本",
  termEn: "Cognitive Translation Cost",
  termDesc: "想法在「画面 → 文字 → 画面」的反复转译中被不断稀释。",
};

// ── 核心洞察 ──
export const insight = {
  eyebrow: "Core Insight · 核心洞察",
  quote: ["用户真正想编辑的不是剧本，", "而是脑中的电影。"],
  body: "在故事创作过程中，剧本只是媒介；故事画面才是创作者真正关心的对象。",
};

// ── Thesis ──
export const thesis = {
  eyebrow: "Thesis · 主张",
  titleZh: "故事，应该先于剧本",
  titleEn: "Story Before Script",
  body: "AI 时代的创作流程应该被重新定义。",
  newFlow: { label: "重新定义", steps: ["灵感", "故事板", "剧情生成", "视频生成"] },
  oldFlow: { label: "传统流程", steps: ["灵感", "剧本", "故事板", "视频"] },
};

// ── 设计原则 ──
export const principles = {
  eyebrow: "Design Principles · 设计原则",
  title: "三条贯穿始终的原则",
  items: [
    {
      no: "01",
      en: "Visual First",
      zh: "画面优先",
      desc: "优先表达画面，而不是文字。用户可以直接从想象中的场景开始创作。",
    },
    {
      no: "02",
      en: "Story Before Script",
      zh: "故事先于剧本",
      desc: "先构建故事结构，后生成具体对白。",
    },
    {
      no: "03",
      en: "Direct Manipulation",
      zh: "直接操作",
      desc: "直接操作故事本身，而不是操作 Prompt。",
    },
  ],
};

// ── 方案：AI Storyboard First ──
export const storyboard = {
  eyebrow: "Solution · 方案设计",
  kicker: "AI Storyboard First",
  title: "不再先生成剧本，而是直接生成故事板",
  inputLabel: "用户输入一个简单想法",
  inputText: "一个女孩发现未来的自己",
  cards: [
    { no: "01", beat: "相遇" },
    { no: "02", beat: "怀疑" },
    { no: "03", beat: "对话" },
    { no: "04", beat: "冲突" },
    { no: "05", beat: "真相" },
    { no: "06", beat: "告别" },
  ],
  closer: "用户获得一个可视化的故事结构，如同导演桌上的分镜卡片。",
};

// ── 创新交互：故事节奏编辑器 ──
export const rhythm = {
  eyebrow: "Interaction · 创新交互",
  kicker: "Story Rhythm Editing",
  title: "直接编辑故事的节奏，而不是文字",
  oldWay: ["编辑文字", "修改剧情", "重新生成"],
  before: ["平静", "平静", "冲突", "高潮", "结局"],
  after: ["平静", "冲突", "冲突", "高潮", "高潮", "结局"],
  autoAdjust: ["镜头长度", "剧情密度", "对白节奏", "转场逻辑"],
  closer: "用户操作的是故事节奏，而不是 Prompt。",
  demoRatio: "16 / 9",
  demoLabel: "节奏拖拽交互 Demo",
};

// ── 导演模式 ──
export const director = {
  eyebrow: "Director Mode · 导演模式",
  title: "AI 负责生成，导演负责判断",
  controls: ["镜头距离", "构图", "情绪", "运镜", "时长"],
  closer: ["AI 负责执行。", "创作者负责表达。"],
  demoRatio: "16 / 9",
  demoLabel: "单分镜导演控制面板 Demo",
};

// ── Prototype V1–V4 ──
export const prototype = {
  eyebrow: "Prototype · 原型迭代",
  title: "从验证灵感到生产闭环",
  items: [
    { v: "V1", title: "AI 生成故事板", goal: "快速验证灵感" },
    { v: "V2", title: "故事节奏编辑器", goal: "控制叙事结构" },
    { v: "V3", title: "导演控制面板", goal: "控制镜头语言" },
    { v: "V4", title: "自动生成漫剧", goal: "完成生产闭环" },
  ],
};

// ── 价值验证 ──
export const value = {
  eyebrow: "Validation · 价值验证",
  title: "从两小时到十分钟",
  before: {
    label: "Before · 传统 AI 创作",
    steps: ["编写 Prompt", "编写剧本", "修改剧本", "绘制分镜"],
    time: "约 2 小时",
  },
  after: {
    label: "After · Storyboard First",
    steps: ["输入灵感", "调整故事板", "一键生成"],
    time: "约 10 分钟",
  },
};

// ── 项目影响 ──
export const impact = {
  eyebrow: "Impact · 项目影响",
  body: "这不仅是一个 AI 漫剧平台，更是一种新的故事创作范式。它让用户从——",
  from: { en: "Writing Stories", zh: "书写故事" },
  to: { en: "Directing Stories", zh: "执导故事" },
};

// ── Reflection ──
export const reflection = {
  eyebrow: "Reflection · 反思",
  lines: [
    "AI 已经能够生成故事。",
    "下一步的问题不再是：如何写出更好的 Prompt。",
    "而是：如何更自然地表达脑中的电影。",
  ],
  punch: "因为人们，从来不是用文字做梦的。",
};

// ── Footer ──
export const footer = {
  signature: "妙创 · Story Before Script",
  links: [
    { label: "原文参考", href: "https://diana.lu/point-n-talk" },
    { label: "返回顶部", href: "#top" },
  ],
  note: "图片与视频为占位素材，待替换。",
};
