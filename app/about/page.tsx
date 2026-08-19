import type { Metadata } from "next";
import Link from "next/link";
import { KEYWORDS, SITE_NAME, SITE_URL } from "@/lib/seo";

const ABOUT_DESCRIPTION =
  "About Looping Binary - Douala technology company founded by Tatoh Modest Wilton. We build software, mobile apps, EdTech platforms, train developers, and create opportunities across Africa. We Build. We Grow. We Train.";

const ABOUT_KEYWORDS = [
  ...KEYWORDS,
  "About Looping Binary",
  "Looping Binary company",
  "Looping Binary about us",
  "Tatoh Modest Wilton founder",
  "Modest Wilton",
  "Modest Wilton Looping Binary",
  "African tech company",
  "African technology ecosystem",
  "software company Africa",
  "tech company Africa",
  "build technology Africa",
  "empower developers Africa",
  "Cameroon software development company",
  "Douala web development company",
  "digital products Africa",
  "EdTech Africa",
  "coding bootcamp Cameroon",
  "Junior Dev program",
  "Looping Binary Junior Dev",
  "technology training Africa",
  "developer community Cameroon",
  "hire software company Cameroon",
  "best tech company Douala",
  "best web developers Cameroon",
  "African software engineers",
  "build apps Cameroon",
  "custom software Africa",
];

