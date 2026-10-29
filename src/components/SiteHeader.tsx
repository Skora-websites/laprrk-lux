import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

/* Top-level sections only. Each one opens its own short list of pages. */
const NAV = [
  {
    label: "IT Services",
    href: "/it-services",
    children: [
      { label: "All IT services", href: "/it-services" },
      { label: "Build & Product Engineering", href: "/build" },
      { label: "AI, Data & Automation", href: "/ai-data" },
      { label: "Cloud & Platforms", href: "/cloud-platforms" },
      { label: "Quality, Security & Enterprise", href: "/enterprise-quality-security" },
    ],
  },
  {
    label: "Hiring",
    href: "/hiring-consultation",
    children: [
      { label: "Hiring consultation", href: "/hiring-consultation" },
      { label: "Hiring services", href: "/hiring-services" },
      { label: "Permanent IT recruitment", href: "/permanent-it-recruitment" },
      { label: "Contract & contract-to-hire", href: "/contract-staffing" },
      { label: "Staff augmentation", href: "/staff-augmentation" },
      { label: "GCC & India team setup", href: "/gcc-hiring" },
    ],
  },
  {
    label: "Training",
    href: "/corporate-training",
    children: [
      { label: "Corporate training", href: "/corporate-training" },
      { label: "For IT corporates", href: "/training-for-it-corporates" },
      { label: "For institutes", href: "/training-for-institutes" },
      { label: "Faculty development", href: "/faculty-development-programs" },
      { label: "Student bootcamp", href: "/industry-readiness-bootcamp" },
    ],
  },
  {
    label: "Resources",
    href: "/blog",
    children: [
      { label: "Blog & insights", href: "/blog" },
      { label: "Case studies", href: "/case-studies" },
      { label: "FAQs", href: "/faq" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Brand({ color }: { color?: string }) {
  return (
    <a
      href="/"
      className="logo"
      style={{
        fontFamily: "Manrope, Arial, sans-serif",
        fontSize: "1.0625rem",
        fontWeight: 700,
        color: color || "#f0f4e9",
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        textDecoration: "none",
        display: "inline-flex",
        alignItems: "center",
        lineHeight: 1,
        transition: "color 0.25s ease",
      }}
    >LAPRRK</a>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={11}
      height={11}
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform .2s ease" }}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function SiteHeader({ onOpenDrawer }: { onOpenDrawer: () => void }) {
  const { pathname } = useLocation();
  const [openId, setOpenId] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenId(null);
    document.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("keydown", onKey);
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  // Close the menu when the route changes.
  useEffect(() => setOpenId(null), [pathname]);

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setTimeout(() => setOpenId(null), 180);
  };
  const open = (id: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenId(id);
  };

  // Always light theme - no dark mode toggle
  const light = true;
  const ink = "#021924";
  const muted = "rgba(2, 25, 36, 0.72)";
  const accent = "#0e7a5f";

  const linkStyle: React.CSSProperties = {
    fontFamily: "Manrope, Arial, sans-serif",
    fontSize: "0.6875rem",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "0.13em",
    textDecoration: "none",
    color: muted,
    background: "transparent",
    border: 0,
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "8px 0",
    transition: "color 0.2s ease, opacity 0.2s ease",
  };

  return (
    <header
      className="site-header nav-light-theme"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        zIndex: 100,
        padding: "0 clamp(20px, 4vw, 48px)",
        background: scrolled
          ? "rgba(250, 249, 245, 0.96)"
          : "rgba(250, 249, 245, 0.78)",
        borderBottom: "1px solid rgba(14, 122, 95, 0.12)",
        boxShadow: scrolled ? "0 10px 30px -22px rgba(2, 25, 36, 0.45)" : "none",
        backdropFilter: "blur(12px) saturate(140%)",
        WebkitBackdropFilter: "blur(12px) saturate(140%)",
        transition: "background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      <nav
        className="nav"
        aria-label="Primary"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
          maxWidth: 1400,
          height: 76,
          margin: "0 auto",
          position: "relative",
        }}
      >
        <Brand color={ink} />

        <div className="nav-links" style={{ display: "flex", alignItems: "center", gap: 30 }}>
          {NAV.map((item) => {
            const isOpen = openId === item.label;
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <div
                key={item.label}
                style={{ position: "relative", display: "flex", alignItems: "center", height: 76 }}
                onMouseEnter={() => item.children && open(item.label)}
                onMouseLeave={scheduleClose}
              >
                {item.children ? (
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenId(isOpen ? null : item.label)}
                    style={{ ...linkStyle, color: isOpen || active ? accent : ink }}
                  >
                    {item.label} <Chevron open={isOpen} />
                  </button>
                ) : (
                  <a
                    href={item.href}
                    style={{ ...linkStyle, color: active ? accent : ink }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = accent)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = active ? accent : ink)}
                  >
                    {item.label}
                  </a>
                )}

                {item.children && isOpen && (
                  <div
                    style={{
                      position: "absolute",
                      top: "calc(100% - 6px)",
                      left: -18,
                      minWidth: 264,
                      padding: "10px 0",
                      borderRadius: 10,
                      background: "#ffffff",
                      border: "1px solid rgba(2, 25, 36, 0.1)",
                      boxShadow: "0 24px 60px -24px rgba(2, 25, 36, 0.45)",
                      zIndex: 101,
                    }}
                  >
                    {item.children.map((child) => (
                      <a
                        key={child.href}
                        href={child.href}
                        onClick={() => setOpenId(null)}
                        style={{
                          display: "block",
                          padding: "9px 18px",
                          fontFamily: "Manrope, Arial, sans-serif",
                          fontSize: "0.8125rem",
                          fontWeight: 500,
                          lineHeight: 1.5,
                          textDecoration: "none",
                          color: "#20323c",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = accent;
                          e.currentTarget.style.background = "rgba(14, 122, 95, 0.06)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = "#20323c";
                          e.currentTarget.style.background = "transparent";
                        }}
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <a
            className="btn btn-primary nav-cta"
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              fontFamily: "Manrope, Arial, sans-serif",
              fontSize: "0.6875rem",
              fontWeight: 700,
              letterSpacing: "0.105em",
              textTransform: "uppercase",
              textDecoration: "none",
              borderRadius: 6,
              padding: "10px 18px",
              background: "#0e7a5f",
              color: "#ffffff",
              border: "1px solid #0e7a5f",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#c0ecd9",
                display: "inline-block",
              }}
            />
            Book a consultation
          </a>

          <button
            type="button"
            className="hamburger-btn"
            onClick={onOpenDrawer}
            aria-label="Open menu"
            style={{
              display: "none",
              background: "none",
              border: 0,
              color: ink,
              padding: 6,
              cursor: "pointer",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              width={24}
              height={24}
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      <style>{`
        @media (max-width: 1080px) {
          .site-header .nav-links { display: none !important; }
          .site-header .nav-cta { display: none !important; }
          .site-header .hamburger-btn { display: inline-flex !important; }
          .site-header .nav { height: 68px; }
        }
      `}</style>
    </header>
  );
}