import React, { useEffect, useState, useRef } from 'react';
import { useCyberDoor } from '../../context/CyberDoorContext';

export const GravityCursor: React.FC = () => {
  const { currentTheme } = useCyberDoor();
  const { primary, rgb } = currentTheme;
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
        className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-150 ease-out flex items-center justify-center ${
          isHovering
            ? isDragMode
              ? 'w-16 h-16 backdrop-blur-[1px]'
              : 'w-12 h-12'
            : 'w-8 h-8'
        }`}
        style={{
          borderColor: isHovering ? primary : `rgba(${rgb}, 0.6)`,
          backgroundColor: isHovering ? `rgba(${rgb}, 0.18)` : 'transparent',
          boxShadow: isHovering ? `0 0 20px rgba(${rgb}, 0.5)` : `0 0 8px rgba(${rgb}, 0.2)`,
        }}
      >
        {cursorText && (
          <span
            className="text-[9px] font-mono font-bold tracking-widest uppercase"
            style={{
              color: primary,
              filter: `drop-shadow(0 0 8px ${primary})`,
            }}
          >
            {cursorText}
          </span>
        )}
      </div>

      {/* Core Dot */}
      <div
        className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-100 ${
          isHovering ? 'w-1.5 h-1.5 opacity-90' : 'w-2 h-2 opacity-100'
        }`}
        style={{
          backgroundColor: primary,
          boxShadow: `0 0 10px ${primary}`,
        }}
      />
    </div>
  );
};
