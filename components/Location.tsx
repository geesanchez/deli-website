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
    phone: "",
    type: "General Inquiry",
    message: "",
    website: "", // honeypot field — should remain empty for real users
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", type: "General Inquiry", message: "", website: "" });
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please call us at (831) 625-2688.");
    }
  }

  const inputClasses =
    "w-full rounded-lg border border-deli-border bg-white px-4 py-2.5 text-sm text-deli-text placeholder:text-deli-text-light/60 focus:border-deli-green focus:ring-1 focus:ring-deli-green outline-none transition-colors";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-16"
    >
      <div className="text-center mb-8">
        <h3 className="font-heading text-2xl sm:text-3xl font-bold text-deli-green-dark mb-2">
          Send Us a Message
        </h3>
        <p className="text-deli-text-light text-sm">
          Questions about catering, box lunches, or gift baskets? We&apos;d love to hear from you.
        </p>
      </div>

      {status === "success" ? (
        <div className="mx-auto max-w-2xl rounded-2xl border border-deli-green/30 bg-deli-green/5 p-8 text-center">
          <svg
            className="mx-auto mb-4 h-12 w-12 text-deli-green"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h4 className="font-heading text-xl font-semibold text-deli-green-dark mb-2">
            Message Sent!
          </h4>
          <p className="text-deli-text-light text-sm">
            Thank you for reaching out. We&apos;ll get back to you soon!
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-4 text-sm font-medium text-deli-green hover:text-deli-green-dark transition-colors underline underline-offset-2"
          >
            Send another message
          </button>
        </div>
      ) : (
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
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className={inputClasses}
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-sm font-medium text-deli-text mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={inputClasses}
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="contact-phone" className="block text-sm font-medium text-deli-text mb-1">
                Phone <span className="text-deli-text-light/60 text-xs">(optional)</span>
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(831) 555-1234"
                className={inputClasses}
              />
            </div>
            <div>
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
          </div>

          <div className="mb-6">
            <label htmlFor="contact-message" className="block text-sm font-medium text-deli-text mb-1">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us how we can help..."
              className={inputClasses + " resize-none"}
            />
          </div>

          {/* Honeypot field — hidden from real users, catches bots */}
          <div
            aria-hidden="true"
            style={{ position: "absolute", left: "-9999px", opacity: 0 }}
          >
            <label htmlFor="contact-website">Website</label>
            <input
              id="contact-website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={formData.website}
              onChange={handleChange}
            />
          </div>

          {status === "error" && (
            <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              {errorMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full rounded-lg bg-deli-green px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-deli-green-dark focus:ring-2 focus:ring-deli-green focus:ring-offset-2 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "submitting" ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}
    </motion.div>
  );
}
