import { useEffect, useRef } from "react";
import { useTypingEffect } from "../hooks/useTypingEffect";
import { personal, stats } from "../data/portfolio";

function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    let w, h, particles;

    const colors = ["#ff006e", "#8338ec", "#06d6a0", "#ffd60a", "#118ab2"];

    function init() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      particles = Array.from({ length: 80 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 2 + 0.5,
        dx: (Math.random() - 0.5) * 0.4,
        dy: (Math.random() - 0.5) * 0.4,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.2,
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.round(p.alpha * 255).toString(16).padStart(2, "0");
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > w) p.dx *= -1;
        if (p.y < 0 || p.y > h) p.dy *= -1;
      });
      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(131,56,236,${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    }

    init();
    draw();
    window.addEventListener("resize", init);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", init);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", inset: 0, zIndex: 0, opacity: 0.6 }}
    />
  );
}

export default function Hero() {
  const typed = useTypingEffect(personal.typingRoles, 75, 45, 1800);

  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "120px 24px 80px",
      }}
    >
      <ParticleCanvas />

      {/* Gradient blobs */}
      <div style={{
        position: "absolute", top: "-20%", left: "-10%",
        width: "600px", height: "600px",
        background: "radial-gradient(circle, rgba(131,56,236,0.18) 0%, transparent 70%)",
        borderRadius: "50%", zIndex: 0, pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "-10%", right: "-5%",
        width: "500px", height: "500px",
        background: "radial-gradient(circle, rgba(6,214,160,0.12) 0%, transparent 70%)",
        borderRadius: "50%", zIndex: 0, pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", top: "30%", right: "15%",
        width: "400px", height: "400px",
        background: "radial-gradient(circle, rgba(255,0,110,0.1) 0%, transparent 70%)",
        borderRadius: "50%", zIndex: 0, pointerEvents: "none",
      }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: "900px" }}>
        {/* Badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "8px",
          background: "rgba(131,56,236,0.12)",
          border: "1px solid rgba(131,56,236,0.3)",
          borderRadius: "100px",
          padding: "6px 20px",
          marginBottom: "32px",
          fontSize: "0.8rem",
          color: "#c084fc",
          fontFamily: "'DM Sans', sans-serif",
          letterSpacing: "1px",
          textTransform: "uppercase",
        }}>
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#06d6a0", display: "inline-block", animation: "pulse 2s infinite" }} />
          Available for Opportunities
        </div>

        {/* Name */}
        <h1 style={{
          fontSize: "clamp(2.8rem, 7vw, 6rem)",
          fontWeight: 900,
          fontFamily: "'Space Grotesk', sans-serif",
          lineHeight: 1.05,
          margin: "0 0 8px",
          letterSpacing: "-2px",
          color: "white",
        }}>
          Anugu Baavith
          <br />
          <span style={{
            background: "linear-gradient(135deg, #ff006e 0%, #8338ec 40%, #06d6a0 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>Reddy</span>
        </h1>

        {/* Typing effect */}
        <div style={{
          fontSize: "clamp(1.2rem, 3vw, 2rem)",
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 500,
          color: "rgba(255,255,255,0.75)",
          marginBottom: "28px",
          minHeight: "2.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
        }}>
          <span style={{ color: "rgba(255,255,255,0.4)" }}>I'm a</span>
          <span style={{
            background: "linear-gradient(90deg, #ffd60a, #ff7c43)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: 700,
          }}>{typed}</span>
          <span style={{
            width: "3px",
            height: "1.4em",
            background: "#ffd60a",
            display: "inline-block",
            animation: "blink 1s step-end infinite",
            borderRadius: "2px",
            verticalAlign: "middle",
          }} />
        </div>

        {/* Bio */}
        <p style={{
          fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)",
          color: "rgba(255,255,255,0.5)",
          maxWidth: "620px",
          margin: "0 auto 48px",
          lineHeight: 1.75,
          fontFamily: "'DM Sans', sans-serif",
        }}>
          {personal.bio}
        </p>

        {/* CTA Buttons */}
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginBottom: "72px" }}>
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
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
              boxShadow: "0 0 40px rgba(131,56,236,0.4)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => { e.target.style.transform = "scale(1.05)"; e.target.style.boxShadow = "0 0 60px rgba(131,56,236,0.6)"; }}
            onMouseLeave={(e) => { e.target.style.transform = "scale(1)"; e.target.style.boxShadow = "0 0 40px rgba(131,56,236,0.4)"; }}
          >
            View My Work 🚀
          </button>
          <a
            href="mailto:baavithreddy04@gmail.com"
            style={{
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "white",
              padding: "14px 36px",
              borderRadius: "100px",
              fontSize: "1rem",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 500,
              cursor: "pointer",
              textDecoration: "none",
              transition: "all 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.5)"; e.target.style.background = "rgba(255,255,255,0.05)"; }}
            onMouseLeave={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.2)"; e.target.style.background = "transparent"; }}
          >
            Let's Talk ✉️
          </a>
        </div>

        {/* Stats */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1px",
          background: "rgba(255,255,255,0.06)",
          borderRadius: "20px",
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.08)",
          maxWidth: "700px",
          margin: "0 auto",
        }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              padding: "24px 16px",
              background: "rgba(4,4,20,0.6)",
              textAlign: "center",
              backdropFilter: "blur(10px)",
            }}>
              <div style={{
                fontSize: "2rem",
                fontWeight: 800,
                fontFamily: "'Space Grotesk', sans-serif",
                background: i === 0 ? "linear-gradient(135deg,#ff006e,#8338ec)"
                  : i === 1 ? "linear-gradient(135deg,#06d6a0,#118ab2)"
                  : i === 2 ? "linear-gradient(135deg,#ffd60a,#ff7c43)"
                  : "linear-gradient(135deg,#8338ec,#06d6a0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                {s.value}{s.suffix}
              </div>
              <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans', sans-serif", marginTop: "4px", letterSpacing: "0.5px" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div style={{ marginTop: "56px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
          <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.25)", fontFamily: "'DM Sans', sans-serif", letterSpacing: "2px", textTransform: "uppercase" }}>Scroll to explore</span>
          <div style={{
            width: "24px", height: "40px",
            border: "1.5px solid rgba(255,255,255,0.15)",
            borderRadius: "12px",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: "5px",
          }}>
            <div style={{
              width: "4px", height: "8px",
              background: "rgba(131,56,236,0.7)",
              borderRadius: "4px",
              animation: "scrollDown 1.5s ease infinite",
            }} />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(1.3)} }
        @keyframes scrollDown { 0%{transform:translateY(0);opacity:1} 100%{transform:translateY(14px);opacity:0} }
        @media(max-width:640px){
          .stats-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </section>
  );
}
