"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { LeafyGreen, SlidersHorizontal, Truck } from "lucide-react";

const features = [
  {
    title: "Fresh Daily",
    description: "Every sandwich, soup, and salad is made fresh in-house each morning with quality ingredients.",
    icon: LeafyGreen,
  },
  {
    title: "Your Way",
    description: "Build your own sandwich at our sandwich bar, or choose from our menu of signature creations.",
    icon: SlidersHorizontal,
  },
  {
    title: "We Deliver",
    description: "From picnic box lunches to full catering, we deliver throughout the Monterey Peninsula.",
    icon: Truck,
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-deli-gold font-medium tracking-widest uppercase text-sm mb-3">
              Our Story
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-deli-green-dark mb-6">
              34 Years on
              <span className="block text-deli-brown">5th Avenue</span>
            </h2>
            <div className="space-y-4 text-deli-text-light leading-relaxed">
              <p>
                Since 1991, 5th Ave. Deli & Catering Co. has been a beloved
                fixture in Carmel-by-the-Sea — tucked just two doors up from the
                Post Office on one of the most charming streets in California.
              </p>
              <p>
                We&apos;re a family-owned gourmet deli that believes in doing things
                the right way: fresh ingredients, generous portions, and making
                every sandwich with care. Whether you&apos;re a local grabbing your
                morning coffee or a visitor picking up a picnic box for Carmel
                Beach, you&apos;re part of our family.
              </p>
              <p>
                From our famous box lunches to full-service catering for gallery
                openings, corporate events, and private aircraft — we bring the
                same quality and heart to everything we make.
              </p>
            </div>
          </motion.div>

          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/storefront.jpg"
                alt="5th Ave. Deli & Catering Co. storefront in Carmel-by-the-Sea"
                width={800}
                height={600}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-deli-green rounded-xl px-6 py-4 shadow-lg hidden sm:block">
              <p className="font-heading text-3xl font-bold text-white">34</p>
              <p className="text-cream-dark/90 text-sm">Years of<br />delicious food</p>
            </div>
          </motion.div>
        </div>

        {/* Feature cards */}
        <div className="mt-20 grid sm:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-deli-green/10 flex items-center justify-center">
                <feature.icon className="h-5 w-5 text-deli-green" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-deli-green-dark mb-2">
                {feature.title}
              </h3>
              <p className="text-deli-text-light text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
