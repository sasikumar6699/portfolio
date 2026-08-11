import React from 'react';
import { WHY_WORK_WITH_ME } from '../data/portfolioData';
import { Target, Layers2, MessageSquareCode, Rocket } from 'lucide-react';

export const WhyWorkWithMe: React.FC = () => {
  const getFeatureIcon = (index: number) => {
    switch (index) {
      case 0: return <Target className="w-6 h-6 text-[#39FF14]" />;
      case 1: return <Layers2 className="w-6 h-6 text-[#39FF14]" />;
      case 2: return <MessageSquareCode className="w-6 h-6 text-[#39FF14]" />;
      case 3: return <Rocket className="w-6 h-6 text-[#39FF14]" />;
      default: return <Target className="w-6 h-6 text-[#39FF14]" />;
    }
  };

  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden border-t border-white/5">
      {/* Background Accent Grid */}
      <div className="absolute inset-0 bg-neon-grid opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D0D0D] border border-[#39FF14]/30 text-xs font-mono text-[#39FF14] mb-4">
            <span>THE FREELANCE ADVANTAGE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Why Clients Choose to Work With Us
          </h2>
        </div>

        {/* 4 Feature Blocks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {WHY_WORK_WITH_ME.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-[#0D0D0D] border border-white/10 hover:border-[#39FF14]/50 transition-all duration-300 group hover:shadow-[0_0_30px_rgba(57,255,20,0.15)] flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#050505] border border-white/10 flex items-center justify-center group-hover:border-[#39FF14]/40 transition-colors">
                    {getFeatureIcon(idx)}
                  </div>
                  <span className="text-2xl font-mono font-bold text-[#39FF14]/50 group-hover:text-[#39FF14] transition-colors">
                    {item.number}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-[#39FF14] transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-300 text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Strong Banner Statement */}
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-[#0D0D0D] via-[#121212] to-[#0D0D0D] border border-[#39FF14]/40 text-center relative shadow-[0_0_40px_rgba(57,255,20,0.15)]">
          <div className="max-w-4xl mx-auto space-y-4">
            <span className="text-xs font-mono text-[#39FF14] uppercase tracking-widest block">CLIENT COLLABORATION PHILOSOPHY</span>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
              "Technology built around your business. <span className=\"text-[#39FF14] underline decoration-[#39FF14]/40\">Solutions built for growth.</span>"
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
