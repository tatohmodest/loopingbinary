export type WorkKind = "client" | "product";

export type WorkItem = {
  slug: string;
  name: string;
  kind: WorkKind;
  tag: string;
  headline: string;
  summary: string;
  body: string[];
  image: string;
  href?: string;
  accent: string;
  year: string;
  location: string;
  services: string[];
  results: string[];
  featured?: boolean;
  coverflow?: boolean;
};

export const WORK: WorkItem[] = [
  {
    slug: "pejah",
    name: "Pejah",
    kind: "client",
    tag: "Beauty · Brand",
    headline: "A braiding house that looks as considered as the work in the chair.",
    summary:
      "A premium booking site for Pejah Braiding in Arlington, Texas. Warm photography, honest service pages, and a path from first glance to appointment.",
    body: [
      "Pejah means beauty beyond words in the Fefe language of Cameroon. The brand needed a site that could carry that standard into Arlington and the wider DFW market, without looking like a template salon page.",
      "We designed a calm, high-trust presence: serif headlines, gold accents, real client photography, and a booking flow that respects time. Protective styles, kids, men, and women all sit in one clear service story.",
      "The result is a local business that reads as a house of craft. Visitors understand the standard before they ever sit down.",
    ],
    image: "/lb_client_projects/pejah.png",
    href: "https://pejah.com",
    accent: "#c4a574",
    year: "2026",
    location: "Arlington, Texas",
    services: ["Brand site", "Booking UX", "Content system"],
    results: [
      "Live on pejah.com",
      "Appointment-first conversion path",
      "Photography-led brand presence",
    ],
    featured: true,
    coverflow: true,
  },
  {
    slug: "presto",
    name: "Presto",
    kind: "client",
    tag: "Marketplace",
    headline: "Cameroon’s everyday marketplace, in one polished surface.",
    summary:
      "Services, products, events, rentals, and bus tickets for customers and merchants, with mobile money at the center of checkout.",
    body: [
      "Presto had to feel like a real city product, not a directory. People needed to search, book, and buy without learning a new mental model.",
      "We shaped a deep-green marketplace with live discovery, merchant dashboards, and flows that assume MTN Money, Orange Money, and uneven bandwidth.",
      "The platform now holds the everyday jobs of a city: find help, buy something, catch a bus, run a shop.",
    ],
    image: "/lb_client_projects/presto.png",
    href: "https://presto-lilac-eight.vercel.app",
    accent: "#f5c518",
    year: "2026",
    location: "Cameroon",
    services: ["Product design", "Marketplace build", "Merchant ops"],
    results: [
      "Unified search across six verticals",
      "Merchant web hub",
      "Mobile-money ready checkout",
    ],
    featured: true,
    coverflow: true,
  },
  {
    slug: "laji",
    name: "Laji",
    kind: "client",
    tag: "Asset OS",
    headline: "Tag it. Track it. Know your worth.",
    summary:
      "Africa’s operating system for business, people, and things: physical tags, theft checks, transport tracking, and a vault for what you own.",
    body: [
      "Laji is not a brochure. It is infrastructure for ownership: scan a tag, register an asset, verify before you buy, and watch worth grow.",
      "We built a product surface for tagging, verification, marketplace deals, and hospital services, with a calm purple identity that feels like a financial product rather than a gadget.",
      "The work had to be instantly understandable to a first-time visitor and serious enough for operators moving cargo, inventory, and care.",
    ],
    image: "/lb_client_projects/laji.png",
    href: "https://laji-pearl.vercel.app",
    accent: "#6d4aff",
    year: "2026",
    location: "Cameroon",
    services: ["Product design", "Platform build", "Identity"],
    results: [
      "Tag-to-vault activation flow",
      "Verify-before-buy safety check",
      "Transport, commerce, and care in one OS",
    ],
    featured: true,
    coverflow: true,
  },
  {
    slug: "strategix",
    name: "Strategix Africa",
    kind: "client",
    tag: "Consulting",
    headline: "Études, formation, conseil et coaching, with the gravity of a firm.",
    summary:
      "A bilingual corporate site for a pan-African strategy house: studies, training, events, and executive coaching from Douala to the continent.",
    body: [
      "Strategix Africa needed to look like the rooms it already occupies: boards, seminars, and leadership cohorts. The previous visual language of consulting in the region is often loud. This one had to be still.",
      "We used navy, crimson, and boardroom photography, with FR/EN switching and a clear path into diagnostic conversations.",
      "The site now introduces Chief Dr. Ngoua-Elembe and the three pillars, conseil, formation, événements, without diluting the authority of the work.",
    ],
    image: "/lb_client_projects/strategix.png",
    href: "https://strategix-blush.vercel.app",
    accent: "#c81e1e",
    year: "2026",
    location: "Douala · Pan-African",
    services: ["Corporate site", "Bilingual UX", "Brand system"],
    results: [
      "FR/EN presence",
      "Flagship seminar storytelling",
      "Diagnostic-led contact path",
    ],
    featured: true,
    coverflow: true,
  },
  {
    slug: "sgsfans",
    name: "SG SuperFans",
    kind: "client",
    tag: "Creator economy",
    headline: "One home for a creator business, with the lights on.",
    summary:
      "A dark, gold-lit platform for publishing, going live, selling access, and messaging fans from a single dashboard.",
    body: [
      "Creator products fail when they look cheap. SuperFans needed cinema: black space, gold actions, and a grid of real talent that feels curated rather than scraped.",
      "We designed the public face and the earnings language, subscriptions, tips, PPV, paid DMs, so a creator can see the business in one glance.",
      "The standard is simple: if a fan lands here, they should already trust the room.",
    ],
    image: "/lb_client_projects/sgsfans.png",
    accent: "#f0b429",
    year: "2026",
    location: "Africa",
    services: ["Product design", "Platform UI", "Brand"],
    results: [
      "Creator-first public surface",
      "Multi-stream earnings language",
      "Premium dark visual system",
    ],
    featured: true,
    coverflow: true,
  },
  {
    slug: "jimmy-home-textile",
    name: "Jimmy Home Textile",
    kind: "client",
    tag: "Home · Commerce",
    headline: "A Cameroonian textile house that sells comfort like it is craft.",
    summary:
      "Bedsheets, curtains, towels, and bedding with a quiet luxury storefront, WhatsApp sales, and delivery across Cameroon.",
    body: [
      "Jimmy Home Textile needed a shop that felt like a house, not a catalog dump. Bedsheets, bed covers, curtains, blankets, pillowcases, and towels had to sit in rooms people could already imagine living in.",
      "We built a dark, considered commerce surface: serif headlines, atelier photography, collections, order tracking, and a WhatsApp path that matches how Cameroonian customers actually buy.",
      "The result is a home textile house that reads as premium without pricing people out. Delivery across Cameroon, careful packing, and a shop that can grow with the collection.",
    ],
    image: "/lb_client_projects/jimmyhometextile.png",
    href: "https://jimmytextile.vercel.app",
    accent: "#c4b6a6",
    year: "2026",
    location: "Cameroon",
    services: ["E-commerce", "Brand site", "Catalog"],
    results: [
      "Live on jimmytextile.vercel.app",
      "Collections, gallery, and order tracking",
      "WhatsApp-first sales path",
    ],
    featured: true,
    coverflow: true,
  },
  {
    slug: "intellex",
    name: "Intellex",
    kind: "product",
    tag: "EdTech",
    headline: "Learn skills that actually ship.",
    summary:
      "Self-paced courses, live mentors, and an AI tutor on one account, built in Cameroon so learners finish what they start.",
    body: [
      "Intellex is Looping Binary’s learning platform. It is not a content dump. Courses, mentors, and an AI tutor sit on one identity so a learner can move from stuck to shipped.",
      "The product is built for African learners first: mobile money, practical tracks, and teachers who are still shipping software in the same company.",
    ],
    image: "/lb_projects/intellex.png",
    href: "https://intellex.loopingbinary.com",
    accent: "#00bf63",
    year: "2025",
    location: "Douala",
    services: ["EdTech product", "AI tutor", "Mentorship"],
    results: [
      "1,000+ courses",
      "Live mentors from the company",
      "Skills-to-income paths",
    ],
    coverflow: true,
  },
  {
    slug: "zela",
    name: "Zela",
    kind: "product",
    tag: "Commerce",
    headline: "Cameroon’s social commerce marketplace.",
    summary:
      "Discover verified local vendors in a feed, then buy with escrow and mobile money.",
    body: [
      "Zela treats shopping as a social act. Products appear in a feed, vendors are verified, and payments are held until the order is right.",
      "The brand is cinematic on purpose: beauty, desire, and trust in the same frame, because that is how people already decide.",
    ],
    image: "/lb_projects/zela.png",
    href: "https://zela.loopingbinary.com",
    accent: "#f00457",
    year: "2025",
    location: "Cameroon",
    services: ["Marketplace", "Escrow", "Vendor KYC"],
    results: [
      "Feed-first discovery",
      "Verified vendors",
      "Mobile money checkout",
    ],
    coverflow: true,
  },
  {
    slug: "tech-shop",
    name: "Tech Shop",
    kind: "product",
    tag: "Retail",
    headline: "Serious machines, local prices, delivered.",
    summary:
      "HP, Dell, Lenovo, MacBook and accessories with clear XAF pricing and fast Douala and Yaoundé delivery.",
    body: [
      "Buying a laptop in Cameroon should not feel like a rumor. Tech Shop is Looping Binary’s own retail surface: curated inventory, transparent prices, and a shop backed by a technology company.",
    ],
    image: "/lb_projects/lbtechshop.png",
    href: "https://shop.loopingbinary.com",
    accent: "#00bf63",
    year: "2025",
    location: "Douala · Yaoundé",
    services: ["E-commerce", "Catalog", "Local delivery"],
    results: [
      "Pro tech catalog",
      "XAF-first checkout",
      "Affiliate and seller paths",
    ],
  },
  {
    slug: "lb-app",
    name: "LB App",
    kind: "product",
    tag: "Infrastructure",
    headline: "The identity and economy under the stack.",
    summary:
      "Central auth, LBC coin, OAuth, and user management powering Intellex, Shop, and Junior Dev.",
    body: [
      "LB App is the quiet layer. One identity, one wallet, one set of keys so every Looping Binary product can share users without becoming a maze.",
    ],
    image: "/lb_projects/lbapp.png",
    href: "https://app.loopingbinary.com",
    accent: "#0097b2",
    year: "2025",
    location: "Douala",
    services: ["Auth", "Wallets", "OAuth"],
    results: [
      "Shared identity layer",
      "LBC economy",
      "Powers the product suite",
    ],
  },
  {
    slug: "auth",
    name: "LB Auth",
    kind: "product",
    tag: "Identity",
    headline: "The auth layer for Looping Binary developers.",
    summary:
      "OAuth 2.0, passwordless login, and Sign in with LoopingBinary in a few lines of code.",
    body: [
      "Auth is a product, not a weekend feature. LB Auth gives the ecosystem passwordless login, cross-subdomain SSO, and JWT-backed sessions that other teams can actually integrate.",
    ],
    image: "/lb_projects/lbauth.png",
    href: "https://auth.loopingbinary.com",
    accent: "#00bf63",
    year: "2025",
    location: "Douala",
    services: ["OAuth 2.0", "Passwordless", "SSO"],
    results: [
      "Developer console",
      "Passwordless auth",
      "Cross-subdomain SSO",
    ],
  },
  {
    slug: "internship",
    name: "Internship",
    kind: "product",
    tag: "Training",
    headline: "Work on real things. Build a career.",
    summary:
      "Eight weeks embedded in live Looping Binary teams. Real deadlines, real mentorship, real outcomes.",
    body: [
      "The internship is not a simulation. Interns join active teams, ship on live products, and get judged by the same standard as everyone else in the building.",
    ],
    image: "/lb_projects/lbintern.png",
    href: "https://intern.loopingbinary.com",
    accent: "#00bf63",
    year: "2025",
    location: "Douala",
    services: ["Program design", "Platform", "Mentorship"],
    results: [
      "Live team embedding",
      "Cohort-based admission",
      "Portfolio from real work",
    ],
  },
  {
    slug: "junior-dev",
    name: "Junior Dev",
    kind: "product",
    tag: "Tournament",
    headline: "All fields, one arena.",
    summary:
      "Cameroon’s multi-division skills tournament. Teams, real modules, live leaderboards, one Demo Day.",
    body: [
      "Junior Dev is how we find people who can work. Seasons run as an arena: divisions, teams of five, real product modules, and a public leaderboard that does not lie.",
    ],
    image: "/lb_projects/lbjeds3.png",
    href: "https://juniordev.loopingbinary.com",
    accent: "#00bf63",
    year: "2026",
    location: "Douala",
    services: ["Tournament platform", "Leaderboards", "Curriculum"],
    results: [
      "Season III arena",
      "Team competition",
      "Hire-ready portfolios",
    ],
    coverflow: true,
  },
  {
    slug: "lbvote",
    name: "LB Vote",
    kind: "product",
    tag: "Civic / Fan",
    headline: "Fan-choice awards the audience will obsess over.",
    summary:
      "Paid voting, live leaderboards, nominee photos, and a host dashboard that tracks every XAF.",
    body: [
      "LB Vote is built for Cameroon hosts who need contests to feel official. Vote prices you control, PayUnit-ready payments, and a live board the room can watch.",
    ],
    image: "/lb_projects/lbvote.png",
    accent: "#00bf63",
    year: "2026",
    location: "Cameroon",
    services: ["Voting product", "Payments", "Live ops"],
    results: [
      "Live voting UI",
      "Host dashboard",
      "XAF-native pricing",
    ],
  },
  {
    slug: "lbpay",
    name: "LBPay",
    kind: "product",
    tag: "Payments",
    headline: "Move XAF with the quiet confidence of a bank, and the speed of Mobile Money.",
    summary:
      "A Cameroon wallet, checkout, and payments API for MTN Money, Orange Money, and cards.",
    body: [
      "LBPay is Looping Binary's payments layer. Wallets, checkout, payment links, and a developer API so money can move in XAF without stitching together five providers.",
      "The product is built for Cameroon first: MTN Money, Orange Money, cards, PIN-confirmed ledgers, and a surface that feels like a bank rather than a gadget.",
      "Hosts, merchants, and developers get one place to send, receive, collect, and reconcile. The same stack we use to get paid is the stack we ship.",
    ],
    image: "/lb_projects/lbpay.png",
    href: "https://lbpay.vercel.app",
    accent: "#00bf63",
    year: "2026",
    location: "Cameroon",
    services: ["Wallets", "Checkout", "Payments API"],
    results: [
      "MTN, Orange, and card rails",
      "Developer API and payment links",
      "XAF-native ledger",
    ],
    coverflow: true,
  },
];

export const CLIENT_WORK = WORK.filter((item) => item.kind === "client");
export const PRODUCT_WORK = WORK.filter((item) => item.kind === "product");
export const COVERFLOW = WORK.filter((item) => item.coverflow);
export const FEATURED_CLIENTS = CLIENT_WORK.filter((item) => item.featured);

export function getWork(slug: string) {
  return WORK.find((item) => item.slug === slug);
}

export function getRelatedWork(slug: string, limit = 3) {
  const current = getWork(slug);
  if (!current) return WORK.slice(0, limit);
  return WORK.filter((item) => item.slug !== slug && item.kind === current.kind).slice(
    0,
    limit
  );
}
