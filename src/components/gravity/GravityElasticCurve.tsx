import React, { useEffect, useRef, useState } from 'react';

export const GravityElasticCurve: React.FC = () => {
  const curveRef = useRef<HTMLDivElement>(null);
  const [controlY, setControlY] = useState(0);
  const isBouncingRef = useRef(false);
  const inViewRef = useRef(false);

  useEffect(() => {
    // Use IntersectionObserver to avoid forced layout reflows during scroll
    const observer = new IntersectionObserver(
      ([entry]) => {
        inViewRef.current = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );

    if (curveRef.current) {
      observer.observe(curveRef.current);
    }

    let prevY = window.scrollY;
    let ticking = false;

    const onScroll = () => {
      if (!inViewRef.current || ticking) return;

      ticking = true;
      requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const scrollSpeed = currentY - prevY;
        prevY = currentY;
        ticking = false;

        if (!isBouncingRef.current && Math.abs(scrollSpeed) > 10) {
          isBouncingRef.current = true;
          const impulse = Math.max(-50, Math.min(50, scrollSpeed * 1.2));
          let val = impulse;
          let vel = 0;
          const k = 0.08;
          const damp = 0.85;

          const bounce = () => {
            const force = -k * val;
            vel = (vel + force) * damp;
            val += vel;

            setControlY(Math.round(val));

            if (Math.abs(val) > 0.8 || Math.abs(vel) > 0.8) {
              requestAnimationFrame(bounce);
            } else {
              setControlY(0);
              isBouncingRef.current = false;
            }
          };
          requestAnimationFrame(bounce);
        }
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={curveRef}
      className="relative z-20 w-full h-16 sm:h-24 -mt-1 -mb-1 overflow-hidden pointer-events-none select-none transform-gpu will-change-transform"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1000 160"
        preserveAspectRatio="none"
        className="w-full h-full block overflow-visible"
      >
        <defs>
          <filter id="curveNeonGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Dynamic Curved Fill Shape */}
        <path
          d={`M0,0 Q500,${controlY} 1000,0 L1000,160 L0,160 Z`}
          fill="#0D0D0D"
          stroke="#39FF14"
          strokeWidth="1.5"
          filter="url(#curveNeonGlow)"
        />

        {/* Center Photon Node */}
        <circle
          cx="500"
          cy={controlY}
          r="4"
          fill="#39FF14"
          filter="url(#curveNeonGlow)"
        />
      </svg>
    </div>
  );
};
