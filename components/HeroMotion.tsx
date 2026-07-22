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

    const floats = root.querySelectorAll<HTMLElement>("[data-float]");
    const orbs = root.querySelectorAll<HTMLElement>("[data-orb]");

    const ctx = gsap.context(() => {
      floats.forEach((el, i) => {
        gsap.to(el, {
          y: i % 2 === 0 ? -14 : 12,
          x: i % 2 === 0 ? 8 : -6,
          duration: 3.2 + i * 0.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.2,
        });
      });

      orbs.forEach((el, i) => {
        gsap.to(el, {
          scale: 1.12,
          opacity: 0.55,
          duration: 4 + i,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.5,
        });
      });

      gsap.fromTo(
        root.querySelector(".hero-stage"),
        { opacity: 0, y: 40, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 1.05, ease: "power3.out", delay: 0.25 }
      );
    }, root);

    const onMove = (e: MouseEvent) => {
      const rect = root.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      gsap.to(root.querySelector(".hero-stage"), {
        x: x * 12,
        y: y * 8,
        duration: 0.8,
        ease: "power2.out",
      });
    };

    root.addEventListener("mousemove", onMove);
    return () => {
      root.removeEventListener("mousemove", onMove);
      ctx.revert();
    };
  }, []);

  return (
    <div className="hero-visual" ref={rootRef} aria-hidden="true">
      <div className="hero-orb hero-orb--green" data-orb />
      <div className="hero-orb hero-orb--blue" data-orb />
      <div className="hero-stage">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/products/hero-platform-ui.png"
          alt=""
          width={1400}
          height={788}
          className="hero-stage-img"
          data-float
        />
        <div className="hero-float hero-float--a" data-float>
          <span className="hero-float-label">Intellex</span>
          <strong>1k+ courses</strong>
        </div>
        <div className="hero-float hero-float--b" data-float>
          <span className="hero-float-label">Zela</span>
          <strong>Social commerce</strong>
        </div>
        <div className="hero-float hero-float--c" data-float>
          <span className="hero-float-label">Auth</span>
          <strong>OAuth 2.0</strong>
        </div>
      </div>
    </div>
  );
}
