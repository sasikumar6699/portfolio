import React from 'react';
import { NavLink } from 'react-router-dom';

export interface TechyoraLogoProps {
  variant?: 'full' | 'mark' | 'wordmark';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  theme?: 'dark' | 'light';
  className?: string;
  linkToHome?: boolean;
  glow?: boolean;
}

export const TechyoraLogo: React.FC<TechyoraLogoProps> = ({
  variant = 'full',
  size = 'md',
  theme = 'dark',
  className = '',
  linkToHome = false,
  glow = false,
}) => {
  // Height presets
  const sizeMap = {
    xs: { h: 'h-6', iconH: 'h-6', text: 'text-sm' },
    sm: { h: 'h-7', iconH: 'h-7', text: 'text-base' },
    md: { h: 'h-9', iconH: 'h-9', text: 'text-lg' },
    lg: { h: 'h-11', iconH: 'h-11', text: 'text-xl' },
    xl: { h: 'h-14', iconH: 'h-14', text: 'text-2xl' },
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  const content = (
    <div
      className={`inline-flex items-center gap-2.5 select-none transition-all duration-300 ${
        glow ? 'drop-shadow-[0_0_14px_rgba(130,195,36,0.4)]' : ''
      } ${className}`}
    >
      {/* 1. Techyora Hexagon Emblem Mark */}
      {(variant === 'full' || variant === 'mark') && (
        <div className={`relative flex items-center justify-center shrink-0 ${currentSize.iconH}`}>
          <img
            src="/images/techyora-mark.png"
            alt="Techyora Logo Mark"
            className={`${currentSize.iconH} w-auto object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:scale-105`}
            loading="eager"
          />
        </div>
      )}

      {/* 2. Stylized Techyora Wordmark */}
      {(variant === 'full' || variant === 'wordmark') && (
        <div className="flex items-center tracking-wider font-extrabold font-mono uppercase">
          {/* We use the custom stylized T=CHYORA styling */}
          <span className="flex items-center leading-none">
            {/* T */}
            <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>T</span>

            {/* Stylized 'E' with 3 horizontal bars (middle is lime green) */}
            <span className="inline-flex flex-col justify-between mx-[1.5px] h-[0.72em] w-[0.55em] py-[1px]">
              <span className={`block h-[2px] w-full rounded-sm ${theme === 'dark' ? 'bg-white' : 'bg-gray-900'}`} />
              <span className="block h-[2px] w-full rounded-sm bg-[#82C324] shadow-[0_0_6px_#82C324]" />
              <span className={`block h-[2px] w-full rounded-sm ${theme === 'dark' ? 'bg-white' : 'bg-gray-900'}`} />
            </span>

            {/* CHYORA */}
            <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>CHYORA</span>
          </span>
          <span className="w-1.5 h-1.5 rounded-full ml-1.5 bg-[#82C324] shadow-[0_0_8px_#82C324] inline-block" />
        </div>
      )}
    </div>
  );

  if (linkToHome) {
    return (
      <NavLink to="/" className="group inline-flex items-center transition-opacity hover:opacity-90">
        {content}
      </NavLink>
    );
  }

  return content;
};

export default TechyoraLogo;
