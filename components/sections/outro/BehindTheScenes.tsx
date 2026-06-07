import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import VideoTile from "@/components/ui/VideoTile";
import { behindTheScenes } from "@/content/site";

// ──────────────────────────────────────────────
// BehindTheScenes — 幕后花絮：瀑布流 Demo 视频
// ──────────────────────────────────────────────
export default function BehindTheScenes() {
  return (
    <Section eyebrow={behindTheScenes.eyebrow} pad="loose">
      <Reveal>
        <h2 className="font-display text-3xl font-semibold leading-snug md:text-[2.6rem]">
          {behindTheScenes.title}
        </h2>
      </Reveal>
      <Reveal delay={0.08}>
        <p className="mt-6 max-w-xl font-code text-xs tracking-wide text-ink-muted">
          {behindTheScenes.note}
        </p>
      </Reveal>

      {/* CSS columns 瀑布流 */}
      <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {behindTheScenes.videos.map((item, i) => (
          <Reveal
            key={item.id}
            delay={i * 0.06}
            className="mb-4 block break-inside-avoid"
          >
            <VideoTile label={item.label} ratio={item.ratio} src={item.src} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
