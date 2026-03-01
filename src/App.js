import { useState, useEffect, useRef } from "react";
import { Github, Linkedin, ExternalLink, Code2, Link, Briefcase,  ArrowUpRight,  MessageSquare, Tent, Server } from "lucide-react";

// ─── PALETTE ───────────────────────────────────────────────────────────────
const C = {
  bg: "#030308",
  surface: "#08080f",
  card: "#0e0e1c",
  border: "#1a1a30",
  green: "#00f5a0",
  emerald: "#00d4aa",
  blue: "#4361ee",
  cyan: "#00c9ff",
  violet: "#7c3aed",
  pink: "#f72585",
  orange: "#ff6b35",
  yellow: "#ffd60a",
  teal: "#0af5d4",
  text: "#e8e8f0",
  muted: "#7070a0",
  dim: "#333360",
};

const G = {
  main: `linear-gradient(135deg, ${C.green} 0%, ${C.cyan} 100%)`,
  warm: `linear-gradient(135deg, ${C.orange} 0%, ${C.yellow} 100%)`,
  cool: `linear-gradient(135deg, ${C.blue} 0%, ${C.violet} 100%)`,
  hot:  `linear-gradient(135deg, ${C.pink} 0%, ${C.orange} 100%)`,
  teal: `linear-gradient(135deg, ${C.teal} 0%, ${C.blue} 100%)`,
  hero: `linear-gradient(135deg, ${C.green} 0%, ${C.cyan} 50%, ${C.blue} 100%)`,
};

// ─── DATA ──────────────────────────────────────────────────────────────────
const SKILLS = [
  { name: "Python",        color: C.yellow,  bg: "#1a1500" },
  { name: "C/C++",         color: C.orange,  bg: "#1a0a00" },
  { name: "JavaScript",    color: C.yellow,  bg: "#1a1500" },
  { name: "SQL",           color: C.cyan,    bg: "#001a1f" },
  { name: "Kotlin",        color: C.violet,  bg: "#0f0019" },
  { name: "Node.js",       color: C.green,   bg: "#001a10" },
  { name: "React",         color: C.cyan,    bg: "#001a1f" },
  { name: "Angular",       color: C.pink,    bg: "#1a0010" },
  { name: "Vue.js",        color: C.green,   bg: "#001a10" },
  { name: "Express",       color: C.muted,   bg: "#0e0e1c" },
  { name: "REST APIs",     color: C.blue,    bg: "#000d1a" },
  { name: "Docker",        color: C.cyan,    bg: "#001a1f" },
  { name: "AWS",           color: C.orange,  bg: "#1a0a00" },
  { name: "MongoDB",       color: C.green,   bg: "#001a10" },
  { name: "Socket.IO",     color: C.teal,    bg: "#001a16" },
  { name: "JWT",           color: C.yellow,  bg: "#1a1500" },
  { name: "Selenium",      color: C.green,   bg: "#001a10" },
  { name: "Cypress",       color: C.emerald, bg: "#001510" },
  { name: "Git",           color: C.orange,  bg: "#1a0a00" },
  { name: "Data Structures", color: C.violet, bg: "#0f0019" },
];

const PROJECTS = [
  {
    title: "Real-Time Chat App",
    emoji: "💬",
    icon: <MessageSquare size={32} />,
    desc: "Scalable real-time communication system with Node.js, Express, and Socket.io. Includes JWT-based authentication, secure password hashing, and modular backend architecture.",
    tags: ["Node.js", "Socket.IO", "JWT", "Express", "MongoDB"],
    gradient: G.main,
    live: "https://real-time-chatapp-1vft.onrender.com/",
    code: "https://github.com/omji74/Real_Time_ChatApp",
    accent: C.green,
  },
  {
    title: "Yelp Camp",
    emoji: "⛺",
    icon: <Tent size={32} />,
    desc: "Full-featured campground review platform with CRUD operations, user authentication, image uploads, and interactive maps. Deployed on Vercel.",
    tags: ["Node.js", "Express", "MongoDB", "Vercel", "REST"],
    gradient: G.warm,
    live: "https://yelp-camp-q6v5-git-mainline-om-ji-dwivedis-projects.vercel.app/campgrounds",
    code: "https://github.com/omji74/Yelp_Camp",
    accent: C.orange,
  },
  {
    title: "Assessment Platform",
    emoji: "📋",
    icon: <Code2 size={32} />,
    desc: "Interactive coding assessment tasks across React, Angular, and Vue.js. Automated validation logic, end-to-end test cases using Selenium and Cypress.",
    tags: ["React", "Angular", "Vue.js", "Selenium", "Cypress"],
    gradient: G.cool,
    live: "#",
    code: "https://github.com/omji74",
    accent: C.blue,
  },
];

