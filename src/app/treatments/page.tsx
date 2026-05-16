import Footer from '@/components/Footer';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Treatments | Rituals of Healing — Prana Ayurveda',
  description:
    'Discover ancient protocols refined for the modern world. Panchakarma, Nadi Pariksha, Rasayana Therapy, and more — all personalized for your constitution.',
};

const TREATMENTS = [
  {
    id: 'acupuncture',
    sub: 'Energy Flow',
    title: 'Acupuncture Treatment',
    desc: 'Precise stimulation of meridians to restore biological equilibrium and alleviate chronic pain.',
    cta: 'Learn More',
    img: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80',
    alt: 'Acupuncture treatment',
    full: false,
  },
  {
    id: 'reflexology',
    sub: 'Zone Therapy',
    title: 'Reflexology',
    desc: 'Targeted pressure application to reflex zones that correspond to internal organ systems.',
    cta: 'Learn More',
    img: 'https://images.unsplash.com/photo-1519415510236-8559b1985a2b?auto=format&fit=crop&q=80',
    alt: 'Reflexology therapy',
    full: false,
  },
  {
    id: 'moxa',
    sub: 'Thermal Healing',
    title: 'Moxa Therapy',
    desc: 'Ancient heat therapy utilizing aged mugwort to strengthen the blood and stimulate life force.',
    cta: 'Learn More',
    img: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80',
    alt: 'Moxa therapy',
    full: false,
  },
  {
    id: 'cupping',
    sub: 'Decompression',
    title: 'Cupping & Hijama',
    desc: 'Specialized vacuum therapy and traditional blood-letting to remove stagnant toxins and improve circulation.',
    cta: 'Learn More',
    img: 'https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&q=80',
    alt: 'Cupping therapy',
    full: false,
  },
  {
    id: 'spine',
    sub: 'Structural Integrity',
    title: 'Spine Setting & Alignment',
    desc: 'Ancestral bone alignment techniques to correct spinal degenerative conditions and disc problems.',
    cta: 'Learn More',
    img: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&q=80',
    alt: 'Spine alignment',
    full: true,
  },
];

