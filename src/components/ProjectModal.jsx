import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Code2, Layers, Target, CheckCircle2 } from 'lucide-react';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 2000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
        }}>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.9)',
              backdropFilter: 'blur(15px)',
            }}
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="glass"
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '1100px',
              maxHeight: '95vh',
              overflowY: 'auto',
              borderRadius: '2.5rem',
              padding: '0',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 50px 100px -20px rgba(0, 0, 0, 0.7)',
              scrollbarWidth: 'none',
            }}
          >
            {/* Header / Banner / Image */}
            <div style={{
              height: '400px',
              position: 'relative',
              overflow: 'hidden',
            }}>
               <motion.img 
                 initial={{ scale: 1.1 }}
                 animate={{ scale: 1 }}
                 transition={{ duration: 0.8 }}
                 src={project.image} 
                 alt={project.title}
                 style={{
                   width: '100%',
                   height: '100%',
                   objectFit: 'cover',
                 }}
               />
               <div style={{
                 position: 'absolute',
                 inset: 0,
                 background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.8))',
               }} />
               
               <button 
                 onClick={onClose}
                 style={{
                   position: 'absolute',
                   top: '2rem',
                   right: '2rem',
                   background: 'rgba(255, 255, 255, 0.1)',
                   border: '1px solid rgba(255, 255, 255, 0.2)',
                   borderRadius: '50%',
                   width: '45px',
                   height: '45px',
                   display: 'flex',
                   alignItems: 'center',
                   justifyContent: 'center',
                   color: 'white',
                   cursor: 'pointer',
                   backdropFilter: 'blur(10px)',
                   zIndex: 10,
                 }}
               >
                 <X size={24} />
               </button>
               
               <div style={{
                 position: 'absolute',
                 bottom: '3rem',
                 left: '3rem',
                 right: '3rem',
               }}>
                 <motion.span 
                   initial={{ opacity: 0, x: -20 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ delay: 0.2 }}
                   style={{
                    backgroundColor: project.color,
                    padding: '0.4rem 1.2rem',
                    borderRadius: '2rem',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: 'white',
                    marginBottom: '1rem',
                    display: 'inline-block',
                    boxShadow: `0 10px 20px ${project.color}44`
                  }}
                 >
                   {project.category}
                 </motion.span>
                 <motion.h2 
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.3 }}
                   style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'white', fontWeight: 900, lineHeight: 1.1 }}
                 >
                   {project.title}
                 </motion.h2>
               </div>
            </div>

            {/* Body */}
            <div style={{ padding: '4rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '5rem' }}>
                {/* Left Column */}
                <div>
                  <h3 style={{ fontSize: '1.75rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 800 }}>
                    <Target size={26} color={project.color} /> Overview
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, fontSize: '1.2rem', marginBottom: '3rem' }}>
                    {project.description}
                  </p>

                  <h3 style={{ fontSize: '1.75rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 800 }}>
                    <Layers size={26} color={project.color} /> Tech Stack
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                    {project.tech.map(tech => (
                      <span key={tech} className="glass" style={{
                        padding: '0.6rem 1.5rem',
                        fontSize: '1rem',
                        fontWeight: 500,
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        background: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: '1rem',
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column */}
                <div>
                   <h3 style={{ fontSize: '1.75rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 800 }}>
                    <CheckCircle2 size={26} color={project.color} /> Key Features
                  </h3>
                  <ul style={{ listStyle: 'none', padding: '0' }}>
                    {project.features.map((feature, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + (i * 0.1) }}
                        style={{ 
                          display: 'flex', 
                          gap: '1.25rem', 
                          marginBottom: '1.5rem',
                          color: 'rgba(255,255,255,0.6)',
                          fontSize: '1.1rem',
                          lineHeight: 1.5
                        }}
                      >
                        <div style={{ color: project.color, marginTop: '4px' }}>
                          <CheckCircle2 size={18} />
                        </div>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  <div style={{ marginTop: '4rem', display: 'flex', gap: '1.5rem' }}>
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02, y: -5 }}
                      whileTap={{ scale: 0.98 }}
                      style={{
                        flex: 1,
                        padding: '1.25rem',
                        borderRadius: '1.25rem',
                        backgroundColor: 'white',
                        color: 'black',
                        textAlign: 'center',
                        fontWeight: 700,
                        fontSize: '1.1rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.75rem',
                        textDecoration: 'none',
                        boxShadow: '0 20px 40px rgba(255,255,255,0.1)'
                      }}
                    >
                      Live Demo <ExternalLink size={20} />
                    </motion.a>
                    <motion.a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02, y: -5 }}
                      whileTap={{ scale: 0.98 }}
                      style={{
                        flex: 1,
                        padding: '1.25rem',
                        borderRadius: '1.25rem',
                        border: '2px solid rgba(255,255,255,0.1)',
                        color: 'white',
                        textAlign: 'center',
                        fontWeight: 700,
                        fontSize: '1.1rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.75rem',
                        textDecoration: 'none'
                      }}
                    >
                      Source Code <Code2 size={20} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
