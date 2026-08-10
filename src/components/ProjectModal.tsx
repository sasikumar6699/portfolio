import React from 'react';
import { X, CheckCircle, Cpu, ArrowUpRight, ShieldCheck, Terminal } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onInquire: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onInquire }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#0D0D0D] border border-[#39FF14]/40 rounded-2xl shadow-[0_0_50px_rgba(57,255,20,0.25)] overflow-hidden my-auto max-h-[90vh] flex flex-col">
        
        {/* Header Bar */}
        <div className="px-6 py-4 bg-[#050505] border-b border-white/10 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-[#39FF14]/10 border border-[#39FF14]/30 text-xs font-mono text-[#39FF14]">
              {project.category} CASE STUDY
            </span>
            <span className="text-xs font-mono text-gray-400 hidden sm:inline-block">ID: {project.id}</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          
          {/* Title & Headline */}
          <div className="space-y-3">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {project.title}
            </h3>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Visual Graphic Banner */}
          <div className={`w-full h-48 sm:h-64 rounded-xl bg-gradient-to-br ${project.gradientFrom} border border-white/10 p-6 flex flex-col justify-between relative overflow-hidden`}>
            <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
            <div className="relative z-10 flex items-center justify-between text-xs font-mono text-[#39FF14]">
              <span className="flex items-center gap-2">
                <Terminal className="w-4 h-4" /> SYSTEM DIAGRAM ARCHITECTURE
              </span>
              <span>CLIENT TYPE: {project.clientType}</span>
            </div>
            
            <div className="relative z-10 text-center py-4">
              <div className="inline-block px-6 py-3 rounded-xl bg-[#050505]/90 border border-[#39FF14]/50 shadow-[0_0_20px_rgba(57,255,20,0.3)]">
                <span className="text-lg sm:text-xl font-mono font-bold tracking-wider text-[#39FF14]">
                  {project.imagePlaceholderText}
                </span>
              </div>
            </div>

            <div className="relative z-10 text-xs font-mono text-gray-400 flex items-center justify-between">
              <span>STATUS: PRODUCTION DEPLOYED</span>
              <span>SECURITY: AUDITED</span>
            </div>
          </div>

          {/* Key Deliverables & Features */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#39FF14]" />
              <span>Key Capabilities & Implemented Features</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feature, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-[#050505] border border-white/10 text-xs sm:text-sm text-gray-300 flex items-start gap-2.5">
                  <span className="text-[#39FF14] font-mono shrink-0 mt-0.5">➔</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture & Business Impact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="p-5 rounded-xl bg-[#050505] border border-white/10 space-y-2">
              <h5 className="text-xs font-mono text-[#39FF14] uppercase tracking-wider flex items-center gap-2">
                <Cpu className="w-4 h-4" /> Technical Architecture
              </h5>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {project.architectureSummary}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#050505] border border-white/10 space-y-2">
              <h5 className="text-xs font-mono text-[#39FF14] uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Measurable Business Impact
              </h5>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                {project.businessImpact}
              </p>
            </div>

          </div>

          {/* Technologies Stack Tags */}
          <div className="space-y-3 pt-2">
            <span className="text-xs font-mono text-gray-400 block">TECHNOLOGY STACK UTILIZED:</span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-[#050505] border border-[#39FF14]/30 text-xs font-mono text-[#39FF14]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-[#050505] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div className="text-xs text-gray-400">
            Want a similar solution custom-built for your business?
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 text-xs font-semibold"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onInquire(`Custom Build like ${project.title}`);
              }}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#39FF14] text-black text-xs font-bold shadow-[0_0_20px_rgba(57,255,20,0.4)] hover:bg-[#45ff24]"
            >
              <span>Build Similar Solution</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
