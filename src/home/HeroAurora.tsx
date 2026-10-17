import { useRef, type CSSProperties } from "react";
import { gsap, useGsapContext } from "../lib/motion";
import { FluidBackground } from "../components/effects";

/**
 * HeroAurora — the hero's living backdrop (a brand-new theme).
 *
 * Three stacked, aria-hidden layers behind the hero copy:
 *
 *   1. FluidBackground — drifting mesh-gradient blobs (soft colour wash).
 *   2. An SVG "goo" metaball — blurred circles merged by an feColorMatrix
 *      alpha ramp, morphed on GSAP timelines so it reads as one liquid mass
 *      that never stops moving.
 *   3. Floating glass orbs — idle float (GSAP, yoyo) plus a jelly repel
 *      toward the pointer (GSAP quickTo, desktop only). The float lives on an
 *      inner <i> so it never fights the repelling transform on the outer span.
 *
 * Everything is inert under prefers-reduced-motion.
 */

const GOO_CIRCLES = [
  { cx: 600, cy: 430, r: 150, dx: -70, dy: -40, s: 1.25 },
  { cx: 480, cy: 380, r: 120, dx: 60,  dy: 30,  s: 0.9 },
  { cx: 720, cy: 360, r: 135, dx: -40, dy: 50,  s: 1.1 },
  { cx: 600, cy: 300, r: 110, dx: 45,  dy: -45, s: 0.85 },
  { cx: 660, cy: 460, r: 100, dx: -55, dy: 20,  s: 1.05 },
];

const ORBS = [
  { cls: "o1", size: 120, top: "16%", left: "12%" },
  { cls: "o2", size: 74,  top: "70%", left: "18%" },
  { cls: "o3", size: 96,  top: "22%", left: "80%" },
  { cls: "o4", size: 60,  top: "74%", left: "72%" },
  { cls: "o5", size: 46,  top: "46%", left: "7%" },
];

export function HeroAurora() {
  const root = useRef<HTMLDivElement>(null);

  useGsapContext(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    /* morph the goo circles (transform-based: transform-box: fill-box) */
    gsap.utils.toArray<SVGCircleElement>(".goob", el).forEach((c, i) => {
      const base = GOO_CIRCLES[i] ?? GOO_CIRCLES[0];
      gsap.to(c, {
        x: base.dx,
        y: base.dy,
        scale: base.s,
        duration: 9 + i * 2.2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: i * 0.7,
      });
    });

    /* idle float on the inner element of every orb */
    const inners = gsap.utils.toArray<HTMLElement>(".aurora-orb > i", el);
    inners.forEach((inner, i) => {
      gsap.to(inner, {
        y: -16,
        duration: 4.5 + i * 0.6,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: i * 0.5,
      });
    });

    /* jelly repel on the orbs — desktop only (x-axis, so it can't fight the float) */
    if (window.matchMedia("(pointer: fine)").matches) {
      gsap.utils.toArray<HTMLElement>(".aurora-orb", el).forEach((orb) => {
        const xTo = gsap.quickTo(orb, "x", { duration: 0.8, ease: "power3.out" });
        const onMove = (e: PointerEvent) => {
          const r = orb.getBoundingClientRect();
          const dx = (r.left + r.width / 2) - e.clientX;
          const dist = Math.abs(dx) || 1;
          const pull = Math.max(0, 1 - dist / 340) * 52 * Math.sign(dx);
          xTo(pull);
        };
        const onLeave = () => xTo(0);
        window.addEventListener("pointermove", onMove);
        orb.addEventListener("pointerleave", onLeave);
      });
    }
  }, []);

  return (
    <div className="hero-aurora-bg" ref={root} aria-hidden="true">
      <FluidBackground />

      <svg className="aurora-goo" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <filter id="laprrk-goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="26" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 26 -10"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
          <linearGradient id="goo-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(52,211,153,0.9)" />
            <stop offset="60%" stopColor="rgba(14,122,95,0.8)" />
            <stop offset="100%" stopColor="rgba(11,101,79,0.7)" />
          </linearGradient>
        </defs>
        <g filter="url(#laprrk-goo)">
          {GOO_CIRCLES.map((c, i) => (
            <circle
              key={i}
              className="goob"
              cx={c.cx}
              cy={c.cy}
              r={c.r}
              fill="url(#goo-grad)"
              style={{ transformBox: "fill-box", transformOrigin: "center" } as CSSProperties}
            />
          ))}
        </g>
      </svg>

      {ORBS.map((o) => (
        <span
          key={o.cls}
          className={`aurora-orb ${o.cls}`}
          style={{ width: o.size, height: o.size, top: o.top, left: o.left } as CSSProperties}
        >
          <i />
        </span>
      ))}
    </div>
  );
}
