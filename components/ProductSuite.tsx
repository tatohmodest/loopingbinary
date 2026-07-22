"use client";

import {
  useEffect,
  useRef,
  useState,
  startTransition,
  type CSSProperties,
} from "react";
import gsap from "gsap";

type Product = {
  id: string;
  name: string;
  tag: string;
  headline: string;
  body: string;
  href: string;
  image: string;
  accent: string;
};

const PRODUCTS: Product[] = [
  {
    id: "intellex",
    name: "Intellex",
    tag: "EdTech",
    headline: "Learn at your pace. Finish what you start.",
    body: "Self-paced courses, live mentors, and an AI tutor — skills to income, built in Cameroon.",
    href: "https://intellex.loopingbinary.com",
    image: "/assets/products/product-intellex-ui.png",
    accent: "#00bf63",
  },
  {
    id: "zela",
    name: "Zela",
    tag: "Commerce",
    headline: "Cameroon’s social commerce marketplace.",
    body: "Discover verified local vendors through a social feed, with escrow and mobile money payments.",
    href: "https://zela.loopingbinary.com",
    image: "/assets/products/product-zela-ui.png",
    accent: "#f00457",
  },
  {
    id: "shop",
    name: "Tech Shop",
    tag: "Retail",
    headline: "Laptops & tech, delivered across Cameroon.",
    body: "HP, Dell, Lenovo, MacBook and accessories — best XAF prices with fast Douala & Yaoundé delivery.",
    href: "https://shop.loopingbinary.com",
    image: "/assets/products/product-shop-ui.png",
    accent: "#00bf63",
  },
  {
    id: "app",
    name: "LB App",
    tag: "Infrastructure",
    headline: "The digital infrastructure behind the stack.",
    body: "Central auth, LBC coin, OAuth, and user management powering Intellex, Shop, and Junior Dev.",
    href: "https://app.loopingbinary.com",
    image: "/assets/products/hero-platform-ui.png",
    accent: "#0097b2",
  },
  {
    id: "auth",
    name: "Auth",
    tag: "Identity",
    headline: "OAuth 2.0 built for African developers.",
    body: "Passwordless login and Sign in with LoopingBinary — integrate identity in a few lines of code.",
    href: "https://auth.loopingbinary.com",
    image: "/assets/products/product-auth-ui.png",
    accent: "#1ED77E",
  },
  {
    id: "business",
    name: "Business",
    tag: "Ops",
    headline: "Business management, elevated.",
    body: "Coordinate teams, track milestones, and manage your full portfolio from one workspace.",
    href: "https://business.loopingbinary.com",
    image: "/assets/products/product-business-ui.png",
    accent: "#0097b2",
  },
  {
    id: "intern",
    name: "Internship",
    tag: "Training",
    headline: "Work on real things. Build your career.",
    body: "Eight weeks embedded in live LB teams — real deadlines, real mentorship, real outcomes.",
    href: "https://intern.loopingbinary.com",
    image: "/assets/products/product-intern-ui.png",
    accent: "#00bf63",
  },
];

export default function ProductSuite() {
  const [active, setActive] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const product = PRODUCTS[active];

  const goTo = (index: number) => {
    if (index === active) return;
    startTransition(() => setActive(index));
  };

  useEffect(() => {
    const panel = panelRef.current;
    const img = imgRef.current;
    if (!panel || !img) return;

    const tl = gsap.timeline();
    tl.fromTo(
      panel.querySelectorAll("[data-anim]"),
      { opacity: 0, y: 18 },
      { opacity: 1, y: 0, duration: 0.45, stagger: 0.06, ease: "power3.out" }
    ).fromTo(
      img,
      { opacity: 0, scale: 1.04, y: 24 },
      { opacity: 1, scale: 1, y: 0, duration: 0.55, ease: "power3.out" },
      0.05
    );

    return () => {
      tl.kill();
    };
  }, [active]);

  useEffect(() => {
    const start = () => {
      autoRef.current = setInterval(() => {
        setActive((i) => (i + 1) % PRODUCTS.length);
      }, 5200);
    };
    start();
    return () => {
      if (autoRef.current) clearInterval(autoRef.current);
    };
  }, []);

  const pauseAuto = () => {
    if (autoRef.current) clearInterval(autoRef.current);
  };

  return (
    <section
      className="product-suite section-gap"
      id="products"
      aria-labelledby="products-title"
      onMouseEnter={pauseAuto}
      onFocusCapture={pauseAuto}
    >
      <div className="container">
        <div className="section-header reveal-fade">
          <p className="eyebrow">The Looping Binary Stack</p>
          <h2 id="products-title" className="section-title">
            All our products.
            <br />
            One connected company.
          </h2>
          <p className="section-lede">
            Education, commerce, infrastructure, and identity — platforms we
            build, operate, and ship every day.
          </p>
        </div>

        <div className="suite-tabs" role="tablist" aria-label="Products">
          {PRODUCTS.map((p, i) => (
            <button
              key={p.id}
              role="tab"
              type="button"
              aria-selected={i === active}
              className={`suite-tab${i === active ? " is-active" : ""}`}
              style={
                i === active
                  ? ({ ["--tab-accent" as string]: p.accent } as CSSProperties)
                  : undefined
              }
              onClick={() => goTo(i)}
            >
              <span className="suite-tab-dot" aria-hidden="true" />
              {p.name}
            </button>
          ))}
        </div>

        <div
          className="suite-panel"
          role="tabpanel"
          ref={panelRef}
          key={product.id}
        >
          <div className="suite-copy">
            <span className="suite-tag" data-anim style={{ color: product.accent }}>
              {product.tag}
            </span>
            <h3 className="suite-headline" data-anim>
              {product.headline}
            </h3>
            <p className="suite-body" data-anim>
              {product.body}
            </p>
            <a
              href={product.href}
              className="btn-primary btn-lg"
              data-anim
              target="_blank"
              rel="noopener noreferrer"
            >
              Open {product.name}
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="suite-visual" aria-hidden="true">
            <div
              className="suite-visual-glow"
              style={{ background: product.accent }}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              ref={imgRef}
              src={product.image}
              alt=""
              width={1200}
              height={675}
              className="suite-img"
            />
          </div>
        </div>

        <div className="suite-grid reveal-fade">
          {PRODUCTS.map((p) => (
            <a
              key={p.id}
              href={p.href}
              className="suite-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="suite-link-name">{p.name}</span>
              <span className="suite-link-host">{p.href.replace("https://", "")}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
