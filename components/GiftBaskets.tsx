"use client";

import { motion } from "framer-motion";
import { giftBaskets, businessInfo } from "@/lib/data";

export default function GiftBaskets() {
  return (
    <section id="gift-baskets" aria-labelledby="giftbasket-heading" className="relative overflow-hidden pt-8 pb-20 bg-deli-green-dark text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-deli-gold/10 via-transparent to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-deli-gold-light font-medium tracking-widest uppercase text-sm mb-3">
            The Perfect Gift
          </p>
          <h2 id="giftbasket-heading" className="font-heading text-4xl sm:text-5xl font-bold mb-4">
            Gourmet Gift Baskets
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Handcrafted gift baskets filled with gourmet foods, local wines, and
            artisan treats. Perfect for holidays, thank-you gifts, or a taste of
            Carmel delivered anywhere.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
          {giftBaskets.map((basket, i) => (
            <motion.div
              key={basket.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-colors"
            >
              <div className="flex justify-between items-start gap-4 mb-4">
                <h3 className="font-heading text-2xl font-bold">{basket.name}</h3>
                <span className="bg-deli-gold/20 text-deli-gold-light border border-deli-gold/30 px-3 py-1 rounded-full text-sm font-bold whitespace-nowrap">
                  {basket.priceRange}
                </span>
              </div>
              <p className="text-white/75 leading-relaxed">{basket.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <a
            href={`tel:${businessInfo.phone.replace(/[^0-9]/g, "")}`}
            className="inline-block bg-deli-gold text-deli-green-dark hover:bg-deli-gold-light px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
          >
            Call to Order a Gift Basket
          </a>
          <p className="mt-3 text-white/60 text-sm">
            Custom baskets available for any budget.{" "}
            <a
              href={`mailto:${businessInfo.email}?subject=Gift Basket Order`}
              className="underline hover:text-white"
            >
              Email us
            </a>{" "}
            to discuss your order.
          </p>
        </div>
      </div>
    </section>
  );
}
