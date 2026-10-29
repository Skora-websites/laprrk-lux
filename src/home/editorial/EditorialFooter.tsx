export function EditorialFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="editorial-footer surface-midnight-slate" role="contentinfo" style={{ backgroundColor: "#031026", color: "#F8FAFC", borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}>
      <div
        style={{
          maxWidth: 1360,
          margin: "0 auto",
          padding: "clamp(48px, 6vw, 72px) clamp(16px, 4vw, 36px) clamp(24px, 4vw, 40px)",
        }}
      >
        {/* Top Grid: Brand & Structured Enterprise Navigation */}
        <div className="footer-top-grid" style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr 1fr 1fr 1fr", gap: "clamp(24px, 3vw, 40px)", marginBottom: 48 }}>
          {/* Brand & Corporate Summary */}
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                backgroundColor: "#FFFFFF",
                padding: "8px 16px",
                borderRadius: 8,
                marginBottom: 20,
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
              }}
            >
              <img
                src="/assets/img/laprrk-official-logo.png"
                alt="Laprrk Technology Solutions"
                style={{
                  height: 38,
                  width: "auto",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>

            <p style={{ maxWidth: "320px", lineHeight: 1.65, fontSize: "0.875rem", color: "#CBD5E1", marginBottom: 20 }}>
              Laprrk Technology Solutions delivers enterprise digital engineering, applied AI platforms, calibrated technical talent, and corporate learning across India and the United States.
            </p>

            <div style={{ fontSize: "0.8125rem", color: "#94A3B8" }}>
              Operating since 2019 · GSTIN 09AAHFL0399D1ZU · MSME Registered
            </div>
          </div>

          {/* Practice 01: IT & Digital Engineering */}
          <div>
            <div className="footer-col-title" style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#00A3E0", marginBottom: 16 }}>
              Technology Solutions
            </div>
            <ul className="footer-link-list" style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              <li><a href="/custom-software-development.html" className="footer-link" style={{ color: "#E2E8F0", textDecoration: "none", fontSize: "0.875rem" }}>Custom Software</a></li>
              <li><a href="/generative-ai.html" className="footer-link" style={{ color: "#E2E8F0", textDecoration: "none", fontSize: "0.875rem" }}>Generative AI &amp; LLMs</a></li>
              <li><a href="/agentic-ai-automation.html" className="footer-link" style={{ color: "#E2E8F0", textDecoration: "none", fontSize: "0.875rem" }}>Agentic AI Workflows</a></li>
              <li><a href="/cloud-services.html" className="footer-link" style={{ color: "#E2E8F0", textDecoration: "none", fontSize: "0.875rem" }}>Cloud Modernization</a></li>
              <li><a href="/devops-devsecops.html" className="footer-link" style={{ color: "#E2E8F0", textDecoration: "none", fontSize: "0.875rem" }}>DevOps &amp; Platform Eng</a></li>
              <li><a href="/qa-test-automation.html" className="footer-link" style={{ color: "#E2E8F0", textDecoration: "none", fontSize: "0.875rem" }}>QA &amp; Eval Suites</a></li>
              <li><a href="/it-services.html" className="footer-link" style={{ color: "#00A3E0", textDecoration: "none", fontSize: "0.875rem", fontWeight: 600 }}>All 17 Services →</a></li>
            </ul>
          </div>

          {/* Practice 02: Talent Solutions & GCC */}
          <div>
            <div className="footer-col-title" style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#00A3E0", marginBottom: 16 }}>
              Talent Solutions
            </div>
            <ul className="footer-link-list" style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              <li><a href="/permanent-it-recruitment.html" className="footer-link" style={{ color: "#E2E8F0", textDecoration: "none", fontSize: "0.875rem" }}>Permanent IT Hiring</a></li>
              <li><a href="/contract-staffing.html" className="footer-link" style={{ color: "#E2E8F0", textDecoration: "none", fontSize: "0.875rem" }}>Contract Staffing &amp; C2H</a></li>
              <li><a href="/staff-augmentation.html" className="footer-link" style={{ color: "#E2E8F0", textDecoration: "none", fontSize: "0.875rem" }}>Dedicated Squads</a></li>
              <li><a href="/gcc-hiring.html" className="footer-link" style={{ color: "#E2E8F0", textDecoration: "none", fontSize: "0.875rem" }}>GCC &amp; India Setup</a></li>
              <li><a href="/executive-search.html" className="footer-link" style={{ color: "#E2E8F0", textDecoration: "none", fontSize: "0.875rem" }}>Executive Search</a></li>
              <li><a href="/technologies-roles-we-recruit.html" className="footer-link" style={{ color: "#E2E8F0", textDecoration: "none", fontSize: "0.875rem" }}>16 Tech Role Groups</a></li>
              <li><a href="/hiring-consultation.html" className="footer-link" style={{ color: "#00A3E0", textDecoration: "none", fontSize: "0.875rem", fontWeight: 600 }}>Hiring Overview →</a></li>
            </ul>
          </div>

          {/* Practice 03: Corporate Learning */}
          <div>
            <div className="footer-col-title" style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#00A3E0", marginBottom: 16 }}>
              Corporate Learning
            </div>
            <ul className="footer-link-list" style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              <li><a href="/generative-ai-training.html" className="footer-link" style={{ color: "#E2E8F0", textDecoration: "none", fontSize: "0.875rem" }}>Corporate AI Upskilling</a></li>
              <li><a href="/ai-literacy-training.html" className="footer-link" style={{ color: "#E2E8F0", textDecoration: "none", fontSize: "0.875rem" }}>AI Literacy for Teams</a></li>
              <li><a href="/cloud-training.html" className="footer-link" style={{ color: "#E2E8F0", textDecoration: "none", fontSize: "0.875rem" }}>Cloud &amp; DevOps Tracks</a></li>
              <li><a href="/data-engineering-training.html" className="footer-link" style={{ color: "#E2E8F0", textDecoration: "none", fontSize: "0.875rem" }}>Data Lakehouse Labs</a></li>
              <li><a href="/nep-credit-courses.html" className="footer-link" style={{ color: "#E2E8F0", textDecoration: "none", fontSize: "0.875rem" }}>NEP Credit Courses</a></li>
              <li><a href="/faculty-development-programs.html" className="footer-link" style={{ color: "#E2E8F0", textDecoration: "none", fontSize: "0.875rem" }}>Faculty Development</a></li>
              <li><a href="/corporate-training.html" className="footer-link" style={{ color: "#00A3E0", textDecoration: "none", fontSize: "0.875rem", fontWeight: 600 }}>All Programmes →</a></li>
            </ul>
          </div>

          {/* Practice 04: Resources & Insights (Added Column) */}
          <div>
            <div className="footer-col-title" style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#00A3E0", marginBottom: 16 }}>
              Resources &amp; Insights
            </div>
            <ul className="footer-link-list" style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              <li><a href="/case-studies.html" className="footer-link" style={{ color: "#E2E8F0", textDecoration: "none", fontSize: "0.875rem" }}>Case Studies &amp; Impact</a></li>
              <li><a href="/blog.html" className="footer-link" style={{ color: "#E2E8F0", textDecoration: "none", fontSize: "0.875rem" }}>Engineering Blog</a></li>
              <li><a href="/resources.html" className="footer-link" style={{ color: "#E2E8F0", textDecoration: "none", fontSize: "0.875rem" }}>Executive Whitepapers</a></li>
              <li><a href="/genai-document-assistant-insurance.html" className="footer-link" style={{ color: "#E2E8F0", textDecoration: "none", fontSize: "0.875rem" }}>Architecture Blueprint</a></li>
              <li><a href="/faq.html" className="footer-link" style={{ color: "#E2E8F0", textDecoration: "none", fontSize: "0.875rem" }}>Frequently Asked Questions</a></li>
              <li><a href="/about.html" className="footer-link" style={{ color: "#E2E8F0", textDecoration: "none", fontSize: "0.875rem" }}>About Laprrk</a></li>
              <li><a href="/contact" className="footer-link" style={{ color: "#00A3E0", textDecoration: "none", fontSize: "0.875rem", fontWeight: 600 }}>Get in Touch →</a></li>
            </ul>
          </div>
        </div>

        {/* Dual Geographic Operations Row (Fixed Addresses & Contacts) */}
        <div className="footer-locations-row" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, padding: "28px 0", borderTop: "1px solid rgba(255, 255, 255, 0.12)", borderBottom: "1px solid rgba(255, 255, 255, 0.12)", marginBottom: 32 }}>
          <div className="footer-location-card" style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span className="footer-location-title" style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "0.875rem", fontWeight: 700, color: "#FFFFFF" }}>
              India Delivery &amp; Engineering Center
            </span>
            <span style={{ fontSize: "0.8125rem", color: "#CBD5E1", lineHeight: 1.5 }}>
              Office No. 605, 6th Floor, Raksha Addela Mart, Gaur City 2, Greater Noida West, Uttar Pradesh 201318, India
            </span>
            <a href="tel:+918860664929" className="footer-location-tel" style={{ fontSize: "0.8125rem", color: "#00A3E0", textDecoration: "none", fontWeight: 600, marginTop: 4 }}>
              +91 88606 64929 (Mon–Sat, 10:00–19:00 IST)
            </a>
          </div>

          <div className="footer-location-card" style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span className="footer-location-title" style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "0.875rem", fontWeight: 700, color: "#FFFFFF" }}>
              USA Client &amp; Engagement Office
            </span>
            <span style={{ fontSize: "0.8125rem", color: "#CBD5E1", lineHeight: 1.5 }}>
              Louisville, Kentucky, United States
            </span>
            <a href="tel:+15023095749" className="footer-location-tel" style={{ fontSize: "0.8125rem", color: "#00A3E0", textDecoration: "none", fontWeight: 600, marginTop: 4 }}>
              +1 (502) 309-5749 (Mon–Fri, 9:00–17:00 ET)
            </a>
          </div>

          <div className="footer-location-card" style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span className="footer-location-title" style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "0.875rem", fontWeight: 700, color: "#FFFFFF" }}>
              Central Inquiries &amp; Mutual NDA
            </span>
            <span style={{ fontSize: "0.8125rem", color: "#CBD5E1", lineHeight: 1.5 }}>
              Direct technical scoping, RFP invitations, and mutual NDA execution.
            </span>
            <a href="mailto:info@laprrk.com" className="footer-location-tel" style={{ fontSize: "0.8125rem", color: "#00A3E0", textDecoration: "none", fontWeight: 600, marginTop: 4 }}>
              info@laprrk.com
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="footer-bottom-bar" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 16, fontSize: "0.8125rem", color: "#94A3B8" }}>
          <div>
            &copy; {currentYear} Laprrk Technology Solutions LLP. All rights reserved.
          </div>

          <div className="footer-legal-links" style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
            <a href="/privacy-policy.html" style={{ color: "#94A3B8", textDecoration: "none" }}>Privacy Policy</a>
            <a href="/terms.html" style={{ color: "#94A3B8", textDecoration: "none" }}>Terms of Service</a>
            <a href="/sitemap.xml" style={{ color: "#94A3B8", textDecoration: "none" }}>Sitemap</a>
            <a href="/case-studies.html" style={{ color: "#94A3B8", textDecoration: "none" }}>Case Studies</a>
            <a href="/blog.html" style={{ color: "#94A3B8", textDecoration: "none" }}>Resources &amp; Insights</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
