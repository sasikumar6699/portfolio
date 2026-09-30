import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { User, MapPin, Briefcase, Clock, ShieldCheck, Activity, Cpu } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { useCyberDoor } from '../../context/CyberDoorContext';
import { HudCornerBrackets } from './HudCornerBrackets';

export const HolographicDossierCard: React.FC = () => {
  const { currentTheme } = useCyberDoor();
  const cardRef = useRef<HTMLDivElement>(null);

  // 3D Mouse Parallax Tilt Physics
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const { primary, secondary, rgb } = currentTheme;

  return (
    <div className="relative w-full [perspective:1200px]">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          borderColor: `rgba(${rgb}, 0.35)`,
          boxShadow: `0 20px 50px rgba(0,0,0,0.85), 0 0 30px rgba(${rgb}, 0.15)`,
        }}
        whileHover={{
          boxShadow: `0 25px 60px rgba(0,0,0,0.9), 0 0 45px rgba(${rgb}, 0.3)`,
        }}
        className="relative bg-[#0D0D0D]/95 rounded-2xl border p-7 sm:p-8 backdrop-blur-xl overflow-hidden group transition-colors duration-300"
      >
        {/* HUD 4-Corner Target Reticles */}
        <HudCornerBrackets color={primary} size={12} tag="SEC-1 // AUTH-ID" />

        {/* Ambient Theme Radial Glow */}
        <div
          className="absolute -top-24 -right-24 w-56 h-56 rounded-full blur-3xl pointer-events-none opacity-40 transition-colors duration-500"
          style={{ backgroundColor: primary }}
        />

        {/* Laser Scanner Sweep Line */}
        <motion.div
          animate={{ y: ['-50%', '350%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-x-0 h-[2px] pointer-events-none z-10"
          style={{
            background: `linear-gradient(to right, transparent, ${primary}, transparent)`,
            boxShadow: `0 0 15px ${primary}`,
          }}
        />

        {/* Holographic Subtle Scanline Texture */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

        {/* Card Header Top Accent Bar */}
        <div
          className="absolute top-0 left-0 right-0 h-1 transition-colors duration-500"
          style={{
            background: `linear-gradient(to right, transparent, ${primary}, ${secondary}, transparent)`,
            boxShadow: `0 0 10px ${primary}`,
          }}
        />

        {/* Card Header / Badge Section */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10 relative z-20">
          <div className="flex items-center gap-3.5">
            {/* Monogram Box with Rotating Radar Ring */}
            <div className="relative w-13 h-13 flex items-center justify-center">
              <div
                className="absolute inset-0 rounded-xl border border-dashed animate-spin opacity-50"
                style={{
                  borderColor: primary,
                  animationDuration: '10s',
                }}
              />
              <div
                className="w-12 h-12 rounded-xl bg-[#050505] border flex items-center justify-center font-mono text-xl font-extrabold tracking-tighter"
                style={{
                  borderColor: `rgba(${rgb}, 0.5)`,
                  color: primary,
                  boxShadow: `inset 0 0 12px rgba(${rgb}, 0.25)`,
                }}
              >
                TY
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-xl font-extrabold text-white tracking-tight">
                  {PERSONAL_INFO.brandName}
                </h4>
                <span
                  className="w-1.5 h-1.5 rounded-full animate-ping"
                  style={{ backgroundColor: primary }}
                />
              </div>
              <p
                className="text-[11px] font-mono tracking-widest uppercase transition-colors"
                style={{ color: secondary }}
              >
                ENTERPRISE TECH ARCHITECTURE
              </p>
            </div>
          </div>

          <div
            className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-widest uppercase border flex items-center gap-1.5"
            style={{
              backgroundColor: `rgba(${rgb}, 0.1)`,
              borderColor: `rgba(${rgb}, 0.35)`,
              color: secondary,
              boxShadow: `0 0 10px rgba(${rgb}, 0.15)`,
            }}
          >
            <ShieldCheck className="w-3 h-3" />
            <span>LEVEL-1 // AUTH</span>
          </div>
        </div>

        {/* Organization Telemetry Matrix */}
        <div className="py-6 space-y-4 font-mono text-sm relative z-20">
          {/* Organization */}
          <div className="flex items-start gap-3.5 text-gray-300">
            <div
              className="p-1.5 rounded-lg bg-black/60 border shrink-0 mt-0.5"
              style={{ borderColor: `rgba(${rgb}, 0.3)` }}
            >
              <Briefcase className="w-4 h-4" style={{ color: primary }} />
            </div>
            <div>
              <span className="text-[10px] text-gray-500 uppercase tracking-widest block font-bold">
                ORGANIZATION // MISSION
              </span>
              <span className="font-semibold text-white text-xs sm:text-sm">
                {PERSONAL_INFO.title}
              </span>
            </div>
          </div>

          {/* Hotline / Global Reach */}
          <div className="flex items-start gap-3.5 text-gray-300">
            <div
              className="p-1.5 rounded-lg bg-black/60 border shrink-0 mt-0.5"
              style={{ borderColor: `rgba(${rgb}, 0.3)` }}
            >
              <MapPin className="w-4 h-4" style={{ color: primary }} />
            </div>
            <div>
              <span className="text-[10px] text-gray-500 uppercase tracking-widest block font-bold">
                COMM-CHANNEL // GLOBAL REACH
              </span>
              <span className="font-semibold text-white text-xs sm:text-sm">
                {PERSONAL_INFO.Mobile} <span className="text-gray-400 font-normal">(Global Consulting)</span>
              </span>
            </div>
          </div>

          {/* Track Record */}
          <div className="flex items-start gap-3.5 text-gray-300">
            <div
              className="p-1.5 rounded-lg bg-black/60 border shrink-0 mt-0.5"
              style={{ borderColor: `rgba(${rgb}, 0.3)` }}
            >
              <Clock className="w-4 h-4" style={{ color: primary }} />
            </div>
            <div>
              <span className="text-[10px] text-gray-500 uppercase tracking-widest block font-bold">
                PROVEN TRACK RECORD
              </span>
              <span className="font-semibold text-white text-xs sm:text-sm">
                {PERSONAL_INFO.experience}
              </span>
            </div>
          </div>

          {/* Operational Availability */}
          <div className="flex items-start gap-3.5 text-gray-300">
            <div
              className="p-1.5 rounded-lg bg-black/60 border shrink-0 mt-0.5"
              style={{ borderColor: `rgba(${rgb}, 0.3)` }}
            >
              <User className="w-4 h-4" style={{ color: primary }} />
            </div>
            <div>
              <span className="text-[10px] text-gray-500 uppercase tracking-widest block font-bold">
                SLA STATUS // AVAILABILITY
              </span>
              <span
                className="font-bold text-xs sm:text-sm inline-flex items-center gap-2"
                style={{ color: secondary }}
              >
                <span className="relative flex h-2 w-2">
                  <span
                    className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                    style={{ backgroundColor: secondary }}
                  />
                  <span
                    className="relative inline-flex rounded-full h-2 w-2"
                    style={{ backgroundColor: primary }}
                  />
                </span>
                {PERSONAL_INFO.availability}
              </span>
            </div>
          </div>
        </div>

        {/* Live System Diagnostics Ticker (Anime Cockpit HUD Footer) */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-gray-400 relative z-20">
          <div className="flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 animate-pulse" style={{ color: primary }} />
            <span>UPTIME: 99.9%</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5" style={{ color: secondary }} />
            <span>CORE: ACTIVE</span>
          </div>
          <span
            className="px-2 py-0.5 rounded text-[9px] uppercase font-bold"
            style={{
              backgroundColor: `rgba(${rgb}, 0.15)`,
              color: primary,
            }}
          >
            SECURE
          </span>
        </div>
      </motion.div>
    </div>
  );
};
