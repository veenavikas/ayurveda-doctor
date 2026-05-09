import Link from 'next/link';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sushrutha Nature Cure | Ancestral Wisdom. Modern Equilibrium.',
  description:
    'A sanctuary of Nature Cure rooted in the lineage of the Father of Surgery. Restoring biological equilibrium through classical precision and ancestral wisdom.',
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />

      {/* ── 2. THE LEGACY ──────────────────── */}
      <section className="bg-brand-cream section-gap relative">
        <div className="container-max px-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
            <div className="lg:col-span-5 relative">
              <div style={{ position: 'relative', zIndex: 1, paddingRight: '2rem' }}>
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUtJu1IHi8Gjy-6snO3pc2rSr2bg18nOos-1-7cyi71wApqS-D9n8msPdGNI8nXpboSXpEWTUiqBz1f48xdayKGOBvd6NLf9-gWjhGybk4FmPZZ0XtZDqVoUlN0ZMf3-dK-DHC_BwQwig13S_lPUIWcZ-Q_8CwM7PanwJLkcloVdeuPNwgn_1rofzPdCnK-bRhMK3Wz7QxqwhGrC8TAwKJjX2Gzpy-FfU7ANTlBOevKJ-Ka2g9uOqxUauF4JTbf2kvAhU8ID8dw9M"
                  alt="Traditional Healing"
                  className="w-full grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl"
                  style={{ aspectRatio: '4/5', objectFit: 'cover' }}
                />
              </div>
              <div 
                className="hidden lg:flex items-center justify-center text-center shadow-2xl" 
                style={{ 
                  position: 'absolute', 
                  bottom: '-2rem', 
                  right: '-1rem', 
                  width: '320px', 
                  height: '320px', 
                  padding: '3rem', 
                  background: 'var(--color-primary)',
                  zIndex: 2 
                }}
              >
                <p className="text-white italic leading-relaxed" style={{ fontFamily: 'var(--font-garamond)', fontSize: '1.25rem' }}>
                  "The physician who is proficient in surgery and medical science is like a bird with two wings."
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-12">
              <span className="font-label-caps" style={{ color: 'var(--color-secondary)', fontSize: '0.7rem' }}>Ancient Lineage</span>
              <h2 className="text-6xl md:text-8xl leading-[0.9] text-brand-primary" style={{ fontFamily: 'var(--font-garamond)', color: 'var(--color-primary)' }}>
                Rooted in the <br/>
                <span className="italic" style={{ color: 'var(--color-secondary)' }}>Great Sushrutha.</span>
              </h2>
              <p className="font-body-lg" style={{ color: 'var(--color-on-surface-variant)', maxWidth: '34rem' }}>
                We don't just treat symptoms; we restore the primordial biological rhythm. Our methodology follows the precise surgical focus of Sushrutha, applied to the gentle restoration of nature cure.
              </p>
              <div className="pt-8">
                <Link
                  href="/about"
                  className="group flex items-center gap-6 no-underline"
                >
                  <div className="w-12 h-12 rounded-full border border-brand-primary flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-all duration-500" style={{ borderColor: 'var(--color-primary)' }}>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </div>
                  <span className="font-label-caps text-[0.65rem] tracking-widest text-brand-primary" style={{ color: 'var(--color-primary)' }}>Discover Our History</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. RITUALS GRID ─────────────────── */}
      <section className="bg-brand-ink text-brand-cream section-gap" style={{ background: 'var(--color-tertiary)' }}>
        <div className="container-max px-desktop">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '6rem', gap: '3rem' }}>
            <div style={{ maxWidth: '42rem' }}>
              <span className="font-label-caps" style={{ color: 'var(--color-secondary-fixed)', marginBottom: '1.5rem', display: 'block' }}>Offerings</span>
              <h2 className="text-white leading-tight" style={{ fontFamily: 'var(--font-garamond)', fontSize: 'clamp(3rem, 6vw, 5rem)' }}>Rituals of <span className="italic" style={{ color: 'var(--color-secondary-fixed)' }}>Equilibrium.</span></h2>
            </div>
            <Link
              href="/treatments"
              className="font-label-caps no-underline border-b hover:tracking-widest transition-all duration-500"
              style={{ color: 'var(--color-secondary-fixed)', borderColor: 'rgba(255,222,171,0.3)', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}
            >
              All Rituals
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1px', background: 'rgba(255,255,255,0.08)' }}>
            {[
              { title: 'Panchakarma', sub: 'Biological Reset', icon: 'spa' },
              { title: 'Nadi Pariksha', sub: 'Pulse Wisdom', icon: 'fingerprint' },
              { title: 'Rasayana', sub: 'Cellular Rejuvenation', icon: 'energy_savings_leaf' },
              { title: 'Marma Therapy', sub: 'Vital Energy', icon: 'self_improvement' },
            ].map(({ title, sub, icon }) => (
              <div
                key={title}
                className="group relative transition-all duration-700 hover:bg-brand-primary"
                style={{ background: 'var(--color-tertiary)', padding: '3.5rem 2.5rem' }}
              >
                <div className="relative z-10">
                  <span className="material-symbols-outlined transition-transform duration-700 group-hover:-translate-y-2" style={{ color: 'var(--color-secondary-fixed)', fontSize: '2.5rem', marginBottom: '2rem', display: 'block' }}>{icon}</span>
                  <p className="font-label-caps" style={{ color: 'var(--color-secondary-fixed)', fontSize: '0.6rem', marginBottom: '1rem' }}>{sub}</p>
                  <h3 className="text-white" style={{ fontFamily: 'var(--font-garamond)', fontSize: '1.75rem', fontWeight: 400 }}>{title}</h3>
                </div>
                {/* Hover Reveal */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ background: 'var(--color-primary-container)' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. CALL TO ACTION ────────────────── */}
      <section className="bg-brand-cream relative overflow-hidden" style={{ padding: '10rem 0', background: 'var(--color-surface-container-low)' }}>
        <div className="container-max px-desktop text-center flex flex-col items-center">
          <FadeUp>
            <h2 className="tracking-tighter" style={{ fontFamily: 'var(--font-garamond)', color: 'var(--color-primary)', fontSize: 'clamp(4rem, 8vw, 8rem)', marginBottom: '5rem', lineHeight: 1 }}>
              Begin Your <br/><span className="italic" style={{ color: 'var(--color-secondary)' }}>Transformation.</span>
            </h2>
          </FadeUp>
          
          <Link
            href="/consultation"
            className="group relative inline-flex items-center justify-center no-underline overflow-hidden transition-all duration-700 hover:scale-105 shadow-2xl"
            style={{ background: 'var(--color-primary)', color: '#ffffff', padding: '1.5rem 4rem', border: 'none' }}
          >
            <span className="relative z-10 font-label-caps" style={{ letterSpacing: '0.3em' }}>Request Consultation</span>
            <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-700" style={{ background: 'var(--color-secondary)' }} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// ── Simple Reveal Component ────────────────
function FadeUp({ children }: { children: React.ReactNode }) {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-12 duration-1000 ease-out fill-mode-forwards">
      {children}
    </div>
  );
}
