import React from 'react';
import { User, MapPin, Briefcase, Clock, CheckCircle2, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#050505] relative overflow-hidden border-t border-white/5">
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#39FF14]/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D0D0D] border border-[#39FF14]/30 text-xs font-mono text-[#39FF14] mb-4">
            <span>ABOUT TECHYORA </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {PERSONAL_INFO.bioHeading}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Narrative Content & What I Bring List */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="space-y-6 text-gray-300 text-base sm:text-lg leading-relaxed bg-[#0D0D0D]/60 p-8 rounded-2xl border border-white/10">
              <p className="font-medium text-white">
                {PERSONAL_INFO.bioText1}
              </p>
              <p className="text-gray-400">
                {PERSONAL_INFO.bioText2}
              </p>
            </div>

            {/* What I Bring Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#39FF14]" />
                <span>What I Bring To Every Engagement</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {PERSONAL_INFO.whatIBring.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0D0D0D] border border-white/10 hover:border-[#39FF14]/50 transition-colors group"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#39FF14] shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-semibold text-gray-200 group-hover:text-white transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Professional Profile Card */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-[#0D0D0D] rounded-2xl border border-[#39FF14]/30 p-8 shadow-[0_0_30px_rgba(57,255,20,0.12)] relative overflow-hidden group hover:border-[#39FF14]/60 transition-all">
              
              {/* Card Accent Top Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#39FF14] via-emerald-400 to-[#39FF14]"></div>

              {/* Profile Badge */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#050505] border border-[#39FF14]/40 flex items-center justify-center text-[#39FF14] font-mono text-xl font-bold">
                    SA
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">{PERSONAL_INFO.name}</h4>
                    <p className="text-xs font-mono text-[#39FF14]">SOFTWARE CONSULTANT</p>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-[#39FF14]/10 border border-[#39FF14]/30 text-[11px] font-mono text-[#39FF14]">
                  VERIFIED SPECIALIST
                </div>
              </div>

              {/* Details List */}
              <div className="py-6 space-y-4 font-mono text-sm">
                <div className="flex items-start gap-3 text-gray-300">
                  <Briefcase className="w-4 h-4 text-[#39FF14] shrink-0 mt-1" />
                  <div>
                    <span className="text-xs text-gray-400 block">ROLE</span>
                    <span className="font-semibold text-white">{PERSONAL_INFO.title}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-[#39FF14] shrink-0 mt-1" />
                  <div>
                    <span className="text-xs text-gray-400 block">Mobile</span>
                    <span className="font-semibold text-white">{PERSONAL_INFO.Mobile} (Remote & On-site Consulting)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-gray-300">
                  <Clock className="w-4 h-4 text-[#39FF14] shrink-0 mt-1" />
                  <div>
                    <span className="text-xs text-gray-400 block">EXPERIENCE</span>
                    <span className="font-semibold text-white">{PERSONAL_INFO.experience} Industry Practice</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-gray-300">
                  <User className="w-4 h-4 text-[#39FF14] shrink-0 mt-1" />
                  <div>
                    <span className="text-xs text-gray-400 block">AVAILABILITY</span>
                    <span className="font-semibold text-[#39FF14] inline-flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#39FF14] animate-ping"></span>
                      {PERSONAL_INFO.availability}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Note */}
              <div className="pt-4 border-t border-white/10 text-center">
                <p className="text-xs text-gray-400 font-sans">
                  "Ready to discuss your enterprise workflow or software roadmap."
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
