"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandMark from "@/components/BrandMark";

const LINKS = [
  { href: "/work", label: "Projects" },
  { href: "/products", label: "Products" },
  { href: "/solutions", label: "Solutions" },
  { href: "/training", label: "Training" },
  { href: "/about", label: "About" },
] as const;

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const onHome = pathname === "/";
  const solid = !onHome || scrolled || open;

  useEffect(() => {
    if (!onHome) {
      setScrolled(false);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onHome]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      <header className={`top${solid ? " is-solid" : ""}`}>
        <Link href="/" className="top-mark" aria-label="Looping Binary home" onClick={close}>
          <BrandMark variant="infinity" />
          <span className="top-word">
            Looping <em>Binary</em>
          </span>
        </Link>

        <nav className="top-links" aria-label="Primary">
          {LINKS.map((item) => (
            <Link key={item.href} href={item.href} onClick={close}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="top-cta" onClick={close}>
          Start a project
        </Link>

        <button
          className="top-menu"
          aria-expanded={open}
          aria-controls="overlay"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </header>

      <div className={`overlay${open ? " is-open" : ""}`} id="overlay" aria-hidden={!open}>
        <nav>
          <ul>
            {LINKS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={close}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/insights" onClick={close}>
                Insights
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={close}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
