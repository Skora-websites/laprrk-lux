import { useEffect, useRef, useState, type ReactNode } from "react";

interface PixelCardProps {
  children: ReactNode;
  className?: string;
  gridSize?: number;
  pixelColor?: string;
  glowColor?: string;
}

export function PixelCard({
  children,
  className = "",
  gridSize = 16,
  pixelColor,
  glowColor,
}: PixelCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = container.offsetWidth);
    let height = (canvas.height = container.offsetHeight);

    const handleResize = () => {
      if (!container || !canvas) return;
      width = canvas.width = container.offsetWidth;
      height = canvas.height = container.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    // Pixel grid state
    const cols = Math.ceil(width / gridSize);
    const rows = Math.ceil(height / gridSize);
    const pixels: { x: number; y: number; alpha: number; targetAlpha: number; speed: number; hue: number }[] = [];

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        pixels.push({
          x: c * gridSize,
          y: r * gridSize,
          alpha: 0,
          targetAlpha: 0,
          speed: 0.04 + Math.random() * 0.06,
          hue: 155 + Math.random() * 30, // emerald to mint
        });
      }
    }

    let mouseX = -1000;
    let mouseY = -1000;
    let radius = 130;

    const onPointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;

      // Trigger pixels near cursor
      pixels.forEach((p) => {
        const dx = p.x + gridSize / 2 - mouseX;
        const dy = p.y + gridSize / 2 - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < radius) {
          const intensity = 1 - dist / radius;
          p.targetAlpha = Math.min(1, p.targetAlpha + intensity * (0.6 + Math.random() * 0.4));
        }
      });
    };

    const onPointerEnter = (e: PointerEvent) => {
      setIsHovered(true);
      onPointerMove(e);
    };

    const onPointerLeave = () => {
      setIsHovered(false);
      mouseX = -1000;
      mouseY = -1000;
    };

    container.addEventListener("pointermove", onPointerMove);
    container.addEventListener("pointerenter", onPointerEnter);
    container.addEventListener("pointerleave", onPointerLeave);

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.getAttribute("data-theme") === "dark";

      pixels.forEach((p) => {
        // Decay target alpha
        p.targetAlpha *= 0.94;
        // Smoothly interpolate current alpha
        p.alpha += (p.targetAlpha - p.alpha) * p.speed;

        if (p.alpha > 0.01) {
          const pad = 2;
          const sz = gridSize - pad;

          if (isDark) {
            ctx.fillStyle = pixelColor || `hsla(${p.hue}, 85%, 65%, ${p.alpha * 0.85})`;
            ctx.shadowColor = glowColor || `hsla(${p.hue}, 90%, 60%, ${p.alpha * 0.6})`;
            ctx.shadowBlur = 8;
          } else {
            ctx.fillStyle = pixelColor || `hsla(${p.hue}, 70%, 42%, ${p.alpha * 0.55})`;
            ctx.shadowColor = glowColor || `hsla(${p.hue}, 60%, 50%, ${p.alpha * 0.4})`;
            ctx.shadowBlur = 4;
          }

          ctx.fillRect(p.x + pad / 2, p.y + pad / 2, sz, sz);
        }
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("pointerenter", onPointerEnter);
      container.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [gridSize, pixelColor, glowColor]);

  return (
    <div
      ref={containerRef}
      className={`pixel-card-wrapper ${className} ${isHovered ? "is-hovered" : ""}`}
      style={{
        position: "relative",
        borderRadius: "inherit",
        overflow: "hidden",
        isolation: "isolate",
      }}
    >
      {/* Interactive Twinkling Pixel Canvas (Matches HorizonX Reference) */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 1,
          borderRadius: "inherit",
          opacity: isHovered ? 1 : 0.85,
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Card Content sits cleanly above canvas */}
      <div style={{ position: "relative", zIndex: 2, height: "100%", width: "100%" }}>
        {children}
      </div>
    </div>
  );
}
