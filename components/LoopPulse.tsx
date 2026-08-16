export default function LoopPulse() {
  const line =
    "COMPANY FEEDS SCHOOL  ·  SCHOOL FEEDS COMPANY  ·  TESTED ENGINEERS  ·  LIVE WORK  ·  ";

  return (
    <section className="loopx" id="the-loop" aria-labelledby="loop-title">
      <div className="loopx-copy">
        <p className="loopx-kicker">The Loop</p>
        <h2 id="loop-title">
          The people who teach
          <br />
          are the people who ship.
        </h2>
        <p>
          That is why the work holds. Not a slogan. A staffing model. Every
          engineer on your job was already tested on live products.
        </p>
      </div>

      <div className="orbit" aria-hidden="true">
        <svg viewBox="0 0 400 400">
          <defs>
            <path
              id="orbit-path"
              d="M200,200 m-150,0 a150,150 0 1,1 300,0 a150,150 0 1,1 -300,0"
            />
          </defs>
          <circle cx="200" cy="200" r="118" fill="none" stroke="#0a7a3e" strokeWidth="1" opacity="0.35" />
          <text>
            <textPath href="#orbit-path">{line}{line}</textPath>
          </text>
        </svg>
        <span>LB</span>
      </div>
    </section>
  );
}
