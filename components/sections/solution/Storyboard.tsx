import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import StoryboardCards from "@/components/ui/StoryboardCards";
import { storyboard } from "@/content/site";

// ──────────────────────────────────────────────
// Storyboard — 方案：AI Storyboard First
// ──────────────────────────────────────────────
export default function Storyboard() {
  return (
    <Section id="solution" eyebrow={storyboard.eyebrow} pad="loose">
      <Reveal>
        <p className="font-code text-sm tracking-[0.25em] text-accent">
          {storyboard.kicker}
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold leading-snug md:text-5xl">
          {storyboard.title}
        </h2>
      </Reveal>

      {/* 输入想法 */}
      <Reveal delay={0.16}>
        <div className="mt-14 max-w-xl">
          <p className="eyebrow mb-3">{storyboard.inputLabel}</p>
          <div className="flex items-center gap-3 rounded-lg border border-line-strong bg-bg-elev px-5 py-4 font-code text-base text-ink">
            <span className="text-accent">{">"}</span>
            <span>{storyboard.inputText}</span>
            <span className="ml-1 inline-block h-4 w-[2px] animate-pulse bg-accent" />
          </div>
          <p className="mt-3 font-code text-xs text-ink-muted">
            系统不再先生成剧本，而是直接生成 ↓
          </p>
        </div>
      </Reveal>

      {/* 分镜卡片 */}
      <div className="mt-12">
        <StoryboardCards cards={storyboard.cards} />
      </div>

      <Reveal delay={0.1}>
        <p className="mt-16 max-w-2xl border-l-2 border-accent pl-6 font-display text-xl leading-relaxed text-ink-soft md:text-2xl">
          {storyboard.closer}
        </p>
      </Reveal>
    </Section>
  );
}
