import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../data/portfolioData';
import { Quote, Star, AlertCircle, ShieldCheck, Activity } from 'lucide-react';
import { useCyberDoor } from '../context/CyberDoorContext';

export const Testimonials: React.FC = () => {
  const { currentTheme } = useCyberDoor();
  const { primary, secondary, rgb } = currentTheme;

  return (
    <section className="py-6 sm:py-10 bg-[#050505] relative overflow-hidden border-t border-white/5 select-none">
      {/* Background Ambience */}
      <div
        className="absolute top-1/2 right-10 w-96 h-96 rounded-full blur-[160px] pointer-events-none transition-colors duration-700"
        style={{ backgroundColor: `rgba(${rgb}, 0.08)` }}
      />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Motion Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-4 sm:mb-6"
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D0D0D] border text-xs font-mono mb-2 sm:mb-3 transition-colors"
            style={{
              borderColor: `rgba(${rgb}, 0.4)`,
              color: secondary,
              boxShadow: `0 0 15px rgba(${rgb}, 0.15)`,
            }}
          >
            <Activity className="w-3.5 h-3.5 animate-pulse" />
            <span>NEURAL REVIEWS // MECHA HUD TARGETING ARCHIVE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            What Clients{' '}
            <span
              className="inline-block transition-colors"
              style={{
                color: primary,
                textShadow: `0 0 20px rgba(${rgb}, 0.4)`,
              }}
            >
              Say
            </span>
          </h2>
          <p className="text-gray-400 text-xs sm:text-base mt-1.5 font-light max-w-2xl">
            Verified transmissions and project outcomes from founders, enterprise directors, and operations managers worldwide.
          </p>
        </motion.div>

        {/* Testimonials Grid with Anime Mecha HUD Reticles & Neural Audio Equalizer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
          {TESTIMONIALS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.18, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="relative bg-[#0D0D0D] rounded-2xl border border-white/10 p-4 sm:p-8 flex flex-col justify-between transition-all duration-300 group overflow-hidden cursor-default"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = primary;
                e.currentTarget.style.boxShadow = `0 0 40px rgba(${rgb}, 0.25)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Laser Cyber Scan Sweep Line */}
              <div
                className="absolute inset-0 bg-gradient-to-b from-transparent to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-1000 ease-in-out pointer-events-none"
                style={{
                  backgroundImage: `linear-gradient(to bottom, transparent, rgba(${rgb}, 0.15), transparent)`,
                }}
              />
              {/* HUD Reticles */}
              <span
                className="absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 transition-all duration-300 pointer-events-none"
                style={{ borderColor: primary }}
              />
              <span
                className="absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 transition-all duration-300 pointer-events-none"
                style={{ borderColor: primary }}
              />
              <span
                className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 transition-all duration-300 pointer-events-none"
                style={{ borderColor: primary }}
              />
              <span
                className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 transition-all duration-300 pointer-events-none"
                style={{ borderColor: primary }}
              />

              {/* Hologram Scanner Top Accent */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 rounded-b group-hover:w-28 transition-all duration-500"
                style={{
                  backgroundColor: primary,
                  boxShadow: `0 0 12px ${primary}`,
                }}
              />

              <div className="space-y-5 relative z-10">
                {/* Header: Quote Icon, Star Rating, and Neural Audio Equalizer Waveform */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-xl bg-[#050505] border flex items-center justify-center transition-all"
                      style={{
                        borderColor: `rgba(${rgb}, 0.4)`,
                        color: primary,
                        boxShadow: `0 0 15px rgba(${rgb}, 0.25)`,
                      }}
                    >
                      <Quote className="w-4 h-4" />
                    </div>
                    
                    {/* Star Rating */}
                    <div className="flex items-center gap-1" style={{ color: primary }}>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                  </div>

                  {/* Equalizer Waveform */}
                  <div
                    className="flex items-end gap-1 h-5 px-2 py-1 rounded bg-[#050505] border border-white/10"
                    style={{ color: primary }}
                    title="Neural Voice Comms Active"
                  >
                    <span className="w-1 rounded-full animate-equalizer-1" style={{ backgroundColor: primary }} />
                    <span className="w-1 rounded-full animate-equalizer-2" style={{ backgroundColor: primary }} />
                    <span className="w-1 rounded-full animate-equalizer-3" style={{ backgroundColor: primary }} />
                    <span className="w-1 rounded-full animate-equalizer-4" style={{ backgroundColor: primary }} />
                    <span className="w-1 rounded-full animate-equalizer-5" style={{ backgroundColor: primary }} />
                  </div>
                </div>

                {/* Telemetry Index */}
                <div className="flex items-center justify-between text-[10px] font-mono text-gray-500">
                  <span style={{ color: secondary }}>LOG // 0{idx + 1}</span>
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
                  <h4 className="text-sm font-bold text-white transition-colors flex items-center gap-1.5">
                    <span>{item.author}</span>
                    <ShieldCheck className="w-3.5 h-3.5 shrink-0" style={{ color: primary }} />
                  </h4>
                  <p className="text-[11px] font-mono text-gray-400 mt-0.5">{item.role}</p>
                  <p className="text-[10px] text-gray-500 font-mono">{item.companyType}</p>
                </div>

                {/* Cyber Auth Stamp */}
                <div className="text-right">
                  <span
                    className="px-2 py-0.5 rounded border text-[9px] font-mono font-bold block"
                    style={{
                      backgroundColor: `rgba(${rgb}, 0.12)`,
                      borderColor: `rgba(${rgb}, 0.35)`,
                      color: primary,
                    }}
                  >
                    VERIFIED
                  </span>
                  <span className="text-[8px] font-mono text-gray-500 block mt-0.5">
                    AUTH // OK
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Bottom SLA Assurance Strip */}
        <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-gray-400">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" style={{ color: primary }} />
            <span>100% of reviews derived from delivered software & active ERP implementations</span>
          </div>
          <div className="text-gray-500 text-[11px]">
            Average Client Rating: <span className="font-bold text-white">5.0 / 5.0 ★</span>
          </div>
        </div>

      </div>
    </section>
  );
};
