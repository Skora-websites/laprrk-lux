export function EnterpriseTrustStrip() {
  const ecosystems = [
    { name: "AWS Cloud", category: "Cloud Architecture" },
    { name: "Microsoft Azure", category: "Enterprise Cloud" },
    { name: "Google Cloud", category: "Data & ML Platform" },
    { name: "Kubernetes & CNCF", category: "Container Orchestration" },
    { name: "Python & FastAPI", category: "Microservices & AI" },
    { name: "TypeScript & React", category: "Modern Frontends" },
    { name: "PyTorch & LangChain", category: "Applied GenAI" },
    { name: "Apache Kafka", category: "Event Streaming" },
    { name: "PostgreSQL & pgvector", category: "Resilient Data Core" },
    { name: "Docker & CI/CD", category: "Automated Pipelines" },
    { name: "Terraform", category: "Infrastructure as Code" },
    { name: "Snowflake & Databricks", category: "Enterprise Data Lake" },
  ];

  const standards = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#007CC3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
      title: "SOC 2 & ISO 27001",
      desc: "Architected to enterprise security standards with strict audit trails.",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#007CC3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M7 15h0M2 9.5h20" />
        </svg>
      ),
      title: "100% Client-Owned IP",
      desc: "All source code, schemas, and assets reside in client-managed repos.",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#007CC3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      title: "14-Day Sprint Deployments",
      desc: "Predictable milestone demo cycles with demonstrable working software.",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#007CC3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
      title: "Dual US-India Delivery",
      desc: "Greater Noida West technical squads paired with Louisville, KY governance.",
    },
  ];

  return (
    <section
      aria-label="Enterprise Ecosystem & Governance"
      style={{
        backgroundColor: "#F8FAFC",
        borderTop: "1px solid #E2E8F0",
        borderBottom: "1px solid #E2E8F0",
        padding: "clamp(32px, 4vw, 48px) 0",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1360, margin: "0 auto", padding: "0 clamp(16px, 4vw, 36px)" }}>
        {/* Top Header Label */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            marginBottom: 24,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span
              style={{
                display: "inline-block",
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "#007CC3",
                boxShadow: "0 0 0 3px rgba(0, 124, 195, 0.2)",
              }}
            />
            <span
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "0.8125rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#007CC3",
              }}
            >
              Technology Ecosystem &amp; Enterprise Governance
            </span>
          </div>

          <span
            style={{
              fontFamily: "Manrope, sans-serif",
              fontSize: "0.8125rem",
              color: "#64748B",
            }}
          >
            Production-Tested Across Fortune 500 &amp; High-Growth Stacks
          </span>
        </div>

        {/* 4 Pillars of Governance */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 16,
            marginBottom: 28,
          }}
        >
          {standards.map((s, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                gap: 14,
                padding: "16px 18px",
                borderRadius: 8,
                backgroundColor: "#FFFFFF",
                border: "1px solid #E2E8F0",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.04)",
                transition: "border-color 0.2s ease, transform 0.2s ease",
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 6,
                  backgroundColor: "rgba(0, 124, 195, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {s.icon}
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    color: "#0F172A",
                    margin: "0 0 4px 0",
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontFamily: "Manrope, sans-serif",
                    fontSize: "0.75rem",
                    color: "#64748B",
                    margin: 0,
                    lineHeight: 1.4,
                  }}
                >
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row: Continuous Brand & Tech Ecosystem Strip */}
      <div
        style={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          padding: "8px 0",
        }}
      >
        <div className="trust-marquee-track">
          {/* Double array for seamless loop */}
          {[...ecosystems, ...ecosystems].map((eco, index) => (
            <div
              key={index}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "8px 20px",
                margin: "0 8px",
                borderRadius: 999,
                backgroundColor: "#FFFFFF",
                border: "1px solid #E2E8F0",
                whiteSpace: "nowrap",
                fontSize: "0.8125rem",
                boxShadow: "0 1px 2px rgba(0, 0, 0, 0.02)",
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  backgroundColor: "#007CC3",
                }}
              />
              <strong style={{ color: "#0F172A", fontWeight: 700, fontFamily: "Space Grotesk, sans-serif" }}>
                {eco.name}
              </strong>
              <span style={{ color: "#94A3B8", fontSize: "0.75rem" }}>•</span>
              <span style={{ color: "#64748B", fontSize: "0.75rem", fontFamily: "Manrope, sans-serif" }}>
                {eco.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
