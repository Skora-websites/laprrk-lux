import { useRef, useState, useEffect } from "react";
import { SiteHeader } from "../components/SiteHeader";
import { SiteDrawer, SiteFooter, WhatsAppFab } from "../components/SiteChrome";
import { DevAnnotation } from "../components/DevAnnotation";
import { SectionHead } from "../components/chrome";
import { Reveal } from "../components/motion-primitives";
import { Magnetic } from "../components/effects";
import { SubpageHeroBackdrop } from "../components/SubpageHeroBackdrop";
import { SculptureHero } from "../components/ui/liquid-sculpture-hero";
import { SectionBackdrop } from "../components/SectionBackdrop";
import { useGsapContext, gsap } from "../lib/motion";
import { CtaBand } from "../home/sections";
import { STEPS } from "../lib/home-data";
import type { PageData } from "./data/types";

export function Page({ data }: { data: PageData }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const current = (document.documentElement.getAttribute("data-theme") as "light" | "dark") || "light";
    setTheme(current);

    const onThemeChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ theme: "light" | "dark" }>;
      if (customEvent.detail?.theme) {
        setTheme(customEvent.detail.theme);
      }
    };
    window.addEventListener("themechange", onThemeChange);
    return () => window.removeEventListener("themechange", onThemeChange);
  }, []);

  const isLight = theme === "light";

  /* GSAP entrance for the page stage: staggered copy, settling title with 3D roll-in,
     and scrub parallax on the living sea-glass ribbons. */
  useGsapContext(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const copy = gsap.utils.toArray<HTMLElement>(
      ".crumbs-pill, .page-title, .lede, .hero-ctas > *",
      hero,
    );
    if (reduce) {
      gsap.set(copy, { clearProps: "all" });
      return;
    }
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(".crumbs-pill", { opacity: 0, y: 16, duration: 0.55 })
      .from(".page-title", { opacity: 0, y: 40, rotationX: -20, duration: 1, ease: "power4.out" }, "-=0.35")
      .from(".page-hero-inner .lede", { opacity: 0, y: 22, duration: 0.75 }, "-=0.6")
      .from(".hero-ctas > *", { opacity: 0, y: 20, duration: 0.65, stagger: 0.12, ease: "back.out(1.7)" }, "-=0.45");

    gsap.to(".subpage-hero-backdrop", {
      yPercent: 12,
      ease: "none",
      scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true },
    });
  }, [isLight]);

  return (
    <>
      <SiteHeader onOpenDrawer={() => setDrawerOpen(true)} />
      <SiteDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <main id="main">
        {isLight ? (
          <div className="subpage-sculpture-hero-wrapper" style={{ position: "relative", margin: 0, padding: 0 }}>
            <SculptureHero
              showNav={false}
              asBackground={true}
              theme="light"
              background="#edf5f1"
              textColor="#021924"
              accentColor="#0e7a5f"
              height="clamp(580px, 78svh, 720px)"
              eyebrow=""
              headline={data.title}
              body={data.lede}
              backdropText={data.crumb ? data.crumb.toLowerCase() : "laprrk"}
              primaryCta={{ label: "Book a free consultation", href: "contact.html" }}
              secondaryCta={{ label: data.secondaryLabel ?? "Talk to a specialist", href: data.secondaryHref ?? "contact.html" }}
              hint="Move across the sculpture"
              hintTouch="Touch the sculpture"
              sculptureX={22}
              sculptureScale={1.05}
              showCredit={false}
            />
          </div>
        ) : (
          <section className="hero page-hero" aria-label={data.title} ref={heroRef}>
            <SubpageHeroBackdrop />
            <div className="container page-hero-inner" style={{ position: "relative", zIndex: 2 }}>
              <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap", marginBottom: 8 }}>
                <span className="tech-meta-tag">SYSTEM // 01</span>
                <span className="tech-meta-tag">DELIVERY // 2-WK SPRINT</span>
              </div>
              <h1 className="page-title">{data.title}</h1>
              <p className="lede">{data.lede}</p>
              <div className="hero-ctas">
                <Magnetic strength={0.25}>
                  <a className="btn btn-gold btn-lg sg-jelly" href="contact.html">
                    Book a free consultation →
                  </a>
                </Magnetic>
                <Magnetic strength={0.35}>
                  <a className="btn btn-ghost btn-lg sg-jelly" href={data.secondaryHref ?? "contact.html"}>
                    {data.secondaryLabel ?? "Talk to a specialist"} →
                  </a>
                </Magnetic>
              </div>
            </div>
          </section>
        )}

        {data.blocks.map((b, bi) => {
          if (b.kind === "scope") {
            return (
              <section className="section lux-pad" key={bi} aria-label={b.title} style={{ position: "relative", overflow: "hidden" }}>
                <SectionBackdrop variant="subpage" opacity={0.16} blur={38} />
                <div className="ambient-mesh-canvas" aria-hidden="true" />
                <div className="container" style={{ position: "relative", zIndex: 1 }}>
                  <SectionHead title={b.title} lede={b.lede} />
                  
                  {/* Clean Numbered Editorial Capability Breakdown (ZERO cards) */}
                  <div className="scope-editorial-list">
                    {b.items.map((it, i) => (
                      <Reveal key={it.title} delay={i * 0.05}>
                        <div className="scope-editorial-item">
                          <span className="scope-editorial-num">SCOPE // 0{i + 1}</span>
                          <h3 className="scope-editorial-title">{it.title}</h3>
                          <p className="scope-editorial-body">{it.body}</p>
                          <a
                            href={data.secondaryHref ?? "contact.html"}
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: 6,
                              marginTop: 12,
                              fontSize: 13,
                              fontWeight: 600,
                              color: "#0e7a5f",
                              textDecoration: "none",
                            }}
                          >
                            <span>Consult on scope</span>
                            <span aria-hidden="true">→</span>
                          </a>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </section>
            );
          }
          if (b.kind === "points") {
            return (
              <section className="section lux-pad" key={bi} aria-label={b.title} style={{ position: "relative", overflow: "hidden", ...(b.tint ? { background: "var(--surface-2)", borderBlock: "1px solid var(--line)" } : {}) }}>
                <SectionBackdrop variant="services" opacity={0.15} blur={38} />
                <div className="ambient-mesh-canvas" aria-hidden="true" />
                <div className="container" style={{ position: "relative", zIndex: 1 }}>
                  <SectionHead title={b.title} lede={b.lede} />
                  <div className="why-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 18 }}>
                    {b.items.map((t, i) => (
                      <Reveal key={t.slice(0, 32) + i} delay={i * 0.05}>
                        <div className="synergy-matrix-col" style={{ padding: "22px 24px" }}>
                          <p style={{ margin: 0, fontSize: 16, display: "flex", gap: 14, alignItems: "center" }}>
                            <span className="check-badge-skeuo" aria-hidden="true" style={{ flexShrink: 0 }}>✓</span>
                            <span style={{ fontWeight: 500, color: "var(--text)", lineHeight: 1.5 }}>{t}</span>
                          </p>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </section>
            );
          }
          if (b.kind === "stats") {
            return (
              <section className="section lux-pad" key={bi} aria-label={b.title ?? "Key numbers"} style={{ position: "relative", overflow: "hidden" }}>
                <SectionBackdrop variant="tech" opacity={0.14} blur={36} />
                <div className="container" style={{ position: "relative", zIndex: 1 }}>
                  {b.title ? <SectionHead title={b.title} /> : null}
                  <div className="stats-editorial-row">
                    {b.items.map((s, i) => (
                      <Reveal key={s.l} delay={i * 0.06}>
                        <div className="stat-editorial-item">
                          <div className="stat-editorial-val">{s.v}</div>
                          <p className="stat-editorial-lbl">{s.l}</p>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </section>
            );
          }
          if (b.kind === "steps") {
            return (
              <section className="section lux-pad" key={bi} aria-label="How we work" style={{ position: "relative", overflow: "hidden" }}>
                <SectionBackdrop variant="cases" opacity={0.14} blur={40} />
                <div className="container" style={{ position: "relative", zIndex: 1 }}>
                  <SectionHead title={b.title ?? "How we start"} lede={b.lede} />
                  
                  {/* Horizontal Milestone Horizon (ZERO cards) */}
                  <div className="steps-timeline-horizon">
                    {STEPS.map((s) => (
                      <Reveal key={s.n}>
                        <div className="step-horizon-item">
                          <span className="step-horizon-dot" aria-hidden="true" />
                          <span className="step-horizon-n">PHASE // 0{s.n}</span>
                          <h3 className="step-horizon-title">{s.title}</h3>
                          <p className="step-horizon-body">{s.body}</p>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </section>
            );
          }
          if (b.kind === "faqs") {
            return (
              <section className="section lux-pad" key={bi} aria-label={b.title ?? "Questions"} style={{ position: "relative", overflow: "hidden" }}>
                <SectionBackdrop variant="faq" opacity={0.14} blur={36} />
                <div className="container container-narrow" style={{ position: "relative", zIndex: 1 }}>
                  <SectionHead title={b.title ?? "Frequently asked questions"} />
                  <div className="faq-list">
                    {b.items.map((f) => (
                      <Reveal key={f.q}>
                        <details className="faq neumorph-faq sg-jelly">
                          <summary>{f.q}</summary>
                          <p>{f.a}</p>
                        </details>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </section>
            );
          }
          if (b.kind === "articles") {
            return (
              <section className="section lux-pad" key={bi} aria-label={b.title}>
                <div className="container">
                  <SectionHead title={b.title} lede={b.lede} />
                  <div className="post-rows">
                    {b.items.map((p) => (
                      <Reveal key={p.href}>
                        <article className="post-row clay-card glass-sheen sg-jelly">
                          <img src={`https://picsum.photos/seed/laprrk-${p.href.replace(".html", "")}/640/480`} alt="" loading="lazy" width={640} height={480} />
                          <div className="post-row-body">
                            <div className="case-top">
                              <span className="clay-pill" style={{ padding: "4px 12px", fontSize: 12 }}>{p.pill}</span>
                              <span className="case-sector mono">{p.meta}</span>
                            </div>
                            <h3><a href={p.href}>{p.title}</a></h3>
                            <p>{p.body}</p>
                            <a className="text-link" href={p.href} style={{ fontWeight: 600, color: "var(--accent)" }}>{p.linkLabel ?? "Read more →"}</a>
                          </div>
                        </article>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </section>
            );
          }
          if (b.kind === "body") {
            return (
              <section className="section lux-pad" key={bi} aria-label={b.title ?? "Details"}>
                <div className="container container-narrow">
                  {b.title ? <SectionHead title={b.title} /> : null}
                  <div className="legal-body clay-card glass-sheen" style={{ padding: "36px 32px" }}>
                    {b.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
                  </div>
                </div>
              </section>
            );
          }
          if (b.kind === "roles") {
            return (
              <section className="section lux-pad" key={bi} aria-label={b.title}>
                <div className="container">
                  <SectionHead title={b.title} lede={b.lede} />
                  {b.groups.map((g) => (
                    <div key={g.id} id={g.id} style={{ scrollMarginTop: 120, marginBottom: 44 }}>
                      <h3 style={{ fontFamily: "Instrument Serif", fontSize: 26, color: "#021924", marginBottom: 14 }}>{g.title}</h3>
                      <div className="roles-pill-cloud">
                        {g.roles.map((r, i) => (
                          <Reveal key={r} delay={i * 0.02}>
                            <span className="role-pill-item">
                              <span style={{ color: "#0e7a5f", fontSize: 11, fontWeight: 700 }}>0{i + 1}</span>
                              <span>{r}</span>
                            </span>
                          </Reveal>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          }
          return null;
        })}

        {data.related.length > 0 && (
          <section className="section lux-pad" aria-label="Related pages">
            <div className="container">
              <SectionHead title="Continue exploring" />
              <div className="chip-cloud" style={{ gap: 12 }}>
                {data.related.map((r) => (
                  <a className="chip-link clay-pill sg-jelly" key={r.href} href={r.href}>
                    <span>{r.label}</span> <span aria-hidden="true">→</span>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        <CtaBand />
      </main>
      <SiteFooter />
      <WhatsAppFab />
      <DevAnnotation />
    </>
  );
}
