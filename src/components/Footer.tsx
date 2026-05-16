import Link from 'next/link';

export default function Footer() {
  return (
    <div style={{ background: '#1B3A2D', width: '100%', paddingTop: '3rem' }}>
      <footer style={{ 
        background: '#FAF7F2', 
        width: '100%', 
        color: '#1B3A2D', 
        position: 'relative', 
        overflow: 'hidden',
        borderTopLeftRadius: '40px',
        borderTopRightRadius: '40px',
        boxShadow: '0 -20px 50px rgba(0, 0, 0, 0.15), inset 0 2px 10px #ffffff'
      }}>
      {/* PREMIUM AYURVEDA SVG BACKGROUND ASSETS */}
      <svg 
        width="400" height="400" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'absolute', right: '-100px', bottom: '-100px', opacity: 0.04, pointerEvents: 'none' }}
      >
        <circle cx="100" cy="100" r="80" stroke="#1B3A2D" strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="100" cy="100" r="60" stroke="#1B3A2D" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="40" stroke="#1B3A2D" strokeWidth="1" />
        <path d="M100 20 C120 60 140 60 180 100 C140 140 120 140 100 180 C80 140 60 140 20 100 C60 60 80 60 100 20 Z" stroke="#1B3A2D" strokeWidth="0.5" />
        <path d="M100 0 L100 200 M0 100 L200 100 M29.28 29.28 L170.71 170.71 M29.28 170.71 L170.71 29.28" stroke="#1B3A2D" strokeWidth="0.5" />
      </svg>

      <svg 
        width="300" height="300" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'absolute', left: '-50px', top: '-50px', opacity: 0.03, pointerEvents: 'none', transform: 'rotate(45deg)' }}
      >
        <path d="M50 0 C 20 20, 20 80, 50 100 C 80 80, 80 20, 50 0 Z" stroke="#1B3A2D" strokeWidth="0.5" />
        <path d="M50 0 L 50 100" stroke="#1B3A2D" strokeWidth="0.5" />
        <path d="M50 30 Q 35 40 30 30" stroke="#1B3A2D" strokeWidth="0.5" />
        <path d="M50 50 Q 30 60 25 50" stroke="#1B3A2D" strokeWidth="0.5" />
        <path d="M50 70 Q 35 80 30 70" stroke="#1B3A2D" strokeWidth="0.5" />
        <path d="M50 30 Q 65 40 70 30" stroke="#1B3A2D" strokeWidth="0.5" />
        <path d="M50 50 Q 70 60 75 50" stroke="#1B3A2D" strokeWidth="0.5" />
        <path d="M50 70 Q 65 80 70 70" stroke="#1B3A2D" strokeWidth="0.5" />
      </svg>

      {/* TOP ZONE */}
      <div
        className="footer-top"
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '5rem 5%',
          display: 'grid',
        }}
      >
        {/* Column 1 - Brand */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <img 
              src="/assets/susrutha_logo.png" 
              alt="Sushrutha Nature Cure Logo" 
              style={{ 
                width: '140px', 
                height: 'auto', 
                marginBottom: '1.5rem',
                filter: 'drop-shadow(3px 3px 10px rgba(27,58,45,0.08))'
              }} 
            />
          </div>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '13px',
              lineHeight: 1.9,
              color: 'rgba(27,58,45,0.7)',
              maxWidth: '320px',
              marginTop: '0.5rem',
            }}
          >
            Rooted in the lineage of the Father of Surgery, we provide a sanctuary for biological equilibrium through ancestral nature cure methodologies.
          </p>
          <div
            style={{
              width: '100%',
              height: '1px',
              background: 'rgba(27,58,45,0.1)',
              marginTop: '1.5rem',
            }}
          />
        </div>

        {/* Column 2 - Offerings */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h4
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '9px',
              textTransform: 'uppercase',
              letterSpacing: '0.25em',
              color: '#1B3A2D',
              marginBottom: '0.2rem',
              fontWeight: 600,
            }}
          >
            Offerings
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {['Acupuncture', 'Reflexology', 'Spine Setting', 'Hijama'].map((label) => (
              <li key={label}>
                <Link
                  href="/treatments"
                  className="footer-link-main"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 - Sanctuary */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h4
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '9px',
              textTransform: 'uppercase',
              letterSpacing: '0.25em',
              color: '#1B3A2D',
              marginBottom: '0.2rem',
              fontWeight: 600,
            }}
          >
            Sanctuary
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li>
              <Link href="/about" className="footer-link-main">
                Our History
              </Link>
            </li>
            <li>
              <Link href="/philosophy" className="footer-link-main">
                Methodology
              </Link>
            </li>
            <li>
              <Link href="/testimonials" className="footer-link-main">
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="/consultation" className="footer-link-main">
                Consultation
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4 - Visit Us */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <h4
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '9px',
              textTransform: 'uppercase',
              letterSpacing: '0.25em',
              color: '#1B3A2D',
              marginBottom: '0.2rem',
              fontWeight: 600,
            }}
          >
            Visit Us
          </h4>
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '13px',
              color: 'rgba(27,58,45,0.7)',
              lineHeight: 2,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <span style={{ marginBottom: '0.4rem' }}>AVM nature Care</span>
            <span style={{ marginBottom: '0.4rem' }}>Madhavapatnam, Kakinada</span>
            <a
              href="tel:+918897722563"
              className="footer-email-link"
              style={{ marginBottom: '0.4rem' }}
            >
              +91 88977 22563
            </a>
            <a
              href="mailto:care@sushruthanaturecure.com"
              className="footer-email-link"
              style={{ marginBottom: '0.4rem' }}
            >
              care@sushruthanaturecure.com
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM ZONE */}
      <div style={{ borderTop: '0.5px solid rgba(27,58,45,0.1)' }}>
        <div
          className="footer-bottom"
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '1.5rem 5%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', color: 'rgba(27,58,45,0.5)' }}>
            © 2026 AVM Nature Care. All Rights Reserved.
          </span>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['Privacy', 'Terms', 'Cookies'].map((label) => (
              <Link
                key={label}
                href="#"
                className="footer-link-bottom"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .footer-top {
          grid-template-columns: 35% 1fr 1fr 1fr;
          gap: 3rem;
        }
        
        .footer-link-main {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          color: rgba(27,58,45,0.7);
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .footer-link-main:hover {
          color: #1B3A2D;
        }

        .footer-email-link {
          color: rgba(27,58,45,0.7);
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .footer-email-link:hover {
          color: #C8922A;
        }

        .footer-link-bottom {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          color: rgba(27,58,45,0.5);
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .footer-link-bottom:hover {
          color: #1B3A2D;
        }

        @media (max-width: 768px) {
          .footer-top {
            grid-template-columns: 1fr;
            padding: 3rem 6% !important;
            gap: 2.5rem;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }
        }
      `}</style>
      </footer>
    </div>
  );
}
