import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Award, Zap, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useCyberDoor } from '../context/CyberDoorContext';
import { DecryptedText } from './anime/DecryptedText';
import { HudCornerBrackets } from './anime/HudCornerBrackets';
import { HolographicDossierCard } from './anime/HolographicDossierCard';
import { CyberCapabilitiesGrid } from './anime/CyberCapabilitiesGrid';
import { CyberMilestonePipeline } from './anime/CyberMilestonePipeline';
import { CyberWorkflowPipeline } from './anime/CyberWorkflowPipeline';

export const About: React.FC = () => {
  const { currentTheme } = useCyberDoor();
  const { primary, secondary, rgb } = currentTheme;

  const coreTech = [
    { name: 'ERPNext & Frappe', tag: 'Enterprise ERP' },
    { name: 'Python & FastAPI', tag: 'Custom Backend' },
    { name: 'React & Next.js', tag: '3D Web & UI' },
    { name: 'PostgreSQL & MariaDB', tag: 'Relational DB' },
    { name: 'Agentic AI & OCR', tag: 'Autonomous Bots' },
    { name: 'AWS & Docker Cloud', tag: '24/7 SLA DevOps' },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-[#050505] relative overflow-hidden border-t border-white/5">
      {/* Dynamic Theme Glow Orbs */}
      <div
        className="absolute top-1/4 left-0 w-96 h-96 rounded-full blur-[150px] pointer-events-none opacity-20 transition-colors duration-700"
        style={{ backgroundColor: primary }}
      />
      <div
        className="absolute bottom-1/3 right-0 w-96 h-96 rounded-full blur-[170px] pointer-events-none opacity-15 transition-colors duration-700"
        style={{ backgroundColor: secondary }}
      />

      {/* Cyber Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* =========================================================================
            SECTION 1: HERO OVERVIEW & DOSSIER GRID
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Narrative Content, Mission & Live Metrics */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Section Header */}
            <div>
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
                  <span>ABOUT TECHYORA // SECTOR-1 INTEL</span>
                </div>

                <div className="inline-flex items-center gap-2 text-[10px] font-mono text-gray-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full animate-ping" style={{ backgroundColor: primary }} />
                  <span>STATUS: DEDICATED IN-HOUSE COLLECTIVE</span>
                </div>
              </div>

              {/* Decrypted Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                <DecryptedText text={PERSONAL_INFO.bioHeading} speed={24} />
              </h2>
            </div>

            {/* Bio Narrative Terminal Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative space-y-6 text-gray-300 text-base sm:text-lg leading-relaxed bg-[#0D0D0D]/90 p-7 sm:p-8 rounded-2xl border backdrop-blur-md group"
              style={{
                borderColor: `rgba(${rgb}, 0.3)`,
                boxShadow: `0 12px 35px rgba(0,0,0,0.6), inset 0 0 25px rgba(${rgb}, 0.05)`,
              }}
            >
              <HudCornerBrackets color={primary} size={10} tag="MISSION // MANIFEST" />

              {/* Top Accent Seam */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-75"
                style={{
                  background: `linear-gradient(to right, transparent, ${primary}, transparent)`,
                  boxShadow: `0 0 10px ${primary}`,
                }}
              />

              <p className="font-semibold text-white leading-relaxed">
                {PERSONAL_INFO.bioText1}
              </p>
              <p className="text-gray-400 leading-relaxed font-sans text-sm sm:text-base">
                {PERSONAL_INFO.bioText2}
              </p>

              <div className="pt-2 border-t border-white/10 flex flex-wrap items-center justify-between text-xs font-mono text-gray-400 gap-2">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" style={{ color: primary }} />
                  <span>COMMERCIALLY TRANSFORMATIVE</span>
                </span>
                <span className="text-gray-500">ZERO AGENCY OVERHEAD</span>
              </div>
            </motion.div>

            {/* 4 Interactive Enterprise Metrics Chips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3.5"
            >
              {PERSONAL_INFO.stats.map((stat, sidx) => (
                <div
                  key={sidx}
                  className="p-4 rounded-xl bg-[#0D0D0D]/80 border border-white/10 hover:border-transparent transition-all duration-300 group flex flex-col justify-between"
                  style={{
                    borderColor: 'rgba(255, 255, 255, 0.08)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `rgba(${rgb}, 0.5)`;
                    e.currentTarget.style.boxShadow = `0 8px 25px rgba(0,0,0,0.7), 0 0 15px rgba(${rgb}, 0.2)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <span
                    className="text-2xl sm:text-3xl font-mono font-extrabold tracking-tight"
                    style={{ color: primary }}
                  >
                    {stat.value}{stat.suffix}
                  </span>
                  <span className="text-xs text-gray-400 font-sans mt-1 leading-snug">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

          </motion.div>

          {/* Right Column: 3D Holographic Dossier Card + Active Tech Engine */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 w-full space-y-6"
          >
            {/* 3D Holographic Dossier Card */}
            <HolographicDossierCard />

            {/* Companion Module: Active Core Tech Stack Radar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="p-5 sm:p-6 rounded-2xl bg-[#0D0D0D]/90 border backdrop-blur-md relative overflow-hidden group"
              style={{
                borderColor: `rgba(${rgb}, 0.3)`,
                boxShadow: `0 10px 30px rgba(0,0,0,0.6)`,
              }}
            >
              <HudCornerBrackets color={primary} size={8} tag="STACK // RADAR" />

              <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-white/10 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5" style={{ color: primary }} />
                  <span className="font-bold tracking-wider uppercase text-white">CORE ENTERPRISE ENGINE</span>
                </div>
                <span className="text-[10px] text-gray-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full animate-ping" style={{ backgroundColor: secondary }} />
                  <span>ALL CORES ONLINE</span>
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {coreTech.map((tech, tidx) => (
                  <div
                    key={tidx}
                    className="p-2.5 rounded-lg bg-black/50 border border-white/5 hover:border-white/20 transition-all flex flex-col group/item"
                  >
                    <span className="text-xs font-mono font-bold text-gray-200 group-hover/item:text-white transition-colors">
                      {tech.name}
                    </span>
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">
                      {tech.tag}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-gray-400">
                <span className="flex items-center gap-1">
                  <Zap className="w-3 h-3" style={{ color: primary }} />
                  <span>HIGH-CONCURRENCY ARCHITECTURE</span>
                </span>
                <span className="flex items-center gap-1" style={{ color: secondary }}>
                  <Award className="w-3 h-3" />
                  <span>SLA BACKED</span>
                </span>
              </div>
            </motion.div>

          </motion.div>

        </div>

        {/* =========================================================================
            SECTION 2: 6-DISCIPLINE CYBER CAPABILITIES MATRIX
            ========================================================================= */}
        <CyberCapabilitiesGrid />

        {/* =========================================================================
            SECTION 3: STRATEGIC MILESTONES VERTICAL ENERGY CONDUIT PIPELINE
            ========================================================================= */}
        <div id="milestones">
          <CyberMilestonePipeline />
        </div>

        {/* =========================================================================
            SECTION 4: OPERATIONAL EXECUTION WORKFLOW (6-PHASE PROTOCOL)
            ========================================================================= */}
        <CyberWorkflowPipeline />

      </div>
    </section>
  );
};
