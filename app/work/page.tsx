import Link from "next/link";
import type { Metadata } from "next";
import { WORK } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Work",
  description: "Client work and live products from Looping Binary.",
};

export default function WorkIndexPage() {
  const clients = WORK.filter((item) => item.kind === "client");
  const products = WORK.filter((item) => item.kind === "product");

  return (
    <main id="main" className="work-index">
      <section className="case-hero">
        <p className="eyebrow">Archive</p>
        <h1>The work.</h1>
        <p className="case-lede">Not mockups. Live rooms. Click anything.</p>
      </section>

      <div className="work-grid">
        {clients.map((item) => (
          <Link key={item.slug} href={`/work/${item.slug}`} className="work-tile" data-cursor="view">
            <div className="work-tile-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.image} alt={`${item.name} website`} />
            </div>
            <div className="work-tile-copy">
              <span className="work-kicker">{item.tag}</span>
              <h3>{item.name}</h3>
              <p>{item.summary}</p>
            </div>
          </Link>
        ))}
      </div>

      <p className="eyebrow" style={{ paddingInline: "6vw" }}>
        Products
      </p>
      <div className="stack-grid">
        {products.map((item) => (
          <Link key={item.slug} href={`/work/${item.slug}`} className="stack-card" data-cursor="open">
            <div className="stack-card-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.image} alt="" />
            </div>
            <div className="stack-card-copy">
              <span className="work-kicker">{item.tag}</span>
              <h3>{item.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
