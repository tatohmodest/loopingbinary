import Link from "next/link";
import type { Service } from "@/lib/catalog";
import { SERVICES } from "@/lib/catalog";
import MagneticButton from "@/components/MagneticButton";

export default function ServiceDetail({ service }: { service: Service }) {
  const others = SERVICES.filter((s) => s.id !== service.id);

  return (
    <main id="main" className="detail-page">
      <section className="detail-hero">
        <div className="detail-hero-mesh" aria-hidden="true" />
        <div className="container detail-hero-inner">
          <nav className="detail-crumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/#services">Services</Link>
            <span aria-hidden="true">/</span>
            <span>{service.name}</span>
          </nav>

          <p className="eyebrow" style={{ color: service.accent }}>
            Service {service.num}
          </p>
          <h1 className="detail-title">{service.headline}</h1>
          <p className="detail-lede">{service.body}</p>

          <div className="detail-cta-row">
            <MagneticButton href="#contact" className="btn-primary btn-lg">
              Start a project
            </MagneticButton>
            <MagneticButton href="/#services" className="btn-outline btn-lg">
              All services
            </MagneticButton>
          </div>
        </div>
      </section>

      <section className="section-gap">
        <div className="container detail-two-col">
          <div>
            <p className="eyebrow">What you get</p>
            <h2 className="section-title">Offerings inside this line.</h2>
            <p className="section-lede">{service.short}</p>
          </div>
          <ul className="detail-highlights" role="list">
            {service.offerings.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-gap detail-band">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Process</p>
            <h2 className="section-title">How we work with you.</h2>
          </div>
          <div className="detail-steps">
            {service.process.map((s) => (
              <article key={s.step} className="detail-step">
                <span className="detail-step-num">{s.step}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-gap">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Outcomes</p>
            <h2 className="section-title">What success looks like.</h2>
          </div>
          <div className="detail-feature-grid">
            {service.outcomes.map((o) => (
              <article key={o} className="detail-feature">
                <h3>{o}</h3>
                <p>
                  Delivered with local market understanding and the same
                  standards we use on our own products.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-gap" id="contact">
        <div className="container">
          <div className="contact-banner">
            <div className="contact-banner-copy">
              <p className="eyebrow eyebrow--on-dark">Get started</p>
              <h2 className="contact-title">
                Let’s scope
                <br />
                {service.name.toLowerCase()}.
              </h2>
              <p className="contact-sub">
                One conversation. We’ll tell you honestly whether we’re the
                right fit and what it would take.
              </p>
            </div>
            <div className="contact-options">
              <a
                href="https://wa.me/237650318856"
                className="contact-pill"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="contact-pill-label">WhatsApp</span>
                <span className="contact-pill-val">+237 650 318 856</span>
              </a>
              <a href="mailto:loopingbinary@gmail.com" className="contact-pill">
                <span className="contact-pill-label">Email</span>
                <span className="contact-pill-val">loopingbinary@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-gap detail-more">
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Other services</p>
            <h2 className="section-title">Keep exploring.</h2>
          </div>
          <div className="suite-grid">
            {others.map((s) => (
              <Link key={s.id} href={`/services/${s.id}`} className="suite-link">
                <span className="suite-link-name">{s.name}</span>
                <span className="suite-link-host">Service {s.num}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
