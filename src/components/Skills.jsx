import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  Code2, 
  Palette, 
  Terminal, 
  Coffee,
  FileCode,
  Layout,
  Brush,
  PenTool,
  Server,
  Binary,
  Sparkles,
  GitBranch,
  GitFork,
  MonitorCheck
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Layout,
    skills: [
      { name: 'React js', icon: Code2, color: '#61dafb' },
      { name: 'JavaScript', icon: FileCode, color: '#f7df1e' },
      { name: 'HTML', icon: Layout, color: '#e34f26' },
      { name: 'CSS', icon: Brush, color: '#1572b6' },
    ]
  },
  {
    title: 'Backend Development',
    icon: Server,
    skills: [
      { name: 'Java', icon: Coffee, color: '#f89820' },
      { name: 'PHP', icon: Server, color: '#777bb4' },
      { name: 'Python', icon: Binary, color: '#3776ab' },
      { name: 'C Programming', icon: Terminal, color: '#a8b9cc' },
    ]
  },
  {
    title: 'Tools & Design',
    icon: Palette,
    skills: [
      { name: 'Figma', icon: PenTool, color: '#f24e1e' },
      { name: 'UI/UX Design', icon: Palette, color: '#ec4899' },
      { name: 'Git', icon: GitBranch, color: '#f05032' },
      { name: 'GitHub', icon: GitFork, color: '#ffffff' },
      { name: 'VS Code', icon: MonitorCheck, color: '#007acc' },
    ]
  }
];

const SkillCard = ({ skill, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleTouchMove = (e) => {
    if (e.touches && e.touches.length > 0) {
      const touch = e.touches[0];
      const rect = e.currentTarget.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const touchX = touch.clientX - rect.left;
      const touchY = touch.clientY - rect.top;
      const xPct = touchX / width - 0.5;
      const yPct = touchY / height - 0.5;
      x.set(xPct);
      y.set(yPct);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        delay: index * 0.05, 
        duration: 0.5, 
        type: 'spring', 
        stiffness: 100 
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseLeave}
      className="skill-bento-card glass"
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        position: 'relative',
        padding: '1.25rem',
        borderRadius: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.75rem',
        border: '1px solid var(--glass-border)',
        background: 'rgba(15, 23, 42, 0.4)',
        cursor: 'pointer',
      }}
    >
      {/* Dynamic Glow */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${skill.color}22 0%, transparent 70%)`,
          opacity: useTransform(mouseXSpring, [-0.5, 0.5], [0.2, 0.6]),
          pointerEvents: 'none',
          borderRadius: 'inherit',
          zIndex: 0,
        }}
      />

      <div style={{
        padding: '0.8rem',
        borderRadius: '1rem',
        background: `${skill.color}15`,
        color: skill.color,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transform: 'translateZ(30px)',
        boxShadow: `0 10px 20px -5px ${skill.color}33`,
      }}>
        <skill.icon size={24} />
      </div>

      <span style={{ 
        fontWeight: 700, 
        fontSize: '0.9rem', 
        color: 'white',
        transform: 'translateZ(20px)',
        textAlign: 'center'
      }}>{skill.name}</span>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="section-container" style={{ perspective: '1200px' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: '4rem', textAlign: 'center' }}
      >
        <span style={{ 
          color: 'var(--primary)', 
          fontWeight: 600, 
          fontSize: '0.8rem', 
          textTransform: 'uppercase', 
          letterSpacing: '0.3em',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          marginBottom: '1rem'
        }}>
          <Sparkles size={14} /> My Stack
        </span>
        <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', marginBottom: '1rem', fontWeight: 900, letterSpacing: '-0.04em' }}>
          Technical <span className="text-gradient">Skills</span>
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
          Skilled in modern web technologies with hands-on experience in building responsive, scalable, and user-friendly applications using frontend and backend tools.
        </p>
        <p style={{ marginTop: '1rem', color: 'var(--primary)', fontSize: '1rem', fontWeight: 600 }}>
          Focused on building clean UI, scalable backend logic, and optimized user experience.
        </p>
      </motion.div>

      <div className="skills-bento-container" style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '3rem',
        maxWidth: '1000px',
        margin: '0 auto',
      }}>
        {skillCategories.map((category, catIdx) => (
          <div key={catIdx}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem', opacity: 0.8 }}>
              <category.icon size={18} color="var(--primary)" />
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, letterSpacing: '0.05em', color: 'var(--foreground)' }}>
                {category.title}
              </h3>
              <div style={{ flex: 1, h: '1px', height: '1px', background: 'linear-gradient(to right, var(--glass-border), transparent)' }} />
            </div>

            <div className="skills-bento-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
              gap: '1.25rem',
            }}>
              {category.skills.map((skill, index) => (
                <SkillCard key={index} skill={skill} index={index + (catIdx * 4)} />
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <style>{`
        .skill-bento-card {
          transition: background 0.3s ease, border-color 0.3s ease;
        }
        .skill-bento-card:hover {
          background: rgba(255, 255, 255, 0.05) !important;
          border-color: rgba(255, 255, 255, 0.2) !important;
        }
        @media (max-width: 768px) {
          .skills-bento-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
