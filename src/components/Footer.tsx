import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--color-surface-container-low)',
        borderTop: '1px solid rgba(193,200,194,0.20)',
        position: 'relative',
      }}
    >
      <div
        className="container-max"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 'var(--spacing-gutter)',
          padding: '5rem',
        }}
      >
        <div style={{ gridColumn: 'span 2' }}>
          <div className="font-headline-md" style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>
            Prana Ayurveda
          </div>
          <p className="font-body-md" style={{ color: 'var(--color-on-surface-variant)', maxWidth: '20rem' }}>
            Ancestral wisdom curated for the modern pursuit of holistic excellence.
          </p>
          <p className="font-body-md" style={{ color: 'var(--color-on-surface-variant)', marginTop: '1.5rem', fontSize: '0.875rem' }}>
            © 2024 Prana Ayurvedic. Editorial Excellence in Healing.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {['Privacy Policy', 'Terms of Service'].map((label) => (
            <Link
              key={label}
              href="#"
              className="font-label-caps"
              style={{
                color: 'var(--color-on-surface-variant)',
                textDecoration: 'none',
                transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.color = 'var(--color-secondary)'; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'var(--color-on-surface-variant)'; }}
            >
              {label}
            </Link>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {['Accessibility', 'Contact'].map((label) => (
            <Link
              key={label}
              href="#"
              className="font-label-caps"
              style={{
                color: 'var(--color-on-surface-variant)',
                textDecoration: 'none',
                transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.color = 'var(--color-secondary)'; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'var(--color-on-surface-variant)'; }}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
