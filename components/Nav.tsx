"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const MOON_ICON = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const SUN_ICON = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const NAV_LINKS = [
  ["/#products", "Products"],
  ["/products", "All products"],
  ["/#services", "Services"],
  ["/#education", "Training"],
  ["/#about", "About"],
] as const;

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const onHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.dispatchEvent(
      new CustomEvent("themechange", { detail: { theme } })
    );
  }, [theme]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 769px)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setMenuOpen(false);
    };
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!onHome) return;
    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    const links = document.querySelectorAll<HTMLAnchorElement>(
      ".nav-links a[href*='#']"
    );
    if (!sections.length || !links.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            links.forEach((link) => {
              const href = link.getAttribute("href") || "";
              link.classList.toggle("active", href.endsWith(`#${id}`));
            });
          }
        });
      },
      { threshold: 0.28, rootMargin: "-64px 0px 0px 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [onHome]);

  const closeMenu = () => setMenuOpen(false);
  const contactHref = onHome ? "#contact" : "/#contact";

  return (
    <header className={`nav-wrap${scrolled ? " scrolled" : ""}`} id="nav">
      <nav className="nav-inner" aria-label="Main navigation">
        <Link href="/" className="nav-logo" aria-label="Looping Binary, home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/logo.svg" width="36" height="18" alt="" aria-hidden="true" />
          <span className="nav-wordmark">
            <span className="nav-lb-loop">Looping</span>{" "}
            <span className="nav-lb-bin">Binary</span>
          </span>
        </Link>

        <ul className="nav-links" role="list">
          {NAV_LINKS.map(([href, label]) => (
            <li key={href}>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button
            className="btn-ghost"
            onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {theme === "dark" ? SUN_ICON : MOON_ICON}
          </button>
          <Link href={contactHref} className="btn-primary">
            Get in touch
          </Link>
        </div>

        <button
          ref={toggleRef}
          className="nav-mobile-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div
        className={`mobile-menu${menuOpen ? " open" : ""}`}
        id="mobile-menu"
        aria-hidden={!menuOpen}
      >
        <button
          className="mobile-menu-close"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <ul role="list">
          {NAV_LINKS.map(([href, label]) => (
            <li key={href}>
              <Link href={href} onClick={closeMenu}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href={contactHref} className="btn-primary" onClick={closeMenu}>
          Get in touch
        </Link>
      </div>
    </header>
  );
}
