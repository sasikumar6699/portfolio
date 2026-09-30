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
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    email: string;
    service: string;
    message: string;
    whatsappUrl: string;
  } | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const recipient = 'connect.techyora@gmail.com';
    const phone = '919524227511';

    // 1. WhatsApp formatted text & URL to automatically open
    const whatsappText = encodeURIComponent(
      `*TECHYORA - NEW PROJECT ENQUIRY*\n` +
      `================================\n` +
      `*Client Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Service Required:* ${formData.service}\n\n` +
      `*Project Specifications:*\n${formData.message}\n` +
      `================================\n` +
      `Dispatched via Techyora 3D Portal`
    );

    const isMobile = typeof navigator !== 'undefined' && /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
    const whatsappUrl = isMobile
      ? `https://api.whatsapp.com/send?phone=${phone}&text=${whatsappText}`
      : `https://web.whatsapp.com/send?phone=${phone}&text=${whatsappText}`;

    // 2. Automatically open WhatsApp to share enquiry directly with 9524227511
    try {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    } catch {
      // Browser popup blocked fallback handled in UI
    }

    // 3. Dispatch enquiry details to connect.techyora@gmail.com in the background with standard table template
    try {
      const templatePayload = {
        name: formData.name,
        email: formData.email,
        service: formData.service,
        message: formData.message,
        _subject: `[Techyora Project Enquiry] ${formData.service} - ${formData.name}`,
        _template: 'table',
        _captcha: 'false',
        _replyto: formData.email,
        _autoresponse: 'Thank you for your enquiry. The Techyora team will contact you shortly.'
      };

      fetch(`https://formsubmit.co/ajax/${recipient}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(templatePayload)
      }).catch(() => {});

      const formEl = document.createElement('form');
      formEl.method = 'POST';
      formEl.action = `https://formsubmit.co/${recipient}`;
      formEl.target = 'hidden_gravity_iframe';
      formEl.style.display = 'none';

      Object.entries(templatePayload).forEach(([k, v]) => {
        const inp = document.createElement('input');
        inp.type = 'hidden';
        inp.name = k;
        inp.value = String(v);
        formEl.appendChild(inp);
      });

      document.body.appendChild(formEl);
      formEl.submit();
      setTimeout(() => {
        if (formEl.parentNode) formEl.parentNode.removeChild(formEl);
      }, 2000);
    } catch {}

    setSubmittedData({
      name: formData.name,
      email: formData.email,
      service: formData.service,
      message: formData.message,
      whatsappUrl
    });

    setIsSubmitting(false);
    setSubmitSuccess(true);
    if (onSubmitted) {
      onSubmitted(formData.name || 'Valued Partner');
    }
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

            {submitSuccess && submittedData ? (
              <div className="py-4 space-y-5 text-center">
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

                <div className="space-y-1.5">
                  <h3 className="text-2xl font-extrabold text-white">
                    Thanks for your enquiry.
                  </h3>
                  <p className="text-sm font-medium text-gray-300">
                    Our team will contact you soon.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#050505] border border-white/10 space-y-2 text-xs font-mono text-left">
                  <div className="flex items-center justify-between text-[11px] pb-1.5 border-b border-white/10">
                    <span className="text-gray-400">DISPATCHED TO:</span>
                    <span className="font-bold underline" style={{ color: primary }}>
                      connect.techyora@gmail.com
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-gray-400">CLIENT:</span>
                    <span className="text-gray-200">{submittedData.name} ({submittedData.email})</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-gray-400">SERVICE:</span>
                    <span className="text-gray-200 truncate max-w-[200px]">{submittedData.service}</span>
                  </div>
                </div>

                {/* WhatsApp Status Alert */}
                <div className="p-3 rounded-xl bg-[#0B1510] border border-[#25D366]/40 flex items-center justify-between gap-3 text-left">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#25D366] text-black flex items-center justify-center shrink-0">
                      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#25D366] block">WhatsApp Notification</span>
                      <span className="text-[10px] font-mono text-gray-300 block">Enquiry forwarded to +91 9524227511</span>
                    </div>
                  </div>
                  <a
                    href={submittedData.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 rounded-lg bg-[#25D366] hover:bg-[#22c55e] text-black text-xs font-mono font-bold flex items-center gap-1 transition-all"
                  >
                    <span>Open Chat</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitSuccess(false);
                    setSubmittedData(null);
                    setModalOpen(false);
                    setFormData({ name: '', email: '', service: 'ERP, CRM, HCM & Business Solutions', message: '' });
                  }}
                  className="w-full py-2.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 text-xs font-mono text-gray-200 transition-all cursor-pointer"
                >
                  Close Window
                </button>
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

      {/* Hidden Iframe for zero-redirect background form transmission */}
      <iframe
        name="hidden_gravity_iframe"
        title="Background Gravity Submission Sink"
        style={{ display: 'none' }}
        className="hidden"
      />
    </section>
  );
};
