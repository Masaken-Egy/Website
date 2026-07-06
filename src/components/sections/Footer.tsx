export default function Footer() {
  return (
    <footer className="on-dark relative bg-ink text-limestone">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-16 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <p className="flex items-baseline gap-3 mb-4">
            <span className="font-display text-3xl text-limestone">
              Masaken
            </span>
            <span className="text-lg text-stone" dir="rtl">
              مساكن
            </span>
          </p>
          <p className="max-w-[36ch] text-sm leading-relaxed text-limestone/55">
            The rental relationship, professionally cared for. The verified
            alternative to the Facebook group and the broker — starting in
            New Cairo.
          </p>
        </div>

        <div className="md:col-span-3 md:col-start-7">
          <p className="eyebrow mb-5">Contact</p>
          <ul className="space-y-3 text-sm text-limestone/70">
            <li>
              <a href="mailto:hello@masaken.example" className="u-link">
                hello@masaken.example
              </a>
            </li>
            <li>
              <a href="#start" className="u-link">
                WhatsApp — request a callback
              </a>
            </li>
            <li>
              <a href="#top" className="u-link">
                Instagram — @masaken.cairo
              </a>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2 md:col-start-11">
          <p className="eyebrow mb-5">Districts</p>
          <ul className="space-y-3 text-sm text-limestone/70">
            <li>New Cairo</li>
            <li>Sheikh Zayed — next</li>
            <li>Maadi — next</li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-(--line-inv)">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-6 flex flex-wrap justify-between gap-4 text-[10px] font-medium uppercase tracking-[0.22em] text-stone">
          <span>© 2026 Masaken · Cairo, Egypt</span>
          <span>Verified listings · Every pound accounted for</span>
        </div>
      </div>
    </footer>
  );
}
