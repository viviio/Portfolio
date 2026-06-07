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
  titleLines: ["画面编排，", "是AI创作的线索:）"],
  en: " ",
  sub: " ",
  lead: "AI时代创作流：迸发灵感，落笔文本，定格画面，转动态视频。然而，我们仍然在小输入框里跟提示词较劲。我开始思考一种对视频创作者更友好的交互探索。这是一次对创作流程的迭代尝试。",
  scrollHint: "查看正文",
};

// ── 背景 ──
export const background = {
  eyebrow: "Background · 背景",
  title: "传统创作流程里“校验”",
  body: "随着大模型能力快速提升，AI 已经能够自动生成剧本、角色、分镜和视频。然而，受限于模型成本/LLM沟通GAP，我们不得不花时间在每个步骤古法手作，参与校对和矫正（尤其生视频前）。",
  legacyFlow: ["灵感", "写剧本", "画分镜", "制作视频"],
  flowNote: "用户必须先把脑海中的想法转译成文字，再用文字驱动 AI 生成内容。我创作时，也总是苦与理解文本，想象抽象的画面。",

};

// ── 被忽视的矛盾 ──
export const tension = {
  eyebrow: "The Overlooked Conflict · 被忽视的矛盾",
  title: "我们对文字天然陌生，依赖个体的想象力",
  perceptions: ["画面", "镜头", "氛围", "情绪", "节奏"],
  negate: "先阅读左边的文字，你对脑海里有对应的画面了吗？",
  examples: [
    {
      ratio: "16 / 9",
      caption: "廊下全景。竹椅、旧茶壶。远处雾中有窑烟。老林佝偻的身影坐在椅上。",
      src: "/images/tension/storyboard-1.png",
    },
    {
      ratio: "16 / 9",
      caption: "老林的手。停了。手指微微发颤。",
      src: "/images/tension/storyboard-2.png",
    },
    {
      ratio: "16 / 9",
      caption: "纸的边角。一行清秀的字：你答应过我，要烧出最轻的那一只。 落款——阿秀。",
      src: "/images/tension/storyboard-0.png",
    },
  ],
  closer: [" "],
};

// ── 问题定义：认知翻译成本 ──
export const problem = {
  eyebrow: "Problem · 问题定义",
  title: "AI与人的沟通过程充满信息损失。",
  lossFlow: ["脑内画面", "转换成文字", "AI 理解文字", "重新生成画面"],
  lossNote: "于我而言，如果没有画面做锚点，故事想象就会像无根的浮萍，难以落地。",
  termZh: "认知翻译成本",
  termEn: "Cognitive Translation Cost",
  termDesc: "想法在「画面 → 文字 → 画面」的反复转译中被不断稀释。",
};

// ── 核心洞察 ──
export const insight = {
  eyebrow: "Core Insight · 核心洞察",
  quote: ["用户真正想编辑的不是剧本，", "而是脑中的电影画面。"],
  body: "在故事创作过程中，剧本只是媒介；故事画面才是创作者真正关心的对象。",
};

// ── Thesis ──
export const thesis = {
  eyebrow: "Thesis · 主张",
  titleZh: {
    before: "如果AI剧创能像读 ",
    strike: "漫画书",
    after: " 一样呢？",
  },
  titleEn: "Story Before Script",
  body: "自动生成连贯画面，图并茂地串联故事，直接进入画面编辑。",
  newFlow: { label: "重新定义", steps: ["灵感", "分镜宫格", "节奏编排", "视频生成"] },
  oldFlow: { label: "传统流程", steps: ["灵感", "剧本", "故事板", "视频"] },
};

// ── 设计原则 ──
export const principles = {
  eyebrow: "Design Principles · 设计原则",
  title: "设计原则",
  items: [
    {
      no: "01",
      en: "Visual First",
      zh: "画面感",
      desc: "优先用低成本传达画面+文字。用户可以直接从想象中的场景开始创作",
    },
    {
      no: "02",
      en: "Direct Manipulation",
      zh: "直接操作",
      desc: "以分镜为操作锚点，减少 Prompt 依赖",
    },
    {
      no: "03",
      en: "Coherence",
      zh: "连贯性",
      desc: "考虑构建故事结构的起承转合",
    },
  ],
};

