import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, Phone, Code2, User2, MessageSquare, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error'

  const contactInfo = [
    { 
      icon: Mail, 
      label: 'Email', 
      value: 'rajasmily2@gmail.com', 
      href: 'mailto:rajasmily2@gmail.com',
      color: 'var(--primary)'
    },
    { 
      icon: Phone, 
      label: 'Phone', 
      value: '+91 9944295882', 
      href: 'tel:+91 9944295882',
      color: 'var(--secondary)'
    },
    { 
      icon: User2, 
      label: 'LinkedIn', 
      value: 'Raja K', 
      href: 'https://linkedin.com/in/rajak23',
      color: '#0077b5'
    },
    { 
      icon: Code2, 
      label: 'GitHub', 
      value: 'RAJA2305K', 
      href: 'https://github.com/RAJA2305K',
      color: '#333'
    }
  ];

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Note: You'll need to replace these with your actual EmailJS credentials
    // service_id, template_id, public_key
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          setSubmitStatus('success');
          form.current.reset();
      }, (error) => {
          setSubmitStatus('error');
      })
      .finally(() => {
          setIsSubmitting(false);
          setTimeout(() => setSubmitStatus(null), 5000);
      });
  };

  return (
    <section id="contact" className="section-container" style={{ position: 'relative' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginBottom: '4rem' }}
      >
        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '1rem' }}>
          Get in <span className="text-gradient">Touch</span>
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
          Have a project in mind or just want to chat? Reach out via the form or any of my socials.
        </p>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '3rem',
        maxWidth: '1100px',
        margin: '0 auto',
      }}>
        {/* Left Column: Contact Info Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {contactInfo.map((info, idx) => (
            <motion.a
              key={idx}
              href={info.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ x: 10, background: 'rgba(255, 255, 255, 0.05)' }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                padding: '1.5rem',
                borderRadius: '1.5rem',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid var(--glass-border)',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'all 0.3s ease',
              }}
            >
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '12px',
                background: `${info.color}15`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: info.color,
                border: `1px solid ${info.color}30`,
              }}>
                <info.icon size={24} />
              </div>
              <div>
                <p style={{ fontSize: '0.85rem', color: 'var(--muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{info.label}</p>
                <p style={{ fontSize: '1.1rem', fontWeight: 500 }}>{info.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Right Column: Contact Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass"
          style={{
            padding: '2.5rem',
            borderRadius: '2rem',
            border: '1px solid var(--glass-border)',
            background: 'rgba(15, 23, 42, 0.8)',
          }}
        >
          <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', color: 'var(--muted)', fontWeight: 500 }}>Your Name</label>
                <input 
                  type="text" 
                  name="user_name" 
                  required 
                  className="glass-input"
                  placeholder="John Doe"
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.9rem', color: 'var(--muted)', fontWeight: 500 }}>Your Email</label>
                <input 
                  type="email" 
                  name="user_email" 
                  required 
                  className="glass-input"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.9rem', color: 'var(--muted)', fontWeight: 500 }}>Subject</label>
              <input 
                type="text" 
                name="subject" 
                required 
                className="glass-input"
                placeholder="Project Inquiry"
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.9rem', color: 'var(--muted)', fontWeight: 500 }}>Message</label>
              <textarea 
                name="message" 
                required 
                rows="5"
                className="glass-input"
                placeholder="Hi Raja, I'd like to talk about..."
                style={{ resize: 'none' }}
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
              type="submit"
              className="primary-btn"
              style={{
                padding: '1.2rem',
                borderRadius: '1rem',
                background: 'var(--primary)',
                color: 'white',
                border: 'none',
                fontSize: '1.1rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.8rem',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                opacity: isSubmitting ? 0.7 : 1,
                marginTop: '1rem',
              }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              <Send size={20} />
            </motion.button>

            <AnimatePresence>
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '1rem',
                    borderRadius: '0.75rem',
                    background: submitStatus === 'success' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                    border: `1px solid ${submitStatus === 'success' ? '#22c55e' : '#ef4444'}`,
                    color: submitStatus === 'success' ? '#22c55e' : '#ef4444',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                  }}
                >
                  {submitStatus === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
                  {submitStatus === 'success' ? 'Message sent successfully!' : 'Something went wrong. Please try again.'}
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>

      {/* Decorative Blur */}
      <div style={{
        position: 'absolute',
        bottom: '0',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        height: '300px',
        background: 'radial-gradient(circle, var(--primary-glow) 0%, transparent 70%)',
        opacity: 0.1,
        pointerEvents: 'none',
        zIndex: -1,
      }} />
    </section>
  );
};

export default Contact;
