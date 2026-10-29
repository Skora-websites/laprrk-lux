import { EditorialHeader } from "./editorial/EditorialHeader";
import { EditorialHero } from "./editorial/EditorialHero";
import { EnterpriseTrustStrip } from "./editorial/EnterpriseTrustStrip";
import { BusinessIntroduction } from "./editorial/BusinessIntroduction";
import { CapabilitiesServices } from "./editorial/CapabilitiesServices";
import { HowWeWork } from "./editorial/HowWeWork";
import { SelectedWork } from "./editorial/SelectedWork";
import { WhyWorkWithUs } from "./editorial/WhyWorkWithUs";
import { CareersAndLearning } from "./editorial/CareersAndLearning";
import { FaqSection } from "./editorial/FaqSection";
import { ContactEnquiryCta } from "./editorial/ContactEnquiryCta";
import { EditorialFooter } from "./editorial/EditorialFooter";

export function HomePage() {
  return (
    <div className="editorial-site-wrapper" style={{ minHeight: "100vh", backgroundColor: "#FFFFFF" }}>
      {/* SECTION A — HEADER */}
      <EditorialHeader />

      <main id="main">
        {/* SECTION B — HERO */}
        <EditorialHero />

        {/* SECTION B.2 — ENTERPRISE TRUST STRIP & ECOSYSTEM MARQUEE */}
        <EnterpriseTrustStrip />

        {/* SECTION C — BUSINESS INTRODUCTION */}
        <BusinessIntroduction />

        {/* SECTION D — SERVICES (Mist Sage) */}
        <CapabilitiesServices />

        {/* SECTION E — HOW WE WORK (Warm Ivory) */}
        <HowWeWork />

        {/* SECTION F — CAPABILITIES / SELECTED WORK (Soft Periwinkle) */}
        <SelectedWork />

        {/* SECTION G — WHY WORK WITH US (Warm Stone) */}
        <WhyWorkWithUs />

        {/* SECTION H — CAREERS AND LEARNING (Mist Sage) */}
        <CareersAndLearning />

        {/* SECTION I — FAQ (Warm Ivory) */}
        <FaqSection />

        {/* SECTION J — CONTACT CTA & WORKING ENQUIRY FORM (Midnight Slate) */}
        <ContactEnquiryCta />
      </main>

      {/* SECTION K — FOOTER */}
      <EditorialFooter />

      {/* Discrete WhatsApp Scoping Floating Pill */}
      <a
        href="https://wa.me/918860664929"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Consultation"
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 50,
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          padding: "10px 16px",
          borderRadius: 999,
          backgroundColor: "#007CC3",
          color: "#FFFFFF",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          textDecoration: "none",
          fontSize: "0.8125rem",
          fontWeight: 600,
          boxShadow: "0 8px 24px rgba(0, 124, 195, 0.35)",
          transition: "transform 0.2s ease, background-color 0.2s ease",
        }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#4ade80"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z" />
        </svg>
        <span>WhatsApp Scoping</span>
      </a>
    </div>
  );
}
