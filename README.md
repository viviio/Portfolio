# 妙创作品表达站 · Story Before Script

一个单页滚动叙事作品站，表达「故事应先于剧本」的 AI 时代故事创作范式设计论述。

灵感链：传统流程矛盾 → 认知翻译成本（Cognitive Translation Cost）→ 核心洞察 → Thesis: Story Before Script → 设计原则 → 方案与交互 → 原型 → 价值 → 反思。

## 技术栈

- Next.js 16（App Router, Turbopack）+ TypeScript
- Tailwind CSS v4
- Framer Motion（滚动动效）

## 本地开发

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # 生产构建
```

## 结构概览

- `content/site.ts` — 全站文案与结构数据的单一真相源，改文案只动这里
- `components/sections/<act>/` — 按四幕叙事（intro / thesis / solution / outro）分组的内容区块
- `components/ui/` — 可复用呈现单元（Section / Reveal / Placeholder / FlowDiagram / StoryboardCards / Footer）
- `components/nav/SectionNav.tsx` — 章节导航与阅读进度

架构细节见 [CLAUDE.md](./CLAUDE.md)。

## 待办

- 图片与视频目前为空白占位（`components/ui/Placeholder.tsx`），需替换为真实素材。
- 「故事节奏编辑」与「导演控制面板」目前为静态展示，可进一步做成可拖拽交互。
