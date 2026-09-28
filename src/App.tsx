import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Location from "./components/Location";
import MenuSection from "./components/MenuSection";
import Navbar from "./components/Navbar";
import Reviews from "./components/Reviews";
import Signature from "./components/Signature";
import StickyCTA from "./components/StickyCTA";
import WhyChoose from "./components/WhyChoose";

function Strip() {
  const items = [
    "Hyderabadi Dum Biryani",
    "Chicken Majestic",
    "Paper Chicken",
    "Shawarma",
    "Hakka Noodles",
    "Chicken Pulav",
    "Pepper Chicken",
    "Chilli Mushroom",
  ];
  return (
    <div className="overflow-hidden border-y border-gold-400/15 bg-[#160e0c] py-3.5" aria-hidden>
      <div className="flex w-max animate-[strip_28s_linear_infinite] gap-8">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-8 text-[12.5px] font-semibold tracking-[0.22em] whitespace-nowrap text-gold-400/80 uppercase">
            {t} <span className="text-chili-500">✦</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes strip { to { transform: translateX(-50%); } }`}</style>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-coal-950 pb-20 sm:pb-0">
      <a
        href="#menu"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[60] focus:bg-gold-400 focus:px-4 focus:py-2 focus:text-coal-950"
      >
        Skip to menu
      </a>
      <Navbar />
      <main>
        <Hero />
        <Strip />
        <About />
        <Signature />
        <MenuSection />
        <Experience />
        <WhyChoose />
        <Reviews />
        <Location />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
