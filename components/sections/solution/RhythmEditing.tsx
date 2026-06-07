import Image from "next/image";
import { GripVertical } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { rhythm } from "@/content/site";

// ──────────────────────────────────────────────
// RhythmEditing — 创新交互：直接操作故事节奏
// ──────────────────────────────────────────────
export default function RhythmEditing() {
  const { title, benefits, demoImage } = rhythm;

  return (
    <Section eyebrow={rhythm.eyebrow} className="bg-bg-elev/30">

      <Reveal delay={0.08}>
        <h2 className="mt-4 flex max-w-3xl items-center gap-3 font-display text-3xl font-bold leading-snug md:text-5xl">
          <span>
            {title.before}
            <span className="text-accent">{title.highlight}</span>
            {title.after}
          </span>
          <GripVertical
            className="h-[0.85em] w-[0.85em] shrink-0 translate-y-[0.05em] text-accent"
            strokeWidth={1.75}
            aria-hidden
          />
        </h2>
      </Reveal>

      <Reveal delay={0.14}>
        <ul className="mt-10 flex max-w-2xl flex-col gap-4">
          {benefits.map((item) => (
            <li key={item} className="flex items-start gap-3 text-ink-soft">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span className="font-display text-lg leading-relaxed md:text-xl">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={0.12}>
        <div className="mt-12 w-full overflow-hidden rounded-lg border border-line">
          <Image
            src={demoImage.src}
            alt={demoImage.alt}
            width={demoImage.width}
            height={demoImage.height}
            className="h-auto w-full"
            sizes="100vw"
          />
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="mt-16 max-w-2xl border-l-2 border-accent pl-6 font-display text-xl leading-relaxed text-ink-soft md:text-2xl">
          {rhythm.closer}
        </p>
      </Reveal>
    </Section>
  );
}
