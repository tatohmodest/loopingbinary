"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandMark from "@/components/BrandMark";
import { NAV } from "@/lib/site";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [preview, setPreview] = useState<string>(NAV[0]?.preview ?? "/lblogo/infinity.png");
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
          <BrandMark variant="infinity" />
        </Link>
        <p className="top-loc">Douala</p>
        <Link href="/contact" className="top-cta" data-cursor="start" onClick={close}>
          Start a Project
        </Link>
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
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={close}
                  onPointerEnter={() => setPreview(item.preview)}
                  data-cursor="go"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/contact" className="overlay-cta" onClick={close} data-cursor="start">
            Start a Project
          </Link>
        </nav>
        <div className="overlay-shot" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          {preview ? <img src={preview} alt="" /> : null}
          <p>{pathname === "/" ? "Digital headquarters." : "Looping Binary"}</p>
        </div>
      </div>
    </>
  );
}
