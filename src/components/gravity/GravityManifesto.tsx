import React, { useEffect, useRef, useState } from 'react';
import { Database, Globe, Cpu, BarChart3, PenTool, CheckCircle2 } from 'lucide-react';

export const GravityManifesto: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isStruck, setIsStruck] = useState(false);
  const [isDrawn, setIsDrawn] = useState(false);
  
  // Magnetic Bead Physics
  const beadRef = useRef<HTMLDivElement>(null);
  const [beadOffset, setBeadOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const vh = window.innerHeight;
      const totalDist = rect.height - vh;
      if (totalDist <= 0) return;

      const progress = Math.max(0, Math.min(1, -rect.top / totalDist));
      setScrollProgress(progress);
      setIsStruck(progress > 0.18);
      setIsDrawn(progress > 0.38);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Magnetic Cursor Attraction on Bead
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!beadRef.current) return;
    const rect = beadRef.current.getBoundingClientRect();
    const beadCenterX = rect.left + rect.width / 2;
    const beadCenterY = rect.top + rect.height / 2;

    const dx = e.clientX - beadCenterX;
    const dy = e.clientY - beadCenterY;
    const dist = Math.hypot(dx, dy);

    if (dist < 260) {
      const pullForce = 0.45 * (1 - dist / 260);
      setBeadOffset({
        x: dx * pullForce,
        y: dy * pullForce
      });
    } else {
      setBeadOffset({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setBeadOffset({ x: 0, y: 0 });
  };

  // Dynamic circular clip radius calculation (smooth circular iris like before)
  const maxRadius = typeof window !== 'undefined' ? Math.hypot(window.innerWidth, window.innerHeight) : 1800;
  const clipRadius = Math.max(90, maxRadius * Math.min(1, scrollProgress * 1.5 + 0.1));

  return (
    <div
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[210vh] bg-[#050505] select-none"
    >
      {/* Viewport Sticky Stage with Circular Expanding Iris */}
      <div
        className="sticky top-0 w-full h-screen flex flex-col justify-center items-center overflow-hidden px-4 sm:px-8 lg:px-12 bg-[#0D0D0D] transition-all"
        style={{
          clipPath: `circle(${clipRadius}px at 50% 50%)`,
          WebkitClipPath: `circle(${clipRadius}px at 50% 50%)`
        }}
      >
        {/* Background Ambient Void & Concentric Magnetic Track */}
        <div className="absolute inset-0 bg-[#070709] pointer-events-none" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

        {/* Concentric Neon Orbit Ring with Magnetic Rotating Bead */}
        <div className="absolute pointer-events-none w-[60vmin] h-[60vmin] rounded-full border border-[#39FF14]/20 flex items-center justify-center">
          <div className="w-[82vmin] h-[82vmin] rounded-full border border-[#39FF14]/10" />
          <div className="w-[42vmin] h-[42vmin] rounded-full border border-[#39FF14]/25" />

          {/* Orbiting Rotating Container */}
          <div className="absolute inset-0 animate-bead-track">
            {/* Magnetic Photon Bead */}
            <div
              ref={beadRef}
              style={{
                transform: `translate3d(${beadOffset.x}px, ${beadOffset.y}px, 0)`
              }}
              className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#39FF14] shadow-[0_0_25px_#39FF14] flex items-center justify-center transition-transform duration-100 ease-out"
            >
              <div className="w-2 h-2 rounded-full bg-black" />
            </div>
          </div>
        </div>

        {/* Manifesto Foreground Content (Proportioned to fit laptop screens without cutoff) */}
        <div className="relative z-10 max-w-5xl mx-auto w-full text-left my-auto space-y-5 sm:space-y-6">
          
          {/* Eyebrow Label */}
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#39FF14]" />
            <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.25em] text-[#39FF14] uppercase">
              STUDIO MANIFESTO // STRATEGY · EXECUTION · ARCHITECTURE
            </span>
          </div>

          {/* Massive Typographical Statements */}
          <div className="space-y-2 sm:space-y-3 font-extrabold uppercase text-white tracking-tight leading-[0.98] text-3xl sm:text-5xl lg:text-6xl">
            <div>
              ONE TEAM. MULTIPLE SKILLS.
            </div>

            <div className="flex flex-wrap items-center gap-x-3 text-[#39FF14] neon-glow-text">
              COMPLETE DIGITAL SOLUTIONS.
            </div>

            <div className="flex flex-wrap items-center gap-x-3 text-2xl sm:text-4xl lg:text-5xl">
              <span className="text-gray-400">NO</span>
              <span className={`strike-through-path text-gray-500 ${isStruck ? 'is-struck' : ''}`}>
                OVERHEAD.
              </span>
              <span className="text-white">JUST BOLD</span>
              <span className={`neon-draw-underline text-[#39FF14] ${isDrawn ? 'is-drawn' : ''}`}>
                RESULTS.
              </span>
            </div>
          </div>

          {/* SEO & Service Narrative */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 pt-2 text-xs sm:text-sm text-gray-300 font-light leading-relaxed border-t border-white/10">
            <p>
              We engineer enterprise-grade <strong>ERPNext & Frappe business solutions</strong>, high-performance <strong>React & Next.js websites</strong>, and <strong>autonomous AI workflow automation</strong> that eliminate manual bottlenecks and accelerate commercial scale.
            </p>
            <p>
              From accurate <strong>data management & spreadsheet ETL processing</strong> to cohesive <strong>brand identity and graphic design</strong>, we bridge end-to-end technology with commercial execution without middleman overhead.
            </p>
          </div>

          {/* 5 Core Pillars */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 pt-1">
            {[
              { label: 'ERP & CRM', sub: 'ERPNext / Frappe', icon: Database },
              { label: 'Web Apps', sub: 'React / Next.js', icon: Globe },
              { label: 'AI & Agents', sub: 'Workflows & OCR', icon: Cpu },
              { label: 'Data ETL', sub: 'Cleaning & Records', icon: BarChart3 },
              { label: 'Branding', sub: 'Visual Identity', icon: PenTool },
            ].map((p, idx) => {
              const IconComp = p.icon;
              return (
                <div
                  key={idx}
                  className="p-2.5 rounded-xl bg-[#070709] border border-white/10 hover:border-[#39FF14]/50 transition-colors flex items-center gap-2 group"
                >
                  <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-[#39FF14] group-hover:bg-[#39FF14] group-hover:text-black transition-colors shrink-0">
                    <IconComp className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-bold text-white block leading-tight truncate">
                      {p.label}
                    </span>
                    <span className="text-[9px] font-mono text-gray-400 block truncate">
                      {p.sub}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quality Badges */}
          <div className="pt-2 flex flex-wrap items-center gap-4 text-[11px] font-mono text-gray-400">
            <span className="flex items-center gap-1.5 text-[#39FF14]">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>100% Quality Guaranteed</span>
            </span>
            <span>• Sub-Second Page Speeds</span>
            <span>• Secure Local/Cloud Deployments</span>
            <span>• Direct Team Collaboration</span>
          </div>

        </div>

      </div>
    </div>
  );
};
