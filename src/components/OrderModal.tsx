import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { FiExternalLink, FiPhone, FiX } from "react-icons/fi";
import { SiZomato } from "react-icons/si";
import { PHONE_DISPLAY, PHONE_LINK, ZOMATO_URL } from "../data/menu";

export const ORDER_EVENT = "e2:open-order";

export function openOrderModal() {
  window.dispatchEvent(new CustomEvent(ORDER_EVENT));
}

export default function OrderModal() {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener(ORDER_EVENT, handler);
    return () => window.removeEventListener(ORDER_EVENT, handler);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[70] flex items-end justify-center bg-black/70 p-4 backdrop-blur-sm sm:items-center"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Order options"
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-sm overflow-hidden rounded-3xl border border-white/10 bg-coal-900 shadow-2xl shadow-black/60"
          >
            <div className="flex items-center justify-between px-6 pt-5 pb-1">
              <div>
                <p className="text-[11px] font-bold tracking-[0.2em] text-gold-400 uppercase">
                  Order now
                </p>
                <h3 className="font-display mt-1 text-xl font-semibold text-cream-50">
                  How would you like to order?
                </h3>
              </div>
              <button
                onClick={close}
                aria-label="Close order options"
                className="rounded-full border border-white/15 p-2 text-cream-100/70 transition hover:border-gold-400/60 hover:text-gold-400"
              >
                <FiX size={16} />
              </button>
            </div>

            <div className="space-y-3 px-6 py-5">
              <a
                href={ZOMATO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-[#E23744]/60 hover:bg-white/[0.06]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E23744] text-white shadow-lg shadow-[#E23744]/30">
                  <SiZomato size={26} />
                </span>
                <span className="flex-1 leading-tight">
                  <span className="flex items-center gap-1.5 text-[15px] font-bold text-cream-50">
                    Order on Zomato <FiExternalLink size={14} className="text-cream-100/50" />
                  </span>
                  <span className="mt-0.5 block text-[13px] text-cream-100/60">
                    Live menu · delivery & takeaway
                  </span>
                </span>
              </a>

              <a
                href={PHONE_LINK}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-gold-400/60 hover:bg-white/[0.06]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-b from-chili-500 to-chili-700 text-white shadow-lg shadow-chili-700/40">
                  <FiPhone size={20} />
                </span>
                <span className="flex-1 leading-tight">
                  <span className="text-[15px] font-bold text-cream-50">
                    Call Restaurant
                  </span>
                  <span className="mt-0.5 block text-[13px] text-cream-100/60">
                    {PHONE_DISPLAY} · direct & fast
                  </span>
                </span>
              </a>
            </div>

            <p className="border-t border-white/8 px-6 py-4 text-center text-xs text-cream-100/45">
              E2 Restaurant · Mallampet, Hyderabad
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