export const metadata: Metadata = {
  title: "About Looping Binary - Building Technology. Empowering People.",
  description: ABOUT_DESCRIPTION,
  keywords: ABOUT_KEYWORDS,
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Looping Binary - Building Technology. Empowering People.",
    description: ABOUT_DESCRIPTION,
    url: `${SITE_URL}/about`,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_CM",
    images: [
      {
        url: "/assets/og-loopingbinary.jpg",
        width: 1200,
        height: 630,
        alt: "About Looping Binary - Douala technology company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Looping Binary",
    description: ABOUT_DESCRIPTION,
    images: ["/assets/og-loopingbinary.jpg"],
  },
  robots: { index: true, follow: true },
};

const WHAT_WE_DO = [
  {
    title: "Software & Web Development",
    body: "Building modern, scalable web applications and digital platforms.",
  },
  {
    title: "Mobile Development",
    body: "Creating useful and accessible mobile experiences.",
  },
  {
    title: "EdTech & Digital Learning",
    body: "Building platforms that make quality education and professional development more accessible.",
  },
  {
    title: "Technology Training",
    body: "Helping students and aspiring professionals develop practical, industry-relevant skills.",
  },
  {
    title: "Developer Programs",
    body: "Creating opportunities for young developers to learn, collaborate, compete, and gain real-world experience.",
  },
  {
    title: "Digital Solutions",
    body: "Helping organizations use technology to improve their operations, products, and digital presence.",
  },
] as const;

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${SITE_URL}/about#page`,
        url: `${SITE_URL}/about`,
        name: "About Looping Binary",
        description: ABOUT_DESCRIPTION,
        isPartOf: { "@id": `${SITE_URL}/#site` },
        about: { "@id": `${SITE_URL}/#org` },
        inLanguage: "en",
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#org`,
        name: "Looping Binary",
        alternateName: ["LoopingBinary", "LB"],
        url: SITE_URL,
        foundingDate: "2024",
        founder: { "@id": `${SITE_URL}/about#founder` },
        description: ABOUT_DESCRIPTION,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Douala",
          addressRegion: "Littoral",
          addressCountry: "CM",
        },
        areaServed: ["CM", "Africa"],
        knowsAbout: [
          "Software development",
          "Web development",
          "Mobile development",
          "EdTech",
          "Developer training",
          "Digital transformation",
          "African technology ecosystem",
        ],
        sameAs: [
          "https://www.linkedin.com/company/looping-binary/",
          "https://web.facebook.com/profile.php?id=61586371936567",
        ],
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/about#founder`,
        name: "Tatoh Modest Wilton",
        alternateName: ["Modest Wilton", "Tatoh Modest"],
        jobTitle: "Founder & CEO",
        worksFor: { "@id": `${SITE_URL}/#org` },
        url: "https://tatohmodest.vercel.app",
        sameAs: [
          "https://www.linkedin.com/in/tatoh-modest-97036a212/",
          "https://github.com/tatohmodest",
          "https://tatohmodest.vercel.app",
        ],
        description:
          "Founder and CEO of Looping Binary. Building digital presence for Cameroonian businesses, practical technology training, and products that create opportunity.",
        image: `${SITE_URL}/assets/team/tatoh-modest-wilton.jpg`,
        nationality: "CM",
        knowsAbout: [
          "Software engineering",
          "Technology education",
          "Entrepreneurship",
          "Developer programs",
          "African tech talent",
        ],
      },
    ],
  };

  return (
    <main id="main" className="doc about-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="doc-hero doc-hero--illus">
        <div className="doc-hero-copy">
          <p className="eyebrow">About Looping Binary</p>
          <h1>Building technology. Empowering people. Creating possibilities.</h1>
          <p className="case-lede">
            Looping Binary is a technology company focused on building
            innovative digital products, developing talent, and creating
            opportunities through technology, from Douala, Cameroon, for Africa
            and beyond.
          </p>
          <div className="hero-cta">
            <Link href="/contact">Start a project</Link>
            <Link href="/solutions">See what we offer</Link>
          </div>
        </div>
        <div className="doc-hero-art" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/illustrations/illust-founder.png" alt="" />
        </div>
      </section>

      <section className="doc-block about-intro">
        <p className="eyebrow">Who we are</p>
        <h2>
          Technology should do more than solve problems. It should create
          opportunities.
        </h2>
        <p>
          We believe technology should connect people, empower businesses, and
          give individuals the tools they need to build better futures.
        </p>
        <p>
          From software development and digital platforms to education,
          technology services, and developer communities, Looping Binary is
          building an ecosystem where{" "}
          <strong>
            ideas become products, people become skilled professionals, and
            businesses become digitally stronger.
          </strong>
        </p>
      </section>

      <section className="doc-block" id="what-we-do" aria-labelledby="what-title">
        <p className="eyebrow">What we do</p>
        <h2 id="what-title">
          Useful. Accessible. Scalable. Impactful.
        </h2>
        <p>
          Looping Binary operates across multiple areas of technology. One
          company, clear offers.
        </p>
        <ul className="about-do-grid" role="list">
          {WHAT_WE_DO.map((item) => (
            <li key={item.title} className="about-do">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="about-split" id="mission" aria-labelledby="vision-title">
        <div className="about-split-copy">
          <p className="eyebrow">Vision &amp; mission</p>
          <h2 id="vision-title">
            A leading African technology ecosystem.
          </h2>
          <p>
            Our vision is to develop people, build world-class digital products,
            and create opportunities through technology.
          </p>
          <p className="about-mission">
            <strong>Build technology. Develop people. Create opportunities.</strong>
          </p>
          <p>
            We want to contribute to a future where talented young Africans are
            not only consumers of technology, but{" "}
            <strong>
              builders, innovators, entrepreneurs, and leaders in the global
              technology industry.
            </strong>
          </p>
        </div>
        <div className="about-split-art" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/illustrations/illust-operate.png" alt="" />
        </div>
      </section>

      <section className="founder" id="founder" aria-labelledby="founder-title">
        <div className="founder-art founder-art--photo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/team/tatoh-modest-wilton.jpg"
            alt="Tatoh Modest Wilton, Founder and CEO of Looping Binary"
          />
        </div>
        <div className="founder-copy">
          <p className="eyebrow">Meet the founder</p>
          <h2 id="founder-title">Tatoh Modest Wilton</h2>
          <p className="founder-role">Founder &amp; CEO, Looping Binary</p>
          <p>
            <strong>Tatoh Modest Wilton</strong>, also known as{" "}
            <strong>Modest Wilton</strong>, is a software developer, technology
            educator, entrepreneur, and the founder of Looping Binary.
          </p>
          <p>
            He built Looping Binary for one reason:{" "}
            <strong>to create real opportunities for people.</strong> Too many
            Cameroonian businesses still operate the old way, without a strong
            digital presence. Looping Binary exists to change that: to put
            businesses online, help them reach more clients, and give them the
            tools to rise and grow in a market that is moving fast.
          </p>
          <p>
            The same spirit drives the training side. School often leaves people
            with theory and incomplete pieces. Looping Binary focuses on{" "}
            <strong>practical knowledge you can use</strong>: stable skills,
            real projects, and pathways into opportunity, so people can build
            with technology and open doors for others too.
          </p>
          <p>
            That is also why the company builds its own products. Products that
            grow are products that can help other people grow. Through
            platforms, programs like{" "}
            <Link href="/work/junior-dev">Junior Dev</Link>, and client work,
            Tatoh is shaping Looping Binary as an ecosystem where businesses go
            digital, talent becomes capable, and opportunity keeps looping
            forward.
          </p>
          <blockquote className="founder-quote">
            <p>
              “I did not start Looping Binary to talk about technology. I
              started it to create opportunities: for businesses to grow, and
              for people to learn in a way that actually works.”
            </p>
          </blockquote>
          <div className="founder-links">
            <a
              href="https://www.linkedin.com/in/tatoh-modest-97036a212/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/tatohmodest"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://tatohmodest.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Personal site
            </a>
          </div>
        </div>
      </section>

      <section className="about-close" aria-labelledby="close-title">
        <div className="about-close-inner">
          <p className="eyebrow">More than a technology company</p>
          <h2 id="close-title">Looping Binary is ultimately about people.</h2>
          <p>
            Every product we build, every program we launch, and every community
            we create is driven by one question:
          </p>
          <p className="about-question">
            How can technology create a meaningful opportunity for someone?
          </p>
          <p>
            Whether that means helping a student learn a new skill, helping a
            developer build their first real project, helping a business
            digitize its operations, or turning an idea into a real product. We
            want Looping Binary to be part of that journey.
          </p>
          <p className="about-signoff">
            <strong>This is Looping Binary.</strong>
            <br />
            We build. We teach. We innovate. We create opportunities.
          </p>
          <div className="hero-cta">
            <Link href="/contact">Talk to us</Link>
            <Link href="/work">See our projects</Link>
            <Link href="/training">Explore training</Link>
          </div>
        </div>
        <div className="about-close-art" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/illustrations/illust-train.png" alt="" />
        </div>
      </section>
    </main>
  );
}
