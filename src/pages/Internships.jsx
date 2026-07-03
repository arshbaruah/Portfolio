import Reveal from "../components/Reveal";
import { internships, programs } from "../data";

export default function Internships() {
  return (
    <main className="container page">
      <Reveal>
        <p className="section-label">Career</p>
        <h2>Internships</h2>
      </Reveal>
      <div className="job-list">
        {internships.map((job) => (
          <Reveal key={job.org}>
            <div className="job">
              <div className="job-head">
                <h3>
                  {job.org} - {job.role}
                </h3>
                <span className="job-period">
                  {job.period}
                  {job.current && " · Current"}
                </span>
              </div>
              <p className="desc">{job.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <section className="section">
        <Reveal>
          <p className="section-label">Programs & Courses</p>
        </Reveal>
        <div className="achieve-list">
          {programs.map((p) => (
            <Reveal key={p.title}>
              <div className="achieve-item">
                <span className="a-title">{p.title}</span>
                <span className="a-note">{p.note}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
