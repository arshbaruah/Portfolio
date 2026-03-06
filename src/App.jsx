import { useState, useRef, useEffect } from "react";

const T = {
  bg: "#0a0a0a", bgCard: "#141414", bgCardHover: "#1c1c1c",
  sidebar: "#0f0f0f", border: "#222",
  gold: "#c9a96e", goldDim: "#8a6a30", goldGlow: "rgba(201,169,110,0.12)",
  text: "#e8e2d9", textMid: "#888", textDim: "#444", white: "#f5f0e8",
};

const LOGOS = {
  smbc: "data:image/png;base64,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",
  grameen: "data:image/png;base64,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",
  fortis: "data:image/png;base64,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",
};



const data = {
  name: "Arsh Baruah",
  email: "arshbaruah85@gmail.com",
  phone: "+91 9773552877",
  linkedin: "https://www.linkedin.com/in/arshbaruah/",
  location: "Noida, UP, India",
  about: "Economics & Finance student interested in event-driven investing, corporate finance, and technology. I debate, volunteer, and organise events. Currently building a startup alongside growing a monetised Instagram page to 12,000 followers and 5 million views (and counting!)",
  skills: {
    technical: ["Microsoft Excel", "Financial Modelling", "Financial Statement Analysis", "Corporate Finance", "PowerPoint", "C Language"],
    soft: ["Leadership", "Public Speaking", "Communication", "Problem-solving", "Adaptability", "Teamwork", "Attention to Detail"],
  },
  languages: ["Assamese", "English", "Hindi"],
  education: [
    {
      degree: "BSc, Economics & Finance", school: "Shiv Nadar University (SNIoE)",
      period: "Aug 2024 – Present", location: "Delhi NCR", color: "#2a1a4a", initial: "S",
      details: [
        { text: "Expected Graduation: 2028", bold: ["2028"] },
        { text: "Relevant Coursework: Microeconomics, Macroeconomics, Financial Accounting, Managerial Accounting, Corporate Finance, Calculus, Econometrics, C Language, Financial Markets, Investment Analysis & Portfolio Management", bold: ["Relevant Coursework"] },
        { text: "Secretary, Inspiria, The Business Club", bold: ["Secretary"] },
        { text: "Content Lead, The Entrepreneurship Cell", bold: ["Content Lead"] },
      ],
    },
    {
      degree: "HSSC (Class XII)", school: "Mayoor School",
      period: "Aug 2022 – Mar 2024", location: "Noida", color: "#1a3a4a", initial: "M",
      details: [
        { text: "President, Student Council: Led and managed a team of 100+ students across Classes X-XII, driving school initiatives and honing leadership, communication, and emotional intelligence.", bold: ["President, Student Council"] },
        { text: "School Topper: Achieved the highest score in the school with 98.5% in Class XII.", bold: ["School Topper", "98.5%"] },
      ],
    },
    {
      degree: "SSC (Class X)", school: "Indraprastha Global School",
      period: "Mar 2015 – Aug 2022", location: "Noida", color: "#3a2a1a", initial: "I",
      details: [
        { text: "House Captain & Technocrat Society President: Led 40+ students to win the annual rolling trophy and organised intra and inter-school computer competitions, winning accolades.", bold: ["House Captain & Technocrat Society President"] },
      ],
    },
  ],
  experience: [
    {
      role: "Finance Intern", org: "Sumitomo Mitsui Banking Corporation (SMBC)",
      period: "May 2025 – Jul 2025", location: "On-site, Delhi",
      logo: LOGOS.smbc, color: "#1a3a5c", initial: "S",
      bullets: [
        { text: "Contributed substantially in the ICFR segment of the Bank Financial Statement Audit.", bold: ["ICFR segment of the Bank Financial Statement Audit"] },
        { text: "Co-developed a peer comparison project benchmarking SMBC's performance against competitor institutions.", bold: ["peer comparison project"] },
        { text: "Researched and delivered an executive summary of the Yes Bank crisis directly under the Managing Director's guidance, while also practising Nostro Account Reconciliation on Oracle through daily collaboration with senior colleagues.", bold: ["Yes Bank crisis", "Nostro Account Reconciliation on Oracle"] },
        { text: "Strengthened practical skills in Excel, financial research, and corporate reporting, gaining first-hand exposure to how a major financial institution operates.", bold: ["Excel, financial research, and corporate reporting"] },
      ],
    },
    {
      role: "Research Intern", org: "Grameen Foundation India",
      period: "Jun 2024 – Jul 2024", location: "On-site, Delhi",
      logo: LOGOS.grameen, color: "#1a4a2a", initial: "G",
      bullets: [
        { text: "Supported women entrepreneurs across Delhi on a JP Morgan-funded project, researching online marketing channels and developing strategies to address key business challenges.", bold: ["JP Morgan-funded project"] },
        { text: "Strengthened skills in research, data analysis, and stakeholder engagement through hands-on fieldwork.", bold: ["research, data analysis, and stakeholder engagement"] },
      ],
    },
    {
      role: "Intern", org: "Fortis Hospital",
      period: "May 2023 – Jun 2023", location: "On-site, Noida",
      logo: LOGOS.fortis, color: "#4a1a1a", initial: "F",
      bullets: [
        { text: "Gained in-depth knowledge about crucial aspects of psychology.", bold: ["crucial aspects of psychology"] },
        { text: "Built rapport with patients and healthcare professionals.", bold: ["patients and healthcare professionals"] },
        { text: "Assisted in organising and preparing materials for psychological assessments and therapies.", bold: [] },
      ],
    },
  ],
  courses: [
    { name: "Financial Markets (with Honours)", org: "Yale University", date: "Aug 2023" },
    { name: "Narrative Economics", org: "Yale University", date: "Jul 2023" },
    { name: "Introduction to Corporate Finance", org: "Wharton, UPenn", date: "Mar 2024" },
    { name: "Online Winter School on Management", org: "IIM Jammu", date: "Jan 2022" },
  ],
  extracurriculars: [
    {
      title: "Azat | Founder", org: "Startup",
      period: "Mar 2026 – Present", color: "#2a1a4a", initial: "Az",
      bullets: [
        { text: "Identified a personal pain point around subscription overload and built a subscription management app from scratch after a single night of brainstorming.", bold: ["subscription management app"] },
        { text: "Currently refining the MVP, with a planned rollout to early users within 8 weeks for feedback and iteration.", bold: ["MVP"] },
      ],
    },
    {
      title: "Content Creator | @arshb.mp4", org: "Instagram",
      period: "Mar 2025 – Present", color: "#4a1a3a", initial: "CC",
      bullets: [
        { text: "Grew an Instagram page to 12,000 followers and 5 million views (and counting) through consistent, self-driven content creation and successfully monetised it.", bold: ["12,000 followers", "5 million views"] },
      ],
    },
    {
      title: "Secretary | Inspiria, The Business Society", org: "Shiv Nadar University",
      period: "Aug 2024 – Present", color: "#1a3a4a", initial: "In",
      bullets: [
        { text: "Managed a team of 30 Leads and 100 Volunteers, spearheading the SNIoE Business Conclave 2025 with a footfall of 400+ attendees, hosting speakers from Mastercard, Google, Hyundai, Aon, and others.", bold: ["SNIoE Business Conclave 2025", "400+ attendees"] },
        { text: "Spearheaded the initiation of a workshop series, with the first session conducted by a Senior Practice Manager at Wipro on Negotiation & Stakeholder Management.", bold: ["Negotiation & Stakeholder Management"] },
      ],
    },
    {
      title: "Content Lead | Entrepreneurship Cell", org: "Shiv Nadar University",
      period: "Aug 2024 – Present", color: "#1a4a2a", initial: "EC",
      bullets: [
        { text: "Driving digital outreach and creative content for the E-Cell.", bold: [] },
        { text: "Launched MVP Podcast; interviewed a founder whose agency helped startups raise $77M+.", bold: ["MVP Podcast", "$77M+"] },
      ],
    },
    {
      title: "Debating & Public Speaking", org: "Various platforms",
      period: "2022 – Present", color: "#3a2a1a", initial: "D",
      bullets: [
        { text: "Won 15+ debate competitions across intra and inter-school events, and 7+ Extempore competitions.", bold: ["15+ debate competitions", "7+ Extempore competitions"] },
        { text: "Shortlisted as a Child News Anchor for iGraasp (YouTube News channel), anchoring multiple episodes and gaining early experience in journalism and on-camera delivery.", bold: ["Child News Anchor for iGraasp"] },
      ],
    },
  ],
  achievements: [
    { title: "School Topper (98.5%)", date: "Mar 2024", note: "Mayoor School", compact: true },
    { title: "Scholar Award", date: "Mar 2023", note: "Mayoor School", compact: true },
    { title: "Article Featured in Hindustan Times", date: "Mar 2021", note: "" },
    { title: "Invited to Perform Live at a Delhi University College", date: "Feb 2026", note: "" },
    { title: "First Division — Music Exams (Years 1, 2 & 3, Vocal)", date: "2018–2020", note: "" },
    { title: "Fed 180 Homeless People on 18th Birthday", date: "2023", note: "Personal initiative", compact: false },
    { title: "Fed 190 Homeless People on 19th Birthday", date: "2024", note: "Personal initiative", compact: false },
  ],
};

