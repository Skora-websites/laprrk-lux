import { useRef } from "react";
import { gsap, ScrollTrigger, useGsapContext } from "../lib/motion";
import { CountUp } from "../components/motion-primitives";
import { HERO, CONSOLE_ROWS, CONSOLE_TRAINING, MARQUEE, STATS } from "../lib/home-data";

const FLOAT_CARDS = [
  { ...CONSOLE_ROWS[0], icon: "◈" },
  { ...CONSOLE_ROWS[1], icon: "⬢" },
  {
    title: CONSOLE_TRAINING.title,
    sub: "For IT corporates and institutes · around 70% hands-on",
    tag: CONSOLE_TRAINING.tag,
    href: "corporate-training.html",
    icon: "✦",
  },
];

/* One glass composition for the right column: the three practices as
   depth-stacked rows (the reference site's card-pile treatment) with the
   punchline as the base plate. Replaces the previous orb + LAPRRK badge +
   ribbon + three loose cards, which read as five competing motifs. */
function Visual() {
  return (
    <div className="tn-visual" data-h="visual">
      <div className="tn-glow" aria-hidden="true" />
      <div className="tn-stack" data-h="stack">
        {FLOAT_CARDS.map((c, i) => (
          <a className="tn-stack-row" data-layer={i} href={c.href} key={c.href}>
            <span className="icon-badge tn-stack-ic" aria-hidden="true">{c.icon}</span>
            <span className="tn-stack-text">
              <strong className="tn-stack-t">{c.title}</strong>
              <small className="tn-stack-s">{c.sub}</small>
            </span>
            <span className="tn-stack-k mono" aria-hidden="true">
              0{i + 1}
              <span className="tn-stack-arrow" aria-hidden="true">→</span>
            </span>
          </a>
        ))}
        <a className="tn-stack-core" href={HERO.ctaSecondary.href}>
          <span className="tn-stack-core-num" aria-hidden="true">3</span>
          <span className="tn-stack-core-lab">
            practices, one partner
            <span className="tn-stack-core-cta" aria-hidden="true">→</span>
          </span>
        </a>
      </div>
    </div>
  );
}

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useGsapContext(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    /* Entrance choreography (fromTo: explicit end states, so an interrupted
       tween can never leave content stuck invisible). */
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo("[data-h='eyebrow']", { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, delay: 0.1 })
      .fromTo("[data-h='title']", { y: 56, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 }, "-=0.35")
      .fromTo("[data-h='lede']", { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, "-=0.45")
      .fromTo("[data-h='cta']", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.4")
      .fromTo("[data-h='stat']", { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55, stagger: 0.08 }, "-=0.35")
      .fromTo("[data-h='latest']", { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.3")
      /* The stack settles from a single plane into three layered rows. */
      .fromTo("[data-h='stack']", { scale: 0.94, opacity: 0 }, { scale: 1, opacity: 1, duration: 1, ease: "power4.out" }, 0.25)
      .fromTo("[data-layer]", { y: 26, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.12 }, 0.5)
      .fromTo(".tn-stack-core", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, 0.9);

    /* Pinned gentle exit: the stage drifts and dims, then reverses on scroll-up. */
    ScrollTrigger.create({
      trigger: el,
      start: "top top",
      end: "bottom top",
      pin: true,
      pinSpacing: true,
      anticipatePin: 1,
      scrub: true,
      animation: gsap.timeline().to("[data-h='stage']", { y: -40, opacity: 0.55, ease: "none" }),
    });
  }, [], root);

  return (
    <section ref={root} className="hero" id="top">
      <div className="hero-veil" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />
      <div className="container tn-stage" data-h="stage">
        <div className="tn-copy">
          <p className="eyebrow" data-h="eyebrow">
            <i className="eyebrow-dot" aria-hidden="true" />
            {HERO.eyebrow}
          </p>
          <h1 className="hero-title" data-h="title">
            {HERO.headline.before}
            <span className="em-gold">{HERO.headline.em}</span>
            {HERO.headline.after}
          </h1>
          <p className="lede" data-h="lede">{HERO.lede}</p>
          <div className="hero-ctas" data-h="cta">
            <a className="btn btn-gold btn-lg" href={HERO.ctaPrimary.href}>{HERO.ctaPrimary.label} →</a>
            <a className="tn-play" href={HERO.ctaSecondary.href}>
              <span className="tn-play-btn" aria-hidden="true">→</span>
              <span className="tn-play-text">
                <strong>{HERO.ctaSecondary.label}</strong>
                <small>See what we do</small>
              </span>
            </a>
          </div>
          <a className="tn-latest glass" data-h="latest" href="case-studies.html">
            <img src="https://picsum.photos/seed/laprrk-latest-work/240/180" alt="" loading="lazy" width={240} height={180} />
            <span className="tn-latest-text">
              <strong>Representative engagements</strong>
              <small>GenAI, GCC hiring and upskilling stories.</small>
            </span>
            <span className="tn-arrow" aria-hidden="true">→</span>
          </a>
        </div>
        <Visual />
        <dl className="tn-stats">
          {STATS.map((s) => (
            <div className="tn-stat" data-h="stat" key={s.label}>
              <dt>
                <CountUp value={s.value} />
                <span className="stat-suffix">{s.suffix}</span>
              </dt>
              <dd>{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map((k) => (
            <div className="marquee-group" key={k}>
              {MARQUEE.map((m) => <span key={m + k}>{m}</span>)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
