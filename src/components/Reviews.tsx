import { FiStar } from "react-icons/fi";
import Reveal, { SectionHeading } from "./Reveal";

const reviews = [
  {
    name: "Sai Kiran",
    meta: "Local Guide · Family dinner",
    text: "Chicken dum biryani was flavourful and the portion size is genuinely good for the price. Majestic chicken is a must-try here.",
  },
  {
    name: "Priya Reddy",
    meta: "Takeaway regular",
    text: "Ordered boneless biryani and shawarma for takeaway — hot, fresh and packed well. Best pocket-friendly spot near Mallampet.",
  },
  {
    name: "Mohammed Faiz",
    meta: "Group dinner",
    text: "Went with friends, tried pepper chicken and chicken pulav. Service was quick and everything tasted freshly made. Will visit again.",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="Rated 4.2 out of 5">
      {[0, 1, 2, 3].map((i) => (
        <FiStar key={i} size={15} className="fill-gold-400 text-gold-400" />
      ))}
      <FiStar size={15} className="text-gold-400/40" />
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="relative bg-coal-900 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Reviews"
          title="Loved by the neighbourhood."
        />

        <Reveal delay={0.1}>
          <div className="mx-auto mt-8 flex w-fit items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4">
            <p className="font-display text-4xl font-semibold text-cream-50">4.2</p>
            <div>
              <Stars />
              <p className="mt-1 text-xs text-cream-100/60">from 69 Google reviews</p>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.08}>
              <blockquote className="flex h-full flex-col rounded-3xl border border-white/8 bg-coal-800/80 p-6">
                <Stars />
                <p className="mt-4 flex-1 text-[14px] leading-relaxed text-cream-100/80">
                  “{r.text}”
                </p>
                <footer className="mt-5 border-t border-white/8 pt-4">
                  <p className="text-sm font-bold text-cream-50">{r.name}</p>
                  <p className="text-xs text-cream-100/50">{r.meta}</p>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
