# 妙创作品表达站 · Story Before Script

单页滚动叙事作品站，表达「故事应先于剧本」的 AI 创作范式设计论述。
参考 diana.lu/point-n-talk 的编辑式叙事表达：巨幅论点开场 + 章节导航 + 流程图 + 媒体占位 + 反思收尾。

## 技术骨架

- Next.js 16 (App Router, Turbopack) + TypeScript
- Tailwind CSS v4（设计令牌写在 `app/globals.css` 的 `@theme`）
- Framer Motion（滚动进入动效、阅读进度、Hero 入场）

## 设计语言

电影感暗色主题（母题：脑中的电影 / 导演桌上的分镜）。
单一暖色 `--accent` (#e0b15e 放映机暖光) 作唯一强调色，其余靠层次与留白。
两套字体：无衬线 `--font-sans`（正文与标题，Noto Sans SC）、等宽 `--font-mono`（流程图/标签）。

## 目录结构

```
app/
  layout.tsx        字体注入、metadata、暗色 root
  globals.css       设计令牌(颜色/字体)、基础排版、.font-display/.eyebrow/.container-edge 等工具类
  page.tsx          组装 SectionNav + 四幕全部章节 + Footer

content/
  site.ts           全站文案与结构数据的单一真相源；改文案只动这里

components/
  nav/SectionNav.tsx        顶部阅读进度条 + 右侧竖排锚点(IntersectionObserver 高亮)
  ui/                       与内容无关的可复用呈现单元
    Section.tsx             章节统一外壳(垂直节奏 + eyebrow 标题)
    Reveal.tsx              滚动进入上浮淡入(尊重 prefers-reduced-motion)
    Placeholder.tsx         空白图/视频占位(标比例与说明，待替换真素材)
    FlowDiagram.tsx         等宽流程图(灵感↓剧本↓...)，复用于传统流程/损耗/新旧对比
    StoryboardCards.tsx     分镜卡片网格(导演桌上的分镜)
    Footer.tsx              极简署名 + 链接
  sections/                 按四幕叙事分组，每个文件对应一个内容区块
    intro/                  Hero 背景 Tension(矛盾) Problem(认知翻译成本)
    thesis/                 Insight(核心洞察) Thesis(新旧流程对比) Principles(三原则)
    solution/               Storyboard RhythmEditing(节奏编辑) DirectorMode(导演模式)
    outro/                  Prototype(V1-V4) Value(价值验证) Impact(影响) Reflection(反思)
```

## 依赖与数据流

```
content/site.ts ──(数据)──> sections/* ──(组合 ui/*)──> app/page.tsx
                                  └──> ui/Reveal,Placeholder,FlowDiagram,StoryboardCards
app/layout.tsx ──(字体变量 + 全局令牌)──> 所有组件
nav/SectionNav ──(IntersectionObserver 观察 #intro/#insight/#solution/#outro)
```

## 约定

- 文案以中文为主，保留 `Story Before Script` 等标志性英文概念名作点缀。
- 所有图片/视频均为 `Placeholder` 占位，后续替换为真实素材（替换点见各 section 内的 `<Placeholder>`）。
- 章节锚点 id 与 `content/site.ts` 的 `navItems` 一一对应，新增/调整章节须同步两处。
- 新增可复用呈现单元放 `ui/`；新增内容区块放对应叙事幕 `sections/<act>/`，单层文件数控制在 8 以内。
