import React from "react";
import Link from "next/link";
import ProductSuite from "@/components/ProductSuite";
import HeroDashboard from "@/components/HeroDashboard";
import HeroTitle from "@/components/HeroTitle";
import MagneticButton from "@/components/MagneticButton";
import ArrowDraw from "@/components/ArrowDraw";
import ScrollRevealFallback from "@/components/ScrollRevealFallback";
import CommitGrid from "@/components/CommitGrid";

export default function Home() {
  return (
    <main id="main">
      <ScrollRevealFallback />

      {/* ═══ HERO (Supabase-style: centered copy + full-width product) ═══ */}
      <section className="hero" aria-labelledby="hero-h1">
        <div className="container hero-wrap">
          <div className="hero-copy">
            <span
              className="hero-badge fade-in-up"
              style={{ ["--delay" as string]: "0ms" }}
            >
              Douala · Africa · Built in-house
            </span>

            <HeroTitle />

            <p
              className="hero-sub fade-in-up"
              style={{ ["--delay" as string]: "120ms" }}
            >
              Looping Binary builds software, runs digital growth, and trains
              the people who keep shipping. Our live products are the proof.
            </p>

            <div
              className="hero-cta fade-in-up"
              style={{ ["--delay" as string]: "200ms" }}
            >
              <MagneticButton href="#contact" className="btn-primary btn-lg">
                Talk to us
              </MagneticButton>
              <MagneticButton href="#products" className="btn-outline btn-lg">
                Browse products
              </MagneticButton>
            </div>
          </div>

          <div className="hero-visual fade-in-up" style={{ ["--delay" as string]: "280ms" }}>
            <HeroDashboard />
          </div>
        </div>
      </section>

      {/* ═══ PRODUCT / OFFERING STRIP ════════════════════════════════ */}
      <div className="marquee-wrap" aria-hidden="true">
        <div className="marquee-track">
          {[
            "Intellex",
            "Zela",
            "Tech Shop",
            "LB App",
            "Auth",
            "Business",
            "Internship",
            "Junior Dev",
            "Software Development",
            "Digital Growth",
          ]
            .concat([
              "Intellex",
              "Zela",
              "Tech Shop",
              "LB App",
              "Auth",
              "Business",
              "Internship",
              "Junior Dev",
              "Software Development",
              "Digital Growth",
            ])
            .map((item, i) => (
              <React.Fragment key={i}>
                <span>{item}</span>
                <span className="marquee-dot">·</span>
              </React.Fragment>
            ))}
        </div>
      </div>

      {/* ═══ PRODUCTS ════════════════════════════════════════════════ */}
      <ProductSuite />

      {/* ═══ SERVICES ════════════════════════════════════════════════ */}
      <section
        className="services section-gap"
        id="services"
        aria-labelledby="services-title"
      >
        <div className="container">
          <div className="section-header section-header--center reveal-fade">
            <p className="eyebrow">For businesses</p>
            <h2 id="services-title" className="section-title">
              Come grow with us.
            </h2>
            <p className="section-lede">
              We build your software, run your digital growth, and train the
              people who keep it moving - one partner for the full loop.
            </p>
          </div>

          <div className="services-grid">
            <article className="service-card reveal-fade">
              <span className="bento-num">01</span>
              <h3>Software Development</h3>
              <p>
                Landing pages, web apps, e-commerce, dashboards, APIs - designed
                precisely, built to last.
              </p>
              <ul className="service-list" role="list">
                <li>Web applications &amp; platforms</li>
                <li>E-commerce &amp; payment systems</li>
                <li>Dashboards &amp; admin panels</li>
                <li>APIs &amp; back-end systems</li>
              </ul>
              <Link href="/services/software-development" className="btn-text">
                See details <span aria-hidden="true">→</span>
              </Link>
            </article>

            <article
              className="service-card reveal-fade"
              style={{ ["--reveal-delay" as string]: "80ms" }}
            >
              <span className="bento-num">02</span>
              <h3>Digital Growth</h3>
              <p>
                Social, paid ads, SEO, and content - executed with the same
                rigour we apply to code.
              </p>
              <Link href="/services/digital-growth" className="btn-text">
                See details <span aria-hidden="true">→</span>
              </Link>
            </article>

            <article
              className="service-card reveal-fade"
              style={{ ["--reveal-delay" as string]: "140ms" }}
            >
              <span className="bento-num">03</span>
              <h3>Growth Agency Partner</h3>
              <p>
                An embedded tech and marketing team. Strategy, execution,
                results - you run the business.
              </p>
              <Link href="/services/agency-partner" className="btn-text">
                See details <span aria-hidden="true">→</span>
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* ═══ THE LOOP ════════════════════════════════════════════════ */}
      <section
        className="the-loop section-gap"
        id="the-loop"
        aria-labelledby="loop-title"
      >
        <div className="container">
          <div className="loop-layout">
            <div className="loop-copy reveal-fade">
              <p className="eyebrow">The Loop</p>
              <h2 id="loop-title" className="section-title">
                Why our work is
                <br />
                different.
              </h2>

              <blockquote className="loop-quote">
                <p>
                  The company does better work because the people in it were
                  trained rigorously. The training is better because the people
                  teaching it are actively building things in the real world.
                </p>
                <footer>That is the loop. And it is the whole point.</footer>
              </blockquote>

              <p className="loop-sub">
                For you: every project is staffed with engineers who have been
                tested - not just hired from a CV.
              </p>
            </div>

            <ArrowDraw>
              <div className="loop-node loop-node--company">
                <span className="loop-node-label">The Company</span>
                <ul role="list">
                  <li>Delivers real software</li>
                  <li>Works on real deadlines</li>
                  <li>Builds real products</li>
                </ul>
              </div>

              <div className="loop-connector">
                <svg
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="loop-arrow-svg"
                >
                  <path
                    id="arrow-top"
                    d="M8 20 Q40 8 72 20"
                    stroke="#1f8f57"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <polygon
                    points="72,20 64,14 66,24"
                    fill="#1f8f57"
                    opacity="0"
                    className="arrow-head-top"
                  />
                  <path
                    id="arrow-bottom"
                    d="M72 60 Q40 72 8 60"
                    stroke="#2f7d8f"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <polygon
                    points="8,60 16,66 14,56"
                    fill="#2f7d8f"
                    opacity="0"
                    className="arrow-head-bottom"
                  />
                </svg>
                <span className="loop-connector-label">feeds</span>
              </div>

              <div className="loop-node loop-node--school">
                <span className="loop-node-label">The School</span>
                <ul role="list">
                  <li>Trains developers rigorously</li>
                  <li>Uses real project work</li>
                  <li>Produces job-ready engineers</li>
                </ul>
              </div>
            </ArrowDraw>
          </div>
        </div>
      </section>

      {/* ═══ WHY LOOPING BINARY ══════════════════════════════════════ */}
      <section
        className="why-lb section-gap"
        id="why"
        aria-labelledby="why-title"
      >
        <div className="container">
          <div className="section-header section-header--center reveal-fade">
            <p className="eyebrow">Why Looping Binary</p>
            <h2 id="why-title" className="section-title">
              Local knowledge.
              <br />
              Global standard.
            </h2>
          </div>

          <div className="why-row">
            {[
              {
                num: "01",
                title: "We are from here",
                body: "We operate from Cameroon. We understand the market, payment systems, connectivity, and business culture - and build for that context.",
              },
              {
                num: "02",
                title: "Trained team, not random hires",
                body: "Every engineer on your project went through live projects, real deadlines, and active mentorship. No guesses in the staffing.",
              },
              {
                num: "03",
                title: "End-to-end, not hand-off",
                body: "Strategy, design, development, growth - one partner, one point of accountability.",
              },
              {
                num: "04",
                title: "Operators, not contractors",
                body: "We run our own products. When we advise you, we have skin in the game.",
              },
            ].map(({ num, title, body }, i) => (
              <div
                key={num}
                className="why-block reveal-fade"
                style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}
              >
                <div className="why-num">{num}</div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ EDUCATION ═══════════════════════════════════════════════ */}
      <section
        className="education section-gap"
        id="education"
        aria-labelledby="edu-title"
      >
        <div className="container">
          <div className="edu-layout">
            <div className="edu-header reveal-fade">
              <p className="eyebrow">Education &amp; training</p>
              <h2 id="edu-title" className="section-title">
                Vocational paths that
                <br />
                actually ship talent.
              </h2>
              <p className="edu-intro">
                Internship, Junior Dev, mentorship, and Intellex - how we train
                developers who can work on real products, not just certificates.
              </p>
              <a
                href="https://intellex.loopingbinary.com"
                className="btn-outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore Intellex <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div
              className="edu-programs reveal-fade"
              style={{ ["--reveal-delay" as string]: "100ms" }}
            >
              <Link href="/products/intern" className="program-tile">
                <span className="program-tag">Most rigorous</span>
                <h3>Internship Program</h3>
                <p>
                  Work on live LB projects. Real deadlines. Real clients. Real
                  consequences.
                </p>
              </Link>

              <Link href="/products/junior-dev" className="program-tile">
                <span className="program-tag">Competitive</span>
                <h3>Junior Dev Tournament</h3>
                <p>
                  Team seasons with live leaderboards, real modules, coins, and
                  portfolio-ready projects.
                </p>
              </Link>

              <div className="program-tile program-tile--static">
                <span className="program-tag">1-on-1</span>
                <h3>Mentorship Program</h3>
                <p>
                  Direct guidance from professionals actively building at
                  Looping Binary.
                </p>
              </div>

              <Link href="/products/intellex" className="program-tile">
                <span className="program-tag">1,000+ courses</span>
                <h3>Intellex Platform</h3>
                <p>
                  Self-paced courses in web development, design, data,
                  marketing, and AI.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ABOUT ═══════════════════════════════════════════════════ */}
      <section
        className="about section-gap"
        id="about"
        aria-labelledby="about-title"
      >
        <div className="container">
          <div className="about-layout">
            <div className="about-copy reveal-fade">
              <p className="eyebrow">About</p>
              <h2 id="about-title" className="section-title">
                Built from Douala.
                <br />
                Built for Africa.
              </h2>
              <p>
                Looping Binary was founded because the gap between what African
                businesses need digitally and what they can actually get built
                is enormous. We exist to close that gap.
              </p>
              <p>
                We are a technology company and an education institution in one.
                Better engineers build better products - better products attract
                better engineers.
              </p>
              <div className="about-founder">
                <div className="founder-info">
                  <span className="founder-name">Tatoh Modest Wilton</span>
                  <span className="founder-role">
                    Founder &amp; CEO, Looping Binary
                  </span>
                </div>
              </div>
            </div>

            <div
              className="about-visual reveal-fade"
              style={{ ["--reveal-delay" as string]: "120ms" }}
              aria-hidden="true"
            >
              <CommitGrid />
              <div className="about-stat-block">
                <div className="about-stat">
                  <span className="about-stat-val">2024</span>
                  <span className="about-stat-lbl">Founded</span>
                </div>
                <div className="about-stat">
                  <span className="about-stat-val">Douala</span>
                  <span className="about-stat-lbl">Headquarters</span>
                </div>
                <div className="about-stat">
                  <span className="about-stat-val">Africa</span>
                  <span className="about-stat-lbl">Operating region</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CONTACT ═════════════════════════════════════════════════ */}
      <section
        className="contact section-gap"
        id="contact"
        aria-labelledby="contact-title"
      >
        <div className="container">
          <div className="contact-banner reveal-fade">
            <div className="contact-banner-copy">
              <p className="eyebrow eyebrow--on-dark">Let’s talk</p>
              <h2 id="contact-title" className="contact-title">
                Bring your business.
                <br />
                We’ll grow it.
              </h2>
              <p className="contact-sub">
                Software, marketing, and training - tell us where you are. We’ll
                tell you honestly what it takes.
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

      {/* ═══ FOOTER ══════════════════════════════════════════════════ */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <a href="/" className="nav-logo" aria-label="Looping Binary">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/logo.svg"
                width="32"
                height="16"
                alt=""
                aria-hidden="true"
              />
              <span className="nav-wordmark">
                <span className="nav-lb-loop">Looping</span>{" "}
                <span className="nav-lb-bin">Binary</span>
              </span>
            </a>
            <p>We Build. We Grow. We Train.</p>
            <div className="footer-socials">
              <a
                href="https://web.facebook.com/profile.php?id=61586371936567"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="footer-social-link"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/looping-binary/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="footer-social-link"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            <div className="footer-col">
              <p className="footer-col-title">Products</p>
              <ul role="list">
                <li>
                  <Link href="/products/intellex">Intellex</Link>
                </li>
                <li>
                  <Link href="/products/zela">Zela</Link>
                </li>
                <li>
                  <Link href="/products/shop">Tech Shop</Link>
                </li>
                <li>
                  <Link href="/products/app">LB App</Link>
                </li>
                <li>
                  <Link href="/products/auth">Auth</Link>
                </li>
                <li>
                  <Link href="/products/business">Business</Link>
                </li>
                <li>
                  <Link href="/products/junior-dev">Junior Dev</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <p className="footer-col-title">Programs &amp; Services</p>
              <ul role="list">
                <li>
                  <Link href="/products/intern">Internship</Link>
                </li>
                <li>
                  <Link href="/services/software-development">Software Development</Link>
                </li>
                <li>
                  <Link href="/services/digital-growth">Digital Growth</Link>
                </li>
                <li>
                  <Link href="/services/agency-partner">Agency Partner</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <p className="footer-col-title">Contact</p>
              <ul role="list">
                <li>
                  <a href="mailto:loopingbinary@gmail.com">loopingbinary@gmail.com</a>
                </li>
                <li>
                  <a href="https://wa.me/237650318856" target="_blank" rel="noopener noreferrer">
                    +237 650 318 856
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="footer-bottom">
          <div className="container footer-bottom-inner">
            <p>© 2026 Looping Binary. Douala, Cameroon.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
