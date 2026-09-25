import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Database, 
  Cpu, 
  Globe, 
  BarChart3, 
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

interface HeroPipelineProps {
  onSelectService?: (serviceTitle?: string) => void;
}

interface OutputNode {
  id: string;
  serviceKey: string;
  title: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
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
    serviceKey: 'Data Entry & Data Management',
    title: 'Analytics & Data',
    category: 'ETL & Record Systems',
    icon: BarChart3,
    techStack: 'Spreadsheet ETL • SQL • Quality Checks',
    badge: 'VERIFIED'
  }
];

export const HeroCanvas: React.FC<HeroPipelineProps> = ({ onSelectService }) => {
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

  const activeOutput = OUTPUT_NODES.find(n => n.id === hoveredNodeId) || null;

  const handleNodeClick = (serviceKey: string) => {
    if (onSelectService) {
      onSelectService(serviceKey);
    }
  };

  return (
    <div className="relative w-full rounded-2xl bg-[#090D16]/95 border border-emerald-500/20 shadow-[0_0_50px_rgba(34,197,94,0.12)] p-4 sm:p-5 backdrop-blur-xl overflow-hidden font-sans select-none group">
      {/* Ambient Neon Background Glows */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-emerald-500/8 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Cyber Background Grid */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #22c55e 1px, transparent 1px), linear-gradient(to bottom, #22c55e 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Header Bar */}
      <div className="relative z-20 flex items-center justify-between pb-3 mb-3 border-b border-emerald-500/15">
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block shadow-[0_0_8px_rgba(244,63,94,0.6)]" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e] inline-block shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
          <span className="text-[11px] font-mono text-gray-400 pl-2 hidden sm:inline">
            pipeline.techyora.dev/architecture
          </span>
        </div>

        {/* Live Status Badge */}
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B1120] border border-emerald-500/30 text-[10px] sm:text-[11px] font-mono text-emerald-400 shadow-[0_0_12px_rgba(34,197,94,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22c55e]" />
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
              className="p-3 rounded-xl bg-[#0B1120] border border-white/10 hover:border-emerald-500/40 shadow-inner group/input"
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
                      className="px-2 py-1.5 rounded-lg bg-[#070D18] border border-white/5 flex items-center gap-2 text-[10px] font-mono text-gray-300 hover:border-emerald-500/30 transition-colors"
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
              <line x1="0" y1="10" x2="40" y2="10" stroke="#0a2a18" strokeWidth="2.5" />
              <line 
                x1="0" 
                y1="10" 
                x2="40" 
                y2="10" 
                stroke="#22c55e" 
                strokeWidth="2" 
                strokeDasharray="4 6" 
                className="animate-flow-fast drop-shadow-[0_0_6px_rgba(34,197,94,0.8)]" 
              />
            </svg>
          </div>

          {/* 3. TECHYORA CORE ENGINE HUB */}
          <div className="w-[145px] lg:w-[160px] shrink-0">
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="relative p-3 rounded-2xl bg-[#0B1120] border-2 border-[#22c55e]/60 shadow-[0_0_30px_rgba(34,197,94,0.22)] text-center group/hub cursor-pointer"
            >
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1 rounded-2xl bg-emerald-500/15 blur-sm -z-10 group-hover/hub:bg-emerald-500/25 transition-all" />

              {/* Animated Gear & Chip Icon */}
              <div className="relative mx-auto w-10 h-10 rounded-xl bg-emerald-500/15 border border-[#22c55e] flex items-center justify-center text-[#22c55e] shadow-[0_0_15px_rgba(34,197,94,0.4)] mb-2">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 flex items-center justify-center text-[#22c55e]/50"
                >
                  <Settings className="w-8 h-8" />
                </motion.div>
                <Cpu className="w-4 h-4 relative z-10 text-[#22c55e]" />
              </div>

              {/* Hub Title */}
              <h3 className="text-xs font-extrabold font-mono text-white tracking-wider flex items-center justify-center gap-1">
                <span>TECHYORA</span>
                <span className="text-[#22c55e]">ENGINE</span>
              </h3>

              <p className="text-[9px] text-gray-400 font-mono mt-0.5">
                Processing Core
              </p>

              {/* Sub-pill */}
              <div className="mt-2 pt-1.5 border-t border-white/10 flex items-center justify-center gap-1.5 text-[8.5px] font-mono text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
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
                      stroke={isHovered ? "#064e29" : "#0d281a"}
                      strokeWidth={isHovered ? "3.5" : "2"}
                      strokeLinecap="round"
                    />

                    {/* Animated laser pulse */}
                    <path
                      d={pathD}
                      fill="none"
                      stroke={isHovered ? "#4ade80" : "#22c55e"}
                      strokeWidth={isHovered ? "2.5" : "1.5"}
                      strokeDasharray="5 8"
                      strokeLinecap="round"
                      filter={isHovered ? "url(#branch-laser)" : undefined}
                      style={{
                        opacity: isAnyHovered ? (isHovered ? 1 : 0.2) : 0.75,
                        transition: 'opacity 0.2s ease'
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
            <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider flex items-center justify-between pb-0.5 px-0.5">
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
                  className={`p-2.5 rounded-xl border cursor-pointer transition-all duration-200 flex items-center justify-between gap-2 ${
                    isHovered
                      ? 'bg-emerald-500/15 border-[#22c55e] shadow-[0_0_20px_rgba(34,197,94,0.3)] ring-1 ring-[#22c55e]/50'
                      : 'bg-[#0B1120]/90 border-white/10 hover:border-emerald-500/40'
                  }`}
                >
                  {/* Left Icon */}
                  <div 
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      isHovered 
                        ? 'bg-[#22c55e] text-black shadow-[0_0_10px_#22c55e]' 
                        : 'bg-white/5 text-[#22c55e] border border-white/10'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>

                  {/* Title and Category */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-1.5">
                      <span className="text-xs font-bold text-white group-hover:text-emerald-300 font-mono truncate">
                        {node.title}
                      </span>
                      <span className="text-[8.5px] font-mono text-emerald-400/90 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20 shrink-0">
                        {node.badge}
                      </span>
                    </div>
                    <div className="text-[9.5px] text-gray-400 font-mono truncate">
                      {node.category}
                    </div>
                  </div>

                  {/* Action Arrow */}
                  <ArrowRight className={`w-3.5 h-3.5 shrink-0 transition-transform ${isHovered ? 'text-[#22c55e] translate-x-0.5' : 'text-gray-500'}`} />
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
          <div className="p-3 rounded-xl bg-[#0B1120] border border-[#22c55e]/50 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-[#22c55e] flex items-center justify-center text-[#22c55e]">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white font-mono">TECHYORA ENGINE</h4>
                <p className="text-[9px] text-gray-400 font-mono">Continuous Orchestration</p>
              </div>
            </div>
            <span className="text-[9px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
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
                  className="p-2.5 rounded-xl bg-[#0B1120] border border-white/10 hover:border-emerald-500/50 flex flex-col justify-between cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <Icon className="w-3.5 h-3.5 text-[#22c55e]" />
                    <span className="text-[8px] font-mono text-emerald-400 bg-emerald-500/10 px-1 py-0.2 rounded border border-emerald-500/20">
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
      <div className="relative z-20 mt-3 pt-2.5 border-t border-emerald-500/15 min-h-[42px] flex items-center justify-between">
        <AnimatePresence mode="wait">
          {activeOutput ? (
            <motion.div
              key={activeOutput.id}
              initial={{ opacity: 0, y: 3 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -3 }}
              transition={{ duration: 0.15 }}
              className="w-full flex flex-wrap items-center justify-between gap-2 bg-[#06140e] border border-[#22c55e]/50 px-3 py-1.5 rounded-xl shadow-[0_0_15px_rgba(34,197,94,0.2)]"
            >
              <div className="flex items-center gap-2 min-w-0">
                <Sparkles className="w-3.5 h-3.5 text-[#22c55e] animate-pulse shrink-0" />
                <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase shrink-0">
                  {activeOutput.title} STACK:
                </span>
                <span className="text-[10.5px] font-mono text-white font-medium truncate">
                  {activeOutput.techStack}
                </span>
              </div>

              <button
                onClick={() => handleNodeClick(activeOutput.serviceKey)}
                className="text-[10px] font-mono text-emerald-300 hover:text-white flex items-center gap-1 font-semibold underline underline-offset-2 shrink-0 ml-auto"
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
                <CheckCircle2 className="w-3.5 h-3.5 text-[#22c55e] shrink-0" />
                <span className="text-gray-300 font-medium">END-TO-END PIPELINE SYNCHRONIZED</span>
                <span className="text-gray-600 hidden sm:inline">•</span>
                <span className="text-gray-500 hidden sm:inline">ZERO DATA LOSS</span>
              </div>

              <div className="flex items-center gap-3 text-[10px]">
                <span className="text-gray-400">THROUGHPUT: <span className="text-emerald-400 font-bold">100% RELIABLE</span></span>
                <span className="text-gray-600">|</span>
                <span className="text-gray-400">LATENCY: <span className="text-emerald-400 font-bold">&lt;15ms</span></span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
