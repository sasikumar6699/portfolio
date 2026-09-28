import React, { useEffect, useState, useRef } from 'react';

export const GravityCursor: React.FC = () => {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [targetPos, setTargetPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState<string | null>(null);
  const [isDragMode, setIsDragMode] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const requestRef = useRef<number>();

  useEffect(() => {
    // Check for touch device or coarse pointer
    if (window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setTargetPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('a, button, [role="button"], input, select, textarea');
      const dragArea = target.closest('[data-cursor="drag"]');
      const customCursorText = target.closest('[data-cursor-text]')?.getAttribute('data-cursor-text');

      setIsHovering(!!interactive || !!dragArea);
      setIsDragMode(!!dragArea);
      setCursorText(customCursorText || (dragArea ? 'DRAG' : null));
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isVisible]);

  // Smooth lerp frame loop
  useEffect(() => {
    if (isTouchDevice) return;

    const animateCursor = () => {
      setCursorPos((prev) => {
        const dx = targetPos.x - prev.x;
        const dy = targetPos.y - prev.y;
        return {
          x: prev.x + dx * 0.25,
          y: prev.y + dy * 0.25
        };
      });
      requestRef.current = requestAnimationFrame(animateCursor);
    };

    requestRef.current = requestAnimationFrame(animateCursor);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [targetPos, isTouchDevice]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999] transition-opacity duration-300"
      style={{
        transform: `translate3d(${cursorPos.x}px, ${cursorPos.y}px, 0)`,
        opacity: isVisible ? 1 : 0
      }}
      aria-hidden="true"
    >
      {/* Outer Magnetic Ring */}
      <div
        className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#39FF14] transition-all duration-300 ease-out flex items-center justify-center ${
          isHovering
            ? isDragMode
              ? 'w-16 h-16 bg-[#39FF14]/15 border-[#39FF14] shadow-[0_0_20px_rgba(57,255,20,0.4)] backdrop-blur-[1px]'
              : 'w-12 h-12 bg-[#39FF14]/20 border-[#39FF14] shadow-[0_0_15px_rgba(57,255,20,0.5)]'
            : 'w-8 h-8 bg-transparent border-[#39FF14]/60'
        }`}
      >
        {/* Directional drag indicators or custom text */}
        {cursorText && (
          <span className="text-[9px] font-mono font-bold tracking-widest text-[#39FF14] uppercase drop-shadow-[0_0_8px_rgba(57,255,20,0.8)]">
            {cursorText}
          </span>
        )}
      </div>

      {/* Core Dot */}
      <div
        className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#39FF14] shadow-[0_0_10px_#39FF14] transition-all duration-200 ${
          isHovering ? 'w-1.5 h-1.5 opacity-90' : 'w-2 h-2 opacity-100'
        }`}
      />
    </div>
  );
};
