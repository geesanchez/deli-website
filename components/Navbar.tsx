"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { businessInfo } from "@/lib/data";

const navLinks = [
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Catering", href: "#catering" },
  { label: "Box Lunches", href: "#box-lunches" },
  { label: "Gift Baskets", href: "#gift-baskets" },
  { label: "Contact", href: "#location" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMobileNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    // Wait for menu close animation to finish before scrolling
    setTimeout(() => {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <header>
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-deli-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="5th Ave Deli & Catering Co."
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-deli-text-light hover:text-deli-green transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:${businessInfo.phone.replace(/[^0-9]/g, "")}`}
              className="rounded-full bg-deli-green px-5 py-3 text-sm font-medium text-white hover:bg-deli-green-light transition-colors"
            >
              Call to Order
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2.5 text-deli-text"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            id="mobile-nav"
            className="md:hidden border-t border-deli-border bg-cream"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleMobileNavClick(e, link.href)}
                  className="block py-3 text-base font-medium text-deli-text-light hover:text-deli-green transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`tel:${businessInfo.phone.replace(/[^0-9]/g, "")}`}
                className="block w-full text-center rounded-full bg-deli-green px-4 py-3 text-base font-medium text-white hover:bg-deli-green-light transition-colors"
              >
                Call to Order: {businessInfo.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
    </header>
  );
}
