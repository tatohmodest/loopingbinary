import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Insights",
  description: "Notes from the Looping Binary building in Douala.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  return (
    <main id="main" className="doc">
      <section className="doc-hero">
        <p className="eyebrow">Insights</p>
        <h1>Notes from the building.</h1>
        <p className="case-lede">
          Writing will live here: product, training, and the work of building
          from Cameroon. No filler posts in the meantime.
        </p>
        <div className="hero-cta">
          <Link href="/contact" data-cursor="talk">
            Talk to us
          </Link>
          <Link href="/work" data-cursor="work">
            See the work
          </Link>
        </div>
      </section>
    </main>
  );
}
