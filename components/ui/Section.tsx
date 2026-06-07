import type { ReactNode } from "react";
import Reveal from "./Reveal";

// ──────────────────────────────────────────────
// Section — 章节统一外壳：垂直节奏 + 可选 eyebrow 标题
// ──────────────────────────────────────────────
type SectionProps = {
  id?: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
  /** 紧凑/宽松上下留白 */
  pad?: "normal" | "loose";
};

export default function Section({
  id,
  eyebrow,
  children,
  className = "",
  pad = "normal",
}: SectionProps) {
  const padY = pad === "loose" ? "py-32 md:py-48" : "py-24 md:py-36";
  return (
    <section
      id={id}
      className={`relative z-10 scroll-mt-20 ${padY} ${className}`}
    >
      <div className="container-edge">
        {eyebrow && (
          <Reveal>
            <p className="eyebrow mb-10 md:mb-14">{eyebrow}</p>
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}
