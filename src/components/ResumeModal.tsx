import React from 'react';
import { X, Download, Copy, Printer, CheckCircle, Briefcase, Code, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCopySuccess: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, onCopySuccess }) => {
  if (!isOpen) return null;

  const handleCopyResume = () => {
    const text = `
TECHYORA
${PERSONAL_INFO.title}
Email: ${PERSONAL_INFO.email} | Mobile: ${PERSONAL_INFO.Mobile} | Experience: ${PERSONAL_INFO.experience}

SUMMARY:
${PERSONAL_INFO.bioText1}

CORE SKILLS:
- ERP & Frameworks: ERPNext, Frappe Framework, MariaDB, Python
- Web & Frontend: React, TypeScript, Tailwind CSS, REST APIs, HTML5
- AI & Automation: Generative AI, AI Agents, OCR Document Processing
- Business Consulting: Requirement Scoping, Client Advisory, Agile Delivery

EXPERIENCE HIGHLIGHTS:
9+ Years as Freelance Technology Consultant delivering software, ERP implementations, and business process automation for 30+ client organizations.
    `.trim();

    navigator.clipboard.writeText(text);
    onCopySuccess();
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#0D0D0D] border border-[#39FF14]/40 rounded-2xl shadow-[0_0_50px_rgba(57,255,20,0.3)] overflow-hidden my-auto max-h-[90vh] flex flex-col">
        
        {/* Modal Bar */}
        <div className="px-6 py-4 bg-[#050505] border-b border-white/10 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-[#39FF14]/10 border border-[#39FF14]/30 text-xs font-mono text-[#39FF14]">
              OFFICIAL CV SUMMARY
            </span>
            <span className="text-xs font-mono text-gray-400">PDF PREVIEW</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Printable Resume Content Area */}
        <div id="resume-printable" className="p-6 sm:p-8 overflow-y-auto space-y-8 bg-[#0D0D0D]">
          
          {/* Header */}
          <div className="border-b border-white/10 pb-6 space-y-2">
            <h2 className="text-3xl font-bold text-white">{PERSONAL_INFO.name}</h2>
            <p className="text-sm font-mono text-[#39FF14]">{PERSONAL_INFO.title}</p>
            <div className="flex flex-wrap gap-4 text-xs font-mono text-gray-400 pt-2">
              <span>📧 {PERSONAL_INFO.email}</span>
              <span>📍 {PERSONAL_INFO.Mobile}</span>
              <span>⏱️ {PERSONAL_INFO.experience} Industry Practice</span>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="space-y-3">
            <h3 className="text-sm font-mono font-bold text-[#39FF14] uppercase tracking-wider flex items-center gap-2">
              <Briefcase className="w-4 h-4" /> Executive Profile & Summary
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              {PERSONAL_INFO.bioText1} {PERSONAL_INFO.bioText2}
            </p>
          </div>

          {/* Skill Breakdown */}
          <div className="space-y-3">
            <h3 className="text-sm font-mono font-bold text-[#39FF14] uppercase tracking-wider flex items-center gap-2">
              <Code className="w-4 h-4" /> Technical & Solution Competencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-300">
              <div className="p-3 rounded-xl bg-[#050505] border border-white/10 space-y-1">
                <span className="font-bold text-white block">ERPNext & Frappe</span>
                <span>Custom DocTypes, Accounting, HR, Inventory, API Webhooks</span>
              </div>
              <div className="p-3 rounded-xl bg-[#050505] border border-white/10 space-y-1">
                <span className="font-bold text-white block">Web Development</span>
                <span>React, TypeScript, Tailwind CSS, Node.js, Python FastAPI</span>
              </div>
              <div className="p-3 rounded-xl bg-[#050505] border border-white/10 space-y-1">
                <span className="font-bold text-white block">AI & Automation</span>
                <span>Autonomous Agents, Document OCR Extraction, LLM Prompt Engineering</span>
              </div>
              <div className="p-3 rounded-xl bg-[#050505] border border-white/10 space-y-1">
                <span className="font-bold text-white block">Business Consulting</span>
                <span>Requirement Analysis, Project Management, Client Advisory</span>
              </div>
            </div>
          </div>

          {/* Key Deliverables */}
          <div className="space-y-3">
            <h3 className="text-sm font-mono font-bold text-[#39FF14] uppercase tracking-wider flex items-center gap-2">
              <GraduationCap className="w-4 h-4" /> Track Record Highlights
            </h3>
            <div className="space-y-2 text-xs text-gray-300">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#39FF14] shrink-0 mt-0.5" />
                <span>Successfully delivered 50+ enterprise and custom software projects over 9+ years.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#39FF14] shrink-0 mt-0.5" />
                <span>Advised 30+ client businesses on digital transformation, ERP automation, and workflow efficiency.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-[#39FF14] shrink-0 mt-0.5" />
                <span>Maintained 100% commitment to milestone delivery, clean documentation, and post-launch support.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Actions Bar */}
        <div className="p-6 bg-[#050505] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <button
            onClick={handleCopyResume}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white text-xs font-semibold"
          >
            <Copy className="w-4 h-4 text-[#39FF14]" />
            <span>Copy Text Summary</span>
          </button>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handlePrint}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white text-xs font-semibold"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={handleCopyResume}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#39FF14] text-black text-xs font-bold shadow-[0_0_20px_rgba(57,255,20,0.4)] hover:bg-[#45ff24]"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
