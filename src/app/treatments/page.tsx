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
    id: 'panchakarma',
    sub: 'Signature Detoxification',
    title: 'Panchakarma',
    desc: 'The ultimate mind-body healing experience. A comprehensive, customized system of detoxification therapies designed to purify the body of deep-rooted toxins and restore doshic balance.',
    cta: 'Explore Protocol',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACiRQ0n9VZtuoe2AOKvvocR6TKyqSMoer39nxWY3DSy-pbq_x7c3MsJy6iwiQdSaHGtwRb42qExpjSj8mc2KW9wfzYfx_UIulyk35qW4yUv0vvpi2FDwXrZF_Fs6AY-0ImREvxGdxHxUdBLt2xjoHmS9inN7-RbBg1VJP9BfSfpikYmc60C9qHAg9z1j0gGamfKs_-4S38D7_JvTRcFwzwv8_bz9dt-3x37Zqd-HMtyF9BogoIZy_HR0rEYaqF8moKGPaStkGHQuc',
    alt: 'Ayurvedic oil massage in serene spa',
    full: false,
  },
  {
    id: 'nadi',
    sub: 'Diagnostic Assessment',
    title: 'Nadi Pariksha',
    desc: 'Ancient pulse diagnosis to accurately pinpoint physiological and psychological imbalances before they manifest as disease. The foundation of every personalized treatment plan.',
    cta: 'Schedule Diagnosis',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3pO-fd47UvOcHdDeYmhmNTc-obTjsfwgA76HtCQAWlSj0N9JhNtsgc3ECXaiTlr8hHCVgvxCnUt0EPUZez72yV39iDBOI2xgECy-PeTZN-03WgLBGGzZxUnkCi_rIPRGDYqTNyJiYBmeFTrQtqPKngp0jUg3dVlfTqwrV6ZOKjk91vVVvCICwO-WmPEG2PpkJEqpcqnv22qUwVg8o5mtZPAq0q16kFNXsKF5e0y_6xYhPTMbRABHXc59JUw_Iq1t1HNkb7MlhywU',
    alt: 'Ayurvedic practitioner performing pulse diagnosis',
    full: false,
  },
  {
    id: 'rasayana',
    sub: 'Rejuvenation',
    title: 'Rasayana Therapy',
    desc: 'Specialized therapies focused on cellular regeneration, boosting immunity, and promoting longevity. Utilizing potent herbal formulations and deeply nourishing bodywork.',
    cta: 'View Therapies',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0S30HkSYZ3AXZvPFdkwY9UhbYwosN_5S2e-kJ-tJaZNAKXdjjVpcooPKQ4_9VEClB7HZEg0BRTsq-sQwWxYjGxweH0BfxiJT9SW6mr8968EVU1JxJrcsSP6qNOfC2DAK0_KVY4IDU_Zo6-Waee6yzSJ0zjhGKGkHrc_laZXpykhYRJE5eC1QjnugAV8QcRKYHKhTfkCK-quPbswfE2QWd5JTf4bf2pfO1Yg7yipx5aNikLZ7xb3evJK3cs5bf_NX_QGqcTDOX-ow',
    alt: 'Ayurvedic herbs mortar and pestle',
    full: false,
  },
  {
    id: 'womens',
    sub: 'Specialized Care',
    title: "Women's Wellness",
    desc: 'Holistic protocols addressing hormonal balance, fertility, postpartum care, and menopausal transitions through diet, herbs, and targeted therapies.',
    cta: 'Discover Programs',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAm-0J5s0J6Ot53Z_muMGGLj7OVBvNFyle7u65WE8nq5YbAM3nmH8_PwBzm4djf1VxrSeYDS7TOAo47ct50HO6AQ2GJVgF6V1yoklepPnJnfhA81CD7YDrwE3CimmvMSXKaKGZr3wXS7tftiEHF9xI8o7WnuDK1vq32DLICRAtH47qMFQxhZZ8DCstlHuSa7FHEnS8Np6_x77shDYMpYyS4QDqwrroXVbV8JeoD9HVunKMF5BhYfLHBsi_VGu245Pcg0ULUdnXOfZs',
    alt: 'Woman meditating in serene wellness space',
    full: false,
  },
  {
    id: 'chronic',
    sub: 'Integrative Care',
    title: 'Chronic Disease Management',
    desc: 'Long-term, intensive Ayurvedic protocols designed to address the root causes of chronic conditions. We work in tandem with your existing healthcare framework to provide holistic, sustaining relief and structural healing.',
    cta: 'Consult Our Specialists',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAt6l1Wv4WeyxE6NrzLpTE4yQ2IiKZg8FxQVJT6B-8gZ55Zy-yylxb0qNLSi8FlNb8TblhUW0jhlCNEu2d-k4Rlp18tcxhluAqdYC1ZP2oJPfveZQJ9A0t_0JtpPyw84s8hT3JmsENc78vCPePYNqFRgOzMmMJV7SX2rD-z71LIGJl_0SmV8q9lbp5_TcTG8pRw58EUSugv3fXCLI_iRyiklw1rj18O4PVsJLDvgHpvS-pPLxjxu5FBRqgubJJQFv7PeLluCMEEngI',
    alt: 'Modern Ayurvedic consultation room',
    full: true,
  },
];

export default function TreatmentsPage() {
  return (
    <main className="light-gradient-mesh relative" style={{ paddingTop: '7.5rem', paddingBottom: 'var(--spacing-section-gap)' }}>
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
          marginTop: '-4rem',
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

      <Footer />
    </main>
  );
}
