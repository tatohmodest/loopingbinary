"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { PRODUCT_WORK } from "@/lib/catalog";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ProductRail() {
  const section = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = section.current;
      if (!root) return;
      const track = root.querySelector<HTMLElement>(".rail-track");
      if (!track) return;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const mm = gsap.matchMedia();
      mm.add("(min-width: 769px)", () => {
        if (reduce) return;
        const distance = () => Math.max(0, track.scrollWidth - window.innerWidth);
        gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 0.6,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      });

      return () => mm.revert();
    },
    { scope: section }
  );

  return (
    <section className="rail" id="stack" ref={section} aria-labelledby="stack-title">
      <div className="rail-head">
        <p>The stack we run</p>
        <h2 id="stack-title">Our own products. Still breathing.</h2>
      </div>
      <div className="rail-track">
        {PRODUCT_WORK.map((item) => (
          <Link
            key={item.slug}
            href={`/work/${item.slug}`}
            className="rail-card"
            data-cursor="open"
          >
            <div className="rail-img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.image} alt="" />
            </div>
            <div className="rail-copy">
              <span>{item.tag}</span>
              <h3>{item.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
