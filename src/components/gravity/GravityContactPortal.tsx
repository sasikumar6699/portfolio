import React, { useState } from 'react';
import { 
  ArrowUp, 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Send, 
  Sparkles, 
  X, 
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface GravityContactPortalProps {
  onOpenContact?: () => void;
  onSubmitted?: (name: string) => void;
}

export const GravityContactPortal: React.FC<GravityContactPortalProps> = ({ 
  onOpenContact,
  onSubmitted
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'ERP, CRM & Business Solutions',
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

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      if (onSubmitted) {
        onSubmitted(formData.name || 'Valued Partner');
      }
      setTimeout(() => {
        setSubmitSuccess(false);
        setModalOpen(false);
        setFormData({ name: '', email: '', service: 'ERP, CRM & Business Solutions', message: '' });
      }, 2500);
    }, 1200);
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
      className="relative w-full pt-32 pb-24 bg-[#050505] overflow-hidden select-none border-t border-white/10"
    >
      {/* Background Precision Wave Contours & Active Gravitational Well */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <div className="w-[1000px] h-[1000px] rounded-full border border-[#39FF14] animate-pulse" />
        <div className="absolute w-[750px] h-[750px] rounded-full border border-[#39FF14]/60" />
        <div className="absolute w-[500px] h-[500px] rounded-full border border-[#39FF14]/40" />
        <div className="absolute w-[300px] h-[300px] rounded-full border border-[#39FF14]/30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center z-10">
        
        {/* Animated Gravity Ticker Pulse Line */}
        <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-[#39FF14] to-[#39FF14] mb-8 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#39FF14] shadow-[0_0_12px_#39FF14] animate-gravity-ticker" />
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D0D0D] border border-[#39FF14]/40 text-xs font-mono text-[#39FF14] mb-5 shadow-[0_0_15px_rgba(57,255,20,0.15)]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>INNOVATIVE 3D GYROSCOPIC GRAVITY PORTAL</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
          Initiate Your{' '}
          <span className="text-[#39FF14] inline-block neon-glow-text">
            Digital Transformation
          </span>
        </h2>

        <p className="text-gray-400 text-sm sm:text-base max-w-xl font-light mb-16">
          Collaborate directly with our technical collective on custom ERPNext, autonomous AI, web architecture, and branding.
        </p>

        {/* =========================================================================
            INNOVATIVE GYROSCOPIC 3D SPHERICAL PORTAL WITH CONTINUOUS ACTIVE ORBITS
            ========================================================================= */}
        <div className="relative my-8 flex items-center justify-center">
          
          {/* Active 3D Gyroscopic Gimbal Ring 1 */}
          <div 
            className="absolute w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] rounded-full border-2 border-[#39FF14]/60 pointer-events-none shadow-[0_0_30px_rgba(57,255,20,0.25)] animate-gyro-ring-1" 
          />

          {/* Active 3D Gyroscopic Gimbal Ring 2 */}
          <div 
            className="absolute w-[360px] h-[360px] sm:w-[420px] sm:h-[420px] rounded-full border border-white/50 pointer-events-none animate-gyro-ring-2" 
          />

          {/* Active 3D Gyroscopic Gimbal Ring 3 */}
          <div 
            className="absolute w-[400px] h-[400px] sm:w-[470px] sm:h-[470px] rounded-full border border-[#39FF14]/30 pointer-events-none animate-orbit-spin"
            style={{ '--orbit-dur': '20s' } as React.CSSProperties}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#39FF14] shadow-[0_0_15px_#39FF14]" />
          </div>

          {/* Orbiting Satellite Nodes */}
          <div 
            className="absolute w-[300px] h-[300px] sm:w-[340px] sm:h-[340px] rounded-full pointer-events-none animate-orbit-counter"
            style={{ '--orbit-dur': '16s' } as React.CSSProperties}
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 p-2 rounded-full bg-[#0D0D0D] border border-[#39FF14] shadow-[0_0_15px_rgba(57,255,20,0.5)]">
              <Mail className="w-3.5 h-3.5 text-[#39FF14]" />
            </div>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 p-2 rounded-full bg-[#0D0D0D] border border-[#39FF14] shadow-[0_0_15px_rgba(57,255,20,0.5)]">
              <Phone className="w-3.5 h-3.5 text-[#39FF14]" />
            </div>
          </div>

          {/* Core Interactive Gravitational Sphere */}
          <button
            onClick={handleLaunchInquiry}
            className="relative z-10 w-52 h-52 sm:w-60 sm:h-60 rounded-full bg-[#39FF14] text-black font-extrabold flex flex-col items-center justify-center p-6 text-center shadow-[0_0_70px_rgba(57,255,20,0.7)] hover:shadow-[0_0_110px_rgba(57,255,20,1)] transform hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer group"
          >
            <span className="text-[11px] font-mono tracking-widest uppercase opacity-85 mb-1 group-hover:tracking-[0.2em] transition-all">
              CLICK TO LAUNCH
            </span>
            <span className="text-3xl sm:text-4xl font-black tracking-tight leading-none">
              LET’S MEET<br />UP!
            </span>
            <span className="text-xs font-mono tracking-wider mt-2.5 font-bold underline underline-offset-4 flex items-center gap-1">
              <span>START INQUIRY</span>
              <span>→</span>
            </span>
          </button>
        </div>

        {/* =========================================================================
            ANIME CYBER ENERGY LINKS (LIVE HYPERLINKS WITH 100% COMPLETE VISIBLE CONTENT)
            ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 w-full max-w-5xl pt-14 text-xs font-mono">
          
          {/* 1. EMAIL - ANIME ENERGY HYPERLINK */}
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="relative overflow-hidden group p-5 sm:p-6 rounded-2xl bg-[#0D0D0D] border border-[#39FF14]/30 hover:border-[#39FF14] transition-all duration-300 hover:shadow-[0_0_35px_rgba(57,255,20,0.5)] transform hover:-translate-y-1 text-left flex flex-col justify-between min-h-[145px] cursor-pointer"
          >
            {/* Anime Diagonal Laser Sweep Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#39FF14]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none" />
            
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#050505] border border-[#39FF14]/40 flex items-center justify-center text-[#39FF14] group-hover:scale-110 group-hover:shadow-[0_0_20px_#39FF14] transition-all shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-[#39FF14] transition-colors" />
            </div>

            <div>
              <span className="text-[10px] text-gray-400 block uppercase tracking-wider font-semibold mb-1">
                PRIMARY EMAIL
              </span>
              <span className="text-xs sm:text-[13px] font-bold text-white group-hover:text-[#39FF14] transition-colors break-words block leading-relaxed">
                {PERSONAL_INFO.email}
              </span>
            </div>
          </a>

          {/* 2. PHONE / WHATSAPP - ANIME ENERGY HYPERLINK */}
          <a
            href={PERSONAL_INFO.socials.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden group p-5 sm:p-6 rounded-2xl bg-[#0D0D0D] border border-[#39FF14]/30 hover:border-[#39FF14] transition-all duration-300 hover:shadow-[0_0_35px_rgba(57,255,20,0.5)] transform hover:-translate-y-1 text-left flex flex-col justify-between min-h-[145px] cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#39FF14]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none" />
            
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#050505] border border-[#39FF14]/40 flex items-center justify-center text-[#39FF14] group-hover:scale-110 group-hover:shadow-[0_0_20px_#39FF14] transition-all shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-[#39FF14] transition-colors" />
            </div>

            <div>
              <span className="text-[10px] text-gray-400 block uppercase tracking-wider font-semibold mb-1">
                WHATSAPP / PHONE
              </span>
              <span className="text-xs sm:text-[13px] font-bold text-white group-hover:text-[#39FF14] transition-colors break-words block leading-relaxed">
                {PERSONAL_INFO.Mobile.split(',')[0]}
              </span>
            </div>
          </a>

          {/* 3. LINKEDIN - ANIME ENERGY HYPERLINK */}
          <a
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden group p-5 sm:p-6 rounded-2xl bg-[#0D0D0D] border border-[#39FF14]/30 hover:border-[#39FF14] transition-all duration-300 hover:shadow-[0_0_35px_rgba(57,255,20,0.5)] transform hover:-translate-y-1 text-left flex flex-col justify-between min-h-[145px] cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#39FF14]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none" />
            
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#050505] border border-[#39FF14]/40 flex items-center justify-center text-[#39FF14] group-hover:scale-110 group-hover:shadow-[0_0_20px_#39FF14] transition-all shrink-0">
                <Linkedin className="w-5 h-5" />
              </div>
              <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-[#39FF14] transition-colors" />
            </div>

            <div>
              <span className="text-[10px] text-gray-400 block uppercase tracking-wider font-semibold mb-1">
                LINKEDIN PROFILE
              </span>
              <span className="text-xs sm:text-[13px] font-bold text-white group-hover:text-[#39FF14] transition-colors break-words block leading-relaxed">
                {PERSONAL_INFO.socials.linkedin.replace(/^https?:\/\//, '')}
              </span>
            </div>
          </a>

          {/* 4. GITHUB - ANIME ENERGY HYPERLINK */}
          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden group p-5 sm:p-6 rounded-2xl bg-[#0D0D0D] border border-[#39FF14]/30 hover:border-[#39FF14] transition-all duration-300 hover:shadow-[0_0_35px_rgba(57,255,20,0.5)] transform hover:-translate-y-1 text-left flex flex-col justify-between min-h-[145px] cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#39FF14]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none" />
            
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#050505] border border-[#39FF14]/40 flex items-center justify-center text-[#39FF14] group-hover:scale-110 group-hover:shadow-[0_0_20px_#39FF14] transition-all shrink-0">
                <Github className="w-5 h-5" />
              </div>
              <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-[#39FF14] transition-colors" />
            </div>

            <div>
              <span className="text-[10px] text-gray-400 block uppercase tracking-wider font-semibold mb-1">
                GITHUB REPOSITORY
              </span>
              <span className="text-xs sm:text-[13px] font-bold text-white group-hover:text-[#39FF14] transition-colors break-words block leading-relaxed">
                {PERSONAL_INFO.socials.github.replace(/^https?:\/\//, '')}
              </span>
            </div>
          </a>

        </div>

        {/* Back To Top Action */}
        <div className="pt-16">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 hover:border-[#39FF14] text-xs font-mono text-gray-400 hover:text-[#39FF14] transition-all bg-[#0D0D0D]/80 hover:shadow-[0_0_20px_rgba(57,255,20,0.3)]"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>BACK TO TOP</span>
          </button>
        </div>

      </div>

      {/* Direct Inquiry Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl">
          <div className="relative w-full max-w-lg rounded-3xl bg-[#0D0D0D] border border-[#39FF14]/50 p-6 sm:p-8 shadow-[0_0_60px_rgba(57,255,20,0.3)]">
            
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {submitSuccess ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#39FF14]/20 border border-[#39FF14] flex items-center justify-center text-[#39FF14] mx-auto shadow-[0_0_25px_rgba(57,255,20,0.5)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Inquiry Launched!</h3>
                <p className="text-sm text-gray-300">
                  Thank you, {formData.name}. We will review your specifications and contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#39FF14] uppercase block">
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
                    className="w-full px-4 py-2.5 rounded-xl bg-[#050505] border border-white/15 focus:border-[#39FF14] text-white text-sm focus:outline-none"
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
                    className="w-full px-4 py-2.5 rounded-xl bg-[#050505] border border-white/15 focus:border-[#39FF14] text-white text-sm focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-gray-400 block mb-1">SERVICE OF INTEREST</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#050505] border border-white/15 focus:border-[#39FF14] text-white text-sm focus:outline-none"
                  >
                    <option value="ERP, CRM & Business Solutions">ERP, CRM & Business Solutions (ERPNext)</option>
                    <option value="Web Development & Design">Web Development & Design</option>
                    <option value="AI & Automation">AI & Autonomous Automation</option>
                    <option value="Data Entry & Data Management">Data Entry & Management</option>
                    <option value="Custom Software Development">Custom Software Development</option>
                    <option value="Graphic Design & Branding">Graphic Design & Branding</option>
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
                    className="w-full px-4 py-2.5 rounded-xl bg-[#050505] border border-white/15 focus:border-[#39FF14] text-white text-sm focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-[#39FF14] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#45ff24] shadow-[0_0_25px_rgba(57,255,20,0.5)] transition-all flex items-center justify-center gap-2"
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
