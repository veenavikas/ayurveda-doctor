import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'About | Sushrutha Nature Cure',
  description: 'Learn about our practitioners, clinical lineage, and ancestral wisdom.',
};

export default function AboutPage() {
  return (
    <main style={{ background: 'var(--color-background)', minHeight: '100vh', overflowX: 'hidden' }}>
      
      {/* ── ABOUT SECTION ──────────────────────── */}
      <section
        style={{
          width: '100%',
          padding: '14rem 5% 10rem',
          position: 'relative',
        }}
      >
        {/* Floating Ambient Orb */}
        <div 
          style={{
            position: 'absolute',
            top: '-5%',
            left: '-10%',
            width: '45vw',
            height: '45vw',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(139, 90, 43, 0.04), transparent 70%)',
            filter: 'blur(80px)',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: '6rem',
            alignItems: 'center',
            position: 'relative',
            zIndex: 10,
          }}
          className="about-grid"
        >
          {/* Left Column: Lineage Copy & Stats */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', alignItems: 'flex-start' }}>
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
                Our Lineage
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
                The Practitioners <span className="italic" style={{ color: 'var(--color-secondary)' }}>&amp;</span> Wisdom
              </h1>
            </div>

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '16.5px',
                lineHeight: 1.8,
                color: 'var(--color-on-surface-variant)',
                maxWidth: '560px',
                margin: 0,
              }}
            >
              Rooted in the ancient medical lineage of the great sage Sushrutha, our practitioners combine precise clinical assessments with a profound, somatic understanding of nature cure. We are dedicated to restoring your biological equilibrium through rigorous, customized warm oil bodywork, biological dietetics, and nervous system regulation.
            </p>
            
            {/* Stats Card - Rounded Capsule */}
            <div 
              style={{ 
                background: 'var(--color-surface-container)',
                border: '1.5px solid rgba(17, 36, 28, 0.05)',
                borderRadius: '2rem',
                padding: '3rem 3.5rem',
                boxShadow: '0 8px 30px rgba(17, 36, 28, 0.02)',
                width: '100%',
                maxWidth: '480px',
              }}
            >
              <div 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  gap: '2rem' 
                }}
                className="stats-row"
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ fontFamily: 'var(--font-garamond)', fontSize: '2.5rem', fontWeight: 500, color: 'var(--color-primary)', lineHeight: 1 }}>100%</span>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-secondary)' }}>Natural Herbs</span>
                </div>
                
                <div style={{ width: '1px', height: '3.5rem', backgroundColor: 'rgba(17, 36, 28, 0.08)' }} className="stats-divider" />
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <span style={{ fontFamily: 'var(--font-garamond)', fontSize: '2.5rem', fontWeight: 500, color: 'var(--color-primary)', lineHeight: 1 }}>Authentic</span>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-secondary)' }}>Kerala Ayurveda</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dome Clip Image */}
          <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                width: '100%',
                maxWidth: '400px',
                aspectRatio: '0.8/1',
                borderRadius: '200px 200px 30px 30px', // Premium dome shape
                overflow: 'hidden',
                boxShadow: '0 25px 60px rgba(17, 36, 28, 0.08)',
                border: '1.5px solid rgba(17, 36, 28, 0.04)',
              }}
              className="about-dome-container"
            >
              <img 
                src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070&auto=format&fit=crop" 
                alt="Herbal apothecary preparations representing traditional wisdom" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 1.5s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
                className="about-dome-img"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────── */}
      <Footer />

      <style>{`
        .about-dome-container:hover .about-dome-img {
          transform: scale(1.05);
        }
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
          }
          .stats-row {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 1.5rem !important;
          }
          .stats-divider {
            display: none !important;
          }
        }
      `}</style>
    </main>
  );
}
