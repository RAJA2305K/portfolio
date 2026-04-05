import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: '3rem' }}
      >
        <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Experience</h2>
        <p style={{ color: 'var(--muted)', fontSize: '1.2rem', maxWidth: '600px' }}>
          Growing my skills through professional challenges and full-stack development.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass"
        style={{
          padding: '3rem',
          position: 'relative',
          overflow: 'hidden',
          borderLeft: '4px solid var(--primary)',
        }}
      >
        {/* Glow effect */}
        <div style={{
          position: 'absolute',
          top: '-50px',
          right: '-50px',
          width: '200px',
          height: '200px',
          background: 'var(--primary-glow)',
          filter: 'blur(100px)',
          borderRadius: '50%',
          opacity: 0.3,
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'baseline', 
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '1.5rem'
          }}>
            <div>
              <h3 style={{ fontSize: '2rem', color: 'white' }}>Junior Full Stack Developer</h3>
              <p style={{ 
                fontSize: '1.25rem', 
                color: 'var(--primary)', 
                fontWeight: 600,
                marginTop: '0.25rem'
              }}>
                Xenaro
              </p>
            </div>
            
            <div style={{ 
              display: 'flex', 
              gap: '1.5rem', 
              color: 'var(--muted)',
              fontSize: '0.9rem'
            }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Calendar size={16} /> 2025 - Present
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={16} /> Remote
              </span>
            </div>
          </div>

          <p style={{ 
            fontSize: '1.15rem', 
            lineHeight: 1.8, 
            color: 'var(--muted)',
            marginBottom: '2rem',
            maxWidth: '800px'
          }}>
            In my current role at <span style={{ color: 'var(--primary)', fontWeight: 600 }}>Xenaro</span>, I contribute to the development of scalable and user-friendly web applications by bridging the gap between complex backend logic and pixel-perfect frontends.
          </p>

          <ul style={{ 
            listStyle: 'none', 
            padding: 0, 
            margin: '0 0 2.5rem 0',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            {[
              "Developed responsive and dynamic user interfaces using React.js, HTML5, CSS3, and JavaScript.",
              "Converted UI/UX designs and screenshots into pixel-perfect, reusable React components.",
              "Built modular and maintainable code using React Hooks and component-based architecture.",
              "Improved application performance and responsiveness across multiple devices.",
              "Fixed UI bugs and enhanced layout consistency for better user experience.",
              "Implemented responsive design using Flexbox and CSS Grid.",
              "Collaborated with team members using Git and GitHub for version control.",
              "Worked with existing codebases to optimize UI structure and maintain code quality."
            ].map((item, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                style={{ 
                  display: 'flex', 
                  gap: '1rem', 
                  color: 'var(--foreground)',
                  fontSize: '1.05rem',
                  lineHeight: 1.6
                }}
              >
                <span style={{ color: 'var(--primary)', marginTop: '0.2rem' }}>▹</span>
                {item}
              </motion.li>
            ))}
          </ul>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {['React', 'HTML', 'CSS', 'JavaScript', 'java', 'PHP', 'Python', 'UI/UX'].map((tech) => (
              <span key={tech} style={{
                padding: '0.4rem 1rem',
                borderRadius: '2rem',
                border: '1px solid var(--glass-border)',
                background: 'rgba(255, 255, 255, 0.05)',
                fontSize: '0.85rem',
                color: 'var(--muted)',
              }}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
