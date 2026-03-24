"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream px-4">
      <div className="text-center max-w-md">
        <h1 className="font-heading text-4xl font-bold text-deli-green-dark mb-4">
          Something went wrong
        </h1>
        <p className="text-deli-text-light mb-8">
          We&apos;re sorry about that. Please try again, or give us a call at{" "}
          <a
            href="tel:8316252688"
            className="underline hover:text-deli-green"
          >
            (831) 625-2688
          </a>
          .
        </p>
        <button
          onClick={reset}
          className="inline-block rounded-full bg-deli-green px-8 py-3 text-sm font-semibold text-white hover:bg-deli-green-light transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
