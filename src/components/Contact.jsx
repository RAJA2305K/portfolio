import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, Phone, Code2, User2, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import emailjs from 'emailjs-com';

const contactLinks = [
  { icon: Mail,  label: 'Email', value: 'rajasmily2@gmail.com', href: 'mailto:rajasmily2@gmail.com', color: '#8b5cf6', glow: 'rgba(139,92,246,0.5)' },
  { icon: Phone, label: 'Phone', value: '+91 9944295882',       href: 'tel:+919944295882',           color: '#ec4899', glow: 'rgba(236,72,153,0.5)'  },
  { icon: User2, label: 'LinkedIn', value: 'Raja K',            href: 'https://linkedin.com/in/rajak23', color: '#0ea5e9', glow: 'rgba(14,165,233,0.5)' },
  { icon: Code2, label: 'GitHub', value: 'RAJA2305K',           href: 'https://github.com/RAJA2305K',    color: '#10b981', glow: 'rgba(16,185,129,0.5)' },
];

/* ---------- Input with animated border ---------- */
const GlowInput = ({ as: Tag = 'input', label, ...props }) => {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
      <label style={{
        fontSize: '0.78rem', fontWeight: 700,
        textTransform: 'uppercase', letterSpacing: '0.1em',
        color: focused ? 'var(--primary)' : 'rgba(255,255,255,0.4)',
        transition: 'color 0.3s ease',
      }}>{label}</label>
      <div style={{ position: 'relative' }}>
        <Tag
          {...props}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            width: '100%',
            padding: Tag === 'textarea' ? '0.85rem 1rem' : '0.85rem 1rem',
            borderRadius: '0.9rem',
            background: 'rgba(10,15,30,0.6)',
            border: `1.5px solid ${focused ? 'var(--primary)' : 'rgba(255,255,255,0.08)'}`,
            color: 'white',
            fontSize: '0.95rem',
            outline: 'none',
            resize: Tag === 'textarea' ? 'none' : undefined,
            fontFamily: 'inherit',
            transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
            boxShadow: focused ? '0 0 0 3px rgba(139,92,246,0.15)' : 'none',
            backdropFilter: 'blur(8px)',
          }}
        />
        {/* Bottom glow bar */}
        <motion.div
          animate={{ scaleX: focused ? 1 : 0, opacity: focused ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'absolute',
            bottom: 0,
            left: '10%',
            right: '10%',
            height: '2px',
            background: 'linear-gradient(to right, var(--primary), var(--secondary))',
            borderRadius: '2px',
            transformOrigin: 'center',
          }}
        />
      </div>
    </div>
  );
};

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then(() => { setSubmitStatus('success'); form.current.reset(); },
            () => { setSubmitStatus('error'); })
      .finally(() => { setIsSubmitting(false); setTimeout(() => setSubmitStatus(null), 5000); });
  };

  return (
    <section id="contact" className="section-container" style={{ position: 'relative' }}>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginBottom: '3.5rem' }}
      >
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          color: 'var(--primary)', fontWeight: 700, fontSize: '0.8rem',
          textTransform: 'uppercase', letterSpacing: '0.3em', marginBottom: '1rem'
        }}>
          <Sparkles size={14} /> Let's Connect
        </span>
        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '0.75rem' }}>
          Send a <span className="text-gradient">Message</span>
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '1.05rem', maxWidth: '500px', margin: '0 auto', lineHeight: 1.6 }}>
          Have a project or just want to say hi? Drop a message — I'll get back to you soon.
        </p>
      </motion.div>

      {/* Main layout */}
      <div className="contact-grid" style={{
        display: 'grid',
        gap: '2.5rem',
        maxWidth: '1000px',
        margin: '0 auto',
        alignItems: 'stretch'
      }}>
        {/* ── Left: Contact Info Cards ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          {contactLinks.map((info, idx) => (
            <motion.a
              key={idx}
              href={info.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -40, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: idx * 0.12, type: 'spring', stiffness: 160, damping: 18 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, x: 6 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                padding: '1.1rem 1.4rem',
                borderRadius: '1.25rem',
                background: 'rgba(10, 15, 30, 0.7)',
                border: `1px solid ${info.color}30`,
                textDecoration: 'none',
                color: 'inherit',
                position: 'relative',
                overflow: 'hidden',
                backdropFilter: 'blur(12px)',
                boxShadow: `0 4px 24px ${info.color}15`,
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = info.color + '80';
                e.currentTarget.style.boxShadow = `0 8px 32px ${info.color}35`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = info.color + '30';
                e.currentTarget.style.boxShadow = `0 4px 24px ${info.color}15`;
              }}
            >
              {/* Background glow streak */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `linear-gradient(120deg, ${info.color}08 0%, transparent 60%)`,
                  pointerEvents: 'none',
                  borderRadius: 'inherit',
                }}
              />

              {/* Glowing Circle Icon */}
              <motion.div
                whileHover={{ scale: 1.15, rotate: 8 }}
                transition={{ type: 'spring', stiffness: 300 }}
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: `radial-gradient(circle at 35% 35%, ${info.color}30, ${info.color}08)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: info.color,
                  border: `1.5px solid ${info.color}50`,
                  flexShrink: 0,
                  boxShadow: `0 0 16px ${info.color}30`,
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                <info.icon size={20} strokeWidth={2.2} />
              </motion.div>

              {/* Text */}
              <div style={{ position: 'relative', zIndex: 1, flex: 1 }}>
                <p style={{
                  fontSize: '0.72rem',
                  color: info.color,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  marginBottom: '0.2rem',
                }}>
                  {info.label}
                </p>
                <p style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: 'rgba(255,255,255,0.85)',
                  wordBreak: 'break-all',
                }}>
                  {info.value}
                </p>
              </div>

              {/* Arrow indicator */}
              <motion.div
                initial={{ x: 0, opacity: 0 }}
                whileHover={{ x: 4, opacity: 1 }}
                style={{
                  color: info.color,
                  fontSize: '1.2rem',
                  fontWeight: 900,
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                →
              </motion.div>
            </motion.a>
          ))}
        </div>

        {/* ── Right: Message Form ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ flex: 1, width: '100%' }}
        >
          <div className="glass" style={{
            padding: '2.5rem',
            borderRadius: '2rem',
            background: 'rgba(10,15,30,0.7)',
            border: '1px solid rgba(139,92,246,0.2)',
            backdropFilter: 'blur(16px)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Corner glow */}
            <div style={{
              position: 'absolute', top: 0, right: 0,
              width: '200px', height: '200px',
              background: 'radial-gradient(circle at top right, rgba(139,92,246,0.12), transparent 70%)',
              pointerEvents: 'none',
            }} />

            <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
              {/* Name + Email row */}
              <div className="contact-form-grid" style={{ display: 'grid', gap: '1.2rem' }}>
                <GlowInput label="Your Name" type="text" name="user_name" required placeholder="Raja K" />
                <GlowInput label="Your Email" type="email" name="user_email" required placeholder="raja@gmail.com" />
              </div>

              <GlowInput label="Subject" type="text" name="subject" required placeholder="Project Inquiry" />

              <GlowInput as="textarea" label="Message" name="message" required rows={5}
                placeholder="Hi Raja, I'd love to work with you on..." />

              {/* Submit button */}
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(139,92,246,0.5)' }}
                whileTap={{ scale: 0.97 }}
                disabled={isSubmitting}
                type="submit"
                style={{
                  padding: '1rem 2rem',
                  borderRadius: '1rem',
                  background: isSubmitting
                    ? 'rgba(139,92,246,0.4)'
                    : 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                  color: 'white',
                  border: 'none',
                  fontSize: '1rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  letterSpacing: '0.04em',
                  boxShadow: '0 8px 24px rgba(139,92,246,0.3)',
                  transition: 'all 0.3s ease',
                  marginTop: '0.5rem',
                }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      style={{ width: 18, height: 18, border: '2px solid rgba(255,255,255,0.3)', borderTopColor: 'white', borderRadius: '50%' }}
                    />
                    Sending...
                  </>
                ) : (
                  <>Send Message <Send size={18} /></>
                )}
              </motion.button>

              {/* Status */}
              <AnimatePresence>
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '0.75rem',
                      padding: '0.9rem 1.2rem', borderRadius: '0.9rem',
                      background: submitStatus === 'success' ? 'rgba(34,197,94,0.1)' : 'rgba(239,68,68,0.1)',
                      border: `1px solid ${submitStatus === 'success' ? '#22c55e' : '#ef4444'}`,
                      color: submitStatus === 'success' ? '#22c55e' : '#ef4444',
                      fontSize: '0.9rem', fontWeight: 600,
                    }}
                  >
                    {submitStatus === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
                    {submitStatus === 'success' ? 'Message sent successfully! I\'ll get back to you soon.' : 'Something went wrong. Please try again.'}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Background glow */}
      <div style={{
        position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',
        width: '100%', height: '300px',
        background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: -1,
      }} />
    </section>
  );
};

export default Contact;
