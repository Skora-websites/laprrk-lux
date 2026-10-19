/**
 * Vector illustrations for the Operating Thesis section
 * Crafted in responsive SVG with isometric perspectives, architectural geometry,
 * fine leader lines, and subtle drop shadows matching the warm stone / sage palette.
 */

// 1. Top Triad Illustration: Technology, Talent, and Learning Loop
export function OperatingThesisTriadSvg() {
  return (
    <div className="thesis-triad-wrapper" aria-label="Interconnected Triad: Technology, Talent, Learning">
      <svg
        viewBox="0 0 600 460"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="thesis-triad-svg"
      >
        <defs>
          <filter id="softShadow" x="-15%" y="-15%" width="130%" height="130%">
            <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#202D3A" floodOpacity="0.09" />
          </filter>
          <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#202D3A" floodOpacity="0.07" />
          </filter>
          <linearGradient id="bandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#202D3A" />
            <stop offset="50%" stopColor="#2E4A43" />
            <stop offset="100%" stopColor="#1F4E45" />
          </linearGradient>
          <linearGradient id="marbleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F9F7F3" />
            <stop offset="100%" stopColor="#E6E0D6" />
          </linearGradient>
        </defs>

        {/* Ambient Architectural Geometry in Backdrop */}
        <g opacity="0.65" transform="translate(140, 20)">
          {/* Subtle concrete/stone slab */}
          <polygon points="160,30 320,110 160,190 0,110" fill="#E2DDD2" stroke="rgba(32,45,58,0.15)" strokeWidth="1" />
          <polygon points="0,110 160,190 160,215 0,135" fill="#D3CCC0" stroke="rgba(32,45,58,0.15)" strokeWidth="1" />
          <polygon points="160,190 320,110 320,135 160,215" fill="#C4BCAD" stroke="rgba(32,45,58,0.15)" strokeWidth="1" />

          {/* Miniature architectural foliage accents */}
          <circle cx="60" cy="85" r="14" fill="#2E4A43" opacity="0.35" />
          <circle cx="70" cy="78" r="10" fill="#3D5C54" opacity="0.45" />
          <circle cx="260" cy="85" r="15" fill="#2E4A43" opacity="0.35" />
          <circle cx="270" cy="78" r="11" fill="#3D5C54" opacity="0.45" />
        </g>

        {/* Connecting Triangular Band with Directional Flow */}
        <path
          d="M 300 130 L 420 305 L 180 305 Z"
          stroke="url(#bandGrad)"
          strokeWidth="6"
          strokeLinejoin="round"
          strokeLinecap="round"
          fill="rgba(46, 74, 67, 0.04)"
        />

        {/* Center Triangular Core Badge: "STRONGER ORGANISATIONS" */}
        <g transform="translate(300, 245)">
          <polygon
            points="0,-32 30,22 -30,22"
            fill="#EFEBE4"
            stroke="#202D3A"
            strokeWidth="1.2"
          />
          <text
            x="0"
            y="-4"
            fontFamily="Space Grotesk, sans-serif"
            fontSize="7.5"
            fontWeight="700"
            letterSpacing="0.1em"
            fill="#202D3A"
            textAnchor="middle"
          >
            STRONGER
          </text>
          <text
            x="0"
            y="6"
            fontFamily="Space Grotesk, sans-serif"
            fontSize="7"
            fontWeight="700"
            letterSpacing="0.08em"
            fill="#202D3A"
            textAnchor="middle"
          >
            ORGANISATIONS
          </text>
          <circle cx="0" cy="14" r="1.5" fill="#1F4E45" />
        </g>

        {/* ==============================================================
            NODE 1: TECHNOLOGY (TOP APEX)
           ============================================================== */}
        <g transform="translate(300, 115)" filter="url(#softShadow)" className="thesis-triad-node">
          {/* Main Disc */}
          <circle cx="0" cy="0" r="62" fill="#FFFFFF" stroke="rgba(32, 45, 58, 0.12)" strokeWidth="1.5" />
          <circle cx="0" cy="0" r="58" fill="url(#marbleGrad)" opacity="0.3" />

          {/* Badge Icon: </> */}
          <rect x="-16" y="-44" width="32" height="20" rx="4" fill="#F4F1EB" stroke="#202D3A" strokeWidth="1.2" />
          <text
            x="0"
            y="-30"
            fontFamily="Space Grotesk, monospace"
            fontSize="10"
            fontWeight="700"
            fill="#202D3A"
            textAnchor="middle"
          >
            &lt;/&gt;
          </text>

          {/* Title */}
          <text
            x="0"
            y="-10"
            fontFamily="Space Grotesk, sans-serif"
            fontSize="13"
            fontWeight="700"
            fill="#202D3A"
            textAnchor="middle"
          >
            Technology
          </text>

          {/* Subtext */}
          <text x="0" y="6" fontFamily="Manrope, sans-serif" fontSize="8" fill="#646D75" textAnchor="middle">
            Scalable systems
          </text>
          <text x="0" y="18" fontFamily="Manrope, sans-serif" fontSize="8" fill="#646D75" textAnchor="middle">
            Modern architecture
          </text>
          <text x="0" y="30" fontFamily="Manrope, sans-serif" fontSize="8" fill="#646D75" textAnchor="middle">
            Measurable outcomes
          </text>
        </g>

        {/* ==============================================================
            NODE 2: TALENT (BOTTOM-LEFT)
           ============================================================== */}
        <g transform="translate(180, 310)" filter="url(#softShadow)" className="thesis-triad-node">
          {/* Main Disc */}
          <circle cx="0" cy="0" r="62" fill="#FFFFFF" stroke="rgba(32, 45, 58, 0.12)" strokeWidth="1.5" />
          <circle cx="0" cy="0" r="58" fill="url(#marbleGrad)" opacity="0.3" />

          {/* People Icon */}
          <g transform="translate(0, -34)">
            <circle cx="0" cy="-3" r="5.5" stroke="#202D3A" strokeWidth="1.2" fill="none" />
            <path d="M -9 8 C -9 4 -5 2 0 2 C 5 2 9 4 9 8" stroke="#202D3A" strokeWidth="1.2" fill="none" />
            <circle cx="-9" cy="-1" r="3.5" stroke="#202D3A" strokeWidth="1" fill="none" opacity="0.6" />
            <circle cx="9" cy="-1" r="3.5" stroke="#202D3A" strokeWidth="1" fill="none" opacity="0.6" />
          </g>

          {/* Title */}
          <text
            x="0"
            y="-10"
            fontFamily="Space Grotesk, sans-serif"
            fontSize="13"
            fontWeight="700"
            fill="#202D3A"
            textAnchor="middle"
          >
            Talent
          </text>

          {/* Subtext */}
          <text x="0" y="6" fontFamily="Manrope, sans-serif" fontSize="8" fill="#646D75" textAnchor="middle">
            Skilled engineers
          </text>
          <text x="0" y="18" fontFamily="Manrope, sans-serif" fontSize="8" fill="#646D75" textAnchor="middle">
            Faster hiring
          </text>
          <text x="0" y="30" fontFamily="Manrope, sans-serif" fontSize="8" fill="#646D75" textAnchor="middle">
            Global capability
          </text>
        </g>

        {/* ==============================================================
            NODE 3: LEARNING (BOTTOM-RIGHT)
           ============================================================== */}
        <g transform="translate(420, 310)" filter="url(#softShadow)" className="thesis-triad-node">
          {/* Main Disc */}
          <circle cx="0" cy="0" r="62" fill="#FFFFFF" stroke="rgba(32, 45, 58, 0.12)" strokeWidth="1.5" />
          <circle cx="0" cy="0" r="58" fill="url(#marbleGrad)" opacity="0.3" />

          {/* Stacked Layers Icon */}
          <g transform="translate(0, -34)">
            <polygon points="0,-6 10, -1 0, 4 -10, -1" stroke="#202D3A" strokeWidth="1.2" fill="none" />
            <path d="M -10 2 L 0 7 L 10 2" stroke="#202D3A" strokeWidth="1.2" fill="none" />
            <path d="M -10 5 L 0 10 L 10 5" stroke="#202D3A" strokeWidth="1.2" fill="none" />
          </g>

          {/* Title */}
          <text
            x="0"
            y="-10"
            fontFamily="Space Grotesk, sans-serif"
            fontSize="13"
            fontWeight="700"
            fill="#202D3A"
            textAnchor="middle"
          >
            Learning
          </text>

          {/* Subtext */}
          <text x="0" y="6" fontFamily="Manrope, sans-serif" fontSize="8" fill="#646D75" textAnchor="middle">
            Continuous upskilling
          </text>
          <text x="0" y="18" fontFamily="Manrope, sans-serif" fontSize="8" fill="#646D75" textAnchor="middle">
            Live, hands-on practice
          </text>
          <text x="0" y="30" fontFamily="Manrope, sans-serif" fontSize="8" fill="#646D75" textAnchor="middle">
            Future-ready teams
          </text>
        </g>

        {/* ==============================================================
            LEADER LINES AND COORDINATE LABELS (ABSOLUTE COORDINATES)
           ============================================================== */}
        {/* Top Left: IDEAS / ARCHITECTURE / EXECUTION */}
        <g>
          <text x="120" y="66" fontFamily="Space Grotesk, sans-serif" fontSize="8.5" fontWeight="700" letterSpacing="0.08em" fill="#202D3A" textAnchor="end">
            IDEAS
          </text>
          <text x="120" y="78" fontFamily="Space Grotesk, sans-serif" fontSize="8.5" fontWeight="700" letterSpacing="0.08em" fill="#202D3A" textAnchor="end">
            ARCHITECTURE
          </text>
          <text x="120" y="90" fontFamily="Space Grotesk, sans-serif" fontSize="8.5" fontWeight="700" letterSpacing="0.08em" fill="#202D3A" textAnchor="end">
            EXECUTION
          </text>
          <circle cx="132" cy="78" r="3" fill="#202D3A" />
          <line x1="135" y1="78" x2="240" y2="102" stroke="rgba(32,45,58,0.35)" strokeWidth="0.9" />
          <circle cx="240" cy="102" r="2.5" fill="#202D3A" />
        </g>

        {/* Top Right: PEOPLE / SKILLS / TECHNOLOGY */}
        <g>
          <circle cx="360" cy="102" r="2.5" fill="#202D3A" />
          <line x1="360" y1="102" x2="465" y2="78" stroke="rgba(32,45,58,0.35)" strokeWidth="0.9" />
          <circle cx="465" cy="78" r="3" fill="#202D3A" />
          <text x="478" y="66" fontFamily="Space Grotesk, sans-serif" fontSize="8.5" fontWeight="700" letterSpacing="0.08em" fill="#202D3A">
            PEOPLE
          </text>
          <text x="478" y="78" fontFamily="Space Grotesk, sans-serif" fontSize="8.5" fontWeight="700" letterSpacing="0.08em" fill="#202D3A">
            SKILLS
          </text>
          <text x="478" y="90" fontFamily="Space Grotesk, sans-serif" fontSize="8.5" fontWeight="700" letterSpacing="0.08em" fill="#202D3A">
            TECHNOLOGY
          </text>
        </g>

        {/* Bottom Right: A MORE / CAPABLE / TOMORROW */}
        <g>
          <circle cx="480" cy="315" r="2.5" fill="#202D3A" />
          <line x1="480" y1="315" x2="515" y2="335" stroke="rgba(32,45,58,0.35)" strokeWidth="0.9" />
          <circle cx="515" cy="335" r="3" fill="#202D3A" />
          <text x="526" y="325" fontFamily="Space Grotesk, sans-serif" fontSize="8.5" fontWeight="700" letterSpacing="0.08em" fill="#202D3A">
            A MORE
          </text>
          <text x="526" y="337" fontFamily="Space Grotesk, sans-serif" fontSize="8.5" fontWeight="700" letterSpacing="0.08em" fill="#202D3A">
            CAPABLE
          </text>
          <text x="526" y="349" fontFamily="Space Grotesk, sans-serif" fontSize="8.5" fontWeight="700" letterSpacing="0.08em" fill="#202D3A">
            TOMORROW
          </text>
        </g>
      </svg>
    </div>
  );
}