const EXPERIENCE = [
  {
    role: "Executive Assessment Designer",
    company: "ETS – Executive Assessment Design",
    period: "08/2025 – Present",
    location: "India (Open to Remote – Poland)",
    icon: <Briefcase size={18} />,
    color: C.green,
    bg: "#001a10",
    desc: "Designed interactive coding assessment tasks across React, Angular, Vue.js. Authored structured problem statements and developed automated validation + E2E test cases.",
    tags: ["React", "Angular", "Vue.js", "Selenium", "Cypress"],
  },
  {
    role: "Assessment Design Intern",
    company: "ETS",
    period: "03/2025 – 08/2025",
    location: "India",
    icon: <Briefcase size={18} />,
    color: C.cyan,
    bg: "#001a1f",
    desc: "Designed DSA-based coding challenges for technical hiring rounds. Created example, edge-case, and performance test cases aligned with expected complexity.",
    tags: ["DSA", "Python", "C++", "Testing"],
  },
  {
    role: "Full Stack Developer Trainee",
    company: "Innobit LLC",
    period: "12/2024 – 01/2025",
    location: "India",
    icon: <Server size={18} />,
    color: C.orange,
    bg: "#1a0a00",
    desc: "Developed Inventory Management System using MERN stack. Built and optimized REST APIs with MongoDB queries. Participated in debugging and deployment workflows.",
    tags: ["MERN", "REST", "MongoDB", "Node.js"],
  },
];

const ACHIEVEMENTS = [
  {
    title: "LeetCode Achievement",
    sub: "Solved 500+ problems · Max streak: 199 days",
    icon: "⚡",
    color: C.yellow,
    bg: "#1a1500",
    gradient: G.warm,
  },
  {
    title: "Competitive Programming",
    sub: "ICPC Asia Amritapuri Regional Contest Participant",
    icon: "🏆",
    color: C.green,
    bg: "#001a10",
    gradient: G.main,
  },
  {
    title: "Algorithm Specialist",
    sub: "Strong background in competitive programming & optimization",
    icon: "🧠",
    color: C.violet,
    bg: "#0f0019",
    gradient: G.cool,
  },
];

