import Link from "next/link";
import { PRODUCT_WORK } from "@/lib/catalog";
import ProjectLink from "@/components/ProjectLink";

export default function ProductLane() {
  return (
    <section className="pl" id="products" aria-labelledby="products-title">
      <div className="pl-head">
        <div>
          <p className="sec-kicker">Platform</p>
          <h2 id="products-title" className="sec-title">
            Things we build and run ourselves.
          </h2>
          <p className="sec-lede">
            The same stack we ship for clients, live in our own ecosystem.
          </p>
        </div>
        <Link href="/products" className="sec-link">
          Full ecosystem
        </Link>
      </div>

      <ul className="pl-list" role="list">
        {PRODUCT_WORK.map((item, i) => (
          <li key={item.slug}>
            <ProjectLink item={item} className="pl-row">
              <span className="pl-num">0{i + 1}</span>
              <div className="pl-copy">
                <h3>{item.name}</h3>
                <p>{item.tag}</p>
              </div>
              <div className="pl-thumb">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.image} alt="" />
              </div>
            </ProjectLink>
          </li>
        ))}
      </ul>
    </section>
  );
}
