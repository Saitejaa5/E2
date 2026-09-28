import { motion } from "framer-motion";
import { signatureDishes } from "../data/menu";
import Reveal, { SectionHeading } from "./Reveal";

export default function Signature() {
  return (
    <section id="signatures" className="relative bg-coal-900 py-20 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(192,57,43,0.16),transparent)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Crowd favourites"
          title="Signatures people drive to Mallampet for."
          sub="Slow-dum biryanis, fiery Apollo-style starters and wok-tossed classics — the plates E2 is known for."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {signatureDishes.map((d, i) => (
            <Reveal key={d.name} delay={(i % 3) * 0.08}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group relative overflow-hidden rounded-3xl bg-coal-800 ring-1 ring-white/8 transition-shadow hover:shadow-2xl hover:shadow-black/50"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={d.img}
                    alt={d.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-coal-800 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 rounded-full bg-black/60 px-3 py-1 text-[11px] font-bold text-gold-400 ring-1 ring-gold-400/40 backdrop-blur">
                    {d.price}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-[11px] tracking-[0.2em] text-cream-100/45 uppercase">
                    {d.telugu}
                  </p>
                  <h3 className="font-display mt-1 text-xl font-semibold text-cream-50">
                    {d.name}
                  </h3>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-cream-100/65">
                    {d.desc}
                  </p>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
