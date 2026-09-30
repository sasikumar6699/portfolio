import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  Calendar, 
  Send, 
  Linkedin, 
  MessageSquare, 
  CheckCircle, 
  Sparkles, 
  Activity, 
  ShieldCheck,
  ExternalLink,
  RefreshCw
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useCyberDoor } from '../context/CyberDoorContext';

interface ContactProps {
  initialService?: string;
  onSubmitted: (name: string) => void;
}

interface SubmittedEnquiry {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  budgetRange: string;
  description: string;
  whatsappUrl: string;
}

export const Contact: React.FC<ContactProps> = ({ initialService, onSubmitted }) => {
  const { currentTheme } = useCyberDoor();
  const { primary, rgb } = currentTheme;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: 'ERP, CRM, HCM & Business Solutions',
    budgetRange: '$2,000 - $5,000',
    description: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedEnquiry, setSubmittedEnquiry] = useState<SubmittedEnquiry | null>(null);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({
        ...prev,
        projectType: initialService,
      }));
    }
  }, [initialService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.description) return;

    setIsSubmitting(true);

    const targetEmail = "connect.techyora@gmail.com";
    const phone = "919524227511";

    // 1. WhatsApp formatted text & URL to automatically open
    const whatsappText = encodeURIComponent(
      `*TECHYORA - NEW PROJECT ENQUIRY*\n` +
      `================================\n` +
      `*Client Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone:* ${formData.phone || 'Not provided'}\n` +
      `*Company:* ${formData.company || 'Not provided'}\n` +
      `*Service Required:* ${formData.projectType}\n` +
      `*Budget Range:* ${formData.budgetRange}\n\n` +
      `*Project Specifications:*\n${formData.description}\n` +
      `================================\n` +
      `Dispatched via Techyora Website`
    );

    const isMobile = typeof window !== 'undefined' && /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const whatsappUrl = isMobile 
      ? `https://api.whatsapp.com/send?phone=${phone}&text=${whatsappText}` 
      : `https://web.whatsapp.com/send?phone=${phone}&text=${whatsappText}`;

    // 2. Automatically open WhatsApp to share enquiry with 9524227511
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
        phone: formData.phone || 'Not provided',
        company: formData.company || 'Not provided',
        service: formData.projectType,
        budget: formData.budgetRange,
        message: formData.description,
        _subject: `[Techyora Project Enquiry] ${formData.projectType} - ${formData.name}`,
        _template: 'table',
        _captcha: 'false',
        _replyto: formData.email,
        _autoresponse: 'Thank you for your enquiry. The Techyora team will contact you shortly.'
      };

      // Background JSON fetch
      fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(templatePayload)
      }).catch(() => {});

      // Hidden Form fallback to ensure delivery via standard browser form submission
      const formEl = document.createElement('form');
      formEl.method = 'POST';
      formEl.action = `https://formsubmit.co/${targetEmail}`;
      formEl.target = 'hidden_contact_iframe';
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
    } catch {
      // Silently handle background errors
    }

    const compiledData: SubmittedEnquiry = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      projectType: formData.projectType,
      budgetRange: formData.budgetRange,
      description: formData.description,
      whatsappUrl
    };

    setSubmittedEnquiry(compiledData);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      onSubmitted(formData.name);

      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: 'ERP, CRM, HCM & Business Solutions',
        budgetRange: '$2,000 - $5,000',
        description: '',
      });
    }, 400);
  };

  const handleResetForm = () => {
    setIsSuccess(false);
    setSubmittedEnquiry(null);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 bg-[#050505] relative overflow-hidden border-t border-white/5 select-none">
      {/* Background Accent Cyber Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[180px] pointer-events-none transition-colors duration-700"
        style={{ backgroundColor: `rgba(${rgb}, 0.08)` }}
      />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Anime Entrance */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12 sm:mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D0D0D] border text-xs font-mono mb-3 sm:mb-4"
            style={{
              borderColor: `rgba(${rgb}, 0.4)`,
              color: primary,
              boxShadow: `0 0 15px rgba(${rgb}, 0.15)`,
            }}
          >
            <Activity className="w-3.5 h-3.5 animate-pulse" />
            <span>NEURAL COMMS // DIRECT TRANSMISSION PORTAL</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Have a Project in{' '}
            <span
              className="inline-block neon-glow-text"
              style={{
                color: primary,
                textShadow: `0 0 20px rgba(${rgb}, 0.4)`,
              }}
            >
              Mind?
            </span>
          </h1>
          <p className="text-gray-300 text-sm sm:text-base lg:text-lg mt-3 leading-relaxed font-light">
            Tell our engineering team what you're building, what workflows you're looking to automate, or what enterprise system you need deployed. Let's discuss how our tailored software solutions can scale your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Info & Socials with Anime Mecha HUD */}
          <motion.div 
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 space-y-6"
          >
            
            <div className="relative bg-[#0D0D0D] rounded-2xl border border-white/10 p-6 sm:p-8 space-y-6 shadow-2xl overflow-hidden group">
              {/* Mecha HUD Target Lock Reticle Corners */}
              <span
                className="absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 transition-all pointer-events-none"
                style={{ borderColor: primary }}
              />
              <span
                className="absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 transition-all pointer-events-none"
                style={{ borderColor: primary }}
              />
              <span
                className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 transition-all pointer-events-none"
                style={{ borderColor: primary }}
              />
              <span
                className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 transition-all pointer-events-none"
                style={{ borderColor: primary }}
              />

              {/* Holographic Top Projector Light */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 rounded-b group-hover:w-32 transition-all duration-500"
                style={{
                  backgroundColor: primary,
                  boxShadow: `0 0 12px ${primary}`,
                }}
              />
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-24 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
                style={{
                  background: `linear-gradient(to bottom, rgba(${rgb}, 0.15), transparent)`,
                }}
              />

              <div className="flex items-center justify-between pb-4 border-b border-white/10 relative z-10">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5" style={{ color: primary }} />
                  <span>Direct Contact Details</span>
                </h2>
                <span
                  className="px-2 py-0.5 rounded border text-[9px] font-mono font-bold"
                  style={{
                    backgroundColor: `rgba(${rgb}, 0.1)`,
                    borderColor: `rgba(${rgb}, 0.3)`,
                    color: primary,
                  }}
                >
                  VERIFIED COMMS
                </span>
              </div>

              <div className="space-y-4 relative z-10">
                
                {/* 1. Email Transmission Card */}
                <motion.a
                  whileHover={{ scale: 1.015, x: 4 }}
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="relative overflow-hidden flex items-start gap-4 p-4 rounded-xl bg-[#050505] border border-white/10 transition-all duration-300 group/card cursor-pointer shadow-md"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = primary;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  }}
                >
                  <div
                    className="absolute inset-0 -translate-x-full group-hover/card:translate-x-full transition-transform duration-700 pointer-events-none"
                    style={{
                      background: `linear-gradient(to right, transparent, rgba(${rgb}, 0.1), transparent)`,
                    }}
                  />
                  <div
                    className="w-10 h-10 rounded-xl bg-[#0D0D0D] border flex items-center justify-center group-hover/card:scale-110 transition-all shrink-0"
                    style={{
                      borderColor: `rgba(${rgb}, 0.4)`,
                      color: primary,
                      boxShadow: `0 0 15px rgba(${rgb}, 0.25)`,
                    }}
                  >
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-400 block tracking-wider uppercase">EMAIL TRANSMISSION</span>
                    <span className="text-sm sm:text-base font-bold text-white group-hover/card:text-white transition-colors break-all">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                </motion.a>

                {/* 2. Direct Mobile Hotline Card */}
                <motion.a
                  whileHover={{ scale: 1.015, x: 4 }}
                  href={`tel:${PERSONAL_INFO.Mobile}`}
                  className="relative overflow-hidden flex items-start gap-4 p-4 rounded-xl bg-[#050505] border border-white/10 transition-all duration-300 group/card cursor-pointer shadow-md"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = primary;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  }}
                >
                  <div
                    className="absolute inset-0 -translate-x-full group-hover/card:translate-x-full transition-transform duration-700 pointer-events-none"
                    style={{
                      background: `linear-gradient(to right, transparent, rgba(${rgb}, 0.1), transparent)`,
                    }}
                  />
                  <div
                    className="w-10 h-10 rounded-xl bg-[#0D0D0D] border flex items-center justify-center group-hover/card:scale-110 transition-all shrink-0"
                    style={{
                      borderColor: `rgba(${rgb}, 0.4)`,
                      color: primary,
                      boxShadow: `0 0 15px rgba(${rgb}, 0.25)`,
                    }}
                  >
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-400 block tracking-wider uppercase">DIRECT HOTLINE</span>
                    <span className="text-sm sm:text-base font-bold text-white transition-colors">
                      {PERSONAL_INFO.Mobile}
                    </span>
                    <span className="text-[11px] text-gray-400 block mt-0.5 font-mono">Immediate Team Consultation</span>
                  </div>
                </motion.a>

                {/* 3. Availability Live Radar Card */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#050505] border border-white/10 relative overflow-hidden">
                  <div
                    className="w-10 h-10 rounded-xl bg-[#0D0D0D] border flex items-center justify-center shrink-0"
                    style={{
                      borderColor: `rgba(${rgb}, 0.4)`,
                      color: primary,
                    }}
                  >
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-400 block tracking-wider uppercase">DEPLOYMENT CAPACITY</span>
                    <span className="text-sm sm:text-base font-bold flex items-center gap-2" style={{ color: primary }}>
                      <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: primary }} />
                      {PERSONAL_INFO.availability}
                    </span>
                  </div>
                </div>

              </div>

              {/* Direct Enterprise Comms Buttons (LinkedIn & WhatsApp) */}
              <div className="pt-4 border-t border-white/10 relative z-10">
                <span className="text-[10px] font-mono text-gray-400 block mb-3 uppercase tracking-wider">
                  DIRECT ENTERPRISE CHANNELS
                </span>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={PERSONAL_INFO.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-3 rounded-xl bg-[#050505] border border-white/10 text-gray-300 transition-all text-xs font-mono group/btn shadow-md"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = primary;
                      e.currentTarget.style.color = primary;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.color = '';
                    }}
                  >
                    <Linkedin className="w-4 h-4 group-hover/btn:scale-110 transition-transform" style={{ color: primary }} />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.socials.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-3 rounded-xl bg-[#050505] border border-white/10 text-gray-300 transition-all text-xs font-mono group/btn shadow-md"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = primary;
                      e.currentTarget.style.color = primary;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.color = '';
                    }}
                  >
                    <MessageSquare className="w-4 h-4 group-hover/btn:scale-110 transition-transform" style={{ color: primary }} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

            </div>

          </motion.div>

          {/* Right Column: Project Inquiry Form with Anime Holographic Shell */}
          <motion.div 
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 w-full"
          >
            <div className="relative bg-[#0D0D0D] rounded-2xl border border-white/10 p-6 sm:p-8 shadow-2xl overflow-hidden group">
              {/* Mecha HUD Reticle Corners */}
              <span
                className="absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 transition-all pointer-events-none"
                style={{ borderColor: primary }}
              />
              <span
                className="absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 transition-all pointer-events-none"
                style={{ borderColor: primary }}
              />
              <span
                className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 transition-all pointer-events-none"
                style={{ borderColor: primary }}
              />
              <span
                className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 transition-all pointer-events-none"
                style={{ borderColor: primary }}
              />

              {/* Animated Cyber Gradient Top Line */}
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{
                  background: `linear-gradient(to right, transparent, ${primary}, transparent)`,
                  boxShadow: `0 0 15px ${primary}`,
                }}
              />

              <div className="pb-4 mb-6 border-b border-white/10 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-5 h-5" style={{ color: primary }} />
                    <span>Project Intake & Consultation</span>
                  </h2>
                  <p className="text-xs text-gray-400 font-mono mt-0.5">ESTIMATED RESPONSE TIME // WITHIN 24 HOURS</p>
                </div>
                <span className="hidden sm:inline-block px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-gray-400">
                  ENCRYPTED FORM
                </span>
              </div>
              
              {isSuccess && submittedEnquiry ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6 text-center py-4"
                >
                  {/* Glowing Animated Success Icon */}
                  <div
                    className="w-16 h-16 rounded-full border-2 flex items-center justify-center mx-auto"
                    style={{
                      backgroundColor: `rgba(${rgb}, 0.15)`,
                      borderColor: primary,
                      color: primary,
                      boxShadow: `0 0 35px rgba(${rgb}, 0.45)`,
                    }}
                  >
                    <CheckCircle className="w-8 h-8" />
                  </div>

                  {/* Primary Success Message as requested */}
                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      Thanks for your enquiry.
                    </h3>
                    <p className="text-sm sm:text-base font-medium text-gray-300">
                      Our team will contact you soon.
                    </p>
                  </div>

                  {/* Telemetry Summary */}
                  <div className="p-4 sm:p-5 rounded-xl bg-[#050505] border border-white/10 text-left font-mono text-xs space-y-2.5">
                    <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[11px]">
                      <span className="text-gray-400">DISPATCHED TO:</span>
                      <span className="font-bold underline" style={{ color: primary }}>connect.techyora@gmail.com</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                      <div>
                        <span className="text-gray-500 block text-[9.5px]">CLIENT NAME:</span>
                        <span className="text-white font-semibold">{submittedEnquiry.name}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 block text-[9.5px]">EMAIL:</span>
                        <span className="text-white font-semibold">{submittedEnquiry.email}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 block text-[9.5px]">SERVICE:</span>
                        <span className="text-white font-semibold truncate block">{submittedEnquiry.projectType}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 block text-[9.5px]">BUDGET TIER:</span>
                        <span className="font-semibold" style={{ color: primary }}>{submittedEnquiry.budgetRange}</span>
                      </div>
                    </div>
                    <div className="pt-2 border-t border-white/5">
                      <span className="text-gray-500 block text-[9.5px] mb-1">PROJECT OBJECTIVES:</span>
                      <p className="text-gray-300 text-xs font-sans bg-[#08080A] p-2.5 rounded-lg border border-white/5">
                        "{submittedEnquiry.description}"
                      </p>
                    </div>
                  </div>

                  {/* WhatsApp Forwarding Notification */}
                  <div className="p-3.5 rounded-xl bg-[#0B1510] border border-[#25D366]/40 flex items-center justify-between gap-3 text-left">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#25D366] text-black flex items-center justify-center shrink-0">
                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413z" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-xs font-bold text-[#25D366] block">WhatsApp Notification</span>
                        <span className="text-[10px] font-mono text-gray-300 block">Enquiry forwarded to +91 9524227511</span>
                      </div>
                    </div>
                    <a
                      href={submittedEnquiry.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-[#25D366] hover:bg-[#22c55e] text-black text-xs font-mono font-bold flex items-center gap-1 transition-all"
                    >
                      <span>Open Chat</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  {/* Reset / Submit Another */}
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 hover:border-white/30 text-xs font-mono text-gray-300 hover:text-white transition-colors cursor-pointer"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Submit Another Project Enquiry</span>
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* Name */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-gray-300 block">
                        YOUR NAME <span className="font-bold" style={{ color: primary }}>*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[var(--cyber-primary)] focus:ring-1 focus:ring-[var(--cyber-primary)] text-sm transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-gray-300 block">
                        EMAIL ADDRESS <span className="font-bold" style={{ color: primary }}>*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[var(--cyber-primary)] focus:ring-1 focus:ring-[var(--cyber-primary)] text-sm transition-all"
                      />
                    </div>

                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* Phone */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-gray-300 block">
                        PHONE NUMBER
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 90000 00000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[var(--cyber-primary)] focus:ring-1 focus:ring-[var(--cyber-primary)] text-sm transition-all"
                      />
                    </div>

                    {/* Company */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-gray-300 block">
                        COMPANY / ORGANIZATION
                      </label>
                      <input
                        type="text"
                        placeholder="Acme Corp"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[var(--cyber-primary)] focus:ring-1 focus:ring-[var(--cyber-primary)] text-sm transition-all"
                      />
                    </div>

                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* Project Type */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-gray-300 block">
                        CORE SERVICE OF INTEREST <span className="font-bold" style={{ color: primary }}>*</span>
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-white/10 text-white focus:outline-none focus:border-[var(--cyber-primary)] focus:ring-1 focus:ring-[var(--cyber-primary)] text-sm transition-all"
                      >
                        <option value="ERP, CRM, HCM & Business Solutions">ERP, CRM, HCM & Business Solutions (ERPNext, Frappe)</option>
                        <option value="Custom Software Solutions">Custom Software Solutions (Billing, Inventory, Fleet, Logistics)</option>
                        <option value="Web Development and Design">Web Development & Design (3D Websites, E-Commerce)</option>
                        <option value="AI & Automation">AI & Automation (Agentic AI, Workflows, Chatbots)</option>
                        <option value="Graphic Design and Branding">Graphic Design & Branding (Logo, Flex, Digital Marketing)</option>
                        <option value="AMC and Support Services">AMC & Support Services (ERP Maintenance, Cloud, Bug Fixing)</option>
                      </select>
                    </div>

                    {/* Budget Range */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-gray-300 block">
                        ESTIMATED PROJECT BUDGET
                      </label>
                      <select
                        value={formData.budgetRange}
                        onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-white/10 text-white focus:outline-none focus:border-[var(--cyber-primary)] focus:ring-1 focus:ring-[var(--cyber-primary)] text-sm transition-all"
                      >
                        <option value="< $2,000">Under $2,000</option>
                        <option value="$2,000 - $5,000">$2,000 - $5,000</option>
                        <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                        <option value="$10,000+">$10,000+ (Enterprise)</option>
                      </select>
                    </div>

                  </div>

                  {/* Project Description */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-gray-300 block">
                      PROJECT OBJECTIVES & REQUIREMENTS <span className="font-bold" style={{ color: primary }}>*</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Briefly describe your operational requirements, integration needs, or problems you are solving..."
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[var(--cyber-primary)] focus:ring-1 focus:ring-[var(--cyber-primary)] text-sm transition-all resize-none"
                    />
                  </div>

                  {/* Submit Action Button */}
                  <motion.button
                    whileHover={{ scale: 1.015 }}
                    whileTap={{ scale: 0.985 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-black font-extrabold text-sm sm:text-base uppercase tracking-wider transition-all cursor-pointer disabled:opacity-50"
                    style={{
                      backgroundColor: primary,
                      boxShadow: `0 0 35px rgba(${rgb}, 0.55)`,
                    }}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        <span>Compiling & Dispatching to connect.techyora@gmail.com...</span>
                      </span>
                    ) : (
                      <>
                        <span>Submit Project Inquiry</span>
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>

                </form>
              )}
            </div>
          </motion.div>

        </div>

      </div>

      {/* Hidden Iframe for zero-redirect background form transmission */}
      <iframe
        name="hidden_contact_iframe"
        title="Background Submission Sink"
        style={{ display: 'none' }}
        className="hidden"
      />
    </section>
  );
};
