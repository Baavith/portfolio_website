import { useEffect, useRef, useState } from "react";
import { certifications, education } from "../data/portfolio";

function FadeIn({ children, delay = 0 }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(24px)",
      transition: `all 0.6s ease ${delay}s`,
    }}>
      {children}
    </div>
  );
}

export default function Certifications() {
  return (
    <section
      id="certifications"
      style={{ padding: "100px 24px", maxWidth: "1200px", margin: "0 auto" }}
    >
      <div style={{ textAlign: "center", marginBottom: "64px" }}>
        <div style={{
          display: "inline-block",
          fontSize: "0.75rem",
          letterSpacing: "3px",
          textTransform: "uppercase",
          color: "#f72585",
          fontFamily: "'DM Sans', sans-serif",
          marginBottom: "16px",
        }}>
          Credentials
        </div>
        <h2 style={{
          fontSize: "clamp(2rem, 4vw, 3.5rem)",
          fontWeight: 800,
          fontFamily: "'Space Grotesk', sans-serif",
          color: "white",
          margin: 0,
          letterSpacing: "-1px",
        }}>
          Education &{" "}
          <span style={{
            background: "linear-gradient(135deg,#f72585,#7209b7)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>Certifications</span>
        </h2>
      </div>

      {/* Education */}
      <FadeIn>
        <div style={{
          background: "linear-gradient(135deg, rgba(247,37,133,0.08) 0%, rgba(114,9,183,0.08) 100%)",
          border: "1px solid rgba(247,37,133,0.2)",
          borderRadius: "24px",
          padding: "36px",
          marginBottom: "48px",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Decorative shape */}
          <div style={{
            position: "absolute",
            right: "-60px", top: "-60px",
            width: "240px", height: "240px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(247,37,133,0.08) 0%, transparent 70%)",
          }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{
              fontSize: "0.72rem",
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#f72585",
              fontFamily: "'DM Sans', sans-serif",
              marginBottom: "16px",
            }}>
              🎓 Education
            </div>
            {education.map((edu, i) => (
              <div key={i}>
                <h3 style={{
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: "white",
                  margin: "0 0 8px",
                  letterSpacing: "-0.3px",
                }}>
                  {edu.institution}
                </h3>
                <div style={{
                  fontSize: "1rem",
                  color: "rgba(255,255,255,0.6)",
                  fontFamily: "'DM Sans', sans-serif",
                  marginBottom: "20px",
                }}>
                  {edu.degree} · {edu.duration}
                </div>
                <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                  {[
                    { label: "SGPA", value: edu.sgpa, grad: "linear-gradient(135deg,#f72585,#7209b7)" },
                    { label: "CGPA", value: edu.cgpa, grad: "linear-gradient(135deg,#7209b7,#3a0ca3)" },
                  ].map((m) => (
                    <div key={m.label} style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "14px",
                      padding: "16px 28px",
                      textAlign: "center",
                    }}>
                      <div style={{
                        fontSize: "1.8rem",
                        fontWeight: 800,
                        fontFamily: "'Space Grotesk', sans-serif",
                        background: m.grad,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}>{m.value}</div>
                      <div style={{
                        fontSize: "0.72rem",
                        color: "rgba(255,255,255,0.35)",
                        fontFamily: "'DM Sans', sans-serif",
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                        marginTop: "4px",
                      }}>{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Certifications */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "16px",
      }}>
        {certifications.map((cert, i) => (
          <FadeIn key={i} delay={i * 0.08}>
            <div style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: "16px",
              padding: "24px",
              textAlign: "center",
              transition: "all 0.25s ease",
              cursor: "default",
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "12px" }}>{cert.icon}</div>
              <div style={{
                fontSize: "0.92rem",
                fontWeight: 600,
                fontFamily: "'Space Grotesk', sans-serif",
                color: "white",
                marginBottom: "6px",
              }}>
                {cert.name}
              </div>
              <div style={{
                fontSize: "0.75rem",
                color: "rgba(255,255,255,0.35)",
                fontFamily: "'DM Sans', sans-serif",
              }}>
                {cert.issuer}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
