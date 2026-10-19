export function HowWeWork() {
  const steps = [
    {
      num: "01",
      phase: "Understand",
      tagline: "Uncover real constraints before writing code.",
      body: "We conduct a 30-minute structured discovery session under mutual NDA to audit your current architecture, tech debt, timeline constraints, and desired business outcomes.",
      deliverable: "Mutual NDA · Scope Inventory",
      accent: false,
    },
    {
      num: "02",
      phase: "Define",
      tagline: "Transparent architectural scope and commercials.",
      body: "Within 48 hours, we supply a detailed written proposal specifying milestones, senior team allocation, technology choices, and fixed sprint or hiring pricing.",
      deliverable: "Written Proposal · 48-Hour SLA",
      accent: false,
    },
    {
      num: "03",
      phase: "Deliver",
      tagline: "Disciplined two-week sprints with working demos.",
      body: "We build in transparent iterations. At the close of every two-week sprint, we present a working software demonstration—never slides or theoretical progress.",
      deliverable: "Working Software Every 2 Weeks",
      accent: true, // highlighted key stage
    },
    {
      num: "04",
      phase: "Improve",
      tagline: "Production evaluation and calibrated scale.",
      body: "We monitor telemetry, measure business performance benchmarks against baseline goals, and structure next steps for maintainable, long-term operational scale.",
      deliverable: "Telemetry Audit · Scale Roadmap",
      accent: false,
    },
  ];

  return (
    <section className="process-section surface-warm-ivory" id="how-we-work" aria-label="Our Delivery Framework">
      <div
        style={{
          maxWidth: 1360,
          margin: "0 auto",
          padding: "0 clamp(16px, 4vw, 36px)",
        }}
      >
        <div style={{ marginBottom: "clamp(36px, 5vw, 64px)" }}>
          <span className="section-label">Structured Delivery Framework</span>
          <h2
            className="display-title"
            style={{
              fontSize: "clamp(2rem, 3.4vw, 3.2rem)",
              color: "var(--text-dark-primary)",
              marginBottom: 16,
            }}
          >
            Clear thinking. Structured delivery.
          </h2>
          <p
            className="editorial-body"
            style={{ maxWidth: "660px" }}
          >
            A continuous four-stage operating model that eliminates guesswork, establishes predictable two-week sprint rhythms, and keeps senior engineering accountability at the forefront.
          </p>
        </div>

        {/* Connected Four-Stage Timeline (NO BOXED CARDS) */}
        <div className="connected-timeline-wrapper">
          {/* Continuous connecting horizontal rail (desktop) */}
          <div className="timeline-horizontal-rail" aria-hidden="true">
            <div className="timeline-rail-line" />
          </div>

          <div className="timeline-stages-grid">
            {steps.map((s) => (
              <div
                key={s.num}
                className={`timeline-stage-item ${s.accent ? "is-featured-stage" : ""}`}
              >
                {/* Stage Marker on the Connecting Line */}
                <div className="timeline-marker-wrap">
                  <div className="timeline-node-pin">
                    <span className="timeline-node-number">{s.num}</span>
                  </div>
                </div>

                {/* Stage Typography & Narrative */}
                <div className="timeline-content-block">
                  <span className="timeline-stage-name">{s.phase}</span>
                  <h3 className="timeline-stage-tagline">{s.tagline}</h3>
                  <p className="timeline-stage-body">{s.body}</p>

                  <div className="timeline-stage-deliverable">
                    <span className="deliverable-indicator" aria-hidden="true">◈</span>
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
