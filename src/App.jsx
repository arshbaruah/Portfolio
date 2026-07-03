import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Internships from "./pages/Internships";
import Projects from "./pages/Projects";
import Extracurriculars from "./pages/Extracurriculars";

/** Scrolls to top on route change, or to the hash target if present. */
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/extracurriculars" element={<Extracurriculars />} />
        <Route path="/music" element={<Extracurriculars />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}
