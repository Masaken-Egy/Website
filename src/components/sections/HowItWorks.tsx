import Reveal from "../Reveal";

const STEPS = [
  {
    title: "Verify",
    detail:
      "We confirm the owner, walk the unit, and photograph it ourselves. Honest condition notes included — the listing describes the apartment as it is, not as a broker would sell it.",
  },
  {
    title: "Match",
    detail:
      "Tenants are vetted before they view. Viewings are scheduled and batched, so owners aren't fielding twenty calls for three serious visitors.",
  },
  {
    title: "Contract",
    detail:
      "A standard bilingual lease with a fixed term and terms both sides understand. Signed properly, copied to both parties, enforceable if it ever has to be.",
  },
  {
    title: "Protect",
    detail:
      "Deposit terms written into the contract, a signed condition report at move-in, and digital payment with a receipt. The move-out inspection uses the same report — no arguments from memory.",
  },
  {
    title: "Care",
    detail:
      "For managed units: rent collection, maintenance coordination, housekeeping, and renewals — closed out with a monthly statement that accounts for every pound.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-28 md:py-44">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <Reveal>
          <div
            data-reveal
            className="flex items-baseline gap-6 mb-14 md:justify-end"
          >
            <span className="text-xs text-sage tnum">03</span>
            <p className="eyebrow">How it works</p>
          </div>
          <h2
            data-reveal
            className="display text-[clamp(2rem,4.5vw,4rem)] max-w-[16ch] text-ink mb-24 md:ml-auto md:text-right"
          >
            From first viewing to final statement.
          </h2>
        </Reveal>

        <Reveal stagger={0.09}>
          <ol className="border-t border-(--line)">
            {STEPS.map((s, i) => (
              <li
                key={s.title}
                data-reveal
                className="group border-b border-(--line) py-7 md:py-9 grid md:grid-cols-12 gap-4 items-baseline transition-colors duration-700 hover:bg-ink/[0.025]"
              >
                <span className="md:col-span-1 text-xs text-taupe tnum">
                  0{i + 1}
                </span>
                <h3 className="md:col-span-4 font-display text-2xl md:text-3xl text-ink group-hover:translate-x-2 transition-transform duration-700">
                  {s.title}
                </h3>
                <p className="md:col-span-6 md:col-start-7 text-sm leading-relaxed text-ink/65">
                  {s.detail}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
