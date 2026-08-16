import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { WORK, getRelatedWork, getWork } from "@/lib/catalog";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return WORK.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getWork(slug);
  if (!item) return { title: "Work · Looping Binary" };
  return {
    title: `${item.name} · Looping Binary`,
    description: item.summary,
    openGraph: {
      title: `${item.name} · Looping Binary`,
      description: item.summary,
    },
  };
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getWork(slug);
  if (!item) notFound();
  const related = getRelatedWork(item.slug);

  return (
    <main id="main" className="case-page">
      <section className="case-hero">
        <div className="container case-hero-copy">
          <p className="eyebrow">{item.kind === "client" ? "Client work" : "Product"}</p>
          <h1>{item.name}</h1>
          <p className="case-lede">{item.headline}</p>
          <div className="case-meta">
            <span>{item.tag}</span>
            <span>{item.year}</span>
            <span>{item.location}</span>
          </div>
          <div className="hero-cta">
            {item.href && (
              <a
                href={item.href}
                className="btn-primary btn-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open live site <span aria-hidden="true">↗</span>
              </a>
            )}
            <Link href="/#contact" className="btn-outline btn-lg">
              Start a project
            </Link>
          </div>
        </div>
      </section>

      <div className="container">
        <figure className="case-frame">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={item.image} alt={`${item.name} interface`} />
        </figure>
      </div>

      <section className="section-gap">
        <div className="container case-body">
          <div className="case-story">
            {item.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <aside className="case-aside">
            <div>
              <p className="footer-col-title">What we did</p>
              <ul role="list">
                {item.services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="footer-col-title">In the room</p>
              <ul role="list">
                {item.results.map((result) => (
                  <li key={result}>{result}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-gap case-more">
          <div className="container">
            <p className="eyebrow">Continue</p>
            <h2 className="section-title">More work</h2>
            <div className="work-grid work-grid--related">
              {related.map((other) => (
                <Link key={other.slug} href={`/work/${other.slug}`} className="work-tile">
                  <div className="work-tile-media">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={other.image} alt="" />
                  </div>
                  <div className="work-tile-copy">
                    <span className="work-kicker">{other.tag}</span>
                    <h3>{other.name}</h3>
                    <p>{other.summary}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
