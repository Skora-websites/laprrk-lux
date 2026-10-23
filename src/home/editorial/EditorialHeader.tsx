import { useState, useEffect, useRef } from "react";
import { MEGA, RESOURCES_CARDS } from "../../lib/nav-data";

export function EditorialHeader({ activePath }: { activePath?: string } = {}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);
  const [pathname, setPathname] = useState("");
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPathname(window.location.pathname);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    }
  }, [mobileMenuOpen]);

  // Close on Escape or click outside
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenDropdown(null);
        setMobileMenuOpen(false);
      }
    };
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".editorial-header")) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClickOutside);
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
      setOpenDropdown(null);
    }, 240); // 240ms hover grace period for diagonal cursor movement
  };

  const handleOpenDropdown = (id: string) => {
    clearCloseTimer();
    setOpenDropdown(id);
  };

  const current = (activePath || pathname || "/").toLowerCase();
  const isHome = current === "/" || current.endsWith("/index.html") || current === "";
  const isAbout = current.includes("about") || current.includes("faq") || current.includes("case");
  const isServices = current.includes("service") || current.includes("software") || current.includes("cloud") || current.includes("ai") || current.includes("devops") || current.includes("qa");
  const isTalent = current.includes("talent") || current.includes("hiring") || current.includes("recruitment") || current.includes("staffing") || current.includes("gcc");
  const isTraining = current.includes("training") || current.includes("learning") || current.includes("course") || current.includes("nep") || current.includes("bootcamp");
  const isContact = current.includes("contact");

  const itMega = MEGA.find((m) => m.id === "mega-it");
  const hiringMega = MEGA.find((m) => m.id === "mega-hiring");
  const trainingMega = MEGA.find((m) => m.id === "mega-training");

  return (
    <header
      className={`editorial-header ${isScrolled || openDropdown ? "is-scrolled" : ""}`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: openDropdown ? "#FFFFFF" : isScrolled ? "rgba(244, 241, 235, 0.98)" : "#F4F1EB",
        borderBottom: openDropdown || isScrolled ? "1px solid rgba(32, 45, 58, 0.12)" : "1px solid rgba(32, 45, 58, 0.05)",
        backdropFilter: isScrolled ? "blur(16px)" : "none",
        transition: "background-color 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease",
        boxShadow: openDropdown ? "0 12px 36px rgba(32, 45, 58, 0.08)" : isScrolled ? "0 4px 20px rgba(32, 45, 58, 0.04)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          padding: "0 clamp(20px, 4.5vw, 48px)",
          height: 80,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        {/* Brand Treatment (Matches Reference Image) */}
        <a
          href="/"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: 12,
            color: "#202D3A",
          }}
          aria-label="Laprrk Technology Solutions"
        >
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: 6,
              backgroundColor: "#202D3A",
              color: "#F0EEE7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Space Grotesk, sans-serif",
              fontWeight: 700,
              fontSize: 16,
              letterSpacing: "0.05em",
            }}
          >
            L
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 700,
                fontSize: "1.1rem",
                letterSpacing: "0.08em",
                color: "#202D3A",
                lineHeight: 1.1,
              }}
            >
              LAPRRK
            </span>
            <span
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: "0.65rem",
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#646D75",
              }}
            >
              Technology Solutions
            </span>
          </div>
        </a>

        {/* Center Desktop Navigation Links with Dropdown Triggers */}
        <nav
          aria-label="Primary"
          className="desktop-nav"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 28,
            height: "100%",
          }}
        >
          {/* 1. Home */}
          <a
            href="/"
            style={{
              fontFamily: "Manrope, sans-serif",
              fontSize: "0.875rem",
              fontWeight: isHome ? 700 : 500,
              color: "#202D3A",
              textDecoration: "none",
              padding: "28px 0",
              borderBottom: isHome ? "2px solid #202D3A" : "2px solid transparent",
              transition: "border-color 0.2s ease, color 0.2s ease",
            }}
          >
            Home
          </a>

          {/* 2. About Dropdown */}
          <div
            style={{ position: "relative", height: "100%", display: "flex", alignItems: "center" }}
            onMouseEnter={() => handleOpenDropdown("about")}
            onMouseLeave={scheduleClose}
          >
            <button
              type="button"
              onClick={() => setOpenDropdown(openDropdown === "about" ? null : "about")}
              aria-expanded={openDropdown === "about"}
              style={{
                background: "transparent",
                border: "none",
                fontFamily: "Manrope, sans-serif",
                fontSize: "0.875rem",
                fontWeight: isAbout ? 700 : 500,
                color: "#202D3A",
                cursor: "pointer",
                padding: "28px 0",
                display: "inline-flex",
                alignItems: "center",
                gap: 5,
                borderBottom: isAbout ? "2px solid #202D3A" : "2px solid transparent",
              }}
            >
              <span>About</span>
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                style={{
                  transform: openDropdown === "about" ? "rotate(180deg)" : "none",
                  transition: "transform 0.2s ease",
                  opacity: 0.7,
                }}
              >
                <path d="M1 1L5 5L9 1" />
              </svg>
            </button>
          </div>

          {/* 3. Services Mega-Menu Trigger */}
          <div
            style={{ position: "relative", height: "100%", display: "flex", alignItems: "center" }}
            onMouseEnter={() => handleOpenDropdown("services")}
            onMouseLeave={scheduleClose}
          >
            <button
              type="button"
              onClick={() => setOpenDropdown(openDropdown === "services" ? null : "services")}
              aria-expanded={openDropdown === "services"}
              style={{
                background: "transparent",
                border: "none",
                fontFamily: "Manrope, sans-serif",
                fontSize: "0.875rem",
                fontWeight: isServices ? 700 : 500,
                color: "#202D3A",
                cursor: "pointer",
                padding: "28px 0",
                display: "inline-flex",
                alignItems: "center",
                gap: 5,
                borderBottom: isServices ? "2px solid #202D3A" : "2px solid transparent",
              }}
            >
              <span>Services</span>
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                style={{
                  transform: openDropdown === "services" ? "rotate(180deg)" : "none",
                  transition: "transform 0.2s ease",
                  opacity: 0.7,
                }}
              >
                <path d="M1 1L5 5L9 1" />
              </svg>
            </button>
          </div>

          {/* 4. Talent Solutions Mega-Menu Trigger */}
          <div
            style={{ position: "relative", height: "100%", display: "flex", alignItems: "center" }}
            onMouseEnter={() => handleOpenDropdown("talent")}
            onMouseLeave={scheduleClose}
          >
            <button
              type="button"
              onClick={() => setOpenDropdown(openDropdown === "talent" ? null : "talent")}
              aria-expanded={openDropdown === "talent"}
              style={{
                background: "transparent",
                border: "none",
                fontFamily: "Manrope, sans-serif",
                fontSize: "0.875rem",
                fontWeight: isTalent ? 700 : 500,
                color: "#202D3A",
                cursor: "pointer",
                padding: "28px 0",
                display: "inline-flex",
                alignItems: "center",
                gap: 5,
                borderBottom: isTalent ? "2px solid #202D3A" : "2px solid transparent",
              }}
            >
              <span>Talent Solutions</span>
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                style={{
                  transform: openDropdown === "talent" ? "rotate(180deg)" : "none",
                  transition: "transform 0.2s ease",
                  opacity: 0.7,
                }}
              >
                <path d="M1 1L5 5L9 1" />
              </svg>
            </button>
          </div>

          {/* 5. Training Mega-Menu Trigger */}
          <div
            style={{ position: "relative", height: "100%", display: "flex", alignItems: "center" }}
            onMouseEnter={() => handleOpenDropdown("training")}
            onMouseLeave={scheduleClose}
          >
            <button
              type="button"
              onClick={() => setOpenDropdown(openDropdown === "training" ? null : "training")}
              aria-expanded={openDropdown === "training"}
              style={{
                background: "transparent",
                border: "none",
                fontFamily: "Manrope, sans-serif",
                fontSize: "0.875rem",
                fontWeight: isTraining ? 700 : 500,
                color: "#202D3A",
                cursor: "pointer",
                padding: "28px 0",
                display: "inline-flex",
                alignItems: "center",
                gap: 5,
                borderBottom: isTraining ? "2px solid #202D3A" : "2px solid transparent",
              }}
            >
              <span>Training</span>
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                style={{
                  transform: openDropdown === "training" ? "rotate(180deg)" : "none",
                  transition: "transform 0.2s ease",
                  opacity: 0.7,
                }}
              >
                <path d="M1 1L5 5L9 1" />
              </svg>
            </button>
          </div>

          {/* 6. Contact Link */}
          <a
            href="/contact"
            style={{
              fontFamily: "Manrope, sans-serif",
              fontSize: "0.875rem",
              fontWeight: isContact ? 700 : 500,
              color: "#202D3A",
              textDecoration: "none",
              padding: "28px 0",
              borderBottom: isContact ? "2px solid #202D3A" : "2px solid transparent",
              transition: "border-color 0.2s ease, color 0.2s ease",
            }}
          >
            Contact
          </a>
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <a
            href="/contact"
            className="btn-editorial-primary desktop-cta"
            style={{
              padding: "11px 22px",
              fontSize: "0.875rem",
              borderRadius: 6,
              backgroundColor: "#202D3A",
              color: "#FFFFFF",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              textDecoration: "none",
              fontWeight: 600,
              boxShadow: "0 4px 14px rgba(32, 45, 58, 0.15)",
              transition: "transform 0.2s ease, background-color 0.2s ease",
            }}
          >
            <span>Discuss Requirements</span>
            <span aria-hidden="true">→</span>
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="mobile-toggle"
            style={{
              background: "transparent",
              border: "1px solid rgba(32, 45, 58, 0.16)",
              borderRadius: 6,
              padding: 8,
              cursor: "pointer",
              display: "none",
              alignItems: "center",
              justifyContent: "center",
              color: "#202D3A",
            }}
          >
            {mobileMenuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* =========================================================================
          DESKTOP MEGA DROPDOWNS (ALL SUBPAGES EXPOSED)
          ========================================================================= */}

      {/* Backdrop blur veil when dropdown is active */}
      {openDropdown && (
        <div
          onClick={() => setOpenDropdown(null)}
          aria-hidden="true"
          style={{
            position: "fixed",
            inset: 0,
            top: 80,
            backgroundColor: "rgba(32, 45, 58, 0.25)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
            zIndex: 90,
          }}
        />
      )}

      {/* 1. SERVICES MEGA-MENU (All 17 IT Services Subpages) */}
      {openDropdown === "services" && itMega && (
        <div
          className="editorial-mega-panel"
          onMouseEnter={clearCloseTimer}
          onMouseLeave={scheduleClose}
          style={{
            position: "absolute",
            top: 80,
            left: 0,
            right: 0,
            backgroundColor: "#FFFFFF",
            borderBottom: "1px solid rgba(32, 45, 58, 0.12)",
            boxShadow: "0 28px 64px -12px rgba(32, 45, 58, 0.18)",
            zIndex: 95,
          }}
        >
          {/* Safe invisible hover bridge */}
          <div style={{ position: "absolute", top: -15, left: 0, right: 0, height: 16 }} />

          <div
            style={{
              maxWidth: 1400,
              margin: "0 auto",
              padding: "36px clamp(20px, 4.5vw, 48px) 32px",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr) 280px",
                gap: 28,
              }}
            >
              {itMega.cols.map((col) => (
                <div key={col.title}>
                  <h4
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#5D7A9E",
                      margin: "0 0 14px 0",
                      paddingBottom: 8,
                      borderBottom: "1px solid rgba(32, 45, 58, 0.08)",
                    }}
                  >
                    {col.title}
                  </h4>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                    {col.links.map((link) => (
                      <li key={link.href}>
                        <a
                          href={`/${link.href}`}
                          onClick={() => setOpenDropdown(null)}
                          className="mega-subpage-link"
                          style={{
                            fontFamily: "Manrope, sans-serif",
                            fontSize: "0.875rem",
                            color: "#202D3A",
                            textDecoration: "none",
                            display: "block",
                            padding: "4px 0",
                            transition: "color 0.18s ease, transform 0.18s ease",
                          }}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Featured Services Box */}
              <div
                style={{
                  backgroundColor: "#F4F1EB",
                  border: "1px solid rgba(32, 45, 58, 0.12)",
                  borderRadius: 8,
                  padding: "24px 20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <span
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      color: "#1F4E45",
                      textTransform: "uppercase",
                      display: "block",
                      marginBottom: 8,
                    }}
                  >
                    FEATURED // PRODUCTION
                  </span>
                  <h5 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.05rem", fontWeight: 700, color: "#202D3A", margin: "0 0 8px 0" }}>
                    Agentic AI &amp; Cloud Modernisation
                  </h5>
                  <p style={{ fontFamily: "Manrope, sans-serif", fontSize: "0.8125rem", color: "#646D75", lineHeight: 1.55, margin: 0 }}>
                    Deterministic MCP protocols, vector search pipelines, and multi-cloud infrastructure built for 2-week deliverable sprints.
                  </p>
                </div>

                <div style={{ marginTop: 20 }}>
                  <a
                    href="/it-services.html"
                    onClick={() => setOpenDropdown(null)}
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      fontSize: "0.8125rem",
                      fontWeight: 700,
                      color: "#202D3A",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <span>View all 17 IT Services</span>
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div
              style={{
                marginTop: 24,
                paddingTop: 16,
                borderTop: "1px solid rgba(32, 45, 58, 0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: "0.8125rem",
                color: "#646D75",
              }}
            >
              <span>Disciplined two-week agile sprint cadences · 100% Client-Owned IP from Day One</span>
              <a href="/it-services.html" onClick={() => setOpenDropdown(null)} style={{ color: "#5D7A9E", textDecoration: "none", fontWeight: 600 }}>
                Explore full IT services catalogue →
              </a>
            </div>
          </div>
        </div>
      )}

      {/* 2. TALENT SOLUTIONS MEGA-MENU (All Hiring Models + Roles We Recruit) */}
      {openDropdown === "talent" && hiringMega && (
        <div
          className="editorial-mega-panel"
          onMouseEnter={clearCloseTimer}
          onMouseLeave={scheduleClose}
          style={{
            position: "absolute",
            top: 80,
            left: 0,
            right: 0,
            backgroundColor: "#FFFFFF",
            borderBottom: "1px solid rgba(32, 45, 58, 0.12)",
            boxShadow: "0 28px 64px -12px rgba(32, 45, 58, 0.18)",
            zIndex: 95,
          }}
        >
          <div style={{ position: "absolute", top: -15, left: 0, right: 0, height: 16 }} />

          <div
            style={{
              maxWidth: 1400,
              margin: "0 auto",
              padding: "36px clamp(20px, 4.5vw, 48px) 32px",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1.4fr 1.4fr 300px",
                gap: 36,
              }}
            >
              {/* Col 1: Hiring Models */}
              <div>
                <h4
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#5D7A9E",
                    margin: "0 0 14px 0",
                    paddingBottom: 8,
                    borderBottom: "1px solid rgba(32, 45, 58, 0.08)",
                  }}
                >
                  Hiring Models &amp; Solutions
                </h4>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 24px" }}>
                  {hiringMega.cols[0].links.map((link) => (
                    <a
                      key={link.href}
                      href={`/${link.href}`}
                      onClick={() => setOpenDropdown(null)}
                      className="mega-subpage-link"
                      style={{
                        fontFamily: "Manrope, sans-serif",
                        fontSize: "0.875rem",
                        color: "#202D3A",
                        textDecoration: "none",
                        padding: "4px 0",
                        transition: "color 0.18s ease, transform 0.18s ease",
                      }}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Col 2: Roles We Recruit */}
              <div>
                <h4
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#5D7A9E",
                    margin: "0 0 14px 0",
                    paddingBottom: 8,
                    borderBottom: "1px solid rgba(32, 45, 58, 0.08)",
                  }}
                >
                  Technologies &amp; Roles We Recruit
                </h4>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 24px" }}>
                  {hiringMega.cols[1].links.map((link) => (
                    <a
                      key={link.href}
                      href={`/${link.href}`}
                      onClick={() => setOpenDropdown(null)}
                      className="mega-subpage-link"
                      style={{
                        fontFamily: "Manrope, sans-serif",
                        fontSize: "0.875rem",
                        color: "#202D3A",
                        textDecoration: "none",
                        padding: "4px 0",
                        transition: "color 0.18s ease, transform 0.18s ease",
                      }}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Col 3: Featured GCC Card */}
              <div
                style={{
                  backgroundColor: "#F4F1EB",
                  border: "1px solid rgba(32, 45, 58, 0.12)",
                  borderRadius: 8,
                  padding: "24px 20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <span
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      color: "#1F4E45",
                      textTransform: "uppercase",
                      display: "block",
                      marginBottom: 8,
                    }}
                  >
                    VETTED SHORTLIST // 5-7 DAYS
                  </span>
                  <h5 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.05rem", fontWeight: 700, color: "#202D3A", margin: "0 0 8px 0" }}>
                    Turnkey India GCC &amp; Dedicated Hubs
                  </h5>
                  <p style={{ fontFamily: "Manrope, sans-serif", fontSize: "0.8125rem", color: "#646D75", lineHeight: 1.55, margin: 0 }}>
                    Active software engineers screen every candidate. 88% join ratio with zero placement fee until candidate successfully begins.
                  </p>
                </div>

                <div style={{ marginTop: 20 }}>
                  <a
                    href="/hiring-consultation.html"
                    onClick={() => setOpenDropdown(null)}
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      fontSize: "0.8125rem",
                      fontWeight: 700,
                      color: "#202D3A",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <span>Consult on hiring requirements</span>
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>

            <div
              style={{
                marginTop: 24,
                paddingTop: 16,
                borderTop: "1px solid rgba(32, 45, 58, 0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: "0.8125rem",
                color: "#646D75",
              }}
            >
              <span>Code-level technical screening by senior practitioners · Permanent, C2H, and Dedicated Teams</span>
              <a href="/hiring-services.html" onClick={() => setOpenDropdown(null)} style={{ color: "#5D7A9E", textDecoration: "none", fontWeight: 600 }}>
                Explore all talent solutions →
              </a>
            </div>
          </div>
        </div>
      )}

      {/* 3. TRAINING MEGA-MENU (Corporate Tracks + Institute Programmes) */}
      {openDropdown === "training" && trainingMega && (
        <div
          className="editorial-mega-panel"
          onMouseEnter={clearCloseTimer}
          onMouseLeave={scheduleClose}
          style={{
            position: "absolute",
            top: 80,
            left: 0,
            right: 0,
            backgroundColor: "#FFFFFF",
            borderBottom: "1px solid rgba(32, 45, 58, 0.12)",
            boxShadow: "0 28px 64px -12px rgba(32, 45, 58, 0.18)",
            zIndex: 95,
          }}
        >
          <div style={{ position: "absolute", top: -15, left: 0, right: 0, height: 16 }} />

          <div
            style={{
              maxWidth: 1400,
              margin: "0 auto",
              padding: "36px clamp(20px, 4.5vw, 48px) 32px",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1.4fr 1.4fr 300px",
                gap: 36,
              }}
            >
              {/* Col 1: For IT Corporates */}
              <div>
                <h4
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#5D7A9E",
                    margin: "0 0 14px 0",
                    paddingBottom: 8,
                    borderBottom: "1px solid rgba(32, 45, 58, 0.08)",
                  }}
                >
                  Corporate Upskilling &amp; Labs
                </h4>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 24px" }}>
                  {trainingMega.cols[0].links.map((link) => (
                    <a
                      key={link.href}
                      href={`/${link.href}`}
                      onClick={() => setOpenDropdown(null)}
                      className="mega-subpage-link"
                      style={{
                        fontFamily: "Manrope, sans-serif",
                        fontSize: "0.875rem",
                        color: "#202D3A",
                        textDecoration: "none",
                        padding: "4px 0",
                        transition: "color 0.18s ease, transform 0.18s ease",
                      }}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Col 2: For Institutes */}
              <div>
                <h4
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#5D7A9E",
                    margin: "0 0 14px 0",
                    paddingBottom: 8,
                    borderBottom: "1px solid rgba(32, 45, 58, 0.08)",
                  }}
                >
                  Higher Education &amp; NEP 2020
                </h4>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 24px" }}>
                  {trainingMega.cols[1].links.map((link) => (
                    <a
                      key={link.href}
                      href={`/${link.href}`}
                      onClick={() => setOpenDropdown(null)}
                      className="mega-subpage-link"
                      style={{
                        fontFamily: "Manrope, sans-serif",
                        fontSize: "0.875rem",
                        color: "#202D3A",
                        textDecoration: "none",
                        padding: "4px 0",
                        transition: "color 0.18s ease, transform 0.18s ease",
                      }}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Col 3: Featured Training Card */}
              <div
                style={{
                  backgroundColor: "#F4F1EB",
                  border: "1px solid rgba(32, 45, 58, 0.12)",
                  borderRadius: 8,
                  padding: "24px 20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <span
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      color: "#1F4E45",
                      textTransform: "uppercase",
                      display: "block",
                      marginBottom: 8,
                    }}
                  >
                    HANDS-ON // ~70% LAB TIME
                  </span>
                  <h5 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.05rem", fontWeight: 700, color: "#202D3A", margin: "0 0 8px 0" }}>
                    NEP 2020 Industry Minors &amp; FDPs
                  </h5>
                  <p style={{ fontFamily: "Manrope, sans-serif", fontSize: "0.8125rem", color: "#646D75", lineHeight: 1.55, margin: 0 }}>
                    Credit-mapped courses in AI, Cloud, and Data for engineering colleges, plus corporate workforce capability programmes.
                  </p>
                </div>

                <div style={{ marginTop: 20 }}>
                  <a
                    href="/corporate-training.html"
                    onClick={() => setOpenDropdown(null)}
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      fontSize: "0.8125rem",
                      fontWeight: 700,
                      color: "#202D3A",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <span>View all corporate learning tracks</span>
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>

            <div
              style={{
                marginTop: 24,
                paddingTop: 16,
                borderTop: "1px solid rgba(32, 45, 58, 0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: "0.8125rem",
                color: "#646D75",
              }}
            >
              <span>18 corporate tracks · 10 institute programmes · Pre- and post-competency assessments</span>
              <a href="/corporate-training.html" onClick={() => setOpenDropdown(null)} style={{ color: "#5D7A9E", textDecoration: "none", fontWeight: 600 }}>
                Explore full training catalogue →
              </a>
            </div>
          </div>
        </div>
      )}

      {/* 4. ABOUT / COMPANY DROPDOWN */}
      {openDropdown === "about" && (
        <div
          className="editorial-mega-panel"
          onMouseEnter={clearCloseTimer}
          onMouseLeave={scheduleClose}
          style={{
            position: "absolute",
            top: 80,
            left: 0,
            right: 0,
            backgroundColor: "#FFFFFF",
            borderBottom: "1px solid rgba(32, 45, 58, 0.12)",
            boxShadow: "0 28px 64px -12px rgba(32, 45, 58, 0.18)",
            zIndex: 95,
          }}
        >
          <div style={{ position: "absolute", top: -15, left: 0, right: 0, height: 16 }} />

          <div
            style={{
              maxWidth: 1000,
              margin: "0 auto",
              padding: "32px clamp(20px, 4.5vw, 48px) 28px",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: 32,
              }}
            >
              <div>
                <h4
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#5D7A9E",
                    margin: "0 0 12px 0",
                    paddingBottom: 6,
                    borderBottom: "1px solid rgba(32, 45, 58, 0.08)",
                  }}
                >
                  Company &amp; Philosophy
                </h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                  <li>
                    <a href="/about.html" onClick={() => setOpenDropdown(null)} className="mega-subpage-link" style={{ fontFamily: "Manrope, sans-serif", fontSize: "0.875rem", color: "#202D3A", textDecoration: "none", display: "block" }}>
                      About Laprrk Technology
                    </a>
                  </li>
                  <li>
                    <a href="/about.html" onClick={() => setOpenDropdown(null)} className="mega-subpage-link" style={{ fontFamily: "Manrope, sans-serif", fontSize: "0.875rem", color: "#202D3A", textDecoration: "none", display: "block" }}>
                      Operating Thesis &amp; Philosophy
                    </a>
                  </li>
                  <li>
                    <a href="/it-services.html" onClick={() => setOpenDropdown(null)} className="mega-subpage-link" style={{ fontFamily: "Manrope, sans-serif", fontSize: "0.875rem", color: "#202D3A", textDecoration: "none", display: "block" }}>
                      Technology Solutions
                    </a>
                  </li>
                  <li>
                    <a href="/resources.html" onClick={() => setOpenDropdown(null)} className="mega-subpage-link" style={{ fontFamily: "Manrope, sans-serif", fontSize: "0.875rem", color: "#202D3A", textDecoration: "none", display: "block" }}>
                      How We Work (Timeline)
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#5D7A9E",
                    margin: "0 0 12px 0",
                    paddingBottom: 6,
                    borderBottom: "1px solid rgba(32, 45, 58, 0.08)",
                  }}
                >
                  Work &amp; Insights
                </h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                  <li>
                    <a href="/it-services.html#cases" onClick={() => setOpenDropdown(null)} className="mega-subpage-link" style={{ fontFamily: "Manrope, sans-serif", fontSize: "0.875rem", color: "#202D3A", textDecoration: "none", display: "block" }}>
                      Featured Case Studies
                    </a>
                  </li>
                  <li>
                    <a href="/faq.html" onClick={() => setOpenDropdown(null)} className="mega-subpage-link" style={{ fontFamily: "Manrope, sans-serif", fontSize: "0.875rem", color: "#202D3A", textDecoration: "none", display: "block" }}>
                      Frequently Asked Questions
                    </a>
                  </li>
                  <li>
                    <a href="/contact" onClick={() => setOpenDropdown(null)} className="mega-subpage-link" style={{ fontFamily: "Manrope, sans-serif", fontSize: "0.875rem", color: "#202D3A", textDecoration: "none", display: "block" }}>
                      Global Office Locations
                    </a>
                  </li>
                </ul>
              </div>

              <div
                style={{
                  backgroundColor: "#F4F1EB",
                  border: "1px solid rgba(32, 45, 58, 0.12)",
                  borderRadius: 8,
                  padding: "20px 18px",
                }}
              >
                <span style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "0.6875rem", fontWeight: 700, color: "#1F4E45", textTransform: "uppercase", display: "block", marginBottom: 6 }}>
                  DIRECT REACH
                </span>
                <h5 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "0.95rem", fontWeight: 700, color: "#202D3A", margin: "0 0 8px 0" }}>
                  Schedule Technical Scoping
                </h5>
                <p style={{ fontFamily: "Manrope, sans-serif", fontSize: "0.8125rem", color: "#646D75", lineHeight: 1.5, margin: "0 0 14px 0" }}>
                  Speak directly with a solutions architect or talent partner within 24 hours.
                </p>
                <a
                  href="/contact"
                  onClick={() => setOpenDropdown(null)}
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontSize: "0.8125rem",
                    fontWeight: 700,
                    color: "#202D3A",
                    textDecoration: "none",
                  }}
                >
                  Contact our team →
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          MOBILE DRAWER (FULL ACCORDION NAVIGATION OF ALL SUBPAGES)
          ========================================================================= */}
      {mobileMenuOpen && (
        <div
          className="editorial-mobile-drawer"
          style={{
            position: "fixed",
            inset: "80px 0 0 0",
            backgroundColor: "#F4F1EB",
            zIndex: 99,
            display: "flex",
            flexDirection: "column",
            padding: "24px clamp(20px, 4vw, 36px) 40px",
            overflowY: "auto",
            borderTop: "1px solid rgba(32, 45, 58, 0.1)",
          }}
        >
          <nav aria-label="Mobile Navigation" style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
            <a
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "1.35rem",
                fontWeight: 700,
                color: "#202D3A",
                textDecoration: "none",
                padding: "10px 0",
                borderBottom: "1px solid rgba(32, 45, 58, 0.08)",
              }}
            >
              Home
            </a>

            {/* Accordion: Services */}
            <div>
              <button
                type="button"
                onClick={() => setMobileExpandedSection(mobileExpandedSection === "services" ? null : "services")}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  background: "transparent",
                  border: "none",
                  padding: "12px 0",
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: "1.35rem",
                  fontWeight: 700,
                  color: "#202D3A",
                  cursor: "pointer",
                  borderBottom: "1px solid rgba(32, 45, 58, 0.08)",
                }}
              >
                <span>Services ({itMega?.cols.reduce((acc, c) => acc + c.links.length, 0)})</span>
                <span style={{ fontSize: "1.2rem", color: "#5D7A9E" }}>{mobileExpandedSection === "services" ? "−" : "+"}</span>
              </button>
              {mobileExpandedSection === "services" && itMega && (
                <div style={{ padding: "12px 0 16px 14px", display: "flex", flexDirection: "column", gap: 8 }}>
                  {itMega.cols.flatMap((c) => c.links).map((l) => (
                    <a
                      key={l.href}
                      href={`/${l.href}`}
                      onClick={() => setMobileMenuOpen(false)}
                      style={{
                        fontFamily: "Manrope, sans-serif",
                        fontSize: "0.9375rem",
                        color: "#4A5568",
                        textDecoration: "none",
                        padding: "4px 0",
                      }}
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Accordion: Talent Solutions */}
            <div>
              <button
                type="button"
                onClick={() => setMobileExpandedSection(mobileExpandedSection === "talent" ? null : "talent")}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  background: "transparent",
                  border: "none",
                  padding: "12px 0",
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: "1.35rem",
                  fontWeight: 700,
                  color: "#202D3A",
                  cursor: "pointer",
                  borderBottom: "1px solid rgba(32, 45, 58, 0.08)",
                }}
              >
                <span>Talent Solutions ({hiringMega?.cols.reduce((acc, c) => acc + c.links.length, 0)})</span>
                <span style={{ fontSize: "1.2rem", color: "#5D7A9E" }}>{mobileExpandedSection === "talent" ? "−" : "+"}</span>
              </button>
              {mobileExpandedSection === "talent" && hiringMega && (
                <div style={{ padding: "12px 0 16px 14px", display: "flex", flexDirection: "column", gap: 8 }}>
                  {hiringMega.cols.flatMap((c) => c.links).map((l) => (
                    <a
                      key={l.href}
                      href={`/${l.href}`}
                      onClick={() => setMobileMenuOpen(false)}
                      style={{
                        fontFamily: "Manrope, sans-serif",
                        fontSize: "0.9375rem",
                        color: "#4A5568",
                        textDecoration: "none",
                        padding: "4px 0",
                      }}
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Accordion: Training */}
            <div>
              <button
                type="button"
                onClick={() => setMobileExpandedSection(mobileExpandedSection === "training" ? null : "training")}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  background: "transparent",
                  border: "none",
                  padding: "12px 0",
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: "1.35rem",
                  fontWeight: 700,
                  color: "#202D3A",
                  cursor: "pointer",
                  borderBottom: "1px solid rgba(32, 45, 58, 0.08)",
                }}
              >
                <span>Training ({trainingMega?.cols.reduce((acc, c) => acc + c.links.length, 0)})</span>
                <span style={{ fontSize: "1.2rem", color: "#5D7A9E" }}>{mobileExpandedSection === "training" ? "−" : "+"}</span>
              </button>
              {mobileExpandedSection === "training" && trainingMega && (
                <div style={{ padding: "12px 0 16px 14px", display: "flex", flexDirection: "column", gap: 8 }}>
                  {trainingMega.cols.flatMap((c) => c.links).map((l) => (
                    <a
                      key={l.href}
                      href={`/${l.href}`}
                      onClick={() => setMobileMenuOpen(false)}
                      style={{
                        fontFamily: "Manrope, sans-serif",
                        fontSize: "0.9375rem",
                        color: "#4A5568",
                        textDecoration: "none",
                        padding: "4px 0",
                      }}
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Accordion: About & Company */}
            <div>
              <button
                type="button"
                onClick={() => setMobileExpandedSection(mobileExpandedSection === "about" ? null : "about")}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  background: "transparent",
                  border: "none",
                  padding: "12px 0",
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: "1.35rem",
                  fontWeight: 700,
                  color: "#202D3A",
                  cursor: "pointer",
                  borderBottom: "1px solid rgba(32, 45, 58, 0.08)",
                }}
              >
                <span>About &amp; Company</span>
                <span style={{ fontSize: "1.2rem", color: "#5D7A9E" }}>{mobileExpandedSection === "about" ? "−" : "+"}</span>
              </button>
              {mobileExpandedSection === "about" && (
                <div style={{ padding: "12px 0 16px 14px", display: "flex", flexDirection: "column", gap: 8 }}>
                  <a href="/about.html" onClick={() => setMobileMenuOpen(false)} style={{ fontFamily: "Manrope, sans-serif", fontSize: "0.9375rem", color: "#4A5568", textDecoration: "none", padding: "4px 0" }}>
                    About Laprrk
                  </a>
                  <a href="/resources.html" onClick={() => setMobileMenuOpen(false)} style={{ fontFamily: "Manrope, sans-serif", fontSize: "0.9375rem", color: "#4A5568", textDecoration: "none", padding: "4px 0" }}>
                    How We Work &amp; Resources
                  </a>
                  <a href="/faq.html" onClick={() => setMobileMenuOpen(false)} style={{ fontFamily: "Manrope, sans-serif", fontSize: "0.9375rem", color: "#4A5568", textDecoration: "none", padding: "4px 0" }}>
                    Frequently Asked Questions
                  </a>
                  <a href="/contact" onClick={() => setMobileMenuOpen(false)} style={{ fontFamily: "Manrope, sans-serif", fontSize: "0.9375rem", color: "#4A5568", textDecoration: "none", padding: "4px 0" }}>
                    Global Locations &amp; Reach
                  </a>
                </div>
              )}
            </div>

            <a
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "1.35rem",
                fontWeight: 700,
                color: "#202D3A",
                textDecoration: "none",
                padding: "10px 0",
                borderBottom: "1px solid rgba(32, 45, 58, 0.08)",
              }}
            >
              Contact
            </a>
          </nav>

          <a
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-editorial-primary"
            style={{ width: "100%", textAlign: "center", marginBottom: 24, padding: "14px", borderRadius: 6 }}
          >
            Discuss Requirements →
          </a>
        </div>
      )}

      {/* Global CSS for desktop/mobile responsive nav toggle and link hover effects */}
      <style>{`
        .mega-subpage-link:hover {
          color: #5D7A9E !important;
          transform: translateX(4px);
        }
        @media (min-width: 960px) {
          .desktop-nav { display: flex !important; }
          .desktop-cta { display: inline-flex !important; }
          .mobile-toggle { display: none !important; }
        }
        @media (max-width: 959px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
