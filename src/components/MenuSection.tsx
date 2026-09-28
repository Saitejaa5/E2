import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FiPhone } from "react-icons/fi";
import { PHONE_LINK, menuData } from "../data/menu";
import Reveal, { SectionHeading } from "./Reveal";

export default function MenuSection() {
  const [active, setActive] = useState(menuData[0].id);
  const cat = menuData.find((c) => c.id === active)!;

  return (
    <section id="menu" className="relative bg-coal-950 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="The menu"
          title="Browse by craving."
          sub="Twelve kitchens in one — pick a category. Prices include everything you love about E2: generous portions, honest rates."
        />

        {/* Category pills */}
        <Reveal delay={0.1}>
          <div
            className="no-scrollbar -mx-4 mt-10 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0"
            role="tablist"
            aria-label="Menu categories"
          >
            {menuData.map((c) => (
              <button
                key={c.id}
                role="tab"
                aria-selected={active === c.id}
                onClick={() => setActive(c.id)}
                className={`shrink-0 rounded-full px-5 py-2.5 text-[13px] font-semibold whitespace-nowrap transition-all ${
                  active === c.id
                    ? "bg-gradient-to-b from-chili-500 to-chili-700 text-white shadow-lg shadow-chili-700/40"
                    : "border border-white/12 bg-white/[0.04] text-cream-100/70 hover:border-gold-400/50 hover:text-gold-400"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Items */}
        <div className="mx-auto mt-8 max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-3xl border border-white/10 bg-coal-900/70"
              role="tabpanel"
            >
              <div className="flex items-center justify-between border-b border-white/8 bg-white/[0.02] px-6 py-4">
                <h3 className="font-display text-lg font-semibold text-cream-50">
                  {cat.label}
                </h3>
                <span className="text-xs text-cream-100/50">
                  {cat.items.length} items
                </span>
              </div>
              <ul className="divide-y divide-white/[0.06]">
                {cat.items.map((item) => (
                  <li
                    key={item.name}
                    className="group flex items-start justify-between gap-4 px-6 py-4 transition-colors hover:bg-white/[0.03]"
                  >
                    <div className="flex items-start gap-3">
                      <span
                        aria-label={item.veg ? "Veg" : "Non-veg"}
                        className={`mt-1.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-[4px] border-2 ${
                          item.veg ? "border-green-500" : "border-red-500"
                        }`}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${
                            item.veg ? "bg-green-500" : "bg-red-500"
                          }`}
                        />
                      </span>
                      <div>
                        <p className="flex flex-wrap items-center gap-2 text-[15px] font-semibold text-cream-50">
                          {item.name}
                          {item.tag && (
                            <span className="rounded-full bg-gold-400/15 px-2.5 py-0.5 text-[10.5px] font-bold tracking-wide text-gold-400 uppercase ring-1 ring-gold-400/30">
                              {item.tag}
                            </span>
                          )}
                        </p>
                        <p className="mt-0.5 text-[13px] leading-relaxed text-cream-100/55">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                    <span className="font-display shrink-0 text-[16px] font-semibold text-gold-400">
                      ₹{item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>

          <Reveal delay={0.1} className="mt-8 text-center">
            <p className="text-sm text-cream-100/60">
              Craving something? Call and it's on the flame in minutes.
            </p>
            <motion.a
              href={PHONE_LINK}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-chili-500 to-chili-700 px-8 py-4 text-[15px] font-bold text-white shadow-xl shadow-chili-700/40"
            >
              <FiPhone size={16} /> Order Now
            </motion.a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
