import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
}

export function ScrollReveal({ children, className = '', delayMs = 0 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timer = setTimeout(() => {
            setIsRevealed(true);
          }, delayMs);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
          return () => clearTimeout(timer);
        }
      },
      {
        threshold: 0.08, // Trigger when 8% is visible, perfect for mobile and desktop
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delayMs]);

  return (
    <div
      id={`reveal-${Math.random().toString(36).substr(2, 9)}`}
      ref={ref}
      className={`reveal-element ${isRevealed ? 'revealed' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