// Section order: Education > Work > Extracurriculars > Skills > Certifications > Achievements > Contact
const SECTIONS = [
  { id: "intro",            icon: "◉", label: "Intro" },
  { id: "education",        icon: "◎", label: "Edu" },
  { id: "experience",       icon: "◈", label: "Work" },
  { id: "extracurriculars", icon: "◆", label: "Extra" },
  { id: "skills",           icon: "▣", label: "Skills" },
  { id: "certifications",   icon: "◇", label: "Certs" },
  { id: "achievements",     icon: "★", label: "Awards" },
  { id: "contact",          icon: "✉", label: "Contact" },
];

function RichText({ text, bold = [] }) {
  if (!bold.length) return <span>{text}</span>;
  let parts = [{ str: text, isBold: false }];
  bold.forEach(b => {
    parts = parts.flatMap(p => {
      if (p.isBold) return [p];
      const idx = p.str.indexOf(b);
      if (idx === -1) return [p];
      return [
        { str: p.str.slice(0, idx), isBold: false },
        { str: b, isBold: true },
        { str: p.str.slice(idx + b.length), isBold: false },
      ].filter(x => x.str);
    });
  });
  return <span>{parts.map((p, i) => p.isBold
    ? <strong key={i} style={{ color: T.white, fontWeight: 700 }}>{p.str}</strong>
    : <span key={i}>{p.str}</span>
  )}</span>;
}

