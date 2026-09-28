import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQS } from '../data/portfolioData';
import { Terminal, Crosshair } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 sm:py-32 bg-[#050505] relative overflow-hidden border-t border-white/5 select-none">
      {/* Backdrop Glow */}
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#39FF14]/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0D0D0D] border border-[#39FF14]/40 text-xs font-mono text-[#39FF14] shadow-[0_0_15px_rgba(57,255,20,0.15)]">
            <Terminal className="w-3.5 h-3.5 animate-pulse" />
            <span>CIRCUIT DECRYPTION // ARCHITECTURAL Q&A</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked{' '}
            <span className="text-[#39FF14] inline-block neon-glow-text">
              Questions
            </span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base font-light">
            Everything you need to know about working with our freelance technical collective on ERPNext, custom software, and autonomous workflows.
          </p>
        </div>

        {/* Accordions List with Anime Circuit Trace Runner & Mecha Aperture Crosshair */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`relative rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#0D0D0D] border-[#39FF14] shadow-[0_0_30px_rgba(57,255,20,0.18)]'
                    : 'bg-[#0D0D0D]/70 border-white/10 hover:border-white/25'
                }`}
              >
                {/* =========================================================================
                    ANIME EFFECT 1: CYBER CIRCUIT TRACE RUNNER ALONG LEFT EDGE
                    ========================================================================= */}
                {isOpen && (
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#39FF14] via-[#9eff7a] to-[#39FF14] shadow-[0_0_12px_#39FF14]">
                    {/* Animated Circuit Energy Packet */}
                    <div className="absolute left-0 w-full h-8 bg-white shadow-[0_0_15px_#ffffff] rounded-full animate-circuit-packet" />
                  </div>
                )}

                {/* Question Trigger Button */}
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 sm:py-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer group"
                >
                  <div className="flex items-start gap-4">
                    {/* System Query Badge */}
                    <span className="text-[10px] font-mono text-[#39FF14] px-2 py-0.5 rounded bg-[#39FF14]/10 border border-[#39FF14]/30 shrink-0 mt-0.5">
                      SYS // 0{idx + 1}
                    </span>

                    <div>
                      <span className="text-base sm:text-lg font-bold text-white group-hover:text-[#39FF14] transition-colors block">
                        {faq.question}
                      </span>
                      {isOpen && (
                        <span className="text-[10px] font-mono text-[#39FF14]/80 mt-1 block flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#39FF14] animate-ping" />
                          <span>[STATUS: DECRYPTED & RESOLVED]</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* =========================================================================
                      ANIME EFFECT 2: MECHA APERTURE CROSSHAIR TOGGLE (+ to × rotation)
                      ========================================================================= */}
                  <div 
                    className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-all duration-300 shrink-0 ${
                      isOpen
                        ? 'border-[#39FF14] bg-[#39FF14]/15 text-[#39FF14] shadow-[0_0_15px_rgba(57,255,20,0.4)] rotate-45'
                        : 'border-white/10 bg-[#050505] text-gray-400 group-hover:border-white/30 group-hover:text-white'
                    }`}
                  >
                    <Crosshair className="w-4 h-4" />
                  </div>
                </button>

                {/* =========================================================================
                    ANIME EFFECT 3: HOLOGRAPHIC SCANLINE DATA STREAM ANSWER REVEAL
                    ========================================================================= */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-white/5 pl-12 sm:pl-16 relative">
                        {/* Terminal Prompt Indicator */}
                        <div className="flex items-center gap-2 text-[10px] font-mono text-gray-500 mb-2">
                          <span className="text-[#39FF14]">&gt;&gt;</span>
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
