import Link from "next/link";
import { PILLARS } from "@/lib/site";

export default function Pillars() {
  return (
    <section className="pillars" id="pillars" aria-labelledby="pillars-title">
      <div className="pillars-head">
        <p>What we do</p>
        <h2 id="pillars-title">Four engines. One company.</h2>
      </div>
      <ul role="list">
        {PILLARS.map((pillar) => (
          <li key={pillar.id}>
            <Link href={`/solutions#${pillar.id}`} className="pillar" data-cursor="open">
              <span>{pillar.num}</span>
              <div>
                <h3>{pillar.title}</h3>
                <p>{pillar.kicker}</p>
              </div>
              <em>{pillar.lead}</em>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
