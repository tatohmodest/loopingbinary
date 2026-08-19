import type { Metadata } from "next";
import Link from "next/link";
import { getWork } from "@/lib/catalog";
import { PROGRAM_SLUGS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Training",
  description:
    "Intellex, internships, Junior Dev, and mentorship from Looping Binary. Learn on live products, not simulations.",
  alternates: { canonical: "/training" },
};

export default function TrainingPage() {
  const programs = PROGRAM_SLUGS.map((slug) => getWork(slug)).filter(Boolean);

  return (
    <main id="main" className="doc">
      <section className="doc-hero doc-hero--illus">
        <div className="doc-hero-copy">
          <p className="eyebrow">Training</p>
          <h1>Develop people who can build.</h1>
          <p className="case-lede">
            The goal is not a certificate. The goal is skills, then projects,
            then experience, then opportunity — on live Looping Binary work.
          </p>
          <div className="hero-cta">
            <Link href="https://intellex.loopingbinary.com">
              Start learning
            </Link>
            <Link href="https://intern.loopingbinary.com">
              Apply for internship
            </Link>
            <Link href="https://juniordev.loopingbinary.com">
              Join Junior Dev
            </Link>
          </div>
        </div>
        <div className="doc-hero-art" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/illustrations/illust-train.png" alt="" />
        </div>
      </section>

      {programs.map((item) =>
        item ? (
          <Link key={item.slug} href={`/work/${item.slug}`} className="program-row" data-cursor="open">
            <div className="program-row-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.image} alt="" />
            </div>
            <div>
              <p className="eyebrow">{item.tag}</p>
              <h2>{item.name}</h2>
              <p>{item.headline}</p>
            </div>
          </Link>
        ) : null
      )}

      <section className="doc-block">
        <p className="eyebrow">Mentorship</p>
        <h2>Learn from people who actually build.</h2>
        <p>
          Career direction, technical guidance, and portfolio work from
          engineers shipping Looping Binary products. Mentorship lives inside
          Intellex and the internship — not as a separate slogan.
        </p>
        <div className="hero-cta">
          <Link href="https://intellex.loopingbinary.com" data-cursor="mentor">
            Explore mentorship
          </Link>
        </div>
      </section>
    </main>
  );
}
