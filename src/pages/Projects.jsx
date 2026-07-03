import Reveal from "../components/Reveal";
import { projects } from "../data";

export default function Projects() {
  return (
    <main className="container page">
      <Reveal>
        <p className="section-label">Ventures</p>
        <h2>Projects</h2>
      </Reveal>
      <div className="card-grid" style={{ marginTop: "2rem" }}>
        {projects.map((p) => (
          <Reveal key={p.title}>
            <div className="card" style={{ height: "100%" }}>
              <h3>{p.title}</h3>
              <p className="card-meta">
                {p.date} · {p.status}
              </p>
              <p className="desc">{p.desc}</p>
              {p.metric && <p className="metric">{p.metric}</p>}
              <div className="tags">
                {p.tech.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="card-link"
                >
                  {p.linkLabel} <span aria-hidden>→</span>
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </main>
  );
}
