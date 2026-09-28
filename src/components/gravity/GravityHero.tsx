import React, { useEffect, useRef, useState, useCallback } from 'react';
import { ArrowRight, Eye, Download, Database, Globe, Cpu, PenTool } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface GravityHeroProps {
  onOpenContact: (serviceTitle?: string) => void;
  onOpenResume: () => void;
}

interface Satellite {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  radius: number;
  omega: number; // angular velocity (rad/s)
  theta: number;
  color: string;
  size: number;
}

export const GravityHero: React.FC<GravityHeroProps> = ({ onOpenContact, onOpenResume }) => {
  const heroRef = useRef<HTMLElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [activeSatId, setActiveSatId] = useState<string | null>(null);

  // SVG Stage Dimensions (1920 x 1080 ViewBox)
  // Central Mass is anchored in the right column space (CX = 1350, CY = 540)
  const CX = 1350;
  const CY = 540;
  const MASS_R = 48;

  // 4 Named Satellites revolving automatically around the right-side mass in compact orbits
  const initialSatellites: Satellite[] = [
    {
      id: 'erp',
      name: 'ERP, CRM & Business Solutions',
      icon: Database,
      radius: 105,
      omega: 0.85, // automatic continuous rotation
      theta: 0.4,
      color: '#39FF14',
      size: 16
    },
    {
      id: 'web',
      name: 'Web Development & Design',
      icon: Globe,
      radius: 165,
      omega: -0.65,
      theta: 1.9,
      color: '#39FF14',
      size: 18
    },
    {
      id: 'ai',
      name: 'AI & Automation',
      icon: Cpu,
      radius: 225,
      omega: 0.52,
      theta: 3.5,
      color: '#39FF14',
      size: 17
    },
    {
      id: 'design',
      name: 'Graphic Design & Branding',
      icon: PenTool,
      radius: 285,
      omega: -0.42,
      theta: 4.9,
      color: '#39FF14',
      size: 16
    }
  ];

  const satellitesRef = useRef(initialSatellites);

  // Render positions
  const [satPositions, setSatPositions] = useState(
    initialSatellites.map((s) => ({
      ...s,
      x: CX + s.radius * Math.cos(s.theta),
      y: CY + s.radius * Math.sin(s.theta)
    }))
  );

  const [massRecoil, setMassRecoil] = useState({ x: 0, y: 0 });
  const [clickWave, setClickWave] = useState<{ x: number; y: number; opacity: number; radius: number } | null>(null);

  // Convergence state when clicked anywhere across the entire screen
  const convergeRef = useRef<{
    active: boolean;
    targetX: number;
    targetY: number;
    startTime: number;
    duration: number;
    weight: number;
  }>({
    active: false,
    targetX: CX,
    targetY: CY,
    startTime: 0,
    duration: 2000,
    weight: 0
  });

  // Mathematically exact screen-to-SVG coordinate mapping
  const getSvgCoordinates = useCallback((clientX: number, clientY: number) => {
    if (svgRef.current) {
      const ctm = svgRef.current.getScreenCTM();
      if (ctm) {
        const pt = svgRef.current.createSVGPoint();
        pt.x = clientX;
        pt.y = clientY;
        const svgP = pt.matrixTransform(ctm.inverse());
        return { x: svgP.x, y: svgP.y };
      }
    }
    // Fallback if CTM not ready
    if (heroRef.current) {
      const rect = heroRef.current.getBoundingClientRect();
      return {
        x: ((clientX - rect.left) / rect.width) * 1920,
        y: ((clientY - rect.top) / rect.height) * 1080
      };
    }
    return { x: CX, y: CY };
  }, [CX, CY]);

  // Handle click anywhere across the entire hero section (even on the left side or outside the box)
  const triggerGravitizeAt = useCallback((clientX: number, clientY: number) => {
    const { x: clickedX, y: clickedY } = getSvgCoordinates(clientX, clientY);

    // Satellites will fly to this exact point anywhere on screen!
    convergeRef.current = {
      active: true,
      targetX: clickedX,
      targetY: clickedY,
      startTime: performance.now(),
      duration: 2000,
      weight: 0
    };

    setClickWave({ x: clickedX, y: clickedY, opacity: 1, radius: 10 });
  }, [getSvgCoordinates]);

  const handleHeroClick = useCallback((e: React.MouseEvent) => {
    // Ignore interactive CTA clicks (buttons, links, inputs)
    const target = e.target as HTMLElement;
    if (target.closest('button, a, input, select')) return;

    triggerGravitizeAt(e.clientX, e.clientY);
  }, [triggerGravitizeAt]);


  // Main Continuous Automatic Rotation & Global Convergence Animation Loop
  useEffect(() => {
    let animId: number;
    let lastTime = performance.now();

    const clusterOffsets = [
      { ox: -25, oy: -18 },
      { ox: 25, oy: -18 },
      { ox: -22, oy: 22 },
      { ox: 22, oy: 22 }
    ];

    const frame = (now: number) => {
      const dt = Math.min(0.033, (now - lastTime) / 1000);
      lastTime = now;

      const converge = convergeRef.current;
      let convergeWeight = 0; // 0 = natural orbit, 1 = converged at clicked point

      if (converge.active) {
        const elapsed = now - converge.startTime;
        const pullPhase = 650;  // 0 to 650ms: rapid gravitational convergence
        const holdPhase = 1200; // 650 to 1200ms: cluster & swarm at clicked point
        const totalDur = converge.duration; // 2000ms

        if (elapsed < pullPhase) {
          // Accelerate inward to the clicked point anywhere on the screen
          const t = elapsed / pullPhase;
          convergeWeight = t * t * (3 - 2 * t);
        } else if (elapsed < holdPhase) {
          // Stay converged at clicked point
          convergeWeight = 1;
        } else if (elapsed < totalDur) {
          // Graceful spring return outward back to orbit
          const t = (elapsed - holdPhase) / (totalDur - holdPhase);
          convergeWeight = 1 - t * t * (3 - 2 * t);
        } else {
          converge.active = false;
        }
      }

      converge.weight = convergeWeight;

      // Continuous automatic angular movement
      const updated = satellitesRef.current.map((sat, idx) => {
        sat.theta = (sat.theta + sat.omega * dt) % (2 * Math.PI);

        // Standard orbital position around right-side central mass
        const homeX = CX + sat.radius * Math.cos(sat.theta);
        const homeY = CY + sat.radius * Math.sin(sat.theta);

        // Target point: clustered around clicked point with designated offset
        const offset = clusterOffsets[idx % clusterOffsets.length];
        const destX = converge.targetX + offset.ox;
        const destY = converge.targetY + offset.oy;

        // Interpolate between orbital home position and convergence target
        const currentX = homeX + (destX - homeX) * convergeWeight;
        const currentY = homeY + (destY - homeY) * convergeWeight;

        return {
          ...sat,
          x: currentX,
          y: currentY
        };
      });

      setSatPositions(updated);

      // Mass recoil towards opposite of convergence or subtle idle breath
      if (converge.active) {
        const dx = (converge.targetX - CX) * convergeWeight * 0.08;
        const dy = (converge.targetY - CY) * convergeWeight * 0.08;
        setMassRecoil({ x: -dx, y: -dy });
      } else {
        setMassRecoil({
          x: Math.sin(now / 900) * 3,
          y: Math.cos(now / 1100) * 3
        });
      }

      // Decay click wave and expand radius
      setClickWave((prev) => {
        if (!prev) return null;
        const nextOp = prev.opacity - dt * 0.7;
        const nextR = prev.radius + dt * 90;
        return nextOp > 0 ? { ...prev, opacity: nextOp, radius: nextR } : null;
      });

      animId = requestAnimationFrame(frame);
    };

    animId = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(animId);
  }, [CX, CY]);

  return (
    <section
      id="home"
      ref={heroRef}
      onClick={handleHeroClick}
      className="relative w-full min-h-[92vh] lg:min-h-screen bg-[#050505] overflow-hidden flex items-center pt-28 pb-16 select-none cursor-crosshair"
    >
      {/* Background Precision Grid & Ambient Void Glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[600px] h-[600px] bg-[#39FF14]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[700px] h-[700px] bg-[#39FF14]/5 rounded-full blur-[180px] pointer-events-none" />

      {/* =========================================================================
          FULL-SCREEN KEPLERIAN SVG ENGINE (CANVAS COVERS ENTIRE HERO WITH OVERFLOW-VISIBLE)
          SATELLITES CAN FLY ANYWHERE ON SCREEN EVEN OUT OF THE BOX WHEN CLICKED!
          ========================================================================= */}
      <svg
        ref={svgRef}
        viewBox="0 0 1920 1080"
        className="absolute inset-0 w-full h-full block pointer-events-none overflow-visible z-0"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="heroNeonGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <radialGradient id="heroSunGrad" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#9eff7a" />
            <stop offset="65%" stopColor="#39FF14" />
            <stop offset="100%" stopColor="#146a09" />
          </radialGradient>
        </defs>

        {/* Orbit Trajectory Ellipses around right-side core (Compact & Screen-Fit) */}
        {[105, 165, 225, 285].map((r, i) => (
          <ellipse
            key={i}
            cx={CX}
            cy={CY}
            rx={r}
            ry={r}
            fill="none"
            stroke="#39FF14"
            strokeWidth="1"
            strokeDasharray={i % 2 === 0 ? "4 8" : "none"}
            opacity={i % 2 === 0 ? "0.2" : "0.1"}
          />
        ))}

        {/* Gravitational Tether Laser Rays when converging anywhere across the screen */}
        {convergeRef.current.weight > 0.05 && (
          <g opacity={convergeRef.current.weight * 0.85}>
            {satPositions.map((sat) => (
              <line
                key={`tether-${sat.id}`}
                x1={sat.x}
                y1={sat.y}
                x2={convergeRef.current.targetX}
                y2={convergeRef.current.targetY}
                stroke="#39FF14"
                strokeWidth="1.5"
                strokeDasharray="6 4"
                filter="url(#heroNeonGlow)"
              />
            ))}
          </g>
        )}

        {/* Gravitational Click Wave Marker anywhere on screen */}
        {clickWave && (
          <g>
            <circle
              cx={clickWave.x}
              cy={clickWave.y}
              r={clickWave.radius}
              fill="none"
              stroke="#39FF14"
              strokeWidth="2.5"
              opacity={clickWave.opacity}
              filter="url(#heroNeonGlow)"
            />
            <circle
              cx={clickWave.x}
              cy={clickWave.y}
              r={clickWave.radius * 0.5}
              fill="none"
              stroke="#39FF14"
              strokeWidth="1.2"
              opacity={clickWave.opacity * 0.8}
            />
            <circle
              cx={clickWave.x}
              cy={clickWave.y}
              r="6"
              fill="#39FF14"
              opacity={clickWave.opacity}
              filter="url(#heroNeonGlow)"
            />
          </g>
        )}

        {/* Central Mass (Anchored on Right Side with Recoil) */}
        <g transform={`translate(${massRecoil.x}, ${massRecoil.y})`}>
          <circle
            cx={CX}
            cy={CY}
            r={MASS_R + 14}
            fill="#39FF14"
            opacity="0.12"
            filter="url(#heroNeonGlow)"
          />
          <circle
            cx={CX}
            cy={CY}
            r={MASS_R}
            fill="url(#heroSunGrad)"
            filter="url(#heroNeonGlow)"
          />
          <circle
            cx={CX}
            cy={CY}
            r={MASS_R - 20}
            fill="none"
            stroke="#050505"
            strokeWidth="3"
            opacity="0.75"
          />
          <text
            x={CX}
            y={CY + 4}
            textAnchor="middle"
            fill="#050505"
            fontFamily="monospace"
            fontWeight="bold"
            fontSize="11"
            letterSpacing="0.12em"
          >
            TECHYORA
          </text>
        </g>

        {/* 4 NAMED SATELLITES (COMPACT & SCREEN-CONTAINED) */}
        {satPositions.map((sat) => {
          const isHovered = activeSatId === sat.id;

          return (
            <g key={sat.id}>
              {/* Satellite Node Disc */}
              <circle
                cx={sat.x}
                cy={sat.y}
                r={sat.size + 5}
                fill="#39FF14"
                opacity={isHovered ? "0.45" : "0.18"}
                filter="url(#heroNeonGlow)"
              />
              <circle
                cx={sat.x}
                cy={sat.y}
                r={sat.size}
                fill="#0D0D0D"
                stroke="#39FF14"
                strokeWidth="2"
                filter="url(#heroNeonGlow)"
              />
              <circle
                cx={sat.x}
                cy={sat.y}
                r="3.5"
                fill="#39FF14"
              />

              {/* Satellite Name Badge Label */}
              <g
                transform={`translate(${sat.x}, ${sat.y})`}
                className="cursor-pointer pointer-events-auto"
                onMouseEnter={() => setActiveSatId(sat.id)}
                onMouseLeave={() => setActiveSatId(null)}
              >
                <rect
                  x={sat.x > CX ? 14 : -172}
                  y="-11"
                  width="158"
                  height="22"
                  rx="5"
                  fill="#070709"
                  stroke={isHovered ? "#39FF14" : "rgba(57, 255, 20, 0.55)"}
                  strokeWidth="1"
                  opacity="0.95"
                />
                <text
                  x={sat.x > CX ? 22 : -164}
                  y="3.5"
                  fill="#FFFFFF"
                  fontSize="9.2"
                  fontFamily="sans-serif"
                  fontWeight="bold"
                  letterSpacing="0.02em"
                >
                  {sat.name}
                </text>
              </g>
            </g>
          );
        })}
      </svg>

      {/* FOREGROUND CONTENT LAYER */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pointer-events-none">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* =========================================================================
              LEFT COLUMN: CLEAN TYPOGRAPHY & CTAs (NON-OVERLAPPING)
              ========================================================================= */}
          <div className="lg:col-span-6 space-y-6 pointer-events-auto">
            
            {/* Live Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0D0D0D] border border-[#39FF14]/40 shadow-[0_0_15px_rgba(57,255,20,0.15)] text-xs font-mono text-[#39FF14]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#39FF14] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#39FF14]" />
              </span>
              <span className="tracking-wide uppercase font-semibold">
                AVAILABLE FOR FREELANCE & ENTERPRISE PROJECTS
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Building{' '}
              <span className="text-[#39FF14] inline-block neon-glow-text underline decoration-[#39FF14]/40 underline-offset-8">
                Digital Solutions
              </span>{' '}
              That Drive Business Growth.
            </h1>

            {/* Descriptive Copy */}
            <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed max-w-xl">
              We help startups, small businesses, and growing companies transform operational challenges into scalable ERPNext systems, modern web portals, autonomous AI workflows, and bespoke branding.
            </p>

            {/* Service Pillars */}
            <div className="flex flex-wrap gap-2 pt-1 text-xs font-mono text-gray-400">
              <span className="px-2.5 py-1 rounded bg-[#0D0D0D] border border-white/10 text-[#39FF14]">
                • ERPNext & Frappe
              </span>
              <span className="px-2.5 py-1 rounded bg-[#0D0D0D] border border-white/10 text-gray-300">
                • React / Next.js
              </span>
              <span className="px-2.5 py-1 rounded bg-[#0D0D0D] border border-white/10 text-[#39FF14]">
                • AI Automation
              </span>
              <span className="px-2.5 py-1 rounded bg-[#0D0D0D] border border-white/10 text-gray-300">
                • Data & Branding
              </span>
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => onOpenContact()}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#39FF14] text-black font-bold text-sm tracking-wider uppercase hover:bg-[#45ff24] shadow-[0_0_25px_rgba(57,255,20,0.5)] hover:shadow-[0_0_40px_rgba(57,255,20,0.8)] transition-all transform hover:-translate-y-1 active:translate-y-0"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#orbit-showcase"
                className="inline-flex items-center gap-2.5 px-6 py-4 rounded-xl bg-[#0D0D0D] text-white border border-white/20 hover:border-[#39FF14]/60 hover:text-[#39FF14] font-semibold text-sm tracking-wider uppercase transition-all transform hover:-translate-y-1"
              >
                <Eye className="w-4 h-4" />
                <span>Explore 3D Services</span>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 py-3 px-3 text-xs font-mono text-gray-400 hover:text-[#39FF14] transition-colors underline underline-offset-4 decoration-gray-600 hover:decoration-[#39FF14]"
              >
                <Download className="w-3.5 h-3.5 text-[#39FF14]" />
                <span>Download Portfolio Spec</span>
              </button>
            </div>

            {/* Quick Metrics Statistics */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#0D0D0D]/90 border border-white/10 hover:border-[#39FF14]/40 transition-colors"
                >
                  <div className="text-2xl font-bold font-mono text-white flex items-center">
                    <span>{stat.value}</span>
                    <span className="text-[#39FF14] ml-0.5">{stat.suffix}</span>
                  </div>
                  <div className="text-[11px] text-gray-400 font-medium mt-0.5 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* =========================================================================
              RIGHT COLUMN: DEDICATED TO FULL ACTIVE ORBITS & SATELLITES
              ========================================================================= */}
          <div className="lg:col-span-6 pointer-events-none" />

        </div>

      </div>
    </section>
  );
};
