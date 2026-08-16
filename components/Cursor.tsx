"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    document.documentElement.classList.add("has-cursor");
    const el = dot.current;
    if (!el) return;

    let x = 0;
    let y = 0;
    let cx = 0;
    let cy = 0;
    let raf = 0;

    const move = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
    };

    const loop = () => {
      cx += (x - cx) * 0.22;
      cy += (y - cy) * 0.22;
      el.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    const enter = (e: Event) => {
      const t = e.currentTarget as HTMLElement;
      el.classList.add("is-hot");
      if (label.current) label.current.textContent = t.dataset.cursor || "open";
    };
    const leave = () => {
      el.classList.remove("is-hot");
      if (label.current) label.current.textContent = "";
    };

    window.addEventListener("pointermove", move, { passive: true });
    raf = requestAnimationFrame(loop);

    const hot = () => document.querySelectorAll<HTMLElement>("[data-cursor], a, button");
    hot().forEach((n) => {
      n.addEventListener("pointerenter", enter);
      n.addEventListener("pointerleave", leave);
    });

    const mo = new MutationObserver(() => {
      hot().forEach((n) => {
        n.removeEventListener("pointerenter", enter);
        n.removeEventListener("pointerleave", leave);
        n.addEventListener("pointerenter", enter);
        n.addEventListener("pointerleave", leave);
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.documentElement.classList.remove("has-cursor");
      window.removeEventListener("pointermove", move);
      cancelAnimationFrame(raf);
      mo.disconnect();
      hot().forEach((n) => {
        n.removeEventListener("pointerenter", enter);
        n.removeEventListener("pointerleave", leave);
      });
    };
  }, []);

  return (
    <div className="lb-cursor" ref={dot} aria-hidden="true">
      <span ref={label} className="lb-cursor-label" />
    </div>
  );
}
