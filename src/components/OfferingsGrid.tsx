'use client';

import React, { useState } from 'react';

const offerings = [
  { 
    title: 'Panchakarma', 
    sub: 'Biological Reset', 
    iconName: 'spa',
    desc: 'Five-fold purification that removes deep-seated toxins at the cellular level.'
  },
  { 
    title: 'Nadi Pariksha', 
    sub: 'Pulse Wisdom', 
    iconName: 'fingerprint',
    desc: 'Ancient pulse reading that maps your dosha imbalance with extraordinary precision.'
  },
  { 
    title: 'Rasayana', 
    sub: 'Cellular Rejuvenation', 
    iconName: 'energy_savings_leaf',
    desc: 'Rare herbal formulations that rebuild ojas — your vital life force and immunity.'
  },
  { 
    title: 'Marma Therapy', 
    sub: 'Vital Energy', 
    iconName: 'self_improvement',
    desc: "Activation of 107 vital energy points to restore the body's pranic flow."
  },
];

export default function OfferingsGrid() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
      {offerings.map((offering, idx) => {
        const isHovered = activeCard === idx;
        
        return (
          <div
            key={idx}
            onMouseEnter={() => setActiveCard(idx)}
            onMouseLeave={() => setActiveCard(null)}
            style={{
              background: isHovered ? '#1B3A2D' : 'rgba(255,255,255,0.03)',
              border: '0.5px solid',
              borderColor: isHovered ? 'rgba(200,146,42,0.5)' : 'rgba(200,146,42,0.15)',
              borderRadius: '2px',
              padding: '2.5rem 2rem',
              transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
              cursor: 'pointer',
              overflow: 'hidden',
              position: 'relative',
              transform: isHovered ? 'translateY(-6px)' : 'none',
              boxShadow: isHovered 
                ? '0 20px 60px rgba(0,0,0,0.4), 0 0 0 0.5px rgba(200,146,42,0.3)' 
                : 'none',
            }}
          >
            {/* ICON */}
            <span 
              className="material-icons"
              style={{
                fontSize: '2rem',
                display: 'block',
                marginBottom: '1rem',
                color: isHovered ? '#e0c87a' : '#C8922A',
                transform: isHovered ? 'scale(1.15)' : 'scale(1)',
                transition: 'transform 0.4s ease, color 0.4s ease',
                transformOrigin: 'left center'
              }}
            >
              {offering.iconName}
            </span>

            {/* SUBTITLE */}
            <p className="font-label-caps" style={{ color: 'var(--color-secondary-fixed)', fontSize: '0.6rem', marginBottom: '1rem' }}>
              {offering.sub}
            </p>

            {/* TITLE */}
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <h3 
                style={{ 
                  fontFamily: 'var(--font-garamond)', 
                  fontSize: '1.75rem', 
                  fontWeight: 400,
                  color: '#F5EFE0',
                  margin: 0
                }}
              >
                {offering.title}
              </h3>
              <div 
                style={{
                  position: 'absolute',
                  bottom: '-4px',
                  left: 0,
                  height: '1px',
                  background: '#C8922A',
                  width: isHovered ? '40px' : '0px',
                  transition: 'width 0.4s ease 0.1s'
                }}
              />
            </div>

            {/* DESCRIPTION REVEAL */}
            <p
              style={{
                fontSize: '0.85rem',
                lineHeight: 1.6,
                color: 'rgba(245, 239, 224, 0.7)',
                fontFamily: "'DM Sans', sans-serif",
                maxHeight: isHovered ? '60px' : '0px',
                opacity: isHovered ? 1 : 0,
                overflow: 'hidden',
                marginTop: isHovered ? '1rem' : '0px',
                transition: 'all 0.4s ease 0.15s'
              }}
            >
              {offering.desc}
            </p>

            {/* BOTTOM GOLD LINE ACCENT */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                height: '1px',
                background: 'linear-gradient(to right, #C8922A, transparent)',
                width: isHovered ? '100%' : '0%',
                transition: 'width 0.5s ease'
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
