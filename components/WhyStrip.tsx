import Link from "next/link";
import { WHY } from "@/lib/site";

export default function WhyStrip() {
  return (
    <section className="why" id="why" aria-labelledby="why-title">
      <p className="why-kicker">Why Looping Binary</p>
      <h2 id="why-title">Built in Africa. Built for Africa. Built to compete globally.</h2>
      <ul role="list" className="why-grid">
        {WHY.map((item) => (
          <li key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
      <Link href="/about" className="why-more" data-cursor="about">
        The story
      </Link>
    </section>
  );
}
