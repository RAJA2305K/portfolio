import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PageLoader = ({ isLoading = true }) => {
  const dotVariants = {
    start: { y: 0 },
    animate: {
      y: -15,
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      },
    },
  };

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.6, ease: 'easeInOut' },
          }}
          style={{
            position: 'fixed',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'var(--background)',
            zIndex: 10000,
            backdropFilter: 'blur(10px)',
          }}
        >
          {/* Main loader circle */}
          <div style={{ position: 'relative', width: 100, height: 100 }}>
            {/* Rotating background circle */}
            <motion.svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              style={{
                position: 'absolute',
                inset: 0,
              }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="url(#gradient1)"
                strokeWidth="2"
                opacity="0.3"
              />
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--primary)" />
                  <stop offset="100%" stopColor="var(--secondary)" />
                </linearGradient>
              </defs>
            </motion.svg>

            {/* Animated inner circle */}
            <motion.div
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Center text/dots */}
            <motion.div
              variants={containerVariants}
              animate="animate"
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 6,
              }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  variants={dotVariants}
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: `var(--${i === 0 ? 'primary' : i === 1 ? 'secondary' : 'accent'})`,
                  }}
                />
              ))}
            </motion.div>
          </div>

          {/* Loading text */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{
              position: 'absolute',
              bottom: '15%',
              color: 'var(--muted)',
              fontSize: '14px',
              letterSpacing: '2px',
              fontFamily: 'var(--font-body)',
              textTransform: 'uppercase',
            }}
          >
            <motion.span
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Loading
            </motion.span>
            <motion.span
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
            >
              .
            </motion.span>
            <motion.span
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
            >
              .
            </motion.span>
            <motion.span
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
            >
              .
            </motion.span>
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
