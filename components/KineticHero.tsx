"use client";

import { useEffect, useRef } from "react";
import DarkVeil from "@/components/DarkVeil";
import { CLIENT_WORK } from "@/lib/catalog";

const FLOAT = CLIENT_WORK.slice(0, 4);

export default function KineticHero() {
  const stage = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = stage.current;
    if (!root) return;
    const cards = root.querySelectorAll<HTMLElement>("[data-float]");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const onMove = (e: PointerEvent) => {
      const r = root.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width - 0.5;
      const ny = (e.clientY - r.top) / r.height - 0.5;
      cards.forEach((card, i) => {
        const depth = (i + 1) * 18;
        card.style.transform = `translate3d(${nx * depth}px, ${ny * depth}px, 0) rotate(${(i - 1.5) * 6}deg)`;
      });
    };

    root.addEventListener("pointermove", onMove);
    return () => root.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <section className="kh" ref={stage} aria-labelledby="hero-h1">
      <div className="kh-veil" aria-hidden="true">
        <DarkVeil
          hueShift={-12}
          noiseIntensity={0.08}
          scanlineIntensity={0.08}
          speed={0.35}
          scanlineFrequency={0.8}
          warpAmount={1.4}
        />
      </div>

      <div className="kh-copy">
        <p className="kh-loc">Douala · Africa · Live products</p>
        <h1 id="hero-h1" className="kh-title">
          <span>We don&apos;t</span>
          <span>make websites.</span>
          <span className="kh-title-slash">We make gravity.</span>
        </h1>
        <p className="kh-sub">
          Looping Binary builds the thing, grows the thing, and trains the
          people who keep the thing alive. From Cameroon. For anyone who is
          done with amateur hour.
        </p>
        <div className="kh-row">
          <a href="#work" className="kh-link" data-cursor="work">
            Watch the reel
          </a>
          <a href="#contact" className="kh-link kh-link--hot" data-cursor="talk">
            Talk to us
          </a>
        </div>
      </div>

      <div className="kh-floats" aria-hidden="true">
        {FLOAT.map((item, i) => (
          <figure key={item.slug} className={`kh-float kh-float--${i}`} data-float>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.image} alt="" />
          </figure>
        ))}
      </div>

      <div className="kh-tick" aria-hidden="true">
        <div className="kh-tick-track">
          <span>01001100 01001111 01001111 01010000 01001001 01001110 01000111 00100000 01000010 01001001 01001110 01000001 01010010 01011001</span>
          <span>01001100 01001111 01001111 01010000 01001001 01001110 01000111 00100000 01000010 01001001 01001110 01000001 01010010 01011001</span>
        </div>
      </div>
    </section>
  );
}
