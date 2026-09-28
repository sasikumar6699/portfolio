import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Fingerprint, ShieldCheck, Activity } from 'lucide-react';

export interface CyberDoorTransitionProps {
  children?: React.ReactNode | ((displayLocation: ReturnType<typeof useLocation>) => React.ReactNode);
}

type DoorPhase = 'idle' | 'closing' | 'scanning' | 'verified' | 'opening';

export const CyberDoorTransition: React.FC<CyberDoorTransitionProps> = ({ children }) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [doorPhase, setDoorPhase] = useState<DoorPhase>('idle');
  const [targetSector, setTargetSector] = useState('');
  const [scanProgress, setScanProgress] = useState(0);

  const isFirstRender = useRef(true);
  const prevPathname = useRef(location.pathname);

  // Preload door background image for instant GPU rendering
  useEffect(() => {
    const img = new Image();
    img.src = '/cyber-door.jpg';
  }, []);

  // Format destination sector name
  const getSectorLabel = (pathname: string) => {
    switch (pathname) {
      case '/': return 'PRIMARY ORBIT // SECTOR-0';
      case '/about': return 'ENTERPRISE INTEL // SECTOR-1';
      case '/services': return 'CORE SOLUTIONS // SECTOR-2';
      case '/skills': return 'TECH MATRIX // SECTOR-3';
      case '/projects': return 'PROJECT VAULT // SECTOR-4';
      case '/contact': return 'HYPER-COMM PORTAL // SECTOR-5';
      default: return `${pathname.replace('/', '').toUpperCase()} // SECTOR-X`;
    }
  };

  useEffect(() => {
    // Avoid triggering transition on first page load
    if (isFirstRender.current) {
      isFirstRender.current = false;
      prevPathname.current = location.pathname;
      return;
    }

    if (location.pathname === prevPathname.current) return;
    prevPathname.current = location.pathname;

    setTargetSector(getSectorLabel(location.pathname));
    setDoorPhase('closing');
    setScanProgress(0);

    // 1. High-speed pneumatic door slide (0ms -> 320ms)
    const closeTimer = setTimeout(() => {
      // Doors meet in center. Update page underneath silently!
      setDisplayLocation(location);
      window.scrollTo(0, 0);
      setDoorPhase('scanning');

      // Animate biometric scan progress briskly (320ms -> 740ms)
      const p1 = setTimeout(() => setScanProgress(52), 90);
      const p2 = setTimeout(() => setScanProgress(88), 220);
      const p3 = setTimeout(() => setScanProgress(100), 380);

      // 2. Fingerprint Impression Verified
      const verifyTimer = setTimeout(() => {
        setDoorPhase('verified');

        // 3. Open Doors after impression verification shockwave (at 980ms)
        const openTimer = setTimeout(() => {
          setDoorPhase('opening');

          // 4. Fully open, reset to idle (at 1320ms total)
          const idleTimer = setTimeout(() => {
            setDoorPhase('idle');
          }, 340);

          return () => clearTimeout(idleTimer);
        }, 240);

        return () => clearTimeout(openTimer);
      }, 420);

      return () => {
        clearTimeout(p1);
        clearTimeout(p2);
        clearTimeout(p3);
        clearTimeout(verifyTimer);
      };
    }, 320);

    return () => clearTimeout(closeTimer);
  }, [location]);

  const isActive = doorPhase !== 'idle';
  const isClosedOrScanning = doorPhase === 'closing' || doorPhase === 'scanning' || doorPhase === 'verified';
  const isScanningOrVerified = doorPhase === 'scanning' || doorPhase === 'verified';

  return (
    <>
      {/* Underlying Active Page View (Freezes on current page until doors meet, then swaps) */}
      {typeof children === 'function' ? children(displayLocation) : children}

      {/* Cyber Door Overlay Layer */}
      <AnimatePresence>
        {isActive && (
          <div 
            className="fixed inset-0 z-[9999] pointer-events-none select-none overflow-hidden"
            aria-live="assertive"
            role="status"
          >
            {/* =========================================================================
                1. LEFT SLIDING DOOR PANEL (50vw wide, displaying left 50% of the image)
                ========================================================================= */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: isClosedOrScanning ? '0%' : '-100%' }}
              transition={{
                duration: isClosedOrScanning ? 0.32 : 0.34,
                ease: isClosedOrScanning ? [0.77, 0, 0.175, 1] : [0.16, 1, 0.3, 1]
              }}
              className="absolute top-0 bottom-0 left-0 w-1/2 overflow-hidden pointer-events-auto border-r border-emerald-500/60 shadow-[15px_0_50px_rgba(0,0,0,0.95)] bg-slate-950 will-change-transform transform-gpu"
            >
              {/* Full width 100vw image pinned to left edge */}
              <div className="absolute top-0 left-0 w-[100vw] h-full pointer-events-none select-none">
                <img 
                  src="/cyber-door.jpg" 
                  alt="Server Rack Left Door Panel" 
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Dynamic emerald glow pulse on left panel circuit busbar */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/5 to-emerald-500/10 pointer-events-none opacity-80" />

              {/* Pneumatic seam edge highlight */}
              <div className="absolute top-0 bottom-0 right-0 w-[1px] bg-emerald-400 shadow-[0_0_12px_#22c55e]" />
            </motion.div>


            {/* =========================================================================
                2. RIGHT SLIDING DOOR PANEL (50vw wide, displaying right 50% of the image)
                ========================================================================= */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: isClosedOrScanning ? '0%' : '100%' }}
              transition={{
                duration: isClosedOrScanning ? 0.32 : 0.34,
                ease: isClosedOrScanning ? [0.77, 0, 0.175, 1] : [0.16, 1, 0.3, 1]
              }}
              className="absolute top-0 bottom-0 right-0 w-1/2 overflow-hidden pointer-events-auto border-l border-emerald-500/60 shadow-[-15px_0_50px_rgba(0,0,0,0.95)] bg-slate-950 will-change-transform transform-gpu"
            >
              {/* Full width 100vw image pinned to right edge so center lines up 1:1 */}
              <div className="absolute top-0 right-0 w-[100vw] h-full pointer-events-none select-none">
                <img 
                  src="/cyber-door.jpg" 
                  alt="Server Rack Right Door Panel" 
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Dynamic emerald glow pulse on right panel server rack */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-emerald-500/5 to-emerald-500/10 pointer-events-none opacity-80" />

              {/* Pneumatic seam edge highlight */}
              <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-emerald-400 shadow-[0_0_12px_#22c55e]" />
            </motion.div>


            {/* =========================================================================
                3. CENTER SEAM: VERTICAL NEON-GREEN HYDRAULIC LASER INTERLOCK LINE
                ========================================================================= */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isClosedOrScanning ? 1 : 0 }}
              transition={{ duration: 0.15 }}
              className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[3px] bg-emerald-400 shadow-[0_0_15px_#22c55e,0_0_35px_#22c55e,0_0_60px_#22c55e] z-30 pointer-events-none will-change-transform transform-gpu"
            >
              {/* High-speed vertical laser scanning flare */}
              <motion.div
                animate={{ y: ['-100%', '100%'] }}
                transition={{ duration: 0.9, repeat: Infinity, ease: 'linear' }}
                className="w-2 h-40 -ml-[2.5px] bg-white rounded-full shadow-[0_0_25px_#22c55e]"
              />
            </motion.div>


            {/* =========================================================================
                4. CENTRAL BIOMETRIC FINGERPRINT SCANNER & IMPRESSION HUD
                ========================================================================= */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: isClosedOrScanning ? 1 : 0,
                scale: isClosedOrScanning ? 1 : 0.9
              }}
              transition={{ duration: 0.18 }}
              className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-40 will-change-transform transform-gpu"
            >
              {/* Scanner Core Reticle Frame */}
              <div className="relative flex flex-col items-center">
                
                {/* Expanding Verification Shockwave Wavefront */}
                {doorPhase === 'verified' && (
                  <motion.div
                    initial={{ scale: 0.7, opacity: 1 }}
                    animate={{ scale: 2.8, opacity: 0 }}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-60 sm:h-60 rounded-full border-4 border-emerald-400 shadow-[0_0_50px_#22c55e] pointer-events-none"
                  />
                )}

                {/* Outer Rotating Biometric HUD Rings */}
                <div className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-full border-2 border-dashed border-emerald-500/70 animate-spin flex items-center justify-center shadow-[0_0_40px_rgba(34,197,94,0.4)]" style={{ animationDuration: '8s' }}>
                  <div className="absolute inset-2 rounded-full border border-emerald-500/30" />
                </div>

                {/* Biometric Scanner Lens (Over the central circular vault) */}
                <motion.div
                  animate={{
                    borderColor: doorPhase === 'verified' ? '#4ade80' : '#22c55e',
                    boxShadow: doorPhase === 'verified' 
                      ? '0 0 60px rgba(74, 222, 128, 0.9), inset 0 0 35px rgba(74, 222, 128, 0.5)' 
                      : '0 0 45px rgba(34, 197, 94, 0.6), inset 0 0 25px rgba(34, 197, 94, 0.4)'
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-slate-950/92 border-2 backdrop-blur-md flex flex-col items-center justify-center overflow-hidden"
                >
                  <div className="absolute inset-0 bg-grid-pattern opacity-30" />

                  {/* High-Tech Fingerprint Impression Graphic */}
                  <div className="relative flex items-center justify-center">
                    
                    {/* Base Fingerprint Ridges */}
                    <Fingerprint 
                      className={`w-20 h-20 sm:w-24 sm:h-24 transition-colors duration-200 ${
                        doorPhase === 'verified'
                          ? 'text-emerald-300 drop-shadow-[0_0_20px_#22c55e]'
                          : isScanningOrVerified
                          ? 'text-emerald-400 drop-shadow-[0_0_12px_rgba(34,197,94,0.7)]'
                          : 'text-emerald-600/60'
                      }`}
                    />

                    {/* Illuminated Biometric Impression Glow */}
                    {isScanningOrVerified && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ 
                          opacity: doorPhase === 'verified' ? 1 : [0.6, 1, 0.7],
                          scale: doorPhase === 'verified' ? 1.05 : [0.98, 1.02, 0.98]
                        }}
                        transition={{ 
                          duration: doorPhase === 'verified' ? 0.2 : 0.8, 
                          repeat: doorPhase === 'verified' ? 0 : Infinity, 
                          ease: 'easeInOut' 
                        }}
                        className="absolute inset-0 flex items-center justify-center pointer-events-none"
                      >
                        <div className="w-16 h-20 rounded-full bg-emerald-400/25 blur-md" />
                      </motion.div>
                    )}

                    {/* Laser Scanner Sweep Line */}
                    {doorPhase === 'scanning' && (
                      <motion.div
                        animate={{ y: [-38, 38] }}
                        transition={{ duration: 0.65, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
                        className="absolute left-1 right-1 h-[2.5px] bg-gradient-to-r from-transparent via-emerald-300 to-transparent shadow-[0_0_15px_#22c55e,0_0_25px_#39FF14]"
                      >
                        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-white rounded-full blur-[1px]" />
                      </motion.div>
                    )}

                    {/* Verified Shield Badge Overlay */}
                    {doorPhase === 'verified' && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: 'spring', damping: 14 }}
                        className="absolute inset-0 flex items-center justify-center bg-black/60 rounded-full backdrop-blur-sm"
                      >
                        <ShieldCheck className="w-12 h-12 text-emerald-300 drop-shadow-[0_0_20px_#22c55e] animate-pulse" />
                      </motion.div>
                    )}

                  </div>

                  {/* Corner Reticle Aim Marks */}
                  <div className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-emerald-400" />
                  <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-emerald-400" />
                  <div className="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2 border-emerald-400" />
                  <div className="absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-emerald-400" />
                </motion.div>

                {/* Biometric Status Telemetry Pill */}
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.15 }}
                  className="mt-8 px-5 py-2 rounded-full bg-slate-950/95 border border-emerald-500 shadow-[0_0_25px_rgba(34,197,94,0.4)] flex items-center gap-2.5 backdrop-blur-md"
                >
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 shadow-[0_0_8px_#22c55e]" />
                  </span>

                  <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase">
                    {doorPhase === 'closing' && 'INITIALIZING BIOMETRIC SCANNER...'}
                    {doorPhase === 'scanning' && `SCANNING FINGERPRINT IMPRESSION [${scanProgress}%]`}
                    {doorPhase === 'verified' && `BIOMETRIC VERIFIED // ACCESS GRANTED`}
                    {doorPhase === 'opening' && `DISENGAGED // ${targetSector || 'TRANSIT READY'}`}
                  </span>
                </motion.div>

              </div>

              {/* Bottom Screen Readout */}
              <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center">
                <div className="text-[9px] sm:text-[11px] font-mono tracking-widest text-emerald-400/90 uppercase bg-black/70 px-4 py-1 rounded border border-emerald-500/30 shadow-[0_0_15px_rgba(34,197,94,0.2)] flex items-center gap-2">
                  <Activity className="w-3 h-3 text-emerald-400 animate-pulse" />
                  <span>
                    AUTHENTICATING SECURE ISOLATION PROTOCOL [{doorPhase === 'verified' || doorPhase === 'opening' ? '100%' : `${scanProgress}%`}]
                  </span>
                </div>
              </div>

            </motion.div>

          </div>
        )}
      </AnimatePresence>
    </>
  );
};
