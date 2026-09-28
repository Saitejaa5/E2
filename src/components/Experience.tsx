import { motion } from "framer-motion";
import { galleryImages } from "../data/menu";
import Reveal, { SectionHeading } from "./Reveal";

const services = ["Dine-in", "Takeaway", "Delivery", "Drive-through", "Kerbside pickup"];

export default function Experience() {
  return (
    <section id="experience" className="bg-coal-900 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="The experience"
          title="Made for family dinners & late biryani runs."
          sub="Good for lunch, dinner, solo meals and big groups — easy parking, quick service, generous tables."
        />

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {galleryImages.map((g, i) => (
            <Reveal key={g.src} delay={(i % 3) * 0.08}>
              <motion.figure
                whileHover={{ scale: 1.02 }}
                className={`group relative overflow-hidden rounded-2xl ring-1 ring-white/10 ${
                  i === 0 ? "col-span-2 row-span-2 lg:col-span-1 lg:row-span-2" : ""
                }`}
              >
                <img
                  src={g.src}
                  alt={g.label}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                    i === 0 ? "aspect-[2/1] lg:aspect-auto lg:h-full lg:min-h-[420px]" : "aspect-[4/3]"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
                <figcaption className="absolute bottom-3 left-3 rounded-full bg-black/55 px-3 py-1 text-[11.5px] font-semibold text-cream-100 backdrop-blur">
                  {g.label}
                </figcaption>
              </motion.figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-8 flex flex-wrap justify-center gap-2.5">
            {services.map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-[12.5px] font-semibold text-cream-100/80"
              >
                {s}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
