"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroMotion() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const floats = root.querySelectorAll<HTMLElement>(".hero-float");
    const orbs = root.querySelectorAll<HTMLElement>("[data-orb]");
    const stage = root.querySelector(".hero-stage");

    const ctx = gsap.context(() => {
      floats.forEach((el, i) => {
        gsap.to(el, {
          y: i % 2 === 0 ? -10 : 10,
          duration: 3.4 + i * 0.35,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.25,
        });
      });

      orbs.forEach((el, i) => {
        gsap.to(el, {
          scale: 1.1,
          opacity: 0.5,
          duration: 4 + i,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.5,
        });
      });

      if (stage) {
        gsap.fromTo(
          stage,
          { opacity: 0, y: 32, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out", delay: 0.2 }
        );
      }
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div className="hero-visual" ref={rootRef} aria-hidden="true">
      <div className="hero-orb hero-orb--green" data-orb />
      <div className="hero-orb hero-orb--blue" data-orb />
      <div className="hero-stage">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/products/hero-platform-ui.png"
          alt=""
          width={1400}
          height={788}
          className="hero-stage-img"
        />
        <div className="hero-float hero-float--a">
          <span className="hero-float-label">Intellex</span>
          <strong>Learn &amp; ship</strong>
        </div>
        <div className="hero-float hero-float--b">
          <span className="hero-float-label">Zela</span>
          <strong>Social commerce</strong>
        </div>
        <div className="hero-float hero-float--c">
          <span className="hero-float-label">Junior Dev</span>
          <strong>Tournaments</strong>
        </div>
      </div>
    </div>
  );
}
