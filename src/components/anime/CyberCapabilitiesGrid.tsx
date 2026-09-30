import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Database, Code, Globe, Cpu, PenTool, ShieldCheck, ArrowUpRight, Sparkles } from 'lucide-react';
import { useCyberDoor } from '../../context/CyberDoorContext';
import { HudCornerBrackets } from './HudCornerBrackets';
import { DecryptedText } from './DecryptedText';

interface CapabilityItem {
  id: string;
  code: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  icon: React.ReactNode;
}

export const CyberCapabilitiesGrid: React.FC = () => {
  const { currentTheme } = useCyberDoor();
  const { primary, secondary, rgb } = currentTheme;
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const capabilities: CapabilityItem[] = [
    {
      id: 'cap-01',
      code: 'CAP-01',
      title: 'ERP, CRM & HCM Systems',
      category: 'ENTERPRISE ARCHITECTURE',
      description: 'ERPNext & Frappe implementations, custom DocTypes, automated GST accounting, lead pipelines, attendance-linked HCM payroll, and multi-warehouse supply chain.',
      tech: ['ERPNext', 'Frappe', 'MariaDB', 'REST APIs'],
      icon: <Database className="w-5 h-5" />,
    },
    {
      id: 'cap-02',
      code: 'CAP-02',
      title: 'Custom Business Software',
      category: 'BESPOKE ENGINEERING',
      description: 'Specialized business applications tailored to unique operational models: GST billing, inventory control, fleet GPS management, dispatch tracking, and warehouse automation.',
      tech: ['Python', 'PostgreSQL', 'FastAPI', 'Node.js'],
      icon: <Code className="w-5 h-5" />,
    },
    {
      id: 'cap-03',
      code: 'CAP-03',
      title: '3D Web & Interactive Portals',
      category: 'IMMERSIVE EXPERIENCES',
      description: 'High-performance interactive 3D WebGL websites, corporate platforms, e-commerce stores, and SaaS portals engineered with sub-second latency and 99+ Core Web Vitals.',
      tech: ['Three.js', 'React', 'Next.js', 'Tailwind'],
      icon: <Globe className="w-5 h-5" />,
    },
    {
      id: 'cap-04',
      code: 'CAP-04',
      title: 'Agentic AI & Automation',
      category: 'AUTONOMOUS SYSTEMS',
      description: 'Multi-agent autonomous workflows, conversational customer support chatbots for WhatsApp & Web, intelligent document OCR processing, and API pipeline automations.',
      tech: ['LangChain', 'n8n', 'OpenAI/Claude', 'OCR Engine'],
      icon: <Cpu className="w-5 h-5" />,
    },
    {
      id: 'cap-05',
      code: 'CAP-05',
      title: 'Brand Identity & Print Design',
      category: 'CREATIVE VISUALS',
      description: 'End-to-end commercial design: professional brand guidelines, vector logos, sales pamphlets, corporate brochures, large-format flex banners, and marketing creatives.',
      tech: ['Vector Branding', 'Flex & Banners', 'Figma', 'Print Collateral'],
      icon: <PenTool className="w-5 h-5" />,
    },
    {
      id: 'cap-06',
      code: 'CAP-06',
      title: '24/7 AMC & Cloud DevOps',
      category: 'CONTINUOUS RELIABILITY',
      description: 'Proactive Annual Maintenance Contracts (AMC), 99.9% uptime SLA commitments, continuous software patches, database tuning, automated backups, and 24/7 priority helpdesk.',
      tech: ['24/7 SLA', 'AWS / Docker', 'Disaster Recovery', 'Security Patches'],
      icon: <ShieldCheck className="w-5 h-5" />,
    },
  ];

  // Stagger container animation variant
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 25, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <div id="capabilities" className="mt-24 pt-16 border-t border-white/10 relative">
      {/* Background Accent Glow */}
      <div
        className="absolute top-1/2 left-1/3 -translate-y-1/2 w-80 h-80 rounded-full blur-[160px] pointer-events-none opacity-10 transition-colors duration-700"
        style={{ backgroundColor: primary }}
      />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase border mb-3"
            style={{
              backgroundColor: `rgba(${rgb}, 0.08)`,
              borderColor: `rgba(${rgb}, 0.3)`,
              color: secondary,
            }}
          >
            <Sparkles className="w-3.5 h-3.5" style={{ color: primary }} />
            <span>DISCIPLINE SPECTRUM // FULL-STACK CAPABILITIES</span>
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            <DecryptedText text="What Our Engineering Team Delivers" speed={28} />
          </h3>
          <p className="text-gray-400 mt-2 text-sm sm:text-base">
            Six interconnected disciplines delivering turnkey enterprise digital transformation with zero agency fragmentation.
          </p>
        </motion.div>

        {/* Telemetry Badge */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden sm:flex items-center gap-2 text-xs font-mono text-gray-400 bg-[#0D0D0D] px-3.5 py-1.5 rounded-full border border-white/10 self-start md:self-auto"
        >
          <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: primary }} />
          <span>CAPACITY: 6 ACTIVE CORES // ALL OPERATIONAL</span>
        </motion.div>
      </div>

      {/* 3x2 Interactive Cyber Capability Matrix */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {capabilities.map((cap) => {
          const isHovered = hoveredId === cap.id;

          return (
            <motion.div
              key={cap.id}
              variants={cardVariants}
              onMouseEnter={() => setHoveredId(cap.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="relative p-6 sm:p-7 rounded-2xl bg-[#0D0D0D]/90 border transition-all duration-300 group flex flex-col justify-between overflow-hidden backdrop-blur-md"
              style={{
                borderColor: isHovered ? `rgba(${rgb}, 0.65)` : 'rgba(255, 255, 255, 0.08)',
                boxShadow: isHovered
                  ? `0 18px 40px rgba(0,0,0,0.85), 0 0 25px rgba(${rgb}, 0.2)`
                  : '0 8px 25px rgba(0,0,0,0.5)',
                transform: isHovered ? 'translateY(-4px)' : 'none',
              }}
            >
              {/* Anime Corner Reticles on Hover */}
              <HudCornerBrackets color={primary} size={10} tag={cap.code} />

              {/* Laser Top Sweep Accent */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] transition-all duration-300"
                style={{
                  background: `linear-gradient(to right, transparent, ${primary}, transparent)`,
                  opacity: isHovered ? 1 : 0,
                  boxShadow: `0 0 10px ${primary}`,
                }}
              />

              <div className="space-y-4 relative z-10">
                {/* Header: Icon, Category & Code */}
                <div className="flex items-start justify-between">
                  <div
                    className="w-12 h-12 rounded-xl bg-[#050505] border flex items-center justify-center transition-all duration-300"
                    style={{
                      borderColor: isHovered ? primary : 'rgba(255, 255, 255, 0.1)',
                      color: isHovered ? primary : '#ffffff',
                      boxShadow: isHovered ? `0 0 15px rgba(${rgb}, 0.4)` : 'none',
                    }}
                  >
                    {cap.icon}
                  </div>

                  <div className="text-right">
                    <span
                      className="text-xs font-mono font-bold tracking-widest block transition-colors"
                      style={{ color: isHovered ? secondary : 'rgba(255, 255, 255, 0.4)' }}
                    >
                      {cap.code}
                    </span>
                    <span className="text-[10px] font-mono uppercase text-gray-500 tracking-wider">
                      {cap.category}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h4 className="text-xl font-bold text-white tracking-tight flex items-center justify-between group-hover:text-white">
                  <span>{cap.title}</span>
                  <ArrowUpRight
                    className="w-4 h-4 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300"
                    style={{ color: primary }}
                  />
                </h4>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed font-sans">
                  {cap.description}
                </p>
              </div>

              {/* Footer Tech Tags */}
              <div className="pt-5 mt-4 border-t border-white/5 flex flex-wrap gap-1.5 relative z-10">
                {cap.tech.map((t, tidx) => (
                  <span
                    key={tidx}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/5 text-gray-300 group-hover:border-white/10 transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};
