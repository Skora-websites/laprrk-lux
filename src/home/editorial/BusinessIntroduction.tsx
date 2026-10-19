import { Reveal } from "../../components/motion-primitives";
import {
  OperatingThesisTriadSvg,
  ArchitecturalPrecisionSvg,
  PractitionerTalentSvg,
  AppliedLearningSvg,
} from "./OperatingThesisIllustrations";

export function BusinessIntroduction() {
  return (
    <section className="operating-thesis-section" id="about" aria-label="Operating Thesis">
      {/* Subtle vertical architectural seam connecting from Hero */}
      <div className="thesis-connecting-seam" aria-hidden="true" />

      {/* TOP ZONE: EDITORIAL STATEMENT + INTERCONNECTED TRIAD */}
      <div className="thesis-top-container">
        <div className="thesis-editorial-grid">
          {/* Left Column: Eyebrow, Statement Headline & Copy */}
          <div className="thesis-editorial-left">
            <div className="thesis-eyebrow">
              <span className="thesis-eyebrow-bullet" />
              <span>• OPERATING THESIS</span>
            </div>

            <h2 className="thesis-statement-heading">
              Technology is<br />
              only part of<br />
              the equation.
            </h2>

            <p className="thesis-statement-lead">
              True organisational progress doesn’t come from adopting another framework or licensing an AI tool in isolation. Real momentum requires the synchronised alignment of dependable software architecture, calibrated technical talent, and continuous team capability.
            </p>

            <p className="thesis-statement-sub">
              At Laprrk, we unite engineering delivery, talent acquisition, and corporate learning under a single accountable standard of execution.
            </p>

            <div className="thesis-action-wrap">
              <a href="/about.html" className="thesis-btn-secondary">
                <span>Read Full Operating Philosophy</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interconnected 3D Triad Vector Composition */}
          <div className="thesis-editorial-right">
            <OperatingThesisTriadSvg />
          </div>
        </div>
      </div>

      {/* BOTTOM ZONE: ALTERNATING SAGE AND BEIGE PRINCIPLE ROWS WITH TIMELINE */}
      <div className="thesis-principles-zone">
        {/* Continuous Thin Timeline Spine spanning across all 3 rows */}
        <div className="thesis-timeline-spine" aria-hidden="true" />

        {/* ==============================================================
            ROW 01: ARCHITECTURAL PRECISION (WARM STONE / BEIGE)
           ============================================================== */}
        <div className="thesis-principle-row row-stone">
          <div className="thesis-row-inner">
            {/* Timeline Indicator & Number */}
            <div className="thesis-col-num">
              <span className="thesis-timeline-node" aria-hidden="true" />
              <div className="thesis-num-stack">
                <span className="thesis-num-digits">01</span>
                <span className="thesis-num-meta-label">PRINCIPLE</span>
                <span className="thesis-num-category">SYSTEMS &amp; INFRASTRUCTURE</span>
              </div>
            </div>

            {/* Principle Narrative & Verification Tags */}
            <div className="thesis-col-content">
              <h3 className="thesis-principle-title">Architectural Precision</h3>
              <p className="thesis-principle-desc">
                Code without engineering discipline decays rapidly under enterprise scale. We architect modular, clean-boundary applications, deterministic AI retrieval pipelines, and automated cloud platforms built for multi-year longevity.
              </p>
              <div className="thesis-tag-cloud">
                <span className="thesis-tag-pill">Domain-Driven Design</span>
                <span className="thesis-tag-pill">Eval-Tested LLMs</span>
                <span className="thesis-tag-pill">Automated CI/CD</span>
              </div>
            </div>

            {/* Architectural Isometric Slabs & Callouts */}
            <div className="thesis-col-illustration">
              <ArchitecturalPrecisionSvg />
            </div>
          </div>
        </div>

        {/* ==============================================================
            ROW 02: PRACTITIONER-SCREENED TALENT (MUTED SAGE GREEN)
           ============================================================== */}
        <div className="thesis-principle-row row-sage">
          <div className="thesis-row-inner">
            {/* Timeline Indicator & Number */}
            <div className="thesis-col-num">
              <span className="thesis-timeline-node" aria-hidden="true" />
              <div className="thesis-num-stack">
                <span className="thesis-num-digits">02</span>
                <span className="thesis-num-meta-label">PRINCIPLE</span>
                <span className="thesis-num-category">HUMAN CAPITAL &amp; LEADERSHIP</span>
              </div>
            </div>

            {/* Principle Narrative & Verification Tags */}
            <div className="thesis-col-content">
              <h3 className="thesis-principle-title">Practitioner-Screened Talent</h3>
              <p className="thesis-principle-desc">
                Generic recruitment relies on keyword matching. Our active software engineers conduct deep code-level assessments to ensure candidates possess verified problem-solving ability, production readiness, and cultural durability.
              </p>
              <div className="thesis-tag-cloud">
                <span className="thesis-tag-pill">Senior Software Assessors</span>
                <span className="thesis-tag-pill">5–7 Day First Shortlist</span>
                <span className="thesis-tag-pill">88% Join Ratio</span>
              </div>
            </div>

            {/* Sphere & Satellite Talent Network & Callouts */}
            <div className="thesis-col-illustration">
              <PractitionerTalentSvg />
            </div>
          </div>
        </div>

        {/* ==============================================================
            ROW 03: APPLIED MUSCLE MEMORY (WARM STONE / BEIGE)
           ============================================================== */}
        <div className="thesis-principle-row row-stone">
          <div className="thesis-row-inner">
            {/* Timeline Indicator & Number */}
            <div className="thesis-col-num">
              <span className="thesis-timeline-node" aria-hidden="true" />
              <div className="thesis-num-stack">
                <span className="thesis-num-digits">03</span>
                <span className="thesis-num-meta-label">PRINCIPLE</span>
                <span className="thesis-num-category">ORGANISATIONAL CAPABILITY</span>
              </div>
            </div>

            {/* Principle Narrative & Verification Tags */}
            <div className="thesis-col-content">
              <h3 className="thesis-principle-title">Applied Muscle Memory</h3>
              <p className="thesis-principle-desc">
                Theoretical slide decks fail to shift engineer behaviour. We design intensive enterprise learning tracks where a significant portion of time is spent in hands-on labs, turning emerging tools into everyday capability.
              </p>
              <div className="thesis-tag-cloud">
                <span className="thesis-tag-pill">~70% Live Lab Immersion</span>
                <span className="thesis-tag-pill">Enterprise Toolchain Alignment</span>
                <span className="thesis-tag-pill">NEP 2020 Accreditation</span>
              </div>
            </div>

            {/* Laboratory Strata Circuit Plates & Callouts */}
            <div className="thesis-col-illustration">
              <AppliedLearningSvg />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
