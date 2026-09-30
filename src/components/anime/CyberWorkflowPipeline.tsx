import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { WORK_PROCESS } from '../../data/portfolioData';
import { useCyberDoor } from '../../context/CyberDoorContext';
import { HudCornerBrackets } from './HudCornerBrackets';
import { DecryptedText } from './DecryptedText';
import { GitCommit, Search, Layers, Terminal, ShieldCheck, Rocket, Wrench } from 'lucide-react';

export const CyberWorkflowPipeline: React.FC = () => {
  const { currentTheme } = useCyberDoor();
  const { primary, secondary, rgb } = currentTheme;
  const [hoveredStep, setHoveredStep] = useState<string | null>(null);

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Search className="w-4 h-4" />;
      case 1:
        return <Layers className="w-4 h-4" />;
      case 2:
        return <Terminal className="w-4 h-4" />;
      case 3:
        return <ShieldCheck className="w-4 h-4" />;
      case 4:
        return <Rocket className="w-4 h-4" />;
      case 5:
        return <Wrench className="w-4 h-4" />;
      default:
        return <GitCommit className="w-4 h-4" />;
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const stepVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <div id="workflow" className="mt-24 pt-16 border-t border-white/10 relative">
      {/* Background Neon Glow */}
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[180px] pointer-events-none opacity-10 transition-colors duration-700"
        style={{ backgroundColor: secondary }}
      />

      {/* Header */}
      <div className="max-w-3xl mb-14">
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase border mb-3"
          style={{
            backgroundColor: `rgba(${rgb}, 0.08)`,
            borderColor: `rgba(${rgb}, 0.3)`,
            color: secondary,
          }}
        >
          <GitCommit className="w-3.5 h-3.5" style={{ color: primary }} />
          <span>EXECUTION PROTOCOL // 6-PHASE CYCLE</span>
        </div>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
          <DecryptedText text="How We Engineer & Deliver Enterprise Solutions" speed={26} />
        </h3>
        <p className="text-gray-400 mt-2 text-sm sm:text-base">
          From discovery to 24/7 post-deployment SLA support, our structured engineering protocol ensures high velocity, zero surprise cost, and production stability.
        </p>
      </div>

      {/* 6-Phase Grid Layout with Connecting Laser Bus */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10"
      >
        {WORK_PROCESS.map((item, idx) => {
          const isHovered = hoveredStep === item.step;

          return (
            <motion.div
              key={item.step}
              variants={stepVariants}
              onMouseEnter={() => setHoveredStep(item.step)}
              onMouseLeave={() => setHoveredStep(null)}
              className="relative p-6 sm:p-7 rounded-2xl bg-[#0D0D0D]/90 border transition-all duration-300 group flex flex-col justify-between overflow-hidden backdrop-blur-md"
              style={{
                borderColor: isHovered ? `rgba(${rgb}, 0.65)` : 'rgba(255, 255, 255, 0.08)',
                boxShadow: isHovered
                  ? `0 18px 40px rgba(0,0,0,0.85), 0 0 25px rgba(${rgb}, 0.2)`
                  : '0 8px 25px rgba(0,0,0,0.5)',
                transform: isHovered ? 'translateY(-4px)' : 'none',
              }}
            >
              {/* Anime Corner Targeting Brackets */}
              <HudCornerBrackets color={primary} size={10} tag={`PHASE // ${item.step}`} />

              {/* Dynamic Theme Laser Top Edge */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] transition-all duration-300"
                style={{
                  background: `linear-gradient(to right, transparent, ${primary}, transparent)`,
                  opacity: isHovered ? 1 : 0,
                  boxShadow: `0 0 10px ${primary}`,
                }}
              />

              <div className="space-y-4 relative z-10">
                {/* Step Bar: Icon, Phase Number & Indicator */}
                <div className="flex items-center justify-between">
                  <div
                    className="w-10 h-10 rounded-xl bg-[#050505] border flex items-center justify-center transition-all duration-300"
                    style={{
                      borderColor: isHovered ? primary : 'rgba(255, 255, 255, 0.1)',
                      color: isHovered ? primary : '#ffffff',
                      boxShadow: isHovered ? `0 0 12px rgba(${rgb}, 0.4)` : 'none',
                    }}
                  >
                    {getStepIcon(idx)}
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className="text-xs font-mono font-bold tracking-widest px-2 py-0.5 rounded border"
                      style={{
                        backgroundColor: isHovered ? `rgba(${rgb}, 0.15)` : 'rgba(255, 255, 255, 0.04)',
                        borderColor: isHovered ? `rgba(${rgb}, 0.4)` : 'rgba(255, 255, 255, 0.1)',
                        color: isHovered ? primary : 'rgba(255, 255, 255, 0.5)',
                      }}
                    >
                      PHASE {item.step}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h4 className="text-lg font-bold text-white tracking-tight group-hover:text-white transition-colors">
                  {item.title}
                </h4>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>

              {/* Bottom Step Progression Pip */}
              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-gray-500">
                <span className="flex items-center gap-1.5">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: isHovered ? primary : 'rgba(255,255,255,0.2)' }}
                  />
                  <span>STEP 0{idx + 1} OF 06</span>
                </span>
                <span style={{ color: isHovered ? secondary : undefined }}>
                  {idx === 5 ? 'PERPETUAL SLA' : 'FORWARD PROGRESS ──►'}
                </span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};
