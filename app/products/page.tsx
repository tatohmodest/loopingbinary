import type { Metadata } from "next";
import Link from "next/link";
import { PRODUCT_WORK } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Technology built and operated by Looping Binary: Intellex, Zela, Tech Shop, Junior Dev, Auth, App, LB Vote, and LBPay.",
  alternates: { canonical: "/products" },
};

export default function ProductsPage() {
  return (
    <main id="main" className="work-index">
      <section className="case-hero">
        <p className="eyebrow">Ecosystem</p>
        <h1>Built by Looping Binary.</h1>
        <p className="case-lede">
          We don&apos;t just talk about technology. We run it. These are live
          products from the same company that will build yours.
        </p>
      </section>

      {PRODUCT_WORK.map((item, i) => (
        <Link
          key={item.slug}
          href={`/work/${item.slug}`}
          className="archive-row"
          data-cursor="open"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={item.image} alt="" />
          <div className="archive-row-inner">
            <span>
              0{i + 1} · {item.tag} · {item.location}
            </span>
            <h2>{item.name}</h2>
          </div>
        </Link>
      ))}
    </main>
  );
}
