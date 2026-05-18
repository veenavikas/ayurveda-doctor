import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Journal | Testimonials — Sushrutha Nature Cure',
  description: 'Discover accounts of healing, nervous system regulation, and structural alignment from our sanctuary.',
};

const REVIEWS = [
  {
    text: '“Every part of the retreat felt deeply intentional — from the silence to the herbal tea. It gave me the mental space to breathe, release chronic physical tension, and fully reset.”',
    author: 'Sophia Lee',
    tag: 'Retreat Guest',
  },
  {
    text: '“It wasn’t just a clinical treatment. It was a complete return — to nature, to organic stillness, to myself. I’m carrying that grounded feeling with me back into my daily life.”',
    author: 'Olivia S.',
    tag: 'Somatic Bodywork',
  },
  {
    text: '“I didn’t expect something so simple to feel so incredibly powerful. The bone setting and personalized warm oil massage helped me pause and truly reconnect with my structural balance.”',
    author: 'David R.',
    tag: 'Spine Alignment',
  },
  {
    text: '“It felt like time completely slowed down the moment I arrived. I left the sanctuary feeling lighter, clearer, and deeply in touch with my body and what truly matters.”',
    author: 'Mona S.',
    tag: 'Sanctuary Stay',
  },
  {
    text: '“Dr. Mohan Rao’s diagnostic pulse reading (Nadi Pariksha) was incredibly accurate. The customized herbal moxa thermal session relieved my chronic lower back stiffness almost instantly.”',
    author: 'Isabella W.',
    tag: 'Clinical Care',
  },
  {
    text: '“Nestled in the quiet, peaceful landscape of Kakinada, this sanctuary is a true hidden treasure. Zero city noise, only gentle bird songs and organic breezes. Highly recommended!”',
    author: 'Robert M.',
    tag: 'Sanctuary Visit',
  },
];

export default function TestimonialsPage() {
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
            PATIENT STORIES
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
            Healing Journal
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
            Discover the profound biological transformations experienced by those who have journeyed through our nature sanctuary. Authentic accounts of clinical healing, balance, and renewal.
          </p>
        </div>
      </section>

      {/* ── TESTIMONIAL LOGS (CREAM CARDS GRID) ── */}
      <section
        style={{
          width: '100%',
          padding: '6rem 5% 10rem',
          position: 'relative',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2.5rem',
            }}
            className="reviews-grid"
          >
            {REVIEWS.map((review, i) => (
              <div
                key={i}
                style={{
                  background: 'var(--color-surface-container)',
                  border: '1.5px solid rgba(34, 22, 18, 0.05)',
                  borderRadius: '2.5rem',
                  padding: '4rem 3rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '3rem',
                  boxShadow: '0 8px 30px rgba(34, 22, 18, 0.02)',
                  transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                  cursor: 'pointer',
                }}
                className="review-card"
              >
                {/* Review Text */}
                <p
                  style={{
                    fontFamily: 'var(--font-garamond)',
                    fontSize: '1.45rem',
                    fontStyle: 'italic',
                    lineHeight: 1.55,
                    color: 'var(--color-primary)',
                    margin: 0,
                  }}
                >
                  {review.text}
                </p>

                {/* Reviewer Details */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  {/* Small circle avatar icon */}
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'rgba(139, 90, 43, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <span className="material-icons" style={{ fontSize: '18px', color: 'var(--color-secondary)' }}>spa</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)' }}>
                      {review.author}
                    </span>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', color: 'var(--color-on-surface-variant)', opacity: 0.8 }}>
                      {review.tag}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────── */}
      <Footer />

      <style>{`
        .review-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 15px 35px rgba(34, 22, 18, 0.05) !important;
          border-color: rgba(139, 90, 43, 0.2) !important;
        }
      `}</style>
    </main>
  );
}
