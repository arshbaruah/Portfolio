import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

const LINKS = [
  { to: "/internships", label: "Internships" },
  { to: "/projects", label: "Projects" },
  { to: "/music", label: "Music" },
  { to: "/#about", label: "About" },
];

export default function Nav() {
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || "light"
  );
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Close mobile menu on navigation
  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <header className="nav">
      <div className="nav-inner">
        <Link to="/" className="nav-logo">
          Arsh Baruah
        </Link>
        <button
          className="hamburger"
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "✕" : "☰"}
        </button>
        <nav className={`nav-links${open ? " open" : ""}`}>
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
