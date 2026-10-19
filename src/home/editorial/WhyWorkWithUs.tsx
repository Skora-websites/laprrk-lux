export function WhyWorkWithUs() {
  const differentiators = [
    {
      num: "01",
      title: "Practitioner-Led Teams",
      body: "Senior engineers, technical recruiters, and active developers lead your projects directly. You collaborate with practitioners who write production code and architect systems daily, not sales intermediaries.",
    },
    {
      num: "02",
      title: "India & USA Operating Model",
      body: "High-velocity software engineering and research delivery from Greater Noida West, paired with client-hours overlap and relationship management from Louisville, Kentucky.",
    },
    {
      num: "03",
      title: "Confidential by Default",
      body: "Mutual NDA signed before discussing project specifics. Work resides in client-owned repositories and clouds, protected by role-based permissions and strict IP isolation.",
    },
    {
      num: "04",
      title: "Two-Week Demo Cadence",
      body: "Clear milestone visibility without surprises. Software engagements run on two-week sprints with working software demonstrations, and hiring pipelines report weekly pipeline metrics.",
    },
    {
      num: "05",
      title: "Clear, Written Proposals",
      body: "Scope, milestones, team composition, and commercials provided in writing before any financial commitment. We offer milestone, dedicated sprint, or fixed per-hire pricing.",
    },
    {
      num: "06",
      title: "One Accountable Partner",
      body: "Avoid handoffs between external recruiters, agency developers, and training consultants. One relationship lead manages the synergy across software, talent, and continuous team capability.",
    },
  ];

  return (
    <section className="why-section surface-warm-stone" id="why-us" aria-label="Why Partner With Us">
      <div
        style={{
          maxWidth: 1360,
          margin: "0 auto",
          padding: "0 clamp(16px, 4vw, 36px)",
        }}
      >
        <div style={{ marginBottom: "clamp(36px, 5vw, 60px)" }}>
          <span className="section-label">Operational Tenets</span>
          <h2
            className="display-title"
            style={{
              fontSize: "clamp(2rem, 3.4vw, 3.2rem)",
              color: "var(--text-dark-primary)",
              marginBottom: 16,
            }}
          >
            Practical delivery built on accountability.
          </h2>
          <p
            className="editorial-body"
            style={{ maxWidth: "660px" }}
          >
            We don't rely on generic agency claims or inflated marketing promises. Our relationships are grounded in engineering discipline, verified capabilities, and honest communication from the first scoping call.
          </p>
        </div>

        {/* Editorial Clean Grid with Fine Borders (NO FLOATING WHITE BOXES) */}
        <div className="why-editorial-matrix">
          {differentiators.map((d) => (
            <div key={d.num} className="why-matrix-item">
              <div className="why-matrix-header">
                <span className="why-matrix-num">{d.num} //</span>
                <h3 className="why-matrix-title">{d.title}</h3>
              </div>
              <p className="why-matrix-body">{d.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
