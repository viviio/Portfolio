import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { value } from "@/content/site";

// ──────────────────────────────────────────────
// Value — 价值验证：Before / After
// ──────────────────────────────────────────────
function Panel({
  data,
  hot = false,
  delay = 0,
}: {
  data: { label: string; steps: string[]; time: string };
  hot?: boolean;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <div
        className={`flex h-full flex-col rounded-xl border p-8 md:p-10 ${
          hot ? "border-accent/40 bg-accent-soft" : "border-line bg-bg-elev"
        }`}
      >
        <p className={`eyebrow ${hot ? "!text-accent" : ""}`}>{data.label}</p>
        <ul className="mt-8 flex flex-col gap-3">
          {data.steps.map((s) => (
            <li key={s} className="flex items-center gap-3 text-ink-soft">
              <span
                className={`h-1 w-1 rounded-full ${hot ? "bg-accent" : "bg-ink-muted"}`}
              />
              <span className="font-display text-lg">{s}</span>
            </li>
          ))}
        </ul>
        <div className="mt-10 border-t border-line pt-6">
          <p className="eyebrow mb-1">耗时</p>
          <p
            className={`font-display text-4xl font-bold md:text-5xl ${
              hot ? "text-accent" : "text-ink"
            }`}
          >
            {data.time}
          </p>
        </div>
      </div>
    </Reveal>
  );
}

export default function Value() {
  return (
    <Section eyebrow={value.eyebrow} className="bg-bg-elev/30">
      <Reveal>
        <h2 className="font-display text-3xl font-semibold leading-snug md:text-[2.6rem]">
          {value.title}
        </h2>
      </Reveal>

      <div className="mt-14 grid items-stretch gap-6 md:grid-cols-2">
        <Panel data={value.before} delay={0.05} />
        <Panel data={value.after} hot delay={0.15} />
      </div>
    </Section>
  );
}
