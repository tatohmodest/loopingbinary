"use client";

import { useEffect, useRef } from "react";

interface StatConfig {
  count: number;
  display?: string;
  suffix?: string;
  label: string;
}

const STATS: StatConfig[] = [
  { count: 10,   suffix: "+",  label: "Business partners" },
  { count: 3,                  label: "Service lines" },
  { count: 1000, display: "1k", suffix: "+", label: "Courses on Intellex" },
  { count: 100,  suffix: "%",  label: "Built in-house" },
];

function StatVal({ count, display, suffix }: Omit<StatConfig, "label">) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const suffixHTML =
      suffix === "+"
        ? '<span class="stat-plus">+</span>'
        : suffix === "%"
        ? '<span class="stat-pct">%</span>'
        : "";

    function animateCount() {
      if (el!.dataset.animated) return;
      el!.dataset.animated = "1";

      if (prefersReduced) {
        el!.innerHTML = (display || count) + suffixHTML;
        return;
      }

      const duration = 1200;
      const startTime = performance.now();

      function ease(t: number) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      }

      function tick(now: number) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.round(ease(progress) * count);

        if (display && (progress === 1 || current / count > 0.85)) {
          el!.innerHTML = display + suffixHTML;
        } else {
          el!.innerHTML = current + suffixHTML;
        }

        if (progress < 1) requestAnimationFrame(tick);
      }

      requestAnimationFrame(tick);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCount();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [count, display, suffix]);

  const suffixEl =
    suffix === "+" ? (
      <span className="stat-plus">+</span>
    ) : suffix === "%" ? (
      <span className="stat-pct">%</span>
    ) : null;

  return (
    <span className="stat-val" ref={ref}>
      {display ?? count}
      {suffixEl}
    </span>
  );
}

export default function StatCounters() {
  return (
    <div
      className="hero-stats fade-in-up"
      style={{ ["--delay" as string]: "360ms" }}
    >
      {STATS.map((stat, i) => (
        <>
          {i > 0 && (
            <div key={`div-${i}`} className="stat-divider" aria-hidden="true" />
          )}
          <div key={stat.label} className="stat-item">
            <StatVal
              count={stat.count}
              display={stat.display}
              suffix={stat.suffix}
            />
            <span className="stat-label">{stat.label}</span>
          </div>
        </>
      ))}
    </div>
  );
}
