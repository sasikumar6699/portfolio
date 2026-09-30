import React, { useState } from 'react';
import { 
  ArrowUp, 
  Mail, 
  Phone, 
  Linkedin, 
  Send, 
  Sparkles, 
  X, 
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { useCyberDoor } from '../../context/CyberDoorContext';

interface GravityContactPortalProps {
  onOpenContact?: () => void;
  onSubmitted?: (name: string) => void;
}

export const GravityContactPortal: React.FC<GravityContactPortalProps> = ({ 
  onOpenContact,
  onSubmitted
}) => {
  const { currentTheme } = useCyberDoor();
  const { primary, rgb } = currentTheme;
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'ERP, CRM, HCM & Business Solutions',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const recipient = 'connect.techyora@gmail.com';

    // Dispatch enquiry email in the background to connect.techyora@gmail.com with standard table template
    try {
      const fd = new FormData();
      fd.append('name', formData.name);
      fd.append('email', formData.email);
      fd.append('service', formData.service);
      fd.append('message', formData.message);
      fd.append('_subject', `[Techyora Project Enquiry] ${formData.service} - ${formData.name}`);
      fd.append('_template', 'table');
      fd.append('_captcha', 'false');
      fd.append('_replyto', formData.email);
      fd.append('_autoresponse', 'Thank you for your enquiry. The Techyora team will contact you shortly.');

      // Background POST - mode 'no-cors' guarantees zero page redirect or popup
      fetch(`https://formsubmit.co/${recipient}`, {
        method: 'POST',
        body: fd,
        mode: 'no-cors'
      }).catch(() => {});
    } catch {}

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      if (onSubmitted) {
        onSubmitted(formData.name || 'Valued Partner');
      }
    }, 400);
  };

  const handleLaunchInquiry = () => {
    if (onOpenContact) {
      onOpenContact();
    } else {
      setModalOpen(true);
    }
  };

  return (
    <section 
      id="contact-portal" 
      className="relative w-full pt-8 sm:pt-12 pb-8 sm:pb-12 bg-[#050505] overflow-hidden select-none border-t border-white/10"
    >
      {/* Background Precision Wave Contours & Active Gravitational Well */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <div className="w-[1000px] h-[1000px] rounded-full border animate-pulse" style={{ borderColor: primary }} />
        <div className="absolute w-[750px] h-[750px] rounded-full border" style={{ borderColor: `rgba(${rgb}, 0.6)` }} />
        <div className="absolute w-[500px] h-[500px] rounded-full border" style={{ borderColor: `rgba(${rgb}, 0.4)` }} />
        <div className="absolute w-[300px] h-[300px] rounded-full border" style={{ borderColor: `rgba(${rgb}, 0.3)` }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center z-10">
        
        {/* Animated Gravity Ticker Pulse Line */}
        <div
          className="w-[1px] h-8 sm:h-10 mb-3 relative"
          style={{
            background: `linear-gradient(to bottom, transparent, ${primary}, ${primary})`
          }}
        >
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full animate-gravity-ticker"
            style={{
              backgroundColor: primary,
              boxShadow: `0 0 12px ${primary}`
            }}
          />
        </div>

        <div
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D0D0D] border text-xs font-mono mb-3 sm:mb-4 transition-colors"
          style={{
            borderColor: `${primary}50`,
            color: primary,
            boxShadow: `0 0 15px rgba(${rgb}, 0.15)`
          }}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>INNOVATIVE 3D GYROSCOPIC GRAVITY PORTAL</span>
        </div>

        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-2 sm:mb-3">
          Initiate Your{' '}
          <span
            className="inline-block transition-colors duration-500"
            style={{
              color: primary,
              textShadow: `0 0 20px rgba(${rgb}, 0.5)`
            }}
          >
            Digital Transformation
          </span>
        </h2>

        <p className="text-gray-400 text-xs sm:text-sm max-w-xl font-light mb-4 sm:mb-6">
          Collaborate directly with our engineering team on custom ERPNext, CRM & HCM, custom software (fleet, logistics, billing), 3D web, agentic AI, branding, and 24/7 AMC support.
        </p>

        {/* =========================================================================
            INNOVATIVE GYROSCOPIC 3D SPHERICAL PORTAL WITH CONTINUOUS ACTIVE ORBITS
            ========================================================================= */}
        <div className="relative my-3 sm:my-5 flex items-center justify-center">
          
          {/* Active 3D Gyroscopic Gimbal Ring 1 */}
          <div 
            className="absolute w-[240px] h-[240px] sm:w-[380px] sm:h-[380px] rounded-full border-2 pointer-events-none animate-gyro-ring-1"
            style={{
              borderColor: `rgba(${rgb}, 0.6)`,
              boxShadow: `0 0 30px rgba(${rgb}, 0.25)`
            }}
          />

          {/* Active 3D Gyroscopic Gimbal Ring 2 */}
          <div 
            className="absolute w-[275px] h-[275px] sm:w-[420px] sm:h-[420px] rounded-full border border-white/50 pointer-events-none animate-gyro-ring-2" 
          />

          {/* Active 3D Gyroscopic Gimbal Ring 3 */}
          <div 
            className="absolute w-[310px] h-[310px] sm:w-[470px] sm:h-[470px] rounded-full border pointer-events-none animate-orbit-spin"
            style={{
              borderColor: `rgba(${rgb}, 0.3)`,
              '--orbit-dur': '20s'
            } as React.CSSProperties}
          >
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full"
              style={{
                backgroundColor: primary,
                boxShadow: `0 0 15px ${primary}`
              }}
            />
          </div>

          {/* Orbiting Satellite Nodes */}
          <div 
            className="absolute w-[240px] h-[240px] sm:w-[340px] sm:h-[340px] rounded-full pointer-events-none animate-orbit-counter"
            style={{ '--orbit-dur': '16s' } as React.CSSProperties}
          >
            <div
              className="absolute -top-3 left-1/2 -translate-x-1/2 p-1.5 sm:p-2 rounded-full bg-[#0D0D0D] border"
              style={{
                borderColor: primary,
                boxShadow: `0 0 15px rgba(${rgb}, 0.5)`
              }}
            >
              <Mail className="w-3 sm:w-3.5 h-3 sm:h-3.5" style={{ color: primary }} />
            </div>
            <div
              className="absolute -bottom-3 left-1/2 -translate-x-1/2 p-1.5 sm:p-2 rounded-full bg-[#0D0D0D] border"
              style={{
                borderColor: primary,
                boxShadow: `0 0 15px rgba(${rgb}, 0.5)`
              }}
            >
              <Phone className="w-3 sm:w-3.5 h-3 sm:h-3.5" style={{ color: primary }} />
            </div>
          </div>

          {/* Core Interactive Gravitational Sphere */}
          <button
            onClick={handleLaunchInquiry}
            className="relative z-10 w-44 h-44 sm:w-60 sm:h-60 rounded-full font-extrabold flex flex-col items-center justify-center p-4 sm:p-6 text-center transform hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer group"
            style={{
              backgroundColor: primary,
              color: '#000000',
              boxShadow: `0 0 50px rgba(${rgb}, 0.6)`
            }}
          >
            <span className="text-[9.5px] sm:text-[11px] font-mono tracking-widest uppercase opacity-85 mb-0.5 sm:mb-1 group-hover:tracking-[0.2em] transition-all">
              CLICK TO LAUNCH
            </span>
            <span className="text-2xl sm:text-4xl font-black tracking-tight leading-none">
              LET’S MEET<br />UP!
            </span>
            <span className="text-[11px] sm:text-xs font-mono tracking-wider mt-2 sm:mt-2.5 font-bold underline underline-offset-4 flex items-center gap-1">
              <span>START INQUIRY</span>
              <span>→</span>
            </span>
          </button>
        </div>

        {/* =========================================================================
            ANIME CYBER ENERGY LINKS (LIVE HYPERLINKS WITH 100% COMPLETE VISIBLE CONTENT)
            ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5 w-full max-w-5xl pt-6 sm:pt-8 text-xs font-mono">
          
          {/* 1. EMAIL - ANIME ENERGY HYPERLINK */}
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="relative overflow-hidden group p-4 sm:p-6 rounded-2xl bg-[#0D0D0D] border transition-all duration-300 transform hover:-translate-y-1 text-left flex flex-col justify-between min-h-[135px] sm:min-h-[145px] cursor-pointer"
            style={{ borderColor: `rgba(${rgb}, 0.3)` }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = primary;
              e.currentTarget.style.boxShadow = `0 0 35px rgba(${rgb}, 0.5)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = `rgba(${rgb}, 0.3)`;
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {/* Anime Diagonal Laser Sweep Glow Effect */}
            <div
              className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none"
              style={{
                background: `linear-gradient(to right, transparent, rgba(${rgb}, 0.2), transparent)`
              }}
            />
            
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#050505] border flex items-center justify-center transition-all shrink-0"
                style={{
                  borderColor: `${primary}60`,
                  color: primary
                }}
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-500 transition-colors" />
            </div>

            <div>
              <span className="text-[9.5px] sm:text-[10px] text-gray-400 block uppercase tracking-wider font-semibold mb-1">
                PRIMARY EMAIL
              </span>
              <span className="text-xs sm:text-[13px] font-bold text-white break-all block leading-relaxed">
                {PERSONAL_INFO.email}
              </span>
            </div>
          </a>

          {/* 2. PHONE / WHATSAPP - ANIME ENERGY HYPERLINK */}
          <a
            href={PERSONAL_INFO.socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden group p-4 sm:p-6 rounded-2xl bg-[#0D0D0D] border transition-all duration-300 transform hover:-translate-y-1 text-left flex flex-col justify-between min-h-[135px] sm:min-h-[145px] cursor-pointer"
            style={{ borderColor: `rgba(${rgb}, 0.3)` }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = primary;
              e.currentTarget.style.boxShadow = `0 0 35px rgba(${rgb}, 0.5)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = `rgba(${rgb}, 0.3)`;
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div
              className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none"
              style={{
                background: `linear-gradient(to right, transparent, rgba(${rgb}, 0.2), transparent)`
              }}
            />
            
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#050505] border flex items-center justify-center transition-all shrink-0"
                style={{
                  borderColor: `${primary}60`,
                  color: primary
                }}
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-500 transition-colors" />
            </div>

            <div>
              <span className="text-[9.5px] sm:text-[10px] text-gray-400 block uppercase tracking-wider font-semibold mb-1">
                WHATSAPP / PHONE
              </span>
              <span className="text-xs sm:text-[13px] font-bold text-white break-all block leading-relaxed">
                {PERSONAL_INFO.Mobile.split(',')[0]}
              </span>
            </div>
          </a>

          {/* 3. LINKEDIN - ANIME ENERGY HYPERLINK */}
          <a
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden group p-4 sm:p-6 rounded-2xl bg-[#0D0D0D] border transition-all duration-300 transform hover:-translate-y-1 text-left flex flex-col justify-between min-h-[135px] sm:min-h-[145px] cursor-pointer"
            style={{ borderColor: `rgba(${rgb}, 0.3)` }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = primary;
              e.currentTarget.style.boxShadow = `0 0 35px rgba(${rgb}, 0.5)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = `rgba(${rgb}, 0.3)`;
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div
              className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none"
              style={{
                background: `linear-gradient(to right, transparent, rgba(${rgb}, 0.2), transparent)`
              }}
            />
            
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <div
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#050505] border flex items-center justify-center transition-all shrink-0"
                style={{
                  borderColor: `${primary}60`,
                  color: primary
                }}
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-500 transition-colors" />
            </div>

            <div>
              <span className="text-[9.5px] sm:text-[10px] text-gray-400 block uppercase tracking-wider font-semibold mb-1">
                LINKEDIN PROFILE
              </span>
              <span className="text-xs sm:text-[13px] font-bold text-white break-all block leading-relaxed">
                {PERSONAL_INFO.socials.linkedin.replace(/^https?:\/\//, '')}
              </span>
            </div>
          </a>
        </div>

        {/* Back To Top Action */}
        <div className="pt-6 sm:pt-8">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 text-xs font-mono text-gray-400 transition-all bg-[#0D0D0D]/80 cursor-pointer"
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = primary;
              e.currentTarget.style.color = primary;
              e.currentTarget.style.boxShadow = `0 0 20px rgba(${rgb}, 0.3)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.color = '#9ca3af';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>BACK TO TOP</span>
          </button>
        </div>

      </div>

      {/* Direct Inquiry Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl">
          <div
            className="relative w-full max-w-lg rounded-3xl bg-[#0D0D0D] border p-6 sm:p-8 transition-all"
            style={{
              borderColor: `${primary}80`,
              boxShadow: `0 0 60px rgba(${rgb}, 0.3)`
            }}
          >
            
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {submitSuccess ? (
              <div className="py-8 space-y-6 text-center">
                <div
                  className="w-16 h-16 rounded-full border-2 flex items-center justify-center mx-auto"
                  style={{
                    backgroundColor: `rgba(${rgb}, 0.15)`,
                    borderColor: primary,
                    color: primary,
                    boxShadow: `0 0 30px rgba(${rgb}, 0.4)`
                  }}
                >
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    Thanks for your enquiry.
                  </h3>
                  <p className="text-sm sm:text-base font-medium text-gray-300">
                    Our team will contact you soon.
                  </p>
                </div>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitSuccess(false);
                      setModalOpen(false);
                      setFormData({ name: '', email: '', service: 'ERP, CRM, HCM & Business Solutions', message: '' });
                    }}
                    className="w-full py-3 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-xs font-mono text-gray-200 transition-all cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div>
                  <span
                    className="text-[10px] font-mono tracking-widest uppercase block"
                    style={{ color: primary }}
                  >
                    DIRECT INQUIRY // ZERO LATENCY
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">
                    Start Your Project
                  </h3>
                </div>

                <div>
                  <label className="text-xs font-mono text-gray-400 block mb-1">YOUR NAME</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe / Business Name"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#050505] border border-white/15 text-white text-sm focus:outline-none"
                    onFocus={(e) => { e.currentTarget.style.borderColor = primary; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)'; }}
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-gray-400 block mb-1">EMAIL ADDRESS</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#050505] border border-white/15 text-white text-sm focus:outline-none"
                    onFocus={(e) => { e.currentTarget.style.borderColor = primary; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)'; }}
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-gray-400 block mb-1">SERVICE OF INTEREST</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#050505] border border-white/15 text-white text-sm focus:outline-none"
                    onFocus={(e) => { e.currentTarget.style.borderColor = primary; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)'; }}
                  >
                    <option value="ERP, CRM, HCM & Business Solutions">ERP, CRM, HCM & Business Solutions (ERPNext, Custom CRM, HCM)</option>
                    <option value="Custom Software Solutions">Custom Software Solutions (Billing, Inventory, Fleet & Logistics Software)</option>
                    <option value="Web Development & Design">Web Development & Design (3D Websites, E-Commerce, Landing Pages)</option>
                    <option value="AI & Automation">AI & Automation (Agentic AI, Workflow Integrations, Chatbots)</option>
                    <option value="Graphic Design & Branding">Graphic Design & Branding (Logo, Pamphlet, Flex Design, Digital Marketing)</option>
                    <option value="AMC & Support Services">AMC & Support Services (ERP Support, Software, Cloud Support, Bug Fixing)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-mono text-gray-400 block mb-1">PROJECT DETAILS</label>
                  <textarea
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your goals, requirements, or timeframe..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#050505] border border-white/15 text-white text-sm focus:outline-none resize-none"
                    onFocus={(e) => { e.currentTarget.style.borderColor = primary; }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)'; }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
                  style={{
                    backgroundColor: primary,
                    color: '#000000',
                    boxShadow: `0 0 25px rgba(${rgb}, 0.5)`
                  }}
                >
                  {isSubmitting ? (
                    <span>Launching Inquiry...</span>
                  ) : (
                    <>
                      <span>Transmit Inquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}

          </div>
        </div>
      )}
    </section>
  );
};
