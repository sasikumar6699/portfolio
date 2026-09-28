import React, { useEffect, useRef, useState, useCallback } from 'react';
import { ArrowRight, Eye, Download, Database, Globe, Cpu, Code } from 'lucide-react';
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // SVG Stage Dimensions
  // Desktop: Anchored on right column (CX = 1350, CY = 540 in 1920x1080)
  // Mobile: Centered in dedicated stage (CX = 260, CY = 260 in 520x520)
  const CX = isMobile ? 260 : 1350;
  const CY = isMobile ? 260 : 540;
  const MASS_R = isMobile ? 36 : 48;

  // 4 Named Satellites revolving automatically around mass
  const initialSatellites: Satellite[] = [
    {
      id: 'erp',
      name: 'ERP, CRM & HCM Solutions',
      icon: Database,
      radius: isMobile ? 65 : 105,
      omega: 0.85, // automatic continuous rotation
      theta: 0.4,
      color: '#39FF14',
      size: isMobile ? 12 : 16
    },
    {
      id: 'custom-sw',
      name: 'Custom Software (Fleet / Logistics)',
      icon: Code,
      radius: isMobile ? 110 : 165,
      omega: -0.65,
      theta: 1.9,
      color: '#39FF14',
      size: isMobile ? 13 : 18
    },
    {
      id: 'web',
      name: 'Web Development & 3D Websites',
      icon: Globe,
      radius: isMobile ? 155 : 225,
      omega: 0.52,
      theta: 3.5,
      color: '#39FF14',
      size: isMobile ? 12 : 17
    },
    {
      id: 'ai',
      name: 'AI, Automation & AMC Support',
      icon: Cpu,
      radius: isMobile ? 200 : 285,
      omega: -0.42,
      theta: 4.9,
      color: '#39FF14',
      size: isMobile ? 11 : 16
    }
  ];

  const satellitesRef = useRef(initialSatellites);

  // Keep satellite radii synchronized with mobile/desktop resize
  useEffect(() => {
    satellitesRef.current = satellitesRef.current.map((s) => {
      let r = 105;
      let sz = 16;
      if (s.id === 'erp') { r = isMobile ? 65 : 105; sz = isMobile ? 12 : 16; }
      else if (s.id === 'custom-sw') { r = isMobile ? 110 : 165; sz = isMobile ? 13 : 18; }
      else if (s.id === 'web') { r = isMobile ? 155 : 225; sz = isMobile ? 12 : 17; }
      else if (s.id === 'ai') { r = isMobile ? 200 : 285; sz = isMobile ? 11 : 16; }
      return { ...s, radius: r, size: sz };
    });
  }, [isMobile]);

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
      const baseW = isMobile ? 520 : 1920;
      const baseH = isMobile ? 520 : 1080;
      return {
        x: ((clientX - rect.left) / rect.width) * baseW,
        y: ((clientY - rect.top) / rect.height) * baseH
      };
    }
    return { x: CX, y: CY };
  }, [CX, CY, isMobile]);

  // Handle click anywhere across the entire hero section
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

  const orbitRadii = isMobile ? [65, 110, 155, 200] : [105, 165, 225, 285];

  const renderSvgContent = () => (
    <>
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

      {/* Orbit Trajectory Ellipses */}
      {orbitRadii.map((r, i) => (
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
          opacity={i % 2 === 0 ? "0.25" : "0.12"}
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

      {/* Central Mass (Anchored with Recoil) */}
      <g transform={`translate(${massRecoil.x}, ${massRecoil.y})`}>
        <circle
          cx={CX}
          cy={CY}
          r={MASS_R + (isMobile ? 10 : 14)}
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
          r={MASS_R - (isMobile ? 14 : 20)}
          fill="none"
          stroke="#050505"
          strokeWidth={isMobile ? "2" : "3"}
          opacity="0.75"
        />
        <text
          x={CX}
          y={CY + (isMobile ? 3.5 : 4)}
          textAnchor="middle"
          fill="#050505"
          fontFamily="monospace"
          fontWeight="bold"
          fontSize={isMobile ? "8.5" : "11"}
          letterSpacing="0.12em"
        >
          TECHYORA
        </text>
      </g>

      {/* 4 NAMED SATELLITES */}
      {satPositions.map((sat) => {
        const isHovered = activeSatId === sat.id;
        const displayName = isMobile
          ? (sat.id === 'erp' ? 'ERP & HCM' : sat.id === 'custom-sw' ? 'Custom Software' : sat.id === 'web' ? 'Web & 3D' : 'AI & AMC')
          : sat.name;
        const badgeW = isMobile ? 74 : 158;
        const badgeH = isMobile ? 18 : 22;
        const badgeY = isMobile ? -9 : -11;
        const badgeX = sat.x > CX ? (isMobile ? 10 : 14) : -(badgeW + (isMobile ? 10 : 14));
        const textX = sat.x > CX ? (isMobile ? 15 : 22) : -(badgeW + (isMobile ? 5 : 6));

        return (
          <g key={sat.id}>
            {/* Satellite Node Disc */}
            <circle
              cx={sat.x}
              cy={sat.y}
              r={sat.size + (isMobile ? 3.5 : 5)}
              fill="#39FF14"
              opacity={isHovered ? "0.5" : "0.2"}
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
              r={isMobile ? "2.5" : "3.5"}
              fill="#39FF14"
            />

            {/* Satellite Name Badge Label */}
            <g
              transform={`translate(${sat.x}, ${sat.y})`}
              className="cursor-pointer pointer-events-auto"
              onMouseEnter={() => setActiveSatId(sat.id)}
              onMouseLeave={() => setActiveSatId(null)}
              onClick={(e) => {
                e.stopPropagation();
                triggerGravitizeAt(
                  heroRef.current ? heroRef.current.getBoundingClientRect().left + (sat.x / (isMobile ? 520 : 1920)) * heroRef.current.clientWidth : 0,
                  heroRef.current ? heroRef.current.getBoundingClientRect().top + (sat.y / (isMobile ? 520 : 1080)) * heroRef.current.clientHeight : 0
                );
              }}
            >
              <rect
                x={badgeX}
                y={badgeY}
                width={badgeW}
                height={badgeH}
                rx={isMobile ? "4" : "5"}
                fill="#070709"
                stroke={isHovered ? "#39FF14" : "rgba(57, 255, 20, 0.55)"}
                strokeWidth="1"
                opacity="0.95"
              />
              <text
                x={textX}
                y={isMobile ? "2.5" : "3.5"}
                fill="#FFFFFF"
                fontSize={isMobile ? "7.5" : "9.2"}
                fontFamily="sans-serif"
                fontWeight="bold"
                letterSpacing="0.02em"
              >
                {displayName}
              </text>
            </g>
          </g>
        );
      })}
    </>
  );

  return (
    <section
      id="home"
      ref={heroRef}
      onClick={handleHeroClick}
      className="relative w-full min-h-0 bg-[#050505] overflow-hidden flex items-center pt-12 sm:pt-16 pb-4 sm:pb-6 select-none cursor-crosshair"
    >
      {/* Background Precision Grid & Ambient Void Glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-[#39FF14]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[350px] sm:w-[700px] h-[350px] sm:h-[700px] bg-[#39FF14]/5 rounded-full blur-[160px] pointer-events-none" />

      {/* DESKTOP FULL-SCREEN KEPLERIAN SVG ENGINE */}
      {!isMobile && (
        <svg
          ref={svgRef}
          viewBox="0 0 1920 1080"
          className="absolute inset-0 w-full h-full block pointer-events-none overflow-visible z-0"
          preserveAspectRatio="xMidYMid slice"
        >
          {renderSvgContent()}
        </svg>
      )}

      {/* FOREGROUND CONTENT LAYER */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pointer-events-none">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: CLEAN TYPOGRAPHY & CTAs */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6 pointer-events-auto">
            
            {/* Live Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#0D0D0D] border border-[#39FF14]/40 shadow-[0_0_15px_rgba(57,255,20,0.15)] text-[10px] sm:text-xs font-mono text-[#39FF14]">
              <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#39FF14] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-[#39FF14]" />
              </span>
              <span className="tracking-wide uppercase font-semibold">
                TECHYORA ENGINEERING TEAM // ENTERPRISE & GLOBAL CLIENTS
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Engineering{' '}
              <span className="text-[#39FF14] inline-block neon-glow-text underline decoration-[#39FF14]/40 underline-offset-4 sm:underline-offset-8">
                Digital Systems
              </span>{' '}
              That Drive Enterprise Growth.
            </h1>

            {/* Descriptive Copy */}
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 font-light leading-relaxed max-w-xl">
              We are Techyora — an enterprise technology company delivering custom ERPNext, CRM & HCM implementations, specialized custom software (billing, fleet, logistics), 3D interactive web portals, agentic AI automation, branding, and 24/7 AMC support.
            </p>

            {/* Service Pillars */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1 text-[11px] sm:text-xs font-mono text-gray-400">
              <span className="px-2.5 py-1 rounded bg-[#0D0D0D] border border-white/10 text-[#39FF14]">
                • ERP, CRM & HCM (ERPNext)
              </span>
              <span className="px-2.5 py-1 rounded bg-[#0D0D0D] border border-white/10 text-gray-300">
                • Custom Software (Billing, Fleet, Logistics)
              </span>
              <span className="px-2.5 py-1 rounded bg-[#0D0D0D] border border-white/10 text-[#39FF14]">
                • 3D Web & E-Commerce
              </span>
              <span className="px-2.5 py-1 rounded bg-[#0D0D0D] border border-white/10 text-gray-300">
                • Agentic AI & Chatbots
              </span>
              <span className="px-2.5 py-1 rounded bg-[#0D0D0D] border border-white/10 text-[#39FF14]">
                • Branding & Flex Design
              </span>
              <span className="px-2.5 py-1 rounded bg-[#0D0D0D] border border-white/10 text-gray-300">
                • 24/7 AMC & Cloud Support
              </span>
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-3 sm:pt-4">
              <button
                onClick={() => onOpenContact()}
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-[#39FF14] text-black font-bold text-xs sm:text-sm tracking-wider uppercase hover:bg-[#45ff24] shadow-[0_0_25px_rgba(57,255,20,0.5)] hover:shadow-[0_0_40px_rgba(57,255,20,0.8)] transition-all transform hover:-translate-y-1 active:translate-y-0 cursor-pointer"
              >
                <span>Consult Our Team</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl bg-[#0D0D0D] text-white border border-white/20 hover:border-[#39FF14]/60 hover:text-[#39FF14] font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all transform hover:-translate-y-1 text-center"
              >
                <Eye className="w-4 h-4" />
                <span>Explore Services</span>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-1.5 py-2 sm:py-3 px-2 sm:px-3 text-[11px] sm:text-xs font-mono text-gray-400 hover:text-[#39FF14] transition-colors underline underline-offset-4 decoration-gray-600 hover:decoration-[#39FF14] cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-[#39FF14]" />
                <span>Download Company Profile</span>
              </button>
            </div>

            {/* Quick Metrics Statistics */}
            <div className="pt-4 sm:pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4">
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-2.5 sm:p-3.5 rounded-xl bg-[#0D0D0D]/90 border border-white/10 hover:border-[#39FF14]/40 transition-colors"
                >
                  <div className="text-xl sm:text-2xl font-bold font-mono text-white flex items-center">
                    <span>{stat.value}</span>
                    <span className="text-[#39FF14] ml-0.5">{stat.suffix}</span>
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-gray-400 font-medium mt-0.5 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT COLUMN: DEDICATED ORBIT STAGE (CENTERED ON MOBILE, SPACIOUS ON DESKTOP) */}
          <div className="lg:col-span-6 w-full flex flex-col items-center justify-center relative">
            {isMobile && (
              <div className="w-full flex flex-col items-center justify-center pt-2 sm:pt-4 pointer-events-auto">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0D0D0D] border border-[#39FF14]/30 text-[10px] font-mono text-[#39FF14] mb-3 shadow-[0_0_12px_rgba(57,255,20,0.15)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#39FF14] animate-ping" />
                  <span>ORBITAL PHYSICS // TAP ANYWHERE TO ATTRACT</span>
                </div>
                
                <svg
                  ref={svgRef}
                  viewBox="0 0 520 520"
                  className="w-full max-w-[340px] sm:max-w-[420px] aspect-square mx-auto block overflow-visible z-10 select-none cursor-pointer"
                  preserveAspectRatio="xMidYMid meet"
                >
                  {renderSvgContent()}
                </svg>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

