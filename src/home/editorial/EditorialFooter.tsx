export function EditorialFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="editorial-footer" role="contentinfo">
      <div
        style={{
          maxWidth: 1360,
          margin: "0 auto",
          padding: "0 clamp(16px, 4vw, 36px)",
        }}
      >
        {/* Top Grid: Brand & Structured Navigation */}
        <div className="footer-top-grid">
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                color: "var(--text-light-primary)",
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 6,
                  backgroundColor: "rgba(255, 255, 255, 0.12)",
                  color: "var(--text-light-primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: 15,
                }}
              >
                L
              </div>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  letterSpacing: "0.08em",
                  color: "var(--text-light-primary)",
                }}
              >
                LAPRRK
              </span>
            </div>

            <p style={{ maxWidth: "340px", lineHeight: 1.6, marginBottom: 20 }}>
              Laprrk Technology Solutions LLP delivers enterprise software development, calibrated technical talent acquisition, and applied corporate learning across India and the United States.
            </p>

            <div style={{ fontSize: "0.8125rem", color: "var(--text-light-muted)" }}>
              Operating since 2019 · GSTIN 09AAHFL0399D1ZU · MSME Registered
            </div>
          </div>

          {/* Practice 01: IT Services */}
          <div>
            <div className="footer-col-title">Technology Solutions</div>
            <ul className="footer-link-list">
              <li><a href="/custom-software-development.html" className="footer-link">Custom Software</a></li>
              <li><a href="/web-application-development.html" className="footer-link">Web Applications</a></li>
              <li><a href="/generative-ai.html" className="footer-link">Generative AI &amp; LLMs</a></li>
              <li><a href="/agentic-ai-automation.html" className="footer-link">Agentic AI Workflows</a></li>
              <li><a href="/cloud-services.html" className="footer-link">Cloud &amp; DevOps</a></li>
              <li><a href="/qa-test-automation.html" className="footer-link">QA &amp; Eval Suites</a></li>
              <li><a href="/it-services.html" className="footer-link">All 17 Services →</a></li>
            </ul>
          </div>

          {/* Practice 02: Talent Acquisition */}
          <div>
            <div className="footer-col-title">Talent Solutions</div>
            <ul className="footer-link-list">
              <li><a href="/permanent-it-recruitment.html" className="footer-link">Permanent IT Hiring</a></li>
              <li><a href="/contract-staffing.html" className="footer-link">Contract Staffing &amp; C2H</a></li>
              <li><a href="/staff-augmentation.html" className="footer-link">Dedicated Squads</a></li>
              <li><a href="/gcc-hiring.html" className="footer-link">GCC &amp; India Setup</a></li>
              <li><a href="/executive-search.html" className="footer-link">Executive Search</a></li>
              <li><a href="/technologies-roles-we-recruit.html" className="footer-link">16 Tech Role Groups</a></li>
              <li><a href="/hiring-consultation.html" className="footer-link">Hiring Overview →</a></li>
            </ul>
          </div>

          {/* Practice 03: Corporate Learning */}
          <div>
            <div className="footer-col-title">Corporate Learning</div>
            <ul className="footer-link-list">
              <li><a href="/generative-ai-training.html" className="footer-link">Corporate AI Upskilling</a></li>
              <li><a href="/ai-literacy-training.html" className="footer-link">AI Literacy for Teams</a></li>
              <li><a href="/cloud-training.html" className="footer-link">Cloud &amp; DevOps Tracks</a></li>
              <li><a href="/data-engineering-training.html" className="footer-link">Data Engineering Labs</a></li>
              <li><a href="/nep-credit-courses.html" className="footer-link">NEP Credit Courses</a></li>
              <li><a href="/faculty-development-programs.html" className="footer-link">Faculty Development (FDP)</a></li>
              <li><a href="/corporate-training.html" className="footer-link">All Programmes →</a></li>
            </ul>
          </div>
        </div>

        {/* Dual Geographic Operations Row */}
        <div className="footer-locations-row">
          <div className="footer-location-card">
            <span className="footer-location-title">India Delivery &amp; Engineering Center</span>
            <span>Office No. 605, 6th Floor, Raksha Addela Mart, Gaur City 2, Greater Noida West, Uttar Pradesh 201318, India</span>
            <a href="tel:+918860664929" className="footer-location-tel">+91 88606 64929 (Mon–Sat, 10:00–19:00 IST)</a>
          </div>

          <div className="footer-location-card">
            <span className="footer-location-title">USA Client &amp; Engagement Office</span>
            <span>Louisville, Kentucky, United States</span>
            <a href="tel:+15023095749" className="footer-location-tel">+1 (502) 309-5749 (Mon–Fri, 9:00–17:00 ET)</a>
          </div>

          <div className="footer-location-card">
            <span className="footer-location-title">Central Inquiries &amp; Legal</span>
            <span>Direct Scoping &amp; Mutual NDA Requests</span>
            <a href="mailto:info@laprrk.com" className="footer-location-tel">info@laprrk.com</a>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="footer-bottom-bar">
          <div>
            &copy; {currentYear} Laprrk Technology Solutions LLP. All rights reserved.
          </div>

          <div className="footer-legal-links">
            <a href="/privacy-policy.html">Privacy Policy</a>
            <a href="/terms.html">Terms of Service</a>
            <a href="/sitemap.xml">Sitemap</a>
            <a href="/case-studies.html">Case Studies</a>
            <a href="/blog.html">Editorial &amp; Insights</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
