import { socials } from "../data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="social">
          <a href={socials.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={socials.instagram} target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
        <p className="copy">© {new Date().getFullYear()} Arsh Baruah</p>
      </div>
    </footer>
  );
}
