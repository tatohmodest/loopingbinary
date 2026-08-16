"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { CLIENT_WORK } from "@/lib/catalog";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function WorkFilm() {
  const pin = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = pin.current;
      if (!root) return;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const slides = root.querySelectorAll<HTMLElement>(".film-slide");
      if (slides.length < 2) return;

      const mm = gsap.matchMedia();
      mm.add("(min-width: 769px)", () => {
        if (reduce) return;
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: () => `+=${CLIENT_WORK.length * window.innerHeight * 0.9}`,
            pin: true,
            scrub: 0.65,
            anticipatePin: 1,
          },
        });

        slides.forEach((slide, i) => {
          if (i === 0) return;
          tl.fromTo(
            slide,
            { clipPath: "inset(100% 0% 0% 0%)" },
            { clipPath: "inset(0% 0% 0% 0%)", duration: 1, ease: "none" },
            i - 0.05
          );
          tl.fromTo(
            slide.querySelector(".film-img"),
            { scale: 1.18 },
            { scale: 1, duration: 1, ease: "none" },
            i - 0.05
          );
        });
      });

      return () => mm.revert();
    },
    { scope: pin }
  );

  return (
    <section className="film" id="work" ref={pin} aria-labelledby="work-title">
      <p className="film-kicker" id="work-title">
        Selected work · scroll it
      </p>
      {CLIENT_WORK.map((item, i) => (
        <Link
          key={item.slug}
          href={`/work/${item.slug}`}
          className="film-slide"
          data-cursor="view"
          style={{ zIndex: i + 1 }}
        >
          <div className="film-img-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="film-img" src={item.image} alt="" />
          </div>
          <div className="film-meta">
            <span className="film-num">0{i + 1}</span>
            <h2>{item.name}</h2>
            <p>{item.tag} · {item.location}</p>
          </div>
        </Link>
      ))}
    </section>
  );
}
