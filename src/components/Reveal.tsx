"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * Staggered entrance on scroll. Children marked with [data-reveal] animate
 * in sequence; if none are marked, the wrapper itself animates. Disabled
 * entirely under prefers-reduced-motion via gsap.matchMedia.
 */
export default function Reveal({
  children,
  className,
  y = 36,
  stagger = 0.1,
  start = "top 78%",
}: {
  children: React.ReactNode;
  className?: string;
  y?: number;
  stagger?: number;
  start?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const marked = el.querySelectorAll("[data-reveal]");
        const targets = marked.length ? marked : el;
        gsap.from(targets, {
          y,
          autoAlpha: 0,
          duration: 1.1,
          ease: "power3.out",
          stagger,
          scrollTrigger: { trigger: el, start },
        });
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
