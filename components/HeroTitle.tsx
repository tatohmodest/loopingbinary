'use client';
import SplitText from './SplitText';

// "Software that" = 13 chars × 50ms stagger = 0.65s before last char starts.
// Give the accent line a matching startDelay so they feel sequential.
export default function HeroTitle() {
  return (
    <h1 id="hero-h1" className="hero-title">
      <SplitText
        text="Software that"
        tag="span"
        textAlign="left"
        delay={50}
        duration={1.25}
        ease="power3.out"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="0px"
      />
      <br />
      <SplitText
        text="actually ships."
        tag="em"
        className="hero-accent"
        textAlign="left"
        delay={50}
        startDelay={0.65}
        duration={1.25}
        ease="power3.out"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="0px"
      />
    </h1>
  );
}
