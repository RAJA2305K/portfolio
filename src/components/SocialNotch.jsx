import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Code2, User2, Phone, ChevronDown } from 'lucide-react';

const SocialNotch = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const socialLinks = [
    { id: 'email', icon: Mail, label: 'Email', value: 'rajasmily2@gmail.com', href: 'mailto:rajasmily2@gmail.com' },
    { id: 'linkedin', icon: User2, label: 'LinkedIn', value: 'Raja K', href: 'https://linkedin.com/in/rajak23' },
    { id: 'github', icon: Code2, label: 'GitHub', value: 'RAJA2305K', href: 'https://github.com/RAJA2305K' },
    { id: 'phone', icon: Phone, label: 'Phone', value: '+91 1234567890', href: 'tel:+911234567890' },
  ];

  return (
    <div style={{
      position: 'fixed',
      top: '1.5rem',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 2000,
      pointerEvents: 'none',
    }}>
      <motion.div
        layout
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        onClick={() => setIsExpanded(!isExpanded)}
        style={{
          background: 'rgba(15, 23, 42, 0.95)',
          backdropFilter: 'blur(16px)',
          borderRadius: '2rem',
          padding: '0.6rem 1.2rem',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          cursor: 'pointer',
          pointerEvents: 'auto',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
          overflow: 'hidden',
          minWidth: '180px',
        }}
      >
        <AnimatePresence mode="wait">
          {!isExpanded ? (
            <motion.div
              key="collapsed"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', width: '100%', justifyContent: 'center' }}
            >
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <Mail size={16} color="var(--primary)" />
                <Github size={16} color="var(--secondary)" />
              </div>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'white', letterSpacing: '0.1rem' }}>CONNECT</span>
              <ChevronDown size={14} color="var(--muted)" />
            </motion.div>
          ) : (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              style={{ display: 'flex', gap: '1rem', padding: '0.2rem' }}
            >
              {socialLinks.map((link) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.3rem',
                    color: 'white',
                    textDecoration: 'none',
                  }}
                >
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease',
                  }}>
                    <link.icon size={18} />
                  </div>
                  <span style={{ fontSize: '0.6rem', fontWeight: 600, opacity: 0.6 }}>{link.label}</span>
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default SocialNotch;
