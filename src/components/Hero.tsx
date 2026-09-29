import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FiMapPin, FiPhone, FiStar } from "react-icons/fi";
import { PHONE_DISPLAY } from "../data/menu";
import { openOrderModal } from "./OrderModal";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} id="top" className="grain relative flex min-h-[100svh] items-end overflow-hidden">
      {/* Background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0" aria-hidden>
        <img
          src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=2000&auto=format&fit=crop"
          alt=""
          className="animate-slow-pan h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-coal-950 via-coal-950/55 to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-coal-950/85 via-coal-950/25 to-transparent" />
      </motion.div>

      {/* Steam animation */}
      <div className="animate-steam pointer-events-none absolute top-[30%] left-[12%] hidden gap-3 sm:flex" aria-hidden>
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            style={{ animationDelay: `${i * 0.9}s` }}
            className="block h-16 w-[3px] rounded-full bg-white/40 blur-[3px]"
          />
        ))}
      </div>

      <motion.div
        style={{ opacity: fade }}
        className="relative z-10 mx-auto w-full max-w-6xl px-4 pt-32 pb-14 sm:px-6 sm:pb-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-black/45 px-4 py-1.5 backdrop-blur-md"
        >
          <FiStar className="text-gold-400" size={13} />
          <span className="text-xs font-semibold tracking-wide text-cream-100">
            4.2 rated · Biryani & Multi-Cuisine · ₹200–₹400
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-5 text-sm font-medium tracking-[0.22em] text-gold-400 uppercase"
        >
          E2 రెస్టారెంట్ · Mallampet, Hyderabad
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-balance mt-3 max-w-3xl text-[2.6rem] leading-[1.04] font-semibold text-cream-50 sm:text-6xl lg:text-7xl"
        >
          Taste That Brings{" "}
          <span className="bg-gradient-to-r from-gold-400 via-cream-200 to-gold-400 bg-clip-text text-transparent italic">
            You Back.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32 }}
          className="mt-5 max-w-xl text-[15.5px] leading-relaxed text-cream-100/80 sm:text-lg"
        >
          Authentic flavours, delicious biryanis and freshly prepared favourites
          at E2 Restaurant — dine-in, takeaway & delivery.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.44 }}
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <motion.a
            href="#menu"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full bg-gradient-to-b from-chili-500 to-chili-700 px-8 py-4 text-center text-[15px] font-bold text-white shadow-xl shadow-chili-700/40 ring-1 ring-white/15"
          >
            View Menu
          </motion.a>
          <motion.button
            type="button"
            onClick={openOrderModal}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex cursor-pointer items-center justify-center gap-2 rounded-full border border-cream-100/25 bg-white/8 px-8 py-4 text-[15px] font-bold text-cream-50 backdrop-blur-md transition hover:border-gold-400/60"
          >
            <FiPhone size={16} /> Order Now · {PHONE_DISPLAY}
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-cream-100/70"
        >
          <span className="flex items-center gap-1.5">
            <FiMapPin className="text-gold-400" size={14} /> Mallampet, Hyderabad
          </span>
          <span>Open daily · Lunch & Dinner</span>
          <span>Dine-in · Takeaway · Delivery</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
