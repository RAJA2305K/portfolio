import React from 'react';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, Code, Mail, Layers } from 'lucide-react';

const navItems = [
  { id: 'hero', icon: Home, label: 'Home' },
  { id: 'about', icon: User, label: 'About' },
  { id: 'experience', icon: Briefcase, label: 'Experience' },
  { id: 'projects', icon: Code, label: 'Projects' },
  { id: 'skills', icon: Layers, label: 'Skills' },
  { id: 'contact', icon: Mail, label: 'Contact' },
];

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0, scale: 0.8 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ 
        type: 'spring', 
        stiffness: 260, 
        damping: 20,
        delay: 0.8 
      }}
      style={{
        position: 'fixed',
        bottom: '2.5rem',
        left: '50%',
        translateX: '-50%',
        zIndex: 1000,
      }}
    >
      <div className="glass preserve-3d" style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.8rem',
        padding: '0.6rem',
        borderRadius: '2.5rem',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        border: '1px solid var(--glass-border)',
        background: 'rgba(15, 23, 42, 0.8)',
      }}>
        {navItems.map((item) => (
          <div key={item.id} style={{ position: 'relative' }}>
            <motion.button
              whileHover={{ 
                scale: 1.4, 
                y: -15,
                transition: { type: 'spring', stiffness: 400, damping: 10 }
              }}
              whileTap={{ scale: 0.9 }}
              onClick={() => scrollToSection(item.id)}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: 'white',
                width: '3.5rem',
                height: '3.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '1.2rem',
                cursor: 'pointer',
                transformStyle: 'preserve-3d',
              }}
            >
              <item.icon size={22} strokeWidth={2} />
              
              {/* Dynamic Glow */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'var(--primary-glow)',
                  filter: 'blur(15px)',
                  zIndex: -1,
                  borderRadius: 'inherit',
                }}
              />
            </motion.button>
          </div>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
