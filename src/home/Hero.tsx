import { Fragment, useRef } from "react";
import { gsap, useGsapContext } from "../lib/motion";
import { CountUp } from "../components/motion-primitives";
import { Magnetic } from "../components/effects";
import { HERO, MARQUEE, STATS } from "../lib/home-data";
import { HeroAurora } from "./HeroAurora";

/** Split the headline into animatable words, keeping the emphasised phrase. */
function useHeadline() {
  const em = new Set(HERO.headline.em.split(/\s+/).filter(Boolean));
  const text = `${HERO.headline.before}${HERO.headline.em}${HERO.headline.after}`;
  const words = text.split(/\s+/).filter(Boolean);
  return { em, words };
}

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const { em, words } = useHeadline();

  useGsapContext(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const hero = el;

    /* ---- entrance choreography: words tumble in on a 3D X rotation ---- */
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.fromTo("[data-h='eyebrow']", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, delay: 0.1 })
      .fromTo(
        ".hero-word",
        { y: 64, opacity: 0, rotationX: -80, transformOrigin: "50% 100%" },
        { y: 0, opacity: 1, rotationX: 0, duration: 1, stagger: 0.035 },
        "-=0.25",
      )
      .fromTo("[data-h='lede']", { y: 26, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, "-=0.55")
      .fromTo("[data-h='cta']", { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.45")
      .fromTo(
        "[data-h='trust']",
        { y: 14, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        "-=0.35",
      )
      .fromTo(
        "[data-h='stat']",
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.55, stagger: 0.08 },
        "-=0.4",
      );
    // Failsafe for throttled webviews: never leave content hidden.
    window.setTimeout(() => {
      if (tl.progress() < 1) tl.progress(1);
    }, 3600);

    /* ---- scrubbed exit: the stage drifts and dims (NO pinning → free scroll) ---- */
    gsap
      .timeline({
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      })
      .to("[data-h='stage']", { y: -50, opacity: 0.4, ease: "none" }, 0);
  }, []);

  return (
    <section ref={root} className="hero hero-aurora" id="top">
      <HeroAurora />

      <div className="container hero-center" data-h="stage">
        <p className="eyebrow hero-eyebrow" data-h="eyebrow">
          <i className="eyebrow-dot" aria-hidden="true" />
          {HERO.eyebrow}
        </p>

        <h1 className="hero-title hero-title-big">
          {words.map((w, i) => (
            <Fragment key={`${w}-${i}`}>
              <span
                className="hero-word"
                data-em={em.has(w) ? "" : undefined}
                style={{ perspective: 900 }}
              >
                {w}
              </span>
              {i < words.length - 1 ? " " : ""}
            </Fragment>
          ))}
        </h1>

        <p className="lede hero-sub" data-h="lede">
          {HERO.lede}
        </p>

        <div className="hero-actions" data-h="cta">
          <Magnetic strength={0.25}>
            <a className="btn btn-gold btn-lg" href={HERO.ctaPrimary.href}>
              {HERO.ctaPrimary.label} →
            </a>
          </Magnetic>
          <Magnetic strength={0.35}>
            <a className="btn btn-glass btn-lg" href="#services">
              <span className="btn-glass-ic" aria-hidden="true">→</span>
              {HERO.ctaSecondary.label}
            </a>
          </Magnetic>
        </div>

        <ul className="hero-trust" data-h="trust">
          {HERO.meta.map((m) => (
            <li key={m}>
              <span aria-hidden="true">✓</span>
              {m}
            </li>
          ))}
        </ul>

        <dl className="hero-stats">
          {STATS.map((s) => (
            <div className="hero-stat" data-h="stat" key={s.label}>
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
              {MARQUEE.map((m) => (
                <span key={m + k}>{m}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
