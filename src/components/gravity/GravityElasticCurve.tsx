import React, { useEffect, useRef, useState } from 'react';

export const GravityElasticCurve: React.FC = () => {
  const curveRef = useRef<HTMLDivElement>(null);
  const [controlY, setControlY] = useState(0);
  const isBouncingRef = useRef(false);

  useEffect(() => {
    let prevY = window.scrollY;

    const onScroll = () => {
      if (!curveRef.current) return;
      const rect = curveRef.current.getBoundingClientRect();
      const currentY = window.scrollY;
      const scrollSpeed = currentY - prevY;
      prevY = currentY;

      // When the curve is within viewport window
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        if (!isBouncingRef.current) {
          isBouncingRef.current = true;
          // Trigger spring bounce
          const impulse = Math.max(-60, Math.min(60, scrollSpeed * 1.5));
          let val = impulse;
          let vel = 0;
          const k = 0.08;
          const damp = 0.85;

          const bounce = () => {
            const force = -k * val;
            vel = (vel + force) * damp;
            val += vel;

            setControlY(Math.round(val));

            if (Math.abs(val) > 0.5 || Math.abs(vel) > 0.5) {
              requestAnimationFrame(bounce);
            } else {
              setControlY(0);
              isBouncingRef.current = false;
            }
          };
          requestAnimationFrame(bounce);
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      ref={curveRef}
      className="relative z-20 w-full h-16 sm:h-24 -mt-1 -mb-1 overflow-hidden pointer-events-none select-none"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1000 160"
        preserveAspectRatio="none"
        className="w-full h-full block overflow-visible"
      >
        <defs>
          <filter id="curveNeonGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
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
          className="transition-all duration-75"
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
