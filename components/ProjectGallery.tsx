import Link from "next/link";
import { CLIENT_WORK } from "@/lib/catalog";
import ProjectLink from "@/components/ProjectLink";

export default function ProjectGallery() {
  return (
    <section className="pg" id="projects" aria-labelledby="projects-title">
      <div className="pg-head">
        <div>
          <p className="sec-kicker">Client projects</p>
          <h2 id="projects-title" className="sec-title">
            Work you can open and understand.
          </h2>
          <p className="sec-lede">
            Real client sites and platforms. Tap any one to open the live work.
          </p>
        </div>
        <Link href="/work" className="sec-link">
          All projects
        </Link>
      </div>

      <ul className="pg-grid" role="list">
        {CLIENT_WORK.map((item, i) => (
          <li key={item.slug}>
            <ProjectLink item={item} className="pg-card">
              <div className="pg-shot">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.image} alt="" />
              </div>
              <div className="pg-meta">
                <span className="pg-index">0{i + 1}</span>
                <div>
                  <h3>{item.name}</h3>
                  <p>
                    {item.tag} · {item.location}
                  </p>
                </div>
              </div>
            </ProjectLink>
          </li>
        ))}
      </ul>
    </section>
  );
}
