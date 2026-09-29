import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiMenu, FiPhone, FiX } from "react-icons/fi";
import { PHONE_DISPLAY, PHONE_LINK } from "../data/menu";

const links = [
  { label: "About", href: "#about" },
  { label: "Signatures", href: "#signatures" },
  { label: "Menu", href: "#menu" },
  { label: "Experience", href: "#experience" },
  { label: "Reviews", href: "#reviews" },
  { label: "Visit", href: "#visit" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-coal-950/90 shadow-[0_8px_30px_rgba(0,0,0,0.45)] backdrop-blur-xl"
          : "bg-gradient-to-b from-black/70 to-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-[72px] sm:px-6"
        aria-label="Primary"
      >
        <a href="#top" className="flex items-center gap-3">
          <img
            src="/e2-logo.png"
            alt="E2 Restaurant official logo"
            className="h-10 w-10 rounded-lg object-contain sm:h-11 sm:w-11"
            loading="eager"
          />
          <span className="leading-tight">
            <span className="font-display block text-[17px] font-semibold tracking-wide text-cream-50">
              E2 Restaurant
            </span>
            <span className="block text-[11px] tracking-[0.18em] text-gold-400 uppercase">
              Mallampet · Hyderabad
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13.5px] font-medium text-cream-100/75 transition-colors hover:text-gold-400"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={PHONE_LINK}
            className="flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-[13px] font-semibold text-cream-100 transition hover:border-gold-400/60 hover:text-gold-400"
          >
            <FiPhone size={14} /> {PHONE_DISPLAY}
          </a>
          <a
            href="#menu"
            className="rounded-full bg-gradient-to-b from-chili-500 to-chili-700 px-5 py-2.5 text-[13px] font-bold text-white shadow-lg shadow-chili-700/40 transition hover:brightness-110"
          >
            Order Now
          </a>
        </div>

        <button
          className="rounded-lg p-2 text-cream-100 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-b border-white/10 bg-coal-950/97 backdrop-blur-xl lg:hidden"
          >
            <div className="space-y-1 px-4 py-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-[15px] font-medium text-cream-100/85 hover:bg-white/5 hover:text-gold-400"
                >
                  {l.label}
                </a>
              ))}
              <div className="flex gap-3 pt-3">
                <a
                  href={PHONE_LINK}
                  className="flex flex-1 items-center justify-center gap-2 rounded-full border border-white/15 px-4 py-3 text-sm font-semibold"
                >
                  <FiPhone size={15} /> Call
                </a>
                <a
                  href="#menu"
                  onClick={() => setOpen(false)}
                  className="flex-1 rounded-full bg-gradient-to-b from-chili-500 to-chili-700 px-4 py-3 text-center text-sm font-bold text-white"
                >
                  Order Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
