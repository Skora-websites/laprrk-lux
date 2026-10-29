export function FaqSection() {
  const faqs = [
    {
      q: "Where is Laprrk based, and how does your global dual-delivery model work?",
      a: "Laprrk Technology Solutions LLP maintains primary engineering and research delivery centers in Greater Noida West, India and executive client engagement offices in Louisville, Kentucky, USA. This dual presence provides daily working hour overlap so US and global enterprise clients hold collaborative architecture reviews during their business hours while engineering delivery proceeds seamlessly in India.",
    },
    {
      q: "Do you sign an NDA before we share project requirements or architectures?",
      a: "Yes, without exception. We execute a mutual non-disclosure agreement (NDA) before any technical discussions or sharing of proprietary codebases, data schemas, candidate specifications, or training roadmaps. All engineers are bound by confidentiality, and code resides exclusively in client-owned repositories with strict role-based access control.",
    },
    {
      q: "How quickly can we initiate an engagement with Laprrk?",
      a: "Engagements begin with a structured 30 to 45-minute technical discovery session. Within 48 hours, our architecture team provides a written proposal detailing scope, milestone breakdowns, senior squad allocation, and commercials. Once approved, sprint onboarding commences under a single designated delivery partner.",
    },
    {
      q: "How do you coordinate cross-practice initiatives spanning engineering and talent?",
      a: "If your roadmap requires multi-practice synergy—such as establishing an India GCC engineering squad while upskilling local engineers or building core cloud infrastructure—we assign a single Principal Engagement Lead who coordinates delivery, staffing, and academy tracks without handoff friction.",
    },
    {
      q: "What commercial models and invoicing terms do you support?",
      a: "We invoice Indian clients in INR (with full GST compliance under GSTIN 09AAHFL0399D1ZU) and international clients in USD. Commercial structures include two-week agile sprint billing for dedicated engineering squads, milestone-based delivery, monthly retainers for ongoing managed support, or success fees for technical recruitment.",
    },
    {
      q: "Do you work with high-growth scale-ups as well as enterprise organizations?",
      a: "Yes. Our portfolio spans venture-backed scale-ups requiring rapid production-grade AI or microservices deployment, mid-market enterprises setting up dedicated India engineering teams (GCC), and large institutions rolling out accredited workforce enablement programs.",
    },
  ];

  return (
    <section className="faq-section surface-pure-white" id="faq" aria-label="Frequently Asked Questions" style={{ backgroundColor: "#FFFFFF", borderTop: "1px solid #E2E8F0", padding: "clamp(48px, 6vw, 80px) 0" }}>
      <div
        style={{
          maxWidth: 1360,
          margin: "0 auto",
          padding: "0 clamp(16px, 4vw, 36px)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "clamp(36px, 5vw, 56px)" }}>
          <div className="section-label" style={{ color: "#007CC3", justifyContent: "center" }}>
            <span style={{ display: "inline-block", width: 6, height: 6, borderRadius: "50%", backgroundColor: "#007CC3", marginRight: 8 }} />
            ENTERPRISE FAQS &amp; OPERATIONAL CLARIFICATIONS
          </div>
          <h2
            className="display-title"
            style={{
              fontSize: "clamp(2rem, 3.4vw, 3rem)",
              color: "#0F172A",
              marginBottom: 16,
            }}
          >
            Frequently asked questions.
          </h2>
          <p
            className="editorial-body"
            style={{ maxWidth: "600px", margin: "0 auto", color: "#475569" }}
          >
            Clear answers regarding our operating locations, intellectual property isolation, sprint SLAs, and commercial engagement models.
          </p>
        </div>

        <div className="faq-container" style={{ maxWidth: 840, margin: "0 auto" }}>
          {faqs.map((f) => (
            <div key={f.q} className="faq-accordion-item" style={{ backgroundColor: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: 8, marginBottom: 14, overflow: "hidden" }}>
              <details style={{ padding: "18px 24px" }}>
                <summary className="faq-summary" style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.05rem", fontWeight: 600, color: "#0F172A", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span>{f.q}</span>
                  <svg
                    className="faq-icon-chevron"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#007CC3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    style={{ width: 18, height: 18, flexShrink: 0, marginLeft: 12 }}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </summary>
                <div className="faq-answer" style={{ marginTop: 14, paddingTop: 14, borderTop: "1px solid #E2E8F0" }}>
                  <p style={{ margin: 0, color: "#475569", lineHeight: 1.65, fontSize: "0.9375rem" }}>{f.a}</p>
                </div>
              </details>
            </div>
          ))}

          <div style={{ textAlign: "center", marginTop: 40 }}>
            <a href="/faq.html" className="reference-btn-secondary" style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
              <span>View Extended Knowledge Base</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