// 2. Principle 01 Illustration: Floating Architectural Slabs & Leader Callouts
export function ArchitecturalPrecisionSvg() {
  return (
    <div className="principle-illustration-wrapper" aria-label="Architectural Precision Floating Plates">
      <svg
        viewBox="0 0 460 210"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="principle-svg"
      >
        <defs>
          <filter id="slabShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#202D3A" floodOpacity="0.12" />
          </filter>
        </defs>

        {/* Multi-layered floating isometric architectural plates */}
        <g transform="translate(140, 25)">
          {/* Bottom Slab: Deep Midnight Slate */}
          <g transform="translate(0, 95)" filter="url(#slabShadow)">
            <polygon points="70,0 140,40 70,80 0,40" fill="#202D3A" stroke="#151F29" strokeWidth="1" />
            <polygon points="0,40 70,80 70,95 0,55" fill="#151F29" stroke="#151F29" strokeWidth="1" />
            <polygon points="70,80 140,40 140,55 70,95" fill="#2A3947" stroke="#151F29" strokeWidth="1" />
          </g>

          {/* Middle Slab: Textured Raw Concrete / Sandstone */}
          <g transform="translate(0, 50)" filter="url(#slabShadow)">
            <polygon points="70,0 140,40 70,80 0,40" fill="#EAE5DB" stroke="rgba(32,45,58,0.2)" strokeWidth="1" />
            <polygon points="0,40 70,80 70,92 0,52" fill="#D5CEC2" stroke="rgba(32,45,58,0.2)" strokeWidth="1" />
            <polygon points="70,80 140,40 140,52 70,92" fill="#C5BDB0" stroke="rgba(32,45,58,0.2)" strokeWidth="1" />
            {/* Grid etched on top surface */}
            <line x1="35" y1="20" x2="105" y2="60" stroke="rgba(32,45,58,0.15)" strokeWidth="0.8" />
            <line x1="105" y1="20" x2="35" y2="60" stroke="rgba(32,45,58,0.15)" strokeWidth="0.8" />
          </g>

          {/* Top Slab: Translucent Tempered Glass Slab */}
          <g transform="translate(0, 5)" filter="url(#slabShadow)">
            <polygon points="70,0 140,40 70,80 0,40" fill="rgba(244, 248, 250, 0.75)" stroke="#5D7A9E" strokeWidth="1.2" />
            <polygon points="0,40 70,80 70,88 0,48" fill="rgba(93, 122, 158, 0.25)" stroke="#5D7A9E" strokeWidth="0.8" />
            <polygon points="70,80 140,40 140,48 70,88" fill="rgba(93, 122, 158, 0.4)" stroke="#5D7A9E" strokeWidth="0.8" />
            <circle cx="70" cy="40" r="3" fill="#5D7A9E" />
          </g>

          {/* Vertical Architectural Connecting Pins Linking the 3 Slabs */}
          <line x1="0" y1="45" x2="0" y2="135" stroke="#202D3A" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="140" y1="45" x2="140" y2="135" stroke="#202D3A" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="70" y1="85" x2="70" y2="175" stroke="#202D3A" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="0" cy="45" r="2.5" fill="#5D7A9E" />
          <circle cx="140" cy="45" r="2.5" fill="#5D7A9E" />
          <circle cx="70" cy="85" r="2.5" fill="#5D7A9E" />
        </g>

        {/* Leader Lines and Right Callout Labels */}
        {/* Label 1: SCALABLE ARCHITECTURE */}
        <g transform="translate(285, 45)">
          <line x1="0" y1="0" x2="45" y2="0" stroke="rgba(32,45,58,0.35)" strokeWidth="0.9" />
          <circle cx="48" cy="0" r="3" fill="#202D3A" />
          <text x="60" y="3.5" fontFamily="Space Grotesk, sans-serif" fontSize="9" fontWeight="700" letterSpacing="0.08em" fill="#202D3A">
            SCALABLE ARCHITECTURE
          </text>
        </g>

        {/* Label 2: SECURE INFRASTRUCTURE */}
        <g transform="translate(285, 95)">
          <line x1="-15" y1="0" x2="45" y2="0" stroke="rgba(32,45,58,0.35)" strokeWidth="0.9" />
          <circle cx="48" cy="0" r="3" fill="#202D3A" />
          <text x="60" y="3.5" fontFamily="Space Grotesk, sans-serif" fontSize="9" fontWeight="700" letterSpacing="0.08em" fill="#202D3A">
            SECURE INFRASTRUCTURE
          </text>
        </g>

        {/* Label 3: FUTURE-READY PLATFORMS */}
        <g transform="translate(285, 145)">
          <line x1="0" y1="0" x2="45" y2="0" stroke="rgba(32,45,58,0.35)" strokeWidth="0.9" />
          <circle cx="48" cy="0" r="3" fill="#202D3A" />
          <text x="60" y="3.5" fontFamily="Space Grotesk, sans-serif" fontSize="9" fontWeight="700" letterSpacing="0.08em" fill="#202D3A">
            FUTURE-READY PLATFORMS
          </text>
        </g>
      </svg>
    </div>
  );
}

