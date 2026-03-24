"use client";

import { motion } from "framer-motion";
import { reviews, businessInfo } from "@/lib/data";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={`h-5 w-5 ${i < Math.floor(rating) ? "text-deli-gold" : i < rating ? "text-deli-gold" : "text-deli-border"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-deli-gold font-medium tracking-widest uppercase text-sm mb-3">
            What People Say
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-deli-green-dark mb-6">
            Loved by Locals & Visitors
          </h2>

          {/* Rating badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href={businessInfo.yelp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-full bg-cream px-6 py-3 border border-deli-border hover:border-deli-green/30 transition-colors"
            >
              <div>
                <p className="text-xs text-deli-text-light font-medium">Yelp</p>
                <div className="flex items-center gap-2">
                  <StarRating rating={businessInfo.yelp.rating} />
                  <span className="text-sm font-semibold text-deli-text">
                    {businessInfo.yelp.rating}
                  </span>
                </div>
                <p className="text-xs text-deli-text-light">
                  {businessInfo.yelp.reviews} reviews
                </p>
              </div>
            </a>
            <a
              href="https://www.google.com/maps/search/5th+Avenue+Deli+%26+Catering+Carmel-by-the-Sea+CA"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-full bg-cream px-6 py-3 border border-deli-border hover:border-deli-green/30 transition-colors"
            >
              <div>
                <p className="text-xs text-deli-text-light font-medium">Google</p>
                <div className="flex items-center gap-2">
                  <StarRating rating={businessInfo.google.rating} />
                  <span className="text-sm font-semibold text-deli-text">
                    {businessInfo.google.rating}
                  </span>
                </div>
              </div>
            </a>
            <a
              href={businessInfo.tripAdvisor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-full bg-cream px-6 py-3 border border-deli-border hover:border-deli-green/30 transition-colors"
            >
              <div>
                <p className="text-xs text-deli-text-light font-medium">TripAdvisor</p>
                <div className="flex items-center gap-2">
                  <StarRating rating={businessInfo.tripAdvisor.rating} />
                  <span className="text-sm font-semibold text-deli-text">
                    {businessInfo.tripAdvisor.rating}
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Review quotes */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reviews.map((review, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-cream rounded-xl p-6 border border-deli-border/50"
            >
              <svg
                className="h-8 w-8 text-deli-green/20 mb-3"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
              </svg>
              <p className="text-deli-text leading-relaxed text-sm mb-4">
                &ldquo;{review.quote}&rdquo;
              </p>
              <cite className="not-italic text-xs text-deli-text-light font-medium">
                {review.author && <span className="text-deli-text">{review.author}</span>}
                {review.author && " · "}{review.source}
              </cite>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