function LogoAvatar({ logo, initial, color, size = 36 }) {
  const [err, setErr] = useState(false);
  if (logo && !err) {
    return (
      <div style={{
        width: size, height: size, borderRadius: "50%",
        background: "#0d0d0d",
        border: `1px solid ${T.border}`,
        display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0, overflow: "hidden",
      }}>
        <img src={logo} alt={initial} onError={() => setErr(true)}
          style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
    );
  }
  return (
    <div style={{
      width: size, height: size, borderRadius: "50%",
      background: color || "#222", border: `1px solid ${T.border}`,
      display: "flex", alignItems: "center", justifyContent: "center",
      flexShrink: 0, fontFamily: "'Cormorant Garamond', serif",
      fontSize: initial.length > 1 ? size * 0.27 : size * 0.38,
      fontWeight: 700, color: T.gold,
    }}>
      {initial}
    </div>
  );
}

function Card({ children, style = {}, onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <div onClick={onClick} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? T.bgCardHover : T.bgCard,
        border: `1px solid ${hov ? "#2e2e2e" : T.border}`,
        borderRadius: 10, padding: "1rem 1.2rem",
        transition: "all 0.18s", cursor: onClick ? "pointer" : "default", ...style
      }}>
      {children}
    </div>
  );
}

function SLabel({ children }) {
  return (
    <p style={{ fontFamily: "monospace", fontSize: "0.6rem", letterSpacing: "0.22em", textTransform: "uppercase", color: T.gold, marginBottom: "0.75rem", marginTop: 0 }}>
      {children}
    </p>
  );
}

function EntryCard({ logo, initial, color, title, subtitle, meta, bullets, expanded, onToggle }) {
  const wrapRef = useRef(null);
  const toggleRef = useRef(onToggle);
  useEffect(() => { toggleRef.current = onToggle; });

  useEffect(() => {
    if (!expanded) return;
    const el = wrapRef.current;
    if (!el) return;
    let initialFire = true;
    const obs = new IntersectionObserver(([entry]) => {
      if (initialFire) { initialFire = false; return; }
      if (!entry.isIntersecting) toggleRef.current();
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [expanded]);

  return (
    <div ref={wrapRef}>
    <Card style={{ marginBottom: "0.55rem" }} onClick={onToggle}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: "0.85rem" }}>
        <LogoAvatar logo={logo} initial={initial} color={color} size={36} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.5rem" }}>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem", fontWeight: 600, color: T.white, margin: 0, lineHeight: 1.3 }}>{title}</p>
            <span style={{ color: T.textDim, fontSize: "0.75rem", flexShrink: 0, marginTop: "2px", transition: "transform 0.38s ease", display: "inline-block", transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }}>▾</span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem 0.9rem", marginTop: "0.3rem" }}>
            {subtitle && <span style={{ fontSize: "0.77rem", color: T.textMid }}>{subtitle}</span>}
            {meta && meta.map((m, i) => (
              <span key={i} style={{ fontSize: "0.7rem", color: T.textDim, display: "flex", alignItems: "center", gap: "3px" }}>
                <span style={{ fontSize: "0.55rem", color: T.goldDim }}>◈</span> {m}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateRows: expanded ? "1fr" : "0fr", transition: "grid-template-rows 0.42s cubic-bezier(0.4,0,0.2,1)" }}>
        <div style={{ overflow: "hidden", opacity: expanded ? 1 : 0, transition: "opacity 0.42s ease" }}>
          {bullets && (
            <ul style={{ margin: "0.75rem 0 0 3rem", padding: 0, listStyle: "none" }}>
              {bullets.map((b, i) => (
                <li key={i} style={{ display: "flex", gap: "8px", marginBottom: "5px", fontSize: "0.81rem", color: T.textMid, lineHeight: 1.65 }}>
                  <span style={{ color: T.gold, flexShrink: 0, fontSize: "5px", marginTop: "8px" }}>◆</span>
                  <RichText text={b.text} bold={b.bold || []} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Card>
    </div>
  );
}

function AnimatedTagline({ goTo, children }) {
  const items = [
    { text: "Building a Startup",          color: T.gold,    section: "extracurriculars", cardKey: "ext0" },
    { text: "12K+ Followers on Instagram", color: "#a78bfa", section: "extracurriculars", url: "https://www.instagram.com/arshb.mp4/", cardKey: "ext1" },
    { text: "Ex-SMBC Intern",              color: "#6ee7b7", section: "experience",       cardKey: "exp0" },
    { text: "Secretary, Business Society", color: "#fbbf24", section: "extracurriculars", cardKey: "ext2" },
    { text: "Debater",                     color: "#f87171", section: "extracurriculars", cardKey: "ext4" },
  ];
  const [hovered, setHovered] = useState(null);
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: 0, alignItems: "center" }}>
      {items.map((item, i) => (
        <span key={i}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
          onClick={() => {
            if (item.url) { window.open(item.url, "_blank"); return; }
            goTo(item.section, item.cardKey);
          }}
          style={{
            padding: "7px 16px", borderRadius: 20, fontSize: "0.78rem",
            fontFamily: "monospace", letterSpacing: "0.04em",
            border: `1px solid ${hovered === i ? item.color : T.border}`,
            color: hovered === i ? item.color : T.textMid,
            background: hovered === i ? `${item.color}18` : T.bgCard,
            transition: "all 0.22s ease", cursor: "pointer",
            transform: hovered === i ? "translateY(-2px)" : "translateY(0)",
            boxShadow: hovered === i ? `0 4px 20px ${item.color}30` : "none",
            userSelect: "none",
          }}>
          {item.text}
        </span>
      ))}
      {children}
    </div>
  );
}

function CtaButton({ label, primary, onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <button onClick={onClick} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        padding: "12px 24px",
        background: hov ? T.white : (primary ? T.gold : "transparent"),
        color: hov ? T.bg : (primary ? T.bg : T.gold),
        border: `1px solid ${hov ? T.white : (primary ? T.gold : T.goldDim)}`,
        borderRadius: 10, fontFamily: "monospace", fontSize: "0.75rem",
        letterSpacing: "0.08em", cursor: "pointer",
        transition: "all 0.25s cubic-bezier(0.4,0,0.2,1)",
        transform: hov ? "translateY(-2px)" : "translateY(0)",
        boxShadow: hov ? (primary ? `0 6px 24px rgba(201,169,110,0.3)` : `0 6px 20px rgba(201,169,110,0.15)`) : "none",
        fontWeight: primary ? 700 : 400,
      }}>
      {label}
    </button>
  );
}

