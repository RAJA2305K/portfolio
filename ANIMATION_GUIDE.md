# Animation & Effects Implementation Guide

This guide shows how to use the new animations, effects, and interactive elements added to your portfolio.

## Features Added

### 1. Enhanced Custom Cursor
- Larger hover effect with color change
- Click ripple animation
- Trailing particles on interaction
- More responsive and smooth movements

### 2. Smooth Page Loader
- Animated loading circle with gradient
- Bouncing dots animation
- Smooth fade-out transition
- Displays for initial page load

### 3. CSS Animations & Effects

#### Hover Effects
```jsx
// Lift on hover
<div className="hover-lift">Content</div>

// Scale on hover
<div className="hover-scale">Content</div>

// Glow on hover
<div className="hover-glow">Content</div>

// Color shift with glow
<div className="hover-color-shift">Text</div>
```

#### Entrance Reveal Animations
```jsx
// Slide up entrance
<div className="animate-entrance">Content</div>

// Slide down entrance
<div className="animate-entrance-down">Content</div>

// Slide left entrance
<div className="animate-entrance-left">Content</div>

// Slide right entrance
<div className="animate-entrance-right">Content</div>

// Scale entrance
<div className="animate-scale">Content</div>

// Rotate entrance
<div className="animate-rotate">Content</div>
```

#### Parallax Effects
```jsx
// Use parallax element
<div className="parallax-element">Content</div>

// Use the useParallax hook in components
import { useParallax } from '../hooks/useAnimations';

const Component = () => {
  const y = useParallax(50); // 50px offset
  return <motion.div style={{ y }}>Content</motion.div>;
};
```

#### Micro Interactions
```jsx
// Pulse glow effect
<div className="pulse-glow">Content</div>

// Bounce on hover
<div className="bounce-hover">Content</div>

// Shimmer text effect
<div className="shimmer-text">Text</div>

// Floating element
<div className="float-element">Content</div>

// Smooth rotating element
<div className="smooth-rotate">Icon</div>
```

#### 3D Motion Effects
```jsx
// 3D rotation on hover
<div className="rotate-3d">Content</div>

// Perspective container
<div className="perspective">
  <div className="transform-3d">3D Content</div>
</div>
```

#### Advanced Button Effects
```jsx
// Button with glow ripple effect
<button className="btn-hover-glow">Click Me</button>

// Interactive button (automatically styled)
<button className="interactive">Interactive</button>
```

#### Card Hover Effects
```jsx
// Card that lifts and scales
<div className="card-hover-lift">Card Content</div>

// Card with animated border
<div className="card-hover-border">Card Content</div>
```

#### Text Effects
```jsx
// Underline reveal on hover
<a className="text-underline-hover">Link Text</a>

// Smooth link
<a href="#" className="smooth-link">Smooth Link</a>

// Animated gradient text
<p className="gradient-animated">Gradient Text</p>
```

## Using Framer Motion Animations

### Import animation variants
```jsx
import {
  slideInUp,
  slideInRight,
  scaleIn,
  staggerContainer,
  hoverScale,
  hoverLift,
  float,
  pulse,
} from '../utils/animations';

export const Component = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h1 variants={slideInUp}>Title</motion.h1>
      <motion.p variants={slideInUp}>Paragraph</motion.p>
    </motion.div>
  );
};
```

## Custom Hooks for Animations

### useParallax Hook
```jsx
import { useParallax } from '../hooks/useAnimations';

const Component = () => {
  const y = useParallax(100); // Parallax with 100px offset
  return <motion.div style={{ y }}>Parallax Content</motion.div>;
};
```

### useInView Hook
```jsx
import { useInView } from '../hooks/useAnimations';

const Component = () => {
  const { ref, isInView } = useInView();
  return (
    <motion.div
      ref={ref}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
    >
      Content that animates when in view
    </motion.div>
  );
};
```

### useMouseTilt Hook
```jsx
import { useMouseTilt } from '../hooks/useAnimations';

const Component = () => {
  const { handleMouseMove, handleMouseLeave, rotateX, rotateY } = useMouseTilt();
  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, perspective: 1000 }}
    >
      3D Tilt Effect
    </motion.div>
  );
};
```

## Staggered Animations

Add staggered animations to multiple children:
```jsx
<div>
  <div className="stagger-child">Item 1</div>
  <div className="stagger-child">Item 2</div>
  <div className="stagger-child">Item 3</div>
  <div className="stagger-child">Item 4</div>
</div>
```

Each child will animate with a staggered delay.

## Interactive Elements

Use the `.interactive` class for automatic pointer feedback:
```jsx
<div className="interactive">
  Click me!
</div>
```

## Combining Effects

You can combine multiple classes for enhanced effects:
```jsx
<button className="btn-hover-glow interactive hover-lift">
  Enhanced Button
</button>

<div className="card-hover-lift card-hover-border parallax-element">
  Advanced Card
</div>
```

## Performance Tips

1. Use `will-change` on elements that will animate
2. Batch animations with Framer Motion containers
3. Use `once: true` in viewport settings to prevent re-animation
4. Combine CSS animations (simpler) with JS animations (complex)
5. Consider `prefers-reduced-motion` for accessibility (already included)

## Browser Compatibility

All effects are compatible with modern browsers:
- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support (with -webkit- prefixes where needed)
- Mobile: Most effects work, custom cursor disabled

## Accessibility

The implementation includes:
- Reduced motion support for users with motion sensitivity
- Semantic HTML
- Proper color contrast
- Keyboard navigation support
