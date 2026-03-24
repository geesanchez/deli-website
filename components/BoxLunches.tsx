"use client";

import { motion } from "framer-motion";
import { menuCategories, businessInfo } from "@/lib/data";

export default function BoxLunches() {
  const boxLunchCategory = menuCategories.find((c) => c.id === "box-lunches");
  if (!boxLunchCategory) return null;

  return (
    <section id="box-lunches" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-deli-gold font-medium tracking-widest uppercase text-sm mb-3">
              Beach Day?
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-deli-green-dark mb-4">
              Grab a Picnic Box
            </h2>
            <p className="text-deli-text-light mb-8 leading-relaxed">
              Heading to Carmel Beach? Driving down to Big Sur? Our picnic box
              lunches are the perfect grab-and-go meal. Each box comes packed
              with a fresh sandwich, sides, a cookie, and a drink.{" "}
              <span className="font-medium text-deli-text">We deliver, too.</span>
            </p>

            <div className="space-y-3 mb-8">
              {boxLunchCategory.items.map((item) => (
                <div
                  key={item.name}
                  className="flex justify-between items-start gap-4 p-4 rounded-lg bg-cream border border-deli-border/50"
                >
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-deli-green-dark text-sm">
                      {item.name}
                    </h3>
                    <p className="text-deli-text-light text-xs mt-0.5">
                      {item.description}
                    </p>
                  </div>
                  <span className="text-deli-brown font-semibold text-sm whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>

            <a
              href={`tel:${businessInfo.phone.replace(/[^0-9]/g, "")}`}
              className="inline-block rounded-full bg-deli-green px-8 py-3 text-sm font-semibold text-white hover:bg-deli-green-light transition-colors"
            >
              Call to Order Box Lunches
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
