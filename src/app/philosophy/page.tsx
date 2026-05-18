import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Philosophy | The Essence of Ayurveda — Sushrutha Nature Cure',
  description:
    'Ayurveda is not merely a system of healing, but the art of living in harmony with the cosmos. Discover the Pancha Mahabhuta and the Tri-Dosha principles.',
};

export default function PhilosophyPage() {
  return (
    <main style={{ background: 'var(--color-background)', minHeight: '100vh', overflowX: 'hidden' }}>
      
      {/* ── HERO SECTION ──────────────────────── */}
      <section
        style={{
          position: 'relative',
          minHeight: '40rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '12rem 5% 6rem',
          overflow: 'hidden',
        }}
      >
        {/* Animated botanical mandala */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0.04,
            pointerEvents: 'none',
          }}
        >
          <svg
            width="600" height="600"
            viewBox="0 0 100 100"
            style={{ animation: 'spin 65s linear infinite' }}
          >
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" style={{ color: 'var(--color-primary)' }} />
            <path d="M50 10 Q60 50 50 90 Q40 50 50 10" fill="none" stroke="currentColor" strokeWidth="0.5" style={{ color: 'var(--color-primary)' }} />
            <path d="M10 50 Q50 60 90 50 Q50 40 10 50" fill="none" stroke="currentColor" strokeWidth="0.5" style={{ color: 'var(--color-primary)' }} />
          </svg>
        </div>

        <div style={{ textAlign: 'center', maxWidth: '800px', position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
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
            Ayurvedic Philosophy
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
            The Rhythm of Nature
          </h1>
          <p 
            style={{ 
              fontFamily: 'var(--font-sans)', 
              fontSize: '16px', 
              color: 'var(--color-on-surface-variant)', 
              maxWidth: '540px', 
              margin: '0 auto', 
              lineHeight: '1.8' 
            }}
          >
            Ayurveda is not merely a system of healing, but the art of living in harmony with the cosmos. It is the understanding that we are a microcosm of the macrocosm—woven from the same elements that shape the universe.
          </p>
        </div>
      </section>

      {/* ── FIVE ELEMENTS ────────────────────── */}
      <section
        style={{
          width: '100%',
          padding: '8rem 5%',
          position: 'relative',
          zIndex: 20,
          background: 'var(--color-surface-container)',
          borderTopLeftRadius: '3.5rem',
          borderTopRightRadius: '3.5rem',
          borderTop: '1px solid rgba(17, 36, 28, 0.05)',
          boxShadow: '0 -25px 60px rgba(17, 36, 28, 0.02)'
        }}
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
            background: 'var(--color-surface-container)', 
            borderRadius: '50%', 
            border: '1.5px solid rgba(17, 36, 28, 0.08)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            zIndex: 10, 
            boxShadow: '0 4px 15px rgba(17, 36, 28, 0.02)' 
          }}
        >
           <span className="material-icons" style={{ color: 'var(--color-secondary)', fontSize: '18px' }}>air</span>
        </div>

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
          
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '5rem',
              alignItems: 'center',
            }}
            className="elements-grid"
          >
            {/* Image Dome Clip */}
            <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
              <div
                style={{ 
                  aspectRatio: '0.8/1', 
                  width: '100%',
                  maxWidth: '400px',
                  borderRadius: '200px 200px 30px 30px', 
                  overflow: 'hidden', 
                  boxShadow: '0 20px 40px rgba(17, 36, 28, 0.06)',
                  border: '1.5px solid rgba(17, 36, 28, 0.04)' 
                }}
              >
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsw6rawNP23LFfsB-orEcSTwKNaTgtHzjVWFXNFRt_zhxpEmM8d9p1YM6jfNF31SGfgc0gx2_ZH50vBFna2IMBZQCpjW59XVNA6hqoAWWuLU5aYI-sitIjKJlPj1lCTh-kKFJjSoZIvG-3WjirCLISSn6prUclOUKn5pQLhI_XJf2oHwn9gFRO9YoFiix4puVEMTTkC0eXLc3ud1VdQuIc3iVqbTdFwIi2vX5w_YHZ17eR1ixPWkWrtX_YHdYMAkWSib5snou54qo"
                  alt="Dried botanicals on linen representing earthy ayurvedic medicine"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Content Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-secondary)' }}>Pancha Mahabhuta</span>
                <h2 style={{ fontFamily: 'var(--font-garamond)', fontSize: '2.75rem', fontWeight: 500, color: 'var(--color-primary)', margin: 0 }}>
                  The Five Great Elements
                </h2>
              </div>
              
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '16px', lineHeight: 1.8, color: 'var(--color-on-surface-variant)', margin: 0 }}>
                Everything in the cosmos, including the human body, is composed of five fundamental elements: Space (Akasha), Air (Vayu), Fire (Agni), Water (Jala), and Earth (Prithvi).
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                {[
                  { title: 'Space & Air', desc: 'The forces of movement and expansion. They govern breath, circulation, mental clarity, and the subtle channels of neural flow.' },
                  { title: 'Fire', desc: 'The power of digestion and metabolism. It rules metabolic pathways, digestive fire (Agni), and the fire of intellect and optical perception.' },
                  { title: 'Water & Earth', desc: 'The foundations of structure and biological cohesion. They construct the physical body structure, providing stability and hydration.' },
                ].map(({ title, desc }) => (
                  <div
                    key={title}
                    style={{ 
                      borderBottom: '1.5px solid rgba(17, 36, 28, 0.05)', 
                      paddingBottom: '1.5rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem'
                    }}
                  >
                    <h3 style={{ fontFamily: 'var(--font-garamond)', fontSize: '1.6rem', fontWeight: 500, color: 'var(--color-primary)', margin: 0 }}>{title}</h3>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14.5px', lineHeight: 1.6, color: 'var(--color-on-surface-variant)', margin: 0 }}>{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRI-DOSHA ────────────────────────── */}
      <section
        style={{
          background: 'var(--color-background)',
          padding: '8rem 5% 10rem',
          position: 'relative',
          zIndex: 30,
          borderTop: '1.5px solid rgba(17, 36, 28, 0.05)',
        }}
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
            background: 'var(--color-background)', 
            borderRadius: '50%', 
            border: '1.5px solid rgba(17, 36, 28, 0.08)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            zIndex: 10, 
            boxShadow: '0 4px 15px rgba(17, 36, 28, 0.02)' 
          }}
        >
           <span className="material-icons" style={{ color: 'var(--color-secondary)', fontSize: '18px' }}>group_work</span>
        </div>

        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', marginBottom: '5rem' }}>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-secondary)' }}>Tri-Dosha</span>
            <h2 style={{ fontFamily: 'var(--font-garamond)', fontSize: '3rem', fontWeight: 500, color: 'var(--color-primary)', margin: 0 }}>
              Your Biological Blueprint
            </h2>
          </div>

          {/* Tri-Dosha Cream Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
            {[
              {
                name: 'Vata', element: 'Space + Air', icon: 'air',
                desc: 'The force of physiological movement. Governs breathing, cellular division, and muscular functions. Light, creative, and enthusiastic when fully balanced.',
              },
              {
                name: 'Pitta', element: 'Fire + Water', icon: 'local_fire_department',
                desc: 'The force of biological transformation. Governs cellular digestion, liver metabolism, and body temperature. Sharp, focused, and passionate when fully balanced.',
              },
              {
                name: 'Kapha', element: 'Earth + Water', icon: 'water_drop',
                desc: 'The force of anatomical cohesion. Governs skeletal growth, joint lubrication, and cellular hydration. Calm, stable, and deeply compassionate when fully balanced.',
              },
            ].map(({ name, element, icon, desc }) => (
              <div
                key={name}
                style={{
                  padding: '4rem 3rem',
                  borderRadius: '2.5rem',
                  background: 'var(--color-surface-container)',
                  border: '1.5px solid rgba(17, 36, 28, 0.05)',
                  boxShadow: '0 8px 30px rgba(17, 36, 28, 0.02)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem',
                  transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                  cursor: 'pointer',
                }}
                className="dosha-card"
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: 'rgba(139, 90, 43, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span className="material-icons" style={{ fontSize: '24px', color: 'var(--color-secondary)' }}>{icon}</span>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-secondary)' }}>{element}</span>
                  <h3 style={{ fontFamily: 'var(--font-garamond)', fontSize: '2rem', fontWeight: 500, color: 'var(--color-primary)', margin: 0 }}>{name}</h3>
                </div>

                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', lineHeight: 1.7, color: 'var(--color-on-surface-variant)', margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────── */}
      <Footer />

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .dosha-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 15px 35px rgba(17, 36, 28, 0.05) !important;
          border-color: rgba(139, 90, 43, 0.2) !important;
        }
        @media (max-width: 900px) {
          .elements-grid {
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
          }
        }
      `}</style>
    </main>
  );
}
