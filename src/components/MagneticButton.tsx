'use client';

import React from 'react';
import Link from 'next/link';

interface MagneticButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function MagneticButton({ href, children, className = '', style = {} }: MagneticButtonProps) {
  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    e.currentTarget.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.transform = 'translate(0, 0)';
    e.currentTarget.style.transition = 'transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)';
  };

  return (
    <Link
      href={href}
      className={`magnetic-btn ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: 'transform 0.1s ease', ...style }}
    >
      {children}
    </Link>
  );
}
