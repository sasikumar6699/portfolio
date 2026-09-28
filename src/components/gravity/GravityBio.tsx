import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface GravityBioProps {
  onOpenContact: () => void;
}

export const GravityBio: React.FC<GravityBioProps> = ({ onOpenContact }) => {
  const bioRef = useRef<HTMLDivElement>(null);
  const [activeMilestone, setActiveMilestone] = useState(0);

  const milestones = [
    {
      label: "Our Story",
      title: "From Freelance Collective to High-Performance Studio",
      content: "Techyora was established to dismantle the traditional agency model. Instead of paying for massive account managers and bureaucratic overhead, our clients collaborate directly with seasoned software engineers, ERP architects, automation specialists, and creative visual designers.",
      highlight: "Over 50+ service categories delivered with a 100% focus on quality."
    },
    {
      label: "Our Disciplines",
      title: "Multidisciplinary Breadth with Engineering Rigor",
      content: "From enterprise ERPNext and Frappe business process automation to modern React single-page applications, autonomous AI agents, intelligent document OCR, and high-converting graphic brand assets—we bridge technical execution with real commercial impact.",
      highlight: "Custom code architecture tailored specifically to your business workflows."
    },
    {
      label: "Client Impact",
      title: "Engineered for Measurable Commercial Results",
      content: "We measure our success not just by lines of code, but by operational efficiency and business momentum: reducing financial closing cycles by 65%, accelerating software scoping from weeks to 48 hours, and achieving sub-second web performance with 99+ Lighthouse scores.",
      highlight: "Reliable, long-term technical partnerships trusted by startups and enterprises."
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
      className="relative w-full py-24 sm:py-32 bg-[#050505] text-white border-t border-white/10 select-none"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sticky 3-Column Milestone Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Column 1 & 2: Sticky Section Key Navigation (Left) */}
          <div className="lg:col-span-4 relative">
            <div className="lg:sticky lg:top-36 space-y-6">
              
              <div className="flex items-center gap-2">
                <span className="w-6 h-[2px] bg-[#39FF14]" />
                <h2 className="text-sm font-mono tracking-[0.25em] text-[#39FF14] uppercase font-bold">
                  ABOUT TECHYORA // MILESTONES
                </h2>
              </div>

              {/* Milestone Nav Indicators */}
              <div className="space-y-4 pt-2">
                {milestones.map((m, idx) => (
                  <div
                    key={idx}
                    className={`transition-all duration-300 border-l-2 pl-4 ${
                      activeMilestone === idx
                        ? 'border-[#39FF14] text-white'
                        : 'border-white/10 text-gray-400'
                    }`}
                  >
                    <span className="text-[10px] font-mono tracking-widest uppercase block text-[#39FF14]">
                      0{idx + 1} //
                    </span>
                    <h3 className={`text-xl sm:text-2xl font-bold tracking-tight ${
                      activeMilestone === idx ? 'text-white' : 'text-gray-400'
                    }`}>
                      {m.label}
                    </h3>
                  </div>
                ))}
              </div>

              {/* Trust Badge Card */}
              <div className="hidden lg:block p-5 rounded-2xl bg-[#0D0D0D] border border-white/10 mt-8">
                <div className="flex items-center gap-2 text-xs font-mono text-[#39FF14] mb-2">
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
          <div className="lg:col-span-8 space-y-24 sm:space-y-32">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="bio-milestone-slot p-6 sm:p-10 rounded-2xl bg-[#0D0D0D]/90 border border-white/10 hover:border-[#39FF14]/40 transition-all duration-300 shadow-2xl relative"
              >
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                  <span className="text-xs font-mono text-[#39FF14] tracking-widest uppercase">
                    STAGE 0{idx + 1} · {m.label}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#39FF14] shadow-[0_0_8px_#39FF14]" />
                </div>

                <h4 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug mb-4">
                  {m.title}
                </h4>

                <p className="text-base sm:text-lg text-gray-300 font-light leading-relaxed mb-6">
                  {m.content}
                </p>

                {/* Highlight Pill */}
                <div className="p-4 rounded-xl bg-white/5 border border-[#39FF14]/30 flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-[#39FF14] shrink-0" />
                  <span className="text-xs sm:text-sm font-mono text-[#39FF14] font-medium">
                    {m.highlight}
                  </span>
                </div>
              </div>
            ))}

            {/* Closing Invitation Reveal Banner */}
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#0D0D0D] to-[#071306] border border-[#39FF14]/40 text-center space-y-6 shadow-[0_0_50px_rgba(57,255,20,0.15)]">
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Ready for a Collaborative{' '}
                <span className="text-[#39FF14] neon-glow-text">
                  Breakthrough?
                </span>
              </h3>
              <p className="text-gray-300 max-w-xl mx-auto font-light text-sm sm:text-base">
                Whether you need a custom ERP system, autonomous AI automation, a high-speed website, or accurate data processing, let's talk.
              </p>
              <div>
                <button
                  onClick={onOpenContact}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#39FF14] text-black font-bold text-sm tracking-wider uppercase hover:bg-[#45ff24] shadow-[0_0_30px_rgba(57,255,20,0.5)] transition-all transform hover:-translate-y-1"
                >
                  <span>Schedule Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
