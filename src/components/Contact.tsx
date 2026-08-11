import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Calendar, Send, Linkedin, Github, MessageSquare, CheckCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  initialService?: string;
  onSubmitted: (name: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ initialService, onSubmitted }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: 'ERPNext / ERP Solutions',
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

    // Simulate backend submission response
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      onSubmitted(formData.name);

      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: 'ERPNext / ERP Solutions',
        budgetRange: '$2,000 - $5,000',
        description: '',
      });

      setTimeout(() => setIsSuccess(false), 6000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-[#050505] relative overflow-hidden border-t border-white/5">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#39FF14]/5 rounded-full blur-[180px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D0D0D] border border-[#39FF14]/30 text-xs font-mono text-[#39FF14] mb-4">
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Have a Project in Mind?
          </h2>
          <p className="text-gray-300 text-base sm:text-lg mt-3 leading-relaxed">
            Tell me what you're building, what problem you're trying to solve, or what you want to improve. Let's discuss how technology can help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Socials */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="bg-[#0D0D0D] rounded-2xl border border-white/10 p-8 space-y-6 shadow-xl">
              <h3 className="text-xl font-bold text-white pb-4 border-b border-white/10">
                Direct Contact Details
              </h3>

              <div className="space-y-5">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-start gap-4 p-4 rounded-xl bg-[#050505] border border-white/10 hover:border-[#39FF14]/50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0D0D0D] border border-[#39FF14]/30 flex items-center justify-center text-[#39FF14] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-gray-400 block">EMAIL INQUIRIES</span>
                    <span className="text-base font-bold text-white group-hover:text-[#39FF14] transition-colors">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#050505] border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-[#0D0D0D] border border-[#39FF14]/30 flex items-center justify-center text-[#39FF14] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-gray-400 block">MOBILE</span>
                    <span className="text-base font-bold text-white">
                      {PERSONAL_INFO.Mobile}
                    </span>
                    <span className="text-xs text-gray-400 block mt-0.5">Happy to Connect</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#050505] border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-[#0D0D0D] border border-[#39FF14]/30 flex items-center justify-center text-[#39FF14] shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-gray-400 block">CURRENT STATUS</span>
                    <span className="text-base font-bold text-[#39FF14] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#39FF14] animate-ping"></span>
                      {PERSONAL_INFO.availability}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/10">
                <span className="text-xs font-mono text-gray-400 block mb-3">CONNECT ON SOCIAL CHANNELS</span>
                <div className="flex items-center gap-3">
                  <a
                    href={PERSONAL_INFO.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-[#050505] border border-white/10 text-gray-300 hover:text-[#39FF14] hover:border-[#39FF14]/50 transition-colors text-xs font-mono"
                  >
                    <Linkedin className="w-4 h-4 text-[#39FF14]" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-[#050505] border border-white/10 text-gray-300 hover:text-[#39FF14] hover:border-[#39FF14]/50 transition-colors text-xs font-mono"
                  >
                    <Github className="w-4 h-4 text-[#39FF14]" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.socials.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-[#050505] border border-white/10 text-gray-300 hover:text-[#39FF14] hover:border-[#39FF14]/50 transition-colors text-xs font-mono"
                  >
                    <MessageSquare className="w-4 h-4 text-[#39FF14]" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7 w-full">
            <div className="bg-[#0D0D0D] rounded-2xl border border-white/10 p-8 shadow-2xl relative overflow-hidden">
              
              {isSuccess && (
                <div className="mb-6 p-4 rounded-xl bg-[#39FF14]/10 border border-[#39FF14] text-[#39FF14] text-sm font-semibold flex items-center gap-3 animate-fade-in">
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  <span>Thank you! Your project inquiry has been sent successfully. I will get back to you within 24 hours.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-gray-300 block">
                      YOUR NAME <span className="text-[#39FF14]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#39FF14] focus:ring-1 focus:ring-[#39FF14] text-sm transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-gray-300 block">
                      EMAIL ADDRESS <span className="text-[#39FF14]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#39FF14] focus:ring-1 focus:ring-[#39FF14] text-sm transition-colors"
                    />
                  </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-gray-300 block">
                      PHONE NUMBER
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#39FF14] focus:ring-1 focus:ring-[#39FF14] text-sm transition-colors"
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
                      className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#39FF14] focus:ring-1 focus:ring-[#39FF14] text-sm transition-colors"
                    />
                  </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Project Type */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-gray-300 block">
                      PROJECT TYPE <span className="text-[#39FF14]">*</span>
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-white/10 text-white focus:outline-none focus:border-[#39FF14] focus:ring-1 focus:ring-[#39FF14] text-sm transition-colors"
                    >
                      <option value="ERPNext / ERP Solutions">ERPNext & ERP Solutions</option>
                      <option value="Web Development">Web Development & Portals</option>
                      <option value="AI & Automation">AI & Autonomous Agents</option>
                      <option value="CRM & HRM Solutions">CRM & HRM Systems</option>
                      <option value="Custom Software Development">Custom Enterprise Software</option>
                      <option value="Digital Business Consulting">Digital Technology Advisory</option>
                    </select>
                  </div>

                  {/* Budget Range */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-gray-300 block">
                      ESTIMATED BUDGET RANGE
                    </label>
                    <select
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-white/10 text-white focus:outline-none focus:border-[#39FF14] focus:ring-1 focus:ring-[#39FF14] text-sm transition-colors"
                    >
                      <option value="< $2,000">Under $2,000</option>
                      <option value="$2,000 - $5,000">$2,000 - $5,000</option>
                      <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                      <option value="$10,000+">$10,000+</option>
                    </select>
                  </div>

                </div>

                {/* Project Description */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-300 block">
                    PROJECT DESCRIPTION <span className="text-[#39FF14]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Briefly describe your business goals, technical requirements, or key challenges..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#050505] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#39FF14] focus:ring-1 focus:ring-[#39FF14] text-sm transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#39FF14] text-black font-bold text-base hover:bg-[#45ff24] shadow-[0_0_30px_rgba(57,255,20,0.5)] hover:shadow-[0_0_45px_rgba(57,255,20,0.8)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending Inquiry...</span>
                  ) : (
                    <>
                      <span>Send Project Inquiry</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
