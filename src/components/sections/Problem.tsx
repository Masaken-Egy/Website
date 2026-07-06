import Reveal from "../Reveal";

const PAINS = [
  {
    who: "If you own",
    pain: "You post your unit into a Facebook group and hope. Strangers walk through your home unvetted. The contract — if there is one — wouldn't survive a dispute. And the broker who found your tenant disappears the day the fee clears.",
  },
  {
    who: "If you rent",
    pain: "The photos belong to a different flat. The listing was let weeks ago, or never existed. Someone wants a deposit before you've seen a key. When something goes wrong after move-in, there is no one to call — because there was never anyone accountable.",
  },
  {
    who: "The middleman today",
    pain: "The broker works from a phone contact list. No verification, no standard contract, no deposit protection, no record of anything. He is paid for the introduction — not for what happens after. Everything after is your problem.",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="relative py-28 md:py-44">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <Reveal>
          <div data-reveal className="flex items-baseline gap-6 mb-14">
            <span className="text-xs text-sage tnum">01</span>
            <p className="eyebrow">The problem</p>
          </div>
          <h2
            data-reveal
            className="display text-[clamp(2rem,4.5vw,4rem)] max-w-[18ch] text-ink mb-24"
          >
            Renting in Cairo still runs on Facebook groups, brokers, and luck.
          </h2>
        </Reveal>

        <Reveal className="grid md:grid-cols-3 gap-px bg-(--line)" stagger={0.16}>
          {PAINS.map((p, i) => (
            <div
              key={p.who}
              data-reveal
              className="bg-limestone p-8 md:p-10 group"
            >
              <span className="text-[11px] text-taupe tnum">0{i + 1} —</span>
              <h3 className="font-display text-2xl text-ink mt-4 mb-5">
                {p.who}
              </h3>
              <p className="text-sm leading-relaxed text-ink/65">{p.pain}</p>
            </div>
          ))}
        </Reveal>

        <Reveal>
          <p
            data-reveal
            className="mt-24 max-w-[44ch] ml-auto text-lg md:text-xl leading-relaxed text-ink/80 font-display"
          >
            The scams work because nothing is verified and no one is
            accountable. So verification and accountability aren&rsquo;t
            features we added. They are the product.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