// ─── HOOKS ─────────────────────────────────────────────────────────────────
function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function FadeIn({ children, delay = 0, dir = "up" }) {
  const [ref, inView] = useInView();
  const t = { up: "translateY(36px)", left: "translateX(-36px)", right: "translateX(36px)", scale: "scale(0.92)" };
  return (
    <div ref={ref} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "none" : t[dir],
      transition: `opacity 0.7s ease ${delay}s, transform 0.75s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
    }}>{children}</div>
  );
}

function Counter({ end, label, color }) {
  const [val, setVal] = useState(0);
  const [ref, inView] = useInView();
  useEffect(() => {
    if (!inView) return;
    let v = 0;
    const tick = () => { v += Math.max(1, Math.ceil(end / 35)); if (v >= end) { setVal(end); return; } setVal(v); requestAnimationFrame(tick); };
    requestAnimationFrame(tick);
  }, [inView, end]);
  return (
    <div ref={ref} style={{ textAlign: "center" }}>
      <div style={{ fontSize: "2.6rem", fontFamily: "'Syne', sans-serif", fontWeight: 800, background: color, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", lineHeight: 1 }}>
        {val}+
      </div>
      <div style={{ fontSize: "0.65rem", fontFamily: "monospace", color: C.muted, letterSpacing: "0.12em", marginTop: 4 }}>{label}</div>
    </div>
  );
}

// ─── SMALL COMPONENTS ──────────────────────────────────────────────────────
function GlowOrb({ color, size, top, left, right, bottom, opacity = 0.12 }) {
  return <div style={{ position: "absolute", width: size, height: size, borderRadius: "50%", background: color, filter: `blur(${size / 2.2}px)`, opacity, top, left, right, bottom, pointerEvents: "none" }} />;
}

function Tag({ label, color }) {
  return <span style={{ fontSize: "0.62rem", padding: "3px 9px", borderRadius: 99, border: `1px solid ${color}44`, color, background: `${color}11`, fontFamily: "monospace", letterSpacing: "0.05em", whiteSpace: "nowrap" }}>{label}</span>;
}

function Btn({ children, href, gradient, outline, small }) {
  const [hov, setHov] = useState(false);
  return (
    <a href={href} target="_blank" rel="noreferrer"
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        display: "inline-flex", alignItems: "center", gap: 7,
        padding: small ? "8px 16px" : "13px 26px", borderRadius: 9,
        textDecoration: "none", fontFamily: "monospace",
        fontSize: small ? "0.7rem" : "0.8rem", letterSpacing: "0.05em", fontWeight: 600,
        transition: "all 0.22s", cursor: "pointer",
        ...(outline ? {
          border: `1px solid ${C.green}44`, color: hov ? "#fff" : C.green,
          background: hov ? `${C.green}22` : "transparent",
          boxShadow: hov ? `0 0 16px ${C.green}22` : "none",
        } : {
          background: hov ? "transparent" : gradient,
          backgroundImage: hov ? "none" : gradient,
          border: `1px solid ${hov ? C.green + "44" : "transparent"}`,
          color: hov ? C.text : "#000",
          boxShadow: hov ? "none" : `0 4px 20px ${C.green}33`,
        }),
      }}
    >{children}</a>
  );
}

function SkillChip({ s, i }) {
  const [hov, setHov] = useState(false);
  return (
    <FadeIn delay={i * 0.04}>
      <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
        style={{
          display: "flex", alignItems: "center", gap: 8, padding: "10px 14px", borderRadius: 10,
          background: hov ? s.bg : C.card, border: `1px solid ${hov ? s.color + "55" : C.border}`,
          color: hov ? s.color : C.muted, cursor: "default", transition: "all 0.2s",
          transform: hov ? "translateY(-3px) scale(1.03)" : "none",
          boxShadow: hov ? `0 8px 24px ${s.color}22` : "none",
        }}>
        <div style={{ width: 7, height: 7, borderRadius: "50%", background: s.color, flexShrink: 0, opacity: hov ? 1 : 0.4 }} />
        <span style={{ fontSize: "0.78rem", fontFamily: "monospace" }}>{s.name}</span>
      </div>
    </FadeIn>
  );
}

function ProjectCard({ p, i }) {
  const [hov, setHov] = useState(false);
  return (
    <FadeIn delay={i * 0.13}>
      <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
        style={{
          background: C.card, borderRadius: 18, overflow: "hidden",
          border: `1px solid ${hov ? p.accent + "55" : C.border}`,
          transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)",
          transform: hov ? "translateY(-10px)" : "none",
          boxShadow: hov ? `0 28px 60px ${p.accent}25` : "0 2px 10px #00000055",
          display: "flex", flexDirection: "column",
        }}>
        {/* Banner */}
        <div style={{ height: 155, background: p.gradient, position: "relative", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(circle at 25% 75%, rgba(255,255,255,0.08) 1px, transparent 1px)`, backgroundSize: "24px 24px" }} />
          <div style={{ position: "relative", zIndex: 1, color: "#000a", filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.3))" }}>{p.icon}</div>
          <span style={{ fontSize: "2.5rem", position: "absolute", right: 20, bottom: 14, filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.4))" }}>{p.emoji}</span>
          <div style={{ position: "absolute", top: 12, left: 14, background: "#00000044", backdropFilter: "blur(8px)", borderRadius: 6, padding: "3px 10px", fontSize: "0.6rem", color: "#fff", fontFamily: "monospace" }}>
            PROJECT 0{i + 1}
          </div>
        </div>
        <div style={{ padding: "20px 22px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", gap: 5, flexWrap: "wrap", marginBottom: 10 }}>
            {p.tags.map(t => <Tag key={t} label={t} color={p.accent} />)}
          </div>
          <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1.08rem", color: C.text, marginBottom: 10 }}>{p.title}</h3>
          <p style={{ color: C.muted, fontSize: "0.81rem", lineHeight: 1.72, flex: 1, marginBottom: 20 }}>{p.desc}</p>
          <div style={{ display: "flex", gap: 10 }}>
            <Btn href={p.code} outline small><Github size={13} /> Code</Btn>
            {p.live !== "#" && <Btn href={p.live} gradient={p.gradient} small><ExternalLink size={13} /> Live Demo</Btn>}
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

