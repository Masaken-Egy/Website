import Reveal from "../Reveal";
import Magnetic from "../Magnetic";

const STANDARDS = [
  "Vetted, trained crews — the same people, visit after visit",
  "A fixed price, agreed before anyone rings your bell",
  "On time, to a checklist, confirmed with photos when done",
  "Weekly or monthly subscriptions, or a one-off deep clean",
  "Open to everyone in the district — you don't need to rent through us",
];

export default function Housekeeping() {
  return (
    <section
      id="housekeeping"
      className="relative py-28 md:py-44 bg-limestone-2"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 grid lg:grid-cols-12 gap-12">
        <Reveal className="lg:col-span-5">
          <div data-reveal className="flex items-baseline gap-6 mb-14">
            <span className="text-xs text-sage tnum">06</span>
            <p className="eyebrow">Housekeeping</p>
          </div>
          <h2
            data-reveal
            className="display text-[clamp(2rem,4vw,3.6rem)] text-ink mb-8"
          >
            Hotel housekeeping. Your address.
          </h2>
          <p data-reveal className="text-ink/70 leading-relaxed mb-12">
            The crews that keep our managed apartments guest-ready also clean
            homes across the district. Not a gig marketplace — a housekeeping
            operation, run to a hotel&rsquo;s standard, at prices you see
            before you book.
          </p>
          <ul className="space-y-0">
            {STANDARDS.map((s) => (
              <li
                key={s}
                data-reveal
                className="group flex gap-5 items-baseline border-t border-(--line) py-5 last:border-b"
              >
                <span className="text-taupe text-xs transition-transform duration-500 group-hover:translate-x-1.5">
                  →
                </span>
                <span className="text-ink/80 text-sm md:text-base">{s}</span>
              </li>
            ))}
          </ul>
          <div data-reveal className="mt-12">
            <Magnetic>
              <a
                href="#start"
                className="inline-block bg-ink text-limestone px-8 py-4 text-[11px] font-medium uppercase tracking-[0.22em] hover:bg-graphite transition-colors duration-500"
              >
                Book a cleaning
              </a>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
