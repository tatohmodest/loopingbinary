export const NAV = [
  { href: "/solutions", label: "Solutions", preview: "/assets/hero-builders.png" },
  { href: "/products", label: "Products", preview: "/lb_projects/intellex.png" },
  { href: "/training", label: "Training", preview: "/lb_projects/lbjeds3.png" },
  { href: "/work", label: "Projects", preview: "/lb_client_projects/pejah.png" },
  { href: "/about", label: "About", preview: "/lblogo/infinity.png" },
  { href: "/insights", label: "Insights", preview: "/assets/hero-cycle.png" },
  { href: "/contact", label: "Contact", preview: "/lblogo/looping_binary.png" },
] as const;

export const PILLARS = [
  {
    id: "build",
    num: "01",
    title: "Build",
    kicker: "Software & digital products",
    lead: "We design and ship the technology businesses, startups, and institutions actually need.",
    points: [
      "Web and mobile applications",
      "SaaS platforms and dashboards",
      "APIs, auth, and backend systems",
      "E-commerce and payments",
      "Automation and AI-powered products",
    ],
  },
  {
    id: "grow",
    num: "02",
    title: "Grow",
    kicker: "Digital growth",
    lead: "We don't just build your platform. We help you make it matter.",
    points: [
      "Brand positioning",
      "SEO and content",
      "Campaigns and paid media",
      "Social and conversion",
      "Growth strategy",
    ],
  },
  {
    id: "train",
    num: "03",
    title: "Train",
    kicker: "People who can build",
    lead: "Skills, then projects, then experience, then opportunity. Not certificates for their own sake.",
    points: [
      "Intellex learning platform",
      "Internship on live products",
      "Junior Dev seasons",
      "Mentorship from people who ship",
      "Portfolios from real work",
    ],
  },
  {
    id: "operate",
    num: "04",
    title: "Operate",
    kicker: "Real products. Real platforms.",
    lead: "We use the same technology we sell. Operators, not just contractors.",
    points: [
      "Intellex",
      "Zela",
      "Tech Shop",
      "Junior Dev",
      "Auth, App, and LB Vote",
    ],
  },
] as const;

export const SERVICES = [
  {
    title: "Software development",
    items: ["Websites", "Web apps", "Mobile apps", "SaaS", "APIs", "Dashboards", "Enterprise systems"],
  },
  {
    title: "E-commerce",
    items: ["Online stores", "Payments", "Inventory", "Vendor systems", "Customer portals"],
  },
  {
    title: "Digital transformation",
    items: ["Business automation", "Internal systems", "Digital workflows", "Cloud", "Data systems"],
  },
  {
    title: "Digital growth",
    items: ["Marketing", "SEO", "Social", "Advertising", "Content", "Growth strategy"],
  },
  {
    title: "Education technology",
    items: ["LMS", "School management", "Student portals", "Teacher dashboards", "Parent dashboards", "AI learning"],
  },
] as const;

export const WHY = [
  {
    title: "Local knowledge. Global standard.",
    body: "African markets, payments, connectivity, and business reality — built to modern technical standards.",
  },
  {
    title: "We build what we sell.",
    body: "We operate our own products. The stack you buy is the stack we run.",
  },
  {
    title: "Trained talent.",
    body: "Our people learn through practical work on live Looping Binary products.",
  },
  {
    title: "End-to-end partnership.",
    body: "Strategy, design, engineering, deployment, and growth can live in one organization.",
  },
] as const;

export const LOOP_STEPS = [
  "Learn",
  "Build",
  "Ship",
  "Gain experience",
  "Create products",
  "Solve problems",
  "Teach",
  "Learn again",
] as const;

export const PROGRAM_SLUGS = ["intellex", "internship", "junior-dev"] as const;
export const PLATFORM_SLUGS = ["zela", "tech-shop", "lb-app", "auth", "lbvote"] as const;

export const FOOTER = {
  company: [
    { href: "/about", label: "About" },
    { href: "/about#mission", label: "Mission" },
    { href: "/training", label: "Careers" },
    { href: "/contact", label: "Partnerships" },
    { href: "/contact", label: "Contact" },
  ],
  solutions: [
    { href: "/solutions#build", label: "Software development" },
    { href: "/solutions#grow", label: "Digital growth" },
    { href: "/solutions#train", label: "Education transformation" },
    { href: "/solutions#operate", label: "Business solutions" },
  ],
  products: [
    { href: "/work/intellex", label: "Intellex" },
    { href: "/work/zela", label: "Zela" },
    { href: "/work/tech-shop", label: "Tech Shop" },
    { href: "/work/junior-dev", label: "Junior Dev" },
    { href: "/work/lbvote", label: "LB Vote" },
    { href: "/work/auth", label: "Auth" },
    { href: "/work/lb-app", label: "App / Control" },
  ],
  programs: [
    { href: "/work/internship", label: "Internship" },
    { href: "/work/junior-dev", label: "Junior Dev" },
    { href: "/work/intellex", label: "Mentorship" },
    { href: "/work/intellex", label: "Intellex" },
  ],
} as const;
