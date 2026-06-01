import { useEffect, useRef, useState } from "react";
import { experience } from "../data/portfolio";

function ExpCard({ exp, index }) {
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
        display: "grid",
        gridTemplateColumns: "1fr 56px 1fr",
        gap: "0",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `all 0.6s ease ${index * 0.15}s`,
      }}
      className="exp-row"
    >
      {/* Left side */}
      <div style={{
        padding: "0 32px 40px 0",
        textAlign: "right",
        display: index % 2 === 0 ? "block" : "none",
      }} className="left-content">
        {index % 2 === 0 && (
          <ExpContent exp={exp} color={exp.color} />
        )}
      </div>

      {/* Center line */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}>
        <div style={{
          width: "16px",
          height: "16px",
          borderRadius: "50%",
          background: exp.color,
          boxShadow: `0 0 20px ${exp.color}88`,
          flexShrink: 0,
          marginTop: "8px",
          zIndex: 1,
        }} />
        <div style={{
          width: "2px",
          flex: 1,
          background: `linear-gradient(to bottom, ${exp.color}44, transparent)`,
          minHeight: "80px",
        }} />
      </div>

      {/* Right side */}
      <div style={{
        padding: "0 0 40px 32px",
        display: index % 2 !== 0 ? "block" : "none",
      }} className="right-content">
        {index % 2 !== 0 && (
          <ExpContent exp={exp} color={exp.color} />
        )}
      </div>

      <style>{`
        @media(max-width: 768px) {
          .exp-row { grid-template-columns: 24px 1fr !important; }
          .left-content { display: none !important; }
          .right-content { display: block !important; padding: 0 0 32px 20px !important; }
        }
      `}</style>
    </div>
  );
}

function ExpContent({ exp, color }) {
  return (
    <div style={{
      background: "rgba(255,255,255,0.03)",
      border: "1px solid rgba(255,255,255,0.07)",
      borderRadius: "20px",
      padding: "24px",
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", top: 0, left: 0, width: "3px", bottom: 0,
        background: color,
        borderRadius: "3px 0 0 3px",
      }} />
      <div style={{ paddingLeft: "8px" }}>
        <div style={{
          fontSize: "0.72rem",
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          color: color,
          fontFamily: "'DM Sans', sans-serif",
          marginBottom: "6px",
        }}>
          {exp.duration}
        </div>
        <h3 style={{
          fontSize: "1.1rem",
          fontWeight: 700,
          fontFamily: "'Space Grotesk', sans-serif",
          color: "white",
          margin: "0 0 4px",
        }}>
          {exp.role}
        </h3>
        <div style={{
          fontSize: "0.88rem",
          color: "rgba(255,255,255,0.5)",
          fontFamily: "'DM Sans', sans-serif",
          marginBottom: "16px",
        }}>
          {exp.company} · {exp.location}
        </div>
        <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
          {exp.points.map((pt, i) => (
            <li key={i} style={{
              display: "flex",
              gap: "10px",
              fontSize: "0.85rem",
              color: "rgba(255,255,255,0.55)",
              fontFamily: "'DM Sans', sans-serif",
              lineHeight: 1.6,
              marginBottom: "8px",
            }}>
              <span style={{ color, flexShrink: 0, marginTop: "2px" }}>▸</span>
              {pt}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        padding: "100px 24px",
        maxWidth: "1000px",
        margin: "0 auto",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "64px" }}>
        <div style={{
          display: "inline-block",
          fontSize: "0.75rem",
          letterSpacing: "3px",
          textTransform: "uppercase",
          color: "#ffd60a",
          fontFamily: "'DM Sans', sans-serif",
          marginBottom: "16px",
        }}>
          My Journey
        </div>
        <h2 style={{
          fontSize: "clamp(2rem, 4vw, 3.5rem)",
          fontWeight: 800,
          fontFamily: "'Space Grotesk', sans-serif",
          color: "white",
          margin: 0,
          letterSpacing: "-1px",
        }}>
          Experience &{" "}
          <span style={{
            background: "linear-gradient(135deg,#ffd60a,#ff7c43)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>Leadership</span>
        </h2>
      </div>

      <div>
        {experience.map((exp, i) => (
          <ExpCard key={i} exp={exp} index={i} />
        ))}
      </div>
    </section>
  );
}
