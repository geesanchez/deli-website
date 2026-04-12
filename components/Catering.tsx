"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Bus, Plane, Palette, Home, PartyPopper, Car } from "lucide-react";
import { cateringServices, cateringHighlights, businessInfo } from "@/lib/data";

const galleryPhotos = [
  { src: "/images/IMG_4408.jpeg", alt: "Smoked salmon and lox platter with cream cheese, capers, and fresh lemon" },
  { src: "/images/IMG_4415.jpeg", alt: "Golden spanakopita and phyllo pastry tray" },
  { src: "/images/IMG_4359(1).jpeg", alt: "Pinwheel wrap platter with assorted fillings" },
  { src: "/images/IMG_4351.jpeg", alt: "Charcuterie board with cured meats, cheeses, and crackers" },
];

const serviceIcons: Record<string, React.ReactNode> = {
  "Bus Tours & Groups": <Bus className="w-8 h-8 text-deli-gold-light" />,
  "Corporate Aircraft": <Plane className="w-8 h-8 text-deli-gold-light" />,
  "Gallery Openings": <Palette className="w-8 h-8 text-deli-gold-light" />,
  "Open Houses": <Home className="w-8 h-8 text-deli-gold-light" />,
  "Private Events": <PartyPopper className="w-8 h-8 text-deli-gold-light" />,
  "Delivery Available": <Car className="w-8 h-8 text-deli-gold-light" />,
};

export default function Catering() {
  return (
    <section id="catering" aria-labelledby="catering-heading" className="pt-12 pb-4 bg-deli-green-dark text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-deli-gold-light font-medium tracking-widest uppercase text-sm mb-3">
            Events & Catering
          </p>
          <h2 id="catering-heading" className="font-heading text-4xl sm:text-5xl font-bold mb-4">
            Let Us Cater{" "}
            <span className="block text-deli-gold-light">Your Next Event</span>
          </h2>
          <p className="text-cream-dark/80 max-w-2xl mx-auto">
            From intimate gallery openings to corporate aircraft catering at
            Monterey Peninsula Airport — we bring {new Date().getFullYear() - 1991} years of deli excellence to
            every event.
          </p>
        </div>

        {/* Photo gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {galleryPhotos.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="overflow-hidden rounded-2xl aspect-[4/3] group"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={800}
                height={600}
                sizes="(min-width: 640px) 50vw, 100vw"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {cateringServices.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-xl bg-white/10 backdrop-blur-sm p-6 border border-white/10 hover:bg-white/15 transition-colors"
            >
              <span className="mb-3 block">{serviceIcons[service.title]}</span>
              <h3 className="font-heading text-lg font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-cream-dark/70 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Catering menu highlights */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 mb-12">
          <h3 className="font-heading text-2xl font-bold text-center mb-2">
            Catering Menu Highlights
          </h3>
          <p className="text-center text-cream-dark/70 text-sm mb-8">
            {cateringHighlights.description}
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cateringHighlights.items.map((item) => (
              <div key={item.name} className="p-4 rounded-lg bg-white/5">
                <div className="flex justify-between items-start gap-3">
                  <div>
                    <h4 className="font-semibold text-sm">{item.name}</h4>
                    <p className="text-cream-dark/60 text-xs mt-1">
                      {item.description}
                    </p>
                  </div>
                  <span className="bg-deli-gold/20 text-deli-gold-light border border-deli-gold/30 px-3 py-1 rounded-full text-sm font-bold whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
