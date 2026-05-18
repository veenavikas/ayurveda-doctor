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
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'calc(100% - 32px)',
          maxWidth: '1000px',
          zIndex: 100,
          background: scrolled ? 'rgba(246, 244, 239, 0.85)' : 'rgba(246, 244, 239, 0.70)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderRadius: '100px',
          padding: '12px 24px',
          border: scrolled ? '1.5px solid rgba(34, 22, 18, 0.12)' : '1px solid rgba(34, 22, 18, 0.06)',
          boxShadow: scrolled 
            ? '0 12px 30px rgba(34, 22, 18, 0.08), 0 2px 4px rgba(34, 22, 18, 0.02)' 
            : '0 8px 24px rgba(34, 22, 18, 0.03)',
          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}
        >
          {/* Brand Logo - Sushrutha Nature Cure Logo Image */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <img 
              src="/assets/susrutha_logo.png" 
              alt="Sushrutha Nature Cure Logo" 
              style={{ 
                height: scrolled ? '35px' : '50px', 
                width: 'auto', 
                transition: 'height 0.3s ease' 
              }} 
            />
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1, gap: '1px' }} className="hidden sm:flex">
              <span style={{
                fontFamily: 'var(--font-garamond)',
                fontSize: scrolled ? '0.9rem' : '1.05rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                color: 'var(--color-primary)',
                textTransform: 'uppercase',
                transition: 'all 0.3s ease',
              }}>
                Sushrutha
              </span>
              <span style={{
                fontFamily: 'var(--font-sans)',
                fontSize: scrolled ? '0.55rem' : '0.62rem',
                fontWeight: 700,
                color: 'var(--color-secondary)',
                textTransform: 'uppercase',
                letterSpacing: '0.22em',
                transition: 'all 0.3s ease',
              }}>
                nature cure
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '13px',
                    fontWeight: 500,
                    color: active ? 'var(--color-primary)' : 'var(--color-on-surface-variant)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    padding: '4px 0',
                  }}
                  className="hover:text-primary"
                >
                  {label}
                  {active && (
                    <span 
                      style={{
                        position: 'absolute',
                        bottom: '-4px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--color-secondary)',
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right Section: Call & Book Button */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="tel:+918897722563"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '13px',
                fontWeight: 500,
                color: 'var(--color-on-surface-variant)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'color 0.3s ease',
              }}
              className="hover:text-primary"
            >
              <span className="material-icons" style={{ fontSize: '15px', color: 'var(--color-secondary)' }}>
                call
              </span>
              +91 88977 22563
            </a>
            
            <Link
              href="/consultation"
              className="nav-book-btn"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '13px',
                fontWeight: 600,
                color: 'var(--color-on-primary)',
                background: 'var(--color-primary)',
                padding: '10px 22px',
                borderRadius: '100px',
                textDecoration: 'none',
                boxShadow: '0 4px 12px rgba(34, 22, 18, 0.15)',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              Book session
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden flex flex-col justify-center items-end"
            style={{ 
              width: '24px', 
              height: '24px', 
              background: 'none', 
              border: 'none', 
              cursor: 'pointer', 
              gap: '5px',
              padding: 0
            }}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <span style={{ display: 'block', width: '20px', height: '2px', backgroundColor: 'var(--color-primary)', borderRadius: '1px' }} />
            <span style={{ display: 'block', width: '15px', height: '2px', backgroundColor: 'var(--color-primary)', borderRadius: '1px' }} />
            <span style={{ display: 'block', width: '20px', height: '2px', backgroundColor: 'var(--color-primary)', borderRadius: '1px' }} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 200,
            background: 'var(--color-primary)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '2.5rem',
            padding: '2rem',
          }}
        >
          {/* Close Button */}
          <button
            style={{
              position: 'absolute',
              top: '28px',
              right: '24px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--color-on-primary)',
              fontSize: '36px',
              lineHeight: 1,
            }}
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            &times;
          </button>

          {/* Navigation Links */}
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="nav-mobile-link"
              style={{
                fontFamily: 'var(--font-garamond)',
                fontSize: '2.2rem',
                color: 'var(--color-on-primary)',
                textDecoration: 'none',
                letterSpacing: '0.05em',
                transition: 'color 0.3s ease',
              }}
            >
              {label}
            </Link>
          ))}

          {/* Phone Link */}
          <a
            href="tel:+918897722563"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '18px',
              color: 'var(--color-primary-fixed)',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginTop: '1rem',
            }}
          >
            <span className="material-icons" style={{ fontSize: '20px' }}>
              call
            </span>
            +91 88977 22563
          </a>
          
          {/* Consultation Button */}
          <Link
            href="/consultation"
            onClick={() => setMobileOpen(false)}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '14px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              padding: '14px 36px',
              borderRadius: '100px',
              backgroundColor: 'var(--color-secondary-container)',
              color: 'var(--color-on-secondary-container)',
              textDecoration: 'none',
              marginTop: '1rem',
              boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
            }}
          >
            Book Consultation
          </Link>
        </div>
      )}

      <style>{`
        .nav-book-btn:hover {
          background: var(--color-secondary) !important;
          transform: translateY(-1px) !important;
        }
        .nav-mobile-link:hover {
          color: var(--color-primary-fixed) !important;
        }
      `}</style>
    </>
  );
}
