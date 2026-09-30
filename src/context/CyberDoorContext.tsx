import React, { createContext, useContext, useState, useCallback } from 'react';
import { DoorMode, DoorTheme, DOOR_THEMES } from '../types/cyberTransition';

const DOOR_MODE_STORAGE_KEY = 'cyber_door_mode_pref';

export interface CyberDoorContextType {
  // Door Visual Theme Mode (6 Color Modes)
  doorMode: DoorMode;
  currentTheme: DoorTheme;
  setDoorMode: (mode: DoorMode) => void;
  cycleDoorMode: () => void;

  // Test / Preview Blast Door Action
  isTestingTransition: boolean;
  triggerTestTransition: () => void;
}

const CyberDoorContext = createContext<CyberDoorContextType | null>(null);

export const CyberDoorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [doorMode, setDoorModeState] = useState<DoorMode>(() => {
    if (typeof window === 'undefined') return 'industrial';
    try {
      const saved = localStorage.getItem(DOOR_MODE_STORAGE_KEY) as DoorMode | null;
      if (saved && DOOR_THEMES[saved]) return saved;
    } catch {
      // fallback
    }
    return 'industrial';
  });

  const [isTestingTransition, setIsTestingTransition] = useState(false);

  // Sync mode changes to localStorage
  const setDoorMode = useCallback((mode: DoorMode) => {
    setDoorModeState(mode);
    try {
      localStorage.setItem(DOOR_MODE_STORAGE_KEY, mode);
    } catch {
      // fallback
    }
  }, []);

  // Quick-cycle all 6 door color modes: Green -> Cyan -> Amber -> Violet -> Crimson -> Rose -> Green
  const cycleDoorMode = useCallback(() => {
    const modes: DoorMode[] = ['industrial', 'cyan', 'amber', 'violet', 'crimson', 'rose'];
    setDoorModeState((prev) => {
      const currentIndex = modes.indexOf(prev);
      const nextIndex = (currentIndex + 1) % modes.length;
      const nextMode = modes[nextIndex];
      try {
        localStorage.setItem(DOOR_MODE_STORAGE_KEY, nextMode);
      } catch {
        // fallback
      }
      return nextMode;
    });
  }, []);

  // Allows triggering a test transition from the widget
  const triggerTestTransition = useCallback(() => {
    if (isTestingTransition) return;
    setIsTestingTransition(true);
    // Automatically reset test trigger flag after transition completes
    const timer = setTimeout(() => {
      setIsTestingTransition(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, [isTestingTransition]);

  const currentTheme = DOOR_THEMES[doorMode] || DOOR_THEMES.industrial;

  // Universally set CSS custom properties on document.documentElement so all pages can use the active theme
  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.style.setProperty('--cyber-primary', currentTheme.primary);
      document.documentElement.style.setProperty('--cyber-secondary', currentTheme.secondary);
      document.documentElement.style.setProperty('--cyber-rgb', currentTheme.rgb);
    }
  }, [currentTheme]);

  return (
    <CyberDoorContext.Provider
      value={{
        doorMode,
        currentTheme,
        setDoorMode,
        cycleDoorMode,
        isTestingTransition,
        triggerTestTransition,
      }}
    >
      {children}
    </CyberDoorContext.Provider>
  );
};

export function useCyberDoor(): CyberDoorContextType {
  const context = useContext(CyberDoorContext);
  if (!context) {
    throw new Error('useCyberDoor must be used within a CyberDoorProvider');
  }
  return context;
}
