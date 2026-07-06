"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Reveal from "../Reveal";
import Magnetic from "../Magnetic";
import heroVilla from "../../../public/hero-villa.png";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const zoomRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Slow Ken Burns zoom, scrubbed to scroll while the hero leaves the viewport
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          zoomRef.current,
          { scale: 1.08 },
          {
            scale: 1.3,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });

      // Reduced motion: freeze mid-zoom, no animation
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(zoomRef.current, { scale: 1.15 });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative min-h-[100svh] flex flex-col justify-between overflow-hidden"
    >
      {/* Full-bleed image, zooming toward the house (not the sky) */}
      <div className="absolute inset-0">
<div
  ref={zoomRef}
  className="absolute inset-0"
  style={{
    transformOrigin: "52% 65%",
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
    transform: "translateZ(0)",
  }}
>
          <Image
            src={heroVilla}
            alt="Minimalist limestone villa with dark timber screens at dusk"
            fill
            preload
            placeholder="blur"
            quality={90}
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "50% 56%" }}
          />
        </div>
        {/* Readability layers: light veil under the type, soft edge vignette */}
        <div className="absolute inset-0 hero-scrim pointer-events-none" />
        <div className="absolute inset-0 hero-vignette pointer-events-none" />
      </div>

      {/* Copy sits in the empty sky, upper left */}
      <div className="relative mx-auto max-w-[1400px] w-full px-6 md:px-12 pt-32 md:pt-40">
        <Reveal stagger={0.14}>
          <p data-reveal className="eyebrow mb-8">
            Rental hospitality · Starting in New Cairo
          </p>

          <h1
            data-reveal
            className="display text-[clamp(2.4rem,5.2vw,4.8rem)] max-w-[15ch] text-ink"
          >
            The rental relationship,
            <em className="block font-light italic text-ink/80 mt-3">
              professionally cared for.
            </em>
          </h1>

          <div data-reveal className="mt-10 md:mt-12 max-w-md">
            <p className="text-base leading-relaxed text-ink/90">
              Masaken replaces the Facebook group and the broker. Verified
              listings, real contracts, protected deposits — and housekeeping
              run to a hotel standard. Hand us everything, or list free and
              stay hands-on.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Magnetic>
                <a
                  href="#start"
                  className="inline-block bg-ink text-limestone px-8 py-4 text-[11px] font-medium uppercase tracking-[0.22em] hover:bg-graphite transition-colors duration-500"
                >
                  List your unit — free
                </a>
              </Magnetic>
              <a
                href="#how"
                className="u-link text-[11px] font-medium uppercase tracking-[0.22em] text-ink/70"
              >
                How it works ↓
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Terms strip over the driveway, frosted for legibility */}
      <div className="relative mt-16">
        <div className="bg-limestone/40 backdrop-blur-sm border-t border-(--line)">
          <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-5 flex flex-wrap gap-x-12 gap-y-2 text-[10px] font-medium uppercase tracking-[0.22em] text-ink/80">
            <span>Verified listings</span>
            <span>Bilingual contracts</span>
            <span>Protected deposits</span>
            <span>Fixed-price housekeeping</span>
          </div>
        </div>
      </div>
    </section>
  );
}
