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
      title: "Technology Solutions",
      category: "TECHNOLOGY SOLUTIONS",
      summary:
        "Full-cycle product engineering, generative AI systems, modern cloud infrastructure, and enterprise QA automation. We work in disciplined two-week sprint cadences with demonstrable working software produced each cycle.",
      link: { label: "Explore Technology Services", href: "/it-services.html" },
      tags: [
        { label: "Custom Software", href: "/custom-software-development.html" },
        { label: "Generative AI", href: "/generative-ai.html" },
        { label: "Cloud & DevOps", href: "/cloud-services.html" },
        { label: "QA Automation", href: "/qa-test-automation.html" },
      ],
      imageSrc: "/assets/img/subpage-ai-systems.jpg",
      badgeLabel: "01 // TECHNOLOGY SOLUTIONS",
      leaderLines: [
        "PRODUCT ENGINEERING",
        "GENAI & AUTOMATION",
        "CLOUD & DEVOPS",
        "QA & TESTING",
      ],
      outcomesTitle: "BUSINESS OUTCOMES",
      outcomes: ["Faster innovation", "Stronger teams", "Measurable capability"],
    },
    {
      id: "talent-acquisition",
      index: "02",
      title: "Talent Acquisition",
      category: "TALENT ACQUISITION",
      summary:
        "Practitioner-vetted engineering recruitment, contract staffing, and turnkey India & GCC development hub setup. Our technical recruiters deliver rigorous shortlists within 5 to 7 business days.",
      link: { label: "Explore Talent Solutions", href: "/hiring-consultation.html" },
      tags: [
        { label: "Permanent Hiring", href: "/permanent-it-recruitment.html" },
        { label: "Contract Staffing", href: "/contract-staffing.html" },
        { label: "Dedicated Teams", href: "/staff-augmentation.html" },
        { label: "GCC Setup", href: "/gcc-hiring.html" },
      ],
      imageSrc: "/assets/img/subpage-talent-gcc.jpg",
      badgeLabel: "02 // TALENT ACQUISITION",
      leaderLines: [
        "TECHNICAL HIRING",
        "CONTRACT STAFFING",
        "DEDICATED SQUADS",
        "GCC & INDIA SETUP",
      ],
      outcomesTitle: "TALENT OUTCOMES",
      outcomes: ["5–7 Day first shortlist", "88% Join ratio", "Code-screened candidates"],
    },
    {
      id: "corporate-learning",
      index: "03",
      title: "Corporate Learning",
      category: "CORPORATE LEARNING",
      summary:
        "Hands-on corporate AI and cloud upskilling, NEP 2020 credit-aligned university tracks, and faculty development. We design intensive curricula with roughly 70% live lab time.",
      link: { label: "Explore Corporate Learning", href: "/corporate-training.html" },
      tags: [
        { label: "Enterprise Upskilling", href: "/corporate-training.html" },
        { label: "Live Labs", href: "/corporate-training.html#labs" },
        { label: "Certification Tracks", href: "/corporate-training.html#tracks" },
        { label: "Faculty Development", href: "/faculty-development-programs.html" },
      ],
      imageSrc: "/assets/img/subpage-corporate-training.jpg",
      badgeLabel: "03 // CORPORATE LEARNING",
      leaderLines: [
        "ENTERPRISE UPSKILLING",
        "LIVE, LAB-BASED LEARNING",
        "UNIVERSITY PROGRAMMES",
        "FACULTY DEVELOPMENT",
      ],
      outcomesTitle: "LEARNING OUTCOMES",
      outcomes: ["~70% Live lab time", "NEP 2020 credit aligned", "Production toolchains"],
    },
  ];

  const current = practices[activeTab];

  return (
    <section className="capabilities-enterprise-section" id="services" aria-label="Enterprise Capabilities">
      <div className="capabilities-main-container">
        {/* SECTION HEADER */}
        <div className="capabilities-header">
          <div className="capabilities-eyebrow">
            <span className="capabilities-eyebrow-bullet" />
            <span>• ENTERPRISE CAPABILITIES</span>
          </div>

          <h2 className="capabilities-display-title">
            Capabilities built around<br />
            real business needs.
          </h2>

          <p className="capabilities-lede">
            Three dedicated practices designed to support organisations at every phase of technical maturity. Begin with an isolated challenge or orchestrate all three together under one delivery lead.
          </p>
        </div>

        {/* 2-COLUMN INTERACTIVE CAPABILITIES LAYOUT */}
        <div className="capabilities-grid-layout">
          {/* LEFT COLUMN: 3 INTERACTIVE PRACTICE CARDS WITH VERTICAL TIMELINE */}
          <div className="capabilities-left-col">
            <div className="capabilities-timeline-spine" aria-hidden="true" />

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
                  >
                    {/* Timeline Node & Number */}
                    <div className="capability-col-num">
                      <div className={`capability-timeline-indicator ${isActive ? "has-halo" : ""}`}>
                        <span className="indicator-core-dot" />
                      </div>
                      <div className="capability-num-stack">
                        <span className="capability-num-digits">{practice.index}</span>
                        <span className="capability-meta-label">PRACTICE</span>
                        <span className="capability-meta-cat">{practice.category}</span>
                      </div>
                    </div>

                    {/* Card Container */}
                    <div className="capability-card-body">
                      <div className="capability-card-top">
                        <h3 className="capability-card-title">{practice.title}</h3>
                        <a
                          href={practice.link.href}
                          className="capability-arrow-btn"
                          aria-label={`Learn more about ${practice.title}`}
                        >
                          <span aria-hidden="true">→</span>
                        </a>
                      </div>

                      <p className="capability-card-summary">{practice.summary}</p>

                      <div className="capability-tags-row">
                        {practice.tags.map((t) => (
                          <a key={t.label} href={t.href} className="capability-tag-pill">
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
                >
                  Focused 3D Upfront View
                </button>
                <button
                  type="button"
                  className={`stage-view-btn ${showIntegrated ? "active" : ""}`}
                  onClick={() => setShowIntegrated(true)}
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
                    <div className="stage-platform-badge">
                      <span className="badge-pulse-dot" />
                      <span>{current.badgeLabel}</span>
                    </div>

                    {/* Top Right Business Outcomes Card */}
                    <div className="stage-outcomes-card">
                      <span className="outcomes-top-tag">INTEGRATED DELIVERY</span>
                      <h4 className="outcomes-title">{current.outcomesTitle}</h4>
                      <ul className="outcomes-list">
                        {current.outcomes.map((item, idx) => (
                          <li key={idx}>
                            <span className="outcome-bullet">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Left Leader Lines Overlay */}
                    <div className="stage-leader-overlay">
                      {current.leaderLines.map((line, idx) => (
                        <div key={idx} className="leader-callout-row">
                          <span className="leader-dot" />
                          <span className="leader-line" />
                          <span className="leader-text">{line}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                /* View 2: Complete Interconnected 3D Landscape Model */
                <div className="stage-integrated-card anim-upfront-fade">
                  <div className="stage-image-container">
                    <img
                      src="/assets/img/capabilities-3d-stage.png"
                      alt="Laprrk Interconnected Capabilities Architecture"
                      className="stage-integrated-img"
                      width={620}
                      height={465}
                      loading="eager"
                    />
                    <div className="stage-platform-badge">
                      <span className="badge-pulse-dot" />
                      <span>INTEGRATED CAPABILITIES LANDSCAPE</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM DARK BANNER: "PARTNER FOR WHAT'S NEXT" */}
      <div className="capabilities-bottom-banner">
        <div className="banner-inner-container">
          <div className="banner-left">
            <span className="banner-tag">PARTNER FOR WHAT'S NEXT</span>
            <h3 className="banner-headline">Turn capability into measurable progress.</h3>
          </div>

          <div className="banner-center">
            <p className="banner-desc">
              Discuss your priorities with our team and explore how our three practices can work together to accelerate your goals.
            </p>
          </div>

          <div className="banner-right">
            <a href="/contact" className="banner-cta-btn">
              <span>Discuss Your Requirements</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
