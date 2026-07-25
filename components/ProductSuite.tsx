"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PRODUCTS } from "@/lib/catalog";

gsap.registerPlugin(ScrollTrigger);

const DEEP_DIVE_IDS = ["intellex", "zela", "junior-dev"];

export default function ProductSuite() {
  const rootRef = useRef<HTMLElement>(null);
  const deepDives = DEEP_DIVE_IDS.map(
    (id) => PRODUCTS.find((p) => p.id === id)!
  ).filter(Boolean);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      root.querySelectorAll<HTMLElement>(".feature-row").forEach((row) => {
        const copy = row.querySelector(".feature-copy");
        const visual = row.querySelector(".feature-visual");
        gsap.fromTo(
          [copy, visual],
          { opacity: 0, y: 36 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 82%",
              once: true,
            },
          }
        );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="product-suite section-gap"
      id="products"
      aria-labelledby="products-title"
      ref={rootRef}
    >
      <div className="container">
        <div className="section-header section-header--center reveal-fade">
          <p className="eyebrow">Product platform</p>
          <h2 id="products-title" className="section-title">
            Everything we operate.
          </h2>
          <p className="section-lede">
            Live products across learning, commerce, auth, and developer
            training - the proof behind how we build.
          </p>
        </div>

        <div className="product-grid">
          {PRODUCTS.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="product-card reveal-fade"
            >
              <div className="product-card-top">
                <span className="product-card-tag">{product.tag}</span>
                <span className="product-card-arrow" aria-hidden="true">
                  →
                </span>
              </div>
              <h3 className="product-card-name">{product.name}</h3>
              <p className="product-card-body">{product.short}</p>
              <span className="product-card-host">
                {product.href.replace("https://", "")}
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className="feature-dives">
        {deepDives.map((product, i) => (
          <article
            key={product.id}
            className={`feature-row${i % 2 === 1 ? " feature-row--flip" : ""}`}
          >
            <div className="container feature-row-inner">
              <div className="feature-copy">
                <span className="suite-tag">{product.tag}</span>
                <h3 className="stack-headline">{product.headline}</h3>
                <p className="stack-body">{product.short}</p>
                <ul className="stack-points" role="list">
                  {product.highlights.slice(0, 3).map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                <div className="suite-actions">
                  <Link href={`/products/${product.id}`} className="btn-primary">
                    Learn more
                    <span aria-hidden="true">→</span>
                  </Link>
                  <a
                    href={product.href}
                    className="btn-outline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open live
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>

              <div className="feature-visual">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.image}
                  alt={`${product.name} interface`}
                  width={1200}
                  height={675}
                  className="suite-img"
                  loading="lazy"
                />
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="container">
        <div className="stack-more reveal-fade">
          <div className="stack-more-copy">
            <h3>Explore the full catalog.</h3>
            <p>
              Every product with details, highlights, and live links in one
              place.
            </p>
          </div>
          <Link href="/products" className="btn-primary btn-lg">
            See all products
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
