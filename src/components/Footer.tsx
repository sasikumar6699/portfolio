import React from 'react';
import { NavLink } from 'react-router-dom';
import { Code2, Linkedin, MessageSquare, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useCyberDoor } from '../context/CyberDoorContext';

export const Footer: React.FC = () => {
  const { currentTheme } = useCyberDoor();
  const { primary, rgb } = currentTheme;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] border-t border-white/10 pt-8 sm:pt-10 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-6 sm:pb-8 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <NavLink
              to="/"
              className="flex items-center gap-2 font-mono text-xl font-bold tracking-tight text-white group"
            >
              <div
                className="w-8 h-8 rounded-lg bg-[#0D0D0D] border flex items-center justify-center transition-all group-hover:scale-105"
                style={{
                  borderColor: `rgba(${rgb}, 0.45)`,
                  color: primary,
                  boxShadow: `0 0 12px rgba(${rgb}, 0.25)`,
                }}
              >
                <Code2 className="w-4 h-4" />
              </div>
              <span>{PERSONAL_INFO.brandName}</span>
              <span
                className="w-2 h-2 rounded-full inline-block"
                style={{
                  backgroundColor: primary,
                  boxShadow: `0 0 6px ${primary}`,
                }}
              />
            </NavLink>

            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              Engineering scalable software, ERPNext systems, 3D web, agentic AI & 24/7 AMC support.
            </p>

            <div className="text-xs font-mono text-gray-500 pt-2">
              TECHYORA • ENTERPRISE SOFTWARE & SOLUTIONS COMPANY
            </div>
          </div>

          {/* Navigation Links with React Router */}
          <div className="md:col-span-4 space-y-3">
            <h4
              className="text-xs font-mono uppercase tracking-wider font-bold"
              style={{ color: primary }}
            >
              NAVIGATION
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-300 font-medium">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Skills', path: '/skills' },
                { name: 'Projects', path: '/projects' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className="hover:text-white transition-colors"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = primary;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '';
                  }}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Social Channels */}
          <div className="md:col-span-3 space-y-3">
            <h4
              className="text-xs font-mono uppercase tracking-wider font-bold"
              style={{ color: primary }}
            >
              CONNECT
            </h4>
            <div className="space-y-2 text-xs font-mono">
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = primary;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '';
                }}
              >
                <Linkedin className="w-4 h-4" style={{ color: primary }} />
                <span>LinkedIn</span>
              </a>

              <a
                href={PERSONAL_INFO.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = primary;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '';
                }}
              >
                <MessageSquare className="w-4 h-4" style={{ color: primary }} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Copyright & Scroll to Top */}
        <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <div>
            © 2026 Techyora All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            onMouseEnter={(e) => {
              e.currentTarget.style.color = primary;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '';
            }}
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-4 h-4" style={{ color: primary }} />
          </button>
        </div>

      </div>
    </footer>
  );
};
