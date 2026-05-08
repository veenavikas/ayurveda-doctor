import Link from 'next/link';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Prana Ayurveda | Ancient Wisdom. Modern Healing.',
  description:
    'Where ancient roots heal modern ailments. A curated journey back to your essential nature through the clinical precision of classical Ayurveda.',
};

export default function HomePage() {
  return (
    <main>
      {/* ── Hero ─────────────────────────────── */}
      <section
        className="botanical-bg"
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '8rem var(--spacing-margin-mobile) 4rem',
          overflow: 'hidden',
        }}
      >
        {/* Background image */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVtBudeg1BnzF08pjhK8hYLONiFrdG49Ioz2WhruDiG_z3EEf52RWmHg9EWwruY9CsfDzSi_5hKi21f672eotvPQqvZINBZaSX_TwjKig_c1dBOaPEAxIUtY4CyQAwsAuQqJthPd8vrW6TBENPQ_8OOljT2QDlze1eBchKZMvT6Fpd2EuVE3A3URZ07E9uB6dO7H6ahtih-FdxdgsIuxOTbwQAett1KdnUdQZBCGLQT1QWykT73HtoDf-iEMvZi-RBdf0HTqu3pmw"
            alt="Verdant medicinal leaves in golden hour light"
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.18 }}
          />
        </div>

        <div className="container-max" style={{ position: 'relative', zIndex: 10, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <p className="font-label-caps" style={{ color: 'var(--color-secondary)', marginBottom: '1.5rem', letterSpacing: '0.25em' }}>
            Prana Ayurveda · Est. 2009
          </p>
          <h1 className="font-display-hero" style={{ color: 'var(--color-primary)', marginBottom: '2rem', maxWidth: '900px' }}>
            Ancient Wisdom.<br />Modern Healing.
          </h1>
          <p className="font-body-lg" style={{ color: 'var(--color-on-surface-variant)', maxWidth: '36rem', marginBottom: '3rem' }}>
            Where ancient roots heal modern ailments. A curated journey back to your essential nature through the clinical precision of classical Ayurveda.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center' }}>
            <Link
              href="/consultation"
              className="font-label-caps btn-shimmer"
              style={{
                background: 'var(--color-primary)',
                color: 'var(--color-secondary-fixed)',
                padding: '1.25rem 2.5rem',
                textDecoration: 'none',
                boxShadow: '0 10px 30px rgba(4,36,25,0.15)',
                transition: 'all 0.3s',
                display: 'inline-block',
              }}
            >
              Begin Your Healing Journey
            </Link>
            <Link
              href="/philosophy"
              className="font-label-caps"
              style={{
                border: '1px solid var(--color-outline-variant)',
                color: 'var(--color-primary)',
                padding: '1.25rem 2.5rem',
                textDecoration: 'none',
                transition: 'all 0.3s',
                display: 'inline-block',
              }}
            >
              Our Philosophy
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', opacity: 0.4 }}>
          <span className="font-label-caps" style={{ color: 'var(--color-primary)', fontSize: '0.625rem' }}>Scroll</span>
          <div style={{ width: '1px', height: '3rem', background: 'var(--color-primary)' }} />
        </div>
      </section>

      {/* ── Problem / Quote ──────────────────── */}
      <section
        style={{
          background: 'var(--color-tertiary)',
          padding: 'var(--spacing-section-gap) var(--spacing-margin-mobile)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="container-max" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
          <div style={{ maxWidth: '48rem', margin: '0 auto', textAlign: 'center' }}>
            <h2 className="font-headline-lg" style={{ color: 'var(--color-secondary-container)', marginBottom: '2rem' }}>
              Modern life disconnects us from our nature.
            </h2>
            <p className="font-body-lg" style={{ color: 'var(--color-tertiary-fixed-dim)' }}>
              We exist in a state of constant acceleration, detached from the rhythms of the earth and the whispers of our own bodies. True healing begins when we pause, listen, and realign with our primal constitution.
            </p>
          </div>
        </div>
      </section>

      {/* ── Solution ─────────────────────────── */}
      <section
        className="botanical-bg"
        style={{
          background: 'var(--color-surface)',
          padding: 'var(--spacing-section-gap) var(--spacing-margin-mobile)',
          position: 'relative',
        }}
      >
        <div
          className="container-max"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '4rem',
            alignItems: 'center',
          }}
        >
          {/* Image column */}
          <div style={{ position: 'relative' }}>
            <div style={{ aspectRatio: '3/4', overflow: 'hidden', borderRadius: '0.25rem', boxShadow: '0 25px 60px rgba(0,0,0,0.15)' }}>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUtJu1IHi8Gjy-6snO3pc2rSr2bg18nOos-1-7cyi71wApqS-D9n8msPdGNI8nXpboSXpEWTUiqBz1f48xdayKGOBvd6NLf9-gWjhGybk4FmPZZ0XtZDqVoUlN0ZMf3-dK-DHC_BwQwig13S_lPUIWcZ-Q_8CwM7PanwJLkcloVdeuPNwgn_1rofzPdCnK-bRhMK3Wz7QxqwhGrC8TAwKJjX2Gzpy-FfU7ANTlBOevKJ-Ka2g9uOqxUauF4JTbf2kvAhU8ID8dw9M"
                alt="Distinguished Ayurvedic doctor arranging medicinal herbs"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            {/* Glass card */}
            <div
              className="glass-card"
              style={{
                position: 'absolute',
                bottom: '-2rem',
                right: '-2rem',
                padding: '2rem',
                width: '16rem',
                display: 'none',
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '2.5rem', color: 'var(--color-primary)', marginBottom: '1rem', display: 'block' }}>spa</span>
              <p className="font-label-caps" style={{ color: 'var(--color-primary)' }}>Dr. Ananya Sharma</p>
              <p className="font-body-md" style={{ color: 'var(--color-on-surface-variant)', marginTop: '0.5rem' }}>BAMS, MD (Ayu). Custodian of Ancestral Wellness.</p>
            </div>
          </div>

          {/* Text column */}
          <div>
            <p className="font-label-caps" style={{ color: 'var(--color-on-primary-container)', marginBottom: '1rem' }}>The Solution</p>
            <h2 className="font-headline-lg" style={{ color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
              Restoring Balance Through Classical Precision.
            </h2>
            <p className="font-body-lg" style={{ color: 'var(--color-on-surface-variant)', marginBottom: '2rem' }}>
              Ayurveda is not a mere alternative; it is the original science of life. By understanding your unique Dosha, we curate bespoke protocols that address the root cause of dis-ease, not just the symptom.
            </p>
            <Link
              href="/about"
              className="font-label-caps"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--color-secondary-container)',
                textDecoration: 'none',
                transition: 'color 0.3s',
              }}
            >
              Meet The Doctor
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>arrow_right_alt</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Services Preview ─────────────────── */}
      <section style={{ background: 'var(--color-surface-container-low)', padding: 'var(--spacing-section-gap) var(--spacing-margin-mobile)' }}>
        <div className="container-max">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p className="font-label-caps" style={{ color: 'var(--color-secondary)', marginBottom: '1rem' }}>Our Offerings</p>
            <h2 className="font-headline-lg" style={{ color: 'var(--color-primary)' }}>Rituals of Healing</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {[
              { title: 'Panchakarma', sub: 'Signature Detoxification', icon: 'spa' },
              { title: 'Nadi Pariksha', sub: 'Diagnostic Assessment', icon: 'fingerprint' },
              { title: 'Rasayana', sub: 'Rejuvenation', icon: 'energy_savings_leaf' },
              { title: "Women's Wellness", sub: 'Specialized Care', icon: 'self_improvement' },
            ].map(({ title, sub, icon }) => (
              <Link
                key={title}
                href="/treatments"
                style={{ textDecoration: 'none' }}
              >
                <div
                  style={{
                    background: 'var(--color-surface-container-lowest)',
                    padding: '2.5rem 2rem',
                    borderTop: '2px solid var(--color-outline-variant)',
                    transition: 'border-color 0.3s, transform 0.3s',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderTopColor = 'var(--color-secondary-container)';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderTopColor = 'var(--color-outline-variant)';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '2rem', color: 'var(--color-on-primary-container)', marginBottom: '1.5rem', display: 'block' }}>{icon}</span>
                  <p className="font-label-caps" style={{ color: 'var(--color-secondary)', marginBottom: '0.75rem' }}>{sub}</p>
                  <h3 className="font-headline-md" style={{ color: 'var(--color-primary)' }}>{title}</h3>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link
              href="/treatments"
              className="font-label-caps btn-shimmer"
              style={{
                background: 'var(--color-primary)',
                color: 'var(--color-secondary-fixed)',
                padding: '1.25rem 3rem',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              View All Treatments
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
