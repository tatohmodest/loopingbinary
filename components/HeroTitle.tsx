'use client';
import SplitText from './SplitText';

export default function HeroTitle() {
  return (
    <h1 id="hero-h1" className="hero-title">
      <SplitText
        text="Software the market"
        tag="span"
        textAlign="center"
        delay={40}
        duration={1.15}
        ease="power3.out"
        from={{ opacity: 0, y: 36 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="0px"
      />
      <br />
      <SplitText
        text="can actually feel."
        tag="em"
        className="hero-accent"
        textAlign="center"
        delay={40}
        startDelay={0.72}
        duration={1.15}
        ease="power3.out"
        from={{ opacity: 0, y: 36 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="0px"
      />
    </h1>
  );
}
