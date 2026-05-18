import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Treatments | Rituals of Healing — Sushrutha Nature Cure',
  description:
    'Discover ancient protocols refined for the modern world. Acupuncture, Reflexology, Spine Setting, and specialized organic treatments personalized for your constitution.',
};

const TREATMENTS = [
  {
    id: 'acupuncture',
    sub: 'Energy Flow',
    title: 'Acupuncture Treatment',
    desc: 'Precise stimulation of meridians to restore biological equilibrium, remove blocks, and alleviate chronic physical pain.',
    cta: 'Learn More',
    img: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80',
    alt: 'Acupuncture treatment',
    full: false,
  },
  {
    id: 'reflexology',
    sub: 'Zone Therapy',
    title: 'Reflexology',
    desc: 'Targeted pressure application to biological reflex zones that correspond to internal organ systems and soothe the nervous system.',
    cta: 'Learn More',
    img: 'https://images.unsplash.com/photo-1519415510236-8559b1985a2b?auto=format&fit=crop&q=80',
    alt: 'Reflexology therapy',
    full: false,
  },
  {
    id: 'moxa',
    sub: 'Thermal Healing',
    title: 'Moxa Therapy',
    desc: 'Ancient heat therapy utilizing aged organic mugwort to warm the meridians, strengthen the blood, and stimulate life force.',
    cta: 'Learn More',
    img: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80',
    alt: 'Moxa therapy',
    full: false,
  },
  {
    id: 'cupping',
    sub: 'Decompression',
    title: 'Cupping & Hijama',
    desc: 'Specialized traditional vacuum therapy to remove stagnant toxic blood, improve localized circulation, and release deep muscle fascia.',
    cta: 'Learn More',
    img: 'https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&q=80',
    alt: 'Cupping therapy',
    full: false,
  },
  {
    id: 'spine',
    sub: 'Structural Integrity',
    title: 'Spine Setting & Alignment',
    desc: 'Ancestral bone alignment and adjustments to correct spinal degenerative conditions, relieve pinched nerves, and improve biological posture.',
    cta: 'Learn More',
    img: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&q=80',
    alt: 'Spine alignment',
    full: true,
  },
];

