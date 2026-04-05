import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Palette, 
  Terminal, 
  Cpu, 
  Box, 
  Coffee,
  FileCode,
  Layout,
  Brush,
  PenTool,
  Server,
  Binary
} from 'lucide-react';

const skills = [
  { name: 'React / Next.js', icon: Code2, color: '#61dafb' },
  { name: 'JavaScript', icon: FileCode, color: '#f7df1e' },
  { name: 'Java', icon: Coffee, color: '#f89820' },
  { name: 'UI/UX Design', icon: Palette, color: '#ec4899' },
  { name: 'HTML', icon: Layout, color: '#e34f26' },
  { name: 'CSS', icon: Brush, color: '#1572b6' },
  { name: 'C Programming', icon: Terminal, color: '#a8b9cc' },
  { name: 'Figma', icon: PenTool, color: '#f24e1e' },
  { name: 'PHP', icon: Server, color: '#777bb4' },
  { name: 'Python', icon: Binary, color: '#3776ab' },
];

const Skills = () => {
  return (
    <section id="skills" className="section-container" style={{ perspective: '1200px' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: '5rem', textAlign: 'center' }}
      >
        <span style={{ color: 'var(--secondary)', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Expertise</span>
        <h2 style={{ fontSize: 'clamp(3rem, 7vw, 4.5rem)', marginBottom: '1.5rem', fontWeight: 900, letterSpacing: '-0.04em' }}>
          Technical <span className="text-gradient">Arsenal.</span>
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '1.2rem', maxWidth: '650px', margin: '0 auto', lineHeight: 1.6 }}>
          A curated set of technologies I use to architect scalable and high-performance digital solutions.
        </p>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
        gap: '2rem',
        maxWidth: '1200px',
        margin: '0 auto',
        perspective: '1000px',
      }}>
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, rotateX: -45, y: 50, translateZ: -100 }}
            whileInView={{ opacity: 1, rotateX: 0, y: 0, translateZ: 0 }}
            viewport={{ once: true }}
            transition={{ 
              delay: index * 0.08, 
              duration: 0.8, 
              ease: [0.215, 0.61, 0.355, 1] 
            }}
            whileHover={{ 
              scale: 1.05, 
              translateY: -10,
              boxShadow: `0 20px 40px -10px ${skill.color}33`,
            }}
            className="glass glow-card"
            style={{
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.5rem',
              borderRadius: '2rem',
              border: '1px solid var(--glass-border)',
              cursor: 'pointer',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))',
              transformStyle: 'preserve-3d',
            }}
          >
            <div style={{ 
              padding: '1.25rem', 
              borderRadius: '1.25rem', 
              background: `${skill.color}15`,
              color: skill.color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transform: 'translateZ(20px)',
            }}>
              <skill.icon size={32} />
            </div>
            <span style={{ 
              fontWeight: 700, 
              fontSize: '1.1rem', 
              color: 'white',
              transform: 'translateZ(10px)',
            }}>{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
