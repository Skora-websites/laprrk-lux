import { useState, useEffect } from "react";

export function EditorialHero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Subtle parallax response
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const metrics = [
    { num: "200+", label: "Enterprise Clients" },
    { num: "98%", label: "Client Retention" },
    { num: "15+", label: "Countries Served" },
    { num: "500+", label: "Engineers" },
  ];

  return (
    <section
      className="bondist-hero-section"
      id="hero"
      aria-label="Engineering Intelligent Digital Futures"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#030B17",
        color: "#FFFFFF",
        paddingTop: "clamp(120px, 14vh, 150px)",
        paddingBottom: "clamp(48px, 6vh, 64px)",
        overflow: "hidden",
      }}
    >
      {/* 1. High-Fidelity Energy Mesh & Light Wave Backdrop with Mask Reveal */}
      <div
        className="hero-image-mask-reveal"
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/assets/img/hero-energy-mesh.jpg')",
          backgroundPosition: "center right",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          zIndex: 1,
          transform: `translate3d(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px, 0)`,
          transition: "transform 0.15s ease-out",
        }}
      />

      {/* 2. Responsive Vignette & Contrast Shading for Left Text Readability */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, #030B17 0%, rgba(3, 11, 23, 0.92) 36%, rgba(3, 11, 23, 0.6) 58%, rgba(3, 11, 23, 0.15) 100%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* 3. Subtle Ambient Cyan Radial Glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "35%",
          left: "25%",
          width: 550,
          height: 350,
          background: "radial-gradient(circle, rgba(0, 163, 224, 0.18) 0%, transparent 70%)",
          filter: "blur(60px)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* Main Content Container */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: 1360,
          width: "100%",
          margin: "0 auto",
          padding: "0 clamp(20px, 4.5vw, 48px)",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div style={{ maxWidth: 680 }}>
          {/* Eyebrow Tag Pill: • AI-Powered Engineering */}
          <div className="hero-entrance-eyebrow" style={{ marginBottom: 24 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                padding: "6px 16px",
                borderRadius: 999,
                backgroundColor: "rgba(15, 23, 42, 0.72)",
                border: "1px solid rgba(255, 255, 255, 0.14)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  backgroundColor: "#00A3E0",
                  boxShadow: "0 0 10px #00A3E0, 0 0 20px rgba(0, 163, 224, 0.6)",
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  letterSpacing: "0.02em",
                  color: "#E2E8F0",
                }}
              >
                AI-Powered Engineering
              </span>
            </div>
          </div>

          {/* Main Headline: Coordinated Masked Line Reveals */}
          <h1
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: "clamp(2.8rem, 5.8vw, 5.2rem)",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: "#FFFFFF",
              margin: "0 0 24px 0",
            }}
          >
            <span className="hero-heading-mask">
              <span className="hero-heading-line hero-heading-line-1">Engineering</span>
            </span>
            <span className="hero-heading-mask">
              <span className="hero-heading-line hero-heading-line-2">Intelligent</span>
            </span>
            <span className="hero-heading-mask">
              <span
                className="hero-heading-line hero-heading-line-3"
                style={{
                  background: "linear-gradient(135deg, #00A3E0 0%, #0084FF 45%, #38BDF8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0 0 40px rgba(0, 132, 255, 0.35)",
                }}
              >
                Digital Futures
              </span>
            </span>
          </h1>

          {/* Supporting Text Follows */}
          <p
            className="hero-entrance-subtext"
            style={{
              fontFamily: "Manrope, sans-serif",
              fontSize: "clamp(1.05rem, 1.3vw, 1.2rem)",
              lineHeight: 1.65,
              color: "#94A3B8",
              maxWidth: 540,
              margin: "0 0 36px 0",
              fontWeight: 400,
            }}
          >
            We design and deliver AI-powered, scalable, and secure technology solutions that drive business growth.
          </p>

          {/* CTA Buttons Follow */}
          <div
            className="hero-entrance-ctas"
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: 16,
            }}
          >
            {/* Primary: Get Started → */}
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "14px 30px",
                borderRadius: 999,
                backgroundColor: "#0084FF",
                color: "#FFFFFF",
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "0.9375rem",
                fontWeight: 700,
                textDecoration: "none",
                boxShadow: "0 8px 26px -2px rgba(0, 132, 255, 0.55), 0 0 20px rgba(0, 163, 224, 0.35)",
                transition: "all 0.22s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.backgroundColor = "#0091FF";
                e.currentTarget.style.boxShadow = "0 12px 30px -2px rgba(0, 132, 255, 0.7), 0 0 30px rgba(0, 163, 224, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.backgroundColor = "#0084FF";
                e.currentTarget.style.boxShadow = "0 8px 26px -2px rgba(0, 132, 255, 0.55), 0 0 20px rgba(0, 163, 224, 0.35)";
              }}
            >
              <span>Get Started</span>
              <span aria-hidden="true" style={{ fontSize: "1.1rem", lineHeight: 1 }}>→</span>
            </a>

            {/* Secondary: Book a Demo */}
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "14px 28px",
                borderRadius: 999,
                backgroundColor: "rgba(255, 255, 255, 0.04)",
                color: "#FFFFFF",
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "0.9375rem",
                fontWeight: 600,
                textDecoration: "none",
                border: "1px solid rgba(255, 255, 255, 0.22)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                transition: "all 0.22s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                e.currentTarget.style.borderColor = "#00A3E0";
                e.currentTarget.style.color = "#38BDF8";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.04)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.22)";
                e.currentTarget.style.color = "#FFFFFF";
              }}
            >
              <span>Book a Demo</span>
            </a>
          </div>
        </div>
      </div>

      {/* 4. Bottom Metrics Bar (200+ Enterprise Clients | 98% Client Retention | 15+ Countries Served | 500+ Engineers) */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: 1360,
          width: "100%",
          margin: "0 auto",
          padding: "clamp(32px, 5vh, 48px) clamp(20px, 4.5vw, 48px) 0 clamp(20px, 4.5vw, 48px)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "clamp(24px, 4vw, 48px)",
            alignItems: "flex-end",
          }}
        >
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className={`hero-metric-card-${idx + 1}`}
              style={{ display: "flex", flexDirection: "column", gap: 6 }}
            >
              <div
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: "clamp(2.2rem, 3.4vw, 3.2rem)",
                  fontWeight: 800,
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                  color: "#0084FF",
                  textShadow: "0 0 24px rgba(0, 132, 255, 0.45)",
                }}
              >
                {m.num}
              </div>
              <div
                style={{
                  fontFamily: "Manrope, sans-serif",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "#94A3B8",
                  letterSpacing: "0.01em",
                }}
              >
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
