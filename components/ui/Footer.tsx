import { footer } from "@/content/site";

// ──────────────────────────────────────────────
// Footer — 极简署名 + 链接
// ──────────────────────────────────────────────
export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-line">
      <div className="container-edge flex flex-col gap-6 py-12 md:flex-row md:items-center md:justify-between">
        <p className="font-display text-base text-ink">{footer.signature}</p>
        <nav className="flex items-center gap-6">
          {footer.links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="font-code text-xs tracking-widest text-ink-muted transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="container-edge pb-10">
        <p className="font-code text-[0.65rem] text-ink-muted/60">
          {footer.note}
        </p>
      </div>
    </footer>
  );
}
