import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Philosophy | The Essence of Ayurveda — Prana Ayurveda',
  description:
    'Ayurveda is not merely a system of healing, but the art of living in harmony with the cosmos. Discover the Pancha Mahabhuta and the Tri-Dosha principles.',
};

export default function PhilosophyPage() {
  return (
    <main style={{ paddingTop: '12rem' }}>
      {/* ── Hero ─────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          minHeight: '44rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 5%',
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
            opacity: 0.06,
            pointerEvents: 'none',
          }}
        >
          <svg
            width="600" height="600"
            viewBox="0 0 100 100"
            style={{ animation: 'spin 60s linear infinite' }}
          >
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" style={{ color: 'var(--color-primary)' }} />
            <path d="M50 10 Q60 50 50 90 Q40 50 50 10" fill="none" stroke="currentColor" strokeWidth="0.5" style={{ color: 'var(--color-primary)' }} />
            <path d="M10 50 Q50 60 90 50 Q50 40 10 50" fill="none" stroke="currentColor" strokeWidth="0.5" style={{ color: 'var(--color-primary)' }} />
          </svg>
        </div>

        <div style={{ textAlign: 'center', maxWidth: '52rem', position: 'relative', zIndex: 10 }}>
          <p className="font-label-caps" style={{ color: 'var(--color-secondary)', marginBottom: '2rem', letterSpacing: '0.2em' }}>
            Ayurvedic Philosophy
          </p>
          <h1 className="font-display-hero" style={{ color: 'var(--color-primary)', marginBottom: '2rem' }}>
            The Rhythm of Nature
          </h1>
          <p className="font-body-lg" style={{ color: 'var(--color-on-surface-variant)', maxWidth: '36rem', margin: '0 auto' }}>
            Ayurveda is not merely a system of healing, but the art of living in harmony with the cosmos. It is the understanding that we are a microcosm of the macrocosm—woven from the same elements that shape the universe.
          </p>
        </div>
      </section>

      {/* ── Five Elements ────────────────────── */}
      <section
        style={{
          width: '100%',
          padding: '10rem 5%',
          position: 'relative',
          zIndex: 20,
          background: '#F5EFE0',
          marginTop: '4rem',
          borderTopLeftRadius: '3rem',
          borderTopRightRadius: '3rem',
          borderTop: '1px solid rgba(200,146,42,0.3)',
          boxShadow: '0 -20px 60px rgba(0,0,0,0.1)'
        }}
      >
        {/* Bridge Ornament */}
        <div style={{ position: 'absolute', top: '-24px', left: '50%', transform: 'translateX(-50%)', width: '48px', height: '48px', background: '#F5EFE0', borderRadius: '50%', border: '1px solid rgba(200,146,42,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10, boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}>
           <span className="material-icons" style={{ color: '#C8922A', fontSize: '1.2rem' }}>air</span>
        </div>
        <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative' }}>
        {/* Sanskrit watermark */}
        <div
          className="sanskrit-watermark"
          style={{
            position: 'absolute',
            left: '-5%',
            top: '20%',
            fontSize: 'clamp(4rem, 12vw, 12.5rem)',
            color: 'var(--color-primary)',
            transform: 'rotate(-90deg)',
            transformOrigin: 'center',
            whiteSpace: 'nowrap',
          }}
        >
          पञ्चमहाभूत
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}
        >
          {/* Image */}
          <div style={{ position: 'relative' }}>
            <div
              style={{ aspectRatio: '3/4', background: 'var(--color-surface-container-low)', borderRadius: '0.25rem', overflow: 'hidden', position: 'relative' }}
              className="group"
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsw6rawNP23LFfsB-orEcSTwKNaTgtHzjVWFXNFRt_zhxpEmM8d9p1YM6jfNF31SGfgc0gx2_ZH50vBFna2IMBZQCpjW59XVNA6hqoAWWuLU5aYI-sitIjKJlPj1lCTh-kKFJjSoZIvG-3WjirCLISSn6prUclOUKn5pQLhI_XJf2oHwn9gFRO9YoFiix4puVEMTTkC0eXLc3ud1VdQuIc3iVqbTdFwIi2vX5w_YHZ17eR1ixPWkWrtX_YHdYMAkWSib5snou54qo"
                alt="Dried botanicals on linen with ancient parchment scripts"
                className="group-hover:scale-105"
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 2s ease' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(4,36,25,0.10)', mixBlendMode: 'multiply' }} />
            </div>
          </div>

          {/* Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <h2 className="font-headline-lg" style={{ color: 'var(--color-primary)' }}>The Five Great Elements</h2>
            <p className="font-body-lg" style={{ color: 'var(--color-on-surface-variant)' }}>
              Pancha Mahabhuta. Everything in the universe, including the human body, is composed of five fundamental elements: Space (Akasha), Air (Vayu), Fire (Agni), Water (Jala), and Earth (Prithvi).
            </p>

            {[
              { title: 'Space & Air', desc: 'The forces of movement and expansion. They govern breath, circulation, and the subtle channels of the mind.' },
              { title: 'Fire', desc: 'The power of transformation. It rules metabolism, digestion, and the fire of intellect and perception.' },
              { title: 'Water & Earth', desc: 'The foundations of structure and cohesion. They form the physical body, providing stability and nourishment.' },
            ].map(({ title, desc }) => (
              <div
                key={title}
                style={{ borderBottom: '1px solid rgba(193,200,194,0.30)', paddingBottom: '1.5rem' }}
              >
                <h3 className="font-headline-md" style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>{title}</h3>
                <p className="font-body-md" style={{ color: 'var(--color-on-surface-variant)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* ── Tri-Dosha ────────────────────────── */}
      <section
        style={{
          background: 'var(--color-surface-container-low)',
          padding: '10rem 5%',
          position: 'relative',
          zIndex: 30,
          marginTop: '4rem',
          borderTopLeftRadius: '3rem',
          borderTopRightRadius: '3rem',
          borderTop: '1px solid rgba(200,146,42,0.2)',
          boxShadow: '0 -20px 60px rgba(0,0,0,0.1)'
        }}
      >
        {/* Bridge Ornament */}
        <div style={{ position: 'absolute', top: '-24px', left: '50%', transform: 'translateX(-50%)', width: '48px', height: '48px', background: 'var(--color-surface-container-low)', borderRadius: '50%', border: '1px solid rgba(200,146,42,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10, boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}>
           <span className="material-icons" style={{ color: '#C8922A', fontSize: '1.2rem' }}>group_work</span>
        </div>
        <div className="container-max">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p className="font-label-caps" style={{ color: 'var(--color-secondary)', marginBottom: '1rem' }}>Tri-Dosha</p>
            <h2 className="font-headline-lg" style={{ color: 'var(--color-primary)' }}>Your Biological Blueprint</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
            {[
              {
                name: 'Vata', element: 'Space + Air', icon: 'air',
                color: 'rgba(172,206,188,0.15)',
                desc: 'The force of movement. Governs breathing, blinking, and all muscular and tissue movement. Creative, quick, and enthusiastic when balanced.',
              },
              {
                name: 'Pitta', element: 'Fire + Water', icon: 'local_fire_department',
                color: 'rgba(254,194,86,0.15)',
                desc: 'The force of transformation. Governs digestion, metabolism, and energy production. Sharp, focused, and courageous when balanced.',
              },
              {
                name: 'Kapha', element: 'Earth + Water', icon: 'water_drop',
                color: 'rgba(193,200,194,0.20)',
                desc: 'The force of cohesion. Governs growth, nourishment, and fluid balance. Calm, compassionate, and grounded when balanced.',
              },
            ].map(({ name, element, icon, color, desc }) => (
              <div
                key={name}
                className="glass-panel hover:-translate-y-2"
                style={{
                  padding: '2.5rem 2rem',
                  borderRadius: '0.5rem',
                  background: color,
                  transition: 'transform 0.4s',
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '2.5rem', color: 'var(--color-secondary)', marginBottom: '1.5rem', display: 'block' }}>{icon}</span>
                <p className="font-label-caps" style={{ color: 'var(--color-secondary)', marginBottom: '0.5rem' }}>{element}</p>
                <h3 className="font-headline-md" style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>{name}</h3>
                <p className="font-body-md" style={{ color: 'var(--color-on-surface-variant)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </main>
  );
}
