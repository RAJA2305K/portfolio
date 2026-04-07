// Animation variants for various effects
export const slideInUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

export const slideInDown = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

export const slideInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

export const slideInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

export const rotateIn = {
  initial: { opacity: 0, rotate: -10 },
  animate: { opacity: 1, rotate: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

// Container variants for staggered children
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Hover effect variants
export const hoverScale = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
};

export const hoverLift = {
  whileHover: { y: -8, transition: { duration: 0.3 } },
  whileTap: { y: -2 },
};

export const hoverGlow = {
  whileHover: {
    boxShadow: '0 20px 40px rgba(139, 92, 246, 0.3)',
    transition: { duration: 0.3 },
  },
};

// 3D effects
export const perspective3D = {
  initial: { rotateX: 10, opacity: 0 },
  animate: {
    rotateX: 0,
    opacity: 1,
    transition: { duration: 0.8 },
  },
};

export const float = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Parallax effect hook
export const parallaxVariants = (offset = 50) => ({
  animate: {
    y: [0, -offset],
    transition: {
      duration: 0.3,
    },
  },
});

// Micro interactions
export const pulse = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 0.6,
      repeat: Infinity,
    },
  },
};

export const shimmer = {
  animate: {
    backgroundPosition: ['200% center', '-200% center'],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

export const bounce = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

// Entrance reveal animations with delay
export const createStaggerAnimation = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      delay,
    },
  },
});

// Text reveal animation
export const textReveal = {
  animate: {
    backgroundPosition: ['0% center', '100% center'],
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
    },
  },
};

// Flip animation
export const flipCardHover = {
  whileHover: {
    rotateY: 180,
    transition: { duration: 0.6 },
  },
};

// Gradient animation
export const gradientShift = {
  animate: {
    backgroundPosition: ['0% center', '100% center', '0% center'],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};
