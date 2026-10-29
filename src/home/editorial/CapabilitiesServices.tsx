import { useState } from "react";

interface PracticeData {
  id: string;
  index: string;
  title: string;
  category: string;
  summary: string;
  link: { label: string; href: string };
  tags: { label: string; href: string }[];
  imageSrc: string;
  badgeLabel: string;
  leaderLines: string[];
  outcomesTitle: string;
  outcomes: string[];
}

export function CapabilitiesServices() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [showIntegrated, setShowIntegrated] = useState<boolean>(false);

  const practices: PracticeData[] = [
    {
      id: "tech-solutions",
      index: "01",
      title: "Digital Engineering & Applied AI",
      category: "ENTERPRISE DIGITAL SYSTEMS",
      summary:
        "Mission-critical enterprise application development, agentic AI co-pilots, distributed cloud-native modernization, and autonomous test engineering. We deliver in disciplined two-week sprint cadences with demonstrable working software produced each cycle.",
      link: { label: "Explore Technology Services", href: "/it-services.html" },
      tags: [
        { label: "Custom Software", href: "/custom-software-development.html" },
        { label: "Generative AI & LLMs", href: "/generative-ai.html" },
        { label: "Agentic Automation", href: "/agentic-ai-automation.html" },
        { label: "Cloud & DevOps", href: "/cloud-services.html" },
        { label: "Data Engineering", href: "/data-engineering-analytics.html" },
        { label: "QA Automation", href: "/qa-test-automation.html" },
      ],
      imageSrc: "/assets/img/subpage-ai-systems.jpg",
      badgeLabel: "01 // DIGITAL ENGINEERING & AI",
      leaderLines: [
        "DISTRIBUTED MICROSERVICES",
        "AGENTIC AI PIPELINES",
        "CLOUD & DEVOPS AUTOMATION",
        "CONTINUOUS COMPLIANCE",
      ],
      outcomesTitle: "BUSINESS OUTCOMES",
      outcomes: ["40% Faster Time-to-Market", "99.95% Availability", "Zero Vendor Lock-in"],
    },
    {
      id: "talent-acquisition",
      index: "02",
      title: "Strategic Talent & GCC Hubs",
      category: "TALENT ACQUISITION & GCC",
      summary:
        "Practitioner-vetted engineering recruitment, dedicated squads, contract-to-hire staffing, and turnkey India Global Capability Center (GCC) establishment. Senior engineering leads conduct live code evaluations, delivering calibrated shortlists in 5 to 7 business days.",
      link: { label: "Explore Talent Solutions", href: "/hiring-consultation.html" },
      tags: [
        { label: "Permanent Hiring", href: "/permanent-it-recruitment.html" },
        { label: "Contract Staffing", href: "/contract-staffing.html" },
        { label: "Dedicated Squads", href: "/staff-augmentation.html" },
        { label: "GCC & India Setup", href: "/gcc-hiring.html" },
        { label: "Executive Search", href: "/executive-search.html" },
        { label: "16 Tech Roles", href: "/technologies-roles-we-recruit.html" },
      ],
      imageSrc: "/assets/img/subpage-talent-gcc.jpg",
      badgeLabel: "02 // TALENT & GLOBAL HUBS",
      leaderLines: [
        "SENIOR CODE ASSESSMENTS",
        "5–7 DAY SHORTLISTS",
        "DEDICATED SQUADS",
        "TURNKEY GCC ESTABLISHMENT",
      ],
      outcomesTitle: "TALENT OUTCOMES",
      outcomes: ["5–7 Day First Shortlist", "88% Offer-to-Join Ratio", "Code-Screened Candidates"],
    },
    {
      id: "corporate-learning",
      index: "03",
      title: "Corporate Learning & Academies",
      category: "WORKFORCE ENABLEMENT",
      summary:
        "Hands-on corporate AI and cloud upskilling, NEP 2020 credit-aligned university tracks, and faculty development programs. We design intensive, sandbox-based curricula with roughly 70% live lab immersion.",
      link: { label: "Explore Corporate Learning", href: "/corporate-training.html" },
      tags: [
        { label: "Enterprise AI Upskilling", href: "/generative-ai-training.html" },
        { label: "AI Literacy for Teams", href: "/ai-literacy-training.html" },
        { label: "Cloud & Kubernetes Labs", href: "/cloud-training.html" },
        { label: "NEP Credit Courses", href: "/nep-credit-courses.html" },
        { label: "Faculty Development", href: "/faculty-development-programs.html" },
      ],
      imageSrc: "/assets/img/subpage-corporate-training.jpg",
      badgeLabel: "03 // WORKFORCE ENABLEMENT",
      leaderLines: [
        "ENTERPRISE UPSKILLING",
        "~70% LIVE LAB IMMERSION",
        "UNIVERSITY ACADEMIES",
        "FACULTY DEVELOPMENT",
      ],
      outcomesTitle: "LEARNING OUTCOMES",
      outcomes: ["~70% Live Lab Immersion", "NEP 2020 Credit Aligned", "Production Toolchain Mastery"],
    },
  ];

  const current = practices[activeTab];

  return (
    <section className="capabilities-enterprise-section surface-ice-light" id="services" aria-label="Enterprise Capabilities" style={{ backgroundColor: "#F8FAFC", borderTop: "1px solid #E2E8F0" }}>
      <div className="capabilities-main-container">
        {/* SECTION HEADER */}
        <div className="capabilities-header">
          <div className="capabilities-eyebrow">
            <span className="capabilities-eyebrow-bullet" style={{ backgroundColor: "#007CC3" }} />
            <span style={{ color: "#007CC3", fontWeight: 700 }}>• ENTERPRISE CAPABILITIES</span>
          </div>

          <h2 className="capabilities-display-title" style={{ color: "#0F172A" }}>
            Capabilities engineered for<br />
            enterprise velocity and scale.
          </h2>

          <p className="capabilities-lede" style={{ color: "#475569" }}>
            Three dedicated practices designed to support organisations at every phase of technical maturity. Begin with an isolated challenge or orchestrate all three together under one unified global delivery lead.
          </p>
        </div>

        {/* 2-COLUMN INTERACTIVE CAPABILITIES LAYOUT */}
        <div className="capabilities-grid-layout">
          {/* LEFT COLUMN: 3 INTERACTIVE PRACTICE CARDS WITH VERTICAL TIMELINE */}
          <div className="capabilities-left-col">
            <div className="capabilities-timeline-spine" aria-hidden="true" style={{ backgroundColor: "rgba(0, 124, 195, 0.2)" }} />

            <div className="capabilities-cards-stack">
              {practices.map((practice, index) => {
                const isActive = activeTab === index;
                return (
                  <div
                    key={practice.id}
                    className={`capability-interactive-row ${isActive ? "is-active" : ""}`}
                    onMouseEnter={() => {
                      setActiveTab(index);
                      setShowIntegrated(false);
                    }}
                    onClick={() => {
                      setActiveTab(index);
                      setShowIntegrated(false);
                    }}
                    role="tab"
                    tabIndex={0}
                    aria-selected={isActive}
                    aria-controls={`capability-stage-${practice.id}`}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActiveTab(index);
                        setShowIntegrated(false);
                      }
                    }}
                    style={{
                      backgroundColor: isActive ? "#FFFFFF" : "rgba(255, 255, 255, 0.7)",
                      borderColor: isActive ? "#007CC3" : "#E2E8F0",
                      boxShadow: isActive ? "0 12px 32px rgba(0, 124, 195, 0.1)" : "none",
                    }}
                  >
                    {/* Timeline Node & Number */}
                    <div className="capability-col-num">
                      <div className={`capability-timeline-indicator ${isActive ? "has-halo" : ""}`} style={{ backgroundColor: isActive ? "#007CC3" : "#94A3B8" }}>
                        <span className="indicator-core-dot" style={{ backgroundColor: "#FFFFFF" }} />
                      </div>
                      <div className="capability-num-stack">
                        <span className="capability-num-digits" style={{ color: isActive ? "#007CC3" : "#64748B" }}>{practice.index}</span>
                        <span className="capability-meta-label">PRACTICE</span>
                        <span className="capability-meta-cat" style={{ color: isActive ? "#007CC3" : "#64748B" }}>{practice.category}</span>
                      </div>
                    </div>

                    {/* Card Container */}
                    <div className="capability-card-body">
                      <div className="capability-card-top">
                        <h3 className="capability-card-title" style={{ color: "#0F172A" }}>{practice.title}</h3>
                        <a
                          href={practice.link.href}
                          className="capability-arrow-btn"
                          aria-label={`Learn more about ${practice.title}`}
                          style={{ backgroundColor: isActive ? "#007CC3" : "transparent", color: isActive ? "#FFFFFF" : "#007CC3" }}
                        >
                          <span aria-hidden="true">→</span>
                        </a>
                      </div>

                      <p className="capability-card-summary" style={{ color: "#475569" }}>{practice.summary}</p>

                      <div className="capability-tags-row">
                        {practice.tags.map((t) => (
                          <a key={t.label} href={t.href} className="capability-tag-pill" style={{ borderColor: "#CBD5E1", color: "#007CC3", backgroundColor: "rgba(0, 124, 195, 0.05)" }}>
                            {t.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN: DYNAMIC 3D ARCHITECTURAL VISUAL STAGE */}
          <div className="capabilities-right-col">
            <div className="capabilities-visual-stage-wrap">
              {/* Top View Toggle */}
              <div className="stage-view-controls">
                <button
                  type="button"
                  className={`stage-view-btn ${!showIntegrated ? "active" : ""}`}
                  onClick={() => setShowIntegrated(false)}
                  style={{
                    backgroundColor: !showIntegrated ? "#007CC3" : "#FFFFFF",
                    color: !showIntegrated ? "#FFFFFF" : "#0F172A",
                    borderColor: !showIntegrated ? "#007CC3" : "#CBD5E1",
                  }}
                >
                  Focused 3D Upfront View
                </button>
                <button
                  type="button"
                  className={`stage-view-btn ${showIntegrated ? "active" : ""}`}
                  onClick={() => setShowIntegrated(true)}
                  style={{
                    backgroundColor: showIntegrated ? "#007CC3" : "#FFFFFF",
                    color: showIntegrated ? "#FFFFFF" : "#0F172A",
                    borderColor: showIntegrated ? "#007CC3" : "#CBD5E1",
                  }}
                >
                  Integrated 3D Landscape
                </button>
              </div>

              {/* View 1: Focused 3D Domain Stage Upfront (Hover-Driven) */}
              {!showIntegrated ? (
                <div
                  className="stage-upfront-card anim-upfront-fade"
                  id={`capability-stage-${current.id}`}
                  key={current.id}
                  style={{ border: "1px solid #E2E8F0", borderRadius: 12, overflow: "hidden", backgroundColor: "#FFFFFF" }}
                >
                  <div className="stage-image-container">
                    <img
                      src={current.imageSrc}
                      alt={current.title}
                      className="stage-upfront-img"
                      width={620}
                      height={465}
                      loading="eager"
                    />

                    {/* Central 3D Platform Floating Glass Badge */}
                    <div className="stage-platform-badge" style={{ backgroundColor: "rgba(3, 16, 38, 0.85)", borderColor: "rgba(0, 163, 224, 0.3)" }}>
                      <span className="badge-pulse-dot" style={{ backgroundColor: "#00A3E0" }} />
                      <span style={{ color: "#FFFFFF" }}>{current.badgeLabel}</span>
                    </div>

                    {/* Top Right Business Outcomes Card */}
                    <div className="stage-outcomes-card" style={{ backgroundColor: "rgba(255, 255, 255, 0.95)", border: "1px solid #E2E8F0" }}>
                      <span className="outcomes-top-tag" style={{ color: "#007CC3" }}>INTEGRATED DELIVERY</span>
                      <h4 className="outcomes-title" style={{ color: "#0F172A" }}>{current.outcomesTitle}</h4>
                      <ul className="outcomes-list" style={{ color: "#334155" }}>
                        {current.outcomes.map((item, idx) => (
                          <li key={idx}>
                            <span className="outcome-bullet" style={{ color: "#007CC3" }}>•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Left Leader Lines Overlay */}
                    <div className="stage-leader-overlay">
                      {current.leaderLines.map((line, idx) => (
                        <div key={idx} className="leader-callout-row">
                          <span className="leader-dot" style={{ backgroundColor: "#00A3E0" }} />
                          <span className="leader-line" style={{ backgroundColor: "rgba(0, 163, 224, 0.4)" }} />
                          <span className="leader-text" style={{ backgroundColor: "rgba(3, 16, 38, 0.85)", color: "#FFFFFF" }}>{line}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                /* View 2: Complete Interconnected 3D Landscape Model */
                <div className="stage-integrated-card anim-upfront-fade" style={{ border: "1px solid #E2E8F0", borderRadius: 12, overflow: "hidden", backgroundColor: "#FFFFFF" }}>
                  <div className="stage-image-container">
                    <img
                      src="/assets/img/capabilities-3d-stage.png"
                      alt="Laprrk Interconnected Capabilities Architecture"
                      className="stage-integrated-img"
                      width={620}
                      height={465}
                      loading="eager"
                    />
                    <div className="stage-platform-badge" style={{ backgroundColor: "rgba(3, 16, 38, 0.85)", borderColor: "rgba(0, 163, 224, 0.3)" }}>
                      <span className="badge-pulse-dot" style={{ backgroundColor: "#00A3E0" }} />
                      <span style={{ color: "#FFFFFF" }}>INTEGRATED CAPABILITIES LANDSCAPE</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM DARK BANNER: "PARTNER FOR WHAT'S NEXT" */}
      <div className="capabilities-bottom-banner" style={{ backgroundColor: "#031026", color: "#FFFFFF", borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}>
        <div className="banner-inner-container">
          <div className="banner-left">
            <span className="banner-tag" style={{ color: "#00A3E0" }}>PARTNER FOR WHAT'S NEXT</span>
            <h3 className="banner-headline" style={{ color: "#FFFFFF" }}>Navigate your next transformation with proven engineering.</h3>
          </div>

          <div className="banner-center">
            <p className="banner-desc" style={{ color: "#CBD5E1" }}>
              Discuss your engineering, talent, or learning roadmaps with our leadership team. We structure measurable pilot sprints with zero lock-in.
            </p>
          </div>

          <div className="banner-right">
            <a href="/contact" className="banner-cta-btn" style={{ backgroundColor: "#007CC3", borderColor: "#007CC3", color: "#FFFFFF" }}>
              <span>Connect with Us</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
