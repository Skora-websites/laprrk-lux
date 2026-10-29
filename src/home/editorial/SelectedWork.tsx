export function SelectedWork() {
  return (
    <section className="work-section surface-ice-light" id="work" aria-label="Representative Work and Capabilities" style={{ backgroundColor: "#F8FAFC", borderTop: "1px solid #E2E8F0" }}>
      <div
        style={{
          maxWidth: 1360,
          margin: "0 auto",
          padding: "clamp(48px, 6vw, 80px) clamp(16px, 4vw, 36px)",
        }}
      >
        <div style={{ marginBottom: "clamp(36px, 5vw, 60px)" }}>
          <span className="section-label" style={{ color: "#007CC3" }}>
            <span style={{ display: "inline-block", width: 6, height: 6, borderRadius: "50%", backgroundColor: "#007CC3", marginRight: 8 }} />
            ENTERPRISE CASE SCENARIOS &amp; PROVEN IMPACT
          </span>
          <h2
            className="display-title"
            style={{
              fontSize: "clamp(2rem, 3.4vw, 3.2rem)",
              color: "#0F172A",
              marginBottom: 16,
            }}
          >
            Demonstrated impact across complex enterprise domains.
          </h2>
          <p
            className="editorial-body"
            style={{
              maxWidth: "680px",
              color: "#475569",
            }}
          >
            Client identities are strictly protected under mutual NDA. These representative engagements illustrate how our software engineering, talent acquisition, and corporate training practices unlock quantifiable business velocity.
          </p>
        </div>

        {/* 1. Large Featured Project (Split Asymmetrical Architectural Composition) */}
        <article className="portfolio-featured-entry" style={{ backgroundColor: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: 12, padding: "clamp(24px, 4vw, 40px)", marginBottom: 40 }}>
          <div className="portfolio-featured-grid">
            {/* Left Narrative Column */}
            <div className="featured-narrative">
              <div className="featured-meta-row" style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16 }}>
                <span className="featured-badge" style={{ backgroundColor: "rgba(0, 124, 195, 0.08)", color: "#007CC3", border: "1px solid rgba(0, 124, 195, 0.25)", fontSize: "0.75rem", fontWeight: 700, padding: "4px 10px", borderRadius: 999 }}>
                  FEATURED ENGAGEMENT // APPLIED AI
                </span>
                <span className="featured-sector" style={{ fontSize: "0.8125rem", color: "#64748B" }}>Insurance &amp; Financial Workflows</span>
              </div>

              <h3 className="featured-title" style={{ fontSize: "clamp(1.4rem, 2.2vw, 1.9rem)", color: "#0F172A", margin: "0 0 20px 0", lineHeight: 1.25 }}>
                <a href="/genai-document-assistant-insurance.html" style={{ color: "inherit", textDecoration: "none" }}>
                  Autonomous GenAI Document Intelligence for Policy &amp; Loss-Run Extraction
                </a>
              </h3>

              <div className="featured-story-block" style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 24 }}>
                <div className="story-item">
                  <h4 className="story-label" style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "0.8125rem", fontWeight: 700, color: "#007CC3", textTransform: "uppercase", marginBottom: 6 }}>
                    The Enterprise Challenge
                  </h4>
                  <p className="story-text" style={{ color: "#334155", lineHeight: 1.6, fontSize: "0.9375rem", margin: 0 }}>
                    A network of independent commercial insurance brokerages spent 2.5 hours per policy file manually transcribing loss-run statements, declarations pages, and multi-state ACORD forms into legacy core systems, creating underwriting bottlenecks and transcription errors.
                  </p>
                </div>

                <div className="story-item">
                  <h4 className="story-label" style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "0.8125rem", fontWeight: 700, color: "#007CC3", textTransform: "uppercase", marginBottom: 6 }}>
                    The Solution &amp; Engineering Blueprint
                  </h4>
                  <p className="story-text" style={{ color: "#334155", lineHeight: 1.6, fontSize: "0.9375rem", margin: 0 }}>
                    Engineered an automated GenAI document intelligence platform combining layout-aware visual OCR, Pydantic validation schemas, and confidence threshold gates. Integrated a human-in-the-loop review workbench ensuring underwriters audit low-confidence extractions before core API synchronization.
                  </p>
                </div>
              </div>

              {/* Documented Outcomes & Deliverables */}
              <div className="featured-outcomes-row" style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 28 }}>
                <div className="outcome-pill" style={{ backgroundColor: "#FFFFFF", border: "1px solid #CBD5E1", borderRadius: 8, padding: "12px 16px" }}>
                  <span className="outcome-val" style={{ display: "block", fontSize: "1.5rem", fontWeight: 700, color: "#007CC3", fontFamily: "Space Grotesk, sans-serif" }}>70%</span>
                  <span className="outcome-desc" style={{ fontSize: "0.8125rem", color: "#64748B" }}>Reduction in manual ingestion time</span>
                </div>
                <div className="outcome-pill" style={{ backgroundColor: "#FFFFFF", border: "1px solid #CBD5E1", borderRadius: 8, padding: "12px 16px" }}>
                  <span className="outcome-val" style={{ display: "block", fontSize: "1.5rem", fontWeight: 700, color: "#007CC3", fontFamily: "Space Grotesk, sans-serif" }}>6 Weeks</span>
                  <span className="outcome-desc" style={{ fontSize: "0.8125rem", color: "#64748B" }}>Kickoff to production deployment</span>
                </div>
                <div className="outcome-pill" style={{ backgroundColor: "#FFFFFF", border: "1px solid #CBD5E1", borderRadius: 8, padding: "12px 16px" }}>
                  <span className="outcome-val" style={{ display: "block", fontSize: "1.5rem", fontWeight: 700, color: "#007CC3", fontFamily: "Space Grotesk, sans-serif" }}>99.2%</span>
                  <span className="outcome-desc" style={{ fontSize: "0.8125rem", color: "#64748B" }}>Field accuracy with verification</span>
                </div>
              </div>

              <div>
                <a href="/genai-document-assistant-insurance.html" className="reference-btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                  <span>Read Full Architecture Narrative</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            {/* Right Visual Column: Technical Schematic Illustration */}
            <div className="featured-schematic-wrap">
              <svg viewBox="0 0 460 380" fill="none" className="featured-schematic-svg" aria-label="Document Processing Architecture Diagram">
                <rect x="20" y="20" width="420" height="340" rx="8" fill="#F1F5F9" stroke="#007CC3" strokeWidth="1.2" />
                <text x="40" y="52" fontFamily="Space Grotesk, sans-serif" fontSize="10" fontWeight="700" fill="#007CC3" letterSpacing="0.1em">
                  PIPELINE TOPOLOGY // GENAI ENTERPRISE AGENT
                </text>
                <line x1="20" y1="65" x2="440" y2="65" stroke="#CBD5E1" strokeWidth="0.8" strokeDasharray="3 3" />

                {/* Step 1: Input Document */}
                <g transform="translate(45, 95)">
                  <rect x="0" y="0" width="95" height="110" rx="4" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1" />
                  <line x1="15" y1="20" x2="80" y2="20" stroke="#007CC3" strokeWidth="1.5" />
                  <line x1="15" y1="32" x2="65" y2="32" stroke="#64748B" strokeWidth="1" />
                  <line x1="15" y1="44" x2="75" y2="44" stroke="#646D75" strokeWidth="1" />
                  <line x1="15" y1="56" x2="55" y2="56" stroke="#646D75" strokeWidth="1" />
                  <text x="12" y="90" fontFamily="Space Grotesk, sans-serif" fontSize="8" fontWeight="600" fill="#0F172A">INPUT PDF / SCAN</text>
                </g>

                {/* Arrow 1 */}
                <path d="M 145 150 L 175 150" stroke="#007CC3" strokeWidth="1.5" />

                {/* Step 2: Extraction & LLM Schema */}
                <g transform="translate(180, 95)">
                  <rect x="0" y="0" width="105" height="110" rx="4" fill="#031026" />
                  <text x="14" y="30" fontFamily="Space Grotesk, sans-serif" fontSize="8.5" fontWeight="700" fill="#00A3E0">LLM PARSER</text>
                  <text x="14" y="48" fontFamily="Manrope, sans-serif" fontSize="7.5" fill="#E2E8F0">Pydantic schemas</text>
                  <text x="14" y="62" fontFamily="Manrope, sans-serif" fontSize="7.5" fill="#E2E8F0">Table extraction</text>
                  <text x="14" y="76" fontFamily="Manrope, sans-serif" fontSize="7.5" fill="#E2E8F0">Hallucination check</text>
                  <circle cx="90" cy="25" r="4" fill="#10B981" />
                </g>

                {/* Arrow 2 */}
                <path d="M 290 150 L 320 150" stroke="#007CC3" strokeWidth="1.5" />

                {/* Step 3: Human in the loop review */}
                <g transform="translate(325, 95)">
                  <rect x="0" y="0" width="95" height="110" rx="4" fill="#FFFFFF" stroke="#0F172A" strokeWidth="1" />
                  <circle cx="47" cy="35" r="14" fill="#F0F7FF" stroke="#007CC3" strokeWidth="1" />
                  <path d="M 39 42 C 39 37, 55 37, 55 42" stroke="#007CC3" strokeWidth="1" fill="none" />
                  <circle cx="47" cy="32" r="5" fill="#007CC3" />
                  <text x="10" y="75" fontFamily="Space Grotesk, sans-serif" fontSize="8" fontWeight="600" fill="#0F172A" textAnchor="start">STAFF REVIEW</text>
                  <text x="10" y="88" fontFamily="Manrope, sans-serif" fontSize="7" fill="#64748B">Confidence Gate</text>
                </g>

                {/* Bottom Enterprise Sync Tier */}
                <g transform="translate(45, 235)">
                  <rect x="0" y="0" width="375" height="95" rx="4" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
                  <text x="20" y="32" fontFamily="Space Grotesk, sans-serif" fontSize="9.5" fontWeight="700" fill="#007CC3">
                    VERIFIED DATA SYNCHRONIZATION // AMS &amp; ERP
                  </text>
                  <text x="20" y="52" fontFamily="Manrope, sans-serif" fontSize="8.5" fill="#475569">
                    Direct API dispatch into core agency databases with full audit trails and cryptographic provenance.
                  </text>
                  <rect x="20" y="65" width="180" height="20" rx="3" fill="rgba(0, 124, 195, 0.08)" stroke="#007CC3" strokeWidth="0.8" />
                  <text x="28" y="78" fontFamily="Space Grotesk, sans-serif" fontSize="7.5" fontWeight="700" fill="#007CC3">
                    SOC2 &amp; HIPAA COMPLIANT DISPATCH
                  </text>
                </g>
              </svg>
            </div>
          </div>
        </article>

        {/* 2. Secondary Varied Project Entries (Two-Column Asymmetric) */}
        <div className="portfolio-secondary-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 32 }}>
          {/* Entry B: Talent Acquisition Case */}
          <article className="portfolio-secondary-entry" style={{ backgroundColor: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: 12, padding: "28px" }}>
            <div className="secondary-meta" style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 12 }}>
              <span className="secondary-badge" style={{ backgroundColor: "rgba(0, 124, 195, 0.08)", color: "#007CC3", border: "1px solid rgba(0, 124, 195, 0.25)", fontSize: "0.75rem", fontWeight: 700, padding: "3px 8px", borderRadius: 999 }}>
                CASE // TALENT &amp; GCC
              </span>
              <span className="secondary-sector" style={{ fontSize: "0.8125rem", color: "#64748B" }}>US SaaS Enterprise</span>
            </div>
            <h3 className="secondary-title" style={{ fontSize: "1.25rem", color: "#0F172A", margin: "0 0 14px 0" }}>
              <a href="/india-engineering-team-setup.html" style={{ color: "inherit", textDecoration: "none" }}>
                Turnkey India Global Capability Center: Scaled to 40 Technical Hires
              </a>
            </h3>
            <p className="secondary-problem" style={{ color: "#475569", fontSize: "0.875rem", lineHeight: 1.6, marginBottom: 10 }}>
              <strong>Challenge:</strong> A US product scale-up needed to establish its first wholly owned India engineering center, requiring senior architecture leadership and full-stack developers aligned with its Silicon Valley product culture.
            </p>
            <p className="secondary-solution" style={{ color: "#475569", fontSize: "0.875rem", lineHeight: 1.6, marginBottom: 18 }}>
              <strong>Approach:</strong> Hired the site leader first, followed by live code-assessed recruitment delivering 40 joiners across 8 months with an 88% offer-acceptance ratio.
            </p>
            <div className="secondary-stats-strip" style={{ display: "flex", flexWrap: "wrap", gap: 8, fontSize: "0.8125rem", color: "#0F172A", marginBottom: 20 }}>
              <span><strong>40</strong> Joiners in 8 Mos</span>
              <span>·</span>
              <span><strong>6 Days</strong> Avg First Shortlist</span>
              <span>·</span>
              <span><strong>88%</strong> Join Ratio</span>
            </div>
            <a href="/india-engineering-team-setup.html" className="secondary-explore-link" style={{ color: "#007CC3", textDecoration: "none", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 6 }}>
              <span>Read Case Study</span>
              <span aria-hidden="true">→</span>
            </a>
          </article>

          {/* Entry C: Corporate Learning Case */}
          <article className="portfolio-secondary-entry" style={{ backgroundColor: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: 12, padding: "28px" }}>
            <div className="secondary-meta" style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 12 }}>
              <span className="secondary-badge" style={{ backgroundColor: "rgba(0, 124, 195, 0.08)", color: "#007CC3", border: "1px solid rgba(0, 124, 195, 0.25)", fontSize: "0.75rem", fontWeight: 700, padding: "3px 8px", borderRadius: 999 }}>
                CASE // WORKFORCE ENABLEMENT
              </span>
              <span className="secondary-sector" style={{ fontSize: "0.8125rem", color: "#64748B" }}>Global IT Services Partner</span>
            </div>
            <h3 className="secondary-title" style={{ fontSize: "1.25rem", color: "#0F172A", margin: "0 0 14px 0" }}>
              <a href="/genai-cloud-upskilling-program.html" style={{ color: "inherit", textDecoration: "none" }}>
                Enterprise GenAI &amp; Cloud Upskilling Academy for 120 Engineers
              </a>
            </h3>
            <p className="secondary-problem" style={{ color: "#475569", fontSize: "0.875rem", lineHeight: 1.6, marginBottom: 10 }}>
              <strong>Challenge:</strong> An enterprise consulting organization required its delivery squads to build modern GenAI and multi-cloud solutions for Fortune 500 clients, but practical lab capability was fragmented.
            </p>
            <p className="secondary-solution" style={{ color: "#475569", fontSize: "0.875rem", lineHeight: 1.6, marginBottom: 18 }}>
              <strong>Approach:</strong> Rolled out a 12-week role-based intensive combining ~70% live hands-on containerized labs with production toolchains, culminating in 8 working enterprise client prototypes.
            </p>
            <div className="secondary-stats-strip" style={{ display: "flex", flexWrap: "wrap", gap: 8, fontSize: "0.8125rem", color: "#0F172A", marginBottom: 20 }}>
              <span><strong>120</strong> Engineers Certified</span>
              <span>·</span>
              <span><strong>38%</strong> Competency Lift</span>
              <span>·</span>
              <span><strong>8</strong> Live Prototypes</span>
            </div>
            <a href="/genai-cloud-upskilling-program.html" className="secondary-explore-link" style={{ color: "#007CC3", textDecoration: "none", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 6 }}>
              <span>Read Case Study</span>
              <span aria-hidden="true">→</span>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
