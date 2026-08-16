"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  ["/work", "Work"],
  ["/#work", "Reel"],
  ["/#stack", "Stack"],
  ["/#the-loop", "Loop"],
  ["/#contact", "Talk"],
] as const;

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

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
    <header className="top">
      <Link href="/" className="top-mark" aria-label="Looping Binary home" onClick={close}>
        <svg viewBox="0 0 200 100" width="42" height="21" aria-hidden="true">
          <path
            d="M100 50 C100 22 78 5 52 5 C26 5 5 22 5 50 C5 78 26 95 52 95 C78 95 100 78 100 50 C100 22 122 5 148 5 C174 5 195 22 195 50 C195 78 174 95 148 95 C122 95 100 78 100 50Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="14"
          />
        </svg>
        <span>LB</span>
      </Link>

      <p className="top-loc">Douala</p>

      <button
        ref={toggleRef}
        className="top-menu"
        aria-expanded={open}
        aria-controls="overlay"
        onClick={() => setOpen((v) => !v)}
        data-cursor="menu"
      >
        {open ? "Close" : "Menu"}
      </button>
    </header>

      <div className={`overlay${open ? " is-open" : ""}`} id="overlay" aria-hidden={!open}>
        <nav>
          <ul>
            {LINKS.map(([href, label]) => (
              <li key={href}>
                <Link href={href} onClick={close} data-cursor="go">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p>{pathname === "/" ? "You are home." : "Back when you are ready."}</p>
      </div>
    </>
  );
}
