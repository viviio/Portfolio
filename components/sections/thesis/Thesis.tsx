import { Grid2X2Check } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import FlowDiagram from "@/components/ui/FlowDiagram";
import { thesis } from "@/content/site";

// ──────────────────────────────────────────────
// Thesis — 主张：Story Before Script，新旧流程并排对比
// ──────────────────────────────────────────────
export default function Thesis() {
  const { before, strike, after } = thesis.titleZh;

  return (
    <Section eyebrow={thesis.eyebrow} pad="loose" className="bg-bg-elev/30">
      <Reveal delay={0.08}>
        <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-6xl">
          {before}
          <span className="inline-flex items-baseline gap-2 whitespace-nowrap">
            <Grid2X2Check
              className="inline-block h-[1em] w-[1em] shrink-0 translate-y-[0.12em] text-accent"
              strokeWidth={1.75}
              aria-hidden
            />
            <span className="text-accent">
              {strike}
            </span>
          </span>
          {after}
        </h2>
      </Reveal>
      <Reveal delay={0.16}>
        <p className="mt-8 max-w-lg text-base text-ink-soft md:text-lg">
          {thesis.body}
        </p>
      </Reveal>

      {/* 新旧流程并排 */}
      <div className="mt-20 grid items-start gap-10 md:grid-cols-[1fr_auto_1fr] md:gap-8">
        <Reveal delay={0.1}>
          <FlowDiagram
            steps={thesis.newFlow.steps}
            tone="accent"
            highlightLast
            label={`${thesis.newFlow.label} `}
          />
        </Reveal>

        <div className="hidden items-center justify-center self-center md:flex">
          <span className="font-code text-2xl text-ink-muted" aria-hidden>
            ⟶
          </span>
        </div>

        <Reveal delay={0.18}>
          <div className="opacity-55">
            <FlowDiagram
              steps={thesis.oldFlow.steps}
              tone="muted"
              label={`${thesis.oldFlow.label} `}
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
