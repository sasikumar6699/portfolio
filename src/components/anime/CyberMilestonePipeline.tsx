import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Zap } from 'lucide-react';
import { useCyberDoor } from '../../context/CyberDoorContext';
import { HudCornerBrackets } from './HudCornerBrackets';
import { DecryptedText } from './DecryptedText';

export const CyberMilestonePipeline: React.FC = () => {
  const { currentTheme } = useCyberDoor();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const { primary, secondary, rgb } = currentTheme;

  const milestones = [
    {
      num: '01',
      tag: 'ORIGIN PROTOCOL',
      title: 'Full-Service Enterprise Technology Company & Dedicated Engineering Team',
      narrative:
        'Techyora was established to deliver enterprise-grade software engineering without bureaucratic agency overhead. Our in-house engineering team unites seasoned ERP architects, full-stack software developers, AI automation specialists, 3D web designers, and cloud DevOps professionals to build scalable digital systems that drive commercial growth.',
      metrics: ['50+ Enterprise Deployments', 'Zero Agency Bureaucracy', 'In-House Specialists'],
    },
    {
      num: '02',
      tag: 'DISCIPLINE MATRIX',
      title: 'Six Pillars: ERP, Custom Software, 3D Web, AI, Branding & AMC',
      narrative:
        'We deliver full-lifecycle digital transformation across 6 foundational pillars: custom ERPNext, CRM & HCM implementations, specialized billing, inventory, fleet management and logistics software, 3D interactive web & e-commerce, autonomous agentic AI and conversational chatbots, professional graphic design and flex branding, backed by 24/7 SLA-driven cloud AMC support.',
      metrics: ['Custom ERPNext & CRM', 'Autonomous Agentic AI', '24/7 SLA Cloud AMC'],
    },
    {
      num: '03',
      tag: 'ROI VELOCITY',
      title: 'Engineered for 99.9% Uptime, High Scalability & Measurable ROI',
      narrative:
        'We measure our success by business momentum and operational velocity: slashing financial month-end reconciliation by 65%, optimizing fleet dispatch from 3 hours to 20 minutes, eliminating inventory & ledger discrepancies, and delivering sub-second web speed with 99+ Core Web Vitals.',
      metrics: ['65% Faster Reconciliation', 'Sub-Second Web Latency', '99.9% Uptime Guarantee'],
    },
  ];

  return (
    <div className="relative mt-20 pt-16 border-t border-white/10">
      {/* Section Sub-Header with Decrypted Title */}
      <div className="max-w-3xl mb-14">
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase border mb-3"
          style={{
            backgroundColor: `rgba(${rgb}, 0.08)`,
            borderColor: `rgba(${rgb}, 0.3)`,
            color: secondary,
          }}
        >
          <Zap className="w-3.5 h-3.5" style={{ color: primary }} />
          <span>STRATEGIC MILESTONES // ARCHITECTURE PIPELINE</span>
        </div>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
          <DecryptedText text="Engineering Pillars That Drive Scalable Growth" speed={30} />
        </h3>
      </div>

      {/* Vertical Anime Energy Conduit Pipeline Grid */}
      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* The Central Glowing Conduit Track (Desktop) */}
        <div className="hidden lg:block absolute left-[3.25rem] top-8 bottom-8 w-[2px]" aria-hidden="true">
          {/* Base Inactive Wire */}
          <div className="absolute inset-0 bg-white/10" />

          {/* Animated Neon Energy Line */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to bottom, transparent, ${primary}, ${secondary}, transparent)`,
              boxShadow: `0 0 12px ${primary}`,
            }}
          />

          {/* Gliding Energy Packet Runner */}
          <div
            className="absolute left-1/2 -translate-x-1/2 w-2 h-16 rounded-full blur-[1px] animate-circuit-packet"
            style={{
              backgroundColor: '#ffffff',
              boxShadow: `0 0 15px ${primary}, 0 0 30px ${primary}`,
            }}
          />
        </div>

        {/* Milestone Cards Container */}
        <div className="lg:col-span-12 space-y-8">
          {milestones.map((m, idx) => {
            const isHovered = hoveredIndex === idx;

            return (
              <motion.div
                key={m.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative lg:pl-28 group"
              >
                {/* Node Milestone Circle Icon (Desktop) */}
                <div
                  className="hidden lg:flex absolute left-8 top-8 -translate-x-1/2 w-12 h-12 rounded-xl bg-[#0B1120] border-2 items-center justify-center font-mono text-sm font-extrabold transition-all duration-300 z-10"
                  style={{
                    borderColor: isHovered ? primary : `rgba(${rgb}, 0.4)`,
                    color: isHovered ? '#ffffff' : secondary,
                    boxShadow: isHovered
                      ? `0 0 25px ${primary}, inset 0 0 12px rgba(${rgb}, 0.5)`
                      : `0 0 12px rgba(${rgb}, 0.2)`,
                    backgroundColor: isHovered ? `rgba(${rgb}, 0.2)` : '#0D0D0D',
                  }}
                >
                  {m.num}
                </div>

                {/* Main Milestone Card */}
                <div
                  className="relative p-6 sm:p-8 rounded-2xl bg-[#0D0D0D]/80 border transition-all duration-300 backdrop-blur-md overflow-hidden"
                  style={{
                    borderColor: isHovered ? `rgba(${rgb}, 0.6)` : 'rgba(255, 255, 255, 0.08)',
                    boxShadow: isHovered
                      ? `0 15px 40px rgba(0,0,0,0.8), 0 0 25px rgba(${rgb}, 0.2)`
                      : '0 10px 30px rgba(0,0,0,0.5)',
                  }}
                >
                  {/* Anime HUD Corner Brackets */}
                  <HudCornerBrackets color={primary} size={10} tag={`NODE // ${m.num}`} />

                  {/* Top Ambient Highlight Gradient */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[1px] transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(to right, transparent, ${primary}, transparent)`,
                      opacity: isHovered ? 1 : 0.2,
                    }}
                  />

                  {/* Tag & Title */}
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span
                      className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold tracking-widest uppercase border"
                      style={{
                        backgroundColor: `rgba(${rgb}, 0.1)`,
                        borderColor: `rgba(${rgb}, 0.3)`,
                        color: secondary,
                      }}
                    >
                      {m.tag}
                    </span>
                    <span className="text-xs font-mono text-gray-500">PHASE-0{m.num}</span>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-4 tracking-tight leading-snug group-hover:text-white transition-colors">
                    {m.title}
                  </h4>

                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 font-sans">
                    {m.narrative}
                  </p>

                  {/* Telemetry Highlight Chips */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-4 border-t border-white/10">
                    {m.metrics.map((metric, mIdx) => (
                      <div
                        key={mIdx}
                        className="flex items-center gap-2 p-2.5 rounded-lg bg-black/40 border border-white/5 group-hover:border-white/15 transition-colors"
                      >
                        <CheckCircle2
                          className="w-4 h-4 shrink-0 transition-transform group-hover:scale-110"
                          style={{ color: primary }}
                        />
                        <span className="text-xs font-mono font-semibold text-gray-200">
                          {metric}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
