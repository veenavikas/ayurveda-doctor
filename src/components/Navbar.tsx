'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const NAV_LINKS = [
  { href: '/philosophy', label: 'Philosophy' },
  { href: '/about', label: 'Practitioners' },
  { href: '/treatments', label: 'Treatments' },
  { href: '/testimonials', label: 'Journal' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav
        className="fixed top-0 w-full z-50 border-b"
        style={{
          background: 'rgba(252,249,248,0.80)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderColor: 'rgba(193,200,194,0.15)',
        }}
      >
        <div className="container-max flex items-center justify-between px-desktop py-6" style={{ paddingTop: '1.25rem', paddingBottom: '1.25rem' }}>
          {/* Logo */}
          <Link href="/" className="font-headline-md" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>
            Prana Ayurveda
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className="font-label-caps transition-all duration-500"
                  style={{
                    color: active ? 'var(--color-secondary-container)' : 'var(--color-primary)',
                    opacity: active ? 1 : 0.8,
                    textDecoration: 'none',
                    borderBottom: active ? '1px solid var(--color-secondary-container)' : 'none',
                    paddingBottom: active ? '2px' : '0',
                  }}
                  onMouseEnter={(e) => {
                    if (!active) {
                      (e.target as HTMLElement).style.opacity = '1';
                      (e.target as HTMLElement).style.color = 'var(--color-secondary)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!active) {
                      (e.target as HTMLElement).style.opacity = '0.8';
                      (e.target as HTMLElement).style.color = 'var(--color-primary)';
                    }
                  }}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          {/* CTA */}
          <Link
            href="/consultation"
            className="hidden md:block font-label-caps btn-shimmer"
            style={{
              background: 'var(--color-primary)',
              color: 'var(--color-secondary-container)',
              padding: '1rem 2rem',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'var(--color-primary-container)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'var(--color-primary)';
            }}
          >
            Book Consultation
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden"
            style={{ color: 'var(--color-primary)', background: 'none', border: 'none', cursor: 'pointer' }}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '30px' }}>menu</span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[60] flex flex-col justify-center items-start md:hidden"
          style={{ background: 'rgba(252,249,248,0.97)', backdropFilter: 'blur(24px)' }}
        >
          <button
            className="absolute top-8 right-8"
            style={{ color: 'var(--color-primary)', background: 'none', border: 'none', cursor: 'pointer' }}
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>close</span>
          </button>
          <div style={{ padding: '0 var(--spacing-margin-mobile)', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ marginBottom: '2rem' }}>
              <div className="font-headline-lg" style={{ color: 'var(--color-primary)' }}>Prana</div>
              <div className="font-label-caps" style={{ color: 'var(--color-primary)', opacity: 0.6, marginTop: '0.5rem' }}>Ancestral Wisdom</div>
            </div>
            {[{ href: '/', label: 'Home', icon: 'home' }, ...NAV_LINKS.map((l, i) => ({ ...l, icon: ['history_edu','spa','menu_book','mail'][i] })), { href: '/consultation', label: 'Book Now', icon: 'calendar_month' }].map(({ href, label, icon }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="font-headline-lg"
                style={{ color: 'var(--color-primary)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '1rem', transition: 'all 0.3s' }}
              >
                <span className="material-symbols-outlined">{icon}</span>
                <span>{label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
