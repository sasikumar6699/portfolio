import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    // { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const handleCtaClick = () => {
    if (location.pathname !== '/contact') {
      navigate('/contact');
    } else {
      onOpenContact();
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050505]/90 backdrop-blur-md border-b border-[#1E1E22] py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2 group font-mono text-xl font-bold tracking-tight text-white transition-opacity hover:opacity-90"
        >
          <div className="w-8 h-8 rounded-lg bg-[#0D0D0D] border border-[#39FF14]/40 flex items-center justify-center text-[#39FF14] group-hover:border-[#39FF14] group-hover:shadow-[0_0_15px_rgba(57,255,20,0.5)] transition-all">
            <Code2 className="w-4 h-4" />
          </div>
          <span>{PERSONAL_INFO.brandName}</span>
          <span className="w-2 h-2 rounded-full bg-[#39FF14] inline-block pulse-neon-dot"></span>
        </NavLink>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-[#0D0D0D]/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-[#39FF14] bg-[#39FF14]/10 border border-[#39FF14]/30 shadow-[0_0_10px_rgba(57,255,20,0.2)] font-semibold'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <button
            onClick={handleCtaClick}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs lg:text-sm font-semibold tracking-wide bg-[#39FF14] text-black hover:bg-[#45ff24] shadow-[0_0_20px_rgba(57,255,20,0.4)] hover:shadow-[0_0_30px_rgba(57,255,20,0.7)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Let's Work Together</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#0D0D0D] border border-white/10 text-gray-300 hover:text-[#39FF14] hover:border-[#39FF14]/40 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0A0C] border-b border-[#1E1E22] px-4 pt-4 pb-6 space-y-3 shadow-2xl animate-fade-in">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? 'text-[#39FF14] bg-[#39FF14]/10 font-semibold'
                    : 'text-gray-300 hover:text-[#39FF14] hover:bg-white/5'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="pt-2 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleCtaClick();
              }}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-[#39FF14] text-black shadow-[0_0_20px_rgba(57,255,20,0.4)]"
            >
              <span>Let's Work Together</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
