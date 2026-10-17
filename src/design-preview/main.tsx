import { MotionProvider } from "../lib/motion";
import { SectionHead, GlassCard, Marquee, Stats } from "../components/chrome";
import { Reveal, TiltCard, FloatLoop, CountUp } from "../components/motion-primitives";
import { DevAnnotation } from "../components/DevAnnotation";
import "../../src/styles/global.css";

const marqueeItems = [
  "Agentic AI", "Model Context Protocol", "LangGraph", "OpenAI", "Anthropic Claude",
  "AWS", "Microsoft Azure", "Google Cloud", "Kubernetes", "Terraform", "React 19", "Next.js",
];

export default function DesignPreview() {
  return (
    <MotionProvider>
      {/* Sticky glass header */}
      <header
        className="glass-strong"
        style={{
          position: "sticky",
          top: 16,
          margin: "16px auto 0",
          maxWidth: 1280,
          width: "calc(100% - 32px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 20px",
          zIndex: 10,
        }}
      >
        <span style={{ fontFamily: '"Instrument Serif", Georgia, serif', fontWeight: 400, fontSize: 22 }}>
          Laprrk<span style={{ color: "var(--accent)" }}>.</span>
        </span>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <span className="mono" style={{ fontSize: 12, color: "var(--text-mute)" }}>
            Sea-glass design system
          </span>
        </div>
      </header>

      <main>
        {/* ===== Cinematic midnight hero with floating glass console ===== */}
        <section
          className="ink-band"
          style={{
            margin: "24px auto 0",
            maxWidth: 1280,
            width: "calc(100% - 32px)",
            borderRadius: 22,
            padding: "clamp(48px,6vw,88px) clamp(24px,4vw,56px)",
            display: "grid",
            gridTemplateColumns: "1.15fr 0.85fr",
            gap: 48,
            alignItems: "center",
          }}
        >
          <Reveal y={28} stagger={0.1}>
            <div style={{ display: "grid", gap: 24 }}>
              <span className="mono" style={{ fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--accent)" }}>
                Design system
              </span>
              <h1 style={{ fontSize: "clamp(2.4rem,5vw,4.2rem)", fontWeight: 400, lineHeight: 1.04 }}>
                Sea glass on midnight
              </h1>
              <p style={{ color: "var(--text-mute)", maxWidth: "48ch", fontSize: 18 }}>
                Cinematic glass, one sea-glass accent, six morphism families on a single dark theme.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a className="btn btn-gold" href="#cards">See components</a>
                <a className="btn btn-ghost" href="#tokens">Tokens</a>
              </div>
            </div>
          </Reveal>

          <FloatLoop>
            <TiltCard className="glass-ink glass-sheen">
              <div style={{ position: "relative", padding: 24, display: "grid", gap: 14 }}>
                <div className="mono" style={{ fontSize: 11.5, color: "var(--text-mute)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  Console preview
                </div>
                {["IT Services", "Hiring", "Training"].map((s) => (
                  <div
                    key={s}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "14px 16px",
                      border: "1px solid rgba(192,236,217,.3)",
                      borderRadius: 12,
                      background: "rgba(240,244,233,0.04)",
                    }}
                  >
                    <b style={{ fontSize: 15 }}>{s}</b>
                    <span className="mono" style={{ fontSize: 11, color: "var(--accent)" }}>Live</span>
                  </div>
                ))}
              </div>
            </TiltCard>
          </FloatLoop>
        </section>

        {/* ===== Marquee ===== */}
        <section style={{ margin: "48px auto 0", maxWidth: 1280, width: "calc(100% - 32px)" }}>
          <Marquee items={marqueeItems} />
        </section>

        {/* ===== Stats ===== */}
        <section style={{ margin: "56px auto 0", maxWidth: 1280, width: "calc(100% - 32px)", padding: "0 clamp(0px,1vw,4px)" }}>
          <Stats
            items={[
              { value: 2019, suffix: "", label: "Founded, offices in India and the USA" },
              { value: 50, suffix: "+", label: "Clients served" },
              { value: 200, suffix: "+", label: "IT professionals placed" },
              { value: 500, suffix: "+", label: "Professionals trained" },
            ]}
          />
        </section>

        {/* ===== Glass card grid ===== */}
        <section id="cards" style={{ margin: "96px auto 0", maxWidth: 1280, width: "calc(100% - 32px)" }}>
          <SectionHead
            title="Glass surfaces"
            lede="Four tiers: glass, glass-strong, glass-tint and glass-ink. Tilt and glare on pointer-fine devices, reduced-motion collapses to static."
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            <GlassCard title=".glass" body="Default frosted card. 20px blur, mint inner highlight, hairline border." />
            <GlassCard title=".glass-tint" body="Accent-washed panel for featured cards and promos." tint />
            <GlassCard title="Tilt + glare" body="Pointer 3D tilt up to 6 degrees with a glare highlight tracking the cursor." />
            <GlassCard title="Count-up stats" body="Numerals count once on scroll entry, then hold tabular values." />
          </div>
        </section>

        {/* ===== Token swatches ===== */}
        <section id="tokens" style={{ margin: "96px auto 0", maxWidth: 1280, width: "calc(100% - 32px)" }}>
          <SectionHead title="Tokens" lede="One sea-glass accent family on a midnight base. No pure black, no pure white." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 12 }}>
            {[
              ["--base", "Base"], ["--surface", "Surface"], ["--surface-2", "Surface 2"],
              ["--accent", "Accent"], ["--accent-strong", "Accent strong"], ["--text", "Text"],
              ["--text-mute", "Muted"], ["--line", "Hairline"], ["--status", "Status"],
            ].map(([token, name]) => (
              <div key={token} className="glass" style={{ padding: 14, display: "grid", gap: 8 }}>
                <div style={{ height: 44, borderRadius: 8, background: `var(${token})`, border: "1px solid var(--line)" }} />
                <span className="mono" style={{ fontSize: 11.5, color: "var(--text-mute)" }}>{token}</span>
                <span style={{ fontSize: 13.5 }}>{name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ===== CTA band with real content numbers ===== */}
        <section
          className="ink-band"
          style={{
            margin: "96px auto 96px",
            maxWidth: 1280,
            width: "calc(100% - 32px)",
            borderRadius: 22,
            padding: "clamp(40px,5vw,72px) clamp(24px,4vw,56px)",
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: 40,
            alignItems: "center",
          }}
        >
          <Reveal>
            <div style={{ display: "grid", gap: 16 }}>
              <h2 style={{ fontSize: "clamp(26px,2.8vw,36px)", fontWeight: 400 }}>The whole site, one stage.</h2>
              <p style={{ color: "var(--text-mute)", maxWidth: "52ch" }}>
                Every page shares the midnight sea-glass theme, GSAP motion and the full morphism set — glass, clay, neu, skeu, liquid and jelly.
              </p>
              <div><a className="btn btn-gold" href="#tokens">Back to tokens</a></div>
            </div>
          </Reveal>
          <div className="glass-ink" style={{ padding: 24, display: "grid", gap: 10 }}>
            <span className="mono" style={{ fontSize: 11.5, color: "var(--text-mute)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Count-up demo
            </span>
            <div className="mono" style={{ fontSize: 44, fontWeight: 500, color: "var(--accent)" }}>
              <CountUp value={500} suffix="+" />
            </div>
            <span style={{ fontSize: 14, color: "var(--text-mute)" }}>Professionals trained, counted once on view</span>
          </div>
        </section>
      </main>

      <footer style={{ maxWidth: 1280, margin: "0 auto 32px", width: "calc(100% - 32px)", padding: "24px 0", borderTop: "1px solid var(--line)" }}>
        <span className="mono" style={{ fontSize: 12.5, color: "var(--text-mute)" }}>
          Laprrk sea-glass design system
        </span>
      </footer>

      {/* Mobile collapse for the grids on this preview page */}
      <style>{`
        @media (max-width: 860px) {
          main section[style*="grid-template-columns"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <DevAnnotation />
    </MotionProvider>
  );
}
