import React from 'react';
import { WORK_PROCESS } from '../data/portfolioData';

export const WorkProcess: React.FC = () => {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden border-t border-white/5">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-[#39FF14]/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D0D0D] border border-[#39FF14]/30 text-xs font-mono text-[#39FF14] mb-4">
            <span>METHODOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            How I Work
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mt-3">
            A transparent, 6-phase engineering lifecycle that guarantees predictable milestones, high technical standards, and zero surprises.
          </p>
        </div>

        {/* Desktop Horizontal Timeline (Visible on lg screens) */}
        <div className="hidden lg:block relative py-8">
          
          {/* Connecting Neon Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#39FF14]/20 via-[#39FF14] to-[#39FF14]/20 -translate-y-6 z-0"></div>

          <div className="grid grid-cols-6 gap-4 relative z-10">
            {WORK_PROCESS.map((item) => (
              <div key={item.step} className="flex flex-col items-center text-center group">
                
                {/* Step Circle Badge */}
                <div className="w-14 h-14 rounded-full bg-[#0D0D0D] border-2 border-[#39FF14] flex items-center justify-center font-mono font-bold text-lg text-[#39FF14] shadow-[0_0_20px_rgba(57,255,20,0.3)] group-hover:scale-110 group-hover:bg-[#39FF14] group-hover:text-black transition-all mb-6">
                  {item.step}
                </div>

                <div className="p-4 rounded-xl bg-[#0D0D0D]/90 border border-white/10 group-hover:border-[#39FF14]/50 transition-all space-y-2 w-full h-full flex flex-col justify-start">
                  <h3 className="text-base font-bold text-white group-hover:text-[#39FF14] transition-colors">
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
        <div className="lg:hidden relative space-y-8 pl-6 border-l-2 border-[#39FF14]/40">
          {WORK_PROCESS.map((item) => (
            <div key={item.step} className="relative group">
              
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[35px] top-1.5 w-6 h-6 rounded-full bg-[#050505] border-2 border-[#39FF14] flex items-center justify-center font-mono text-[10px] text-[#39FF14] font-bold shadow-[0_0_10px_rgba(57,255,20,0.5)]">
                {item.step}
              </div>

              <div className="p-6 rounded-xl bg-[#0D0D0D] border border-white/10 group-hover:border-[#39FF14]/50 transition-all space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-[#39FF14]">PHASE {item.step}</span>
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
