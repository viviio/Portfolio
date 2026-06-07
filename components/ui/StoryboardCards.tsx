import Placeholder from "./Placeholder";
import Reveal from "./Reveal";

// ──────────────────────────────────────────────
// StoryboardCards — 分镜卡片网格
// 导演桌上的分镜卡：编号 + 画面占位 + 节拍名
// ──────────────────────────────────────────────
type Card = { no: string; beat: string };

export default function StoryboardCards({ cards }: { cards: readonly Card[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5">
      {cards.map((card, i) => (
        <Reveal key={card.no} delay={i * 0.06}>
          <figure className="group flex flex-col gap-3 rounded-lg border border-line bg-bg-elev/40 p-3 transition-colors hover:border-line-strong">
            <div className="flex items-center justify-between px-0.5">
              <span className="font-code text-xs text-ink-muted">
                SHOT {card.no}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-accent/70" />
            </div>
            <Placeholder ratio="4 / 3" label={`分镜 · ${card.beat}`} />
            <figcaption className="px-0.5 pb-0.5 font-display text-lg text-ink">
              {card.beat}
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}
