'use client';

import React from 'react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section
      style={{
        background: 'var(--color-background)',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '12rem 5% 8rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* FLOATING AMBIENT EMERALD ORB */}
      <div 
        style={{
          position: 'absolute',
          top: '-15%',
          right: '-10%',
          width: '60vw',
          height: '60vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(200, 146, 42, 0.06), transparent 70%)',
          filter: 'blur(100px)',
          pointerEvents: 'none',
        }}
      />
      <div 
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '-15%',
          width: '50vw',
          height: '50vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(4, 36, 25, 0.04), transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />

      {/* ── 1. CENTERED COPY COLUMN ── */}
      <div
        style={{
          maxWidth: '850px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '2rem',
          position: 'relative',
          zIndex: 10,
          margin: '0 auto 5rem',
        }}
        className="hero-header-block"
      >
        {/* Elegant Gold Pill Badge */}
        <div
          style={{
            background: 'var(--color-secondary-container)',
            border: '1px solid rgba(200, 146, 42, 0.25)',
            borderRadius: '100px',
            padding: '8px 18px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 4px 12px rgba(200, 146, 42, 0.05)',
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: 'var(--color-secondary)',
              animation: 'pulse 2s infinite',
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '12px',
              fontWeight: 600,
              color: 'var(--color-primary)',
              letterSpacing: '0.02em',
            }}
          >
            2 spots left for this week's assessment
          </span>
        </div>

        {/* Large Centered Serif Title */}
        <h1
          style={{
            fontFamily: 'var(--font-garamond)',
            fontSize: 'clamp(3rem, 6.5vw, 5.5rem)',
            fontWeight: 400,
            lineHeight: 1.05,
            color: 'var(--color-primary)',
            letterSpacing: '-0.02em',
            margin: 0,
            maxWidth: '780px',
          }}
        >
          Restore your <br />
          <span style={{ fontStyle: 'italic', color: 'var(--color-secondary)' }}>biological rhythm.</span>
        </h1>

        {/* Subtext Paragraph */}
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '18px',
            lineHeight: 1.8,
            color: 'var(--color-on-surface-variant)',
            maxWidth: '600px',
            margin: 0,
          }}
        >
          Sushrutha Nature Cure is a gentle, somatic-based healing sanctuary that helps you reconnect with your body's innate wisdom through touch, breath, and presence.
        </p>

        {/* CTA Buttons */}
        <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '0.5rem' }}>
          <Link
            href="/consultation"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '14px',
              fontWeight: 600,
              color: 'var(--color-on-primary)',
              background: 'var(--color-primary)',
              padding: '16px 36px',
              borderRadius: '100px',
              textDecoration: 'none',
              boxShadow: '0 6px 20px rgba(4, 36, 25, 0.2)',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            className="hero-btn-primary"
          >
            Book your session
          </Link>

          <a
            href="#about"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '14px',
              fontWeight: 600,
              color: 'var(--color-primary)',
              background: 'rgba(4, 36, 25, 0.04)',
              border: '1.5px solid rgba(4, 36, 25, 0.08)',
              padding: '15px 34px',
              borderRadius: '100px',
              textDecoration: 'none',
              transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            className="hero-btn-secondary"
          >
            Discover practice
          </a>
        </div>
      </div>

      {/* ── 2. MAJESTIC ARCH SHOWCASE BLOCK WITH OVERLAY CARD ── */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '920px',
          margin: '0 auto',
          zIndex: 10,
        }}
        className="hero-showcase"
      >
        {/* Full Width Vaulted/Arched Image Frame */}
        <div
          style={{
            width: '100%',
            aspectRatio: '1.65/1',
            borderRadius: '450px 450px 40px 40px',
            overflow: 'hidden',
            boxShadow: '0 30px 80px rgba(4, 36, 25, 0.15)',
            border: '1.5px solid rgba(4, 36, 25, 0.05)',
          }}
          className="hero-vault"
        >
          <img
            src="/assets/hero_bg.png"
            alt="Sushrutha Nature Cure Sanctuary Healing Space"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 1.8s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          />
        </div>

        {/* Floating Overlapping Glassmorphism Card */}
        <div
          style={{
            position: 'absolute',
            bottom: '-4rem',
            left: '-4rem',
            maxWidth: '390px',
            background: 'rgba(251, 249, 244, 0.82)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1.5px solid rgba(255, 255, 255, 0.45)',
            borderRadius: '2.5rem',
            padding: '2.5rem',
            boxShadow: '0 25px 60px rgba(4, 36, 25, 0.12)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
          className="hero-glass-card"
        >
          {/* Gold Circular Icon */}
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              background: 'var(--color-primary-container)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 10px rgba(4, 36, 25, 0.1)',
            }}
          >
            <span className="material-icons" style={{ fontSize: '18px', color: 'var(--color-secondary)' }}>
              eco
            </span>
          </div>

          <h3
            style={{
              fontFamily: 'var(--font-garamond)',
              fontSize: '1.8rem',
              fontWeight: 500,
              color: 'var(--color-primary)',
              margin: 0,
              letterSpacing: '-0.01em',
            }}
          >
            What is Nature Cure?
          </h3>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '14.5px',
              lineHeight: 1.75,
              color: 'var(--color-on-surface-variant)',
              margin: 0,
            }}
          >
            It is a path of return. Sushrutha Nature Cure combines ancestral oil bodywork, spine setting, reflexology, and acupuncture to restore your biological equilibrium and nervous system vitality without synthetic interventions.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0% { transform: scale(0.9); opacity: 0.6; }
          50% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(0.9); opacity: 0.6; }
        }
        
        .hero-btn-primary:hover {
          background: var(--color-secondary) !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 8px 24px rgba(200, 146, 42, 0.25) !important;
        }

        .hero-btn-secondary:hover {
          background: rgba(4, 36, 25, 0.08) !important;
          transform: translateY(-2px) !important;
        }

        @media (max-width: 1024px) {
          .hero-glass-card {
            position: static !important;
            margin: 2.5rem auto 0 !important;
            max-width: 100% !important;
            left: 0 !important;
            bottom: 0 !important;
            box-shadow: 0 15px 35px rgba(4, 36, 25, 0.06) !important;
          }
          .hero-showcase {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-vault {
            aspect-ratio: 1.4/1 !important;
            border-radius: 300px 300px 30px 30px !important;
          }
        }

        @media (max-width: 600px) {
          .hero-header-block {
            margin-bottom: 3rem !important;
            gap: 1.5rem !important;
          }
          .hero-vault {
            aspect-ratio: 1.1/1 !important;
            border-radius: 200px 200px 20px 20px !important;
          }
          .hero-glass-card {
            padding: 2rem !important;
            border-radius: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
