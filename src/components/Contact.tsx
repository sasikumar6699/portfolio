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
  Copy,
  ExternalLink,
  Check,
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
  gmailUrl: string;
  mailtoUrl: string;
  whatsappUrl: string;
  fullSummary: string;
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
  const [isCopied, setIsCopied] = useState(false);

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
    const subject = `[Techyora Project Enquiry] ${formData.name} - ${formData.projectType}`;
    
    const mailBody = `Hello Techyora Team,\n\nA new project enquiry has been submitted through your website:\n\n• Client Name: ${formData.name}\n• Client Email: ${formData.email}\n• Phone Number: ${formData.phone || 'Not provided'}\n• Organization / Company: ${formData.company || 'Not provided'}\n• Core Service Required: ${formData.projectType}\n• Estimated Budget: ${formData.budgetRange}\n\n• Project Objectives & Requirements:\n${formData.description}\n\n--------------------------------------------------\nSubmitted via Techyora Digital Transmission Portal\nRecipient: ${targetEmail}\nTimestamp: ${new Date().toLocaleString()}`;

    // Gmail Web direct compose URL
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(targetEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailBody)}`;
    
    // Default system mailto URL
    const mailtoUrl = `mailto:${targetEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailBody)}`;

    // WhatsApp Business direct message link with prefilled enquiry
    const whatsappText = encodeURIComponent(
      `*New Techyora Project Inquiry*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone:* ${formData.phone || 'N/A'}\n` +
      `*Company:* ${formData.company || 'N/A'}\n` +
      `*Service:* ${formData.projectType}\n` +
      `*Budget:* ${formData.budgetRange}\n\n` +
      `*Requirements:*\n${formData.description}`
    );
    const isMobile = typeof window !== 'undefined' && /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const whatsappUrl = isMobile 
      ? `https://api.whatsapp.com/send?phone=919524227511&text=${whatsappText}` 
      : `https://web.whatsapp.com/send?phone=919524227511&text=${whatsappText}`;

    // Automatically trigger mail draft in browser
    try {
      window.open(gmailUrl, '_blank') || (window.location.href = mailtoUrl);
    } catch {
      // Browser popup blocker fallback - mailto & Gmail button remain readily available in UI
    }

    const compiledData: SubmittedEnquiry = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      projectType: formData.projectType,
      budgetRange: formData.budgetRange,
      description: formData.description,
      gmailUrl,
      mailtoUrl,
      whatsappUrl,
      fullSummary: mailBody
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
    }, 600);
  };

  const handleCopySummary = () => {
    if (!submittedEnquiry) return;
    navigator.clipboard.writeText(submittedEnquiry.fullSummary);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
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
                  className="space-y-6 animate-fade-in"
                >
                  {/* Success Alert Banner */}
                  <div
                    className="p-5 rounded-2xl border flex items-start gap-3.5 relative overflow-hidden"
                    style={{
                      backgroundColor: `rgba(${rgb}, 0.12)`,
                      borderColor: primary,
                      boxShadow: `0 0 30px rgba(${rgb}, 0.25)`,
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor: primary,
                        color: '#000000',
                        boxShadow: `0 0 15px ${primary}`,
                      }}
                    >
                      <CheckCircle className="w-5 h-5" />
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs font-mono font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-black/40 border border-white/10" style={{ color: primary }}>
                          ENQUIRY COMPILED
                        </span>
                        <span className="text-[11px] font-mono text-gray-300">
                          TARGET // connect.techyora@gmail.com
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-white">
                        Enquiry Ready for Techyora Engineering Team
                      </h3>
                      <p className="text-xs text-gray-300 leading-relaxed font-light">
                        Your project requirements have been structured and prepared for <strong className="text-white">connect.techyora@gmail.com</strong>. Use any of the instant channels below to dispatch or verify your message.
                      </p>
                    </div>
                  </div>

                  {/* Summary Telemetry Card */}
                  <div className="p-4 sm:p-5 rounded-xl bg-[#050505] border border-white/10 space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between pb-2 border-b border-white/5 text-[10.5px] text-gray-400">
                      <span>CLIENT: <strong className="text-white">{submittedEnquiry.name}</strong></span>
                      <span className="truncate max-w-[170px]">{submittedEnquiry.email}</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-gray-300">
                      <div>
                        <span className="text-gray-500 block text-[9.5px]">SERVICE REQUESTED:</span>
                        <span className="font-semibold text-white truncate block">{submittedEnquiry.projectType}</span>
                      </div>
                      <div>
                        <span className="text-gray-500 block text-[9.5px]">BUDGET TIER:</span>
                        <span className="font-semibold" style={{ color: primary }}>{submittedEnquiry.budgetRange}</span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-white/5">
                      <span className="text-gray-500 block text-[9.5px] mb-1">PROJECT OBJECTIVES:</span>
                      <p className="text-gray-300 text-xs line-clamp-3 leading-relaxed font-sans bg-[#08080A] p-2.5 rounded-lg border border-white/5">
                        "{submittedEnquiry.description}"
                      </p>
                    </div>
                  </div>

                  {/* Immediate Action Buttons (Gmail, Mailto, WhatsApp Business) */}
                  <div className="space-y-3">
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">
                      CHOOSE TRANSMISSION DISPATCH CHANNEL:
                    </span>

                    {/* 1. Gmail Web Direct Link */}
                    <a
                      href={submittedEnquiry.gmailUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-between p-3.5 rounded-xl bg-[#050505] border border-white/10 hover:border-white/30 text-white text-xs font-semibold transition-all group/btn shadow-md"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = primary;
                        e.currentTarget.style.boxShadow = `0 0 20px rgba(${rgb}, 0.25)`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                          style={{
                            backgroundColor: `rgba(${rgb}, 0.15)`,
                            color: primary,
                          }}
                        >
                          <Mail className="w-4 h-4" />
                        </div>
                        <div className="min-w-0 text-left">
                          <span className="block font-bold truncate">Open & Send via Gmail Web</span>
                          <span className="block text-[10px] font-mono text-gray-400 truncate">
                            Pre-fills To: connect.techyora@gmail.com
                          </span>
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover/btn:text-white shrink-0 ml-2" />
                    </a>

                    {/* 2. WhatsApp Business Direct Link (9524227511) */}
                    <a
                      href={submittedEnquiry.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-between p-3.5 rounded-xl bg-[#0B1510] border border-[#25D366]/40 hover:border-[#25D366] text-white text-xs font-semibold transition-all group/wa shadow-md"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-8 h-8 rounded-lg bg-[#25D366] text-black flex items-center justify-center shrink-0 shadow-sm">
                          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413z" />
                          </svg>
                        </div>
                        <div className="min-w-0 text-left">
                          <span className="block font-bold text-[#25D366] truncate">Send to WhatsApp Business</span>
                          <span className="block text-[10px] font-mono text-gray-300 truncate">
                            Direct Line: +91 9524227511
                          </span>
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-[#25D366] shrink-0 ml-2" />
                    </a>

                    {/* 3. Copy Summary & Native Mailto */}
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <button
                        type="button"
                        onClick={handleCopySummary}
                        className="py-2.5 px-3 rounded-xl bg-[#050505] border border-white/10 hover:border-white/30 text-xs font-mono text-gray-300 hover:text-white flex items-center justify-center gap-2 transition-colors cursor-pointer"
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-3.5 h-3.5" style={{ color: primary }} />
                            <span style={{ color: primary }}>Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-gray-400" />
                            <span>Copy Details</span>
                          </>
                        )}
                      </button>

                      <a
                        href={submittedEnquiry.mailtoUrl}
                        className="py-2.5 px-3 rounded-xl bg-[#050505] border border-white/10 hover:border-white/30 text-xs font-mono text-gray-300 hover:text-white flex items-center justify-center gap-2 transition-colors text-center"
                      >
                        <Send className="w-3.5 h-3.5 text-gray-400" />
                        <span>Default Mail</span>
                      </a>
                    </div>
                  </div>

                  {/* Reset / Submit Another */}
                  <div className="pt-2 text-center border-t border-white/5">
                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-gray-400 hover:text-white transition-colors cursor-pointer"
                    >
                      <RefreshCw className="w-3 h-3" />
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
    </section>
  );
};
