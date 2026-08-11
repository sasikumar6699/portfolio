import React from 'react';
import { Database, Globe, Cpu, Users, Code, TrendingUp, ArrowRight, Check } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Database': return <Database className="w-7 h-7 text-[#39FF14]" />;
      case 'Globe': return <Globe className="w-7 h-7 text-[#39FF14]" />;
      case 'Cpu': return <Cpu className="w-7 h-7 text-[#39FF14]" />;
      case 'Users': return <Users className="w-7 h-7 text-[#39FF14]" />;
      case 'Code': return <Code className="w-7 h-7 text-[#39FF14]" />;
      case 'TrendingUp': return <TrendingUp className="w-7 h-7 text-[#39FF14]" />;
      default: return <Code className="w-7 h-7 text-[#39FF14]" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#050505] relative overflow-hidden border-t border-white/5">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#39FF14]/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D0D0D] border border-[#39FF14]/30 text-xs font-mono text-[#39FF14]">
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
              className="bg-[#0D0D0D] rounded-2xl border border-white/10 p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#39FF14] hover:shadow-[0_0_30px_rgba(57,255,20,0.25)] hover:-translate-y-2 group"
            >
              <div className="space-y-6">
                
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-xl bg-[#050505] border border-white/10 flex items-center justify-center group-hover:border-[#39FF14]/50 group-hover:shadow-[0_0_20px_rgba(57,255,20,0.3)] transition-all">
                  {getIcon(service.iconName)}
                </div>

                {/* Title & Description */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#39FF14] transition-colors">
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
                      <Check className="w-3.5 h-3.5 text-[#39FF14] shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Action Link */}
              <div className="pt-6 mt-6 border-t border-white/10">
                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full inline-flex items-center justify-between text-xs font-mono font-semibold text-gray-300 group-hover:text-[#39FF14] transition-colors"
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