export default function TreatmentsPage() {
  return (
    <main style={{ background: 'var(--color-background)', minHeight: '100vh', overflowX: 'hidden' }}>
      
      {/* ── HERO SECTION ──────────────────────── */}
      <section
        style={{
          width: '100%',
          padding: '14rem 5% 6rem',
          position: 'relative',
        }}
      >
        {/* Floating Ambient Orb */}
        <div 
          style={{
            position: 'absolute',
            top: '-5%',
            right: '-10%',
            width: '40vw',
            height: '40vw',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(139, 90, 43, 0.05), transparent 70%)',
            filter: 'blur(80px)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
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
            OUR OFFERINGS
          </span>
          <h1 
            style={{ 
              fontFamily: 'var(--font-garamond)', 
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', 
              fontWeight: 400, 
              color: 'var(--color-primary)', 
              margin: 0,
              lineHeight: 1.1 
            }}
          >
            Treatments <span className="italic" style={{ color: 'var(--color-secondary)' }}>&amp;</span> Services
          </h1>
          <p 
            style={{ 
              fontFamily: 'var(--font-sans)', 
              fontSize: '16px', 
              color: 'var(--color-on-surface-variant)', 
              maxWidth: '600px', 
              margin: '0 auto', 
              lineHeight: '1.8' 
            }}
          >
            Discover traditional clinical protocols refined for biological regulation. Our natural therapies are customized to restore equilibrium through personalized ancestral care.
          </p>
        </div>
      </section>

      {/* ── IMAGES CATALOG GRID (DEEP CHOCOLATE PANEL) ── */}
      <section
        style={{
          width: '100%',
          padding: '10rem 5%',
          background: 'var(--color-primary-container)',
          borderTopLeftRadius: '3.5rem',
          borderTopRightRadius: '3.5rem',
          borderTop: '1px solid rgba(226, 214, 197, 0.12)',
          boxShadow: '0 -20px 50px rgba(34, 22, 18, 0.08)',
          position: 'relative',
        }}
        className="catalog-section"
      >
        {/* Bridge Ornament Circle */}
        <div 
          style={{ 
            position: 'absolute', 
            top: '-24px', 
            left: '50%', 
            transform: 'translateX(-50%)', 
            width: '48px', 
            height: '48px', 
            background: 'var(--color-primary-container)', 
            borderRadius: '50%', 
            border: '1.5px solid var(--color-primary-fixed)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            zIndex: 10, 
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)' 
          }}
        >
           <span className="material-icons" style={{ color: 'var(--color-primary-fixed)', fontSize: '18px' }}>spa</span>
        </div>

        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '2.5rem',
            }}
            className="treatments-grid"
          >
            {TREATMENTS.map(({ id, sub, title, desc, cta, img, alt, full }) => (
              <div
                key={id}
                style={{
                  gridColumn: full ? 'span 2' : 'span 1',
                  position: 'relative',
                  overflow: 'hidden',
                  aspectRatio: full ? '2/1' : '1/1',
                  borderRadius: '2.5rem',
                  cursor: 'pointer',
                  boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                }}
                className="treatment-card group"
              >
                <img
                  src={img}
                  alt={alt}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)' }}
                  className="group-hover:scale-105"
                />
                
                {/* Elegant Warm Cocoa Overlay */}
                <div 
                  style={{ 
                    position: 'absolute', 
                    inset: 0, 
                    background: 'linear-gradient(to top, rgba(34, 22, 18, 0.95) 0%, rgba(34, 22, 18, 0.35) 50%, transparent 100%)', 
                    opacity: 0.95, 
                    transition: 'opacity 0.5s ease' 
                  }} 
                  className="group-hover:opacity-100" 
                />
                
                {/* Static label - Visible before hover */}
                <div 
                  style={{ 
                    position: 'absolute', 
                    bottom: 0, 
                    left: 0, 
                    width: '100%', 
                    padding: '3rem', 
                    zIndex: 10, 
                    transition: 'transform 0.6s ease, opacity 0.6s ease' 
                  }} 
                  className="group-hover:-translate-y-8 group-hover:opacity-0"
                >
                  <span className="font-label-caps" style={{ color: 'var(--color-primary-fixed)', display: 'block', marginBottom: '0.5rem', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em' }}>{sub}</span>
                  <h2 style={{ fontFamily: 'var(--font-garamond)', fontSize: '2.2rem', fontWeight: 500, color: '#ffffff', margin: 0 }}>{title}</h2>
                </div>
                
                {/* Hover overlay content */}
                <div
                  className="treatment-card-overlay"
                  style={{ 
                    position: 'absolute', 
                    inset: 0, 
                    padding: full ? '4rem' : '3rem', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'flex-end', 
                    background: 'linear-gradient(to top, rgba(34, 22, 18, 0.98) 0%, rgba(34, 22, 18, 0.85) 60%, rgba(34, 22, 18, 0.4) 100%)', 
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)'
                  }}
                >
                  <div style={{ maxWidth: full ? '60%' : '100%', display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
                    <span className="font-label-caps" style={{ color: 'var(--color-primary-fixed)', display: 'block', fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em' }}>{sub}</span>
                    <h2 style={{ fontFamily: 'var(--font-garamond)', fontSize: '2.2rem', fontWeight: 500, color: '#ffffff', margin: 0 }}>{title}</h2>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14.5px', color: 'rgba(255,255,255,0.75)', lineHeight: '1.7', margin: 0 }}>{desc}</p>
                    <Link
                      href="/consultation"
                      className="treatment-link"
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: '13px',
                        fontWeight: 600,
                        background: 'var(--color-primary-fixed)',
                        color: 'var(--color-primary)',
                        padding: '12px 24px',
                        borderRadius: '100px',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        marginTop: '1rem',
                        transition: 'background 0.3s ease',
                      }}
                    >
                      {cta}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ADDITIONAL THERAPIES & CLINICAL PROBLEMS INDEX ── */}
      <section
        style={{
          width: '100%',
          padding: '8rem 5% 10rem',
          background: 'var(--color-surface-container)',
          borderTop: '1.5px solid rgba(34, 22, 18, 0.05)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32">
            
            {/* Traditional Therapies Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-secondary)' }}>Full Spectrum</span>
                <h2 style={{ fontFamily: 'var(--font-garamond)', fontSize: '2.75rem', fontWeight: 500, color: 'var(--color-primary)', margin: 0 }}>
                  Traditional <span className="italic" style={{ color: 'var(--color-secondary)' }}>Therapies.</span>
                </h2>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                {[
                  'Acupressure', 'Physiotherapy', 'Magnetic Therapy', 'Seed Therapy',
                  'Colour Therapy', 'Pranic Healing', 'Sujok Acupressure', 'Somatic Alignment'
                ].map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span className="material-icons" style={{ color: 'var(--color-secondary)', fontSize: '18px' }}>check_circle_outline</span>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', color: 'var(--color-primary)', opacity: 0.85 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specialized Clinical Conditions Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-secondary)' }}>Specialized Care</span>
                <h2 style={{ fontFamily: 'var(--font-garamond)', fontSize: '2.75rem', fontWeight: 500, color: 'var(--color-primary)', margin: 0 }}>
                  Conditions <span className="italic" style={{ color: 'var(--color-secondary)' }}>Treated.</span>
                </h2>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
                {[
                  'Total Spine & Degenerative Disc', 'L4-L5 Disc Problems', 'Cervical Spondylosis',
                  'Frozen Shoulder & Arthritis', 'Chronic Knee & Ankle Pains', 'Foot Burning & Diabetic Wounds',
                  'PCOD & Irregular Menses', 'Gynic Problems (DUB)', 'Mens Disorders & Sexual Health',
                  'Piles, Fistula & Fissures', 'Headache, Vertigo & Insomnia', 
                  'Paralysis & Varicose Veins', 'Skin Disorders (Psoriasis, Eczema)'
                ].map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <span className="material-icons" style={{ color: 'var(--color-secondary)', fontSize: '18px', marginTop: '2px' }}>spa</span>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '14.5px', color: 'var(--color-primary)', opacity: 0.85, lineHeight: 1.4 }}>{item}</span>
                  </div>
                ))}
              </div>
              
              <div style={{ marginTop: '1rem' }}>
                <Link
                  href="/consultation"
                  className="problem-link"
                  style={{ 
                    fontFamily: 'var(--font-sans)',
                    fontSize: '13px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: 'var(--color-secondary)', 
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    borderBottom: '1px solid rgba(139, 90, 43, 0.3)',
                    paddingBottom: '2px',
                    transition: 'all 0.3s ease',
                  }}
                >
                  Request specialized consultation <span className="material-icons" style={{ fontSize: '16px' }}>east</span>
                </Link>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────── */}
      <Footer />

      <style>{`
        .treatment-link:hover {
          background: #ffffff !important;
        }
        .problem-link:hover {
          gap: 10px !important;
        }
        @media (max-width: 900px) {
          .treatments-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .treatment-card {
            grid-column: span 1 !important;
            aspect-ratio: 1/1 !important;
          }
          .treatment-card-overlay {
            padding: 2.5rem !important;
          }
        }
      `}</style>
    </main>
  );
}
