'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ConsultationPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main
      style={{
        background: 'var(--color-background)',
        minHeight: '100vh',
        paddingTop: '12rem',
        paddingBottom: '8rem',
        paddingLeft: '5%',
        paddingRight: '5%',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* FLOATING AMBIENT ORB */}
      <div 
        style={{
          position: 'absolute',
          top: '-10%',
          left: '-10%',
          width: '40vw',
          height: '40vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139, 90, 43, 0.04), transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          containerType: 'inline-size',
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1.1fr',
          gap: '5rem',
          alignItems: 'center',
          position: 'relative',
          zIndex: 10,
        }}
        className="consult-grid"
      >
        {/* Left Column: Context & Image */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', alignItems: 'flex-start' }}>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '11px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: 'var(--color-secondary)',
                background: 'var(--color-secondary-container)',
                padding: '6px 14px',
                borderRadius: '100px',
              }}
            >
              Reserve
            </span>
            <h1
              style={{
                fontFamily: 'var(--font-garamond)',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 500,
                color: 'var(--color-primary)',
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              Book a Consultation
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '16px',
                lineHeight: 1.7,
                color: 'var(--color-on-surface-variant)',
                maxWidth: '460px',
                margin: 0,
              }}
            >
              Step into a space of deep restoration. Share your details with us, and Dr. Mohan Rao will curate a bespoke healing journey rooted in ancestral Ayurvedic wisdom and somatic grounding.
            </p>
          </div>

          {/* Elegant Circular/Oval Cropped Image */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '440px',
              aspectRatio: '1.2/1',
              borderRadius: '2rem',
              overflow: 'hidden',
              boxShadow: '0 15px 35px rgba(17, 36, 28, 0.05)',
              border: '1.5px solid rgba(17, 36, 28, 0.06)',
            }}
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCP1ShFRc-svFdR-v_eSpYvJ4FwujzIwCA71vLLW690RvGCTuzmZHVJrPEobSTmdOsIR5O5JkneEFwKZMlx616YXEEjpJbNjsd2mJtZrWZTtJPLWCE8R_iP8MQXvgVCH_ZdLQga_PFrWgc2asPBcYbF_FrfAr0lu2p9nzULWbuRS56hnC00dyYYmTCWjFdbsGcnHc2caT1Gj_SxXtbqVmmTub3P9QsRMwKj1c70iAwQuOyjnJcjxw9eh8nuRuAiWt2IJiNHVl3JB4I"
              alt="Traditional Ayurvedic apothecary elements"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Right Column: Clean Minimal Form */}
        <div>
          {submitted ? (
            <div
              style={{
                background: 'var(--color-surface-container)',
                border: '1.5px solid rgba(17, 36, 28, 0.06)',
                borderRadius: '2.5rem',
                padding: '5rem 4rem',
                textAlign: 'center',
                boxShadow: '0 12px 40px rgba(17, 36, 28, 0.03)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1.5rem',
              }}
            >
              <span className="material-icons" style={{ fontSize: '64px', color: 'var(--color-secondary)' }}>
                check_circle
              </span>
              <h2 style={{ fontFamily: 'var(--font-garamond)', fontSize: '2.25rem', fontWeight: 500, color: 'var(--color-primary)', margin: 0 }}>
                Your Journey Begins
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '15px',
                  lineHeight: 1.7,
                  color: 'var(--color-on-surface-variant)',
                  maxWidth: '380px',
                  margin: '0 auto 1.5rem',
                }}
              >
                We have received your request. Dr. Mohan Rao’s office will reach out within 24 hours to confirm your private session details.
              </p>
              <Link
                href="/"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: 'var(--color-on-primary)',
                  background: 'var(--color-primary)',
                  padding: '14px 36px',
                  borderRadius: '100px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 15px rgba(17, 36, 28, 0.15)',
                  transition: 'background 0.3s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'var(--color-secondary)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'var(--color-primary)'}
              >
                Return Home
              </Link>
            </div>
          ) : (
            <div
              style={{
                background: 'var(--color-surface-container)',
                border: '1.5px solid rgba(17, 36, 28, 0.06)',
                borderRadius: '2.5rem',
                padding: '4.5rem 4rem',
                boxShadow: '0 12px 40px rgba(17, 36, 28, 0.03)',
              }}
            >
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                
                {/* Full Name */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label
                    htmlFor="fullName"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '11px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.15em',
                      color: 'var(--color-secondary)',
                    }}
                  >
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    placeholder="E.g. Isabella Swan"
                    style={{
                      width: '100%',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '15px',
                      color: 'var(--color-primary)',
                      backgroundColor: 'rgba(17, 36, 28, 0.03)',
                      border: '1px solid rgba(17, 36, 28, 0.1)',
                      borderRadius: '100px',
                      padding: '14px 20px',
                      outline: 'none',
                      transition: 'all 0.3s ease',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-secondary)';
                      e.currentTarget.style.backgroundColor = '#ffffff';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(17, 36, 28, 0.1)';
                      e.currentTarget.style.backgroundColor = 'rgba(17, 36, 28, 0.03)';
                    }}
                  />
                </div>

                {/* Email & Phone Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="form-row">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label
                      htmlFor="email"
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '11px',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.15em',
                        color: 'var(--color-secondary)',
                      }}
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="hello@example.com"
                      style={{
                        width: '100%',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '15px',
                        color: 'var(--color-primary)',
                        backgroundColor: 'rgba(17, 36, 28, 0.03)',
                        border: '1px solid rgba(17, 36, 28, 0.1)',
                        borderRadius: '100px',
                        padding: '14px 20px',
                        outline: 'none',
                        transition: 'all 0.3s ease',
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = 'var(--color-secondary)';
                        e.currentTarget.style.backgroundColor = '#ffffff';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(17, 36, 28, 0.1)';
                        e.currentTarget.style.backgroundColor = 'rgba(17, 36, 28, 0.03)';
                      }}
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label
                      htmlFor="phone"
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '11px',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.15em',
                        color: 'var(--color-secondary)',
                      }}
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      style={{
                        width: '100%',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '15px',
                        color: 'var(--color-primary)',
                        backgroundColor: 'rgba(17, 36, 28, 0.03)',
                        border: '1px solid rgba(17, 36, 28, 0.1)',
                        borderRadius: '100px',
                        padding: '14px 20px',
                        outline: 'none',
                        transition: 'all 0.3s ease',
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = 'var(--color-secondary)';
                        e.currentTarget.style.backgroundColor = '#ffffff';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(17, 36, 28, 0.1)';
                        e.currentTarget.style.backgroundColor = 'rgba(17, 36, 28, 0.03)';
                      }}
                    />
                  </div>
                </div>

                {/* Treatment Focus */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label
                    htmlFor="treatment"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '11px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.15em',
                      color: 'var(--color-secondary)',
                    }}
                  >
                    Preferred Focus
                  </label>
                  <div style={{ position: 'relative' }}>
                    <select
                      id="treatment"
                      name="treatment"
                      style={{
                        width: '100%',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '15px',
                        color: 'var(--color-primary)',
                        backgroundColor: 'rgba(17, 36, 28, 0.03)',
                        border: '1px solid rgba(17, 36, 28, 0.1)',
                        borderRadius: '100px',
                        padding: '14px 20px',
                        outline: 'none',
                        cursor: 'pointer',
                        appearance: 'none',
                        transition: 'all 0.3s ease',
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = 'var(--color-secondary)';
                        e.currentTarget.style.backgroundColor = '#ffffff';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(17, 36, 28, 0.1)';
                        e.currentTarget.style.backgroundColor = 'rgba(17, 36, 28, 0.03)';
                      }}
                      defaultValue=""
                    >
                      <option value="" disabled style={{ color: 'rgba(17, 36, 28, 0.4)' }}>Select an area of focus</option>
                      <option value="dosha">Dosha Balancing Assessment</option>
                      <option value="panchakarma">Panchakarma Consultation</option>
                      <option value="skin">Radiance &amp; Skin Rituals</option>
                      <option value="womens">Women&apos;s Wellness</option>
                      <option value="chronic">Chronic Disease Management</option>
                      <option value="general">General Wellness Inquiry</option>
                    </select>
                    <span 
                      className="material-icons" 
                      style={{ 
                        position: 'absolute', 
                        right: '20px', 
                        top: '50%', 
                        transform: 'translateY(-50%)', 
                        color: 'var(--color-secondary)',
                        pointerEvents: 'none'
                      }}
                    >
                      expand_more
                    </span>
                  </div>
                </div>

                {/* Concern */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label
                    htmlFor="concern"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '11px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.15em',
                      color: 'var(--color-secondary)',
                    }}
                  >
                    Primary Concern
                  </label>
                  <textarea
                    id="concern"
                    name="concern"
                    rows={4}
                    placeholder="Please briefly describe what brings you to us..."
                    style={{
                      width: '100%',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '15px',
                      color: 'var(--color-primary)',
                      backgroundColor: 'rgba(17, 36, 28, 0.03)',
                      border: '1px solid rgba(17, 36, 28, 0.1)',
                      borderRadius: '1.5rem',
                      padding: '18px 20px',
                      outline: 'none',
                      resize: 'none',
                      transition: 'all 0.3s ease',
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-secondary)';
                      e.currentTarget.style.backgroundColor = '#ffffff';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(17, 36, 28, 0.1)';
                      e.currentTarget.style.backgroundColor = 'rgba(17, 36, 28, 0.03)';
                    }}
                  />
                </div>

                {/* Submit Button */}
                <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <button
                    type="submit"
                    style={{
                      width: '100%',
                      fontFamily: 'var(--font-sans)',
                      fontSize: '13px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.15em',
                      color: 'var(--color-on-primary)',
                      backgroundColor: 'var(--color-primary)',
                      border: 'none',
                      borderRadius: '100px',
                      padding: '18px 0',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 15px rgba(17, 36, 28, 0.15)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'var(--color-secondary)';
                      e.currentTarget.style.transform = 'translateY(-1px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'var(--color-primary)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    Request Consultation <span className="material-icons" style={{ fontSize: '18px' }}>arrow_forward</span>
                  </button>
                  <p 
                    style={{ 
                      fontFamily: 'var(--font-sans)', 
                      fontSize: '9px', 
                      fontWeight: 700, 
                      textTransform: 'uppercase', 
                      letterSpacing: '0.2em', 
                      color: 'var(--color-on-surface-variant)', 
                      opacity: 0.6,
                      textAlign: 'center',
                      margin: 0
                    }}
                  >
                    YOUR INFORMATION IS SECURE &amp; CONFIDENTIAL
                  </p>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .consult-grid {
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
          }
          .form-row {
            grid-template-columns: 1fr !important;
            gap: 1.75rem !important;
          }
        }
      `}</style>
    </main>
  );
}
