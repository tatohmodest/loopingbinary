import Link from "next/link";
import type { Metadata } from "next";
import { WORK } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Work · Looping Binary",
  description:
    "Selected client work and live products from Looping Binary. Pejah, Presto, Laji, Strategix, Intellex, Zela, and more.",
};

export default function WorkIndexPage() {
  const clients = WORK.filter((item) => item.kind === "client");
  const products = WORK.filter((item) => item.kind === "product");

  return (
    <main id="main" className="work-index">
      <section className="case-hero">
        <div className="container case-hero-copy">
          <p className="eyebrow">Archive</p>
          <h1>The work.</h1>
          <p className="case-lede">
            Client sites and products we operate. Built to look inevitable, then
            to keep running.
          </p>
        </div>
      </section>

      <section className="section-gap">
        <div className="container">
          <p className="eyebrow">Clients</p>
          <div className="work-grid">
            {clients.map((item) => (
              <Link key={item.slug} href={`/work/${item.slug}`} className="work-tile">
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
        </div>
      </section>

      <section className="section-gap stack-block">
        <div className="container">
          <p className="eyebrow">Products</p>
          <div className="stack-grid">
            {products.map((item) => (
              <Link key={item.slug} href={`/work/${item.slug}`} className="stack-card">
                <div className="stack-card-media">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.image} alt="" />
                </div>
                <div className="stack-card-copy">
                  <span className="work-kicker">{item.tag}</span>
                  <h3>{item.name}</h3>
                  <p>{item.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
