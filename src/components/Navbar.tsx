'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      style={{ paddingBlock: scrolled ? '30px' : '80px' }}
      className={`fixed top-0 w-full z-[100] transition-all duration-700 border-b border-brand-primary/5 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container-wide flex justify-between items-center">
        {/* Branding */}
        <Link href="/" className="group flex flex-col items-center">
          <span className="text-2xl md:text-3xl font-heading tracking-[0.1em] uppercase text-brand-primary">Ayurveda</span>
          <span className="text-[0.55rem] tracking-[0.6em] uppercase text-brand-accent mt-1 group-hover:tracking-[0.8em] transition-all duration-700">The Sanctuary</span>
        </Link>

        {/* Navigation links */}
        <nav className="hidden lg:flex items-center gap-16">
          {['About', 'Treatments', 'Philosophy', 'Testimonials'].map((item) => (
            <Link 
              key={item} 
              href={`/${item.toLowerCase()}`} 
              className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-brand-primary hover:text-brand-accent transition-colors duration-300"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Primary Action */}
        <div className="flex items-center gap-10">
          <Link href="/contact" className="hidden xl:block text-[0.65rem] font-bold uppercase tracking-[0.3em] text-brand-primary border-b-2 border-brand-accent/30 pb-1 hover:border-brand-accent transition-all duration-500">
            Book Consultation
          </Link>
          <button className="lg:hidden text-brand-primary p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
