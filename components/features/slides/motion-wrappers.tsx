'use client';

import { motion } from 'framer-motion';

// Hero number with amber glow pulse — loops forever
export function GlowText({
  children,
  className,
  style,
  delay = 1,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
}) {
  return (
    <motion.span
      className={className}
      style={style}
      animate={{
        filter: [
          'brightness(1)',
          'brightness(1.9) drop-shadow(0 0 30px rgba(201,122,74,1))',
          'brightness(1)',
        ],
      }}
      transition={{
        duration: 2,
        delay,
        repeat: Infinity,
        repeatDelay: 6,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.span>
  );
}

// Sequential spotlight for primitives chips in conclusion.
// Total cycle = 9s (5 chips × 1.5s each + 1.5s gap).
// Each chip glows in its own brand color.
export function SpotlightChip({
  children,
  color,
  index,
  className,
  style,
}: {
  children: React.ReactNode;
  color: string;
  index: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      className={className}
      style={style}
      animate={{
        boxShadow: [
          '0 0 0 0px transparent',
          `0 0 0 2px ${color}cc, 0 0 32px ${color}44`,
          '0 0 0 0px transparent',
        ],
      }}
      transition={{
        duration: 1.5,
        delay: 1.5 + index * 1.5,
        repeat: Infinity,
        repeatDelay: 7.5,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  );
}

// Card border amber pulse — for judge criteria / deliverable cards
export function PulseCard({
  children,
  className,
  style,
  delay = 0.8,
  repeatDelay = 5,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  repeatDelay?: number;
}) {
  return (
    <motion.div
      className={className}
      style={style}
      animate={{
        boxShadow: [
          '0 0 0 0px transparent',
          '0 0 0 2px rgba(201,122,74,0.7), 0 0 28px rgba(201,122,74,0.35)',
          '0 0 0 0px transparent',
        ],
      }}
      transition={{
        duration: 1.5,
        delay,
        repeat: Infinity,
        repeatDelay,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  );
}
