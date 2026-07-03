import Reveal from "../components/Reveal";
import { projects } from "../data";

export default function Projects() {
  return (
    <main className="container page">
      <Reveal>
        <p className="section-label">Personal Projects</p>
        <h2>Projects</h2>
      </Reveal>
      <div className="card-grid" style={{ marginTop: "1.25rem" }}>
        {projects.map((p) => (
          <Reveal key={p.title}>
            <div className="card" style={{ height: "100%" }}>
              <h3>{p.title}</h3>
              <p className="card-meta">
                {p.date} · {p.status}
              </p>
              <p className="desc">{p.desc}</p>
              <div className="tags">
                {p.tech.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </main>
  );
}
