// ──────────────────────────────────────────────
// FlowDiagram — 等宽流程图 (灵感 ↓ 剧本 ↓ ...)
// 复用于：传统流程 / 信息损耗 / Thesis 新旧对比
// ──────────────────────────────────────────────
type Tone = "default" | "accent" | "muted";

type FlowDiagramProps = {
  steps: readonly string[];
  tone?: Tone;
  label?: string;
  highlightLast?: boolean;
  className?: string;
};

const toneRing: Record<Tone, string> = {
  default: "border-line-strong text-ink",
  accent: "border-accent/60 text-ink",
  muted: "border-line text-ink-soft",
};

export default function FlowDiagram({
  steps,
  tone = "default",
  label,
  highlightLast = false,
  className = "",
}: FlowDiagramProps) {
  return (
    <div className={`flex flex-col items-stretch ${className}`}>
      {label && (
        <span
          className={`eyebrow mb-4 ${tone === "accent" ? "!text-accent" : ""}`}
        >
          {label}
        </span>
      )}
      <ol className="flex flex-col items-stretch gap-0">
        {steps.map((step, i) => {
          const isLast = i === steps.length - 1;
          const emphasize = highlightLast && isLast && tone === "accent";
          return (
            <li key={`${step}-${i}`} className="flex flex-col items-stretch">
              <div
                className={`flex items-center justify-center rounded-md border px-5 py-3.5 font-code text-sm tracking-wide transition-colors ${toneRing[tone]} ${
                  emphasize
                    ? "bg-accent text-bg !border-accent font-medium"
                    : tone === "accent"
                      ? "bg-accent-soft"
                      : "bg-bg-elev"
                }`}
              >
                {step}
              </div>
              {!isLast && (
                <div className="flex h-7 items-center justify-center">
                  <span
                    className={`font-code text-base leading-none ${
                      tone === "accent" ? "text-accent" : "text-ink-muted"
                    }`}
                    aria-hidden
                  >
                    ↓
                  </span>
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
