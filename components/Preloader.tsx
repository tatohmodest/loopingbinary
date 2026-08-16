"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Preloader() {
  const [gone, setGone] = useState(false);
  const count = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const n = { v: 0 };
    const tl = gsap.timeline({
      onComplete: () => setGone(true),
    });

    tl.to(n, {
      v: 100,
      duration: 1.35,
      ease: "power2.inOut",
      onUpdate: () => {
        if (count.current) {
          count.current.textContent = String(Math.round(n.v)).padStart(2, "0");
        }
      },
    })
      .to(".boot-line", { scaleX: 1, duration: 1.35, ease: "power2.inOut" }, 0)
      .to(".boot", { yPercent: -110, duration: 0.9, ease: "power4.inOut", delay: 0.15 });

    return () => {
      tl.kill();
    };
  }, []);

  if (gone) return null;

  return (
    <div className="boot" aria-hidden="true">
      <span className="boot-count" ref={count}>
        00
      </span>
      <div className="boot-line" />
      <p>Looping Binary</p>
    </div>
  );
}
