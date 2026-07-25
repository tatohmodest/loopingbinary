import Link from "next/link";
import type { Product } from "@/lib/catalog";
import { PRODUCTS } from "@/lib/catalog";
import MagneticButton from "@/components/MagneticButton";

export default function ProductDetail({ product }: { product: Product }) {
  const others = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <main id="main" className="detail-page">
      <section className="detail-hero">
        <div className="detail-hero-mesh" aria-hidden="true" />
        <div className="container detail-hero-inner">
          <nav className="detail-crumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/#products">Products</Link>
            <span aria-hidden="true">/</span>
            <span>{product.name}</span>
          </nav>

          <p className="eyebrow">{product.tag}</p>
          <h1 className="detail-title">{product.headline}</h1>
          <p className="detail-lede">{product.body}</p>

          <div className="detail-cta-row">
            <MagneticButton
              href={product.href}
              className="btn-primary btn-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open {product.name}
              <span aria-hidden="true">↗</span>
            </MagneticButton>
            <MagneticButton href="#contact" className="btn-outline btn-lg">
              Talk to us
            </MagneticButton>
          </div>

          <div className="detail-meta">
            <div>
              <span className="detail-meta-label">Audience</span>
              <p>{product.audience}</p>
            </div>
            <div>
              <span className="detail-meta-label">Live product</span>
              <p>
                <a href={product.href} target="_blank" rel="noopener noreferrer">
                  {product.href.replace("https://", "")}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="detail-visual-section">
        <div className="container">
          <div className="detail-visual" style={{ ["--accent" as string]: product.accent }}>
            <div className="detail-visual-glow" aria-hidden="true" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={product.image}
              alt={`${product.name} product interface`}
              width={1400}
              height={788}
              className="detail-visual-img"
            />
          </div>
        </div>
      </section>

      <section className="section-gap">
        <div className="container detail-two-col">
          <div>
            <p className="eyebrow">Highlights</p>
            <h2 className="section-title">What makes {product.name} different.</h2>
          </div>
          <ul className="detail-highlights" role="list">
            {product.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-gap detail-band">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Capabilities</p>
            <h2 className="section-title">Built for real use.</h2>
          </div>
          <div className="detail-feature-grid">
            {product.features.map((f) => (
              <article key={f.title} className="detail-feature">
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-gap">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">How it works</p>
            <h2 className="section-title">From first click to real outcome.</h2>
          </div>
          <div className="detail-steps">
            {product.howItWorks.map((s) => (
              <article key={s.step} className="detail-step">
                <span className="detail-step-num">{s.step}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-gap detail-band">
        <div className="container detail-faq-wrap">
          <div>
            <p className="eyebrow">FAQ</p>
            <h2 className="section-title">Quick answers.</h2>
          </div>
          <div className="detail-faq">
            {product.faq.map((item) => (
              <details key={item.q} className="detail-faq-item">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-gap" id="contact">
        <div className="container">
          <div className="contact-banner">
            <div className="contact-banner-copy">
              <p className="eyebrow eyebrow--on-dark">Next step</p>
              <h2 className="contact-title">
                Ready to try
                <br />
                {product.name}?
              </h2>
              <p className="contact-sub">
                Open the live product, or talk to us if you want this built into
                your own stack.
              </p>
            </div>
            <div className="contact-options">
              <a
                href={product.href}
                className="contact-pill"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-pill-label">Live product</span>
                <span className="contact-pill-val">Open {product.name}</span>
              </a>
              <a href="https://wa.me/237650318856" className="contact-pill" target="_blank" rel="noopener noreferrer">
                <span className="contact-pill-label">WhatsApp</span>
                <span className="contact-pill-val">+237 650 318 856</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-gap detail-more">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">More from the stack</p>
            <h2 className="section-title">Explore other products.</h2>
          </div>
          <div className="suite-grid">
            {others.map((p) => (
              <Link key={p.id} href={`/products/${p.id}`} className="suite-link">
                <span className="suite-link-name">{p.name}</span>
                <span className="suite-link-host">{p.tag}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
