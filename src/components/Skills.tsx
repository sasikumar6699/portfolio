import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TECH_STACKS, 
  TECH_CATEGORIES 
} from '../data/techStackData';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { 
  Layers, 
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
  const { primary, secondary, rgb } = currentTheme;

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeSolutionsTab, setActiveSolutionsTab] = useState<number>(0);

  const filteredStacks = selectedCategory === 'all'
    ? TECH_STACKS
    : TECH_STACKS.filter(item => item.category === selectedCategory);

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* =========================================================================
            SECTION 1: HEADER & ANIMATED CYBER MARQUEE TICKER
            ========================================================================= */}
        <div>
          <div className="max-w-3xl mb-10">
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

          {/* Infinite Horizontal Cyber Logo Marquee */}
          <div className="relative overflow-hidden py-4 rounded-2xl bg-[#0A0A0A]/90 border border-white/10 backdrop-blur-md shadow-2xl">
            {/* Edge Blur Gradients */}
            <div className="absolute top-0 left-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

            <div className="flex gap-4 sm:gap-6 animate-marquee whitespace-nowrap will-change-transform">
              {[...TECH_STACKS, ...TECH_STACKS].map((tech, idx) => (
                <div
                  key={`${tech.id}-${idx}`}
                  className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[#050505] border border-white/10 hover:border-white/30 transition-all group shrink-0 cursor-default"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = primary;
                    e.currentTarget.style.boxShadow = `0 0 15px rgba(${rgb}, 0.25)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div className="w-6 h-6 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    {tech.icon({ className: 'w-5 h-5' })}
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-gray-200 group-hover:text-white transition-colors">
                    {tech.name}
                  </span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-gray-400">
                    {tech.categoryLabel}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =========================================================================
            SECTION 2: INTERACTIVE TECH STACK LOGOS & ARCHITECTURE GRID
            ========================================================================= */}
        <div className="space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5" style={{ color: primary }} />
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  Production Technology Matrix
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-gray-400 font-mono mt-1">
                FILTER BY DOMAIN // {filteredStacks.length} ACTIVE FRAMEWORKS DEPLOYED
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {TECH_CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className="px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all duration-200 border cursor-pointer"
                    style={{
                      backgroundColor: isActive ? primary : '#0D0D0D',
                      color: isActive ? '#000000' : '#9CA3AF',
                      borderColor: isActive ? primary : 'rgba(255, 255, 255, 0.12)',
                      boxShadow: isActive ? `0 0 16px rgba(${rgb}, 0.4)` : 'none',
                    }}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* The Tech Stack Cards Grid with Official SVG Logos */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            <AnimatePresence>
              {filteredStacks.map((tech) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.92, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92, y: 15 }}
                  transition={{ duration: 0.25 }}
                  key={tech.id}
                  className="relative p-5 rounded-2xl bg-[#0D0D0D] border border-white/10 transition-all duration-300 group flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-2xl"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = primary;
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = `0 12px 30px rgba(0, 0, 0, 0.8), 0 0 20px rgba(${rgb}, 0.25)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {/* Subtle Mecha HUD Reticle Corners */}
                  <span
                    className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l opacity-40 group-hover:opacity-100 transition-all"
                    style={{ borderColor: primary }}
                  />
                  <span
                    className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r opacity-40 group-hover:opacity-100 transition-all"
                    style={{ borderColor: primary }}
                  />
                  
                  {/* Top: Logo, Name, Badge */}
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-4">
                      {/* Logo Container Tile */}
                      <div 
                        className="w-12 h-12 rounded-xl bg-[#050505] border border-white/10 flex items-center justify-center p-2.5 group-hover:scale-110 transition-transform duration-300 shrink-0 shadow-md"
                        style={{
                          boxShadow: `0 0 15px ${tech.color}25`,
                          borderColor: `${tech.color}40`,
                        }}
                      >
                        {tech.icon({ className: 'w-full h-full' })}
                      </div>

                      <span
                        className="px-2 py-0.5 rounded border text-[10px] font-mono font-bold tracking-wider uppercase shrink-0"
                        style={{
                          backgroundColor: `rgba(${rgb}, 0.08)`,
                          borderColor: `rgba(${rgb}, 0.25)`,
                          color: primary,
                        }}
                      >
                        {tech.badge}
                      </span>
                    </div>

                    <div className="mb-2">
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-white transition-colors flex items-center gap-1.5">
                        <span>{tech.name}</span>
                      </h3>
                      <p className="text-xs font-mono font-medium text-gray-400 group-hover:text-gray-300">
                        {tech.role}
                      </p>
                    </div>

                    <p className="text-xs text-gray-400 group-hover:text-gray-300 leading-relaxed font-light mb-4">
                      {tech.description}
                    </p>
                  </div>

                  {/* Bottom: Domain Tag & Live Signal */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-gray-400">
                      {tech.categoryLabel}
                    </span>
                    <span className="flex items-center gap-1.5 font-bold" style={{ color: primary }}>
                      <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: primary }} />
                      DEPLOYED
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* =========================================================================
            SECTION 3: ENTERPRISE BUSINESS CAPABILITIES BREAKDOWN
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
          <div className="bg-[#0D0D0D] rounded-2xl border border-white/10 p-6 sm:p-8 shadow-xl">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
              <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2.5">
                {getSolutionsCategoryIcon(activeSolutionsTab)}
                <span>{SKILL_CATEGORIES[activeSolutionsTab].title}</span>
              </h3>
              <span className="text-xs font-mono font-bold" style={{ color: primary }}>
                {SKILL_CATEGORIES[activeSolutionsTab].skills.length} COMMERCIAL MODULES
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SKILL_CATEGORIES[activeSolutionsTab].skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#050505] border border-white/10 transition-all group flex flex-col justify-between"
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
                    <span className="text-sm sm:text-base font-bold text-white group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                    <CheckCircle2
                      className="w-4 h-4 shrink-0 transition-all group-hover:scale-110"
                      style={{ color: primary }}
                    />
                  </div>
                  <span className="text-xs font-mono text-gray-400 group-hover:text-gray-300">
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
