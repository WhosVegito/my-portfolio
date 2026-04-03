import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BubbleButton from "./BubbleButton";

const ALL_PROJECTS = [
  {
    name: "Factory Management System (ARS)",
    description: "SQL database for manufacturing and supply chain management with optimized query performance and data integrity constraints.",
    tag: "Database",
    year: "2024",
    link: "#",
  },
  {
    name: "Library Management System (DSA)",
    description: "Implemented data structures to manage books, users, and borrow/return operations with efficient search and retrieval.",
    tag: "DSA",
    year: "2023",
    link: "#",
  },
  {
    name: "Pet Treat Dispenser",
    description: "ESP8266 + Servo + Blynk app based automatic dispenser for pets with remote mobile control and scheduling.",
    tag: "IoT",
    year: "2023",
    link: "#",
  },
];

const TABS = ["All", "Database", "DSA", "IoT"];

export default function Projects() {
  const [active, setActive] = useState("All");

  const visible = active === "All"
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter((p) => p.tag === active);

  return (
    <section id="projects" style={{ padding: "80px 0", borderBottom: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 32px" }}>
        {/* Ghost + heading */}
        <div style={{ position: "relative", marginBottom: 40 }}>
          <p className="ghost-heading" aria-hidden>PROJECTS</p>
          <motion.div
            style={{ marginTop: -10 }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="section-label">03 — Work</span>
            <h2 style={{ fontSize: 20, fontWeight: 500, marginTop: 6 }}>Projects</h2>
          </motion.div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: 40, flexWrap: "wrap" }}>
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className="bracket-btn"
              style={{
                fontSize: 11,
                padding: "6px 14px",
                background: active === tab ? "rgba(235,235,235,0.08)" : "transparent",
                borderColor: active === tab ? "rgba(235,235,235,0.3)" : "var(--border)",
                color: active === tab ? "var(--heading)" : "var(--accent)",
                position: "relative",
              }}
            >
              {active === tab && (
                <motion.span
                  layoutId="proj-tab"
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: 3,
                    background: "rgba(235,235,235,0.05)",
                  }}
                  transition={{ type: "spring", stiffness: 360, damping: 34 }}
                />
              )}
              <span style={{ position: "relative" }}>[ {tab} ]</span>
            </button>
          ))}
        </div>

        {/* Project list */}
        <div>
          {/* Column headers */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr auto",
              gap: 24,
              padding: "10px 0",
              borderBottom: "1px solid var(--border)",
            }}
          >
            {["Project", "Description", "Year"].map((h) => (
              <span key={h} style={{ fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent)", fontWeight: 700 }}>{h}</span>
            ))}
          </div>

          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <motion.div
                key={p.name}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: i * 0.06, duration: 0.35 }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 2fr auto",
                  gap: 24,
                  padding: "20px 0",
                  borderBottom: "1px solid var(--border)",
                  alignItems: "start",
                  transition: "background 0.2s",
                }}
                whileHover={{ backgroundColor: "rgba(235,235,235,0.02)" }}
              >
                <div>
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--accent)",
                      display: "block",
                      marginBottom: 6,
                    }}
                  >
                    {p.tag}
                  </span>
                  <span style={{ fontSize: 13, color: "var(--heading)", fontWeight: 500 }}>{p.name}</span>
                </div>
                <p style={{ fontSize: 13, lineHeight: 1.65, margin: 0 }}>{p.description}</p>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8 }}>
                  <span style={{ fontSize: 12, color: "var(--accent)" }}>{p.year}</span>
                  <BubbleButton
                    href={p.link}
                    className="bracket-btn"
                    style={{ fontSize: 11, padding: "5px 10px" }}
                  >
                    [ View ]
                  </BubbleButton>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
