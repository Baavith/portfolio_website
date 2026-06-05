import { useEffect, useRef, useState } from "react";
import { certifications, education } from "../data/portfolio";

const semesters = [
  { label: "1-1", gpa: 8.40 },
  { label: "1-2", gpa: 7.65 },
  { label: "2-1", gpa: 8.20 },
  { label: "2-2", gpa: 8.10 },
  { label: "3-1", gpa: 9.30 },
  { label: "3-2", gpa: 8.65 },
  { label: "4-1", gpa: 9.05 },
  { label: "4-2", gpa: 9.70 },
];

const semColors = [
  "#ff006e","#f72585","#7209b7","#8338ec",
  "#3a86ff","#06d6a0","#ffd60a","#ff7c43",
];

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

function SemesterTimeline() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const minGpa = 7.0;
  const maxGpa = 10.0;
  const range = maxGpa - minGpa;

  return (
    <FadeIn delay={0.1}>
      <div style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: "24px",
        padding: "36px",
        marginBottom: "48px",
      }}>
        <div style={{
          fontSize: "0.72rem",
          letterSpacing: "2px",
          textTransform: "uppercase",
          color: "#3a86ff",
          fontFamily: "'DM Sans', sans-serif",
          marginBottom: "8px",
        }}>
          📈 Academic Performance
        </div>
        <div style={{
          fontSize: "1.1rem",
          fontWeight: 700,
          fontFamily: "'Space Grotesk', sans-serif",
          color: "white",
          marginBottom: "32px",
        }}>
          Semester-wise GPA Timeline
        </div>

        <div ref={ref} style={{ position: "relative", paddingBottom: "60px" }}>
          {[8.0, 8.5, 9.0, 9.5, 10.0].map((val) => (
            <div key={val} style={{
              position: "absolute",
              left: 0, right: 0,
              bottom: `${60 + ((val - minGpa) / range) * 200}px`,
              borderTop: "1px dashed rgba(255,255,255,0.06)",
              display: "flex",
              alignItems: "center",
            }}>
              <span style={{
                fontSize: "0.65rem",
                color: "rgba(255,255,255,0.2)",
                fontFamily: "'DM Sans', sans-serif",
                marginLeft: "4px",
                transform: "translateY(-50%)",
              }}>{val.toFixed(1)}</span>
            </div>
          ))}

          <svg
            style={{
              position: "absolute",
              left: 0, right: 0, bottom: "60px",
              width: "100%",
              height: "200px",
              overflow: "visible",
              pointerEvents: "none",
            }}
            preserveAspectRatio="none"
            viewBox={`0 0 ${(semesters.length - 1) * 120} 200`}
          >
            <defs>
              <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                {semesters.map((s, i) => (
                  <stop key={i} offset={`${(i / (semesters.length - 1)) * 100}%`} stopColor={semColors[i]} />
                ))}
              </linearGradient>
              <linearGradient id="fillGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8338ec" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#8338ec" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d={[
                `M 0 ${200 - ((semesters[0].gpa - minGpa) / range) * 200}`,
                ...semesters.slice(1).map((s, i) =>
                  `L ${(i + 1) * 120} ${200 - ((s.gpa - minGpa) / range) * 200}`
                ),
                `L ${(semesters.length - 1) * 120} 200`,
                `L 0 200 Z`,
              ].join(" ")}
              fill="url(#fillGrad)"
              style={{
                opacity: visible ? 1 : 0,
                transition: "opacity 1s ease 0.5s",
              }}
            />
            <polyline
              points={semesters.map((s, i) =>
                `${i * 120},${200 - ((s.gpa - minGpa) / range) * 200}`
              ).join(" ")}
              fill="none"
              stroke="url(#lineGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                strokeDasharray: 2000,
                strokeDashoffset: visible ? 0 : 2000,
                transition: "stroke-dashoffset 1.5s ease 0.3s",
              }}
            />
          </svg>

          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            height: "260px",
            position: "relative",
          }}>
            {semesters.map((s, i) => {
              const heightPct = ((s.gpa - minGpa) / range) * 200;
              return (
                <div
                  key={i}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    position: "relative",
                    cursor: "default",
                    flex: 1,
                  }}
                >
                  {hovered === i && (
                    <div style={{
                      position: "absolute",
                      bottom: `${heightPct + 28}px`,
                      background: semColors[i],
                      color: "white",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      fontFamily: "'Space Grotesk', sans-serif",
                      padding: "4px 10px",
                      borderRadius: "8px",
                      whiteSpace: "nowrap",
                      zIndex: 10,
                      boxShadow: `0 0 16px ${semColors[i]}88`,
                    }}>
                      {s.gpa.toFixed(2)}
                    </div>
                  )}
                  <div style={{
                    position: "absolute",
                    bottom: `${heightPct}px`,
                    width: hovered === i ? "16px" : "12px",
                    height: hovered === i ? "16px" : "12px",
                    borderRadius: "50%",
                    background: semColors[i],
                    boxShadow: `0 0 ${hovered === i ? "20px" : "10px"} ${semColors[i]}88`,
                    border: "2px solid #040414",
                    transition: "all 0.2s ease",
                    opacity: visible ? 1 : 0,
                    transform: visible ? "scale(1)" : "scale(0)",
                    transitionDelay: `${0.3 + i * 0.1}s`,
                    zIndex: 2,
                  }} />
                  <div style={{
                    position: "absolute",
                    bottom: "-28px",
                    fontSize: "0.72rem",
                    color: hovered === i ? semColors[i] : "rgba(255,255,255,0.4)",
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 600,
                    transition: "color 0.2s",
                    whiteSpace: "nowrap",
                  }}>
                    Sem {s.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div style={{
          display: "flex",
          gap: "16px",
          flexWrap: "wrap",
          marginTop: "16px",
          paddingTop: "24px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}>
          {[
            { label: "Highest GPA", value: "9.70", color: "#06d6a0", sem: "Sem 4-2" },
            { label: "Lowest GPA", value: "7.65", color: "#ff006e", sem: "Sem 1-2" },
            { label: "Average GPA", value: (semesters.reduce((a,b) => a + b.gpa, 0) / semesters.length).toFixed(2), color: "#8338ec", sem: "Overall" },
            { label: "Trend", value: "↑ Improving", color: "#ffd60a", sem: "3-1 onwards" },
          ].map((m, i) => (
            <div key={i} style={{
              flex: "1 1 140px",
              background: "rgba(255,255,255,0.03)",
              border: `1px solid ${m.color}33`,
              borderRadius: "12px",
              padding: "14px 18px",
            }}>
              <div style={{
                fontSize: "0.65rem",
                color: "rgba(255,255,255,0.3)",
                fontFamily: "'DM Sans', sans-serif",
                letterSpacing: "1px",
                textTransform: "uppercase",
                marginBottom: "6px",
              }}>{m.label}</div>
              <div style={{
                fontSize: "1.1rem",
                fontWeight: 700,
                fontFamily: "'Space Grotesk', sans-serif",
                color: m.color,
              }}>{m.value}</div>
              <div style={{
                fontSize: "0.7rem",
                color: "rgba(255,255,255,0.25)",
                fontFamily: "'DM Sans', sans-serif",
                marginTop: "2px",
              }}>{m.sem}</div>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
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

      <SemesterTimeline />

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