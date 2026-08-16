import type { Metadata } from "next";
import Link from "next/link";
import { PILLARS, SERVICES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Looping Binary builds software, grows businesses, trains people, and operates its own technology products.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <main id="main" className="doc">
      <section className="doc-hero">
        <p className="eyebrow">Solutions</p>
        <h1>Have a business problem? Let&apos;s build the solution.</h1>
        <p className="case-lede">
          Software, growth, training, and operated products — under one
          organization from Douala.
        </p>
        <div className="hero-cta">
          <Link href="/contact" data-cursor="start">
            Start a Project
          </Link>
          <Link href="/products" data-cursor="products">
            Explore our products
          </Link>
        </div>
      </section>

      {PILLARS.map((pillar) => (
        <section key={pillar.id} id={pillar.id} className="doc-block">
          <p className="eyebrow">
            {pillar.num} · {pillar.title}
          </p>
          <h2>{pillar.kicker}</h2>
          <p>{pillar.lead}</p>
          <ul role="list" className="tick-list">
            {pillar.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </section>
      ))}

      <section className="doc-block">
        <p className="eyebrow">For clients</p>
        <h2>Tell us the problem. We&apos;ll figure out the technology.</h2>
        <div className="service-grid">
          {SERVICES.map((group) => (
            <div key={group.title}>
              <h3>{group.title}</h3>
              <ul role="list">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
