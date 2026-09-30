import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Database, Globe, Cpu, Code, PenTool, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useCyberDoor } from '../../context/CyberDoorContext';

export const GravityManifesto: React.FC = () => {
  const { currentTheme } = useCyberDoor();
  const { primary, rgb } = currentTheme;
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

  // Dynamic circular clip radius calculation (smooth circular iris that expands smoothly from center)
  const maxRadius = typeof window !== 'undefined' ? Math.hypot(window.innerWidth, window.innerHeight) : 1800;
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
  const clipRadius = Math.max(isMobile ? 120 : 180, maxRadius * Math.min(1, Math.pow(scrollProgress * 2.5, 1.4)));

  return (
    <div
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[108vh] sm:h-[114vh] bg-[#050505] select-none"
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
        <div
          className="absolute pointer-events-none w-[60vmin] h-[60vmin] rounded-full border flex items-center justify-center transition-colors"
          style={{ borderColor: `rgba(${rgb}, 0.2)` }}
        >
          <div
            className="w-[82vmin] h-[82vmin] rounded-full border transition-colors"
            style={{ borderColor: `rgba(${rgb}, 0.1)` }}
          />
          <div
            className="w-[42vmin] h-[42vmin] rounded-full border transition-colors"
            style={{ borderColor: `rgba(${rgb}, 0.25)` }}
          />

          {/* Orbiting Rotating Container */}
          <div className="absolute inset-0 animate-bead-track">
            {/* Magnetic Photon Bead */}
            <div
              ref={beadRef}
              style={{
                transform: `translate3d(${beadOffset.x}px, ${beadOffset.y}px, 0)`,
                backgroundColor: primary,
                boxShadow: `0 0 25px ${primary}`
              }}
              className="absolute -top-3 left-1/2 -translate-x-1/2 w-5 sm:w-6 h-5 sm:h-6 rounded-full flex items-center justify-center transition-transform duration-100 ease-out"
            >
              <div className="w-2 h-2 rounded-full bg-black" />
            </div>
          </div>
        </div>

        {/* Manifesto Foreground Content (Animated Smooth Entrance) */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 max-w-5xl mx-auto w-full text-left my-auto space-y-3 sm:space-y-5"
        >
          
          {/* Eyebrow Label */}
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="w-5 sm:w-8 h-[2px]" style={{ backgroundColor: primary }} />
            <span
              className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.2em] sm:tracking-[0.25em] uppercase"
              style={{ color: primary }}
            >
              TECHYORA MANIFESTO // STRATEGY · EXECUTION
            </span>
          </div>

          {/* Massive Typographical Statements */}
          <div className="space-y-1 sm:space-y-2 font-extrabold uppercase text-white tracking-tight leading-[1.05] sm:leading-[0.98] text-2xl sm:text-4xl lg:text-6xl">
            <div>
              ONE COMPANY. ONE DEDICATED TEAM.
            </div>

            <div
              className="flex flex-wrap items-center gap-x-2 sm:gap-x-3 transition-colors duration-500"
              style={{
                color: primary,
                textShadow: `0 0 20px rgba(${rgb}, 0.5)`
              }}
            >
              COMPLETE ENTERPRISE DIGITAL SOLUTIONS.
            </div>

            <div className="flex flex-wrap items-center gap-x-2 sm:gap-x-3 text-xl sm:text-3xl lg:text-5xl">
              <span className="text-gray-400">NO</span>
              <span className={`strike-through-path text-gray-500 ${isStruck ? 'is-struck' : ''}`}>
                MIDDLEMEN.
              </span>
              <span className="text-white">JUST BOLD</span>
              <span
                className={`neon-draw-underline ${isDrawn ? 'is-drawn' : ''}`}
                style={{ color: primary }}
              >
                RESULTS.
              </span>
            </div>
          </div>

          {/* SEO & Service Narrative */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-5 pt-2 text-[11px] sm:text-xs lg:text-sm text-gray-300 font-light leading-relaxed border-t border-white/10">
            <p>
              We engineer enterprise-grade <strong>ERPNext, CRM & HCM solutions</strong>, tailor-made <strong>custom software (billing, inventory, fleet management, and logistics software)</strong>, and high-performance <strong>3D interactive websites & e-commerce portals</strong>.
            </p>
            <p className="hidden sm:block">
              From autonomous <strong>agentic AI workflows & chatbots</strong> to cohesive <strong>graphic branding & flex printing</strong>, our dedicated team backs your entire digital infrastructure with <strong>24/7 AMC and cloud support services</strong>.
            </p>
          </div>

          {/* 6 Core Pillars */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 pt-0.5">
            {[
              { label: 'ERP & HCM', sub: 'ERPNext / Frappe', icon: Database },
              { label: 'Custom Software', sub: 'Fleet / Logistics / POS', icon: Code },
              { label: '3D Web & E-Com', sub: 'React / Next.js', icon: Globe },
              { label: 'AI & Agents', sub: 'Agentic / Chatbots', icon: Cpu },
              { label: 'Brand & Flex', sub: 'Logos / Marketing', icon: PenTool },
              { label: '24/7 AMC Support', sub: 'Cloud & Bug Fixes', icon: ShieldCheck },
            ].map((p, idx) => {
              const IconComp = p.icon;
              return (
                <div
                  key={idx}
                  className="p-2 sm:p-2.5 rounded-xl bg-[#070709] border border-white/10 transition-colors flex items-center gap-2 group"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `rgba(${rgb}, 0.5)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  }}
                >
                  <div
                    className="p-1 sm:p-1.5 rounded-lg bg-white/5 border border-white/10 transition-colors shrink-0"
                    style={{ color: primary }}
                  >
                    <IconComp className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] sm:text-[11px] font-bold text-white block leading-tight truncate">
                      {p.label}
                    </span>
                    <span className="text-[8.5px] sm:text-[9px] font-mono text-gray-400 block truncate">
                      {p.sub}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quality Badges */}
          <div className="pt-1.5 sm:pt-2 flex flex-wrap items-center gap-2.5 sm:gap-4 text-[10px] sm:text-[11px] font-mono text-gray-400">
            <span className="flex items-center gap-1.5" style={{ color: primary }}>
              <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>100% Quality & SLA Guaranteed</span>
            </span>
            <span className="hidden xs:inline">• Sub-Second Performance</span>
            <span>• Dedicated In-House Engineering Team</span>
          </div>

        </motion.div>

      </div>
    </div>
  );
};
