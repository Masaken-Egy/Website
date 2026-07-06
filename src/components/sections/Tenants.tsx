import Reveal from "../Reveal";
import Magnetic from "../Magnetic";

const PROMISES = [
  "Every listing verified — we've met the owner and walked the unit ourselves",
  "Photos taken in the apartment you'll actually stand in",
  "A standard bilingual contract you can read before you sign",
  "Your deposit documented in the contract, with a signed condition report",
  "No dead posts, no reposted bait, no “DM me” runaround",
];

export default function Tenants() {
  return (
    <section id="tenants" className="relative py-28 md:py-44">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 grid lg:grid-cols-12 gap-12">
        <Reveal className="lg:col-span-5 lg:col-start-7 order-1">
          <div data-reveal className="flex items-baseline gap-6 mb-14">
            <span className="text-xs text-sage tnum">05</span>
            <p className="eyebrow">For tenants</p>
          </div>
          <h2
            data-reveal
            className="display text-[clamp(2rem,4vw,3.6rem)] text-ink mb-8"
          >
            Real apartment. Real owner. Real contract.
          </h2>
          <p data-reveal className="text-ink/70 leading-relaxed mb-12">
            Finding a home shouldn&rsquo;t mean scrolling a thousand dead
            posts and wiring a deposit to a stranger. Every apartment on
            Masaken exists, belongs to the person letting it, and comes with
            a contract that protects you. Browsing is free.
          </p>
          <ul className="space-y-0">
            {PROMISES.map((p) => (
              <li
                key={p}
                data-reveal
                className="group flex gap-5 items-baseline border-t border-(--line) py-5 last:border-b"
              >
                <span className="text-taupe text-xs transition-transform duration-500 group-hover:translate-x-1.5">
                  →
                </span>
                <span className="text-ink/80 text-sm md:text-base">{p}</span>
              </li>
            ))}
          </ul>
          <div data-reveal className="mt-12">
            <Magnetic>
              <a
                href="#start"
                className="inline-block bg-ink text-limestone px-8 py-4 text-[11px] font-medium uppercase tracking-[0.22em] hover:bg-graphite transition-colors duration-500"
              >
                Join the waitlist
              </a>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
