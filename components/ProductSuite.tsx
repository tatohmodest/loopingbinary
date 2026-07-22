"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PRODUCTS } from "@/lib/catalog";

gsap.registerPlugin(ScrollTrigger);

const FEATURED_IDS = ["intellex", "zela", "shop", "junior-dev", "business"];

export default function ProductSuite() {
  const rootRef = useRef<HTMLElement>(null);
  const featured = FEATURED_IDS.map(
    (id) => PRODUCTS.find((p) => p.id === id)!
  ).filter(Boolean);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      root.querySelectorAll<HTMLElement>(".stack-row").forEach((row) => {
        const copy = row.querySelector(".stack-copy");
        const visual = row.querySelector(".stack-visual");
        gsap.fromTo(
          [copy, visual],
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 80%",
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
        <div className="section-header reveal-fade">
          <p className="eyebrow">Our products speak for us</p>
          <h2 id="products-title" className="section-title">
            Real platforms.
            <br />
            Real proof.
          </h2>
          <p className="section-lede">
            We don’t just pitch services — we operate products used by learners,
            buyers, vendors, and developers across Cameroon. Scroll and see.
          </p>
        </div>

        <div className="product-stack">
          {featured.map((product, i) => (
            <article
              key={product.id}
              className={`stack-row${i % 2 === 1 ? " stack-row--flip" : ""}`}
            >
              <div className="stack-copy">
                <span className="suite-tag" style={{ color: product.accent }}>
                  {product.tag}
                </span>
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

              <div className="stack-visual">
                <div
                  className="suite-visual-glow"
                  style={{ background: product.accent }}
                  aria-hidden="true"
                />
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
            </article>
          ))}
        </div>

        <div className="stack-more reveal-fade">
          <div className="stack-more-copy">
            <h3>There’s more in the stack.</h3>
            <p>
              Auth, LB App, Internship, and the rest of the ecosystem — see every
              product we operate.
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