// 3. Principle 02 Illustration: Polished Forest Green Sphere & Candidate Satellites
export function PractitionerTalentSvg() {
  return (
    <div className="principle-illustration-wrapper" aria-label="Practitioner-Screened Talent Network">
      <svg
        viewBox="0 0 460 210"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="principle-svg"
      >
        <defs>
          <radialGradient id="sphereGrad" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#3F6359" />
            <stop offset="50%" stopColor="#1F4E45" />
            <stop offset="100%" stopColor="#102B26" />
          </radialGradient>
          <filter id="sphereShadow" x="-25%" y="-25%" width="150%" height="150%">
            <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#102B26" floodOpacity="0.25" />
          </filter>
        </defs>

        <g transform="translate(190, 105)">
          {/* Orbital connecting bezier paths */}
          <ellipse cx="0" cy="0" rx="110" ry="46" stroke="rgba(32,45,58,0.18)" strokeWidth="1" strokeDasharray="3 3" />
          <ellipse cx="0" cy="0" rx="75" ry="32" stroke="rgba(32,45,58,0.14)" strokeWidth="0.8" />

          {/* Central Polished Forest-Green Sphere */}
          <g filter="url(#sphereShadow)">
            <circle cx="0" cy="0" r="38" fill="url(#sphereGrad)" />
            {/* Candidate avatar silhouette icon inside */}
            <circle cx="0" cy="-6" r="8" fill="#F4F1EB" opacity="0.9" />
            <path d="M -13 14 C -13 6 -7 3 0 3 C 7 3 13 6 13 14" fill="#F4F1EB" opacity="0.9" />
          </g>

          {/* Orbiting Satellite Nodes */}
          {/* Node A (Top-Left): Candidate Profile Card */}
          <g transform="translate(-85, -35)">
            <rect x="-18" y="-22" width="36" height="44" rx="4" fill="#FFFFFF" stroke="rgba(32,45,58,0.15)" strokeWidth="1" />
            <circle cx="0" cy="-8" r="5" stroke="#202D3A" strokeWidth="1" fill="none" />
            <line x1="-10" y1="2" x2="10" y2="2" stroke="#202D3A" strokeWidth="1" />
            <line x1="-10" y1="8" x2="4" y2="8" stroke="#646D75" strokeWidth="0.8" />
            <line x1="-10" y1="13" x2="7" y2="13" stroke="#5D7A9E" strokeWidth="0.8" />
          </g>

          {/* Node B (Right): Verified Assessment Card */}
          <g transform="translate(75, -28)">
            <rect x="-18" y="-22" width="36" height="44" rx="4" fill="#FFFFFF" stroke="rgba(32,45,58,0.15)" strokeWidth="1" />
            <circle cx="0" cy="-8" r="5" stroke="#202D3A" strokeWidth="1" fill="none" />
            <line x1="-10" y1="2" x2="10" y2="2" stroke="#202D3A" strokeWidth="1" />
            <line x1="-10" y1="8" x2="4" y2="8" stroke="#646D75" strokeWidth="0.8" />
            <line x1="-10" y1="13" x2="7" y2="13" stroke="#1F4E45" strokeWidth="0.8" />
          </g>

          {/* Small Satellite Spheres */}
          <circle cx="-100" cy="22" r="8" fill="#EAE5DB" stroke="rgba(32,45,58,0.2)" strokeWidth="1" />
          <circle cx="-55" cy="40" r="6" fill="#D3CCC0" />
          <circle cx="45" cy="42" r="7" fill="#1F4E45" opacity="0.75" />
          <circle cx="95" cy="18" r="5.5" fill="#EAE5DB" />
        </g>

        {/* Leader Lines and Right Callout Labels */}
        {/* Label 1: SKILLED ENGINEERS */}
        <g transform="translate(295, 45)">
          <line x1="0" y1="0" x2="35" y2="0" stroke="rgba(32,45,58,0.35)" strokeWidth="0.9" />
          <circle cx="38" cy="0" r="3" fill="#202D3A" />
          <text x="50" y="3.5" fontFamily="Space Grotesk, sans-serif" fontSize="9" fontWeight="700" letterSpacing="0.08em" fill="#202D3A">
            SKILLED ENGINEERS
          </text>
        </g>

        {/* Label 2: CULTURAL ALIGNMENT */}
        <g transform="translate(295, 95)">
          <line x1="-15" y1="0" x2="35" y2="0" stroke="rgba(32,45,58,0.35)" strokeWidth="0.9" />
          <circle cx="38" cy="0" r="3" fill="#202D3A" />
          <text x="50" y="3.5" fontFamily="Space Grotesk, sans-serif" fontSize="9" fontWeight="700" letterSpacing="0.08em" fill="#202D3A">
            CULTURAL ALIGNMENT
          </text>
        </g>

        {/* Label 3: FASTER HIRING */}
        <g transform="translate(295, 145)">
          <line x1="0" y1="0" x2="35" y2="0" stroke="rgba(32,45,58,0.35)" strokeWidth="0.9" />
          <circle cx="38" cy="0" r="3" fill="#202D3A" />
          <text x="50" y="3.5" fontFamily="Space Grotesk, sans-serif" fontSize="9" fontWeight="700" letterSpacing="0.08em" fill="#202D3A">
            FASTER HIRING
          </text>
        </g>
      </svg>
    </div>
  );
}

