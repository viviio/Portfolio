import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Placeholder from "@/components/ui/Placeholder";
import { director } from "@/content/site";

// ──────────────────────────────────────────────
// DirectorMode — 导演模式：AI 生成，导演判断
// ──────────────────────────────────────────────
export default function DirectorMode() {
  return (
    <Section eyebrow={director.eyebrow}>
      <Reveal>
        <h2 className="font-display text-3xl font-bold leading-snug md:text-5xl">
          {director.title}
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-16">
        {/* Demo 占位 + 控制条覆盖示意 */}
        <Reveal delay={0.12}>
          <div className="relative">
            <Placeholder
              ratio={director.demoRatio}
              kind="video"
              label={director.demoLabel}
            />
          </div>
        </Reveal>

        {/* 控制项 */}
        <Reveal delay={0.2}>
          <div className="flex flex-col gap-3">
            <p className="eyebrow mb-2">每个分镜支持调整</p>
            {director.controls.map((c, i) => (
              <div
                key={c}
                className="flex items-center justify-between rounded-lg border border-line bg-bg-elev px-5 py-3.5"
              >
                <span className="flex items-center gap-3">
                  <span className="font-code text-xs text-accent">
                    0{i + 1}
                  </span>
                  <span className="font-display text-lg text-ink">{c}</span>
                </span>
                {/* 滑杆示意 */}
                <span className="relative hidden h-[2px] w-24 rounded bg-line-strong sm:block">
                  <span
                    className="absolute -top-[3px] h-2 w-2 rounded-full bg-accent"
                    style={{ left: `${30 + i * 13}%` }}
                  />
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <p className="mt-20 font-display text-3xl leading-relaxed md:text-5xl">
          <span className="text-ink-muted">{director.closer[0]}</span>{" "}
          <span className="text-ink">{director.closer[1]}</span>
        </p>
      </Reveal>
    </Section>
  );
}
