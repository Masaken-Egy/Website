import Reveal from "../Reveal";

const AREAS = [
  {
    name: "New Cairo",
    region: "East Cairo",
    type: "Long-term & furnished rentals · Housekeeping",
    status: "Now onboarding",
    live: true,
  },
  {
    name: "Sheikh Zayed",
    region: "West Cairo",
    type: "Long-term & furnished rentals",
    status: "Next",
    live: false,
  },
  {
    name: "Maadi",
    region: "South Cairo",
    type: "Long-term & furnished rentals",
    status: "Next",
    live: false,
  },
  {
    name: "Further districts",
    region: "Greater Cairo",
    type: "As each district proves out",
    status: "Planned",
    live: false,
  },
];

export default function Coverage() {
  return (
    <section id="districts" className="relative py-28 md:py-44 bg-limestone-2">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <Reveal>
          <div data-reveal className="flex items-baseline gap-6 mb-14">
            <span className="text-xs text-sage tnum">08</span>
            <p className="eyebrow">Where we operate</p>
          </div>
          <h2
            data-reveal
            className="display text-[clamp(2rem,4.5vw,4rem)] max-w-[20ch] text-ink mb-6"
          >
            Starting in New Cairo. On purpose.
          </h2>
          <p
            data-reveal
            className="max-w-[52ch] text-ink/65 leading-relaxed mb-24"
          >
            Density is the service. One team that knows the compounds, one
            housekeeping crew in the district, viewings batched instead of
            scattered across the city. We go deep in one district, prove it,
            then move to the next.
          </p>
        </Reveal>

        <Reveal stagger={0.07}>
          <div className="border-t border-(--line)">
            {AREAS.map((a) => (
              <div
                key={a.name}
                data-reveal
                className="group grid grid-cols-2 md:grid-cols-12 gap-x-4 gap-y-1 items-baseline border-b border-(--line) py-6 md:py-7 transition-colors duration-700 hover:bg-ink/[0.025]"
              >
                <h3 className="col-span-2 md:col-span-4 font-display text-xl md:text-2xl text-ink">
                  {a.name}
                </h3>
                <span className="md:col-span-2 text-[11px] font-medium uppercase tracking-[0.18em] text-taupe">
                  {a.region}
                </span>
                <span className="md:col-span-4 text-sm text-ink/55">
                  {a.type}
                </span>
                <span
                  className={`md:col-span-2 md:text-right text-[11px] font-medium uppercase tracking-[0.18em] ${
                    a.live ? "text-sage" : "text-taupe"
                  }`}
                >
                  {a.live && (
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-sage mr-2 align-middle" />
                  )}
                  {a.status}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
