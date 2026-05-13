'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import MagneticButton from './MagneticButton';

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
  const glowRef = useRef<HTMLDivElement>(null);
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from(eyebrowRef.current, { y: 20, opacity: 0, duration: 0.7, delay: 0.3 })
      .from(titleRef.current, { y: 40, opacity: 0, duration: 1 }, '-=0.4')
      .from(subtitleRef.current, { y: 20, opacity: 0, duration: 0.8 }, '-=0.5')
      .from(lineRef.current, { scaleX: 0, opacity: 0, transformOrigin: 'left', duration: 0.6 }, '-=0.4')
      .from(ctaRef.current, { y: 15, opacity: 0, duration: 0.6 }, '-=0.3');
  }, { scope: heroRef });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        gsap.to(glowRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.6,
          ease: 'power2.out'
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="gradient-mesh relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{
        padding: '8rem var(--spacing-margin-desktop) 4rem',
      }}
    >
      {/* Base Video Layer (z-index 0) */}
      <video
        src="/assets/6187882-uhd_3840_2160_25fps.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0, opacity: 0.2, filter: 'grayscale(20%) contrast(1.2)' }}
      />

      {/* LAYER 1 — Primary darkness gradient (z-index 1) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0.15) 30%, rgba(0, 0, 0, 0.10) 50%, rgba(27, 58, 45, 0.75) 85%, rgba(27, 58, 45, 1.0) 100%)',
        }}
      />

      {/* LAYER 2 — Left content vignette (z-index 2) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          background: 'linear-gradient(to right, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.40) 40%, transparent 65%)',
        }}
      />

      {/* LAYER 3 — Gold warmth bloom (z-index 3) */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '40%',
          zIndex: 3,
          background: 'linear-gradient(to top, rgba(200, 146, 42, 0.08) 0%, transparent 100%)',
        }}
      />

      {/* LAYER 4 — Grain texture (z-index 4) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 4,
          opacity: 0.035,
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
          pointerEvents: 'none',
        }}
      />

      <div className="container-max relative z-10 w-full flex-grow flex flex-col justify-center">
        <div className="max-w-4xl">
          <div ref={eyebrowRef} className="flex items-center gap-4 mb-12 opacity-80">
            <div ref={lineRef} style={{ width: '60px', height: '1px', background: 'var(--color-secondary-fixed)' }} />
            <p className="font-label-caps" style={{ color: 'var(--color-secondary-fixed)', letterSpacing: '0.4em' }}>
              Est. 2009 · The Lineage of Sushrutha
            </p>
          </div>
          
          <h1 ref={titleRef} className="text-white mb-16 tracking-tight leading-[0.9]" style={{ fontFamily: 'var(--font-garamond)', fontSize: 'clamp(4rem, 10vw, 9rem)' }}>
            Restore Your <br />
            <span className="italic text-gradient pr-4">Nature.</span>
          </h1>
          
          <div className="flex flex-col md:flex-row items-start md:items-center gap-12">
            <p ref={subtitleRef} className="font-body-lg" style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '30rem', lineHeight: '1.7', fontWeight: 300 }}>
              A sanctuary for those who seek biological equilibrium. We bridge ancestral nature cure methodologies with modern luxury care.
            </p>
            
            <div ref={ctaRef} className="flex items-center gap-8">
              <MagneticButton
                href="/consultation"
                className="btn-shimmer group flex items-center justify-center bg-white text-brand-primary w-28 h-28 rounded-full no-underline shadow-[0_0_40px_rgba(254,194,86,0.3)] hover:shadow-[0_0_60px_rgba(254,194,86,0.6)]"
                style={{ background: 'var(--color-secondary-fixed)', color: 'var(--color-primary)' }}
              >
                <span className="font-label-caps text-[0.65rem] text-center px-4">Start<br/>Journey</span>
              </MagneticButton>
              <Link
                href="/philosophy"
                className="font-label-caps no-underline border-b border-white/30 pb-2 text-white hover:text-brand-accent hover:border-white transition-all duration-500"
                style={{ letterSpacing: '0.2em' }}
              >
                Philosophy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div ref={statsRef} className="stats-section relative z-10 w-full mt-24">
        <div className="container-max flex gap-16">
          <div className="flex flex-col relative group cursor-pointer">
            <div className="absolute -inset-4 bg-white/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="text-5xl text-white font-heading relative z-10" style={{ fontFamily: 'var(--font-garamond)' }}>
              <CountUp end={25} suffix="+" duration={2.5} delay={0.2} start={0} startOnMount={false} redraw={statsInView} />
            </span>
            <span className="font-label-caps text-[0.65rem] tracking-[0.2em] relative z-10" style={{ color: 'var(--color-secondary-fixed)', marginTop: '0.25rem' }}>Years</span>
          </div>
          <div className="flex flex-col relative group cursor-pointer">
            <div className="absolute -inset-4 bg-white/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="text-5xl text-white font-heading relative z-10" style={{ fontFamily: 'var(--font-garamond)' }}>
              <CountUp end={15} suffix="k+" duration={2} delay={0.4} start={0} startOnMount={false} redraw={statsInView} />
            </span>
            <span className="font-label-caps text-[0.65rem] tracking-[0.2em] relative z-10" style={{ color: 'var(--color-secondary-fixed)', marginTop: '0.25rem' }}>Healed</span>
          </div>
        </div>
      </div>

      {/* Vertical Text Accent */}
      <div className="hidden xl:block absolute right-12 top-1/2 -translate-y-1/2 opacity-30 pointer-events-none z-10">
        <span className="font-label-caps text-[0.6rem] tracking-[1em] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20" style={{ writingMode: 'vertical-rl' }}>
          AVM NATURE CARE · ANCESTRAL WISDOM
        </span>
      </div>
    </section>
  );
}
