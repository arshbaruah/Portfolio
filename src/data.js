// ---------------------------------------------------------------------------
// All site content lives here. Edit this file to update the portfolio.
// ---------------------------------------------------------------------------

export const socials = {
  linkedin: "https://www.linkedin.com/in/arshbaruah/",
  instagram: "https://www.instagram.com/arshb.mp4/",
  email: "arshbaruah85@gmail.com",
};

export const about = {
  tagline: ["Economics", "Finance", "Music", "Building Azat"],
  currently: "Currently interning at The Body Shop and building Azat.",
  bio: "I'm an Economics & Finance undergraduate at Shiv Nadar University (Class of 2028), curious about corporate finance, investing, and technology. These days I'm learning by building Azat, a subscription management app, and by creating music content that has somehow found an audience of 12,000 people. I also debate, volunteer, and help organise events on campus.",
  education: "BSc Economics & Finance, Shiv Nadar University · Class of 2028",
  cv: "/ArshBaruah_CV_Final.pdf",
};

// Homepage preview sections
export const home = {
  career: {
    intro: "Internships across banking, retail, and development work.",
    items: [
      { title: "The Body Shop (Quest Retail)", note: "Store analytics and market basket analysis" },
      { title: "Voyita", note: "Founders' Office at a group travel startup" },
      { title: "SMBC", note: "Finance intern, bank financial statement audit" },
    ],
    link: "/internships",
    linkLabel: "All internships",
  },
  personalProjects: {
    intro: "Things I'm building and writing outside class.",
    items: [
      { title: "Azat", note: "Subscription management app, in development" },
      { title: "The Inflection Point", note: "Peer stock analysis with friends" },
    ],
    link: "/projects",
    linkLabel: "All projects",
  },
  extracurriculars: {
    intro: "Campus roles, music, and the occasional stage.",
    items: [
      { title: "Inspiria, The Business Club", note: "Secretary, SNIoE Business Conclave 2025" },
      { title: "Entrepreneurship Cell", note: "Content Lead, launched the MVP Podcast" },
      { title: "Music & content", note: "Guitarist and creator, brand collaborations" },
    ],
    link: "/music",
    linkLabel: "Music & more",
  },
};

export const internships = [
  {
    role: "Intern",
    org: "The Body Shop (Quest Retail)",
    period: "Jun 2026 – Aug 2026",
    current: true,
    desc: "Created store visit reports and worked on store analytics, using AI to run market basket analysis. Analysed de-growth stage stores and helped put interventions in place to lift sales. To get a fuller picture of the FMCG sector, I also spent time with the marketing/branding and accounts/corporate finance teams.",
  },
  {
    role: "Founders' Office Intern",
    org: "Voyita",
    period: "2026",
    current: true,
    desc: "Voyita is a group travel management startup. I helped across operations, content, and marketing, and worked on bringing in sales qualified leads.",
  },
  {
    role: "Finance Intern",
    org: "Sumitomo Mitsui Banking Corporation (SMBC)",
    period: "May 2025 – Jul 2025",
    current: false,
    desc: "Contributed to the ICFR segment of the bank's financial statement audit and co-developed a peer comparison benchmarking SMBC against other institutions. Prepared an executive summary of the Yes Bank crisis under the Managing Director's guidance, and practised Nostro account reconciliation on Oracle.",
  },
  {
    role: "Research Intern",
    org: "Grameen Foundation India",
    period: "Jun 2024 – Jul 2024",
    current: false,
    desc: "Supported women entrepreneurs across Delhi on a JP Morgan funded project, researching online marketing channels and helping develop strategies for their key business challenges.",
  },
];

export const projects = [
  {
    title: "Azat",
    date: "Mar 2026 – Present",
    desc: "A subscription management app for the Indian market. Started from a personal pain point around subscription overload; currently refining the MVP for an early user rollout.",
    status: "In development",
    tech: ["React", "Python", "Razorpay", "DPDP Act 2023 compliant"],
  },
  {
    title: "The Inflection Point",
    date: "2025 – Present",
    desc: "A peer stock analysis initiative. A small group of us research and discuss equity ideas together, mostly as a way to learn valuation by doing.",
    status: "Active",
    tech: ["Equity Research", "Valuation"],
  },
  {
    title: "MVP Podcast",
    date: "2024 – Present",
    desc: "Launched the Entrepreneurship Cell's podcast. Our first guest was a founder whose agency has helped startups raise over $77M.",
    status: "Active",
    tech: ["Content", "Interviewing"],
  },
];

// Learning programs and recognitions
export const programs = [
  {
    title: "McKinsey Forward Program",
    note: "Structured program on problem solving, communication, and adaptability.",
  },
  {
    title: "IIM Udaipur Summer School",
    note: "Completed the summer school with a Top 10% award.",
  },
  {
    title: "Financial Markets (with Honours), Yale University",
    note: "Online course, 2023.",
  },
  {
    title: "Introduction to Corporate Finance, Wharton",
    note: "Online course, 2024.",
  },
];

export const music = {
  handle: "@arshb.mp4",
  followers: "12K",
  views: "5M+",
  blurb: "I play guitar and make music content on Instagram. What started as a hobby grew into a page with 12,000 followers and over 5 million views, along with a few brand collaborations I'm grateful for.",
  collabs: [
    { brand: "Sony Sab", desc: "Branded content for the television network." },
    { brand: "Thums Up", desc: "Campaign collaboration with the cola brand." },
    { brand: "Dhurandhar", desc: "Promotional content for the film's release." },
    { brand: "Gini", desc: "Brand partnership content." },
  ],
  achievements: [
    { title: "School Topper, 98.5% in Class XII", note: "Mayoor School, 2024" },
    { title: "Vocal Music, 3rd Year Pass", note: "Prayag Sangeet Samiti" },
    { title: "Performed live at a Delhi University college", note: "Feb 2026" },
    { title: "Article featured in Hindustan Times", note: "2021" },
  ],
};
