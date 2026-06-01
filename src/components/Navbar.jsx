import { useState, useEffect } from "react";

const links = ["About", "Skills", "Projects", "Experience", "Certifications", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
    setActive(id);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? "12px 32px" : "20px 32px",
        background: scrolled ? "rgba(4,4,20,0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        transition: "all 0.4s ease",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Logo */}
      <div
        style={{
          fontSize: "1.2rem",
          fontWeight: 800,
          fontFamily: "'Space Grotesk', sans-serif",
          background: "linear-gradient(135deg, #ff006e, #8338ec, #06d6a0)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          cursor: "pointer",
          letterSpacing: "-0.5px",
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ABR.
      </div>

      {/* Desktop Links */}
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }} className="desktop-nav">
        {links.map((link) => (
          <button
            key={link}
            onClick={() => scrollTo(link)}
            style={{
              background: active === link ? "rgba(131,56,236,0.15)" : "transparent",
              border: active === link ? "1px solid rgba(131,56,236,0.4)" : "1px solid transparent",
              color: active === link ? "#c084fc" : "rgba(255,255,255,0.6)",
              padding: "6px 16px",
              borderRadius: "100px",
              cursor: "pointer",
              fontSize: "0.85rem",
              fontFamily: "'DM Sans', sans-serif",
              transition: "all 0.25s ease",
              letterSpacing: "0.3px",
            }}
            onMouseEnter={(e) => {
              if (active !== link) {
                e.target.style.color = "white";
                e.target.style.background = "rgba(255,255,255,0.05)";
              }
            }}
            onMouseLeave={(e) => {
              if (active !== link) {
                e.target.style.color = "rgba(255,255,255,0.6)";
                e.target.style.background = "transparent";
              }
            }}
          >
            {link}
          </button>
        ))}
        <a
          href="mailto:baavithreddy04@gmail.com"
          style={{
            background: "linear-gradient(135deg, #ff006e, #8338ec)",
            color: "white",
            padding: "7px 20px",
            borderRadius: "100px",
            fontSize: "0.85rem",
            fontFamily: "'DM Sans', sans-serif",
            textDecoration: "none",
            fontWeight: 600,
            marginLeft: "8px",
            border: "none",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) => (e.target.style.opacity = "0.85")}
          onMouseLeave={(e) => (e.target.style.opacity = "1")}
        >
          Hire Me
        </a>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="mobile-menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          background: "transparent",
          border: "1px solid rgba(255,255,255,0.15)",
          color: "white",
          padding: "8px 12px",
          borderRadius: "8px",
          cursor: "pointer",
          display: "none",
          fontSize: "1.2rem",
        }}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "rgba(4,4,20,0.97)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              style={{
                background: "transparent",
                border: "none",
                color: "rgba(255,255,255,0.75)",
                padding: "12px 16px",
                textAlign: "left",
                cursor: "pointer",
                fontSize: "1rem",
                fontFamily: "'DM Sans', sans-serif",
                borderRadius: "8px",
                transition: "all 0.2s",
              }}
            >
              {link}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
