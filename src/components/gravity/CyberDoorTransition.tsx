import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Fingerprint, ShieldCheck, Activity } from 'lucide-react';
import { useCyberDoor } from '../../context/CyberDoorContext';

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

  const {
    currentTheme,
    isTestingTransition,
  } = useCyberDoor();

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

  // Core transition sequence runner
  const executeTransitionSequence = useCallback((sectorName: string, onMidpoint?: () => void) => {
    setTargetSector(sectorName);
    setDoorPhase('closing');
    setScanProgress(0);

    // Phase 1 (Door Closure): Panels glide inward from outer edges
    // At 320ms, panels collide in center -> Slam Shut & Seam Interlock
    const closeTimer = setTimeout(() => {
      // Doors meet in center. Update page underneath silently!
      if (onMidpoint) onMidpoint();
      setDoorPhase('scanning');

      // Animate biometric scan progress briskly (320ms -> 740ms)
      const p1 = setTimeout(() => setScanProgress(52), 90);
      const p2 = setTimeout(() => setScanProgress(88), 220);
      const p3 = setTimeout(() => setScanProgress(100), 380);

      // Phase 2 Biometric Verified Shockwave
      const verifyTimer = setTimeout(() => {
        setDoorPhase('verified');

        // Phase 3 (Gateway Access Granted / Open): Doors glide open
        const openTimer = setTimeout(() => {
          setDoorPhase('opening');

          // Reset to idle once panels have fully cleared viewport
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
  }, []);

  // Route change listener
  useEffect(() => {
    // Avoid triggering transition on first page load
    if (isFirstRender.current) {
      isFirstRender.current = false;
      prevPathname.current = location.pathname;
      return;
    }

    if (location.pathname === prevPathname.current) return;
    prevPathname.current = location.pathname;

    const cleanup = executeTransitionSequence(getSectorLabel(location.pathname), () => {
      setDisplayLocation(location);
      window.scrollTo(0, 0);
    });

    return cleanup;
  }, [location, executeTransitionSequence]);

  // Test transition listener triggered from the floating control widget
  useEffect(() => {
    if (!isTestingTransition) return;
    const cleanup = executeTransitionSequence('DIAGNOSTIC TEST // PROTOCOL-7');
    return cleanup;
  }, [isTestingTransition, executeTransitionSequence]);

  const isActive = doorPhase !== 'idle';
  const isClosedOrScanning = doorPhase === 'closing' || doorPhase === 'scanning' || doorPhase === 'verified';
  const isScanningOrVerified = doorPhase === 'scanning' || doorPhase === 'verified';

  // Dynamic Theme Palette Values
  const { primary, secondary, rgb } = currentTheme;

  return (
    <>
      {/* Underlying Active Page View (Freezes on current page until doors meet, then swaps) */}
      {typeof children === 'function' ? children(displayLocation) : children}

      {/* Cyber Blast Door Overlay Layer */}
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
              style={{
                borderRightColor: `rgba(${rgb}, 0.6)`,
              }}
              className="absolute top-0 bottom-0 left-0 w-1/2 overflow-hidden pointer-events-auto border-r shadow-[15px_0_50px_rgba(0,0,0,0.95)] bg-slate-950 will-change-transform transform-gpu"
            >
              {/* Full width 100vw image pinned to left edge */}
              <div className="absolute top-0 left-0 w-[100vw] h-full pointer-events-none select-none">
                <img 
                  src="/cyber-door.jpg" 
                  alt="Server Rack Left Door Panel" 
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Dynamic Theme Glow Pulse on Left Panel Circuit Busbar */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-80"
                style={{
                  background: `linear-gradient(to right, transparent, rgba(${rgb}, 0.05), rgba(${rgb}, 0.12))`
                }}
              />

              {/* Pneumatic Seam Edge Highlight */}
              <div 
                className="absolute top-0 bottom-0 right-0 w-[1px]"
                style={{
                  backgroundColor: secondary,
                  boxShadow: `0 0 12px ${primary}`
                }}
              />
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
              style={{
                borderLeftColor: `rgba(${rgb}, 0.6)`,
              }}
              className="absolute top-0 bottom-0 right-0 w-1/2 overflow-hidden pointer-events-auto border-l shadow-[-15px_0_50px_rgba(0,0,0,0.95)] bg-slate-950 will-change-transform transform-gpu"
            >
              {/* Full width 100vw image pinned to right edge so center lines up 1:1 */}
              <div className="absolute top-0 right-0 w-[100vw] h-full pointer-events-none select-none">
                <img 
                  src="/cyber-door.jpg" 
                  alt="Server Rack Right Door Panel" 
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Dynamic Theme Glow Pulse on Right Panel Server Rack */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-80"
                style={{
                  background: `linear-gradient(to left, transparent, rgba(${rgb}, 0.05), rgba(${rgb}, 0.12))`
                }}
              />

              {/* Pneumatic Seam Edge Highlight */}
              <div 
                className="absolute top-0 bottom-0 left-0 w-[1px]"
                style={{
                  backgroundColor: secondary,
                  boxShadow: `0 0 12px ${primary}`
                }}
              />
            </motion.div>


            {/* =========================================================================
                3. CENTER SEAM: VERTICAL NEON HYDRAULIC LASER INTERLOCK LINE
                ========================================================================= */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isClosedOrScanning ? 1 : 0 }}
              transition={{ duration: 0.15 }}
              style={{
                backgroundColor: secondary,
                boxShadow: `0 0 15px ${primary}, 0 0 35px ${primary}, 0 0 60px ${primary}`,
              }}
              className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[3px] z-30 pointer-events-none will-change-transform transform-gpu"
            >
              {/* High-speed vertical laser scanning flare */}
              <motion.div
                animate={{ y: ['-100%', '100%'] }}
                transition={{ duration: 0.9, repeat: Infinity, ease: 'linear' }}
                style={{
                  boxShadow: `0 0 25px ${primary}`,
                }}
                className="w-2 h-40 -ml-[2.5px] bg-white rounded-full"
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
                    style={{
                      borderColor: secondary,
                      boxShadow: `0 0 50px ${primary}`,
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-60 sm:h-60 rounded-full border-4 pointer-events-none"
                  />
                )}

                {/* Outer Rotating Biometric HUD Rings */}
                <div 
                  className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-full border-2 border-dashed flex items-center justify-center"
                  style={{
                    animationDuration: '8s',
                    borderColor: `rgba(${rgb}, 0.7)`,
                    boxShadow: `0 0 40px rgba(${rgb}, 0.4)`,
                    animation: 'spin 8s linear infinite',
                  }}
                >
                  <div 
                    className="absolute inset-2 rounded-full border"
                    style={{
                      borderColor: `rgba(${rgb}, 0.3)`,
                    }}
                  />
                </div>

                {/* Biometric Scanner Lens (Over the central circular vault) */}
                <motion.div
                  animate={{
                    borderColor: doorPhase === 'verified' ? secondary : primary,
                    boxShadow: doorPhase === 'verified' 
                      ? `0 0 60px rgba(${rgb}, 0.9), inset 0 0 35px rgba(${rgb}, 0.5)` 
                      : `0 0 45px rgba(${rgb}, 0.6), inset 0 0 25px rgba(${rgb}, 0.4)`
                  }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-slate-950/92 border-2 backdrop-blur-md flex flex-col items-center justify-center overflow-hidden"
                >
                  <div className="absolute inset-0 bg-grid-pattern opacity-30" />

                  {/* High-Tech Fingerprint Impression Graphic */}
                  <div className="relative flex items-center justify-center">
                    
                    {/* Base Fingerprint Ridges */}
                    <Fingerprint 
                      className="w-20 h-20 sm:w-24 sm:h-24 transition-colors duration-200"
                      style={{
                        color: doorPhase === 'verified' ? secondary : isScanningOrVerified ? primary : `rgba(${rgb}, 0.5)`,
                        filter: doorPhase === 'verified'
                          ? `drop-shadow(0 0 20px ${primary})`
                          : isScanningOrVerified
                          ? `drop-shadow(0 0 12px rgba(${rgb}, 0.7))`
                          : undefined,
                      }}
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
                        <div 
                          className="w-16 h-20 rounded-full blur-md"
                          style={{
                            backgroundColor: `rgba(${rgb}, 0.25)`
                          }}
                        />
                      </motion.div>
                    )}

                    {/* Laser Scanner Sweep Line */}
                    {doorPhase === 'scanning' && (
                      <motion.div
                        animate={{ y: [-38, 38] }}
                        transition={{ duration: 0.65, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
                        style={{
                          background: `linear-gradient(to right, transparent, ${secondary}, transparent)`,
                          boxShadow: `0 0 15px ${primary}, 0 0 25px ${secondary}`,
                        }}
                        className="absolute left-1 right-1 h-[2.5px]"
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
                        <ShieldCheck 
                          className="w-12 h-12 animate-pulse"
                          style={{
                            color: secondary,
                            filter: `drop-shadow(0 0 20px ${primary})`
                          }}
                        />
                      </motion.div>
                    )}

                  </div>

                  {/* Corner Reticle Aim Marks */}
                  <div className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2" style={{ borderColor: primary }} />
                  <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2" style={{ borderColor: primary }} />
                  <div className="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2" style={{ borderColor: primary }} />
                  <div className="absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2" style={{ borderColor: primary }} />
                </motion.div>

                {/* Biometric Status Telemetry Pill */}
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.15 }}
                  style={{
                    borderColor: primary,
                    boxShadow: `0 0 25px rgba(${rgb}, 0.4)`,
                  }}
                  className="mt-8 px-5 py-2 rounded-full bg-slate-950/95 border flex items-center gap-2.5 backdrop-blur-md"
                >
                  <span className="relative flex h-2.5 w-2.5">
                    <span 
                      className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                      style={{ backgroundColor: secondary }}
                    />
                    <span 
                      className="relative inline-flex rounded-full h-2.5 w-2.5"
                      style={{
                        backgroundColor: primary,
                        boxShadow: `0 0 8px ${primary}`
                      }}
                    />
                  </span>

                  <span 
                    className="text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase"
                    style={{ color: secondary }}
                  >
                    {doorPhase === 'closing' && 'INITIALIZING BIOMETRIC SCANNER...'}
                    {doorPhase === 'scanning' && `SCANNING FINGERPRINT IMPRESSION [${scanProgress}%]`}
                    {doorPhase === 'verified' && `BIOMETRIC VERIFIED // ACCESS GRANTED`}
                    {doorPhase === 'opening' && `DISENGAGED // ${targetSector || 'TRANSIT READY'}`}
                  </span>
                </motion.div>

              </div>

              {/* Bottom Screen Readout */}
              <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center">
                <div 
                  className="text-[9px] sm:text-[11px] font-mono tracking-widest uppercase bg-black/70 px-4 py-1 rounded border flex items-center gap-2"
                  style={{
                    color: `rgba(${rgb}, 0.9)`,
                    borderColor: `rgba(${rgb}, 0.3)`,
                    boxShadow: `0 0 15px rgba(${rgb}, 0.2)`
                  }}
                >
                  <Activity className="w-3 h-3 animate-pulse" style={{ color: primary }} />
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
