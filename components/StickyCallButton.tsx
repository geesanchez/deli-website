"use client";

import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { businessInfo } from "@/lib/data";

export default function StickyCallButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.85);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href={`tel:${businessInfo.phone.replace(/[^0-9]/g, "")}`}
      className={`fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-40 md:hidden flex items-center gap-2 rounded-full bg-deli-green px-5 py-3 text-sm font-semibold text-white shadow-lg hover:bg-deli-green-light transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <Phone className="h-4 w-4" />
      Call to Order
    </a>
  );
}
