import { motion } from "framer-motion";

const experience = [
  { what: "Backend Developer & Database Engineer", where: "Find Your Kicks India", when: "2024 – 2025" },
  { what: "Full Stack Developer (Freelance)", where: "Self", when: "2023 – Now" },
  { what: "Industrial Design Projects", where: "Various Clients", when: "2022 – 2023" },
];

const skills = [
  { category: "Backend", tech: "Node.js, Express, REST APIs, Django" },
  { category: "Database", tech: "PostgreSQL, MySQL, Data Integrity, Indexing, Optimization" },
  { category: "Frontend", tech: "React, Vite, Tailwind CSS, HTML, CSS, JavaScript" },
  { category: "Tools", tech: "Git, VS Code, Postman, Linux, ESP8266" },
];

const languages = [
  { lang: "Hindi", level: "Native" },
  { lang: "English", level: "Professional" },
];

const fade = (i) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { delay: i * 0.07, duration: 0.5, ease: "easeOut" },
  viewport: { once: true },
});

export default function Achievements() {
  return (
    <section id="achievements" style={{ padding: "80px 0", borderTop: "1px solid var(--border)" }}>
      <div className="max-w-5xl mx-auto px-8 md:px-16">
        {/* Ghost + heading */}
        <div style={{ position: "relative", marginBottom: 48 }}>
          <p className="ghost-heading" aria-hidden>ACHIEVEMENTS</p>
          <motion.div
            style={{ marginTop: -12 }}
            {...fade(0)}
          >
            <span className="section-label">02 — Credentials</span>
            <h2 style={{ fontSize: 22, fontWeight: 500, marginTop: 6, marginBottom: 4 }}>Achievements</h2>
            <p style={{ fontSize: 13, color: "var(--accent)", marginTop: 0 }}>
              An overview of my credentials and skillset.
            </p>
          </motion.div>
        </div>

        {/* Experience */}
        <motion.div style={{ marginBottom: 48 }} {...fade(1)}>
          <h3 style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent)", fontFamily: "Manrope", fontWeight: 700, marginBottom: 0 }}>
            Experience
          </h3>
          <div className="table-row table-header" style={{ borderTop: "none", paddingTop: 12 }}>
            <span>What</span>
            <span>Where</span>
            <span>When</span>
          </div>
          {experience.map((row, i) => (
            <motion.div key={i} className="table-row" {...fade(2 + i)}>
              <span style={{ color: "var(--heading)", fontWeight: 500 }}>{row.what}</span>
              <span>{row.where}</span>
              <span style={{ color: "var(--accent)", whiteSpace: "nowrap" }}>{row.when}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills */}
        <motion.div style={{ marginBottom: 48 }} {...fade(5)}>
          <h3 style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent)", fontFamily: "Manrope", fontWeight: 700, marginBottom: 0 }}>
            Skills
          </h3>
          <div className="skills-row table-header" style={{ borderTop: "1px solid var(--border)", paddingTop: 12 }}>
            <span>Category</span>
            <span>Technologies</span>
          </div>
          {skills.map((row, i) => (
            <motion.div key={i} className="skills-row" {...fade(6 + i)}>
              <span style={{ color: "var(--accent)" }}>{row.category}</span>
              <span style={{ color: "var(--heading)" }}>{row.tech}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Languages */}
        <motion.div style={{ marginBottom: 48 }} {...fade(10)}>
          <h3 style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent)", fontFamily: "Manrope", fontWeight: 700, marginBottom: 0 }}>
            Languages
          </h3>
          <div className="skills-row table-header" style={{ borderTop: "1px solid var(--border)", paddingTop: 12 }}>
            <span>Language</span>
            <span>Fluency</span>
          </div>
          {languages.map((row, i) => (
            <motion.div key={i} className="skills-row" {...fade(11 + i)}>
              <span style={{ color: "var(--heading)" }}>{row.lang}</span>
              <span style={{ color: "var(--accent)" }}>{row.level}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CV link */}
        <motion.div {...fade(13)}>
          <a href="#" className="bracket-btn">[ Open Resume ]</a>
        </motion.div>
      </div>
    </section>
  );
}
