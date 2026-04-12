"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { businessInfo } from "@/lib/data";

const inquiryTypes = [
  "General Inquiry",
  "Catering Request",
  "Box Lunch Order",
  "Gift Basket Inquiry",
] as const;

export default function Location() {
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3203.8!2d-121.9233!3d36.5558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808de45270a8775b%3A0x91d4daa9e41420a0!2s5th%20Avenue%20Deli%20%26%20Catering!5e0!3m2!1sen!2sus!4v1";

  return (
    <section id="location" aria-labelledby="location-heading" className="py-12 bg-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-deli-brown font-medium tracking-widest uppercase text-sm mb-3">
            Visit Us
          </p>
          <h2 id="location-heading" className="font-heading text-4xl sm:text-5xl font-bold text-deli-green-dark mb-4">
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
            className="rounded-2xl overflow-hidden border border-deli-border h-64 md:h-80 lg:h-full lg:min-h-[400px]"
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
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contact Form */}
        <ContactForm />
      </div>
    </section>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "General Inquiry",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`${formData.type} from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nInquiry Type: ${formData.type}\n\n${formData.message}`
    );
    window.location.href = `mailto:${businessInfo.email}?subject=${subject}&body=${body}`;
  }

  const inputClasses =
    "w-full rounded-lg border border-deli-border bg-white px-4 py-2.5 text-sm text-deli-text placeholder:text-deli-text-light/60 focus:border-deli-green focus:ring-1 focus:ring-deli-green outline-none transition-colors";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-12"
    >
      <div className="text-center mb-8">
        <h3 className="font-heading text-2xl sm:text-3xl font-bold text-deli-green-dark mb-2">
          Send Us a Message
        </h3>
        <p className="text-deli-text-light text-sm">
          Questions about catering, box lunches, or gift baskets? Fill out the form and your email app will open with your message ready to send.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-2xl rounded-2xl border border-deli-border bg-white p-6 sm:p-8 shadow-sm"
      >
        <div className="grid sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="contact-name" className="block text-sm font-medium text-deli-text mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              aria-required="true"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className={inputClasses}
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="block text-sm font-medium text-deli-text mb-1">
              Your Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={inputClasses}
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="contact-type" className="block text-sm font-medium text-deli-text mb-1">
            Inquiry Type
          </label>
          <select
            id="contact-type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className={inputClasses}
          >
            {inquiryTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-6">
          <label htmlFor="contact-message" className="block text-sm font-medium text-deli-text mb-1">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            aria-required="true"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us how we can help..."
            className={inputClasses + " resize-none"}
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-deli-green px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-deli-green-dark focus:ring-2 focus:ring-deli-green focus:ring-offset-2 transition-colors"
        >
          Open Email to Send
        </button>
      </form>
    </motion.div>
  );
}
