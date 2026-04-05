import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Code2, ArrowUpRight } from 'lucide-react';

// Import project images
import upgradellyImg from '../assets/projects/upgradelly.png';
import garmentArenaImg from '../assets/projects/garment-arena.png';
import rentalMaterialImg from '../assets/projects/rental-material.png';
import escapeEpicImg from '../assets/projects/escape-epic.png';

const projects = [
  {
    title: 'Upgradelly',
    description: 'A comprehensive educational platform designed to empower students with personalized learning paths and real-time mentor support.',
    category: 'Educational platform',
    size: 'large',
    color: '#8b5cf6',
    image: upgradellyImg,
    tech: ['React', 'Chart.js', 'Tailwind', 'Node.js'],
    features: ['Real-time progress tracking', 'Interactive course modules', 'Personalized AI recommendations'],
    liveUrl: '#',
    repoUrl: 'https://github.com/RAJA2305K/Upgradelly',
  },
  {
    title: 'Garment Arena',
    description: 'A premium e-commerce platform for apparel with custom filtering and 3D product visualization.',
    category: 'E-commerce',
    size: 'medium',
    color: '#3b82f6',
    image: garmentArenaImg,
    tech: ['React', 'Three.js', 'Redux', 'Stripe'],
    features: ['3D Product View', 'Advanced Filtering', 'Seamless Checkout'],
    liveUrl: '#',
    repoUrl: 'https://github.com/RAJA2305K/Garment-Arena',
  },
  {
    title: 'Rental Material',
    description: 'A robust inventory management and rental system for industrial equipment.',
    category: 'SaaS / Inventory',
    size: 'medium',
    color: '#10b981',
    image: rentalMaterialImg,
    tech: ['Next.js', 'PostgreSQL', 'Prisma', 'Cloudinary'],
    features: ['Inventory Dashboard', 'Automated Invoicing', 'Real-time Availability'],
    liveUrl: '#',
    repoUrl: 'https://github.com/RAJA2305K/Rental-Material',
  },
  {
    title: 'Escape Epic',
    description: 'An immersive travel booking app featuring unique destinations and dynamic itineraries.',
    category: 'Travel & Booking',
    size: 'large',
    color: '#ec4899',
    image: escapeEpicImg,
    tech: ['React Native', 'Firebase', 'Google Maps API', 'Framer Motion'],
    features: ['Dynamic Itinerary Builder', 'Interactive Maps', 'Travel Journaling'],
    liveUrl: '#',
    repoUrl: 'https://github.com/RAJA2305K/Escape-Epic',
  }
];

const ProjectCard = ({ project, index, onClick }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

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

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onClick(project)}
      className="glass preserve-3d project-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        '--card-span': project.size === 'large' ? 'span 2' : 'span 1',
        gridColumn: 'var(--card-span)',
        gridRow: 'var(--card-span)',
        minHeight: project.size === 'large' ? 'var(--card-height-lg, 500px)' : 'var(--card-height-md, 350px)',
      }}
    >
      {/* Glare/Shine effect */}
      <motion.div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 5,
          background: "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.1) 0%, transparent 80%)",
          opacity: useTransform(mouseXSpring, [-0.5, 0.5], [0, 0.5]),
          pointerEvents: 'none',
        }}
      />

      {/* Project Image Container */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        overflow: 'hidden',
        transform: "translateZ(-50px)", // Push image back in 3D space
      }}>
        <motion.img 
          src={project.image} 
          alt={project.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.4,
            filter: 'grayscale(20%) brightness(0.8)',
          }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.95))`,
        }} />
      </div>

      {/* Content Container */}
      <div style={{ 
        position: 'relative', 
        zIndex: 2, 
        padding: '2.5rem',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        transform: "translateZ(50px)", // Pull content forward
      }}>
        <div style={{ marginBottom: 'auto' }}>
          <span style={{
            color: project.color,
            fontSize: '0.85rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.15rem',
            marginBottom: '0.75rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: project.color }} />
            {project.category}
          </span>
        </div>

        <div>
          <h3 style={{ 
            fontSize: project.size === 'large' ? '2.5rem' : '1.75rem', 
            marginBottom: '1rem',
            fontWeight: 800,
            letterSpacing: '-0.02em'
          }}>
            {project.title}
          </h3>
          <p style={{ 
            color: 'rgba(255, 255, 255, 0.7)', 
            fontSize: '1.1rem', 
            lineHeight: 1.6,
            marginBottom: '1.5rem',
            maxWidth: '500px'
          }}>
            {project.description}
          </p>
          
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginBottom: '2rem'
          }}>
            {project.tech.slice(0, 3).map(t => (
              <span key={t} style={{
                fontSize: '0.75rem',
                padding: '0.3rem 0.8rem',
                borderRadius: '2rem',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(5px)'
              }}>
                {t}
              </span>
            ))}
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <div style={{ display: 'flex', gap: '1.25rem' }}>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.repoUrl, '_blank');
                }}
                style={{ background: 'none', border: 'none', color: 'rgba(255, 255, 255, 0.5)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: 600, cursor: 'pointer' }}
              >
                <Code2 size={20} /> Repo
              </button>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.liveUrl, '_blank');
                }}
                style={{ background: 'none', border: 'none', color: 'rgba(255, 255, 255, 0.5)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: 600, cursor: 'pointer' }}
              >
                <ExternalLink size={20} /> Live
              </button>
            </div>
            <ArrowUpRight size={24} style={{ color: project.color }} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const BentoGrid = ({ onProjectClick }) => {
  return (
    <section id="projects" className="section-container" style={{ perspective: '1000px' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: '4rem' }}
      >
        <span style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Portfolio</span>
        <h2 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', marginBottom: '1.5rem', fontWeight: 900, letterSpacing: '-0.04em' }}>
          Crafted with <span className="text-gradient">Precision.</span>
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '1.3rem', maxWidth: '650px', lineHeight: 1.6 }}>
          Building digital products that combine beautiful design with exceptional engineering.
        </p>
      </motion.div>

      <div 
        className="projects-grid"
        style={{
          display: 'grid',
          gap: '2.5rem',
        }}
      >
        {projects.map((project, index) => (
          <ProjectCard 
            key={index} 
            project={project} 
            index={index} 
            onClick={onProjectClick} 
          />
        ))}
      </div>
    </section>
  );
};

export default BentoGrid;

