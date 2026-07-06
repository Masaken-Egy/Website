"use client";

import { useState } from "react";
import Reveal from "../Reveal";
import Magnetic from "../Magnetic";

const DISTRICTS = ["New Cairo", "Sheikh Zayed", "Maadi", "Elsewhere in Cairo"];

const INTENTS = [
  "Full management for my unit",
  "List my unit — free",
  "Find an apartment — join the waitlist",
  "Book a cleaning",
];

const inputCls =
  "w-full bg-transparent border-b border-(--line-strong) py-3.5 text-ink placeholder:text-taupe/60 focus:outline-none focus:border-sage transition-colors duration-500";

export default function LeadForm() {
  const [sent, setSent] = useState(false);

  return (
    <section id="start" className="relative py-28 md:py-48 bg-limestone-2">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 grid lg:grid-cols-12 gap-14">
        <Reveal className="lg:col-span-5">
          <div data-reveal className="flex items-baseline gap-6 mb-14">
            <span className="text-xs text-sage tnum">10</span>
            <p className="eyebrow">Get started</p>
          </div>
          <h2
            data-reveal
            className="display text-[clamp(2.2rem,5vw,4.5rem)] text-ink mb-8"
          >
            Start with one conversation.
          </h2>
          <p data-reveal className="text-ink/70 leading-relaxed max-w-[44ch]">
            Owner, tenant, or just someone who wants the apartment cleaned
            properly — tell us what you need. A person, not a bot, replies on
            WhatsApp within 48 hours.
          </p>
          <p
            data-reveal
            className="mt-8 text-[11px] font-medium uppercase tracking-[0.22em] text-taupe"
          >
            New Cairo first · No obligation
          </p>
        </Reveal>

        <div className="lg:col-span-6 lg:col-start-7">
          {sent ? (
            <div className="card p-10 md:p-14">
              <p className="font-display text-3xl text-ink mb-4">
                Received. <span className="text-sage">شكراً</span>
              </p>
              <p className="text-ink/70 leading-relaxed">
                We&rsquo;ll reply on WhatsApp within 48 hours. If you asked
                about a district we haven&rsquo;t reached yet, we&rsquo;ll say
                so honestly.
              </p>
            </div>
          ) : (
            <Reveal y={40}>
              <form
                data-reveal
                className="card p-8 md:p-12 space-y-7"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div className="grid sm:grid-cols-2 gap-7">
                  <label className="block">
                    <span className="eyebrow block mb-2">Name</span>
                    <input
                      required
                      name="name"
                      autoComplete="name"
                      className={inputCls}
                      placeholder="Your name"
                    />
                  </label>
                  <label className="block">
                    <span className="eyebrow block mb-2">WhatsApp number</span>
                    <input
                      required
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      className={inputCls}
                      placeholder="+20 1x xxx xxxx"
                    />
                  </label>
                </div>
                <div className="grid sm:grid-cols-2 gap-7">
                  <label className="block">
                    <span className="eyebrow block mb-2">I want to</span>
                    <select
                      required
                      name="intent"
                      defaultValue=""
                      className={`${inputCls} appearance-none [&>option]:bg-limestone`}
                    >
                      <option value="" disabled>
                        Choose one
                      </option>
                      {INTENTS.map((i) => (
                        <option key={i}>{i}</option>
                      ))}
                    </select>
                  </label>
                  <label className="block">
                    <span className="eyebrow block mb-2">District</span>
                    <select
                      required
                      name="district"
                      defaultValue=""
                      className={`${inputCls} appearance-none [&>option]:bg-limestone`}
                    >
                      <option value="" disabled>
                        Select district
                      </option>
                      {DISTRICTS.map((d) => (
                        <option key={d}>{d}</option>
                      ))}
                    </select>
                  </label>
                </div>
                <label className="block">
                  <span className="eyebrow block mb-2">
                    Anything we should know{" "}
                    <span className="normal-case tracking-normal">
                      (optional)
                    </span>
                  </span>
                  <input
                    name="notes"
                    className={inputCls}
                    placeholder="e.g. 2BR in a compound, currently listed in a Facebook group"
                  />
                </label>
                <div className="pt-2">
                  <Magnetic>
                    <button
                      type="submit"
                      className="bg-ink text-limestone px-10 py-4 text-[11px] font-medium uppercase tracking-[0.22em] hover:bg-graphite transition-colors duration-500 cursor-pointer"
                    >
                      Send — we reply on WhatsApp
                    </button>
                  </Magnetic>
                </div>
              </form>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
