import Reveal from "../components/Reveal";
import { extras, socials } from "../data";

export default function Extracurriculars() {
  return (
    <main className="container page">
      <Reveal>
        <p className="section-label">Extracurriculars</p>
        <h2>Beyond the Classroom</h2>
      </Reveal>

      {/* Campus roles */}
      <div className="achieve-list" style={{ marginTop: "1rem" }}>
        {extras.roles.map((r) => (
          <Reveal key={r.title}>
            <div className="achieve-item">
              <span className="a-title">
                {r.title}
                {r.role && ` - ${r.role}`}
              </span>
              <span className="a-note">{r.note}</span>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Content creation */}
      <section className="section">
        <Reveal>
          <p className="section-label">Content</p>
          <p className="bio">
            <a href={socials.instagram} target="_blank" rel="noreferrer">
              <strong>{extras.content.handle}</strong>
            </a>{" "}
            · {extras.content.blurb}
          </p>
          <div className="stats">
            <div className="stat">
              <div className="num">{extras.content.followers}</div>
              <div className="lbl">Followers</div>
            </div>
            <div className="stat">
              <div className="num">{extras.content.views}</div>
              <div className="lbl">Views</div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Collabs */}
      <section className="section">
        <Reveal>
          <p className="section-label">Notable Collabs</p>
        </Reveal>
        <div className="card-grid tight">
          {extras.collabs.map((c) => (
            <Reveal key={c.brand}>
              <div className="card compact" style={{ height: "100%" }}>
                <h3>{c.brand}</h3>
                <p className="desc">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section className="section">
        <Reveal>
          <p className="section-label">Achievements</p>
        </Reveal>
        <div className="achieve-list">
          {extras.achievements.map((a) => (
            <Reveal key={a.title}>
              <div className="achieve-item">
                <span className="a-title">{a.title}</span>
                <span className="a-note">{a.note}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Hobbies */}
      <section className="section">
        <Reveal>
          <p className="section-label">Hobbies</p>
          <div className="pills">
            {extras.hobbies.map((h) => (
              <span key={h} className="pill">
                {h}
              </span>
            ))}
          </div>
        </Reveal>
      </section>
    </main>
  );
}
