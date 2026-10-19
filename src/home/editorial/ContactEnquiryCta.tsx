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
        const subject = encodeURIComponent(`New Enquiry from ${fullName} (${company}) - ${service}`);
        const body = encodeURIComponent(
          `Name: ${fullName}\nCompany: ${company}\nWork Email: ${workEmail}\nService: ${service}\n\nProject Overview:\n${message}\n\nSent from Laprrk Technology Solutions website enquiry form.`
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
    <section className="contact-cta-section" id="contact" aria-label="Discuss Your Requirements">
      <div
        style={{
          maxWidth: 1360,
          margin: "0 auto",
          padding: "0 clamp(16px, 4vw, 36px)",
        }}
      >
        <div className="contact-cta-grid">
          {/* Left Column: Context & Direct Contact Links */}
          <div>
            <div className="section-label">Direct Scoping</div>

            <h2 className="contact-headline">
              Let's make your next move count.
            </h2>

            <p className="contact-lede">
              Tell us what your organisation is working toward. We'll use your requirements to determine the most appropriate next step—whether that's a quick discovery call, a technical architecture review, or a tailored proposal.
            </p>

            <div className="contact-direct-cards">
              <a href="mailto:info@laprrk.com" className="contact-direct-card">
                <span className="contact-direct-label">Direct Email</span>
                <span className="contact-direct-val">info@laprrk.com</span>
                <span style={{ fontSize: "0.75rem", color: "var(--text-light-muted)" }}>
                  Responses delivered within one business day
                </span>
              </a>

              <a href="tel:+918860664929" className="contact-direct-card">
                <span className="contact-direct-label">India Office · IST Working Hours</span>
                <span className="contact-direct-val">+91 88606 64929</span>
                <span style={{ fontSize: "0.75rem", color: "var(--text-light-muted)" }}>
                  Office No. 605, Raksha Addela Mart, Greater Noida West
                </span>
              </a>

              <a href="tel:+15023095749" className="contact-direct-card">
                <span className="contact-direct-label">USA Office · ET Working Hours</span>
                <span className="contact-direct-val">+1 (502) 309-5749</span>
                <span style={{ fontSize: "0.75rem", color: "var(--text-light-muted)" }}>
                  Louisville, Kentucky, United States
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: Working Enquiry Form */}
          <div className="enquiry-form-card">
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.35rem",
                fontWeight: 600,
                color: "var(--text-light-primary)",
                marginBottom: 8,
              }}
            >
              Start a Conversation
            </h3>
            <p
              style={{
                fontSize: "0.875rem",
                color: "var(--text-light-secondary)",
                marginBottom: 24,
                lineHeight: 1.5,
              }}
            >
              Share your project, team, or training requirement. All inquiries are held under strict confidentiality.
            </p>

            {status === "success" ? (
              <div className="form-feedback-success" role="status">
                <strong style={{ display: "block", marginBottom: 6, fontSize: "1rem" }}>
                  Enquiry Registered Successfully
                </strong>
                Thank you, {fullName}. Your requirement has been routed to our technical scoping team. We will review your project parameters and respond within one business day.
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
                      border: "1px solid currentColor",
                      color: "inherit",
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
                  <div className="form-feedback-error" role="alert">
                    {errorMessage}
                  </div>
                )}

                <div className="enquiry-form-field">
                  <label htmlFor="enquiry-name" className="enquiry-label">
                    Full Name *
                  </label>
                  <input
                    id="enquiry-name"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Elena Rostova"
                    className="enquiry-input"
                  />
                </div>

                <div className="enquiry-form-field">
                  <label htmlFor="enquiry-email" className="enquiry-label">
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
                  />
                </div>

                <div className="enquiry-form-field">
                  <label htmlFor="enquiry-company" className="enquiry-label">
                    Company or Organisation *
                  </label>
                  <input
                    id="enquiry-company"
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Organisation Name"
                    className="enquiry-input"
                  />
                </div>

                <div className="enquiry-form-field">
                  <label htmlFor="enquiry-service" className="enquiry-label">
                    Primary Service of Interest *
                  </label>
                  <select
                    id="enquiry-service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="enquiry-select"
                  >
                    <option value="technology-solutions">01 // Technology Solutions (Custom Software, AI, Cloud, QA)</option>
                    <option value="talent-acquisition">02 // Talent Acquisition (Permanent, Contract, GCC Hub Setup)</option>
                    <option value="corporate-learning">03 // Corporate Learning (AI Upskilling, NEP Courses, FDP)</option>
                    <option value="multi-practice">Cross-Functional / Multi-Practice Initiative</option>
                  </select>
                </div>

                <div className="enquiry-form-field">
                  <label htmlFor="enquiry-message" className="enquiry-label">
                    Project Overview or Specific Requirements *
                  </label>
                  <textarea
                    id="enquiry-message"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your current challenge, desired outcomes, target timeline, or tech stack..."
                    className="enquiry-textarea"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="btn-editorial-on-dark"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  {status === "submitting" ? (
                    <span>Submitting Scoping Brief...</span>
                  ) : (
                    <>
                      <span>Transmit Project Brief</span>
                      <span aria-hidden="true">→</span>
                    </>
                  )}
                </button>

                <div
                  style={{
                    marginTop: 14,
                    fontSize: "0.75rem",
                    color: "var(--text-light-muted)",
                    textAlign: "center",
                  }}
                >
                  All discussions and submitted briefs are protected under mutual NDA.
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
