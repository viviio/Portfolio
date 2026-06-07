import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Placeholder from "@/components/ui/Placeholder";
import { rhythm } from "@/content/site";

// 节拍 → 强度高度，用条形可视化故事节奏曲线
const intensity: Record<string, number> = {
  平静: 28,
  冲突: 66,
  高潮: 100,
  结局: 46,
};

function RhythmStrip({
  beats,
  label,
  dim = false,
}: {
  beats: readonly string[];
  label: string;
  dim?: boolean;
}) {
  return (
    <div className={dim ? "opacity-60" : ""}>
      <p className="eyebrow mb-4">{label}</p>
      <div className="flex items-end gap-2">
        {beats.map((beat, i) => {
          const h = intensity[beat] ?? 40;
          const hot = h >= 66;
          return (
            <div key={`${beat}-${i}`} className="flex flex-1 flex-col items-center gap-2">
              {/* 定高轨道，百分比高度才有参照 */}
              <div className="flex h-40 w-full items-end">
                <div
                  className={`w-full rounded-t-sm ${hot ? "bg-accent" : "bg-line-strong"}`}
                  style={{ height: `${h}%` }}
                />
              </div>
              <span className="font-code text-[0.65rem] text-ink-muted">{beat}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────
// RhythmEditing — 创新交互：故事节奏编辑器
// ──────────────────────────────────────────────
export default function RhythmEditing() {
  return (
    <Section eyebrow={rhythm.eyebrow} className="bg-bg-elev/30">
      <Reveal>
        <p className="font-code text-sm tracking-[0.25em] text-accent">
          {rhythm.kicker}
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold leading-snug md:text-5xl">
          {rhythm.title}
        </h2>
      </Reveal>

      {/* 传统方式 */}
      <Reveal delay={0.16}>
        <div className="mt-12 flex flex-wrap items-center gap-3">
          <span className="eyebrow">传统工具</span>
          {rhythm.oldWay.map((w, i) => (
            <span key={w} className="flex items-center gap-3">
              {i > 0 && <span className="text-ink-muted">→</span>}
              <span className="font-code text-sm text-ink-soft">{w}</span>
            </span>
          ))}
        </div>
      </Reveal>

      {/* 节奏对比 */}
      <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-16">
        <Reveal delay={0.1}>
          <RhythmStrip beats={rhythm.before} label="拖拽前" dim />
        </Reveal>
        <Reveal delay={0.2}>
          <RhythmStrip beats={rhythm.after} label="拖拽后 · 重塑节奏" />
        </Reveal>
      </div>

      {/* 自动调整 + Demo 占位 */}
      <div className="mt-16 grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
        <Reveal delay={0.1}>
          <div>
            <p className="text-base text-ink-soft">系统自动调整：</p>
            <ul className="mt-5 flex flex-col gap-3">
              {rhythm.autoAdjust.map((a) => (
                <li key={a} className="flex items-center gap-3 text-ink">
                  <span className="h-1 w-1 rounded-full bg-accent" />
                  <span className="font-display text-lg">{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.18}>
          <Placeholder
            ratio={rhythm.demoRatio}
            kind="video"
            label={rhythm.demoLabel}
          />
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <p className="mt-16 font-display text-2xl leading-relaxed text-ink md:text-3xl">
          用户操作的是<span className="text-accent">故事节奏</span>，而不是 Prompt。
        </p>
      </Reveal>
    </Section>
  );
}
