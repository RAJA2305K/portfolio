# 🎯 Quick Reference - All Animation Classes

## Hover Effects (Apply directly to elements)

```
.hover-lift           - Element lifts up on hover
.hover-scale          - Element scales on hover
.hover-glow           - Adds glowing effect on hover
.hover-color-shift    - Text color shifts + glow on hover
.bounce-hover         - Element bounces on hover
```

## Cards & Containers

```
.card-hover-lift      - Card lifts and scales up on hover
.card-hover-border    - Animated gradient border on hover
.glow-card           - Card with glow effect
.interactive         - Interactive element with ripple feedback
```

## Buttons

```
.btn-hover-glow      - Button with ripple glow effect on hover
.smooth-transition   - Smooth 0.3s transition
.smooth-transition-slow - Smooth 0.6s transition
```

## Text Effects

```
.text-underline-hover    - Underline reveals on hover
.text-gradient          - Gradient text color
.shimmer-text           - Shimmer animation on text
.hover-color-shift      - Color shifts on hover
.smooth-link            - Link with animated underline
.gradient-animated      - Animated gradient background
```

## Entrance Animations (Apply once on load)

```
.animate-entrance        - Slides up from bottom
.animate-entrance-down   - Slides down from top
.animate-entrance-left   - Slides from left
.animate-entrance-right  - Slides from right
.animate-scale          - Scales in
.animate-rotate         - Rotates in
```

## Continuous & Micro-Interactions

```
.pulse-glow         - Pulsing glow effect (repeating)
.float-element      - Floating up/down animation (repeating)
.smooth-rotate      - Continuous smooth rotation
.bounce-hover       - Bounces on hover
.parallax           - Parallax scroll effect
.parallax-element   - Enhanced parallax element
```

## Staggered Animations

```
.stagger-child      - Add to children for staggered entrance
                      (Automatically staggers: 0.1s, 0.2s, 0.3s, etc.)
```

## 3D Effects

```
.perspective        - Container for 3D effects
.transform-3d       - Enable 3D transforms
.rotate-3d         - 3D rotation on hover
.preserve-3d       - Preserve 3D transforms on children
.backface-hidden   - Hide backface in 3D transforms
```

## Utility Classes

```
.reveal             - Hidden by default, shows when .visible added
.reveal.visible     - Triggered by scroll
.smooth-link        - Link with smooth animation
.scroll-progress    - Scroll progress bar (fixed)
```

---

## Usage Patterns

### Pattern 1: Hover Effects
```jsx
<div className="hover-lift">
  Hover to lift
</div>
```

### Pattern 2: Card with Multiple Effects
```jsx
<div className="card-hover-lift card-hover-border interactive">
  Advanced card
</div>
```

### Pattern 3: Text with Effects
```jsx
<h2 className="text-gradient hover-color-shift">
  Title
</h2>

<a className="text-underline-hover">Link</a>
```

### Pattern 4: Entrance Animation
```jsx
<div className="animate-entrance">
  Content
</div>
```

### Pattern 5: Staggered List
```jsx
<ul>
  <li className="stagger-child">Item 1</li>
  <li className="stagger-child">Item 2</li>
  <li className="stagger-child">Item 3</li>
</ul>
```

### Pattern 6: 3D Container
```jsx
<div className="perspective">
  <div className="rotate-3d">
    3D Content
  </div>
</div>
```

### Pattern 7: Button
```jsx
<button className="btn-hover-glow interactive">
  Click Me
</button>
```

### Pattern 8: Parallax Section
```jsx
<section className="parallax-element">
  Content that parallaxes on scroll
</section>
```

---

## Animation Timing

- **Entrance animations**: 0.6s
- **Hover effects**: 0.3s (smooth transition)
- **Micro-interactions**: 2-4s (continuous)
- **3D effects**: 0.6s
- **Button ripple**: 0.6s

---

## Color References

Use CSS variables for consistency:
```css
var(--primary)      /* Purple #8b5cf6 */
var(--secondary)    /* Pink #ec4899 */
var(--accent)       /* Blue #3b82f6 */
var(--foreground)   /* White text #f9fafb */
var(--background)   /* Dark bg #030712 */
var(--muted)        /* Gray text #9ca3af */
```

---

## Combining Classes (Best Practices)

### Simple hover effect
```jsx
<div className="hover-lift">Content</div>
```

### Enhanced card
```jsx
<div className="card-hover-lift card-hover-border interactive">Content</div>
```

### Button with glow
```jsx
<button className="btn-hover-glow interactive smooth-transition">Action</button>
```

### Text section
```jsx
<section>
  <h2 className="text-gradient animate-entrance">Title</h2>
  <p className="animate-entrance" style={{animationDelay: '0.1s'}}>Paragraph</p>
</section>
```

### Full featured section
```jsx
<section className="parallax-element perspective">
  <div className="stagger-child animate-entrance">
    <h3 className="text-underline-hover hover-color-shift">Feature</h3>
  </div>
</section>
```

---

## Debug Tip

To see animations in development:
- Open DevTools
- Slow down animations in Performance tab
- Check animation timings
- Verify no duplicate classes causing conflicts

---

## Mobile Considerations

- Parallax effects work on mobile
- 3D effects have fallbacks
- Custom cursor disabled on mobile
- Touch events don't trigger cursor effects
- All animations are performance optimized

---

## Performance Tips

1. ✅ Use CSS classes for simple effects
2. ✅ Use Framer Motion for complex animations
3. ✅ Apply `will-change` to frequently animated elements
4. ✅ Use `once: true` in viewport animations
5. ✅ Batch animations with stagger containers
6. ✅ Avoid animating layout properties directly
7. ✅ Test on mobile devices
8. ✅ Use DevTools Performance tab to check FPS

---

## Accessibility

- ✅ Respects `prefers-reduced-motion`
- ✅ Animations don't interfere with navigation
- ✅ Color not sole indicator of information
- ✅ Sufficient color contrast maintained
- ✅ Keyboard navigation preserved

