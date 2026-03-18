"use client";

import { motion } from "framer-motion";
import { businessInfo } from "@/lib/data";

export default function Location() {
  const mapEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3203.5!2d${businessInfo.coordinates.lng}!3d${businessInfo.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808de614b5a5e295%3A0x3c1d75e2a45b9c8e!2s5th%20Avenue%20Deli%20%26%20Catering!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus`;

  return (
    <section id="location" className="py-20 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-deli-gold font-medium tracking-widest uppercase text-sm mb-3">
            Visit Us
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-deli-green-dark mb-4">
            Find Us on 5th Avenue
          </h2>
          <p className="text-deli-text-light">
            {businessInfo.address.note} — you can&apos;t miss us!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden border border-deli-border h-80 lg:h-full min-h-[320px]"
          >
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="5th Ave Deli Location Map"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Address */}
            <div>
              <h3 className="font-heading text-xl font-semibold text-deli-green-dark mb-2">
                Address
              </h3>
              <p className="text-deli-text-light leading-relaxed">
                {businessInfo.address.street}
                <br />
                {businessInfo.address.city}, {businessInfo.address.state}{" "}
                {businessInfo.address.zip}
                <br />
                <span className="text-sm italic">
                  ({businessInfo.address.note})
                </span>
              </p>
            </div>

            {/* Hours */}
            <div>
              <h3 className="font-heading text-xl font-semibold text-deli-green-dark mb-2">
                Hours
              </h3>
              <div className="space-y-1">
                {businessInfo.hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex justify-between text-sm border-b border-deli-border/50 py-1.5 last:border-0"
                  >
                    <span className="font-medium text-deli-text">{h.day}</span>
                    <span className="text-deli-text-light">{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-heading text-xl font-semibold text-deli-green-dark mb-2">
                Contact
              </h3>
              <div className="space-y-2">
                <a
                  href={`tel:${businessInfo.phone.replace(/[^0-9]/g, "")}`}
                  className="flex items-center gap-3 text-deli-text-light hover:text-deli-green transition-colors"
                >
                  <svg className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-sm">{businessInfo.phone}</span>
                </a>
                <a
                  href={`mailto:${businessInfo.email}`}
                  className="flex items-center gap-3 text-deli-text-light hover:text-deli-green transition-colors"
                >
                  <svg className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm">{businessInfo.email}</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
