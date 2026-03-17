"use client";

import { useEffect, useRef, useState } from "react";

const MOON_ICON = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const SUN_ICON = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
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

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Frosted glass on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Apply theme to <html>
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.dispatchEvent(
      new CustomEvent("themechange", { detail: { theme } })
    );
  }, [theme]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Escape key closes menu
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

  // Close menu when viewport becomes desktop-width
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 769px)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setMenuOpen(false);
    };
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  // Active nav link via IntersectionObserver
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    const links = document.querySelectorAll<HTMLAnchorElement>(
      ".nav-links a[href^='#']"
    );
    if (!sections.length || !links.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            links.forEach((link) => {
              link.classList.toggle(
                "active",
                link.getAttribute("href") === `#${id}`
              );
            });
          }
        });
      },
      { threshold: 0.35, rootMargin: "-64px 0px 0px 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`nav-wrap${scrolled ? " scrolled" : ""}`}
      id="nav"
    >
      <nav className="nav-inner" aria-label="Main navigation">
        {/* Logo */}
        <a href="/" className="nav-logo" aria-label="Looping Binary,home">
          <img src="/assets/logo.svg" width="36" height="18" alt="" aria-hidden="true" />
          <span className="nav-wordmark">
            <span className="nav-lb-loop">Looping</span>{" "}
            <span className="nav-lb-bin">Binary</span>
          </span>
        </a>

        <ul className="nav-links" role="list">
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#the-loop">The Loop</a>
          </li>
          <li>
            <a href="#education">Programs</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>

        <div className="nav-actions">
          <button
            className="btn-ghost"
            onClick={() =>
              setTheme((t) => (t === "dark" ? "light" : "dark"))
            }
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {theme === "dark" ? MOON_ICON : SUN_ICON}
          </button>
          <a href="#contact" className="btn-primary">
            Get in touch
          </a>
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

      {/* Mobile menu */}
      <div
        className={`mobile-menu${menuOpen ? " open" : ""}`}
        id="mobile-menu"
        aria-hidden={!menuOpen}
      >
        <ul role="list">
          {(
            [
              ["#services", "Services"],
              ["#the-loop", "The Loop"],
              ["#education", "Programs"],
              ["#about", "About"],
            ] as const
          ).map(([href, label]) => (
            <li key={href}>
              <a href={href} onClick={closeMenu}>
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="btn-primary" onClick={closeMenu}>
          Get in touch
        </a>
      </div>
    </header>
  );
}
