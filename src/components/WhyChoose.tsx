import { FiDollarSign, FiHome, FiShoppingBag, FiTruck, FiUsers, FiZap } from "react-icons/fi";
import Reveal, { SectionHeading } from "./Reveal";

const reasons = [
  { icon: FiZap, title: "Wide variety", desc: "12 categories — biryani to shawarma to Hakka noodles." },
  { icon: FiHome, title: "Freshly prepared", desc: "Cooked to order, dum-hot and wok-fresh." },
  { icon: FiDollarSign, title: "Honest pricing", desc: "Full meals at ₹200–₹400 per person." },
  { icon: FiShoppingBag, title: "Dine-in & takeaway", desc: "Quick parcels, drive-through & kerbside pickup." },
  { icon: FiTruck, title: "Delivery", desc: "Hot to your doorstep around Mallampet." },
  { icon: FiUsers, title: "Family friendly", desc: "Comfortable for solo diners, families & groups." },
];

export default function WhyChoose() {
  return (
    <section className="bg-coal-950 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Why E2"
          title="Simple reasons regulars keep returning."
        />
        <div className="mt-12 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={(i % 3) * 0.08}>
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold-400/25 bg-gold-400/8 text-gold-400">
                  <r.icon size={19} />
                </span>
                <div>
                  <h3 className="text-[15.5px] font-bold text-cream-50">{r.title}</h3>
                  <p className="mt-1 text-[13.5px] leading-relaxed text-cream-100/60">
                    {r.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
