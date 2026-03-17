"use client";

import { useEffect, useRef } from "react";

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const SPACING = 38;
    const DOT_R = 1.4;
    const GREEN = "0,191,99";
    const BLUE = "0,151,178";
    const WHITE = "232,237,233";

    type Dot = { x: number; y: number; dist: number; bdist: number; phase: number; speed: number };
    let W = 0, H = 0, dots: Dot[] = [], raf = 0;
    let isDark = document.documentElement.getAttribute("data-theme") !== "light";

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      W = canvas!.offsetWidth;
      H = canvas!.offsetHeight;
      canvas!.width = W * dpr;
      canvas!.height = H * dpr;
      ctx!.scale(dpr, dpr);
      build();
    }

    function build() {
      const cols = Math.ceil(W / SPACING) + 2;
      const rows = Math.ceil(H / SPACING) + 2;
      dots = [];
      const offX = (W % SPACING) / 2;
      const offY = (H % SPACING) / 2;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = offX + c * SPACING;
          const y = offY + r * SPACING;
          const dx = x - W * 0.5;
          const dy = y - H * 0.45;
          const dist = Math.sqrt(dx * dx + dy * dy);
          // distance from bottom-right corner for blue glow
          const bdx = x - W * 0.85;
          const bdy = y - H * 0.82;
          const bdist = Math.sqrt(bdx * bdx + bdy * bdy);
          dots.push({
            x, y, dist, bdist,
            phase: Math.random() * Math.PI * 2,
            speed: 0.4 + Math.random() * 0.6,
          });
        }
      }
    }

    function draw(ts: number) {
      const t = ts * 0.001;
      ctx!.clearRect(0, 0, W, H);
      isDark = document.documentElement.getAttribute("data-theme") !== "light";
      const maxDist = Math.sqrt(W * W + H * H) * 0.5;

      for (const d of dots) {
        const pulse = 0.5 + 0.5 * Math.sin(t * d.speed + d.phase);
        const proximity = 1 - Math.min(d.dist / (maxDist * 0.55), 1);
        const proximityGlow = proximity * proximity;
        const baseOpacity = 0.07 + 0.08 * pulse;
        const glowOpacity = proximityGlow * (0.18 + 0.22 * pulse);

        // blue glow from bottom-right
        const bProximity = 1 - Math.min(d.bdist / (maxDist * 0.4), 1);
        const bGlowOpacity = bProximity * bProximity * (0.14 + 0.18 * pulse);

        if (baseOpacity > 0.01) {
          const color = isDark ? WHITE : "13,26,18";
          ctx!.beginPath();
          ctx!.arc(d.x, d.y, DOT_R, 0, Math.PI * 2);
          ctx!.fillStyle = `rgba(${color},${baseOpacity})`;
          ctx!.fill();
        }

        if (glowOpacity > 0.01) {
          ctx!.beginPath();
          ctx!.arc(d.x, d.y, DOT_R * (1 + proximityGlow * 0.8), 0, Math.PI * 2);
          ctx!.fillStyle = `rgba(${GREEN},${glowOpacity})`;
          ctx!.fill();
        }

        if (bGlowOpacity > 0.01) {
          ctx!.beginPath();
          ctx!.arc(d.x, d.y, DOT_R * (1 + bProximity * 0.8), 0, Math.PI * 2);
          ctx!.fillStyle = `rgba(${BLUE},${bGlowOpacity})`;
          ctx!.fill();
        }
      }

      raf = requestAnimationFrame(draw);
    }

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    resize();
    if (prefersReduced) {
      requestAnimationFrame((ts) => {
        draw(ts);
        cancelAnimationFrame(raf);
      });
    } else {
      raf = requestAnimationFrame(draw);
    }

    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        cancelAnimationFrame(raf);
        resize();
        raf = requestAnimationFrame(draw);
      }, 150);
    };
    window.addEventListener("resize", onResize);

    const onTheme = () => {
      isDark =
        document.documentElement.getAttribute("data-theme") !== "light";
    };
    document.documentElement.addEventListener("themechange", onTheme);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
      document.documentElement.removeEventListener("themechange", onTheme);
    };
  }, []);

  return (
    <canvas className="hero-canvas" ref={canvasRef} aria-hidden="true" />
  );
}
