import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { prototype } from "@/content/site";

// ──────────────────────────────────────────────
// Prototype — 原型迭代 V1–V4 阶梯
// ──────────────────────────────────────────────
export default function Prototype() {
  return (
    <Section id="outro" eyebrow={prototype.eyebrow}>
      <Reveal>
        <h2 className="font-display text-3xl font-semibold leading-snug md:text-[2.6rem]">
          {prototype.title}
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-4">
        {prototype.items.map((item, i) => (
          <Reveal key={item.v} delay={i * 0.08}>
            <article className="flex h-full flex-col gap-4 bg-bg p-7 md:p-8">
              <span className="font-code text-3xl font-bold text-accent">
                {item.v}
              </span>
              <h3 className="font-display text-xl font-semibold text-ink">
                {item.title}
              </h3>
              <div className="mt-auto pt-4">
                <p className="eyebrow mb-1">目标</p>
                <p className="text-sm text-ink-soft">{item.goal}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
