import React, { useEffect, useState, useRef } from 'react';

interface DecryptedTextProps {
  text: string;
  className?: string;
  speed?: number;
  maxIterations?: number;
  characters?: string;
  animateOn?: 'view' | 'hover';
}

const DEFAULT_CHARS = 'アイウエオカキクケコサシスセソタチツテト0123456789ABCDEF#%&*+=-_~ΞΨ✦';

export const DecryptedText: React.FC<DecryptedTextProps> = ({
  text,
  className = '',
  speed = 35,
  maxIterations = 10,
  characters = DEFAULT_CHARS,
  animateOn = 'view',
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let iteration = 0;

    const startAnimation = () => {
      iteration = 0;
      clearInterval(interval);

      interval = setInterval(() => {
        setDisplayText(() =>
          text
            .split('')
            .map((char, index) => {
              if (char === ' ') return ' ';
              if (index < iteration) {
                return text[index];
              }
              return characters[Math.floor(Math.random() * characters.length)];
            })
            .join('')
        );

        if (iteration >= text.length) {
          clearInterval(interval);
        }

        iteration += 1 / (maxIterations / text.length || 1);
      }, speed);
    };

    if (animateOn === 'view') {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimated) {
              setHasAnimated(true);
              startAnimation();
            }
          });
        },
        { threshold: 0.1 }
      );

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }

      return () => {
        clearInterval(interval);
        observer.disconnect();
      };
    } else if (animateOn === 'hover' && isHovering) {
      startAnimation();
      return () => clearInterval(interval);
    }
  }, [text, speed, maxIterations, characters, animateOn, isHovering, hasAnimated]);

  return (
    <span
      ref={containerRef}
      className={`inline-block font-mono tracking-wide ${className}`}
      onMouseEnter={() => animateOn === 'hover' && setIsHovering(true)}
      onMouseLeave={() => animateOn === 'hover' && setIsHovering(false)}
      aria-label={text}
    >
      {displayText}
    </span>
  );
};
