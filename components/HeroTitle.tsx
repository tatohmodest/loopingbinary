'use client';
import SplitText from './SplitText';

export default function HeroTitle() {
  return (
    <h1 id="hero-h1" className="hero-title">
      <SplitText
        text="One company."
        tag="span"
        textAlign="left"
        delay={45}
        duration={1.15}
        ease="power3.out"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="0px"
      />
      <br />
      <SplitText
        text="An entire digital stack."
        tag="em"
        className="hero-accent"
        textAlign="left"
        delay={45}
        startDelay={0.55}
        duration={1.15}
        ease="power3.out"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="0px"
      />
    </h1>
  );
}
