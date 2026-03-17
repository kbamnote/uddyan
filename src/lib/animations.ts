import type { Variants } from 'framer-motion';

// Base transition config
const smooth = { ease: [0.25, 0.46, 0.45, 0.94] as const, duration: 0.5 };
const smoothFast = { ease: [0.25, 0.46, 0.45, 0.94] as const, duration: 0.35 };

// ─── Scroll-triggered variants ───────────────────────────────────────────────

export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: smooth },
};

export const fadeInDown: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: smooth },
};

export const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: smooth },
};

export const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: smooth },
};

export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.93 },
    visible: { opacity: 1, scale: 1, transition: smooth },
};

// ─── Stagger container ────────────────────────────────────────────────────────

export const staggerContainer: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.05,
        },
    },
};

export const staggerFast: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.02,
        },
    },
};

// ─── Interactive variants ─────────────────────────────────────────────────────

export const buttonHover = {
    scale: 1.03,
    transition: smoothFast,
};

export const buttonTap = {
    scale: 0.97,
};

// ─── Modal / overlay ──────────────────────────────────────────────────────────

export const modalVariant: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 10 },
    visible: { opacity: 1, scale: 1, y: 0, transition: smooth },
    exit: { opacity: 0, scale: 0.95, y: 10, transition: { duration: 0.2 } },
};

export const overlayVariant: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.25 } },
    exit: { opacity: 0, transition: { duration: 0.2 } },
};

// ─── Slide-in panel (mobile menu) ─────────────────────────────────────────────

export const slideInRight: Variants = {
    hidden: { x: '100%', opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { ease: [0.25, 0.46, 0.45, 0.94] as const, duration: 0.4 } },
    exit: { x: '100%', opacity: 0, transition: { ease: [0.55, 0, 1, 0.45] as const, duration: 0.3 } },
};
