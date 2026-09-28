import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Database, 
  Globe, 
  Cpu, 
  Code, 
  PenTool, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  ShieldCheck 
} from 'lucide-react';
import { SERVICES } from '../../data/portfolioData';

interface GravityConstellationProps {
  onSelectService: (serviceTitle: string) => void;
}

export const GravityConstellation: React.FC<GravityConstellationProps> = ({ onSelectService }) => {
  const [selectedServiceIndex, setSelectedServiceIndex] = useState(0);

  // 6 Planetary nodes directly tied to the service cards and their core deliverables
  const serviceNodes = [
    {
      title: "ERP, CRM, HCM & Business Solutions",
      shortTitle: "ERP & HCM",
      discipline: "ERPNext & Frappe",
      badge: "ERPNext / Custom HCM",
      icon: Database,
      radius: 80,
      dur: '20s',
      twinkleDelay: '0s'
    },
    {
      title: "Custom Software Solutions",
      shortTitle: "Custom Software",
      discipline: "Fleet, Logistics & Billing",
      badge: "Billing / Fleet / Logistics",
      icon: Code,
      radius: 122,
      dur: '26s',
      twinkleDelay: '0.4s'
    },
    {
      title: "Web Development & Design",
      shortTitle: "Web & 3D",
      discipline: "3D Web & E-Commerce",
      badge: "3D WebGL / Next.js",
      icon: Globe,
      radius: 164,
      dur: '32s',
      twinkleDelay: '0.8s'
    },
    {
      title: "AI & Automation",
      shortTitle: "AI & Bots",
      discipline: "Agentic AI & Chatbots",
      badge: "Agentic AI / Workflows",
      icon: Cpu,
      radius: 206,
      dur: '38s',
      twinkleDelay: '1.2s'
    },
    {
      title: "Graphic Design & Branding",
      shortTitle: "Brand & Flex",
      discipline: "Logo, Flex & Marketing",
      badge: "Logo / Flex / Print",
      icon: PenTool,
      radius: 248,
      dur: '46s',
      twinkleDelay: '1.6s'
    },
    {
      title: "AMC & Support Services",
      shortTitle: "24/7 AMC",
      discipline: "ERP, Cloud & Bug Fixes",
      badge: "Cloud / 24/7 Support",
      icon: ShieldCheck,
      radius: 290,
      dur: '54s',
      twinkleDelay: '2.0s'
    }
  ];

  // 3-SECOND SMOOTH AUTO-ADVANCING TRANSITION
  useEffect(() => {
    const timer = setInterval(() => {
      setSelectedServiceIndex((prev) => (prev + 1) % serviceNodes.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [serviceNodes.length]);

  const activeService = SERVICES[selectedServiceIndex] || SERVICES[0];

  // Dynamic revolving orbit ticker text derived directly from active card content
  const activeOrbitTicker = `${activeService.title.toUpperCase()} · ${activeService.features.slice(0, 3).join(" · ").toUpperCase()} · `;

  return (
    <section
      id="services-constellation"
      className="relative w-full py-6 sm:py-10 bg-[#050505] overflow-hidden select-none border-t border-white/5"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#39FF14]/5 rounded-full blur-[200px] pointer-events-none" />

      {/* Twinkling Background Cosmos Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { x: '12%', y: '18%', d: '0.3s' },
          { x: '85%', y: '12%', d: '1.1s' },
          { x: '42%', y: '82%', d: '0.7s' },
          { x: '78%', y: '68%', d: '1.6s' },
          { x: '22%', y: '62%', d: '0.9s' },
          { x: '92%', y: '48%', d: '1.4s' }
        ].map((star, idx) => (
          <div
            key={idx}
            style={{
              left: star.x,
              top: star.y,
              animationDelay: star.d
            }}
            className="absolute w-1.5 h-1.5 rounded-full bg-[#39FF14] shadow-[0_0_10px_#39FF14] animate-pulse"
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D0D0D] border border-[#39FF14]/40 text-xs font-mono text-[#39FF14] mb-2 sm:mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>GRAVITATIONAL CONSTELLATION · 3S AUTO-CYCLE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            The Multi-Ring{' '}
            <span className="text-[#39FF14] inline-block neon-glow-text">
              Services Ecosystem
            </span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mt-2 font-light">
            Planetary orbits dynamically reflect each service discipline, showing live modules and deliverables in continuous motion.
          </p>
        </div>

        {/* Constellation Grid: Interactive Solar System (Left) + 3s Auto-Cycling Card (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT: Multi-Ring Planetary Solar System with Dynamic Orbit Contents */}
          <div className="lg:col-span-7 relative w-full aspect-square max-w-[620px] mx-auto flex items-center justify-center">
            
            <svg
              viewBox="-410 -410 820 820"
              className="w-full h-full block overflow-visible select-none"
            >
              <defs>
                <filter id="nodeGlowAll" x="-40%" y="-40%" width="180%" height="180%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                
                {/* Circular Running Text Path on Outer Orbit */}
                <path
                  id="casesTrackPathAll"
                  d="M0,-315 A315,315 0 1,1 0,315 A315,315 0 1,1 0,-315"
                />
              </defs>

              {/* Concentric Orbit Rings - Highlight Active Orbit with Neon Glow */}
              {serviceNodes.map((node, i) => {
                const isSelected = selectedServiceIndex === i;
                return (
                  <circle
                    key={i}
                    cx="0"
                    cy="0"
                    r={node.radius}
                    fill="none"
                    stroke={isSelected ? "#39FF14" : "rgba(57, 255, 20, 0.2)"}
                    strokeWidth={isSelected ? "2.5" : "1"}
                    strokeDasharray={isSelected ? "10 5" : (i % 2 === 0 ? "4 8" : "none")}
                    filter={isSelected ? "url(#nodeGlowAll)" : undefined}
                    opacity={isSelected ? "1" : "0.35"}
                    className="transition-all duration-500"
                  />
                );
              })}

              {/* Central Core Gravitational Singularity */}
              <circle
                cx="0"
                cy="0"
                r="36"
                fill="#39FF14"
                opacity="0.12"
                filter="url(#nodeGlowAll)"
              />
              <circle
                cx="0"
                cy="0"
                r="24"
                fill="#0D0D0D"
                stroke="#39FF14"
                strokeWidth="2"
              />
              <circle
                cx="0"
                cy="0"
                r="6"
                fill="#39FF14"
                className="animate-pulse"
              />

              {/* Dynamic Revolving Circular Orbit Text Ring Based on Current Card Content */}
              <g className="animate-orbit-spin" style={{ '--orbit-dur': '45s' } as React.CSSProperties}>
                <text className="text-[10px] font-mono fill-[#39FF14] tracking-[0.25em] uppercase font-bold">
                  <textPath href="#casesTrackPathAll" startOffset="0%">
                    {activeOrbitTicker}
                  </textPath>
                </text>
              </g>

              {/* 6 PLANETARY DISCS WITH LABELS & DELIVERABLES FROM CARDS */}
              {serviceNodes.map((node, idx) => {
                const r = node.radius;
                const isSelected = selectedServiceIndex === idx;
                const IconComp = node.icon;

                return (
                  <g
                    key={idx}
                    className="animate-orbit-spin"
                    style={{ '--orbit-dur': node.dur } as React.CSSProperties}
                  >
                    <g transform={`translate(${r}, 0)`}>
                      
                      {/* Counter-rotating disc container so icon and labels remain upright */}
                      <g
                        className="animate-orbit-counter cursor-pointer group"
                        style={{ '--orbit-dur': node.dur } as React.CSSProperties}
                        onClick={() => setSelectedServiceIndex(idx)}
                      >
                        {/* Continuous Twinkling Sparkle Halo */}
                        <circle
                          cx="0"
                          cy="0"
                          r={isSelected ? "26" : "18"}
                          fill="#39FF14"
                          opacity={isSelected ? "0.6" : "0.22"}
                          filter="url(#nodeGlowAll)"
                          className="animate-pulse"
                          style={{ animationDuration: '1.5s', animationDelay: node.twinkleDelay }}
                        />

                        {/* Starlight 4-Point Twinkle Cross on all discs */}
                        <g stroke="#39FF14" strokeWidth="1.2" opacity={isSelected ? "0.9" : "0.45"}>
                          <line x1="-18" y1="0" x2="18" y2="0" />
                          <line x1="0" y1="-18" x2="0" y2="18" />
                        </g>

                        {/* Node Background Disc */}
                        <circle
                          cx="0"
                          cy="0"
                          r={isSelected ? "18" : "14"}
                          fill="#0D0D0D"
                          stroke={isSelected ? "#39FF14" : "rgba(57, 255, 20, 0.6)"}
                          strokeWidth={isSelected ? "2.5" : "1.5"}
                          className="transition-all duration-300 group-hover:stroke-[#39FF14]"
                        />

                        {/* Centered Vector Icon */}
                        <foreignObject 
                          x={isSelected ? "-9" : "-7.5"} 
                          y={isSelected ? "-9" : "-7.5"} 
                          width={isSelected ? "18" : "15"} 
                          height={isSelected ? "18" : "15"} 
                          className="pointer-events-none"
                        >
                          <IconComp className={`w-full h-full ${isSelected ? 'text-[#39FF14]' : 'text-gray-300'}`} />
                        </foreignObject>

                        {/* Visible Discipline Label Badge Next to Planetary Disc */}
                        <g transform="translate(18, -10)" className="pointer-events-none">
                          <rect
                            x="0"
                            y="0"
                            width={isSelected ? "106" : "88"}
                            height={isSelected ? "22" : "18"}
                            rx="5"
                            fill="#070709"
                            stroke={isSelected ? "#39FF14" : "rgba(255, 255, 255, 0.2)"}
                            strokeWidth={isSelected ? "1.4" : "0.8"}
                            opacity="0.95"
                          />
                          <text
                            x="6"
                            y={isSelected ? "10" : "9"}
                            fill={isSelected ? "#39FF14" : "#E4E4E7"}
                            fontSize={isSelected ? "8.5" : "7.5"}
                            fontFamily="monospace"
                            fontWeight="bold"
                            dominantBaseline="middle"
                          >
                            {node.shortTitle}
                          </text>
                          {isSelected && (
                            <text
                              x="6"
                              y="16.5"
                              fill="#9eff7a"
                              fontSize="6"
                              fontFamily="monospace"
                              dominantBaseline="middle"
                            >
                              {node.badge}
                            </text>
                          )}
                        </g>

                        {/* Orbiting Moon */}
                        <g className="animate-orbit-spin" style={{ '--orbit-dur': '6s' } as React.CSSProperties}>
                          <circle
                            cx={isSelected ? "23" : "18"}
                            cy="0"
                            r="2"
                            fill="#39FF14"
                            opacity={isSelected ? "1" : "0.5"}
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                );
              })}
            </svg>

            {/* Central Interactive Magnetic Capsule Button */}
            <button
              onClick={() => onSelectService(activeService.title)}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1.5 rounded-full bg-[#39FF14] text-black font-mono font-bold text-[10px] tracking-wider uppercase shadow-[0_0_20px_rgba(57,255,20,0.6)] hover:scale-110 transition-transform flex items-center gap-1.5 z-20 pointer-events-auto cursor-pointer"
            >
              <span>EXPLORE</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Quick Touch Selector Chips for Mobile */}
          <div className="lg:hidden flex flex-wrap justify-center gap-1.5 px-2 -mt-4 mb-2">
            {serviceNodes.map((node, i) => (
              <button
                key={i}
                onClick={() => setSelectedServiceIndex(i)}
                className={`px-2.5 py-1 rounded-full text-[10px] font-mono transition-all cursor-pointer ${
                  selectedServiceIndex === i
                    ? 'bg-[#39FF14] text-black font-bold shadow-[0_0_10px_#39FF14]'
                    : 'bg-[#0D0D0D] border border-white/10 text-gray-300 hover:text-white'
                }`}
              >
                {node.shortTitle}
              </button>
            ))}
          </div>

          {/* RIGHT: Auto-Cycling Service Card (3-Second Smooth Left-Entrance & Fade Transition) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#0D0D0D]/95 border border-[#39FF14]/40 p-5 sm:p-8 backdrop-blur-xl shadow-[0_0_40px_rgba(57,255,20,0.15)] relative overflow-hidden min-h-[400px] sm:min-h-[460px] flex flex-col justify-between">
              
              {/* 3-Second Progress Countdown Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 overflow-hidden">
                <div
                  key={selectedServiceIndex}
                  className="h-full bg-[#39FF14] shadow-[0_0_10px_#39FF14]"
                  style={{
                    animation: 'autoProgress3s 3s linear forwards'
                  }}
                />
              </div>

              {/* Corner Counter */}
              <div className="flex items-center justify-between text-xs font-mono text-[#39FF14] pt-1 mb-2">
                <span>ORBIT // 0{selectedServiceIndex + 1} OF 0{serviceNodes.length}</span>
                <span className="text-[10px] text-gray-400">
                  [3S AUTO-ADVANCE]
                </span>
              </div>

              {/* Smooth Left-Entrance & Fade-Out Content Container via AnimatePresence */}
              <div className="flex-1 relative overflow-hidden py-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedServiceIndex}
                    initial={{ opacity: 0, x: -35, filter: 'blur(6px)' }}
                    animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, x: 25, filter: 'blur(6px)' }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-5"
                  >
                    {/* Service Header */}
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-xl bg-[#050505] border border-[#39FF14] flex items-center justify-center text-[#39FF14] shadow-[0_0_20px_rgba(57,255,20,0.3)] shrink-0">
                        {React.createElement(serviceNodes[selectedServiceIndex].icon, { className: 'w-6 h-6' })}
                      </div>
                      <div>
                        <span className="text-[10px] font-mono tracking-widest text-[#39FF14] uppercase block">
                          ACTIVE ARCHITECTURAL DISCIPLINE
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                          {activeService.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-300 font-light leading-relaxed">
                      {activeService.description}
                    </p>

                    {/* Feature Highlights Grid */}
                    <div className="space-y-2.5 pt-3 border-t border-white/10">
                      <span className="text-xs font-mono text-gray-400 block uppercase tracking-wider mb-2">
                        KEY DELIVERABLES & MODULES:
                      </span>
                      {activeService.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-200">
                          <CheckCircle2 className="w-4 h-4 text-[#39FF14] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Action Button & Carousel Indicator Dots */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10 mt-2">
                <button
                  onClick={() => onSelectService(activeService.title)}
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#39FF14] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#45ff24] shadow-[0_0_25px_rgba(57,255,20,0.4)] transition-all transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>Start With {activeService.title.split(' ')[0]}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Direct Dot Selector */}
                <div className="flex items-center gap-1.5">
                  {serviceNodes.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedServiceIndex(i)}
                      className={`h-2.5 rounded-full transition-all cursor-pointer ${
                        selectedServiceIndex === i
                          ? 'w-7 bg-[#39FF14] shadow-[0_0_8px_#39FF14]'
                          : 'w-2.5 bg-white/20 hover:bg-white/40'
                      }`}
                      aria-label={`Select service ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
