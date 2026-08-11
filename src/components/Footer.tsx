import React from 'react';
import { NavLink } from 'react-router-dom';
import { Code2, Linkedin, Github, MessageSquare, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <NavLink
              to="/"
              className="flex items-center gap-2 font-mono text-xl font-bold tracking-tight text-white"
            >
              <div className="w-8 h-8 rounded-lg bg-[#0D0D0D] border border-[#39FF14]/40 flex items-center justify-center text-[#39FF14]">
                <Code2 className="w-4 h-4" />
              </div>
              <span>{PERSONAL_INFO.brandName}</span>
              <span className="w-2 h-2 rounded-full bg-[#39FF14] inline-block"></span>
            </NavLink>

            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              Building useful technology. Solving real business problems.
            </p>

            <div className="text-xs font-mono text-gray-500 pt-2">
              TECHYORA • FREELANCE SOFTWARE CONSULTANT TEAM
            </div>
          </div>

          {/* Navigation Links with React Router */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono text-[#39FF14] uppercase tracking-wider">NAVIGATION</h4>
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-300 font-medium">
              <NavLink to="/" className="hover:text-[#39FF14] transition-colors">Home</NavLink>
              <NavLink to="/about" className="hover:text-[#39FF14] transition-colors">About</NavLink>
              <NavLink to="/services" className="hover:text-[#39FF14] transition-colors">Services</NavLink>
              <NavLink to="/skills" className="hover:text-[#39FF14] transition-colors">Skills</NavLink>
              <NavLink to="/projects" className="hover:text-[#39FF14] transition-colors">Projects</NavLink>
              <NavLink to="/experience" className="hover:text-[#39FF14] transition-colors">Experience</NavLink>
              <NavLink to="/contact" className="hover:text-[#39FF14] transition-colors">Contact</NavLink>
            </div>
          </div>

          {/* Social Channels */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono text-[#39FF14] uppercase tracking-wider">CONNECT</h4>
            <div className="space-y-2 text-xs font-mono">
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-[#39FF14] transition-colors"
              >
                <Linkedin className="w-4 h-4 text-[#39FF14]" />
                <span>LinkedIn</span>
              </a>

              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-[#39FF14] transition-colors"
              >
                <Github className="w-4 h-4 text-[#39FF14]" />
                <span>GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-[#39FF14] transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#39FF14]" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Copyright & Scroll to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <div>
            © 2026 Techyora All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-400 hover:text-[#39FF14] transition-colors"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-4 h-4 text-[#39FF14]" />
          </button>
        </div>

      </div>
    </footer>
  );
};
