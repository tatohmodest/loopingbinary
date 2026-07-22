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
      { opacity: 0, y: 18 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.09,
        ease: 'power3.out',
        delay: 0.04,
      }
    );
  }, []);

  return (
    <h1 id="hero-h1" className="hero-title" ref={ref}>
      <span className="hero-line">Build software.</span>
      <span className="hero-line">Grow businesses.</span>
      <span className="hero-line">
        <em className="hero-accent">Train builders.</em>
      </span>
    </h1>
  );
}
