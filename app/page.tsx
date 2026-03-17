import React from "react";
import HeroCanvas from "@/components/HeroCanvas";
import HeroTitle from "@/components/HeroTitle";
import StatCounters from "@/components/StatCounters";
import CommitGrid from "@/components/CommitGrid";
import ArrowDraw from "@/components/ArrowDraw";
import ScrollRevealFallback from "@/components/ScrollRevealFallback";
import DarkVeil from "@/components/DarkVeil";

export default function Home() {
  return (
    <main id="main">
      <ScrollRevealFallback />

      {/* ═══ HERO ═══════════════════════════════════════════════════ */}
      <section className="hero" aria-labelledby="hero-h1">
        <HeroCanvas />

        <div className="scroll-progress" id="scrollProgress" aria-hidden="true" />

        <div className="hero-inner container">
          <div className="hero-content">
            <div
              className="hero-badge fade-in-up"
              style={{ ["--delay" as string]: "0ms" }}
            >
              <span className="badge-dot" />
              Douala, Cameroon,Operating across Africa
            </div>

            <HeroTitle />

            <p
              className="hero-sub fade-in-up"
              style={{ ["--delay" as string]: "160ms" }}
            >
              Looping Binary designs and builds digital products for businesses,
              websites, platforms, applications, and systems. We also grow them
              and train the engineers who build them.
            </p>

            <div
              className="hero-cta fade-in-up"
              style={{ ["--delay" as string]: "240ms" }}
            >
              <a href="#contact" className="btn-primary btn-lg">
                Start a project
              </a>
              <a href="#services" className="btn-outline btn-lg">
                See our work
              </a>
            </div>

            <StatCounters />
          </div>
        </div>

        <div className="hero-darkveil" aria-hidden="true">
          <DarkVeil
            hueShift={0}
            noiseIntensity={0}
            scanlineIntensity={0}
            speed={0.5}
            scanlineFrequency={0}
            warpAmount={0}
          />
        </div>

        <div className="hero-scroll-cue" aria-hidden="true">
          <div className="scroll-line" />
        </div>
      </section>

      {/* ═══ MARQUEE ═════════════════════════════════════════════════ */}
      <div className="marquee-wrap" aria-hidden="true">
        <div className="marquee-track">
          {[
            "Software Development",
            "Digital Growth",
            "Web Applications",
            "API Development",
            "E-Commerce",
            "Growth Strategy",
            "Developer Training",
            "Tech Partnerships",
          ]
            .concat([
              "Software Development",
              "Digital Growth",
              "Web Applications",
              "API Development",
              "E-Commerce",
              "Growth Strategy",
              "Developer Training",
              "Tech Partnerships",
            ])
            .map((item, i) => (
              <React.Fragment key={i}>
                <span>{item}</span>
                <span className="marquee-dot">·</span>
              </React.Fragment>
            ))}
        </div>
      </div>

      {/* ═══ SERVICES ════════════════════════════════════════════════ */}
      <section
        className="services section-gap"
        id="services"
        aria-labelledby="services-title"
      >
        <div className="container">
          <div className="section-header">
            <p className="eyebrow">Services</p>
            <h2 id="services-title" className="section-title">
              Everything your business
              <br />
              needs to operate online.
            </h2>
          </div>

          <div className="services-illustration-wrap" aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/services-illustration.png"
              alt=""
              width={1200}
              height={675}
              loading="lazy"
              className="services-illus-img reveal-fade"
            />
          </div>

          <div className="services-grid">
            {/* Featured: Software Dev */}
            <article className="service-card service-card--featured reveal-fade">
              <div className="service-card-inner">
                <div className="service-num">01</div>
                <h3 className="service-name">
                  Software
                  <br />
                  Development
                </h3>
                <p className="service-desc">
                  We build the digital infrastructure your business runs on.
                  From a first landing page to a fully custom platform,
                  designed precisely, built to last.
                </p>
                <ul className="service-list" role="list">
                  <li>Landing pages &amp; company websites</li>
                  <li>Web applications &amp; platforms</li>
                  <li>E-commerce &amp; payment systems</li>
                  <li>Dashboards &amp; admin panels</li>
                  <li>APIs &amp; back-end systems</li>
                </ul>
                <div className="service-cta-row">
                  <a href="#contact" className="btn-text">
                    Start a project <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
              <div className="service-visual" aria-hidden="true">
                <svg
                  className="circuit-svg"
                  viewBox="0 0 320 280"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="40" y1="80" x2="160" y2="80" stroke="#00bf63" strokeWidth="1" opacity="0.3" />
                  <line x1="160" y1="80" x2="280" y2="140" stroke="#00bf63" strokeWidth="1" opacity="0.3" />
                  <line x1="160" y1="80" x2="160" y2="200" stroke="#00bf63" strokeWidth="1" opacity="0.3" />
                  <line x1="40" y1="200" x2="280" y2="200" stroke="#00bf63" strokeWidth="1" opacity="0.3" />
                  <circle cx="40" cy="80" r="5" fill="#00bf63" opacity="0.6" className="circuit-node" />
                  <circle cx="160" cy="80" r="7" fill="#00bf63" opacity="0.9" className="circuit-node circuit-node--main" />
                  <circle cx="280" cy="140" r="5" fill="#00bf63" opacity="0.6" className="circuit-node" />
                  <circle cx="160" cy="200" r="5" fill="#00bf63" opacity="0.6" className="circuit-node" />
                  <circle cx="40" cy="200" r="4" fill="#0097b2" opacity="0.5" className="circuit-node" />
                  <circle cx="280" cy="200" r="4" fill="#0097b2" opacity="0.5" className="circuit-node" />
                  <circle cx="160" cy="80" r="14" stroke="#00bf63" strokeWidth="1" opacity="0.25" className="circuit-ring" />
                </svg>
              </div>
            </article>

            {/* Right column */}
            <div className="services-right">
              <article
                className="service-card reveal-fade"
                style={{ ["--reveal-delay" as string]: "100ms" }}
              >
                <div className="service-num">02</div>
                <h3 className="service-name">Digital Growth</h3>
                <p className="service-desc">
                  We run your digital marketing,social media, paid ads, SEO,
                  content,with the same rigour we apply to code.
                </p>
                <ul className="service-list" role="list">
                  <li>Social media strategy &amp; management</li>
                  <li>Paid advertising (Facebook, Google)</li>
                  <li>SEO &amp; organic visibility</li>
                  <li>Content creation &amp; copywriting</li>
                </ul>
                <a href="#contact" className="btn-text">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </article>

              <article
                className="service-card service-card--accent reveal-fade"
                style={{ ["--reveal-delay" as string]: "200ms" }}
              >
                <div className="service-num">03</div>
                <h3 className="service-name">Growth Agency Partner</h3>
                <p className="service-desc">
                  An embedded tech and marketing team. We own the work,
                  strategy, execution, results. You focus on running the
                  business.
                </p>
                <ul className="service-list" role="list">
                  <li>Dedicated embedded team</li>
                  <li>Full retainer model</li>
                  <li>Strategy + execution combined</li>
                  <li>Scales as you grow</li>
                </ul>
                <a href="#contact" className="btn-text">
                  Explore partnership <span aria-hidden="true">→</span>
                </a>
              </article>
            </div>
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
            {/* Left: copy */}
            <div className="loop-copy reveal-fade">
              <p className="eyebrow eyebrow--light">The Loop</p>
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
                tested,not just hired from a CV.
              </p>
            </div>

            {/* Right: loop diagram,ArrowDraw adds class on scroll */}
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
                    stroke="#00bf63"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <polygon
                    points="72,20 64,14 66,24"
                    fill="#00bf63"
                    opacity="0"
                    className="arrow-head-top"
                  />
                  <path
                    id="arrow-bottom"
                    d="M72 60 Q40 72 8 60"
                    stroke="#0097b2"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <polygon
                    points="8,60 16,66 14,56"
                    fill="#0097b2"
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
          <div className="section-header">
            <p className="eyebrow">Why Looping Binary</p>
            <h2 id="why-title" className="section-title">
              Local knowledge.
              <br />
              Global standard.
            </h2>
          </div>

          <div className="why-grid">
            {[
              {
                num: "01",
                title: "We are from here",
                body: "We operate from Cameroon. We understand the market,payment systems, connectivity constraints, business culture. We build for the African context, not a template copied from Europe.",
                delay: "0ms",
              },
              {
                num: "02",
                title: "Trained team, not random hires",
                body: "Every engineer on your project went through a rigorous program,live projects, real deadlines, active mentorship. No guesses in the staffing.",
                delay: "80ms",
              },
              {
                num: "03",
                title: "End-to-end, not hand-off",
                body: "Strategy, design, development, growth,one partner, one point of accountability. No bouncing between agencies and freelancers.",
                delay: "160ms",
              },
              {
                num: "04",
                title: "We are operators, not contractors",
                body: "Looping Binary runs its own products. When we advise you, we have skin in the game.",
                delay: "240ms",
              },
            ].map(({ num, title, body, delay }) => (
              <div
                key={num}
                className="why-item reveal-fade"
                style={{ ["--reveal-delay" as string]: delay }}
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
              <p className="eyebrow">Education Programs</p>
              <h2 id="edu-title" className="section-title">
                We train the next
                <br />
                generation of
                <br />
                African developers.
              </h2>
              <p className="edu-intro">
                The school is not a side project. It is how the company stays
                sharp,and how we give serious developers a real path into
                tech.
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
              <a
                href="https://intern.loopingbinary.com"
                className="program-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="program-card-top">
                  <span className="program-tag">Most rigorous</span>
                </div>
                <h3>Internship Program</h3>
                <p>
                  Work on live LB projects. Real deadlines. Real clients. Real
                  consequences. The most demanding path we offer.
                </p>
              </a>

              <a
                href="https://juniordev.loopingbinary.com"
                className="program-card"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="program-card-top">
                  <span className="program-tag">Competitive</span>
                </div>
                <h3>Junior Dev Tournament</h3>
                <p>
                  6-week team competition with live leaderboard, Demo Day, and
                  real evaluation by active engineers.
                </p>
              </a>

              <div
                className="program-card program-card--static reveal-fade"
                style={{ ["--reveal-delay" as string]: "160ms" }}
              >
                <div className="program-card-top">
                  <span className="program-tag">1-on-1</span>
                </div>
                <h3>Mentorship Program</h3>
                <p>
                  Direct guidance from professionals actively building at
                  Looping Binary. Group and individual tracks.
                </p>
              </div>

              <div
                className="program-card program-card--static reveal-fade"
                style={{ ["--reveal-delay" as string]: "200ms" }}
              >
                <div className="program-card-top">
                  <span className="program-tag">1,000+ courses</span>
                </div>
                <h3>Intellex Platform</h3>
                <p>
                  Self-paced courses in web development, design, data,
                  marketing, and AI on our own learning platform.
                </p>
              </div>
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
                is enormous. Foreign agencies don&apos;t understand the context. Local
                freelancers can&apos;t deliver at scale. We exist to close that gap.
              </p>
              <p>
                We are a technology company and an education institution in one.
                The two reinforce each other,better engineers build better
                products, better products attract better engineers.
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
                  <span className="about-stat-val">Douala V</span>
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
          <div className="contact-inner reveal-fade">
            <p className="eyebrow eyebrow--light">Get Started</p>
            <h2 id="contact-title" className="contact-title">
              Ready to build
              <br />
              something real?
            </h2>
            <p className="contact-sub">
              One conversation. No commitments. We will tell you honestly
              whether we are the right fit and what it would take.
            </p>

            <div className="contact-options">
              <a
                href="https://wa.me/237650318856"
                className="contact-card contact-card--wa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="contact-card-icon" aria-hidden="true">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <span className="contact-card-label">WhatsApp</span>
                  <span className="contact-card-val">+237 650 318 856</span>
                </div>
              </a>

              <a
                href="mailto:loopingbinary@gmail.com"
                className="contact-card contact-card--email"
              >
                <div className="contact-card-icon" aria-hidden="true">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m2 7 10 7 10-7" />
                  </svg>
                </div>
                <div>
                  <span className="contact-card-label">Email</span>
                  <span className="contact-card-val">
                    loopingbinary@gmail.com
                  </span>
                </div>
              </a>
            </div>

            <p className="contact-links">
              <a
                href="https://loopingbinary.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                loopingbinary.com
              </a>
              <span aria-hidden="true">·</span>
              <a
                href="https://intellex.loopingbinary.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Intellex
              </a>
              <span aria-hidden="true">·</span>
              <a
                href="https://intern.loopingbinary.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Internship
              </a>
              <span aria-hidden="true">·</span>
              <a
                href="https://juniordev.loopingbinary.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Junior Dev
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ══════════════════════════════════════════════════ */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <a href="/" className="nav-logo" aria-label="Looping Binary">
              <img src="/assets/logo.svg" width="32" height="16" alt="" aria-hidden="true" />
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
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
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
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            <div className="footer-col">
              <p className="footer-col-title">Services</p>
              <ul role="list">
                <li>
                  <a href="#services">Software Development</a>
                </li>
                <li>
                  <a href="#services">Digital Growth</a>
                </li>
                <li>
                  <a href="#services">Agency Partner</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <p className="footer-col-title">Programs</p>
              <ul role="list">
                <li>
                  <a
                    href="https://intern.loopingbinary.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Internship
                  </a>
                </li>
                <li>
                  <a
                    href="https://juniordev.loopingbinary.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Junior Dev
                  </a>
                </li>
                <li>
                  <a
                    href="https://intellex.loopingbinary.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Intellex
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <p className="footer-col-title">Contact</p>
              <ul role="list">
                <li>
                  <a href="mailto:loopingbinary@gmail.com">
                    loopingbinary@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/237650318856"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
            <a
              href="https://www.perplexity.ai/computer"
              target="_blank"
              rel="noopener noreferrer"
              className="pplx-credit"
            >
              Created with Perplexity Computer
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
