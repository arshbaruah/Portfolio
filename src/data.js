// ---------------------------------------------------------------------------
// All site content lives here. Edit this file to update the portfolio.
// ---------------------------------------------------------------------------

export const socials = {
  linkedin: "https://www.linkedin.com/in/arshbaruah/",
  instagram: "https://www.instagram.com/arshb.mp4/",
  email: "arshbaruah85@gmail.com",
};

export const about = {
  tagline: ["Economics", "Finance", "Building Stuff", "Solving Problems", "Creating Content"],
  bio: "I'm an Economics & Finance undergraduate at Shiv Nadar University (Class of 2028), curious about corporate finance, investing, and technology. These days I'm learning by building Azat, a subscription management app, and by creating music content that has somehow found an audience of 12,000 people. I also debate, volunteer, and help organise events on campus.",
  education: "BSc Economics & Finance, Shiv Nadar University · Class of 2028",
  cv: "/ArshBaruah_CV_Final.pdf",
};

// Homepage preview sections
export const home = {
  career: {
    intro: "Internships across banking, retail, and development work.",
    items: [
      { title: "The Body Shop (Quest Retail)", note: "Operations Intern" },
      { title: "Voyita", note: "Founders' Office Intern" },
      { title: "SMBC", note: "Finance Intern" },
    ],
    link: "/internships",
    linkLabel: "All Internships",
  },
  personalProjects: {
    intro: "Things I'm building and writing outside class.",
    items: [
      { title: "Azat", note: "Founder" },
      { title: "The Inflection Point", note: "Peer Stock Analysis" },
      { title: "MVP Podcast", note: "Host" },
    ],
    link: "/projects",
    linkLabel: "All Projects",
  },
  extracurriculars: {
    intro: "Campus roles, music, and the occasional stage.",
    items: [
      { title: "Inspiria, The Business Club", note: "Secretary" },
      { title: "Entrepreneurship Cell", note: "Content Lead" },
      { title: "@arshb.mp4", note: "Content Creator" },
    ],
    link: "/extracurriculars",
    linkLabel: "More",
  },
};

export const internships = [
  {
    role: "Operations Intern",
    org: "The Body Shop (Quest Retail)",
    period: "Jun 2026 – Aug 2026",
    current: true,
    desc: "Store visit reports, store analytics, and AI assisted market basket analysis. Analysed de-growth stage stores and helped plan interventions to lift sales, with time across the marketing and corporate finance teams.",
  },
  {
    role: "Founders' Office Intern",
    org: "Voyita",
    period: "2026",
    current: true,
    desc: "Helped across operations, content, and marketing at a group travel management startup, and worked on bringing in sales qualified leads.",
  },
  {
    role: "Finance Intern",
    org: "SMBC",
    period: "May 2025 – Jul 2025",
    current: false,
    desc: "Worked on the ICFR segment of the bank's financial statement audit, a peer comparison study, and Nostro account reconciliation on Oracle.",
  },
  {
    role: "Research Intern",
    org: "Grameen Foundation India",
    period: "Jun 2024 – Jul 2024",
    current: false,
    desc: "Researched online marketing channels for women entrepreneurs across Delhi on a JP Morgan funded project.",
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
    date: "2024 – 2025",
    desc: "Launched the Entrepreneurship Cell's podcast. Our first guest was a founder whose agency has helped startups raise over $77M.",
    status: "Completed",
    tech: ["Content", "Interviewing"],
  },
];

// Learning programs and recognitions
export const programs = [
  {
    title: "McKinsey Forward Program",
    note: "Problem solving, communication, adaptability",
  },
  {
    title: "IIM Udaipur Summer School",
    note: "Top 10% award",
  },
  {
    title: "Financial Markets (with Honours), Yale University",
    note: "Online course, 2023",
  },
  {
    title: "Introduction to Corporate Finance, Wharton",
    note: "Online course, 2024",
  },
];

export const extras = {
  roles: [
    {
      title: "Inspiria, The Business Club",
      role: "Secretary",
      note: "Helped organise the SNIoE Business Conclave 2025 with 400+ attendees.",
    },
    {
      title: "Entrepreneurship Cell",
      role: "Content Lead",
      note: "Drove digital content and launched the MVP Podcast.",
    },
    {
      title: "Debating & Public Speaking",
      role: "",
      note: "15+ debate wins across school and university events.",
    },
  ],
  content: {
    handle: "@arshb.mp4",
    followers: "12K",
    views: "5M+",
    blurb: "I make guitar and music content on Instagram. What started as a hobby grew into a monetised page with a few brand collaborations along the way.",
  },
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
  hobbies: [
    "Guitar & Music",
    "Solving Sudoku",
    "Public Speaking",
    "Debating",
    "Content Creation",
    "Volunteering",
  ],
};
