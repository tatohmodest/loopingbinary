import BrandMark from "@/components/BrandMark";
import { LOOP_STEPS } from "@/lib/site";

export default function LoopPulse() {
  const line = `${LOOP_STEPS.join("  ·  ")}  ·  `;

  return (
    <section className="loopx" id="the-loop" aria-labelledby="loop-title">
      <div className="loopx-copy">
        <p className="loopx-kicker">This is the Loop</p>
        <h2 id="loop-title">
          The company builds the products.
          <br />
          The products train the people.
          <br />
          The people build better products.
        </h2>
        <p>
          We do not build software, deliver it, and leave. Technology builds
          businesses. Businesses create problems. Those problems make better
          technology. The school feeds the company. The company feeds the
          school. That is the Loop.
        </p>
        <ol className="loop-steps">
          {LOOP_STEPS.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
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
            <textPath href="#orbit-path">
              {line}
              {line}
            </textPath>
          </text>
        </svg>
        <BrandMark variant="infinity" />
      </div>
    </section>
  );
}
