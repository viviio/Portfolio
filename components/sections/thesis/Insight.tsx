import Reveal from "@/components/ui/Reveal";
import { insight } from "@/content/site";

// ──────────────────────────────────────────────
// Insight — 核心洞察：全屏大字
// ──────────────────────────────────────────────
export default function Insight() {
  return (
    <section
      id="insight"
      className="relative z-10 flex min-h-[90svh] scroll-mt-20 items-center"
    >
      <div className="container-edge">
        <Reveal>
          <p className="eyebrow mb-10">{insight.eyebrow}</p>
        </Reveal>
        <blockquote className="font-display text-[clamp(2rem,6vw,5rem)] font-bold leading-[1.12] tracking-tight">
          <Reveal>
            <span className="block text-ink">{insight.quote[0]}</span>
          </Reveal>
          <Reveal delay={0.12}>
            <span className="block text-accent">{insight.quote[1]}</span>
          </Reveal>
        </blockquote>
        <Reveal delay={0.24}>
          <p className="mt-12 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
            {insight.body}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