function ExCard({ e, i }) {
  const [hov, setHov] = useState(false);
  return (
    <FadeIn delay={i * 0.13} dir="left">
      <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
        style={{
          background: hov ? e.bg : C.card, borderRadius: 16, padding: "26px 28px",
          border: `1px solid ${hov ? e.color + "44" : C.border}`,
          transition: "all 0.3s", boxShadow: hov ? `0 16px 48px ${e.color}18` : "none",
          display: "grid", gridTemplateColumns: "48px 1fr", gap: 20,
        }}>
        <div style={{ width: 48, height: 48, borderRadius: 12, background: `${e.color}1a`, border: `1px solid ${e.color}44`, display: "flex", alignItems: "center", justifyContent: "center", color: e.color, flexShrink: 0 }}>{e.icon}</div>
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8, marginBottom: 4 }}>
            <div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1rem", color: C.text }}>{e.role}</div>
              <div style={{ fontSize: "0.78rem", fontFamily: "monospace", color: e.color, marginTop: 2 }}>{e.company}</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4 }}>
              <span style={{ fontSize: "0.68rem", fontFamily: "monospace", background: C.surface, border: `1px solid ${C.border}`, padding: "3px 10px", borderRadius: 6, color: C.dim, whiteSpace: "nowrap" }}>{e.period}</span>
              <span style={{ fontSize: "0.65rem", fontFamily: "monospace", color: C.dim }}>📍 {e.location}</span>
            </div>
          </div>
          <p style={{ color: C.muted, fontSize: "0.81rem", lineHeight: 1.7, margin: "10px 0 14px" }}>{e.desc}</p>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>{e.tags.map(t => <Tag key={t} label={t} color={e.color} />)}</div>
        </div>
      </div>
    </FadeIn>
  );
}

function AchCard({ a, i }) {
  const [hov, setHov] = useState(false);
  return (
    <FadeIn delay={i * 0.12}>
      <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
        style={{
          background: hov ? a.bg : C.card, borderRadius: 16, padding: "24px",
          border: `1px solid ${hov ? a.color + "55" : C.border}`,
          transition: "all 0.3s", transform: hov ? "translateY(-6px)" : "none",
          boxShadow: hov ? `0 20px 48px ${a.color}22` : "none",
          position: "relative", overflow: "hidden",
        }}>
        <div style={{ position: "absolute", top: -20, right: -20, fontSize: "5rem", opacity: 0.07 }}>{a.icon}</div>
        <div style={{ fontSize: "2rem", marginBottom: 12 }}>{a.icon}</div>
        <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.98rem", color: C.text, marginBottom: 6 }}>{a.title}</div>
        <div style={{ fontSize: "0.78rem", color: C.muted, lineHeight: 1.6 }}>{a.sub}</div>
        <div style={{ marginTop: 16, height: 2, borderRadius: 1, background: a.gradient }} />
      </div>
    </FadeIn>
  );
}

// ─── CURSOR ────────────────────────────────────────────────────────────────
function Cursor() {
  const [p, setP] = useState({ x: -200, y: -200 });
  useEffect(() => { const fn = e => setP({ x: e.clientX, y: e.clientY }); window.addEventListener("mousemove", fn); return () => window.removeEventListener("mousemove", fn); }, []);
  return (
    <>
      <div style={{ position: "fixed", width: 10, height: 10, borderRadius: "50%", background: C.green, pointerEvents: "none", zIndex: 10001, left: p.x, top: p.y, transform: "translate(-50%,-50%)", boxShadow: `0 0 12px ${C.green}`, transition: "left 0.04s, top 0.04s" }} />
      <div style={{ position: "fixed", width: 360, height: 360, borderRadius: "50%", background: `radial-gradient(circle, ${C.green}0c 0%, transparent 70%)`, pointerEvents: "none", zIndex: 9999, left: p.x, top: p.y, transform: "translate(-50%,-50%)", transition: "left 0.1s, top 0.1s" }} />
    </>
  );
}

