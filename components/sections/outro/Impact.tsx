import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { impact } from "@/content/site";

// ──────────────────────────────────────────────
// Impact — 项目影响：Writing → Directing Stories
// ──────────────────────────────────────────────
export default function Impact() {
  return (
    <Section eyebrow={impact.eyebrow} pad="loose">
      <Reveal>
        <p className="max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">
          {impact.body}
        </p>
      </Reveal>

      <div className="mt-16 flex flex-col items-start gap-6 md:flex-row md:items-center md:gap-12">
        <Reveal delay={0.1}>
          <div className="opacity-55">
            <p className="font-code text-xs tracking-widest text-ink-muted">
              {impact.from.en}
            </p>
            <p className="font-display text-4xl font-semibold text-ink-soft md:text-6xl">
              {impact.from.zh}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <span className="font-code text-3xl text-accent md:text-4xl" aria-hidden>
            ⟶
          </span>
        </Reveal>

        <Reveal delay={0.3}>
          <div>
            <p className="font-code text-xs tracking-widest text-accent">
              {impact.to.en}
            </p>
            <p className="font-display text-4xl font-bold text-ink md:text-6xl">
              {impact.to.zh}
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
