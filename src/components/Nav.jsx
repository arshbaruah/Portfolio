import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

const LINKS = [
  { to: "/internships", label: "Internships" },
  { to: "/projects", label: "Projects" },
  { to: "/extracurriculars", label: "Extracurriculars" },
  { to: "/#about", label: "About" },
];

const CLOSE_MS = 150;

export default function Nav() {
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || "light"
  );
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Close menu instantly on navigation
  useEffect(() => {
    setOpen(false);
    setClosing(false);
  }, [location]);

  // Animated close
  const closeMenu = () => {
    setClosing(true);
    setTimeout(() => {
      setOpen(false);
      setClosing(false);
    }, CLOSE_MS);
  };

  const toggleMenu = () => {
    if (open && !closing) {
      closeMenu();
    } else if (!open) {
      setOpen(true);
      setClosing(false);
    }
  };

  // Auto-close when the user scrolls with the menu open
  useEffect(() => {
    if (!open || closing) return;
    const onScroll = () => closeMenu();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open, closing]);

  return (
    <header className="nav">
      <div className="nav-inner">
        <Link to="/" className="nav-logo">
          Arsh Baruah
        </Link>
        <button
          className={`hamburger${open && !closing ? " open" : ""}`}
          aria-label="Menu"
          onClick={toggleMenu}
        >
          {open && !closing ? "✕" : "☰"}
        </button>
        <nav
          className={`nav-links${open ? " open" : ""}${
            closing ? " closing" : ""
          }`}
        >
          {LINKS.map((l) =>
            l.to.startsWith("/#") ? (
              <Link key={l.to} to={l.to} className="nav-link">
                {l.label}
              </Link>
            ) : (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `nav-link${isActive ? " active" : ""}`
                }
              >
                {l.label}
              </NavLink>
            )
          )}
          <button
            className="theme-toggle"
            aria-label="Toggle dark mode"
            onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
          >
            {theme === "dark" ? "☀" : "☾"}
          </button>
        </nav>
      </div>
    </header>
  );
}
