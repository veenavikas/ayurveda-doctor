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
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10rem 5%',
        position: 'relative',
      }}
    >
      {/* Botanical watermark */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          overflow: 'hidden',
          opacity: 0.03,
          pointerEvents: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg aria-hidden="true" style={{ width: '120%', maxWidth: 'none', color: 'var(--color-primary)' }} fill="currentColor" viewBox="0 0 800 800">
          <path d="M400 0C400 0 450 150 550 200C650 250 800 200 800 200C800 200 750 350 700 450C650 550 800 800 800 800C800 800 600 700 500 750C400 800 400 800 400 800C400 800 400 800 300 750C200 700 0 800 0 800C0 800 150 550 100 450C50 350 0 200 0 200C0 200 150 250 250 200C350 150 400 0 400 0Z" />
        </svg>
      </div>

      <div
        className="container-max"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '4rem',
          position: 'relative',
          zIndex: 10,
          alignItems: 'start',
          width: '100%',
          maxWidth: '56rem',
        }}
      >
        {/* Left: Context */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          <div>
            <span className="font-label-caps" style={{ color: 'var(--color-secondary)', letterSpacing: '0.2em', display: 'block', marginBottom: '1rem' }}>Reserve</span>
            <h1 className="font-display-hero" style={{ color: 'var(--color-primary)', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Book a<br />Consultation
            </h1>
            <p className="font-body-lg" style={{ color: 'var(--color-on-surface-variant)', maxWidth: '28rem' }}>
              Step into a space of deep restoration. Share your concerns with us, and our practitioners will curate a bespoke healing journey rooted in ancestral Ayurvedic wisdom.
            </p>
          </div>
          {/* Decorative image */}
          <div style={{ position: 'relative', height: '16rem', overflow: 'hidden', borderRadius: '0.5rem' }}>
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCP1ShFRc-svFdR-v_eSpYvJ4FwujzIwCA71vLLW690RvGCTuzmZHVJrPEobSTmdOsIR5O5JkneEFwKZMlx616YXEEjpJbNjsd2mJtZrWZTtJPLWCE8R_iP8MQXvgVCH_ZdLQga_PFrWgc2asPBcYbF_FrfAr0lu2p9nzULWbuRS56hnC00dyYYmTCWjFdbsGcnHc2caT1Gj_SxXtbqVmmTub3P9QsRMwKj1c70iAwQuOyjnJcjxw9eh8nuRuAiWt2IJiNHVl3JB4I"
              alt="Traditional Ayurvedic apothecary elements"
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(20%) sepia(10%)' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(4,36,25,0.10)', mixBlendMode: 'multiply' }} />
          </div>
        </div>

        {/* Right: Form */}
        <div>
          {submitted ? (
            <div
              className="glass-panel"
              style={{ padding: '4rem 3rem', borderRadius: '0.5rem', textAlign: 'center' }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '3rem', color: 'var(--color-secondary-container)', marginBottom: '1.5rem', display: 'block' }}>check_circle</span>
              <h2 className="font-headline-lg" style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>Your Journey Begins</h2>
              <p className="font-body-lg" style={{ color: 'var(--color-on-surface-variant)', marginBottom: '2rem' }}>
                We have received your inquiry. Our practitioners will reach out within 24 hours to confirm your appointment.
              </p>
              <Link
                href="/"
                className="font-label-caps btn-shimmer"
                style={{ background: 'var(--color-primary)', color: 'var(--color-secondary-container)', padding: '1rem 2rem', textDecoration: 'none', display: 'inline-block' }}
              >
                Return Home
              </Link>
            </div>
          ) : (
            <div
              className="glass-panel"
              style={{
                padding: '3rem',
                borderRadius: '0.5rem',
                boxShadow: '0 8px 32px rgba(4,36,25,0.05)',
              }}
            >
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="font-label-caps"
                    style={{ display: 'block', color: 'var(--color-primary)', marginBottom: '0.5rem' }}
                  >
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    placeholder="Your given name"
                    className="input-underline"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="font-label-caps"
                    style={{ display: 'block', color: 'var(--color-primary)', marginBottom: '0.5rem' }}
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Where shall we send your confirmation?"
                    className="input-underline"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="font-label-caps"
                    style={{ display: 'block', color: 'var(--color-primary)', marginBottom: '0.5rem' }}
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Optional"
                    className="input-underline"
                  />
                </div>

                {/* Treatment */}
                <div style={{ position: 'relative' }}>
                  <label
                    htmlFor="treatment"
                    className="font-label-caps"
                    style={{ display: 'block', color: 'var(--color-primary)', marginBottom: '0.5rem' }}
                  >
                    Preferred Focus
                  </label>
                  <select
                    id="treatment"
                    name="treatment"
                    className="input-underline"
                    style={{ cursor: 'pointer', paddingRight: '2rem', appearance: 'none' }}
                  >
                    <option value="" disabled>Select an area of focus</option>
                    <option value="dosha">Dosha Balancing Assessment</option>
                    <option value="panchakarma">Panchakarma Consultation</option>
                    <option value="skin">Radiance &amp; Skin Rituals</option>
                    <option value="womens">Women&apos;s Wellness</option>
                    <option value="chronic">Chronic Disease Management</option>
                    <option value="general">General Wellness Inquiry</option>
                  </select>
                  <span
                    className="material-symbols-outlined"
                    style={{ position: 'absolute', right: 0, bottom: '0.5rem', color: 'var(--color-outline-variant)', pointerEvents: 'none' }}
                  >
                    expand_more
                  </span>
                </div>

                {/* Concern */}
                <div>
                  <label
                    htmlFor="concern"
                    className="font-label-caps"
                    style={{ display: 'block', color: 'var(--color-primary)', marginBottom: '0.5rem' }}
                  >
                    Primary Concern
                  </label>
                  <textarea
                    id="concern"
                    name="concern"
                    rows={4}
                    placeholder="Briefly describe what brings you to Prana..."
                    className="input-underline"
                    style={{ resize: 'none' }}
                  />
                </div>

                {/* Submit */}
                <div style={{ paddingTop: '0.5rem' }}>
                  <button
                    type="submit"
                    className="font-label-caps btn-shimmer"
                    style={{
                      width: '100%',
                      background: 'var(--color-primary)',
                      color: 'var(--color-secondary-container)',
                      padding: '1.5rem 2rem',
                      border: 'none',
                      cursor: 'pointer',
                      borderRadius: '0.125rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.75rem',
                      boxShadow: '0 4px 12px rgba(4,36,25,0.15)',
                      transition: 'background 0.3s',
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'var(--color-primary-container)'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'var(--color-primary)'; }}
                  >
                    <span>Begin Your Healing Journey</span>
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_right_alt</span>
                  </button>
                  <p className="font-label-caps" style={{ textAlign: 'center', color: 'var(--color-outline)', marginTop: '1rem', fontSize: '0.625rem' }}>
                    Your information is held in strictest confidence
                  </p>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
