import React from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import { Quote, Star, AlertCircle } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden border-t border-white/5">
      {/* Glow Effect */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#39FF14]/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D0D0D] border border-[#39FF14]/30 text-xs font-mono text-[#39FF14] mb-4">
            <span>CLIENT REVIEWS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            What Clients Say
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mt-3">
            Feedback from business leaders, project managers, and operational heads I've collaborated with.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-[#0D0D0D] rounded-2xl border border-white/10 p-8 flex flex-col justify-between hover:border-[#39FF14]/60 hover:shadow-[0_0_30px_rgba(57,255,20,0.15)] transition-all duration-300 group"
            >
              <div className="space-y-6">
                
                {/* Quote Icon & Rating */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#050505] border border-white/10 flex items-center justify-center text-[#39FF14]">
                    <Quote className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-1 text-[#39FF14]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#39FF14]" />
                    ))}
                  </div>
                </div>

                {/* Quote Text */}
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed italic">
                  "{item.quote}"
                </p>

              </div>

              {/* Author & Role */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-base font-bold text-white group-hover:text-[#39FF14] transition-colors">
                    {item.author}
                  </h4>
                  <p className="text-xs font-mono text-gray-400">{item.role}</p>
                  <p className="text-[11px] text-gray-500">{item.companyType}</p>
                </div>
                {item.isSample && (
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-gray-400">
                    SAMPLE
                  </span>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Disclaimer Note */}
        <div className="p-4 rounded-xl bg-[#0D0D0D] border border-white/10 text-xs font-mono text-gray-400 flex items-center gap-2 justify-center">
          <AlertCircle className="w-4 h-4 text-[#39FF14]" />
          <span>Note: Representative client feedback scenarios based on consulting engagements. References available upon request.</span>
        </div>

      </div>
    </section>
  );
};
