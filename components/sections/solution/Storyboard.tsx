import Image from "next/image";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { storyboard } from "@/content/site";
import { MapPinPen } from "lucide-react";

// ──────────────────────────────────────────────
// Storyboard — 方案：AI Storyboard First
// ──────────────────────────────────────────────
export default function Storyboard() {
  const { demoImage } = storyboard;

  return (
    <Section id="solution" eyebrow={storyboard.eyebrow} pad="loose">
      <Reveal delay={0.08}>
        <h2 className="mt-4 flex max-w-3xl items-center gap-3 font-display text-3xl font-bold leading-snug md:text-5xl">
          <span>
            {storyboard.title.before}
            <span className="text-accent">{storyboard.title.highlight}</span>
          </span>
          <MapPinPen
            className="h-[0.85em] w-[0.85em] shrink-0 text-accent translate-y-[0.05em]"
            strokeWidth={1.75}
            aria-hidden
          />
        </h2>
      </Reveal>

      {/* 输入想法 */}
      <Reveal delay={0.16}>
        <div className="mt-14 max-w-xl">
          
          <div className="flex items-center gap-3 rounded-lg border border-line-strong bg-bg-elev px-5 py-4 font-code text-base text-ink">
            <span className="text-accent">{">"}</span>
            <span>{storyboard.inputText}</span>
            <span className="ml-1 inline-block h-4 w-[2px] animate-pulse bg-accent" />
          </div>

        </div>
      </Reveal>

      {/* 方案演示大图 */}
      <Reveal delay={0.12}>
        <div className="mt-12 w-full overflow-hidden rounded-lg border border-line">
          <Image
            src={demoImage.src}
            alt={demoImage.alt}
            width={demoImage.width}
            height={demoImage.height}
            className="h-auto w-full"
            sizes="100vw"
            priority={false}
          />
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="mt-16 max-w-2xl border-l-2 border-accent pl-6 font-display text-xl leading-relaxed text-ink-soft md:text-2xl">
          {storyboard.closer}
        </p>
      </Reveal>
    </Section>
  );
}
