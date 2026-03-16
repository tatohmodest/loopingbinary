"use client";

import { useEffect } from "react";

/**
 * Fallback for browsers that don't support CSS scroll-driven animations.
 * Uses IntersectionObserver to add the `visible` class to `.reveal-fade` elements.
 * Renders nothing,pure side-effect component.
 */
export default function ScrollRevealFallback() {
  useEffect(() => {
    if (CSS.supports("animation-timeline", "scroll()")) return;

    const elements =
      document.querySelectorAll<HTMLElement>(".reveal-fade");
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay =
              el.style.getPropertyValue("--reveal-delay") || "0ms";
            el.style.transitionDelay = delay;
            el.style.transition = `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}`;
            el.classList.add("visible");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => {
      el.style.opacity = "0";
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
