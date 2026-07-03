import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import { about, featured } from "../data";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="container hero">
        <h1>Arsh Baruah</h1>
        <p className="tagline">
          {about.tagline.map((t, i) => (
            <span key={t}>
              {t}
              {i < about.tagline.length - 1 && <span className="dot">·</span>}
            </span>
          ))}
        </p>
        <a href="#work" className="cta">
          View Work <span aria-hidden>↓</span>
        </a>
      </section>

      {/* About */}
      <section id="about" className="container section">
        <Reveal>
          <p className="section-label">About</p>
          <p className="bio">{about.bio}</p>
          <div className="highlights">
            {about.highlights.map((h) => (
              <span key={h} className="highlight-pill">
                {h}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Featured work */}
      <section id="work" className="container section">
        <Reveal>
          <p className="section-label">Featured</p>
          <h2>Selected Work</h2>
        </Reveal>
        <div className="card-grid">
          {featured.map((f) => (
            <Reveal key={f.title}>
              <Link to={f.link} className="card" style={{ height: "100%" }}>
                <h3>{f.title}</h3>
                <p className="desc">{f.desc}</p>
                <span className="card-link">
                  {f.linkLabel} <span aria-hidden>→</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
