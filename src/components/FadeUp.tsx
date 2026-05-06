'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function FadeUp({ children, delay = 0, duration = 1.2 }: { children: React.ReactNode, delay?: number, duration?: number }) {
  const elementRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(elementRef.current, 
      { 
        y: 60, 
        opacity: 0 
      }, 
      { 
        y: 0, 
        opacity: 1, 
        duration: duration, 
        delay: delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: elementRef.current,
          start: 'top 90%',
          toggleActions: 'play none none none'
        }
      }
    );
  }, { scope: elementRef });

  return <div ref={elementRef}>{children}</div>;
}
