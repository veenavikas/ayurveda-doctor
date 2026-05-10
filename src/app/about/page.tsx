import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Sushrutha Nature Cure',
  description: 'Learn about our practitioners and ancestral wisdom.',
};

export default function AboutPage() {
  return (
    <main className="light-gradient-mesh relative flex flex-col min-h-screen overflow-hidden">
      {/* Floating Orbs for Interactivity & Gradients */}
      <div className="orb orb-1" style={{ top: '20%', left: '-10%', width: '40vw', height: '40vw', opacity: 0.3, filter: 'blur(100px)' }}></div>
      <div className="orb orb-2" style={{ bottom: '10%', right: '-10%', width: '50vw', height: '50vw', opacity: 0.2, filter: 'blur(120px)' }}></div>

      <div className="flex-grow relative z-10">
        <section className="w-full pt-40 pb-32 px-[5%]">
          <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="flex-1">
              <span className="font-label-caps text-gradient block mb-6" style={{ letterSpacing: '0.3em' }}>Our Lineage</span>
              <h1 className="font-display-hero mb-8 drop-shadow-sm" style={{ color: 'var(--color-primary)', lineHeight: 1.1 }}>
                The Practitioners <span className="italic" style={{ color: 'var(--color-secondary)' }}>&amp;</span> Wisdom
              </h1>
              <p className="font-body-lg text-black/80 max-w-[800px] leading-relaxed mb-10">
                Rooted in the lineage of the great Sushrutha, our practitioners combine ancient diagnostic techniques with profound understanding of nature cure. We are dedicated to restoring your biological equilibrium through rigorous, personalized treatments.
              </p>
              
              <div className="glass-panel p-8 rounded-3xl inline-block backdrop-blur-3xl border border-white/40 shadow-[0_20px_40px_rgba(0,0,0,0.05)]">
                <div className="flex items-center gap-8">
                  <div>
                    <h3 className="font-headline-md text-brand-primary mb-2" style={{ color: 'var(--color-primary)' }}>100%</h3>
                    <p className="font-label-caps" style={{ color: 'var(--color-secondary)' }}>Natural Ingredients</p>
                  </div>
                  <div className="w-[1px] h-12 bg-black/10"></div>
                  <div>
                    <h3 className="font-headline-md text-brand-primary mb-2" style={{ color: 'var(--color-primary)' }}>Authentic</h3>
                    <p className="font-label-caps" style={{ color: 'var(--color-secondary)' }}>Kerala Ayurveda</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 relative w-full h-[600px] rounded-[2rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.15)] group">
              <img 
                src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=2070&auto=format&fit=crop" 
                alt="Ayurvedic herbs" 
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent mix-blend-multiply opacity-50 transition-opacity duration-700 group-hover:opacity-30"></div>
            </div>

          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
