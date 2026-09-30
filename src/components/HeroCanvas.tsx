import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Database, 
  Cpu, 
  Globe, 
  Layers, 
  Settings, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  ArrowUpRight,
  FileText,
  Repeat,
  Server
} from 'lucide-react';
import { useCyberDoor } from '../context/CyberDoorContext';

interface HeroPipelineProps {
  onSelectService?: (serviceTitle?: string) => void;
}

interface OutputNode {
  id: string;
  serviceKey: string;
  title: string;
  category: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  techStack: string;
  badge: string;
}

const OUTPUT_NODES: OutputNode[] = [
  {
    id: 'erp',
    serviceKey: 'ERP, CRM & Business Solutions',
    title: 'Enterprise ERP',
    category: 'ERPNext • Frappe • CRM',
    icon: Database,
    techStack: 'ERPNext • Frappe • MariaDB • Accounting',
    badge: 'ACTIVE'
  },
  {
    id: 'ai',
    serviceKey: 'AI & Automation',
    title: 'AI & Agents',
    category: 'Autonomous Workflows',
    icon: Cpu,
    techStack: 'Python • LLMs • OCR Document AI • Agents',
    badge: 'PARALLEL'
  },
  {
    id: 'web',
    serviceKey: 'Web Development & Design',
    title: 'Web & SaaS',
    category: 'React • Next.js • Fast APIs',
    icon: Globe,
    techStack: 'React • TypeScript • Tailwind • Next.js',
    badge: '100 SCORE'
  },
  {
    id: 'data',
    serviceKey: 'Custom Software Solutions',
    title: 'Custom Software',
    category: 'Billing • Logistics • Fleet',
    icon: Server,
    techStack: 'PostgreSQL • FastAPI • Docker • REST',
    badge: 'REALTIME'
  }
];

