import type { Metadata } from "next";
import Link from "next/link";
import { PILLARS, SERVICES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Looping Binary builds software, grows businesses, trains people, and operates its own technology products.",
  alternates: { canonical: "/solutions" },
};

const ILLUSTRATIONS: Record<string, string> = {
  build: "/assets/illustrations/illust-build.png",
  grow: "/assets/illustrations/illust-grow.png",
  train: "/assets/illustrations/illust-train.png",
  operate: "/assets/illustrations/illust-operate.png",
};

export default function SolutionsPage() {
  return (
    <main id="main" className="doc">
      <section className="doc-hero doc-hero--illus">
        <div className="doc-hero-copy">
          <p className="eyebrow">Solutions</p>
          <h1>Have a business problem? Let&apos;s build the solution.</h1>
          <p className="case-lede">
            Software, growth, training, and operated products, under one
            organization from Douala.
          </p>
          <div className="hero-cta">
            <Link href="/contact">Start a Project</Link>
            <Link href="/products">Explore our products</Link>
          </div>
        </div>
        <div className="doc-hero-art" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/illustrations/illust-welcome.png"
            alt=""
          />
        </div>
      </section>

      {PILLARS.map((pillar, i) => (
        <section
          key={pillar.id}
          id={pillar.id}
          className={`doc-block doc-block--offer${i % 2 === 1 ? " is-flip" : ""}`}
        >
          <div className="doc-offer-copy">
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
          </div>
          <div className="doc-offer-art" aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={ILLUSTRATIONS[pillar.id]} alt="" />
          </div>
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
