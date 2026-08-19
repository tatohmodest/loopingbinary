import Link from "next/link";

export default function ClearHero() {
  return (
    <section className="ch ch--illustrated" aria-labelledby="hero-brand">
      <div className="ch-media" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/illustrations/hero-cover.png"
          alt=""
        />
        <div className="ch-wash" />
      </div>

      <div className="ch-stage">
        <p className="ch-place">Douala · Cameroon · Africa</p>
        <p id="hero-brand" className="ch-brand">
          Looping Binary
        </p>
        <h1 className="ch-line">We build. We grow. We train.</h1>
        <p className="ch-sub">
          We build digital products, help businesses grow, and empower people
          with the skills and opportunities to build with technology.
        </p>
        <div className="ch-cta">
          <Link href="#projects" className="btn btn-hero-primary">
            See projects
          </Link>
          <Link href="/contact" className="btn btn-ghost">
            Start a project
          </Link>
        </div>
      </div>
    </section>
  );
}
