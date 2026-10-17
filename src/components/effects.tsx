import { useEffect, useRef, type ReactNode } from "react";
import { gsap, useGsapContext } from "../lib/motion";

/* ============================================================
   Premium GSAP effect primitives (fluid · glass · jelly · magnetic)
   ============================================================ */

const reduceMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const finePointer = () =>
  typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches;

/* ---------- Magnetic: element eases toward the pointer and pops on hover ---------- */

export function Magnetic({
  children,
  strength = 0.3,
  className = "",
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduceMotion() || !finePointer()) return;

    const xTo = gsap.quickTo(el, "x", { duration: 0.6, ease: "power3.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.6, ease: "power3.out" });

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const relX = e.clientX - (r.left + r.width / 2);
      const relY = e.clientY - (r.top + r.height / 2);
      xTo(relX * strength);
      yTo(relY * strength);
    };
    const onEnter = () =>
      gsap.to(el, { scale: 1.05, duration: 0.45, ease: "power3.out" });
    const onLeave = () =>
      gsap.to(el, {
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.9,
        ease: "elastic.out(1, 0.35)",
      });

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerenter", onEnter);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerenter", onEnter);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [strength]);

  return (
    <span ref={ref} className={`magnetic ${className}`}>
      {children}
    </span>
  );
}

/* ---------- JellyCard: 3D pointer tilt + elastic squish (the "jelly" effect) ---------- */

export function JellyCard({
  children,
  className = "",
  tilt = 8,
  scale = 1.025,
  glare = true,
}: {
  children: ReactNode;
  className?: string;
  tilt?: number;
  scale?: number;
  glare?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGsapContext(() => {
    const el = ref.current;
    if (!el) return;
    if (reduceMotion()) return;

    const fine = finePointer();
    const rx = gsap.quickTo(el, "rotationX", { duration: 0.5, ease: "power3.out" });
    const ry = gsap.quickTo(el, "rotationY", { duration: 0.5, ease: "power3.out" });
    const sc = gsap.quickTo(el, "scale", { duration: 0.4, ease: "power3.out" });
    const glareEl = glare ? (el.querySelector<HTMLElement>("[data-glare]")) : null;

    const onEnter = () => {
      gsap.set(el, { transformPerspective: 900 });
      sc(scale);
      // A quick squash-and-settle: the jelly wobble.
      gsap.fromTo(
        el,
        { skewX: 0.8, skewY: -0.4 },
        { skewX: 0, skewY: 0, duration: 0.9, ease: "elastic.out(1, 0.4)" },
      );
    };
    const onMove = (e: PointerEvent) => {
      if (!fine) return;
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      ry(px * tilt * 2);
      rx(-py * tilt * 2);
      if (glareEl) {
        gsap.to(glareEl, {
          opacity: 0.55,
          background: `radial-gradient(520px circle at ${(px + 0.5) * 100}% ${
            (py + 0.5) * 100
          }%, rgba(255,255,255,0.5), transparent 60%)`,
          duration: 0.3,
          overwrite: "auto",
        });
      }
    };
    const onLeave = () => {
      rx(0);
      ry(0);
      if (glareEl) gsap.to(glareEl, { opacity: 0, duration: 0.5, overwrite: "auto" });
      gsap.to(el, {
        scale: 1,
        skewX: 0,
        skewY: 0,
        duration: 0.9,
        ease: "elastic.out(1, 0.4)",
        overwrite: "auto",
      });
    };

    el.addEventListener("pointerenter", onEnter);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointerenter", onEnter);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [tilt, scale, glare]);

  return (
    <div ref={ref} className={`jelly ${className}`}>
      {children}
      <div data-glare aria-hidden="true" className="jelly-glare" />
    </div>
  );
}

/* ---------- FluidBackground: living mesh-gradient blobs (GSAP-driven drift) ---------- */

export function FluidBackground({
  variant = "light",
  className = "",
}: {
  variant?: "light" | "ink";
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGsapContext(() => {
    const el = ref.current;
    if (!el) return;
    if (reduceMotion()) return;
    const blobs = gsap.utils.toArray<HTMLElement>(".fluid-blob", el);
    blobs.forEach((b, i) => {
      gsap.to(b, {
        x: gsap.utils.random(-70, 70),
        y: gsap.utils.random(-60, 60),
        scale: gsap.utils.random(0.85, 1.3),
        duration: gsap.utils.random(11, 22),
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: i * 1.4,
      });
    });
  }, []);

  return (
    <div ref={ref} className={`fluid-bg fluid-${variant} ${className}`} aria-hidden="true">
      <span className="fluid-blob b1" />
      <span className="fluid-blob b2" />
      <span className="fluid-blob b3" />
      <span className="fluid-blob b4" />
      <span className="fluid-blob b5" />
    </div>
  );
}
