import { useEffect, useRef, useState } from "react";
import { skills } from "../data/portfolio";

const categoryColors = {
  "Languages": { grad: "linear-gradient(135deg,#ff006e,#8338ec)", glow: "rgba(255,0,110,0.3)" },
  "AI / ML": { grad: "linear-gradient(135deg,#8338ec,#06d6a0)", glow: "rgba(6,214,160,0.3)" },
  "Libraries": { grad: "linear-gradient(135deg,#06d6a0,#118ab2)", glow: "rgba(17,138,178,0.3)" },
  "Web Tech": { grad: "linear-gradient(135deg,#ffd60a,#ff7c43)", glow: "rgba(255,214,10,0.3)" },
  "Tools": { grad: "linear-gradient(135deg,#f72585,#7209b7)", glow: "rgba(247,37,133,0.3)" },
  "Data & BI": { grad: "linear-gradient(135deg,#118ab2,#8338ec)", glow: "rgba(131,56,236,0.3)" },
};

function SkillCard({ category, items, color, index }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: "20px",
        padding: "28px",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `all 0.6s ease ${index * 0.1}s`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top accent */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "2px",
        background: color.grad,
      }} />

      <div style={{
        fontSize: "0.7rem",
        fontFamily: "'DM Sans', sans-serif",
        letterSpacing: "2px",
        textTransform: "uppercase",
        color: "rgba(255,255,255,0.35)",
        marginBottom: "16px",
      }}>
        {category}
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        {items.map((skill) => (
          <span
            key={skill}
            style={{
              padding: "6px 14px",
              borderRadius: "100px",
              fontSize: "0.82rem",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 500,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.75)",
              transition: "all 0.2s",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = color.glow;
              e.target.style.borderColor = "rgba(255,255,255,0.25)";
              e.target.style.color = "white";
              e.target.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "rgba(255,255,255,0.05)";
              e.target.style.borderColor = "rgba(255,255,255,0.1)";
              e.target.style.color = "rgba(255,255,255,0.75)";
              e.target.style.transform = "scale(1)";
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      style={{ padding: "100px 24px", maxWidth: "1200px", margin: "0 auto" }}
    >
      {/* Section header */}
      <div style={{ textAlign: "center", marginBottom: "64px" }}>
        <div style={{
          display: "inline-block",
          fontSize: "0.75rem",
          letterSpacing: "3px",
          textTransform: "uppercase",
          color: "#06d6a0",
          fontFamily: "'DM Sans', sans-serif",
          marginBottom: "16px",
        }}>
          Technical Arsenal
        </div>
        <h2 style={{
          fontSize: "clamp(2rem, 4vw, 3.5rem)",
          fontWeight: 800,
          fontFamily: "'Space Grotesk', sans-serif",
          color: "white",
          margin: 0,
          letterSpacing: "-1px",
        }}>
          Skills &{" "}
          <span style={{
            background: "linear-gradient(135deg,#06d6a0,#118ab2)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>Expertise</span>
        </h2>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "20px",
      }}>
        {Object.entries(skills).map(([cat, items], i) => (
          <SkillCard
            key={cat}
            category={cat}
            items={items}
            color={categoryColors[cat]}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}
