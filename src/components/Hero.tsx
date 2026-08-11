import React from 'react';
import { ArrowRight, Download, Eye, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { HeroCanvas } from './HeroCanvas';

interface HeroProps {
  onOpenContact: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onOpenResume }) => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[#050505] overflow-hidden">
      {/* Background Neon Ambient Glow Spotlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#39FF14]/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-10 right-0 w-[400px] h-[400px] bg-[#39FF14]/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column Content */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Small Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0D0D0D] border border-[#39FF14]/40 shadow-[0_0_15px_rgba(57,255,20,0.15)] text-xs sm:text-sm font-mono text-[#39FF14]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#39FF14] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#39FF14]"></span>
              </span>
              <span className="tracking-wide uppercase font-semibold">AVAILABLE FOR FREELANCE PROJECTS</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Building{' '}
              <span className="text-[#39FF14] inline-block neon-glow-text underline decoration-[#39FF14]/40 underline-offset-8">
                Digital Solutions
              </span>{' '}
              That Drive Business Growth.
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed">
              I help businesses transform ideas into scalable software, ERP systems, websites, automation solutions, and AI-powered applications.
            </p>

            {/* CTA Buttons & Resume Link */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#39FF14] text-black font-bold text-base hover:bg-[#45ff24] shadow-[0_0_30px_rgba(57,255,20,0.5)] hover:shadow-[0_0_45px_rgba(57,255,20,0.8)] transition-all transform hover:-translate-y-1 active:translate-y-0"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#0D0D0D] text-white border border-white/15 hover:border-[#39FF14]/50 hover:text-[#39FF14] font-semibold text-base transition-all transform hover:-translate-y-1"
              >
                <Eye className="w-5 h-5" />
                <span>View Our Work</span>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 py-3 px-4 text-sm font-mono text-gray-400 hover:text-[#39FF14] transition-colors group underline underline-offset-4 decoration-gray-600 hover:decoration-[#39FF14]"
              >
                <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform text-[#39FF14]" />
                <span>Download Our Portfolio</span>
              </button>
            </div>

            {/* Developer Trust Note */}
            <div className="pt-4 flex items-center gap-3 text-xs font-mono text-gray-400 border-t border-white/5">
              <Terminal className="w-4 h-4 text-[#39FF14]" />
              <span>Tailored Business Architecture • End-to-End Delivery • Global Availability</span>
            </div>

          </div>

          {/* Right Column Visual */}
          <div className="lg:col-span-5 w-full">
            <HeroCanvas />
          </div>

        </div>

        {/* Small Statistics Counter Section */}
        <div className="mt-20 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#0D0D0D]/90 border border-white/10 hover:border-[#39FF14]/40 transition-all duration-300 group hover:shadow-[0_0_25px_rgba(57,255,20,0.15)]"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-mono text-white group-hover:text-[#39FF14] transition-colors flex items-center">
                <span>{stat.value}</span>
                <span className="text-[#39FF14] ml-1">{stat.suffix}</span>
              </div>
              <div className="mt-2 text-xs sm:text-sm font-medium text-gray-400 group-hover:text-gray-200 transition-colors">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
