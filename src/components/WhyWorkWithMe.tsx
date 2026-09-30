import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { WHY_WORK_WITH_ME } from '../data/portfolioData';
import { Target, Layers2, MessageSquareCode, Rocket, Sparkles, Terminal } from 'lucide-react';
import { useCyberDoor } from '../context/CyberDoorContext';
import { DecryptedText } from './anime/DecryptedText';
import { HudCornerBrackets } from './anime/HudCornerBrackets';

export const WhyWorkWithMe: React.FC = () => {
  const { currentTheme } = useCyberDoor();
  const { primary, secondary, rgb } = currentTheme;
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const getFeatureIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Target className="w-6 h-6 transition-colors" style={{ color: primary }} />;
      case 1:
        return <Layers2 className="w-6 h-6 transition-colors" style={{ color: primary }} />;
      case 2:
        return <MessageSquareCode className="w-6 h-6 transition-colors" style={{ color: primary }} />;
      case 3:
        return <Rocket className="w-6 h-6 transition-colors" style={{ color: primary }} />;
      default:
        return <Target className="w-6 h-6 transition-colors" style={{ color: primary }} />;
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 35, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="advantage" className="py-24 bg-[#050505] relative overflow-hidden border-t border-white/5">
      {/* Background Cyber Grid Accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

      {/* Ambient Theme Backlight Orb */}
      <div
        className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full blur-[160px] pointer-events-none opacity-10 transition-colors duration-700"
        style={{ backgroundColor: primary }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* =========================================================================
            SECTION HEADER: Anime HUD Telemetry & Decrypted Title
            ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-16"
        >
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase border backdrop-blur-md"
              style={{
                backgroundColor: `rgba(${rgb}, 0.08)`,
                borderColor: `rgba(${rgb}, 0.35)`,
                color: secondary,
              }}
            >
              <Terminal className="w-3.5 h-3.5" style={{ color: primary }} />
              <span>THE TECHYORA ADVANTAGE // ADVANTAGE MATRIX</span>
            </div>

            <div className="hidden sm:inline-flex items-center gap-1.5 text-[10px] font-mono text-gray-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
              <Sparkles className="w-3 h-3" style={{ color: primary }} />
              <span>BENCHMARK: INDUSTRY LEADERSHIP</span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            <DecryptedText text="Why Clients Choose to Work With Us" speed={28} />
          </h2>
        </motion.div>

        {/* =========================================================================
            4 ANIME CYBERWARE MODULES GRID
            ========================================================================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-16"
        >
          {WHY_WORK_WITH_ME.map((item, idx) => {
            const isHovered = hoveredIdx === idx;

            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="relative p-8 rounded-2xl bg-[#0D0D0D]/90 border transition-all duration-300 group flex flex-col justify-between overflow-hidden backdrop-blur-md"
                style={{
                  borderColor: isHovered ? `rgba(${rgb}, 0.6)` : 'rgba(255, 255, 255, 0.08)',
                  boxShadow: isHovered
                    ? `0 20px 45px rgba(0,0,0,0.85), 0 0 30px rgba(${rgb}, 0.2)`
                    : '0 10px 30px rgba(0,0,0,0.5)',
                  transform: isHovered ? 'translateY(-4px)' : 'none',
                }}
              >
                {/* 4-Corner Anime Targeting Brackets */}
                <HudCornerBrackets color={primary} size={10} tag={`MOD // 0${idx + 1}`} />

                {/* Laser Accent Top Seam */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] transition-all duration-300"
                  style={{
                    background: `linear-gradient(to right, transparent, ${primary}, transparent)`,
                    opacity: isHovered ? 1 : 0,
                    boxShadow: `0 0 10px ${primary}`,
                  }}
                />

                <div className="space-y-5 relative z-10">
                  {/* Top Bar: Icon & Numeric Tag */}
                  <div className="flex items-center justify-between">
                    <div
                      className="w-13 h-13 rounded-xl bg-[#050505] border flex items-center justify-center transition-all duration-300"
                      style={{
                        borderColor: isHovered ? primary : 'rgba(255, 255, 255, 0.1)',
                        boxShadow: isHovered ? `0 0 15px rgba(${rgb}, 0.35)` : 'none',
                      }}
                    >
                      {getFeatureIcon(idx)}
                    </div>

                    <span
                      className="text-2xl font-mono font-extrabold tracking-tighter transition-colors duration-300"
                      style={{
                        color: isHovered ? primary : `rgba(${rgb}, 0.35)`,
                        textShadow: isHovered ? `0 0 15px ${primary}` : 'none',
                      }}
                    >
                      {item.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-2xl font-bold tracking-tight text-white transition-colors duration-200"
                    style={{
                      color: isHovered ? '#ffffff' : undefined,
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-base leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* =========================================================================
            COLLABORATION PHILOSOPHY COMMAND CENTER BANNER
            ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="relative p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-[#0B1120] via-[#0D0D0D] to-[#0B1120] border text-center relative overflow-hidden backdrop-blur-xl group"
          style={{
            borderColor: `rgba(${rgb}, 0.4)`,
            boxShadow: `0 15px 50px rgba(0,0,0,0.8), 0 0 35px rgba(${rgb}, 0.15)`,
          }}
        >
          {/* HUD Corner Brackets */}
          <HudCornerBrackets color={primary} size={14} tag="CORE // PHILOSOPHY" />

          {/* Background Matrix Pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

          {/* Central Radial Light */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-32 rounded-full blur-3xl pointer-events-none opacity-20"
            style={{ backgroundColor: primary }}
          />

          <div className="max-w-4xl mx-auto space-y-4 relative z-10">
            <span
              className="text-xs font-mono uppercase tracking-[0.25em] block font-bold"
              style={{ color: secondary }}
            >
              CLIENT COLLABORATION PHILOSOPHY
            </span>

            <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight tracking-tight">
              "Technology built around your business.{' '}
              <span
                className="underline decoration-2 transition-colors"
                style={{
                  color: primary,
                  textDecorationColor: `rgba(${rgb}, 0.5)`,
                  textShadow: `0 0 20px rgba(${rgb}, 0.4)`,
                }}
              >
                Solutions built for growth.
              </span>
              "
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
