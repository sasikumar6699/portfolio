import React, { useState } from 'react';
import { Palette, Sparkles } from 'lucide-react';
import { useCyberDoor } from '../../context/CyberDoorContext';

export const CyberAudioControlWidget: React.FC = () => {
  const {
    currentTheme,
    cycleDoorMode,
    triggerTestTransition,
    isTestingTransition,
  } = useCyberDoor();

  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside
      aria-label="Cyber Blast Door Theme Controller"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full bg-[#0B1120]/90 backdrop-blur-md border text-white shadow-[0_8px_32px_rgba(0,0,0,0.85)] transition-all duration-300"
        style={{
          borderColor: isHovered ? `${currentTheme.primary}99` : `rgba(${currentTheme.rgb}, 0.35)`,
          boxShadow: isHovered
            ? `0 8px 32px rgba(0,0,0,0.9), 0 0 25px rgba(${currentTheme.rgb}, 0.3)`
            : `0 8px 32px rgba(0,0,0,0.85), 0 0 15px rgba(${currentTheme.rgb}, 0.12)`,
        }}
      >
        {/* =========================================================================
            DOOR COLOR THEME SELECTOR (6 Colors: Green, Cyan, Amber, Violet, Crimson, Rose)
            ========================================================================= */}
        <button
          type="button"
          onClick={cycleDoorMode}
          className="flex items-center gap-2 px-2 py-1 rounded-full text-xs font-mono font-medium transition-all duration-200 hover:bg-white/5 outline-none focus:ring-1 focus:ring-emerald-400 group"
          title={`Active Theme: ${currentTheme.name}. Click to cycle 6 cyber colors across all pages and door transitions.`}
        >
          <Palette className="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition-colors" />

          {/* Dynamic Colored Glowing LED Pip */}
          <span className="relative flex h-2 w-2">
            <span
              className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
              style={{ backgroundColor: currentTheme.primary }}
            />
            <span
              className="relative inline-flex rounded-full h-2 w-2"
              style={{
                backgroundColor: currentTheme.primary,
                boxShadow: `0 0 8px ${currentTheme.primary}`,
              }}
            />
          </span>

          <span className="text-[11px] font-bold tracking-wider uppercase text-gray-300 group-hover:text-white flex items-center gap-1">
            <span className="opacity-50 text-[10px]">THEME:</span>
            <span style={{ color: currentTheme.primary }}>{currentTheme.label}</span>
          </span>
        </button>

        {/* Vertical Divider */}
        <div className="w-[1px] h-4 bg-white/10" aria-hidden="true" />

        {/* =========================================================================
            QUICK BLAST DOOR TEST / PREVIEW BUTTON
            ========================================================================= */}
        <button
          type="button"
          onClick={triggerTestTransition}
          disabled={isTestingTransition}
          className="flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-mono font-semibold tracking-wider hover:bg-white/5 transition-all disabled:opacity-50 group"
          style={{ color: currentTheme.secondary }}
          title="Preview Cyber Blast Door Transition Animation"
        >
          <Sparkles className={`w-3 h-3 ${isTestingTransition ? 'animate-spin' : 'group-hover:rotate-12 transition-transform'}`} />
          <span>TEST</span>
        </button>
      </div>
    </aside>
  );
};
