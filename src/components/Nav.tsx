"use client";

import { useEffect, useState } from "react";
import Magnetic from "./Magnetic";

const LINKS = [
  { href: "#for-owners", label: "For owners" },
  { href: "#tenants", label: "For tenants" },
  { href: "#housekeeping", label: "Housekeeping" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-colors duration-700 ${
        scrolled ? "glass" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-[1400px] px-6 md:px-12 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2.5">
          <span className="font-display text-xl tracking-tight text-ink">
            Masaken
          </span>
          <span className="text-sm text-taupe" dir="rtl">
            مساكن
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="u-link text-[11px] font-medium uppercase tracking-[0.22em] text-taupe hover:text-ink transition-colors duration-500"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <Magnetic strength={0.25}>
          <a
            href="#start"
            className="inline-flex items-center gap-2 border border-ink/30 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.22em] text-ink hover:bg-ink hover:text-limestone transition-colors duration-500"
          >
            List your unit — free
          </a>
        </Magnetic>
      </nav>
    </header>
  );
}
