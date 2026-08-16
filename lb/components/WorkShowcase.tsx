import Link from "next/link";
import { CLIENT_WORK, PRODUCT_WORK } from "@/lib/catalog";

export default function WorkShowcase() {
  const featured = CLIENT_WORK[0];
  const rest = CLIENT_WORK.slice(1);

  return (
    <section className="work-sec section-gap" id="work" aria-labelledby="work-title">
      <div className="container">
        <div className="section-header reveal-fade">
          <p className="eyebrow">Selected work</p>
          <div className="section-header-row">
            <h2 id="work-title" className="section-title">
              Work that already
              <br />
              lives in the world.
            </h2>
            <p className="section-lede">
              Client products and brand sites, from Arlington to Douala.
              This is the standard we hold when someone asks us to build.
            </p>
          </div>
        </div>

        {featured && (
          <Link href={`/work/${featured.slug}`} className="work-feature reveal-fade">
            <div className="work-feature-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={featured.image} alt={`${featured.name} website`} />
            </div>
            <div className="work-feature-copy">
              <span className="work-kicker">{featured.tag}</span>
              <h3>{featured.name}</h3>
              <p>{featured.headline}</p>
              <span className="btn-text">
                Open case <span aria-hidden="true">→</span>
              </span>
            </div>
          </Link>
        )}

        <div className="work-grid">
          {rest.map((item, i) => (
            <Link
              key={item.slug}
              href={`/work/${item.slug}`}
              className="work-tile reveal-fade"
              style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
            >
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

        <div className="stack-block">
          <div className="section-header reveal-fade">
            <p className="eyebrow">The stack we operate</p>
            <div className="section-header-row">
              <h2 className="section-title">
                Our own products.
                <br />
                Running every day.
              </h2>
              <p className="section-lede">
                Education, commerce, identity, and tournaments. We do not only
                ship for clients. We run the loop ourselves.
              </p>
            </div>
          </div>

          <div className="stack-grid">
            {PRODUCT_WORK.map((item, i) => (
              <Link
                key={item.slug}
                href={`/work/${item.slug}`}
                className="stack-card reveal-fade"
                style={{ ["--reveal-delay" as string]: `${i * 50}ms` }}
              >
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
      </div>
    </section>
  );
}
