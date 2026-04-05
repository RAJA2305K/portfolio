import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, User2, Code2, Share2 } from 'lucide-react';

const socialLinks = [
  {
    id: 'email',
    icon: Mail,
    label: 'Email',
    href: 'mailto:rajasmily2@gmail.com',
    color: '#8b5cf6',
    glow: 'rgba(139,92,246,0.6)',
    angle: 90, // degrees from center
  },
  {
    id: 'linkedin',
    icon: User2,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/rajak23',
    color: '#0ea5e9',
    glow: 'rgba(14,165,233,0.6)',
    angle: 60,
  },
  {
    id: 'github',
    icon: Code2,
    label: 'GitHub',
    href: 'https://github.com/RAJA2305K',
    color: '#ec4899',
    glow: 'rgba(236,72,153,0.6)',
    angle: 30,
  },
  {
    id: 'phone',
    icon: Phone,
    label: 'Contact',
    href: 'tel:+919944295882',
    color: '#10b981',
    glow: 'rgba(16,185,129,0.6)',
    angle: 0,
  },
];

const ARC_RADIUS = 90; // px distance from trigger

const SocialNotch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div
      className="social-notch-container"
      style={{
        position: 'fixed',
        bottom: '2.5rem',
        left: '2.5rem',
        zIndex: 2000,
        width: '56px',
        height: '56px',
      }}
    >
      {/* Fan Arc links */}
      {socialLinks.map((link, index) => {
        const rad = (link.angle * Math.PI) / 180;
        const x = -Math.cos(rad) * ARC_RADIUS; // negative = goes left, but we go right+up
        const y = -Math.sin(rad) * ARC_RADIUS; // negative = goes up

        const isHovered = hoveredId === link.id;

        return (
          <div key={link.id} style={{ position: 'absolute', bottom: 0, left: 0 }}>
            <AnimatePresence>
              {isOpen && (
                <>
                  <motion.a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                    animate={{
                      x: Math.cos(rad) * ARC_RADIUS,
                      y: -Math.sin(rad) * ARC_RADIUS,
                      scale: 1,
                      opacity: 1,
                    }}
                    exit={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                    transition={{
                      delay: index * 0.07,
                      type: 'spring',
                      stiffness: 260,
                      damping: 18,
                    }}
                    whileHover={{ scale: 1.25 }}
                    whileTap={{ scale: 0.9 }}
                    onHoverStart={() => setHoveredId(link.id)}
                    onHoverEnd={() => setHoveredId(null)}
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      background: isHovered
                        ? `radial-gradient(circle at 30% 30%, ${link.color}40, rgba(8,12,26,0.95))`
                        : 'rgba(8, 12, 26, 0.88)',
                      backdropFilter: 'blur(14px)',
                      border: `1.5px solid ${isHovered ? link.color : link.color + '55'}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: link.color,
                      textDecoration: 'none',
                      boxShadow: isHovered
                        ? `0 0 20px ${link.glow}, 0 0 40px ${link.glow}`
                        : `0 4px 14px rgba(0,0,0,0.5), inset 0 0 0 1px ${link.color}22`,
                      transition: 'background 0.2s ease, box-shadow 0.2s ease',
                      marginLeft: '-22px',
                      marginBottom: '-22px',
                    }}
                  >
                    {/* Pulse ring on hover */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ scale: 1, opacity: 0.7 }}
                          animate={{ scale: 2, opacity: 0 }}
                          transition={{ duration: 0.8, repeat: Infinity }}
                          style={{
                            position: 'absolute',
                            inset: 0,
                            borderRadius: '50%',
                            border: `1.5px solid ${link.color}`,
                            pointerEvents: 'none',
                          }}
                        />
                      )}
                    </AnimatePresence>
                    <link.icon size={17} strokeWidth={2.2} />
                  </motion.a>

                  {/* Tooltip above icon */}
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      style={{
                        position: 'absolute',
                        bottom: `calc(${Math.sin(rad) * ARC_RADIUS + 22 + 12}px)`,
                        left: `calc(${Math.cos(rad) * ARC_RADIUS - 22}px)`,
                        background: 'rgba(8,12,26,0.95)',
                        backdropFilter: 'blur(10px)',
                        border: `1px solid ${link.color}55`,
                        borderRadius: '6px',
                        padding: '0.25rem 0.65rem',
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        color: link.color,
                        whiteSpace: 'nowrap',
                        pointerEvents: 'none',
                        letterSpacing: '0.06em',
                        boxShadow: `0 4px 14px ${link.glow}`,
                      }}
                    >
                      {link.label}
                    </motion.div>
                  )}
                </>
              )}
            </AnimatePresence>
          </div>
        );
      })}

      {/* Trigger button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, type: 'spring', stiffness: 200, damping: 14 }}
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.92 }}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: isOpen
            ? 'linear-gradient(135deg, #8b5cf6, #ec4899)'
            : 'rgba(8,12,26,0.9)',
          backdropFilter: 'blur(14px)',
          border: isOpen
            ? 'none'
            : '1.5px solid rgba(139,92,246,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          cursor: 'pointer',
          boxShadow: isOpen
            ? '0 0 30px rgba(139,92,246,0.6), 0 0 60px rgba(236,72,153,0.3)'
            : '0 4px 20px rgba(0,0,0,0.5)',
          transition: 'all 0.3s ease',
          zIndex: 10,
        }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <Share2 size={22} strokeWidth={2} />
        </motion.div>

        {/* Outer rotating ring when closed */}
        {!isOpen && (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute',
              inset: '-5px',
              borderRadius: '50%',
              border: '1.5px dashed rgba(139,92,246,0.3)',
              pointerEvents: 'none',
            }}
          />
        )}
      </motion.button>
    </div>
  );
};

export default SocialNotch;
