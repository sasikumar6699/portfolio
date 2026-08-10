import React from 'react';
import { EXPERIENCE_TIMELINE } from '../data/portfolioData';
import { Briefcase, CheckCircle, Award } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-[#050505] relative overflow-hidden border-t border-white/5">
      {/* Glow Effect */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#39FF14]/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D0D0D] border border-[#39FF14]/30 text-xs font-mono text-[#39FF14] mb-4">
            <span>BACKGROUND & TRACK RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Experience That Combines Technology & Business
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mt-3">
            Over 9+ years bridging the gap between business objectives, software architecture, and operational success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Timeline List */}
          <div className="lg:col-span-8 space-y-8">
            {EXPERIENCE_TIMELINE.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#0D0D0D] border border-white/10 hover:border-[#39FF14]/50 transition-all duration-300 relative group shadow-lg"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/10 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#39FF14] transition-colors">
                      {item.role}
                    </h3>
                    <p className="text-xs font-mono text-[#39FF14] mt-1">
                      {item.focus}
                    </p>
                  </div>
                  <div className="px-4 py-1.5 rounded-full bg-[#050505] border border-white/10 text-xs font-mono text-gray-300 shrink-0 self-start sm:self-auto">
                    {item.period}
                  </div>
                </div>

                <ul className="space-y-3">
                  {item.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-3 text-sm text-gray-300 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-[#39FF14] shrink-0 mt-1" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right Column: Key Domains Card */}
          <div className="lg:col-span-4 w-full space-y-6">
            <div className="p-8 rounded-2xl bg-[#0D0D0D] border border-[#39FF14]/30 space-y-6 relative overflow-hidden">
              
              <div className="flex items-center gap-3 text-white pb-4 border-b border-white/10">
                <Award className="w-6 h-6 text-[#39FF14]" />
                <h4 className="text-lg font-bold">Core Practice Domains</h4>
              </div>

              <div className="space-y-3 font-mono text-xs text-gray-300">
                {[
                  "Business Development & Strategy",
                  "Client Relationship Management",
                  "ERP & CRM Solutions (ERPNext/Frappe)",
                  "Agile Project Delivery & Management",
                  "Software Architecture Consulting",
                  "Digital Solutions & Automation",
                  "AI Integration & Workflow Agents"
                ].map((domain, index) => (
                  <div key={index} className="p-3 rounded-xl bg-[#050505] border border-white/10 flex items-center justify-between group hover:border-[#39FF14]/50 transition-colors">
                    <span>{domain}</span>
                    <span className="text-[#39FF14]">⚡</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-[#39FF14]/10 border border-[#39FF14]/30 text-xs text-[#39FF14] leading-relaxed">
                <strong>Core Competitive Advantage:</strong> Combining strategic business understanding with hands-on software engineering.
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
