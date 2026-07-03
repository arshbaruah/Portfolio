import Reveal from "../components/Reveal";
import { internships } from "../data";

export default function Internships() {
  return (
    <main className="container page">
      <Reveal>
        <p className="section-label">Career</p>
        <h2>Internships</h2>
      </Reveal>
      <div className="timeline" style={{ marginTop: "2rem" }}>
        {internships.map((job) => (
          <Reveal key={job.org} as="div">
            <div className="timeline-item">
              <div className="card">
                <h3>
                  {job.role} · {job.org}
                </h3>
                <p className="card-meta">
                  {job.period}
                  {job.current && " · Current"}
                </p>
                <p className="desc">{job.desc}</p>
                {job.metric && <p className="metric">{job.metric}</p>}
                <div className="tags">
                  {job.tech.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </main>
  );
}
