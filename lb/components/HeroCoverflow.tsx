"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { COVERFLOW } from "@/lib/catalog";

export default function HeroCoverflow() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = COVERFLOW.length;

  useEffect(() => {
    if (paused || count < 2) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % count);
    }, 4200);
    return () => window.clearInterval(id);
  }, [paused, count]);

  return (
    <div
      className="coverflow"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="coverflow-stage" aria-hidden="false">
        {COVERFLOW.map((item, index) => {
          const raw = index - active;
          const half = Math.floor(count / 2);
          let offset = raw;
          if (offset > half) offset -= count;
          if (offset < -half) offset += count;
          const abs = Math.abs(offset);
          const isActive = offset === 0;

          return (
            <button
              key={item.slug}
              type="button"
              className={`coverflow-card${isActive ? " is-active" : ""}`}
              style={{
                zIndex: 40 - abs,
                opacity: abs > 3 ? 0 : 1 - abs * 0.18,
                transform: `translateX(${offset * 52}%) rotateY(${offset * -28}deg) translateZ(${220 - abs * 110}px) scale(${1 - abs * 0.1})`,
                pointerEvents: abs > 3 ? "none" : "auto",
              }}
              onClick={() => setActive(index)}
              aria-label={`${item.name}: ${item.tag}`}
              aria-current={isActive ? "true" : undefined}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.image} alt="" width={1280} height={720} />
              <span className="coverflow-meta">
                <span>{item.name}</span>
                <span>{item.tag}</span>
              </span>
            </button>
          );
        })}
      </div>

      <div className="coverflow-foot">
        <Link href={`/work/${COVERFLOW[active]?.slug}`} className="coverflow-cta">
          View {COVERFLOW[active]?.name}
          <span aria-hidden="true">→</span>
        </Link>
        <div className="coverflow-dots" role="tablist" aria-label="Selected work">
          {COVERFLOW.map((item, index) => (
            <button
              key={item.slug}
              type="button"
              role="tab"
              aria-selected={index === active}
              className={`coverflow-dot${index === active ? " is-active" : ""}`}
              onClick={() => setActive(index)}
            >
              <span className="sr-only">{item.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
