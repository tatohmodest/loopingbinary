import Link from "next/link";
import type { Metadata } from "next";
import { WORK } from "@/lib/catalog";
import { KEYWORDS } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Client work and live products from Looping Binary in Douala: Pejah, Presto, Laji, Strategix, Intellex, Zela, Tech Shop, Junior Dev, and more.",
  keywords: KEYWORDS,
  alternates: { canonical: "/work" },
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

      {clients.map((item, i) => (
        <Link
          key={item.slug}
          href={`/work/${item.slug}`}
          className="archive-row"
          data-cursor="view"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={item.image} alt={`${item.name} website`} />
          <div className="archive-row-inner">
            <span>
              0{i + 1} · {item.tag} · {item.location}
            </span>
            <h2>{item.name}</h2>
          </div>
        </Link>
      ))}

      <p className="eyebrow" style={{ padding: "4rem 6vw 0.8rem" }}>
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
