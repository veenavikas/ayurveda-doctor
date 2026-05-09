'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { href: '/about', label: 'About' },
  { href: '/treatments', label: 'Treatments' },
  { href: '/philosophy', label: 'Philosophy' },
  { href: '/testimonials', label: 'Testimonials' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = pathname === '/';
  const baseTextColor = scrolled ? '#ffffff' : (isHome ? '#ffffff' : '#1B3A2D');

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 100,
          background: scrolled ? 'rgba(27,58,45,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          padding: scrolled ? '16px 0' : '28px 0',
          borderBottom: scrolled ? '0.5px solid rgba(200,146,42,0.2)' : 'none',
          transition: 'all 0.4s ease',
        }}
      >
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 5%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* LEFT: Logo mark */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300,
                letterSpacing: '0.2em',
                color: '#C8922A',
                fontSize: '24px',
              }}
            >
              AYURVEDA
            </span>
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '9px',
                letterSpacing: '0.3em',
                opacity: 0.5,
                color: '#C8922A',
                marginTop: '4px',
                textTransform: 'uppercase'
              }}
            >
              The Sanctuary
            </span>
          </Link>

          {/* CENTER: Nav links */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '11px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    opacity: active ? 1 : 0.65,
                    color: active ? '#C8922A' : baseTextColor,
                    textDecoration: 'none',
                    transition: 'all 0.4s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '1';
                    e.currentTarget.style.color = '#C8922A';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = active ? '1' : '0.65';
                    e.currentTarget.style.color = active ? '#C8922A' : baseTextColor;
                  }}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          {/* RIGHT: CTA Button */}
          <Link
            href="/consultation"
            className="hidden md:inline-block"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              padding: '10px 24px',
              border: '0.5px solid #C8922A',
              color: '#C8922A',
              background: 'transparent',
              textDecoration: 'none',
              transition: 'all 0.4s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#C8922A';
              e.currentTarget.style.color = '#1C1C1C';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#C8922A';
            }}
          >
            Book Consultation
          </Link>

          {/* Hamburger Icon (Mobile Only) */}
          <button
            className="md:hidden flex flex-col justify-center items-center"
            style={{ width: '20px', height: '20px', background: 'none', border: 'none', cursor: 'pointer', gap: '4px' }}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <span style={{ display: 'block', width: '20px', height: '2px', backgroundColor: '#C8922A' }} />
            <span style={{ display: 'block', width: '20px', height: '2px', backgroundColor: '#C8922A' }} />
            <span style={{ display: 'block', width: '20px', height: '2px', backgroundColor: '#C8922A' }} />
          </button>
        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      {mobileOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 200,
            background: '#1B3A2D',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '2rem',
          }}
        >
          {/* Close Button */}
          <button
            style={{
              position: 'absolute',
              top: '28px',
              right: '5%',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#C8922A',
              fontSize: '32px',
              lineHeight: 1,
            }}
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            &times;
          </button>

          {/* Overlay Links */}
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '2rem',
                color: '#ffffff',
                textDecoration: 'none',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}
            >
              {label}
            </Link>
          ))}
          
          {/* Overlay CTA */}
          <Link
            href="/consultation"
            onClick={() => setMobileOpen(false)}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              padding: '14px 32px',
              border: '0.5px solid #C8922A',
              color: '#C8922A',
              background: 'transparent',
              textDecoration: 'none',
              marginTop: '2rem',
            }}
          >
            Book Consultation
          </Link>
        </div>
      )}
    </>
  );
}
