import React from 'react';
import { Database, Globe, Cpu, Users, Code, TrendingUp, ArrowRight, Check, PenTool, ShieldCheck } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';
import { useCyberDoor } from '../context/CyberDoorContext';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const { currentTheme } = useCyberDoor();
  const { primary, secondary, rgb } = currentTheme;

  const getIcon = (iconName: string) => {
    const iconClass = "w-7 h-7";
    switch (iconName) {
      case 'Database': return <Database className={iconClass} style={{ color: primary }} />;
      case 'Globe': return <Globe className={iconClass} style={{ color: primary }} />;
      case 'Cpu': return <Cpu className={iconClass} style={{ color: primary }} />;
      case 'Users': return <Users className={iconClass} style={{ color: primary }} />;
      case 'Code': return <Code className={iconClass} style={{ color: primary }} />;
      case 'TrendingUp': return <TrendingUp className={iconClass} style={{ color: primary }} />;
      case 'PenTool': return <PenTool className={iconClass} style={{ color: primary }} />;
      case 'ShieldCheck': return <ShieldCheck className={iconClass} style={{ color: primary }} />;
      default: return <Code className={iconClass} style={{ color: primary }} />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#050505] relative overflow-hidden border-t border-white/5">
      {/* Background Radial Glow */}
      <div
        className="absolute top-1/3 right-0 w-96 h-96 rounded-full blur-[160px] pointer-events-none transition-colors duration-700"
        style={{ backgroundColor: `rgba(${rgb}, 0.08)` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D0D0D] border text-xs font-mono transition-colors"
            style={{
              borderColor: `rgba(${rgb}, 0.35)`,
              color: secondary,
            }}
          >
            <span>EXPERTISE & OFFERS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Services We Offer
          </h2>
          <p className="text-gray-400 text-base sm:text-lg">
            High-impact software engineering, ERPNext customization, AI automation, and technology advisory tailored to your operational goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-[#0D0D0D] rounded-2xl border border-white/10 p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 group"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = primary;
                e.currentTarget.style.boxShadow = `0 0 30px rgba(${rgb}, 0.25)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div className="space-y-6">
                
                {/* Icon Container */}
                <div
                  className="w-14 h-14 rounded-xl bg-[#050505] border border-white/10 flex items-center justify-center transition-all"
                  style={{
                    borderColor: `rgba(${rgb}, 0.2)`,
                    boxShadow: `0 0 15px rgba(${rgb}, 0.15)`,
                  }}
                >
                  {getIcon(service.iconName)}
                </div>

                {/* Title & Description */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Feature Bullet Points */}
                <div className="pt-2 space-y-2 border-t border-white/5">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-gray-300">
                      <Check className="w-3.5 h-3.5 shrink-0" style={{ color: primary }} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Action Link */}
              <div className="pt-6 mt-6 border-t border-white/10">
                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full inline-flex items-center justify-between text-xs font-mono font-semibold text-gray-300 transition-colors group-hover:text-white"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = primary;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '';
                  }}
                >
                  <span>Explore Service</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
