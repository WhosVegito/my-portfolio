import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("dark");
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        background: scrolled ? "rgba(5,5,5,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "background 0.3s, border-color 0.3s",
      }}
    >
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "16px 32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <a
          href="#home"
          className="shimmer-text"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            fontSize: 15,
            letterSpacing: "0.01em",
          }}
        >
          Aaranya Sharma
        </a>

        <ul style={{ display: "flex", gap: 32, listStyle: "none", margin: 0, padding: 0 }}>
          {[
            { label: "About", href: "#about" },
            { label: "Achievements", href: "#achievements" },
            { label: "Projects", href: "#projects" },
            { label: "Contact", href: "#contact" },
          ].map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  color: "var(--accent)",
                  textTransform: "uppercase",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "var(--heading)")}
                onMouseLeave={(e) => (e.target.style.color = "var(--accent)")}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
