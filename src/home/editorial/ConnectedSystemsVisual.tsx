import { useState } from "react";

export function ConnectedSystemsVisual() {
  const [activeNode, setActiveNode] = useState<"tech" | "talent" | "learning" | null>(null);

  return (
    <div
      className="connected-systems-visual-wrapper"
      style={{
        position: "relative",
        width: "100%",
        maxWidth: 680,
        margin: "0 auto",
      }}
      aria-label="The Connected Systems: Technology, Talent, and Corporate Learning architecture"
    >
      <svg
        viewBox="0 0 680 540"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="connected-systems-svg"
        style={{
          width: "100%",
          height: "auto",
          overflow: "visible",
          display: "block",
        }}
      >
        <defs>
          {/* Subtle Ambient Shadow Filter */}
          <filter id="v4-ambient-shadow" x="-15%" y="-15%" width="130%" height="130%">
            <feDropShadow dx="0" dy="10" stdDeviation="14" floodColor="#202D3A" floodOpacity="0.07" />
          </filter>
          <filter id="v4-node-shadow" x="-25%" y="-25%" width="150%" height="150%">
            <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#202D3A" floodOpacity="0.10" />
          </filter>

          {/* Gradients using the Warm Editorial Palette */}
          <linearGradient id="v4-grad-core" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F0EEE7" />
          </linearGradient>

          <linearGradient id="v4-grad-sage" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EBF0ED" />
            <stop offset="100%" stopColor="#DCE3DF" />
          </linearGradient>

          <linearGradient id="v4-grad-periwinkle" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D3DFEE" />
            <stop offset="100%" stopColor="#B8C7E0" />
          </linearGradient>

          <linearGradient id="v4-grad-slate" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2D3E4F" />
            <stop offset="100%" stopColor="#202D3A" />
          </linearGradient>
        </defs>

        {/* 1. Underlying Technical Guidemark Rings & Coordinate Axis */}
        <g className="v4-grid-layer" opacity="0.35">
          <circle cx="340" cy="270" r="215" stroke="#202D3A" strokeWidth="1" strokeDasharray="4 8" />
          <circle cx="340" cy="270" r="130" stroke="#202D3A" strokeWidth="1" strokeDasharray="3 6" />
          <line x1="120" y1="270" x2="560" y2="270" stroke="#202D3A" strokeWidth="0.8" strokeDasharray="3 6" />
          <line x1="340" y1="55" x2="340" y2="485" stroke="#202D3A" strokeWidth="0.8" strokeDasharray="3 6" />
        </g>

        {/* 2. Central Architectural Infrastructure Foundation (Stepped Isometric Core) */}
        <g className="v4-core-assembly" filter="url(#v4-ambient-shadow)">
          {/* Ground Stepped Platform */}
          <polygon
            points="340,180 480,245 340,310 200,245"
            fill="url(#v4-grad-sage)"
            stroke="#202D3A"
            strokeWidth="1.2"
          />
          <polygon
            points="200,245 340,310 340,324 200,259"
            fill="#CAD3CF"
            stroke="#202D3A"
            strokeWidth="1.2"
          />
          <polygon
            points="340,310 480,245 480,259 340,324"
            fill="#B9C3BE"
            stroke="#202D3A"
            strokeWidth="1.2"
          />

          {/* Upper Tier Platform */}
          <polygon
            points="340,198 430,242 340,286 250,242"
            fill="url(#v4-grad-core)"
            stroke="#202D3A"
            strokeWidth="1.4"
          />
          <polygon
            points="250,242 340,286 340,302 250,258"
            fill="#E4DED3"
            stroke="#202D3A"
            strokeWidth="1.4"
          />
          <polygon
            points="340,286 430,242 430,258 340,302"
            fill="#D5CDBC"
            stroke="#202D3A"
            strokeWidth="1.4"
          />

          {/* Central Architectural Monolith */}
          <g transform="translate(0, -6)">
            <polygon
              points="340,215 372,233 340,251 308,233"
              fill="url(#v4-grad-slate)"
              stroke="#202D3A"
              strokeWidth="1"
            />
            <polygon
              points="308,233 340,251 340,272 308,254"
              fill="#18232E"
              stroke="#202D3A"
              strokeWidth="1"
            />
            <polygon
              points="340,251 372,233 372,254 340,272"
              fill="#253544"
              stroke="#202D3A"
              strokeWidth="1"
            />

            {/* Central Pulse Beacon with subtle ambient breathing */}
            <circle cx="340" cy="230" r="4.5" fill="#F0EEE7" />
            <circle
              cx="340"
              cy="230"
              r="12"
              stroke="#1F4E45"
              strokeWidth="1.2"
              className="v4-ambient-pulse-ring"
            />
          </g>

          {/* Center Badge */}
          <g transform="translate(340, 266)">
            <rect x="-62" y="16" width="124" height="22" rx="4" fill="#FFFFFF" stroke="#202D3A" strokeWidth="1" />
            <text x="0" y="31" fontFamily="Space Grotesk, sans-serif" fontSize="9" fontWeight="700" fill="#202D3A" textAnchor="middle" letterSpacing="0.08em">
              CORE FOUNDATION
            </text>
          </g>
        </g>

        {/* 3. Connecting Arteries with Sequential Motion */}
        <g className="v4-connecting-arteries">
          {/* Path 1: Core to Technology (Upper-Left) */}
          <path
            d="M 308 230 C 225 200, 195 160, 165 125"
            stroke={activeNode === "tech" ? "#202D3A" : "#646D75"}
            strokeWidth={activeNode === "tech" ? "2.5" : "1.5"}
            strokeDasharray={activeNode === "tech" ? "none" : "4 4"}
            className="v4-path-to-tech"
          />

          {/* Path 2: Core to Talent (Upper-Right) */}
          <path
            d="M 372 230 C 455 200, 485 160, 515 125"
            stroke={activeNode === "talent" ? "#202D3A" : "#646D75"}
            strokeWidth={activeNode === "talent" ? "2.5" : "1.5"}
            strokeDasharray={activeNode === "talent" ? "none" : "4 4"}
            className="v4-path-to-talent"
          />

          {/* Path 3: Core to Corporate Learning (Lower-Center) */}
          <path
            d="M 340 310 C 340 355, 340 375, 340 405"
            stroke={activeNode === "learning" ? "#202D3A" : "#646D75"}
            strokeWidth={activeNode === "learning" ? "2.5" : "1.5"}
            strokeDasharray={activeNode === "learning" ? "none" : "4 4"}
            className="v4-path-to-learning"
          />

          {/* Transversal System Arc */}
          <path
            d="M 165 125 Q 340 60 515 125"
            stroke="#B8C7E0"
            strokeWidth="1.2"
            strokeDasharray="2 4"
            opacity="0.8"
          />
        </g>

        {/* 4. Three Interconnected Service Nodes (Sequential Reveal & Clean Legible Labels) */}

        {/* NODE 01: TECHNOLOGY SOLUTIONS (Upper-Left) */}
        <g
          className="v4-service-node node-tech"
          transform="translate(165, 125)"
          onMouseEnter={() => setActiveNode("tech")}
          onMouseLeave={() => setActiveNode(null)}
          style={{ cursor: "pointer" }}
        >
          {/* Orbital halo */}
          <circle cx="0" cy="0" r="46" fill="#F0EEE7" filter="url(#v4-node-shadow)" />
          <circle
            cx="0"
            cy="0"
            r="46"
            fill="none"
            stroke={activeNode === "tech" ? "#202D3A" : "#B8C7E0"}
            strokeWidth={activeNode === "tech" ? "2.2" : "1.4"}
          />

          {/* Architectural Tech Node Icon */}
          <polygon
            points="0,-22 18,-11 18,11 0,22 -18,11 -18,-11"
            fill={activeNode === "tech" ? "#202D3A" : "#DCE3DF"}
            stroke="#202D3A"
            strokeWidth="1.5"
          />
          <path
            d="M -7 -4 L -11 0 L -7 4 M 7 -4 L 11 0 L 7 4 M -2 7 L 2 -7"
            stroke={activeNode === "tech" ? "#F0EEE7" : "#202D3A"}
            strokeWidth="1.5"
            strokeLinecap="round"
          />

          {/* Clear, Legible Callout Box (No Unreadable Microtext) */}
          <g transform="translate(-160, -18)">
            <rect x="0" y="0" width="145" height="42" rx="4" fill="#FFFFFF" stroke="#202D3A" strokeWidth="1" />
            <text x="12" y="18" fontFamily="Space Grotesk, sans-serif" fontSize="11" fontWeight="700" fill="#202D3A">
              01 // TECHNOLOGY
            </text>
            <text x="12" y="32" fontFamily="Manrope, sans-serif" fontSize="9.5" fill="#646D75">
              Custom Software &amp; AI Systems
            </text>
          </g>
        </g>

        {/* NODE 02: TALENT ACQUISITION (Upper-Right) */}
        <g
          className="v4-service-node node-talent"
          transform="translate(515, 125)"
          onMouseEnter={() => setActiveNode("talent")}
          onMouseLeave={() => setActiveNode(null)}
          style={{ cursor: "pointer" }}
        >
          {/* Orbital halo */}
          <circle cx="0" cy="0" r="46" fill="#F0EEE7" filter="url(#v4-node-shadow)" />
          <circle
            cx="0"
            cy="0"
            r="46"
            fill="none"
            stroke={activeNode === "talent" ? "#202D3A" : "#B8C7E0"}
            strokeWidth={activeNode === "talent" ? "2.2" : "1.4"}
          />

          {/* Connected Network & People Motif */}
          <g transform="translate(0, 0)">
            <circle cx="0" cy="-6" r="8" fill={activeNode === "talent" ? "#202D3A" : "#B8C7E0"} stroke="#202D3A" strokeWidth="1.5" />
            <path
              d="M -15 15 C -15 6, 15 6, 15 15"
              fill="none"
              stroke="#202D3A"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <circle cx="-16" cy="-12" r="3.5" fill="#DCE3DF" stroke="#202D3A" strokeWidth="1" />
            <circle cx="16" cy="-12" r="3.5" fill="#DCE3DF" stroke="#202D3A" strokeWidth="1" />
            <line x1="-13" y1="-10" x2="-5" y2="-7" stroke="#202D3A" strokeWidth="1" />
            <line x1="13" y1="-10" x2="5" y2="-7" stroke="#202D3A" strokeWidth="1" />
          </g>

          {/* Clear, Legible Callout Box */}
          <g transform="translate(15, -18)">
            <rect x="0" y="0" width="145" height="42" rx="4" fill="#FFFFFF" stroke="#202D3A" strokeWidth="1" />
            <text x="12" y="18" fontFamily="Space Grotesk, sans-serif" fontSize="11" fontWeight="700" fill="#202D3A">
              02 // TALENT
            </text>
            <text x="12" y="32" fontFamily="Manrope, sans-serif" fontSize="9.5" fill="#646D75">
              Engineer-Screened &amp; GCC Hubs
            </text>
          </g>
        </g>

        {/* NODE 03: CORPORATE LEARNING (Lower-Center) */}
        <g
          className="v4-service-node node-learning"
          transform="translate(340, 415)"
          onMouseEnter={() => setActiveNode("learning")}
          onMouseLeave={() => setActiveNode(null)}
          style={{ cursor: "pointer" }}
        >
          {/* Orbital halo */}
          <circle cx="0" cy="0" r="46" fill="#F0EEE7" filter="url(#v4-node-shadow)" />
          <circle
            cx="0"
            cy="0"
            r="46"
            fill="none"
            stroke={activeNode === "learning" ? "#202D3A" : "#B8C7E0"}
            strokeWidth={activeNode === "learning" ? "2.2" : "1.4"}
          />

          {/* Layered Knowledge Strata Motif */}
          <g transform="translate(0, -6)">
            <polygon points="0,-10 16,-2 0,6 -16,-2" fill={activeNode === "learning" ? "#202D3A" : "#DCE3DF"} stroke="#202D3A" strokeWidth="1.2" />
            <polygon points="0,-2 16,6 0,14 -16,6" fill={activeNode === "learning" ? "#324658" : "#E4DED3"} stroke="#202D3A" strokeWidth="1.2" />
            <polygon points="0,6 16,14 0,22 -16,14" fill={activeNode === "learning" ? "#44596D" : "#B8C7E0"} stroke="#202D3A" strokeWidth="1.2" />
          </g>

          {/* Clear, Legible Callout Box */}
          <g transform="translate(-85, 52)">
            <rect x="0" y="0" width="170" height="42" rx="4" fill="#FFFFFF" stroke="#202D3A" strokeWidth="1" />
            <text x="85" y="18" fontFamily="Space Grotesk, sans-serif" fontSize="11" fontWeight="700" fill="#202D3A" textAnchor="middle">
              03 // CORPORATE LEARNING
            </text>
            <text x="85" y="32" fontFamily="Manrope, sans-serif" fontSize="9.5" fill="#646D75" textAnchor="middle">
              Live Labs &amp; NEP 2020 Curricula
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
}
