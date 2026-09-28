import React from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import { Quote, Star, AlertCircle, ShieldCheck, Activity } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#050505] relative overflow-hidden border-t border-white/5 select-none">
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#39FF14]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0D0D0D] border border-[#39FF14]/40 text-xs font-mono text-[#39FF14] mb-4 shadow-[0_0_15px_rgba(57,255,20,0.15)]">
            <Activity className="w-3.5 h-3.5 animate-pulse" />
            <span>NEURAL REVIEWS // MECHA HUD TARGETING ARCHIVE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            What Clients{' '}
            <span className="text-[#39FF14] inline-block neon-glow-text">
              Say
            </span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-2 font-light max-w-2xl">
            Verified transmissions and project outcomes from founders, enterprise directors, and operations managers worldwide.
          </p>
        </div>

        {/* Testimonials Grid with Anime Mecha HUD Reticles & Neural Audio Equalizer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={item.id}
              className="relative bg-[#0D0D0D] rounded-2xl border border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-[#39FF14] hover:shadow-[0_0_35px_rgba(57,255,20,0.22)] transition-all duration-300 group overflow-hidden"
            >
              {/* =========================================================================
                  ANIME EFFECT 1: MECHA HUD TARGET LOCK RETICLE CORNERS (┌ ┐ └ ┘)
                  ========================================================================= */}
              <span className="absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-[#39FF14]/40 group-hover:border-[#39FF14] group-hover:scale-125 transition-all duration-300 pointer-events-none" />
              <span className="absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-[#39FF14]/40 group-hover:border-[#39FF14] group-hover:scale-125 transition-all duration-300 pointer-events-none" />
              <span className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-[#39FF14]/40 group-hover:border-[#39FF14] group-hover:scale-125 transition-all duration-300 pointer-events-none" />
              <span className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-[#39FF14]/40 group-hover:border-[#39FF14] group-hover:scale-125 transition-all duration-300 pointer-events-none" />

              {/* =========================================================================
                  ANIME EFFECT 2: HOLOGRAM SCANNER LIGHT CONE (TOP PROJECTOR NODULE)
                  ========================================================================= */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#39FF14] rounded-b shadow-[0_0_12px_#39FF14] group-hover:w-28 transition-all duration-500" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-28 bg-gradient-to-b from-[#39FF14]/15 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

              <div className="space-y-5 relative z-10">
                
                {/* Header: Quote Icon, Star Rating, and Neural Audio Equalizer Waveform */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#050505] border border-[#39FF14]/40 flex items-center justify-center text-[#39FF14] group-hover:shadow-[0_0_15px_#39FF14] transition-all">
                      <Quote className="w-4 h-4" />
                    </div>
                    
                    {/* Star Rating */}
                    <div className="flex items-center gap-1 text-[#39FF14]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-[#39FF14]" />
                      ))}
                    </div>
                  </div>

                  {/* =========================================================================
                      ANIME EFFECT 3: DYNAMIC NEURAL AUDIO EQUALIZER BARS
                      ========================================================================= */}
                  <div className="flex items-end gap-1 h-5 px-2 py-1 rounded bg-[#050505] border border-white/10 text-[#39FF14]" title="Neural Voice Comms Active">
                    <span className="w-1 bg-[#39FF14] rounded-full animate-equalizer-1" />
                    <span className="w-1 bg-[#39FF14] rounded-full animate-equalizer-2" />
                    <span className="w-1 bg-[#39FF14] rounded-full animate-equalizer-3" />
                    <span className="w-1 bg-[#39FF14] rounded-full animate-equalizer-4" />
                    <span className="w-1 bg-[#39FF14] rounded-full animate-equalizer-5" />
                  </div>
                </div>

                {/* Telemetry Index */}
                <div className="flex items-center justify-between text-[10px] font-mono text-gray-500">
                  <span className="text-[#39FF14]/80">LOG // 0{idx + 1}</span>
                  <span className="uppercase">ENCRYPTED FEEDBACK</span>
                </div>

                {/* Quote Text */}
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed italic">
                  "{item.quote}"
                </p>

              </div>

              {/* Author, Role & Verified Entity Stamp */}
              <div className="pt-5 mt-6 border-t border-white/10 flex items-center justify-between relative z-10">
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-[#39FF14] transition-colors flex items-center gap-1.5">
                    <span>{item.author}</span>
                    <ShieldCheck className="w-3.5 h-3.5 text-[#39FF14] shrink-0" />
                  </h4>
                  <p className="text-[11px] font-mono text-gray-400 mt-0.5">{item.role}</p>
                  <p className="text-[10px] text-gray-500 font-mono">{item.companyType}</p>
                </div>

                {/* Cyber Auth Stamp */}
                <div className="text-right">
                  <span className="px-2 py-0.5 rounded bg-[#39FF14]/10 border border-[#39FF14]/30 text-[9px] font-mono text-[#39FF14] font-bold block">
                    VERIFIED
                  </span>
                  <span className="text-[8px] font-mono text-gray-500 block mt-0.5">
                    AUTH // OK
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Disclaimer Note */}
        <div className="p-4 rounded-xl bg-[#0D0D0D] border border-white/10 text-xs font-mono text-gray-400 flex items-center gap-2 justify-center shadow-lg">
          <AlertCircle className="w-4 h-4 text-[#39FF14] shrink-0" />
          <span>Note: Representative client feedback scenarios based on consulting engagements. References available upon request.</span>
        </div>

      </div>
    </section>
  );
};
