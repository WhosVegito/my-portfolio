import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Achievements from "./components/Achievements";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import StarField from "./components/StarField";
import CursorWave from "./components/CursorWave";

function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", position: "relative" }}>
      <StarField />
      <CursorWave />

      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Achievements />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