// ── 方案：AI Storyboard First ──
export const storyboard = {
  eyebrow: "Solution · Demo1",
  kicker: "AI Storyboard First",
  title: { before: "AI直出线稿组，营造", highlight: " 画面感" },
  inputLabel: "用户输入一个简单想法，AI像导演一样生成图文并茂的故事板",
  inputText: "输入想法，输出图文并茂的故事板",
  cards: [
    { no: "01", beat: "相遇" },
    { no: "02", beat: "怀疑" },
    { no: "03", beat: "对话" },
    { no: "04", beat: "冲突" },
    { no: "05", beat: "真相" },
    { no: "06", beat: "告别" },
  ],
  closer: "用户获得一个可视化的故事结构，如导演桌上的分镜卡片。",
  demoImage: {
    src: "/images/solution/test1.jpg",
    alt: "故事板界面：剧本解析为分镜宫格图，同步生成视频预览",
    width: 1024,
    height: 663,
  },
};

// ── 创新交互：故事节奏编辑器 ──
export const rhythm = {
  eyebrow: "Interaction · Demo2",
  kicker: "Direct Manipulation",
  title: { before: "原子分镜，", highlight: "直接操作", after: "故事节奏" },
  benefits: [
    "拖动镜头卡片即可重排叙事顺序，无需改写 Prompt",
    "节奏变化自动联动时长、密度与转场",

  ],
  closer: "所见即所得，改的是故事节奏本身",
  demoImage: {
    src: "/images/solution/test2.jpg",
    alt: "节奏编辑界面：拖拽分镜直接调整故事结构",
    width: 3200,
    height: 2074,
  },
};

// ── 连贯性 ──
export const coherence = {
  eyebrow: "Coherence · Demo3",
  kicker: "Coherence",
  title: { before: "组合输入", highlight: " 串联故事", after: "" },
  benefits: [
    "宫格图一次性输入，AI 工作流保持镜头间叙事连贯",
    "在完整故事流里编辑，减少跳切与断层",
  ],
  closer: "连贯镜头聚散有度，既保持叙事衔接，又给足控制感",
  demoImage: {
    src: "/images/solution/test3.jpg",
    alt: "连贯性编辑：四张分镜合并为一张输入，保持叙事衔接",
    width: 3200,
    height: 2074,
  },
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
  eyebrow: "Validation · 价值",
  title: "加速前序画面Prompt调试时间",
  lead: "基于自己做短片创意测试的实测感受——真正减掉的是脑内画面 ↔ 文字 ↔ 画面之间的反复翻译。",
  before: {
    label: "Before",
    steps: [
      "Prompt 多轮试错，才能把画面说清楚",
      "剧本改完，还要重新想象分镜",
      "分镜和最终视频经常对不上",
      "生视频前不得不逐格人工校对",
    ],
    time: "一个想法折腾一下午",
    timeNote: "大量时间花在来回对齐",
  },
  after: {
    label: "After",
    steps: [
      "先出分镜宫格，画面就是讨论语言",
      "拖拽改节奏，不必重写 Prompt",
      "连贯性校验前置，减少返工",
      "结构满意后，再进视频生成",
    ],
    time: "粗稿验证约 1 小时",
    timeNote: "视频生成仍是重工序",
  },
  note: "",
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
  eyebrow: "Reflection · 小小的思考",
  lines: [
    "AI 在激发创意上永远超乎意料。",
    "很多人都在思考下一步的创作方式是什么样子。",
    "以上只是我对脑海中画面表达的理解：如何更自然地定位想象起点。",
    "也许新的交互范式可能更接近导演的创作方式。",
  ],
  punch: "因为人们从来不是用文字做梦的。",
};

// ── 幕后花絮 ──
// 视频放入 public/videos/，src 以 /videos/ 开头（站内路径）
export const behindTheScenes = {
  eyebrow: "Behind the Scene · Vibe Coding ",
  title: "幕后花絮·VibeCoding打磨动效片段",
  note: "",
  videos: [
    { id: "01", label: "Demo 01", ratio: "16 / 9", src: "/videos/01.mp4" },
    { id: "02", label: "Demo 02", ratio: "9 / 16", src: "/videos/02.mp4" },
    { id: "03", label: "Demo 03", ratio: "4 / 3", src: "/videos/03.mp4" },
    { id: "04", label: "Demo 04", ratio: "1 / 1", src: "/videos/04.mp4" },
    { id: "05", label: "Demo 05", ratio: "16 / 9", src: "/videos/05.mp4" },
    { id: "06", label: "Demo 06", ratio: "16 / 9", src: "/videos/06.mp4" },
    { id: "07", label: "Demo 07", ratio: "16 / 9", src: "/videos/07.mp4" },
    { id: "08", label: "Demo 08", ratio: "16 / 9", src: "/videos/08.mp4" },

  ],
};

// ── Footer ──
export const footer = {
  signature: "妙创 · 项目分享 · 感谢观看",
  links: [
    
    { label: "返回顶部", href: "#top" },
  ],
  note: "Copyright © 2026 [wesliang]. All Rights Reserved.",
};
