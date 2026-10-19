export function EditorialHero() {
  return (
    <section className="reference-hero-section" id="hero" aria-label="Introduction">
      {/* Upper-Left Faint Technical Architectural Grid */}
      <div className="reference-hero-grid-lines" aria-hidden="true">
        <svg width="240" height="240" viewBox="0 0 240 240" fill="none" opacity="0.35">
          <line x1="0" y1="40" x2="240" y2="40" stroke="#202D3A" strokeWidth="0.8" />
          <line x1="0" y1="120" x2="240" y2="120" stroke="#202D3A" strokeWidth="0.8" />
          <line x1="0" y1="200" x2="240" y2="200" stroke="#202D3A" strokeWidth="0.8" />
          <line x1="40" y1="0" x2="40" y2="240" stroke="#202D3A" strokeWidth="0.8" />
          <line x1="120" y1="0" x2="120" y2="240" stroke="#202D3A" strokeWidth="0.8" />
          <line x1="200" y1="0" x2="200" y2="240" stroke="#202D3A" strokeWidth="0.8" />
        </svg>
      </div>

      {/* Sweeping Soft Background Contour */}
      <div className="reference-hero-contour" aria-hidden="true" />

      <div className="reference-hero-container">
        {/* Main 2-Column Grid */}
        <div className="reference-hero-grid">
          {/* Left Column: Headline, Narrative & Action CTAs */}
          <div className="reference-hero-left">
            <div className="reference-eyebrow">
              <span className="reference-eyebrow-dot" />
              <span className="reference-eyebrow-text">
                TECHNOLOGY · TALENT · CORPORATE LEARNING
              </span>
            </div>

            <h1 className="reference-hero-title">
              Better<br />
              technology.<br />
              Stronger teams.<br />
              Greater <span className="reference-hero-blue">possibilities.</span>
            </h1>

            <p className="reference-hero-subhead">
              We help organisations move forward through thoughtfully delivered technology solutions, strategic talent acquisition, and practical corporate learning.
            </p>

            <div className="reference-hero-actions">
              <a href="#services" className="reference-btn-primary">
                <span>Explore Our Capabilities</span>
                <span className="arrow" aria-hidden="true">↓</span>
              </a>

              <a href="/contact.html" className="reference-btn-secondary">
                <span>Discuss Your Requirements</span>
              </a>
            </div>
          </div>

          {/* Right Column: 3D Architectural Composition with Interactive Hotspot Anchors */}
          <div className="reference-hero-right">
            <div className="reference-3d-visual-frame">
              <img
                src="/assets/img/hero-3d-perfect.png"
                alt="Laprrk Connected Systems: 3D architectural infrastructure representing Technology Solutions, Talent Acquisition, and Corporate Learning"
                className="reference-3d-img"
                loading="eager"
                width={594}
                height={450}
              />

              {/* Interactive Hotspot Links overlaid precisely over the 3 cards */}
              <a
                href="/it-services.html"
                className="reference-hotspot hotspot-01"
                aria-label="01 Technology Solutions: Build, Modernise, Scale"
                title="Explore Technology Solutions"
              />
              <a
                href="/hiring-consultation.html"
                className="reference-hotspot hotspot-02"
                aria-label="02 Talent Acquisition: Skilled Teams, Faster Hiring, Global Capability"
                title="Explore Talent Acquisition"
              />
              <a
                href="/corporate-training.html"
                className="reference-hotspot hotspot-03"
                aria-label="03 Corporate Learning: Practical Skills, Live Labs, Future Ready Teams"
                title="Explore Corporate Learning"
              />
            </div>
          </div>
        </div>

        {/* Bottom Trust & Operational Bar (Matches Reference Image) */}
        <div className="reference-trust-bar">
          {/* Trust Item 1 */}
          <div className="reference-trust-item">
            <div className="reference-trust-icon-box">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#202D3A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
            <div>
              <div className="reference-trust-title">Operating Since 2019</div>
              <div className="reference-trust-sub">Building long-term partnerships</div>
            </div>
          </div>

          <div className="reference-trust-divider" aria-hidden="true" />

          {/* Trust Item 2 */}
          <div className="reference-trust-item">
            <div className="reference-trust-icon-box">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#202D3A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div>
              <div className="reference-trust-title">Offices in Noida West &amp; Louisville</div>
              <div className="reference-trust-sub">Supporting global delivery</div>
            </div>
          </div>

          <div className="reference-trust-divider" aria-hidden="true" />

          {/* Trust Item 3 */}
          <div className="reference-trust-item">
            <div className="reference-trust-icon-box">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#202D3A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div>
              <div className="reference-trust-title">Mutual NDA on Day One</div>
              <div className="reference-trust-sub">Your confidentiality, our priority</div>
            </div>
          </div>

          {/* Far Right: SCROLL Indicator */}
          <div className="reference-scroll-box">
            <span className="reference-scroll-text">SCROLL</span>
            <span className="reference-scroll-arrow" aria-hidden="true">↓</span>
          </div>
        </div>
      </div>
    </section>
  );
}
