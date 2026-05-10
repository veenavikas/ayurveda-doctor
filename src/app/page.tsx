import Link from 'next/link';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import OfferingsGrid from '@/components/OfferingsGrid';
import MagneticButton from '@/components/MagneticButton';
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
      <section className="bg-brand-cream section-gap relative z-10" style={{ marginTop: '-4rem', paddingTop: '8rem', borderTopLeftRadius: '3rem', borderTopRightRadius: '3rem', borderTop: '1px solid rgba(200,146,42,0.3)', boxShadow: '0 -20px 60px rgba(0,0,0,0.5)' }}>
        {/* Bridge Ornament: Hero -> Legacy */}
        <div style={{ position: 'absolute', top: '-24px', left: '50%', transform: 'translateX(-50%)', width: '48px', height: '48px', background: '#F5EFE0', borderRadius: '50%', border: '1px solid rgba(200,146,42,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10, boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}>
           <span className="material-icons" style={{ color: '#C8922A', fontSize: '1.2rem' }}>auto_awesome</span>
        </div>
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
      <section className="text-brand-cream section-gap relative z-20" style={{ background: '#1C1C1C', marginTop: '-4rem', paddingTop: '8rem', borderTopLeftRadius: '3rem', borderTopRightRadius: '3rem', borderTop: '1px solid rgba(200,146,42,0.15)', boxShadow: '0 -20px 60px rgba(0,0,0,0.1)' }}>
        {/* Bridge Ornament: Legacy -> Treatments */}
        <div style={{ position: 'absolute', top: '-24px', left: '50%', transform: 'translateX(-50%)', width: '48px', height: '48px', background: '#1C1C1C', borderRadius: '50%', border: '1px solid rgba(200,146,42,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10, boxShadow: '0 4px 20px rgba(0,0,0,0.4)' }}>
           <span className="material-icons" style={{ color: '#C8922A', fontSize: '1.2rem' }}>water_drop</span>
        </div>
        <div className="container-max px-desktop">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '6rem', gap: '3rem' }}>
            <div style={{ maxWidth: '42rem' }}>
              <span className="font-label-caps" style={{ color: 'var(--color-secondary-fixed)', marginBottom: '1.5rem', display: 'block' }}>Offerings</span>
              <h2 className="text-white leading-tight" style={{ fontFamily: 'var(--font-garamond)', fontSize: 'clamp(3rem, 6vw, 5rem)' }}>Rituals of <span className="italic" style={{ color: 'var(--color-secondary-fixed)' }}>Equilibrium.</span></h2>
            </div>
            <MagneticButton
              href="/treatments"
              className="font-label-caps no-underline border-b hover:tracking-widest"
              style={{ color: 'var(--color-secondary-fixed)', borderColor: 'rgba(255,222,171,0.3)', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}
            >
              All Rituals
            </MagneticButton>
          </div>

          <OfferingsGrid />
        </div>
      </section>

      {/* ── 4. CALL TO ACTION ────────────────── */}
      <section className="relative overflow-hidden z-30" style={{ padding: '10rem 0', background: '#1B3A2D', marginTop: '-4rem', borderTopLeftRadius: '3rem', borderTopRightRadius: '3rem', borderTop: '1px solid rgba(200,146,42,0.2)', boxShadow: '0 -20px 60px rgba(0,0,0,0.4)' }}>
        {/* Bridge Ornament: Treatments -> CTA */}
        <div style={{ position: 'absolute', top: '-24px', left: '50%', transform: 'translateX(-50%)', width: '48px', height: '48px', background: '#1B3A2D', borderRadius: '50%', border: '1px solid rgba(200,146,42,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10, boxShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
           <span className="material-icons" style={{ color: '#C8922A', fontSize: '1.2rem' }}>self_improvement</span>
        </div>
        <div className="container-max px-desktop text-center flex flex-col items-center">
          <FadeUp>
            <h2 className="tracking-tighter" style={{ fontFamily: 'var(--font-garamond)', color: 'var(--color-primary)', fontSize: 'clamp(4rem, 8vw, 8rem)', marginBottom: '5rem', lineHeight: 1 }}>
              Begin Your <br/><span className="italic" style={{ color: 'var(--color-secondary)' }}>Transformation.</span>
            </h2>
          </FadeUp>
          
          <MagneticButton
            href="/consultation"
            className="group relative inline-flex items-center justify-center no-underline overflow-hidden shadow-2xl"
            style={{ background: 'var(--color-primary)', color: '#ffffff', padding: '1.5rem 4rem', border: 'none' }}
          >
            <span className="relative z-10 font-label-caps" style={{ letterSpacing: '0.3em' }}>Request Consultation</span>
            <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-700" style={{ background: 'var(--color-secondary)' }} />
          </MagneticButton>
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
