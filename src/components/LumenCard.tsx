import React, { useRef, useCallback } from "react";
import { gsap } from "../lib/motion";

export interface LumenCardProps {
  children: React.ReactNode;
  className?: string;
  accent?: "mint" | "cyan" | "emerald" | "gold" | "amethyst";
  showFold?: boolean;
  tag?: string;
  tiltStrength?: number;
  style?: React.CSSProperties;
}

export function LumenCard({
  children,
  className = "",
  accent = "emerald",
  showFold = false,
  tag,
  tiltStrength = 7,
  style,
}: LumenCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const handlePointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const px = Math.max(0, Math.min(1, x / rect.width));
    const py = Math.max(0, Math.min(1, y / rect.height));

    const rotX = (0.5 - py) * tiltStrength;
    const rotY = (px - 0.5) * tiltStrength;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      card.style.setProperty("--lumen-x", `${(px * 100).toFixed(2)}%`);
      card.style.setProperty("--lumen-y", `${(py * 100).toFixed(2)}%`);
      card.style.setProperty("--tilt-x", `${rotX.toFixed(2)}deg`);
      card.style.setProperty("--tilt-y", `${rotY.toFixed(2)}deg`);
    });
  }, [tiltStrength]);

  const handlePointerEnter = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.classList.add("is-hovered");

    // Tactile jelly squash-and-settle wobble
    gsap.fromTo(
      card,
      { skewX: 0.6, skewY: -0.3, scale: 1.02 },
      { skewX: 0, skewY: 0, scale: 1.02, duration: 0.85, ease: "elastic.out(1, 0.4)", overwrite: "auto" }
    );
  }, []);

  const handlePointerLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    card.classList.remove("is-hovered");
    card.style.setProperty("--tilt-x", "0deg");
    card.style.setProperty("--tilt-y", "0deg");
    card.style.setProperty("--lumen-x", "50%");
    card.style.setProperty("--lumen-y", "50%");

    // Elastic settle on mouse leave
    gsap.to(card, {
      scale: 1,
      skewX: 0,
      skewY: 0,
      duration: 0.75,
      ease: "elastic.out(1, 0.45)",
      overwrite: "auto",
    });
  }, []);

  return (
    <div
      ref={cardRef}
      className={`lumen-card-stage accent-${accent} ${className}`}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      style={{
        ...style,
        ["--lumen-x" as any]: "50%",
        ["--lumen-y" as any]: "50%",
        ["--tilt-x" as any]: "0deg",
        ["--tilt-y" as any]: "0deg",
      }}
    >
      {/* Main 3D Luxury Glass Card Chassis */}
      <div className="lumen-card-body">
        {/* Specular Top Razor Ridge */}
        <div className="lumen-top-lip" aria-hidden="true" />

        {/* Micro Corner Caliper Brackets */}
        <span className="lumen-corner c-tl" aria-hidden="true">⌜</span>
        <span className="lumen-corner c-tr" aria-hidden="true">⌝</span>

        {/* Technical Index Tag */}
        {tag && (
          <div className="lumen-meta-tag" aria-hidden="true">
            <span className="lumen-tag-dot" />
            <span className="lumen-tag-text">{tag}</span>
          </div>
        )}

        {/* Card Content Layer */}
        <div className="lumen-content-layer">
          {children}
        </div>

        {/* Refractive Fold Line (Optional subtle horizon hairline) */}
        {showFold && (
          <div className="lumen-fold-line" aria-hidden="true">
            <span className="lumen-fold-grad left" />
            <span className="lumen-fold-pip" />
            <span className="lumen-fold-grad right" />
          </div>
        )}

        {/* Pure Specular Glare (Soft pearl sheen following cursor, NO neon) */}
        <div className="lumen-cursor-glint" aria-hidden="true" />
      </div>
    </div>
  );
}
export default LumenCard;
