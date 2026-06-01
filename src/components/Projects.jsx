import { useEffect, useRef, useState } from "react";
import { projects } from "../data/portfolio";

function ProjectCard({ project, index }) {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.02)",
        border: hovered ? "1px solid rgba(255,255,255,0.15)" : "1px solid rgba(255,255,255,0.06)",
        borderRadius: "24px",
        overflow: "hidden",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(40px) scale(0.97)",
        transition: `all 0.6s cubic-bezier(0.16,1,0.3,1) ${index * 0.12}s`,
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Gradient top bar */}
      <div style={{
        height: "4px",
        background: `linear-gradient(90deg, ${project.gradient.replace("from-[", "").replace("] to-[", ", ").replace("]", "")})`,
        transition: "height 0.3s ease",
      }} />

      {/* Gradient glow overlay on hover */}
      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0, bottom: 0,
        background: `linear-gradient(135deg, ${project.gradient.replace("from-[", "").replace("] to-[", "22, ").replace("]", "11")})`,
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.4s ease",
        pointerEvents: "none",
        zIndex: 0,
      }} />

      <div style={{ padding: "32px", position: "relative", zIndex: 1, flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Icon + number */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
          <div style={{
            fontSize: "2.5rem",
            lineHeight: 1,
          }}>{project.icon}</div>
          <div style={{
            fontSize: "0.7rem",
            color: "rgba(255,255,255,0.2)",
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            letterSpacing: "1px",
          }}>
            {String(index + 1).padStart(2, "0")}
          </div>
        </div>

        {/* Title */}
        <h3 style={{
          fontSize: "1.2rem",
          fontWeight: 700,
          fontFamily: "'Space Grotesk', sans-serif",
          color: "white",
          margin: "0 0 12px",
          lineHeight: 1.3,
          letterSpacing: "-0.3px",
        }}>
          {project.title}
        </h3>

        {/* Description */}
        <p style={{
          fontSize: "0.88rem",
          color: "rgba(255,255,255,0.5)",
          lineHeight: 1.7,
          fontFamily: "'DM Sans', sans-serif",
          margin: "0 0 20px",
          flex: 1,
        }}>
          {project.description}
        </p>

        {/* Highlight badge */}
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "100px",
          padding: "4px 12px",
          marginBottom: "20px",
          fontSize: "0.75rem",
          color: "rgba(255,255,255,0.5)",
          fontFamily: "'DM Sans', sans-serif",
        }}>
          <span style={{ color: "#ffd60a" }}>⚡</span>
          {project.highlight}
        </div>

        {/* Tech stack */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "24px" }}>
          {project.tech.map((t) => (
            <span
              key={t}
              style={{
                padding: "4px 10px",
                borderRadius: "6px",
                fontSize: "0.75rem",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                background: "rgba(255,255,255,0.07)",
                color: "rgba(255,255,255,0.6)",
                letterSpacing: "0.3px",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div style={{ display: "flex", gap: "12px" }}>
          <a
            href={project.link}
            style={{
              flex: 1,
              textAlign: "center",
              padding: "10px",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "12px",
              color: "white",
              textDecoration: "none",
              fontSize: "0.82rem",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 500,
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => { e.target.style.background = "rgba(255,255,255,0.14)"; }}
            onMouseLeave={(e) => { e.target.style.background = "rgba(255,255,255,0.08)"; }}
          >
            🔗 Live Demo
          </a>
          <a
            href={project.github}
            style={{
              flex: 1,
              textAlign: "center",
              padding: "10px",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "12px",
              color: "white",
              textDecoration: "none",
              fontSize: "0.82rem",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 500,
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => { e.target.style.background = "rgba(255,255,255,0.14)"; }}
            onMouseLeave={(e) => { e.target.style.background = "rgba(255,255,255,0.08)"; }}
          >
            ⭐ GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        padding: "100px 24px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "64px" }}>
        <div style={{
          display: "inline-block",
          fontSize: "0.75rem",
          letterSpacing: "3px",
          textTransform: "uppercase",
          color: "#ff006e",
          fontFamily: "'DM Sans', sans-serif",
          marginBottom: "16px",
        }}>
          What I've Built
        </div>
        <h2 style={{
          fontSize: "clamp(2rem, 4vw, 3.5rem)",
          fontWeight: 800,
          fontFamily: "'Space Grotesk', sans-serif",
          color: "white",
          margin: "0 0 16px",
          letterSpacing: "-1px",
        }}>
          Featured{" "}
          <span style={{
            background: "linear-gradient(135deg,#ff006e,#8338ec)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>Projects</span>
        </h2>
        <p style={{
          fontSize: "1rem",
          color: "rgba(255,255,255,0.4)",
          maxWidth: "500px",
          margin: "0 auto",
          fontFamily: "'DM Sans', sans-serif",
          lineHeight: 1.6,
        }}>
          From AI systems to full-stack applications — each project solves a real problem.
        </p>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "24px",
      }}>
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