const CTA_BUTTONS = [
  { label: "Education",        section: "education",        primary: false },
  { label: "Work Experience", section: "experience",       primary: false },
  { label: "Extracurriculars", section: "extracurriculars", primary: false },
  { label: "Skills & Certificates",  section: "skills",           primary: false },
  { label: "Achievements",     section: "achievements",     primary: false },
  { label: "Contact Me",       section: "contact",          primary: false },
];

function DownloadCVButton() {
  const [hov, setHov] = useState(false);
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/ArshBaruah_CV_Final.pdf";
    link.download = "ArshBaruah_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <button onClick={handleDownload} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        padding: "7px 16px",
        background: hov ? T.gold : "transparent",
        color: hov ? T.bg : T.gold,
        border: `1px solid ${hov ? T.gold : T.goldDim}`,
        borderRadius: 20, fontFamily: "monospace", fontSize: "0.78rem",
        letterSpacing: "0.04em", cursor: "pointer",
        transition: "all 0.25s cubic-bezier(0.4,0,0.2,1)",
        transform: hov ? "translateY(-2px)" : "translateY(0)",
        boxShadow: hov ? "0 4px 20px rgba(201,169,110,0.25)" : "none",
        fontWeight: 400,
        display: "flex", alignItems: "center", gap: "6px",
      }}>
      Download CV
    </button>
  );
}


function TypewriterName() {
  const phases = [
    { full: "a student",   split: 2 },
    { full: "a learner",   split: 2 },
    { full: "a musician",  split: 2 },
    { full: "a builder",   split: 2 },
    { full: "an artist",   split: 3 },
    { full: "Arsh Baruah", split: 0 },
  ];
  const [phaseIdx, setPhaseIdx]     = useState(0);
  const [charCount, setCharCount]   = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDone, setIsDone]         = useState(false);
  const [cursorOn, setCursorOn]     = useState(true);

  // Blinking cursor — always runs
  useEffect(() => {
    const blink = setInterval(() => setCursorOn(v => !v), 520);
    return () => clearInterval(blink);
  }, []);

  // Typing / deleting machine
  // charCount goes 0 → fullLen (word) → fullLen+1 (period) then deletes back
  useEffect(() => {
    if (isDone) return;
    const phase    = phases[phaseIdx];
    const fullLen  = phase.full.length;
    const isFinal  = phaseIdx === phases.length - 1;
    const totalLen = fullLen + 1; // +1 for the period

    let t;
    if (!isDeleting) {
      if (charCount < fullLen) {
        // Type word characters
        t = setTimeout(() => setCharCount(c => c + 1), isFinal ? 140 : 110);
      } else if (charCount === fullLen) {
        // Type the period with a natural keystroke delay
        t = setTimeout(() => setCharCount(c => c + 1), 160);
      } else {
        // Period shown (charCount === totalLen)
        if (!isFinal) {
          t = setTimeout(() => setIsDeleting(true), 700);
        } else {
          setIsDone(true);
        }
      }
    } else {
      if (charCount > 0) {
        t = setTimeout(() => setCharCount(c => c - 1), 55);
      } else {
        t = setTimeout(() => {
          setPhaseIdx(i => i + 1);
          setIsDeleting(false);
        }, 280);
      }
    }
    return () => clearTimeout(t);
  }, [phaseIdx, charCount, isDeleting, isDone]);

  const phase      = phases[phaseIdx];
  const displayed  = phase.full.slice(0, Math.min(charCount, phase.full.length));
  const split      = phase.split;
  const whitePart  = displayed.slice(0, Math.min(split, displayed.length));
  const goldPart   = displayed.slice(split);
  const showPeriod = charCount > phase.full.length; // period is the +1 char

  return (
    <span>
      {whitePart && <span style={{ color: T.white }}>{whitePart}</span>}
      {goldPart  && <span style={{ color: T.gold  }}>{goldPart}</span>}
      {showPeriod && <span style={{ color: T.white }}>.</span>}
      <span style={{
        display: "inline-block", width: "2px",
        height: "0.72em", background: T.gold,
        marginLeft: "3px", verticalAlign: "0",
        opacity: cursorOn ? 1 : 0, transition: "opacity 0.08s",
      }} />
    </span>
  );
}

