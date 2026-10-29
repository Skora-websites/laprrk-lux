import {
  OperatingThesisTriadSvg,
  ArchitecturalPrecisionSvg,
  PractitionerTalentSvg,
  AppliedLearningSvg,
} from "./OperatingThesisIllustrations";

export function BusinessIntroduction() {
  return (
    <section className="operating-thesis-section surface-pure-white" id="about" aria-label="Digital Operating Model" style={{ backgroundColor: "#FFFFFF" }}>
      {/* Subtle vertical architectural seam connecting from Hero */}
      <div className="thesis-connecting-seam" aria-hidden="true" />

      {/* TOP ZONE: EDITORIAL STATEMENT + INTERCONNECTED TRIAD */}
      <div className="thesis-top-container">
        <div className="thesis-editorial-grid">
          {/* Left Column: Eyebrow, Statement Headline & Copy */}
          <div className="thesis-editorial-left">
            <div className="thesis-eyebrow">
              <span className="thesis-eyebrow-bullet" style={{ backgroundColor: "#007CC3" }} />
              <span style={{ color: "#007CC3", fontWeight: 700 }}>• DIGITAL OPERATING MODEL</span>
            </div>

            <h2 className="thesis-statement-heading" style={{ color: "#0F172A" }}>
              Digital agility<br />
              demands more than<br />
              isolated tools.
            </h2>

            <p className="thesis-statement-lead" style={{ color: "#334155" }}>
              Sustainable enterprise transformation cannot be achieved through piecemeal frameworks or isolated AI experiments. Enduring momentum requires the synchronised orchestration of resilient cloud architectures, practitioner-vetted technical talent squads, and continuous enterprise workforce capability.
            </p>

            <p className="thesis-statement-sub" style={{ color: "#64748B" }}>
              At Laprrk, we unify digital product engineering, global capability center (GCC) recruitment, and applied corporate learning under a single accountable standard of execution.
            </p>

            <div className="thesis-action-wrap">
              <a href="/about.html" className="reference-btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                <span>Explore Our Operating Framework</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interconnected 3D Triad Vector Composition */}
          <div className="thesis-editorial-right">
            <OperatingThesisTriadSvg />
          </div>
        </div>
      </div>

      {/* BOTTOM ZONE: ALTERNATING INFOSYS ENTERPRISE PRINCIPLE ROWS */}
      <div className="thesis-principles-zone">
        {/* Continuous Thin Timeline Spine */}
        <div className="thesis-timeline-spine" aria-hidden="true" style={{ backgroundColor: "rgba(0, 124, 195, 0.2)" }} />

        {/* ==============================================================
            ROW 01: INTELLIGENT DIGITAL CORE (CLEAN WHITE)
           ============================================================== */}
        <div className="thesis-principle-row row-stone" style={{ backgroundColor: "#F8FAFC", borderTop: "1px solid #E2E8F0", borderBottom: "1px solid #E2E8F0" }}>
          <div className="thesis-row-inner">
            {/* Timeline Indicator & Number */}
            <div className="thesis-col-num">
              <span className="thesis-timeline-node" aria-hidden="true" style={{ backgroundColor: "#007CC3", borderColor: "#00A3E0" }} />
              <div className="thesis-num-stack">
                <span className="thesis-num-digits" style={{ color: "#007CC3" }}>01</span>
                <span className="thesis-num-meta-label">PILLAR</span>
                <span className="thesis-num-category" style={{ color: "#007CC3" }}>SYSTEMS &amp; CLOUD ARCHITECTURE</span>
              </div>
            </div>

            {/* Principle Narrative & Verification Tags */}
            <div className="thesis-col-content">
              <h3 className="thesis-principle-title" style={{ color: "#0F172A" }}>Intelligent Systems &amp; Digital Core</h3>
              <p className="thesis-principle-desc" style={{ color: "#475569" }}>
                Code without engineering discipline decays rapidly under enterprise throughput. We engineer distributed cloud-native microservices, deterministic generative AI retrieval systems, and zero-trust security postures built for multi-year enterprise stability.
              </p>
              <div className="thesis-tag-cloud">
                <span className="thesis-tag-pill" style={{ borderColor: "#CBD5E1", color: "#007CC3", backgroundColor: "rgba(0, 124, 195, 0.05)" }}>Distributed Microservices</span>
                <span className="thesis-tag-pill" style={{ borderColor: "#CBD5E1", color: "#007CC3", backgroundColor: "rgba(0, 124, 195, 0.05)" }}>Eval-Tested GenAI &amp; RAG</span>
                <span className="thesis-tag-pill" style={{ borderColor: "#CBD5E1", color: "#007CC3", backgroundColor: "rgba(0, 124, 195, 0.05)" }}>GitOps &amp; Zero-Downtime CI/CD</span>
              </div>
            </div>

            {/* Architectural Isometric Slabs */}
            <div className="thesis-col-illustration">
              <ArchitecturalPrecisionSvg />
            </div>
          </div>
        </div>

        {/* ==============================================================
            ROW 02: PRACTITIONER-SCREENED TALENT (LUMINOUS AZURE TINT)
           ============================================================== */}
        <div className="thesis-principle-row row-sage" style={{ backgroundColor: "#FFFFFF", borderBottom: "1px solid #E2E8F0" }}>
          <div className="thesis-row-inner">
            {/* Timeline Indicator & Number */}
            <div className="thesis-col-num">
              <span className="thesis-timeline-node" aria-hidden="true" style={{ backgroundColor: "#007CC3", borderColor: "#00A3E0" }} />
              <div className="thesis-num-stack">
                <span className="thesis-num-digits" style={{ color: "#007CC3" }}>02</span>
                <span className="thesis-num-meta-label">PILLAR</span>
                <span className="thesis-num-category" style={{ color: "#007CC3" }}>GLOBAL TALENT &amp; GCC HUBS</span>
              </div>
            </div>

            {/* Principle Narrative & Verification Tags */}
            <div className="thesis-col-content">
              <h3 className="thesis-principle-title" style={{ color: "#0F172A" }}>Calibrated Technical Talent &amp; GCC Hubs</h3>
              <p className="thesis-principle-desc" style={{ color: "#475569" }}>
                Generic recruiting relies on keyword matching and unverified resumes. Our active engineering leads conduct rigorous live code-level evaluations, ensuring shortlists possess proven problem-solving depth, architectural comprehension, and day-one delivery velocity.
              </p>
              <div className="thesis-tag-cloud">
                <span className="thesis-tag-pill" style={{ borderColor: "#CBD5E1", color: "#007CC3", backgroundColor: "rgba(0, 124, 195, 0.05)" }}>Senior Peer-Code Assessments</span>
                <span className="thesis-tag-pill" style={{ borderColor: "#CBD5E1", color: "#007CC3", backgroundColor: "rgba(0, 124, 195, 0.05)" }}>5–7 Day Calibrated Shortlists</span>
                <span className="thesis-tag-pill" style={{ borderColor: "#CBD5E1", color: "#007CC3", backgroundColor: "rgba(0, 124, 195, 0.05)" }}>Turnkey India GCC Establishment</span>
              </div>
            </div>

            {/* Sphere & Satellite Talent Network */}
            <div className="thesis-col-illustration">
              <PractitionerTalentSvg />
            </div>
          </div>
        </div>

        {/* ==============================================================
            ROW 03: CONTINUOUS WORKFORCE CAPABILITY (CLEAN SLATE)
           ============================================================== */}
        <div className="thesis-principle-row row-stone" style={{ backgroundColor: "#F8FAFC", borderBottom: "1px solid #E2E8F0" }}>
          <div className="thesis-row-inner">
            {/* Timeline Indicator & Number */}
            <div className="thesis-col-num">
              <span className="thesis-timeline-node" aria-hidden="true" style={{ backgroundColor: "#007CC3", borderColor: "#00A3E0" }} />
              <div className="thesis-num-stack">
                <span className="thesis-num-digits" style={{ color: "#007CC3" }}>03</span>
                <span className="thesis-num-meta-label">PILLAR</span>
                <span className="thesis-num-category" style={{ color: "#007CC3" }}>ORGANISATIONAL CAPABILITY</span>
              </div>
            </div>

            {/* Principle Narrative & Verification Tags */}
            <div className="thesis-col-content">
              <h3 className="thesis-principle-title" style={{ color: "#0F172A" }}>Applied Learning &amp; Muscle Memory</h3>
              <p className="thesis-principle-desc" style={{ color: "#475569" }}>
                Theoretical slides and passive videos fail to drive behavioural change in engineering organizations. We design immersive enterprise academies where ~70% of curriculum time is spent inside live containerized sandboxes, mastering production tools and autonomous agent workflows.
              </p>
              <div className="thesis-tag-cloud">
                <span className="thesis-tag-pill" style={{ borderColor: "#CBD5E1", color: "#007CC3", backgroundColor: "rgba(0, 124, 195, 0.05)" }}>~70% Live Lab Immersion</span>
                <span className="thesis-tag-pill" style={{ borderColor: "#CBD5E1", color: "#007CC3", backgroundColor: "rgba(0, 124, 195, 0.05)" }}>Enterprise Toolchain Alignment</span>
                <span className="thesis-tag-pill" style={{ borderColor: "#CBD5E1", color: "#007CC3", backgroundColor: "rgba(0, 124, 195, 0.05)" }}>NEP 2020 University Minors</span>
              </div>
            </div>

            {/* Laboratory Strata Circuit Plates */}
            <div className="thesis-col-illustration">
              <AppliedLearningSvg />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
