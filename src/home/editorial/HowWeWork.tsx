export function HowWeWork() {
  const steps = [
    {
      num: "01",
      phase: "Discover & Scope",
      tagline: "Uncover real architectural constraints under NDA.",
      body: "We conduct a structured 45-minute discovery briefing under mutual NDA to audit your technology stack, evaluate latency/token bounds, map regulatory compliance, and define measurable KPIs.",
      deliverable: "Mutual NDA · Scope Inventory · Risk Heatmap",
      accent: false,
    },
    {
      num: "02",
      phase: "Architect & Sprint Plan",
      tagline: "Transparent architecture blueprints & 48-hr SLA.",
      body: "Within 48 hours, we deliver a comprehensive blueprint detailing microservices topology, LLM evaluation criteria, senior squad allocation, and fixed milestone pricing.",
      deliverable: "Architecture Spec · 48-Hour SLA · Commercials",
      accent: false,
    },
    {
      num: "03",
      phase: "High-Velocity Sprints",
      tagline: "Two-week agile cadence with working software demos.",
      body: "We build in rapid 14-day production iterations. At the close of every sprint, engineering leadership presents a demonstrable working software release—never slide decks.",
      deliverable: "Production Code Releases Every 14 Days",
      accent: true, // highlighted key stage
    },
    {
      num: "04",
      phase: "Scale & Optimize",
      tagline: "Continuous telemetry, SLA benchmarks & calibrated scale.",
      body: "We track production telemetry, auto-scaling thresholds, model drift, and operational performance against baseline targets, preparing systems for seamless enterprise scale.",
      deliverable: "Telemetry Audit · 99.95% Availability · Scale Roadmap",
      accent: false,
    },
  ];

  return (
    <section className="process-section surface-pure-white" id="how-we-work" aria-label="Our Delivery Framework" style={{ backgroundColor: "#FFFFFF", borderTop: "1px solid #E2E8F0" }}>
      <div
        style={{
          maxWidth: 1360,
          margin: "0 auto",
          padding: "clamp(48px, 6vw, 80px) clamp(16px, 4vw, 36px)",
        }}
      >
        <div style={{ marginBottom: "clamp(36px, 5vw, 64px)" }}>
          <span className="section-label" style={{ color: "#007CC3" }}>
            <span style={{ display: "inline-block", width: 6, height: 6, borderRadius: "50%", backgroundColor: "#007CC3", marginRight: 8 }} />
            ENTERPRISE DELIVERY FRAMEWORK
          </span>
          <h2
            className="display-title"
            style={{
              fontSize: "clamp(2rem, 3.4vw, 3.2rem)",
              color: "#0F172A",
              marginBottom: 16,
            }}
          >
            Clear thinking. Predictable enterprise execution.
          </h2>
          <p
            className="editorial-body"
            style={{ maxWidth: "660px", color: "#475569" }}
          >
            A disciplined four-stage operating model that eliminates guesswork, guarantees predictable two-week sprint rhythms, and keeps senior engineering accountability at the forefront.
          </p>
        </div>

        {/* Connected Four-Stage Timeline */}
        <div className="connected-timeline-wrapper">
          {/* Continuous connecting horizontal rail (desktop) */}
          <div className="timeline-horizontal-rail" aria-hidden="true">
            <div className="timeline-rail-line" style={{ backgroundColor: "rgba(0, 124, 195, 0.2)" }} />
          </div>

          <div className="timeline-stages-grid">
            {steps.map((s) => (
              <div
                key={s.num}
                className={`timeline-stage-item ${s.accent ? "is-featured-stage" : ""}`}
              >
                {/* Stage Marker on the Connecting Line */}
                <div className="timeline-marker-wrap">
                  <div className="timeline-node-pin" style={{ backgroundColor: s.accent ? "#007CC3" : "#0F172A", borderColor: s.accent ? "#00A3E0" : "#CBD5E1" }}>
                    <span className="timeline-node-number" style={{ color: "#FFFFFF" }}>{s.num}</span>
                  </div>
                </div>

                {/* Stage Typography & Narrative */}
                <div className="timeline-content-block" style={{ backgroundColor: s.accent ? "rgba(0, 124, 195, 0.04)" : "#F8FAFC", border: s.accent ? "1.5px solid #007CC3" : "1px solid #E2E8F0", borderRadius: 10, padding: "24px 20px" }}>
                  <span className="timeline-stage-name" style={{ color: "#007CC3", fontWeight: 700 }}>{s.phase}</span>
                  <h3 className="timeline-stage-tagline" style={{ color: "#0F172A", margin: "8px 0 12px 0" }}>{s.tagline}</h3>
                  <p className="timeline-stage-body" style={{ color: "#475569", lineHeight: 1.6 }}>{s.body}</p>

                  <div className="timeline-stage-deliverable" style={{ marginTop: 16, paddingTop: 12, borderTop: "1px solid #E2E8F0", color: "#007CC3", fontSize: "0.8125rem", fontWeight: 600 }}>
                    <span className="deliverable-indicator" aria-hidden="true" style={{ marginRight: 6 }}>◈</span>
                    <span>{s.deliverable}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
