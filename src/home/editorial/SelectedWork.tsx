export function SelectedWork() {
  return (
    <section className="work-section surface-soft-periwinkle" id="work" aria-label="Representative Work and Capabilities">
      <div
        style={{
          maxWidth: 1360,
          margin: "0 auto",
          padding: "0 clamp(16px, 4vw, 36px)",
        }}
      >
        <div style={{ marginBottom: "clamp(36px, 5vw, 60px)" }}>
          <span className="section-label" style={{ color: "var(--text-dark-primary)" }}>
            Editorial Portfolio &amp; Case Scenarios
          </span>
          <h2
            className="display-title"
            style={{
              fontSize: "clamp(2rem, 3.4vw, 3.2rem)",
              color: "var(--text-dark-primary)",
              marginBottom: 16,
            }}
          >
            Demonstrated capability across complex domains.
          </h2>
          <p
            className="editorial-body"
            style={{
              maxWidth: "680px",
              color: "#384758",
            }}
          >
            Client identities are protected under mutual NDA. These representative engagements illustrate the engineering challenges we solve across product engineering, team scaling, and corporate capability development.
          </p>
        </div>

        {/* 1. Large Featured Project (Split Asymmetrical Architectural Composition) */}
        <article className="portfolio-featured-entry">
          <div className="portfolio-featured-grid">
            {/* Left Narrative Column */}
            <div className="featured-narrative">
              <div className="featured-meta-row">
                <span className="featured-badge">FEATURED ENGAGEMENT // IT SERVICES</span>
                <span className="featured-sector">Insurance &amp; Financial Workflows</span>
              </div>

              <h3 className="featured-title">
                <a href="/genai-document-assistant-insurance.html">
                  GenAI Document Intelligence Assistant for Policy &amp; Loss-Run Extraction
                </a>
              </h3>

              <div className="featured-story-block">
                <div className="story-item">
                  <h4 className="story-label">The Business Problem</h4>
                  <p className="story-text">
                    A network of independent insurance agencies was spending up to 2.5 hours per file manually transcribing loss-run statements, declarations pages, and ACORD applications into legacy agency management systems, creating processing backlogs and human transcription errors.
                  </p>
                </div>

                <div className="story-item">
                  <h4 className="story-label">The Solution &amp; Engineering Approach</h4>
                  <p className="story-text">
                    Engineered an automated GenAI document intelligence assistant using layout-aware OCR, structured LLM extraction schemas, and confidence scoring. Built an ergonomic human-in-the-loop review workbench ensuring staff audit every extracted field before database synchronization.
                  </p>
                </div>
              </div>

              {/* Documented Outcomes & Deliverables */}
              <div className="featured-outcomes-row">
                <div className="outcome-pill">
                  <span className="outcome-val">70%</span>
                  <span className="outcome-desc">Reduction in manual data entry per file</span>
                </div>
                <div className="outcome-pill">
                  <span className="outcome-val">6 Weeks</span>
                  <span className="outcome-desc">From kickoff to production release</span>
                </div>
                <div className="outcome-pill">
                  <span className="outcome-val">95%+</span>
                  <span className="outcome-desc">Field accuracy with human review</span>
                </div>
              </div>

              <div style={{ marginTop: 24 }}>
                <a href="/genai-document-assistant-insurance.html" className="btn-editorial-primary" style={{ padding: "10px 22px", fontSize: "0.875rem" }}>
                  <span>Read Full Case Narrative</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            {/* Right Visual Column: Bespoke Technical Schematic Illustration */}
            <div className="featured-schematic-wrap">
              <svg viewBox="0 0 460 380" fill="none" className="featured-schematic-svg" aria-label="Document Processing Architecture Diagram">
                <rect x="20" y="20" width="420" height="340" rx="8" fill="#F0EEE7" stroke="#202D3A" strokeWidth="1.2" />
                <text x="40" y="52" fontFamily="Space Grotesk, sans-serif" fontSize="10" fontWeight="700" fill="#202D3A" letterSpacing="0.1em">
                  PIPELINE TOPOLOGY // GENAI DOCUMENT PIPELINE
                </text>
                <line x1="20" y1="65" x2="440" y2="65" stroke="#202D3A" strokeWidth="0.8" strokeDasharray="3 3" />

                {/* Step 1: Input Document */}
                <g transform="translate(45, 95)">
                  <rect x="0" y="0" width="95" height="110" rx="4" fill="#FFFFFF" stroke="#202D3A" strokeWidth="1" />
                  <line x1="15" y1="20" x2="80" y2="20" stroke="#202D3A" strokeWidth="1" />
                  <line x1="15" y1="32" x2="65" y2="32" stroke="#646D75" strokeWidth="1" />
                  <line x1="15" y1="44" x2="75" y2="44" stroke="#646D75" strokeWidth="1" />
                  <line x1="15" y1="56" x2="55" y2="56" stroke="#646D75" strokeWidth="1" />
                  <text x="12" y="90" fontFamily="Space Grotesk, sans-serif" fontSize="8" fontWeight="600" fill="#202D3A">INPUT PDF / SCAN</text>
                </g>

                {/* Arrow 1 */}
                <path d="M 145 150 L 175 150" stroke="#202D3A" strokeWidth="1.5" markerEnd="url(#arrow)" />

                {/* Step 2: Extraction & LLM Schema */}
                <g transform="translate(180, 95)">
                  <rect x="0" y="0" width="105" height="110" rx="4" fill="#202D3A" />
                  <text x="14" y="30" fontFamily="Space Grotesk, sans-serif" fontSize="8.5" fontWeight="700" fill="#F0EEE7">LLM PARSER</text>
                  <text x="14" y="48" fontFamily="Manrope, sans-serif" fontSize="7.5" fill="#DCE3DF">Pydantic schemas</text>
                  <text x="14" y="62" fontFamily="Manrope, sans-serif" fontSize="7.5" fill="#DCE3DF">Table extraction</text>
                  <text x="14" y="76" fontFamily="Manrope, sans-serif" fontSize="7.5" fill="#DCE3DF">Field validation</text>
                  <circle cx="90" cy="25" r="4" fill="#4ade80" />
                </g>

                {/* Arrow 2 */}
                <path d="M 290 150 L 320 150" stroke="#202D3A" strokeWidth="1.5" />

                {/* Step 3: Human in the loop review */}
                <g transform="translate(325, 95)">
                  <rect x="0" y="0" width="95" height="110" rx="4" fill="#FFFFFF" stroke="#202D3A" strokeWidth="1" />
                  <circle cx="47" cy="35" r="14" fill="#DCE3DF" stroke="#202D3A" strokeWidth="1" />
                  <path d="M 39 42 C 39 37, 55 37, 55 42" stroke="#202D3A" strokeWidth="1" fill="none" />
                  <circle cx="47" cy="32" r="5" fill="#202D3A" />
                  <text x="10" y="75" fontFamily="Space Grotesk, sans-serif" fontSize="8" fontWeight="600" fill="#202D3A" textAnchor="start">STAFF REVIEW</text>
                  <text x="10" y="88" fontFamily="Manrope, sans-serif" fontSize="7" fill="#646D75">Confidence Gate</text>
                </g>

                {/* Bottom Enterprise Sync Tier */}
                <g transform="translate(45, 235)">
                  <rect x="0" y="0" width="375" height="95" rx="4" fill="#DCE3DF" stroke="#202D3A" strokeWidth="1" />
                  <text x="20" y="32" fontFamily="Space Grotesk, sans-serif" fontSize="9.5" fontWeight="700" fill="#202D3A">
                    VERIFIED DATA SYNCHRONIZATION // AMS &amp; ERP
                  </text>
                  <text x="20" y="52" fontFamily="Manrope, sans-serif" fontSize="8.5" fill="#445163">
                    Direct API dispatch into agency databases with full audit trails and field provenance.
                  </text>
                  <rect x="20" y="65" width="160" height="18" rx="2" fill="#FFFFFF" stroke="#202D3A" strokeWidth="0.8" />
                  <text x="28" y="77" fontFamily="Space Grotesk, sans-serif" fontSize="7.5" fontWeight="600" fill="#202D3A">
                    SOC2 &amp; HIPAA COMPLIANT DISPATCH
                  </text>
                </g>
              </svg>
            </div>
          </div>
        </article>

        {/* 2. Secondary Varied Editorial Project Entries (Asymmetric Two-Column) */}
        <div className="portfolio-secondary-grid">
          {/* Entry B: Talent Acquisition Case */}
          <article className="portfolio-secondary-entry">
            <div className="secondary-meta">
              <span className="secondary-badge">CASE // TALENT ACQUISITION</span>
              <span className="secondary-sector">US SaaS Enterprise</span>
            </div>
            <h3 className="secondary-title">
              <a href="/india-engineering-team-setup.html">
                Turnkey India Engineering Hub: First 40 Technical Hires
              </a>
            </h3>
            <p className="secondary-problem">
              <strong>Challenge:</strong> A US product company needed to establish its first wholly owned India engineering centre, requiring leadership and developers aligned with its product engineering culture.
            </p>
            <p className="secondary-solution">
              <strong>Approach:</strong> Recruited the country site leader first, followed by engineer-conducted technical interviews delivering 40 joiners across 8 months with an 88% offer-acceptance ratio.
            </p>
            <div className="secondary-stats-strip">
              <span><strong>40</strong> Joiners in 8 Mos</span>
              <span>·</span>
              <span><strong>6 Days</strong> Avg First Shortlist</span>
              <span>·</span>
              <span><strong>88%</strong> Join Ratio</span>
            </div>
            <a href="/india-engineering-team-setup.html" className="secondary-explore-link">
              <span>Read Case Study</span>
              <span aria-hidden="true">→</span>
            </a>
          </article>

          {/* Entry C: Corporate Learning Case */}
          <article className="portfolio-secondary-entry">
            <div className="secondary-meta">
              <span className="secondary-badge">CASE // CORPORATE TRAINING</span>
              <span className="secondary-sector">IT Consulting Services</span>
            </div>
            <h3 className="secondary-title">
              <a href="/genai-cloud-upskilling-program.html">
                GenAI &amp; Cloud Upskilling for 120 Delivery Engineers
              </a>
            </h3>
            <p className="secondary-problem">
              <strong>Challenge:</strong> An enterprise IT consulting organisation required its delivery squads to build modern GenAI and multi-cloud solutions for clients, but hands-on experience was uneven.
            </p>
            <p className="secondary-solution">
              <strong>Approach:</strong> Rolled out a 12-week role-based intensive combining roughly 70% live hands-on labs with real production tools, culminating in 8 working client prototypes.
            </p>
            <div className="secondary-stats-strip">
              <span><strong>120</strong> Engineers Trained</span>
              <span>·</span>
              <span><strong>38%</strong> Assessment Lift</span>
              <span>·</span>
              <span><strong>8</strong> Live Prototypes</span>
            </div>
            <a href="/genai-cloud-upskilling-program.html" className="secondary-explore-link">
              <span>Read Case Study</span>
              <span aria-hidden="true">→</span>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
