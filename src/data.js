// ---------------------------------------------------------------------------
// All site content lives here. Edit this file to update the portfolio.
// Items marked TODO are drafted from the redesign brief — verify dates/links.
// ---------------------------------------------------------------------------

export const socials = {
  linkedin: "https://www.linkedin.com/in/arshbaruah/",
  github: "https://github.com/arshbaruah",
  instagram: "https://www.instagram.com/arshb.mp4/",
  email: "arshbaruah85@gmail.com",
};

export const about = {
  tagline: ["Economics", "Finance", "Music", "Building Azat"],
  bio: "I'm an Economics & Finance student at Shiv Nadar University, interested in event-driven investing, corporate finance, and technology. I'm currently building Azat, a subscription management startup, while growing a monetised Instagram page past 12,000 followers and 5 million views. Off the clock, I play guitar, debate, and organise events.",
  highlights: [
    "Secretary, Inspiria — SNIoE Business Club",
    "Founder, Azat",
    "Content Creator — 12K followers",
  ],
};

export const featured = [
  {
    title: "The Body Shop + Voyita",
    desc: "Market basket analysis and retail data science across two concurrent internships.",
    link: "/internships",
    linkLabel: "View internships",
  },
  {
    title: "Azat",
    desc: "Subscription management platform for the Indian market, currently in development.",
    link: "/projects",
    linkLabel: "View projects",
  },
  {
    title: "Music & Content",
    desc: "Guitarist and creator — 12K followers, brand collabs with Sony Sab, Thums Up, and more.",
    link: "/music",
    linkLabel: "View music",
  },
];

export const internships = [
  {
    role: "Data Analytics Intern", // TODO: confirm exact title
    org: "The Body Shop (Quest Retail)",
    period: "May 2026 – Present", // TODO: confirm dates
    current: true,
    desc: "Working on retail analytics for The Body Shop's India operations. Built a market basket analysis pipeline to surface product affinities and inform cross-sell strategy.",
    metric: "Market basket analysis using Python/mlxtend",
    tech: ["Python", "Pandas", "mlxtend", "Scikit-learn"],
  },
  {
    role: "Intern", // TODO: confirm exact title
    org: "Voyita",
    period: "2026", // TODO: confirm dates
    current: true,
    desc: "Concurrent internship alongside The Body Shop role.", // TODO: add 2-3 sentence description
    metric: null,
    tech: ["Python", "Pandas"],
  },
  {
    role: "Finance Intern",
    org: "Sumitomo Mitsui Banking Corporation (SMBC)",
    period: "May 2025 – Jul 2025",
    current: false,
    desc: "Contributed to the ICFR segment of the bank's financial statement audit and co-developed a peer comparison benchmarking SMBC against competitor institutions. Delivered an executive summary of the Yes Bank crisis under the Managing Director's guidance.",
    metric: "Nostro account reconciliation on Oracle",
    tech: ["Excel", "Oracle", "Financial Research"],
  },
  {
    role: "Research Intern",
    org: "Grameen Foundation India",
    period: "Jun 2024 – Jul 2024",
    current: false,
    desc: "Supported women entrepreneurs across Delhi on a JP Morgan-funded project, researching online marketing channels and developing strategies for key business challenges.",
    metric: "JP Morgan-funded field project",
    tech: ["Research", "Data Analysis", "Fieldwork"],
  },
];

export const projects = [
  {
    title: "Azat",
    date: "Mar 2026 – Present",
    desc: "Subscription management platform for the Indian market — track, manage, and cancel subscriptions in one place.",
    status: "In development",
    tech: ["React", "Python", "Razorpay", "DPDP Act 2023 compliant"],
    metric: "MVP rollout to early users planned",
    link: null, // TODO: add demo link when live
    linkLabel: "View demo",
  },
  {
    title: "The Inflection Point",
    date: "2025 – Present", // TODO: confirm dates
    desc: "Peer stock analysis initiative — collaborative equity research and idea discussion with fellow students.", // TODO: refine description
    status: "Active",
    tech: ["Equity Research", "Valuation", "Financial Modelling"],
    metric: null,
    link: null, // TODO: add link if available
    linkLabel: "Read more",
  },
  {
    title: "MVP Podcast",
    date: "2024 – Present",
    desc: "Launched the Entrepreneurship Cell's podcast; interviewed a founder whose agency helped startups raise $77M+.",
    status: "Active",
    tech: ["Content", "Interviewing", "Production"],
    metric: "$77M+ raised by featured founder's clients",
    link: null,
    linkLabel: "Listen",
  },
];

export const music = {
  handle: "@arshb.mp4",
  followers: "12K",
  views: "5M+",
  blurb: "Content creator and guitarist. Grew a monetised Instagram page to 12,000 followers and 5 million views through consistent, self-driven content.",
  collabs: [
    {
      brand: "Sony Sab",
      desc: "Branded content collaboration for the television network.", // TODO: 1-line detail
      link: "https://www.instagram.com/arshb.mp4/", // TODO: link specific reel
    },
    {
      brand: "Thums Up",
      desc: "Campaign collaboration with the iconic Indian cola brand.",
      link: "https://www.instagram.com/arshb.mp4/",
    },
    {
      brand: "Dhurandhar",
      desc: "Promotional content for the film release.",
      link: "https://www.instagram.com/arshb.mp4/",
    },
    {
      brand: "Gini",
      desc: "Brand partnership content.",
      link: "https://www.instagram.com/arshb.mp4/",
    },
  ],
  achievements: [
    { title: "School Topper — 98.5% in Class XII", note: "Mayoor School, 2024" },
    { title: "Synapse 2026 — podium finish", note: "2026" }, // TODO: confirm detail
    { title: "Prayag Sangeet Samiti — distinctions", note: "Vocal music" },
    { title: "Invited to perform live at a Delhi University college", note: "Feb 2026" },
    { title: "Article featured in Hindustan Times", note: "2021" },
  ],
};
