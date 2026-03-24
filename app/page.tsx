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
import StickyCallButton from "@/components/StickyCallButton";

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
      <StickyCallButton />
    </>
  );
}
