"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { HERO_STILLS } from "@/lib/hero";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function KineticHero() {
  const root = useRef<HTMLElement>(null);
  const [on, setOn] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = window.setInterval(() => {
      setOn((i) => (i + 1) % HERO_STILLS.length);
    }, 5200);
    return () => window.clearInterval(id);
  }, []);

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) return;

      gsap.to(".kh-film", {
        yPercent: 18,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
      gsap.to(".kh-stage", {
        yPercent: -10,
        opacity: 0.2,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: root }
  );

  return (
    <section className="kh" ref={root} aria-labelledby="hero-h1">
      <div className="kh-film" aria-hidden="true">
        {HERO_STILLS.map((still, i) => (
          <figure
            key={still.src}
            className={`${i === on ? "is-on" : ""} ${still.fit === "contain" ? "is-mark" : ""}`.trim()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={still.src} alt="" />
          </figure>
        ))}
      </div>
      <div className="kh-vignette" aria-hidden="true" />

      <div className="kh-stage">
        <p className="kh-loc">Douala · Cameroon · Africa</p>
        <h1 id="hero-h1" className="kh-cut">
          <span className="kh-clip">
            <span>We Build.</span>
          </span>
          <span className="kh-clip">
            <span>We Grow.</span>
          </span>
          <span className="kh-clip">
            <span>We Train.</span>
          </span>
        </h1>
        <p className="kh-now">
          Technology company. Own products. Own school. One loop.
        </p>
      </div>

      <div className="kh-bar">
        <p>{HERO_STILLS[on]?.label}</p>
        <div className="kh-bar-links">
          <a href="/contact" data-cursor="start">
            Start a Project
          </a>
          <a href="#pillars" data-cursor="ecosystem">
            Explore the ecosystem
          </a>
        </div>
      </div>
      <span className="kh-progress" key={on} aria-hidden="true" />
    </section>
  );
}
