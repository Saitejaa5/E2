import { FiInstagram, FiMapPin, FiPhone } from "react-icons/fi";
import { ADDRESS, MAPS_URL, PHONE_DISPLAY, PHONE_LINK } from "../data/menu";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0c0706]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="font-display flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-chili-500 to-chili-700 text-lg font-bold text-cream-50 ring-1 ring-gold-400/40">
              E2
            </span>
            <div>
              <p className="font-display text-lg font-semibold text-cream-50">E2 Restaurant</p>
              <p className="text-xs tracking-[0.18em] text-gold-400 uppercase">
                E2 రెస్టారెంట్
              </p>
            </div>
          </div>
          <p className="mt-4 max-w-sm text-[13.5px] leading-relaxed text-cream-100/60">
            Biryani & multi-cuisine kitchen in Mallampet, Hyderabad. Fresh food,
            honest prices, flavours that bring you back.
          </p>
          <a
            href="#top"
            aria-label="Instagram"
            className="mt-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-cream-100/70 transition hover:border-gold-400/60 hover:text-gold-400"
          >
            <FiInstagram size={17} />
          </a>
        </div>

        <nav aria-label="Footer">
          <p className="text-xs font-bold tracking-[0.2em] text-cream-100/45 uppercase">
            Explore
          </p>
          <ul className="mt-4 space-y-2.5 text-[14px]">
            {[
              ["Menu", "#menu"],
              ["Signatures", "#signatures"],
              ["About", "#about"],
              ["Reviews", "#reviews"],
              ["Order Online", "#menu"],
            ].map(([label, href]) => (
              <li key={label}>
                <a href={href} className="text-cream-100/70 transition hover:text-gold-400">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-cream-100/45 uppercase">
            Contact
          </p>
          <ul className="mt-4 space-y-3 text-[13.5px] text-cream-100/70">
            <li>
              <a href={PHONE_LINK} className="flex items-center gap-2 hover:text-gold-400">
                <FiPhone size={14} className="text-gold-400" /> {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-2 hover:text-gold-400"
              >
                <FiMapPin size={14} className="mt-0.5 shrink-0 text-gold-400" />
                {ADDRESS}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/8">
        <p className="mx-auto max-w-6xl px-4 py-5 text-center text-xs text-cream-100/45 sm:px-6">
          © 2026 E2 Restaurant. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
