import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import Reveal, { Eyebrow } from "./Reveal";

const points = [
  "Freshly cooked to order — biryanis on dum, starters from a live wok",
  "Indian, Chinese, shawarma & pulavs under one roof",
  "Honest pricing at ₹200–₹400 per person",
  "Dine-in, takeaway, drive-through & delivery",
];

export default function About() {
  return (
    <section id="about" className="relative bg-coal-950 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="relative order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-[1.75rem] shadow-2xl shadow-black/50 ring-1 ring-white/10"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8 }}
              src="https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=1000&auto=format&fit=crop"
              alt="Freshly prepared chicken curry with rice at E2 Restaurant"
              className="aspect-[4/5] w-full object-cover sm:aspect-[5/5]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 rounded-2xl border border-white/15 bg-black/55 px-5 py-3 backdrop-blur-lg">
              <p className="font-display text-2xl font-semibold text-gold-400">₹200–400</p>
              <p className="text-xs text-cream-100/80">per person · honest pricing</p>
            </div>
          </motion.div>
          <div className="animate-float-soft absolute -top-5 -right-3 hidden rounded-2xl border border-gold-400/25 bg-coal-800/95 px-5 py-4 shadow-xl sm:block">
            <p className="font-display text-lg font-semibold text-cream-50">Dum Biryani</p>
            <p className="text-xs text-cream-100/70">made fresh, every day</p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <Reveal>
            <Eyebrow>Our story</Eyebrow>
            <h2 className="font-display mt-4 text-3xl font-semibold text-balance text-cream-50 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
              A neighbourhood kitchen with big Hyderabadi flavour.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-[15.5px] leading-relaxed text-cream-100/75">
              E2 Restaurant in Mallampet is where locals come for a proper
              biryani, crackling starters and comforting curries — without a
              fine-dine bill. Everything is freshly prepared, generously
              portioned and priced for everyday cravings, family dinners and
              group feasts.
            </p>
          </Reveal>
          <ul className="mt-7 space-y-3.5">
            {points.map((p, i) => (
              <Reveal key={p} delay={0.08 * i}>
                <li className="flex items-start gap-3 text-[14.5px] text-cream-100/85">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-chili-600/25 text-chili-500 ring-1 ring-chili-500/40">
                    <FiCheck size={13} strokeWidth={3} />
                  </span>
                  {p}
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#signatures"
                className="rounded-full border border-gold-400/40 px-6 py-3 text-sm font-bold text-gold-400 transition hover:bg-gold-400 hover:text-coal-950"
              >
                See signatures
              </a>
              <a href="#visit" className="rounded-full px-6 py-3 text-sm font-semibold text-cream-100/70 transition hover:text-cream-50">
                Plan your visit →
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
