import { useState } from "react";
import { EditorialHeader } from "../home/editorial/EditorialHeader";
import { EditorialFooter } from "../home/editorial/EditorialFooter";
import { ContactEnquiryCta } from "../home/editorial/ContactEnquiryCta";
import { WhatsAppFab } from "../components/SiteChrome";
import { DevAnnotation } from "../components/DevAnnotation";
import { Reveal } from "../components/motion-primitives";
import { STEPS } from "../lib/home-data";
import type { PageData, ArticleItem } from "./data/types";

/**
 * SubpageScopeProtocolCard: Practice-specific execution & SLA protocol side card.
 * Renders distinct technical execution phases and SLA badges tailored to each domain.
 */
function SubpageScopeProtocolCard({ slug }: { slug: string }) {
  const s = (slug || "").toLowerCase();

  // 1. AI, GenAI & Agentic
  if (
    s.includes("generative") ||
    s.includes("agentic") ||
    s.includes("ai-machine") ||
    s.includes("ai-data") ||
    s.includes("machine-learning")
  ) {
    return (
      <div className="subpage-scope-schematic-card">
        <div className="schematic-header">
          <span className="schematic-tag">AI EVALUATION PROTOCOL // SLA</span>
          <span className="schematic-pulse" style={{ backgroundColor: "#1F4E45", boxShadow: "0 0 8px #1F4E45" }} />
        </div>
        <h4 className="schematic-title">Responsible AI &amp; Eval Protocol</h4>
        <p className="schematic-body">
          Every model, prompt chain, and RAG retrieval pipeline is verified against deterministic benchmarks with guardrails, token caps, and human-in-the-loop approvals.
        </p>
        <div className="schematic-phases">
          <div className="schematic-phase-row">
            <span className="schematic-phase-idx">01</span>
            <span className="schematic-phase-text">Ground-Truth Dataset &amp; Eval Harness</span>
          </div>
          <div className="schematic-phase-row">
            <span className="schematic-phase-idx">02</span>
            <span className="schematic-phase-text">RAG Chunking &amp; Vector Latency (&lt;200ms)</span>
          </div>
          <div className="schematic-phase-row">
            <span className="schematic-phase-idx">03</span>
            <span className="schematic-phase-text">Automated Hallucination &amp; Red-Teaming</span>
          </div>
          <div className="schematic-phase-row">
            <span className="schematic-phase-idx">04</span>
            <span className="schematic-phase-text">Production Telemetry, Drift &amp; Cost Control</span>
          </div>
        </div>
        <div style={{ marginTop: 24, padding: "10px 14px", backgroundColor: "rgba(255,255,255,0.06)", borderRadius: 6, display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#1F4E45" }} />
          <span style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "0.75rem", fontWeight: 700, color: "#B8C7E0" }}>
            DETERMINISTIC EVALS · ZERO UNBOUNDED TOKENS
          </span>
        </div>
        <div style={{ marginTop: 24, paddingTop: 18, borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <a href="/contact.html" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#B8C7E0", fontSize: "0.8125rem", fontWeight: 600, textDecoration: "none" }}>
            <span>Schedule AI architecture consultation</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    );
  }

  // 2. Cloud, DevOps & SRE
  if (s.includes("cloud") || s.includes("devops") || s.includes("sre") || s.includes("kubernetes")) {
    return (
      <div className="subpage-scope-schematic-card">
        <div className="schematic-header">
          <span className="schematic-tag">INFRASTRUCTURE SLA // ZERO-DOWNTIME</span>
          <span className="schematic-pulse" />
        </div>
        <h4 className="schematic-title">Multi-Cloud Platform Protocol</h4>
        <p className="schematic-body">
          Infrastructure-as-code landing zones with automated drift detection, blue/green deployment gates, and 99.95% production availability.
        </p>
        <div className="schematic-phases">
          <div className="schematic-phase-row">
            <span className="schematic-phase-idx">01</span>
            <span className="schematic-phase-text">Multi-AZ Terraform &amp; VPC Landing Zones</span>
          </div>
          <div className="schematic-phase-row">
            <span className="schematic-phase-idx">02</span>
            <span className="schematic-phase-text">GitOps CI/CD Pipelines (ArgoCD &amp; Actions)</span>
          </div>
          <div className="schematic-phase-row">
            <span className="schematic-phase-idx">03</span>
            <span className="schematic-phase-text">Kubernetes Mesh &amp; Auto-Scaling Policies</span>
          </div>
          <div className="schematic-phase-row">
            <span className="schematic-phase-idx">04</span>
            <span className="schematic-phase-text">24/7 Prometheus/Grafana Telemetry &amp; Runbooks</span>
          </div>
        </div>
        <div style={{ marginTop: 24, padding: "10px 14px", backgroundColor: "rgba(255,255,255,0.06)", borderRadius: 6, display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#5D7A9E" }} />
          <span style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "0.75rem", fontWeight: 700, color: "#B8C7E0" }}>
            99.95% UPTIME SLA · ZERO-DOWNTIME DEPLOYS
          </span>
        </div>
        <div style={{ marginTop: 24, paddingTop: 18, borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <a href="/contact.html" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#B8C7E0", fontSize: "0.8125rem", fontWeight: 600, textDecoration: "none" }}>
            <span>Review cloud architecture &amp; runbooks</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    );
  }

  // 3. Cybersecurity & Compliance
  if (s.includes("cybersecurity") || s.includes("security") || s.includes("compliance")) {
    return (
      <div className="subpage-scope-schematic-card">
        <div className="schematic-header">
          <span className="schematic-tag">ZERO-TRUST PROTOCOL // AUDIT READY</span>
          <span className="schematic-pulse" style={{ backgroundColor: "#1F4E45", boxShadow: "0 0 8px #1F4E45" }} />
        </div>
        <h4 className="schematic-title">Security &amp; Hardening Protocol</h4>
        <p className="schematic-body">
          End-to-end security posture hardening, automated vulnerability scans, and continuous compliance mapping for SOC2 Type II, ISO 27001, and HIPAA.
        </p>
        <div className="schematic-phases">
          <div className="schematic-phase-row">
            <span className="schematic-phase-idx">01</span>
            <span className="schematic-phase-text">Threat Modeling &amp; Attack Surface Mapping</span>
          </div>
          <div className="schematic-phase-row">
            <span className="schematic-phase-idx">02</span>
            <span className="schematic-phase-text">DevSecOps SAST / DAST &amp; Image Signing</span>
          </div>
          <div className="schematic-phase-row">
            <span className="schematic-phase-idx">03</span>
            <span className="schematic-phase-text">Least-Privilege RBAC &amp; mTLS Mesh</span>
          </div>
          <div className="schematic-phase-row">
            <span className="schematic-phase-idx">04</span>
            <span className="schematic-phase-text">SOC2 / ISO 27001 Evidence Dossier</span>
          </div>
        </div>
        <div style={{ marginTop: 24, padding: "10px 14px", backgroundColor: "rgba(255,255,255,0.06)", borderRadius: 6, display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#1F4E45" }} />
          <span style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "0.75rem", fontWeight: 700, color: "#B8C7E0" }}>
            ZERO UNMONITORED EGRESS · ENCRYPTED AT REST
          </span>
        </div>
        <div style={{ marginTop: 24, paddingTop: 18, borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <a href="/contact.html" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#B8C7E0", fontSize: "0.8125rem", fontWeight: 600, textDecoration: "none" }}>
            <span>Book security &amp; compliance review</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    );
  }

  // 4. QA & Test Automation
  if (s.includes("qa") || s.includes("testing") || s.includes("test")) {
    return (
      <div className="subpage-scope-schematic-card">
        <div className="schematic-header">
          <span className="schematic-tag">VERIFICATION PROTOCOL // ZERO REGRESSION</span>
          <span className="schematic-pulse" style={{ backgroundColor: "#1F4E45", boxShadow: "0 0 8px #1F4E45" }} />
        </div>
        <h4 className="schematic-title">Automated QA Release Harness</h4>
        <p className="schematic-body">
          Multi-layer test automation spanning unit, contract, cross-browser Playwright E2E, and LLM evaluation suites running on high-speed parallel runners.
        </p>
        <div className="schematic-phases">
          <div className="schematic-phase-row">
            <span className="schematic-phase-idx">01</span>
            <span className="schematic-phase-text">Test Plan &amp; Critical User Journey Matrix</span>
          </div>
          <div className="schematic-phase-row">
            <span className="schematic-phase-idx">02</span>
            <span className="schematic-phase-text">Playwright &amp; API Contract Automation</span>
          </div>
          <div className="schematic-phase-row">
            <span className="schematic-phase-idx">03</span>
            <span className="schematic-phase-text">Parallel Cloud CI Execution (&lt;10 min)</span>
          </div>
          <div className="schematic-phase-row">
            <span className="schematic-phase-idx">04</span>
            <span className="schematic-phase-text">Zero-Flakiness Guarantee &amp; Release Gate</span>
          </div>
        </div>
        <div style={{ marginTop: 24, padding: "10px 14px", backgroundColor: "rgba(255,255,255,0.06)", borderRadius: 6, display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#1F4E45" }} />
          <span style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "0.75rem", fontWeight: 700, color: "#B8C7E0" }}>
            &gt;95% COVERAGE · ZERO FLAKY TESTS
          </span>
        </div>
        <div style={{ marginTop: 24, paddingTop: 18, borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <a href="/contact.html" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#B8C7E0", fontSize: "0.8125rem", fontWeight: 600, textDecoration: "none" }}>
            <span>Explore test automation framework</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    );
  }

  // 5. Talent Acquisition, Staffing & GCC
  if (
    s.includes("recruitment") ||
    s.includes("staffing") ||
    s.includes("augmentation") ||
    s.includes("gcc") ||
    s.includes("hiring") ||
    s.includes("search")
  ) {
    return (
      <div className="subpage-scope-schematic-card">
        <div className="schematic-header">
          <span className="schematic-tag">TALENT CADENCE // PRACTITIONER SCREENING</span>
          <span className="schematic-pulse" style={{ backgroundColor: "#5D7A9E", boxShadow: "0 0 8px #5D7A9E" }} />
        </div>
        <h4 className="schematic-title">Engineering Hiring Cadence</h4>
        <p className="schematic-body">
          Practicing software engineers run technical interviews and live coding assessments, delivering calibrated shortlists with an 88% join ratio.
        </p>
        <div className="schematic-phases">
          <div className="schematic-phase-row">
            <span className="schematic-phase-idx">01</span>
            <span className="schematic-phase-text">Role Calibration &amp; Scoring Rubric (48h)</span>
          </div>
          <div className="schematic-phase-row">
            <span className="schematic-phase-idx">02</span>
            <span className="schematic-phase-text">Senior Engineer Live Coding &amp; System Design</span>
          </div>
          <div className="schematic-phase-row">
            <span className="schematic-phase-idx">03</span>
            <span className="schematic-phase-text">Calibrated Dossiers &amp; Video Recordings</span>
          </div>
          <div className="schematic-phase-row">
            <span className="schematic-phase-idx">04</span>
            <span className="schematic-phase-text">Offer Follow-Through &amp; 30-Day Checkpoints</span>
          </div>
        </div>
        <div style={{ marginTop: 24, padding: "10px 14px", backgroundColor: "rgba(255,255,255,0.06)", borderRadius: 6, display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#1F4E45" }} />
          <span style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "0.75rem", fontWeight: 700, color: "#B8C7E0" }}>
            88% JOIN RATIO · SUCCESS-BASED TERMS
          </span>
        </div>
        <div style={{ marginTop: 24, paddingTop: 18, borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <a href="/contact.html" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#B8C7E0", fontSize: "0.8125rem", fontWeight: 600, textDecoration: "none" }}>
            <span>Calibrate a role with our engineers</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    );
  }

  // 6. Corporate Training & Higher Education
  if (
    s.includes("training") ||
    s.includes("nep") ||
    s.includes("institutes") ||
    s.includes("faculty") ||
    s.includes("placement") ||
    s.includes("bootcamp")
  ) {
    return (
      <div className="subpage-scope-schematic-card">
        <div className="schematic-header">
          <span className="schematic-tag">CURRICULUM PROTOCOL // ~70% LABS</span>
          <span className="schematic-pulse" style={{ backgroundColor: "#5D7A9E", boxShadow: "0 0 8px #5D7A9E" }} />
        </div>
        <h4 className="schematic-title">Applied Learning &amp; Lab Protocol</h4>
        <p className="schematic-body">
          Immersive programs led by practicing architects with ~70% live toolchain labs, deployed capstone repositories, and NEP 2020 credit alignment.
        </p>
        <div className="schematic-phases">
          <div className="schematic-phase-row">
            <span className="schematic-phase-idx">01</span>
            <span className="schematic-phase-text">Diagnostic Assessment &amp; Stack Tailoring</span>
          </div>
          <div className="schematic-phase-row">
            <span className="schematic-phase-idx">02</span>
            <span className="schematic-phase-text">~70% Hands-On Live Cloud/Code Labs</span>
          </div>
          <div className="schematic-phase-row">
            <span className="schematic-phase-idx">03</span>
            <span className="schematic-phase-text">Capstone Production Project Defense</span>
          </div>
          <div className="schematic-phase-row">
            <span className="schematic-phase-idx">04</span>
            <span className="schematic-phase-text">Post-Training Benchmark &amp; Certification</span>
          </div>
        </div>
        <div style={{ marginTop: 24, padding: "10px 14px", backgroundColor: "rgba(255,255,255,0.06)", borderRadius: 6, display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#5D7A9E" }} />
          <span style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "0.75rem", fontWeight: 700, color: "#B8C7E0" }}>
            ~70% LAB TIME · DEPLOYED REPOSITORIES
          </span>
        </div>
        <div style={{ marginTop: 24, paddingTop: 18, borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <a href="/contact.html" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#B8C7E0", fontSize: "0.8125rem", fontWeight: 600, textDecoration: "none" }}>
            <span>Review curriculum &amp; sample labs</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    );
  }

  // 7. Default (Custom Software, Web, Mobile, Company)
  return (
    <div className="subpage-scope-schematic-card">
      <div className="schematic-header">
        <span className="schematic-tag">DELIVERY PROTOCOL // SLA</span>
        <span className="schematic-pulse" />
      </div>
      <h4 className="schematic-title">Engineering Execution Rhythm</h4>
      <p className="schematic-body">
        Every deliverable is integrated directly into your repositories with comprehensive test coverage, infrastructure-as-code, and documentation.
      </p>
      <div className="schematic-phases">
        <div className="schematic-phase-row">
          <span className="schematic-phase-idx">01</span>
          <span className="schematic-phase-text">Architecture &amp; Threat Modeling</span>
        </div>
        <div className="schematic-phase-row">
          <span className="schematic-phase-idx">02</span>
          <span className="schematic-phase-text">2-Week Production Sprints</span>
        </div>
        <div className="schematic-phase-row">
          <span className="schematic-phase-idx">03</span>
          <span className="schematic-phase-text">Automated CI/CD &amp; Testing</span>
        </div>
        <div className="schematic-phase-row">
          <span className="schematic-phase-idx">04</span>
          <span className="schematic-phase-text">Handover, Runbooks &amp; SLAs</span>
        </div>
      </div>
      <div style={{ marginTop: 24, padding: "10px 14px", backgroundColor: "rgba(255,255,255,0.06)", borderRadius: 6, display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#5D7A9E" }} />
        <span style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "0.75rem", fontWeight: 700, color: "#B8C7E0" }}>
          100% CLIENT IP · 2-WEEK SPRINTS
        </span>
      </div>
      <div style={{ marginTop: 24, paddingTop: 18, borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <a href="/contact.html" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#B8C7E0", fontSize: "0.8125rem", fontWeight: 600, textDecoration: "none" }}>
          <span>Schedule scoping review</span>
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}

/**
 * ArticleVisualBanner: Domain-relevant visual media header for Case Studies & Articles
 */
function ArticleVisualBanner({ item }: { item: ArticleItem }) {
  const h = (item.href || "").toLowerCase();

  // Insurance GenAI Document Assistant
  if (h.includes("insurance") || h.includes("document-assistant")) {
    return (
      <div className="subpage-article-visual-banner" aria-label="Insurance GenAI Assistant Case Study">
        <svg viewBox="0 0 400 130" fill="none" className="subpage-article-visual-svg">
          <rect width="400" height="130" fill="#202D3A" />
          <circle cx="60" cy="65" r="28" fill="#F4F1EB" stroke="#5D7A9E" strokeWidth="1.5" />
          <path d="M 52 50 L 64 50 L 70 56 L 70 80 L 52 80 Z" fill="#202D3A" />
          <line x1="56" y1="62" x2="66" y2="62" stroke="#F4F1EB" strokeWidth="1" />
          <line x1="56" y1="68" x2="66" y2="68" stroke="#F4F1EB" strokeWidth="1" />
          <line x1="56" y1="74" x2="63" y2="74" stroke="#F4F1EB" strokeWidth="1" />
          
          <path d="M 98 65 L 140 65" stroke="#5D7A9E" strokeWidth="2" strokeDasharray="3 3" />
          <polygon points="144,65 138,61 138,69" fill="#5D7A9E" />

          <g transform="translate(160, 30)">
            <rect width="215" height="70" rx="6" fill="#F4F1EB" />
            <text x="14" y="26" fontFamily="Space Grotesk, sans-serif" fontSize="18" fontWeight="700" fill="#1F4E45">70% LESS</text>
            <text x="14" y="44" fontFamily="Manrope, sans-serif" fontSize="9" fontWeight="600" fill="#202D3A">MANUAL DATA ENTRY / DOC</text>
            <text x="14" y="58" fontFamily="Space Grotesk, sans-serif" fontSize="8" fontWeight="700" fill="#5D7A9E">6 WEEKS TO PRODUCTION</text>
          </g>
        </svg>
      </div>
    );
  }

  // India Engineering Team Setup
  if (h.includes("india-engineering") || h.includes("team-setup")) {
    return (
      <div className="subpage-article-visual-banner" aria-label="India Engineering Hub Setup Case Study">
        <svg viewBox="0 0 400 130" fill="none" className="subpage-article-visual-svg">
          <rect width="400" height="130" fill="#202D3A" />
          <g transform="translate(30, 25)">
            <rect x="0" y="55" width="22" height="25" rx="3" fill="#646D75" />
            <rect x="30" y="40" width="22" height="40" rx="3" fill="#5D7A9E" />
            <rect x="60" y="25" width="22" height="55" rx="3" fill="#B8C7E0" />
            <rect x="90" y="10" width="22" height="70" rx="3" fill="#1F4E45" />
            <line x1="0" y1="83" x2="115" y2="83" stroke="#F0EEE7" strokeWidth="1" />
          </g>

          <g transform="translate(165, 30)">
            <rect width="205" height="70" rx="6" fill="#F4F1EB" />
            <text x="14" y="26" fontFamily="Space Grotesk, sans-serif" fontSize="18" fontWeight="700" fill="#202D3A">40 HIRES</text>
            <text x="14" y="44" fontFamily="Manrope, sans-serif" fontSize="9" fontWeight="600" fill="#646D75">IN 8 MONTHS · PHASED GCC</text>
            <text x="14" y="58" fontFamily="Space Grotesk, sans-serif" fontSize="8" fontWeight="700" fill="#1F4E45">88% OFFER-TO-JOIN RATIO</text>
          </g>
        </svg>
      </div>
    );
  }

  // GenAI & Cloud Upskilling Case Study
  if (h.includes("upskilling") || h.includes("training")) {
    return (
      <div className="subpage-article-visual-banner" aria-label="Corporate Upskilling Case Study">
        <svg viewBox="0 0 400 130" fill="none" className="subpage-article-visual-svg">
          <rect width="400" height="130" fill="#202D3A" />
          <g transform="translate(70, 65)">
            <circle cx="0" cy="0" r="32" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="6" />
            <circle cx="0" cy="0" r="32" fill="none" stroke="#5D7A9E" strokeWidth="6" strokeDasharray="200" strokeDashoffset="25" />
            <text x="0" y="5" fontFamily="Space Grotesk, sans-serif" fontSize="12" fontWeight="700" fill="#F0EEE7" textAnchor="middle">92%</text>
          </g>

          <g transform="translate(160, 30)">
            <rect width="210" height="70" rx="6" fill="#F4F1EB" />
            <text x="14" y="26" fontFamily="Space Grotesk, sans-serif" fontSize="18" fontWeight="700" fill="#5D7A9E">120 TRAINED</text>
            <text x="14" y="44" fontFamily="Manrope, sans-serif" fontSize="9" fontWeight="600" fill="#202D3A">3 ROLES · 12 WEEKS</text>
            <text x="14" y="58" fontFamily="Space Grotesk, sans-serif" fontSize="8" fontWeight="700" fill="#1F4E45">~70% PRODUCTION LABS</text>
          </g>
        </svg>
      </div>
    );
  }

  // NEP Industry Credit Courses
  if (h.includes("nep") || h.includes("credit")) {
    return (
      <div className="subpage-article-visual-banner" aria-label="NEP 2020 Credit Courses">
        <svg viewBox="0 0 400 130" fill="none" className="subpage-article-visual-svg">
          <rect width="400" height="130" fill="#202D3A" />
          <g transform="translate(30, 32)">
            <rect x="0" y="0" width="110" height="18" rx="3" fill="#F4F1EB" />
            <text x="8" y="13" fontFamily="Space Grotesk, sans-serif" fontSize="8" fontWeight="700" fill="#202D3A">AICTE / UGC ALIGNED</text>
            <rect x="0" y="24" width="110" height="18" rx="3" fill="#5D7A9E" />
            <text x="8" y="37" fontFamily="Space Grotesk, sans-serif" fontSize="8" fontWeight="700" fill="#F0EEE7">10 INDUSTRY MINORS</text>
            <rect x="0" y="48" width="110" height="18" rx="3" fill="#1F4E45" />
            <text x="8" y="61" fontFamily="Space Grotesk, sans-serif" fontSize="8" fontWeight="700" fill="#F0EEE7">HANDS-ON REPOSITORIES</text>
          </g>

          <g transform="translate(165, 30)">
            <rect width="205" height="70" rx="6" fill="#F4F1EB" />
            <text x="14" y="26" fontFamily="Space Grotesk, sans-serif" fontSize="16" fontWeight="700" fill="#202D3A">NEP 2020</text>
            <text x="14" y="44" fontFamily="Manrope, sans-serif" fontSize="9" fontWeight="600" fill="#646D75">INDUSTRY MINORS FOR COLLEGES</text>
            <text x="14" y="58" fontFamily="Space Grotesk, sans-serif" fontSize="8" fontWeight="700" fill="#5D7A9E">CREDIT-MAPPED CURRICULA</text>
          </g>
        </svg>
      </div>
    );
  }

  // Default Architectural Benchmark Strip
  return (
    <div className="subpage-article-visual-banner" aria-label="Laprrk Engineering Benchmark">
      <svg viewBox="0 0 400 130" fill="none" className="subpage-article-visual-svg">
        <rect width="400" height="130" fill="#202D3A" />
        <line x1="20" y1="65" x2="380" y2="65" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="50" cy="65" r="6" fill="#5D7A9E" />
        <circle cx="200" cy="65" r="6" fill="#1F4E45" />
        <circle cx="350" cy="65" r="6" fill="#F4F1EB" />
        <g transform="translate(70, 42)">
          <text x="0" y="16" fontFamily="Space Grotesk, sans-serif" fontSize="12" fontWeight="700" fill="#F0EEE7" letterSpacing="0.06em">
            PRACTICE BENCHMARK // {item.pill.toUpperCase()}
          </text>
          <text x="0" y="34" fontFamily="Manrope, sans-serif" fontSize="9" fill="#B8C7E0">
            Engineered deliverables · Senior architects · Transparent cadence
          </text>
        </g>
      </svg>
    </div>
  );
}

/**
 * Comprehensive mapping of unique, high-resolution imagery for each subpage
 * matching its specific domain, title, and practice area with ZERO duplicate URLs.
 */
const SUBPAGE_HERO_IMAGES: Record<string, string> = {
  // IT SERVICES
  "it-services": "/assets/img/subpage-software-dev.jpg",
  "custom-software-development": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=80",
  "web-application-development": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
  "mobile-app-development": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1400&q=80",
  "ui-ux-design": "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1400&q=80",
  "ecommerce-cms-development": "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=1400&q=80",
  "ai-machine-learning": "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=1400&q=80",
  "generative-ai": "/assets/img/subpage-generative-ai.jpg",
  "agentic-ai-automation": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1400&q=80",
  "data-engineering-analytics": "/assets/img/subpage-data-lakehouse.jpg",
  "cloud-services": "/assets/img/subpage-cloud-infra.jpg",
  "devops-devsecops": "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=1400&q=80",
  "api-integration-modernisation": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1400&q=80",
  "qa-test-automation": "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1400&q=80",
  "cybersecurity": "/assets/img/subpage-cybersecurity.jpg",
  "salesforce-erp-crm": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
  "emerging-tech-iot": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
  "managed-it-support": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80",

  // HIRING & TALENT SOLUTIONS
  "hiring-consultation": "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1400&q=80",
  "hiring-services": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80",
  "permanent-it-recruitment": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1400&q=80",
  "contract-staffing": "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1400&q=80",
  "staff-augmentation": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80",
  "gcc-hiring": "/assets/img/subpage-talent-gcc.jpg",
  "executive-search": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1400&q=80",
  "rpo": "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",
  "campus-hiring": "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=80",
  "us-it-staffing": "https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?auto=format&fit=crop&w=1400&q=80",
  "technical-assessment": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
  "diversity-hiring": "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=1400&q=80",
  "technologies-roles-we-recruit": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1400&q=80",

  // TRAINING & EDUCATION
  "corporate-training": "/assets/img/subpage-corporate-training.jpg",
  "training-for-it-corporates": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1400&q=80",
  "training-for-institutes": "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1400&q=80",
  "generative-ai-training": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1400&q=80",
  "ai-literacy-training": "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1400&q=80",
  "machine-learning-mlops-training": "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1400&q=80",
  "data-engineering-training": "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1400&q=80",
  "data-analytics-training": "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=80",
  "cloud-training": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1400&q=80",
  "devops-kubernetes-training": "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=1400&q=80",
  "platform-engineering-sre-training": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80",
  "cybersecurity-training": "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=1400&q=80",
  "software-testing-training": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1400&q=80",
  "faculty-development-programs": "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1400&q=80",
  "industry-readiness-bootcamp": "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1400&q=80",
  "placement-training": "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1400&q=80",
  "nep-credit-courses": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1400&q=80",
  "ai-data-certification-program": "https://images.unsplash.com/photo-1589330694653-dad6ef49ca6b?auto=format&fit=crop&w=1400&q=80",
  "cloud-devops-certification-program": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80",
  "cybersecurity-certification-program": "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1400&q=80",
  "software-testing-career-program": "https://images.unsplash.com/photo-1508873696983-2df570464756?auto=format&fit=crop&w=1400&q=80",
  "hackathons-internships": "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&w=1400&q=80",
  "centre-of-excellence": "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=80",

  // COMPANY & GENERAL
  "about": "/assets/img/hero-3d-perfect.png",
  "contact": "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1400&q=80",
  "resources": "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=1400&q=80",
  "blog": "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1400&q=80",
  "case-studies": "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1400&q=80",
  "faq": "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1400&q=80",
  "privacy-policy": "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=1400&q=80",
  "terms": "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1400&q=80",
  "genai-document-assistant-insurance": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
  "india-engineering-team-setup": "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80",
  "genai-cloud-upskilling-program": "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1400&q=80",
  "nep-industry-courses-colleges": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1400&q=80",
  "corporate-ai-upskilling-plan": "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80",
  "hire-train-deploy-model": "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=1400&q=80"
};

/**
 * Maps each subpage to its high-resolution domain image
 */
function getSubpageHeroImage(slug: string, crumb?: string): string {
  const s = (slug || "").toLowerCase();
  if (SUBPAGE_HERO_IMAGES[s]) {
    return SUBPAGE_HERO_IMAGES[s];
  }
  // Keyword-based fallback for any custom or dynamic route
  if (s.includes("cybersecurity") || s.includes("security") || s.includes("compliance")) {
    return "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=80";
  }
  if (s.includes("data") && !s.includes("training")) {
    return "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80";
  }
  if (s.includes("generative") || s.includes("agentic") || s.includes("ai")) {
    return "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=80";
  }
  if (s.includes("cloud") || s.includes("devops") || s.includes("sre")) {
    return "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=80";
  }
  if (s.includes("hiring") || s.includes("staffing") || s.includes("talent") || s.includes("recruitment")) {
    return "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80";
  }
  if (s.includes("training") || s.includes("college") || s.includes("institute")) {
    return "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1400&q=80";
  }
  return "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80";
}

export function Page({ data }: { data: PageData }) {
  // Helper to format title with the periwinkle accent on the last word/phrase
  const titleWords = data.title.split(" ");
  const lastWord = titleWords.length > 2 ? titleWords.pop() : "";
  const mainTitle = titleWords.join(" ");
  const heroBgImage = getSubpageHeroImage(data.slug, data.crumb);

  return (
    <div style={{ backgroundColor: "#F4F1EB", minHeight: "100vh", color: "#202D3A" }}>
      {/* 1. Header (Dynamic active state based on current page URL) */}
      <EditorialHeader activePath={data.slug} />

      <main id="main">
        {/* 2. Coordinated Architectural Subpage Hero with Domain Image Background (NO CARDS OVER IMAGE) */}
        <section className="subpage-hero" aria-label={data.title}>
          {/* Relevant Domain Background Image anchored on Right with Luxury Left-Fade */}
          <div className="subpage-hero-bg-stage" aria-hidden="true">
            <img
              src={heroBgImage}
              alt=""
              className="subpage-hero-bg-img"
              loading="eager"
            />
            <div className="subpage-hero-bg-scrim" />
          </div>

          <div className="subpage-hero-decor" aria-hidden="true" />
          <div className="subpage-hero-crosshair" aria-hidden="true" />

          <div className="container" style={{ position: "relative", zIndex: 3 }}>
            <div className="subpage-hero-grid">
              {/* Left Column: Eyebrow, Large Space Grotesk Title, Lede & CTAs */}
              <div className="subpage-hero-content">
                <div className="subpage-eyebrow">
                  <span className="subpage-eyebrow-bullet" />
                  <span>
                    • PRACTICE // {data.crumb ? data.crumb.toUpperCase() : "SOLUTIONS"} · ENTERPRISE DELIVERY
                  </span>
                </div>

                <h1 className="subpage-title">
                  {mainTitle}{" "}
                  {lastWord ? <span className="accent-blue">{lastWord}</span> : null}
                </h1>

                <p className="subpage-lede">{data.lede}</p>

                <div className="subpage-actions">
                  <a className="subpage-btn-primary" href="/contact.html">
                    <span>Book a Consultation</span>
                    <span aria-hidden="true">→</span>
                  </a>
                  <a
                    className="subpage-btn-secondary"
                    href={data.secondaryHref ?? "/contact.html"}
                  >
                    <span>{data.secondaryLabel ?? "Discuss Requirements"}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom 3-Column Architectural Trust Bar */}
            <div className="subpage-trust-bar">
              <div className="subpage-trust-col">
                <span className="subpage-trust-label">01 / IP &amp; GOVERNANCE</span>
                <span className="subpage-trust-val">100% Client Ownership · Git Direct</span>
              </div>
              <div className="subpage-trust-col">
                <span className="subpage-trust-label">02 / CADENCE</span>
                <span className="subpage-trust-val">2-Week Milestones · Zero Lock-In</span>
              </div>
              <div className="subpage-trust-col">
                <span className="subpage-trust-label">03 / SPECIALISATION</span>
                <span className="subpage-trust-val">Senior Architects &amp; Vetted Teams</span>
              </div>
              <div>
                <a className="subpage-trust-scroll" href="#scope">
                  <span>EXPLORE SCOPE</span>
                  <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Subpage Dynamic Content Blocks */}
        {data.blocks.map((b, bi) => {
          // Block Kind: Scope (Architectural List + Sticky Phase Schematic)
          if (b.kind === "scope") {
            return (
              <section
                id="scope"
                className="subpage-section"
                key={bi}
                aria-label={b.title}
              >
                <div className="container">
                  <div className="subpage-section-head">
                    <span className="subpage-section-tag">CAPABILITY SPECS // PRACTICE SCOPE</span>
                    <h2 className="subpage-section-title">{b.title}</h2>
                    {b.lede ? <p className="subpage-section-lede">{b.lede}</p> : null}
                  </div>

                  <div className="subpage-scope-grid">
                    {/* Left List of Capabilities */}
                    <div className="subpage-scope-list">
                      {b.items.map((it, i) => (
                        <Reveal key={it.title} delay={i * 0.05}>
                          <div className="subpage-scope-item">
                            <div className="subpage-scope-meta">
                              <span className="subpage-scope-num">
                                SPEC // 0{i + 1}
                              </span>
                              <span
                                style={{
                                  fontSize: "0.75rem",
                                  fontFamily: "Space Grotesk, sans-serif",
                                  fontWeight: 600,
                                  color: "#646D75",
                                }}
                              >
                                PRODUCTION READY
                              </span>
                            </div>
                            <h3 className="subpage-scope-title">{it.title}</h3>
                            <p className="subpage-scope-body">{it.body}</p>
                            <a
                              className="subpage-scope-link"
                              href={data.secondaryHref ?? "/contact.html"}
                            >
                              <span>Consult on this scope</span>
                              <span aria-hidden="true">→</span>
                            </a>
                          </div>
                        </Reveal>
                      ))}
                    </div>

                    {/* Right Sticky Architectural Delivery Schematic Card (Tailored to Domain) */}
                    <div>
                      <SubpageScopeProtocolCard slug={data.slug} />
                    </div>
                  </div>
                </div>
              </section>
            );
          }

          // Block Kind: Points (Differentiators & Key Outcomes)
          if (b.kind === "points") {
            const META_TAGS = ["SPEC // 01", "SPEC // 02", "SPEC // 03", "SPEC // 04", "SPEC // 05", "SPEC // 06"];
            return (
              <section
                className={`subpage-section ${b.tint ? "tinted" : ""}`}
                key={bi}
                aria-label={b.title}
              >
                <div className="container">
                  <div className="subpage-section-head">
                    <span className="subpage-section-tag">KEY OUTCOMES // DIFFERENTIATORS</span>
                    <h2 className="subpage-section-title">{b.title}</h2>
                    {b.lede ? <p className="subpage-section-lede">{b.lede}</p> : null}
                  </div>

                  <div className="subpage-points-matrix">
                    {b.items.map((t, i) => (
                      <Reveal key={t.slice(0, 32) + i} delay={i * 0.04}>
                        <div className="subpage-point-card">
                          <span className="point-check-badge" aria-hidden="true">✓</span>
                          <div className="point-card-content">
                            <span className="point-card-meta">{META_TAGS[i % META_TAGS.length]} · CORE PRINCIPLE</span>
                            <p className="point-card-text">{t}</p>
                          </div>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </section>
            );
          }

          // Block Kind: Stats (Key Numerical Metrics)
          if (b.kind === "stats") {
            return (
              <section
                className="subpage-section tinted"
                key={bi}
                aria-label={b.title ?? "Key metrics"}
              >
                <div className="container">
                  {b.title ? (
                    <div className="subpage-section-head">
                      <span className="subpage-section-tag">VERIFIED METRICS // IMPACT</span>
                      <h2 className="subpage-section-title">{b.title}</h2>
                    </div>
                  ) : null}

                  <div className="subpage-stats-grid">
                    {b.items.map((s, i) => (
                      <Reveal key={s.l} delay={i * 0.05}>
                        <div className="subpage-stat-card">
                          <div className="subpage-stat-num">{s.v}</div>
                          <p className="subpage-stat-lbl">{s.l}</p>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </section>
            );
          }

          // Block Kind: Steps (4-Stage Horizontal Milestone Rail)
          if (b.kind === "steps") {
            return (
              <section
                className="subpage-section"
                key={bi}
                aria-label="Delivery framework"
              >
                <div className="container">
                  <div className="subpage-section-head">
                    <span className="subpage-section-tag">OPERATIONAL FRAMEWORK // TIMELINE</span>
                    <h2 className="subpage-section-title">{b.title ?? "How We Engage"}</h2>
                    {b.lede ? <p className="subpage-section-lede">{b.lede}</p> : null}
                  </div>

                  <div className="subpage-steps-rail">
                    {STEPS.map((s) => (
                      <div className="subpage-step-col" key={s.n}>
                        <span className="subpage-step-dot" aria-hidden="true" />
                        <span className="subpage-step-phase">PHASE // 0{s.n}</span>
                        <h3 className="subpage-step-title">{s.title}</h3>
                        <p className="subpage-step-body">{s.body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            );
          }

          // Block Kind: FAQs (Editorial Accordion)
          if (b.kind === "faqs") {
            return (
              <section
                className="subpage-section tinted"
                key={bi}
                aria-label={b.title ?? "Questions"}
              >
                <div className="container">
                  <div className="subpage-section-head" style={{ textAlign: "center", margin: "0 auto 48px auto" }}>
                    <span className="subpage-section-tag">CLARIFICATIONS // FAQS</span>
                    <h2 className="subpage-section-title">{b.title ?? "Frequently Asked Questions"}</h2>
                  </div>

                  <div className="subpage-faq-list">
                    {b.items.map((f) => (
                      <details className="subpage-faq-item" key={f.q}>
                        <summary>{f.q}</summary>
                        <p>{f.a}</p>
                      </details>
                    ))}
                  </div>
                </div>
              </section>
            );
          }

          // Block Kind: Articles / Case Studies
          if (b.kind === "articles") {
            return (
              <section className="subpage-section" key={bi} aria-label={b.title}>
                <div className="container">
                  <div className="subpage-section-head">
                    <span className="subpage-section-tag">CASE HISTORIES // BENCHMARKS</span>
                    <h2 className="subpage-section-title">{b.title}</h2>
                    {b.lede ? <p className="subpage-section-lede">{b.lede}</p> : null}
                  </div>

                  <div className="subpage-scope-grid">
                    {b.items.map((p) => (
                      <div key={p.href} className="subpage-article-card">
                        <ArticleVisualBanner item={p} />
                        <div style={{ padding: "28px" }}>
                          <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 12 }}>
                            <span
                              style={{
                                fontFamily: "Space Grotesk, sans-serif",
                                fontSize: "0.7rem",
                                fontWeight: 700,
                                textTransform: "uppercase",
                                color: "#5D7A9E",
                              }}
                            >
                              {p.pill}
                            </span>
                            <span style={{ fontSize: "0.75rem", color: "#646D75" }}>// {p.meta}</span>
                          </div>
                          <h3 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.25rem", margin: "0 0 10px 0" }}>
                            <a href={p.href} style={{ color: "#202D3A", textDecoration: "none" }}>{p.title}</a>
                          </h3>
                          <p style={{ fontFamily: "Manrope, sans-serif", fontSize: "0.9375rem", color: "#4A5568", lineHeight: 1.6, margin: "0 0 20px 0" }}>
                            {p.body}
                          </p>
                          <a
                            href={p.href}
                            style={{
                              fontFamily: "Space Grotesk, sans-serif",
                              fontSize: "0.875rem",
                              fontWeight: 700,
                              color: "#202D3A",
                              textDecoration: "none",
                              display: "inline-flex",
                              alignItems: "center",
                              gap: 6,
                            }}
                          >
                            <span>{p.linkLabel ?? "Explore case details"}</span>
                            <span aria-hidden="true">→</span>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            );
          }

          // Block Kind: Roles Taxonomy
          if (b.kind === "roles") {
            return (
              <section className="subpage-section tinted" key={bi} aria-label={b.title}>
                <div className="container">
                  <div className="subpage-section-head">
                    <span className="subpage-section-tag">ROLE MATRIX // DISCIPLINES</span>
                    <h2 className="subpage-section-title">{b.title}</h2>
                    {b.lede ? <p className="subpage-section-lede">{b.lede}</p> : null}
                  </div>

                  {b.groups.map((g) => (
                    <div key={g.id} id={g.id} style={{ marginBottom: 36 }}>
                      <h3
                        style={{
                          fontFamily: "Space Grotesk, sans-serif",
                          fontSize: "1.15rem",
                          fontWeight: 700,
                          color: "#202D3A",
                          marginBottom: 14,
                        }}
                      >
                        {g.title}
                      </h3>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                        {g.roles.map((r, i) => (
                          <span
                            key={r}
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: 8,
                              backgroundColor: "#FFFFFF",
                              border: "1px solid rgba(32, 45, 58, 0.12)",
                              borderRadius: 4,
                              padding: "6px 14px",
                              fontFamily: "Manrope, sans-serif",
                              fontSize: "0.875rem",
                              fontWeight: 500,
                              color: "#202D3A",
                            }}
                          >
                            <span style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "0.7rem", fontWeight: 700, color: "#5D7A9E" }}>
                              0{i + 1}
                            </span>
                            <span>{r}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          }

          // Block Kind: Legal / Body Text
          if (b.kind === "body") {
            return (
              <section className="subpage-section" key={bi} aria-label={b.title ?? "Details"}>
                <div className="container container-narrow">
                  {b.title ? (
                    <div className="subpage-section-head">
                      <h2 className="subpage-section-title">{b.title}</h2>
                    </div>
                  ) : null}
                  <div
                    style={{
                      backgroundColor: "#FFFFFF",
                      border: "1px solid rgba(32, 45, 58, 0.12)",
                      borderRadius: 8,
                      padding: "36px 32px",
                      lineHeight: 1.8,
                    }}
                  >
                    {b.paragraphs.map((p, i) => (
                      <p key={i} style={{ marginBottom: 18, color: "#4A5568" }}>
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </section>
            );
          }

          return null;
        })}

        {/* 4. Related Exploration Pages */}
        {data.related && data.related.length > 0 && (
          <section className="subpage-section tinted" aria-label="Related capabilities">
            <div className="container">
              <div className="subpage-section-head">
                <span className="subpage-section-tag">EXPLORATION // CONNECTED PRACTICES</span>
                <h2 className="subpage-section-title">Explore Related Practices</h2>
              </div>
              <div className="subpage-related-grid">
                {data.related.map((r) => (
                  <a className="subpage-related-chip" key={r.href} href={r.href}>
                    <span>{r.label}</span>
                    <span aria-hidden="true">→</span>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 5. Direct Scoping Form (Midnight Slate High-Conversion Form) */}
        <ContactEnquiryCta />
      </main>

      {/* 6. Coordinated High-Contrast Editorial Footer */}
      <EditorialFooter />

      {/* 7. Floating WhatsApp Scoping FAB */}
      <WhatsAppFab />

      <DevAnnotation />
    </div>
  );
}
