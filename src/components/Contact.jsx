import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("axrxnxa@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" style={{ padding: "80px 0", borderBottom: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 32px" }}>
        {/* Ghost + heading */}
        <div style={{ position: "relative", marginBottom: 40 }}>
          <p className="ghost-heading" aria-hidden>CONTACT</p>
          <motion.div
            style={{ marginTop: -10 }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="section-label">04 — Contact</span>
            <h2 style={{ fontSize: 20, fontWeight: 500, marginTop: 6 }}>Contact</h2>
          </motion.div>
        </div>

        <motion.p
          style={{ fontSize: 14, maxWidth: 420, lineHeight: 1.75, marginBottom: 36 }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Want to work together? Anything else to tell me?
          Feel free to reach out.
        </motion.p>

        {/* Email heading */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
          style={{ marginBottom: 20 }}
        >
          <h3
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 32,
              fontWeight: 300,
              color: "var(--heading)",
              letterSpacing: "-0.01em",
              marginBottom: 16,
            }}
          >
            axrxnxa@gmail.com
          </h3>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <button onClick={copyEmail} className="bracket-btn">
              {copied ? "[ Copied! ]" : "[ Copy Email ]"}
            </button>
            <a href="mailto:axrxnxa@gmail.com" className="bracket-btn">
              [ Open in Email Client ]
            </a>
          </div>
        </motion.div>

        {/* Other links */}
        <motion.div
          style={{
            marginTop: 48,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 2,
            borderTop: "1px solid var(--border)",
            paddingTop: 32,
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {[
            { label: "LinkedIn", handle: "/in/aaranya-sharma", href: "https://www.linkedin.com/in/aaranya-sharma-65a343290/" },
            { label: "GitHub", handle: "WhosVegito", href: "https://github.com/WhosVegito" },
            { label: "Email", handle: "axrxnxa@gmail.com", href: "mailto:axrxnxa@gmail.com" },
          ].map(({ label, handle, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              style={{
                padding: "16px 0",
                borderRight: "1px solid var(--border)",
                paddingRight: 24,
              }}
              onMouseEnter={(e) => { e.currentTarget.querySelector(".link-label").style.color = "var(--heading)"; }}
              onMouseLeave={(e) => { e.currentTarget.querySelector(".link-label").style.color = "var(--accent)"; }}
            >
              <span
                className="section-label"
                style={{ display: "block", marginBottom: 6 }}
              >
                {label}
              </span>
              <span
                className="link-label"
                style={{ fontSize: 13, color: "var(--accent)", transition: "color 0.2s" }}
              >
                {handle} →
              </span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
