import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Catering from "@/components/Catering";
import BoxLunches from "@/components/BoxLunches";
import GiftBaskets from "@/components/GiftBaskets";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import { Phone } from "lucide-react";
import { businessInfo } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <About />
        <BoxLunches />
        <Catering />
        <GiftBaskets />
        <Reviews />
        <Location />
      </main>
      <Footer />

      {/* Sticky mobile phone CTA */}
      <a
        href={`tel:${businessInfo.phone.replace(/[^0-9]/g, "")}`}
        className="fixed bottom-4 right-4 z-40 md:hidden flex items-center gap-2 rounded-full bg-deli-green px-5 py-3 text-sm font-semibold text-white shadow-lg hover:bg-deli-green-light transition-colors"
      >
        <Phone className="h-4 w-4" />
        Call to Order
      </a>
    </>
  );
}
