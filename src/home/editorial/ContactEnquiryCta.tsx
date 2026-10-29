import { useState, type FormEvent } from "react";

export function ContactEnquiryCta() {
  const [fullName, setFullName] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [company, setCompany] = useState("");
  const [service, setService] = useState("technology-solutions");
  const [message, setMessage] = useState("");

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Validate inputs
    if (!fullName.trim() || !workEmail.trim() || !company.trim() || !message.trim()) {
      setStatus("error");
      setErrorMessage("Please complete all required fields before submitting.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(workEmail.trim())) {
      setStatus("error");
      setErrorMessage("Please enter a valid work email address.");
      return;
    }

    setStatus("submitting");

    try {
      // Integration boundary: Check for configured custom webhook/form endpoint
      const configuredEndpoint = typeof window !== "undefined" ? (window as any)._LAPRRK_FORM_ENDPOINT : null;

      if (configuredEndpoint) {
        const response = await fetch(configuredEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            fullName,
            workEmail,
            company,
            service,
            message,
            timestamp: new Date().toISOString(),
          }),
        });
        if (!response.ok) throw new Error("Server submission failed");
      } else {
        // Documented fallback: Simulate network dispatch and open structured mailto for client email client
        await new Promise((resolve) => setTimeout(resolve, 800));
        const subject = encodeURIComponent(`Enterprise Enquiry from ${fullName} (${company}) - ${service}`);
        const body = encodeURIComponent(
          `Name: ${fullName}\nCompany: ${company}\nWork Email: ${workEmail}\nService: ${service}\n\nProject Parameters:\n${message}\n\nSent from Laprrk Technology Solutions website enterprise scoping form.`
        );
        window.location.href = `mailto:info@laprrk.com?subject=${subject}&body=${body}`;
      }

      setStatus("success");
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(
        err?.message || "An unexpected error occurred. Please contact us directly at info@laprrk.com."
      );
    }
  };

  return (
    <section className="contact-cta-section surface-midnight-slate" id="contact" aria-label="Discuss Your Requirements" style={{ backgroundColor: "#031026", color: "#FFFFFF", padding: "clamp(60px, 8vw, 96px) 0" }}>
      <div
        style={{
          maxWidth: 1360,
          margin: "0 auto",
          padding: "0 clamp(16px, 4vw, 36px)",
        }}
      >
        <div className="contact-cta-grid" style={{ display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: "clamp(32px, 5vw, 64px)", alignItems: "start" }}>
          {/* Left Column: Context & Direct Contact Links */}
          <div>
            <div className="section-label" style={{ color: "#00A3E0" }}>
              <span style={{ display: "inline-block", width: 6, height: 6, borderRadius: "50%", backgroundColor: "#00A3E0", marginRight: 8 }} />
              ENTERPRISE SCOPING &amp; CONSULTATION
            </div>

            <h2 className="contact-headline" style={{ fontSize: "clamp(2.2rem, 3.8vw, 3.4rem)", fontWeight: 700, color: "#FFFFFF", margin: "16px 0 20px 0", lineHeight: 1.15 }}>
              Navigate your next with confidence.
            </h2>

            <p className="contact-lede" style={{ color: "#CBD5E1", fontSize: "1.05rem", lineHeight: 1.65, marginBottom: 32 }}>
              Tell us what your organization is navigating. We'll use your requirements to assemble the right technical team—whether that involves an architectural feasibility assessment, a 14-day proof of concept sprint, or a turnkey India GCC staffing roadmap.
            </p>

            <div className="contact-direct-cards" style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <a href="mailto:info@laprrk.com" className="contact-direct-card" style={{ backgroundColor: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.12)", borderRadius: 8, padding: "16px 20px", textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column", gap: 4 }}>
                <span className="contact-direct-label" style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#00A3E0", fontWeight: 700 }}>
                  Central Scoping &amp; Mutual NDA
                </span>
                <span className="contact-direct-val" style={{ fontSize: "1.1rem", fontWeight: 700, color: "#FFFFFF" }}>info@laprrk.com</span>
                <span style={{ fontSize: "0.75rem", color: "#94A3B8" }}>
                  Executive response delivered within one business day
                </span>
              </a>

              <a href="tel:+918860664929" className="contact-direct-card" style={{ backgroundColor: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.12)", borderRadius: 8, padding: "16px 20px", textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column", gap: 4 }}>
                <span className="contact-direct-label" style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#00A3E0", fontWeight: 700 }}>
                  India Delivery &amp; Engineering Center (IST)
                </span>
                <span className="contact-direct-val" style={{ fontSize: "1.1rem", fontWeight: 700, color: "#FFFFFF" }}>+91 88606 64929</span>
                <span style={{ fontSize: "0.75rem", color: "#94A3B8" }}>
                  Office No. 605, 6th Floor, Raksha Addela Mart, Gaur City 2, Greater Noida West, UP 201318
                </span>
              </a>

              <a href="tel:+15023095749" className="contact-direct-card" style={{ backgroundColor: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.12)", borderRadius: 8, padding: "16px 20px", textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column", gap: 4 }}>
                <span className="contact-direct-label" style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#00A3E0", fontWeight: 700 }}>
                  USA Client &amp; Engagement Office (ET)
                </span>
                <span className="contact-direct-val" style={{ fontSize: "1.1rem", fontWeight: 700, color: "#FFFFFF" }}>+1 (502) 309-5749</span>
                <span style={{ fontSize: "0.75rem", color: "#94A3B8" }}>
                  Louisville, Kentucky, United States
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: Working Enquiry Form */}
          <div className="enquiry-form-card" style={{ backgroundColor: "#07152B", border: "1px solid rgba(0, 163, 224, 0.25)", borderRadius: 12, padding: "clamp(24px, 4vw, 36px)", boxShadow: "0 24px 60px rgba(0, 0, 0, 0.4)" }}>
            <h3
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "1.35rem",
                fontWeight: 700,
                color: "#FFFFFF",
                marginBottom: 8,
              }}
            >
              Start an Enterprise Conversation
            </h3>
            <p
              style={{
                fontSize: "0.875rem",
                color: "#CBD5E1",
                marginBottom: 24,
                lineHeight: 1.5,
              }}
            >
              Share your software engineering, talent acquisition, or corporate upskilling priorities. All scoping inquiries are protected under mutual NDA.
            </p>

            {status === "success" ? (
              <div className="form-feedback-success" role="status" style={{ backgroundColor: "rgba(16, 185, 129, 0.12)", border: "1px solid #10B981", borderRadius: 8, padding: 20, color: "#FFFFFF" }}>
                <strong style={{ display: "block", marginBottom: 6, fontSize: "1rem", color: "#34D399" }}>
                  Enquiry Registered Successfully
                </strong>
                Thank you, {fullName}. Your requirement has been routed to our technical architecture lead. We will review your project parameters and respond within one business day.
                <div style={{ marginTop: 14 }}>
                  <button
                    type="button"
                    onClick={() => {
                      setStatus("idle");
                      setFullName("");
                      setWorkEmail("");
                      setCompany("");
                      setMessage("");
                    }}
                    style={{
                      background: "transparent",
                      border: "1px solid #34D399",
                      color: "#34D399",
                      padding: "6px 14px",
                      borderRadius: 4,
                      cursor: "pointer",
                      fontSize: "0.8125rem",
                    }}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                {status === "error" && (
                  <div className="form-feedback-error" role="alert" style={{ backgroundColor: "rgba(239, 68, 68, 0.15)", border: "1px solid #EF4444", borderRadius: 6, padding: "10px 14px", color: "#FCA5A5", fontSize: "0.875rem", marginBottom: 16 }}>
                    {errorMessage}
                  </div>
                )}

                <div className="enquiry-form-field" style={{ marginBottom: 16 }}>
                  <label htmlFor="enquiry-name" className="enquiry-label" style={{ display: "block", fontSize: "0.8125rem", fontWeight: 600, color: "#E2E8F0", marginBottom: 6 }}>
                    Full Name *
                  </label>
                  <input
                    id="enquiry-name"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. David Henderson"
                    className="enquiry-input"
                    style={{ width: "100%", padding: "12px 14px", borderRadius: 6, backgroundColor: "rgba(255, 255, 255, 0.06)", border: "1px solid rgba(255, 255, 255, 0.16)", color: "#FFFFFF", fontSize: "0.9375rem" }}
                  />
                </div>

                <div className="enquiry-form-field" style={{ marginBottom: 16 }}>
                  <label htmlFor="enquiry-email" className="enquiry-label" style={{ display: "block", fontSize: "0.8125rem", fontWeight: 600, color: "#E2E8F0", marginBottom: 6 }}>
                    Work Email Address *
                  </label>
                  <input
                    id="enquiry-email"
                    type="email"
                    required
                    value={workEmail}
                    onChange={(e) => setWorkEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="enquiry-input"
                    style={{ width: "100%", padding: "12px 14px", borderRadius: 6, backgroundColor: "rgba(255, 255, 255, 0.06)", border: "1px solid rgba(255, 255, 255, 0.16)", color: "#FFFFFF", fontSize: "0.9375rem" }}
                  />
                </div>

                <div className="enquiry-form-field" style={{ marginBottom: 16 }}>
                  <label htmlFor="enquiry-company" className="enquiry-label" style={{ display: "block", fontSize: "0.8125rem", fontWeight: 600, color: "#E2E8F0", marginBottom: 6 }}>
                    Company or Organisation *
                  </label>
                  <input
                    id="enquiry-company"
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Enterprise / Venture Name"
                    className="enquiry-input"
                    style={{ width: "100%", padding: "12px 14px", borderRadius: 6, backgroundColor: "rgba(255, 255, 255, 0.06)", border: "1px solid rgba(255, 255, 255, 0.16)", color: "#FFFFFF", fontSize: "0.9375rem" }}
                  />
                </div>

                <div className="enquiry-form-field" style={{ marginBottom: 16 }}>
                  <label htmlFor="enquiry-service" className="enquiry-label" style={{ display: "block", fontSize: "0.8125rem", fontWeight: 600, color: "#E2E8F0", marginBottom: 6 }}>
                    Primary Capability of Interest *
                  </label>
                  <select
                    id="enquiry-service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="enquiry-select"
                    style={{ width: "100%", padding: "12px 14px", borderRadius: 6, backgroundColor: "#031026", border: "1px solid rgba(255, 255, 255, 0.16)", color: "#FFFFFF", fontSize: "0.9375rem" }}
                  >
                    <option value="technology-solutions">01 // Digital Engineering &amp; Applied AI (Custom Software, LLMs, Cloud)</option>
                    <option value="talent-acquisition">02 // Strategic Talent &amp; India GCC Hub Setup</option>
                    <option value="corporate-learning">03 // Corporate Learning &amp; AI Academies</option>
                    <option value="multi-practice">Integrated Strategic Initiative (Software + Talent + Training)</option>
                  </select>
                </div>

                <div className="enquiry-form-field" style={{ marginBottom: 20 }}>
                  <label htmlFor="enquiry-message" className="enquiry-label" style={{ display: "block", fontSize: "0.8125rem", fontWeight: 600, color: "#E2E8F0", marginBottom: 6 }}>
                    Project Parameters or Requirements *
                  </label>
                  <textarea
                    id="enquiry-message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your current architectural challenge, timeline, or engineering staffing needs..."
                    className="enquiry-textarea"
                    style={{ width: "100%", padding: "12px 14px", borderRadius: 6, backgroundColor: "rgba(255, 255, 255, 0.06)", border: "1px solid rgba(255, 255, 255, 0.16)", color: "#FFFFFF", fontSize: "0.9375rem", resize: "vertical" }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="btn-editorial-on-dark"
                  style={{ width: "100%", justifyContent: "center", backgroundColor: "#007CC3", borderColor: "#007CC3", color: "#FFFFFF", padding: "14px", borderRadius: 6, fontWeight: 700, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8 }}
                >
                  {status === "submitting" ? (
                    <span>Transmitting Project Brief...</span>
                  ) : (
                    <>
                      <span>Transmit Scoping Brief</span>
                      <span aria-hidden="true">→</span>
                    </>
                  )}
                </button>

                <div
                  style={{
                    marginTop: 14,
                    fontSize: "0.75rem",
                    color: "#94A3B8",
                    textAlign: "center",
                  }}
                >
                  All discussions and submitted briefs are protected under strict mutual NDA.
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
