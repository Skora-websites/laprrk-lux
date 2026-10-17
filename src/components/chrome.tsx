import type { ReactNode } from "react";
import { Reveal, CountUp } from "./motion-primitives";

/* ---------- Section header (no eyebrow by default) ---------- */

export function SectionHead({
  title,
  lede,
  eyebrow,
  dark = false,
  link,
}: {
  title: string;
  lede?: string;
  eyebrow?: string;
  dark?: boolean;
  link?: { label: string; href: string };
}) {
  return (
    <Reveal>
      <div className="lumina-head">
        <div className="lumina-head-main">
          {eyebrow ? (
            <p
              className="lumina-eyebrow"
              style={dark ? { background: "rgba(192,236,217,0.14)", borderColor: "rgba(192,236,217,0.35)", color: "#c0ecd9" } : undefined}
            >
              {eyebrow}
            </p>
          ) : null}
          <h2
            className="lumina-title"
            style={dark ? { color: "#ffffff", textShadow: "0 2px 14px rgba(0,0,0,0.5)" } : undefined}
          >
            {title}
          </h2>
          {lede ? (
            <p className="lumina-lede" style={dark ? { color: "#c2d8d8" } : undefined}>{lede}</p>
          ) : null}
        </div>
        {link ? (
          <a className="lumina-link" href={link.href} style={dark ? { color: "#c0ecd9" } : undefined}>
            {link.label} <span aria-hidden="true">→</span>
          </a>
        ) : null}
      </div>
    </Reveal>
  );
}

/* ---------- GlassCard with tilt + reveal ---------- */

export function GlassCard({
  title,
  body,
  tint = false,
  className = "",
  children,
}: {
  title?: string;
  body?: string;
  tint?: boolean;
  className?: string;
  children?: ReactNode;
}) {
  if (children) {
    return (
      <div className={`${tint ? "glass-tint" : "glass"} ${className}`} style={{ height: "100%" }}>
        {children}
      </div>
    );
  }
  return (
    <div
      className={`${tint ? "glass-tint" : "glass"} ${className}`}
      style={{ padding: 28, display: "grid", gap: 12, height: "100%", alignContent: "start" }}
    >
      {title ? <h3 style={{ fontSize: 20, letterSpacing: "-0.015em" }}>{title}</h3> : null}
      {body ? <p style={{ color: "var(--text-mute)", fontSize: 15.5, lineHeight: 1.6 }}>{body}</p> : null}
    </div>
  );
}

/* ---------- Marquee (max one per page) ---------- */

export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div
      style={{
        overflow: "hidden",
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
        padding: "18px 0",
        maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
        WebkitMaskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
      }}
    >
      <div className="marquee-track" style={{ display: "flex", gap: 12, width: "max-content" }}>
        {doubled.map((item, i) => (
          <span key={i} className="chip">
            {item}
          </span>
        ))}
      </div>
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .marquee-track { animation: lux-scroll 60s linear infinite; }
          .marquee-track:hover { animation-play-state: paused; }
        }
        @keyframes lux-scroll { to { transform: translateX(-50%); } }
      `}</style>
    </div>
  );
}

/* ---------- Stats band ---------- */

export function Stats({ items }: { items: { value: number; suffix: string; label: string }[] }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 20,
        borderTop: "1px solid var(--line)",
        paddingTop: 32,
      }}
    >
      {items.map((s) => (
        <div key={s.label} style={{ display: "grid", gap: 6 }}>
          <strong
            className="mono"
            style={{ fontSize: "clamp(34px,4vw,50px)", fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1 }}
          >
            <CountUp value={s.value} suffix={s.suffix} />
          </strong>
          <span style={{ color: "var(--text-mute)", fontSize: 14.5 }}>{s.label}</span>
        </div>
      ))}
    </div>
  );
}
