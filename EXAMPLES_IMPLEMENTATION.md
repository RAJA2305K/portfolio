/**
 * EXAMPLE: How to enhance your components with animations
 * This file serves as a reference for adding animations to your existing components
 */

// Example 1: Using CSS animation classes with Framer Motion
import { motion } from 'framer-motion';
import { useParallax, useInView } from './hooks/useAnimations';
import * as animations from './utils/animations';

// Enhanced Hero Section Example
export const EnhancedHeroExample = () => {
  const y = useParallax(100); // Parallax effect
  const { ref, isInView } = useInView(); // Reveal on scroll

  return (
    <motion.section
      ref={ref}
      id="enhanced-hero"
      className="section-container perspective"
      style={{ y }}
    >
      {/* Hero Title with stagger animation */}
      <motion.div
        variants={animations.staggerContainer}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <motion.h1
          variants={animations.slideInUp}
          className="hover-color-shift"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
        >
          Welcome to My Portfolio
        </motion.h1>

        <motion.p
          variants={animations.slideInUp}
          className="hover-glow"
          style={{ fontSize: '1.2rem', marginTop: '1rem' }}
        >
          Crafting beautiful, interactive experiences
        </motion.p>
      </motion.div>

      {/* CTA Button with enhanced hover */}
      <motion.button
        variants={animations.slideInUp}
        className="btn-hover-glow interactive smooth-transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{ marginTop: '2rem', padding: '1rem 2rem' }}
      >
        Explore My Work
      </motion.button>
    </motion.section>
  );
};

// Example 2: Card with all hover effects
export const EnhancedCardExample = () => {
  return (
    <motion.div
      className="card-hover-lift card-hover-border interactive"
      style={{
        padding: '2rem',
        borderRadius: '1rem',
        cursor: 'pointer',
      }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="perspective">
        <h3 className="text-underline-hover" style={{ marginBottom: '1rem' }}>
          Project Title
        </h3>
        <p className="hover-glow">Project description with hover effects</p>
      </div>
    </motion.div>
  );
};

// Example 3: Skill item with micro interactions
export const EnhancedSkillExample = () => {
  return (
    <motion.div
      className="hover-lift smooth-transition"
      whileHover={{ y: -8 }}
      style={{
        padding: '1.5rem',
        textAlign: 'center',
        borderRadius: '1rem',
      }}
    >
      <motion.div
        className="pulse-glow"
        style={{
          width: '60px',
          height: '60px',
          margin: '0 auto 1rem',
          borderRadius: '50%',
          background: 'var(--primary)',
        }}
      />
      <h4 className="shimmer-text">Skill Name</h4>
    </motion.div>
  );
};

// Example 4: Parallax section with reveal
export const EnhancedSectionExample = () => {
  const parallaxY = useParallax(50);

  return (
    <motion.section
      className="section-container"
      style={{ y: parallaxY }}
    >
      {/* Staggered entrance for multiple elements */}
      <div className="stagger-child">
        <h2>Section Title</h2>
      </div>
      <div className="stagger-child">
        <p>Description paragraph</p>
      </div>
      <div className="stagger-child">
        <button className="btn-hover-glow">Action</button>
      </div>
    </motion.section>
  );
};

// Example 5: Grid with staggered animations
export const EnhancedGridExample = () => {
  const items = [1, 2, 3, 4, 5, 6];

  return (
    <motion.div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem',
      }}
      variants={animations.staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {items.map((item) => (
        <motion.div
          key={item}
          variants={animations.scaleIn}
          className="card-hover-lift interactive"
          style={{
            padding: '2rem',
            borderRadius: '1rem',
            textAlign: 'center',
          }}
        >
          <div className="float-element">Item {item}</div>
        </motion.div>
      ))}
    </motion.div>
  );
};

// Example 6: Text with reveal animation
export const EnhancedTextExample = () => {
  return (
    <motion.div>
      <motion.h1
        className="animate-entrance"
        style={{ fontSize: '3rem', marginBottom: '1rem' }}
      >
        Animated Title
      </motion.h1>
      
      <motion.p
        className="stagger-child hover-color-shift"
        style={{ fontSize: '1.1rem', lineHeight: 1.7 }}
      >
        This text has smooth color shift and hover glow effects
      </motion.p>
    </motion.div>
  );
};

// Example 7: Feature item with 3D effect
export const EnhancedFeatureExample = () => {
  return (
    <motion.div
      className="rotate-3d card-hover-border interactive"
      style={{
        padding: '2rem',
        borderRadius: '1rem',
        cursor: 'pointer',
      }}
      whileHover={{
        rotateX: 5,
        rotateY: 5,
        scale: 1.05,
      }}
    >
      <h3 className="text-gradient">Feature Name</h3>
      <p>Feature description with 3D hover effect</p>
    </motion.div>
  );
};

// Example 8: How to implement in existing component
export const ComponentImplementationExample = () => {
  // Add to your existing component:
  // 1. Import animations
  // import * as animations from '../utils/animations';
  // import { useParallax } from '../hooks/useAnimations';

  // 2. Add CSS classes to JSX
  // <div className="hover-lift card-hover-border">
  //   <h3 className="text-underline-hover">Title</h3>
  //   <p className="hover-glow">Description</p>
  // </div>

  // 3. Wrap with motion div for advanced effects
  // <motion.div
  //   variants={animations.slideInUp}
  //   initial="initial"
  //   whileInView="animate"
  //   viewport={{ once: true }}
  // >
  //   Content
  // </motion.div>

  return null;
};

/**
 * QUICK INTEGRATION CHECKLIST
 * 
 * To add animations to your components:
 * 
 * 1. ✓ Import animation utilities
 *    import * as animations from '../utils/animations';
 *    import { useParallax } from '../hooks/useAnimations';
 * 
 * 2. ✓ Add CSS classes to elements
 *    className="hover-lift card-hover-border interactive"
 * 
 * 3. ✓ Wrap sections with Framer Motion
 *    <motion.div variants={animations.staggerContainer}>
 * 
 * 4. ✓ Add parallax to sections
 *    const y = useParallax(50);
 *    <motion.section style={{ y }}>
 * 
 * 5. ✓ Combine multiple effects
 *    className="hover-lift hover-glow smooth-transition"
 * 
 * 6. ✓ Test on different screen sizes
 *    Animations are responsive and mobile-friendly
 */
