export function WhyWorkWithUs() {
  const differentiators = [
    {
      num: "01",
      title: "Practitioner-Led Engineering",
      body: "Senior systems architects, technical recruiters, and active developers lead your projects directly. You collaborate with practitioners who design production code and high-throughput systems daily, not sales intermediaries.",
    },
    {
      num: "02",
      title: "Dual US-India Delivery Model",
      body: "High-velocity software engineering and research delivery from Greater Noida West, paired with US client-hours overlap, SLA governance, and executive relationship management from Louisville, Kentucky.",
    },
    {
      num: "03",
      title: "100% Client IP & Confidentiality",
      body: "Mutual NDA signed before discussing project specifics. All code, model weights, and data reside in client-owned repositories and VPC clouds, protected by strict role-based access and SOC2 compliance controls.",
    },
    {
      num: "04",
      title: "14-Day Sprint Demo Cadence",
      body: "Complete milestone visibility without surprises. Software delivery squads run on strict two-week sprint cadences with demonstrable working software releases, and talent pipelines report verified candidate benchmarks weekly.",
    },
    {
      num: "05",
      title: "Deterministic Commercials & SLAs",
      body: "Architecture blueprints, sprint milestones, team composition, and commercials are provided in writing before any financial commitment. We offer milestone, dedicated sprint pod, or fixed per-hire pricing.",
    },
    {
      num: "06",
      title: "Single Accountable Partner",
      body: "Eliminate friction between external recruiters, agency developers, and training consultancies. One relationship lead orchestrates the strategic synergy across software engineering, GCC hubs, and continuous team capability.",
    },
  ];

  return (
    <section className="why-section surface-pure-white" id="why-us" aria-label="Why Partner With Us" style={{ backgroundColor: "#FFFFFF", borderTop: "1px solid #E2E8F0" }}>
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
            ENTERPRISE DIFFERENTIATORS &amp; TRUST TENETS
          </span>
          <h2
            className="display-title"
            style={{
              fontSize: "clamp(2rem, 3.4vw, 3.2rem)",
              color: "#0F172A",
              marginBottom: 16,
            }}
          >
            Enterprise rigor built on transparency and velocity.
          </h2>
          <p
            className="editorial-body"
            style={{ maxWidth: "660px", color: "#475569" }}
          >
            We don't rely on generic agency claims or inflated marketing buzzwords. Our relationships are grounded in disciplined engineering standards, verified candidate depth, and transparent communication from the first scoping call.
          </p>
        </div>

        {/* Enterprise Matrix */}
        <div className="why-editorial-matrix" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 28 }}>
          {differentiators.map((d) => (
            <div key={d.num} className="why-matrix-item" style={{ backgroundColor: "#F8FAFC", border: "1px solid #E2E8F0", borderRadius: 10, padding: "28px 24px", transition: "transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease" }}>
              <div className="why-matrix-header" style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 12 }}>
                <span className="why-matrix-num" style={{ color: "#007CC3", fontFamily: "Space Grotesk, sans-serif", fontSize: "1.1rem", fontWeight: 700 }}>{d.num} //</span>
                <h3 className="why-matrix-title" style={{ color: "#0F172A", fontSize: "1.15rem", margin: 0 }}>{d.title}</h3>
              </div>
              <p className="why-matrix-body" style={{ color: "#475569", fontSize: "0.875rem", lineHeight: 1.65, margin: 0 }}>{d.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
