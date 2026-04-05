import React, { useEffect, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  // Create derived motion values for centering
  const dotX = useTransform(cursorX, (val) => val + 13);
  const dotY = useTransform(cursorY, (val) => val + 13);
  const glowX = useTransform(cursorX, (val) => val - 59);
  const glowY = useTransform(cursorY, (val) => val - 59);

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.getAttribute('role') === 'button' ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 32,
          height: 32,
          borderRadius: '50%',
          border: '1.5px solid var(--primary)',
          pointerEvents: 'none',
          zIndex: 9999,
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: 1,
        }}
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
        }}
        animate={{
          scale: isHovering ? 0 : 1,
        }}
      />
      {/* Glow Effect */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 150,
          height: 150,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 9998,
          x: glowX,
          y: glowY,
        }}
      />
    </>
  );
};

export default CustomCursor;
