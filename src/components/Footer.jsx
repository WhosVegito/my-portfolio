import ParticleCanvas from "./ParticleCanvas";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)" }}>
      {/* Particle canvas */}
      <div style={{ borderBottom: "1px solid var(--border)" }}>
        <ParticleCanvas height={160} />
      </div>

      {/* Footer links */}
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "32px 32px 40px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 32,
        }}
      >
        {/* Contact */}
        <div>
          <p className="section-label" style={{ marginBottom: 16 }}>Contact</p>
          {[
            { label: "LinkedIn", href: "https://www.linkedin.com/in/aaranya-sharma-65a343290/", display: "/aaranya-sharma" },
            { label: "GitHub", href: "https://github.com/WhosVegito", display: "WhosVegito" },
            { label: "Email", href: "mailto:axrxnxa@gmail.com", display: "axrxnxa@gmail.com" },
          ].map(({ label, href, display }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: 12,
                padding: "8px 0",
                borderBottom: "1px solid var(--border)",
                color: "var(--text)",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--heading)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text)")}
            >
              <span>{label}</span>
              <span style={{ color: "var(--accent)" }}>{display}</span>
            </a>
          ))}
        </div>

        {/* Navigation */}
        <div>
          <p className="section-label" style={{ marginBottom: 16 }}>Navigation</p>
          {["About", "Achievements", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                display: "block",
                fontSize: 12,
                padding: "8px 0",
                borderBottom: "1px solid var(--border)",
                color: "var(--text)",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--heading)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text)")}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
          <p style={{ fontSize: 11, color: "var(--accent)", lineHeight: 1.6 }}>
            © {new Date().getFullYear()} Aaranya Sharma
            <br />
            Designed &amp; Developed by Aaranya
          </p>
        </div>
      </div>
    </footer>
  );
}
