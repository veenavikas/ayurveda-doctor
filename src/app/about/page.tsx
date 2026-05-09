import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Sushrutha Nature Cure',
  description: 'Learn about our practitioners and ancestral wisdom.',
};

export default function AboutPage() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--color-surface-container-lowest)', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flexGrow: 1 }}>
        <section style={{ width: '100%', paddingTop: '10rem', paddingBottom: '6rem', paddingLeft: '5%', paddingRight: '5%' }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8922A', display: 'block', marginBottom: '20px' }}>Our Lineage</span>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(3rem, 6vw, 6rem)', color: '#1B3A2D', marginBottom: '2rem', lineHeight: 1.1 }}>The Practitioners</h1>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1.2rem', color: '#1C1C1C', opacity: 0.8, maxWidth: '800px', lineHeight: 1.8 }}>
              Rooted in the lineage of the great Sushrutha, our practitioners combine ancient diagnostic techniques with profound understanding of nature cure. We are dedicated to restoring your biological equilibrium.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
