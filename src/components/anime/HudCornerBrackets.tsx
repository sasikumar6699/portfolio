import React from 'react';
import { useCyberDoor } from '../../context/CyberDoorContext';

interface HudCornerBracketsProps {
  color?: string;
  size?: number;
  className?: string;
  tag?: string;
}

export const HudCornerBrackets: React.FC<HudCornerBracketsProps> = ({
  color: propColor,
  size = 8,
  className = '',
  tag,
}) => {
  const { currentTheme } = useCyberDoor();
  const color = propColor || currentTheme.primary;
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`} aria-hidden="true">
      {/* Top Left */}
      <span
        className="absolute top-0 left-0 transition-all duration-300 group-hover:scale-125"
        style={{
          width: size,
          height: size,
          borderTop: `2px solid ${color}`,
          borderLeft: `2px solid ${color}`,
          boxShadow: `0 0 8px ${color}66`,
        }}
      />

      {/* Top Right */}
      <span
        className="absolute top-0 right-0 transition-all duration-300 group-hover:scale-125"
        style={{
          width: size,
          height: size,
          borderTop: `2px solid ${color}`,
          borderRight: `2px solid ${color}`,
          boxShadow: `0 0 8px ${color}66`,
        }}
      />

      {/* Bottom Left */}
      <span
        className="absolute bottom-0 left-0 transition-all duration-300 group-hover:scale-125"
        style={{
          width: size,
          height: size,
          borderBottom: `2px solid ${color}`,
          borderLeft: `2px solid ${color}`,
          boxShadow: `0 0 8px ${color}66`,
        }}
      />

      {/* Bottom Right */}
      <span
        className="absolute bottom-0 right-0 transition-all duration-300 group-hover:scale-125"
        style={{
          width: size,
          height: size,
          borderBottom: `2px solid ${color}`,
          borderRight: `2px solid ${color}`,
          boxShadow: `0 0 8px ${color}66`,
        }}
      />

      {/* Optional HUD Tag Coordinate */}
      {tag && (
        <span
          className="absolute top-1.5 right-2.5 text-[8px] font-mono tracking-widest uppercase opacity-40 group-hover:opacity-100 transition-opacity"
          style={{ color }}
        >
          {tag}
        </span>
      )}
    </div>
  );
};
