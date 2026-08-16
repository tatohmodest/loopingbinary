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
            end: () => `+=${CLIENT_WORK.length * window.innerHeight}`,
            pin: true,
            scrub: 0.8,
            anticipatePin: 1,
          },
        });

        tl.fromTo(
          slides[0].querySelector(".film-img"),
          { scale: 1.12 },
          { scale: 1, duration: 1, ease: "none" },
          0
        );

        slides.forEach((slide, i) => {
          if (i === 0) return;
          tl.fromTo(
            slide,
            { clipPath: "inset(0% 100% 0% 0%)" },
            { clipPath: "inset(0% 0% 0% 0%)", duration: 1, ease: "none" },
            i
          );
          tl.fromTo(
            slide.querySelector(".film-img"),
            { scale: 1.22, xPercent: 8 },
            { scale: 1, xPercent: 0, duration: 1, ease: "none" },
            i
          );
          tl.fromTo(
            slide.querySelector(".film-name"),
            { yPercent: 40, opacity: 0 },
            { yPercent: 0, opacity: 1, duration: 0.6, ease: "none" },
            i + 0.15
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
        Selected work
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
          <div className="film-hud">
            <span>0{i + 1} / 0{CLIENT_WORK.length}</span>
            <span>{item.location}</span>
            <span>{item.year}</span>
          </div>
          <h2 className="film-name">{item.name}</h2>
          <p className="film-tag">{item.tag}</p>
        </Link>
      ))}
    </section>
  );
}
