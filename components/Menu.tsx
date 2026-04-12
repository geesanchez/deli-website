"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { menuCategories } from "@/lib/data";

export default function Menu() {
  const [activeTab, setActiveTab] = useState(menuCategories[0].id);
  const activeCategory = menuCategories.find((c) => c.id === activeTab)!;

  return (
    <section id="menu" aria-labelledby="menu-heading" className="py-12 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-deli-brown font-medium tracking-widest uppercase text-sm mb-3">
            What&apos;s Fresh
          </p>
          <h2 id="menu-heading" className="font-heading text-4xl sm:text-5xl font-bold text-deli-green-dark mb-4">
            Our Menu
          </h2>
          <p className="text-deli-text-light max-w-2xl mx-auto">
            From breakfast to box lunches, everything is made fresh daily.
            Build your own sandwich or try one of our signature creations.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-10">
          <div className="flex flex-wrap justify-center gap-2" role="tablist" aria-label="Menu categories">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                role="tab"
                aria-selected={activeTab === category.id}
                aria-controls={`panel-${category.id}`}
                id={`tab-${category.id}`}
                onClick={() => setActiveTab(category.id)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                  activeTab === category.id
                    ? "bg-deli-green text-white shadow-md"
                    : "bg-white text-deli-text-light hover:bg-deli-green/10 hover:text-deli-green border border-deli-border"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            role="tabpanel"
            id={`panel-${activeTab}`}
            aria-labelledby={`tab-${activeTab}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-center text-deli-text-light mb-8 text-sm italic">
              {activeCategory.description}
            </p>

            <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {activeCategory.items.map((item) => (
                <div
                  key={item.name}
                  className="bg-white rounded-xl p-5 border border-deli-border/50 hover:border-deli-green/30 hover:shadow-sm transition-all"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading text-lg font-semibold text-deli-green-dark">
                        {item.name}
                      </h3>
                      <p className="text-deli-text-light text-sm mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <span className="bg-deli-gold text-deli-green-dark px-3 py-1 rounded-full text-sm font-bold whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Disclaimer */}
        <p className="text-center mt-10 text-xs text-deli-text-light">
          Prices and items may vary. Call to confirm today&apos;s menu and specials.
        </p>
      </div>
    </section>
  );
}
