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
      className="gradient-mesh relative min-h-screen flex items-center justify-center py-40 px-[5%] overflow-hidden"
    >
      {/* Interactive Glow */}
      <div ref={glowRef} className="interactive-glow" style={{ top: 0, left: 0, width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(254,194,86,0.1) 0%, transparent 60%)' }} />

      {/* Floating Orbs */}
      <div className="orb orb-1" style={{ background: 'radial-gradient(circle, rgba(254,194,86,0.2), transparent 70%)' }}></div>
      <div className="orb orb-3" style={{ background: 'radial-gradient(circle, rgba(131,164,147,0.3), transparent 70%)', top: '10%', right: '10%' }}></div>

      {/* Immersive overlay */}
      <div className="absolute inset-0 bg-black/10 mix-blend-overlay z-0 pointer-events-none"></div>

      <div
        className="container-max grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 w-full max-w-[1200px]"
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
              className="glass-card backdrop-blur-3xl p-10 lg:p-14 rounded-[2rem] border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.2)] bg-white/10"
            >
              <form onSubmit={handleSubmit} className="flex flex-col gap-10">
                {/* Full Name */}
                <div className="relative group">
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    placeholder=" "
                    className="w-full bg-transparent border-b border-white/30 py-3 text-white text-lg focus:outline-none focus:border-white transition-colors peer"
                  />
                  <label
                    htmlFor="fullName"
                    className="font-label-caps absolute left-0 top-3 text-white/60 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-white"
                  >
                    Full Name
                  </label>
                </div>

                {/* Email */}
                <div className="relative group">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder=" "
                    className="w-full bg-transparent border-b border-white/30 py-3 text-white text-lg focus:outline-none focus:border-white transition-colors peer"
                  />
                  <label
                    htmlFor="email"
                    className="font-label-caps absolute left-0 top-3 text-white/60 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-white"
                  >
                    Email Address
                  </label>
                </div>

                {/* Phone */}
                <div className="relative group">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder=" "
                    className="w-full bg-transparent border-b border-white/30 py-3 text-white text-lg focus:outline-none focus:border-white transition-colors peer"
                  />
                  <label
                    htmlFor="phone"
                    className="font-label-caps absolute left-0 top-3 text-white/60 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-white"
                  >
                    Phone Number (Optional)
                  </label>
                </div>

                {/* Treatment */}
                <div className="relative">
                  <label
                    htmlFor="treatment"
                    className="font-label-caps text-white/60 block mb-3 text-xs"
                  >
                    Preferred Focus
                  </label>
                  <select
                    id="treatment"
                    name="treatment"
                    className="w-full bg-transparent border-b border-white/30 py-3 text-white text-lg focus:outline-none focus:border-white transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="text-black">Select an area of focus</option>
                    <option value="dosha" className="text-black">Dosha Balancing Assessment</option>
                    <option value="panchakarma" className="text-black">Panchakarma Consultation</option>
                    <option value="skin" className="text-black">Radiance &amp; Skin Rituals</option>
                    <option value="womens" className="text-black">Women&apos;s Wellness</option>
                    <option value="chronic" className="text-black">Chronic Disease Management</option>
                    <option value="general" className="text-black">General Wellness Inquiry</option>
                  </select>
                  <span
                    className="material-symbols-outlined absolute right-0 bottom-4 text-white/60 pointer-events-none"
                  >
                    expand_more
                  </span>
                </div>

                {/* Concern */}
                <div className="relative">
                  <textarea
                    id="concern"
                    name="concern"
                    rows={3}
                    placeholder=" "
                    className="w-full bg-transparent border-b border-white/30 py-3 text-white text-lg focus:outline-none focus:border-white transition-colors resize-none peer"
                  />
                  <label
                    htmlFor="concern"
                    className="font-label-caps absolute left-0 top-3 text-white/60 transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-white peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-white"
                  >
                    Primary Concern
                  </label>
                </div>

                {/* Submit */}
                <div className="pt-6">
                  <button
                    type="submit"
                    className="font-label-caps btn-shimmer w-full bg-white text-[#042419] py-5 px-8 rounded-full flex items-center justify-center gap-4 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] transition-all duration-500 hover:scale-[1.02]"
                    style={{ letterSpacing: '0.15em' }}
                  >
                    <span>Begin Your Healing Journey</span>
                    <span className="material-symbols-outlined text-xl">arrow_right_alt</span>
                  </button>
                  <p className="font-label-caps text-center text-white/40 mt-6 text-[0.65rem] tracking-widest">
                    Your information is held in strictest confidence
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
