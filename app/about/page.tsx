import type { Metadata } from "next";
import Link from "next/link";
import BrandMark from "@/components/BrandMark";
import { LOOP_STEPS, WHY } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Looping Binary is a Douala technology company that builds software, operates products, and trains the people who ship them.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main id="main" className="doc">
      <section className="doc-hero">
        <p className="eyebrow">About</p>
        <h1>A technology ecosystem, not a freelance stall.</h1>
        <p className="case-lede">
          Looping Binary was built from Douala, Cameroon, to close the gap
          between what African businesses need and what they can actually get
          built — to a global standard.
        </p>
      </section>

      <section className="about-mark" aria-hidden="true">
        <BrandMark variant="word" />
      </section>

      <section className="doc-block" id="mission">
        <p className="eyebrow">Mission</p>
        <h2>
          We build the technology businesses need, operate real digital
          products, and develop the people capable of building the future.
        </h2>
        <p>
          The company combines technology, education, and business growth. The
          founder is Tatoh Modest Wilton. The company is bigger than one
          person: products, programs, and a loop that keeps making both
          stronger.
        </p>
      </section>

      <section className="doc-block">
        <p className="eyebrow">The Loop</p>
        <h2>Learn. Build. Ship. Teach. Again.</h2>
        <ol className="loop-steps">
          {LOOP_STEPS.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <p>
          Our education ecosystem produces builders. Our builders work on real
          products. Our products solve real problems. Those problems create new
          opportunities to learn and build. And the cycle continues.
        </p>
      </section>

      <section className="doc-block">
        <p className="eyebrow">Africa</p>
        <h2>Africa is not merely our market. Africa is where we build from.</h2>
        <div className="why-grid">
          {WHY.map((item) => (
            <div key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="doc-block">
        <div className="hero-cta">
          <Link href="/contact" data-cursor="start">
            Start a Project
          </Link>
          <Link href="/products" data-cursor="products">
            Explore the ecosystem
          </Link>
        </div>
      </section>
    </main>
  );
}
