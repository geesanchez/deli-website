"use client";

import { useState } from "react";
import { Pause, Play } from "lucide-react";
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

function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
  return (
    <blockquote className="w-[320px] sm:w-[380px] shrink-0 bg-cream rounded-xl p-6 border border-deli-border/50">
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
    </blockquote>
  );
}

export default function Reviews() {
  const [paused, setPaused] = useState(false);

  return (
    <section aria-labelledby="reviews-heading" className="py-20 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-deli-brown font-medium tracking-widest uppercase text-sm mb-3">
            What People Say
          </p>
          <h2 id="reviews-heading" className="font-heading text-4xl sm:text-5xl font-bold text-deli-green-dark mb-6">
            Loved by Locals &amp; Visitors
          </h2>

          {/* Rating badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href={businessInfo.yelp.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Yelp — ${businessInfo.yelp.rating} stars, ${businessInfo.yelp.reviews} reviews (opens in new tab)`}
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
              aria-label={`Google — ${businessInfo.google.rating} stars (opens in new tab)`}
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
              aria-label={`TripAdvisor — ${businessInfo.tripAdvisor.rating} stars (opens in new tab)`}
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
      </div>

      {/* Marquee scroll */}
      <div role="region" aria-roledescription="carousel" aria-label="Customer reviews" className="relative">
        <div className="flex justify-end max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-3">
          <button
            onClick={() => setPaused(!paused)}
            aria-label={paused ? "Play review carousel" : "Pause review carousel"}
            className="p-2 rounded-full border border-deli-border hover:border-deli-green/30 text-deli-text-light hover:text-deli-green transition-colors"
          >
            {paused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
          </button>
        </div>
        <div className={`flex gap-6 animate-marquee ${paused ? "[animation-play-state:paused]" : "hover:[animation-play-state:paused]"}`}>
          {reviews.map((review, i) => (
            <ReviewCard key={`a-${i}`} review={review} />
          ))}
          {/* Duplicate for seamless loop */}
          {reviews.map((review, i) => (
            <ReviewCard key={`b-${i}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