// 4. Principle 03 Illustration: Staggered Glass / Laboratory Circuit Strata Planes
export function AppliedLearningSvg() {
  return (
    <div className="principle-illustration-wrapper" aria-label="Applied Muscle Memory Laboratory Strata">
      <svg
        viewBox="0 0 460 210"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="principle-svg"
      >
        <defs>
          <linearGradient id="planeGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2E4A43" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#1F4E45" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="planeGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#5D7A9E" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#4A6A8C" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="planeGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#EFEBE4" stopOpacity="0.5" />
          </linearGradient>
          <filter id="planeShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="3" dy="4" stdDeviation="6" floodColor="#202D3A" floodOpacity="0.1" />
          </filter>
        </defs>

        {/* Cascade of 4 Staggered Isometric Vertical Strata Plates */}
        <g transform="translate(130, 20)">
          {/* Plate 1 (Back, Green tinted) */}
          <g transform="translate(0, 0)" filter="url(#planeShadow)">
            <polygon points="0,30 25,10 25,120 0,140" fill="url(#planeGrad1)" stroke="#1F4E45" strokeWidth="1" />
            <line x1="8" y1="45" x2="18" y2="35" stroke="#FFFFFF" strokeWidth="1" opacity="0.6" />
            <line x1="8" y1="75" x2="18" y2="65" stroke="#FFFFFF" strokeWidth="1" opacity="0.6" />
          </g>

          {/* Plate 2 (Periwinkle Blue tinted) */}
          <g transform="translate(26, 8)" filter="url(#planeShadow)">
            <polygon points="0,30 25,10 25,120 0,140" fill="url(#planeGrad2)" stroke="#5D7A9E" strokeWidth="1" />
            <circle cx="12" cy="70" r="3" fill="#FFFFFF" opacity="0.8" />
            <line x1="6" y1="95" x2="19" y2="85" stroke="#FFFFFF" strokeWidth="1" opacity="0.6" />
          </g>

          {/* Plate 3 (Frosted Clear / Cream) */}
          <g transform="translate(52, 16)" filter="url(#planeShadow)">
            <polygon points="0,30 25,10 25,120 0,140" fill="url(#planeGrad3)" stroke="rgba(32,45,58,0.25)" strokeWidth="1" />
            <line x1="8" y1="50" x2="18" y2="40" stroke="#202D3A" strokeWidth="0.8" opacity="0.4" />
            <line x1="8" y1="80" x2="18" y2="70" stroke="#202D3A" strokeWidth="0.8" opacity="0.4" />
          </g>

          {/* Plate 4 (Front Clear with Lab Circuit Wireframe) */}
          <g transform="translate(78, 24)" filter="url(#planeShadow)">
            <polygon points="0,30 35,5 35,115 0,140" fill="rgba(255,255,255,0.9)" stroke="#202D3A" strokeWidth="1.2" />
            {/* Laboratory Circuit Trace etched on the face */}
            <polyline points="8,60 18,50 18,85 28,75" stroke="#1F4E45" strokeWidth="1.2" fill="none" />
            <circle cx="8" cy="60" r="2.5" fill="#1F4E45" />
            <circle cx="28" cy="75" r="2.5" fill="#1F4E45" />
          </g>

          {/* Piercing Horizontal Data Rays */}
          <line x1="-15" y1="85" x2="115" y2="105" stroke="#5D7A9E" strokeWidth="1.2" strokeDasharray="3 3" />
          <circle cx="115" cy="105" r="3" fill="#5D7A9E" />
        </g>

        {/* Leader Lines and Right Callout Labels */}
        {/* Label 1: PRACTICAL SKILLS */}
        <g transform="translate(295, 45)">
          <line x1="0" y1="0" x2="35" y2="0" stroke="rgba(32,45,58,0.35)" strokeWidth="0.9" />
          <circle cx="38" cy="0" r="3" fill="#202D3A" />
          <text x="50" y="3.5" fontFamily="Space Grotesk, sans-serif" fontSize="9" fontWeight="700" letterSpacing="0.08em" fill="#202D3A">
            PRACTICAL SKILLS
          </text>
        </g>

        {/* Label 2: LIVE LABS */}
        <g transform="translate(295, 95)">
          <line x1="-15" y1="0" x2="35" y2="0" stroke="rgba(32,45,58,0.35)" strokeWidth="0.9" />
          <circle cx="38" cy="0" r="3" fill="#202D3A" />
          <text x="50" y="3.5" fontFamily="Space Grotesk, sans-serif" fontSize="9" fontWeight="700" letterSpacing="0.08em" fill="#202D3A">
            LIVE LABS
          </text>
        </g>

        {/* Label 3: MEASURABLE PROGRESS */}
        <g transform="translate(295, 145)">
          <line x1="0" y1="0" x2="35" y2="0" stroke="rgba(32,45,58,0.35)" strokeWidth="0.9" />
          <circle cx="38" cy="0" r="3" fill="#202D3A" />
          <text x="50" y="3.5" fontFamily="Space Grotesk, sans-serif" fontSize="9" fontWeight="700" letterSpacing="0.08em" fill="#202D3A">
            MEASURABLE PROGRESS
          </text>
        </g>
      </svg>
    </div>
  );
}
