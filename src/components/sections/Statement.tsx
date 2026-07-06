import Reveal from "../Reveal";
import Magnetic from "../Magnetic";

const LEDGER = [
  { date: "Mar 03", entry: "Listed — verified photos, condition notes", amount: "—" },
  { date: "Mar 05 – 24", entry: "14 viewings, batched into three visits", amount: "—" },
  { date: "Mar 29", entry: "Let — 26 days on market", amount: "—" },
  { date: "Apr 01", entry: "First month's rent collected", amount: "39,000" },
  { date: "Apr 01", entry: "Management fee · 8%", amount: "− 3,120" },
];

export default function Statement() {
  return (
    <section
      id="for-owners"
      className="on-dark relative py-28 md:py-44 bg-graphite text-limestone"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 grid lg:grid-cols-12 gap-14">
        <Reveal className="lg:col-span-4 lg:sticky lg:top-28 self-start">
          <div data-reveal className="flex items-baseline gap-6 mb-14">
            <span className="text-xs text-steel tnum">04</span>
            <p className="eyebrow">For owners</p>
          </div>
          <h2
            data-reveal
            className="display text-[clamp(2rem,4vw,3.6rem)] text-limestone mb-8"
          >
            Hand over the keys. Keep every number.
          </h2>
          <p data-reveal className="text-limestone/70 leading-relaxed mb-6">
            Full management means we do all of it: listing, viewings, tenant
            vetting, the contract, rent collection, maintenance — at a set
            price, agreed before we start. Furnished units are run
            hospitality-grade, like a hotel suite with your name on the deed.
          </p>
          <p data-reveal className="text-limestone/70 leading-relaxed mb-10">
            Every month closes with a statement. What your unit earned, what
            was spent and why, what you were paid. If it&rsquo;s not on the
            statement, you don&rsquo;t pay it.
          </p>
          <div data-reveal className="flex flex-wrap items-center gap-5">
            <Magnetic>
              <a
                href="#start"
                className="inline-block bg-limestone text-ink px-8 py-4 text-[11px] font-medium uppercase tracking-[0.22em] hover:bg-stone transition-colors duration-500"
              >
                Get a management quote
              </a>
            </Magnetic>
            <a
              href="#start"
              className="u-link text-[11px] font-medium uppercase tracking-[0.22em] text-limestone/70"
            >
              List your unit — free
            </a>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-7 lg:col-start-6" y={48}>
          <div
            data-reveal
            className="border border-(--line-inv) bg-ink/20 p-8 md:p-12"
            aria-label="Sample monthly owner statement"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-4 pb-6 border-b border-(--line-inv)">
              <div>
                <p className="eyebrow mb-2">Owner statement · March</p>
                <p className="font-display text-2xl text-limestone">
                  New Cairo · 2BR · Long-term
                </p>
              </div>
              <div className="text-right">
                <p className="eyebrow mb-2">Monthly rent</p>
                <p className="font-display text-3xl md:text-4xl text-limestone tnum">
                  EGP 39,000
                </p>
              </div>
            </div>

            <table className="w-full mt-6 text-sm">
              <thead>
                <tr className="text-left text-[10px] font-medium uppercase tracking-[0.22em] text-stone">
                  <th className="py-3 font-medium">Date</th>
                  <th className="py-3 font-medium">Entry</th>
                  <th className="py-3 font-medium text-right">EGP</th>
                </tr>
              </thead>
              <tbody>
                {LEDGER.map((l) => (
                  <tr
                    key={l.entry}
                    className="border-t border-(--line-inv) text-limestone/85 hover:bg-limestone/[0.04] transition-colors duration-500"
                  >
                    <td className="py-3.5 tnum whitespace-nowrap pr-6">
                      {l.date}
                    </td>
                    <td className="py-3.5 text-steel">{l.entry}</td>
                    <td className="py-3.5 text-right tnum">{l.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-6 pt-5 border-t border-(--line-inv-strong) text-sm">
              <div className="flex justify-between items-baseline">
                <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-limestone">
                  Your payout · Apr 02 · InstaPay
                </span>
                <span className="font-display text-2xl text-limestone tnum">
                  EGP 35,880
                </span>
              </div>
            </div>
          </div>
          <p
            data-reveal
            className="mt-4 text-[10px] font-medium uppercase tracking-[0.22em] text-stone text-right"
          >
            Illustrative statement — the format every owner receives
          </p>
        </Reveal>
      </div>
    </section>
  );
}
