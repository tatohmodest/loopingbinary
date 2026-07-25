export type Product = {
  id: string;
  name: string;
  tag: string;
  headline: string;
  short: string;
  body: string;
  href: string;
  image: string;
  accent: string;
  audience: string;
  highlights: string[];
  features: { title: string; body: string }[];
  howItWorks: { step: string; title: string; body: string }[];
  faq: { q: string; a: string }[];
};

export type Service = {
  id: string;
  name: string;
  num: string;
  headline: string;
  short: string;
  body: string;
  accent: string;
  offerings: string[];
  process: { step: string; title: string; body: string }[];
  outcomes: string[];
};

export const PRODUCTS: Product[] = [
  {
    id: "intellex",
    name: "Intellex",
    tag: "EdTech",
    headline: "Learn at your pace. Finish what you start.",
    short:
      "Self-paced courses, live mentors, and an AI tutor - skills to income, built in Cameroon.",
    body: "Intellex is Looping Binary’s learning platform. It combines structured courses, live mentorship, and an AI tutor so learners can actually finish what they start - one level at a time - and turn skills into income.",
    href: "https://intellex.loopingbinary.com",
    image: "/assets/products/product-intellex-ui.png",
    accent: "#1f8f57",
    audience: "Students, career switchers, and professionals building practical tech skills.",
    highlights: [
      "1,000+ courses across web, design, data, marketing, and AI",
      "Live mentors who ship real products",
      "AI tutor that teaches level by level",
      "Self-paced paths designed for African learners",
    ],
    features: [
      {
        title: "Self-paced curriculum",
        body: "Move through modules on your schedule without losing structure or accountability.",
      },
      {
        title: "Live mentorship",
        body: "Get guidance from engineers and creators who are actively building at Looping Binary.",
      },
      {
        title: "AI tutoring",
        body: "An AI tutor that studies material deeply so it can teach it back, step by step.",
      },
      {
        title: "Skills to income",
        body: "Paths oriented toward real outcomes - portfolios, freelancing, and job readiness.",
      },
    ],
    howItWorks: [
      {
        step: "01",
        title: "Choose a path",
        body: "Pick a track - web development, design, data, marketing, or AI - and set your pace.",
      },
      {
        step: "02",
        title: "Learn with support",
        body: "Use courses, mentor sessions, and the AI tutor to push through stuck points.",
      },
      {
        step: "03",
        title: "Prove the skill",
        body: "Complete levels, build artifacts, and leave with work you can show.",
      },
    ],
    faq: [
      {
        q: "Is Intellex only for beginners?",
        a: "No. Paths range from fundamentals to more advanced professional skills.",
      },
      {
        q: "Do I need to be in Cameroon?",
        a: "No. Intellex is online-first, built with African learners in mind.",
      },
    ],
  },
  {
    id: "zela",
    name: "Zela",
    tag: "Commerce",
    headline: "Cameroon’s social commerce marketplace.",
    short:
      "Discover verified local vendors through a social feed, with escrow and mobile money payments.",
    body: "Zela is a social commerce marketplace for Cameroon. Buyers discover verified local vendors in a feed-first experience, while escrow and mobile money keep transactions safer and more familiar.",
    href: "https://zela.loopingbinary.com",
    image: "/assets/products/product-zela-ui.png",
    accent: "#f00457",
    audience: "Buyers shopping local and vendors selling across Cameroon.",
    highlights: [
      "Social feed discovery for local products",
      "Verified vendors with KYC",
      "Escrow-protected purchases",
      "MTN MoMo & Orange Money friendly flow",
    ],
    features: [
      {
        title: "Feed-first shopping",
        body: "Browse products the way people already discover culture online - in a social stream.",
      },
      {
        title: "Verified vendors",
        body: "Vendors go through verification so buyers can shop with more confidence.",
      },
      {
        title: "Escrow protection",
        body: "Payments are held until the order flow completes as expected.",
      },
      {
        title: "Mobile money",
        body: "Built around the payment methods Cameroonians actually use.",
      },
    ],
    howItWorks: [
      {
        step: "01",
        title: "Discover",
        body: "Scroll a social feed of products from verified local vendors.",
      },
      {
        step: "02",
        title: "Buy safely",
        body: "Checkout with escrow and familiar mobile money options.",
      },
      {
        step: "03",
        title: "Sell locally",
        body: "Vendors list products, get discovered, and fulfill orders through Zela.",
      },
    ],
    faq: [
      {
        q: "Where does Zela operate?",
        a: "Zela is built for Cameroon, with a focus on local vendors and mobile money.",
      },
      {
        q: "Can anyone sell on Zela?",
        a: "Vendors apply and go through verification before selling.",
      },
    ],
  },
  {
    id: "shop",
    name: "Tech Shop",
    tag: "Retail",
    headline: "Laptops & tech, delivered across Cameroon.",
    short:
      "HP, Dell, Lenovo, MacBook and accessories - best XAF prices with fast Douala & Yaoundé delivery.",
    body: "LB Tech Shop is Looping Binary’s electronics store. It sells laptops, phones, and accessories with transparent XAF pricing and delivery across Cameroon - especially Douala and Yaoundé.",
    href: "https://shop.loopingbinary.com",
    image: "/assets/products/product-shop-ui.png",
    accent: "#1f8f57",
    audience: "Students, professionals, and businesses buying reliable tech.",
    highlights: [
      "Laptops, phones, and accessories",
      "HP, Dell, Lenovo, MacBook and more",
      "Fast delivery in Douala & Yaoundé",
      "Mobile money and card-friendly checkout",
    ],
    features: [
      {
        title: "Curated inventory",
        body: "Devices and accessories chosen for real Cameroonian needs and budgets.",
      },
      {
        title: "Local delivery",
        body: "Fast fulfillment where demand is highest, with national reach expanding.",
      },
      {
        title: "Clear XAF pricing",
        body: "No currency confusion - prices that make sense for local buyers.",
      },
      {
        title: "Support that sticks",
        body: "A shop backed by a tech company, not a random reseller.",
      },
    ],
    howItWorks: [
      {
        step: "01",
        title: "Browse",
        body: "Find laptops, phones, and accessories by need and budget.",
      },
      {
        step: "02",
        title: "Order",
        body: "Checkout online with local payment options.",
      },
      {
        step: "03",
        title: "Receive",
        body: "Get delivery in Douala, Yaoundé, and beyond.",
      },
    ],
    faq: [
      {
        q: "Do you deliver outside Douala?",
        a: "Yes - Douala and Yaoundé are primary, with broader Cameroon delivery supported.",
      },
      {
        q: "Are products new or refurbished?",
        a: "The shop lists both new and value options depending on inventory.",
      },
    ],
  },
  {
    id: "app",
    name: "LB App",
    tag: "Infrastructure",
    headline: "The digital infrastructure behind the stack.",
    short:
      "Central auth, LBC coin, OAuth, and user management powering Intellex, Shop, and Junior Dev.",
    body: "LB App is Looping Binary’s digital infrastructure platform. It centralizes authentication, LBC coin, OAuth, and user management so every product in the ecosystem can share identity and economy.",
    href: "https://app.loopingbinary.com",
    image: "/assets/products/hero-platform-ui.png",
    accent: "#2f7d8f",
    audience: "Internal teams, platform operators, and ecosystem product owners.",
    highlights: [
      "Centralized authentication",
      "LBC coin & wallet infrastructure",
      "OAuth and developer tooling",
      "Powers Intellex, Shop, Junior Dev, and more",
    ],
    features: [
      {
        title: "Single identity layer",
        body: "Users move across Looping Binary products without fragmented accounts.",
      },
      {
        title: "LBC economy",
        body: "Coin minting, transfers, and wallets that support product incentives.",
      },
      {
        title: "Developer console",
        body: "APIs and keys for integrating Looping Binary infrastructure.",
      },
      {
        title: "Shared operations",
        body: "One backbone for roles, users, and cross-product continuity.",
      },
    ],
    howItWorks: [
      {
        step: "01",
        title: "Authenticate",
        body: "Users sign in once through the Looping Binary identity layer.",
      },
      {
        step: "02",
        title: "Connect products",
        body: "Apps use LB App for auth, wallets, and shared user context.",
      },
      {
        step: "03",
        title: "Operate the stack",
        body: "Teams manage keys, roles, and coin flows from one place.",
      },
    ],
    faq: [
      {
        q: "Is LB App a consumer product?",
        a: "It is primarily infrastructure - the platform that powers the rest of the ecosystem.",
      },
      {
        q: "Which products use it?",
        a: "Intellex, Tech Shop, Junior Dev, Auth, and other Looping Binary surfaces.",
      },
    ],
  },
  {
    id: "auth",
    name: "Auth",
    tag: "Identity",
    headline: "OAuth 2.0 built for African developers.",
    short:
      "Passwordless login and Sign in with LoopingBinary - integrate identity in a few lines of code.",
    body: "Looping Binary Auth is a secure OAuth 2.0 authorization server. Developers can add passwordless authentication and “Sign in with LoopingBinary” without reinventing identity.",
    href: "https://auth.loopingbinary.com",
    image: "/assets/products/product-auth-ui.png",
    accent: "#1f8f57",
    audience: "Developers and startups who need trusted identity fast.",
    highlights: [
      "OAuth 2.0 authorization server",
      "Passwordless authentication",
      "Sign in with LoopingBinary",
      "Developer docs & quick start",
    ],
    features: [
      {
        title: "OAuth 2.0 ready",
        body: "Standard flows that developers already understand and trust.",
      },
      {
        title: "Passwordless options",
        body: "Reduce friction and password risk with modern auth patterns.",
      },
      {
        title: "Quick integration",
        body: "Add Sign in with LoopingBinary with a few lines of code.",
      },
      {
        title: "Ecosystem continuity",
        body: "Identity that connects cleanly with the rest of the LB stack.",
      },
    ],
    howItWorks: [
      {
        step: "01",
        title: "Register your app",
        body: "Create an OAuth application in the developer console.",
      },
      {
        step: "02",
        title: "Integrate the flow",
        body: "Wire redirect URIs and start the authorization code flow.",
      },
      {
        step: "03",
        title: "Ship login",
        body: "Offer Sign in with LoopingBinary and manage tokens securely.",
      },
    ],
    faq: [
      {
        q: "Is Auth free to try?",
        a: "Developer access is designed to get you started quickly - check the Auth docs for current plans.",
      },
      {
        q: "Can external apps use it?",
        a: "Yes. Auth is built as an OAuth provider for developers.",
      },
    ],
  },
  {
    id: "business",
    name: "Business",
    tag: "Ops",
    headline: "Business management, elevated.",
    short:
      "Coordinate teams, track milestones, and manage your full portfolio from one workspace.",
    body: "Looping Binary Business is the workspace for coordinating business portfolios - teams, milestones, and operational visibility in one architectural system.",
    href: "https://business.loopingbinary.com",
    image: "/assets/products/product-business-ui.png",
    accent: "#2f7d8f",
    audience: "Founders, operators, and teams managing multiple workstreams.",
    highlights: [
      "Portfolio coordination",
      "Team & milestone tracking",
      "Single architectural workspace",
      "Sign in with LoopingBinary",
    ],
    features: [
      {
        title: "Portfolio view",
        body: "See businesses and initiatives together instead of scattered tools.",
      },
      {
        title: "Team coordination",
        body: "Assign ownership and keep delivery moving across roles.",
      },
      {
        title: "Milestone tracking",
        body: "Track progress against concrete outcomes, not vague status updates.",
      },
      {
        title: "Secure access",
        body: "Sign in with your Looping Binary account.",
      },
    ],
    howItWorks: [
      {
        step: "01",
        title: "Sign in",
        body: "Access Business with your Looping Binary identity.",
      },
      {
        step: "02",
        title: "Organize the portfolio",
        body: "Map teams, projects, and milestones into one workspace.",
      },
      {
        step: "03",
        title: "Operate weekly",
        body: "Track movement, unblock work, and keep accountability visible.",
      },
    ],
    faq: [
      {
        q: "Who is Business for?",
        a: "Operators and teams who need one place to coordinate portfolio work.",
      },
      {
        q: "Does it replace project tools?",
        a: "It is designed as a portfolio and coordination layer for Looping Binary Business users.",
      },
    ],
  },
  {
    id: "intern",
    name: "Internship",
    tag: "Training",
    headline: "Work on real things. Build your career.",
    short:
      "Eight weeks embedded in live LB teams - real deadlines, real mentorship, real outcomes.",
    body: "The Looping Binary Internship embeds you into an active team. Not a simulation. Not a bootcamp. You ship real work for eight weeks with mentorship, feedback, and a Demo Day finish.",
    href: "https://intern.loopingbinary.com",
    image: "/assets/products/product-intern-ui.png",
    accent: "#1f8f57",
    audience: "Serious juniors ready for real production pressure.",
    highlights: [
      "7 active tracks",
      "8-week duration",
      "100% online",
      "Demo Day + certificate",
    ],
    features: [
      {
        title: "Real team embedding",
        body: "You are assigned to a live Looping Binary team with a leader.",
      },
      {
        title: "Multiple tracks",
        body: "Software, design, and other tracks that contribute to actual products.",
      },
      {
        title: "Feedback loops",
        body: "Tasks, submissions, reviews, and milestones that compound skill.",
      },
      {
        title: "Career signal",
        body: "Top performers get a real conversation about joining LB.",
      },
    ],
    howItWorks: [
      {
        step: "01",
        title: "Apply",
        body: "Submit during an open cohort window with your preferred track.",
      },
      {
        step: "02",
        title: "Get assigned",
        body: "If accepted, join a team and meet the leader guiding your 8 weeks.",
      },
      {
        step: "03",
        title: "Ship & demo",
        body: "Deliver real work, then present on Demo Day.",
      },
    ],
    faq: [
      {
        q: "Is the internship paid?",
        a: "It is a rigorous training path focused on real contribution and career outcomes - check the internship site for the current cohort terms.",
      },
      {
        q: "Do I need prior experience?",
        a: "You need enough fundamentals to contribute, plus the discipline to ship under deadlines.",
      },
    ],
  },
  {
    id: "junior-dev",
    name: "Junior Dev",
    tag: "Tournament",
    headline: "Win the developer tournament. Change your trajectory.",
    short:
      "Form elite teams, conquer real project modules, climb the leaderboard, and build a hire-ready portfolio.",
    body: "Looping Binary Junior Dev is a competitive developer tournament. Talented juniors form teams, complete real-world project modules, earn coins, dominate leaderboards, and leave with production-grade work that proves they can ship.",
    href: "https://juniordev.loopingbinary.com",
    image: "/assets/products/product-juniordev-ui.png",
    accent: "#1f8f57",
    audience: "Junior developers who want competition, collaboration, and a serious portfolio.",
    highlights: [
      "Team-based competitive seasons",
      "Real project modules (e‑commerce, dashboards, and more)",
      "Live leaderboards & progress tracking",
      "Certificates and portfolio-ready outcomes",
    ],
    features: [
      {
        title: "Collaborative teams",
        body: "Work in structured teams with clear roles - frontend, backend, and more.",
      },
      {
        title: "Production-grade modules",
        body: "Build apps that solve real problems, not toy exercises.",
      },
      {
        title: "GitHub-linked workflow",
        body: "Version control, reviews, and collaboration the way real teams work.",
      },
      {
        title: "Leaderboards & certificates",
        body: "Compete publicly, track milestones, and earn proof of completion.",
      },
    ],
    howItWorks: [
      {
        step: "01",
        title: "Apply for a season",
        body: "Join an open season and get placed into a competitive team structure.",
      },
      {
        step: "02",
        title: "Ship modules",
        body: "Complete project modules, earn coins, and climb the live leaderboard.",
      },
      {
        step: "03",
        title: "Prove you’re hire-ready",
        body: "Leave with portfolio projects, certificates, and competitive signal.",
      },
    ],
    faq: [
      {
        q: "How is Junior Dev different from the Internship?",
        a: "Junior Dev is a competitive tournament with teams, modules, and leaderboards. The Internship embeds you into live LB product teams for 8 weeks.",
      },
      {
        q: "Are seasons paid?",
        a: "Season activation is handled through PayUnit with Starter, Builder, and Pro options on the Junior Dev site.",
      },
    ],
  },
];

