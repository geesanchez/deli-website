"use client";

import { motion } from "framer-motion";
import { menuCategories, businessInfo } from "@/lib/data";

export default function BoxLunches() {
  const boxLunchCategory = menuCategories.find((c) => c.id === "box-lunches");
  if (!boxLunchCategory) return null;

  return (
    <section id="box-lunches" aria-labelledby="boxlunch-heading" className="py-20 bg-deli-green/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-deli-brown font-medium tracking-widest uppercase text-sm mb-3">
            Beach Day?
          </p>
          <h2 id="boxlunch-heading" className="font-heading text-4xl sm:text-5xl font-bold text-deli-green-dark mb-6">
            Grab a Picnic Box
          </h2>
          <p className="text-lg text-deli-text-light/80">
            Heading to Carmel Beach? Driving down to Big Sur? Our picnic box lunches are the perfect grab-and-go meal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {boxLunchCategory.items.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white border border-deli-border p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start gap-4 mb-4">
                <h3 className="font-heading font-bold text-2xl text-deli-green-dark">{item.name}</h3>
                <span className="bg-deli-gold text-deli-green-dark px-3 py-1 rounded-full text-sm font-bold whitespace-nowrap">
                  {item.price}
                </span>
              </div>
              <p className="text-deli-text-light leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href={`tel:${businessInfo.phone.replace(/[^0-9]/g, "")}`}
            className="inline-block bg-deli-green text-white hover:bg-deli-green-light px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
          >
            Call to Order Box Lunches
          </a>
        </div>
      </div>
    </section>
  );
}
