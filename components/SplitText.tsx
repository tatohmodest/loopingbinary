'use client';
import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText as GSAPSplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, GSAPSplitText, useGSAP);

interface SplitTextProps {
  text: string;
  className?: string;
  /** stagger delay between each character in ms (default 50) */
  delay?: number;
  /** initial delay in seconds before the whole animation starts (default 0) */
  startDelay?: number;
  duration?: number;
  ease?: string;
  splitType?: string;
  from?: Record<string, unknown>;
  to?: Record<string, unknown>;
  threshold?: number;
  rootMargin?: string;
  textAlign?: React.CSSProperties['textAlign'];
  tag?: string;
  onLetterAnimationComplete?: () => void;
}

export default function SplitText({
  text,
  className = '',
  delay = 50,
  startDelay = 0,
  duration = 1.25,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  tag = 'p',
  onLetterAnimationComplete,
}: SplitTextProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);
  const animationDone = useRef(false);
  const onCompleteRef = useRef(onLetterAnimationComplete);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    onCompleteRef.current = onLetterAnimationComplete;
  }, [onLetterAnimationComplete]);

  useEffect(() => {
    if (document.fonts.status === 'loaded') {
      setFontsLoaded(true);
    } else {
      document.fonts.ready.then(() => setFontsLoaded(true));
    }
  }, []);

  useGSAP(
    () => {
      if (!ref.current || !text || !fontsLoaded || animationDone.current) return;
      const el = ref.current;

      if (el._rbsplitInstance) {
        try { el._rbsplitInstance.revert(); } catch (_) { /* noop */ }
        el._rbsplitInstance = null;
      }

      const startPct = (1 - threshold) * 100;
      const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
      const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;
      const marginUnit = marginMatch ? marginMatch[2] || 'px' : 'px';
      const sign =
        marginValue === 0 ? '' :
          marginValue < 0
            ? `-=${Math.abs(marginValue)}${marginUnit}`
            : `+=${marginValue}${marginUnit}`;
      const triggerStart = `top ${startPct}%${sign}`;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let targets: any[] = [];
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const assignTargets = (self: any) => {
        if (splitType.includes('chars') && self.chars?.length) targets = self.chars;
        else if (splitType.includes('words') && self.words?.length) targets = self.words;
        else if (splitType.includes('lines') && self.lines?.length) targets = self.lines;
        else targets = self.chars || self.words || self.lines || [];
      };

      const splitInstance = new GSAPSplitText(el, {
        type: splitType,
        smartWrap: true,
        autoSplit: splitType === 'lines',
        linesClass: 'split-line',
        wordsClass: 'split-word',
        charsClass: 'split-char',
        reduceWhiteSpace: false,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onSplit: (self: any) => {
          assignTargets(self);
          return gsap.fromTo(
            targets,
            { ...from },
            {
              ...to,
              duration,
              ease,
              delay: startDelay,
              stagger: delay / 1000,
              scrollTrigger: {
                trigger: el,
                start: triggerStart,
                once: true,
                fastScrollEnd: true,
                anticipatePin: 0.4,
              },
              onComplete: () => {
                animationDone.current = true;
                onCompleteRef.current?.();
              },
              willChange: 'transform, opacity',
              force3D: true,
            }
          );
        },
      });

      el._rbsplitInstance = splitInstance;

      return () => {
        ScrollTrigger.getAll().forEach((st) => {
          if (st.trigger === el) st.kill();
        });
        try { splitInstance.revert(); } catch (_) { /* noop */ }
        el._rbsplitInstance = null;
      };
    },
    {
      dependencies: [
        text, delay, startDelay, duration, ease, splitType,
        JSON.stringify(from), JSON.stringify(to),
        threshold, rootMargin, fontsLoaded,
      ],
      scope: ref,
    }
  );

  return React.createElement(
    tag,
    {
      ref,
      style: {
        textAlign,
        overflow: 'hidden',
        display: 'inline-block',
        whiteSpace: 'normal',
        overflowWrap: 'break-word',
        willChange: 'transform, opacity',
      },
      className: `split-parent ${className}`.trim(),
    },
    text
  );
}
