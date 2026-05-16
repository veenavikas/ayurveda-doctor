'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';

export default function ConsultationPage() {
  const [submitted, setSubmitted] = useState(false);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        gsap.to(glowRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.8,
          ease: 'power2.out'
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main
      className="gradient-mesh relative min-h-screen overflow-hidden flex flex-col"
      style={{ paddingTop: '14rem', paddingBottom: '10rem', paddingLeft: '5%', paddingRight: '5%' }}
    >
      {/* Interactive Glow */}
      <div ref={glowRef} className="interactive-glow" style={{ top: 0, left: 0, width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(254,194,86,0.15) 0%, transparent 60%)' }} />
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-[#F5EFE0]/20 to-transparent pointer-events-none z-0" />

      {/* Floating Orbs */}
      <div className="orb orb-1" style={{ background: 'radial-gradient(circle, rgba(254,194,86,0.2), transparent 70%)' }}></div>
      <div className="orb orb-3" style={{ background: 'radial-gradient(circle, rgba(131,164,147,0.3), transparent 70%)', top: '10%', right: '10%' }}></div>

      {/* Immersive overlay */}
      <div className="absolute inset-0 bg-black/10 mix-blend-overlay z-0 pointer-events-none"></div>

      <div
        className="container-max grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative z-10 w-full max-w-[1200px] mx-auto flex-1 items-center"
      >
        {/* Left: Context */}
        <div className="flex flex-col gap-12">
          <div>
            <span className="font-label-caps text-gradient mb-6 block" style={{ letterSpacing: '0.3em' }}>Reserve</span>
            <h1 className="font-display-hero text-white mb-6 drop-shadow-sm leading-tight">
              Book a<br />Consultation
            </h1>
            <p className="font-body-lg text-white/80 max-w-[28rem] leading-relaxed">
              Step into a space of deep restoration. Share your concerns with us, and our practitioners will curate a bespoke healing journey rooted in ancestral Ayurvedic wisdom.
            </p>
          </div>
          {/* Decorative image */}
          <div className="relative h-[24rem] overflow-hidden rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.3)] group">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCP1ShFRc-svFdR-v_eSpYvJ4FwujzIwCA71vLLW690RvGCTuzmZHVJrPEobSTmdOsIR5O5JkneEFwKZMlx616YXEEjpJbNjsd2mJtZrWZTtJPLWCE8R_iP8MQXvgVCH_ZdLQga_PFrWgc2asPBcYbF_FrfAr0lu2p9nzULWbuRS56hnC00dyYYmTCWjFdbsGcnHc2caT1Gj_SxXtbqVmmTub3P9QsRMwKj1c70iAwQuOyjnJcjxw9eh8nuRuAiWt2IJiNHVl3JB4I"
              alt="Traditional Ayurvedic apothecary elements"
              className="w-full h-full object-cover transition-transform duration-[1.5s] ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#042419]/90 via-[#042419]/30 to-transparent mix-blend-multiply opacity-80" />
            <div className="absolute bottom-8 left-8">
              <span className="font-label-caps text-white/80">Restoration Awaits</span>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div>
          {submitted ? (
            <div
              className="glass-card backdrop-blur-3xl p-16 rounded-[2rem] text-center border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.2)]"
            >
              <span className="material-symbols-outlined text-6xl text-brand-secondary mb-6 block" style={{ color: 'var(--color-secondary-container)' }}>check_circle</span>
              <h2 className="font-headline-lg text-white mb-4">Your Journey Begins</h2>
              <p className="font-body-lg text-white/70 mb-10 leading-relaxed">
                We have received your inquiry. Our practitioners will reach out within 24 hours to confirm your appointment.
              </p>
              <Link
                href="/"
                className="font-label-caps btn-shimmer bg-white text-[#042419] px-8 py-4 rounded-full inline-block transition-transform hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.2)]"
                style={{ letterSpacing: '0.15em' }}
              >
                Return Home
              </Link>
            </div>
          ) : (
            <div
              className="relative overflow-hidden"
              style={{
                background: 'linear-gradient(145deg, rgba(20, 45, 35, 0.9), rgba(4, 36, 25, 0.95))',
                border: '1px solid rgba(200, 146, 42, 0.2)',
                boxShadow: '0 30px 60px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
                borderRadius: '2.5rem',
                padding: '4rem 4rem 4.5rem 4rem'
              }}
            >
              <form onSubmit={handleSubmit} className="flex flex-col" style={{ gap: '2rem' }}>
                
                {/* Full Name */}
                <div className="flex flex-col gap-3">
                  <label htmlFor="fullName" className="font-label-caps text-[0.65rem] tracking-[0.2em]" style={{ color: 'var(--color-secondary)' }}>
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    placeholder="E.g. Isabella Swan"
                    className="w-full text-lg focus:outline-none focus:bg-white/10 transition-all placeholder:text-white/20"
                    style={{ padding: '1.25rem 1.5rem', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '1rem', color: '#fff' }}
                  />
                </div>

                {/* Email & Phone Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-3">
                    <label htmlFor="email" className="font-label-caps text-[0.65rem] tracking-[0.2em]" style={{ color: 'var(--color-secondary)' }}>
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="hello@example.com"
                      className="w-full text-lg focus:outline-none focus:bg-white/10 transition-all placeholder:text-white/20"
                      style={{ padding: '1.25rem 1.5rem', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '1rem', color: '#fff' }}
                    />
                  </div>

                  <div className="flex flex-col gap-3">
                    <label htmlFor="phone" className="font-label-caps text-[0.65rem] tracking-[0.2em]" style={{ color: 'var(--color-secondary)' }}>
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="w-full text-lg focus:outline-none focus:bg-white/10 transition-all placeholder:text-white/20"
                      style={{ padding: '1.25rem 1.5rem', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '1rem', color: '#fff' }}
                    />
                  </div>
                </div>

                {/* Treatment Focus */}
                <div className="flex flex-col gap-3 relative">
                  <label htmlFor="treatment" className="font-label-caps text-[0.65rem] tracking-[0.2em]" style={{ color: 'var(--color-secondary)' }}>
                    Preferred Focus
                  </label>
                  <div className="relative">
                    <select
                      id="treatment"
                      name="treatment"
                      className="w-full text-lg focus:outline-none focus:bg-white/10 transition-all appearance-none cursor-pointer"
                      style={{ padding: '1.25rem 1.5rem', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '1rem', color: '#fff' }}
                      defaultValue=""
                    >
                      <option value="" disabled className="bg-[#042419] text-white/50">Select an area of focus</option>
                      <option value="dosha" className="bg-[#042419] text-white">Dosha Balancing Assessment</option>
                      <option value="panchakarma" className="bg-[#042419] text-white">Panchakarma Consultation</option>
                      <option value="skin" className="bg-[#042419] text-white">Radiance &amp; Skin Rituals</option>
                      <option value="womens" className="bg-[#042419] text-white">Women&apos;s Wellness</option>
                      <option value="chronic" className="bg-[#042419] text-white">Chronic Disease Management</option>
                      <option value="general" className="bg-[#042419] text-white">General Wellness Inquiry</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-6 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none">
                      expand_more
                    </span>
                  </div>
                </div>

                {/* Concern */}
                <div className="flex flex-col gap-3">
                  <label htmlFor="concern" className="font-label-caps text-[0.65rem] tracking-[0.2em]" style={{ color: 'var(--color-secondary)' }}>
                    Primary Concern
                  </label>
                  <textarea
                    id="concern"
                    name="concern"
                    rows={4}
                    placeholder="Please briefly describe what brings you to us..."
                    className="w-full text-lg focus:outline-none focus:bg-white/10 transition-all resize-none placeholder:text-white/20"
                    style={{ padding: '1.5rem', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '1rem', color: '#fff' }}
                  />
                </div>

                {/* Submit */}
                <div className="pt-8">
                  <button
                    type="submit"
                    className="group relative w-full overflow-hidden rounded-full font-label-caps text-[0.8rem] tracking-[0.2em] flex items-center justify-center gap-4 transition-all duration-500 hover:scale-[1.02]"
                    style={{ background: 'var(--color-secondary)', color: 'var(--color-primary)', padding: '1.5rem' }}
                  >
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                    <span className="relative z-10">Request Consultation</span>
                    <span className="material-symbols-outlined relative z-10 text-xl transition-transform duration-500 group-hover:translate-x-2">east</span>
                  </button>
                  <p className="font-label-caps text-center text-white/40 mt-6 text-[0.55rem] tracking-[0.2em]">
                    YOUR INFORMATION IS SECURE &amp; CONFIDENTIAL
                  </p>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