function BigNavButton({ label, icon, onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <button onClick={onClick} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        padding: "0 16px",
        height: "100%",
        minHeight: "120px",
        background: hov ? "rgba(201,169,110,0.08)" : T.bgCard,
        color: hov ? T.gold : T.textMid,
        border: `1px solid ${hov ? T.goldDim : T.border}`,
        borderRadius: 12,
        fontFamily: "monospace",
        fontSize: "0.9rem",
        letterSpacing: "0.06em",
        cursor: "pointer",
        transition: "all 0.25s cubic-bezier(0.4,0,0.2,1)",
        transform: hov ? "translateY(-3px)" : "translateY(0)",
        boxShadow: hov ? "0 8px 24px rgba(201,169,110,0.12)" : "none",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        textAlign: "center",
        width: "100%",
      }}>
      <span style={{ fontSize: "1.3rem", opacity: hov ? 1 : 0.45, transition: "opacity 0.25s" }}>{icon}</span>
      <span>{label}</span>
    </button>
  );
}

function CustomCursor() {
  // Don't render on touch devices — cursor has no meaning there
  const isTouch = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
  const dotRef = useRef(null);
  useEffect(() => {
    if (isTouch) return;
    const move = (e) => {
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + "px";
        dotRef.current.style.top = e.clientY + "px";
        dotRef.current.style.opacity = "1";
      }
    };
    const hide = () => { if (dotRef.current) dotRef.current.style.opacity = "0"; };
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", hide);
    return () => { window.removeEventListener("mousemove", move); document.removeEventListener("mouseleave", hide); };
  }, []);
  if (isTouch) return null;
  return (
    <div ref={dotRef} style={{
      position: "fixed", width: 9, height: 9, borderRadius: "50%",
      background: "rgba(255,255,255,0.82)", pointerEvents: "none",
      transform: "translate(-50%,-50%)", zIndex: 99999,
      opacity: 0, transition: "opacity 0.2s",
      mixBlendMode: "difference",
    }} />
  );
}


