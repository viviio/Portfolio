import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import FlowDiagram from "@/components/ui/FlowDiagram";
import { background } from "@/content/site";

// ──────────────────────────────────────────────
// Background — 背景：AI 已能生成一切，流程却原地踏步
// ──────────────────────────────────────────────
export default function Background() {
  return (
    <Section id="intro" eyebrow={background.eyebrow}>
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
        <div>
          <Reveal>
            <h2 className="font-display text-3xl font-semibold leading-snug md:text-[2.6rem]">
              {background.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-ink-soft md:text-lg">
              {background.body}
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-ink-muted">
              {background.flowNote}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="md:pl-8">
          <FlowDiagram
            steps={background.legacyFlow}
            tone="muted"
            label="传统影视创作流程"
          />
        </Reveal>
      </div>

     
    </Section>
  );
}
