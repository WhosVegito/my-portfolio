import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        paddingTop: "140px",
        paddingBottom: "80px",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 32px" }}>
        {/* Status bar */}
        <motion.div
          style={{
            display: "flex",
            gap: 48,
            marginBottom: 64,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <p className="section-label" style={{ marginBottom: 4 }}>Availability</p>
            <p style={{ fontSize: 13, color: "var(--heading)", display: "flex", alignItems: "center", gap: 7 }}>
              <span
                style={{
                  display: "inline-block",
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#4ade80",
                  boxShadow: "0 0 6px #4ade80",
                }}
              />
              Available for Projects
            </p>
          </div>
          <div>
            <p className="section-label" style={{ marginBottom: 4 }}>Location</p>
            <p style={{ fontSize: 13, color: "var(--heading)" }}>India</p>
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
        >
          <h1
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(36px, 6vw, 72px)",
              fontWeight: 300,
              color: "var(--heading)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: 24,
            }}
          >
            Backend Developer
            <br />
            <span style={{ color: "var(--accent)" }}>&amp; Database Engineer</span>
          </h1>

          <p
            style={{
              fontSize: 14,
              maxWidth: 480,
              lineHeight: 1.75,
              color: "var(--text)",
              marginBottom: 36,
            }}
          >
            Building scalable systems and managing complex databases.
            Business-oriented thinker with a passion for data integrity,
            optimization, and seamless user experiences.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="#projects" className="bracket-btn">[ View Projects ]</a>
            <a href="#contact" className="bracket-btn">[ Get In Touch ]</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
