import { FiNavigation, FiPhone } from "react-icons/fi";
import { MAPS_URL, PHONE_LINK } from "../data/menu";
import { openOrderModal } from "./OrderModal";

export default function StickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-coal-950/92 px-4 py-3 backdrop-blur-xl sm:hidden">
      <div className="grid grid-cols-3 gap-2.5">
        <a
          href={PHONE_LINK}
          className="flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-b from-chili-500 to-chili-700 py-3 text-[13px] font-bold text-white"
        >
          <FiPhone size={14} /> Call
        </a>
        <button
          type="button"
          onClick={openOrderModal}
          className="flex cursor-pointer items-center justify-center rounded-full bg-gold-400 py-3 text-[13px] font-bold text-coal-950"
        >
          Order
        </button>
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-1.5 rounded-full border border-white/20 py-3 text-[13px] font-bold text-cream-50"
        >
          <FiNavigation size={13} /> Route
        </a>
      </div>
    </div>
  );
}
