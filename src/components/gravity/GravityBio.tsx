import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, ShieldCheck } from 'lucide-react';
import { useCyberDoor } from '../../context/CyberDoorContext';

interface GravityBioProps {
  onOpenContact?: () => void;
}

export const GravityBio: React.FC<GravityBioProps> = ({ onOpenContact: _onOpenContact }) => {
  const { currentTheme } = useCyberDoor();
  const { primary, rgb } = currentTheme;
  const bioRef = useRef<HTMLDivElement>(null);
  const [activeMilestone, setActiveMilestone] = useState(0);

  const milestones = [
    {
      label: "Company Story",
      title: "Full-Service Enterprise Technology Company & Engineering Team",
      content: "Techyora was established to deliver enterprise-grade software engineering without bureaucratic agency overhead. Our in-house engineering team unites seasoned ERP architects, full-stack software developers, AI automation specialists, 3D web designers, and cloud DevOps professionals to build scalable digital systems that drive commercial growth.",
      highlight: "Over 50+ enterprise deployments delivered with 100% focus on quality and reliability."
    },
    {
      label: "Our Core Disciplines",
      title: "Six Pillars: ERP, Custom Software, 3D Web, AI, Branding & AMC",
      content: "We deliver full-lifecycle digital transformation across 6 foundational pillars: custom ERPNext, CRM & HCM implementations, specialized billing, inventory, fleet management and logistics software, 3D interactive web & e-commerce, autonomous agentic AI and conversational chatbots, professional graphic design and flex branding, backed by 24/7 SLA-driven cloud AMC support.",
      highlight: "Custom-architected solutions tailored directly to your unique business workflows."
    },
    {
      label: "Enterprise Impact",
      title: "Engineered for 99.9% Uptime, High Scalability & Measurable ROI",
      content: "We measure our success by business momentum and operational velocity: slashing financial month-end reconciliation by 65%, optimizing fleet dispatch from 3 hours to 20 minutes, eliminating inventory & ledger discrepancies, and delivering sub-second web speed with 99+ Core Web Vitals.",
      highlight: "Dedicated technical partnership and proactive 24/7 AMC maintenance trusted globally."
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!bioRef.current) return;
      const slots = bioRef.current.querySelectorAll('.bio-milestone-slot');
      const vh = window.innerHeight;

      slots.forEach((slot, index) => {
        const rect = slot.getBoundingClientRect();
        if (rect.top <= vh * 0.45 && rect.bottom >= vh * 0.2) {
          setActiveMilestone(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="about"
      ref={bioRef}
      className="relative w-full py-6 sm:py-10 bg-[#050505] text-white border-t border-white/10 select-none"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sticky 3-Column Milestone Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
          
          {/* Column 1 & 2: Sticky Section Key Navigation (Left) */}
          <div className="lg:col-span-4 relative">
            <div className="lg:sticky lg:top-28 space-y-4 sm:space-y-6">
              
              <div className="flex items-center gap-2">
                <span className="w-6 h-[2px]" style={{ backgroundColor: primary }} />
                <h2
                  className="text-xs sm:text-sm font-mono tracking-[0.2em] sm:tracking-[0.25em] uppercase font-bold"
                  style={{ color: primary }}
                >
                  ABOUT TECHYORA // MILESTONES
                </h2>
              </div>

              {/* Milestone Nav Indicators */}
              <div className="space-y-3 sm:space-y-4 pt-1 sm:pt-2">
                {milestones.map((m, idx) => (
                  <div
                    key={idx}
                    className="transition-all duration-300 border-l-2 pl-3 sm:pl-4"
                    style={{
                      borderColor: activeMilestone === idx ? primary : 'rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <span
                      className="text-[9.5px] sm:text-[10px] font-mono tracking-widest uppercase block"
                      style={{ color: primary }}
                    >
                      0{idx + 1} //
                    </span>
                    <h3 className={`text-lg sm:text-2xl font-bold tracking-tight ${
                      activeMilestone === idx ? 'text-white' : 'text-gray-400'
                    }`}>
                      {m.label}
                    </h3>
                  </div>
                ))}
              </div>

              {/* Trust Badge Card */}
              <div className="hidden lg:block p-4 rounded-2xl bg-[#0D0D0D] border border-white/10 mt-6">
                <div className="flex items-center gap-2 text-xs font-mono mb-2" style={{ color: primary }}>
                  <ShieldCheck className="w-4 h-4" />
                  <span>DIRECT TEAM COLLABORATION</span>
                </div>
                <p className="text-xs text-gray-300 font-light leading-relaxed">
                  Direct access to engineers and designers. No account manager telephone games.
                </p>
              </div>

            </div>
          </div>

          {/* Column 3: Scrolling Milestone Content Slots (Right) */}
          <div className="lg:col-span-8 space-y-4 sm:space-y-8">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="bio-milestone-slot p-5 sm:p-10 rounded-2xl bg-[#0D0D0D]/90 border border-white/10 transition-all duration-300 shadow-2xl relative"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `rgba(${rgb}, 0.5)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-white/10 mb-4 sm:mb-6">
                  <span className="text-xs font-mono tracking-widest uppercase" style={{ color: primary }}>
                    STAGE 0{idx + 1} · {m.label}
                  </span>
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{
                      backgroundColor: primary,
                      boxShadow: `0 0 8px ${primary}`
                    }}
                  />
                </div>

                <h4 className="text-xl sm:text-3xl font-extrabold text-white leading-snug mb-3 sm:mb-4">
                  {m.title}
                </h4>

                <p className="text-sm sm:text-lg text-gray-300 font-light leading-relaxed mb-4 sm:mb-6">
                  {m.content}
                </p>

                {/* Highlight Pill */}
                <div
                  className="p-3 sm:p-4 rounded-xl bg-white/5 border flex items-center gap-2.5 sm:gap-3"
                  style={{ borderColor: `rgba(${rgb}, 0.3)` }}
                >
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" style={{ color: primary }} />
                  <span className="text-xs sm:text-sm font-mono font-medium" style={{ color: primary }}>
                    {m.highlight}
                  </span>
                </div>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};
