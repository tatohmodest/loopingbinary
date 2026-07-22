'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function HeroTitle() {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const lines = el.querySelectorAll('.hero-line');
    gsap.fromTo(
      lines,
      { opacity: 0, y: 28 },
      {
        opacity: 1,
        y: 0,
        duration: 0.85,
        stagger: 0.12,
        ease: 'power3.out',
        delay: 0.08,
      }
    );
  }, []);

  return (
    <h1 id="hero-h1" className="hero-title" ref={ref}>
      <span className="hero-line">We build &amp; grow</span>
      <span className="hero-line">
        <em className="hero-accent">African businesses.</em>
      </span>
    </h1>
  );
}
