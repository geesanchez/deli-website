"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { businessInfo } from "@/lib/data";

export default function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="relative pt-16 min-h-[85vh] flex items-center bg-deli-green-dark overflow-hidden">
      <Image
        src="/images/storefront.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-10"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="mb-4 text-deli-gold-light font-medium tracking-widest uppercase text-sm">
            Est. {businessInfo.established} &middot; Carmel-by-the-Sea
          </p>
          <h1 id="hero-heading" className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            5th Ave. Deli
            <span className="block text-3xl sm:text-4xl lg:text-5xl font-normal mt-2 text-cream-dark">
              {" "}& Catering Co.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-cream-dark/90 mb-10">
            {businessInfo.tagline} Fresh sandwiches, homemade soups,
            picnic box lunches, and full catering.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="#menu"
            className="rounded-full bg-deli-gold px-8 py-3.5 text-base font-semibold text-deli-green-dark hover:bg-deli-gold-light transition-colors shadow-lg"
          >
            View Our Menu
          </a>
          <a
            href="#catering"
            className="rounded-full border-2 border-white/80 px-8 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-colors"
          >
            Order Catering
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 text-cream-dark/80 text-sm"
        >
          <div className="flex items-center gap-2">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Mon–Sat: 8am–5pm</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>5th Ave, Carmel-by-the-Sea</span>
          </div>
          <a
            href={`tel:${businessInfo.phone.replace(/[^0-9]/g, "")}`}
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>{businessInfo.phone}</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
