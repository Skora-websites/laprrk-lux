export function CareersAndLearning() {
  return (
    <section className="pathways-section surface-mist-sage" id="pathways" aria-label="Talent and Learning Pathways">
      <div
        style={{
          maxWidth: 1360,
          margin: "0 auto",
          padding: "0 clamp(16px, 4vw, 36px)",
        }}
      >
        <div style={{ marginBottom: "clamp(36px, 5vw, 60px)" }}>
          <span className="section-label">Dual Pathways</span>
          <h2
            className="display-title"
            style={{
              fontSize: "clamp(2rem, 3.4vw, 3.2rem)",
              color: "var(--text-dark-primary)",
              marginBottom: 16,
            }}
          >
            Differentiated pathways for organisations and learning partners.
          </h2>
          <p
            className="editorial-body"
            style={{ maxWidth: "660px" }}
          >
            Whether your enterprise requires calibrated software engineers and GCC hubs, or your institution is building accredited technical curricula, we structure distinct engagement workflows.
          </p>
        </div>

        {/* Varied Asymmetrical Dual-Track Presentation */}
        <div className="pathways-editorial-split">
          {/* Pathway 1: For Organisations (Wide Architectural Structure) */}
          <div className="pathway-editorial-column pathway-org">
            <div className="pathway-track-badge">PATHWAY // FOR ORGANISATIONS</div>
            <h3 className="pathway-editorial-heading">
              Scale Engineering Capacity &amp; Establish Tech Hubs
            </h3>
            <p className="pathway-editorial-lead">
              Overcome critical delivery bottlenecks through practitioner-screened permanent developers, specialized contract pods, or a phased turnkey India GCC hub establishment.
            </p>

            <div className="pathway-bullet-grid">
              <div className="pathway-bullet">
                <span className="bullet-indicator" aria-hidden="true">◈</span>
                <div>
                  <strong>Senior Code-Level Assessments:</strong>
                  <span> Candidate technical depth verified by working developers, eliminating resume spam.</span>
                </div>
              </div>
              <div className="pathway-bullet">
                <span className="bullet-indicator" aria-hidden="true">◈</span>
                <div>
                  <strong>5–7 Day Turnaround:</strong>
                  <span> Calibrated shortlists ready for client interviews within one business week.</span>
                </div>
              </div>
              <div className="pathway-bullet">
                <span className="bullet-indicator" aria-hidden="true">◈</span>
                <div>
                  <strong>Turnkey GCC Operations:</strong>
                  <span> Full statutory compliance, site leadership, and infrastructure setup in Greater Noida.</span>
                </div>
              </div>
            </div>

            <div className="pathway-cta-actions">
              <a href="/hiring-consultation.html" className="btn-editorial-primary">
                <span>Explore Hiring Models</span>
                <span aria-hidden="true">→</span>
              </a>
              <a href="/technologies-roles-we-recruit.html" className="btn-editorial-secondary">
                <span>16 Tech Groups</span>
              </a>
            </div>
          </div>

          {/* Pathway 2: For Learning & Upskilling Partners */}
          <div className="pathway-editorial-column pathway-edu">
            <div className="pathway-track-badge">PATHWAY // FOR LEARNING PARTNERS</div>
            <h3 className="pathway-editorial-heading">
              Applied Corporate Training &amp; Academic Programmes
            </h3>
            <p className="pathway-editorial-lead">
              Bridge the technical execution gap with live, lab-centric curricula designed for enterprise engineering teams and higher education institutions.
            </p>

            <div className="pathway-bullet-grid">
              <div className="pathway-bullet">
                <span className="bullet-indicator" aria-hidden="true">◈</span>
                <div>
                  <strong>~70% Live Lab Immersion:</strong>
                  <span> Engineers build on actual production toolchains rather than static slide decks.</span>
                </div>
              </div>
              <div className="pathway-bullet">
                <span className="bullet-indicator" aria-hidden="true">◈</span>
                <div>
                  <strong>GenAI &amp; Multi-Cloud Tracks:</strong>
                  <span> Role-based upskilling with pre- and post-course evaluation rubrics.</span>
                </div>
              </div>
              <div className="pathway-bullet">
                <span className="bullet-indicator" aria-hidden="true">◈</span>
                <div>
                  <strong>NEP 2020 Accreditation:</strong>
                  <span> University credit-aligned industry minors and faculty development programmes (FDP).</span>
                </div>
              </div>
            </div>

            <div className="pathway-cta-actions">
              <a href="/corporate-training.html" className="btn-editorial-primary">
                <span>Explore Training Tracks</span>
                <span aria-hidden="true">→</span>
              </a>
              <a href="/training-for-institutes.html" className="btn-editorial-secondary">
                <span>Institute Offerings</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
