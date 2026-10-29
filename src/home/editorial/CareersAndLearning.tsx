export function CareersAndLearning() {
  return (
    <section className="pathways-section surface-ice-light" id="pathways" aria-label="Talent and Learning Pathways" style={{ backgroundColor: "#F8FAFC", borderTop: "1px solid #E2E8F0" }}>
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
            STRATEGIC PATHWAYS
          </span>
          <h2
            className="display-title"
            style={{
              fontSize: "clamp(2rem, 3.4vw, 3.2rem)",
              color: "#0F172A",
              marginBottom: 16,
            }}
          >
            Differentiated pathways for enterprise scale and continuous learning.
          </h2>
          <p
            className="editorial-body"
            style={{ maxWidth: "660px", color: "#475569" }}
          >
            Whether your enterprise requires practitioner-vetted engineers and turnkey GCC hubs, or your institution is building accredited technical curricula, we structure distinct, accountable engagement workflows.
          </p>
        </div>

        {/* Varied Asymmetrical Dual-Track Presentation */}
        <div className="pathways-editorial-split" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 32 }}>
          {/* Pathway 1: For Organisations */}
          <div className="pathway-editorial-column pathway-org" style={{ backgroundColor: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: 12, padding: "clamp(24px, 4vw, 36px)", boxShadow: "0 4px 20px rgba(0, 59, 113, 0.04)" }}>
            <div className="pathway-track-badge" style={{ backgroundColor: "rgba(0, 124, 195, 0.08)", color: "#007CC3", border: "1px solid rgba(0, 124, 195, 0.25)", display: "inline-block", padding: "4px 10px", borderRadius: 999, fontSize: "0.75rem", fontWeight: 700, marginBottom: 16 }}>
              PATHWAY // FOR ORGANISATIONS
            </div>
            <h3 className="pathway-editorial-heading" style={{ fontSize: "1.45rem", color: "#0F172A", margin: "0 0 14px 0" }}>
              Scale Engineering Capacity &amp; Establish GCC Hubs
            </h3>
            <p className="pathway-editorial-lead" style={{ color: "#475569", fontSize: "0.9375rem", lineHeight: 1.6, marginBottom: 24 }}>
              Overcome critical delivery bottlenecks through practitioner-screened permanent developers, specialized contract pods, or a phased turnkey India GCC hub establishment with complete statutory compliance.
            </p>

            <div className="pathway-bullet-grid" style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 28 }}>
              <div className="pathway-bullet" style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: "0.875rem", color: "#334155" }}>
                <span className="bullet-indicator" aria-hidden="true" style={{ color: "#007CC3", fontWeight: 700 }}>◈</span>
                <div>
                  <strong style={{ color: "#0F172A" }}>Senior Code-Level Assessments:</strong>
                  <span> Candidate technical depth verified by working developers, eliminating resume spam.</span>
                </div>
              </div>
              <div className="pathway-bullet" style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: "0.875rem", color: "#334155" }}>
                <span className="bullet-indicator" aria-hidden="true" style={{ color: "#007CC3", fontWeight: 700 }}>◈</span>
                <div>
                  <strong style={{ color: "#0F172A" }}>5–7 Day Turnaround:</strong>
                  <span> Calibrated shortlists ready for client interviews within one business week.</span>
                </div>
              </div>
              <div className="pathway-bullet" style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: "0.875rem", color: "#334155" }}>
                <span className="bullet-indicator" aria-hidden="true" style={{ color: "#007CC3", fontWeight: 700 }}>◈</span>
                <div>
                  <strong style={{ color: "#0F172A" }}>Turnkey GCC Operations:</strong>
                  <span> Full statutory compliance, site leadership, and infrastructure setup in Greater Noida.</span>
                </div>
              </div>
            </div>

            <div className="pathway-cta-actions" style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <a href="/hiring-consultation.html" className="reference-btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                <span>Explore Hiring Models</span>
                <span aria-hidden="true">→</span>
              </a>
              <a href="/technologies-roles-we-recruit.html" className="reference-btn-secondary">
                <span>16 Tech Groups</span>
              </a>
            </div>
          </div>

          {/* Pathway 2: For Learning & Upskilling Partners */}
          <div className="pathway-editorial-column pathway-edu" style={{ backgroundColor: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: 12, padding: "clamp(24px, 4vw, 36px)", boxShadow: "0 4px 20px rgba(0, 59, 113, 0.04)" }}>
            <div className="pathway-track-badge" style={{ backgroundColor: "rgba(0, 124, 195, 0.08)", color: "#007CC3", border: "1px solid rgba(0, 124, 195, 0.25)", display: "inline-block", padding: "4px 10px", borderRadius: 999, fontSize: "0.75rem", fontWeight: 700, marginBottom: 16 }}>
              PATHWAY // FOR LEARNING &amp; ACADEMIC PARTNERS
            </div>
            <h3 className="pathway-editorial-heading" style={{ fontSize: "1.45rem", color: "#0F172A", margin: "0 0 14px 0" }}>
              Applied Corporate Upskilling &amp; Academic Academies
            </h3>
            <p className="pathway-editorial-lead" style={{ color: "#475569", fontSize: "0.9375rem", lineHeight: 1.6, marginBottom: 24 }}>
              Bridge the technical execution gap with live, containerized lab curricula designed for enterprise engineering squads and higher education universities aligned with NEP 2020.
            </p>

            <div className="pathway-bullet-grid" style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 28 }}>
              <div className="pathway-bullet" style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: "0.875rem", color: "#334155" }}>
                <span className="bullet-indicator" aria-hidden="true" style={{ color: "#007CC3", fontWeight: 700 }}>◈</span>
                <div>
                  <strong style={{ color: "#0F172A" }}>~70% Live Lab Immersion:</strong>
                  <span> Engineers build on actual production toolchains rather than static slide decks.</span>
                </div>
              </div>
              <div className="pathway-bullet" style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: "0.875rem", color: "#334155" }}>
                <span className="bullet-indicator" aria-hidden="true" style={{ color: "#007CC3", fontWeight: 700 }}>◈</span>
                <div>
                  <strong style={{ color: "#0F172A" }}>GenAI &amp; Multi-Cloud Tracks:</strong>
                  <span> Role-based upskilling with pre- and post-course evaluation rubrics.</span>
                </div>
              </div>
              <div className="pathway-bullet" style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: "0.875rem", color: "#334155" }}>
                <span className="bullet-indicator" aria-hidden="true" style={{ color: "#007CC3", fontWeight: 700 }}>◈</span>
                <div>
                  <strong style={{ color: "#0F172A" }}>NEP 2020 Accreditation:</strong>
                  <span> University credit-aligned industry minors and faculty development programmes (FDP).</span>
                </div>
              </div>
            </div>

            <div className="pathway-cta-actions" style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              <a href="/corporate-training.html" className="reference-btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                <span>Explore Training Tracks</span>
                <span aria-hidden="true">→</span>
              </a>
              <a href="/training-for-institutes.html" className="reference-btn-secondary">
                <span>Institute Offerings</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
