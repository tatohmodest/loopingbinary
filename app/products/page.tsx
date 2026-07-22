import type { Metadata } from "next";
import Link from "next/link";
import { PRODUCTS } from "@/lib/catalog";
import MagneticButton from "@/components/MagneticButton";

export const metadata: Metadata = {
  title: "All Products — Looping Binary",
  description:
    "Explore every Looping Binary product: Intellex, Zela, Tech Shop, Auth, Business, Internship, Junior Dev, and more.",
};

export default function ProductsIndexPage() {
  return (
    <main id="main" className="detail-page">
      <section className="detail-hero">
        <div className="detail-hero-mesh" aria-hidden="true" />
        <div className="container detail-hero-inner">
          <nav className="detail-crumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>Products</span>
          </nav>
          <p className="eyebrow">The full stack</p>
          <h1 className="detail-title">Every product we operate.</h1>
          <p className="detail-lede">
            Education, commerce, infrastructure, identity, and developer
            training — live platforms that prove what Looping Binary can build
            for your business too.
          </p>
          <div className="detail-cta-row">
            <MagneticButton href="/#contact" className="btn-primary btn-lg">
              Grow with us
            </MagneticButton>
            <MagneticButton href="/#services" className="btn-outline btn-lg">
              See services
            </MagneticButton>
          </div>
        </div>
      </section>

      <section className="section-gap">
        <div className="container">
          <div className="all-products-grid">
            {PRODUCTS.map((p) => (
              <article key={p.id} className="all-product-card">
                <div className="all-product-media">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image}
                    alt=""
                    width={800}
                    height={450}
                    loading="lazy"
                  />
                </div>
                <div className="all-product-body">
                  <span className="suite-tag" style={{ color: p.accent }}>
                    {p.tag}
                  </span>
                  <h2>{p.name}</h2>
                  <p>{p.short}</p>
                  <div className="suite-actions">
                    <Link href={`/products/${p.id}`} className="btn-primary">
                      Details
                    </Link>
                    <a
                      href={p.href}
                      className="btn-outline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live ↗
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
