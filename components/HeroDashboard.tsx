"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const PRODUCTS = [
  { name: "Intellex", meta: "EdTech", tone: "green" },
  { name: "Zela", meta: "Commerce", tone: "pink" },
  { name: "Tech Shop", meta: "Retail", tone: "green" },
  { name: "Junior Dev", meta: "Tournament", tone: "blue" },
  { name: "Auth", meta: "Identity", tone: "green" },
  { name: "Business", meta: "Ops", tone: "blue" },
];

export default function HeroDashboard() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      root.classList.add("is-ready");
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        root,
        { opacity: 0, y: 48, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 1.05, ease: "power3.out", delay: 0.35 }
      );

      gsap.fromTo(
        root.querySelectorAll("[data-rise]"),
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          stagger: 0.05,
          ease: "power2.out",
          delay: 0.7,
        }
      );

      gsap.to(root.querySelectorAll(".hd-bar"), {
        scaleY: () => 0.45 + Math.random() * 0.55,
        transformOrigin: "bottom",
        duration: 1.4,
        stagger: { each: 0.08, repeat: -1, yoyo: true },
        ease: "sine.inOut",
      });

      gsap.to(root.querySelector(".hd-pulse"), {
        opacity: 0.35,
        scale: 1.08,
        duration: 1.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, root);

    root.classList.add("is-ready");
    return () => ctx.revert();
  }, []);

  return (
    <div className="hero-dash" ref={rootRef} aria-hidden="true">
      <div className="hero-dash-glow" />
      <div className="hero-dash-frame">
        <div className="hd-chrome">
          <span className="hd-dot hd-dot--r" />
          <span className="hd-dot hd-dot--y" />
          <span className="hd-dot hd-dot--g" />
          <div className="hd-url">
            <span className="hd-lock" />
            app.loopingbinary.com
          </div>
        </div>

        <div className="hd-body">
          <aside className="hd-side">
            <div className="hd-logo" data-rise>
              <span className="hd-logo-mark" />
              Looping Binary
            </div>
            <nav className="hd-nav">
              {["Overview", "Products", "Growth", "Training", "Billing"].map(
                (item, i) => (
                  <div
                    key={item}
                    className={`hd-nav-item${i === 0 ? " is-active" : ""}`}
                    data-rise
                  >
                    <span className="hd-nav-icon" />
                    {item}
                  </div>
                )
              )}
            </nav>
            <div className="hd-side-card" data-rise>
              <strong>Agency partner</strong>
              <p>Embed LB into your ops</p>
            </div>
          </aside>

          <div className="hd-main">
            <div className="hd-top" data-rise>
              <div>
                <p className="hd-kicker">Workspace</p>
                <h3>Business growth stack</h3>
              </div>
              <div className="hd-top-actions">
                <span className="hd-pill">Live</span>
                <span className="hd-btn">New project</span>
              </div>
            </div>

            <div className="hd-stats" data-rise>
              {[
                ["12", "Active builds"],
                ["1k+", "Intellex courses"],
                ["7", "Internship tracks"],
                ["24/7", "Auth uptime"],
              ].map(([val, label]) => (
                <div key={label} className="hd-stat">
                  <strong>{val}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>

            <div className="hd-panels">
              <div className="hd-panel hd-panel--chart" data-rise>
                <div className="hd-panel-head">
                  <span>Growth velocity</span>
                  <span className="hd-muted">This quarter</span>
                </div>
                <div className="hd-chart">
                  {Array.from({ length: 14 }).map((_, i) => (
                    <span key={i} className="hd-bar" style={{ ["--h" as string]: `${35 + ((i * 17) % 55)}%` }} />
                  ))}
                </div>
              </div>

              <div className="hd-panel hd-panel--list" data-rise>
                <div className="hd-panel-head">
                  <span>Live products</span>
                  <span className="hd-pulse" />
                </div>
                <div className="hd-products">
                  {PRODUCTS.map((p) => (
                    <div key={p.name} className="hd-product">
                      <span className={`hd-product-dot hd-product-dot--${p.tone}`} />
                      <div>
                        <strong>{p.name}</strong>
                        <span>{p.meta}</span>
                      </div>
                      <em>Open</em>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
