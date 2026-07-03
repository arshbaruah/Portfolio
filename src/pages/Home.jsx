import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import { about, home, socials } from "../data";

function PreviewBlock({ label, data }) {
  return (
    <section className="container preview-block">
      <Reveal>
        <p className="section-label">{label}</p>
        <p className="intro">{data.intro}</p>
        <div className="list-rows">
          {data.items.map((item) => (
            <div key={item.title} className="list-row">
              <span className="r-title">{item.title}</span>
              <span className="r-note">{item.note}</span>
            </div>
          ))}
        </div>
        <Link to={data.link} className="more-link">
          {data.linkLabel} <span aria-hidden>→</span>
        </Link>
      </Reveal>
    </section>
  );
}

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
        <div className="hero-actions">
          <a href="#about" className="cta">
            About Me <span aria-hidden>↓</span>
          </a>
          <a href={about.cv} target="_blank" rel="noreferrer" className="cta secondary">
            Download CV
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="container section">
        <Reveal>
          <p className="section-label">About</p>
          <p className="bio">{about.bio}</p>
          <p className="edu-line">{about.education}</p>
        </Reveal>
      </section>

      {/* Three subheads */}
      <PreviewBlock label="Career" data={home.career} />
      <PreviewBlock label="Personal Projects" data={home.personalProjects} />
      <PreviewBlock label="Extracurriculars" data={home.extracurriculars} />

      {/* Contact */}
      <section className="container contact">
        <Reveal>
          <p className="section-label">Contact</p>
          <p>
            <a href={`mailto:${socials.email}`}>{socials.email}</a>
            {" · "}
            <a href={socials.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </p>
        </Reveal>
      </section>
    </main>
  );
}
