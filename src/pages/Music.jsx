import Reveal from "../components/Reveal";
import { music, socials } from "../data";

export default function Music() {
  return (
    <main className="container page">
      {/* Overview */}
      <Reveal>
        <p className="section-label">Music & Content</p>
        <h2>
          <a href={socials.instagram} target="_blank" rel="noreferrer">
            {music.handle}
          </a>
        </h2>
        <p className="bio">{music.blurb}</p>
        <div className="stats">
          <div className="stat">
            <div className="num">{music.followers}</div>
            <div className="lbl">Followers</div>
          </div>
          <div className="stat">
            <div className="num">{music.views}</div>
            <div className="lbl">Views</div>
          </div>
        </div>
      </Reveal>

      {/* Collabs */}
      <section className="section">
        <Reveal>
          <p className="section-label">Notable Collabs</p>
        </Reveal>
        <div className="card-grid">
          {music.collabs.map((c) => (
            <Reveal key={c.brand}>
              <div className="card" style={{ height: "100%" }}>
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
          {music.achievements.map((a) => (
            <Reveal key={a.title}>
              <div className="achieve-item">
                <span className="a-title">{a.title}</span>
                <span className="a-note">{a.note}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
