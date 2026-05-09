'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from(eyebrowRef.current, { y: 20, opacity: 0, duration: 0.7, delay: 0.3 })
      .from(titleRef.current, { y: 40, opacity: 0, duration: 1 }, '-=0.4')
      .from(subtitleRef.current, { y: 20, opacity: 0, duration: 0.8 }, '-=0.5')
      .from(lineRef.current, { scaleX: 0, opacity: 0, transformOrigin: 'left', duration: 0.6 }, '-=0.4')
      .from(ctaRef.current, { y: 15, opacity: 0, duration: 0.6 }, '-=0.3');

    // Stats CountUp logic
    gsap.from('.stat-number', {
      textContent: 0,
      duration: 2,
      ease: 'power2.out',
      snap: { textContent: 1 },
      scrollTrigger: { trigger: '.stats-section', start: 'top 80%' },
      stagger: 0.2
    });
  }, { scope: heroRef });

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{
        background: 'var(--color-primary)',
        padding: '8rem var(--spacing-margin-desktop) 4rem',
      }}
    >
      {/* Immersive Background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <video
          src="/assets/6187882-uhd_3840_2160_25fps.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.15, filter: 'grayscale(30%)' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 60%, var(--color-primary) 100%)' }} />
      </div>

      <div className="container-max relative z-10 w-full flex-grow flex flex-col justify-center">
        <div className="max-w-4xl">
          <div ref={eyebrowRef} className="flex items-center gap-4 mb-12 opacity-80">
            <div ref={lineRef} style={{ width: '40px', height: '1px', background: 'var(--color-secondary)' }} />
            <p className="font-label-caps" style={{ color: 'var(--color-secondary)', letterSpacing: '0.4em' }}>
              Est. 2009 · The Lineage of Sushrutha
            </p>
          </div>
          
          <h1 ref={titleRef} className="text-white mb-16 tracking-tight leading-[0.9]" style={{ fontFamily: 'var(--font-garamond)', fontSize: 'clamp(4rem, 10vw, 9rem)' }}>
            Restore Your <br />
            <span className="italic" style={{ color: 'var(--color-secondary-fixed)' }}>Nature.</span>
          </h1>
          
          <div className="flex flex-col md:flex-row items-start md:items-center gap-12">
            <p ref={subtitleRef} className="font-body-lg" style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '30rem', lineHeight: '1.7' }}>
              A sanctuary for those who seek biological equilibrium. We bridge ancestral nature cure methodologies with modern luxury care.
            </p>
            
            <div ref={ctaRef} className="flex items-center gap-8">
              <Link
                href="/consultation"
                className="group flex items-center justify-center bg-white text-brand-primary w-24 h-24 rounded-full no-underline transition-all duration-700 hover:scale-110"
                style={{ background: 'var(--color-secondary-fixed)', color: 'var(--color-primary)' }}
              >
                <span className="font-label-caps text-[0.6rem] text-center px-4">Start<br/>Journey</span>
              </Link>
              <Link
                href="/philosophy"
                className="font-label-caps no-underline border-b border-white/30 pb-2 text-white hover:text-brand-accent hover:border-brand-accent transition-all duration-500"
                style={{ letterSpacing: '0.2em' }}
              >
                Philosophy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section relative z-10 w-full mt-24">
        <div className="container-max flex gap-16">
          <div className="flex flex-col">
            <span className="text-5xl text-white font-heading" style={{ fontFamily: 'var(--font-garamond)' }}>
              <span className="stat-number">25</span>+
            </span>
            <span className="font-label-caps text-[0.65rem] tracking-[0.2em]" style={{ color: 'var(--color-secondary)', marginTop: '0.25rem' }}>Years</span>
          </div>
          <div className="flex flex-col">
            <span className="text-5xl text-white font-heading" style={{ fontFamily: 'var(--font-garamond)' }}>
              <span className="stat-number">15</span>k+
            </span>
            <span className="font-label-caps text-[0.65rem] tracking-[0.2em]" style={{ color: 'var(--color-secondary)', marginTop: '0.25rem' }}>Healed</span>
          </div>
        </div>
      </div>

      {/* Vertical Text Accent */}
      <div className="hidden xl:block absolute right-12 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none z-10">
        <span className="font-label-caps text-[0.6rem] tracking-[1em] text-white" style={{ writingMode: 'vertical-rl' }}>
          SUSHRUTHA NATURE CURE · ANCESTRAL WISDOM
        </span>
      </div>
    </section>
  );
}