export const SERVICES: Service[] = [
  {
    id: "software-development",
    name: "Software Development",
    num: "01",
    headline: "Digital infrastructure your business can actually run on.",
    short:
      "Landing pages, web apps, e-commerce, dashboards, APIs - designed precisely, built to last.",
    body: "We design and build the software African businesses need to operate online - from first websites to full custom platforms - with local context and global engineering standards.",
    accent: "#1f8f57",
    offerings: [
      "Landing pages & company websites",
      "Web applications & platforms",
      "E-commerce & payment systems",
      "Dashboards & admin panels",
      "APIs & back-end systems",
    ],
    process: [
      {
        step: "01",
        title: "Scope honestly",
        body: "We clarify what should be built, what can wait, and what success looks like.",
      },
      {
        step: "02",
        title: "Design & build",
        body: "Interface, architecture, and implementation move together - not as hand-offs.",
      },
      {
        step: "03",
        title: "Ship & support",
        body: "You get production software, not a half-finished prototype.",
      },
    ],
    outcomes: [
      "A product that works in real network and payment conditions",
      "Clear ownership and documentation",
      "A foundation you can grow without rewriting everything",
    ],
  },
  {
    id: "digital-growth",
    name: "Digital Growth",
    num: "02",
    headline: "Marketing executed with the same rigour as code.",
    short:
      "Social, paid ads, SEO, and content - run to create demand, not noise.",
    body: "Digital Growth is Looping Binary’s marketing arm. We run social, paid acquisition, SEO, and content with the same discipline we apply to software delivery.",
    accent: "#2f7d8f",
    offerings: [
      "Social media strategy & management",
      "Paid advertising (Facebook, Google)",
      "SEO & organic visibility",
      "Content creation & copywriting",
    ],
    process: [
      {
        step: "01",
        title: "Position & message",
        body: "Clarify who you serve and what makes the offer worth attention.",
      },
      {
        step: "02",
        title: "Launch channels",
        body: "Stand up content, ads, and organic systems that compound.",
      },
      {
        step: "03",
        title: "Optimize weekly",
        body: "Measure, cut waste, and double down on what converts.",
      },
    ],
    outcomes: [
      "Consistent presence that looks intentional",
      "Paid spend tied to outcomes",
      "Content that supports sales and trust",
    ],
  },
  {
    id: "agency-partner",
    name: "Growth Agency Partner",
    num: "03",
    headline: "An embedded tech and marketing team.",
    short:
      "Strategy, execution, results - you run the business while we own the digital work.",
    body: "Growth Agency Partner is a retainer model. You get an embedded Looping Binary team that owns strategy and execution across product and growth - without assembling freelancers yourself.",
    accent: "#1f8f57",
    offerings: [
      "Dedicated embedded team",
      "Full retainer model",
      "Strategy + execution combined",
      "Scales as you grow",
    ],
    process: [
      {
        step: "01",
        title: "Align on outcomes",
        body: "We define the operating goals and what “good” looks like each month.",
      },
      {
        step: "02",
        title: "Embed the team",
        body: "Design, engineering, and growth work as one unit inside your priorities.",
      },
      {
        step: "03",
        title: "Compound results",
        body: "Ship continuously, report clearly, and expand capacity as you grow.",
      },
    ],
    outcomes: [
      "One accountable partner instead of fragmented vendors",
      "Faster iteration cycles",
      "A team that already understands African operating realities",
    ],
  },
];

export function getProduct(id: string) {
  return PRODUCTS.find((p) => p.id === id);
}

export function getService(id: string) {
  return SERVICES.find((s) => s.id === id);
}