export default function TreatmentsPage() {
  return (
    <main className="light-gradient-mesh relative" style={{ paddingTop: '12rem', paddingBottom: 'var(--spacing-section-gap)' }}>
      {/* Floating Ambient Light */}
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-white/60 to-transparent pointer-events-none z-0" />
      
      {/* Hero */}
      <section
        className="relative z-10"
        style={{
          width: '100%',
          padding: '6rem 5% 8rem',
        }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
          <span className="font-label-caps text-gradient mb-6 block" style={{ letterSpacing: '0.3em' }}>OUR OFFERINGS</span>
          <h1 className="font-display-hero" style={{ color: 'var(--color-primary)', marginBottom: '1.5rem', filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.05))' }}>
            Treatments <span className="italic" style={{ color: 'var(--color-secondary)' }}>&amp;</span> Services
          </h1>
          <p className="font-body-lg" style={{ color: 'var(--color-on-surface-variant)', maxWidth: '40rem', margin: '0 auto', lineHeight: '1.8' }}>
            Discover ancient protocols refined for the modern world. Our treatments are designed to restore your natural state of equilibrium through personalized Ayurvedic wisdom.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section
        className="relative z-20"
        style={{
          width: '100%',
          padding: '10rem 5%',
          background: '#1C1C1C',
          marginTop: '4rem',
          borderTopLeftRadius: '3rem',
          borderTopRightRadius: '3rem',
          borderTop: '1px solid rgba(200,146,42,0.15)',
          boxShadow: '0 -20px 60px rgba(0,0,0,0.1)'
        }}
      >
        {/* Bridge Ornament */}
        <div style={{ position: 'absolute', top: '-24px', left: '50%', transform: 'translateX(-50%)', width: '48px', height: '48px', background: '#1C1C1C', borderRadius: '50%', border: '1px solid rgba(200,146,42,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10, boxShadow: '0 4px 20px rgba(0,0,0,0.4)' }}>
           <span className="material-icons" style={{ color: '#C8922A', fontSize: '1.2rem' }}>spa</span>
        </div>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '2.5rem',
            }}
          >
            {TREATMENTS.map(({ id, sub, title, desc, cta, img, alt, full }) => (
              <div
                key={id}
                className="treatment-card group rounded-3xl"
                style={{
                  gridColumn: full ? 'span 2' : 'span 1',
                  position: 'relative',
                  overflow: 'hidden',
                  aspectRatio: full ? '2/1' : '1/1',
                  background: 'var(--color-surface-container-low)',
                  cursor: 'pointer',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
                  transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.6s ease',
                }}
              >
                <img
                  src={img}
                  alt={alt}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)' }}
                  className="group-hover:scale-105"
                />
                
                {/* Stunning Gradient Overlay */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(4,36,25,0.95) 0%, rgba(4,36,25,0.40) 50%, transparent 100%)', opacity: 0.9, transition: 'opacity 0.5s ease' }} className="group-hover:opacity-100" />
                
                {/* Static label */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '3rem', zIndex: 10, transform: 'translateY(0)', transition: 'transform 0.6s ease, opacity 0.6s ease' }} className="group-hover:-translate-y-8 group-hover:opacity-0">
                  <span className="font-label-caps" style={{ color: 'var(--color-secondary-container)', display: 'block', marginBottom: '0.5rem' }}>{sub}</span>
                  <h2 className="font-headline-lg" style={{ color: 'white' }}>{title}</h2>
                </div>
                
                {/* Hover overlay content */}
                <div
                  className="treatment-card-overlay"
                  style={{ position: 'absolute', inset: 0, padding: full ? '4rem' : '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', background: 'linear-gradient(to top, rgba(4,36,25,0.95) 0%, rgba(4,36,25,0.85) 60%, rgba(4,36,25,0.4) 100%)', backdropFilter: 'blur(8px)' }}
                >
                  <div style={{ maxWidth: full ? '60%' : '100%' }}>
                    <span className="font-label-caps" style={{ color: 'var(--color-secondary-container)', display: 'block', marginBottom: '1rem', letterSpacing: '0.2em' }}>{sub}</span>
                    <h2 className="font-headline-lg" style={{ color: 'white', marginBottom: '1rem' }}>{title}</h2>
                    <p className="font-body-md" style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '2.5rem', lineHeight: '1.7' }}>{desc}</p>
                    <Link
                      href="/consultation"
                      className="font-label-caps btn-shimmer flex items-center justify-center rounded-full"
                      style={{
                        background: 'var(--color-secondary-fixed)',
                        color: 'var(--color-primary)',
                        padding: '1.25rem 2.5rem',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        letterSpacing: '0.15em'
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

      {/* ADDITIONAL THERAPIES & PROBLEMS */}
      <section
        className="relative z-20"
        style={{
          width: '100%',
          padding: '8rem 5% 10rem',
          background: '#F5EFE0',
          borderTop: '1px solid rgba(27,58,45,0.1)',
        }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32">
            {/* Traditional Therapies List */}
            <div>
              <span className="font-label-caps" style={{ color: 'var(--color-secondary)', display: 'block', marginBottom: '1.5rem' }}>Full Spectrum</span>
              <h2 className="font-display-hero text-4xl mb-12" style={{ color: 'var(--color-primary)' }}>
                Traditional <span className="italic" style={{ color: 'var(--color-secondary)' }}>Therapies.</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                {[
                  'Acupressure', 'Physiotherapy', 'Magnetic Therapy', 'Seed Therapy',
                  'Colour Therapy', 'Healing', 'Sujok', 'Bone Alignment'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <span className="material-icons" style={{ color: 'var(--color-secondary)', fontSize: '18px' }}>check_circle_outline</span>
                    <span className="font-body-md" style={{ color: 'var(--color-primary)', opacity: 0.8 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Treatment for Problems List */}
            <div>
              <span className="font-label-caps" style={{ color: 'var(--color-secondary)', display: 'block', marginBottom: '1.5rem' }}>Specialized Care</span>
              <h2 className="font-display-hero text-4xl mb-12" style={{ color: 'var(--color-primary)' }}>
                Problems <span className="italic" style={{ color: 'var(--color-secondary)' }}>Treated.</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                {[
                  'Total Spine & Degenerative Disc', 'L4-L5 Disc Problems', 'Cervical Spondylosis',
                  'Frozen Shoulder & Arthritis', 'Chronic Knee & Ankle Pains', 'Foot Burning & Diabetic Wounds',
                  'PCOD & Irregular Menses', 'Gynic Problems (DUB)', 'Mens Disorders & Sexual Health',
                  'Piles, Fistula & Bleeding Piles', 'Headache, Vertigo & Sleeplessness', 
                  'Paralysis & Varicose Veins', 'Skin Disorders (Psoriasis, Eczema)'
                ].map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <span className="material-icons" style={{ color: 'var(--color-secondary)', fontSize: '18px', marginTop: '2px' }}>spa</span>
                    <span className="font-body-md" style={{ color: 'var(--color-primary)', opacity: 0.8, lineHeight: 1.4 }}>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-12">
                <Link
                  href="/consultation"
                  className="font-label-caps inline-flex items-center gap-4 no-underline group"
                  style={{ color: 'var(--color-secondary)' }}
                >
                  <span className="pb-1 border-b border-transparent group-hover:border-current transition-all">View Full Problem Index</span>
                  <span className="material-icons" style={{ fontSize: '18px' }}>east</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
