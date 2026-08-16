import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="doc">
      <section className="doc-hero">
        <p className="eyebrow">404</p>
        <h1>This path is not in the loop.</h1>
        <p className="case-lede">The page is missing. The company is not.</p>
        <div className="hero-cta">
          <Link href="/" data-cursor="home">
            Home
          </Link>
          <Link href="/contact" data-cursor="talk">
            Talk to us
          </Link>
        </div>
      </section>
    </main>
  );
}
