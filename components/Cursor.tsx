"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    document.documentElement.classList.add("has-cursor");
    const el = wrap.current;
    if (!el) return;
    const ring = el.querySelector<HTMLElement>(".lb-ring");
    const dot = el.querySelector<HTMLElement>(".lb-dot");
    const label = el.querySelector<HTMLElement>(".lb-cursor-label");
    if (!ring || !dot) return;

    let x = 0;
    let y = 0;
    let rx = 0;
    let ry = 0;
    let raf = 0;

    const move = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    const loop = () => {
      rx += (x - rx) * 0.14;
      ry += (y - ry) * 0.14;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    const hotSel = "a, button, [data-cursor]";
    const over = (e: PointerEvent) => {
      const t = (e.target as Element | null)?.closest?.(hotSel);
      if (!(t instanceof HTMLElement)) return;
      el.classList.add("is-hot");
      if (label) label.textContent = t.dataset.cursor || "open";
    };
    const out = (e: PointerEvent) => {
      const leaving = (e.target as Element | null)?.closest?.(hotSel);
      const entering = (e.relatedTarget as Element | null)?.closest?.(hotSel);
      if (leaving && !entering) {
        el.classList.remove("is-hot");
        if (label) label.textContent = "";
      }
    };

    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerover", over);
    document.addEventListener("pointerout", out);
    raf = requestAnimationFrame(loop);

    return () => {
      document.documentElement.classList.remove("has-cursor");
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", over);
      document.removeEventListener("pointerout", out);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="lb-cursor" ref={wrap} aria-hidden="true">
      <span className="lb-dot" />
      <span className="lb-ring">
        <span className="lb-cursor-label" />
      </span>
    </div>
  );
}
