"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";

/**
 * Brass dot + lagging ring accent cursor. The native cursor stays visible
 * (usability first); this is an accent, not a replacement. Renders nothing
 * on coarse pointers or under reduced motion.
 */
export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  // Client-only gate: fine pointer + motion allowed. False on the server.
  const enabled = useSyncExternalStore(
    () => () => {},
    () =>
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false
  );

  useEffect(() => {
    if (!enabled) return;
    const pos = { x: -100, y: -100 };
    const ring = { x: -100, y: -100 };
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      const target = e.target as HTMLElement;
      const hover = !!target.closest("a, button, [data-cursor]");
      ringRef.current?.classList.toggle("is-hover", hover);
    };

    const loop = () => {
      ring.x += (pos.x - ring.x) * 0.16;
      ring.y += (pos.y - ring.y) * 0.16;
      if (dotRef.current)
        dotRef.current.style.transform = `translate(${pos.x - 2.5}px, ${pos.y - 2.5}px)`;
      if (ringRef.current) {
        const half = ringRef.current.offsetWidth / 2;
        ringRef.current.style.transform = `translate(${ring.x - half}px, ${ring.y - half}px)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, [enabled]);

  if (!enabled) return null;
  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
