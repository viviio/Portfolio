import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import FlowDiagram from "@/components/ui/FlowDiagram";
import { problem } from "@/content/site";

// ──────────────────────────────────────────────
// Problem — 问题定义：认知翻译成本
// ──────────────────────────────────────────────
export default function Problem() {
  return (
    <Section eyebrow={problem.eyebrow}>
      <div className="grid gap-12 md:grid-cols-[1fr_1fr] md:gap-20">
        <div>
          <Reveal>
            <h2 className="font-display text-3xl font-semibold leading-snug md:text-[2.6rem]">
              {problem.title}
            </h2>
          </Reveal>

          <Reveal delay={0.15} className="mt-12">
            <FlowDiagram
              steps={problem.lossFlow}
              tone="default"
              label="信息损耗路径"
            />
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 font-code text-sm text-ink-muted">
              {problem.lossNote}
            </p>
          </Reveal>
        </div>

        {/* 术语卡 */}
        <Reveal delay={0.2} className="flex items-center">
          <div className="w-full rounded-xl border border-accent/30 bg-accent-soft p-8 md:p-10">
            <p className="font-code text-xs tracking-[0.25em] text-accent">
              {problem.termEn}
            </p>
            <p className="mt-4 font-display text-4xl font-bold text-ink md:text-5xl">
              {problem.termZh}
            </p>
            <p className="mt-6 text-base leading-relaxed text-ink-soft">
              {problem.termDesc}
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