export default function Portfolio() {
  const [expanded, setExpanded] = useState({});
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [activePage, setActivePage] = useState("intro");
  const rightRef = useRef(null);
  const pageRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navigate = (to, back = false, openKey = null) => {
    const dir = back ? -1 : 1;
    const el = pageRef.current;
    if (!el) return;
    el.style.transition = "transform 0.28s ease, opacity 0.28s ease";
    el.style.opacity = "0";
    el.style.transform = `translateX(${-55 * dir}px)`;
    setTimeout(() => {
      setExpanded({});           // always start with cards closed
      setActivePage(to);
      if (rightRef.current) rightRef.current.scrollTop = 0;
      el.style.transition = "none";
      el.style.opacity = "0";
      el.style.transform = `translateX(${55 * dir}px)`;
      requestAnimationFrame(() => requestAnimationFrame(() => {
        el.style.transition = "transform 0.38s ease, opacity 0.38s ease";
        el.style.opacity = "1";
        el.style.transform = "translateX(0)";
        // After slide-in finishes, open the target card so user sees it expand
        if (openKey) {
          setTimeout(() => setExpanded({ [openKey]: true }), 420);
        }
      }));
    }, 285);
  };

  const toggle = (key) => setExpanded(p => {
    if (p[key]) return { ...p, [key]: false };
    const prefix = key.replace(/\d+$/, '');
    const cleared = Object.fromEntries(Object.keys(p).map(k => [k, k.startsWith(prefix) ? false : p[k]]));
    return { ...cleared, [key]: true };
  });
  const openCard = (key) => setExpanded(p => ({ ...p, [key]: true }));

  const BackButton = () => (
    <button onClick={() => navigate("intro", true)}
      onMouseEnter={e => { e.currentTarget.style.borderColor = T.gold; e.currentTarget.style.color = T.gold; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = T.border; e.currentTarget.style.color = T.textMid; }}
      style={{ background: "none", border: `1px solid ${T.border}`, borderRadius: 8, color: T.textMid, fontFamily: "monospace", fontSize: "0.65rem", letterSpacing: "0.08em", cursor: "pointer", padding: "6px 16px", display: "flex", alignItems: "center", gap: "6px", marginBottom: "1.8rem", transition: "all 0.18s" }}>
      ← Back
    </button>
  );

  const renderPage = () => {
    if (activePage === "intro") {
      return (
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem", flex: 1 }}>
          <div>
            <p style={{ fontFamily: "monospace", fontSize: "0.62rem", letterSpacing: "0.22em", color: T.gold, textTransform: "uppercase", marginBottom: "0.55rem" }}>Portfolio</p>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 600, lineHeight: 1.1, margin: 0, color: T.white }}>
              Hi, I&apos;m <TypewriterName />
            </h1>
          </div>
          <div style={{ marginTop: "-0.6rem" }}>
            <AnimatedTagline goTo={(id, cardKey) => navigate(id, false, cardKey)}>
              <DownloadCVButton />
            </AnimatedTagline>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(3, 1fr)", gridAutoRows: "1fr", gap: "12px", flex: 1 }}>
            {CTA_BUTTONS.map(({ label, section }) => {
              const sec = SECTIONS.find(s => s.id === section);
              return <BigNavButton key={section} label={label} icon={sec?.icon} onClick={() => navigate(section)} />;
            })}
          </div>
        </div>
      );
    }

    return (
      <div>
        <BackButton />
        {activePage === "education" && (
          <>
            <SLabel>Education</SLabel>
            {data.education.map((edu, i) => (
              <EntryCard key={i} initial={edu.initial} color={edu.color}
                title={edu.school} subtitle={edu.degree} meta={[edu.period, edu.location]}
                bullets={edu.details} expanded={expanded["edu" + i]} onToggle={() => toggle("edu" + i)} />
            ))}
          </>
        )}
        {activePage === "experience" && (
          <>
            <SLabel>Work Experience</SLabel>
            {data.experience.map((exp, i) => (
              <EntryCard key={i} logo={exp.logo} initial={exp.initial} color={exp.color}
                title={exp.role} subtitle={exp.org} meta={[exp.period, exp.location]}
                bullets={exp.bullets} expanded={expanded["exp" + i]} onToggle={() => toggle("exp" + i)} />
            ))}
          </>
        )}
        {activePage === "extracurriculars" && (
          <>
            <SLabel>Extracurriculars</SLabel>
            {data.extracurriculars.map((item, i) => (
              <EntryCard key={i} initial={item.initial} color={item.color}
                title={item.title} subtitle={item.org} meta={[item.period]}
                bullets={item.bullets} expanded={expanded["ext" + i]} onToggle={() => toggle("ext" + i)} />
            ))}
          </>
        )}
        {activePage === "skills" && (
          <>
            <SLabel>Skills &amp; Certifications</SLabel>
            <p style={{ fontFamily: "monospace", fontSize: "0.7rem", color: T.white, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "0.7rem", fontWeight: 700 }}>Technical</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "7px", marginBottom: "1rem" }}>
              {data.skills.technical.map(s => (
                <span key={s} style={{ padding: "7px 14px", background: T.bgCard, border: `1px solid ${T.border}`, borderRadius: 8, fontSize: "0.79rem", color: T.textMid, transition: "all 0.18s", cursor: "default" }}
                  onMouseEnter={e => { e.target.style.borderColor = T.gold; e.target.style.color = T.gold; e.target.style.background = T.goldGlow; }}
                  onMouseLeave={e => { e.target.style.borderColor = T.border; e.target.style.color = T.textMid; e.target.style.background = T.bgCard; }}>{s}</span>
              ))}
            </div>
            <p style={{ fontFamily: "monospace", fontSize: "0.7rem", color: T.white, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "0.7rem", fontWeight: 700 }}>Soft Skills</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "7px", marginBottom: "1.8rem" }}>
              {data.skills.soft.map(s => (
                <span key={s} style={{ padding: "7px 14px", background: T.bgCard, border: `1px solid ${T.border}`, borderRadius: 8, fontSize: "0.79rem", color: T.textMid, transition: "all 0.18s", cursor: "default" }}
                  onMouseEnter={e => { e.target.style.borderColor = T.goldDim; e.target.style.color = T.gold; e.target.style.background = T.goldGlow; }}
                  onMouseLeave={e => { e.target.style.borderColor = T.border; e.target.style.color = T.textMid; e.target.style.background = T.bgCard; }}>{s}</span>
              ))}
            </div>
            <p style={{ fontFamily: "monospace", fontSize: "0.7rem", color: T.white, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "0.7rem", fontWeight: 700 }}>Certifications &amp; Courses</p>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "0.45rem" }}>
              {data.courses.map((c, i) => (
                <Card key={i} style={{ padding: "0.85rem 1rem" }}>
                  <p style={{ fontSize: "0.82rem", fontWeight: 700, color: T.text, marginBottom: "4px" }}>{c.name}</p>
                  <p style={{ fontFamily: "monospace", fontSize: "0.6rem", color: T.textDim }}>{c.org} · {c.date}</p>
                </Card>
              ))}
            </div>
          </>
        )}
        {activePage === "achievements" && (
          <>
            <SLabel>Achievements</SLabel>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              {data.achievements.map((a, i) => (
                <Card key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem", padding: a.compact ? "0.45rem 1.1rem" : "0.8rem 1.1rem" }}>
                  <div>
                    <p style={{ fontSize: a.compact ? "0.8rem" : "0.85rem", fontWeight: 600, color: T.text, margin: 0 }}>{a.title}</p>
                    {a.note && <p style={{ fontFamily: "monospace", fontSize: "0.6rem", color: T.textDim, margin: "2px 0 0" }}>{a.note}</p>}
                  </div>
                  {a.date && <span style={{ fontFamily: "monospace", fontSize: "0.62rem", color: T.gold, whiteSpace: "nowrap", flexShrink: 0 }}>{a.date}</span>}
                </Card>
              ))}
            </div>
          </>
        )}
        {activePage === "contact" && (
          <>
            <SLabel>Contact</SLabel>
            <Card style={{ padding: "1.8rem" }}>
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.9rem", color: T.white, fontWeight: 500, margin: "0 0 1.3rem", lineHeight: 1.2 }}>
                Let&apos;s connect<span style={{ color: T.gold }}>.</span>
              </p>
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "0.8rem" }}>
                {[
                  { label: "Email", value: data.email, href: "mailto:" + data.email },
                  { label: "Phone", value: data.phone, href: "tel:" + data.phone },
                  { label: "LinkedIn", value: "Arsh Baruah", href: data.linkedin },
                  { label: "Location", value: data.location, href: null },
                ].map(({ label, value, href }) => (
                  <div key={label} style={{ padding: "0.9rem 1rem", background: "#0c0c0c", borderRadius: 8, border: `1px solid ${T.border}` }}>
                    <p style={{ fontFamily: "monospace", fontSize: "0.57rem", color: T.textDim, letterSpacing: "0.14em", textTransform: "uppercase", margin: "0 0 4px" }}>{label}</p>
                    {href
                      ? <a href={href} target="_blank" rel="noopener noreferrer"
                          style={{ fontSize: "0.8rem", color: T.textMid, textDecoration: "none", transition: "color 0.2s" }}
                          onMouseEnter={e => e.target.style.color = T.gold}
                          onMouseLeave={e => e.target.style.color = T.textMid}>{value}</a>
                      : <p style={{ fontSize: "0.8rem", color: T.textMid, margin: 0 }}>{value}</p>
                    }
                  </div>
                ))}
              </div>
            </Card>
          </>
        )}
        <p style={{ fontFamily: "monospace", fontSize: "0.57rem", color: T.textDim, letterSpacing: "0.12em", textAlign: "center", paddingBottom: "1rem", marginTop: "2rem" }}>
          Last updated: March 2026 · Arsh Baruah
        </p>
      </div>
    );
  };

  return (
    <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", height: "100vh", background: T.bg, fontFamily: "'Lato', sans-serif", color: T.text, overflow: "hidden" }}>
      <CustomCursor />
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />

      {/* SIDEBAR */}
      <aside style={{
        width: isMobile ? "100%" : 272,
        flexShrink: 0,
        background: T.sidebar,
        borderRight: isMobile ? "none" : `1px solid ${T.border}`,
        borderBottom: isMobile ? `1px solid ${T.border}` : "none",
        overflowY: isMobile ? "visible" : "auto",
        padding: isMobile ? "1.2rem 1.2rem 1rem" : "1.8rem 1.5rem 2rem 1.8rem",
        display: "flex",
        flexDirection: isMobile ? "row" : "column",
        flexWrap: isMobile ? "wrap" : "nowrap",
        gap: isMobile ? "0.8rem 1.5rem" : "1.8rem",
        alignItems: isMobile ? "flex-start" : "stretch",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: isMobile ? "10px" : "0px", flexDirection: isMobile ? "row" : "column", alignItems: isMobile ? "center" : "flex-start" }}>
          <div style={{ width: isMobile ? 44 : 58, height: isMobile ? 44 : 58, borderRadius: "50%", background: "linear-gradient(135deg, #1a1a2e 0%, #2a1a0e 100%)", border: `2px solid ${T.gold}`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: isMobile ? "0" : "0.8rem", flexShrink: 0, boxShadow: "0 0 22px rgba(201,169,110,0.25)" }}>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: isMobile ? "1.05rem" : "1.45rem", fontWeight: 700, color: T.gold, letterSpacing: "0.02em" }}>AB</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: isMobile ? "1.1rem" : "1.35rem", fontWeight: 600, color: T.white, margin: 0, lineHeight: 1.2 }}>{data.name}</p>
            <svg title="Verified" width="20" height="20" viewBox="0 0 20 20" fill="none"
              style={{ flexShrink: 0, marginBottom: "1px", filter: "drop-shadow(0 0 5px rgba(201,169,110,0.55))" }}>
              <polygon
                points="10,1 11.68,3.72 14.5,2.21 14.6,5.4 17.79,5.5 16.28,8.32 19,10 16.28,11.68 17.79,14.5 14.6,14.6 14.5,17.79 11.68,16.28 10,19 8.32,16.28 5.5,17.79 5.4,14.6 2.21,14.5 3.72,11.68 1,10 3.72,8.32 2.21,5.5 5.4,5.4 5.5,2.21 8.32,3.72"
                fill={T.gold}
              />
              <path d="M7 10.3L9.1 12.4L13.2 7.8" stroke="#0a0a0a" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        <div style={{ display: isMobile ? "none" : "block" }}>
          <SLabel>About</SLabel>
          <p style={{ fontSize: "0.80rem", color: T.textMid, lineHeight: 1.8, margin: 0, fontWeight: 300 }}>
            Economics &amp; Finance student interested in event-driven <b style={{ fontWeight: 700, color: T.text }}>investing</b>, corporate <b style={{ fontWeight: 700, color: T.text }}>finance</b>, and <b style={{ fontWeight: 700, color: T.text }}>technology</b>. I debate, volunteer, and organise events. Currently building a startup alongside growing a monetised Instagram page to <b style={{ fontWeight: 700, color: T.text }}>12,000 followers</b> and 5 million views (and counting!).
          </p>
        </div>

        <div style={{ display: isMobile ? "none" : "block" }}>
          <SLabel>Technical Skills</SLabel>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginBottom: "0.9rem" }}>
            {data.skills.technical.map(s => (
              <span key={s} style={{ padding: "4px 10px", background: "#161616", border: `1px solid ${T.border}`, borderRadius: 20, fontSize: "0.71rem", color: T.textMid, transition: "all 0.2s", cursor: "default" }}
                onMouseEnter={e => { e.target.style.borderColor = T.gold; e.target.style.color = T.gold; }}
                onMouseLeave={e => { e.target.style.borderColor = T.border; e.target.style.color = T.textMid; }}>{s}</span>
            ))}
          </div>
          <SLabel>Soft Skills</SLabel>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
            {data.skills.soft.map(s => (
              <span key={s} style={{ padding: "4px 10px", background: "#161616", border: `1px solid ${T.border}`, borderRadius: 20, fontSize: "0.71rem", color: T.textMid, transition: "all 0.2s", cursor: "default" }}
                onMouseEnter={e => { e.target.style.borderColor = T.goldDim; e.target.style.color = T.gold; }}
                onMouseLeave={e => { e.target.style.borderColor = T.border; e.target.style.color = T.textMid; }}>{s}</span>
            ))}
          </div>
        </div>
        <div style={{ display: isMobile ? "none" : "block", marginTop: "auto" }}>
          <SLabel>Languages</SLabel>
          <div style={{ display: "flex", flexDirection: "row", gap: "6px", flexWrap: "nowrap" }}>
            {data.languages.map(l => (
              <span key={l} style={{ padding: "3px 9px", border: `1px solid ${T.goldDim}`, borderRadius: 20, fontSize: "0.67rem", color: T.gold, background: "rgba(201,169,110,0.06)", whiteSpace: "nowrap" }}>{l}</span>
            ))}
          </div>
        </div>
      </aside>

      {/* RIGHT PANEL */}
      <div ref={rightRef} style={{ flex: 1, overflowY: "scroll", WebkitOverflowScrolling: "touch", padding: activePage === "intro" ? (isMobile ? "1.5rem 1rem 5rem" : "2rem 2.5rem 2rem 2.5rem") : (isMobile ? "1.5rem 1rem 5rem" : "2rem 2.5rem 5rem 2.5rem"), display: "flex", flexDirection: "column" }}>
        <div ref={pageRef} style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          {renderPage()}
        </div>
      </div>

      {/* FLOATING NAV — hidden on intro */}
      {activePage !== "intro" && (
        <div style={{ position: "fixed", bottom: isMobile ? "0.5rem" : "1.4rem", left: "50%", transform: "translateX(-50%)", zIndex: 200, background: "rgba(12,12,12,0.96)", border: `1px solid ${T.border}`, borderRadius: 40, padding: "7px 12px", backdropFilter: "blur(16px)", display: "flex", gap: "2px", boxShadow: "0 8px 40px rgba(0,0,0,0.6)" }}>
          {SECTIONS.filter(s => s.id !== "intro" && s.id !== "certifications").map(s => (
            <button key={s.id} onClick={() => navigate(s.id)} title={s.label}
              style={{ background: activePage === s.id ? T.goldGlow : "transparent", border: activePage === s.id ? `1px solid ${T.goldDim}` : "1px solid transparent", borderRadius: 30, padding: "5px 11px", cursor: "pointer", transition: "all 0.18s", display: "flex", alignItems: "center", gap: "4px" }}>
              <span style={{ fontSize: "0.6rem", color: activePage === s.id ? T.gold : T.textDim }}>{s.icon}</span>
              <span style={{ fontSize: "0.57rem", fontFamily: "monospace", letterSpacing: "0.06em", color: activePage === s.id ? T.gold : T.textDim, textTransform: "uppercase" }}>{s.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}