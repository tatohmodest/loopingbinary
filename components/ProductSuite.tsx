"use client";

import Link from "next/link";
import { useEffect, useRef, useState, startTransition, type CSSProperties } from "react";
import gsap from "gsap";
import { PRODUCTS } from "@/lib/catalog";

export default function ProductSuite() {
  const [active, setActive] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const product = PRODUCTS[active];

  const goTo = (index: number) => {
    if (index === active) return;
    startTransition(() => setActive(index));
  };

  useEffect(() => {
    const panel = panelRef.current;
    const img = imgRef.current;
    if (!panel || !img) return;

    const tl = gsap.timeline();
    tl.fromTo(
      panel.querySelectorAll("[data-anim]"),
      { opacity: 0, y: 18 },
      { opacity: 1, y: 0, duration: 0.45, stagger: 0.06, ease: "power3.out" }
    ).fromTo(
      img,
      { opacity: 0, scale: 1.04, y: 24 },
      { opacity: 1, scale: 1, y: 0, duration: 0.55, ease: "power3.out" },
      0.05
    );

    return () => {
      tl.kill();
    };
  }, [active]);

  useEffect(() => {
    autoRef.current = setInterval(() => {
      setActive((i) => (i + 1) % PRODUCTS.length);
    }, 5200);
    return () => {
      if (autoRef.current) clearInterval(autoRef.current);
    };
  }, []);

  const pauseAuto = () => {
    if (autoRef.current) clearInterval(autoRef.current);
  };

  return (
    <section
      className="product-suite section-gap"
      id="products"
      aria-labelledby="products-title"
      onMouseEnter={pauseAuto}
      onFocusCapture={pauseAuto}
    >
      <div className="container">
        <div className="section-header reveal-fade">
          <p className="eyebrow">The Looping Binary Stack</p>
          <h2 id="products-title" className="section-title">
            All our products.
            <br />
            One connected company.
          </h2>
          <p className="section-lede">
            Education, commerce, infrastructure, and tournaments — platforms we
            build, operate, and ship every day.
          </p>
        </div>

        <div className="suite-tabs" role="tablist" aria-label="Products">
          {PRODUCTS.map((p, i) => (
            <button
              key={p.id}
              role="tab"
              type="button"
              aria-selected={i === active}
              className={`suite-tab${i === active ? " is-active" : ""}`}
              style={
                i === active
                  ? ({ ["--tab-accent" as string]: p.accent } as CSSProperties)
                  : undefined
              }
              onClick={() => goTo(i)}
            >
              <span className="suite-tab-dot" aria-hidden="true" />
              {p.name}
            </button>
          ))}
        </div>

        <div className="suite-panel" role="tabpanel" ref={panelRef} key={product.id}>
          <div className="suite-copy">
            <span className="suite-tag" data-anim style={{ color: product.accent }}>
              {product.tag}
            </span>
            <h3 className="suite-headline" data-anim>
              {product.headline}
            </h3>
            <p className="suite-body" data-anim>
              {product.short}
            </p>
            <div className="suite-actions" data-anim>
              <Link href={`/products/${product.id}`} className="btn-primary btn-lg">
                Learn more
                <span aria-hidden="true">→</span>
              </Link>
              <a
                href={product.href}
                className="btn-outline btn-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open live
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="suite-visual" aria-hidden="true">
            <div className="suite-visual-glow" style={{ background: product.accent }} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              ref={imgRef}
              src={product.image}
              alt=""
              width={1200}
              height={675}
              className="suite-img"
            />
          </div>
        </div>

        <div className="suite-grid reveal-fade">
          {PRODUCTS.map((p) => (
            <Link key={p.id} href={`/products/${p.id}`} className="suite-link">
              <span className="suite-link-name">{p.name}</span>
              <span className="suite-link-host">{p.href.replace("https://", "")}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
