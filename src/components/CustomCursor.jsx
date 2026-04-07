import React, { useEffect, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsDesktop(window.matchMedia('(pointer: fine)').matches);
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  // Create derived motion values for centering
  const dotX = useTransform(cursorX, (val) => val + 13);
  const dotY = useTransform(cursorY, (val) => val + 13);
  const glowX = useTransform(cursorX, (val) => val - 59);
  const glowY = useTransform(cursorY, (val) => val - 59);
  const ringX = useTransform(cursorX, (val) => val - 16);
  const ringY = useTransform(cursorY, (val) => val - 16);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('interactive') ||
        target.closest('.interactive') ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [cursorX, cursorY]);

  if (!isDesktop) return null;

  return (
    <>
      {/* Outer Ring with glow effect */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 32,
          height: 32,
          borderRadius: '50%',
          border: '2px solid var(--primary)',
          pointerEvents: 'none',
          zIndex: 9999,
          x: ringX,
          y: ringY,
          boxShadow: 'inset 0 0 10px rgba(139, 92, 246, 0.3)',
        }}
        animate={{
          scale: isHovering ? 1.8 : isClicking ? 0.9 : 1,
          opacity: isHovering ? 1 : 0.8,
          borderColor: isHovering ? 'var(--secondary)' : 'var(--primary)',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      />

      {/* Inner Dot */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 6,
          height: 6,
          borderRadius: '50%',
          backgroundColor: 'var(--primary)',
          pointerEvents: 'none',
          zIndex: 9999,
          x: dotX,
          y: dotY,
          boxShadow: '0 0 8px rgba(139, 92, 246, 0.6)',
        }}
        animate={{
          scale: isHovering ? 0 : isClicking ? 1.3 : 1,
          opacity: isClicking ? 1 : 1,
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      />

      {/* Glow Effect - Enhanced */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 150,
          height: 150,
          borderRadius: '50%',
          background: isHovering
            ? 'radial-gradient(circle, rgba(139, 92, 246, 0.25) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 9998,
          x: glowX,
          y: glowY,
          filter: 'blur(1px)',
        }}
        animate={{
          scale: isHovering ? 1.3 : 1,
          opacity: isClicking ? 0.5 : isHovering ? 1 : 0.7,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      />

      {/* Click Ripple Effect */}
      {isClicking && (
        <motion.div
          key={`${mousePosition.x}-${mousePosition.y}`}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{
            position: 'fixed',
            left: mousePosition.x - 8,
            top: mousePosition.y - 8,
            width: 16,
            height: 16,
            borderRadius: '50%',
            border: '2px solid var(--secondary)',
            pointerEvents: 'none',
            zIndex: 9997,
          }}
        />
      )}

      {/* Trailing effect - subtle particles on move */}
      <motion.svg
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 9997,
        }}
        viewBox="0 0 1200 800"
      >
        {isHovering && (
          <motion.circle
            cx={mousePosition.x}
            cy={mousePosition.y}
            r={4}
            fill="var(--primary)"
            opacity={0.4}
            animate={{
              opacity: [0.4, 0],
              r: [4, 12],
            }}
            transition={{
              duration: 0.6,
              ease: 'easeOut',
            }}
          />
        )}
      </motion.svg>
    </>
  );
};

export default CustomCursor;
