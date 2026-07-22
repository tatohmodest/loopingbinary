"use client";

import { useRef, type ReactNode, type AnchorHTMLAttributes, type MouseEvent } from "react";
import gsap from "gsap";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  className?: string;
};

export default function MagneticButton({ children, className = "", ...rest }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(el, { x: x * 0.22, y: y * 0.22, duration: 0.35, ease: "power3.out" });
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    gsap.to(el, { x: 0, y: 0, duration: 0.55, ease: "elastic.out(1, 0.4)" });
  };

  return (
    <a
      ref={ref}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      {...rest}
    >
      {children}
    </a>
  );
}
