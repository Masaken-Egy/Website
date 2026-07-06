import Reveal from "../Reveal";

const PRICES = [
  {
    term: "Self-serve listing",
    detail:
      "Free to list, free to browse — always. Verification, real photos, and the standard contract come with it. We never charge for the connection.",
  },
  {
    term: "Tenant placement",
    detail:
      "Half to one month's rent, agreed before we list. Covers photography, viewings, vetting, the bilingual contract, and handover.",
  },
  {
    term: "Monthly management",
    detail:
      "5–10% of rent for collection, maintenance coordination, and renewals. Optional — add it when you're tired of the calls.",
  },
  {
    term: "Furnished, hospitality-grade",
    detail:
      "15–25% of rental revenue for furnished units run like hotel suites: multi-channel listing, guest handling, turnovers, monthly statements.",
  },
  {
    term: "Housekeeping",
    detail:
      "Fixed prices published before you book. Per visit or by subscription. Turnovers for managed units are billed on the owner statement.",
  },
];

export default function Model() {
  return (
    <section id="pricing" className="relative py-28 md:py-44">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 grid lg:grid-cols-12 gap-14 items-start">
        <Reveal className="lg:col-span-5">
          <div data-reveal className="flex items-baseline gap-6 mb-14">
            <span className="text-xs text-sage tnum">07</span>
            <p className="eyebrow">Pricing</p>
          </div>
          <h2
            data-reveal
            className="display text-[clamp(2rem,4vw,3.6rem)] text-ink mb-10"
          >
            A set price for everything. Agreed first.
          </h2>
          <div data-reveal className="flex items-baseline gap-5">
            <span className="font-display text-[clamp(4.5rem,9vw,8rem)] leading-none text-ink tnum">
              EGP 0
            </span>
          </div>
          <p data-reveal className="mt-6 max-w-[40ch] text-ink/65 leading-relaxed">
            to list your unit on the platform. The trust layer is free because
            it has to be — we earn when you choose management, placement, or
            housekeeping. Never for the introduction.
          </p>
        </Reveal>

        <Reveal className="lg:col-span-6 lg:col-start-7 lg:pt-28" stagger={0.12}>
          {PRICES.map((t) => (
            <div
              key={t.term}
              data-reveal
              className="border-t border-(--line) py-7 last:border-b grid sm:grid-cols-12 gap-2 sm:gap-6"
            >
              <h3 className="sm:col-span-5 font-display text-xl text-ink">
                {t.term}
              </h3>
              <p className="sm:col-span-7 text-sm leading-relaxed text-ink/60">
                {t.detail}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
