'use client';

import React from 'react';

const practices = [
  {
    title: 'Grounding touch',
    subtitle: 'Abhyanga & Touch Therapy',
    iconName: 'spa',
    desc: 'Gentle, intentional contact combined with warm medicated oils to calm the nervous system, reduce stress, and bring awareness back into the body.',
  },
  {
    title: 'Breath regulation',
    subtitle: 'Pranayama & Thermal Moxa',
    iconName: 'air',
    desc: 'Guided pranayama breathwork and thermal herbal stimulation to release deep-seated tension, regulate your system, and invite spaciousness from within.',
  },
  {
    title: 'Intuitive Alignment',
    subtitle: 'Spine Setting & Somatic Flow',
    iconName: 'self_improvement',
    desc: 'Ancestral spinal corrections and unforced body movements that unwind deep holding patterns and help reconnect you with your inner biological rhythm.',
  },
];

export default function OfferingsGrid() {
  return (
    <div 
      style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '2.5rem',
        width: '100%'
      }}
    >
      {practices.map((practice, idx) => (
        <div
          key={idx}
          style={{
            background: 'var(--color-surface-container)',
            border: '1.5px solid rgba(17, 36, 28, 0.05)',
            borderRadius: '2rem',
            padding: '3.5rem 3rem',
            transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            boxShadow: '0 8px 30px rgba(17, 36, 28, 0.02)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px)';
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(17, 36, 28, 0.06)';
            e.currentTarget.style.borderColor = 'rgba(139, 90, 43, 0.2)';
            const icon = e.currentTarget.querySelector('.practice-icon') as HTMLElement;
            if (icon) icon.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 8px 30px rgba(17, 36, 28, 0.02)';
            e.currentTarget.style.borderColor = 'rgba(17, 36, 28, 0.05)';
            const icon = e.currentTarget.querySelector('.practice-icon') as HTMLElement;
            if (icon) icon.style.transform = 'scale(1)';
          }}
        >
          {/* ICON IN AN ORGANIC CIRCLE */}
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'rgba(139, 90, 43, 0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              className="material-icons practice-icon"
              style={{
                fontSize: '28px',
                color: 'var(--color-secondary)',
                transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              {practice.iconName}
            </span>
          </div>

          {/* LABEL CAP */}
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '11px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: 'var(--color-secondary)',
            }}
          >
            {practice.subtitle}
          </span>

          {/* TITLE & DESCRIPTION */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <h3
              style={{
                fontFamily: 'var(--font-garamond)',
                fontSize: '2rem',
                fontWeight: 500,
                color: 'var(--color-primary)',
                lineHeight: 1.2,
              }}
            >
              {practice.title}
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '15px',
                lineHeight: 1.7,
                color: 'var(--color-on-surface-variant)',
              }}
            >
              {practice.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
