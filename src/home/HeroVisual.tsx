import { useRef, type CSSProperties } from "react";
import { gsap, useGsapContext } from "../lib/motion";
import { CONSOLE_ROWS, CONSOLE_TRAINING } from "../lib/home-data";

/**
 * HeroVisual — the hero's 3D centrepiece.
 *
 * A glass "delivery orb" holding the three practices at different depths,
 * floating satellite chips around it. Driven entirely by GSAP:
 *
 *   - idle float (sine.inOut, yoyo, infinite)
 *   - pointer tilt with quickTo springs + parallax on every inner layer
 *   - a jelly squash-and-settle on enter (elastic.out) and on pointerdown
 *   - a scrubbed scroll parallax as the hero leaves (no pinning → free scroll)
 *
 * Inert under prefers-reduced-motion: flat, no tilt, no float.
 */

const ICONS = ["◈", "⬢", "✦"] as const;

const ROWS = [
  { ...CONSOLE_ROWS[0], icon: ICONS[0], depth: 46 },
  { ...CONSOLE_ROWS[1], icon: ICONS[1], depth: 38 },
  {
    ...CONSOLE_TRAINING,
    sub: "Corporate tracks and institute programmes · around 70% hands-on",
    icon: ICONS[2],
    depth: 30,
  },
];

const SATELLITES = [
  { label: "5–7 day shortlist", note: "engineer-screened", cls: "s1" },
  { label: "2-week sprints", note: "demo every sprint", cls: "s2" },
  { label: "~70% hands-on", note: "lab time", cls: "s3" },
  { label: "NDA day one", note: "weekly reports", cls: "s4" },
];

export function HeroVisual() {
  const root = useRef<HTMLDivElement>(null);
  const orb = useRef<HTMLDivElement>(null);

  useGsapContext(() => {
    const el = root.current;
    const o = orb.current;
    if (!el || !o) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    /* idle float */
    gsap.to(o, {
      y: -14,
      duration: 5,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    /* scrubbed scroll parallax — no pin, so the page scrolls freely */
    gsap.to(o, {
      y: -34,
      rotationX: -6,
      scale: 0.98,
      ease: "none",
      scrollTrigger: {
        trigger: el.closest<HTMLElement>(".hero") ?? el,
        start: "top top",
        end: "bottom top",
        scrub: 0.6,
      },
    });

    if (window.matchMedia("(pointer: fine)").matches) {
      const rx = gsap.quickTo(o, "rotationX", { duration: 0.6, ease: "power3.out" });
      const ry = gsap.quickTo(o, "rotationY", { duration: 0.6, ease: "power3.out" });
      const layers = gsap.utils.toArray<HTMLElement>("[data-depth]", el);

      const onMove = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        ry(px * 22);
        rx(-py * 22);
        layers.forEach((l) => {
          const d = parseFloat(l.dataset.depth || "0");
          gsap.to(l, {
            z: d,
            x: px * d * 0.35,
            y: py * d * 0.35,
            duration: 0.6,
            ease: "power3.out",
            overwrite: "auto",
          });
        });
      };

      /* jelly: squash on hover, wobble back on leave */
      const onEnter = () => {
        gsap.set(o, { transformPerspective: 1100 });
        gsap.fromTo(
          o,
          { scaleX: 1.05, scaleY: 0.95 },
          { scaleX: 1, scaleY: 1, duration: 1, ease: "elastic.out(1, 0.4)" },
        );
      };
      const onDown = () =>
        gsap.fromTo(
          o,
          { scaleX: 1.08, scaleY: 0.92 },
          { scaleX: 1, scaleY: 1, duration: 1.1, ease: "elastic.out(1, 0.3)" },
        );
      const onLeave = () => {
        rx(0);
        ry(0);
        layers.forEach((l) => {
          const d = parseFloat(l.dataset.depth || "0");
          gsap.to(l, {
            z: d,
            x: 0,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            overwrite: "auto",
          });
        });
      };

      el.addEventListener("pointermove", onMove);
      el.addEventListener("pointerenter", onEnter);
      el.addEventListener("pointerdown", onDown);
      el.addEventListener("pointerleave", onLeave);
    }
  }, []);

  return (
    <div className="hero-visual" ref={root}>
      <div className="hv-halo" aria-hidden="true" />
      <div className="hv-ring r1" aria-hidden="true" />
      <div className="hv-ring r2" aria-hidden="true" />
      <div className="hv-orb" ref={orb}>
        <div className="hv-glass" aria-hidden="true" />
        <div className="hv-sheen" aria-hidden="true" />
        <div className="hv-content">
          <div className="hv-head">
            <span className="hv-pulse" aria-hidden="true" />
            Delivery board
            <span className="hv-tag mono">3 practices · 1 partner</span>
          </div>
          <ul className="hv-rows">
            {ROWS.map((r) => (
              <li key={r.href} data-depth={r.depth}>
                <a href={r.href}>
                  <span className="hv-ic" aria-hidden="true">{r.icon}</span>
                  <span className="hv-txt">
                    <strong>{r.title}</strong>
                    <small>{r.sub}</small>
                  </span>
                  <span className="hv-arrow mono" aria-hidden="true">{r.tag} →</span>
                </a>
              </li>
            ))}
          </ul>
          <a className="hv-foot" href="contact">
            <span>India delivery · USA hours</span>
            <span className="mono">IST + ET overlap</span>
          </a>
        </div>
        <div className="hv-mark" aria-hidden="true">3</div>
      </div>
      <div className="hv-satellites" aria-hidden="true">
        {SATELLITES.map((s, i) => (
          <span key={s.label} className={`hv-sat ${s.cls}`} style={{ "--d": i } as CSSProperties}>
            <strong>{s.label}</strong>
            <small>{s.note}</small>
          </span>
        ))}
      </div>
    </div>
  );
}
