import React from 'react';
import { ArrowRight, Download, Eye, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { HeroCanvas } from './HeroCanvas';
import { useCyberDoor } from '../context/CyberDoorContext';

interface HeroProps {
  onOpenContact: (serviceTitle?: string) => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onOpenResume }) => {
  const { currentTheme } = useCyberDoor();
  const { primary, rgb } = currentTheme;

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-[#050505] overflow-hidden">
      {/* Background Neon Ambient Glow Spotlights */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none transition-colors duration-700"
        style={{ backgroundColor: `rgba(${rgb}, 0.08)` }}
      />
      <div
        className="absolute top-10 right-0 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none transition-colors duration-700"
        style={{ backgroundColor: `rgba(${rgb}, 0.06)` }}
      />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column Content */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Small Availability Badge */}
            <div
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0D0D0D] border text-xs sm:text-sm font-mono transition-all"
              style={{
                borderColor: `rgba(${rgb}, 0.4)`,
                color: primary,
                boxShadow: `0 0 15px rgba(${rgb}, 0.15)`,
              }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                  style={{ backgroundColor: primary }}
                />
                <span
                  className="relative inline-flex rounded-full h-2.5 w-2.5"
                  style={{ backgroundColor: primary }}
                />
              </span>
              <span className="tracking-wide uppercase font-semibold">ENTERPRISE SOFTWARE & SOLUTIONS COMPANY</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Building{' '}
              <span
                className="inline-block underline underline-offset-8 transition-colors duration-300"
                style={{
                  color: primary,
                  textDecorationColor: `rgba(${rgb}, 0.4)`,
                  textShadow: `0 0 20px rgba(${rgb}, 0.4)`,
                }}
              >
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
                onClick={() => onOpenContact()}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-black font-bold text-base transition-all transform hover:-translate-y-1 active:translate-y-0"
                style={{
                  backgroundColor: primary,
                  boxShadow: `0 0 30px rgba(${rgb}, 0.5)`,
                }}
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#0D0D0D] text-white border border-white/15 font-semibold text-base transition-all transform hover:-translate-y-1 group"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `rgba(${rgb}, 0.5)`;
                  e.currentTarget.style.color = primary;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                  e.currentTarget.style.color = '#ffffff';
                }}
              >
                <Eye className="w-5 h-5" />
                <span>Explore Our Services</span>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 py-3 px-4 text-sm font-mono text-gray-400 hover:text-white transition-colors group underline underline-offset-4 decoration-gray-600"
                style={{
                  color: primary,
                }}
              >
                <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" style={{ color: primary }} />
                <span>Download Our Portfolio</span>
              </button>
            </div>

            {/* Developer Trust Note */}
            <div className="pt-4 flex items-center gap-3 text-xs font-mono text-gray-400 border-t border-white/5">
              <Terminal className="w-4 h-4" style={{ color: primary }} />
              <span>Tailored Business Architecture • End-to-End Delivery • Global Availability</span>
            </div>

          </div>

          {/* Right Column Visual */}
          <div className="lg:col-span-6 w-full">
            <HeroCanvas onSelectService={onOpenContact} />
          </div>

        </div>

        {/* Statistics Counter Section */}
        <div className="mt-20 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#0D0D0D]/90 border border-white/10 transition-all duration-300 group"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `rgba(${rgb}, 0.45)`;
                e.currentTarget.style.boxShadow = `0 0 25px rgba(${rgb}, 0.18)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-mono text-white transition-colors flex items-center">
                <span>{stat.value}</span>
                <span className="ml-1" style={{ color: primary }}>{stat.suffix}</span>
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