// ─── SECTION LABEL ─────────────────────────────────────────────────────────
function SLabel({ num, text }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
      <span style={{ fontSize: "0.62rem", fontFamily: "monospace", color: C.green, letterSpacing: "0.2em" }}>{num}</span>
      <div style={{ height: 1, width: 36, background: C.green, opacity: 0.4 }} />
      <span style={{ fontSize: "0.62rem", fontFamily: "monospace", color: C.muted, letterSpacing: "0.2em", textTransform: "uppercase" }}>{text}</span>
    </div>
  );
}

// ─── MAIN ──────────────────────────────────────────────────────────────────
export default function App() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => { const fn = () => setScrollY(window.scrollY); window.addEventListener("scroll", fn); return () => window.removeEventListener("scroll", fn); }, []);

  return (
    <div style={{ background: C.bg, color: C.text, minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body, a { cursor: none; }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-track { background: ${C.bg}; }
        ::-webkit-scrollbar-thumb { background: linear-gradient(${C.green}, ${C.cyan}); border-radius: 2px; }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
        @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(1.5)} }
        @keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
      `}</style>

      <Cursor />

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200, height: 62,
        padding: "0 48px", display: "flex", justifyContent: "space-between", alignItems: "center",
        background: scrollY > 30 ? "rgba(3,3,8,0.88)" : "transparent",
        backdropFilter: scrollY > 30 ? "blur(20px)" : "none",
        borderBottom: scrollY > 30 ? `1px solid ${C.border}` : "none",
        transition: "all 0.35s",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 34, height: 34, borderRadius: 9, background: G.main, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.78rem", fontFamily: "'Syne',sans-serif", fontWeight: 800, color: "#000" }}>OJ</div>
          <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "0.95rem" }}>Om Ji<span style={{ color: C.green }}>.</span></span>
        </div>
        <div style={{ display: "flex", gap: 2 }}>
          {["Experience","Projects","Skills","Achievements","Contact"].map(n => (
            <a key={n} href={`#${n.toLowerCase()}`}
              style={{ padding: "6px 14px", borderRadius: 6, textDecoration: "none", fontFamily: "monospace", fontSize: "0.72rem", color: C.muted, transition: "all 0.2s" }}
              onMouseEnter={e => { e.target.style.color = C.text; e.target.style.background = C.surface; }}
              onMouseLeave={e => { e.target.style.color = C.muted; e.target.style.background = "transparent"; }}
            >{n}</a>
          ))}
        </div>
      </nav>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "80px 48px 0", position: "relative", overflow: "hidden" }}>
        <GlowOrb color={C.green} size={600} top="-150px" left="-150px" opacity={0.1} />
        <GlowOrb color={C.cyan} size={400} bottom="-100px" right="-80px" opacity={0.09} />
        <GlowOrb color={C.blue} size={300} top="40%" left="50%" opacity={0.07} />

        {/* grid bg */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", backgroundImage: `linear-gradient(${C.border}55 1px,transparent 1px),linear-gradient(90deg,${C.border}55 1px,transparent 1px)`, backgroundSize: "56px 56px", maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%,black 20%,transparent 100%)" }} />

        <div style={{ maxWidth: 1100, width: "100%", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: 60, alignItems: "center" }}>
          <div>
            <FadeIn delay={0.1}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "5px 14px", borderRadius: 99, background: `${C.green}12`, border: `1px solid ${C.green}30`, marginBottom: 26 }}>
                <div style={{ width: 7, height: 7, borderRadius: "50%", background: C.green, animation: "pulse 1.8s infinite" }} />
                <span style={{ fontSize: "0.68rem", fontFamily: "monospace", color: C.green, letterSpacing: "0.12em" }}>OPEN TO REMOTE · INDIA / POLAND</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, lineHeight: 1.04, marginBottom: 18 }}>
                <span style={{ fontSize: "clamp(0.9rem,2.5vw,1.1rem)", color: C.muted, display: "block", fontWeight: 400, fontFamily: "monospace", marginBottom: 6 }}>&gt; init portfolio</span>
                <span style={{ fontSize: "clamp(2.8rem,6.5vw,5rem)", display: "block", background: G.hero, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundSize: "200% auto", animation: "shimmer 5s linear infinite" }}>Om Ji Dwivedi</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div style={{ display: "inline-block", padding: "6px 16px", borderRadius: 8, background: `${C.green}15`, border: `1px solid ${C.green}30`, marginBottom: 20 }}>
                <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 600, fontSize: "1rem", background: G.main, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Computer Science Engineer</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p style={{ fontSize: "clamp(0.88rem,1.8vw,1rem)", color: C.muted, maxWidth: 500, lineHeight: 1.78, marginBottom: 36 }}>
                Specializing in <span style={{ color: C.cyan }}>algorithmic problem design</span>, scalable backend systems, and coding assessment development. Strong in <span style={{ color: C.green }}>Data Structures & Complexity Analysis</span>, Python, and containerized cloud-ready apps.
              </p>
            </FadeIn>

            <FadeIn delay={0.48}>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 48 }}>
                <Btn href="#projects" gradient={G.main}><span>View Projects</span> <ArrowUpRight size={15} /></Btn>
                <Btn href="https://linktr.ee/omji74" outline><Link size={14} /> Linktree</Btn>
              </div>
            </FadeIn>

            <FadeIn delay={0.56}>
              <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
                <Counter end={500} label="LEETCODE PROBLEMS" color={G.warm} />
                <div style={{ width: 1, background: C.border }} />
                <Counter end={20} label="SKILLS" color={G.main} />
                <div style={{ width: 1, background: C.border }} />
                <Counter end={3} label="INTERNSHIPS" color={G.cool} />
              </div>
            </FadeIn>
          </div>

          {/* Avatar */}
          <FadeIn delay={0.25} dir="left">
            <div style={{ animation: "float 5s ease-in-out infinite" }}>
              <div style={{ width: 210, height: 270, borderRadius: 24, background: `linear-gradient(135deg,${C.surface},${C.card})`, border: `1px solid ${C.border}`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", boxShadow: `0 40px 80px ${C.green}18, 0 0 0 1px ${C.border}` }}>
                <div style={{ position: "absolute", inset: 0, background: G.main, opacity: 0.04 }} />
                <div style={{ width: 90, height: 90, borderRadius: "50%", background: G.main, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", fontFamily: "'Syne',sans-serif", fontWeight: 800, color: "#000", marginBottom: 14, boxShadow: `0 0 30px ${C.green}44` }}>OJ</div>
                <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "0.95rem", marginBottom: 4 }}>Om Ji Dwivedi</div>
                <div style={{ fontSize: "0.65rem", fontFamily: "monospace", color: C.green, marginBottom: 16, letterSpacing: "0.04em" }}>CS Engineer</div>
                <div style={{ fontSize: "0.62rem", fontFamily: "monospace", color: C.muted }}>+91 90843 74321</div>
                <div style={{ fontSize: "0.62rem", fontFamily: "monospace", color: C.muted, marginTop: 3 }}>omjidwivedi49@gmail.com</div>
                <div style={{ position: "absolute", bottom: -12, right: -12, background: C.surface, border: `1px solid ${C.green}33`, borderRadius: 10, padding: "5px 11px", fontSize: "0.6rem", fontFamily: "monospace", color: C.green, boxShadow: `0 8px 24px ${C.green}18` }}>⚡ 500+ LeetCode</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SKILLS MARQUEE */}
      <div style={{ overflow: "hidden", padding: "32px 0", borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, background: C.surface, marginTop: 60 }}>
        <div style={{ display: "flex", gap: 32, animation: "marquee 20s linear infinite", width: "max-content" }}>
          {[...SKILLS, ...SKILLS].map((s, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, whiteSpace: "nowrap", padding: "4px 0" }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: s.color }} />
              <span style={{ fontSize: "0.75rem", fontFamily: "monospace", color: C.muted }}>{s.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── EXPERIENCE ───────────────────────────────────────────────── */}
      <section id="experience" style={{ padding: "110px 48px", position: "relative" }}>
        <GlowOrb color={C.cyan} size={350} top="10%" right="-80px" opacity={0.07} />
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <FadeIn><SLabel num="02" text="Experience" />
            <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(2rem,4vw,3rem)", marginBottom: 52 }}>
              Career <span style={{ background: G.main, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Timeline</span>
            </h2>
          </FadeIn>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {EXPERIENCE.map((e, i) => <ExCard key={i} e={e} i={i} />)}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ─────────────────────────────────────────────────── */}
      <section id="projects" style={{ padding: "110px 48px", background: C.surface, position: "relative" }}>
        <GlowOrb color={C.green} size={400} top="-80px" left="30%" opacity={0.06} />
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <FadeIn><SLabel num="03" text="Projects" />
            <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(2rem,4vw,3rem)", marginBottom: 52 }}>
              Selected <span style={{ background: G.hero, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Work</span>
            </h2>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 24 }}>
            {PROJECTS.map((p, i) => <ProjectCard key={i} p={p} i={i} />)}
          </div>
        </div>
      </section>

      {/* ── SKILLS ───────────────────────────────────────────────────── */}
      <section id="skills" style={{ padding: "110px 48px", position: "relative" }}>
        <GlowOrb color={C.violet} size={300} bottom="-80px" left="-60px" opacity={0.09} />
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <FadeIn><SLabel num="04" text="Skills" />
            <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(2rem,4vw,3rem)", marginBottom: 16 }}>
              Technical <span style={{ background: G.cool, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Arsenal</span>
            </h2>
            <p style={{ color: C.muted, fontSize: "0.86rem", maxWidth: 460, lineHeight: 1.7, marginBottom: 48 }}>
              From competitive programming to cloud deployments — a full-stack toolkit built for real-world impact.
            </p>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(155px,1fr))", gap: 10 }}>
            {SKILLS.map((s, i) => <SkillChip key={s.name} s={s} i={i} />)}
          </div>
        </div>
      </section>

      {/* ── ACHIEVEMENTS ─────────────────────────────────────────────── */}
      <section id="achievements" style={{ padding: "110px 48px", background: C.surface, position: "relative" }}>
        <GlowOrb color={C.yellow} size={350} top="30%" right="-80px" opacity={0.07} />
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <FadeIn><SLabel num="05" text="Achievements" />
            <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(2rem,4vw,3rem)", marginBottom: 52 }}>
              Key <span style={{ background: G.warm, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Milestones</span>
            </h2>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))", gap: 20 }}>
            {ACHIEVEMENTS.map((a, i) => <AchCard key={i} a={a} i={i} />)}
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────────── */}
      <section id="contact" style={{ padding: "110px 48px 72px", position: "relative", overflow: "hidden" }}>
        <GlowOrb color={C.green} size={500} top="50%" left="50%" opacity={0.06} />
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
          <FadeIn><SLabel num="06" text="Contact" />
            <h2 style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, fontSize: "clamp(2rem,5vw,3.5rem)", marginBottom: 16, lineHeight: 1.08 }}>
              Let's Build Something<br />
              <span style={{ background: G.hero, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Exceptional</span>
            </h2>
            <p style={{ color: C.muted, fontSize: "0.88rem", lineHeight: 1.75, maxWidth: 420, margin: "0 auto 20px" }}>
              Open to full-time roles, remote opportunities, and interesting collaborations — India or Poland.
            </p>
            <a href="mailto:omjidwivedi49@gmail.com" style={{ display: "inline-block", marginBottom: 44, fontFamily: "monospace", fontSize: "0.85rem", color: C.green, textDecoration: "none", borderBottom: `1px solid ${C.green}44`, paddingBottom: 2 }}>omjidwivedi49@gmail.com</a>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap", marginBottom: 60 }}>
              <Btn href="https://github.com/omji74" gradient={G.cool}><Github size={16} /> GitHub</Btn>
              <Btn href="https://www.linkedin.com/in/omji74" gradient={G.main}><Linkedin size={16} /> LinkedIn</Btn>
              <Btn href="https://linktr.ee/omji74" gradient={G.warm}><Link size={16} /> Linktree</Btn>
            </div>
          </FadeIn>

          <FadeIn delay={0.22}>
            <div style={{ borderTop: `1px solid ${C.border}`, paddingTop: 28, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
              <span style={{ fontSize: "0.7rem", fontFamily: "monospace", color: C.dim }}>© 2025 Om Ji Dwivedi · CS Engineer</span>
              <span style={{ fontSize: "0.7rem", fontFamily: "monospace", color: C.dim }}>Built with React ✦ Designed with ♥</span>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}