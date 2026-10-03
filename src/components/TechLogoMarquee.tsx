import React from 'react';
import { TECH_STACKS } from '../data/techStackData';
import { useCyberDoor } from '../context/CyberDoorContext';
import { Cpu } from 'lucide-react';

interface TechLogoMarqueeProps {
  title?: string;
  subtitle?: string;
  badge?: string;
  showDualRow?: boolean;
  className?: string;
}

export const TechLogoMarquee: React.FC<TechLogoMarqueeProps> = ({
  title = "Enterprise Tech Stacks & Modern Frameworks",
  subtitle = "Production-tested technologies deployed across high-concurrency ERP implementations, autonomous AI agents, and 3D web systems.",
  badge = "TECH ARSENAL // PRODUCTION-GRADE FRAMEWORKS",
  showDualRow = true,
  className = "",
}) => {
  const { currentTheme } = useCyberDoor();
  const { primary, rgb } = currentTheme;

  // Split tech stacks into two balanced rows for the dual-speed anime cyber marquee
  const halfLength = Math.ceil(TECH_STACKS.length / 2);
  const row1 = TECH_STACKS.slice(0, halfLength);
  const row2 = TECH_STACKS.slice(halfLength);

  return (
    <section className={`relative overflow-hidden py-14 sm:py-18 bg-[#050505] border-y border-white/5 select-none ${className}`}>
      {/* Background Ambient Radial Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full blur-[160px] pointer-events-none transition-colors duration-700"
        style={{ backgroundColor: `rgba(${rgb}, 0.08)` }}
      />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          {badge && (
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D0D0D] border text-xs font-mono mb-4 transition-colors shadow-sm"
              style={{
                borderColor: `rgba(${rgb}, 0.4)`,
                color: primary,
                boxShadow: `0 0 15px rgba(${rgb}, 0.15)`,
              }}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>{badge}</span>
            </div>
          )}

          {title && (
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {title.includes('&') ? (
                <>
                  {title.split('&')[0]} &{' '}
                  <span
                    className="inline-block"
                    style={{
                      color: primary,
                      textShadow: `0 0 25px rgba(${rgb}, 0.45)`,
                    }}
                  >
                    {title.split('&')[1]}
                  </span>
                </>
              ) : (
                <span>{title}</span>
              )}
            </h2>
          )}

          {subtitle && (
            <p className="text-gray-300 text-xs sm:text-sm lg:text-base mt-3 leading-relaxed font-light max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* =========================================================================
            ANIME MECHA AUTO-SCROLL CYBER MARQUEE CONTAINER
            ========================================================================= */}
        <div className="relative overflow-hidden py-6 sm:py-8 rounded-2xl bg-[#0A0A0A]/95 border border-white/10 backdrop-blur-xl shadow-2xl group/ticker">
          
          {/* Top & Bottom Glowing Laser Track Lines */}
          <div
            className="absolute top-0 left-0 right-0 h-[1.5px] opacity-75 transition-all duration-500 group-hover/ticker:opacity-100"
            style={{
              background: `linear-gradient(90deg, transparent, ${primary}, transparent)`,
              boxShadow: `0 0 12px ${primary}`,
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-[1.5px] opacity-75 transition-all duration-500 group-hover/ticker:opacity-100"
            style={{
              background: `linear-gradient(90deg, transparent, ${primary}, transparent)`,
              boxShadow: `0 0 12px ${primary}`,
            }}
          />

          {/* Anime Mecha 4-Corner Target Reticles on Marquee Frame */}
          <span
            className="absolute top-1.5 left-1.5 w-3.5 h-3.5 border-t-2 border-l-2 opacity-60 group-hover/ticker:opacity-100 transition-all pointer-events-none"
            style={{ borderColor: primary }}
          />
          <span
            className="absolute top-1.5 right-1.5 w-3.5 h-3.5 border-t-2 border-r-2 opacity-60 group-hover/ticker:opacity-100 transition-all pointer-events-none"
            style={{ borderColor: primary }}
          />
          <span
            className="absolute bottom-1.5 left-1.5 w-3.5 h-3.5 border-b-2 border-l-2 opacity-60 group-hover/ticker:opacity-100 transition-all pointer-events-none"
            style={{ borderColor: primary }}
          />
          <span
            className="absolute bottom-1.5 right-1.5 w-3.5 h-3.5 border-b-2 border-r-2 opacity-60 group-hover/ticker:opacity-100 transition-all pointer-events-none"
            style={{ borderColor: primary }}
          />

          {/* Edge Blur Gradients */}
          <div className="absolute top-0 left-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

          <div className="space-y-4">
            {/* ROW 1: Auto-Scroll Left */}
            <div className="flex gap-4 sm:gap-6 animate-marquee whitespace-nowrap will-change-transform py-1">
              {[...(showDualRow ? row1 : TECH_STACKS), ...(showDualRow ? row1 : TECH_STACKS), ...(showDualRow ? row1 : TECH_STACKS)].map((tech, idx) => (
                <div
                  key={`r1-${tech.id}-${idx}`}
                  className="tech-tile relative inline-flex items-center gap-3.5 px-4 sm:px-5 py-3 rounded-xl bg-[#050505] border border-white/10 hover:border-white/30 transition-all duration-300 group shrink-0 cursor-default shadow-md overflow-hidden"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = primary;
                    e.currentTarget.style.boxShadow = `0 0 20px rgba(${rgb}, 0.35)`;
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {/* Top projector accent line */}
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-b group-hover:w-16 transition-all duration-300 pointer-events-none"
                    style={{
                      backgroundColor: primary,
                      boxShadow: `0 0 8px ${primary}`,
                    }}
                  />

                  {/* Tech Brand Icon */}
                  <div 
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#0D0D0D] border border-white/10 flex items-center justify-center p-1.5 group-hover:scale-110 group-hover:rotate-2 transition-all duration-300 shrink-0"
                    style={{
                      boxShadow: `0 0 12px ${tech.color}30`,
                      borderColor: `${tech.color}45`,
                    }}
                  >
                    {tech.icon({ className: 'w-full h-full' })}
                  </div>

                  {/* Tech Name & Category Role */}
                  <div className="flex flex-col text-left">
                    <span className="text-xs sm:text-sm font-bold text-gray-200 group-hover:text-white transition-colors">
                      {tech.name}
                    </span>
                    <span className="text-[10px] font-mono text-gray-400 group-hover:text-gray-300">
                      {tech.categoryLabel}
                    </span>
                  </div>

                  {/* Pulsing Status Beacon */}
                  <span
                    className="w-1.5 h-1.5 rounded-full ml-1"
                    style={{
                      backgroundColor: primary,
                      boxShadow: `0 0 6px ${primary}`,
                    }}
                  />
                </div>
              ))}
            </div>

            {/* ROW 2: Auto-Scroll Right (Reverse Marquee) if showDualRow is true */}
            {showDualRow && (
              <div className="flex gap-4 sm:gap-6 animate-marquee-reverse whitespace-nowrap will-change-transform py-1">
                {[...row2, ...row2, ...row2].map((tech, idx) => (
                  <div
                    key={`r2-${tech.id}-${idx}`}
                    className="tech-tile relative inline-flex items-center gap-3.5 px-4 sm:px-5 py-3 rounded-xl bg-[#050505] border border-white/10 hover:border-white/30 transition-all duration-300 group shrink-0 cursor-default shadow-md overflow-hidden"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = primary;
                      e.currentTarget.style.boxShadow = `0 0 20px rgba(${rgb}, 0.35)`;
                      e.currentTarget.style.transform = 'translateY(-3px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    {/* Top projector accent line */}
                    <div
                      className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-b group-hover:w-16 transition-all duration-300 pointer-events-none"
                      style={{
                        backgroundColor: primary,
                        boxShadow: `0 0 8px ${primary}`,
                      }}
                    />

                    {/* Tech Brand Icon */}
                    <div 
                      className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#0D0D0D] border border-white/10 flex items-center justify-center p-1.5 group-hover:scale-110 group-hover:rotate-2 transition-all duration-300 shrink-0"
                      style={{
                        boxShadow: `0 0 12px ${tech.color}30`,
                        borderColor: `${tech.color}45`,
                      }}
                    >
                      {tech.icon({ className: 'w-full h-full' })}
                    </div>

                    {/* Tech Name & Category Role */}
                    <div className="flex flex-col text-left">
                      <span className="text-xs sm:text-sm font-bold text-gray-200 group-hover:text-white transition-colors">
                        {tech.name}
                      </span>
                      <span className="text-[10px] font-mono text-gray-400 group-hover:text-gray-300">
                        {tech.categoryLabel}
                      </span>
                    </div>

                    {/* Pulsing Status Beacon */}
                    <span
                      className="w-1.5 h-1.5 rounded-full ml-1"
                      style={{
                        backgroundColor: primary,
                        boxShadow: `0 0 6px ${primary}`,
                      }}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
