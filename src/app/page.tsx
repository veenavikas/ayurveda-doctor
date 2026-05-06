'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import FadeUp from '@/components/FadeUp';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Reveal images on scroll
    const reveals = document.querySelectorAll('.image-reveal');
    reveals.forEach((reveal) => {
      ScrollTrigger.create({
        trigger: reveal,
        start: 'top 80%',
        onEnter: () => reveal.classList.add('revealed')
      });
    });

    // Parallax hero image
    gsap.to('.hero-img', {
      yPercent: 20,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });
  }, { scope: containerRef });

  return (
    <main ref={containerRef} className="overflow-hidden">
      
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="hero-section relative h-screen min-h-[900px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="hero-img absolute inset-0 bg-cover bg-center transition-transform duration-[10s] ease-linear scale-110"
            style={{ backgroundImage: "url('/assets/hero_bg.png')" }}
          />
          <div className="absolute inset-0 bg-brand-primary/30 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/80 via-brand-ink/20 to-transparent" />
        </div>
        
        <div className="container-wide relative z-10 text-center">
          <FadeUp delay={0.2}>
            <div className="flex items-center justify-center gap-6 mb-12 opacity-80">
              <div className="w-16 h-[1px] bg-brand-accent" />
              <span className="text-[0.7rem] uppercase tracking-[0.6em] text-brand-cream">Ancient Wisdom • Modern Luxury</span>
              <div className="w-16 h-[1px] bg-brand-accent" />
            </div>
          </FadeUp>
          
          <h1 className="text-7xl md:text-[9.5rem] leading-[0.85] text-brand-cream mb-16 tracking-tight">
            The Art <br/>of <span className="italic">Pure Healing.</span>
          </h1>
          
          <FadeUp delay={0.8}>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <Link href="/contact" className="btn-premium btn-premium-primary">
                Book Your Retreat
              </Link>
              <Link href="/treatments" className="text-[0.65rem] font-bold uppercase tracking-[0.4em] text-brand-cream hover:text-brand-accent transition-all duration-500 border-b border-brand-cream/30 pb-1">
                Explore Treatments
              </Link>
            </div>
          </FadeUp>
        </div>

        {/* Scroll Prompt */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 opacity-40">
           <span className="text-[0.55rem] uppercase tracking-[0.5em] text-brand-cream">Scroll To Discover</span>
           <div className="w-[1px] h-20 bg-gradient-to-b from-brand-accent to-transparent" />
        </div>
      </section>

      {/* 2. THE HERITAGE - TEXT FOCUS */}
      <section className="section-padding bg-brand-cream">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
            <div className="lg:col-span-6 space-y-12">
              <FadeUp>
                <span className="text-brand-accent text-[0.65rem] font-bold uppercase tracking-[0.5em]">Our Legacy</span>
                <h2 className="text-5xl md:text-8xl leading-none">Heritage meets <br/><span className="italic text-brand-primary">Precision.</span></h2>
              </FadeUp>
              <FadeUp delay={0.2}>
                <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-xl">
                  Ayurveda is not just a treatment; it is a profound understanding of life&apos;s biological rhythms. We bridge 5,000 years of clinical wisdom with the highest standards of modern luxury care.
                </p>
              </FadeUp>
              <FadeUp delay={0.4}>
                <div className="flex items-center gap-10 pt-8">
                  <div className="space-y-2">
                    <span className="text-4xl font-heading text-brand-primary italic">25+</span>
                    <p className="text-[0.55rem] uppercase tracking-[0.3em] text-gray-400">Years of Clinical Excellence</p>
                  </div>
                  <div className="w-[1px] h-16 bg-gray-200" />
                  <div className="space-y-2">
                    <span className="text-4xl font-heading text-brand-primary italic">15k+</span>
                    <p className="text-[0.55rem] uppercase tracking-[0.3em] text-gray-400">Healed Souls Globally</p>
                  </div>
                </div>
              </FadeUp>
            </div>
            
            <div className="lg:col-span-5 lg:col-start-8">
              <div className="image-reveal aspect-[4/5]">
                <img src="/assets/panchakarma_treatment.png" className="img-luxury" alt="Treatment" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TREATMENTS - LUXURY GALLERY */}
      <section className="section-padding bg-white border-y border-brand-primary/5">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
            <FadeUp>
              <span className="text-brand-accent text-[0.65rem] font-bold uppercase tracking-[0.5em] block mb-6">Healing Rituals</span>
              <h2 className="text-5xl md:text-7xl leading-none italic">Curated <br/>Experience.</h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <Link href="/treatments" className="btn-premium btn-premium-outline">
                View All Services
              </Link>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { title: 'Panchakarma', sub: 'Deep Detoxification', img: '/assets/panchakarma_treatment.png' },
              { title: 'Nadi Pariksha', sub: 'Vibrational Diagnosis', img: '/assets/hero_bg.png' },
              { title: 'Rasayana', sub: 'Longevity Protocols', img: '/assets/doctor_portrait.png' }
            ].map((item, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <Link href="/treatments" className="group block space-y-10 text-center">
                  <div className="image-reveal aspect-[3/4]">
                    <img src={item.img} className="img-luxury group-hover:scale-110 transition-transform duration-1000 grayscale-[40%] group-hover:grayscale-0" alt={item.title} />
                  </div>
                  <div className="space-y-3">
                    <span className="text-[0.6rem] uppercase tracking-[0.4em] text-brand-accent font-bold">{item.sub}</span>
                    <h3 className="text-4xl group-hover:text-brand-accent transition-colors duration-500">{item.title}</h3>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE PRACTITIONER - CLINICAL AUTHORITY */}
      <section className="section-padding bg-brand-sage overflow-hidden">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 items-center">
            <div className="lg:col-span-5 relative">
              <FadeUp>
                <div className="relative z-10 aspect-[4/5] overflow-hidden border-[20px] border-white shadow-2xl">
                  <img src="/assets/doctor_portrait.png" className="w-full h-full object-cover grayscale" alt="Doctor" />
                </div>
              </FadeUp>
              {/* Artistic Blobs */}
              <div className="absolute -top-20 -left-20 w-80 h-80 bg-brand-accent/20 rounded-full blur-[100px] -z-10" />
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand-primary/10 rounded-full blur-[100px] -z-10" />
            </div>

            <div className="lg:col-span-6 lg:col-start-7 space-y-16">
              <FadeUp>
                <span className="text-brand-accent text-[0.65rem] font-bold uppercase tracking-[0.5em] block mb-8">Lead Physician</span>
                <h2 className="text-6xl md:text-8xl leading-[0.85] uppercase tracking-tighter">Guiding <br/>the <span className="italic text-brand-accent lowercase">Spirit.</span></h2>
              </FadeUp>
              
              <div className="space-y-8 max-w-xl">
                <FadeUp delay={0.2}>
                  <p className="text-xl md:text-2xl text-brand-primary font-light leading-relaxed">
                    Dr. [Name], BAMS, MD (Ayu) is a globally recognized expert in identifying biological root causes through classical Ayurvedic methodologies.
                  </p>
                </FadeUp>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
                  {[
                    'Clinical Gold Medalist',
                    'Nadi Pariksha Expert',
                    'Holistic Chronic Care',
                    'Integrative Oncology'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-6">
                      <div className="w-8 h-[1px] bg-brand-accent" />
                      <span className="text-[0.65rem] uppercase tracking-[0.3em] font-bold text-brand-primary">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <FadeUp delay={0.4}>
                <Link href="/contact" className="btn-premium btn-premium-primary">
                  Request Consultation
                </Link>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* 5. IMMERSIVE TESTIMONIALS */}
      <section className="section-padding bg-white">
        <div className="container-wide text-center">
           <FadeUp>
              <h2 className="text-6xl md:text-9xl mb-32 italic text-gray-100 uppercase tracking-tighter leading-none select-none">Global Stories.</h2>
           </FadeUp>
           
           <div className="max-w-5xl mx-auto space-y-32">
             {[
               { text: "My chronic insomnia of 10 years disappeared after just 3 weeks of Nadi-based therapy at the sanctuary. Simply life-changing.", author: "Jameson R.", city: "London" },
               { text: "The most profound clinical healing experience I have ever had. The attention to biological detail is unmatched.", author: "Elena V.", city: "New York" }
             ].map((t, i) => (
               <FadeUp key={i}>
                 <div className="space-y-10">
                   <p className="text-3xl md:text-5xl font-light italic leading-tight text-brand-primary">
                     &ldquo;{t.text}&rdquo;
                   </p>
                   <div className="flex items-center justify-center gap-6">
                     <span className="text-[0.7rem] uppercase tracking-[0.4em] font-bold">{t.author}</span>
                     <div className="w-12 h-[1px] bg-brand-accent" />
                     <span className="text-[0.7rem] uppercase tracking-[0.4em] text-gray-400">{t.city}</span>
                   </div>
                 </div>
               </FadeUp>
             ))}
           </div>
        </div>
      </section>

      {/* 6. FINAL CALL TO ACTION */}
      <section className="section-padding bg-brand-primary text-brand-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/assets/hero_bg.png')] bg-cover bg-center grayscale blur-3xl scale-125" />
        <div className="container-wide relative z-10 text-center space-y-20">
          <h2 className="text-7xl md:text-[11rem] leading-[0.8] uppercase tracking-tighter font-light">
            Begin Your <br/><span className="italic text-brand-accent">Transition.</span>
          </h2>
          <FadeUp>
             <Link href="/contact" className="btn-premium !bg-brand-cream !text-brand-primary hover:!bg-brand-accent hover:!text-white">
                Start Your Journey
             </Link>
          </FadeUp>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer style={{ paddingTop: '300px', paddingBottom: '150px' }} className="bg-brand-ink text-brand-cream border-t border-white/10">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-24">
            <div className="md:col-span-5 space-y-12">
               <Link href="/" className="flex flex-col items-start">
                  <span className="text-4xl font-heading tracking-[0.1em] uppercase">Ayurveda</span>
                  <span className="text-[0.55rem] tracking-[0.6em] uppercase text-brand-accent mt-1">The Sanctuary</span>
               </Link>
               <p className="text-brand-cream/40 font-light text-lg leading-relaxed max-w-sm">
                 A global clinical destination for the restoration of biological equilibrium through ancient manuscripts.
               </p>
            </div>
            
            <div className="md:col-span-2 space-y-10">
               <h4 className="text-[0.6rem] uppercase tracking-[0.4em] text-brand-accent font-bold">Offerings</h4>
               <ul className="space-y-6 text-[0.75rem] font-medium text-brand-cream/60">
                 <li><Link href="/treatments" className="hover:text-brand-accent transition-colors">Panchakarma</Link></li>
                 <li><Link href="/treatments" className="hover:text-brand-accent transition-colors">Nadi Pariksha</Link></li>
                 <li><Link href="/treatments" className="hover:text-brand-accent transition-colors">Rasayana</Link></li>
                 <li><Link href="/treatments" className="hover:text-brand-accent transition-colors">Chronic Care</Link></li>
               </ul>
            </div>

            <div className="md:col-span-2 space-y-10">
               <h4 className="text-[0.6rem] uppercase tracking-[0.4em] text-brand-accent font-bold">Sanctuary</h4>
               <ul className="space-y-6 text-[0.75rem] font-medium text-brand-cream/60">
                 <li><Link href="/about" className="hover:text-brand-accent transition-colors">Our History</Link></li>
                 <li><Link href="/philosophy" className="hover:text-brand-accent transition-colors">Methodology</Link></li>
                 <li><Link href="/testimonials" className="hover:text-brand-accent transition-colors">Testimonials</Link></li>
                 <li><Link href="/contact" className="hover:text-brand-accent transition-colors">Consultation</Link></li>
               </ul>
            </div>

            <div className="md:col-span-3 space-y-12">
               <h4 className="text-[0.6rem] uppercase tracking-[0.4em] text-brand-accent font-bold">Global Presence</h4>
               <div className="space-y-6 text-brand-cream/60 text-sm">
                 <p>108 Lotus Temple Road, Kerala, India 682001</p>
                 <p className="text-brand-accent font-bold tracking-widest">+91 98765 43210</p>
                 <p>healing@ayurvedasanctuary.com</p>
               </div>
            </div>
          </div>

          <div className="mt-40 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[0.55rem] uppercase tracking-[0.4em] text-white/20">
             <span>© 2026 Ayurveda Sanctuary • All Rights Reserved</span>
             <div className="flex gap-12">
               <span>Privacy</span>
               <span>Terms</span>
               <span>Cookies</span>
             </div>
          </div>
        </div>
      </footer>

    </main>
  );
}
