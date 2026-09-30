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
  RefreshCw
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useCyberDoor } from '../context/CyberDoorContext';
import { dispatchEnquiry } from '../services/notificationService';

interface ContactProps {
  initialService?: string;
  onSubmitted?: (name?: string) => void;
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

    // Silently dispatch enquiry to configured Email & WhatsApp channels in background
    dispatchEnquiry({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      service: formData.projectType,
      budget: formData.budgetRange,
      message: formData.description,
    });

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      if (onSubmitted) {
        onSubmitted(formData.name);
      }

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
              
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6 text-center py-10 px-4"
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

                  {/* Reset / Submit Another */}
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 hover:border-white/30 text-xs font-mono text-gray-300 hover:text-white transition-colors cursor-pointer"
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
    </section>
  );
};
