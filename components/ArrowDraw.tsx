"use client";

import { useEffect, useRef } from "react";

/** Wraps the loop diagram and adds `arrows-drawn` class when scrolled into view */
export default function ArrowDraw({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("arrows-drawn");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="loop-diagram reveal-fade"
      style={{ ["--reveal-delay" as string]: "120ms" }}
      ref={ref}
    >
      {children}
    </div>
  );
}
