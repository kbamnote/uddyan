import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInDown, fadeInLeft, fadeInRight, scaleIn } from '../lib/animations';
import type { Variants } from 'framer-motion';

type AnimationType = 'fadeUp' | 'fadeDown' | 'fadeLeft' | 'fadeRight' | 'scale' | 'none';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
}

const variantMap: Record<Exclude<AnimationType, 'none'>, Variants> = {
  fadeUp: fadeInUp,
  fadeDown: fadeInDown,
  fadeLeft: fadeInLeft,
  fadeRight: fadeInRight,
  scale: scaleIn,
};

export default function AnimatedSection({
  children,
  className = '',
  animation = 'fadeUp',
  delay = 0,
  duration,
}: AnimatedSectionProps) {
  if (animation === 'none') {
    return <div className={className}>{children}</div>;
  }

  const variants = variantMap[animation];

  // Allow per-instance duration/delay overrides
  const customVariants: Variants = duration || delay
    ? {
      hidden: variants.hidden,
      visible: {
        ...(variants.visible as object),
        transition: {
          ease: [0.25, 0.46, 0.45, 0.94],
          duration: duration ?? 0.5,
          delay,
        },
      },
    }
    : variants;

  return (
    <motion.div
      className={className}
      variants={customVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.div>
  );
}

// ─── Stagger Container ────────────────────────────────────────────────────────

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  animation?: AnimationType;
}

export function StaggerContainer({
  children,
  className = '',
  staggerDelay = 0.1,
  animation = 'fadeUp',
}: StaggerContainerProps) {
  const childVariant = animation !== 'none' ? variantMap[animation] : undefined;
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: staggerDelay, delayChildren: 0.05 },
    },
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {childVariant
        ? (Array.isArray(children) ? children : [children]).map((child, i) => (
          <motion.div key={i} variants={childVariant}>
            {child}
          </motion.div>
        ))
        : children}
    </motion.div>
  );
}

// ─── Text Reveal (kept for backward compat) ────────────────────────────────────

interface TextRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function TextReveal({ children, className = '', delay = 0 }: TextRevealProps) {
  return (
    <motion.div
      className={className}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}