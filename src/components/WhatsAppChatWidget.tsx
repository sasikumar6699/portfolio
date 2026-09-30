import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, CheckCircle2, X } from 'lucide-react';

interface WhatsAppChatWidgetProps {
  phoneNumber?: string;
  defaultMessage?: string;
}

export const WhatsAppChatWidget: React.FC<WhatsAppChatWidgetProps> = ({
  phoneNumber = '9524227511',
  defaultMessage = 'Hello Techyora, I would like to inquire about your enterprise software and solutions.'
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // International format for India (+91)
  const formattedNumber = phoneNumber.replace(/[^0-9]/g, '');
  const internationalNumber = formattedNumber.startsWith('91') ? formattedNumber : `91${formattedNumber}`;

  const getWhatsAppWebUrl = (customText?: string) => {
    const text = encodeURIComponent(customText || defaultMessage);
    const isMobile = typeof window !== 'undefined' && /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // For desktop: opens WhatsApp Web directly. For mobile devices: opens WhatsApp app/web
    if (isMobile) {
      return `https://api.whatsapp.com/send?phone=${internationalNumber}&text=${text}`;
    }
    return `https://web.whatsapp.com/send?phone=${internationalNumber}&text=${text}`;
  };

  const handleOpenWhatsApp = (customText?: string) => {
    const url = getWhatsAppWebUrl(customText);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 flex flex-col items-start select-none"
    >
      {/* =========================================================================
          INTERACTIVE WHATSAPP BUSINESS QUICK CHAT FLYOUT CARD
          ========================================================================= */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mb-3 w-[290px] sm:w-[320px] rounded-2xl bg-[#0D1117] border border-[#25D366]/40 shadow-[0_12px_45px_rgba(0,0,0,0.9),0_0_25px_rgba(37,211,102,0.2)] overflow-hidden font-sans backdrop-blur-xl"
          >
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-[#075E54] to-[#128C7E] px-4 py-3.5 text-white flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center p-1.5 shadow-md">
                    <svg viewBox="0 0 24 24" className="w-full h-full fill-[#25D366]">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#25D366] border-2 border-[#0D1117]" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-xs font-bold leading-tight">Techyora Business</h4>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366] fill-[#25D366]" />
                  </div>
                  <p className="text-[10px] text-emerald-100/90 font-mono">Typically replies within minutes</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg text-emerald-100 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close WhatsApp chat card"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="p-3.5 bg-[#070B11] space-y-3">
              <div className="p-2.5 rounded-xl bg-[#111827] border border-white/5 text-[11px] text-gray-300 leading-relaxed">
                👋 Hello! Need immediate consultation on ERPNext, custom software, 3D web, or AI automation?
              </div>

              {/* Quick Prompt Options */}
              <div className="space-y-1.5 pt-1">
                <span className="text-[9.5px] font-mono text-gray-500 uppercase tracking-wider block">
                  FAST INQUIRY PRESETS:
                </span>
                {[
                  "Hi, I need an ERPNext / CRM solution.",
                  "Hi, I want a custom software / web app.",
                  "Hi, I want to discuss a project budget & timeline."
                ].map((preset, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleOpenWhatsApp(preset)}
                    className="w-full text-left px-2.5 py-1.5 rounded-lg bg-[#0D131F] hover:bg-[#162235] border border-white/5 hover:border-[#25D366]/40 text-[10.5px] text-gray-300 hover:text-white transition-all flex items-center justify-between group/preset"
                  >
                    <span className="truncate">{preset}</span>
                    <ExternalLink className="w-3 h-3 text-[#25D366] opacity-0 group-hover/preset:opacity-100 transition-opacity shrink-0 ml-1.5" />
                  </button>
                ))}
              </div>

              {/* Main Redirect Button */}
              <button
                type="button"
                onClick={() => handleOpenWhatsApp()}
                className="w-full mt-2 py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-black font-extrabold text-xs flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(37,211,102,0.4)] cursor-pointer"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413z" />
                </svg>
                <span>Open WhatsApp Web Chat</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>

              <div className="text-center pt-1">
                <span className="text-[10px] font-mono text-gray-500">
                  Business Hotline: +91 {phoneNumber}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================================================
          MAIN FLOATING WHATSAPP BUTTON WITH RADAR PULSE
          ========================================================================= */}
      <div className="relative flex items-center gap-2">
        {/* Radar Pulse Wave Rings */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none" />
        <span className="absolute -inset-2.5 rounded-full bg-[#25D366] opacity-15 animate-pulse pointer-events-none" />

        {/* WhatsApp Business Main Trigger Anchor */}
        <a
          href={getWhatsAppWebUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#128C7E] to-[#25D366] hover:from-[#0F7A6E] hover:to-[#22c55e] text-white flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.8),0_0_25px_rgba(37,211,102,0.55)] hover:shadow-[0_8px_35px_rgba(0,0,0,0.9),0_0_35px_rgba(37,211,102,0.85)] hover:scale-110 active:scale-95 transition-all duration-300 group cursor-pointer"
          aria-label={`Chat with Techyora on WhatsApp Business (+91 ${phoneNumber})`}
          title={`Chat with Techyora on WhatsApp Business (+91 ${phoneNumber})`}
        >
          {/* Authentic WhatsApp SVG Logo */}
          <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-7 sm:h-7 fill-white drop-shadow-md transition-transform group-hover:scale-105">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413z" />
          </svg>

          {/* Business Online Badge Pip */}
          <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#128C7E] flex items-center justify-center shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
          </span>
        </a>

        {/* Expandable Label Pill (Desktop Hover & Mobile friendly) */}
        <div className="hidden md:flex items-center">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0B1120]/90 hover:bg-[#0B1120] border border-[#25D366]/40 text-xs font-mono font-medium text-gray-200 hover:text-white shadow-[0_4px_20px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all group/pill"
          >
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
            <span className="font-semibold text-[#25D366]">WhatsApp Business</span>
            <span className="text-gray-400 text-[10px]">| +91 {phoneNumber}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
