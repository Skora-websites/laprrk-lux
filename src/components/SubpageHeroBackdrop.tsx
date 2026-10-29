import { useEffect, useRef, useState } from "react";

export function SubpageHeroBackdrop() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hudCoords, setHudCoords] = useState({ x: 24.5, y: -12.3, z: 88.0 });
  const [elevationPct, setElevationPct] = useState(48);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.parentElement?.offsetWidth || window.innerWidth;
      height = canvas.parentElement?.offsetHeight || 640;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    // =========================================================================
    // 1. LIGHT THEME 3D GEM / PRISM GEOMETRY (3D Projection Engine)
    // =========================================================================
    // Outer Icosahedron Vertices (Golden ratio phi)
    const phi = (1 + Math.sqrt(5)) / 2;
    const baseIcosaVertices = [
      [-1, phi, 0], [1, phi, 0], [-1, -phi, 0], [1, -phi, 0],
      [0, -1, phi], [0, 1, phi], [0, -1, -phi], [0, 1, -phi],
      [phi, 0, -1], [phi, 0, 1], [-phi, 0, -1], [-phi, 0, 1],
    ];

    const gemScale = 118;
    const gemVertices = baseIcosaVertices.map(([x, y, z]) => {
      const len = Math.sqrt(x * x + y * y + z * z);
      return [(x / len) * gemScale, (y / len) * gemScale, (z / len) * gemScale];
    });

    const gemFaces = [
      [0, 11, 5], [0, 5, 1], [0, 1, 7], [0, 7, 10], [0, 10, 11],
      [1, 5, 9], [5, 11, 4], [11, 10, 2], [10, 7, 6], [7, 1, 8],
      [3, 9, 4], [3, 4, 2], [3, 2, 6], [3, 6, 8], [3, 8, 9],
      [4, 9, 5], [2, 4, 11], [6, 2, 10], [8, 6, 7], [9, 8, 1],
    ];

    // Inner Core Octahedron (Nested inside the icosahedron)
    const coreScale = gemScale * 0.52;
    const coreVertices = [
      [coreScale, 0, 0], [-coreScale, 0, 0],
      [0, coreScale, 0], [0, -coreScale, 0],
      [0, 0, coreScale], [0, 0, -coreScale],
    ];

    const coreFaces = [
      [0, 2, 4], [2, 1, 4], [1, 3, 4], [3, 0, 4],
      [2, 0, 5], [1, 2, 5], [3, 1, 5], [0, 3, 5],
    ];

    // 3D Kinetic Floor Wave Mesh
    const meshCols = 22;
    const meshRows = 12;
    const meshSpacingX = 52;
    const meshSpacingZ = 46;

    // =========================================================================
    // 2. DARK THEME GALAXY PARTICLES & NEBULA
    // =========================================================================
    interface Star {
      x: number;
      y: number;
      z: number;
      size: number;
      vx: number;
      vy: number;
      alpha: number;
      twinkleSpeed: number;
      hue: number;
    }

    const starCount = 120;
    const stars: Star[] = [];
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 0.8 + 0.2,
        size: Math.random() * 2.4 + 0.8,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.25 - 0.08,
        alpha: Math.random() * 0.7 + 0.3,
        twinkleSpeed: Math.random() * 0.03 + 0.015,
        hue: Math.random() > 0.6 ? 160 : Math.random() > 0.3 ? 190 : 145,
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;
    let targetRotX = 0.25;
    let targetRotY = 0.35;
    let currentRotX = 0.25;
    let currentRotY = 0.35;

    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;

      const px = (mouseX / width - 0.5) * 2;
      const py = (mouseY / height - 0.5) * 2;
      targetRotY = px * 0.85;
      targetRotX = -py * 0.7;

      setHudCoords({
        x: parseFloat((py * 32).toFixed(1)),
        y: parseFloat((px * 48).toFixed(1)),
        z: parseFloat((88 + Math.sin(time) * 4).toFixed(1)),
      });

      const ep = Math.max(10, Math.min(90, Math.round(50 - py * 35)));
      setElevationPct(ep);
    };

    const onPointerLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
      targetRotX = 0.2;
      targetRotY = 0.3;
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerleave", onPointerLeave);

    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.016;

      // Smooth dampening on 3D rotation
      currentRotX += (targetRotX - currentRotX) * 0.055;
      currentRotY += (targetRotY - currentRotY) * 0.055;

      const isDark = document.documentElement.getAttribute("data-theme") === "dark";

      if (!isDark) {
        // =====================================================================
        // LIGHT THEME: 3D PRISMATIC GEM · KINETIC MESH · CAUSTIC WAVES
        // =====================================================================
        const cx = width > 900 ? width * 0.77 : width * 0.5;
        const cy = height * 0.48;
        const focalLength = 500;

        // Auto spin + cursor tilt
        const rotX = currentRotX + Math.sin(time * 0.45) * 0.1;
        const rotY = currentRotY + time * 0.32;
        const rotZ = time * 0.16;

        const cosX = Math.cos(rotX), sinX = Math.sin(rotX);
        const cosY = Math.cos(rotY), sinY = Math.sin(rotY);
        const cosZ = Math.cos(rotZ), sinZ = Math.sin(rotZ);

        // 3D Point Projection Function
        const project = (x: number, y: number, z: number, offZ = 190) => {
          // Rotate Z
          const x1 = x * cosZ - y * sinZ;
          const y1 = x * sinZ + y * cosZ;
          const z1 = z;
          // Rotate Y
          const x2 = x1 * cosY + z1 * sinY;
          const y2 = y1;
          const z2 = -x1 * sinY + z1 * cosY;
          // Rotate X
          const x3 = x2;
          const y3 = y2 * cosX - z2 * sinX;
          const z3 = y2 * sinX + z2 * cosX;

          const scale = focalLength / (focalLength + z3 + offZ);
          return {
            x: cx + x3 * scale,
            y: cy + y3 * scale,
            z: z3,
            scale,
            rawX: x3,
            rawY: y3,
          };
        };

        // Project with counter-rotation for inner core
        const coreRotX = -rotX * 1.35;
        const coreRotY = -rotY * 1.25;
        const coreRotZ = -rotZ * 1.1;
        const cCosX = Math.cos(coreRotX), cSinX = Math.sin(coreRotX);
        const cCosY = Math.cos(coreRotY), cSinY = Math.sin(coreRotY);
        const cCosZ = Math.cos(coreRotZ), cSinZ = Math.sin(coreRotZ);

        const projectCore = (x: number, y: number, z: number) => {
          const x1 = x * cCosZ - y * cSinZ;
          const y1 = x * cSinZ + y * cCosZ;
          const z1 = z;
          const x2 = x1 * cCosY + z1 * cSinY;
          const y2 = y1;
          const z2 = -x1 * cSinY + z1 * cCosY;
          const x3 = x2;
          const y3 = y2 * cCosX - z2 * cSinX;
          const z3 = y2 * cSinX + z2 * cCosX;
          const scale = focalLength / (focalLength + z3 + 190);
          return {
            x: cx + x3 * scale,
            y: cy + y3 * scale,
            z: z3,
            scale,
          };
        };

        // ---------------------------------------------------------------------
        // 1. Refractive Caustic Light Interference Ribbon in Background
        // ---------------------------------------------------------------------
        ctx.save();
        ctx.globalCompositeOperation = "source-over";
        const causticGrad = ctx.createRadialGradient(cx, cy, 30, cx, cy, gemScale * 2.8);
        causticGrad.addColorStop(0, "rgba(192, 236, 217, 0.42)");
        causticGrad.addColorStop(0.45, "rgba(160, 222, 235, 0.22)");
        causticGrad.addColorStop(0.8, "rgba(0, 124, 195, 0.08)");
        causticGrad.addColorStop(1, "rgba(0, 124, 195, 0)");
        ctx.fillStyle = causticGrad;
        ctx.beginPath();
        ctx.arc(cx, cy, gemScale * 2.8, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // ---------------------------------------------------------------------
        // 2. 3D Kinetic Perspective Floor Mesh (Topographic Wave Horizon)
        // ---------------------------------------------------------------------
        ctx.save();
        const startX = -((meshCols * meshSpacingX) / 2);
        const startZ = 100;
        const groundY = height * 0.76;

        // Draw cross lines in depth (Z direction)
        for (let c = 0; c < meshCols; c += 2) {
          ctx.beginPath();
          ctx.strokeStyle = "rgba(0, 124, 195, 0.055)";
          ctx.lineWidth = 0.8;
          for (let r = 0; r < meshRows; r++) {
            const wx = startX + c * meshSpacingX;
            const wz = startZ + r * meshSpacingZ;
            const waveY = Math.sin(c * 0.35 + time * 1.8) * 14 + Math.cos(r * 0.45 + time * 1.2) * 10;
            const sc = focalLength / (focalLength + wz);
            const sx = (width * 0.5) + wx * sc;
            const sy = groundY + waveY * sc;
            if (r === 0) ctx.moveTo(sx, sy);
            else ctx.lineTo(sx, sy);
          }
          ctx.stroke();
        }

        // Draw horizontal wave contours (X direction)
        for (let r = 0; r < meshRows; r++) {
          ctx.beginPath();
          const rowAlpha = 0.05 + (1 - r / meshRows) * 0.12;
          ctx.strokeStyle = `rgba(0, 124, 195, ${rowAlpha})`;
          ctx.lineWidth = r === 0 ? 1.4 : 0.9;

          for (let c = 0; c < meshCols; c++) {
            const wx = startX + c * meshSpacingX;
            const wz = startZ + r * meshSpacingZ;
            const waveY = Math.sin(c * 0.35 + time * 1.8) * 14 + Math.cos(r * 0.45 + time * 1.2) * 10;
            const sc = focalLength / (focalLength + wz);
            const sx = (width * 0.5) + wx * sc;
            const sy = groundY + waveY * sc;

            if (c === 0) ctx.moveTo(sx, sy);
            else ctx.lineTo(sx, sy);

            // Pulsing luminous nodes at wave crests
            if (waveY > 10 && r % 3 === 0 && c % 4 === 0) {
              ctx.fillStyle = "#007CC3";
              ctx.beginPath();
              ctx.arc(sx, sy, 2 * sc, 0, Math.PI * 2);
              ctx.fill();
            }
          }
          ctx.stroke();
        }
        ctx.restore();

        // ---------------------------------------------------------------------
        // 3. 3D Concentric Gyroscopic Gimbal Rings & Satellite Orbits
        // ---------------------------------------------------------------------
        const draw3DRing = (
          radius: number,
          tiltAngle: number,
          color: string,
          dash: number[],
          hasTicks = false
        ) => {
          ctx.beginPath();
          ctx.setLineDash(dash);
          ctx.strokeStyle = color;
          ctx.lineWidth = 1.3;
          const steps = 72;
          for (let i = 0; i <= steps; i++) {
            const theta = (i / steps) * Math.PI * 2;
            const rx = Math.cos(theta) * radius;
            const ry = Math.sin(theta) * radius * Math.cos(tiltAngle);
            const rz = Math.sin(theta) * radius * Math.sin(tiltAngle);
            const p = project(rx, ry, rz);
            if (i === 0) ctx.moveTo(p.x, p.y);
            else ctx.lineTo(p.x, p.y);

            // Engineering tick marks on major degrees
            if (hasTicks && i % 6 === 0) {
              const tickLen = 4;
              const tx = Math.cos(theta) * (radius + tickLen);
              const ty = Math.sin(theta) * (radius + tickLen) * Math.cos(tiltAngle);
              const tz = Math.sin(theta) * (radius + tickLen) * Math.sin(tiltAngle);
              const tp = project(tx, ty, tz);
              ctx.stroke();
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(tp.x, tp.y);
              ctx.stroke();
              ctx.beginPath();
            }
          }
          ctx.stroke();
          ctx.setLineDash([]);
        };

        // Ring 1: Equatorial with engineering degree ticks
        draw3DRing(gemScale * 1.55, 0.35 + Math.sin(time * 0.3) * 0.1, "rgba(0, 124, 195, 0.32)", [5, 4], true);
        // Ring 2: Tilted Cyan Gyroscope track
        draw3DRing(gemScale * 1.88, -0.65 + Math.cos(time * 0.25) * 0.15, "rgba(56, 189, 248, 0.28)", [2, 6]);
        // Ring 3: Outer Polar Mint halo
        draw3DRing(gemScale * 2.2, 0.95, "rgba(192, 236, 217, 0.45)", [8, 8]);

        // ---------------------------------------------------------------------
        // 4. Orbiting 3D Satellite Nodes with Glowing Tails
        // ---------------------------------------------------------------------
        for (let i = 0; i < 4; i++) {
          const orbitAngle = time * 0.5 + (i * Math.PI) / 2;
          const rad = gemScale * 1.75;
          const nx = Math.cos(orbitAngle) * rad;
          const ny = Math.sin(orbitAngle * 1.4) * 55;
          const nz = Math.sin(orbitAngle) * rad;
          const np = project(nx, ny, nz);

          ctx.beginPath();
          ctx.arc(np.x, np.y, 4.2 * np.scale, 0, Math.PI * 2);
          ctx.fillStyle = i % 2 === 0 ? "#007CC3" : "#10b981";
          ctx.shadowColor = "rgba(192, 236, 217, 0.9)";
          ctx.shadowBlur = 10;
          ctx.fill();
          ctx.shadowBlur = 0;

          // Tiny orbit tail
          const tailAngle = orbitAngle - 0.18;
          const tx = Math.cos(tailAngle) * rad;
          const ty = Math.sin(tailAngle * 1.4) * 55;
          const tz = Math.sin(tailAngle) * rad;
          const tp = project(tx, ty, tz);
          ctx.beginPath();
          ctx.moveTo(np.x, np.y);
          ctx.lineTo(tp.x, tp.y);
          ctx.strokeStyle = "rgba(0, 124, 195, 0.35)";
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }

        // ---------------------------------------------------------------------
        // 5. Inner Core Octahedron (Refracted inside outer shell)
        // ---------------------------------------------------------------------
        const projCoreVerts = coreVertices.map(([x, y, z]) => projectCore(x, y, z));
        coreFaces.forEach((f) => {
          const p1 = projCoreVerts[f[0]];
          const p2 = projCoreVerts[f[1]];
          const p3 = projCoreVerts[f[2]];

          // Normal for inner core
          const normalZ = (p2.x - p1.x) * (p3.y - p1.y) - (p2.y - p1.y) * (p3.x - p1.x);
          if (normalZ > 0) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.lineTo(p3.x, p3.y);
            ctx.closePath();
            ctx.fillStyle = "rgba(0, 124, 195, 0.16)";
            ctx.fill();
            ctx.strokeStyle = "rgba(0, 124, 195, 0.4)";
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });

        // ---------------------------------------------------------------------
        // 6. Outer Icosahedron Crystal: Depth-Sorted Facets with Iridescence
        // ---------------------------------------------------------------------
        const projectedVertices = gemVertices.map(([x, y, z]) => project(x, y, z));

        const faceData = gemFaces.map((f, idx) => {
          const p1 = projectedVertices[f[0]];
          const p2 = projectedVertices[f[1]];
          const p3 = projectedVertices[f[2]];
          const avgZ = (p1.z + p2.z + p3.z) / 3;

          const v1x = p2.x - p1.x;
          const v1y = p2.y - p1.y;
          const v2x = p3.x - p1.x;
          const v2y = p3.y - p1.y;
          const normalZ = v1x * v2y - v1y * v2x;

          return { f, p1, p2, p3, avgZ, normalZ, idx };
        });

        faceData.sort((a, b) => b.avgZ - a.avgZ);

        faceData.forEach(({ p1, p2, p3, normalZ, idx }) => {
          if (normalZ > 0) {
            const lightNorm = Math.min(1, Math.max(0.12, normalZ / 11500));
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.lineTo(p3.x, p3.y);
            ctx.closePath();

            // Refractive Iridescent Linear Gradient
            const grad = ctx.createLinearGradient(p1.x, p1.y, p3.x, p3.y);
            grad.addColorStop(0, `rgba(192, 236, 217, ${0.18 + lightNorm * 0.42})`);
            grad.addColorStop(0.48, `rgba(160, 222, 235, ${0.14 + lightNorm * 0.35})`);
            grad.addColorStop(1, `rgba(0, 124, 195, ${0.1 + lightNorm * 0.28})`);
            ctx.fillStyle = grad;
            ctx.fill();

            // Primary Emerald Edge
            ctx.strokeStyle = `rgba(0, 124, 195, ${0.3 + lightNorm * 0.6})`;
            ctx.lineWidth = 1.3;
            ctx.stroke();

            // Secondary Chromatic Dispersion Edge (Micro Cyan Offset)
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.15 + lightNorm * 0.35})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();

            // Specular Diamond Glint Flare on Peak Vertex
            if (idx % 3 === 0 && lightNorm > 0.65) {
              ctx.beginPath();
              ctx.arc(p1.x, p1.y, 4, 0, Math.PI * 2);
              ctx.fillStyle = "#ffffff";
              ctx.shadowColor = "#BAE0F7";
              ctx.shadowBlur = 14;
              ctx.fill();
              ctx.shadowBlur = 0;
            }
          }
        });

        // ---------------------------------------------------------------------
        // 7. Dynamic 3D Holographic Leader Lines & Floating Canvas HUD Tags
        // ---------------------------------------------------------------------
        // Pick the 2 most forward-facing vertices for technical HUD callouts
        const sortedVerts = projectedVertices
          .map((v, i) => ({ ...v, index: i }))
          .sort((a, b) => b.z - a.z);

        const vLead = sortedVerts[0];
        if (vLead && vLead.z > 0) {
          const lx1 = vLead.x;
          const ly1 = vLead.y;
          const lx2 = lx1 + 38;
          const ly2 = ly1 - 28;
          const lx3 = lx2 + 95;

          // Target reticle ring on 3D vertex
          ctx.beginPath();
          ctx.arc(lx1, ly1, 5, 0, Math.PI * 2);
          ctx.strokeStyle = "#007CC3";
          ctx.lineWidth = 1.4;
          ctx.stroke();

          // Angled dog-leg leader line
          ctx.beginPath();
          ctx.moveTo(lx1, ly1);
          ctx.lineTo(lx2, ly2);
          ctx.lineTo(lx3, ly2);
          ctx.strokeStyle = "rgba(0, 124, 195, 0.45)";
          ctx.lineWidth = 1;
          ctx.stroke();

          // Floating Micro-Badge on Canvas
          ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
          ctx.fillRect(lx2, ly2 - 16, 95, 14);
          ctx.strokeStyle = "rgba(0, 124, 195, 0.25)";
          ctx.strokeRect(lx2, ly2 - 16, 95, 14);

          ctx.font = "8.5px 'JetBrains Mono', monospace";
          ctx.fillStyle = "#021924";
          ctx.fillText("REFRACT // 1.544n", lx2 + 5, ly2 - 6);
        }

      } else {
        // =====================================================================
        // DARK THEME: COSMIC GALAXY PARTICLES & LASER CONSTELLATION
        // =====================================================================
        for (let i = 0; i < stars.length; i++) {
          for (let j = i + 1; j < stars.length; j++) {
            const dx = stars[i].x - stars[j].x;
            const dy = stars[i].y - stars[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 85) {
              const alpha = (1 - dist / 85) * 0.18 * stars[i].alpha;
              ctx.strokeStyle = `rgba(192, 236, 217, ${alpha})`;
              ctx.lineWidth = 0.8;
              ctx.beginPath();
              ctx.moveTo(stars[i].x, stars[i].y);
              ctx.lineTo(stars[j].x, stars[j].y);
              ctx.stroke();
            }
          }
        }

        stars.forEach((s) => {
          s.x += s.vx;
          s.y += s.vy;

          if (s.x < 0) s.x = width;
          if (s.x > width) s.x = 0;
          if (s.y < 0) s.y = height;
          if (s.y > height) s.y = 0;

          s.alpha += Math.sin(time * 60 * s.twinkleSpeed) * 0.015;
          s.alpha = Math.max(0.2, Math.min(0.95, s.alpha));

          if (mouseX > 0) {
            const dx = s.x - mouseX;
            const dy = s.y - mouseY;
            const d = Math.sqrt(dx * dx + dy * dy);
            if (d < 160) {
              const force = (1 - d / 160) * 1.8;
              s.x += (dx / d) * force;
              s.y += (dy / d) * force;
            }
          }

          ctx.beginPath();
          ctx.arc(s.x, s.y, s.size * s.z, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${s.hue}, 90%, 75%, ${s.alpha})`;
          ctx.shadowColor = `hsla(${s.hue}, 90%, 65%, ${s.alpha * 0.8})`;
          ctx.shadowBlur = s.size * 5;
          ctx.fill();
          ctx.shadowBlur = 0;
        });
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return (
    <div className="subpage-hero-backdrop" aria-hidden="true">
      {/* 1. Dynamic 3D Prismatic Crystal (Light) & Cosmic Nebula (Dark) */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* 2. Ambient Volumetric Mesh Blobs */}
      <div className="hero-mesh-aura" style={{ zIndex: 0 }}>
        <span className="mesh-blob mb-1" />
        <span className="mesh-blob mb-2" />
        <span className="mesh-blob mb-3" />
      </div>

      {/* 3. Distinct Light Theme Architectural Blueprint & Drafting Texture */}
      <div className="hero-blueprint-texture" style={{ zIndex: 0 }} />

      {/* 4. Specular Refractive Caustic Ripple Overlay */}
      <div className="hero-caustic-shimmer" style={{ zIndex: 0 }} />

      {/* 5. High-Tech Architectural Telemetry HUD Layer with Caliper Brackets */}
      <div className="hero-arch-telemetry" style={{ zIndex: 2 }}>
        <div className="caliper-mark c-top-left">
          <span className="cal-bracket">⌜</span>
          <span className="cal-label">CAL // 01</span>
        </div>
        <div className="caliper-mark c-top-right">
          <span className="cal-bracket">⌝</span>
          <span className="cal-label">120Hz ULTRA</span>
        </div>
        <div className="caliper-mark c-bottom-left">
          <span className="cal-bracket">⌞</span>
          <span className="cal-label">3D DYNAMICS</span>
        </div>
        <div className="caliper-mark c-bottom-right">
          <span className="cal-bracket">⌟</span>
          <span className="cal-label">OPTICAL 1.54n</span>
        </div>

        <div className="telemetry-readout tl-left">
          <span className="tel-dot" />
          <span className="tel-text">3D ISO-PRISM MATRIX</span>
          <span className="tel-coords">X:{hudCoords.x}° Y:{hudCoords.y}° Z:{hudCoords.z}°</span>
        </div>

        <div className="telemetry-readout tl-right">
          <span className="tel-text">REFRACTION // 1.544n</span>
          <span className="tel-status">
            <i className="tel-pulse-icon" /> STABLE
          </span>
        </div>
      </div>

      {/* 6. Precision Depth & Elevation Scale (Right Margin) */}
      <div className="hero-depth-ruler" style={{ zIndex: 2 }}>
        <div className="ruler-track">
          <span className="ruler-tick" />
          <span className="ruler-tick major" />
          <span className="ruler-tick" />
          <span className="ruler-tick" />
          <span className="ruler-tick major" />
          <span className="ruler-tick" />
          <span className="ruler-tick" />
          <span className="ruler-tick major" />
          <span className="ruler-tick" />
          <span className="ruler-cursor" style={{ top: `${elevationPct}%` }} />
        </div>
        <span className="ruler-label">Z-AXIS</span>
      </div>

      {/* 7. Tactile Film Noise & Specular Vignette Overlay */}
      <div className="hero-tactile-noise" style={{ zIndex: 3 }} />
      <div className="hero-lens-vignette" style={{ zIndex: 3 }} />
    </div>
  );
}
