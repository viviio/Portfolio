"use client";

import { motion, useReducedMotion } from "framer-motion";
import { hero } from "@/content/site";

// ──────────────────────────────────────────────
// Hero — 巨幅论点开场
// ──────────────────────────────────────────────
export default function Hero() {
  const reduce = useReducedMotion();

  const up = (delay: number) => ({
    initial: reduce ? { opacity: 0 } : { opacity: 0, y: 32 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <header
      id="top"
      className="relative z-10 flex min-h-[100svh] flex-col justify-center"
    >
      {/* 背景暖光晕 */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[60vh] w-[60vh] -translate-x-1/2 rounded-full opacity-40 blur-[120px]"
        style={{ background: "radial-gradient(circle, var(--accent), transparent 70%)" }}
      />

      <div className="container-edge">
        <motion.p {...up(0)} className="eyebrow mb-8">
          {hero.eyebrow}
        </motion.p>

        <h1 className="font-display text-[clamp(2.75rem,9vw,7.5rem)] font-bold leading-[1.02] tracking-tight">
          {hero.titleLines.map((line, i) => (
            <motion.span key={line} {...up(0.12 + i * 0.12)} className="block">
              {line}
            </motion.span>
          ))}
        </h1>

        <motion.div
          {...up(0.45)}
          className="mt-8 flex flex-col gap-1 font-code text-sm text-accent md:text-base"
        >
          <span className="tracking-[0.2em]">{hero.en}</span>
          <span className="text-ink-muted">{hero.sub}</span>
        </motion.div>

        <motion.p
          {...up(0.6)}
          className="mt-10 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg"
        >
          {hero.lead}
        </motion.p>
      </div>

      {/* 滚动提示 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 1 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="eyebrow">{hero.scrollHint}</span>
        <motion.span
          className="text-accent"
          animate={reduce ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden
        >
          ↓
        </motion.span>
      </motion.div>
    </header>
  );
}
