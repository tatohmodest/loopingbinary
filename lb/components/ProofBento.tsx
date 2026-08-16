export default function ProofBento() {
  return (
    <section className="proof section-gap" id="proof" aria-labelledby="proof-title">
      <div className="container">
        <div className="proof-intro reveal-fade">
          <p className="eyebrow">About us</p>
          <h2 id="proof-title" className="proof-title">
            A technology house dedicated to building
            <span className="proof-chip proof-chip--green" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
                <path d="M12 8v4l2.5 1.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </span>
            sharper products and
            <span className="proof-chip proof-chip--blue" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            more ambitious teams.
          </h2>
        </div>

        <div className="bento reveal-fade">
          <article className="bento-card bento-card--photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/loop-object.png" alt="" />
            <div className="bento-card-overlay">
              <span className="bento-num">The Loop</span>
              <p>Company and school in one body. Better engineers, better products, then better engineers again.</p>
            </div>
          </article>

          <article className="bento-card bento-card--stat">
            <span className="bento-num">2024</span>
            <p>Founded in Douala. Built for Africa, already shipping into the United States.</p>
          </article>

          <article className="bento-card bento-card--quote">
            <p>
              “The training is better because the people teaching it are actively
              building things in the real world. That is the loop. And it is the
              whole point.”
            </p>
            <footer>Tatoh Modest Wilton · Founder</footer>
          </article>

          <article className="bento-card bento-card--lime">
            <span className="bento-num">1k+</span>
            <p>Courses on Intellex. Live mentors. An AI tutor. Skills that are supposed to become income.</p>
          </article>

          <article className="bento-card bento-card--dark">
            <span className="bento-num">End to end</span>
            <p>Software, growth, and training. One partner. One standard. No hand-off fog.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
