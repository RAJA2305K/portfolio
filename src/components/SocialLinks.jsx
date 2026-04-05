import React from 'react';
import { motion } from 'framer-motion';
import { Code2, User2, Mail } from 'lucide-react';

const socialLinks = [
  { 
    id: 'github', 
    icon: Code2, 
    label: 'GitHub', 
    href: 'https://github.com/RAJA2305K',
    color: '#a855f7' // Purple
  },
  { 
    id: 'linkedin', 
    icon: User2, 
    label: 'LinkedIn', 
    href: 'https://linkedin.com/in/rajak23',
    color: '#3b82f6' // Blue
  },
  { 
    id: 'email', 
    icon: Mail, 
    label: 'Email', 
    href: 'mailto:rajasmily2@gmail.com',
    color: '#10b981' // Emerald
  }
];

const SocialLinks = () => {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.8, type: 'spring' }}
      style={{
        position: 'fixed',
        top: '2rem',
        right: '2.5rem',
        zIndex: 1500,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.75rem',
      }}
    >
      <motion.span
        style={{
          fontSize: '0.65rem',
          fontWeight: 800,
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          color: 'var(--muted)',
          marginBottom: '0.25rem',
          writingMode: 'vertical-rl',
          textOrientation: 'mixed',
          opacity: 0.5
        }}
      >
        Reach Me
      </motion.span>

      <div className="glass" style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        padding: '0.5rem',
        borderRadius: '2rem',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
      }}>
        {socialLinks.map((social) => (
          <motion.a
            key={social.id}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.15, 
              backgroundColor: `${social.color}15`,
              color: social.color
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              width: '45px',
              height: '45px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'rgba(255, 255, 255, 0.7)',
              transition: 'all 0.3s ease',
              position: 'relative'
            }}
            className="social-btn-hover"
          >
            <social.icon size={22} strokeWidth={2} />
            
            <motion.div
              style={{
                position: 'absolute',
                right: '120%',
                top: '50%',
                y: '-50%',
                background: 'rgba(0, 0, 0, 0.8)',
                backdropFilter: 'blur(10px)',
                padding: '0.4rem 0.8rem',
                borderRadius: '0.75rem',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: 'white',
                pointerEvents: 'none',
                whiteSpace: 'nowrap',
                opacity: 0,
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)'
              }}
              className="social-tooltip"
            >
              {social.label}
              <div style={{
                position: 'absolute',
                left: '100%',
                top: '50%',
                y: '-50%',
                borderTop: '5px solid transparent',
                borderBottom: '5px solid transparent',
                borderLeft: '5px solid rgba(0, 0, 0, 0.8)',
              }} />
            </motion.div>
          </motion.a>
        ))}
      </div>
      
      <motion.div 
        initial={{ height: 0 }}
        animate={{ height: 60 }}
        transition={{ delay: 1.5, duration: 1 }}
        style={{
          width: '2px',
          background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.2), transparent)',
          marginTop: '0.5rem'
        }}
      />
    </motion.div>
  );
};

export default SocialLinks;
