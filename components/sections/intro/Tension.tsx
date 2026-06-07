import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Placeholder from "@/components/ui/Placeholder";
import { tension } from "@/content/site";

// ──────────────────────────────────────────────
// Tension — 被忽视的矛盾：先到来的从来不是文字
// ──────────────────────────────────────────────
export default function Tension() {
  return (
    <Section eyebrow={tension.eyebrow} className="bg-bg-elev/30">
      <Reveal>
        <h2 className="max-w-3xl font-display text-3xl font-semibold leading-snug md:text-[2.6rem]">
          {tension.title}
        </h2>
      </Reveal>

      {/* 感知词条 */}
      <Reveal delay={0.1}>
        <ul className="mt-12 flex flex-wrap gap-3">
          {tension.perceptions.map((p) => (
            <li
              key={p}
              className="rounded-full border border-line-strong px-5 py-2 font-display text-lg text-ink"
            >
              {p}
            </li>
          ))}
        </ul>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="mt-6 text-base text-ink-muted">{tension.negate}</p>
      </Reveal>

      {/* 三个画面例子 */}
      <div className="mt-16 flex flex-col gap-6">
        {tension.examples.map((ex, i) => (
          <Reveal key={ex.caption} delay={i * 0.08}>
            <figure className="grid items-center gap-4 md:grid-cols-[1fr_2fr] md:gap-8">
              <figcaption className="order-2 font-display text-xl text-ink-soft md:order-1 md:text-2xl">
                <span className="mr-3 font-code text-sm text-accent">
                  0{i + 1}
                </span>
                {ex.caption}
              </figcaption>
              <div className="order-1 md:order-2">
                <Placeholder ratio={ex.ratio} label={ex.caption} />
              </div>
            </figure>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <p className="mt-20 font-display text-3xl leading-relaxed md:text-5xl">
          <span className="text-ink">{tension.closer[0]}</span>{" "}
          <span className="text-ink-muted">{tension.closer[1]}</span>
        </p>
      </Reveal>
    </Section>
  );
}
