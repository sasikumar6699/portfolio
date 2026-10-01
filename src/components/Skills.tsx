import React, { useState } from 'react';
import { TECH_STACKS } from '../data/techStackData';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { 
  Cpu, 
  ShieldCheck, 
  Sparkles, 
  Terminal, 
  Database,
  Code2,
  Server,
  Bot,
  Briefcase,
  CheckCircle2
} from 'lucide-react';
import { useCyberDoor } from '../context/CyberDoorContext';

export const Skills: React.FC = () => {
  const { currentTheme } = useCyberDoor();
  const { primary, rgb } = currentTheme;

  const [activeSolutionsTab, setActiveSolutionsTab] = useState<number>(0);

  const getSolutionsCategoryIcon = (index: number) => {
    const iconClass = "w-4 h-4";
    switch (index) {
      case 0: return <Database className={iconClass} style={{ color: primary }} />;
      case 1: return <Terminal className={iconClass} style={{ color: primary }} />;
      case 2: return <Code2 className={iconClass} style={{ color: primary }} />;
      case 3: return <Bot className={iconClass} style={{ color: primary }} />;
      case 4: return <Briefcase className={iconClass} style={{ color: primary }} />;
      default: return <Server className={iconClass} style={{ color: primary }} />;
    }
  };

  return (
    <section id="skills" className="py-20 sm:py-24 bg-[#050505] relative overflow-hidden border-t border-white/5 select-none">
      {/* Background Ambient Glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[200px] pointer-events-none transition-colors duration-700"
        style={{ backgroundColor: `rgba(${rgb}, 0.07)` }}
      />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* =========================================================================
            HEADER & ANIMATED CYBER LOGO AUTO-SCROLL
            ========================================================================= */}
        <div>
          <div className="max-w-3xl mb-8">
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D0D0D] border text-xs font-mono mb-4 transition-colors"
              style={{
                borderColor: `rgba(${rgb}, 0.4)`,
                color: primary,
                boxShadow: `0 0 15px rgba(${rgb}, 0.15)`,
              }}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>TECH ARSENAL // PRODUCTION-GRADE FRAMEWORKS</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Enterprise Tech Stacks &{' '}
              <span
                className="inline-block"
                style={{
                  color: primary,
                  textShadow: `0 0 25px rgba(${rgb}, 0.45)`,
                }}
              >
                Specialized Competencies
              </span>
            </h1>
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg mt-4 leading-relaxed font-light">
              Our engineering team deploys battle-tested enterprise architectures. From multi-branch ERPNext implementations and custom billing engines to 3D interactive web portals, autonomous AI agents, and 24/7 cloud DevOps.
            </p>
          </div>

          {/* =========================================================================
              ANIME MECHA AUTO-SCROLL CYBER MARQUEE (SLOW & SMOOTH)
              ========================================================================= */}
          <div className="relative overflow-hidden py-6 rounded-2xl bg-[#0A0A0A]/95 border border-white/10 backdrop-blur-xl shadow-2xl group/ticker">
            
            {/* Top & Bottom Glowing Laser Track Lines */}
            <div
              className="absolute top-0 left-0 right-0 h-[1.5px] opacity-70 transition-all duration-500 group-hover/ticker:opacity-100"
              style={{
                background: `linear-gradient(90deg, transparent, ${primary}, transparent)`,
                boxShadow: `0 0 10px ${primary}`,
              }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 h-[1.5px] opacity-70 transition-all duration-500 group-hover/ticker:opacity-100"
              style={{
                background: `linear-gradient(90deg, transparent, ${primary}, transparent)`,
                boxShadow: `0 0 10px ${primary}`,
              }}
            />

            {/* Anime Mecha 4-Corner Target Reticles on Marquee Frame */}
            <span
              className="absolute top-1.5 left-1.5 w-3 h-3 border-t-2 border-l-2 opacity-50 group-hover/ticker:opacity-100 transition-all pointer-events-none"
              style={{ borderColor: primary }}
            />
            <span
              className="absolute top-1.5 right-1.5 w-3 h-3 border-t-2 border-r-2 opacity-50 group-hover/ticker:opacity-100 transition-all pointer-events-none"
              style={{ borderColor: primary }}
            />
            <span
              className="absolute bottom-1.5 left-1.5 w-3 h-3 border-b-2 border-l-2 opacity-50 group-hover/ticker:opacity-100 transition-all pointer-events-none"
              style={{ borderColor: primary }}
            />
            <span
              className="absolute bottom-1.5 right-1.5 w-3 h-3 border-b-2 border-r-2 opacity-50 group-hover/ticker:opacity-100 transition-all pointer-events-none"
              style={{ borderColor: primary }}
            />

            {/* Edge Blur Gradients */}
            <div className="absolute top-0 left-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

            {/* Continuous Marquee Ribbon */}
            <div className="flex gap-4 sm:gap-6 animate-marquee whitespace-nowrap will-change-transform py-1">
              {[...TECH_STACKS, ...TECH_STACKS].map((tech, idx) => (
                <div
                  key={`${tech.id}-${idx}`}
                  className="relative inline-flex items-center gap-3.5 px-4 sm:px-5 py-3 rounded-xl bg-[#050505] border border-white/10 hover:border-white/30 transition-all duration-300 group shrink-0 cursor-default shadow-md overflow-hidden"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = primary;
                    e.currentTarget.style.boxShadow = `0 0 20px rgba(${rgb}, 0.35)`;
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {/* Top projector accent */}
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-b group-hover:w-16 transition-all duration-300 pointer-events-none"
                    style={{
                      backgroundColor: primary,
                      boxShadow: `0 0 8px ${primary}`,
                    }}
                  />

                  {/* Logo Container Tile */}
                  <div 
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#0D0D0D] border border-white/10 flex items-center justify-center p-1.5 group-hover:scale-110 group-hover:rotate-2 transition-all duration-300 shrink-0"
                    style={{
                      boxShadow: `0 0 12px ${tech.color}30`,
                      borderColor: `${tech.color}45`,
                    }}
                  >
                    {tech.icon({ className: 'w-full h-full' })}
                  </div>

                  {/* Tech Name & Role */}
                  <div className="flex flex-col text-left">
                    <span className="text-xs sm:text-sm font-bold text-gray-200 group-hover:text-white transition-colors">
                      {tech.name}
                    </span>
                    <span className="text-[10px] font-mono text-gray-400 group-hover:text-gray-300">
                      {tech.categoryLabel}
                    </span>
                  </div>

                  {/* Status Indicator */}
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
          </div>
        </div>

        {/* =========================================================================
            ENTERPRISE BUSINESS CAPABILITIES BREAKDOWN
            ========================================================================= */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5" style={{ color: primary }} />
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  Enterprise Solutions & Functional Competencies
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-gray-400 font-mono mt-1">
                SPECIALIZED COMMERCIAL MODULES ENGINEERED BY TECHYORA
              </p>
            </div>
          </div>

          {/* Solutions Category Tabs */}
          <div className="flex flex-wrap gap-2.5">
            {SKILL_CATEGORIES.map((category, idx) => {
              const isActive = activeSolutionsTab === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveSolutionsTab(idx)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border cursor-pointer"
                  style={{
                    backgroundColor: isActive ? primary : '#0D0D0D',
                    color: isActive ? '#000000' : '#D1D5DB',
                    borderColor: isActive ? primary : 'rgba(255, 255, 255, 0.12)',
                    boxShadow: isActive ? `0 0 18px rgba(${rgb}, 0.35)` : 'none',
                  }}
                >
                  {getSolutionsCategoryIcon(idx)}
                  <span>{category.title}</span>
                </button>
              );
            })}
          </div>

          {/* Detailed Deliverables Matrix for Selected Solution */}
          <div className="relative bg-[#0D0D0D] rounded-2xl border border-white/10 p-6 sm:p-8 shadow-xl overflow-hidden group">
            {/* Anime Mecha Corner Brackets */}
            <span
              className="absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 transition-all duration-300 pointer-events-none"
              style={{ borderColor: primary }}
            />
            <span
              className="absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 transition-all duration-300 pointer-events-none"
              style={{ borderColor: primary }}
            />
            <span
              className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 transition-all duration-300 pointer-events-none"
              style={{ borderColor: primary }}
            />
            <span
              className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 transition-all duration-300 pointer-events-none"
              style={{ borderColor: primary }}
            />

            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10 relative z-10">
              <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2.5">
                {getSolutionsCategoryIcon(activeSolutionsTab)}
                <span>{SKILL_CATEGORIES[activeSolutionsTab].title}</span>
              </h3>
              <span className="text-xs font-mono font-bold" style={{ color: primary }}>
                {SKILL_CATEGORIES[activeSolutionsTab].skills.length} COMMERCIAL MODULES
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
              {SKILL_CATEGORIES[activeSolutionsTab].skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#050505] border border-white/10 transition-all group/item flex flex-col justify-between"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = primary;
                    e.currentTarget.style.boxShadow = `0 0 15px rgba(${rgb}, 0.2)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm sm:text-base font-bold text-white group-hover/item:text-white transition-colors">
                      {skill.name}
                    </span>
                    <CheckCircle2
                      className="w-4 h-4 shrink-0 transition-all group-hover/item:scale-110"
                      style={{ color: primary }}
                    />
                  </div>
                  <span className="text-xs font-mono text-gray-400 group-hover/item:text-gray-300">
                    {skill.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Assurance Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0A0A0A] via-[#0D0D0D] to-[#0A0A0A] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-extrabold text-white flex items-center justify-center sm:justify-start gap-2">
              <Sparkles className="w-5 h-5" style={{ color: primary }} />
              <span>Need a Custom Enterprise Architecture?</span>
            </h3>
            <p className="text-xs sm:text-sm text-gray-400">
              Our engineering team integrates Frappe, custom microservices, third-party APIs, and AI models into tailored workflows.
            </p>
          </div>

          <a
            href="/contact"
            className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 flex items-center gap-2 shrink-0 cursor-pointer"
            style={{
              backgroundColor: primary,
              color: '#000000',
              boxShadow: `0 0 25px rgba(${rgb}, 0.45)`,
            }}
          >
            <span>Consult With Our Engineers</span>
          </a>
        </div>

      </div>
    </section>
  );
};
