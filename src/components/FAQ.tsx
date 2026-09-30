import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQS } from '../data/portfolioData';
import { Terminal, Crosshair } from 'lucide-react';
import { useCyberDoor } from '../context/CyberDoorContext';

export const FAQ: React.FC = () => {
  const { currentTheme } = useCyberDoor();
  const { primary, secondary, rgb } = currentTheme;

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-6 sm:py-10 bg-[#050505] relative overflow-hidden border-t border-white/5 select-none">
      {/* Backdrop Glow */}
      <div
        className="absolute bottom-10 left-10 w-96 h-96 rounded-full blur-[160px] pointer-events-none transition-colors duration-700"
        style={{ backgroundColor: `rgba(${rgb}, 0.08)` }}
      />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-4 sm:mb-6 space-y-2 sm:space-y-2.5">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D0D0D] border text-xs font-mono transition-colors"
            style={{
              borderColor: `rgba(${rgb}, 0.4)`,
              color: secondary,
              boxShadow: `0 0 15px rgba(${rgb}, 0.15)`,
            }}
          >
            <Terminal className="w-3.5 h-3.5 animate-pulse" />
            <span>CIRCUIT DECRYPTION // ARCHITECTURAL Q&A</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked{' '}
            <span
              className="inline-block transition-colors"
              style={{
                color: primary,
                textShadow: `0 0 20px rgba(${rgb}, 0.4)`,
              }}
            >
              Questions
            </span>
          </h2>
          <p className="text-gray-400 text-xs sm:text-base font-light">
            Everything you need to know about partnering with Techyora on ERPNext, custom software, 3D web, agentic AI, and 24/7 AMC support.
          </p>
        </div>

        {/* Accordions List with Anime Circuit Trace Runner & Mecha Aperture Crosshair */}
        <div className="space-y-2.5 sm:space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="relative rounded-2xl border transition-all duration-300 overflow-hidden"
                style={{
                  backgroundColor: isOpen ? '#0D0D0D' : 'rgba(13, 13, 13, 0.7)',
                  borderColor: isOpen ? primary : 'rgba(255, 255, 255, 0.1)',
                  boxShadow: isOpen ? `0 0 30px rgba(${rgb}, 0.2)` : 'none',
                }}
              >
                {/* CYBER CIRCUIT TRACE RUNNER ALONG LEFT EDGE */}
                {isOpen && (
                  <div
                    className="absolute left-0 top-0 bottom-0 w-1.5"
                    style={{
                      background: `linear-gradient(to bottom, ${primary}, ${secondary}, ${primary})`,
                      boxShadow: `0 0 12px ${primary}`,
                    }}
                  >
                    {/* Animated Circuit Energy Packet */}
                    <div className="absolute left-0 w-full h-8 bg-white shadow-[0_0_15px_#ffffff] rounded-full animate-circuit-packet" />
                  </div>
                )}

                {/* Question Trigger Button */}
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-4 sm:px-6 py-4 sm:py-6 text-left flex items-center justify-between gap-3 sm:gap-4 focus:outline-none cursor-pointer group"
                >
                  <div className="flex items-start gap-2.5 sm:gap-4">
                    {/* System Query Badge */}
                    <span
                      className="text-[9.5px] sm:text-[10px] font-mono px-1.5 sm:px-2 py-0.5 rounded border shrink-0 mt-0.5 transition-colors"
                      style={{
                        backgroundColor: `rgba(${rgb}, 0.12)`,
                        borderColor: `rgba(${rgb}, 0.35)`,
                        color: primary,
                      }}
                    >
                      SYS // 0{idx + 1}
                    </span>

                    <div>
                      <span className="text-sm sm:text-lg font-bold text-white group-hover:text-white transition-colors block leading-snug">
                        {faq.question}
                      </span>
                      {isOpen && (
                        <span className="text-[9.5px] sm:text-[10px] font-mono mt-1 block flex items-center gap-1.5" style={{ color: secondary }}>
                          <span className="w-1.5 h-1.5 rounded-full animate-ping" style={{ backgroundColor: primary }} />
                          <span>[STATUS: DECRYPTED & RESOLVED]</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* MECHA APERTURE CROSSHAIR TOGGLE */}
                  <div 
                    className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl border flex items-center justify-center transition-all duration-300 shrink-0 ${
                      isOpen ? 'rotate-45' : 'group-hover:border-white/30 group-hover:text-white'
                    }`}
                    style={
                      isOpen
                        ? {
                            borderColor: primary,
                            backgroundColor: `rgba(${rgb}, 0.15)`,
                            color: primary,
                            boxShadow: `0 0 15px rgba(${rgb}, 0.4)`,
                          }
                        : {
                            borderColor: 'rgba(255, 255, 255, 0.1)',
                            backgroundColor: '#050505',
                            color: '#9ca3af',
                          }
                    }
                  >
                    <Crosshair className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                </button>

                {/* HOLOGRAPHIC SCANLINE DATA STREAM ANSWER REVEAL */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-6 pb-5 sm:pb-6 pt-2 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-white/5 pl-4 sm:pl-16 relative">
                        {/* Terminal Prompt Indicator */}
                        <div className="flex items-center gap-2 text-[9.5px] sm:text-[10px] font-mono text-gray-500 mb-2">
                          <span style={{ color: primary }}>&gt;&gt;</span>
                          <span className="tracking-widest uppercase">DATA_PAYLOAD_OUTPUT:</span>
                        </div>

                        <p className="font-light text-gray-200">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
