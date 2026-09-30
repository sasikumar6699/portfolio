import React from 'react';
import { X, Download, Copy, Printer, CheckCircle, Briefcase, Code, ShieldCheck, Globe, Cpu, PenTool, Database, Layers } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useCyberDoor } from '../context/CyberDoorContext';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCopySuccess: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, onCopySuccess }) => {
  const { currentTheme } = useCyberDoor();
  const { primary, rgb } = currentTheme;
  if (!isOpen) return null;

  const handleCopyResume = () => {
    const text = `
TECHYORA TECHNOLOGIES
${PERSONAL_INFO.title}
Email: ${PERSONAL_INFO.email} | Hotline: ${PERSONAL_INFO.Mobile} | Website: https://techyora.vercel.app/

COMPANY OVERVIEW:
Techyora is an enterprise technology solutions company with a dedicated multi-disciplinary engineering team. We deliver full-lifecycle digital transformation across ERPNext implementations, custom business software, 3D web portals, agentic AI automation, graphic branding, and 24/7 SLA cloud AMC support.

CORE ENTERPRISE SERVICES:
1. ERP, CRM, HCM & Business Solutions (ERPNext, Custom Frappe DocTypes, Custom CRM, HCM Payroll & Biometrics)
2. Custom Software Solutions (GST Billing & POS, Multi-Warehouse Inventory, Fleet Management, Logistics Software)
3. Web Development & Design (Interactive 3D WebGL, E-Commerce Stores, Dynamic Web Apps, SEO Landing Pages)
4. AI & Automation (Agentic AI Workflows, Conversational WhatsApp/Web Chatbots, Intelligent Document OCR)
5. Graphic Design & Branding (Logo Design & Brand Kits, Pamphlets, High-Res Flex Banners, Digital Marketing)
6. AMC & Support Services (ERP Maintenance, Cloud Infrastructure AWS/GCP, Bug Fixing, 24/7 SLA Uptime)

COMPANY TRACK RECORD:
- 50+ Global Enterprise Implementations
- 99.9% Uptime SLA Commitment
- Dedicated In-House Engineering Pods
- 100% Quality & Timely Delivery Guarantee
    `.trim();

    navigator.clipboard.writeText(text);
    onCopySuccess();
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-md animate-fade-in overflow-y-auto print:p-0 print:bg-white print:static">
      <div
        className="relative w-full max-w-4xl bg-[#0D0D0D] border rounded-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col print:border-none print:shadow-none print:max-h-none print:h-auto print:rounded-none transition-all"
        style={{
          borderColor: `${primary}60`,
          boxShadow: `0 0 50px rgba(${rgb}, 0.3)`
        }}
      >
        
        {/* Modal Top Bar (Hidden in Print) */}
        <div className="px-6 py-4 bg-[#050505] border-b border-white/10 flex items-center justify-between shrink-0 print:hidden">
          <div className="flex items-center gap-3">
            <span
              className="px-3 py-1 rounded-full border text-xs font-mono font-bold"
              style={{
                backgroundColor: `${primary}18`,
                borderColor: `${primary}50`,
                color: primary
              }}
            >
              TECHYORA // CORPORATE SPECIFICATION
            </span>
            <span className="text-xs font-mono text-gray-400">EXECUTIVE COMPANY PROFILE</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Printable Profile Content Area */}
        <div id="resume-printable" className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#0D0D0D] text-gray-200 print:bg-white print:text-black print:p-8 print:space-y-6">
          
          {/* Company Brand Header */}
          <div className="border-b border-white/10 pb-6 print:border-gray-300 print:pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight print:text-black">
                  {PERSONAL_INFO.brandName}
                </h1>
                <span
                  className="px-2.5 py-0.5 rounded-full border text-[10px] font-mono font-bold print:border-green-700 print:text-green-800"
                  style={{
                    backgroundColor: `${primary}20`,
                    borderColor: `${primary}60`,
                    color: primary
                  }}
                >
                  VERIFIED ENTERPRISE
                </span>
              </div>
              <p
                className="text-sm font-mono font-semibold print:text-green-700"
                style={{ color: primary }}
              >
                Enterprise Software Engineering & Digital Solutions Company
              </p>
            </div>

            <div className="text-xs font-mono text-gray-300 space-y-1 sm:text-right print:text-gray-700">
              <p>📧 {PERSONAL_INFO.email}</p>
              <p>📞 {PERSONAL_INFO.Mobile}</p>
              <p>🌐 https://techyora.vercel.app/</p>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="space-y-2.5">
            <h2
              className="text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 print:text-green-800"
              style={{ color: primary }}
            >
              <Briefcase className="w-4 h-4 print:text-green-800" /> Executive Overview
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed print:text-gray-800">
              Techyora is a full-service technology company uniting dedicated enterprise ERP architects, custom software engineers, AI developers, creative brand designers, and cloud DevOps specialists. We deliver scalable, secure, and commercially transformative solutions engineered to eliminate manual friction and accelerate enterprise growth.
            </p>
          </div>

          {/* Six Core Enterprise Solutions */}
          <div className="space-y-4">
            <h2
              className="text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 print:text-green-800"
              style={{ color: primary }}
            >
              <Code className="w-4 h-4 print:text-green-800" /> Six Core Enterprise Services
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              
              {/* Service 1 */}
              <div className="p-4 rounded-xl bg-[#070709] border border-white/10 space-y-2 print:border-gray-300 print:bg-gray-50">
                <div className="flex items-center gap-2 text-white font-bold print:text-black">
                  <Database className="w-4 h-4 print:text-green-700 shrink-0" style={{ color: primary }} />
                  <span>ERP, CRM, HCM & Business Solutions</span>
                </div>
                <ul className="text-gray-400 space-y-1 pl-4 list-disc text-[11px] leading-relaxed print:text-gray-700">
                  <li>ERPNext full-cycle implementation & Frappe DocType customization</li>
                  <li>Custom CRM pipelines, quoting engines & lead tracking</li>
                  <li>Custom HCM & HRMS payroll processing, biometric attendance & compliance</li>
                  <li>Multi-branch inventory accounting & GST financial reconciliation</li>
                </ul>
              </div>

              {/* Service 2 */}
              <div className="p-4 rounded-xl bg-[#070709] border border-white/10 space-y-2 print:border-gray-300 print:bg-gray-50">
                <div className="flex items-center gap-2 text-white font-bold print:text-black">
                  <Code className="w-4 h-4 print:text-green-700 shrink-0" style={{ color: primary }} />
                  <span>Custom Software Solutions</span>
                </div>
                <ul className="text-gray-400 space-y-1 pl-4 list-disc text-[11px] leading-relaxed print:text-gray-700">
                  <li>GST billing software & POS with thermal printing & barcode support</li>
                  <li>Multi-warehouse inventory systems, serial audits & reorder triggers</li>
                  <li>Commercial fleet management software with live GPS & fuel auditing</li>
                  <li>Warehouse logistics & consignment management platforms</li>
                </ul>
              </div>

              {/* Service 3 */}
              <div className="p-4 rounded-xl bg-[#070709] border border-white/10 space-y-2 print:border-gray-300 print:bg-gray-50">
                <div className="flex items-center gap-2 text-white font-bold print:text-black">
                  <Globe className="w-4 h-4 print:text-green-700 shrink-0" style={{ color: primary }} />
                  <span>Web Development & Design</span>
                </div>
                <ul className="text-gray-400 space-y-1 pl-4 list-disc text-[11px] leading-relaxed print:text-gray-700">
                  <li>Interactive 3D WebGL websites (Three.js) for high brand differentiation</li>
                  <li>E-commerce platforms with secure payment gateways & cart systems</li>
                  <li>Dynamic enterprise web applications (React / Next.js / TypeScript)</li>
                  <li>High-converting SEO landing pages with 99+ Core Web Vitals score</li>
                </ul>
              </div>

              {/* Service 4 */}
              <div className="p-4 rounded-xl bg-[#070709] border border-white/10 space-y-2 print:border-gray-300 print:bg-gray-50">
                <div className="flex items-center gap-2 text-white font-bold print:text-black">
                  <Cpu className="w-4 h-4 print:text-green-700 shrink-0" style={{ color: primary }} />
                  <span>AI & Autonomous Automation</span>
                </div>
                <ul className="text-gray-400 space-y-1 pl-4 list-disc text-[11px] leading-relaxed print:text-gray-700">
                  <li>Agentic AI workflows & multi-agent reasoning for automated tasks</li>
                  <li>Conversational WhatsApp Business & web customer support chatbots</li>
                  <li>Intelligent document OCR for invoice extraction & PDF parsing</li>
                  <li>Enterprise API integrations, webhooks & backend ETL synchronization</li>
                </ul>
              </div>

              {/* Service 5 */}
              <div className="p-4 rounded-xl bg-[#070709] border border-white/10 space-y-2 print:border-gray-300 print:bg-gray-50">
                <div className="flex items-center gap-2 text-white font-bold print:text-black">
                  <PenTool className="w-4 h-4 print:text-green-700 shrink-0" style={{ color: primary }} />
                  <span>Graphic Design & Branding</span>
                </div>
                <ul className="text-gray-400 space-y-1 pl-4 list-disc text-[11px] leading-relaxed print:text-gray-700">
                  <li>Corporate brand identity kits, vector logo design & brand style guides</li>
                  <li>Marketing brochures, tri-fold sales pamphlets & premium visiting cards</li>
                  <li>Large-format flex design, outdoor hoardings & exhibition signage</li>
                  <li>Digital marketing campaign creatives & social media design kits</li>
                </ul>
              </div>

              {/* Service 6 */}
              <div className="p-4 rounded-xl bg-[#070709] border border-white/10 space-y-2 print:border-gray-300 print:bg-gray-50">
                <div className="flex items-center gap-2 text-white font-bold print:text-black">
                  <ShieldCheck className="w-4 h-4 print:text-green-700 shrink-0" style={{ color: primary }} />
                  <span>AMC & 24/7 Support Services</span>
                </div>
                <ul className="text-gray-400 space-y-1 pl-4 list-disc text-[11px] leading-relaxed print:text-gray-700">
                  <li>Continuous ERP maintenance, database tuning & version upgrades</li>
                  <li>Cloud server management (AWS, GCP, DigitalOcean, Linux VPS)</li>
                  <li>Proactive bug fixing, security patching & zero-downtime hotfixes</li>
                  <li>24/7 SLA uptime monitoring, automated backups & disaster recovery</li>
                </ul>
              </div>

            </div>
          </div>

          {/* Delivery Methodology & Engagement Models */}
          <div className="space-y-3 pt-2">
            <h2
              className="text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 print:text-green-800"
              style={{ color: primary }}
            >
              <Layers className="w-4 h-4 print:text-green-800" /> Enterprise Engagement Models
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-[#070709] border border-white/10 print:border-gray-300 print:bg-gray-50">
                <span className="font-bold text-white block mb-1 print:text-black">Turnkey Fixed-Scope</span>
                <p className="text-[11px] text-gray-400 leading-normal print:text-gray-700">
                  Clear milestones, guaranteed timelines, fixed budgets, and end-to-end testing and deployment.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-[#070709] border border-white/10 print:border-gray-300 print:bg-gray-50">
                <span className="font-bold text-white block mb-1 print:text-black">Dedicated Engineering Pod</span>
                <p className="text-[11px] text-gray-400 leading-normal print:text-gray-700">
                  Full-time dedicated developers, architects, and designers integrated directly into your operations.
                </p>
              </div>
              <div className="p-3 rounded-xl bg-[#070709] border border-white/10 print:border-gray-300 print:bg-gray-50">
                <span className="font-bold text-white block mb-1 print:text-black">24/7 SLA AMC Contracts</span>
                <p className="text-[11px] text-gray-400 leading-normal print:text-gray-700">
                  Priority incident response, server health monitoring, regular software enhancements, and maintenance.
                </p>
              </div>
            </div>
          </div>

          {/* Key Metrics & Verified Guarantee */}
          <div className="border-t border-white/10 pt-4 print:border-gray-300 print:pt-3 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-gray-400 print:text-gray-700">
            <div className="flex items-center gap-2 text-white print:text-black font-bold">
              <CheckCircle className="w-4 h-4 print:text-green-700" style={{ color: primary }} />
              <span>50+ Global Enterprise Deployments</span>
            </div>
            <div>• 99.9% Uptime SLA Commitment</div>
            <div>• 100% Quality & Satisfaction Guarantee</div>
          </div>

        </div>

        {/* Actions Bottom Bar (Hidden in Print) */}
        <div className="p-4 sm:p-6 bg-[#050505] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0 print:hidden">
          <button
            onClick={handleCopyResume}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white text-xs font-semibold cursor-pointer"
          >
            <Copy className="w-4 h-4" style={{ color: primary }} />
            <span>Copy Text Summary</span>
          </button>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handlePrint}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white text-xs font-semibold cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-black text-xs font-bold cursor-pointer transition-all"
              style={{
                backgroundColor: primary,
                boxShadow: `0 0 20px rgba(${rgb}, 0.45)`,
              }}
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
