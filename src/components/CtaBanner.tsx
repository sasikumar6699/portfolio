import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CtaBannerProps {
  onOpenContact: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenContact }) => {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden border-t border-white/5">
      {/* Massive Neon Green Glow Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#39FF14]/10 rounded-full blur-[180px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="bg-[#0D0D0D] rounded-3xl border border-[#39FF14]/50 p-10 sm:p-16 lg:p-20 text-center relative overflow-hidden shadow-[0_0_60px_rgba(57,255,20,0.25)]">
          
          {/* Subtle Grid Overlay */}
          <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#050505] border border-[#39FF14]/40 text-xs font-mono text-[#39FF14]">
              <Sparkles className="w-4 h-4" />
              <span>READY TO TRANSFORM YOUR BUSINESS?</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Let's Build Something <span className="text-[#39FF14] underline decoration-[#39FF14]/40">Valuable</span>.
            </h2>

            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              Have an idea, business problem, or project that needs a technology solution? Let's turn your requirements into a high-performing system.
            </p>

            <div className="pt-4">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-[#39FF14] text-black font-extrabold text-lg hover:bg-[#45ff24] shadow-[0_0_40px_rgba(57,255,20,0.6)] hover:shadow-[0_0_60px_rgba(57,255,20,0.9)] transition-all transform hover:-translate-y-1 active:translate-y-0"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
