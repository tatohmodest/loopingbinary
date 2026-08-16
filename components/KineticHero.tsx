"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { CLIENT_WORK } from "@/lib/catalog";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function KineticHero() {
  const root = useRef<HTMLElement>(null);
  const [on, setOn] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = window.setInterval(() => {
      setOn((i) => (i + 1) % CLIENT_WORK.length);
    }, 4200);
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

  const current = CLIENT_WORK[on];

  return (
    <section className="kh" ref={root} aria-labelledby="hero-h1">
      <div className="kh-film" aria-hidden="true">
        {CLIENT_WORK.map((item, i) => (
          <figure key={item.slug} className={i === on ? "is-on" : undefined}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.image} alt="" />
          </figure>
        ))}
      </div>
      <div className="kh-vignette" aria-hidden="true" />

      <div className="kh-stage">
        <p className="kh-loc">Douala · Africa · Live work</p>
        <h1 id="hero-h1" className="kh-cut">
          <span className="kh-clip">
            <span>Looping</span>
          </span>
          <span className="kh-clip">
            <span>Binary</span>
          </span>
        </h1>
        <p className="kh-now">
          <span>{current?.name}</span>
          <span>{current?.tag}</span>
        </p>
      </div>

      <div className="kh-bar">
        <p>We build. We grow. We train.</p>
        <a href="#work" data-cursor="reel">
          Hold scroll
        </a>
      </div>
      <span className="kh-progress" key={on} aria-hidden="true" />
    </section>
  );
}
