"use client";

import { motion } from "framer-motion";
import { giftBaskets, businessInfo } from "@/lib/data";

export default function GiftBaskets() {
  return (
    <section id="gift-baskets" className="py-20 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-deli-gold font-medium tracking-widest uppercase text-sm mb-3">
            The Perfect Gift
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-deli-green-dark mb-4">
            Gourmet Gift Baskets
          </h2>
          <p className="text-deli-text-light max-w-2xl mx-auto">
            Handcrafted gift baskets filled with gourmet foods, local wines, and
            artisan treats. Perfect for holidays, thank-you gifts, or a taste of
            Carmel delivered anywhere.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {giftBaskets.map((basket, i) => (
            <motion.div
              key={basket.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-xl p-6 border border-deli-border/50 text-center hover:shadow-md transition-shadow"
            >
              <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-cream flex items-center justify-center">
                <span className="text-deli-gold text-2xl">&#127873;</span>
              </div>
              <h3 className="font-heading text-lg font-semibold text-deli-green-dark mb-2">
                {basket.name}
              </h3>
              <p className="text-deli-text-light text-sm mb-3 leading-relaxed">
                {basket.description}
              </p>
              <p className="text-deli-brown font-semibold text-sm">
                {/* TODO: Replace placeholder gift basket prices */}
                {basket.priceRange}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={`mailto:${businessInfo.email}?subject=Gift Basket Order`}
            className="inline-block rounded-full bg-deli-green px-8 py-3 text-sm font-semibold text-white hover:bg-deli-green-light transition-colors"
          >
            Order a Gift Basket
          </a>
          <p className="mt-3 text-deli-text-light text-sm">
            Custom baskets available for any budget.{" "}
            <a
              href={`tel:${businessInfo.phone.replace(/[^0-9]/g, "")}`}
              className="underline hover:text-deli-green"
            >
              Call us
            </a>{" "}
            to discuss your order.
          </p>
        </div>
      </div>
    </section>
  );
}
