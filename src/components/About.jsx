import React from 'react';
import { motion } from 'framer-motion';
import { User, Code2, Rocket, Heart } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="section-container" style={{ position: 'relative' }}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="about-grid"
        style={{
          display: 'grid',
          gap: '4rem',
          alignItems: 'center',
        }}
      >
        {/* Left Column: Narrative */}
        <div style={{ position: 'relative' }}>
          <motion.div variants={itemVariants} style={{ marginBottom: '2rem' }}>
            <span style={{
              color: 'var(--primary)',
              fontWeight: 600,
              letterSpacing: '0.15rem',
              textTransform: 'uppercase',
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              marginBottom: '1rem',
            }}>
              <User size={18} /> About Me
            </span>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Building Scalable <br />
              <span className="text-gradient">Web Applications</span>
            </h2>
          </motion.div>

          <motion.p variants={itemVariants} style={{
            fontSize: '1.1rem',
            lineHeight: 1.7,
            color: 'var(--muted)',
            marginBottom: '1.5rem',
            fontWeight: 400,
          }}>
            Hello! I'm Raja, a Full Stack Developer specializing in building responsive and user-friendly web applications. I have experience working with modern technologies like React.js, JavaScript, and PHP to create efficient and scalable solutions.
          </motion.p>
          
          <motion.p variants={itemVariants} style={{
            fontSize: '1.1rem',
            lineHeight: 1.7,
            color: 'var(--muted)',
            marginBottom: '1.5rem',
            fontWeight: 400,
          }}>
            I have worked on real-world projects such as rental platforms and business websites, where I focused on clean UI design, performance optimization, and responsive layouts.
          </motion.p>

          <motion.p variants={itemVariants} style={{
            fontSize: '1.1rem',
            lineHeight: 1.7,
            color: 'var(--muted)',
            marginBottom: '2.5rem',
            fontWeight: 400,
          }}>
            I am currently seeking opportunities to contribute to impactful projects, grow as a developer, and deliver high-quality web solutions.
          </motion.p>

          <motion.div variants={itemVariants} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1rem',
              padding: '1.2rem',
              borderRadius: '1.2rem',
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid var(--glass-border)',
            }}>
               <div style={{ color: 'var(--primary)' }}><Rocket size={24} /></div>
               <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 600 }}>Performance</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>Optimized & fast-loading apps.</p>
               </div>
            </div>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1rem',
              padding: '1.2rem',
              borderRadius: '1.2rem',
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid var(--glass-border)',
            }}>
               <div style={{ color: 'var(--secondary)' }}><Heart size={24} /></div>
               <div>
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 600 }}>UI Quality</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>Clean, responsive design.</p>
               </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Visual/Stats */}
        <div style={{ position: 'relative' }}>
          <motion.div
            variants={itemVariants}
            className="glass"
            style={{
              padding: '2.5rem',
              borderRadius: '2.5rem',
              position: 'relative',
              zIndex: 1,
              border: '1px solid var(--glass-border)',
              background: 'rgba(15, 23, 42, 0.8)',
              boxShadow: '0 40px 100px rgba(0,0,0,0.4)',
            }}
          >
            <div style={{ 
              fontSize: '1.25rem', 
              color: 'var(--foreground)', 
              lineHeight: 1.6,
              fontWeight: 500,
              fontStyle: 'italic',
              marginBottom: '2rem'
            }}>
              "The web is a canvas for innovation. My mission is to build experiences that not only look beautiful but feel intuitive and accessible to everyone."
            </div>
            
            <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '2rem' }}>
               <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem', fontSize: '0.95rem' }}>
                    <span style={{ fontWeight: 600 }}>React.js & JavaScript</span>
                    <span style={{ color: 'var(--primary)', fontWeight: 700 }}>85%</span>
                  </div>
                  <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }}>
                    <motion.div 
                      initial={{ width: 0 }} 
                      whileInView={{ width: '85%' }} 
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.3, ease: "circOut" }}
                      style={{ height: '100%', background: 'var(--primary)', borderRadius: '4px' }} 
                    />
                  </div>
               </div>
               <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem', fontSize: '0.95rem' }}>
                    <span style={{ fontWeight: 600 }}>Frontend Development</span>
                    <span style={{ color: 'var(--secondary)', fontWeight: 700 }}>80%</span>
                  </div>
                  <div style={{ width: '100%', height: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }}>
                    <motion.div 
                      initial={{ width: 0 }} 
                      whileInView={{ width: '80%' }} 
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.5, ease: "circOut" }}
                      style={{ height: '100%', background: 'var(--secondary)', borderRadius: '4px' }} 
                    />
                  </div>
               </div>
            </div>
          </motion.div>

          {/* Decorative Glow */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '300px',
            height: '300px',
            background: 'var(--primary-glow)',
            filter: 'blur(100px)',
            borderRadius: '50%',
            zIndex: 0,
            opacity: 0.4,
          }} />
        </div>
      </motion.div>
    </section>
  );
};

export default About;
