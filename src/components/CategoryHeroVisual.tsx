import type { PageData } from "../pages/data/types";

/**
 * CategoryHeroVisual: Multi-Format Dynamic Visual Engine
 *
 * Renders diverse, domain-relevant visual formats across subpages:
 * 1. Interactive Vector Topology Schematics (Cloud, DevOps, Microservices, APIs)
 * 2. Defense-in-Depth Shield & Threat Radars (Cybersecurity, Compliance)
 * 3. Continuous Verification Harness (QA & Test Automation)
 * 4. Streaming Lakehouse Pipelines (Data Engineering, Analytics & BI)
 * 5. Multi-Screen Artboard Blueprints (UI/UX, Mobile & Web App)
 * 6. Code Evaluation Scorecards & Radars (Technical Assessment, Screening)
 * 7. Turnkey Global Hub Blueprints (GCC Setup, India Team Setup)
 * 8. Stepped Curriculum Strata & Lab Gauges (Corporate Training, Upskilling)
 * 9. Academic Credit Mapping Frameworks (NEP 2020, Universities, FDP)
 * 10. 3D Architectural Sculptures with Ambient Badges (GenAI, Talent, Master Systems)
 * 11. Editorial Governance Blueprints (About, Case Studies, FAQs, Contact)
 */

export function CategoryHeroVisual({ data }: { data: PageData }) {
  const slug = (data.slug || "").toLowerCase();
  const title = (data.title || "").toLowerCase();
  const crumb = (data.crumb || "").toLowerCase();

  // =========================================================================
  // FORMAT 1: CLOUD, DEVOPS & SRE — MULTI-CLOUD TOPOLOGY SCHEMATIC
  // =========================================================================
  if (
    slug === "cloud-services" ||
    slug === "devops-devsecops" ||
    slug === "platform-engineering-sre-training" ||
    slug.includes("devops") ||
    slug.includes("sre")
  ) {
    return (
      <div className="subpage-visual-wrap" aria-label="Multi-Cloud & DevOps Infrastructure Architecture">
        <div className="subpage-schematic-card">
          <svg viewBox="0 0 540 400" fill="none" className="subpage-schematic-svg">
            <rect x="15" y="20" width="510" height="360" rx="10" fill="#FFFFFF" stroke="#202D3A" strokeWidth="1.2" />
            <line x1="15" y1="65" x2="525" y2="65" stroke="#202D3A" strokeWidth="0.8" strokeDasharray="3 3" />
            
            <text x="35" y="48" fontFamily="Space Grotesk, sans-serif" fontSize="11" fontWeight="700" fill="#202D3A" letterSpacing="0.08em">
              INFRASTRUCTURE TOPOLOGY // GITOPS &amp; KUBERNETES
            </text>
            <circle cx="495" cy="45" r="4.5" fill="#1F4E45" />

            {/* Cloud Tier Cluster */}
            <g transform="translate(35, 85)">
              <rect x="0" y="0" width="135" height="90" rx="6" fill="#F4F1EB" stroke="#202D3A" strokeWidth="1.2" />
              <text x="14" y="26" fontFamily="Space Grotesk, sans-serif" fontSize="11" fontWeight="700" fill="#202D3A">MULTI-CLOUD</text>
              <text x="14" y="44" fontFamily="Manrope, sans-serif" fontSize="9" fill="#646D75">AWS · Azure · GCP</text>
              <text x="14" y="60" fontFamily="Manrope, sans-serif" fontSize="9" fill="#646D75">Terraform Modules</text>
              <rect x="14" y="70" width="70" height="8" rx="2" fill="#DCE3DF" />
            </g>

            {/* CI/CD & GitOps Pipeline */}
            <g transform="translate(195, 85)">
              <rect x="0" y="0" width="150" height="90" rx="6" fill="#202D3A" stroke="#202D3A" strokeWidth="1.2" />
              <text x="14" y="26" fontFamily="Space Grotesk, sans-serif" fontSize="11" fontWeight="700" fill="#F0EEE7">GITOPS CI/CD</text>
              <text x="14" y="44" fontFamily="Manrope, sans-serif" fontSize="9" fill="#B8C7E0">ArgoCD &amp; GitHub Actions</text>
              <text x="14" y="60" fontFamily="Manrope, sans-serif" fontSize="9" fill="#B8C7E0">Zero-Downtime Blue/Green</text>
              <rect x="14" y="70" width="85" height="8" rx="2" fill="#5D7A9E" />
            </g>

            {/* Kubernetes Worker Pods */}
            <g transform="translate(370, 85)">
              <rect x="0" y="0" width="135" height="90" rx="6" fill="#F4F1EB" stroke="#202D3A" strokeWidth="1.2" />
              <text x="14" y="26" fontFamily="Space Grotesk, sans-serif" fontSize="11" fontWeight="700" fill="#202D3A">K8S CLUSTERS</text>
              <text x="14" y="44" fontFamily="Manrope, sans-serif" fontSize="9" fill="#646D75">Auto-Scaling Mesh</text>
              <text x="14" y="60" fontFamily="Manrope, sans-serif" fontSize="9" fill="#646D75">Prometheus &amp; Grafana</text>
              <rect x="14" y="70" width="70" height="8" rx="2" fill="#DCE3DF" />
            </g>

            {/* Connecting Data Bus Lines */}
            <path d="M 170 130 L 195 130" stroke="#202D3A" strokeWidth="1.5" />
            <path d="M 345 130 L 370 130" stroke="#202D3A" strokeWidth="1.5" />

            {/* Bottom SRE Observability Horizon */}
            <g transform="translate(35, 205)">
              <rect x="0" y="0" width="470" height="150" rx="6" fill="#FBF9F5" stroke="#202D3A" strokeWidth="1.2" />
              <text x="24" y="32" fontFamily="Space Grotesk, sans-serif" fontSize="12" fontWeight="700" fill="#202D3A">
                PRODUCTION SLA &amp; DRIFT DETECTION GAUGES
              </text>
              <text x="24" y="52" fontFamily="Manrope, sans-serif" fontSize="10" fill="#646D75">
                Continuous compliance, SOC2-ready infrastructure policies, automated security patching.
              </text>

              {/* Metric Pillars */}
              <g transform="translate(24, 75)">
                <rect x="0" y="0" width="130" height="52" rx="4" fill="#FFFFFF" stroke="rgba(32,45,58,0.15)" strokeWidth="1" />
                <text x="14" y="24" fontFamily="Space Grotesk, sans-serif" fontSize="15" fontWeight="700" fill="#202D3A">99.95%</text>
                <text x="14" y="42" fontFamily="Manrope, sans-serif" fontSize="8" fill="#646D75">UPTIME SLA</text>
              </g>

              <g transform="translate(170, 75)">
                <rect x="0" y="0" width="130" height="52" rx="4" fill="#FFFFFF" stroke="rgba(32,45,58,0.15)" strokeWidth="1" />
                <text x="14" y="24" fontFamily="Space Grotesk, sans-serif" fontSize="15" fontWeight="700" fill="#1F4E45">&lt; 15 min</text>
                <text x="14" y="42" fontFamily="Manrope, sans-serif" fontSize="8" fill="#646D75">DEPLOYMENT CADENCE</text>
              </g>

              <g transform="translate(316, 75)">
                <rect x="0" y="0" width="130" height="52" rx="4" fill="#FFFFFF" stroke="rgba(32,45,58,0.15)" strokeWidth="1" />
                <text x="14" y="24" fontFamily="Space Grotesk, sans-serif" fontSize="15" fontWeight="700" fill="#5D7A9E">ZERO</text>
                <text x="14" y="42" fontFamily="Manrope, sans-serif" fontSize="8" fill="#646D75">VENDOR LOCK-IN</text>
              </g>
            </g>
          </svg>
        </div>
      </div>
    );
  }

  // =========================================================================
  // FORMAT 2: APIS & MICROSERVICES — EVENT-DRIVEN MESH SCHEMATIC
  // =========================================================================
  if (slug.includes("api") || slug.includes("microservices") || slug.includes("modernisation")) {
    return (
      <div className="subpage-visual-wrap" aria-label="API Integration & Microservices Mesh">
        <div className="subpage-schematic-card">
          <svg viewBox="0 0 540 400" fill="none" className="subpage-schematic-svg">
            <rect x="15" y="20" width="510" height="360" rx="10" fill="#FFFFFF" stroke="#202D3A" strokeWidth="1.2" />
            <line x1="15" y1="65" x2="525" y2="65" stroke="#202D3A" strokeWidth="0.8" strokeDasharray="3 3" />
            <text x="35" y="48" fontFamily="Space Grotesk, sans-serif" fontSize="11" fontWeight="700" fill="#202D3A" letterSpacing="0.08em">
              SYSTEM ARCHITECTURE // APIS &amp; DECOUPLED EVENT MESH
            </text>

            {/* Gateway */}
            <g transform="translate(35, 95)">
              <rect x="0" y="0" width="120" height="110" rx="6" fill="#F4F1EB" stroke="#202D3A" strokeWidth="1.2" />
              <text x="16" y="28" fontFamily="Space Grotesk, sans-serif" fontSize="10.5" fontWeight="700" fill="#202D3A">API GATEWAY</text>
              <text x="16" y="48" fontFamily="Manrope, sans-serif" fontSize="8.5" fill="#646D75">Rate Limiting</text>
              <text x="16" y="66" fontFamily="Manrope, sans-serif" fontSize="8.5" fill="#646D75">OAuth2 / mTLS</text>
              <text x="16" y="84" fontFamily="Manrope, sans-serif" fontSize="8.5" fill="#646D75">GraphQL &amp; REST</text>
            </g>

            {/* Event Bus Core */}
            <g transform="translate(185, 95)">
              <rect x="0" y="0" width="165" height="110" rx="6" fill="#202D3A" stroke="#202D3A" strokeWidth="1.2" />
              <text x="18" y="28" fontFamily="Space Grotesk, sans-serif" fontSize="11" fontWeight="700" fill="#F0EEE7">EVENT STREAM BUS</text>
              <text x="18" y="48" fontFamily="Manrope, sans-serif" fontSize="9" fill="#B8C7E0">Kafka / RabbitMQ</text>
              <text x="18" y="66" fontFamily="Manrope, sans-serif" fontSize="9" fill="#B8C7E0">Async Decoupled Sagas</text>
              <text x="18" y="86" fontFamily="Space Grotesk, sans-serif" fontSize="8" fontWeight="700" fill="#5D7A9E">LATENCY: &lt;35ms</text>
            </g>

            {/* Microservices Cluster */}
            <g transform="translate(380, 95)">
              <rect x="0" y="0" width="125" height="110" rx="6" fill="#F4F1EB" stroke="#202D3A" strokeWidth="1.2" />
              <text x="14" y="28" fontFamily="Space Grotesk, sans-serif" fontSize="10.5" fontWeight="700" fill="#202D3A">SERVICES MESH</text>
              <text x="14" y="48" fontFamily="Manrope, sans-serif" fontSize="8.5" fill="#646D75">Isolated Shards</text>
              <text x="14" y="66" fontFamily="Manrope, sans-serif" fontSize="8.5" fill="#646D75">gRPC Protocol</text>
              <text x="14" y="84" fontFamily="Manrope, sans-serif" fontSize="8.5" fill="#646D75">Contract Testing</text>
            </g>

            <path d="M 155 150 L 185 150" stroke="#202D3A" strokeWidth="1.5" />
            <path d="M 350 150 L 380 150" stroke="#202D3A" strokeWidth="1.5" />

            {/* Legacy Modernisation Bridge */}
            <g transform="translate(35, 235)">
              <rect x="0" y="0" width="470" height="120" rx="6" fill="#EAE5DB" stroke="#202D3A" strokeWidth="1.2" />
              <text x="24" y="32" fontFamily="Space Grotesk, sans-serif" fontSize="12" fontWeight="700" fill="#202D3A">
                LEGACY STRANGLER PATTERN MIGRATION
              </text>
              <text x="24" y="52" fontFamily="Manrope, sans-serif" fontSize="10" fill="#445163">
                Incremental migration of monolithic systems to resilient microservices without operational downtime.
              </text>
              <rect x="24" y="70" width="422" height="12" rx="3" fill="#FFFFFF" stroke="#202D3A" strokeWidth="0.8" />
              <rect x="24" y="70" width="310" height="12" rx="3" fill="#1F4E45" />
              <text x="24" y="102" fontFamily="Space Grotesk, sans-serif" fontSize="9" fontWeight="700" fill="#202D3A">
                MIGRATION PROGRESS: ZERO REGRESSION · COMPREHENSIVE CONTRACT TESTS
              </text>
            </g>
          </svg>
        </div>
      </div>
    );
  }

  // =========================================================================
  // FORMAT: FULL-STACK ENTERPRISE SOFTWARE ARCHITECTURE SCHEMATIC
  // =========================================================================
  if (
    slug === "custom-software-development" ||
    slug === "web-application-development" ||
    slug === "it-services" ||
    slug === "salesforce-erp-crm" ||
    slug === "emerging-tech-iot" ||
    slug === "managed-it-support" ||
    slug.includes("software-development")
  ) {
    return (
      <div className="subpage-visual-wrap" aria-label="Full-Stack Software Architecture Blueprint">
        <div className="subpage-schematic-card">
          <svg viewBox="0 0 540 400" fill="none" className="subpage-schematic-svg">
            <rect x="15" y="20" width="510" height="360" rx="10" fill="#FFFFFF" stroke="#202D3A" strokeWidth="1.2" />
            <line x1="15" y1="65" x2="525" y2="65" stroke="#202D3A" strokeWidth="0.8" strokeDasharray="3 3" />
            <text x="35" y="48" fontFamily="Space Grotesk, sans-serif" fontSize="11" fontWeight="700" fill="#202D3A" letterSpacing="0.08em">
              FULL-STACK ARCHITECTURE // APPLICATION TOPOLOGY &amp; SPRINT PROTOCOL
            </text>
            <circle cx="495" cy="45" r="4.5" fill="#5D7A9E" />

            {/* Client Tier: React 19 / Next.js */}
            <g transform="translate(35, 85)">
              <rect x="0" y="0" width="140" height="90" rx="6" fill="#F4F1EB" stroke="#202D3A" strokeWidth="1.2" />
              <text x="14" y="26" fontFamily="Space Grotesk, sans-serif" fontSize="11" fontWeight="700" fill="#202D3A">CLIENT INTERFACE</text>
              <text x="14" y="44" fontFamily="Manrope, sans-serif" fontSize="9" fill="#646D75">React 19 · Next.js · TS</text>
              <text x="14" y="60" fontFamily="Manrope, sans-serif" fontSize="9" fill="#646D75">Edge SSR · Zero Layout Shift</text>
              <rect x="14" y="70" width="70" height="8" rx="2" fill="#DCE3DF" />
            </g>

            {/* Application & Domain Services */}
            <g transform="translate(195, 85)">
              <rect x="0" y="0" width="150" height="90" rx="6" fill="#202D3A" stroke="#202D3A" strokeWidth="1.2" />
              <text x="14" y="26" fontFamily="Space Grotesk, sans-serif" fontSize="11" fontWeight="700" fill="#F0EEE7">DOMAIN SERVICES</text>
              <text x="14" y="44" fontFamily="Manrope, sans-serif" fontSize="9" fill="#B8C7E0">Node.js · Go · .NET Core</text>
              <text x="14" y="60" fontFamily="Manrope, sans-serif" fontSize="9" fill="#B8C7E0">REST · GraphQL · gRPC</text>
              <rect x="14" y="70" width="85" height="8" rx="2" fill="#5D7A9E" />
            </g>

            {/* Resilient Data Tier */}
            <g transform="translate(365, 85)">
              <rect x="0" y="0" width="140" height="90" rx="6" fill="#F4F1EB" stroke="#202D3A" strokeWidth="1.2" />
              <text x="14" y="26" fontFamily="Space Grotesk, sans-serif" fontSize="11" fontWeight="700" fill="#202D3A">STORAGE &amp; CACHE</text>
              <text x="14" y="44" fontFamily="Manrope, sans-serif" fontSize="9" fill="#646D75">PostgreSQL · Redis</text>
              <text x="14" y="60" fontFamily="Manrope, sans-serif" fontSize="9" fill="#646D75">ACID Compliance · Shards</text>
              <rect x="14" y="70" width="70" height="8" rx="2" fill="#DCE3DF" />
            </g>

            {/* Connecting Bus */}
            <path d="M 175 130 L 195 130" stroke="#202D3A" strokeWidth="1.5" />
            <path d="M 345 130 L 365 130" stroke="#202D3A" strokeWidth="1.5" />

            {/* Sprint Velocity & Production Quality Strip */}
            <g transform="translate(35, 205)">
              <rect x="0" y="0" width="470" height="150" rx="6" fill="#FBF9F5" stroke="#202D3A" strokeWidth="1.2" />
              <text x="24" y="30" fontFamily="Space Grotesk, sans-serif" fontSize="12" fontWeight="700" fill="#202D3A">
                PRODUCTION ASSURANCE // SPRINT VELOCITY &amp; REPO CADENCE
              </text>
              <text x="24" y="50" fontFamily="Manrope, sans-serif" fontSize="10" fill="#646D75">
                Every line of code is committed directly to your private repositories with 100% IP ownership and automated test gates.
              </text>

              <g transform="translate(24, 75)">
                <rect x="0" y="0" width="130" height="52" rx="4" fill="#FFFFFF" stroke="rgba(32,45,58,0.15)" strokeWidth="1" />
                <text x="14" y="24" fontFamily="Space Grotesk, sans-serif" fontSize="15" fontWeight="700" fill="#202D3A">100%</text>
                <text x="14" y="42" fontFamily="Manrope, sans-serif" fontSize="8" fill="#646D75">CLIENT REPO IP</text>
              </g>

              <g transform="translate(170, 75)">
                <rect x="0" y="0" width="130" height="52" rx="4" fill="#FFFFFF" stroke="rgba(32,45,58,0.15)" strokeWidth="1" />
                <text x="14" y="24" fontFamily="Space Grotesk, sans-serif" fontSize="15" fontWeight="700" fill="#1F4E45">2 WEEKS</text>
                <text x="14" y="42" fontFamily="Manrope, sans-serif" fontSize="8" fill="#646D75">DEMO &amp; SPRINT SHIP</text>
              </g>

              <g transform="translate(316, 75)">
                <rect x="0" y="0" width="130" height="52" rx="4" fill="#FFFFFF" stroke="rgba(32,45,58,0.15)" strokeWidth="1" />
                <text x="14" y="24" fontFamily="Space Grotesk, sans-serif" fontSize="15" fontWeight="700" fill="#5D7A9E">&gt; 90%</text>
                <text x="14" y="42" fontFamily="Manrope, sans-serif" fontSize="8" fill="#646D75">TEST COVERAGE</text>
              </g>
            </g>
          </svg>
        </div>
      </div>
    );
  }

  // =========================================================================
  // FORMAT: MOBILE APPLICATION & UI/UX DESIGN SYSTEM SCHEMATIC
  // =========================================================================
  if (
    slug === "mobile-app-development" ||
    slug === "ui-ux-design" ||
    slug === "ecommerce-cms-development" ||
    slug.includes("mobile") ||
    slug.includes("ui-ux")
  ) {
    return (
      <div className="subpage-visual-wrap" aria-label="Mobile Viewport & UI/UX Design System Blueprint">
        <div className="subpage-schematic-card">
          <svg viewBox="0 0 540 400" fill="none" className="subpage-schematic-svg">
            <rect x="15" y="20" width="510" height="360" rx="10" fill="#FFFFFF" stroke="#202D3A" strokeWidth="1.2" />
            <line x1="15" y1="65" x2="525" y2="65" stroke="#202D3A" strokeWidth="0.8" strokeDasharray="3 3" />
            <text x="35" y="48" fontFamily="Space Grotesk, sans-serif" fontSize="11" fontWeight="700" fill="#202D3A" letterSpacing="0.08em">
              DESIGN SYSTEM // MULTI-VIEWPORT ARTBOARD &amp; COMPONENT TOKENS
            </text>
            <circle cx="495" cy="45" r="4.5" fill="#1F4E45" />

            {/* Mobile Viewport Frame */}
            <g transform="translate(35, 85)">
              <rect x="0" y="0" width="155" height="270" rx="16" fill="#202D3A" stroke="#202D3A" strokeWidth="1.5" />
              <rect x="52" y="8" width="50" height="5" rx="2.5" fill="#646D75" />
              <rect x="8" y="20" width="139" height="236" rx="10" fill="#F4F1EB" />
              
              <rect x="18" y="32" width="60" height="8" rx="2" fill="#202D3A" />
              <circle cx="132" cy="36" r="6" fill="#5D7A9E" />
              
              <rect x="18" y="52" width="118" height="42" rx="4" fill="#FFFFFF" stroke="rgba(32,45,58,0.12)" strokeWidth="0.8" />
              <rect x="26" y="60" width="45" height="6" rx="1.5" fill="#202D3A" />
              <rect x="26" y="72" width="80" height="4" rx="1" fill="#646D75" />
              <rect x="26" y="80" width="55" height="4" rx="1" fill="#1F4E45" />

              <rect x="18" y="104" width="118" height="32" rx="4" fill="#FFFFFF" stroke="rgba(32,45,58,0.12)" strokeWidth="0.8" />
              <circle cx="30" cy="120" r="6" fill="#DCE3DF" />
              <rect x="42" y="115" width="60" height="5" rx="1" fill="#202D3A" />
              <rect x="42" y="123" width="40" height="4" rx="1" fill="#646D75" />

              <rect x="18" y="144" width="118" height="32" rx="4" fill="#FFFFFF" stroke="rgba(32,45,58,0.12)" strokeWidth="0.8" />
              <circle cx="30" cy="160" r="6" fill="#DCE3DF" />
              <rect x="42" y="155" width="55" height="5" rx="1" fill="#202D3A" />
              <rect x="42" y="163" width="35" height="4" rx="1" fill="#646D75" />

              <rect x="8" y="224" width="139" height="32" fill="#FFFFFF" />
              <circle cx="35" cy="240" r="4" fill="#5D7A9E" />
              <circle cx="77" cy="240" r="4" fill="#646D75" />
              <circle cx="120" cy="240" r="4" fill="#646D75" />
            </g>

            {/* Design System & Token Panels on Right */}
            <g transform="translate(210, 85)">
              <rect x="0" y="0" width="295" height="80" rx="6" fill="#F4F1EB" stroke="#202D3A" strokeWidth="1.2" />
              <text x="18" y="24" fontFamily="Space Grotesk, sans-serif" fontSize="11" fontWeight="700" fill="#202D3A">DESIGN TOKEN SYSTEM (FIGMA TO CODE)</text>
              <text x="18" y="42" fontFamily="Manrope, sans-serif" fontSize="9" fill="#646D75">Standardised spacing, typography, motion curves &amp; a11y</text>
              <g transform="translate(18, 52)">
                <circle cx="8" cy="8" r="8" fill="#202D3A" />
                <circle cx="32" cy="8" r="8" fill="#5D7A9E" />
                <circle cx="56" cy="8" r="8" fill="#F4F1EB" stroke="#202D3A" strokeWidth="1" />
                <circle cx="80" cy="8" r="8" fill="#1F4E45" />
                <text x="105" y="12" fontFamily="Space Grotesk, sans-serif" fontSize="8" fontWeight="700" fill="#202D3A">WCAG 2.1 AAA COMPLIANT</text>
              </g>
            </g>

            <g transform="translate(210, 180)">
              <rect x="0" y="0" width="295" height="80" rx="6" fill="#202D3A" stroke="#202D3A" strokeWidth="1.2" />
              <text x="18" y="24" fontFamily="Space Grotesk, sans-serif" fontSize="11" fontWeight="700" fill="#F0EEE7">CROSS-PLATFORM &amp; NATIVE PERFORMANCE</text>
              <text x="18" y="42" fontFamily="Manrope, sans-serif" fontSize="9" fill="#B8C7E0">Flutter · Swift iOS · Kotlin Android · Offline First</text>
              <text x="18" y="62" fontFamily="Space Grotesk, sans-serif" fontSize="9" fontWeight="700" fill="#5D7A9E">60 FPS FLUID GESTURES · &lt;2s TTI ON 4G</text>
            </g>

            <g transform="translate(210, 275)">
              <rect x="0" y="0" width="295" height="80" rx="6" fill="#FBF9F5" stroke="#202D3A" strokeWidth="1.2" />
              <text x="18" y="24" fontFamily="Space Grotesk, sans-serif" fontSize="11" fontWeight="700" fill="#202D3A">RAPID PROTOTYPE TO APP STORE RELEASE</text>
              <text x="18" y="42" fontFamily="Manrope, sans-serif" fontSize="9" fill="#646D75">Interactive Figma click-throughs in week 1 · CI test builds in week 2</text>
              <text x="18" y="62" fontFamily="Space Grotesk, sans-serif" fontSize="9" fontWeight="700" fill="#1F4E45">APPLE APP STORE &amp; GOOGLE PLAY DEPLOYED</text>
            </g>
          </svg>
        </div>
      </div>
    );
  }

  // =========================================================================
  // FORMAT 3: CYBERSECURITY & COMPLIANCE — DEFENSE-IN-DEPTH MATRIX
  // =========================================================================
  if (slug.includes("cybersecurity") || slug.includes("security") || slug.includes("compliance")) {
    return (
      <div className="subpage-visual-wrap" aria-label="Cybersecurity & Defense-in-Depth Architecture">
        <div className="subpage-schematic-card">
          <svg viewBox="0 0 540 400" fill="none" className="subpage-schematic-svg">
            <rect x="15" y="20" width="510" height="360" rx="10" fill="#FFFFFF" stroke="#202D3A" strokeWidth="1.2" />
            <line x1="15" y1="65" x2="525" y2="65" stroke="#202D3A" strokeWidth="0.8" strokeDasharray="3 3" />
            <text x="35" y="48" fontFamily="Space Grotesk, sans-serif" fontSize="11" fontWeight="700" fill="#202D3A" letterSpacing="0.08em">
              DEFENSE MATRIX // ZERO-TRUST &amp; COMPLIANCE HARNESS
            </text>

            {/* Central Security Shield Concentric Rings */}
            <g transform="translate(120, 195)">
              <circle cx="0" cy="0" r="85" fill="none" stroke="#202D3A" strokeWidth="1" strokeDasharray="4 4" />
              <circle cx="0" cy="0" r="62" fill="none" stroke="#5D7A9E" strokeWidth="1.5" />
              <circle cx="0" cy="0" r="42" fill="#202D3A" />
              <path d="M 0 -18 L 14 -10 L 14 6 C 14 16 0 24 0 24 C 0 24 -14 16 -14 6 L -14 -10 Z" fill="#F0EEE7" />
              <circle cx="0" cy="0" r="4" fill="#202D3A" />
            </g>

            {/* Telemetry Shields on Right */}
            <g transform="translate(240, 85)">
              <rect x="0" y="0" width="265" height="65" rx="6" fill="#F4F1EB" stroke="#202D3A" strokeWidth="1.2" />
              <text x="18" y="26" fontFamily="Space Grotesk, sans-serif" fontSize="11" fontWeight="700" fill="#202D3A">ZERO-TRUST ARCHITECTURE</text>
              <text x="18" y="46" fontFamily="Manrope, sans-serif" fontSize="9" fill="#646D75">Identity-Aware Proxy · mTLS · Least Privilege</text>
            </g>

            <g transform="translate(240, 165)">
              <rect x="0" y="0" width="265" height="65" rx="6" fill="#F4F1EB" stroke="#202D3A" strokeWidth="1.2" />
              <text x="18" y="26" fontFamily="Space Grotesk, sans-serif" fontSize="11" fontWeight="700" fill="#202D3A">DEVSECOPS PIPELINE GATES</text>
              <text x="18" y="46" fontFamily="Manrope, sans-serif" fontSize="9" fill="#646D75">SAST / DAST · Dependency Scans · Image Signing</text>
            </g>

            <g transform="translate(240, 245)">
              <rect x="0" y="0" width="265" height="65" rx="6" fill="#F4F1EB" stroke="#202D3A" strokeWidth="1.2" />
              <text x="18" y="26" fontFamily="Space Grotesk, sans-serif" fontSize="11" fontWeight="700" fill="#202D3A">GOVERNANCE &amp; AUDITABILITY</text>
              <text x="18" y="46" fontFamily="Manrope, sans-serif" fontSize="9" fill="#646D75">SOC2 Type II · ISO 27001 · GDPR · HIPAA Ready</text>
            </g>

            <g transform="translate(35, 335)">
              <text x="0" y="16" fontFamily="Space Grotesk, sans-serif" fontSize="9" fontWeight="700" fill="#1F4E45">
                CONTINUOUS OBSERVABILITY: ZERO UNMONITORED EGRESS · ENCRYPTED IN TRANSIT &amp; AT REST
              </text>
            </g>
          </svg>
        </div>
      </div>
    );
  }

  // =========================================================================
  // FORMAT 4: QA & TEST AUTOMATION — VERIFICATION PIPELINE HARNESS
  // =========================================================================
  if (slug.includes("qa") || slug.includes("testing") || slug.includes("test")) {
    return (
      <div className="subpage-visual-wrap" aria-label="QA & Test Automation Pipeline">
        <div className="subpage-schematic-card">
          <svg viewBox="0 0 540 400" fill="none" className="subpage-schematic-svg">
            <rect x="15" y="20" width="510" height="360" rx="10" fill="#FFFFFF" stroke="#202D3A" strokeWidth="1.2" />
            <line x1="15" y1="65" x2="525" y2="65" stroke="#202D3A" strokeWidth="0.8" strokeDasharray="3 3" />
            <text x="35" y="48" fontFamily="Space Grotesk, sans-serif" fontSize="11" fontWeight="700" fill="#202D3A" letterSpacing="0.08em">
              QUALITY HARNESS // CONTINUOUS AUTOMATED REGRESSION
            </text>

            {/* Test Stages */}
            <g transform="translate(35, 90)">
              <rect x="0" y="0" width="140" height="105" rx="6" fill="#F4F1EB" stroke="#202D3A" strokeWidth="1.2" />
              <text x="16" y="28" fontFamily="Space Grotesk, sans-serif" fontSize="10.5" fontWeight="700" fill="#202D3A">UNIT &amp; INTEGRATION</text>
              <text x="16" y="48" fontFamily="Manrope, sans-serif" fontSize="8.5" fill="#646D75">Playwright / Cypress</text>
              <text x="16" y="66" fontFamily="Manrope, sans-serif" fontSize="8.5" fill="#646D75">Parallel CI Runners</text>
              <text x="16" y="86" fontFamily="Space Grotesk, sans-serif" fontSize="8" fontWeight="700" fill="#1F4E45">✓ 98.4% COVERAGE</text>
            </g>

            <g transform="translate(195, 90)">
              <rect x="0" y="0" width="150" height="105" rx="6" fill="#202D3A" stroke="#202D3A" strokeWidth="1.2" />
              <text x="16" y="28" fontFamily="Space Grotesk, sans-serif" fontSize="10.5" fontWeight="700" fill="#F0EEE7">GENAI EVAL TESTING</text>
              <text x="16" y="48" fontFamily="Manrope, sans-serif" fontSize="8.5" fill="#B8C7E0">Hallucination Checks</text>
              <text x="16" y="66" fontFamily="Manrope, sans-serif" fontSize="8.5" fill="#B8C7E0">DeepEval Benchmarks</text>
              <text x="16" y="86" fontFamily="Space Grotesk, sans-serif" fontSize="8" fontWeight="700" fill="#5D7A9E">✓ DETERMINISTIC</text>
            </g>

            <g transform="translate(365, 90)">
              <rect x="0" y="0" width="140" height="105" rx="6" fill="#F4F1EB" stroke="#202D3A" strokeWidth="1.2" />
              <text x="16" y="28" fontFamily="Space Grotesk, sans-serif" fontSize="10.5" fontWeight="700" fill="#202D3A">PERFORMANCE &amp; LOAD</text>
              <text x="16" y="48" fontFamily="Manrope, sans-serif" fontSize="8.5" fill="#646D75">k6 / Locust Testing</text>
              <text x="16" y="66" fontFamily="Manrope, sans-serif" fontSize="8.5" fill="#646D75">Spike &amp; Soak Validation</text>
              <text x="16" y="86" fontFamily="Space Grotesk, sans-serif" fontSize="8" fontWeight="700" fill="#1F4E45">✓ &lt;120ms P99</text>
            </g>

            {/* Bottom Test Report Strip */}
            <g transform="translate(35, 220)">
              <rect x="0" y="0" width="470" height="135" rx="6" fill="#FBF9F5" stroke="#202D3A" strokeWidth="1.2" />
              <text x="24" y="32" fontFamily="Space Grotesk, sans-serif" fontSize="12" fontWeight="700" fill="#202D3A">
                AUTOMATED TEST HARNESS STATUS: PASSING (ALL SUITES)
              </text>
              <text x="24" y="52" fontFamily="Manrope, sans-serif" fontSize="10" fill="#646D75">
                Every commit runs automated smoke, functional regression, accessibility (a11y), and contract validation suites.
              </text>

              <g transform="translate(24, 72)">
                <rect x="0" y="0" width="422" height="10" rx="3" fill="#DCE3DF" />
                <rect x="0" y="0" width="410" height="10" rx="3" fill="#1F4E45" />
              </g>

              <text x="24" y="104" fontFamily="Space Grotesk, sans-serif" fontSize="9" fontWeight="700" fill="#202D3A">
                1,420 TESTS EXECUTED · 0 FLAKY TESTS · RELEASE GATE: GREEN
              </text>
            </g>
          </svg>
        </div>
      </div>
    );
  }

  // =========================================================================
  // FORMAT 5: DATA ENGINEERING, ANALYTICS & BI — LAKEHOUSE PIPELINE
  // =========================================================================
  if (slug.includes("data") && !slug.includes("training") && !slug.includes("certification")) {
    return (
      <div className="subpage-visual-wrap" aria-label="Data Engineering & Lakehouse Architecture">
        <div className="subpage-schematic-card">
          <svg viewBox="0 0 540 400" fill="none" className="subpage-schematic-svg">
            <rect x="15" y="20" width="510" height="360" rx="10" fill="#FFFFFF" stroke="#202D3A" strokeWidth="1.2" />
            <line x1="15" y1="65" x2="525" y2="65" stroke="#202D3A" strokeWidth="0.8" strokeDasharray="3 3" />
            <text x="35" y="48" fontFamily="Space Grotesk, sans-serif" fontSize="11" fontWeight="700" fill="#202D3A" letterSpacing="0.08em">
              DATA TOPOLOGY // LAKEHOUSE, DBT &amp; VECTOR STORES
            </text>

            {/* Ingestion Tier */}
            <g transform="translate(35, 95)">
              <rect x="0" y="0" width="135" height="110" rx="6" fill="#F4F1EB" stroke="#202D3A" strokeWidth="1.2" />
              <text x="14" y="28" fontFamily="Space Grotesk, sans-serif" fontSize="10.5" fontWeight="700" fill="#202D3A">INGESTION TIER</text>
              <text x="14" y="48" fontFamily="Manrope, sans-serif" fontSize="8.5" fill="#646D75">Streaming &amp; Batch</text>
              <text x="14" y="66" fontFamily="Manrope, sans-serif" fontSize="8.5" fill="#646D75">Kafka / Airflow / Fivetran</text>
              <text x="14" y="86" fontFamily="Space Grotesk, sans-serif" fontSize="8" fontWeight="700" fill="#202D3A">THROUGHPUT: HIGH</text>
            </g>

            {/* Lakehouse Core */}
            <g transform="translate(190, 95)">
              <rect x="0" y="0" width="160" height="110" rx="6" fill="#202D3A" stroke="#202D3A" strokeWidth="1.2" />
              <text x="16" y="28" fontFamily="Space Grotesk, sans-serif" fontSize="10.5" fontWeight="700" fill="#F0EEE7">MODERN LAKEHOUSE</text>
              <text x="16" y="48" fontFamily="Manrope, sans-serif" fontSize="8.5" fill="#B8C7E0">Snowflake / Databricks</text>
              <text x="16" y="66" fontFamily="Manrope, sans-serif" fontSize="8.5" fill="#B8C7E0">dbt Semantic Models</text>
              <text x="16" y="86" fontFamily="Space Grotesk, sans-serif" fontSize="8" fontWeight="700" fill="#5D7A9E">SINGLE SOURCE OF TRUTH</text>
            </g>

            {/* Consumption & BI */}
            <g transform="translate(370, 95)">
              <rect x="0" y="0" width="135" height="110" rx="6" fill="#F4F1EB" stroke="#202D3A" strokeWidth="1.2" />
              <text x="14" y="28" fontFamily="Space Grotesk, sans-serif" fontSize="10.5" fontWeight="700" fill="#202D3A">BI &amp; AI VECTOR</text>
              <text x="14" y="48" fontFamily="Manrope, sans-serif" fontSize="8.5" fill="#646D75">Power BI / Tableau</text>
              <text x="14" y="66" fontFamily="Manrope, sans-serif" fontSize="8.5" fill="#646D75">pgvector Embeddings</text>
              <text x="14" y="86" fontFamily="Space Grotesk, sans-serif" fontSize="8" fontWeight="700" fill="#1F4E45">EXECUTIVE DASHBOARDS</text>
            </g>

            <path d="M 170 150 L 190 150" stroke="#202D3A" strokeWidth="1.5" />
            <path d="M 350 150 L 370 150" stroke="#202D3A" strokeWidth="1.5" />

            {/* Governance Strip */}
            <g transform="translate(35, 235)">
              <rect x="0" y="0" width="470" height="120" rx="6" fill="#FBF9F5" stroke="#202D3A" strokeWidth="1.2" />
              <text x="24" y="32" fontFamily="Space Grotesk, sans-serif" fontSize="12" fontWeight="700" fill="#202D3A">
                DATA GOVERNANCE, LINEAGE &amp; ANOMALY ALERTS
              </text>
              <text x="24" y="52" fontFamily="Manrope, sans-serif" fontSize="10" fill="#646D75">
                Automated data quality checks, schema evolution management, and role-based data masking.
              </text>
              <text x="24" y="80" fontFamily="Space Grotesk, sans-serif" fontSize="9" fontWeight="700" fill="#1F4E45">
                FRESHNESS SLA: &lt;5 MINS // ACCURACY: 99.99% // RECONCILED DAILY
              </text>
            </g>
          </svg>
        </div>
      </div>
    );
  }

  // =========================================================================
  // FORMAT 6: TECHNICAL ASSESSMENT & SCREENING — SCORECARD RADAR
  // =========================================================================
  if (slug.includes("assessment") || slug.includes("screening")) {
    return (
      <div className="subpage-visual-wrap" aria-label="Technical Code Screening & Assessment Scorecard">
        <div className="subpage-schematic-card">
          <svg viewBox="0 0 540 400" fill="none" className="subpage-schematic-svg">
            <rect x="15" y="20" width="510" height="360" rx="10" fill="#FFFFFF" stroke="#202D3A" strokeWidth="1.2" />
            <line x1="15" y1="65" x2="525" y2="65" stroke="#202D3A" strokeWidth="0.8" strokeDasharray="3 3" />
            <text x="35" y="48" fontFamily="Space Grotesk, sans-serif" fontSize="11" fontWeight="700" fill="#202D3A" letterSpacing="0.08em">
              ASSESSMENT DOSSIER // PRACTITIONER CODE SCREENING
            </text>

            {/* Candidate Scorecard */}
            <g transform="translate(35, 90)">
              <rect x="0" y="0" width="225" height="260" rx="6" fill="#F4F1EB" stroke="#202D3A" strokeWidth="1.2" />
              <text x="18" y="32" fontFamily="Space Grotesk, sans-serif" fontSize="13" fontWeight="700" fill="#202D3A">CANDIDATE SCORECARD</text>
              <text x="18" y="50" fontFamily="Manrope, sans-serif" fontSize="9" fill="#646D75">Senior Full-Stack Architect</text>

              {/* Progress Gauges */}
              <g transform="translate(18, 70)">
                <text x="0" y="10" fontFamily="Space Grotesk, sans-serif" fontSize="9" fontWeight="700" fill="#202D3A">SYSTEM DESIGN &amp; CONCURRENCY</text>
                <text x="190" y="10" fontFamily="Space Grotesk, sans-serif" fontSize="9" fontWeight="700" fill="#1F4E45" textAnchor="end">94%</text>
                <rect x="0" y="16" width="190" height="6" rx="3" fill="#DCE3DF" />
                <rect x="0" y="16" width="178" height="6" rx="3" fill="#1F4E45" />
              </g>

              <g transform="translate(18, 110)">
                <text x="0" y="10" fontFamily="Space Grotesk, sans-serif" fontSize="9" fontWeight="700" fill="#202D3A">LIVE CODE PRODUCTION QUALITY</text>
                <text x="190" y="10" fontFamily="Space Grotesk, sans-serif" fontSize="9" fontWeight="700" fill="#1F4E45" textAnchor="end">91%</text>
                <rect x="0" y="16" width="190" height="6" rx="3" fill="#DCE3DF" />
                <rect x="0" y="16" width="172" height="6" rx="3" fill="#1F4E45" />
              </g>

              <g transform="translate(18, 150)">
                <text x="0" y="10" fontFamily="Space Grotesk, sans-serif" fontSize="9" fontWeight="700" fill="#202D3A">PROBLEM-SOLVING ROBUSTNESS</text>
                <text x="190" y="10" fontFamily="Space Grotesk, sans-serif" fontSize="9" fontWeight="700" fill="#1F4E45" textAnchor="end">96%</text>
                <rect x="0" y="16" width="190" height="6" rx="3" fill="#DCE3DF" />
                <rect x="0" y="16" width="182" height="6" rx="3" fill="#1F4E45" />
              </g>

              <g transform="translate(18, 195)">
                <rect x="0" y="0" width="190" height="42" rx="4" fill="#202D3A" />
                <text x="12" y="25" fontFamily="Space Grotesk, sans-serif" fontSize="9" fontWeight="700" fill="#F0EEE7">VERDICT: STRONGLY RECOMMENDED</text>
              </g>
            </g>

            {/* Assessment Process Breakdown */}
            <g transform="translate(280, 90)">
              <rect x="0" y="0" width="225" height="260" rx="6" fill="#FBF9F5" stroke="#202D3A" strokeWidth="1.2" />
              <text x="18" y="32" fontFamily="Space Grotesk, sans-serif" fontSize="12" fontWeight="700" fill="#202D3A">EVALUATION CADENCE</text>
              
              <g transform="translate(18, 55)">
                <circle cx="8" cy="8" r="4" fill="#202D3A" />
                <text x="22" y="12" fontFamily="Space Grotesk, sans-serif" fontSize="10" fontWeight="700" fill="#202D3A">DAY 1–2: Resumes Calibrated</text>
              </g>

              <g transform="translate(18, 100)">
                <circle cx="8" cy="8" r="4" fill="#202D3A" />
                <text x="22" y="12" fontFamily="Space Grotesk, sans-serif" fontSize="10" fontWeight="700" fill="#202D3A">DAY 3–4: Senior Engineer Live Lab</text>
              </g>

              <g transform="translate(18, 145)">
                <circle cx="8" cy="8" r="4" fill="#1F4E45" />
                <text x="22" y="12" fontFamily="Space Grotesk, sans-serif" fontSize="10" fontWeight="700" fill="#1F4E45">DAY 5–7: Client Shortlist Delivery</text>
              </g>

              <g transform="translate(18, 195)">
                <rect x="0" y="0" width="190" height="42" rx="4" fill="#EAE5DB" stroke="rgba(32,45,58,0.2)" strokeWidth="1" />
                <text x="12" y="25" fontFamily="Space Grotesk, sans-serif" fontSize="9" fontWeight="700" fill="#202D3A">88% JOIN RATIO · SUCCESS FEE ONLY</text>
              </g>
            </g>
          </svg>
        </div>
      </div>
    );
  }

  // =========================================================================
  // FORMAT 7: GCC & INDIA TEAM SETUP — TURNKEY GLOBAL HUB BLUEPRINT
  // =========================================================================
  if (slug.includes("gcc") || slug.includes("india-engineering") || slug.includes("turnkey")) {
    return (
      <div className="subpage-visual-wrap" aria-label="Turnkey India GCC Hub Architecture">
        <div className="subpage-schematic-card">
          <svg viewBox="0 0 540 400" fill="none" className="subpage-schematic-svg">
            <rect x="15" y="20" width="510" height="360" rx="10" fill="#FFFFFF" stroke="#202D3A" strokeWidth="1.2" />
            <line x1="15" y1="65" x2="525" y2="65" stroke="#202D3A" strokeWidth="0.8" strokeDasharray="3 3" />
            <text x="35" y="48" fontFamily="Space Grotesk, sans-serif" fontSize="11" fontWeight="700" fill="#202D3A" letterSpacing="0.08em">
              GLOBAL OPERATING MODEL // GCC BUILD-OPERATE-TRANSFER (BOT)
            </text>

            {/* US Headquarters Node */}
            <g transform="translate(35, 95)">
              <rect x="0" y="0" width="150" height="110" rx="6" fill="#F4F1EB" stroke="#202D3A" strokeWidth="1.2" />
              <text x="16" y="28" fontFamily="Space Grotesk, sans-serif" fontSize="11" fontWeight="700" fill="#202D3A">CLIENT HQ (US/GLOBAL)</text>
              <text x="16" y="48" fontFamily="Manrope, sans-serif" fontSize="9" fill="#646D75">Product Vision &amp; Roadmaps</text>
              <text x="16" y="66" fontFamily="Manrope, sans-serif" fontSize="9" fill="#646D75">Direct Git Commits</text>
              <text x="16" y="86" fontFamily="Space Grotesk, sans-serif" fontSize="8" fontWeight="700" fill="#202D3A">100% IP OWNERSHIP</text>
            </g>

            {/* Dedicated GCC Hub Node */}
            <g transform="translate(335, 95)">
              <rect x="0" y="0" width="170" height="110" rx="6" fill="#202D3A" stroke="#202D3A" strokeWidth="1.2" />
              <text x="16" y="28" fontFamily="Space Grotesk, sans-serif" fontSize="11" fontWeight="700" fill="#F0EEE7">INDIA GCC TECH HUB</text>
              <text x="16" y="48" fontFamily="Manrope, sans-serif" fontSize="9" fill="#B8C7E0">Greater Noida West Campus</text>
              <text x="16" y="66" fontFamily="Manrope, sans-serif" fontSize="9" fill="#B8C7E0">Dedicated Pods &amp; Infra</text>
              <text x="16" y="86" fontFamily="Space Grotesk, sans-serif" fontSize="8" fontWeight="700" fill="#5D7A9E">ZERO ENTITY HEADACHE</text>
            </g>

            <path d="M 185 150 L 335 150" stroke="#202D3A" strokeWidth="1.5" strokeDasharray="4 4" />
            <circle cx="260" cy="150" r="16" fill="#EAE5DB" stroke="#202D3A" strokeWidth="1.2" />
            <text x="260" y="154" fontFamily="Space Grotesk, sans-serif" fontSize="9" fontWeight="700" fill="#202D3A" textAnchor="middle">BOT</text>

            {/* BOT 3-Stage Horizon */}
            <g transform="translate(35, 235)">
              <rect x="0" y="0" width="470" height="120" rx="6" fill="#FBF9F5" stroke="#202D3A" strokeWidth="1.2" />
              <text x="24" y="30" fontFamily="Space Grotesk, sans-serif" fontSize="12" fontWeight="700" fill="#202D3A">
                3-PHASE MATURITY TIMELINE: BUILD · OPERATE · TRANSFER
              </text>
              
              <g transform="translate(24, 50)">
                <text x="0" y="14" fontFamily="Space Grotesk, sans-serif" fontSize="10" fontWeight="700" fill="#202D3A">01 / BUILD</text>
                <text x="0" y="32" fontFamily="Manrope, sans-serif" fontSize="8.5" fill="#646D75">Talent sourcing, facilities &amp; compliance</text>
              </g>

              <g transform="translate(160, 50)">
                <text x="0" y="14" fontFamily="Space Grotesk, sans-serif" fontSize="10" fontWeight="700" fill="#202D3A">02 / OPERATE</text>
                <text x="0" y="32" fontFamily="Manrope, sans-serif" fontSize="8.5" fill="#646D75">Sprint cadence, HR &amp; sprint deliverables</text>
              </g>

              <g transform="translate(320, 50)">
                <text x="0" y="14" fontFamily="Space Grotesk, sans-serif" fontSize="10" fontWeight="700" fill="#1F4E45">03 / TRANSFER</text>
                <text x="0" y="32" fontFamily="Manrope, sans-serif" fontSize="8.5" fill="#646D75">Full legal entity handover whenever ready</text>
              </g>
            </g>
          </svg>
        </div>
      </div>
    );
  }

  // =========================================================================
  // FORMAT 8: NEP 2020 & HIGHER EDUCATION — CURRICULUM BLUEPRINT
  // =========================================================================
  if (
    slug.includes("nep") ||
    slug.includes("institutes") ||
    slug.includes("faculty") ||
    slug.includes("placement") ||
    slug.includes("centre-of-excellence")
  ) {
    return (
      <div className="subpage-visual-wrap" aria-label="NEP 2020 Higher Education Curriculum Framework">
        <div className="subpage-schematic-card">
          <svg viewBox="0 0 540 400" fill="none" className="subpage-schematic-svg">
            <rect x="15" y="20" width="510" height="360" rx="10" fill="#FFFFFF" stroke="#202D3A" strokeWidth="1.2" />
            <line x1="15" y1="65" x2="525" y2="65" stroke="#202D3A" strokeWidth="0.8" strokeDasharray="3 3" />
            <text x="35" y="48" fontFamily="Space Grotesk, sans-serif" fontSize="11" fontWeight="700" fill="#202D3A" letterSpacing="0.08em">
              NEP 2020 FRAMEWORK // CREDIT-MAPPED INDUSTRY MINORS
            </text>

            {/* Stepped Strata Levels */}
            <g transform="translate(35, 90)">
              <rect x="0" y="0" width="470" height="48" rx="4" fill="#202D3A" />
              <text x="20" y="28" fontFamily="Space Grotesk, sans-serif" fontSize="11" fontWeight="700" fill="#F0EEE7">
                LEVEL 03 // INDUSTRY CAPSTONES &amp; PRODUCTION SIMULATIONS
              </text>
              <text x="450" y="28" fontFamily="Space Grotesk, sans-serif" fontSize="9" fill="#B8C7E0" textAnchor="end">
                DEPLOYED REPOSITORIES
              </text>
            </g>

            <g transform="translate(35, 148)">
              <rect x="0" y="0" width="470" height="48" rx="4" fill="#B8C7E0" stroke="#202D3A" strokeWidth="1.2" />
              <text x="20" y="28" fontFamily="Space Grotesk, sans-serif" fontSize="11" fontWeight="700" fill="#202D3A">
                LEVEL 02 // ~70% HANDS-ON TOOLCHAIN LAB IMMERSION
              </text>
              <text x="450" y="28" fontFamily="Space Grotesk, sans-serif" fontSize="9" fill="#202D3A" fontWeight="700" textAnchor="end">
                AWS · DOCKER · PYTORCH
              </text>
            </g>

            <g transform="translate(35, 206)">
              <rect x="0" y="0" width="470" height="48" rx="4" fill="#FFFFFF" stroke="#202D3A" strokeWidth="1.2" />
              <text x="20" y="28" fontFamily="Space Grotesk, sans-serif" fontSize="11" fontWeight="700" fill="#202D3A">
                LEVEL 01 // FOUNDATIONAL COMPETENCY BENCHMARKING
              </text>
              <text x="450" y="28" fontFamily="Space Grotesk, sans-serif" fontSize="9" fill="#646D75" textAnchor="end">
                DIAGNOSTIC SCORING
              </text>
            </g>

            {/* Accreditation Details Strip */}
            <g transform="translate(35, 268)">
              <rect x="0" y="0" width="470" height="85" rx="6" fill="#DCE3DF" stroke="#202D3A" strokeWidth="1.2" />
              <text x="20" y="28" fontFamily="Space Grotesk, sans-serif" fontSize="11.5" fontWeight="700" fill="#202D3A">
                AICTE / UGC COMPLIANT CREDITS &amp; FACULTY DEVELOPMENT (FDP)
              </text>
              <text x="20" y="48" fontFamily="Manrope, sans-serif" fontSize="9.5" fill="#3D4A45">
                Structured course design, outcome mapping, and faculty masterclasses for engineering colleges.
              </text>
              <text x="20" y="68" fontFamily="Space Grotesk, sans-serif" fontSize="8.5" fontWeight="700" fill="#1F4E45">
                10 INSTITUTE PROGRAMMES · 48H FIRST IMPLEMENTATION · UNIVERSITY ACCREDITED
              </text>
            </g>
          </svg>
        </div>
      </div>
    );
  }

  // =========================================================================
  // FORMAT 9: GENERATIVE AI & AGENTIC AI — ARCHITECTURAL TELEMETRY HUD
  // =========================================================================
  if (
    slug.includes("generative") ||
    slug.includes("agentic") ||
    slug.includes("ai-machine") ||
    slug.includes("ai-data") ||
    title.includes("generative") ||
    title.includes("agentic")
  ) {
    return (
      <div className="subpage-visual-wrap" aria-label="3D AI Reasoning & Data Sculpture">
        <div className="subpage-schematic-card" style={{ maxWidth: 500, backgroundColor: "#FFFFFF", border: "1px solid rgba(32, 45, 58, 0.12)", borderRadius: 10, boxShadow: "0 12px 32px rgba(32, 45, 58, 0.08)" }}>
          <div style={{ padding: "22px 26px", borderBottom: "1px solid rgba(32, 45, 58, 0.1)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span className="domain-pulse-dot" style={{ backgroundColor: "#1F4E45" }} />
              <span style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", color: "#202D3A", textTransform: "uppercase" }}>
                AI SYSTEMS // RAG &amp; AGENTIC MCP
              </span>
            </div>
            <span style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "0.7rem", fontWeight: 700, color: "#1F4E45", backgroundColor: "#EAE5DB", padding: "3px 8px", borderRadius: 4 }}>
              LIVE PROD READY
            </span>
          </div>

          <div style={{ padding: "22px 26px" }}>
            <h4 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.15rem", fontWeight: 700, color: "#202D3A", margin: "0 0 8px 0" }}>
              Deterministic Agentic Infrastructure
            </h4>
            <p style={{ fontFamily: "Manrope, sans-serif", fontSize: "0.85rem", color: "#646D75", lineHeight: 1.55, margin: "0 0 18px 0" }}>
              Enterprise models orchestrated via Model Context Protocol with deterministic evaluation harnesses, token cost caps, and human-in-the-loop approvals.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 18 }}>
              <div style={{ backgroundColor: "#F4F1EB", borderRadius: 6, padding: "10px 14px", border: "1px solid rgba(32, 45, 58, 0.08)" }}>
                <span style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.1rem", fontWeight: 700, color: "#202D3A", display: "block" }}>&lt; 180ms</span>
                <span style={{ fontFamily: "Manrope, sans-serif", fontSize: "0.75rem", color: "#646D75" }}>RAG LATENCY P95</span>
              </div>
              <div style={{ backgroundColor: "#F4F1EB", borderRadius: 6, padding: "10px 14px", border: "1px solid rgba(32, 45, 58, 0.08)" }}>
                <span style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.1rem", fontWeight: 700, color: "#1F4E45", display: "block" }}>99.4%</span>
                <span style={{ fontFamily: "Manrope, sans-serif", fontSize: "0.75rem", color: "#646D75" }}>EVAL ACCURACY</span>
              </div>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              <span style={{ fontSize: "0.75rem", fontFamily: "Space Grotesk, sans-serif", fontWeight: 600, padding: "4px 10px", backgroundColor: "#202D3A", color: "#F0EEE7", borderRadius: 4 }}>DeepEval Benchmarks</span>
              <span style={{ fontSize: "0.75rem", fontFamily: "Space Grotesk, sans-serif", fontWeight: 600, padding: "4px 10px", backgroundColor: "#EAE5DB", color: "#202D3A", borderRadius: 4 }}>pgvector &amp; Qdrant</span>
              <span style={{ fontSize: "0.75rem", fontFamily: "Space Grotesk, sans-serif", fontWeight: 600, padding: "4px 10px", backgroundColor: "#EAE5DB", color: "#202D3A", borderRadius: 4 }}>Zero-Data Retention</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // FORMAT 10: TALENT ACQUISITION — ARCHITECTURAL TELEMETRY HUD
  // =========================================================================
  if (
    slug.includes("recruitment") ||
    slug.includes("staffing") ||
    slug.includes("augmentation") ||
    slug.includes("talent") ||
    slug.includes("hiring")
  ) {
    return (
      <div className="subpage-visual-wrap" aria-label="3D Talent Networks Sculpture">
        <div className="subpage-schematic-card" style={{ maxWidth: 500, backgroundColor: "#FFFFFF", border: "1px solid rgba(32, 45, 58, 0.12)", borderRadius: 10, boxShadow: "0 12px 32px rgba(32, 45, 58, 0.08)" }}>
          <div style={{ padding: "22px 26px", borderBottom: "1px solid rgba(32, 45, 58, 0.1)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span className="domain-pulse-dot" style={{ backgroundColor: "#5D7A9E" }} />
              <span style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", color: "#202D3A", textTransform: "uppercase" }}>
                TALENT PIPELINE // PRACTITIONER VETTED
              </span>
            </div>
            <span style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "0.7rem", fontWeight: 700, color: "#202D3A", backgroundColor: "#EAE5DB", padding: "3px 8px", borderRadius: 4 }}>
              88% JOIN RATIO
            </span>
          </div>

          <div style={{ padding: "22px 26px" }}>
            <h4 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.15rem", fontWeight: 700, color: "#202D3A", margin: "0 0 8px 0" }}>
              Senior Engineering Recruitment &amp; GCC
            </h4>
            <p style={{ fontFamily: "Manrope, sans-serif", fontSize: "0.85rem", color: "#646D75", lineHeight: 1.55, margin: "0 0 18px 0" }}>
              Practicing software engineers run live technical screens and architecture tests. Delivery from Greater Noida West with client overlap from Louisville, KY.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 18 }}>
              <div style={{ backgroundColor: "#F4F1EB", borderRadius: 6, padding: "10px 14px", border: "1px solid rgba(32, 45, 58, 0.08)" }}>
                <span style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.1rem", fontWeight: 700, color: "#202D3A", display: "block" }}>5–7 Days</span>
                <span style={{ fontFamily: "Manrope, sans-serif", fontSize: "0.75rem", color: "#646D75" }}>SHORTLIST CADENCE</span>
              </div>
              <div style={{ backgroundColor: "#F4F1EB", borderRadius: 6, padding: "10px 14px", border: "1px solid rgba(32, 45, 58, 0.08)" }}>
                <span style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.1rem", fontWeight: 700, color: "#1F4E45", display: "block" }}>Zero Fee</span>
                <span style={{ fontFamily: "Manrope, sans-serif", fontSize: "0.75rem", color: "#646D75" }}>UNTIL JOINING DATE</span>
              </div>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              <span style={{ fontSize: "0.75rem", fontFamily: "Space Grotesk, sans-serif", fontWeight: 600, padding: "4px 10px", backgroundColor: "#202D3A", color: "#F0EEE7", borderRadius: 4 }}>Permanent &amp; C2H</span>
              <span style={{ fontSize: "0.75rem", fontFamily: "Space Grotesk, sans-serif", fontWeight: 600, padding: "4px 10px", backgroundColor: "#EAE5DB", color: "#202D3A", borderRadius: 4 }}>Dedicated GCC Pods</span>
              <span style={{ fontSize: "0.75rem", fontFamily: "Space Grotesk, sans-serif", fontWeight: 600, padding: "4px 10px", backgroundColor: "#EAE5DB", color: "#202D3A", borderRadius: 4 }}>Code-Level Screening</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // FORMAT 11: CORPORATE TRAINING OVERVIEW — ARCHITECTURAL TELEMETRY HUD
  // =========================================================================
  if (
    slug.includes("training") ||
    slug.includes("learning") ||
    slug.includes("upskilling")
  ) {
    return (
      <div className="subpage-visual-wrap" aria-label="3D Corporate Training Sculpture">
        <div className="subpage-schematic-card" style={{ maxWidth: 500, backgroundColor: "#FFFFFF", border: "1px solid rgba(32, 45, 58, 0.12)", borderRadius: 10, boxShadow: "0 12px 32px rgba(32, 45, 58, 0.08)" }}>
          <div style={{ padding: "22px 26px", borderBottom: "1px solid rgba(32, 45, 58, 0.1)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span className="domain-pulse-dot" style={{ backgroundColor: "#5D7A9E" }} />
              <span style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", color: "#202D3A", textTransform: "uppercase" }}>
                LEARNING TRACKS // ~70% LAB IMMERSION
              </span>
            </div>
            <span style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "0.7rem", fontWeight: 700, color: "#1F4E45", backgroundColor: "#EAE5DB", padding: "3px 8px", borderRadius: 4 }}>
              NEP 2020 ALIGNED
            </span>
          </div>

          <div style={{ padding: "22px 26px" }}>
            <h4 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.15rem", fontWeight: 700, color: "#202D3A", margin: "0 0 8px 0" }}>
              Enterprise Upskilling &amp; College Minors
            </h4>
            <p style={{ fontFamily: "Manrope, sans-serif", fontSize: "0.85rem", color: "#646D75", lineHeight: 1.55, margin: "0 0 18px 0" }}>
              Role-based tracks taught by active architects on live cloud toolchains. Students and enterprise engineers produce working capstone repositories.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 18 }}>
              <div style={{ backgroundColor: "#F4F1EB", borderRadius: 6, padding: "10px 14px", border: "1px solid rgba(32, 45, 58, 0.08)" }}>
                <span style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.1rem", fontWeight: 700, color: "#202D3A", display: "block" }}>~70%</span>
                <span style={{ fontFamily: "Manrope, sans-serif", fontSize: "0.75rem", color: "#646D75" }}>LIVE LAB IMMERSION</span>
              </div>
              <div style={{ backgroundColor: "#F4F1EB", borderRadius: 6, padding: "10px 14px", border: "1px solid rgba(32, 45, 58, 0.08)" }}>
                <span style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.1rem", fontWeight: 700, color: "#1F4E45", display: "block" }}>100%</span>
                <span style={{ fontFamily: "Manrope, sans-serif", fontSize: "0.75rem", color: "#646D75" }}>CAPSTONE CODE DEFENSE</span>
              </div>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              <span style={{ fontSize: "0.75rem", fontFamily: "Space Grotesk, sans-serif", fontWeight: 600, padding: "4px 10px", backgroundColor: "#202D3A", color: "#F0EEE7", borderRadius: 4 }}>GenAI &amp; MLOps</span>
              <span style={{ fontSize: "0.75rem", fontFamily: "Space Grotesk, sans-serif", fontWeight: 600, padding: "4px 10px", backgroundColor: "#EAE5DB", color: "#202D3A", borderRadius: 4 }}>AWS, Azure &amp; K8s</span>
              <span style={{ fontSize: "0.75rem", fontFamily: "Space Grotesk, sans-serif", fontWeight: 600, padding: "4px 10px", backgroundColor: "#EAE5DB", color: "#202D3A", borderRadius: 4 }}>FDP &amp; CoE Setup</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // FORMAT 12: COMPANY / ABOUT / CASE STUDIES — OPERATIONAL BLUEPRINT
  // =========================================================================
  if (
    slug === "about" ||
    slug === "case-studies" ||
    slug === "faq" ||
    slug === "contact" ||
    slug === "resources" ||
    slug.includes("insurance") ||
    slug.includes("policy") ||
    slug.includes("terms")
  ) {
    return (
      <div className="subpage-visual-wrap" aria-label="Laprrk Operational Blueprint">
        <div className="subpage-schematic-card">
          <svg viewBox="0 0 540 400" fill="none" className="subpage-schematic-svg">
            <rect x="15" y="20" width="510" height="360" rx="10" fill="#FFFFFF" stroke="#202D3A" strokeWidth="1.2" />
            <line x1="15" y1="65" x2="525" y2="65" stroke="#202D3A" strokeWidth="0.8" strokeDasharray="3 3" />
            <text x="35" y="48" fontFamily="Space Grotesk, sans-serif" fontSize="11" fontWeight="700" fill="#202D3A" letterSpacing="0.08em">
              ENTITY PROFILE // OPERATING BENCHMARKS &amp; GOVERNANCE
            </text>

            <g transform="translate(35, 90)">
              <rect x="0" y="0" width="225" height="110" rx="6" fill="#F4F1EB" stroke="#202D3A" strokeWidth="1.2" />
              <text x="18" y="28" fontFamily="Space Grotesk, sans-serif" fontSize="11" fontWeight="700" fill="#202D3A">DUAL OFFICE HUB</text>
              <text x="18" y="48" fontFamily="Manrope, sans-serif" fontSize="9" fill="#646D75">Greater Noida West, UP, India</text>
              <text x="18" y="66" fontFamily="Manrope, sans-serif" fontSize="9" fill="#646D75">Louisville, KY, USA</text>
              <text x="18" y="86" fontFamily="Space Grotesk, sans-serif" fontSize="8" fontWeight="700" fill="#1F4E45">ESTABLISHED 2019</text>
            </g>

            <g transform="translate(280, 90)">
              <rect x="0" y="0" width="225" height="110" rx="6" fill="#202D3A" stroke="#202D3A" strokeWidth="1.2" />
              <text x="18" y="28" fontFamily="Space Grotesk, sans-serif" fontSize="11" fontWeight="700" fill="#F0EEE7">IP &amp; CONFIDENTIALITY</text>
              <text x="18" y="48" fontFamily="Manrope, sans-serif" fontSize="9" fill="#B8C7E0">Mutual NDA from Day One</text>
              <text x="18" y="66" fontFamily="Manrope, sans-serif" fontSize="9" fill="#B8C7E0">100% Client Codebase Ownership</text>
              <text x="18" y="86" fontFamily="Space Grotesk, sans-serif" fontSize="8" fontWeight="700" fill="#5D7A9E">ZERO CODE RETENTION</text>
            </g>

            <g transform="translate(35, 225)">
              <rect x="0" y="0" width="470" height="130" rx="6" fill="#FBF9F5" stroke="#202D3A" strokeWidth="1.2" />
              <text x="24" y="32" fontFamily="Space Grotesk, sans-serif" fontSize="12" fontWeight="700" fill="#202D3A">
                CORE PRACTICES // SINGLE ACCOUNTABLE STANDARD
              </text>
              <text x="24" y="52" fontFamily="Manrope, sans-serif" fontSize="10" fill="#646D75">
                Full-cycle technology solutions, strategic technical talent acquisition, and practical corporate learning.
              </text>

              <g transform="translate(24, 75)">
                <rect x="0" y="0" width="130" height="40" rx="4" fill="#FFFFFF" stroke="#202D3A" strokeWidth="0.8" />
                <text x="10" y="24" fontFamily="Space Grotesk, sans-serif" fontSize="9" fontWeight="700" fill="#202D3A">17 IT SERVICES</text>
              </g>

              <g transform="translate(170, 75)">
                <rect x="0" y="0" width="130" height="40" rx="4" fill="#FFFFFF" stroke="#202D3A" strokeWidth="0.8" />
                <text x="10" y="24" fontFamily="Space Grotesk, sans-serif" fontSize="9" fontWeight="700" fill="#202D3A">10 HIRING MODELS</text>
              </g>

              <g transform="translate(316, 75)">
                <rect x="0" y="0" width="130" height="40" rx="4" fill="#FFFFFF" stroke="#202D3A" strokeWidth="0.8" />
                <text x="10" y="24" fontFamily="Space Grotesk, sans-serif" fontSize="9" fontWeight="700" fill="#202D3A">28 LEARNING TRACKS</text>
              </g>
            </g>
          </svg>
        </div>
      </div>
    );
  }

  // =========================================================================
  // DEFAULT FORMAT: ARCHITECTURAL SPECIFICATION & GOVERNANCE BLUEPRINT (NO IMAGE)
  // =========================================================================
  return (
    <div className="subpage-visual-wrap" aria-label="Technology Practice Architecture">
      <div className="subpage-schematic-card">
        <svg viewBox="0 0 540 400" fill="none" className="subpage-schematic-svg">
          <rect x="15" y="20" width="510" height="360" rx="10" fill="#FFFFFF" stroke="#202D3A" strokeWidth="1.2" />
          <line x1="15" y1="65" x2="525" y2="65" stroke="#202D3A" strokeWidth="0.8" strokeDasharray="3 3" />
          <text x="35" y="48" fontFamily="Space Grotesk, sans-serif" fontSize="11" fontWeight="700" fill="#202D3A" letterSpacing="0.08em">
            PRACTICE SPECIFICATION // DELIVERY BENCHMARKS
          </text>
          <circle cx="495" cy="45" r="4.5" fill="#1F4E45" />

          <g transform="translate(35, 90)">
            <rect x="0" y="0" width="225" height="110" rx="6" fill="#F4F1EB" stroke="#202D3A" strokeWidth="1.2" />
            <text x="18" y="28" fontFamily="Space Grotesk, sans-serif" fontSize="11" fontWeight="700" fill="#202D3A">100% CLIENT IP</text>
            <text x="18" y="48" fontFamily="Manrope, sans-serif" fontSize="9" fill="#646D75">Assigned to client repo directly</text>
            <text x="18" y="66" fontFamily="Manrope, sans-serif" fontSize="9" fill="#646D75">Zero proprietary lock-in</text>
            <text x="18" y="86" fontFamily="Space Grotesk, sans-serif" fontSize="8" fontWeight="700" fill="#1F4E45">CLEAN TITLE IP</text>
          </g>

          <g transform="translate(280, 90)">
            <rect x="0" y="0" width="225" height="110" rx="6" fill="#202D3A" stroke="#202D3A" strokeWidth="1.2" />
            <text x="18" y="28" fontFamily="Space Grotesk, sans-serif" fontSize="11" fontWeight="700" fill="#F0EEE7">CADENCE &amp; REVIEWS</text>
            <text x="18" y="48" fontFamily="Manrope, sans-serif" fontSize="9" fill="#B8C7E0">2-Week Milestones</text>
            <text x="18" y="66" fontFamily="Manrope, sans-serif" fontSize="9" fill="#B8C7E0">Continuous Git CI/CD</text>
            <text x="18" y="86" fontFamily="Space Grotesk, sans-serif" fontSize="8" fontWeight="700" fill="#5D7A9E">ZERO ESCAPED DEFECTS</text>
          </g>

          <g transform="translate(35, 225)">
            <rect x="0" y="0" width="470" height="130" rx="6" fill="#FBF9F5" stroke="#202D3A" strokeWidth="1.2" />
            <text x="24" y="32" fontFamily="Space Grotesk, sans-serif" fontSize="12" fontWeight="700" fill="#202D3A">
              DELIVERY MODEL // SENIOR PRACTITIONERS ONLY
            </text>
            <text x="24" y="52" fontFamily="Manrope, sans-serif" fontSize="10" fill="#646D75">
              Direct access to solutions architects, lead engineers, and transparent communication protocols.
            </text>

            <g transform="translate(24, 75)">
              <rect x="0" y="0" width="130" height="40" rx="4" fill="#FFFFFF" stroke="#202D3A" strokeWidth="0.8" />
              <text x="12" y="24" fontFamily="Space Grotesk, sans-serif" fontSize="9" fontWeight="700" fill="#202D3A">SENIOR PODS</text>
            </g>

            <g transform="translate(170, 75)">
              <rect x="0" y="0" width="130" height="40" rx="4" fill="#FFFFFF" stroke="#202D3A" strokeWidth="0.8" />
              <text x="12" y="24" fontFamily="Space Grotesk, sans-serif" fontSize="9" fontWeight="700" fill="#202D3A">2-WEEK SPRINTS</text>
            </g>

            <g transform="translate(316, 75)">
              <rect x="0" y="0" width="130" height="40" rx="4" fill="#FFFFFF" stroke="#202D3A" strokeWidth="0.8" />
              <text x="12" y="24" fontFamily="Space Grotesk, sans-serif" fontSize="9" fontWeight="700" fill="#202D3A">SLA BACKED</text>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}
