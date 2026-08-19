import Link from "next/link";
import { PILLARS } from "@/lib/site";

const ILLUSTRATIONS: Record<string, { src: string; alt: string }> = {
  build: {
    src: "/assets/illustrations/illust-build.png",
    alt: "Cartoon developer pointing at product screens",
  },
  grow: {
    src: "/assets/illustrations/illust-grow.png",
    alt: "Cartoon marketer pointing at growth charts",
  },
  train: {
    src: "/assets/illustrations/illust-train.png",
    alt: "Cartoon mentor teaching a student",
  },
  operate: {
    src: "/assets/illustrations/illust-operate.png",
    alt: "Cartoon operator presenting live products",
  },
};

export default function Pillars() {
  return (
    <section className="pillars" id="pillars" aria-labelledby="pillars-title">
      <div className="pillars-head">
        <p>What we offer</p>
        <h2 id="pillars-title">Build. Grow. Train. Operate.</h2>
        <p className="pillars-lede">
          Four clear offers. Each one has a person and a job. Scroll any to
          open the full story.
        </p>
      </div>

      <ul className="offer-grid" role="list">
        {PILLARS.map((pillar) => {
          const art = ILLUSTRATIONS[pillar.id];
          return (
            <li key={pillar.id}>
              <Link href={`/solutions#${pillar.id}`} className="offer">
                <div className="offer-art">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={art.src} alt={art.alt} />
                </div>
                <div className="offer-copy">
                  <span className="offer-num">{pillar.num}</span>
                  <h3>{pillar.title}</h3>
                  <p className="offer-kicker">{pillar.kicker}</p>
                  <p className="offer-lead">{pillar.lead}</p>
                  <span className="offer-go">See this offer →</span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
