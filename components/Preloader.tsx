"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";

export default function Preloader() {
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setGone(true),
    });

    tl.fromTo(
      ".boot-mark path",
      { strokeDashoffset: 320 },
      { strokeDashoffset: 0, duration: 1.1, ease: "power2.inOut" }
    )
      .fromTo(".boot-word", { y: "110%" }, { y: "0%", duration: 0.7, stagger: 0.08, ease: "power4.out" }, 0.45)
      .fromTo(".boot-bin", { opacity: 0 }, { opacity: 1, duration: 0.4 }, 0.7)
      .to(".boot", { yPercent: -110, duration: 0.85, ease: "power4.inOut", delay: 0.35 });

    return () => {
      tl.kill();
    };
  }, []);

  if (gone) return null;

  return (
    <div className="boot" aria-hidden="true">
      <svg className="boot-mark" viewBox="0 0 200 100" fill="none">
        <path
          d="M100 50 C100 22 78 5 52 5 C26 5 5 22 5 50 C5 78 26 95 52 95 C78 95 100 78 100 50 C100 22 122 5 148 5 C174 5 195 22 195 50 C195 78 174 95 148 95 C122 95 100 78 100 50Z"
          stroke="currentColor"
          strokeWidth="10"
          strokeLinecap="round"
          pathLength="320"
          strokeDasharray="320"
          strokeDashoffset="320"
        />
      </svg>
      <div className="boot-type">
        <span className="boot-clip">
          <span className="boot-word">Looping</span>
        </span>
        <span className="boot-clip">
          <span className="boot-word">Binary</span>
        </span>
      </div>
      <p className="boot-bin">01001100 01000010</p>
    </div>
  );
}
