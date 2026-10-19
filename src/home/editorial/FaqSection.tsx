export function FaqSection() {
  const faqs = [
    {
      q: "Where is Laprrk based, and which regions do you serve?",
      a: "Laprrk Technology Solutions LLP maintains delivery and engineering operations in Greater Noida West, India and client relationship offices in Louisville, Kentucky, USA. This dual presence provides substantial daily working hour overlap so US and global clients can hold collaborative sprint discussions during their business day while engineering delivery proceeds seamlessly in India.",
    },
    {
      q: "Do you sign an NDA before we share project requirements?",
      a: "Yes, without exception. We execute a mutual non-disclosure agreement before any detailed discussions or sharing of proprietary codebases, architecture diagrams, candidate specifications, or training roadmaps. All team members are legally bound to confidentiality, and development happens inside client-owned repositories with least-privilege access.",
    },
    {
      q: "How do we start an engagement with Laprrk?",
      a: "Engagements typically begin with a brief 30-minute discovery call to evaluate your goals, technical constraints, and timelines. Within 48 hours, we supply a detailed written proposal specifying architectural scope, team allocation, milestones, and commercials. Once approved, kickoff commences with a single designated technical relationship lead.",
    },
    {
      q: "Which division should I contact if our project requires multiple services?",
      a: "You can submit an enquiry for any of our three practices (Technology Solutions, Talent Acquisition, or Corporate Learning). If your initiative spans multiple areas—such as building a new software feature while hiring engineers or training internal teams (e.g. Hire-Train-Deploy)—one dedicated coordinator synchronises the entire delivery.",
    },
    {
      q: "In which currencies do you invoice, and what commercial terms apply?",
      a: "We invoice Indian clients in INR (with GST-compliant tax invoicing under GSTIN 09AAHFL0399D1ZU) and international clients in USD. Commercial structures include milestone-based project billing, dedicated two-week sprint cycles for ongoing product engineering, monthly retainers, or success fees for permanent technical recruitment.",
    },
    {
      q: "Can you collaborate with early-stage startups as well as established enterprises?",
      a: "Yes. Our client portfolio spans venture-backed startups needing high-velocity MVP builds, mid-market organisations establishing dedicated engineering squads, and enterprise institutions scaling multi-cohort training tracks. We tailor the squad size and engagement cadence to your exact operational stage.",
    },
  ];

  return (
    <section className="faq-section" id="faq" aria-label="Frequently Asked Questions">
      <div
        style={{
          maxWidth: 1360,
          margin: "0 auto",
          padding: "0 clamp(16px, 4vw, 36px)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "clamp(36px, 5vw, 56px)" }}>
          <div className="section-label">Questions &amp; Clarifications</div>
          <h2
            className="display-title"
            style={{
              fontSize: "clamp(2rem, 3.4vw, 3rem)",
              color: "var(--text-dark-primary)",
              marginBottom: 16,
            }}
          >
            Frequently asked questions.
          </h2>
          <p
            className="editorial-body"
            style={{ maxWidth: "600px", margin: "0 auto" }}
          >
            Straightforward answers regarding our operating locations, confidentiality standards, engagement workflows, and billing models.
          </p>
        </div>

        <div className="faq-container">
          {faqs.map((f, i) => (
            <div key={f.q} className="faq-accordion-item">
              <details>
                <summary className="faq-summary">
                  <span>{f.q}</span>
                  <svg
                    className="faq-icon-chevron"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </summary>
                <div className="faq-answer">
                  <p style={{ margin: 0 }}>{f.a}</p>
                </div>
              </details>
            </div>
          ))}

          <div style={{ textAlign: "center", marginTop: 40 }}>
            <a href="/faq.html" className="btn-editorial-secondary">
              <span>View Extended Knowledge Base</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
