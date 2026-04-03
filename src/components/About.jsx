import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" style={{ padding: "80px 0", borderBottom: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 32px" }}>
        <div style={{ position: "relative" }}>
          <p className="ghost-heading" aria-hidden>ABOUT</p>
          <motion.div
            style={{ marginTop: -10 }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <span className="section-label">01 — About</span>
            <h2 style={{ fontSize: 20, fontWeight: 500, marginTop: 6, marginBottom: 20 }}>About</h2>
          </motion.div>
        </div>

        <motion.div
          style={{ maxWidth: 580 }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p style={{ fontSize: 14, lineHeight: 1.85, marginBottom: 20 }}>
            I am a backend developer and database engineer passionate about building
            scalable systems that handle real-world complexity. My experience spans
            inventory management, supply chain databases, and RESTful API development.
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.85, color: "var(--accent)" }}>
            Having a business-oriented mindset, I approach every project with a focus
            on performance, data integrity, and long-term maintainability — not just
            making it work, but making it work well.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
