import React, { useEffect, useState, useRef } from 'react';

export const GravityCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState<string | null>(null);
  const [isDragMode, setIsDragMode] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const cursorRef = useRef<HTMLDivElement>(null);
  const targetPos = useRef({ x: -100, y: -100 });
  const currentPos = useRef({ x: -100, y: -100 });
  const requestRef = useRef<number>();
  const isHoveringRef = useRef(false);
  const isDragModeRef = useRef(false);
  const cursorTextRef = useRef<string | null>(null);

  useEffect(() => {
    // Disable custom cursor on touch devices to avoid overhead
    if (window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      targetPos.current.x = e.clientX;
      targetPos.current.y = e.clientY;

      if (!cursorRef.current) return;

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = !!target.closest('a, button, [role="button"], input, select, textarea');
      const dragArea = !!target.closest('[data-cursor="drag"]');
      const customCursorText = target.closest('[data-cursor-text]')?.getAttribute('data-cursor-text') || null;

      // Only trigger React state update if hover/mode state actually changes
      if (interactive !== isHoveringRef.current) {
        isHoveringRef.current = interactive;
        setIsHovering(interactive);
      }
      if (dragArea !== isDragModeRef.current) {
        isDragModeRef.current = dragArea;
        setIsDragMode(dragArea);
      }
      const nextText = customCursorText || (dragArea ? 'DRAG' : null);
      if (nextText !== cursorTextRef.current) {
        cursorTextRef.current = nextText;
        setCursorText(nextText);
      }
    };

    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);

    // High-performance 120 FPS Direct DOM Lerp Loop (Zero React state updates per frame)
    const animateCursor = () => {
      const dx = targetPos.current.x - currentPos.current.x;
      const dy = targetPos.current.y - currentPos.current.y;

      // Snappy, ultra-responsive interpolation
      currentPos.current.x += dx * 0.35;
      currentPos.current.y += dy * 0.35;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0)`;
      }

      requestRef.current = requestAnimationFrame(animateCursor);
    };

    requestRef.current = requestAnimationFrame(animateCursor);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform transform-gpu transition-opacity duration-150 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        transform: 'translate3d(-100px, -100px, 0)'
      }}
      aria-hidden="true"
    >
      {/* Outer Magnetic Ring */}
      <div
        className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#39FF14] transition-all duration-150 ease-out flex items-center justify-center ${
          isHovering
            ? isDragMode
              ? 'w-16 h-16 bg-[#39FF14]/15 border-[#39FF14] shadow-[0_0_20px_rgba(57,255,20,0.4)] backdrop-blur-[1px]'
              : 'w-12 h-12 bg-[#39FF14]/20 border-[#39FF14] shadow-[0_0_15px_rgba(57,255,20,0.5)]'
            : 'w-8 h-8 bg-transparent border-[#39FF14]/60'
        }`}
      >
        {cursorText && (
          <span className="text-[9px] font-mono font-bold tracking-widest text-[#39FF14] uppercase drop-shadow-[0_0_8px_rgba(57,255,20,0.8)]">
            {cursorText}
          </span>
        )}
      </div>

      {/* Core Dot */}
      <div
        className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#39FF14] shadow-[0_0_10px_#39FF14] transition-all duration-100 ${
          isHovering ? 'w-1.5 h-1.5 opacity-90' : 'w-2 h-2 opacity-100'
        }`}
      />
    </div>
  );
};
