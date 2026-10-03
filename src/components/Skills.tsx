import React from 'react';
import { TechLogoMarquee } from './TechLogoMarquee';
import { Sparkles, ArrowRight } from 'lucide-react';
import { useCyberDoor } from '../context/CyberDoorContext';

export const Skills: React.FC = () => {
  const { currentTheme } = useCyberDoor();
  const { primary, rgb } = currentTheme;

  return (
    <div id="skills" className="relative bg-[#050505] overflow-hidden select-none">
      {/* Background Ambient Radial Glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full blur-[200px] pointer-events-none transition-colors duration-700"
        style={{ backgroundColor: `rgba(${rgb}, 0.08)` }}
      />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      {/* Primary Auto-Scroll Cyber Tech Marquee (Dual-Stream Anime Mecha) */}
      <TechLogoMarquee
        badge="TECH ARSENAL // PRODUCTION-GRADE FRAMEWORKS"
        title="Enterprise Tech Stacks & Specialized Competencies"
        subtitle="Our engineering team deploys battle-tested enterprise architectures. From multi-branch ERPNext implementations and custom billing engines to 3D interactive web portals, autonomous AI agents, and 24/7 cloud DevOps."
        showDualRow={true}
        className="pt-10 pb-16"
      />

      {/* Enterprise Consultation CTA Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 relative z-10">
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0A0A0A] via-[#0D0D0D] to-[#0A0A0A] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden group">
          {/* Mecha 4-Corner Accent Reticles */}
          <span
            className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 opacity-50 group-hover:opacity-100 transition-all pointer-events-none"
            style={{ borderColor: primary }}
          />
          <span
            className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 opacity-50 group-hover:opacity-100 transition-all pointer-events-none"
            style={{ borderColor: primary }}
          />
          <span
            className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 opacity-50 group-hover:opacity-100 transition-all pointer-events-none"
            style={{ borderColor: primary }}
          />
          <span
            className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 opacity-50 group-hover:opacity-100 transition-all pointer-events-none"
            style={{ borderColor: primary }}
          />

          <div className="space-y-1.5 text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-extrabold text-white flex items-center justify-center sm:justify-start gap-2">
              <Sparkles className="w-5 h-5" style={{ color: primary }} />
              <span>Need a Custom Enterprise Architecture?</span>
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 max-w-2xl">
              Our engineering team integrates Frappe, custom microservices, third-party payment gateways, and autonomous AI models into tailored workflows.
            </p>
          </div>

          <a
            href="/contact"
            className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 flex items-center gap-2 shrink-0 cursor-pointer shadow-lg hover:scale-105"
            style={{
              backgroundColor: primary,
              color: '#000000',
              boxShadow: `0 0 25px rgba(${rgb}, 0.45)`,
            }}
          >
            <span>Consult With Our Engineers</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};
