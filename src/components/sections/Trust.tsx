import Reveal from "../Reveal";

const PILLARS = [
  {
    title: "Verified ownership",
    detail:
      "Before a unit is listed, we meet the owner, confirm the unit is theirs to let, and walk it ourselves. The photos are ours, taken inside the apartment you will actually see. No reposts, no bait, no dead listings.",
  },
  {
    title: "Contracts you can read",
    detail:
      "Every tenancy is signed on a standard bilingual contract — Arabic and English, same terms in both. Fixed term, clear notice, clear responsibilities. Both sides keep a copy; nothing lives in a chat thread.",
  },
  {
    title: "Deposits, documented",
    detail:
      "A signed condition report at move-in and again at move-out, deposit terms written into the contract, and a digital receipt for every pound that changes hands. Nothing off the books, ever.",
  },
];

export default function Trust() {
  return (
    <section id="trust" className="relative py-28 md:py-44 bg-limestone-2">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <Reveal>
          <div data-reveal className="flex items-baseline gap-6 mb-14">
            <span className="text-xs text-sage tnum">02</span>
            <p className="eyebrow">The trust layer</p>
          </div>
          <h2
            data-reveal
            className="display text-[clamp(2rem,4.5vw,4rem)] max-w-[18ch] text-ink mb-24"
          >
            Verified is not a badge. It&rsquo;s a process.
          </h2>
        </Reveal>

        <Reveal className="grid md:grid-cols-3 gap-px bg-(--line)" stagger={0.16}>
          {PILLARS.map((p, i) => (
            <div
              key={p.title}
              data-reveal
              className="bg-limestone-2 p-8 md:p-10"
            >
              <span className="text-[11px] text-taupe tnum">0{i + 1} —</span>
              <h3 className="font-display text-2xl text-ink mt-4 mb-5">
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed text-ink/65">{p.detail}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