export const HeroCanvas: React.FC<HeroPipelineProps> = ({ onSelectService }) => {
  const { currentTheme } = useCyberDoor();
  const { primary, secondary, rgb } = currentTheme;

  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

  const activeOutput = OUTPUT_NODES.find(n => n.id === hoveredNodeId);

  const handleNodeClick = (serviceKey: string) => {
    if (onSelectService) {
      onSelectService(serviceKey);
    }
  };

  return (
    <div
      className="relative w-full rounded-2xl bg-[#090D16]/95 border p-4 sm:p-5 backdrop-blur-xl overflow-hidden font-sans select-none group transition-all duration-300"
      style={{
        borderColor: `rgba(${rgb}, 0.25)`,
        boxShadow: `0 0 50px rgba(${rgb}, 0.12)`,
      }}
    >
      {/* Ambient Theme Background Glows */}
      <div
        className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl pointer-events-none transition-colors duration-700"
        style={{ backgroundColor: `rgba(${rgb}, 0.1)` }}
      />
      <div
        className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full blur-3xl pointer-events-none transition-colors duration-700"
        style={{ backgroundColor: `rgba(${rgb}, 0.08)` }}
      />

      {/* Decorative Cyber Background Grid */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, ${primary} 1px, transparent 1px), linear-gradient(to bottom, ${primary} 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Header Bar */}
      <div
        className="relative z-20 flex items-center justify-between pb-3 mb-3 border-b"
        style={{ borderColor: `rgba(${rgb}, 0.15)` }}
      >
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block shadow-[0_0_8px_rgba(244,63,94,0.6)]" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
          <span
            className="w-2.5 h-2.5 rounded-full inline-block transition-colors"
            style={{
              backgroundColor: primary,
              boxShadow: `0 0 8px ${primary}`,
            }}
          />
          <span className="text-[11px] font-mono text-gray-400 pl-2 hidden sm:inline">
            pipeline.techyora.dev/architecture
          </span>
        </div>

        {/* Live Status Badge */}
        <div className="flex items-center gap-2">
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B1120] border text-[10px] sm:text-[11px] font-mono transition-all"
            style={{
              borderColor: `rgba(${rgb}, 0.3)`,
              color: secondary,
              boxShadow: `0 0 12px rgba(${rgb}, 0.15)`,
            }}
          >
            <span className="relative flex h-2 w-2">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ backgroundColor: primary }}
              />
              <span
                className="relative inline-flex rounded-full h-2 w-2"
                style={{ backgroundColor: primary }}
              />
            </span>
            <span className="font-semibold tracking-wide">SYSTEM PIPELINE LIVE</span>
            <span className="text-gray-500 text-[10px] hidden xs:inline">| ZERO LATENCY</span>
          </span>
        </div>
      </div>

      {/* Main Pipeline Flow Container */}
      <div className="relative z-10 w-full py-1">

        {/* Desktop Pipeline Flow (MD and Up) */}
        <div className="hidden md:flex items-center justify-between gap-1 w-full min-h-[300px]">

          {/* 1. INPUT LAYER CARD */}
          <div className="w-[160px] lg:w-[175px] shrink-0">
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="p-3 rounded-xl bg-[#0B1120] border border-white/10 hover:border-white/30 shadow-inner group/input"
            >
              <div className="flex items-center gap-2 pb-2 mb-2 border-b border-white/5">
                <div className="p-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400">
                  <Layers className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[9px] font-mono text-amber-400 uppercase tracking-wider font-semibold block">
                    INPUT LAYER
                  </span>
                  <h4 className="text-xs font-bold text-white leading-tight truncate">
                    Client Needs
                  </h4>
                </div>
              </div>

              {/* Input Badges */}
              <div className="space-y-1.5">
                {[
                  { label: "Raw Data", icon: FileText },
                  { label: "Manual Workflows", icon: Repeat },
                  { label: "Legacy Systems", icon: Server }
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="px-2 py-1.5 rounded-lg bg-[#070D18] border border-white/5 flex items-center gap-2 text-[10px] font-mono text-gray-300 hover:border-white/20 transition-colors"
                    >
                      <Icon className="w-3 h-3 text-amber-400/80 shrink-0" />
                      <span className="truncate">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* 2. CONNECTOR BEAM 1 (Input -> Engine) */}
          <div className="w-8 lg:w-11 shrink-0 flex items-center justify-center relative h-10">
            <svg className="w-full h-8 overflow-visible" viewBox="0 0 40 20" preserveAspectRatio="none">
              <line x1="0" y1="10" x2="40" y2="10" stroke={`rgba(${rgb}, 0.2)`} strokeWidth="2.5" />
              <line 
                x1="0" 
                y1="10" 
                x2="40" 
                y2="10" 
                stroke={primary} 
                strokeWidth="2" 
                strokeDasharray="4 6" 
                className="animate-flow-fast"
                style={{
                  filter: `drop-shadow(0 0 6px ${primary})`,
                }}
              />
            </svg>
          </div>

          {/* 3. TECHYORA CORE ENGINE HUB */}
          <div className="w-[145px] lg:w-[160px] shrink-0">
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="relative p-3 rounded-2xl bg-[#0B1120] border-2 text-center group/hub cursor-pointer transition-all duration-300"
              style={{
                borderColor: `rgba(${rgb}, 0.6)`,
                boxShadow: `0 0 30px rgba(${rgb}, 0.22)`,
              }}
            >
              {/* Outer Glow Ring */}
              <div
                className="absolute -inset-1 rounded-2xl blur-sm -z-10 transition-all opacity-40 group-hover/hub:opacity-75"
                style={{ backgroundColor: primary }}
              />

              {/* Animated Gear & Chip Icon */}
              <div
                className="relative mx-auto w-10 h-10 rounded-xl border flex items-center justify-center mb-2 transition-all"
                style={{
                  backgroundColor: `rgba(${rgb}, 0.15)`,
                  borderColor: primary,
                  color: primary,
                  boxShadow: `0 0 15px rgba(${rgb}, 0.4)`,
                }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 flex items-center justify-center opacity-50"
                  style={{ color: primary }}
                >
                  <Settings className="w-8 h-8" />
                </motion.div>
                <Cpu className="w-4 h-4 relative z-10" style={{ color: primary }} />
              </div>

              {/* Hub Title */}
              <h3 className="text-xs font-extrabold font-mono text-white tracking-wider flex items-center justify-center gap-1">
                <span>TECHYORA</span>
                <span style={{ color: primary }}>ENGINE</span>
              </h3>

              <p className="text-[9px] text-gray-400 font-mono mt-0.5">
                Processing Core
              </p>

              {/* Sub-pill */}
              <div className="mt-2 pt-1.5 border-t border-white/10 flex items-center justify-center gap-1.5 text-[8.5px] font-mono" style={{ color: secondary }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: primary }} />
                <span>ACTIVE PIPELINE</span>
              </div>
            </motion.div>
          </div>

          {/* 4. BRANCHING CONNECTOR BEAM (Engine -> 4 Outputs) */}
          <div className="w-8 lg:w-12 shrink-0 flex items-center justify-center relative h-64">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 45 240" preserveAspectRatio="none">
              <defs>
                <filter id="branch-laser" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {[
                { id: 'erp', y: 30 },
                { id: 'ai', y: 90 },
                { id: 'web', y: 150 },
                { id: 'data', y: 210 }
              ].map((branch) => {
                const isHovered = hoveredNodeId === branch.id;
                const isAnyHovered = hoveredNodeId !== null;
                const pathD = `M 0,120 C 22,120 22,${branch.y} 45,${branch.y}`;

                return (
                  <g key={branch.id}>
                    {/* Background line */}
                    <path
                      d={pathD}
                      fill="none"
                      stroke={isHovered ? `rgba(${rgb}, 0.5)` : `rgba(${rgb}, 0.15)`}
                      strokeWidth={isHovered ? "3.5" : "2"}
                      strokeLinecap="round"
                    />

                    {/* Animated laser pulse */}
                    <path
                      d={pathD}
                      fill="none"
                      stroke={primary}
                      strokeWidth={isHovered ? "2.5" : "1.5"}
                      strokeDasharray="5 8"
                      strokeLinecap="round"
                      filter={isHovered ? "url(#branch-laser)" : undefined}
                      style={{
                        opacity: isAnyHovered ? (isHovered ? 1 : 0.2) : 0.75,
                        transition: 'opacity 0.2s ease',
                        filter: isHovered ? `drop-shadow(0 0 8px ${primary})` : undefined,
                      }}
                      className="animate-flow"
                    />
                  </g>
                );
              })}
            </svg>
          </div>

          {/* 5. OUTPUT DELIVERABLES (4 Rows) */}
          <div className="flex-1 min-w-0 space-y-2">
            <div className="text-[10px] font-mono uppercase tracking-wider flex items-center justify-between pb-0.5 px-0.5" style={{ color: secondary }}>
              <span>OUTPUT DELIVERABLES</span>
              <span className="text-gray-500 text-[8.5px]">HOVER TO INSPECT</span>
            </div>

            {OUTPUT_NODES.map((node) => {
              const Icon = node.icon;
              const isHovered = hoveredNodeId === node.id;

              return (
                <motion.div
                  key={node.id}
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.15 }}
                  onMouseEnter={() => setHoveredNodeId(node.id)}
                  onMouseLeave={() => setHoveredNodeId(null)}
                  onClick={() => handleNodeClick(node.serviceKey)}
                  className="p-2.5 rounded-xl border cursor-pointer transition-all duration-200 flex items-center justify-between gap-2"
                  style={{
                    backgroundColor: isHovered ? `rgba(${rgb}, 0.14)` : 'rgba(11, 17, 32, 0.9)',
                    borderColor: isHovered ? primary : 'rgba(255, 255, 255, 0.1)',
                    boxShadow: isHovered ? `0 0 20px rgba(${rgb}, 0.3)` : 'none',
                  }}
                >
                  {/* Left Icon */}
                  <div 
                    className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors"
                    style={{
                      backgroundColor: isHovered ? primary : 'rgba(255, 255, 255, 0.05)',
                      color: isHovered ? '#000000' : primary,
                      boxShadow: isHovered ? `0 0 10px ${primary}` : 'none',
                      borderColor: isHovered ? primary : 'rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>

                  {/* Title and Category */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-1.5">
                      <span className="text-xs font-bold text-white font-mono truncate">
                        {node.title}
                      </span>
                      <span
                        className="text-[8.5px] font-mono px-1.5 py-0.5 rounded border shrink-0"
                        style={{
                          color: secondary,
                          backgroundColor: `rgba(${rgb}, 0.12)`,
                          borderColor: `rgba(${rgb}, 0.25)`,
                        }}
                      >
                        {node.badge}
                      </span>
                    </div>
                    <div className="text-[9.5px] text-gray-400 font-mono truncate">
                      {node.category}
                    </div>
                  </div>

                  {/* Action Arrow */}
                  <ArrowRight
                    className="w-3.5 h-3.5 shrink-0 transition-transform"
                    style={{
                      color: isHovered ? primary : '#6b7280',
                      transform: isHovered ? 'translateX(2px)' : 'none',
                    }}
                  />
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Mobile/Tablet Adaptive Stack (< MD) */}
        <div className="md:hidden space-y-3">
          {/* Mobile Input */}
          <div className="p-3 rounded-xl bg-[#0B1120] border border-white/10">
            <span className="text-[9px] font-mono text-amber-400 uppercase font-semibold">INPUT LAYER: CLIENT BUSINESS NEEDS</span>
            <div className="flex flex-wrap gap-1.5 mt-1.5">
              {['Raw Data', 'Manual Workflows', 'Legacy Systems'].map(t => (
                <span key={t} className="px-2 py-0.5 rounded bg-[#070D18] border border-white/5 text-[10px] font-mono text-gray-300">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Mobile Center Engine */}
          <div
            className="p-3 rounded-xl bg-[#0B1120] border flex items-center justify-between"
            style={{ borderColor: `rgba(${rgb}, 0.5)` }}
          >
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-lg border flex items-center justify-center"
                style={{
                  backgroundColor: `rgba(${rgb}, 0.15)`,
                  borderColor: primary,
                  color: primary,
                }}
              >
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white font-mono">TECHYORA ENGINE</h4>
                <p className="text-[9px] text-gray-400 font-mono">Continuous Orchestration</p>
              </div>
            </div>
            <span
              className="text-[9px] font-mono px-2 py-0.5 rounded border"
              style={{
                color: secondary,
                backgroundColor: `rgba(${rgb}, 0.12)`,
                borderColor: `rgba(${rgb}, 0.25)`,
              }}
            >
              ACTIVE
            </span>
          </div>

          {/* Mobile 4 Deliverables (2x2 Grid) */}
          <div className="grid grid-cols-2 gap-2">
            {OUTPUT_NODES.map((node) => {
              const Icon = node.icon;
              return (
                <div
                  key={node.id}
                  onClick={() => handleNodeClick(node.serviceKey)}
                  className="p-2.5 rounded-xl bg-[#0B1120] border border-white/10 flex flex-col justify-between cursor-pointer transition-colors"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = primary;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  }}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <Icon className="w-3.5 h-3.5" style={{ color: primary }} />
                    <span
                      className="text-[8px] font-mono px-1 py-0.2 rounded border"
                      style={{
                        color: secondary,
                        backgroundColor: `rgba(${rgb}, 0.12)`,
                        borderColor: `rgba(${rgb}, 0.25)`,
                      }}
                    >
                      {node.badge}
                    </span>
                  </div>
                  <div className="text-xs font-bold text-white font-mono truncate">{node.title}</div>
                  <div className="text-[9px] text-gray-400 font-mono truncate">{node.category}</div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Floating Tech Stack Badge Footer Bar */}
      <div
        className="relative z-20 mt-3 pt-2.5 border-t min-h-[42px] flex items-center justify-between"
        style={{ borderColor: `rgba(${rgb}, 0.18)` }}
      >
        <AnimatePresence mode="wait">
          {activeOutput ? (
            <motion.div
              key={activeOutput.id}
              initial={{ opacity: 0, y: 3 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -3 }}
              transition={{ duration: 0.15 }}
              className="w-full flex flex-wrap items-center justify-between gap-2 bg-[#06140e] border px-3 py-1.5 rounded-xl"
              style={{
                borderColor: `rgba(${rgb}, 0.5)`,
                boxShadow: `0 0 15px rgba(${rgb}, 0.2)`,
              }}
            >
              <div className="flex items-center gap-2 min-w-0">
                <Sparkles className="w-3.5 h-3.5 animate-pulse shrink-0" style={{ color: primary }} />
                <span className="text-[10px] font-mono font-bold uppercase shrink-0" style={{ color: secondary }}>
                  {activeOutput.title} STACK:
                </span>
                <span className="text-[10.5px] font-mono text-white font-medium truncate">
                  {activeOutput.techStack}
                </span>
              </div>

              <button
                onClick={() => handleNodeClick(activeOutput.serviceKey)}
                className="text-[10px] font-mono flex items-center gap-1 font-semibold underline underline-offset-2 shrink-0 ml-auto transition-colors"
                style={{ color: secondary }}
              >
                <span>Inquire Deliverable</span>
                <ArrowUpRight className="w-3 h-3" />
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="default-telemetry"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full flex flex-wrap items-center justify-between gap-2 text-[10.5px] font-mono text-gray-400"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" style={{ color: primary }} />
                <span className="text-gray-300 font-medium">END-TO-END PIPELINE SYNCHRONIZED</span>
                <span className="text-gray-600 hidden sm:inline">•</span>
                <span className="text-gray-500 hidden sm:inline">ZERO DATA LOSS</span>
              </div>

              <div className="flex items-center gap-3 text-[10px]">
                <span className="text-gray-400">THROUGHPUT: <span className="font-bold" style={{ color: secondary }}>100% RELIABLE</span></span>
                <span className="text-gray-600">|</span>
                <span className="text-gray-400">LATENCY: <span className="font-bold" style={{ color: secondary }}>&lt;15ms</span></span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
