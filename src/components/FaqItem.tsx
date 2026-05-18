'use client';

import React, { useState } from 'react';

interface FaqItemProps {
  question: string;
  answer: string;
}

export default function FaqItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        background: 'var(--color-surface-container-low)',
        border: '1px solid rgba(34, 22, 18, 0.05)',
        borderRadius: '1.5rem',
        padding: '1.75rem 2rem',
        cursor: 'pointer',
        transition: 'all 0.4s ease',
      }}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <h3
          style={{
            fontFamily: 'var(--font-garamond)',
            fontSize: '1.45rem',
            fontWeight: 500,
            color: 'var(--color-primary)',
            margin: 0,
          }}
        >
          {question}
        </h3>
        <span
          className="material-icons"
          style={{
            color: 'var(--color-secondary)',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            fontSize: '20px',
          }}
        >
          expand_more
        </span>
      </div>
      
      <div
        style={{
          maxHeight: isOpen ? '200px' : '0px',
          opacity: isOpen ? 1 : 0,
          overflow: 'hidden',
          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '14.5px',
            lineHeight: 1.6,
            color: 'var(--color-on-surface-variant)',
            marginTop: '1.25rem',
            margin: '1.25rem 0 0',
          }}
        >
          {answer}
        </p>
      </div>
    </div>
  );
}
