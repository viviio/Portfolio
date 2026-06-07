import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { principles } from "@/content/site";

// ──────────────────────────────────────────────
// Principles — 设计原则三栏
// ──────────────────────────────────────────────
export default function Principles() {
  return (
    <Section eyebrow={principles.eyebrow}>
      <Reveal>
        <h2 className="font-display text-3xl font-semibold leading-snug md:text-[2.6rem]">
          {principles.title}
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-3">
        {principles.items.map((item, i) => (
          <Reveal key={item.no} delay={i * 0.1}>
            <article className="flex h-full flex-col gap-5 bg-bg p-8 md:p-10">
              <span className="font-code text-sm text-accent">{item.no}</span>
              <div>
                <h3 className="font-display text-2xl font-semibold text-ink">
                  {item.zh}
                </h3>
                <p className="mt-1 font-code text-xs tracking-widest text-ink-muted">
                  {item.en}
                </p>
              </div>
              <p className="text-sm leading-relaxed text-ink-soft">
                {item.desc}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
