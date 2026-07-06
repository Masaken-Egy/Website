"use client";

import { useState } from "react";
import Reveal from "../Reveal";

const FAQS = [
  {
    q: "What does full management cost?",
    a: "Tenant placement is half to one month's rent. Ongoing management is 5–10% of monthly rent. Furnished units managed hospitality-grade run 15–25% of rental revenue. Every fee is quoted in writing after we see the unit — before you commit to anything.",
  },
  {
    q: "Is listing really free?",
    a: "Yes, and it stays free. Verification, our photos, and the standard contract are included. We earn from management, placement, and housekeeping — services you choose, not tolls on the introduction.",
  },
  {
    q: "How do you verify a listing?",
    a: "We meet the owner, confirm the unit is theirs to let, and walk it in person. The photos are taken by us, inside that unit, with honest condition notes. A listing without that process doesn't go up.",
  },
  {
    q: "How is my deposit protected?",
    a: "Deposit terms are written into the bilingual contract, you sign a condition report at move-in, and every payment has a digital receipt. At move-out, the same report — not anyone's memory — decides what comes back.",
  },
  {
    q: "Which areas do you cover?",
    a: "New Cairo first, deliberately — one district done properly before the next. Sheikh Zayed and Maadi follow. If you're elsewhere in Greater Cairo, join the waitlist and we'll tell you honestly when we get there.",
  },
  {
    q: "Who cleans my home?",
    a: "Vetted, trained crews on our payroll standard — the same crews that keep our managed apartments guest-ready. Fixed price before booking, checklist on site, photo confirmation when they're done.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-28 md:py-44">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 grid lg:grid-cols-12 gap-12">
        <Reveal className="lg:col-span-4">
          <div data-reveal className="flex items-baseline gap-6 mb-14">
            <span className="text-xs text-sage tnum">09</span>
            <p className="eyebrow">Questions</p>
          </div>
          <h2
            data-reveal
            className="display text-[clamp(2rem,4vw,3.6rem)] text-ink"
          >
            Plain answers.
          </h2>
        </Reveal>

        <Reveal className="lg:col-span-7 lg:col-start-6" stagger={0.08}>
          <div className="border-t border-(--line)">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q} data-reveal className="border-b border-(--line)">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="group w-full flex items-baseline justify-between gap-6 py-6 text-left cursor-pointer"
                  >
                    <h3
                      className={`font-display text-xl md:text-2xl transition-colors duration-500 ${
                        isOpen ? "text-ink" : "text-ink/85 group-hover:text-ink"
                      }`}
                    >
                      {f.q}
                    </h3>
                    <span
                      aria-hidden
                      className={`text-xl leading-none transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] ${
                        isOpen ? "rotate-45 text-sage" : "text-taupe"
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    id={`faq-answer-${i}`}
                    role="region"
                    className={`grid transition-[grid-template-rows] duration-600 ease-[cubic-bezier(0.65,0,0.35,1)] ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p
                        className={`pb-7 pr-10 text-sm md:text-base leading-relaxed text-ink/65 max-w-[60ch] transition-all duration-500 delay-100 ${
                          isOpen
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 -translate-y-1.5"
                        }`}
                      >
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
