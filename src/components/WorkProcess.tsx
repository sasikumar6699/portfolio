import React from 'react';
import { WORK_PROCESS } from '../data/portfolioData';
import { useCyberDoor } from '../context/CyberDoorContext';

export const WorkProcess: React.FC = () => {
  const { currentTheme } = useCyberDoor();
  const { primary, secondary, rgb } = currentTheme;

  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden border-t border-white/5">
      {/* Background Accent Glow */}
      <div
        className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full blur-[140px] pointer-events-none transition-colors duration-700"
        style={{ backgroundColor: `rgba(${rgb}, 0.08)` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D0D0D] border text-xs font-mono mb-4 transition-colors"
            style={{
              borderColor: `rgba(${rgb}, 0.35)`,
              color: secondary,
            }}
          >
            <span>METHODOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            How We Work
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mt-3">
            A transparent, 6-phase engineering lifecycle that guarantees predictable milestones, high technical standards, and zero surprises.
          </p>
        </div>

        {/* Desktop Horizontal Timeline (Visible on lg screens) */}
        <div className="hidden lg:block relative py-8">
          
          {/* Connecting Neon Line */}
          <div
            className="absolute top-1/2 left-0 right-0 h-0.5 -translate-y-6 z-0"
            style={{
              background: `linear-gradient(to right, rgba(${rgb}, 0.2), ${primary}, rgba(${rgb}, 0.2))`,
            }}
          />

          <div className="grid grid-cols-6 gap-4 relative z-10">
            {WORK_PROCESS.map((item) => (
              <div key={item.step} className="flex flex-col items-center text-center group">
                
                {/* Step Circle Badge */}
                <div
                  className="w-14 h-14 rounded-full bg-[#0D0D0D] border-2 flex items-center justify-center font-mono font-bold text-lg group-hover:scale-110 transition-all mb-6"
                  style={{
                    borderColor: primary,
                    color: primary,
                    boxShadow: `0 0 20px rgba(${rgb}, 0.3)`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = primary;
                    e.currentTarget.style.color = '#000000';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#0D0D0D';
                    e.currentTarget.style.color = primary;
                  }}
                >
                  {item.step}
                </div>

                <div
                  className="p-4 rounded-xl bg-[#0D0D0D]/90 border border-white/10 transition-all space-y-2 w-full h-full flex flex-col justify-start"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = primary;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  }}
                >
                  <h3 className="text-base font-bold text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Mobile & Tablet Vertical Timeline (Visible on mobile/tablet screens) */}
        <div
          className="lg:hidden relative space-y-8 pl-6 border-l-2"
          style={{ borderColor: `rgba(${rgb}, 0.4)` }}
        >
          {WORK_PROCESS.map((item) => (
            <div key={item.step} className="relative group">
              
              {/* Timeline Indicator Dot */}
              <div
                className="absolute -left-[35px] top-1.5 w-6 h-6 rounded-full bg-[#050505] border-2 flex items-center justify-center font-mono text-[10px] font-bold"
                style={{
                  borderColor: primary,
                  color: primary,
                  boxShadow: `0 0 10px rgba(${rgb}, 0.5)`,
                }}
              >
                {item.step}
              </div>

              <div
                className="p-6 rounded-xl bg-[#0D0D0D] border border-white/10 transition-all space-y-2"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = primary;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono" style={{ color: primary }}>PHASE {item.step}</span>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
