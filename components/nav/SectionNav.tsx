"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { navItems } from "@/content/site";

// ──────────────────────────────────────────────
// SectionNav — 章节导航
// 顶部阅读进度条 + 右侧竖排锚点(滚动高亮)
// ──────────────────────────────────────────────
export default function SectionNav() {
  const [active, setActive] = useState<string>(navItems[0].id);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  useEffect(() => {
    const sections = navItems
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* 顶部阅读进度 */}
      <motion.div
        className="fixed inset-x-0 top-0 z-50 h-[2px] origin-left bg-accent"
        style={{ scaleX: progress }}
      />

      {/* 右侧竖排锚点 (桌面) */}
      <nav className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-5 md:flex">
        {navItems.map((item) => {
          const on = active === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="group flex items-center justify-end gap-3"
              aria-current={on ? "true" : undefined}
            >
              <span
                className={`font-code text-[0.7rem] tracking-widest transition-all duration-300 ${
                  on
                    ? "text-ink opacity-100"
                    : "text-ink-muted opacity-0 group-hover:opacity-100"
                }`}
              >
                {item.index} {item.label}
              </span>
              <span
                className={`h-[1px] transition-all duration-300 ${
                  on ? "w-8 bg-accent" : "w-4 bg-line-strong group-hover:w-6"
                }`}
              />
            </a>
          );
        })}
      </nav>
    </>
  );
}
