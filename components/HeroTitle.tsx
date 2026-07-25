'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function HeroTitle() {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.fromTo(
      el.querySelectorAll('.hero-line'),
      { opacity: 0, y: 14 },
      {
        opacity: 1,
        y: 0,
        duration: 0.65,
        stagger: 0.08,
        ease: 'power3.out',
        delay: 0.05,
      }
    );
  }, []);

  return (
    <h1 id="hero-h1" className="hero-title" ref={ref}>
      <span className="hero-line">Software that ships.</span>
      <span className="hero-line">Growth that sticks.</span>
      <span className="hero-line">
        Talent that is <em className="hero-accent">trained</em>.
      </span>
    </h1>
  );
}
