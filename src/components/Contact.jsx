import { useState } from "react";
import { personal } from "../data/portfolio";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socials = [
    { icon: "📧", label: "Email", value: personal.email, href: `mailto:${personal.email}`, color: "#ff006e" },
    { icon: "💼", label: "LinkedIn", value: "Anugu Baavith Reddy", href: personal.linkedin, color: "#0077b5" },
    { icon: "🐙", label: "GitHub", value: "github.com/Baavith", href: personal.github, color: "#8338ec" },
    { icon: "📱", label: "Phone", value: personal.phone, href: `tel:${personal.phone}`, color: "#06d6a0" },
  ];

  return (
    <section
      id="contact"
      style={{ padding: "100px 24px 60px", maxWidth: "900px", margin: "0 auto" }}
    >
      {/* Big CTA block */}
      <div style={{
        background: "linear-gradient(135deg, rgba(131,56,236,0.12) 0%, rgba(255,0,110,0.08) 100%)",
        border: "1px solid rgba(131,56,236,0.25)",
        borderRadius: "32px",
        padding: "clamp(40px, 6vw, 72px)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        marginBottom: "48px",
      }}>
        {/* Decorative blobs */}
        <div style={{
          position: "absolute", top: "-80px", right: "-80px",
          width: "300px", height: "300px",
          background: "radial-gradient(circle, rgba(131,56,236,0.15) 0%, transparent 70%)",
          borderRadius: "50%",
        }} />
        <div style={{
          position: "absolute", bottom: "-60px", left: "-60px",
          width: "250px", height: "250px",
          background: "radial-gradient(circle, rgba(255,0,110,0.1) 0%, transparent 70%)",
          borderRadius: "50%",
        }} />

        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{
            fontSize: "3rem",
            marginBottom: "16px",
          }}>👋</div>
          <h2 style={{
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            fontWeight: 800,
            fontFamily: "'Space Grotesk', sans-serif",
            color: "white",
            margin: "0 0 16px",
            letterSpacing: "-1px",
          }}>
            Let's Build Something{" "}
            <span style={{
              background: "linear-gradient(135deg,#ff006e,#8338ec,#06d6a0)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>Amazing</span>
          </h2>
          <p style={{
            fontSize: "1.05rem",
            color: "rgba(255,255,255,0.5)",
            maxWidth: "500px",
            margin: "0 auto 40px",
            lineHeight: 1.7,
            fontFamily: "'DM Sans', sans-serif",
          }}>
            I'm always open to exciting opportunities, collaborations, and conversations about AI, tech, and innovation. Let's connect!
          </p>

          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href={`mailto:${personal.email}`}
              style={{
                background: "linear-gradient(135deg, #ff006e, #8338ec)",
                border: "none",
                color: "white",
                padding: "14px 36px",
                borderRadius: "100px",
                fontSize: "1rem",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                cursor: "pointer",
                textDecoration: "none",
                boxShadow: "0 0 40px rgba(255,0,110,0.3)",
                display: "inline-block",
                transition: "transform 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
            >
              ✉️ Send a Message
            </a>
            <button
              onClick={copy}
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: copied ? "#06d6a0" : "white",
                padding: "14px 36px",
                borderRadius: "100px",
                fontSize: "1rem",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {copied ? "✅ Copied!" : "📋 Copy Email"}
            </button>
          </div>
        </div>
      </div>

      {/* Social links grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "16px",
      }}>
        {socials.map((s, i) => (
          <a
            key={i}
            href={s.href}
            target={s.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "16px",
              padding: "20px",
              textDecoration: "none",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = `${s.color}14`;
              e.currentTarget.style.borderColor = `${s.color}44`;
              e.currentTarget.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.03)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <div style={{
              width: "40px", height: "40px",
              borderRadius: "10px",
              background: `${s.color}20`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "1.2rem",
              flexShrink: 0,
            }}>
              {s.icon}
            </div>
            <div>
              <div style={{
                fontSize: "0.72rem",
                color: "rgba(255,255,255,0.3)",
                fontFamily: "'DM Sans', sans-serif",
                textTransform: "uppercase",
                letterSpacing: "1px",
                marginBottom: "3px",
              }}>{s.label}</div>
              <div style={{
                fontSize: "0.85rem",
                color: "rgba(255,255,255,0.75)",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
              }}>{s.value}</div>
            </div>
          </a>
        ))}
      </div>

      {/* Footer */}
      <div style={{
        textAlign: "center",
        marginTop: "60px",
        paddingTop: "40px",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        color: "rgba(255,255,255,0.2)",
        fontSize: "0.82rem",
        fontFamily: "'DM Sans', sans-serif",
      }}>
        Designed & Built by{" "}
        <span style={{
          background: "linear-gradient(135deg,#ff006e,#8338ec)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontWeight: 600,
        }}>
          Anugu Baavith Reddy
        </span>
        {" "}· {new Date().getFullYear()}
      </div>
    </section>
  );
}
