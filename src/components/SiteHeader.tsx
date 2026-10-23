import { useEffect, useRef, useState } from "react";
import { MEGA, RESOURCES_CARDS } from "../lib/nav-data";
import { ThemeToggle } from "./ThemeToggle";

/* ---------- Brand logo (exact template text from screenshot) ---------- */

export function Brand({ color }: { color?: string; onInk?: boolean }) {
  return (
    <a
      href="/"
      className="logo"
      style={{
        fontFamily: 'Manrope, Arial, sans-serif',
        fontSize: "1.0625rem",
        fontWeight: 700,
        color: color || "#f0f4e9",
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        textDecoration: "none",
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        lineHeight: 1,
        transition: "color 0.25s ease",
      }}
    >
      LAPRRK
    </a>
  );
}

/* ---------- Minimal Chevron ---------- */

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={12}
      height={12}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{
        transform: open ? "rotate(180deg)" : "none",
        transition: "transform .22s cubic-bezier(0.22, 1, 0.36, 1)",
        opacity: 0.75,
      }}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

/* ---------- Background-Blended Navbar (Matches Template Screenshot, No Topbar) ---------- */

export function SiteHeader({ onOpenDrawer }: { onOpenDrawer: () => void }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(false);
  const [isHome, setIsHome] = useState(() => {
    if (typeof window === "undefined") return true;
    const p = window.location.pathname;
    return p === "" || p === "/";
  });
  const [isScrolled, setIsScrolled] = useState(false);
  const headRef = useRef<HTMLElement>(null);
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const isHomePage =
      typeof window !== "undefined" &&
      (window.location.pathname === "/" || window.location.pathname === "");
    setIsHome(isHomePage);

    const checkTheme = () => {
      const current = document.documentElement.getAttribute("data-theme");
      setIsDark(current === "dark");
    };

    checkTheme();
    window.addEventListener("themechange", checkTheme);
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroThreshold = isHomePage ? (window.innerHeight - 84) : 24;
      setIsScrolled(scrollY > heroThreshold);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("themechange", checkTheme);
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const clearCloseTimer = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const scheduleClose = () => {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => {
      setOpenId(null);
    }, 240); // 240ms hover intent grace period
  };

  const handleTriggerEnter = (id: string) => {
    clearCloseTimer();
    setOpenId(id);
  };

  const handleMenuEnter = () => {
    clearCloseTimer();
  };

  /* Close on Escape and click outside */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenId(null);
    };
    const onClick = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest(".site-header")) {
        setOpenId(null);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
      clearCloseTimer();
    };
  }, []);

  const activeMega = MEGA.find((m) => m.id === openId);
  const isResourcesOpen = openId === "resources";

  // Transparent ONLY on hero section when not scrolled and no dropdown open
  const isDropdownOpen = Boolean(openId);
  const isTransparentOnHero = isHome && !isScrolled && !isDropdownOpen;
  const onLightSurface = !isTransparentOnHero && !isDark;
  const onLightSubpage = onLightSurface;
  const navColor = onLightSurface ? "#021924" : "#f0f4e9";
  const hoverColor = onLightSurface ? "#0e7a5f" : "#c0ecd9";

  const linkStyle = {
    fontFamily: "Manrope, Arial, sans-serif",
    fontSize: "0.6875rem",
    fontWeight: 600,
    textTransform: "uppercase" as const,
    letterSpacing: "0.13em",
    textDecoration: "none",
    color: navColor,
    opacity: onLightSurface ? 0.95 : 0.9,
    background: "transparent",
    border: 0,
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "8px 0",
    transition: "color 0.25s, opacity 0.25s",
  };

  return (
    <header
      ref={headRef}
      className={`site-header ${onLightSurface ? "nav-light-theme" : "nav-dark-theme"}`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        zIndex: 100,
        padding: "0 clamp(24px, 4vw, 48px)",
        background: isDropdownOpen
          ? "#ffffff"
          : isTransparentOnHero
          ? "transparent"
          : "rgba(255, 255, 255, 0.94)",
        borderBottom: isTransparentOnHero
          ? "none"
          : "1px solid rgba(14, 122, 95, 0.12)",
        boxShadow: isTransparentOnHero
          ? "none"
          : "0 4px 24px rgba(2, 25, 36, 0.06)",
        backdropFilter: isTransparentOnHero || isDropdownOpen ? "none" : "blur(20px) saturate(160%)",
        WebkitBackdropFilter: isTransparentOnHero || isDropdownOpen ? "none" : "blur(20px) saturate(160%)",
        transition: "background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease, backdrop-filter 0.3s ease",
      }}
    >
      <nav
        className="nav"
        aria-label="Primary"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: 1400,
          height: 84,
          margin: "0 auto",
          position: "relative",
        }}
      >
        {/* Brand Name on Left */}
        <Brand color={navColor} />

        {/* Center Navigation Links (Uppercase letter-spaced) */}
        <div
          className="nav-links"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 36,
          }}
        >
          {MEGA.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                style={{ position: "relative", height: 84, display: "flex", alignItems: "center" }}
                onMouseEnter={() => handleTriggerEnter(item.id)}
                onMouseLeave={scheduleClose}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  style={{
                    ...linkStyle,
                    color: isOpen ? hoverColor : navColor,
                    opacity: isOpen ? 1 : (onLightSubpage ? 0.95 : 0.82),
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = hoverColor;
                    e.currentTarget.style.opacity = "1";
                  }}
                  onMouseLeave={(e) => {
                    if (!isOpen) {
                      e.currentTarget.style.color = navColor;
                      e.currentTarget.style.opacity = onLightSubpage ? "0.95" : "0.82";
                    }
                  }}
                >
                  {item.label} <Chevron open={isOpen} />
                </button>

                {/* Safe Triangle Invisible Area bridging gap downward */}
                {isOpen && (
                  <div
                    className="hover-safe-bridge"
                    onMouseEnter={handleMenuEnter}
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: -30,
                      right: -30,
                      height: 30,
                      background: "transparent",
                      zIndex: 101,
                      pointerEvents: "auto",
                    }}
                  />
                )}
              </div>
            );
          })}

          {/* Resources Dropdown */}
          <div
            style={{ position: "relative", height: 84, display: "flex", alignItems: "center" }}
            onMouseEnter={() => handleTriggerEnter("resources")}
            onMouseLeave={scheduleClose}
          >
            <button
              type="button"
              aria-expanded={isResourcesOpen}
              onClick={() => setOpenId(isResourcesOpen ? null : "resources")}
              style={{
                ...linkStyle,
                color: isResourcesOpen ? hoverColor : navColor,
                opacity: isResourcesOpen ? 1 : (onLightSubpage ? 0.95 : 0.82),
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = hoverColor;
                e.currentTarget.style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                if (!isResourcesOpen) {
                  e.currentTarget.style.color = navColor;
                  e.currentTarget.style.opacity = onLightSubpage ? "0.95" : "0.82";
                }
              }}
            >
              Resources <Chevron open={isResourcesOpen} />
            </button>

            {isResourcesOpen && (
              <div
                className="hover-safe-bridge"
                onMouseEnter={handleMenuEnter}
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: -30,
                  right: -30,
                  height: 30,
                  background: "transparent",
                  zIndex: 101,
                  pointerEvents: "auto",
                }}
              />
            )}
          </div>

          <a
            href="about"
            style={linkStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = hoverColor;
              e.currentTarget.style.opacity = "1";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = navColor;
              e.currentTarget.style.opacity = onLightSubpage ? "0.95" : "0.82";
            }}
          >
            About
          </a>

          <a
            href="contact"
            style={linkStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = hoverColor;
              e.currentTarget.style.opacity = "1";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = navColor;
              e.currentTarget.style.opacity = onLightSubpage ? "0.95" : "0.82";
            }}
          >
            Contact
          </a>
        </div>

        {/* Right CTA Button (Theme Toggle hidden as dark mode is disabled per request) */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          {/* Animated, Highly-Attractive Magnetic Consultation CTA */}
          <a
            className="btn btn-primary nav-cta nav-cta-animated"
            href="contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              fontFamily: "Manrope, Arial, sans-serif",
              fontSize: "0.6875rem",
              fontWeight: 700,
              lineHeight: 1.6,
              letterSpacing: "0.105em",
              textTransform: "uppercase",
              borderRadius: 6,
              padding: "10px 20px",
              background: "linear-gradient(135deg, #0e7a5f 0%, #085542 100%)",
              color: "#ffffff",
              border: "1px solid rgba(192, 236, 217, 0.4)",
              boxShadow: "0 4px 18px rgba(14, 122, 95, 0.32), inset 0 1px 1px rgba(255, 255, 255, 0.35)",
              textDecoration: "none",
              cursor: "pointer",
              position: "relative",
              overflow: "hidden",
              transition: "transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease, filter 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05) translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 26px rgba(14, 122, 95, 0.45), inset 0 1px 1px rgba(255, 255, 255, 0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1) translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 18px rgba(14, 122, 95, 0.32), inset 0 1px 1px rgba(255, 255, 255, 0.35)";
            }}
          >
            <span
              className="cta-live-pulse-dot"
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#c0ecd9",
                boxShadow: "0 0 8px #c0ecd9",
                display: "inline-block",
              }}
            />
            <span>Book a consultation</span>
            <span className="cta-arrow" style={{ fontSize: 13, display: "inline-block", transition: "transform 0.2s ease" }}>→</span>
          </a>

          {/* Hamburger Menu on Mobile */}
          <button
            type="button"
            className="hamburger-btn"
            onClick={onOpenDrawer}
            aria-label="Open menu"
            style={{
              display: "none",
              background: "none",
              border: 0,
              color: navColor,
              padding: 6,
              cursor: "pointer",
            }}
          >
            <svg viewBox="0 0 24 24" width={24} height={24} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* =========================================================================
          BACKGROUND-BLENDED NESTED DROPDOWNS (Matches Template Aesthetic)
          ========================================================================= */}

      {/* Dropdown Soft Backdrop Veil */}
      {isDropdownOpen && (
        <div
          onClick={() => setOpenId(null)}
          aria-hidden="true"
          style={{
            position: "fixed",
            inset: 0,
            top: 84,
            background: "rgba(2, 25, 36, 0.45)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            zIndex: 85,
            transition: "opacity 0.25s ease",
          }}
        />
      )}

      {/* Mega Menu Dropdown (100% Opaque Light Porcelain Theme, Zero Bleed-Through) */}
      {activeMega && (
        <div
          className="mega-dropdown-blended"
          onMouseEnter={handleMenuEnter}
          onMouseLeave={scheduleClose}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: "100%",
            zIndex: 90,
            background: "#ffffff",
            borderTop: "1px solid rgba(14, 122, 95, 0.12)",
            borderBottom: "1px solid rgba(14, 122, 95, 0.16)",
            boxShadow: "0 32px 70px -15px rgba(2, 25, 36, 0.18), 0 12px 24px -6px rgba(2, 25, 36, 0.08)",
          }}
        >
          {/* Safe Triangle Invisible Area */}
          <div
            style={{
              position: "absolute",
              top: -24,
              left: 0,
              right: 0,
              height: 26,
              background: "transparent",
              pointerEvents: "auto",
            }}
          />

          <div
            style={{
              maxWidth: 1400,
              margin: "0 auto",
              padding: "36px clamp(24px, 4vw, 48px) 38px",
              display: "grid",
              gridTemplateColumns: `repeat(${activeMega.cols.length + 1}, 1fr)`,
              gap: 32,
            }}
          >
            {activeMega.cols.map((col) => (
              <div key={col.title}>
                <h4
                  style={{
                    fontFamily: "Manrope, Arial, sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#0e7a5f",
                    marginBottom: 12,
                  }}
                >
                  {col.href ? (
                    <a href={col.href} style={{ textDecoration: "none", color: "inherit" }}>
                      {col.title}
                    </a>
                  ) : (
                    col.title
                  )}
                </h4>
                <ul
                  style={{
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                    borderTop: "1px solid rgba(14, 122, 95, 0.12)",
                    paddingTop: 14,
                    display: "grid",
                    gap: 6,
                  }}
                >
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        style={{
                          display: "block",
                          textDecoration: "none",
                          fontSize: 14.5,
                          fontFamily: "Manrope, Arial, sans-serif",
                          fontWeight: 500,
                          padding: "6px 0",
                          color: "#021924",
                          opacity: 0.9,
                          transition: "color 0.2s, opacity 0.2s, transform 0.2s",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = "#0e7a5f";
                          e.currentTarget.style.opacity = "1";
                          e.currentTarget.style.transform = "translateX(4px)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = "#021924";
                          e.currentTarget.style.opacity = "0.9";
                          e.currentTarget.style.transform = "translateX(0)";
                        }}
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Featured Box */}
            <div
              style={{
                background: "linear-gradient(145deg, #f0f7f4 0%, #e6f3ed 100%)",
                padding: 24,
                borderRadius: 16,
                display: "grid",
                gap: 12,
                alignContent: "start",
                border: "1px solid rgba(14, 122, 95, 0.18)",
                boxShadow: "0 8px 24px rgba(14, 122, 95, 0.06)",
              }}
            >
              <span
                className="mono"
                style={{
                  fontSize: 10.5,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#0e7a5f",
                  fontWeight: 700,
                }}
              >
                Featured
              </span>
              <b
                style={{
                  fontFamily: '"Instrument Serif", Georgia, serif',
                  fontWeight: 400,
                  fontSize: 22,
                  lineHeight: 1.25,
                  color: "#021924",
                }}
              >
                {activeMega.id === "mega-hiring"
                  ? "Setting up an India GCC or Engineering Team?"
                  : activeMega.id === "mega-services"
                  ? "Production-Grade AI & Cloud Systems"
                  : "Applied Generative AI & Cloud Upskilling"}
              </b>
              <span style={{ color: "#3a5666", fontSize: 13.5, lineHeight: 1.6 }}>
                {activeMega.id === "mega-hiring"
                  ? "Leadership first, foundation team of 20-50, then scale. Phase-by-phase roadmap."
                  : activeMega.id === "mega-services"
                  ? "Product engineering, applied AI and cloud systems, delivered in two-week sprints."
                  : "Live, lab-based programmes for IT corporates and institutes, roughly 70% hands-on."}
              </span>
              <a
                href={
                  activeMega.id === "mega-hiring"
                    ? "gcc-hiring"
                    : activeMega.id === "mega-services"
                    ? "it-services"
                    : "corporate-training"
                }
                style={{
                  color: "#0e7a5f",
                  fontWeight: 700,
                  fontSize: 13.5,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  marginTop: 4,
                }}
              >
                View details →
              </a>
            </div>
          </div>

          {/* Bottom Foot Strip */}
          <div
            style={{
              borderTop: "1px solid rgba(14, 122, 95, 0.1)",
              background: "#f4f8f6",
            }}
          >
            <div
              style={{
                maxWidth: 1400,
                margin: "0 auto",
                padding: "12px clamp(24px, 4vw, 48px)",
                display: "flex",
                justifyContent: "space-between",
                gap: 16,
                flexWrap: "wrap",
                fontSize: 13,
                color: "#456372",
              }}
            >
              <span>{activeMega.foot}</span>
              <a
                href={activeMega.footHref}
                style={{ color: "#0e7a5f", fontWeight: 700, textDecoration: "none" }}
              >
                {activeMega.footLabel} →
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Resources Dropdown (100% Opaque Light Porcelain Theme, Zero Bleed-Through) */}
      {isResourcesOpen && (
        <div
          className="mega-dropdown-blended"
          onMouseEnter={handleMenuEnter}
          onMouseLeave={scheduleClose}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: "100%",
            zIndex: 90,
            background: "#ffffff",
            borderTop: "1px solid rgba(14, 122, 95, 0.12)",
            borderBottom: "1px solid rgba(14, 122, 95, 0.16)",
            boxShadow: "0 32px 70px -15px rgba(2, 25, 36, 0.18), 0 12px 24px -6px rgba(2, 25, 36, 0.08)",
          }}
        >
          {/* Safe Triangle Invisible Area */}
          <div
            style={{
              position: "absolute",
              top: -24,
              left: 0,
              right: 0,
              height: 26,
              background: "transparent",
              pointerEvents: "auto",
            }}
          />

          <div
            style={{
              maxWidth: 1400,
              margin: "0 auto",
              padding: "36px clamp(24px, 4vw, 48px) 38px",
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 28,
            }}
          >
            {RESOURCES_CARDS.map((c) => (
              <a
                key={c.href}
                href={c.href}
                style={{
                  padding: 24,
                  borderRadius: 16,
                  display: "grid",
                  gap: 8,
                  textDecoration: "none",
                  color: "inherit",
                  background: "#f8fbf9",
                  border: "1px solid rgba(14, 122, 95, 0.14)",
                  boxShadow: "0 6px 18px rgba(2, 25, 36, 0.03)",
                  transition: "border-color 0.25s, transform 0.25s, background 0.25s, box-shadow 0.25s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#0e7a5f";
                  e.currentTarget.style.background = "#ffffff";
                  e.currentTarget.style.boxShadow = "0 12px 28px rgba(14, 122, 95, 0.12)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(14, 122, 95, 0.14)";
                  e.currentTarget.style.background = "#f8fbf9";
                  e.currentTarget.style.boxShadow = "0 6px 18px rgba(2, 25, 36, 0.03)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <b
                  style={{
                    fontFamily: '"Instrument Serif", Georgia, serif',
                    fontWeight: 400,
                    fontSize: 22,
                    color: "#021924",
                  }}
                >
                  {c.label}
                </b>
                <span style={{ color: "#456372", fontSize: 13.5, lineHeight: 1.6 }}>
                  {c.href === "blog"
                    ? "Technical insights and playbooks on software, AI, QA, hiring and engineering training."
                    : c.href === "case-studies"
                    ? "Proven client outcomes across enterprise delivery, GCC setups and corporate upskilling."
                    : "Answers on SLAs, contract terms, IP ownership, rates, hiring timelines and curriculums."}
                </span>
              </a>
            ))}
          </div>

          <div
            style={{
              borderTop: "1px solid rgba(14, 122, 95, 0.1)",
              background: "#f4f8f6",
            }}
          >
            <div
              style={{
                maxWidth: 1400,
                margin: "0 auto",
                padding: "12px clamp(24px, 4vw, 48px)",
                display: "flex",
                justifyContent: "space-between",
                gap: 16,
                flexWrap: "wrap",
                fontSize: 13,
                color: "#456372",
              }}
            >
              <span>Guides, case studies and answers from our engineers, recruiters and trainers.</span>
              <a href="resources" style={{ color: "#0e7a5f", fontWeight: 700, textDecoration: "none" }}>
                All resources →
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 1080px) {
          .nav-links { display: none !important; }
          .hamburger-btn { display: inline-flex !important; }
        }
        @media (max-width: 640px) {
          .nav-cta { display: none !important; }
          .site-header { padding: 0 16px !important; }
        }
      `}</style>
    </header>
  );
}
