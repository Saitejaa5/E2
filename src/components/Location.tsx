import { motion } from "framer-motion";
import { FiClock, FiMapPin, FiNavigation, FiPhone } from "react-icons/fi";
import { ADDRESS, MAPS_URL, PHONE_DISPLAY, PHONE_LINK } from "../data/menu";
import Reveal, { Eyebrow } from "./Reveal";

export default function Location() {
  return (
    <section id="visit" className="relative overflow-hidden bg-coal-950 py-20 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_45%_at_50%_100%,rgba(192,57,43,0.18),transparent)]"
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14">
        <div>
          <Reveal>
            <Eyebrow>Find us</Eyebrow>
            <h2 className="font-display mt-4 text-3xl font-semibold text-cream-50 sm:text-4xl">
              In Mallampet, minutes from Bachupally.
            </h2>
            <p className="mt-4 flex items-start gap-2.5 text-[15px] leading-relaxed text-cream-100/75">
              <FiMapPin className="mt-1 shrink-0 text-gold-400" size={17} />
              <span>
                <strong className="text-cream-50">E2 Restaurant</strong>
                <br />
                {ADDRESS}
              </span>
            </p>
            <p className="mt-3 flex items-center gap-2.5 text-sm text-cream-100/70">
              <FiClock className="shrink-0 text-gold-400" size={16} />
              Open daily · Lunch & Dinner · Solo, family & group dining
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <motion.a
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-b from-chili-500 to-chili-700 px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-chili-700/40"
              >
                <FiNavigation size={15} /> Get Directions
              </motion.a>
              <a
                href={PHONE_LINK}
                className="flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-bold text-cream-50 transition hover:border-gold-400/60"
              >
                <FiPhone size={15} /> {PHONE_DISPLAY}
              </a>
              <a
                href="#menu"
                className="flex items-center justify-center rounded-full border border-gold-400/40 px-7 py-3.5 text-sm font-bold text-gold-400 transition hover:bg-gold-400 hover:text-coal-950"
              >
                Order Online
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="overflow-hidden rounded-3xl ring-1 ring-white/10">
            <iframe
              title="E2 Restaurant location map — Mallampet, Hyderabad"
              src="https://www.google.com/maps?q=E2+Restaurant+Mallampet+Hyderabad+500118&output=embed"
              className="h-[340px] w-full grayscale-[35%] invert-[92%] hue-rotate-180 contrast-[0.9] sm:h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="flex items-center justify-between bg-coal-800 px-5 py-4">
              <p className="text-[13px] text-cream-100/70">
                KVR Valley, Shambipur Road
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="text-[13px] font-bold text-gold-400 hover:underline"
              >
                Open in Maps →
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
