import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ background: '#1C1C1C', width: '100%' }}>
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
            <span
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300,
                color: '#C8922A',
                letterSpacing: '0.2em',
                fontSize: '24px',
              }}
            >
              AYURVEDA
            </span>
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '10px',
                textTransform: 'uppercase',
                color: '#C8922A',
                opacity: 0.5,
                marginTop: '4px',
                letterSpacing: '0.2em',
              }}
            >
              The Sanctuary
            </span>
          </div>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '13px',
              lineHeight: 1.9,
              color: 'rgba(245,239,224,0.45)',
              maxWidth: '280px',
              marginTop: '1.5rem',
            }}
          >
            Rooted in the lineage of the Father of Surgery, we provide a sanctuary for biological equilibrium through ancestral nature cure methodologies.
          </p>
          <div
            style={{
              width: '100%',
              height: '1px',
              background: 'rgba(200,146,42,0.2)',
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
              color: '#C8922A',
              marginBottom: '0.2rem',
            }}
          >
            Offerings
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {['Panchakarma', 'Nadi Pariksha', 'Rasayana', 'Chronic Care'].map((label) => (
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
              color: '#C8922A',
              marginBottom: '0.2rem',
            }}
          >
            Sanctuary
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {['Our History', 'Methodology', 'Testimonials', 'Consultation'].map((label) => (
              <li key={label}>
                <Link
                  href={`/${label.split(' ').pop()?.toLowerCase()}`}
                  className="footer-link-main"
                >
                  {label}
                </Link>
              </li>
            ))}
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
              color: '#C8922A',
              marginBottom: '0.2rem',
            }}
          >
            Visit Us
          </h4>
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '13px',
              color: 'rgba(245,239,224,0.45)',
              lineHeight: 2,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <span>108 Lotus Temple Road</span>
            <span>Kerala, India 682001</span>
            <span style={{ marginTop: '0.5rem' }}>+91 98765 43210</span>
            <a
              href="mailto:care@ayurvedasanctuary.com"
              className="footer-email-link"
            >
              care@ayurvedasanctuary.com
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM ZONE */}
      <div style={{ borderTop: '0.5px solid rgba(245,239,224,0.08)' }}>
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
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '11px', color: 'rgba(245,239,224,0.2)' }}>
            © 2026 Ayurveda Sanctuary. All Rights Reserved.
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
          color: rgba(245,239,224,0.45);
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .footer-link-main:hover {
          color: rgba(245,239,224,0.9);
        }

        .footer-email-link {
          color: rgba(245,239,224,0.45);
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .footer-email-link:hover {
          color: #C8922A;
        }

        .footer-link-bottom {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          color: rgba(245,239,224,0.2);
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .footer-link-bottom:hover {
          color: rgba(245,239,224,0.5);
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
  );
}
