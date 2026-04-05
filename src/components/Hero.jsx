import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';
import { Terminal, ArrowRight, Sparkles } from 'lucide-react';
import profileImg from '../assets/profile.jpeg';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Mouse tilt for profile card
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="hero" className="dot-grid" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* ... Radial Glow ... */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at 20% 50%, transparent 0%, var(--background) 70%)',
        zIndex: 0,
      }} />

      <div className="section-container hero-grid" style={{ 
        position: 'relative', 
        zIndex: 1, 
        width: '100%',
        display: 'grid',
        alignItems: 'center',
      }}>
        {/* Left Column: Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            textAlign: 'left',
            y: y1,
          }}
        >
          {/* ... existing text content ... */}
          <motion.div 
            variants={itemVariants}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.8rem', 
              marginBottom: '1.5rem',
              padding: '0.5rem 1.2rem',
              borderRadius: '2rem',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid var(--glass-border)',
              fontSize: '0.9rem',
              fontWeight: 600,
              color: 'var(--primary)',
              letterSpacing: '0.05em'
            }}
          >
            <Sparkles size={16} /> <span>Open to Work | Full Stack Developer</span>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            style={{
              fontSize: 'clamp(3.5rem, 8vw, 5.5rem)',
              lineHeight: 1.1,
              marginBottom: '1.5rem',
              fontWeight: 900,
              letterSpacing: '-0.04em',
            }}
          >
            Hi, I'm <span className="text-gradient">Raja</span> 👋 <br />
            <span style={{ fontSize: '0.6em', opacity: 0.9, fontWeight: 800 }}>Full Stack Developer</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            style={{
              fontSize: '1.25rem',
              color: 'var(--muted)',
              marginBottom: '1.5rem',
              lineHeight: 1.6,
              maxWidth: '650px',
              fontWeight: 400,
            }}
          >
            I build responsive and user-friendly web applications using React, JavaScript, and PHP. I enjoy solving problems and creating clean, modern UI.
          </motion.p>

          <motion.div
            variants={itemVariants}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              marginBottom: '3.5rem',
              fontSize: '0.95rem',
              color: 'var(--foreground)',
              opacity: 0.8,
              fontWeight: 600,
              letterSpacing: '0.1em'
            }}
          >
            <div style={{ width: '20px', height: '1px', background: 'var(--primary)' }} />
            React • JavaScript • PHP • MySQL
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px var(--primary-glow)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('projects')}
              style={{
                padding: '1.2rem 2.8rem',
                borderRadius: '1rem',
                background: 'var(--primary)',
                color: 'white',
                border: 'none',
                fontSize: '1.1rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem',
                cursor: 'pointer',
              }}
            >
              View My Work <ArrowRight size={20} />
            </motion.button>
            <motion.a
              href="/resume.pdf"
              download="Raja_Resume.pdf"
              whileHover={{ scale: 1.05, background: 'rgba(255, 255, 255, 0.05)' }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '1.2rem 2.8rem',
                borderRadius: '1rem',
                background: 'transparent',
                color: 'white',
                border: '1px solid var(--glass-border)',
                fontSize: '1.1rem',
                fontWeight: 700,
                backdropFilter: 'blur(10px)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem',
                textDecoration: 'none',
              }}
            >
             
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Column: 3D Profile Card */}
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            position: 'relative',
            perspective: '1000px',
            y: y2,
            opacity: opacity,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <motion.div
            className="profile-card-container"
            style={{
              width: '400px',
              height: '500px',
              position: 'relative',
              transformStyle: 'preserve-3d',
              rotateX,
              rotateY,
              cursor: 'grab',
            }}
            whileTap={{ cursor: 'grabbing' }}
          >
            {/* Background Glow */}
            <div style={{
              position: 'absolute',
              inset: '-20px',
              background: 'var(--primary-glow)',
              filter: 'blur(60px)',
              borderRadius: '2rem',
              opacity: 0.4,
              zIndex: -1,
            }} />

            {/* Profile Frame */}
            <div className="glass" style={{
              width: '100%',
              height: '100%',
              borderRadius: '2rem',
              border: '1px solid var(--glass-border)',
              overflow: 'hidden',
              position: 'relative',
              boxShadow: '0 40px 100px rgba(0,0,0,0.5)',
            }}>
              <motion.img 
                src={profileImg} 
                alt="Raja - Full Stack Developer"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transform: 'translateZ(-20px) scale(1.1)', // Push image back slightly
                  filter: 'contrast(1.1) brightness(0.9)',
                }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, var(--background) 0%, transparent 40%)',
              }} />
            </div>

            {/* Floating Info Tag */}
            <motion.div
              style={{
                position: 'absolute',
                bottom: '30px',
                right: '-20px',
                padding: '1.2rem 2rem',
                borderRadius: '1.5rem',
                background: 'rgba(15, 23, 42, 0.9)',
                backdropFilter: 'blur(10px)',
                border: '1px solid var(--primary)',
                boxShadow: '20px 20px 60px rgba(0,0,0,0.4)',
                transform: 'translateZ(50px)', // Pull tag forward
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e' }} />
                <span style={{ fontSize: '0.9rem', fontWeight: 800, color: 'white' }}>Available Now</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      <style>{`
        @keyframes morph {
          0% { border-radius: 24% 76% 70% 30% / 30% 30% 70% 70%; }
          100% { border-radius: 76% 24% 30% 70% / 70% 70% 30% 30%; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
