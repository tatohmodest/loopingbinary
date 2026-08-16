import Link from "next/link";
import { PRODUCT_WORK } from "@/lib/catalog";

export default function ProductStack() {
  return (
    <section className="pstack" id="stack" aria-labelledby="stack-title">
      <div className="pstack-head">
        <p>The stack</p>
        <h2 id="stack-title">Products we still run, every day.</h2>
      </div>
      {PRODUCT_WORK.map((item, i) => (
        <Link
          key={item.slug}
          href={`/work/${item.slug}`}
          className="pstack-panel"
          data-cursor="open"
          style={{ zIndex: i + 1, top: `${3.2 + i * 1.15}vh` }}
        >
          <div className="pstack-img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.image} alt="" />
          </div>
          <div className="pstack-copy">
            <h3>{item.name}</h3>
            <span>
              0{i + 1} · {item.tag}
            </span>
          </div>
        </Link>
      ))}
      <Link href="/work" className="pstack-more" data-cursor="all">
        Full archive
      </Link>
    </section>
  );
}
