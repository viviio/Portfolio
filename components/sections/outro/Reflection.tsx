import Reveal from "@/components/ui/Reveal";
import { reflection } from "@/content/site";

// ──────────────────────────────────────────────
// Reflection — 反思收尾：人们从来不是用文字做梦的
// ──────────────────────────────────────────────
export default function Reflection() {
  return (
    <section className="relative z-10 flex min-h-[90svh] items-center py-32">
      {/* 收尾暖光 */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-[50vh] w-[80vw] -translate-x-1/2 opacity-30 blur-[130px]"
        style={{ background: "radial-gradient(circle, var(--accent), transparent 70%)" }}
      />
      <div className="container-edge">
        <Reveal>
          <p className="eyebrow mb-12">{reflection.eyebrow}</p>
        </Reveal>
        <div className="flex max-w-3xl flex-col gap-6">
          {reflection.lines.map((line, i) => (
            <Reveal key={line} delay={i * 0.12}>
              <p className="text-xl leading-relaxed text-ink-soft md:text-2xl">
                {line}
              </p>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.5}>
          <p className="mt-16 font-display text-[clamp(2rem,6vw,4.5rem)] font-bold leading-tight tracking-tight text-ink">
            因为人们，
            <br className="md:hidden" />
            从来不是
            <span className="text-accent">用文字做梦</span>的。
          </p>
        </Reveal>
      </div>
    </section>
  );
}
