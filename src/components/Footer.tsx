import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--color-background)',
        width: '100%',
        color: 'var(--color-primary)',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(17, 36, 28, 0.08)',
        paddingTop: '6rem',
        paddingBottom: '4rem',
      }}
    >
      {/* MASSIVE SUSHRUTHA WATERMARK */}
      <div
        style={{
          position: 'absolute',
          bottom: '-2rem',
          right: '2rem',
          fontFamily: 'var(--font-garamond)',
          fontSize: 'clamp(8rem, 20vw, 24rem)',
          fontWeight: 600,
          color: 'var(--color-primary)',
          opacity: 0.03,
          lineHeight: 0.8,
          pointerEvents: 'none',
          userSelect: 'none',
          letterSpacing: '-0.05em',
        }}
      >
        SUSHRUTHA
      </div>

      <div
        className="footer-grid"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 5%',
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr 0.8fr 1fr',
          gap: '4rem',
        }}
      >
        {/* Brand column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <img
              src="/assets/susrutha_logo.png"
              alt="Sushrutha Nature Cure Logo"
              style={{ height: '48px', objectFit: 'contain', alignSelf: 'flex-start' }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1, gap: '1px' }}>
              <span style={{
                fontFamily: 'var(--font-garamond)',
                fontSize: '1.05rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                color: 'var(--color-primary)',
                textTransform: 'uppercase'
              }}>
                Sushrutha
              </span>
              <span style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.62rem',
                fontWeight: 700,
                color: 'var(--color-secondary)',
                textTransform: 'uppercase',
                letterSpacing: '0.22em',
              }}>
                nature cure
              </span>
            </div>
          </Link>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '14px',
              lineHeight: 1.8,
              color: 'var(--color-on-surface-variant)',
              maxWidth: '300px',
            }}
          >
            A peaceful sanctuary of traditional Ayurvedic healing and Nature Cure. Blending ancient oil bodywork and somatic grounding in Kakinada.
          </p>
        </div>

        {/* Offerings Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <h4
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: 'var(--color-primary)',
              fontWeight: 700,
            }}
          >
            Offerings
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {['Acupuncture', 'Reflexology', 'Spine Setting', 'Hijama Therapy'].map((label) => (
              <li key={label}>
                <Link
                  href="/treatments"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '14px',
                    color: 'var(--color-on-surface-variant)',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                  }}
                  className="hover:text-primary"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Sanctuary Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <h4
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: 'var(--color-primary)',
              fontWeight: 700,
            }}
          >
            Sanctuary
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              { href: '/about', label: 'Our Wisdom' },
              { href: '/philosophy', label: 'Methodology' },
              { href: '/testimonials', label: 'Healing Journal' },
              { href: '/consultation', label: 'Book Session' },
            ].map(({ href, label }) => (
              <li key={label}>
                <Link
                  href={href}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '14px',
                    color: 'var(--color-on-surface-variant)',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                  }}
                  className="hover:text-primary"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Location / Contact Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <h4
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '11px',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: 'var(--color-primary)',
              fontWeight: 700,
            }}
          >
            Visit Us
          </h4>
          <div
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '14px',
              color: 'var(--color-on-surface-variant)',
              lineHeight: 1.8,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}
          >
            <span>Madhavapatnam, Kakinada, AP</span>
            <a
              href="tel:+918897722563"
              style={{
                color: 'var(--color-secondary)',
                textDecoration: 'none',
                transition: 'color 0.3s ease',
                fontWeight: 500,
              }}
              className="hover:text-primary"
            >
              +91 88977 22563
            </a>
            <a
              href="mailto:care@sushruthanaturecure.com"
              style={{
                color: 'var(--color-on-surface-variant)',
                textDecoration: 'none',
                transition: 'color 0.3s ease',
                fontSize: '13px',
              }}
              className="hover:text-primary"
            >
              care@sushruthanaturecure.com
            </a>
          </div>
        </div>
      </div>

      {/* Grid line divider */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '3.5rem auto 1.5rem',
          padding: '0 5%',
        }}
      >
        <div style={{ height: '1px', background: 'rgba(17, 36, 28, 0.08)' }} />
      </div>

      {/* Bottom footer */}
      <div
        className="footer-bottom"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 5%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '12px',
            color: 'var(--color-on-surface-variant)',
            opacity: 0.8,
          }}
        >
          © 2026 Sushrutha Nature Cure. All rights reserved.
        </span>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map((label) => (
            <Link
              key={label}
              href="#"
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '12px',
                color: 'var(--color-on-surface-variant)',
                textDecoration: 'none',
                transition: 'color 0.3s ease',
                opacity: 0.8,
              }}
              className="hover:text-primary"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .hover\:text-primary:hover {
          color: var(--color-primary) !important;
        }
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 3rem !important;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </footer>
  );
}
