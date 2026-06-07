// ──────────────────────────────────────────────
// Placeholder — 空白媒体占位 (图片/视频)
// 标注预期比例与说明，后续直接替换为真实素材
// ──────────────────────────────────────────────
type PlaceholderProps = {
  ratio?: string; // e.g. "16 / 9"
  label?: string;
  kind?: "image" | "video";
  className?: string;
};

export default function Placeholder({
  ratio = "16 / 9",
  label = "素材占位",
  kind = "image",
  className = "",
}: PlaceholderProps) {
  return (
    <div
      className={`group relative w-full overflow-hidden rounded-lg border border-line bg-bg-elev ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {/* 网格底纹，暗示尚未填充 */}
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      {/* 对角线，明确占位语义 */}
      <svg
        className="absolute inset-0 h-full w-full text-line"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
        aria-hidden
      >
        <line x1="0" y1="0" x2="100" y2="100" stroke="currentColor" strokeWidth="0.4" />
        <line x1="100" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="0.4" />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-4 text-center">
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line-strong text-ink-muted">
          {kind === "video" ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M8 5v14l11-7z" />
            </svg>
          ) : (
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
          )}
        </span>
        <span className="eyebrow !text-ink-muted">{label}</span>
        <span className="font-code text-[0.65rem] text-ink-muted/70">{ratio}</span>
      </div>
    </div>
  );
}
